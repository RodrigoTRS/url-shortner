import { shortenUrl } from "@/api/shorten-url";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateUrl } from "@/store/url-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const urlInputSchema = z.object({
    url: z.string().url("You must provide a valid URL."),
})

type UrlInputData = z.infer<typeof urlInputSchema>

export function LandingPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isSubmitting,
            errors
        }
    } = useForm<UrlInputData>({
        resolver: zodResolver(urlInputSchema)
    })

    let axiosError = {
        hasError: false,
        message: ""
    }

    async function handleURLShorten(data: UrlInputData) {
        try {
            reset()
            const shortnedUrl = await shortenUrl(data.url)
            dispatch(updateUrl(shortnedUrl))
            navigate("/url")
        } catch(error) {
            throw new Error("Failed to connect to server.")
        }
    }

    return (
        <>
            <Helmet
                title="Home"
            />
            <div className="flex flex-col items-center justify-center gap-2 text-center">
                <h1 className="text-2xl md:text-4xl">
                    URL Shortner
                </h1>
                <p className="text-lg font-medium text-muted-foreground">
                    Insert an URL below to be shortned
                </p>
            </div>

            <div className="flex flex-col w-full max-w-[640px] gap-4">
                <form
                    onSubmit={handleSubmit(handleURLShorten)}
                    className="flex gap-2"
                    >
                    <div className="flex items-center p-2 gap-2 w-full bg-muted rounded-lg border border-slate-300 dark:border-slate-700">
                        <Input
                            className="bg-transparent p-6 h-12 border-0 text-md md:text-lg"
                            {...register("url")}
                            />
                        <Button
                            type="submit"
                            className="p-6 text-md md:text-lg text-white"
                            disabled={isSubmitting}
                            >
                            Submit
                        </Button>
                    </div>
                </form>
                {errors.url && (
                    <span className="col-span-3 text-red-400">
                        {errors.url.message}
                    </span>
                )}

                {axiosError.hasError && (
                    <span className="col-span-3 text-red-400">
                        {axiosError.message}
                    </span>
                )}
            </div>
        </>
    )
}
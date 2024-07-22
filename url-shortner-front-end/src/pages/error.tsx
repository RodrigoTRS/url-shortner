import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function Error() {
    return (
        <>
            <Helmet
                title="Error"
            />
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <h1 className="text-2xl md:text-4xl">
                        You haven't generated an url yet.
                    </h1>
                    <p className="text-lg font-medium text-muted-foreground">
                        Please click on the button below to return to home.
                    </p>
                </div>
                <Button className="text-white">
                    <Link to="/">
                        Return to home
                    </Link>
                </Button>
            </div>
        </>
    )
}
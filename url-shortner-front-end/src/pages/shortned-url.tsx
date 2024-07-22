import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store";
import { CheckCircleIcon, Copy } from "lucide-react";
import clipboardCopy from "clipboard-copy";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


export function ShortenedUrl() {
    
    const generatedUrl = useAppSelector(state => state.url.generatedUrl);
    if (generatedUrl.length == 0) throw Error

    function handleCopy(text: string) {
        clipboardCopy(text)
    };

    return (
        <>
            <Helmet
                title="Link"
            />
            <div className="flex flex-col w-full items-center justify-center gap-10 max-w-[720px]">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-2xl md:text-4xl">
                        Here's your new URL
                    </h1>
                    <p className="text-lg font-medium text-muted-foreground text-center">
                        Click on the button in the left to copy the url to your clipboard.
                    </p>
                </div>

                <div className="bg-muted p-6 h-16 rounded-lg flex items-center gap-8 w-full">

                    <p className="text-muted-foreground w-full" id="url">{generatedUrl}</p>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleCopy(generatedUrl)}
                                >
                                <Copy className="h-5 w-5"/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-300"/>
                            <p>Copied to clipboard</p>
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="flex w-full items-center justify-between">
                    <Button variant="secondary" size="lg" className="text-md md:text-lg" asChild>
                        <Link to="/">
                                Generate another url
                        </Link>
                    </Button>

                    <Button className="text-white text-md md:text-lg" size="lg" asChild>
                        <Link to={generatedUrl} target="_blank" rel="noopener noreferrer">
                            Access url
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    );
}

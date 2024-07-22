import { DefaultLayout } from "./layouts/default-layout";
import { LandingPage } from "./pages/landing-page"
import { createBrowserRouter } from "react-router-dom";
import { ShortenedUrl } from "./pages/shortned-url";
import { Error } from "./pages/error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/url",
                element: <ShortenedUrl />,
                errorElement: <Error />
            }
        ]
    }
])
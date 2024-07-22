import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
            <Header />
            <div className="flex p-4 flex-col items-center justify-center">
                <div className="flex flex-col w-full max-w-[1120px] items-center mt-24 gap-8">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}
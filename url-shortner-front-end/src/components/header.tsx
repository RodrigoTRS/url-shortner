import { Link2 } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="flex p-4 items-center justify-center border-b dark:border-slate-800">
            <div className="flex w-full max-w-[1120px] items-center justify-between">
                <Link to="/">
                    <Link2 className="w-10 h-10 text-primary"/>
                </Link>
                <ModeToggle />
            </div>
        </header>
    )
}
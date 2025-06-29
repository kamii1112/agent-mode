import { icons } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
    title: string;
    icon?: React.ReactNode;
}

export function Header({ title, icon }: HeaderProps) {
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsCompact(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full left-0 right-0 z-50 bg-gray-100 transition-all duration-100 ease-in-out ${isCompact ? "py-2" : "py-4"
                }`}
        >
            <div className="px-4 w-full transition-all duration-100 ease-in-out flex items-center justify-between">
                <div
                    className={`transition-all w-full duration-100 ease-in-out flex items-center justify-between ${isCompact ? "text-md" : "text-xl"
                        } font-bold`}
                >
                    <span> {title}</span>
                    <span>{icon}</span>
                </div>
            </div>
        </header>
    );
}

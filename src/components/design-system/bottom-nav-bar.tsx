import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export type NavItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
  value: string;
  disabled?: boolean;
};

interface BottomNavBarProps {
  items: NavItem[];
  active: string;
  setActive: (tab: string) => void;
  activeClassName?: string;
  inactiveClassName?: string;
}

export function BottomNavBar({
  items,
  active,
  setActive,
  activeClassName = "text-blue-600 bg-blue-100",
  inactiveClassName = "text-gray-500",
}: BottomNavBarProps) {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
            setShowNav(false); // scroll down
          } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 10) {
            setShowNav(true); // scroll up
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-white shadow md:hidden p-2 transition-transform duration-300 ease-in-out mx-4 mb-4 rounded-3xl",
        showNav ? "translate-y-0" : "translate-y-17"
      )}
    >
      <ul className="flex justify-around">
        {items.map((item) => (
          <li
            key={item.label}
            className={cn(
              "flex flex-col items-center justify-center px-4 py-2 text-sm cursor-pointer",
              active === item.value ? activeClassName : inactiveClassName
            )}
            onClick={() => {
              setActive(item.value);
              navigate(item.href);
            }}
          >
            <div className="w-5 h-5">{item.icon}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

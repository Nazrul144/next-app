"use client";
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Playfair_Display, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

// Font using:
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false); // ← control Popover manually

  const navigationLinks = [
    { title: "Home", path: "/" },
    { title: "Features", path: "/feature" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const handleLinkClick = () => setOpen(false); // ← close dropdown after click

  return (
    <div className={`text-lg ${playfair.className} fixed top-0 left-0 w-full border-b  z-50`}>
      <header className="border-b px-4 md:px-12">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button className="group size-8 md:hidden" variant="ghost" size="icon">
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>

              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={handleLinkClick} // ← auto close after navigation
                        className={`${playfair.className} ${
                          pathName === link.path
                            ? "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent font-bold"
                            : ""
                        }`}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            {/* Main nav */}
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <div>
                  <Link href={"/"}>
                    <Image className="hidden lg:block" src={"/logo.svg"} width={50} height={50} alt="NextApp" />
                  </Link>
                </div>
                <div>
                  <h1
                    className={`${roboto.className} text-2xl lg:text-4xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent font-extrabold hidden lg:block`}
                  >
                    NextApp
                  </h1>
                </div>
              </div>
              <NavigationMenu className="max-md:hidden">
                <NavigationMenuList className="gap-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`relative px-2 py-1 rounded-lg overflow-hidden
                     after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                     after:bg-gradient-to-r after:from-purple-600 after:via-pink-600 after:to-orange-500
                     after:transition-all after:duration-300 hover:after:w-full
                     ${
                       pathName === link.path
                         ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 after:w-full"
                         : "text-gray-800 dark:text-gray-200"
                     }
                   `}
                    >
                      {link.title}
                    </Link>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="min-w-[80px]  lg:px-2 py-2 text-sm tracking-wide text-white capitalize rounded-md sm:mx-2 sm:order-2 sm:w-auto
             bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
             transition-all duration-300 transform hover:scale-105 hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-purple-300 text-center"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="min-w-[100px] px-2 lg:px-3 py-2 text-sm tracking-wide text-white text-center capitalize rounded-md sm:mx-2 sm:order-2 sm:w-auto
             bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
             transition-all duration-300 transform hover:scale-105 hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Get started
            </Link>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

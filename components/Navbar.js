"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      // cleanup
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileOpen(true);
  };

  return (
    <nav
      className={`flex justify-between py-3 items-center fixed top-0 left-0 right-0 px-10 bg-white ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="">
        <h1 className="text-2xl flex gap-2 font-bold">
          <Image src="/logo.png" alt="alt" width={30} height={30} />
          Daniel Jhon
        </h1>
      </div>
      <ul className="hidden md:flex lg:flex space-x-10 uppercase text-sm font-medium ">
        <li
          onClick={() => scrollToSection("about")}
          className="hover:text-zinc-500 hover:underline underline-offset-4 cursor-pointer duration-300"
        >
          About Me
        </li>
        <li
          onClick={() => scrollToSection("skills")}
          className="hover:text-zinc-500 hover:underline underline-offset-4 cursor-pointer duration-300"
        >
          Skills
        </li>
        <li
          onClick={() => scrollToSection("projects")}
          className="hover:text-zinc-500 hover:underline underline-offset-4 cursor-pointer duration-300"
        >
          Projects
        </li>
        <li
          onClick={() => scrollToSection("contact")}
          className="hover:text-zinc-500 hover:underline underline-offset-4 cursor-pointer duration-300"
        >
          Contact
        </li>
      </ul>

      {/* Mobile */}
      <div className="lg:hidden md:hidden block">
        <Sheet>
          <SheetTrigger asChild>
            <AlignRight />
          </SheetTrigger>
          <SheetContent>
            <div className="py-4">
              <ul className="grid gap-4 py-4 uppercase text-xl font-medium ">
                <li
                  onClick={() => scrollToSection("about")}
                  className="hover:text-zinc-500 hover:underline underline-offset-4 cursor-pointer duration-300"
                >
                  About Me
                </li>
                <li
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-zinc-500 hover:underline underline-offset-4 cursor-pointer duration-300"
                >
                  Skills
                </li>
                <li
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-zinc-500 hover:underline underline-offset-4 cursor-pointer duration-300"
                >
                  Projects
                </li>
                <li
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-zinc-500 hover:underline underline-offset-4 cursor-pointer duration-300"
                >
                  Contact
                </li>
              </ul>
            </div>
            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

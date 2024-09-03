"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { SparklesCore } from "../ui/sparkles";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="text-gray-300 font-medium bg-gray-900 dark:bg-gray-900/35 body-font fixed top-0 w-full shadow-md z-50 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30">
      <div className="container mx-auto flex flex-wrap p-3 sm:p-4 md:p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap justify-center items-center text-sm sm:text-base md:ml-auto">
          <Link
            href="/"
            className={`mr-4 sm:mr-6 ${pathname === "/" ? "text-cyan-400" : "hover:text-white"
              }`}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`mr-4 sm:mr-6 ${pathname === "/about" ? "text-cyan-400" : "hover:text-white"
              }`}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className={`mr-4 sm:mr-6 ${pathname === "/projects" ? "text-cyan-400" : "hover:text-white"
              }`}
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className={`${pathname === "/contact" ? "text-cyan-400" : "hover:text-white"
              }`}
          >
            CONTACT
          </Link>
        </nav>

        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-2 md:mb-0">
          <span className="ml-2 text-lg sm:text-xl xl:block lg:hidden">
            <h1 className="font-bold text-lg sm:text-xl tracking-widest text-center text-white relative z-20">
              Harsh Tyagi
            </h1>
            <div className="relative">
              {/* Gradients */}
              <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[1px] sm:h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px sm:h-[1px] w-3/4" />
              <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] sm:h-[5px] w-3/4 blur-sm" />
              <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px sm:h-[1px] w-3/4" />
            </div>
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.8}
              particleDensity={1200}
              className="w-16 h-2"
              particleColor="#FFFFFF"
            />
          </span>
        </a>

        {/* Resume Button */}
        <div className="lg:w-2/5 mt-3 sm:mt-0 inline-flex lg:justify-end ml-3 sm:ml-5 lg:ml-0">
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1NwdbHQ3JbtANZuwp0ojL98B-LC3tbcOE/view?usp=drive_link"
            }
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
            >
              <div className="flex justify-center items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 sm:size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>RESUME</span>
              </div>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

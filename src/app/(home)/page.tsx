"use client";
import { useEffect } from "react";
import React from "react";
import { Spotlight } from "../../components/ui/Spotlight";
import { FlipWords } from "../../components/ui/flip-words";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  useEffect(() => {
    // Force dark mode by adding 'dark' class to the root HTML element
    window.scrollTo(0, 0);
    document.documentElement.classList.add('dark');
  }, []);

  const words = ["Coder", "Programmer", "Developer"];
  const intro =
    "✨ A passionate self - taught software developer and lifelong learner, I specialize in Full Stack JavaScript development and love working with cutting - edge tools and technologies🚀";

  return (
    <div className="dark:bg-black dark:text-white">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <Spotlight className="-top-40 left-0 md:left-0 md:-top-200" fill="blue" />

      {/* Inside */}
      <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-black dark:bg-black relative overflow-hidden">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h3 className="mt-32 sm:mt-0 text-center text-white font-medium text-xl tracking-wider">
            Hi there!
          </h3>
          <h1 className="mt-10 text-5xl md:text-6xl lg:text-8xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 dark:from-blue-400 dark:via-teal-400 dark:to-green-400">
            I'm Harsh{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 border-b-4 border-cyan-600 hover:border-teal-500 transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Tyagi
            </span>
            <br />
          </h1>

          <div className="mt-10 sm:mt-10 tracking-wider text-neutral-300/80 max-w-3xl text-center mx-auto capitalize">
            <TextGenerateEffect words={intro} />
          </div>

          <div className="mt-10 text-center sm:p-1 sm:mt-8 tracking-wider mx-auto font-normal text-neutral-400">
            <FlipWords words={words} /> <br />
          </div>

          {/* Know More Button */}
          <div className="flex justify-center items-center mt-14">
            <Link href={"/about"}>
              <Button
                borderRadius="1.75rem"
                className="
              bg-transparent dark:bg-slate-900 
              text-cyan-400 
              border border-cyan-400 dark:border-cyan-600
              font-medium tracking-wider 
              px-6 py-2
              transition-all duration-300 ease-in-out
              hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500
              hover:text-white
              hover:border-transparent
              hover:shadow-lg hover:shadow-cyan-500/50
              transform hover:-translate-y-1
              "
              >
                Know More!
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Radial Gradient for Faded Look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <BackgroundBeams />
    </div>
  );
}

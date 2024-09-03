"use client";
import { Button } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import React from "react";
import Certification from "../components/Certification";
import Skills from "../components/Skills"
import Services from "../components/Services";



const page = () => {
  const words = [
    {
      text: "About",
    },
    {
      text: "Me :",
    },
  ];


  return (

    <div className="min-h-screen mt-48 sm:mt-20">
      <div className="about flex flex-col-reverse justify-center sm:flex-row  h-full m-4 sm:p-20 sm:mx-10">
        <div className="left w-full sm:w-[65%] ">
          <div className=" sm:m-8 p-4">
            {/* Typing */}
            <div>
              <TypewriterEffectSmooth words={words} />
            </div>

            {/* Main Content */}
            <div>
              <h1 className="font-bold text-[17px] sm:text-xl tracking-wider text-gray-300">
                I'm a MERN Stack and Next.js developer passionate about creating high-quality websites. With a strong grasp of both frontend and backend development, I'm eager to apply my skills in a professional setting. As a quick learner, I'm confident that I can be a valuable asset to any web development team.
              </h1>
            </div>

            {/* Buttons */}
            <div className="mt-8">
              <Link href={"https://www.linkedin.com/in/tyagiharsh607/ "} target="_blank">
                <Button
                  borderRadius="1.75rem"
                  className="bg-[rgba(0,0,0,0.5)] text-white border-none rounded-full py-2 px-6 font-medium tracking-wider text-base shadow-[0_4px_6px_-1px_rgba(10,100,130,0.6),0_2px_4px_-1px_rgba(10,100,130,0.6)] hover:shadow-[0_4px_6px_-1px_rgba(10,100,130,1),0_2px_4px_-1px_rgba(10,100,130,1)] transition-all duration-300 ease-in-out hover:scale-110"
   >
                  Follow Me !
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="rightside flex justify-center items-center sm:w-[30%] ">
          <div className="right border-2 border-blue-300/35 flex justify-center items-center"></div>
        </div>
      </div>

      {/* SKILLS */}

      <div className=" sm:p-4 sm:m-4 bg-transparent">

        <h1 className="my-10 py-2 text-4xl md:text-5xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-400/40 bg-opacity-50 capitalize">
          My Skills !
        </h1>
        <Skills />


      </div>

      {/* Services */}
      <div className="mt-20">
        <h1 className="my-10 py-2 text-4xl md:text-5xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-400/40 bg-opacity-50 capitalize">
          What I Know !
        </h1>
        <Services />
      </div>

      {/* Certifications */}
      <div className="mt-[8rem]">
        <h1 className="my-10 py-2 text-4xl md:text-5xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-400/40 bg-opacity-50 capitalize">
          CERTIFICATES !
          <br />
        </h1>
        <Certification />
      </div>

      {/* My Work */}

      <div className="text-center mb-10">
        <Link href={"/projects"}>
          <Button
            borderRadius="1.75rem"
            className="bg-[rgba(0,0,0,0.5)] text-white border-none rounded-full py-2 px-6 font-medium tracking-wider text-base shadow-[0_4px_6px_-1px_rgba(10,100,130,0.6),0_2px_4px_-1px_rgba(10,100,130,0.6)] hover:shadow-[0_4px_6px_-1px_rgba(10,100,130,1),0_2px_4px_-1px_rgba(10,100,130,1)] transition-all duration-300 ease-in-out hover:scale-110"
     >
            My Work !
          </Button>
        </Link>
      </div>


    </div>
  );
};

export default page;

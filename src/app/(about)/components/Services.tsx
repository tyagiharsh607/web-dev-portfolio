import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { PinContainer } from '@/components/ui/3d-pin';
import { Vortex } from '@/components/ui/vortex';

const Services = () => {
    const data = [
        {
            id: 4,
            title: "Frontend Development",
            description: `As a Frontend Developer, I specialize in crafting engaging, user-friendly interfaces using Next.js, React, Tailwind CSS, HTML, CSS, and JavaScript. I focus on building responsive designs that ensure seamless user experiences while optimizing web performance for faster load times and enhanced interactivity.`,
            icon: <FaLaptopCode className="h-9 w-9 text-gray-500" />,
           
        },

        {
            id: 5,
            title: "Backend Development",
            description: ` As a Backend Developer, I design and implement robust server-side solutions using Node.js, Express.js, and MongoDB. I focus on creating efficient APIs, managing databases, and ensuring secure, scalable architecture to support seamless frontend interactions and optimize overall application performance.`,
            icon: <FaServer className="h-8 w-8 text-gray-500" />,
           
        },

        {
            id: 6,
            title: "Full Stack Development",
            description: `As a Full Stack Developer, I build comprehensive web apps using MERN Stack-MongoDB, Express.js, React, and Node.js. My expertise covers both frontend and backend development, enabling me to create fully integrated, responsive, and performance-optimized applications that deliver a complete user experience.`,
            icon: <FaJava className="h-9 w-9 text-gray-500" />,
           
        },
    ];
    return (
        <div className='overflow-hidden'>

            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <div className='flex flex-col lg:flex-row gap-10   justify-center'>
                    {data.map(item => (<>
                        <div className=" w-full flex items-center justify-center " >
                            <PinContainer className=' ' >
                                {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-0 sm:p-10 bg-white dark:bg-gray-900"> */}
                                <div className="flex basis-full flex-col  p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem]  ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        {item.title}
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            {item.description}
                                        </span>
                                    </div>
                                    {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                                </div>
                                {/* </BackgroundGradient> */}
                            </PinContainer>
                        </div >
                    </>))}
                </div>
            </Vortex>

        </div>
    )
}

export default Services

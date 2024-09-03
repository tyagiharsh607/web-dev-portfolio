import React from 'react';

import {
    SiJavascript, SiCplusplus, SiPython, SiC, SiTypescript, SiMysql,
    SiNextdotjs, SiHtml5, SiCss3, SiReact, SiTailwindcss,
    SiBootstrap, SiFramer, SiMui,
    SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiVisualstudiocode,
    SiVercel, SiNetlify, SiChakraui, SiPostman, SiLeetcode, SiGeeksforgeeks, SiCodeforces, SiCodechef

} from 'react-icons/si';
import {FaHackerrank} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { WobbleCard } from "@/components/ui/wobble-card";
import { Vortex } from '@/components/ui/vortex';

// Define types for our data structure
type TechItem = {
    name: string;
    icon: IconType | (() => JSX.Element);
};

type Category = {
    title: string;
    items: TechItem[];
};

const categories: Category[] = [
    {
        title: "Languages",
        items: [
            { name: "JavaScript", icon: SiJavascript },
            { name: "C++", icon: SiCplusplus },
            { name: "Python", icon: SiPython },
            { name: "C", icon: SiC },
            { name: "TypeScript", icon: SiTypescript },
        ]
    },
    {
        title: "Frontend Technologies",
        items: [
            { name: "Next JS", icon: SiNextdotjs },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
            { name: "React JS", icon: SiReact },
        ]
    },
    {
        title: "UI Libraries",
        items: [
            { name: "Bootstrap", icon: SiBootstrap },
            { name: "MUI", icon: SiMui },
            { name: "Chakra UI", icon: SiChakraui },
            { name: "Framer Motion", icon: SiFramer },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ]
    },
    {
        title: "Backend Technologies",
        items: [
            { name: "Node JS", icon: SiNodedotjs },
            { name: "Express JS", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
            { name: "Postman", icon: SiPostman },
          
        ]
    },
    {
        title: "Development Tools",
        items: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "VS Code", icon: SiVisualstudiocode },
            { name: "Vercel", icon: SiVercel },
            { name: "Netlify", icon: SiNetlify },
        ]
    },
    {
        title: "DSA Platforms",
        items: [
            { name: "GeeksforGeeks", icon: SiGeeksforgeeks },
            { name: "LeetCode", icon: SiLeetcode },
            { name: "Codeforces", icon: SiCodeforces },
            { name: "CodeChef", icon: SiCodechef },
            { name: "HackerRank", icon: FaHackerrank },
        ]
    },
];


type TechCardProps = {
    title: string;
    items: TechItem[];
};

const TechCard: React.FC<TechCardProps> = ({ title, items }) => (
    
    <WobbleCard className=" rounded-lg p-4 shadow-lg" >
    <div className=" rounded-lg p-4 shadow-lg">
        <h3 className="text-blue-200 text-xl font-bold mb-4 text-center">{title}</h3>
        <div className="flex flex-wrap justify-center gap-10">
            {items.map(({ name, icon: Icon }) => (
                <div
                    key={name}
                    className="relative group flex flex-col items-center"
                >
                    <Icon className="w-14 h-14 mb-2 text-cyan-700 hover:text-cyan-400 transition-all duration-300 icon-wobble"  />
                    {/* Bouncy Tooltip with Background */}
                    <span className="absolute bottom-full mb-2 inline-block px-3 py-1 text-xs text-white bg-gradient-to-r bg-cyan-700 rounded-lg transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out shadow-lg whitespace-nowrap">
                        {name}
                    </span>

                </div>
            ))}
        </div>
    </div>
        {/* <BackgroundBeams /> */}
    </WobbleCard>
);






const Skills: React.FC = () => {
    return (
        <div className="overflow-hidden ">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
        <div className=" p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
                {categories.map((category) => (
                    <TechCard key={category.title} {...category} />
                ))}
            </div>
        </div>

        </Vortex >
        </div>
    );
};

export default Skills;
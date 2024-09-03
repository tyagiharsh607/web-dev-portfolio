import React from 'react';
import Image from 'next/image';
import projects from "../data/projects"
import { WobbleCard } from '@/components/ui/wobble-card';

const MyProjects: React.FC = () => {
    const { bestProjects } = projects as { bestProjects: Array<any> };

    return (
        <section id="projects" className="bg-black py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-16 text-center">My Projects</h2>
                <div className="space-y-16">
                    {bestProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`relative border border-white border-opacity-20 rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Subtle Background Animation */}
                            <div className="absolute w-full h-full top-0 left-0 z-0 flex items-center justify-center">
                                <div className="subtle-wavy-animation"></div>
                            </div>

                            {/* Project Image and Details */}
                            <div className="relative z-10 flex flex-col items-center justify-between bg-gradient-to-br from-white/10 via-transparent to-transparent backdrop-blur-md border border-white border-opacity-20 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 py-6 px-4 md:py-12 md:px-8">
                                {/* Lighting Effect Overlay */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/30 via-transparent to-blue-500/30 opacity-30 z-10"></div>

                                {/* Project Image */}
                                <div className="w-full md:w-1/2 max-w-[90%] h-60 relative z-10 mb-4 md:mb-0">
                                    
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={project.imgSrc}
                                            alt={project.title}
                                            layout="fill"  // Use fill to cover the container
                                            objectFit="cover"  // Ensures the image covers the container without distortion
                                            className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                </div>


                                {/* Project Details */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center  md:text-left p-6 relative z-20">
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-gray-300 mb-6">{project.description}</p>
                                    <div className="flex flex-row gap-4 mb-6">
                                        <a
                                            href={project.deployedUrl}
                                            className="text-blue-900 hover:text-blue-300 text-lg font-semibold"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Project &rarr;
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            className="text-green-900 hover:text-green-300 text-lg font-semibold"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Code &rarr;
                                        </a>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {project.skills.map((skill: { id: string; name: string; }) => (
                                            <span
                                                key={skill.id}
                                                className="bg-black/10 border border-white/10 rounded-md shadow-lg text-white text-xs font-medium px-4 py-2 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyProjects;

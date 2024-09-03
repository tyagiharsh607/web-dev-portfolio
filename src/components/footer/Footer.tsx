'use client'

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const Footer = () => {

  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/tyagiharsh607",
      target: "_blank",
      rel: "noopener noreferrer"

    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/tyagiharsh607/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/tyagiharsh607",
    },
  ];

  return (
    <footer className="bg-black text-gray-400 body-font ">
      <div className="container px-5 py-8 mx-auto flex items-center justify-between flex-col sm:flex-row">

        {/* Brand Name */}
        <div className="flex items-center text-white">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-400/40">
            HARSH <span className="border-b-2 border-blue-400">TYAGI</span>
          </span>
        </div>

        {/* Copyright Information */}
        <p className="text-sm mt-4 sm:mt-0 hidden sm:block">
          © 2024 Harsh Tyagi. All Rights Reserved.
        </p>

        {/* Social Media Links */}
        <div className="inline-flex mt-4 sm:mt-0">
       
          <FloatingDock
            items={links}
          />
        </div>


      </div>
    </footer>
  );
};

export default Footer;

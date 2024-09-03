"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React, { useEffect } from "react";
import dsa from "../../../../public/certificates/DSA using Python.jpg"
import fullstack from "../../../../public/certificates/Full Stack JS Course.jpg"
import js from "../../../../public/certificates/JS Course.jpg"
import python from "../../../../public/certificates/Python Course.jpg"
import responsive from "../../../../public/certificates/Responsive Web Development.jpg"
import sql from "../../../../public/certificates/SQL.jpg"

const Certification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const content = [
    {
      title: "Learn Data Structures & Algorithms Using Python for Freshers",
      link: "https://drive.google.com/file/d/17ckZudeLFS-OF-x8gyokp_ToFw0gs7gx/view?usp=drive_link",
      description:
        "I have completed the 'Learn Data Structures & Algorithms Using Python for Freshers' course on Udemy. This course covers fundamental data structures and algorithms using Python, providing a solid foundation for problem-solving and coding efficiency. It demonstrates my ability to apply algorithms and data structures in Python to tackle various programming challenges.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={dsa}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Data Structures & Algorithms in Python"
          />
        </div>
      ),
    },
    {
      title: "The Complete Full-Stack JS Course",
      link: "https://drive.google.com/file/d/1WjuTTfBzX0Vhjcxaaq38deEXVSCusE6f/view?usp=drive_link",
      description:
        "I have earned the 'The Complete Full-Stack JS Course' certificate from Udemy. This comprehensive course covers full-stack JavaScript development, including Node.js, Express.js, MongoDB, and React. It validates my skills in building and deploying full-stack web applications, demonstrating my ability to work with both frontend and backend technologies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={fullstack}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Full-Stack JS Course"
          />
        </div>
      ),
    },
    {
      title: "The Complete Python Course: Go from Beginner to Advanced",
      link: "https://drive.google.com/file/d/10J5mQJiixalHAGGDCn6Zbe-TPI9xpWOL/view?usp=drive_link",
      description:
        "I have completed 'The Complete Python Course: Go from Beginner to Advanced' on Udemy. This course provides a thorough understanding of Python programming, covering beginner to advanced topics. It demonstrates my proficiency in Python, including object-oriented programming, data manipulation, and developing complex applications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={python}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Complete Python Course"
          />
        </div>
      ),
    },
    {
      title: "Complete Responsive Web Development",
      link: "https://drive.google.com/file/d/1ufWAMQuF531mTVxH0bdN0ltTsFpGp20q/view?usp=drive_link",
      description:
        "I have earned the 'Complete Responsive Web Development' certificate from Udemy. This course covers the principles of responsive web design, including HTML, CSS, and modern frontend frameworks. It validates my ability to create adaptable and user-friendly web interfaces that work seamlessly across different devices and screen sizes.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={responsive}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Responsive Web Development"
          />
        </div>
      ),
    },
    {
      title: "Learn SQL for Beginners",
      link: "https://drive.google.com/file/d/1l5PmkSTfw66EX-8jqEcNSR4bANaDbyEN/view?usp=drive_link",
      description:
        "I have completed 'Learn SQL for Beginners' on Udemy. This course introduces SQL fundamentals, including database design, querying, and data manipulation. It showcases my skills in managing and interacting with databases, providing a solid foundation for working with relational database systems.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={sql}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="SQL for Beginners"
          />
        </div>
      ),
    },
  ];


  return (
    <div>
      <div className="sm:px-12 py-6">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Certification;

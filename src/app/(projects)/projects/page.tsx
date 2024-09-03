"use client";
import React from "react";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import MyProjects from "../components/MyProjects";

const page = () => {

  return (
    <>
      <TracingBeam className="min-h-screen relative">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">My Best Projects</h2>

        <MyProjects />
      </TracingBeam>


    </>
  );
};

export default page;

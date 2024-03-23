import React from "react";
import CardModel from "./CardModel";

const Projects = () => {
  return (
    <section className="my-20 " id="projects">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center  gap-2">
          <h1 className="text-2xl font-bold">Projects</h1>
          <div className="dot"></div>
        </div>
        <p className=" text-zinc-500 text-lg mb-10">
          The best projects i made through out my web developement career.
        </p>
      </div>
      <CardModel />
    </section>
  );
};

export default Projects;

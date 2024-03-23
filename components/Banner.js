"use client";

import Image from "next/image";
import { Facebook, Github, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="mt-[10rem] flex lg:flex-row md:flex-row flex-col items-center justify-center gap-20 container  "
      id="about"
    >
      <div className="w-full md:w-2/3 lg:w-2/3">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  text-primary font-bold tracking-wider">
          Daniel Jhon B. Bancale
        </h1>
        <p className="my-4 text-zinc-500 text-md lg:text-lg">
          An aspiring frontend web developer who's driven by a passion to create
          engaging and user-friendly web experiences. This passion for web
          development fuels my desire to constantly learn and grow, whether it's
          by tackling new challenges, exploring the latest technologies, or
          collaborating with other creative minds. I'm confident that my
          enthusiasm and dedication, combined with my growing skillset, will
          allow me to make a significant contribution to the field of web
          development.
        </p>
        <div className="flex lg:flex-row flex-col justify-between items-center mt-10">
          <div className="flex space-x-5">
            <div className="bg-primary text-center text-zinc-200 p-2 hover:bg-red-800 cursor-pointer duration-300 rounded-full">
              <Facebook />
            </div>
            <div className="bg-primary text-center text-zinc-200 p-2 hover:bg-red-800 cursor-pointer duration-300 rounded-full">
              <Github />
            </div>
            <div className="bg-primary text-center text-zinc-200 p-2 hover:bg-red-800 cursor-pointer duration-300 rounded-full">
              <Twitter />
            </div>
            <div className="bg-primary text-center text-zinc-200 p-2 hover:bg-red-800 cursor-pointer duration-300 rounded-full">
              <Instagram />
            </div>
          </div>
          <Button
            className="rounded flex gap-2 py-5 hover:bg-red-800 mt-10 lg:mt-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href="/DanielJhonBancale-Resume.pdf"
              download="DanielJhonBancale-Resume.pdf"
              className=""
            >
              Download CV
            </a>
            <ArrowRight
              size={20}
              className={`${
                isHovered
                  ? "translate-x-2 transition ease-in-out duration-300"
                  : ""
              }`}
            />
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src="/profile.png"
          alt="alt"
          width={400}
          height={300}
          className="bg-transparent object-cover shadow-lg rounded"
        />
      </div>
    </section>
  );
};

export default Banner;

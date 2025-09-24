import type { FC } from "react";
import Image from "next/image";
import porto from "@images/porto1.png";

const HeaderSection: FC = () => {
  return (
    <section className="mt-16 flex flex-col items-center justify-between px-4 text-center sm:px-6 md:mt-20 lg:mt-6 lg:h-screen lg:flex-row lg:text-left xl:mt-0">
      <div className="flex max-w-lg flex-col justify-center text-primary">
        <div className="flex items-center justify-center gap-5 pb-6 lg:justify-start">
          <h1
            className="text-lg font-semibold text-secondary sm:text-xl lg:text-2xl"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <span className="font-mono text-base font-normal text-accent sm:text-lg lg:text-xl">
              02.{" "}
            </span>
            About Me
          </h1>
          <div
            className="hidden h-[1px] w-32 bg-primary md:block md:w-96"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>

        <div className="flex flex-col gap-4 text-sm sm:text-base md:gap-5">
          <p data-aos="zoom-in-right">
            Hello! My real name is Ezra Athapaska, a Software Engineering
            student interested and experienced in Web Development, specializing
            in <span className="text-accent">Frontend Development</span> using
            JavaScript, React, and Tailwind CSS.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
            As an Informatics Engineering student, I have strong knowledge and
            expertise in Web programming and UI Design. I create user-friendly
            and visually captivating websites and applications.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
            I am constantly striving to improve my skills and knowledge through
            training and projects.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="300">
            And oh, there's a little twist – I'm also into the world of Mobile
            Apps, though it’s still like my fun side quest.
          </p>
        </div>
      </div>

      <div
        className="mt-10 flex justify-center lg:mt-0 lg:justify-end xl:pl-16"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="group relative h-[260px] w-[220px] sm:h-[300px] sm:w-[260px] md:h-[340px] md:w-[280px]">
          {/* Border glow */}
          <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-70 blur-md transition-all duration-700 group-hover:opacity-100"></div>

          {/* Frame dalam */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-lg"></div>

          {/* Foto */}
          <Image
            src={porto}
            alt="foto"
            fill
            className="rounded-2xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;

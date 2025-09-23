import type { FC } from "react";
import Image from "next/image";
import porto from "@images/porto1.png";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
      <div className="flex flex-col justify-center text-primary">
        <div className="flex items-center gap-5 pb-10">
          <h1
            className="text-xl font-semibold text-secondary lg:text-2xl"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <span className="font-mono text-lg font-normal text-accent lg:text-xl">
              02.{" "}
            </span>
            About Me
          </h1>
          <div
            className="h-[1px] w-32 bg-primary md:w-96"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
        <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
          <p data-aos="zoom-in-right">
            Hello! My real name is Ezra Athapaska, an Software Engineering
            student interested and experienced in Web Development, specializing
            in <span className="text-accent">Frontend Development</span> using
            JavaScript, React, and Tailwind CSS.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
            As an Informatics Engineering student, I have strong knowledge and
            expertise in Web programming and UI Design. I possess the ability to
            create user-friendly and visually captivating websites and
            applications.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
            I am constantly striving to improve my skills and knowledge. I
            believe that ongoing training and personal projects are key to
            success. I am committed to staying up-to-date with the latest
            developments in my field and continuously expanding my knowledge and
            skills.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="300">
            And oh, there's a little twist &#x2013; I'm also into the world of ,
            Mobile Apps though I confess I might not be diving into its depths
            just yet. It's like my side quest that adds a dash of excitement.
          </p>
        </div>
      </div>
      <div
        className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="group relative mx-auto h-[320px] w-[280px] lg:mx-0">
          {/* Border glow futuristik */}
          <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-70 blur-md transition-all duration-700 group-hover:opacity-100"></div>

          {/* Frame dalam biar ada depth */}
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

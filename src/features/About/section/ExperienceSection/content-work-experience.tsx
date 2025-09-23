import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import PHPIcon from "@icons/php.svg";
import laravelIcon from "@icons/laravel.svg";
import postmanIcon from "@icons/postman.png";
import webstormIcon from "@icons/webstorm.svg";
import expoIcon from "@icons/expo.svg";
import Image from "next/image";

export const ContentWorkExperience = () => {
  const datas = [
    {
      title:
        "PT. Satria Media Teknologi - Junior Progammer & frontend Developer",
      url: "https://www.linkedin.com/company/satriacorp/?originalSubdomain=id",
      company: "Satria Corp",
      date: "Februari 2025 - Present",
      description: (
        <p>
          I got a project to create a website for a film premiere gala and also
          created an event organizer website.{" "}
          <a
            href="https://github.com/ulinnajaaldi/gigih-3.0-fs-spotify"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            GoGatherly
          </a>{" "}
          I also created a job posting app for my project.{" "}
          <a
            href="https://github.com/ulinnajaaldi/gigih-3.0-fs-final-project"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            Primago
          </a>{" "}
          website utilizing the MERN technology stack.
        </p>
      ),
      techs: [
        {
          name: "bootstrap",
          icon: bootstrapIcon,
        },
        {
          name: "tailwind",
          icon: tailwindIcon,
        },
        {
          name: "React",
          icon: reactIcon,
        },
        {
          name: "expo",
          icon: expoIcon,
        },
        {
          name: "laravel",
          icon: laravelIcon,
        },
        {
          name: "PHP",
          icon: PHPIcon,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-primary">
      {datas.map((data, index) => (
        <div key={index}>
          <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
            {data.title}
            <span className="text-base text-accent">
              {" "}
              @
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline"
              >
                {data.company}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <div className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </div>
          <div className="mt-2">
            <h4 className="mb-1 font-medium">Technologies used</h4>
            <div className="flex flex-wrap gap-2">
              {data.techs.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-md bg-accent/10 p-1"
                  title={tech.name}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.icon}
                    width={28}
                    height={28}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

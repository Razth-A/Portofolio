import { useState } from "react";

export const ContentCertification = () => {
  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Course",
      name: "Digitalent",
      link: "https://digitalent.komdigi.go.id",
      certificate: [
        {
          name: "Data analytics",
          link: "https://digitalent.komdigi.go.id/pelatihan/8183",
        },
      ],
    },
    {
      type: "Course",
      name: "Komsos",
      link: "https://progate.com/",
      certificate: [
        {
          name: "Multimedia Development Skills",
          link: "https://drive.google.com/drive/folders/12iMZZ9NSfnUDItGhFmcgB3cRzqFOMIOW",
        },
      ],
    },
    {
      type: "Course",
      name: "Satria Corp",
      link: "https://drive.google.com/drive/my-drive",
      certificate: [
        {
          name: "Internship Certificate",
          link: "https://drive.google.com/drive/my-drive",
        },
      ],
    },
  ];

  return (
    <div className="cursor-default text-primary">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
              {vendor.type}
              <span className="text-base text-accent">
                {" "}
                @
                <a
                  href={vendor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {vendor.name}
                </a>
              </span>
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
              {vendor.certificate.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static  items-center justify-start transition-all duration-300 hover:text-accent md:inline-flex"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

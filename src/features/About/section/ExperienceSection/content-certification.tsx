import { useState } from "react";
import Image from "next/image";

export const ContentCertification = () => {
  const certificates = [
    { name: "Data Analystic - digitalent", img: "/images/serti1.jpg" },
    { name: "Multimedia development - Komsos", img: "/images/serti2.png" },
    { name: "Internship - PT Satria Corp", img: "/images/serti3.png" },
    { name: "Optimasi SQL - Transpac", img: "/images/serti4.png" },
    { name: "Overview of AI - Huawei", img: "/images/serti5.png" },
  ];

  const [selected, setSelected] = useState<{
    name: string;
    img: string;
  } | null>(null);

  return (
    <div className="text-primary">
      <h3 className="pb-5 text-xl font-semibold text-secondary md:text-2xl">
        Certification
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-3 shadow-xl transition-all hover:shadow-2xl"
          >
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
              {/* Eye Icon muncul saat hover */}
              <button
                onClick={() => setSelected(item)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 
                       7.51 7.36 4.5 12 4.5c4.638 0 8.573 
                       3.007 9.963 7.178.07.207.07.431 
                       0 .639C20.577 16.49 16.64 19.5 
                       12 19.5c-4.639 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-3 text-center text-sm font-medium text-gray-300">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.img}
              alt={selected.name}
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

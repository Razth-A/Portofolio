import Image from "next/image";

export const ContentCertification = () => {
  const certificates = [
    {
      name: "Sertifikat 1",
      img: "/images/serti1.png",
    },
    {
      name: "Sertifikat 2",
      img: "/images/serti2.png",
    },
    {
      name: "Sertifikat 3",
      img: "/images/serti3.png",
    },
  ];

  return (
    <div className="text-primary">
      <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
        Certification
      </h3>

      {/* Container scrollable horizontal */}
      <div className="scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-transparent flex gap-4 overflow-x-auto pb-5">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-[320px] flex-shrink-0 rounded-xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-2 shadow-lg"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <p className="mt-2 text-center text-sm text-secondary">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

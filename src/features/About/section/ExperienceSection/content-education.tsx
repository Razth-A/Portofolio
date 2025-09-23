export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Software Engineering
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://www.smkn2kotabekasi.sch.id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            SMK NEGERI 2 KOTA BEKASI
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2020 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          I enrolled in the Software Engineering program with the motivation
          that commercial jobs would be replaced by technology in the future, so
          I decided to pursue this major.
        </li>
        <li>
          Over the past five semesters, I've become more interested in App
          Development and Cybersecurity, and I even created an app for a job
          opening that was recently released on the Play Store{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.mobile.primago&hl=en-US&ah=-z33LP0qejb70hBM54YQvUkpPBo"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            Primago Apps
          </a>{" "}
          to meet client demand during my internship.
        </li>
        <li>
          Starting this semester, I realized that coding was my primary goal in
          pursuing this major. Therefore, I started learning programming and
          fell in love with it.✨
        </li>
      </ul>
    </div>
  );
};

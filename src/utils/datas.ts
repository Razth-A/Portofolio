// Stack Icons
import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import phpIcon from "@icons/php.svg";
import postmanIcon from "@icons/postman.png";
import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import cppIcon from "@icons/c.svg";
import javaIcon from "@icons/java.svg";
import laravelIcon from "@icons/laravel.svg";
import WebstormIcon from "@icons/webstorm.svg";
import npmIcon from "@icons/npm.svg";
import XAMPPIcon from "@icons/xampp.svg";
import NetBeansIcon from "@icons/NetBeans.svg";
import figmaIcon from "@icons/figma.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import mysqlIcon from "@icons/mysql.svg";
import splineIcon from "@icons/spline.svg";
import vscodeIcon from "@icons/vscode.svg";
import vite from "@icons/vite.svg";
import expoIcon from "@icons/expo.svg";
// import expressIcon from "@icons/express.svg";
// import mongodbIcon from "@icons/mongodb.svg";
import typescriptIcon from "@icons/typescript.svg";
// import reactQueryIcon from "@icons/react-query.svg";
// import formikIcon from "@icons/formik.png";

// Project Images
import gg from "@images/gogatherly.png";
import movie from "@images/movie.png";
import bookshelf from "@images/bookshelf.webp";
import notes from "@images/notes.webp";
import treede from "@images/3d.webp";
import abinawa from "@images/abinawa.webp";
import inpoums from "@images/inpoums.webp";
import portfolio_v1 from "@images/portfolio-v1.webp";
import bertumbuh from "@images/bertumbuh.webp";
import coffe_bean from "@images/coffe-bean.webp";
import dapbunda from "@images/dapbunda.webp";
import hpcjapan from "@images/hpc-japan.webp";
import ceritain from "@images/ceritain.webp";
import pinarak_resto from "@images/pinarak_resto.webp";

// Gif Images
import movieGif from "@gif/movie.gif";
import KalaCeritaGif from "@gif/KalaCerita.gif";
import primagoGif from "@gif/primago.gif";
import notesGif from "@gif/notes.gif";
import abinawaGif from "@gif/abinawa.gif";
import bookshelfGif from "@gif/bookshelf.gif";
import sakurajapanGif from "@gif/sakura-japan.gif";
import ceritainGif from "@gif/ceritain.gif";
import pinarakrestoGif from "@gif/pinarak-resto.gif";

const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  XAMPP: { name: "XAMPP", src: XAMPPIcon, level: "web server" },
  Vite: { name: "Vite", src: vite, level: "Build tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  Figma: { name: "Figma", src: figmaIcon, level: "UI/UX Design tool" },
  NEtBeans: {
    name: "Apache Netbeans",
    src: NetBeansIcon,
    level: "IDE",
  },
  Spline: { name: "Spline", src: splineIcon, level: "Web 3D design" },
  Postman: { name: "Postman", src: postmanIcon, level: "platform API" },
  Webstorm: {
    name: "WebStorm",
    src: WebstormIcon,
    level: "IDE",
  },
  expo: { name: "Expo", src: expoIcon, level: "FrameWork API" },
};

const stacks = {
  HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
  CSS: { name: "CSS", src: cssIcon, level: "Advanced" },
  CPP: { name: "C++", src: cppIcon, level: "Advanced" },
  PHP: { name: "PHP", src: phpIcon, level: "Intermediate" },
  JS: { name: "Javascript", src: jsIcon, level: "Advanced" },
  Typescript: { name: "Typescript", src: typescriptIcon, level: "Beginer" },
  Java: { name: "Java", src: javaIcon, level: "Advanced" },
  React: { name: "ReactJS and Native", src: reactIcon, level: "Advanced" },
  // NextJS: { name: "NextJS", src: nextjsIcon, level: "Advanced" },
  // ReactQuery: {
  //   name: "React Query",
  //   src: reactQueryIcon,
  //   level: "Intermediate",
  // },
  // Formik: { name: "Formik", src: formikIcon, level: "Intermediate" },
  // ThreeJS: {
  //   name: "ThreeJS",
  //   src: threejsIcon,
  //   level: "Use Spline Tools",
  // },
  Laravel: { name: "Laravel", src: laravelIcon, level: "Beginer" },
  // Express: { name: "ExpressJS", src: expressIcon, level: "Beginner" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Advanced" },
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Intermediate" },
  // MongoDB: { name: "MongoDB", src: mongodbIcon, level: "Beginer" },
};

const projects = [
  {
    id: 1,
    name: "Gogatherly",
    desc: "This website serves as a platform to showcase event organizers and the website also offers an online booking system.",
    image: gg,
    web: "https://razth-a.github.io/GoGatherly/",
    repo: "https://github.com/Razth-A/GoGatherly",
    stack: "HTML, Javascript, PHP, MySQL, TailwindCSS, ReactJS",
    gif: "",
  },
  {
    id: 2,
    name: "KalaCerita",
    desc: "This is a website for a cafe with a modern look that is integrated with a flexible payment gateway..",
    image: KalaCeritaGif,
    web: "https://bookshelf-js.vercel.app",
    repo: "https://github.com/ulinnajaaldi/Bookshelf-JS",
    stack: "HTML, Javascript, Bootstrap",
    gif: KalaCeritaGif,
  },
  {
    id: 4,
    name: "Movie",
    desc: "This website is designed as a digital learning tool to introduce the art of wayang kulit to the public. The website features interactive 3D models of wayang kulit.",
    image: movieGif,
    web: "https://razth-a.github.io/horror-movie/",
    repo: "https://github.com/Razth-A/horror-movie",
    stack: "HTML, Javascript, TailwindCSS",
    gif: movieGif,
  },
  {
    id: 5,
    name: "Primago App",
    desc: "This website is designed as a digital learning tool to introduce the art of wayang kulit to the public. The website features interactive 3D models of wayang kulit.",
    image: primagoGif,
    web: "https://play.google.com/store/apps/details?id=com.mobile.primago&hl=en-US&ah=-z33LP0qejb70hBM54YQvUkpPBo",
    repo: "https://github.com/Razth-A/mobile-app",
    stack: "HTML, Javascript, React Native, Expo, PHP, Laravel, MySQL",
    gif: primagoGif,
  },
];

export { tools, stacks, projects };

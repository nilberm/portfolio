import { useEffect, useState } from "react";
import { LinkedinIcon, GithubIcon } from "./icons/icons";

export const HeroSection: React.FC = () => {
  const [subtitle, setSubtitle] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const fullSubtitle = "Frontend Developer · React & Next.js · UI Enthusiast";

  useEffect(() => {
    setSubtitle("");
    setTypingDone(false);

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullSubtitle.length) {
        setSubtitle((prev) => prev + fullSubtitle.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 md:pt-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-blue-900/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left animated-element animate-slide-in-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-extrabold text-slate-900 dark:text-slate-50">
            Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-500">
              Nilber Mota
            </span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-slate-700 dark:text-slate-300 font-medium h-16 sm:h-auto">
            {subtitle}
            {!typingDone && <span className="typing-cursor">|</span>}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white dark:text-slate-900 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="NilberMota_Resume.pdf"
              className="inline-block bg-transparent hover:bg-slate-200 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-500 border-2 border-blue-600 dark:border-blue-500 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-10 flex justify-center md:justify-start space-x-6">
            <a
              href="https://linkedin.com/in/nilbermota"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-7 w-7" />
            </a>
            <a
              href="https://github.com/nilbermota"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-7 w-7" />
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center animated-element animate-slide-in-right">
          <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center animate-subtle-pulse">
            <img
              src="https://placehold.co/300x300/EBF4FF/1D4ED8?text=NM"
              alt="Avatar of Nilber Mota, Frontend Developer"
              className="rounded-full w-[95%] h-[95%] object-cover bg-slate-50 dark:bg-slate-900"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

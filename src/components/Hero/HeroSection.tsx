import { useMemo } from "react";
import Typewriter from "typewriter-effect";
import person1Png from "../../assets/person-1.png";
import personPng from "../../assets/person.png";
import { useLanguage } from "../../context/LanguageContext";
import Particles from "../common/Particles";
import { GithubIcon, LinkedinIcon } from "../icons";
import ProfileCard from "./ProfileCard";

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    title: {
      en: "Hi, I’m",
      pt: "Olá, eu sou",
    },
    subtitle: {
      en: "Software Developer",
      pt: "Fullstack Developer",
    },
    viewProjects: {
      en: "View Projects",
      pt: "Ver Projetos",
    },
    downloadResume: {
      en: "Download Resume",
      pt: "Baixar Currículo",
    },
    contactMe: {
      en: "Contact Me",
      pt: "Contato",
    },
  };

  const particleColors = ["#2563eb", "#3b82f6", "#10b981", "#ffffff"];

  const particlesElement = useMemo(
    () => (
      <Particles
        particleColors={particleColors}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    ),
    []
  );

  return (
    <section
      id="hero main-content"
      className="relative h-screen flex items-center pt-16 md:pt-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-blue-900/30 overflow-hidden"
    >
      <div className="absolute inset-0">{particlesElement}</div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center z-20">
        <div className="text-center md:text-left animated-element animate-slide-in-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-extrabold text-slate-900 dark:text-slate-50">
            {texts.title[language]}{" "}
            <span className="text-blue-600 dark:text-blue-500">
              Nilber Mota
            </span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-slate-700 dark:text-slate-300 font-medium">
            <Typewriter
              key={language}
              onInit={(typewriter) => {
                typewriter.typeString(texts.subtitle[language]).start();
              }}
              options={{
                autoStart: true,
                loop: false,
              }}
            />
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white dark:text-slate-900 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              {texts.viewProjects[language]}
            </a>
            <a
              href="/resume/nilber-mota-resume.pdf"
              download="NilberMota_Resume.pdf"
              className="inline-block bg-transparent hover:bg-slate-200 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-500 border-2 border-blue-600 dark:border-blue-500 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              {texts.downloadResume[language]}
            </a>
          </div>
          <div className="mt-10 flex justify-center md:justify-start space-x-6">
            <a
              href="https://linkedin.com/in/nilberm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-7 w-7" />
            </a>
            <a
              href="https://github.com/nilberm"
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
          <ProfileCard
            avatarUrl={person1Png}
            miniAvatarUrl={personPng}
            name="Nilber Mota"
            title={texts.subtitle[language]}
            handle="nilberm"
            status="Online"
            contactText={texts.contactMe[language]}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    title: {
      en: "About Me",
      pt: "Sobre Mim",
    },
    intro: {
      en: "I'm Nilber, a software developer who found in programming a perfect match for my passion for logic, technology, and creation.",
      pt: "Sou Nilber, um desenvolvedor de software que encontrou na programação a combinação perfeita entre lógica, tecnologia e criatividade.",
    },
    journeyTitle: {
      en: "My Professional Journey",
      pt: "Minha Trajetória Profissional",
    },
    journeyText: {
      en: `My interest in programming started when I discovered the CS50 course by Harvard. It quickly became clear that I had found what I wanted to do for the rest of my life. Since then, I've built a solid foundation in both frontend and backend development, always aiming to deliver high-quality and scalable solutions. I've developed complex interfaces, integrated systems, and led improvements in code review and QA processes. My goal is to grow as a complete developer, capable of working across the entire stack, including DevOps, while staying focused on delivering value and impact through technology.`,
      pt: `Meu interesse por programação começou quando descobri o curso CS50 de Harvard. Rapidamente percebi que tinha encontrado o que queria fazer para o resto da minha vida. Desde então, construí uma base sólida tanto no frontend quanto no backend, sempre buscando entregar soluções de alta qualidade e escaláveis. Desenvolvi interfaces complexas, sistemas integrados e liderei melhorias nos processos de revisão de código e QA. Meu objetivo é crescer como um desenvolvedor completo, capaz de atuar em toda a stack, incluindo DevOps, enquanto mantenho o foco em gerar valor e impacto por meio da tecnologia.`,
    },
    educationTitle: {
      en: "Education & Values",
      pt: "Formação & Valores",
    },
    education: [
      {
        enSchool: "Brigham Young University - Idaho",
        ptSchool: "Brigham Young University - Idaho",
        enDegree: "Bachelor's Degree in Software Development",
        ptDegree: "Bacharelado em Desenvolvimento de Software",
      },
      {
        enSchool: "Digital College",
        ptSchool: "Digital College",
        enDegree: "Full Stack Web Development Bootcamp",
        ptDegree: "Bootcamp de Desenvolvimento Full Stack",
      },
    ],
    strengthsTitle: {
      en: "Core Strengths",
      pt: "Pontos Fortes",
    },
    strengths: [
      "Clean Code",
      "Problem Solving",
      "Fullstack Development",
      "Component Architecture",
      "UI Consistency",
      "Performance & Optimization",
      "Team Collaboration",
    ],
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 md:mb-12 text-center text-slate-900 dark:text-slate-50 animated-element animate-fade-in-up">
          {texts.title[language]}
        </h2>
        <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto animated-element animate-fade-in-up">
          {texts.intro[language]}
        </p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Professional Journey */}
          <div className="animated-element animate-slide-in-left">
            <h3 className="text-2xl font-sora font-semibold mb-6 text-slate-900 dark:text-slate-50">
              {texts.journeyTitle[language]}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
              {texts.journeyText[language]}
            </p>
          </div>

          {/* Education & Strengths */}
          <div className="animated-element animate-slide-in-right">
            <h3 className="text-2xl font-sora font-semibold mb-6 text-slate-900 dark:text-slate-50">
              {texts.educationTitle[language]}
            </h3>
            <ul className="space-y-6">
              {texts.education.map((item, index) => (
                <li key={index}>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50">
                    {language === "en" ? item.enSchool : item.ptSchool}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {language === "en" ? item.enDegree : item.ptDegree}
                  </p>
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-sora font-semibold mt-8 mb-3 text-slate-900 dark:text-slate-50">
              {texts.strengthsTitle[language]}
            </h4>
            <div className="flex flex-wrap gap-2">
              {texts.strengths.map((strength) => (
                <span
                  key={strength}
                  className="inline-block bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

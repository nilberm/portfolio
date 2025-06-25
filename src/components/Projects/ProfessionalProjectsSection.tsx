import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import degreeProject from "../../assets/projects/degree-project.png";
import tresemmerProject from "../../assets/projects/tresemme-project.png";
import regenerateProject from "../../assets/projects/regenerate-project.png";
import hokaProject from "../../assets/projects/hoka-project.png";
import publicIncProject from "../../assets/projects/publicinc-project.png";
import rkdAndMeProject from "../../assets/projects/rkd-project.png";
import napaProject from "../../assets/projects/napa-project.png";

type ProfessionalProject = {
  title: string;
  description: { en: string; pt: string };
  imageUrl: string;
  siteUrl: string;
  role: string;
  technologies: string[];
};

const professionalProjects: ProfessionalProject[] = [
  {
    title: "Degree Deodorant",
    description: {
      en: "Implemented the Degree (Unilever) site using AEM and SCSS. Delivered responsive modules with dynamic content and optimized performance.",
      pt: "Implementei o site da Degree (Unilever) usando AEM e SCSS. Entreguei módulos responsivos com conteúdo dinâmico e performance otimizada.",
    },
    imageUrl: degreeProject,
    siteUrl: "https://www.degreedeodorant.com/us/en/home.html",
    role: "Frontend Developer",
    technologies: ["AEM", "SCSS", "Responsive Design"],
  },
  {
    title: "TRESemmé UK",
    description: {
      en: "Built the UK TRESemmé site with AEM and SCSS, focusing on rich media, product pages, and seamless editorial experience.",
      pt: "Desenvolvi o site UK da TRESemmé com AEM e SCSS, focando em mídia rica, páginas de produto e experiência editorial fluida.",
    },
    imageUrl: tresemmerProject,
    siteUrl: "https://www.tresemme.com/uk/home.html",
    role: "Frontend Developer",
    technologies: ["AEM", "SCSS", "Media-rich UI"],
  },
  {
    title: "Regenerate NR5 (ES)",
    description: {
      en: "Developed the Spanish Regenerate NR5 site using AEM and SCSS, delivering interactive content and bilingual support.",
      pt: "Desenvolvi o site espanhol da Regenerate NR5 usando AEM e SCSS, entregando conteúdo interativo e suporte bilíngue.",
    },
    imageUrl: regenerateProject,
    siteUrl: "https://www.regeneratenr5.es/home.html",
    role: "Frontend Developer",
    technologies: ["AEM", "SCSS", "Multilingual"],
  },
  {
    title: "Hoka Official Store",
    description: {
      en: "Worked on the Hoka e-commerce site built on Shopify, ensuring performance, responsive layout, and product discovery.",
      pt: "Trabalhei no site de e-commerce da Hoka desenvolvido em Shopify, garantindo performance, layout responsivo e descoberta de produtos.",
    },
    imageUrl: hokaProject,
    siteUrl: "https://www.hoka.com/",
    role: "Frontend Developer",
    technologies: ["Shopify", "CSS", "E‑commerce"],
  },
  {
    title: "PublicInc Corporate",
    description: {
      en: "Built publicinc.com using React, Sanity CMS and SCSS. Delivered structured content management and dynamic case studies.",
      pt: "Construí o publicinc.com com React, Sanity CMS e SCSS. Entreguei gestão de conteúdo estruturado e estudos de caso dinâmicos.",
    },
    imageUrl: publicIncProject,
    siteUrl: "https://publicinc.com/",
    role: "Frontend Developer",
    technologies: ["React", "Sanity", "Tailwind CSS"],
  },
  {
    title: "RKD & Me",
    description: {
      en: "Developed rkdandme.com with Next.js, Sanity and SCSS. Implemented fast static pages and rich editorial workflows.",
      pt: "Desenvolvi o rkdandme.com com Next.js, Sanity e SCSS. Implementei páginas estáticas rápidas e fluxos editoriais ricos.",
    },
    imageUrl: rkdAndMeProject,
    siteUrl: "https://rkdandme.com/",
    role: "Frontend Developer",
    technologies: ["Next.js", "Sanity", "Tailwind CSS"],
  },
  {
    title: "Tools of the Trade (NAPA)",
    description: {
      en: "Implemented the Tools of the Trade e-commerce section on NapaOnline using React and SCSS, enhancing browsing experience.",
      pt: "Implementei a seção Tools of the Trade no NapaOnline com React e SCSS, melhorando a experiência de navegação.",
    },
    imageUrl: napaProject,
    siteUrl: "https://www.napaonline.com/toolsofthetrade/",
    role: "Frontend Developer",
    technologies: ["React", "Tailwind CSS"],
  },
];

const ProfessionalProjectsSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      id="work"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 text-center text-slate-900 dark:text-slate-50">
          {language === "en" ? "Professional Work" : "Projetos Profissionais"}
        </h2>
        <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto">
          {language === "en"
            ? "A selection of professional websites I've helped build and maintain as part of real-world teams. These are just some of the brands I've worked with."
            : "Uma seleção de sites profissionais que ajudei a desenvolver e manter como parte de equipes reais. Estes são apenas alguns dos projetos que participei."}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalProjects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
            >
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-36 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-sora font-semibold text-slate-900 dark:text-slate-50">
                {proj.title}
              </h3>
              <p className="text-sm italic text-slate-500 dark:text-slate-400 mb-2">
                {proj.role}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {proj.description[language]}
              </p>
              <div className="flex flex-wrap mb-4">
                {proj.technologies.map((t) => (
                  <span
                    key={t}
                    className="inline-block bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={proj.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 dark:text-blue-500 font-medium hover:underline"
              >
                {language === "en" ? "Visit Site" : "Visitar Site"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProjectsSection;

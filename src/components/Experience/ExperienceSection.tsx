import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

interface Experience {
  title: string;
  company: string;
  period: {
    en: string;
    pt: string;
  };
  technologies: string[];
  details: {
    en: string;
    pt: string;
  };
  bullets: {
    en: string[];
    pt: string[];
  };
}

const experiences: Experience[] = [
  {
    title: "Mid Fullstack Developer",
    company: "The Brooklyn Brothers",
    period: {
      en: "Jun 2024 – Present",
      pt: "Jun 2024 – Presente",
    },
    technologies: ["NestJS", "React", "TypeScript", "AEM", "AWS", "Shopify"],
    details: {
      en: "Sole developer for internal analytics platforms and Meta API integrations.",
      pt: "Desenvolvedor único de plataformas internas de análise e integrações com a API da Meta.",
    },
    bullets: {
      en: [
        "Served as primary developer for Trend.in, an internal social listening platform using NestJS, React, and TypeScript.",
        "Engineered Meta Graph API data pipelines to capture metrics; built background jobs with AWS S3.",
        "Acted as primary developer for USocial widgets for Dove Brazil.",
        "Developed and deployed brand platforms for Unilever, MINI Cooper, and HOKA hitting 90+ Lighthouse scores.",
        "Co-created ChatTBB (Winning Entry) implementing a RAG chatbot using NestJS and OpenAI.",
      ],
      pt: [
        "Atuei como desenvolvedor principal no Trend.in, plataforma interna de análise social usando NestJS, React e TypeScript.",
        "Criei pipelines de dados da API da Meta Graph e jobs em segundo plano com AWS S3.",
        "Atuei como desenvolvedor principal dos widgets USocial para a Dove Brasil.",
        "Desenvolvi plataformas para Unilever, MINI Cooper e HOKA atingindo mais de 90 no Lighthouse.",
        "Co-criei o ChatTBB (Vencedor de Hackathon), um chatbot RAG utilizando NestJS e OpenAI.",
      ],
    },
  },
  {
    title: "Front-End Developer",
    company: "FYDU / ABA Blockchain",
    period: {
      en: "Oct 2022 – May 2024",
      pt: "Out 2022 – Mai 2024",
    },
    technologies: ["React", "TypeScript", "Next.js", "SCSS"],
    details: {
      en: "Engineered browser-based digital signature workflows and cloud file management.",
      pt: "Desenvolvi fluxos de assinatura digital no navegador e gerenciamento de arquivos na nuvem.",
    },
    bullets: {
      en: [
        "Engineered digital signature workflows with dynamic PDF rendering and drag-and-drop.",
        "Designed a cloud file management module with real-time previews and RBAC.",
        "Maintained modular component libraries using React, TypeScript, and SCSS.",
      ],
      pt: [
        "Desenvolvi fluxos de assinatura digital com renderização dinâmica de PDFs e drag-and-drop.",
        "Projetei um módulo de gerenciamento de arquivos em nuvem com pré-visualizações em tempo real e RBAC.",
        "Mantive bibliotecas de componentes modulares usando React, TypeScript e SCSS.",
      ],
    },
  },
  {
    title: "Front-End Developer Intern",
    company: "Nestec",
    period: {
      en: "Jun 2022 – Oct 2022",
      pt: "Jun 2022 – Out 2022",
    },
    technologies: ["React", "JavaScript", "CSS3", "Google Maps API"],
    details: {
      en: "Acted as sole front-end engineer for an end-to-end ticketing platform.",
      pt: "Atuei como único engenheiro front-end de uma plataforma completa de venda de ingressos.",
    },
    bullets: {
      en: [
        "Acted as sole front-end engineer for an end-to-end ticketing and event management platform.",
        "Integrated Google Maps API, ViaCEP, and BrasilAPI for automated address lookup.",
        "Facilitated ~200 ticket sales during the initial production launch.",
      ],
      pt: [
        "Atuei como único engenheiro front-end em uma plataforma completa de gestão de eventos e ingressos.",
        "Integrei API do Google Maps, ViaCEP e BrasilAPI para busca automatizada de endereços.",
        "Facilitei a venda de ~200 ingressos durante o lançamento inicial de produção.",
      ],
    },
  },
];

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<Experience | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    if (selected) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 md:mb-12 text-center text-slate-900 dark:text-slate-50">
          {language === "en" ? "My Experience" : "Minha Experiência"}
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute top-0 h-full w-0.5 bg-blue-600/30 dark:bg-blue-500/30 left-4 md:left-1/2 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.title}`}
              className={`mb-12 flex w-full items-start md:items-center flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block w-1/2"></div>

              <div className="md:w-1/2 md:px-8 relative">
                <div
                  className={`absolute top-1 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-slate-50 dark:border-slate-900 
                    -left-0.5
                    ${
                      index % 2 === 0
                        ? "md:left-auto md:-right-4"
                        : "md:-left-4"
                    }`}
                ></div>

                <div className="ml-10 md:ml-0 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-sora font-semibold text-slate-900 dark:text-slate-50 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    {exp.company} | {exp.period[language]}
                  </p>
                  <div className="flex flex-wrap mb-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelected(exp)}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1"
                  >
                    {language === "en" ? "See more" : "Ver mais"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="bg-white dark:bg-slate-800 max-w-md w-full rounded-xl p-6 shadow-2xl relative"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label={language === "en" ? "Close" : "Fechar"}
              className="absolute top-3 right-4 text-2xl font-bold leading-none text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              &times;
            </button>
            <h3
              id="modal-title"
              className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2"
            >
              {selected.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              {selected.company} | {selected.period[language]}
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              {selected.details[language]}
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              {selected.bullets[language].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;

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
    title: "Full Stack Developer",
    company: "The Brooklyn Brothers",
    period: {
      en: "Jun 2024 – Present",
      pt: "Jun 2024 – Presente",
    },
    technologies: ["AEM", "React", "Next.js", "GraphQL", "Sanity", "Node.js"],
    details: {
      en: "Worked on websites for global brands using AEM and React.",
      pt: "Atuei no desenvolvimento de sites para marcas globais utilizando AEM e React.",
    },
    bullets: {
      en: [
        "Built scalable sites for Tresemmé, Rexona, Degree, MINI Cooper, and HOKA.",
        "Created campaign dashboards integrated with Meta APIs.",
        "Delivered dynamic components with high Lighthouse scores.",
        "Solved complex build and deploy issues across projects."
      ],
      pt: [
        "Criei sites escaláveis para Tresemmé, Rexona, Degree, MINI Cooper e HOKA.",
        "Desenvolvi dashboards de campanha com integração à API da Meta.",
        "Entreguei componentes dinâmicos com alta performance no Lighthouse.",
        "Resolvi problemas complexos de build e deploy em diferentes projetos."
      ]
    }
  },
  {
    title: "Frontend Developer",
    company: "ABA Blockchain",
    period: {
      en: "Nov 2023 – May 2024",
      pt: "Nov 2023 – Mai 2024",
    },
    technologies: ["React", "Next.js", "TypeScript", "Blockchain", "Axios"],
    details: {
      en: "Developed a blockchain-integrated digital signature platform.",
      pt: "Desenvolvi uma plataforma de assinatura digital integrada à blockchain.",
    },
    bullets: {
      en: [
        "Built file upload and document positioning features.",
        "Implemented collaborative task flow and approval system.",
        "Led component reuse and layout consistency improvements."
      ],
      pt: [
        "Implementei recursos de upload de arquivos e posicionamento de assinatura.",
        "Desenvolvi fluxo de tarefas colaborativas e sistema de aprovação.",
        "Liderei melhorias na reutilização de componentes e consistência visual."
      ]
    }
  },
  {
    title: "Frontend Developer",
    company: "Fydu",
    period: {
      en: "Nov 2022 – Nov 2023",
      pt: "Nov 2022 – Nov 2023",
    },
    technologies: ["React", "Next.js", "TypeScript", "Microservices"],
    details: {
      en: "Migrated and rebuilt process management systems.",
      pt: "Migrei e reconstruí sistemas de gestão de processos.",
    },
    bullets: {
      en: [
        "Created over 20 dynamic pages with authentication and role-based access.",
        "Integrated blockchain digital signing and calendar tools.",
        "Worked closely with backend team to map API flows."
      ],
      pt: [
        "Criei mais de 20 páginas dinâmicas com autenticação e permissões.",
        "Integrei assinatura digital via blockchain e ferramentas de calendário.",
        "Trabalhei com o time backend no mapeamento de fluxos da API."
      ]
    }
  },
  {
    title: "Frontend Developer Intern",
    company: "Nestec",
    period: {
      en: "Jul 2022 – Oct 2022",
      pt: "Jul 2022 – Out 2022",
    },
    technologies: ["React", "TypeScript", "SASS", "Styled Components"],
    details: {
      en: "Built a customizable event ticketing platform.",
      pt: "Desenvolvi uma plataforma de venda de ingressos personalizável.",
    },
    bullets: {
      en: [
        "Developed geolocation and dynamic ticket creation features.",
        "Created dashboards for organizers with analytics.",
        "Handled responsive layout and mobile-first adjustments."
      ],
      pt: [
        "Implementei geolocalização e criação dinâmica de ingressos.",
        "Desenvolvi dashboards com métricas para organizadores.",
        "Ajustei layouts responsivos com abordagem mobile-first."
      ]
    }
  }
];

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<Experience | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
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

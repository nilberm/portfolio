import React from "react";

type Experience = {
  title: string;
  company: string;
  period: string;
  technologies: string[];
};

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Accenture",
    period: "Jan 2023 - Present",
    technologies: ["React", "AEM", "Tailwind CSS"],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 md:mb-12 text-center text-slate-900 dark:text-slate-50 animated-element animate-fade-in-up">
          My Experience
        </h2>
        <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto animated-element animate-fade-in-up">
          A timeline of my professional journey, highlighting key roles,
          responsibilities, and technologies.
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute top-0 h-full w-0.5 bg-blue-600/30 dark:bg-blue-500/30 left-4 md:left-1/2 transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex md:items-center w-full animated-element ${
                index % 2 === 0
                  ? "animate-slide-in-left"
                  : "animate-slide-in-right"
              }`}
            >
              {/* Empty space on left for md screens */}
              <div className="hidden md:block w-1/2"></div>

              <div className="md:w-1/2 md:pl-8 relative">
                {/* Timeline dot */}
                <div className="absolute -left-0.5 md:-left-4 top-1 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-slate-50 dark:border-slate-900"></div>

                {/* Experience card */}
                <div className="ml-10 md:ml-0 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-sora font-semibold text-slate-900 dark:text-slate-50 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    {exp.company} | {exp.period}
                  </p>
                  <div className="flex flex-wrap">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

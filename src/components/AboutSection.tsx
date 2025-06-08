import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 md:mb-12 text-center text-slate-900 dark:text-slate-50 animated-element animate-fade-in-up">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto animated-element animate-fade-in-up">
          A passionate Frontend Developer dedicated to crafting beautiful,
          functional, and user-centric web experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* My Journey */}
          <div className="animated-element animate-slide-in-left">
            <h3 className="text-2xl font-sora font-semibold mb-6 text-slate-900 dark:text-slate-50">
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Hello! I'm Nilber, a frontend developer with a keen eye for design
              and a love for clean, efficient code. My journey into web
              development started with a fascination for how websites could blend
              artistry with technology. Since then, I've been on a continuous
              quest to learn and master the tools and techniques that bring
              digital ideas to life.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I believe in the power of collaboration, continuous learning, and
              the importance of building accessible and performant applications.
            </p>
          </div>

          {/* Education & Values */}
          <div className="animated-element animate-slide-in-right">
            <h3 className="text-2xl font-sora font-semibold mb-6 text-slate-900 dark:text-slate-50">
              Education & Values
            </h3>
            <ul className="space-y-6">
              <li>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">
                  Brigham Young University - Idaho
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Bachelor's Degree in Applied Technology
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">
                  Digital College
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Technologist in Systems Analysis and Development
                </p>
              </li>
            </ul>

            <h4 className="text-xl font-sora font-semibold mt-8 mb-3 text-slate-900 dark:text-slate-50">
              Key Strengths:
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Clean Code",
                "Performance",
                "Responsive Design",
                "Accessibility (A11Y)",
              ].map((strength) => (
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

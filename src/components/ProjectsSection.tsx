import React from "react";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A modern e-commerce platform with a focus on user experience and performance.",
    imageUrl: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Project+Alpha",
    tags: ["Next.js", "React", "Tailwind", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Beta",
    description:
      "A collaborative task management app designed for small teams with real-time updates.",
    imageUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=Project+Beta",
    tags: ["React", "Firebase", "Material UI"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Gamma",
    description:
      "Personal portfolio website built with vanilla HTML, CSS, and JavaScript.",
    imageUrl: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Project+Gamma",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden animated-element animate-fade-in-up">
      <img
        src={project.imageUrl}
        alt={`${project.title} preview`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-sora font-semibold text-slate-900 dark:text-slate-50 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 font-medium hover:underline"
            aria-label={`View ${project.title} live`}
          >
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 font-medium hover:underline"
            aria-label={`View ${project.title} source on GitHub`}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 md:mb-12 text-center text-slate-900 dark:text-slate-50 animated-element animate-fade-in-up">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto animated-element animate-fade-in-up">
          A selection of projects that showcase my skills in frontend
          development, UI/UX design, and problem-solving.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

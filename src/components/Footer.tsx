import React from "react";
import { LinkedinIcon, GithubIcon } from "./icons/icons";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 dark:text-slate-400 py-10 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Social media"
          className="flex justify-center space-x-6 mb-6"
        >
          <a
            href="https://linkedin.com/in/nilbermota"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/nilbermota"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
        </nav>
        <p className="text-sm">
          Built with{" "}
          <span className="font-semibold text-blue-500/80">React</span> &{" "}
          <span className="font-semibold text-blue-500/80">Tailwind CSS</span>.
        </p>
        <p className="text-sm mt-1">
          Designed by Nilber Mota. &copy; {year} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

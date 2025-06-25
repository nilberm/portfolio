import React from "react";
import { GithubIcon, LinkedinIcon } from "../icons";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="bg-slate-900 text-slate-300 dark:text-slate-400 py-10 text-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Social media"
          className="flex justify-center space-x-6 mb-6"
        >
          <a
            href="https://linkedin.com/in/nilberm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/nilberm"
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

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full p-3 shadow-lg transition-all duration-300"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;

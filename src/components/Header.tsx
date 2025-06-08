import { useEffect, useState } from "react";
import {
  BrazilFlagIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  USFlagIcon,
  XIcon,
} from "./icons/icons";
import { useLanguage } from "../context/LanguageContext";

const navLinks = [
  { href: "#hero", label: { en: "Home", pt: "Início" } },
  { href: "#about", label: { en: "About", pt: "Sobre" } },
  { href: "#experience", label: { en: "Experience", pt: "Experiência" } },
  { href: "#projects", label: { en: "Projects", pt: "Projetos" } },
  { href: "#contact", label: { en: "Contact", pt: "Contato" } },
];

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId!);
    if (targetElement) {
      const headerOffset =
        document.getElementById("header")?.offsetHeight || 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-slate-700/50"
            : "bg-transparent backdrop-blur-0 shadow-none border-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a
            href="#hero"
            onClick={handleLinkClick}
            className="text-2xl font-sora font-bold text-blue-600 dark:text-blue-500"
          >
            Nilber Mota
          </a>
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                {link.label[language]}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <div className="flex items-center space-x-2 mr-2">
              <button
                onClick={() => setLanguage("en")}
                className={`py-1 px-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ${
                  language === "en" ? "opacity-100" : "opacity-50"
                }`}
                aria-label="Switch to English"
              >
                <USFlagIcon className="h-5 w-5" />
              </button>

              <button
                onClick={() => setLanguage("pt")}
                className={`py-1 px-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ${
                  language === "pt" ? "opacity-100" : "opacity-50"
                }`}
                aria-label="Switch to Portuguese"
              >
                <BrazilFlagIcon className="h-5 w-5" />
              </button>
            </div>

            <span></span>
            <span className="mx-2 h-6 w-[2px] bg-slate-300 dark:bg-slate-600"></span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-3 p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-800 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block py-3 px-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              {link.label[language]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

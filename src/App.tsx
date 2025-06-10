import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import ExperienceSection from "./components/Experience/ExperienceSection";

import { HeroSection } from "./components/Hero/HeroSection";
import Footer from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import ProjectsSection from "./components/Projects/ProjectsSection";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme, isThemeLoaded } = useTheme();
  useScrollAnimation();

  if (!isThemeLoaded) {
    return null;
  }

  return (
    <div
      className="font-inter bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300 antialiased"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

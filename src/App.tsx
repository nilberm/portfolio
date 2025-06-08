import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
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

import { useEffect } from "react";

const useScrollAnimation = (
  selector = ".animated-element",
  animationMap = {
    "animate-slide-in-left": "slideInLeft 0.7s ease-out forwards",
    "animate-slide-in-right": "slideInRight 0.7s ease-out forwards",
    default: "fadeInUp 0.7s ease-out forwards",
  }
) => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            const animation = Object.keys(animationMap).find((key) =>
              el.classList.contains(key)
            );

            el.style.animation =
              animationMap[animation as keyof typeof animationMap] ??
              animationMap.default;

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, animationMap]);
};

export default useScrollAnimation;

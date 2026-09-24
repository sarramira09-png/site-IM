import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".reveal, .fade-up, .fade-left, .fade-right, .scale-up"
      )
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -28px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

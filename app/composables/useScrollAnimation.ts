export const useScrollAnimation = () => {
  const observerOptions = {
    threshold: 0.18,
    rootMargin: "0px 0px -120px 0px",
  };

  const observeElements = (selector: string, className: string) => {
    if (!process.client) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(selector).forEach((element) => {
      observer.observe(element);
    });
  };

  onMounted(() => {
    observeElements("[data-scroll-fade]", "animate-fade-up");
    observeElements("[data-scroll-counter]", "animate-fade-in");
  });

  return {
    observeElements,
  };
};

export const useCounterAnimation = (target: number, duration: number = 2000) => {
  const count = ref(0);

  const easeOutQuad = (t: number): number => t * (2 - t);

  const animateCounter = () => {
    if (!process.client) return;

    const startTime = performance.now();
    const startValue = 0;

    const updateCount = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      count.value = Math.floor(startValue + (target - startValue) * easeOutQuad(progress));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  onMounted(() => {
    animateCounter();
  });

  return count;
};

export const useHoverLift = () => {
  const setupHoverLift = (selector: string) => {
    if (!process.client) return;

    document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.classList.add("transition-all", "duration-450", "shadow-3d-soft");
        element.style.transform = "translateY(-6px) scale(1.01)";
      });
      element.addEventListener("mouseleave", () => {
        element.style.transform = "translateY(0) scale(1)";
      });
    });
  };

  onMounted(() => {
    setupHoverLift("[data-hover-lift]");
  });

  return { setupHoverLift };
};

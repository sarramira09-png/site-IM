(() => {
  function initCapBon() {
    // Prevent duplicate initialization
    if (window.__capBonInitialized) {
      return;
    }

    window.__capBonInitialized = true;

    const cleanupFunctions = [];

    // =====================================================
    // NAVBAR
    // =====================================================

    const nav = document.getElementById("nav");

    if (nav) {
      const updateNav = () => {
        nav.classList.toggle("scrolled", window.scrollY > 60);
      };

      updateNav();

      window.addEventListener("scroll", updateNav, {
        passive: true,
      });

      cleanupFunctions.push(() => {
        window.removeEventListener("scroll", updateNav);
      });
    }

    // =====================================================
    // HERO PARALLAX
    // =====================================================

    const heroBg = document.getElementById("heroBg");

    if (heroBg) {
      const updateHero = () => {
        if (window.scrollY < window.innerHeight) {
          heroBg.style.transform =
            `translateY(${window.scrollY * 0.28}px)`;
        }
      };

      updateHero();

      window.addEventListener("scroll", updateHero, {
        passive: true,
      });

      cleanupFunctions.push(() => {
        window.removeEventListener("scroll", updateHero);
      });
    }

    // =====================================================
    // FADE-IN ANIMATIONS
    // =====================================================

    const revealElements = document.querySelectorAll(
      ".fade-up, .fade-left, .fade-right, .scale-up"
    );

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");

              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -28px 0px",
        }
      );

      revealElements.forEach((element) => {
        revealObserver.observe(element);
      });

      cleanupFunctions.push(() => {
        revealObserver.disconnect();
      });
    } else {
      revealElements.forEach((element) => {
        element.classList.add("in-view");
      });
    }

    // =====================================================
    // DRAWER ANIMATIONS
    // =====================================================

    const drawerElements =
      document.querySelectorAll("[data-drawer]");

    if ("IntersectionObserver" in window) {
      const drawerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              window.setTimeout(() => {
                entry.target.classList.add("open");
              }, 50);

              drawerObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
        }
      );

      drawerElements.forEach((element) => {
        drawerObserver.observe(element);
      });

      cleanupFunctions.push(() => {
        drawerObserver.disconnect();
      });
    } else {
      drawerElements.forEach((element) => {
        element.classList.add("open");
      });
    }

    // =====================================================
    // GALLERY DRAGGING
    // =====================================================

    const gallery = document.getElementById("gallery");

    if (gallery) {
      let dragging = false;
      let startX = 0;
      let scrollLeft = 0;

      const mouseDown = (event) => {
        dragging = true;

        startX =
          event.pageX - gallery.offsetLeft;

        scrollLeft =
          gallery.scrollLeft;

        gallery.style.cursor = "grabbing";
      };

      const mouseMove = (event) => {
        if (!dragging) return;

        event.preventDefault();

        const x =
          event.pageX - gallery.offsetLeft;

        gallery.scrollLeft =
          scrollLeft -
          (x - startX) * 1.4;
      };

      const mouseUp = () => {
        dragging = false;
        gallery.style.cursor = "grab";
      };

      const touchStart = (event) => {
        startX =
          event.touches[0].pageX;

        scrollLeft =
          gallery.scrollLeft;
      };

      const touchMove = (event) => {
        gallery.scrollLeft =
          scrollLeft -
          (event.touches[0].pageX - startX);
      };

      gallery.addEventListener(
        "mousedown",
        mouseDown
      );

      document.addEventListener(
        "mousemove",
        mouseMove
      );

      document.addEventListener(
        "mouseup",
        mouseUp
      );

      gallery.addEventListener(
        "touchstart",
        touchStart,
        { passive: true }
      );

      gallery.addEventListener(
        "touchmove",
        touchMove,
        { passive: true }
      );

      gallery.style.cursor = "grab";

      cleanupFunctions.push(() => {
        gallery.removeEventListener(
          "mousedown",
          mouseDown
        );

        document.removeEventListener(
          "mousemove",
          mouseMove
        );

        document.removeEventListener(
          "mouseup",
          mouseUp
        );

        gallery.removeEventListener(
          "touchstart",
          touchStart
        );

        gallery.removeEventListener(
          "touchmove",
          touchMove
        );
      });
    }

    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    const anchorLinks =
      document.querySelectorAll(
        'a[href^="#"]'
      );

    anchorLinks.forEach((link) => {
      const clickHandler = (event) => {
        const href =
          link.getAttribute("href");

        if (!href || href === "#") {
          return;
        }

        const target =
          document.querySelector(href);

        if (target) {
          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      };

      link.addEventListener(
        "click",
        clickHandler
      );

      cleanupFunctions.push(() => {
        link.removeEventListener(
          "click",
          clickHandler
        );
      });
    });

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      cleanupFunctions.forEach(
        (cleanup) => cleanup()
      );

      window.__capBonInitialized = false;
    };
  }

  // Make the function available to React
  window.initCapBon = initCapBon;
})();
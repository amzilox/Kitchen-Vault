import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, gsap } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
/////////////////////////////////////
//////////////////

/////////////////////////////////////
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

function setupGSAPAnimations() {
  document.addEventListener("DOMContentLoaded", () => {
    // Create a new ScrollMagic Controller
    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();

    // Create GSAP Timeline
    let t1 = gsap.timeline();
    t1.from(".ingredients-pics--1", {
      duration: 4,
      y: 100,
      x: -150,
      ease: "power3.inOut",
    })
      .from(
        ".ingredients-pics--2",
        {
          duration: 4,
          y: -50,
          x: -100,
          ease: "power3.inOut",
        },
        "-=4"
      )
      .from(
        ".ingredients-pics--3",
        {
          duration: 4,
          y: 50,
          x: -50,
          ease: "power3.inOut",
        },
        "-=4"
      )
      .from(
        ".ingredients-pics--4",
        {
          duration: 4,
          y: 0,
          x: -100,
          ease: "power3.inOut",
        },
        "-=4"
      )
      .from(
        ".ingredients-pics--5",
        {
          duration: 4,
          y: -75,
          x: -75,
          ease: "power3.inOut",
        },
        "-=4"
      )
      .from(
        ".ingredients-pics--6",
        {
          duration: 4,
          y: -20,
          x: -50,
          ease: "power3.inOut",
        },
        "-=4"
      )
      .from(
        ".ingredients-pics--7",
        {
          duration: 4,
          y: 0,
          x: -100,
          ease: "power3.inOut",
        },
        "-=4"
      );

    // Create and configure ScrollMagic Scene
    let scene = new ScrollMagic.Scene({
      triggerElement: ".about",
      duration: "100%",
      triggerHook: 0,
    })
      .setTween(t1) // Add GSAP Timeline to the scene
      .setPin(".about")
      .addTo(controller); // Add scene to the controller
  });
}

///////////////////////////////////////////////
function setupStickyNav() {
  const nav = document.querySelector(".nav-sticky");
  const navHeight = nav.getBoundingClientRect().height;
  const header = document.querySelector(".cover");

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.31,
    rootMargin: `-${navHeight}px`,
  });

  function stickyNav(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  }
  headerObserver.observe(header);
}

function buttonScrlSetup() {
  const bannerBtn = document.querySelector(".banner__button");

  bannerBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Matching Strategy: (Guard Clause)
    const id =
      e.target?.getAttribute("href") ||
      e.target.closest(".banner-link")?.getAttribute("href");
    if (!id) return;
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
}

function initScrl() {
  ///////////////////////////
  const navForm = document.querySelector(".nav-sticky__search");
  const aboutForm = document.querySelector(".about__search");
  // Smooth scrolling :
  [navForm, aboutForm].forEach((elem) => {
    elem.addEventListener("submit", function (e) {
      e.preventDefault();
      const id = this.getAttribute("action");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
  });
}

const preLoader = function () {
  const modelWin = document.querySelector(".preLoader");
  document.addEventListener("DOMContentLoaded", function () {
    modelWin.classList.add("hidden");
  });
};

// Reveal sections:

const revealSectionFunc = function () {
  const allSections = document.querySelectorAll(".section");

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });
};

export {
  setupStickyNav,
  initScrl,
  buttonScrlSetup,
  setupGSAPAnimations,
  preLoader,
  revealSectionFunc,
};

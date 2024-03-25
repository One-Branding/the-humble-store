console.log("Hello Humble Store!");
//
//
//
// Locale Code
//
//
//
const handleLocale = () => {
  // Grab each locale link
  const locales = document.querySelectorAll(".localization_link");

  // Convert the Text content of the locale link to the iso code on breakpoints lower than tabet
  if (window.innerWidth < 768) {
    locales.forEach((locale) => {
      const isoCode = locale.getAttribute("hreflang");
      locale.textContent = splitByDash(isoCode);
    });
  }

  // Grab the current locale link and set the dropdown button's text to the current locale
  const currentLocale = document.querySelector("[hreflang].w--current");

  // Set the text content of the dropdown button
  document.querySelector("[data-element='current-locale']").textContent =
    currentLocale.textContent;
};

const splitByDash = (string) => {
  const parts = string.split("-");
  return parts[0];
};

// call on page load
handleLocale();

//
//
//
// HERO
//
//
//
const heroBG1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cc-hero-bg1",
    start: "top 50%",
    end: "bottom top",
    scrub: 0.2,
  },
});

heroBG1.to(".cc-hero-bg1", { y: "40%" });

//
//
//
// STEPS
//
//
//
let stepsCardWrapper = document.querySelector(".steps-card-wrapper");
let browserWidth = window.innerWidth;
let width = stepsCardWrapper.offsetWidth;
let endX;
if (browserWidth < 1480) {
  endX = browserWidth * 0.9 - width; // If browser width is less than 1480px
} else {
  endX = 1480 - width; // If browser width is 1480px or wider
}

// Steps Cards - Horzontal Scroll
const cardsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section.cc-install",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
    pinSpacing: true,
    ease: "power4.out",
  },
});

cardsTL.to(".steps-card-wrapper", { x: endX, ease: "none" });
cardsTL.to(".cc-install-bg1", { y: "0%" }, "<");
cardsTL.to(".cc-install-bg2", { y: "0%" }, "<");
cardsTL.to(".cc-install-bg3", { y: "0%" }, "<");
cardsTL.to(".cc-install-bg4", { y: "0%" }, "<");
cardsTL.to(".cc-install-bg5", { y: "0%" }, "<+0.25");

//
//
//
// GAMES
//
//
//
const MOBILE_WIDTH = 878;

const phoneAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".section.cc-spotlight",
    toggleActions: "play none none reverse",
    // Change the start based on the screen width
    start: "top 20%",
    end: "bottom top",
  },
});
// All games opacity and scale
phoneAnimation.to(
  ".phone__game",
  {
    opacity: 1,
    scale: 1,
  },
  0
);

if (window.innerWidth > MOBILE_WIDTH) {
  // Desktop Version
  phoneAnimation.to(".phone__game.is-slay", { x: "-92%", y: "-205%" }, 0);
  phoneAnimation.to(".phone__game.is-green", { x: "29%", y: "-230%" }, "<");
  phoneAnimation.to(".phone__game.is-blue", { x: "108%", y: "-107%" }, "<");
  phoneAnimation.to(".phone__game.is-orange", { x: "-182%", y: "14%" }, "<");
  phoneAnimation.to(".phone__game.is-forager", { x: "113%", y: "104%" }, "<");
  phoneAnimation.to(".phone__game.is-unpacking", { x: "-100%", y: "90%" }, "<");
  phoneAnimation.to(".phone__game.is-wizard", { x: "-162%", y: "-95%" }, "<");
  phoneAnimation.to(".phone__game.is-crying-sun", { x: "160%", y: "-5%" }, "<");
  phoneAnimation.to(".svg.cc-beams", {
    opacity: 1,
  });
} else {
  // Mobile Version
  phoneAnimation.to(".phone__game.is-slay", { x: "-98%", y: "-231%" }, 0);
  phoneAnimation.to(".phone__game.is-green", { x: "155%", y: "-41%" }, "<");
  phoneAnimation.to(".phone__game.is-blue", { x: "48%", y: "-194%" }, "<");
  phoneAnimation.to(".phone__game.is-orange", { x: "-176%", y: "104%" }, "<");
  phoneAnimation.to(".phone__game.is-forager", { x: "74%", y: "232%" }, "<");
  phoneAnimation.to(".phone__game.is-unpacking", { x: "-89%", y: "221%" }, "<");
  phoneAnimation.to(".phone__game.is-wizard", { x: "-154%", y: "-62%" }, "<");
  phoneAnimation.to(".phone__game.is-crying-sun", { x: "149%", y: "92%" }, "<");
  phoneAnimation.to(".svg.cc-beams", {
    opacity: 1,
  });
}
//
//
//
// FAQS
//
//
//
//
// GSAP
//
// FAQ - Background 1
const faqBG1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cc-faq-bg1",
    start: "top 90%",
    end: "bottom 50%",
    scrub: true,
  },
});

faqBG1.eventCallback("onStart", () => {
  ScrollTrigger.refresh();
});
faqBG1.to(".cc-faq-bg1", { y: "0%" });
faqBG1.to(".cc-faq-bg2", { y: "0%" }, "<");
//
//
//
// FOOTER
//
//
//
//
const footerTimlime = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    end: "bottom bottom",
    scrub: true,
  },
});
footerTimlime.to(".cc-footer-purple", { y: "0%" }, "<");
footerTimlime.to(".cc-footer-pink", { y: "0%" }, "<");
//faqBG1.to(".cc-faq-bg3", { y: `${window.innerWidth > 878 ? '0%' : '-5%'}` }, "<");
//faqBG1.to(".cc-faq-bg4", { y: "0%" }, "<"); cc-footer-purple

//
// Accordion
//
// Function to initialize each accordion set
const initAccordianSet = (accordianWrap) => {
  const accordians = accordianWrap.querySelectorAll("[data-accordian]");

  accordians.forEach((accordian) => {
    const accordianTop = accordian.querySelector(".accordian__top");

    accordianTop.addEventListener("click", () => {
      if (accordian.getAttribute("data-state") === "open") {
        accordian.setAttribute("data-state", "closed");
      } else {
        accordians.forEach((el) => el.setAttribute("data-state", "closed"));
        accordian.setAttribute("data-state", "open");
      }
    });
  });
};

// Get all accordion wraps
const accordianWraps = document.querySelectorAll("[data-accordian-wrap]");

// Initialize each accordion set
accordianWraps.forEach((accordianWrap) => {
  initAccordianSet(accordianWrap);
});

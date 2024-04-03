export default function handleFaq() {
  // FAQ - Background 1
  const faqBG1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cc-faq-bg1",
      start: "top 90%",
      end: "bottom bottom",
      // Testing
      markers: true,
      scrub: true,
      ease: "power4.out",
    },
  });

  faqBG1.eventCallback("onStart", () => {
    ScrollTrigger.refresh();
  });
  faqBG1.to(".svg_wrap.cc-faq-bg1", {
    y: `${window.innerWidth > 400 ? "-7%" : "0%"}`,
  });
  faqBG1.to(
    ".cc-faq-bg2",
    { y: `${window.innerWidth > 400 ? "-3%" : "0%"}` },
    "<"
  );

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
}

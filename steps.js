export default function handleSteps() {
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
}

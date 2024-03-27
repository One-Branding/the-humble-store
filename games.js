export default function handleGames() {
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
    phoneAnimation.to(".is-top-left", { x: "-97%", y: "-55%" }, 0);
    phoneAnimation.to(".is-top-right", { x: "125%", y: "-100%" }, "<");
    phoneAnimation.to(".is-bottom-left", { x: "-115%", y: "70%" }, "<");
    phoneAnimation.to(".is-bottom-right", { x: "97%", y: "35%" }, "<");
    phoneAnimation.to(".svg.cc-beams", { opacity: 1 });
  } else {
    // Mobile Version
    phoneAnimation.to(".phone__game.is-top-left", { x: "-98%", y: "-231%" }, 0);
    phoneAnimation.to(".phone__game.is-top-right", { x: "0%", y: "0%" }, "<");
    phoneAnimation.to(
      ".phone__game.is-bottom-left",
      { x: "48%", y: "-194%" },
      "<"
    );
    phoneAnimation.to(
      ".phone__game.is-bottom-right",
      { x: "-176%", y: "104%" },
      "<"
    );
    phoneAnimation.to(".svg.cc-beams", { opacity: 1 });
  }
}

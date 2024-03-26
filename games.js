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
    phoneAnimation.to(".phone__game.is-slay", { x: "-92%", y: "-205%" }, 0);
    phoneAnimation.to(".phone__game.is-green", { x: "29%", y: "-230%" }, "<");
    phoneAnimation.to(".phone__game.is-blue", { x: "108%", y: "-107%" }, "<");
    phoneAnimation.to(".phone__game.is-orange", { x: "-182%", y: "14%" }, "<");
    phoneAnimation.to(".phone__game.is-forager", { x: "113%", y: "104%" }, "<");
    phoneAnimation.to(
      ".phone__game.is-unpacking",
      { x: "-100%", y: "90%" },
      "<"
    );
    phoneAnimation.to(".phone__game.is-wizard", { x: "-162%", y: "-95%" }, "<");
    phoneAnimation.to(
      ".phone__game.is-crying-sun",
      { x: "160%", y: "-5%" },
      "<"
    );
    phoneAnimation.to(".svg.cc-beams", { opacity: 1 });
  } else {
    // Mobile Version
    phoneAnimation.to(".phone__game.is-slay", { x: "-98%", y: "-231%" }, 0);
    phoneAnimation.to(".phone__game.is-green", { x: "155%", y: "-41%" }, "<");
    phoneAnimation.to(".phone__game.is-blue", { x: "48%", y: "-194%" }, "<");
    phoneAnimation.to(".phone__game.is-orange", { x: "-176%", y: "104%" }, "<");
    phoneAnimation.to(".phone__game.is-forager", { x: "74%", y: "232%" }, "<");
    phoneAnimation.to(
      ".phone__game.is-unpacking",
      { x: "-89%", y: "221%" },
      "<"
    );
    phoneAnimation.to(".phone__game.is-wizard", { x: "-154%", y: "-62%" }, "<");
    phoneAnimation.to(
      ".phone__game.is-crying-sun",
      { x: "149%", y: "92%" },
      "<"
    );
    phoneAnimation.to(".svg.cc-beams", { opacity: 1 });
  }
}

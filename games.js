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
    phoneAnimation.to(".phone__game.is-top-left", { x: "-92%", y: "-205%" }, 0);
    phoneAnimation.to(
      ".phone__game.is-top-right",
      { x: "29%", y: "-230%" },
      "<"
    );
    phoneAnimation.to(
      ".phone__game.is-bottom-left",
      { x: "108%", y: "-107%" },
      "<"
    );
    phoneAnimation.to(
      ".phone__game.is-bottom-right",
      { x: "-182%", y: "14%" },
      "<"
    );
  } else {
    // Mobile Version
    phoneAnimation.to(".phone__game.is-top-left", { x: "-98%", y: "-231%" }, 0);
    phoneAnimation.to(
      ".phone__game.is-top-right",
      { x: "155%", y: "-41%" },
      "<"
    );
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
  }
}

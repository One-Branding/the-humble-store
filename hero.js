export default function handleHero() {
  const heroBG1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cc-hero-bg1",
      start: "top 50%",
      end: "bottom top",
      scrub: 1,
    },
  });

  heroBG1.to(".cc-hero-bg1", { y: "40%" });
}

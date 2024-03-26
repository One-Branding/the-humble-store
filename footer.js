export default function handleFooter() {
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
}

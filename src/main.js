import './style.css'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#plato-quote-sticky",
  { opacity: 0, x: -50 },
  {
    opacity: 1,
		x: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#plato-quote-sticky-container",
			toggleActions: "play reverse play reverse",
    }
  }
);

document.querySelectorAll(".scroll-fade-in").forEach(el => 
gsap.fromTo(
  el,
  { opacity: 0 },
  {
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: el,
			toggleActions: "play reverse play reverse",
    }
  }
));

// Right swipe
document.querySelectorAll(".scroll-swipe-right").forEach(el => {
  gsap.fromTo(
    el,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
			delay: 0.3,
      scrollTrigger: {
        trigger: el,
        toggleActions: "play reverse play reverse",
      }
    }
  );
});

// Left swipe
document.querySelectorAll(".scroll-swipe-left").forEach(el => {
  gsap.fromTo(
    el,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
			delay: 0.3,
      scrollTrigger: {
        trigger: el,
        toggleActions: "play reverse play reverse",
      }
    }
  );
});

// Top swipe
document.querySelectorAll(".scroll-swipe-top").forEach(el => {
  gsap.fromTo(
    el,
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
			delay: 0.3,
      scrollTrigger: {
        trigger: el,
        toggleActions: "play reverse play reverse",
      }
    }
  );
});

document.querySelectorAll(".scroll-swipe-bottom").forEach(el => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
			delay: 0.3,
      scrollTrigger: {
        trigger: el,
        toggleActions: "play reverse play reverse",
      }
    }
  );
});
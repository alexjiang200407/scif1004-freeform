import './style.css'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional default styling
import 'tippy.js/themes/light.css';

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

document.querySelectorAll("#title .scroll-fade-in").forEach(el => 
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
document.querySelectorAll("#title .scroll-swipe-right").forEach(el => {
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
document.querySelectorAll("#title .scroll-swipe-left").forEach(el => {
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
document.querySelectorAll("#title .scroll-swipe-top").forEach(el => {
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

document.querySelectorAll("#title .scroll-swipe-bottom").forEach(el => {
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

tippy('.dictionary-word', {
  content(reference) {
    const word = reference.getAttribute('data-word') ?? reference.textContent.trim();
    const definition = reference.getAttribute('data-definition') || 'No definition provided.';
    return `
      <div class='dictionary-tooltip'>
        <h3 class='dictionary-tooltip-title'>${word}</h3>
				<p class='dictionary-tooltip-content'>
        	${definition}
				</p>
      </div>
    `;
  },
  allowHTML: true,
  interactive: true,
	theme: 'light',
  maxWidth: 250,
	trigger: 'mouseenter focus click',
});

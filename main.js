gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2 });
});

// Text Reveal on Load
gsap.from(".hero h1 span", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
});

// Horizontal Scroll
let sections = gsap.utils.toArray(".project");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-wrapper",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".work-container").offsetWidth
        }
});

// Footer Text Reveal
gsap.from("footer h2", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Add this to your main.js after the horizontal scroll trigger
gsap.utils.toArray(".project-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "left center", // Triggered as the card enters the horizontal view
            containerAnimation: scrollTween, // Essential for horizontal triggers
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// Update your horizontal scroll variable slightly to allow for the card animation
const scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
                            ease: "none",
                            scrollTrigger: {
                                trigger: ".horizontal-wrapper",
                                pin: true,
                                scrub: 1,
                                end: () => "+=" + document.querySelector(".work-container").offsetWidth
                            }
});

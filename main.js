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

// Orbit Section Reveal
gsap.from(".orbit-title", {
    scrollTrigger: {
        trigger: ".orbit-section",
        start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".orbit-container", {
    scrollTrigger: {
        trigger: ".orbit-section",
        start: "top 60%",
    },
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
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

// Hero slider: background and artwork layers switch together every 6s,
// unless the visitor prefers reduced motion. The bars pick a slide directly.
const bg = [...document.querySelectorAll(".hero-bg .slide")];
const art = [...document.querySelectorAll(".hero-art .slide")];
const bars = [...document.querySelectorAll(".bars button")];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
let index = 0;
let timer;

const show = (next) => {
  index = (next + bg.length) % bg.length;
  [bg, art, bars].forEach((list) => list.forEach((el, i) => el.classList.toggle(list === bars ? "on" : "is-active", i === index)));
};

const restart = () => {
  clearInterval(timer);
  if (!reduced) timer = setInterval(() => show(index + 1), 6000);
};

bars.forEach((bar, i) => bar.addEventListener("click", () => { show(i); restart(); }));

// Close the mobile menu after picking a section.
document.querySelectorAll(".menu nav a").forEach((a) => a.addEventListener("click", () => a.closest("details").removeAttribute("open")));

restart();

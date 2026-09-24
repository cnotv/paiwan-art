// Hero slider: autoplay every 6s unless the visitor prefers reduced motion.
const slides = [...document.querySelectorAll(".slide")];
const bars = [...document.querySelectorAll(".bars i")];
const current = document.querySelector("[data-current]");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
let index = 0;
let timer;

const show = (next) => {
  index = (next + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
  bars.forEach((b, i) => b.classList.toggle("on", i === index));
  current.textContent = String(index + 1).padStart(2, "0");
};

const restart = () => {
  clearInterval(timer);
  if (!reduced) timer = setInterval(() => show(index + 1), 6000);
};

document.querySelector("[data-prev]").addEventListener("click", () => { show(index - 1); restart(); });
document.querySelector("[data-next]").addEventListener("click", () => { show(index + 1); restart(); });

// Close the mobile menu after picking a section.
document.querySelectorAll(".menu nav a").forEach((a) => a.addEventListener("click", () => a.closest("details").removeAttribute("open")));

show(0);
restart();

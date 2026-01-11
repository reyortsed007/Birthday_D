// Fade-in on scroll
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

// Floating hearts & butterflies
const deco = document.querySelector('.decorations');
const icons = ["💖","💕","💞","💗","🦋"];

for (let i = 0; i < 30; i++) {
  let span = document.createElement('span');
  span.innerHTML = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (15 + Math.random() * 15) + "s";
  span.style.fontSize = (16 + Math.random() * 18) + "px";
  deco.appendChild(span);
}

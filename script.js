const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 }); /*n percebo nada disto*/

document.querySelectorAll(".card").forEach(el => observer.observe(el));

/*leve impressão de má implementação*/
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5, //deve dar, quer dizer espero que de
    dx: (Math.random() - 0.5) * 0.7,
    dy: (Math.random() - 0.5) * 0.7
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath(); //rever
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

    /*brilho haha*/
    ctx.fillStyle = "rgba(59, 130, 246, 0.9)";
    ctx.shadowColor = "#3b82f6";
    ctx.shadowBlur = 6;

    ctx.fill();
  });

  requestAnimationFrame(animate); //rever?
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


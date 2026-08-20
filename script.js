const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));

const optimizeButton = document.getElementById('demoOptimize');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const toast = document.getElementById('toast');

optimizeButton?.addEventListener('click', () => {
  optimizeButton.textContent = 'OTIMIZANDO...';
  progressBar.style.width = '100%';
  progressText.textContent = '100%';
  setTimeout(() => {
    optimizeButton.textContent = 'OTIMIZADO ✓';
    toast.textContent = 'Demonstração: sistema otimizado.';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }, 700);
});

document.querySelectorAll('.disabled-buy').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    toast.textContent = `${button.dataset.product}: checkout será conectado depois.`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2400);
  });
});

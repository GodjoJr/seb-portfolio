const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

const techs = [
  { cat: 'Env',      label: 'MacOS' },
  { cat: 'Env',      label: 'Linux' },
  { cat: 'Back-end', label: 'PHP' },
  { cat: 'Back-end', label: 'Symfony' },
  { cat: 'Back-end', label: 'WordPress' },
  { cat: 'Back-end', label: 'API REST' },
  { cat: 'Back-end', label: 'Node.js' },
  { cat: 'Front',    label: 'HTML' },
  { cat: 'Front',    label: 'CSS' },
  { cat: 'Front',    label: 'SASS' },
  { cat: 'Front',    label: 'React' },
  { cat: 'BDD',      label: 'MySQL' },
  { cat: 'BDD',      label: 'MariaDB' },
  { cat: 'DevOps',   label: 'Git' },
  { cat: 'DevOps',   label: 'GitHub' },
  { cat: 'DevOps',   label: 'GitLab' },
  { cat: 'DevOps',   label: 'Docker' },
  { cat: 'DevOps',   label: 'CI/CD' },
];

const track = document.getElementById('marquee');
const all = [...techs, ...techs];
track.innerHTML = all.map(t =>
  `<div class="tech-tag"><span class="cat">${t.cat}</span>${t.label}</div>`
).join('');

const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => obs.observe(el));
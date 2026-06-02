const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? '#fff' : '';
      });
    });
  },
  { rootMargin: '-40% 0px -55% 0px' },
);

sections.forEach((section) => observer.observe(section));

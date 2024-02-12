document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top >= 0 && top <= window.innerHeight) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    });
  });

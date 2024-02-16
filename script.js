const intro = document.querySelector(".intro");
const introMsg = document.querySelector(".introMsg");
const msg = document.querySelectorAll(".msg");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    msg.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 3) * 400);
    });

    setTimeout(() => {
      msg.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 3) * 50);
      });
    }, 2400);
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top >= 0 && top <= window.innerHeight) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});

// Function to handle intersection of observed elements
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.1,
});

document.querySelectorAll(".move").forEach((move) => {
  observer.observe(move);
});

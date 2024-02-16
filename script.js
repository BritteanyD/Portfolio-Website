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

// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);
//   document.querySelectorAll(".move").forEach(function (element) {
//     ScrollTrigger.create({
//       trigger: element,
//       start: "top 80%",
//       onEnter: function () {
//         element.classList.add("animate");
//       },
//       onLeaveBack: function () {
//         element.classList.remove("animate");
//       },
//     });
//   });
// });

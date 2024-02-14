const intro = document.querySelector(".intro");
const introMsg = document.querySelector(".introMsg");
const msg = document.querySelectorAll(".msg");
const nav = document.querySelector("nav");
const home = window.location.pathname === "/index.html";

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
  if (home) {
    setTimeout(() => {
      nav.style.display = "flex";
    }, 2700);
  } else {
    nav.style.display = "flex";
  }
});

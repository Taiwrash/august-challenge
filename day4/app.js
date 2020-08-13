const nav = document.querySelector(".nav-content");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("c lick", () => {
  if (hamburger) {
    nav.style.display = "block";
    hamburger.style.bottom = "335%";
    hamburger.textContent = "X";
  } else {
    nav.style.display = "none";
  }
});

const bigAnime = document.querySelector(".biggest-circle");
const mediumAnime = document.querySelector(".medium-circle");
const h3 = document.querySelector("h3");
const small = document.querySelector(".small-circle");
const span = document.querySelector("span");

small.addEventListener("click", () => {
  mediumAnime.classList.add("animationSmall");
  bigAnime.classList.add("animationBig");
  h3.classList.add("animationBig");
  span.style.display = "none";
  h3.style.display = "block";
});

// const start =

// const stop = () => {
//   mediumAnime.classList.remove("animationSmall");
//   bigAnime.classList.remove("animationBig");
//   h3.classList.remove("animationBig");
//   span.style.display = "block";
//   span.textContent = "TAP TO CONTINUE";
//   h3.style.display = "none";
// };

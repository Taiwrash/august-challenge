const nav = document.querySelector("nav");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  if (nav.style.display == "none") {
    nav.style.display = "block";
    hamburger.textContent = "X";
  } else {
    nav.style.display = "none";
    hamburger.textContent = "=";
  }
});

//copy area

const result = document.querySelector(".getArea");
const getBtn = document.querySelector(".btn-get");
const shortBtn = document.querySelector(".btn-short");
const urlContent = document.getElementById("url-content");
const resultInput = document.getElementById("result");
const form = document.querySelector("form");
shortBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (urlContent.value == "") {
    alert("Provide a valid URL!");
  } else {
    result.style.display = "block";
    resultInput.value = urlContent.value;
    form.reset();
  }
});

getBtn.addEventListener("click", () => {
  getBtn.style.backgroundColor = "indigo";
  getBtn.textContent = "Copied!";
});

const nav = document.querySelector(".nav-drop");
const hamburger = document.getElementById("hamburger");
console.log(nav);
hamburger.addEventListener("click", () => {
  if (nav.style.display == "none") {
    nav.style.display = "flex";
    hamburger.textContent = "X";
    hamburger.style.left = "0px";
  } else {
    nav.style.display = "none";
    hamburger.textContent = "=";
    hamburger.style.fontSize = "20px";
    hamburger.style.position = "relative";
    hamburger.style.left = "60%";
  }
});

//Copy Section

const copyDiv = document.querySelector(".copy");
let copyInput = document.createElement("input");
let copyInput1 = document.createElement("input");
let copyBtn = document.createElement("button");
const shorten = document.getElementById("shorten");
let resultInput = document.getElementsByTagName("input");

shorten.addEventListener("click", () => {
  if (resultInput[0].value == "") {
    alert("Please a valid url!");
  } else {
    copyDiv.appendChild(copyInput);
    copyDiv.appendChild(copyInput1);
    copyBtn.textContent = "Copy";
    copyDiv.appendChild(copyBtn);
    copyDiv.style.display = "flex";
    resultInput[0].value = resultInput[1].value;
  }
});

copyBtn.addEventListener("click", (e) => {
  if (e) {
    copyBtn.style.backgroundColor = "hsl(255, 11%, 22%)";
    copyBtn.textContent = "Copied!";
    copyBtn.textContent = "Copied!";
    resultInput[2].select();
    // console.log(resultInput);
    document.execCommand("copy");
  }
});

//copy area

// const result = document.querySelector(".getArea");
// const getBtn = document.querySelector(".btn-get");
// const shortBtn = document.querySelector(".btn-short");
// const urlContent = document.getElementById("url-content");
// const resultInput = document.getElementById("result");
// const form = document.querySelector("form");
// shortBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (urlContent.value == "") {
//     alert("Provide a valid URL!");
//   } else {
//     result.style.display = "block";
//     resultInput.value = urlContent.value;
//     form.reset();
//   }
// });

// getBtn.addEventListener("click", () => {
//   getBtn.style.backgroundColor = "indigo";
//   getBtn.textContent = "Copied!";
//   resultInput.select();
//   document.execCommand("copy");
// });

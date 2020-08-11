const slider = document.getElementById("mode");
let content = document.querySelectorAll("div");
let header = document.querySelector("h3");
let header1 = document.querySelector("h4");
const body = document.querySelector("body");

slider.addEventListener("change", () => {
  slider.checked
    ?
        body.classList.add("dark-theme");
        content.forEach((contents) => {
        contents.classList.add("dark-theme");
        header.classList.add("dark-theme");
        header1.classList.add("dark-theme");
        slider.classList.add("dark-theme");
      })
    : content.forEach((contents) => {
        contents.classList.remove("dark-theme");
        header.classList.remove("dark-theme");
        header1.classList.remove("dark-theme");
        slider.classList.remove("dark-theme");
        body.classList.remove("dark-theme");
      });
});

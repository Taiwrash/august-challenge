const slider = document.getElementById("slider");

const annuallyPricing = document.querySelector(".annually-pricing");
const monthlyPricing = document.querySelector(".monthly-pricing");

const checked = () => {
  if (slider.checked) {
    monthlyPricing.style.display = "none";
    annuallyPricing.style.display = "grid";
  } else {
    annuallyPricing.style.display = "none";
    monthlyPricing.style.display = "grid";
  }
};

slider.addEventListener("change", checked);

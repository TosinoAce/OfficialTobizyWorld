const serviceBtn = document.querySelector(".service-dropdown");
const services = document.querySelector(".dropdown-content-container");
const themeToggle = document.getElementById("toggleMode");
const modeIndicator = document.querySelector("#toggleMode > img")
const body = document.querySelector("body");
const heroImg = document.getElementById("imageCarousel");
const hamburger = document.querySelector(".barContainer");
const mobileNav = document.querySelector("header");
const numbers = [1, 2, 3, 4, 5];
let index = 0;


serviceBtn.addEventListener("click", () => {
  services.classList.toggle("open");
});

function changeImage() {
  let pickedNumber = numbers[index];
  var number = pickedNumber;
  var randomImage = "heroImg" + number + ".jpg";
  var randomImageSource = "images/" + randomImage;
  heroImg.setAttribute("src", randomImageSource);
  index = (index + 1) % numbers.length;
}

changeImage();
setInterval(changeImage, 5000);

themeToggle.addEventListener("click", () => {
  body.classList.toggle("darkTheme");
  if (body.classList.contains("darkTheme")) {
    modeIndicator.setAttribute("src", "images/moon-fill.svg")
  } else{
    modeIndicator.setAttribute("src", "images/brightness-low-fill.svg")
  }
});

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-open");
  if(mobileNav.classList.contains("mobile-open")){
    hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
  </svg>`;
  } else {
    hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
  </svg>`;
  }
})
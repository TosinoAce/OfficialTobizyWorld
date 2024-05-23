const faq = document.querySelectorAll(".question");
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

faq.forEach((question) => {
  question.addEventListener("click", () => {
    faq.forEach((item) => {
      item.classList.remove("viewAns");
    });
    if (question.classList.contains("viewAns")) {
      question.classList.remove("viewAns");
    } else {
      question.classList.add("viewAns");
    }
  });
});

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

const hamburgerIndicator = document.querySelector(".barContainer > img")
hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-open");
  if(mobileNav.classList.contains("mobile-open")){
    hamburgerIndicator.setAttribute("src", "images/x-lg.svg");
  } else {
    hamburgerIndicator.setAttribute("src", "images/list.svg");
  }
})
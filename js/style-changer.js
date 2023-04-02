const styleSwitcherToggler = document.querySelector(".toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-changer").classList.toggle("open");
});

// hiding on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-changer").classList.contains("open")) {
    document.querySelector(".style-changer").classList.remove("open");
  }
});
//hiding on click
function colorChangerCloser() {
  if (document.querySelector(".style-changer").classList.contains("open")) {
    document.querySelector(".style-changer").classList.remove("open");
  }
}

// color switching via css link
const alternateStyles = document.querySelectorAll(".alternate-css");
function SetActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
  colorChangerCloser();
}

//day/night mode controller
const darkmode = document.querySelector(".dark-mode");
darkmode.addEventListener("click", () => {
  darkmode.querySelector("i").classList.toggle("fa-mooon");
  darkmode.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("dark");
});

//toggling the day and night icon on click
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    darkmode.querySelector("i").classList.add("fa-sun");
  } else {
    darkmode.querySelector("i").classList.add("fa-moon");
  }
});

//on click showing the section only
const viewChanger = document.querySelectorAll(".section");
const activeSetting = document.querySelectorAll(".body-section");

function setActiveSection(layers) {
  viewChanger.forEach((section) => {
    if (layers === section.getAttribute("title")) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });
  activeSetting.forEach((item) => {
    if (layers === item.getAttribute("title")) {
      item.classList.remove("incative");
    } else {
      item.classList.add("inactive");
    }
  });
}
 
//removing section access on screen size less than 1198px
window.addEventListener("resize", function () {
  if (window.innerWidth < 1198) {
    viewChanger.forEach((section) => {
      section.classList.remove("hidden");
    });
  }
});

document.getElementById("my-button").onclick = function () {
  setActiveSection('contact');
};


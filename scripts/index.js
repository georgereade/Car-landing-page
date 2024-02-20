// function to
function slideUp() {
  anime({
    targets: "#main-car",
    translateX: -300,
    duration: 3000,
    easing: "easeInOutExpo",
    opacity: 1,
  });
}

slideUp();

function fadeIn() {
  anime({
    targets: ["#signup-container", "#top-header"],
    translateY: -30,
    duration: 1000,
    easing: "easeInOutExpo",
    opacity: 1,
  });
}

function showFeatures() {
  anime({
    targets: "#features",
    opacity: 1,
    translateY: -25,
    duration: 1000,
    easing: "easeInOutSine",
  });
}

// add an event listener to fade in on scrolling
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 5 || document.body.scrollTop > 5) {
    fadeIn();
  }
}

// start fade in animation on touch for mobile
$(document).bind("touchstart", fadeIn);

function slideDown() {
  anime({
    targets: ["#email-form", "#confirm-button"],
    translateY: -40,
    duration: 1000,
    easing: "easeInOutQuad",
    opacity: 1,
  });
}

function hideRegister() {
  anime({
    targets: "#notify-button",
    duration: 400,
    delay: 100,
    opacity: 0,
    easing: "easeInOutExpo",
  });
}

function removeRegister() {
  anime({
    targets: "#notify-button",
    duration: 500,
    delay: 400,
    translateY: -9999,
    easing: "easeInOutExpo",
  });
}

$(document).ready(function () {
  $("#notify-button").click(function () {
    slideDown();
    hideRegister();
    removeRegister();
  });
});

function hideDiscover() {
  anime({
    targets: "#discover-button",
    duration: 400,
    delay: 100,
    opacity: 0,
    easing: "easeInOutExpo",
  });
}

function removeDiscover() {
  anime({
    targets: "#discover-button",
    duration: 500,
    delay: 400,
    translateY: -9999,
    easing: "easeInOutExpo",
  });
}

$(document).ready(function () {
  $("#discover-button").click(function () {
    showFeatures();
    hideDiscover();
    removeDiscover();
    document.getElementById("features").style.height = "100%";
  });
});

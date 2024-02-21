// animate the car entering the viewport
function slideIn() {
  anime({
    targets: "#main-car",
    translateX: -300,
    duration: 3000,
    easing: "easeInOutExpo",
    opacity: 1,
  });
}

slideIn();

// animate the main text becoming visible and rising
function fadeIn() {
  anime({
    targets: ["#signup-container", "#top-header", "#features"],
    translateY: -30,
    duration: 800,
    easing: "easeInQuad",
    opacity: 1,
  });
}

// animate the features element becoming visible
// function showFeatures() {
//   anime({
//     targets: "#features",
//     opacity: 1,
//     translateY: -25,
//     duration: 1000,
//     easing: "easeInOutSine",
//   });
// }

// subtle animation of feature headers to draw attention
function featuresPulse() {
  anime({
    targets: ".feature-header",
    duration: 600,
    easing: "easeInOutSine",
    scale: 1.05,
    loop: 2,
    direction: "alternate",
  });
}

// add an event listener to fade in on scrolling
window.addEventListener("scroll", scrollFunction);
// call fadeIn and featuresPulse functions on scroll
function scrollFunction() {
  if (window.scrollY > 5 || document.body.scrollTop > 5) {
    fadeIn();
    featuresPulse();
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
    hideDiscover();
    removeDiscover();
  });
});

if ($(window).width() <= 1024) {
  $("#comfort-image").click(function (e) {
    e.preventDefault();
    anime({
      targets: "#comfort-text",
      opacity: 1,
      height: 160,
      duration: 500,
      easing: "easeInOutExpo",
    });
    anime({
      targets: e.currentTarget,
      opacity: 0.3,
      duration: 700,
      direction: "alternate",
      easing: "easeInOutExpo",
    });
  });
}

if ($(window).width() <= 1024) {
  $("#innovation-image").click(function (e) {
    e.preventDefault();
    anime({
      targets: "#innovation-text",
      opacity: 1,
      height: 160,
      duration: 500,
      easing: "easeInOutExpo",
    });
    anime({
      targets: e.currentTarget,
      opacity: 0.3,
      duration: 700,
      direction: "alternate",
      easing: "easeInOutExpo",
    });
  });
}

if ($(window).width() <= 1024) {
  $("#safety-image").click(function (e) {
    e.preventDefault();
    anime({
      targets: "#safety-text",
      opacity: 1,
      height: 160,
      duration: 500,
      easing: "easeInOutExpo",
    });
    anime({
      targets: e.currentTarget,
      opacity: 0.3,
      duration: 700,
      direction: "alternate",
      easing: "easeInOutExpo",
    });
  });
}

// animate image and header on load
function onLoadAnimations() {
  anime({
    targets: "#main-car",
    translateX: -300,
    duration: 3000,
    easing: "easeInOutExpo",
    opacity: 1,
  });
  anime({
    targets: ["#top-header"],
    translateY: -30,
    delay: 500,
    duration: 800,
    easing: "easeInQuad",
    opacity: 1,
  });
}

onLoadAnimations();

// animate the features and signup elements' opacity
function fadeIn() {
  anime({
    targets: ["#signup-container", "#features"],
    translateY: -30,
    duration: 800,
    delay: 200,
    easing: "easeInQuad",
    opacity: 1,
  });
}

// subtle animation of feature headers to draw attention
// function featuresPulse() {
//   anime({
//     targets: ".feature-header",
//     duration: 300,
//     easing: "easeInOutSine",
//     scale: 1.05,
//     loop: 2,
//     direction: "alternate",
//   });
// }

// add an event listener to fade in on scrolling
window.addEventListener("scroll", scrollFunction);
// call fadeIn and featuresPulse functions on scroll
function scrollFunction() {
  if (window.scrollY > 5 || document.body.scrollTop > 5) {
    fadeIn();
  }
}

// start fade in animation on touch for mobile
$(document).bind("touchstart", fadeIn);

// submit button slides down and becomes visible
function slideDown() {
  anime({
    targets: ["#email-form", "#confirm-button"],
    translateY: -40,
    duration: 1000,
    easing: "easeInOutQuad",
    opacity: 1,
  });
}

// register button becomes invisible
function hideRegister() {
  anime({
    targets: "#register-button",
    duration: 400,
    delay: 100,
    opacity: 0,
    easing: "easeInOutExpo",
  });
}

// register button moved off screen after fading out
function removeRegister() {
  anime({
    targets: "#register-button",
    duration: 500,
    delay: 400,
    translateY: -9999,
    easing: "easeInOutExpo",
  });
}

// run the above three functions after clicking the register button
$(document).ready(function () {
  $("#register-button").click(function () {
    slideDown();
    hideRegister();
    removeRegister();
  });
});

// functionality for expanding feature text if screen is below 1024px width
if ($(window).width() <= 1024) {
  $("#comfort-div").click(function (e) {
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
  $("#innovation-div").click(function (e) {
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
  $("#safety-div").click(function (e) {
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

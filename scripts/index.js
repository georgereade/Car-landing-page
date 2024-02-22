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
    duration: 500,
    easing: "easeInQuad",
    opacity: 1,
  });
}

// add an event listener to fade in on scrolling
window.addEventListener("scroll", scrollFunction);
// call fadeIn functions on scroll
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
var showComfortText = anime({
  targets: "#comfort-text",
  opacity: 1,
  height: 160,
  duration: 500,
  easing: "easeInOutExpo",
  autoplay: false,
});

var rotateComfortArrow = anime({
  targets: "#comfort-arrow",
  duration: 400,
  rotate: 180,
  autoplay: false,
});

if ($(window).width() <= 1024) {
  $("#comfort-div").click(function (e) {
    e.preventDefault();
    anime({
      targets: e.currentTarget,
      opacity: 0.5,
      duration: 300,
      direction: "alternate",
      easing: "easeInOutExpo",
    });

    showComfortText.play();
    rotateComfortArrow.play();
    showComfortText.finished.then(() => {
      showComfortText.reverse();
      rotateComfortArrow.reverse();
    });
  });
}

var showInnovationText = anime({
  targets: "#innovation-text",
  opacity: 1,
  height: 160,
  duration: 500,
  easing: "easeInOutExpo",
  autoplay: false,
});

var rotateInnovationArrow = anime({
  targets: "#innovation-arrow",
  duration: 400,
  rotate: 180,
  autoplay: false,
});

if ($(window).width() <= 1024) {
  $("#innovation-div").click(function (e) {
    e.preventDefault();
    anime({
      targets: e.currentTarget,
      opacity: 0.5,
      duration: 300,
      direction: "alternate",
      easing: "easeInOutExpo",
    });

    showInnovationText.play();
    rotateInnovationArrow.play();
    showInnovationText.finished.then(() => {
      showInnovationText.reverse();
      rotateInnovationArrow.reverse();
    });
  });
}

var showSafetyText = anime({
  targets: "#safety-text",
  opacity: 1,
  height: 160,
  duration: 500,
  easing: "easeInOutExpo",
  autoplay: false,
});

var rotateSafetyArrow = anime({
  targets: "#safety-arrow",
  duration: 400,
  rotate: 180,
  autoplay: false,
});

if ($(window).width() <= 1024) {
  $("#safety-div").click(function (e) {
    e.preventDefault();

    anime({
      targets: e.currentTarget,
      opacity: 0.5,
      duration: 300,
      direction: "alternate",
      easing: "easeInOutExpo",
    });

    showSafetyText.play();
    rotateSafetyArrow.play();
    showSafetyText.finished.then(() => {
      showSafetyText.reverse();
      rotateSafetyArrow.reverse();
    });
  });
}

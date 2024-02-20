function slideUp() {
  anime({
    targets: "#main-car",
    translateX: -300,
    duration: 3000,
    easing: "easeInOutExpo",
    opacity: 1,
  });
}

function fadeIn() {
  anime({
    targets: "#signup-container",
    translateY: -50,
    duration: 1000,
    easing: "easeInOutExpo",
    opacity: 1,
  });
}

window.onscroll = function () {
  scrollFunction();
};

slideUp();

function scrollFunction() {
  if (window.scrollY > 5 || window.pageYOffset > 5) {
    // slideUp();
    fadeIn();
  }
}

// slideUp();
// fadeIn();

function slideDown() {
  anime({
    targets: ["#email-form", "#confirm-button"],
    translateY: -40,
    duration: 1000,
    easing: "easeInOutQuad",
    opacity: 1,
  });
}

function hide() {
  anime({
    targets: "#notify-button",
    duration: 400,
    delay: 100,
    opacity: 0,
    easing: "easeInOutExpo",
  });
}

function remove() {
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
    hide();
    remove();
  });
});

// const scrollPercent = () => {
//   const bodyST = document.body.scrollTop;
//   const docST = document.documentElement.scrollTop;
//   const docSH = document.documentElement.scrollHeight;
//   const docCH = document.documentElement.clientHeight;

//   return ((docST + bodyST) / (docSH - docCH)) * 100;
// };

// window.onscroll = () => {
//   fadeIn.seek((scrollPercent() / 100) * fadeIn.duration);
// };

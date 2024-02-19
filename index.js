function slideIn() {
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
    duration: 3000,
    easing: "easeInOutExpo",
    opacity: 1,
    delay: 1000,
  });
}

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

slideIn();
fadeIn();

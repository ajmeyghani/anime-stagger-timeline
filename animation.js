const myAnim = anime({
  targets: ".box",

  opacity: {
    value: anime.stagger([1, 0.4], { easing: "linear" }),
    easing: "easeInOutSine",
    duration: 1000,
  },

  scaleY: {
    value: [0.1, 1],
    easing: "easeOutElastic(1, 0.5)",
    delay: anime.stagger(50, { easing: "easeInOutSine", from: "center" }),
    duration: 1000,
  },

  autoplay: false,
  complete: () => {
    myAnim.reverse();
    myAnim.play();
  },
});

export { myAnim };
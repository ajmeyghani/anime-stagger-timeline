const colorChange = (el, i) => {
  const degree = 3;
  const startHue = 200;
  const sat = "100%";
  const light = "50%";
  const alpha = "1";
  const hueA = startHue + (i * degree + degree);
  const hueB = startHue + ((i + 1) * degree + degree);
  const a = `hsla(${hueA}, ${sat}, ${light}, ${alpha})`;
  const b = `hsla(${hueB}, ${sat}, ${light}, ${alpha})`;
  console.log([a, b]);
  return [a, b];
};

const changeLightNess = (el, i) => {
  return '20';
}

const myAnim = anime({
  targets: ".box",
  scaleY: [1, 1.5],
  easing: "easeOutElastic(1, 0.5)",
  // background: {
  //   duration: 500,
  //   easing: "linear",
  //   value: colorChange,
  // },
  opacity: {
    easing: "easeInOutSine",
    value: 0.1,
    duration: 700,
    delay: anime.stagger(100, { from: 0, easing: "easeInOutSine" }),
  },
  delay: anime.stagger(50, { from: 0, easing: "linear" }),
  duration: 800,
  autoplay: false,
  complete: (a, b, c) => {
    myAnim.reverse();
    myAnim.play();
  },
});

export { myAnim };

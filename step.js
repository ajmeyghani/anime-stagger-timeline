const introAnimation = window.anime.timeline({
	loop: true,
	autoplay: false,
});

const moveCube = {
	targets: ".box",
	translateX: 200,
	easing: "steps(4)",
	duration: 800,
	delay: 500
};

const scaleUp = {
	targets: ".box",
	scale: 50,
	easing: "steps(5)",
	duration: 500,
};

const animateText = {
	targets: ".letter",
	opacity: {
		value: 1,
		duration: 50,
		easing: "linear",
	},
	delay: anime.stagger(150, { easing: "linear" }),
};

const fillColor = {
	targets: ".letter",
	color: `hsl(100, 55%, 60%)`,
	easing: "steps(5)",
	duration: 500
}

const bounce = {
	targets: ".letter",
	keyframes: [
		{translateY: 10},
		{translateY: -10},
		{translateY: 0}
	],
	duration: 800,
	easing: "steps(8)"
};

const fadeOutText = {
	targets: ".letter",
	opacity: 0,
	duration: 500,
	easing: "steps(5)",
};

const fadeOutBox = {
	targets: ".box",
	opacity: 0,
	easing: "steps(10)",
	duration: 500
}

introAnimation
	.add(moveCube)
	.add(scaleUp, "+=250")
	.add(animateText, "+=200")
	// .add(bounce)
	.add(fillColor, "-=200")
	.add(fadeOutText, "+=2000")
	.add(fadeOutBox, "+=200")
	
introAnimation.play();
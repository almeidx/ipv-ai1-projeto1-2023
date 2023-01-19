"use strict";

const slider = document.querySelector(".bg-img .overlay");
const imagens = [
	"/img/sliders/ipv.jpg",
	"/img/sliders/estgv.jpg",
	"/img/sliders/essv.jpg",
	"/img/sliders/esev.jpg",
	"/img/sliders/estgl.jpg",
	"/img/sliders/esav.jpg",
];
let imageIndex = 0;

setInterval(() => {
	imageIndex++;

	if (imageIndex >= imagens.length) {
		imageIndex = 0;
	}

	slider.style.backgroundImage = `url(${imagens[imageIndex]})`;
}, 5_000);

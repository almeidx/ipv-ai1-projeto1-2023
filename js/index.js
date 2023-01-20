"use strict";

const slider = document.querySelector(".bg-img .slider");
const imagens = [
	"img/sliders/ipv.jpg",
	"img/sliders/estgv.jpg",
	"img/sliders/essv.jpg",
	"img/sliders/esev.jpg",
	"img/sliders/estgl.jpg",
	"img/sliders/esav.jpg",
];
let imagemIndex = 0;

setInterval(() => {
	imagemIndex++;
	if (imagemIndex >= imagens.length) imagemIndex = 0;

	slider.style.backgroundImage = `url(${imagens[imagemIndex]})`;
}, 5_000);

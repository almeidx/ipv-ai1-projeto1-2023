"use strict";

const footerNote = document.getElementById("footer-note");
const relogio = document.getElementById("relogio");
const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".menu");

let menuOpen = false;

headerList.dataset.open = "false";

hamburger.addEventListener("click", (e) => {
	menuOpen = !menuOpen;

	renderMenu();
});

setInterval(() => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	relogio.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}, 1_000);

footerNote.innerText = footerNote.innerText.replace(
	"{{ano}}",
	new Date().getFullYear()
);

function pad(num) {
	return num.toString().padStart(2, "0");
}

function renderMenu() {
	if (menuOpen) {
		headerList.dataset.open = "true";
	} else {
		headerList.dataset.open = "false";
	}
}

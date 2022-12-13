"use strict";

const footerNote = document.getElementById("footer-note");
const relogio = document.getElementById("relogio");

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

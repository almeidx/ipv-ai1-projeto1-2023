const linkCursos = document.querySelector(".cursos-link");
const listaEscolas = document.querySelector(".escolas-lista");

let hoveredLink = false;
let timeout;

linkCursos.addEventListener("mouseover", () => {
	listaEscolas.dataset.visivel = "true";
	hoveredLink = true;
});

linkCursos.addEventListener("mouseout", () => {
	timeout = setTimeout(() => {
		listaEscolas.dataset.visivel = "false";
		timeout = null;
	}, 200);
});

document.addEventListener("mousemove", (event) => {});

listaEscolas.addEventListener("mouseover", () => {
	if (listaEscolas.dataset.visivel === "false") {
		listaEscolas.dataset.visivel = "true";
	}
});

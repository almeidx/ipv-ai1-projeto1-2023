"use strict";

const header = document.querySelector("header");

header.innerHTML = `
<a href="index.html">
	<img src="img/logo.svg" alt="Logótipo do IPV" />
</a>

<ul class="menu">
	<li><a class="menuItem" href="index.html">Home</a></li>
	<li><a class="menuItem" href="escolas.html">Escolas</a></li>
	<li>
		<button onclick="myFunction()" class="dropbtn">Cursos</button>
		<div id="myDropdown" class="dropdown-content">
			<a href="cursos.html#estgv">ESTGV</a>
			<a href="cursos.html#esev">ESEV</a>
			<a href="cursos.html#esav">ESAV</a>
			<a href="cursos.html#essv">ESSV</a>
			<a href="cursos.html#estgl">ESTGL</a>
		</div>
	</li>
	<li><a class="menuItem" href="contacto.html">Contacto</a></li>
</ul>


<button class="hamburger menu-open">
	<img src="../img/svg/hamburger.svg" />
</button>`;

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches(".dropbtn")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

const footer = document.querySelector("footer");

footer.innerHTML = `
<ul class="contactos">
	<li>
		<h4>Contactos</h4>
		<p>Instituto Politécnico de Viseu</p>
		<p>Av. Cor. José Maria Vale de Andrade</p>
		<p>3504-510, Viseu</p>
	</li>
	<li>
		<img src="img/svg/phone_fill.svg" alt="">
		<a href="tel:+351 232 480 700"> +351 232 480 700</a>
	</li>
	<li>
		<img src="img/svg/email_fill.svg" alt="">
		<a href="mailto:ipv@sc.ipv.pt">ipv@sc.ipv.pt</a>
	</li>
</ul>

<ul class="redes-sociais">
	<li>
		<h4>Redes Sociais</h4>
	</li>
	<li>
		<a href="https://www.facebook.com/ipviseu/" target="_blank">
			<img src="img/svg/facebook.svg" alt="Facebook">
			<p>Facebook</p>
		</a>
	</li>
	<li>
		<a href="https://www.instagram.com/politecnico_de_viseu/?hl=pt" target="_blank">
			<img src="img/svg/instagram.svg" alt="Instagram">
			<p>Instagram</p>
		</a>
	</li>
	<li>
		<a href="https://www.linkedin.com/school/instituto-polit%C3%A9cnico-de-viseu/" target="_blank">
			<img src="img/svg/linkedin.svg" alt="LinkedIn">
			<p>Linkedin</p>
		</a>
	</li>
	<li>
		<a href="https://www.youtube.com/user/politecnicodeviseu" target="_blank">
			<img src="img/svg/youtube.svg" alt="YouTube">
			<p>YouTube</p>
		</a>
	</li>
</ul>

<span id="footer-note">{{ano}} © Copyright IPV</span>

<span id="relogio"></span>`;

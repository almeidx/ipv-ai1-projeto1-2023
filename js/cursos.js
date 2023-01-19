"use strict";

const cursos = {
	estgv: {
		licenciatura: [
			"Contabilidade",
			"Engenharia Civil",
			"Engenharia do Ambiente",
			"Engenharia Eletrotécnica",
			"Engenharia Informática",
			"Engenharia Mecânica",
			"Gestão Industrial",
			"Gestão de Empresas",
			"Gestão de Empresas (Pós-laboral)",
			"Marketing",
			"Tecnologias e Design de Multimédia",
			"Turismo",
			"Tecnologia e Design de Mobiliário",
		],

		mestrado: [
			"Engenharia de Construção e Reabilitação",
			"Engenharia Eletrotécnica - Energia e Automação Industrial",
			"Engenharia Informática - Sistemas de Informação",
			"Engenharia Mecânica e Gestão Industrial",
			"Finanças Empresariais",
			"Gestão Turística",
			"Marketing",
			"Tecnologias Ambientais",
		],

		posLicenciatura: [
			"Análises Laboratoriais",
			"Automação e Energia",
			"Desenho e Modelação Digital",
			"Desenvolvimento para a Web e Dispositivos Móveis",
			"Design e Tecnologia de Mobiliário",
			"Eficiência Energética nos Edifícios",
			"Energias Renováveis",
			"Enoturismo",
			"Gestão Comercial e Vendas",
			"Gestão da Segurança no Trabalho e do Ambiente",
			"Manutenção Industrial",
			"Reabilitação e Conservação de Edifícios",
			"Redes e Sistemas Informáticos",
			"Tecnologia Automóvel",
		],

		posGraduacoes: [
			"Engenharia de Construção e Reabilitação",
			"Engenharia Eletrotécnica - Energia e Automação Industrial",
			"Engenharia Mecânica e Gestão Industrial",
			"Finanças Empresariais",
			"Gestão Turística",
			"Marketing Research",
			"Sistemas e Tecnologias de Informação para as Organizações",
			"Tecnologias Ambientais",
		],

		posLicenciaturaNome: "CTeSP",
		posGraducaoesNome: "Pós-Graduações",
	},

	essv: {
		licenciatura: ["Enfermagem"],

		mestrado: [
			"Enfermagem Comunitária",
			"Enfermagem Médico-Cirúrgica",
			"Enfermagem de Saúde Infantil e Pediatria",
			"Enfermagem de Saúde Materna Obstetrícia e Ginecologia",
		],

		posLicenciatura: [
			" Enfermagem Comunitária",
			"Enfermagem Médico-Cirúrgica",
			"Enfermagem de Reabilitação",
			"Enfermagem de Saúde Infantil e Pediátrica",
			"Enfermagem de Saúde Materna e Obstétrica",
			"Enfermagem de Saúde Mental e Psiquiatria",
		],

		posGraduacoes: [
			"Cuidados Paliativos e Fim de Vida",
			"Enfermagem de Saúde Familiar",
			"Enfermagem do Trabalho",
			"Gestão e Administração de Serviços de Saúde",
			"Gerontologia e Geriatria",
			"Supervisão Educacional e Clínica",
			"Tratamento de Feridas e Regeneração Tecidular",
			"Urgência e Emergência",
		],

		posLicenciaturaNome: "Pós-licenciatura",
		posGraducaoesNome: "Pós-Graduações",
	},

	esev: {
		licenciatura: [
			"Artes da Performance Cultural",
			"Artes Plásticas e Multimédia",
			"Comunicação Social",
			"Desporto e Atividade Física",
			"Educação Básica",
			"Educação Social",
			"Publicidade e Relações Públicas",
		],

		mestrado: [
			"Comunicação Aplicada",
			"Educação Especial, Área de Especialização Domínio Cognitivo e Motor",
			"Educação Pré-Escolar e Ensino do 1º Ciclo do Ensino Básico",
			"Ensino de Educação Visual e Tecnológica no Ensino Básico",
			"Ensino do 1.º Ciclo do Ensino Básico e de Matemática e Ciências Naturais no 2.º Ciclo do Ensino Básico",
			"Ensino do 1.º Ciclo do Ensino Básico e de Português e História e Geografia de Portugal no 2.º Ciclo do Ensino Básico",
			"Intervenção Psicossocial com Crianças e Jovens em Risco",
		],

		posLicenciatura: [
			"Apoio à Infância",
			"Produção nas Artes do Espetáculo",
		],

		posGraduacoes: [
			"Criação Teatral Aplicada",
			"Direção Artística na Produção Audiovisual",
			"Ilustração",
			"Intervenção Psicossocial com Pessoas Idosas",
		],

		posLicenciaturaNome: "CTeSP",
		posGraducaoesNome: "Pós-Graduações",
	},

	esav: {
		licenciatura: [
			"Enfermagem Veterinária",
			"Engenharia Agronómica",
			"Engenharia Alimentar",
			"Engenharia Zootécnica",
		],

		mestrado: [
			"Qualidade E Tecnologia Alimentar",
			"Tecnologias Da Produção Animal",
			"Enfermagem Veterinária Em Animais De Companhia",
			"Engenharia Agronómica",
		],

		posLicenciatura: [
			"Agricultura Biológica",
			"Gastronomia, Turismo E Bem-Estar",
			"Produção Animal",
			"Proteção Civil",
			"Viticultura E Enologia",
		],

		posGraduacoes: [
			"Nutrição E Segurança Alimentar",
			"Agropecuária Sustentável",
			"Engenharia Agronómica",
		],

		posLicenciaturaNome: "CTeSP",
		posGraducaoesNome: "Pós-Graduações",
	},

	estgl: {
		licenciatura: [
			"Gestão Comercial",
			"Engenharia Informática E Telecomunicações",
			"Gestão E Informática",
			"Gestão Turística, Cultural E Patrimonial",
			"Secretariado De Administração",
			"Serviço Social",
			"Serviço Social (Pós-Laboral)",
		],

		mestrado: [
			"Gestão De Organizações Sociais",
			"Gestão Do Património Cultural E Desenvolvimento Local",
		],

		posLicenciatura: [
			"Cibersegurança E Telecomunicações",
			"Transportes E Logística",
			"Turismo De Saúde E Bem Estar (Em Aprovação)",
			"Tecnologias E Programação De Sistemas De Informação (Parceria Com A Softinsa - IBM)",
			"Integração De Sistemas E Serviços De Telecomunicações Pós-Laboral (Sernancelhe)",
			"Intervenção Social E Comunitária - Pós-Laboral (Sernancelhe)",
			"Informática Industrial - (Moimenta Da Beira)",
			"Assessoria E Comunicação Organizacional - Pós-Laboral (Moimenta Da Beira)",
			"Gestão Comercial E Vendas",
			"Contabilidade E Fiscalidade Para Pme",
			"Relações E Negócios Internacionais",
			"Enoturismo",
		],

		posGraduacoes: ["Curso De ITED (Pré-Inscrições)"],

		posLicenciaturaNome: "CTeSP",
		posGraducaoesNome: "Cursos Breves",
	},
};

const licenciaturaCtn = document.getElementById("lista-licenciaturas");
const mestradosCtn = document.getElementById("lista-mestrados");
const posLicenciaturaCtn = document.getElementById("lista-pos-licenciatura");
const posGraduacoesCtn = document.getElementById("lista-pos-graduacoes");
const posLicenciaturaTitulo = document.getElementById("pos-licenciatura");
const posGraduacoesTitulo = document.getElementById("pos-graduacoes");
const escolasSelect = document.getElementById("escolas-select");

let selectedSchool = "estgv";

document.addEventListener("DOMContentLoaded", renderSchoolByHash);
window.addEventListener("hashchange", renderSchoolByHash);

escolasSelect.addEventListener("change", (e) => {
	selectedSchool = e.target.value;
	renderSchoolDetails(selectedSchool);
});

renderSchoolDetails(selectedSchool);

function appendLi(ctn, curso) {
	const li = document.createElement("li");
	li.innerText = curso;
	ctn.appendChild(li);
}

function renderSchoolDetails(school) {
	const {
		licenciatura,
		mestrado,
		posLicenciatura,
		posGraduacoes,
		posLicenciaturaNome,
		posGraducaoesNome,
	} = cursos[school];

	updateList(licenciatura, licenciaturaCtn);
	updateList(mestrado, mestradosCtn);
	updateList(posLicenciatura, posLicenciaturaCtn);
	updateList(posGraduacoes, posGraduacoesCtn);

	posLicenciaturaTitulo.innerText = posLicenciaturaNome;
	posGraduacoesTitulo.innerText = posGraducaoesNome;
}

function updateList(cursos, ctn) {
	emptyList(ctn);
	cursos.forEach((curso) => {
		appendLi(ctn, curso);
	});
}

function emptyList(ctn) {
	ctn.innerHTML = "";
}

function renderSchoolByHash() {
	const hash = window.location.hash.slice(1);

	if (hash && hash in cursos) {
		selectedSchool = hash;
		escolasSelect.value = selectedSchool;
		renderSchoolDetails(selectedSchool);
	}
}

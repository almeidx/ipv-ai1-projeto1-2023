"use strict";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nome: "",
			email: "",
			mensagem: "",
			sendBtnMsg: "Enviar",
		};

		this.sendBtnRef = React.createRef();
	}

	handleSubmit(e) {
		e.preventDefault();

		this.sendBtnRef.current.disabled = true;

		const { nome, email, mensagem } = this.state;

		console.log({ nome, email, mensagem });

		this.setState({
			nome: "",
			email: "",
			mensagem: "",
			sendBtnMsg: "A enviar...",
		});

		setTimeout(() => {
			this.setState({ sendBtnMsg: "Enviado!" });

			setTimeout(() => {
				this.sendBtnRef.current.disabled = false;

				this.setState({ sendBtnMsg: "Enviar" });
			}, 2_000);
		}, 1_000);
	}

	/*
		<main>
			<section>
				<img />

				<div>
					<h1></h1>
					<p><p/>
				</div>
			</section>

			<section>
				<img />

				<div>
					<h1></h1>
					<p><p/>
				</div>
			</section>

			<section>
				<img />

				<div>
					<h1></h1>
					<p><p/>
				</div>
			</section>

			<form></form>

		</main>

	*/

	render() {
		return React.createElement(
			"main",
			{ className: "container" },

			React.createElement(
				"div",
				null,
				React.createElement(
					"section",
					null,
					React.createElement("img", {
						src: "../img/svg/location.svg",
					}),
					React.createElement(
						"div",
						null,
						React.createElement("h1", null, "Morada"),
						React.createElement(
							"p",
							null,
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, veritatis!"
						)
					)
				),

				React.createElement(
					"section",
					null,
					React.createElement("img", {
						src: "../img/svg/phone_2.svg",
					}),
					React.createElement(
						"div",
						null,
						React.createElement("h1", {}, "Contacto"),
						React.createElement(
							"p",
							{},
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, veritatis!"
						)
					)
				),

				React.createElement(
					"section",
					null,
					React.createElement("img", {
						src: "../img/svg/email_2.svg",
					}),
					React.createElement(
						"div",
						null,
						React.createElement("h1", {}, "Email"),
						React.createElement(
							"p",
							{},
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, veritatis!"
						)
					)
				)
			),

			React.createElement(
				"form",
				{ autoComplete: "on", onSubmit: this.handleSubmit.bind(this) },
				React.createElement(
					"div",
					null,
					React.createElement("label", { htmlFor: "nome" }, "Nome"),
					React.createElement("input", {
						type: "text",
						id: "nome",
						placeholder: "Nome",
						value: this.state.nome,
						required: true,
						pattern: "[A-Za-z ]{3,}",
						onChange: (e) =>
							this.setState({ nome: e.target.value }),
					})
				),
				React.createElement(
					"div",
					null,
					React.createElement("label", { htmlFor: "email" }, "Email"),
					React.createElement("input", {
						type: "email",
						id: "email",
						placeholder: "Email",
						value: this.state.email,
						required: true,
						onChange: (e) =>
							this.setState({ email: e.target.value }),
					})
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"label",
						{ htmlFor: "mensagem" },
						"Mensagem"
					),
					React.createElement("textarea", {
						id: "mensagem",
						placeholder: "Mensagem",
						value: this.state.mensagem,
						required: true,
						cols: 75,
						rows: 10,
						onChange: (e) =>
							this.setState({ mensagem: e.target.value }),
					})
				),
				React.createElement(
					"div",
					{ className: "btn-container" },
					React.createElement("button", { type: "reset" }, "Limpar"),
					React.createElement(
						"button",
						{ type: "submit", ref: this.sendBtnRef },
						this.state.sendBtnMsg
					)
				)
			)
		);
	}
}

ReactDOM.render(
	React.createElement(Form, null),
	document.getElementById("root")
);

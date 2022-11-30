"use strict";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = { nome: "", email: "", mensagem: "" };
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return React.createElement(
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
					onChange: (e) => this.setState({ nome: e.target.value }),
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
					onChange: (e) => this.setState({ email: e.target.value }),
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
					onChange: (e) =>
						this.setState({ mensagem: e.target.value }),
				})
			),
			React.createElement(
				"div",
				null,
				React.createElement("button", { type: "submit" }, "Enviar"),
				React.createElement("button", { type: "reset" }, "Limpar")
			)
		);
	}
}

ReactDOM.render(React.createElement(Form), document.getElementById("root"));

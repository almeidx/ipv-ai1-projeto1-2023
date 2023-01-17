"use strict";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nome: "",
			email: "",
			telemovel: "",

			motivoContacto: "",
			mensagem: "",

			sendBtnMsg: "Enviar",
		};

		this.sendBtnRef = React.createRef();
	}

	handleReset() {
		this.setState({
			nome: "",
			email: "",
			telemovel: "",
			motivoContacto: "",
			mensagem: "",
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.sendBtnRef.current.disabled = true;

		const { nome, email, telemovel, motivoContacto, mensagem } = this.state;

		console.log({ nome, email, telemovel, motivoContacto, mensagem });

		localStorage.setItem(
			"userInfo",
			JSON.stringify({ nome, email, telemovel })
		);

		this.setState({ sendBtnMsg: "A enviar..." });

		setTimeout(() => {
			this.setState({ sendBtnMsg: "Enviado!" });

			setTimeout(() => {
				this.sendBtnRef.current.disabled = false;

				this.setState({ sendBtnMsg: "Enviar" });
			}, 2_000);
		}, 1_000);
	}

	componentDidMount() {
		const userInfo = JSON.parse(localStorage.getItem("userInfo"));

		if (userInfo) {
			this.setState({
				nome: userInfo.nome,
				email: userInfo.email,
				telemovel: userInfo.telemovel,
			});
		}
	}

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
							"a",
							{ href: "https://goo.gl/maps/hkb7NYFQdHxfdDmr6" },
							"Av. Cor. José Maria Vale de Andrade"
						),
						React.createElement("br", null),
						React.createElement(
							"a",
							{ href: "https://goo.gl/maps/hkb7NYFQdHxfdDmr6" },
							"Campus Politécnico - 3504-510 Viseu"
						)
					)
				),

				React.createElement(
					"section",
					null,
					React.createElement("img", { src: "../img/svg/phone.svg" }),

					React.createElement(
						"div",
						null,
						React.createElement("h1", null, "Contacto"),
						React.createElement(
							"a",
							{ href: "+tel:+351 232 480 700" },
							"+351 232 480 700"
						)
					)
				),

				React.createElement(
					"section",
					null,
					React.createElement("img", { src: "../img/svg/email.svg" }),

					React.createElement(
						"div",
						null,
						React.createElement("h1", null, "Email"),
						React.createElement(
							"a",
							{ href: "mailto:ipv@sc.ipv.pt" },
							"ipv@sc.ipv.pt"
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
						{ htmlFor: "telemovel" },
						"Telemóvel"
					),
					React.createElement("input", {
						type: "tel",
						id: "telemovel",
						placeholder: "Telemóvel",
						value: this.state.telemovel,
						required: true,
						onChange: (e) =>
							this.setState({ telemovel: e.target.value }),
					})
				),

				React.createElement(
					"div",
					null,
					React.createElement(
						"label",
						{ htmlFor: "motivo-contacto" },
						"Motivo contacto"
					),
					React.createElement(
						"select",
						{
							id: "motivo-contacto",
							required: true,
							onChange: (e) =>
								this.setState({
									motivoContacto: e.target.value,
								}),
							value: this.state.motivoContacto,
						},
						React.createElement(
							"option",
							{
								value: "",
								selected: true,
								disabled: true,
								hidden: true,
							},
							"Escolha um motivo"
						),
						React.createElement(
							"option",
							{ value: "Informação" },
							"Informação"
						),
						React.createElement(
							"option",
							{ value: "Reclamação" },
							"Reclamação"
						),
						React.createElement(
							"option",
							{ value: "Sugestão" },
							"Sugestão"
						),
						React.createElement(
							"option",
							{ value: "Outro" },
							"Outro"
						)
					)
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
						rows: 10,
						onChange: (e) =>
							this.setState({ mensagem: e.target.value }),
					})
				),

				React.createElement(
					"div",
					{ className: "btn-container" },
					React.createElement(
						"button",
						{ type: "reset", onClick: () => this.handleReset() },
						"Limpar"
					),
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

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signin = (props) => {
	const { isLogged, setIsLogged } = props;
	const [data, setData] = useState({});
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const handleChange = (event) => {
		const newData = { ...data };
		const name = event.target.name;
		const value = event.target.value;
		newData[name] = value;
		console.log("newdata", newData);
		setData(newData);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("evênement envoyé", data);
		if (!data.email || !data.password) {
			setErrorMessage("Veuillez saisir votre adresse et votre mot de passe");
		}

		try {
			const response = await axios.post(
				"https://lereacteur-vinted-api.herokuapp.com/user/login",
				data
			);
			console.log("réponse serveur", response);
			const token = response.data.token;
			console.log("token", token);
			// Sauvegarde du token dans les cookies
			Cookies.set("token", token, { expires: 7 });
			// je réinitialise data
			setData({
				email: "",
				password: "",
			});
			setIsLogged(true);
			navigate("/");
		} catch (error) {
			console.log(error.response); // contrairement au error.message d'express
		}
	};

	return (
		<main>
			<p>Se connecter</p>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email"
					name="email"
					onChange={handleChange}
					value={data.email}
				></input>
				<input
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
					value={data.password}
				></input>
				<button>Se connecter</button>
				{errorMessage ? <div>{errorMessage}</div> : ""}
			</form>

			<Link to="/signup">
				<p>Tu n'as pas encore de compte ? Connecte-toi</p>
			</Link>
		</main>
	);
};

export default Signin;
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signin = (props) => {
	const { isLogged, setIsLogged } = props;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("evênement envoyé", { email, password });
		if (!email || !password) {
			setErrorMessage("Veuillez saisir votre adresse et votre mot de passe");
		} else {
			try {
				const response = await axios.post(
					"https://lereacteur-vinted-api.herokuapp.com/user/login",
					{ email, password }
				);
				console.log("réponse serveur", response);
				const token = response.data.token;
				console.log("token", token);
				// Sauvegarde du token dans les cookies
				Cookies.set("token", token, { expires: 7 });
				// je réinitialise data
				setEmail("");
				setPassword("");
				setIsLogged(token);
				navigate("/");
			} catch (error) {
				console.log(error.response); // contrairement au error.message d'express
			}
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
					onChange={(event) => {
						setEmail(event.target.value);
					}}
					value={email}
				></input>
				<input
					type="password"
					placeholder="password"
					name="password"
					onChange={(event) => {
						setPassword(event.target.value);
					}}
					value={password}
				></input>
				<button>Se connecter</button>
				{errorMessage ? (
					<div className="error-message">{errorMessage}</div>
				) : (
					""
				)}
			</form>

			<Link to="/signup">
				<p>Tu n'as pas encore de compte ? Connecte-toi</p>
			</Link>
		</main>
	);
};

export default Signin;

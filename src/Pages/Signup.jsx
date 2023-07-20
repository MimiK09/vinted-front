// import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = (props) => {
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

	const handleCheck = (event) => {
		const newData = { ...data };
		const name = event.target.name;
		const value = event.target.checked;
		if (value === true) {
			newData[name] = value;
		}
		newData[name] = value;
		console.log("newdata", newData);
		setData(newData);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("evênement envoyé", data);
		if (!data.username || !data.email || !data.password) {
			setErrorMessage("anomalie");
		}
		if (!data.newsletter) {
			setErrorMessage("anomalie checkbox");
		}

		try {
			const response = await axios.post(
				"https://lereacteur-vinted-api.herokuapp.com/user/signup",
				data
			);
			console.log("réponse serveur", response);
			const token = response.data.token;
			console.log("token", token);
			// Sauvegarde du token dans les cookies
			Cookies.set("token", token, { expires: 7 });
			// je réinitialise data
			setData({
				username: "",
				email: "",
				password: "",
				newsletter: false,
			});
			setIsLogged(true);
			navigate("/");
		} catch (error) {
			console.log(error.response); // contrairement au error.message d'express
		}
	};

	return (
		<main>
			<p>S'inscrire</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="username"
					name="username"
					onChange={handleChange}
					value={data.username}
				></input>
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
				<div>
					<div>
						<input
							type="checkbox"
							name="newsletter"
							onClick={handleCheck}
						></input>
					</div>
					<p>
						En m'inscrivant, je confirme avoir lu et accepté les termes et
						conditions de confidentialité sur Vinted. Je confirme avoir au moins
						18 ans.
					</p>
				</div>
				<button>S'inscrire</button>
				{errorMessage ? <div>{errorMessage}</div> : ""}
			</form>

			<Link to="/signin">
				<p>Tu as déjà un compte ? Connecte-toi</p>
			</Link>
		</main>
	);
};

export default Signup;

import { useState } from "react";
import { Navigate } from "react-router-dom";

const Publish = ({ isLogged, setIsLogged }) => {
	const [picture, setPicture] = useState({});
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [brand, setBrand] = useState("");
	const [size, setSize] = useState("");
	const [color, setColor] = useState("");
	const [condition, setCondition] = useState("");
	const [place, setPlace] = useState("");
	const [price, setPrice] = useState(0);
	const [exchange, setExchange] = useState(false);
	const [errorSubmit, setErrorSubmit] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("isLogged", isLogged);
		if (
			title &&
			description &&
			brand &&
			size &&
			color &&
			condition &&
			place &&
			price &&
			picture
		) {
			setErrorSubmit(false);
			try {
				const formData = new FormData();
				formData.append("title", title);
				formData.append("description", description);
				formData.append("price", price);
				formData.append("condition", condition);
				formData.append("city", place);
				formData.append("size", size);
				formData.append("color", color);
				formData.append("picture", picture);
				console.log("formData", formData);
				// const response = await axios.post("http://localhost:5173/publish", form, {
				// 	headers: {
				// 		Authorization: "Bearer " + userToken,
				// 		"Content-Type": "multipart/form-data",
				// 	},
				// });
				console.log("je passe");
			} catch (error) {
				console.log("error>>>", error);
			}
		} else {
			setErrorSubmit(true);
			console.log("Il manque des données");
		}
	};

	return isLogged ? (
		<main>
			<h2>Vends ton article</h2>

			<form onSubmit={handleSubmit}>
				<div className="bloc-offer-publish">
					<label htmlFor="offerPicture">Ajoute une photo</label>
					<input
						type="file"
						name="offerPicture"
						id="offerPicture"
						placeholder="Uploader l'image"
						onChange={(event) => {
							setPicture(event.target.files[0]);
						}}
					/>
				</div>
				<div className="bloc-offer-publish">
					<label htmlFor="title">Titre</label>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="ex : Chemise Sézanne Verte"
						onChange={(event) => {
							setTitle(event.target.value);
						}}
						value={title}
					/>
					<label htmlFor="description">Décris ton article</label>
					<input
						type="text"
						name="description"
						id="description"
						placeholder="ex : porté quelques fois, taille correctement"
						onChange={(event) => {
							setDescription(event.target.value);
						}}
						value={description}
					/>
				</div>

				<div className="bloc-offer-publish">
					<label htmlFor="brand">Marque</label>
					<input
						type="text"
						name="brand"
						id="brand"
						placeholder="ex : Sézanne"
						onChange={(event) => {
							setBrand(event.target.value);
						}}
						value={brand}
					/>
					<label htmlFor="size">Taille</label>
					<input
						type="text"
						name="size"
						id="size"
						placeholder="ex : ex : L / 42"
						onChange={(event) => {
							setSize(event.target.value);
						}}
						value={size}
					/>
					<label htmlFor="color">Couleur</label>
					<input
						type="text"
						name="color"
						id="color"
						placeholder="ex : Verte"
						onChange={(event) => {
							setColor(event.target.value);
						}}
						value={color}
					/>
					<label htmlFor="condition">Etat</label>
					<input
						type="text"
						name="condition"
						id="condition"
						placeholder="ex : neuf avec étiquette"
						onChange={(event) => {
							setCondition(event.target.value);
						}}
						value={condition}
					/>
					<label htmlFor="place">Lieu</label>
					<input
						type="text"
						name="place"
						id="place"
						placeholder="ex : Chemise Sézanne Verte"
						onChange={(event) => {
							setPlace(event.target.value);
						}}
						value={place}
					/>
				</div>
				<div className="bloc-offer-publish">
					<label htmlFor="price">Prix</label>
					<input
						type="number"
						name="price"
						id="price"
						placeholder="0,00€"
						onChange={(event) => {
							setPrice(event.target.value);
						}}
						value={price}
					/>
					<label htmlFor="exchange">
						Je suis interessé(e) par les échanges
					</label>
					<input
						type="checkbox"
						name="exchange"
						id="exchange"
						onChange={() => {
							setExchange(!exchange);
						}}
					/>
				</div>
				<button>Valider</button>
			</form>
			{errorSubmit ? (
				<div className="error-message">Il manque des données</div>
			) : (
				<></>
			)}
		</main>
	) : (
		<Navigate to="/Signin" />
	);
};

export default Publish;

// import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://lereacteur-vinted-api.herokuapp.com/offers"
				);
				const offers = response.data.offers;
				console.log("offers", offers);
				setData(offers);
			} catch (error) {
				console.log(error.response); // contrairement au error.message d'express
			}
		};
		fetchData();
	}, []);

	const truncatedText = (string) => {
		return string.slice(0, 40) + "...";
	};

	return (
		<main className="container container-main">
			{data.map((element) => {
				return (
					<div key={element.id} className="tuile">
						<div className="title-tuile">
							<p>{truncatedText(element.product_name)}</p>
						</div>
						<div className="details-tuile">
							<div className="container-image-tuile">
								<img
									src={element.product_image.secure_url}
									alt={element.product_name}
								/>
							</div>
							<p className="price">{element.product_price}€</p>
							<p>{element.product_details[1].TAILLE}</p>
							<p>{element.product_details[0].MARQUE}</p>
						</div>
					</div>
				);
			})}
		</main>
	);
};

export default Home;

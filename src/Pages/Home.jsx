// import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imagebanner from "../assets/banner-vinted.jpg";

const Home = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://lereacteur-vinted-api.herokuapp.com/offers"
			);
			const offers = response.data.offers;
			console.log("offers", offers);
			setData(offers);
			setIsLoading(true);
		} catch (error) {
			console.log(error.response); // contrairement au error.message d'express
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const truncatedText = (string) => {
		return string.slice(0, 30) + "...";
	};

	return isLoading ? (
		<>
			<div className="hero-banner-container">
				<img src={imagebanner} alt="faire tri dans placard" />
				<div className="cadre">
					<div>
						<p>Prêts à faire du tri dans vos placards ?</p>
						<button>Commencer à vendre</button>
					</div>
				</div>
			</div>
			<main className="container container-main">
				{data.map((element) => {
					console.log("element.id", element.id);
					return (
						<div key={element.id} className="tuile">
							<Link to={`/offer/${element.id}`}>
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
							</Link>
						</div>
					);
				})}
			</main>
		</>
	) : (
		<div>en cours de chargement</div>
	);
};

export default Home;

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


	return (
		<main className="container container-main">
			{data.map((element) => {
				return <div key={element.id}>test</div>;
			})}
		</main>
	);
};

export default Home;

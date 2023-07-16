import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Offer = () => {
	const params = useParams();
	console.log("params",params);

	return (
		<>
			<p>ProductPage je suis une offre s</p>
			<Link to="/">Aller sur la Home2</Link>
		</>
	);
};

export default Offer;

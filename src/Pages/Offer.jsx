import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Offer = (props) => {
	const params = useParams();
	console.log(params);

	return (
		<>
			<p>Je suis sur une offre</p>
			<Link to="/">Aller sur la Home2</Link>
		</>
	);
};

export default Offer;

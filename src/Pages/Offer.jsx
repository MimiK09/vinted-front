import { useParams } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";


const Offer = (props) => {
const params=useParams();
console.log(params)

    return (		<>
        <p>Test de Home</p>
        <Link to="/">Aller sur la Home</Link>
    </>)
}

export default Offer;
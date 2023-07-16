import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = (props) => {
	return (
		<header>
			<div className="container container-header">
				<Link to="/">
					<img src={logo} alt="logo-vinted" />
				</Link>
				<form>
					<input type="text" placeholder="Rechercher des articles"></input>
				</form>
				<div className="inscription-connexion">
					<button>S'inscrire</button>
					<button>Se connecter</button>
				</div>
				<button>Vends tes articles</button>
			</div>
		</header>
	);
};

export default Header;

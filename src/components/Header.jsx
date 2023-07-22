import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass);


const Header = ({isLogged, setIsLogged}) => {
	return (
		<header>
			<div className="container container-header">
				<Link to="/">
					<img src={logo} alt="logo-vinted" />
				</Link>
				<form>
				<FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/><input type="text" placeholder="Rechercher des articles"></input>
				</form>
				{!isLogged ? 
				<div className="inscription-connexion">
					<Link to="/signup"><button>S'inscrire</button></Link> 
					<Link to="/signin"><button>Se connecter</button></Link> 
				</div> : <div className="inscription-connexion"><button className="inactive" onClick={()=>{setIsLogged("")}}>Se déconnecter</button></div>}
				<button>Vends tes articles</button>
			</div>
		</header>
	);
};

export default Header;

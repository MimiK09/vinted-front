import imagebanner from "../assets/banner-vinted.jpg";

const Hero = () => {
	return (
		<div className="hero-banner-container">
			<img src={imagebanner} alt="faire tri dans placard" />
			<div className="cadre">
				<div>
					<p>Prêts à faire du tri dans vos placards ?</p>
					<button>Commencer à vendre</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;

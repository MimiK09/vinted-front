import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Offer from "./Pages/Offer";
import Header from "./components/Header";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { useState } from "react";

function App() {
	const [isLogged, setIsLogged] = useState("");

	return (
		<Router>
			<Header isLogged={isLogged} setIsLogged={setIsLogged} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/offer/:id" element={<Offer />} />
				<Route
					path="/signup"
					element={<Signup isLogged={isLogged} setIsLogged={setIsLogged} />}
				/>
				<Route
					path="/signin"
					element={<Signin isLogged={isLogged} setIsLogged={setIsLogged} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

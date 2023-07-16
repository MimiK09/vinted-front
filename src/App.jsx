import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Offer from "./Pages/Offer";
import Header from "./components/Header";
// import { useState } from 'react'

function App() {

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route patch="/offer/:id" element={<Offer />} />
			</Routes>
		</Router>
	);
}

export default App;

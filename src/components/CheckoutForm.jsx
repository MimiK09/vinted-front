import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ price, isLogged, name }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [completed, setCompleted] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const cardElement = elements.getElement(CardElement);

		// j'envoi le token qui permettra ensuite d'identifier l'acheteur
		const stripeResponse = await stripe.createToken(cardElement, {
			name: isLogged,
		});

		console.log("stripe response", stripeResponse);
		const stripeToken = stripeResponse.token.id;
		const response = await axios.post(
			"https://lereacteur-vinted-api.herokuapp.com/payment",
			{
				token: stripeToken,
				title: name,
				amount: price*100,
			}
		);
		console.log("response.data", response.data);

		if (response.data.status === "succeeded") {
			setCompleted(true);
		}
	};

	return (
		<div>
			{!completed ? (
				<form onSubmit={handleSubmit} className="payment-form">
					<CardElement />
					<button type="submit">Valider</button>
				</form>
			) : (
				<div className="successfull-payment"><p>Paiement effectué !</p></div>
			)}
		</div>
	);
};

export default CheckoutForm;

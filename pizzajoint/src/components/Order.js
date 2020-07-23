import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ pizza, resetPizza }) => {
	return (
		<div className='container order'>
			<h2>Thank you for your order :)</h2>
			<p>You ordered a {pizza.base} pizza with:</p>
			{pizza.toppings.map(topping => (
				<div key={topping}>{topping}</div>
			))}
			<Link to='/'>
				<button onClick={resetPizza}>Rebuild Pizza</button>
			</Link>
		</div>
	);
};

export default Order;

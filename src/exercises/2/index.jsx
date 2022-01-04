import React from "react";
import Card from "./card";
/*
*
 * ## Cards
 * 1. Reuse the card from the previous exercise
 * - Create a reusable component with these properties:
 *   - headline
 *   - description
 *   - image
 *
 * 2. Create a Responsive Grid with 5 cards
 * - ! Make sure that there are no errors about the `key` property in the web-console
*/

const items = Array.from({ length: 5 }, () => {
	return {
		headline: "hallo",
		description: "Miau!",
		image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&",
	};
});
console.log(items);

const Exercise = () => {
	return (
		<div>
			{items.map((item) => {
				return (
					<Card
						headline={item.headline}
						description={item.description}
						image={item.image}
					/>
				);
			})}
		</div>
	);
};

export default Exercise;

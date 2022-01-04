import React from "react";
import "./styles.css";

/**
 * ## Card
 *  1. Create a card with an image, a headline and a description
 *  2. Add a button
 *      When the user clicks the button
 *      Then the description toggles
 *      And The button text changes
 */
const Exercise = () => {
	const [visible, setVisible] = React.useState(false); //[Boolean, Function]
	return (
		<div className="card">
			<img
				className="card__image"
				src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
				alt="cute kitty"
			/>
			<div className="card__headline">
				<h3>Cute kitty with a butterfly</h3>

				{visible ? (
					<div className="class__description">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias
							blanditiis eius facilis iure molestias nihil porro quam qui, recusandae.
						</p>
					</div>
				) : null}
				<div className="card__actions">
					<button
						className="button"
						onClick={() => {
							console.log("irgendwas");
							setVisible(!visible);
						}}
					>
						{visible ? "Hide content" : "Show content"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Exercise;

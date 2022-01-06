import React from "react";

/**
import Button from "../components/Button";
import Headline from "../components/Typography";
import List from "../components/List";
import ListItem from "../components/List";
import CustomCheckbox from "../components/Checkbox";
*/

const Button = ({ children, className, ...rest }) => {
	return (
		<button {...rest} className={["internal-classname", className].join(" ")}>
			{children}
		</button>
	);
};

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */

const Exercise = () => {
	return (
		<div>
			<Button
				className="custom-button foo bar"
				onClick={() => {
					console.log("Custom button");
				}}
			>
				Please click me
			</Button>
			<br />
			<button
				className="native-button"
				onclick={() => {
					console.log("Native button");
				}}
			>
				I am native
			</button>
		</div>
	);
};

export default Exercise;

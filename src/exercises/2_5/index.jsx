import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Checkbox from "../components/Checkbox";

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
			<br />
			<br />
			<Checkbox
				label="Yes"
				onChange={(event_) => {
					console.log(event_.target.checked);
				}}
			/>
			<Button
				className="custom-button"
				onClick={() => {
					console.log("Custom Button");
				}}
			>
				Please click me
			</Button>
			<br />
			<button
				className="native-button"
				onClick={() => {
					console.log("Native Button");
				}}
			>
				I am native
			</button>

			<List variant="ul">
				<ListItem>Item 1</ListItem>
				<ListItem>Item 2</ListItem>
				<ListItem>Item 3</ListItem>
			</List>

			<List variant="ol">
				<ListItem>Item 1</ListItem>
				<ListItem>Item 2</ListItem>
				<ListItem>Item 3</ListItem>
			</List>
		</div>
	);
};

export default Exercise;

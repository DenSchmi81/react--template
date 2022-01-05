import React from "react";
import Button from "../components/Button";
import Headline from "../components/Typography";
import List from "../components/List";
import ListItem from "../components/List";
import CustomCheckbox from "../components/Checkbox";
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
			<Headline>Test Headline</Headline>
			<CustomCheckbox />
			<Button className={"irgendwas"}>
				Click me!
			</Button>
			<List>
				<li>item 1</li>
			</List>
		</div>
			);
};



export default Exercise;

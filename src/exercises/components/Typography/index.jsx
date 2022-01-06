import React from "react";
import styles from "./styles.module.css";

const Headline = ({children, className, ...props}) => {
	return (
		<h2 {...props} className={[styles.Headline, className].join(" ")}>
			{children}
		</h2>
	);
};

export default Headline;

import React from "react";
import styles from "./styles.module.css";

const ListItem = ({ children, className, ...rest }) => {
	return (
		<li {...rest} className={[styles.ListItem, className].join(" ")}>
			{children}
		</li>
	);
};

export default ListItem;

import React from "react";
import styles from "./styles.module.css"

const ListItem = ({children, className, ...props}) => {
	return (
		<ul className={[styles.ListItem, className].join(" ")}>
			{children}
		</ul>
	)
}
export default ListItem;

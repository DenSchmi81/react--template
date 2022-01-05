import React from "react";
import styles from "./styles.module.css";

const CustomCheckbox = ({ children, className, ...props }) => {
	return (
		<label className={[styles.CustomCheckbox, className].join(" ")}>
			<div>
				<input type="checkbox" />
			</div>
			{children}
		</label>
	);
};

export default CustomCheckbox;

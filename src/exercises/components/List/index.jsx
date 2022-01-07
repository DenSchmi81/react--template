import React from "react";
import styles from "./styles.module.css";

//{children:"hallo",foo:"foo",age:"10"}
//{foo:"foo",age:"10"}

const List = ({ children, className, variant = "ul", ...rest }) => {
	const Component = variant;
	return (
		<Component {...rest} className={[styles.List, className].join(" ")}>
			{children}
		</Component>
	);
};

export default List;

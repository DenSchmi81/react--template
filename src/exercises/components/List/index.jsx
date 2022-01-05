import React from "react";
import styles from "./styles.module.css"

//{children:"hallo",foo:"foo",age:"10"}
//{foo:"foo",age:"10"}

const List = ({children, className, ...props}) => { //props: {children}
		return (
		<ul className={[styles.List, className].join(" ")}>
			{children}
		</ul>
	)
}
export default List;

import React from "react";
import styles from "./styles.module.css";

const typoTag = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	body1: "p",
};

const Typography = ({ children, component, variant }) => {
	const Component = component;
	return <Component className={[styles.Typo, styles[variant]].join(" ")}>{children}</Component>;
};

export default Typography;

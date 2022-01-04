import React from "react";

const Card = (props) => {
	const [visible, setVisible] = React.useState(false); //[Boolean, Function]
	return (
		<div className="card">
			<img className="card__image" src={props.image} alt="cute kitty" />
			<div className="card__headline">
				<h3>{props.headline}</h3>

				{visible ? <div className="class__description">{props.description}</div> : null}
				<div className="card__actions">
					<button
						className="button"
						onClick={() => {
							console.log("irgendwas");
							setVisible(!visible);
						}}
					>
						{visible ? "Hide content" : "Show content"}
					</button>
				</div>
			</div>
		</div>
	);
};
export default Card;

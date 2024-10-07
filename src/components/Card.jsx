import React from "react";
import { FaHeart, FaShieldAlt, FaBolt, FaFistRaised } from "react-icons/fa"; // Font Awesome icons

function Card({ cardInfo }) {
  {console.log(cardInfo.img)}
	return (
		<div className="h-96 w-96 rounded-3xl">
			<img src={cardInfo.img} alt="" className="h-[70%] w-full" />
			<div>
				<div>
					<span>{cardInfo.title}</span>
					<span>{cardInfo.type}</span>
				</div>
				<div>{cardInfo.price} per Person</div>
				<div>{cardInfo.rating}</div>
			</div>
		</div>
	);
}

export default Card;

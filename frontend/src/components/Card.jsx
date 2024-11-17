import React from "react";
import { IoStar } from "react-icons/io5";

function Card({ cardInfo }) {
  {console.log(cardInfo.img)}
	return (
		<div className="h-96 w-96 hover:scale-105 duration-[350ms] cursor-pointer">
			<img src={cardInfo.img} alt="image" className="h-[70%] w-full rounded-xl hover:sca"  />
			<div className="font-medium px-2 pt-4">
				<div className="flex justify-between">
					<span className="text-xl">{cardInfo.title}</span>
					<span>{cardInfo.type}</span>
				</div>
				<div>{cardInfo.price}$ per Person</div>
				<div className="flex gap-2 items-center">
        <div>{cardInfo.rating}</div>
        <IoStar />
        </div>
			</div>
		</div>
	);
}

export default Card;

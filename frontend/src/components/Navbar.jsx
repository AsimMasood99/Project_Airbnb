import React, { useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import { LiaOilCanSolid } from "react-icons/lia";
import { TbBrandAmongUs } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";

function Navbar() {
	const [selected, setSelected] = useState("Stays");

	const changeSelected = (e) => {
		console.log("hi");
		console.log(e.target);
		if (e.target.innerText == "Stays") setSelected("Stays");
		else setSelected("Exp");
	};

	return (
		<nav className="text-xl font-family-roboto flex justify-between items-center px-5 py-5">
			<div className="flex items-center gap-3">
				<FaAirbnb className="text-4xl" />
				<span className="font-bold">My BNB</span>
			</div>
			<div className="flex gap-6 font-medium">
				<div
					onClick={(e) => changeSelected(e)}
					className={selected === "Stays" ? "" : "text-gray-500"}
				>
					Stays
				</div>
				<div
					onClick={(e) => changeSelected(e)}
					className={selected === "Exp" ? "" : "text-gray-500"}
				>
					Experiences
				</div>
			</div>
			<div className="flex items-center gap-2 bg-gray-300 py-1 px-3 border border-black rounded-full">
				<IoMenu className="text-3xl" />
				<TbBrandAmongUs className="text-4xl" />
			</div>
		</nav>
	);
}

export default Navbar;

import React from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
	return (
		<>
			<div className="flex h-16 justify-center items-center w-1/3 gap-2 border-2 border-gray-500 bg-gray-300 rounded-full">
				<input
					className="w-full h-full bg-gray-300 rounded-full px-5 "
					placeholder="Search Location"
					type="text"
					name=""
					id=""
				/>
				<FaSearch className="cursor-pointer text-2xl bg-slate-700 rounded-full h-full px-6 w-[15%] my-5" />
			</div>
		</>
	);
}

export default Searchbar;

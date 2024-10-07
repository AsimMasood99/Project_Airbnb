import React from "react";
import { FaHeart, FaShieldAlt, FaBolt, FaFistRaised } from "react-icons/fa"; // Font Awesome icons

function Card() {
	return <div className="bg-slate-900 h-96 w-96 rounded-3xl"> 
    <img src="" alt="" className="h-[70%] w-full bg-black"/>
    <div>
      <div>
        <span>title</span>
        <span>type</span>
      </div>
      <div>
        100$/night
      </div>
      <div>
        Rating
      </div>
    </div>
  </div>
}

export default Card;
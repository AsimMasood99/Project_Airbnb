import React, { useEffect, useState } from "react";

function ScrollList() {

  const [menuItems,setMenuItems] = useState([])
  useEffect(()=>{
    fetch("/categories.json").then(res=> res.json())
      .then((resJson)=>setMenuItems(resJson))
  },[])


	return (
			<div>
				<ul className="flex gap-6 overflow-x-auto ">
					{
            menuItems.map((item,index)=>{
              return <li>
                <img src={item.img} alt="" className="opacity-40 h-8 hover:opacity-100 duration-400" />
                <div>
                  {item.category}
                </div>
              </li>
            })
          }
				</ul>
			</div>
	);
}

export default ScrollList;

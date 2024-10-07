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
                <img src="" alt="" />
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

import React from "react";
import { iconLinks } from "../constants";
function HeroIcons({ Icon, name }) {
  return(
       <>
       <div className=" flex w-full  justify-center">

      <ul className="flex justify-center    w-full md:w-1/6 ">
        {iconLinks.map((item)=>(
            <li
             key={item.id}
             className="px-2"
            >
                <a href={item.link}>

                       <img width="44" height="44" src={item.id} alt="github"/>
                </a>
                </li> 
            )
            )
        }
       
      </ul>
        </div>
       </>
  ) 
}
export default HeroIcons;

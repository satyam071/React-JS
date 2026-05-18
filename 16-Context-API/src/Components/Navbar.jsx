import React, { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

function Navbar() {
    const[theme,setTheme]=useContext(ThemeDataContext)
    const themeChange=()=>{
        setTheme(" bg-violet-900")

    }
    const resetTheme=()=>{
        setTheme(" bg-violet-200")
    }
  return (
    <div className=" bg-violet-500"> 
      <ul className=" flex  font-bold justify-around  items-center">
        <li>MYWEB5</li>
        <div className="flex gap-4 items-center ">
          <li>Home</li>
          <li>Contact</li>
          <li>About US</li>
          <li onDoubleClick={resetTheme} onClick={themeChange} className="border-1 py-2 px-4 rounded-full cursor-pointer">L</li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

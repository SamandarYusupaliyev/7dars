import { Link } from "react-router-dom";
import {IoSunnyOutline} from "react-icons/io5"
import { IoMoonOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";

const themes ={
  winter:"winter",
  dracula:"dracula"
}


  function darkModeFromLocalStrage() {
    return localStorage.getItem("mode") || themes.winter;
  }

  function Navbar() {
    const [theme, setTheme] = useState(darkModeFromLocalStrage())

    const handleClick = () => {
      const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
      setTheme(newTheme)
    };

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("mode", theme)
    }, [theme])
  
  return (
    <div className="navbar mb-10">
      <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center">
        <Link className="btn btn-primary btn-lg font-bold text-2xl px-3" to="/">
          MyK
        </Link>
        <div className="flex gap-10 items-center">
        <label className="swap swap-rotate">
           {/* this hidden checkbox controls the state */}
           <input type="checkbox" onClick={handleClick} />
  
            {/* sun icon */}
            <IoSunnyOutline className="swap-on fill-current  w-8 h-8"/>
  
           {/* moon icon */}
           <IoMoonOutline className="swap-off fill-current  w-8 h-8"/>
  
       </label>
        <Link to='/create' className='btn btn-secondary text-[17px]'>Create</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import X from "../icon/X";
import Burger from "../icon/Burger";

const AppBar = () => {
  const [open, setOpen] = useState(false);

  const menuClicked = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <nav className="mt-6">
      <div className="md:flex justify-between w-full md:h-20  md:max-w-full bg-black mx-auto pt-5 pl-8 pr-8 pb-6 md:pb-1">
        <div className="flex justify-between">
          <div>
            <span className="text-yellow-500 font-bold text-4xl ">
              Restaurant{" "}
            </span>
            <span className="text-red-600 font-thin text-3xl font-serif">
              SonneUerkheim
            </span>
          </div>
          <div className="md:hidden mt-4">
            <button className="text-white" onClick={menuClicked}>{open ? <X /> : <Burger />}</button>
          </div>
        </div>
        <div
          className={`flex mt-6 md:mt-3 md:block justify-center ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex md:space-x-5 space-y-5 md:space-y-0">
            <li>
              <Link to="/" className="menu" onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" className="menu" onClick={handleMenuItemClick}>
                News
              </Link>
            </li>
            <li>
              <Link
                to="/galerie"
                className="menu"
                onClick={handleMenuItemClick}
              >
                Galerie
              </Link>
            </li>
            <li>
              <Link to="/menu" className="menu" onClick={handleMenuItemClick}>
                Menü
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className="menu"
                onClick={handleMenuItemClick}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;

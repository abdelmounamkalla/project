import React from "react";
import { Link } from "react-router-dom";
import { faNavicon, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [toglle, setToglle] = useState(false);
  return (
    <div>
      <nav
        className="relative container max-w-7xl mx-auto 
        p-6 lg:text-2xl text-xl"
      >
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-3xl">Logo</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" to="home" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              How to use
            </a>
            <a href="#" className="text-white">
              Prodect
            </a>
          </div>
          <div>
            <Link
              to="/signup"
              className="p-3 px-6 pt-2 bg-pink text-yellow hidden md:block  
              rounded-full bg-btn font-bold"
            >
              Sign in
            </Link>
            <div className="md:hidden flex felx-1 justify-end items-center">
              <FontAwesomeIcon
                icon={toglle ? faClose : faNavicon}
                alt="menu"
                className="w-[28px] h-[28px] object-contain z-40"
                onClick={() => setToglle((prev) => !prev)}
              />
            </div>
            <div className={`${toglle ? "flex" : "hidden"} 
                p-6 bg-black absolute top-0
                right-0 left-0 w-screen h-screen z-30 items-center 
                justify-center text-center `}
              >
              <div className=" flex flex-col space-y-8 mb-10">
                <Link className="p-3 px-6 pt-2 bg-pink text-yellow   
                  rounded-full bg-btn font-bold" to="/signup"> 
                  Sign in
                </Link>
                <Link to="/" className="text-white text-2xl">
                  Home
                </Link>
                <Link to="home" className="text-white text-2xl ">
                  How to use
                </Link>
                <Link to="home" className="text-white text-2xl ">
                  Prodect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

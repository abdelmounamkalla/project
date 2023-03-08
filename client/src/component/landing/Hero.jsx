import React from "react";
import PlayStore from "../../assets/png/PlayStore.png";
import AppStore from "../../assets/png/AppleStore1.png";
import Scooter from "../../assets/png/scooter.png";
import Flash from "../../assets/png/flash.png"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="mt-8 lg:mt-20">
      <div className="container max-w-7xl flex flex-col items-center 
      lg:justify-center mx-auto lg:flex-row lg:w-full lg:space-x-6">
        <div className=" flex flex-col items-center lg:space-y-6 xl:space-y-8 ">
          <h1
            className=" p-2 text-[48px] text-white font-bold 
            text-center md:leading-[92px] md:text-[60px] lg:max-w-4xl lg:text-[74px] xl:text-[86px] xl:leading-[116px] "
          >
            
            Rent the best 
            <br />
            Electric
            <span className="text-yellow"> Scooter</span>
          </h1>
          <p className=" text-center max-w-sm text-lg text-white font-bold 
            md:text-xl md:max-w-lg md: xl:text-2xl xl:max-w-2xl mb-[16px]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Esse, in!ergergergge werwerwerwre
          </p>
          <div className="max-w-lg flex items-center justify-center flex-wrap 
            space-x-1 md:max-w-xl ">
            <img
              src={PlayStore}
              alt="PlayStore"
              className="cursor-pointer w-[160px] h-[60px] md:w-[180px] md:h-[80px]  "
            />
            <img
              src={AppStore}
              alt="PlayStore"
              className="cursor-pointer w-[140px] h-[42px] md:w-[160px] md:h-[56px]  "
            />
            <Link to={"/map"}><img
              src={PlayStore}
              alt="PlayStore"
              className="cursor-pointer w-[160px] h-[60px] md:w-[180px] md:h-[80px]"
            /></Link>
          </div>
        </div>
        <div className="relative  ">
          <img src={Scooter} alt="" width={600} height={600}  
          className=" w-[400px] xl:w-[600px]" />
          <img src={Flash} alt="" width={100} height={100} 
          className=" absolute top-12 right-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

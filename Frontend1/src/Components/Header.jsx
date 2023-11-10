import React from "react";
import Image from "../Assets/cut img.png";
function Header() {
  return (
    <div className=" lg:mt-36 h-full  bg-center bg-cover max-lg:bg-backroundhomesm ">
      <div className=" bg-main-color/80 flex flex-col justify-start h-full lg:mt-0 max-lg:pt-32  lg:items-start items-center lg:bg-main-color lg:text-left text-center  lg:gap-3 max-xs:gap-2 gap-7  lg:w-[50vw]   lg:pl-20 p-5 lg:shadow-[0px_10px_80px_80px_#161616] ">
        <div className="slide-in-anim">
          <h1 className="md:text-5xl text-4xl font-Roboto font-medium">
            <span className="text-secondary-color">BE</span> STRONGER
          </h1>
          <h1 className="lg:text-6xl text-4xl font-Roboto font-extrabold max-xs:flex max-xs:flex-nowrap">
            <span className="text-secondary-color">DOING</span> HARD
            <span className="text-secondary-color">WORK</span>
          </h1>
        </div>
        <p className="mt-4 text-sm text-gray-500 tracking-wider leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, est ab
          molestiae fugiat debitis sed dignissimos officia expedita dolorem?
          Aperiam consectetur facilis esse excepturi labore cum voluptas
          corrupti voluptatum iusto?Lorem ipsum, dolor
        </p>
        <div
          className="flex justify-between gap-10 xl:mt-20  mt-5
        "
        >
          <button
            type="button"
            class="text-white border-2 border-transparent bg-secondary-color hover:bg-transparent hover:border-secondary-color hover:text-secondary-color font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:focus:ring-secondary-color transition-all active:px-12"
          >
            Join Us
          </button>
          <button
            type="button"
            class="text-secondary-color hover:text-white border border-secondary-color hover:bg-secondary-color font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-sering-secondary-color dark:text-sering-secondary-color dark:hover:text-white dark:hover:bg-secondary-color dark:focus:ring-secondary-color active:px-12 transition-all"
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8 bg-main-color/90 rounded-2xl p-5">
          <div className="text-center">
            <h3 className="text-lg font-extrabold font-lexend">16K</h3>{" "}
            <p className="text-secondary-color text-sm font-light">Member</p>
          </div>
          <span className="border-[1px] h-full border-secondary-color"></span>
          <div className="text-center">
            <h3 className="text-lg font-extrabold font-lexend">50K</h3>{" "}
            <p className="text-secondary-color text-sm font-light">Customer</p>
          </div>
          <span className="border-[1px] h-full border-secondary-color"></span>
          <div className="text-center">
            <h3 className="text-lg font-extrabold font-lexend">20K</h3>{" "}
            <p className="text-secondary-color text-sm font-light">Review</p>
          </div>
          <span className="border-[1px] h-full border-secondary-color"></span>
          <div className="text-center">
            <h3 className="text-lg font-extrabold font-lexend">150K</h3>{" "}
            <p className="text-secondary-color text-sm font-light">Follower</p>
          </div>
        </div>
      </div>

      <div
        className="opacity-0 lg:opacity-50 -z-10  lg:absolute lg:top-0 lg:right-0 lg:w-[65vw]  lg:mt-14
      "
      >
        <img src={Image} alt="" className="" />
      </div>
    </div>
  );
}

export default Header;

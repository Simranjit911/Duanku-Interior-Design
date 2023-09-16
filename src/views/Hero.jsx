// React
import { useState } from "react";

// local imports
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-6 md:pt-4 mx-auto px-6 md:px-10">
        <img className="w-[40%] md:w-[16%]" src={logo} alt="logo" />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">Services</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="products">Shop</NavLink>
          <NavLink to="reference">Reference</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>
        <img src={cartIcon} className="hidden md:block cursor-pointer hover:scale-90 duration-200" alt="" />
        <HiMenuAlt3
          size={25}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setmobileMenu(!mobileMenu)}
        />
      </div>
      <div
        className={`block md:hidden w-full fixed ${
          !mobileMenu ? "-top-[410px]" : "top-0"
        } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12  rounded-b-xl`}
      >
        <AiOutlineClose
          size={25}
          className="absolute top-5 right-5 cursor-pointer "
          onClick={() => setmobileMenu(false)}
        />
        <ul className="pt-8  items-center flex flex-col gap-8  ">
          <NavLink to="services" mobileMenu>
            Services
          </NavLink>
          <NavLink to="products" mobileMenu>
            Products
          </NavLink>
          <NavLink to="products" mobileMenu>
            Shop
          </NavLink>
          <NavLink to="reference" mobileMenu>
            Reference
          </NavLink>
          <NavLink to="care" mobileMenu>
            Care
          </NavLink>
        </ul>
        
        <img
          src={cartIcon}
          className="mt-6 mx-auto cursor-pointer hover:scale-90 duration-200"
          alt="cart"
        />
      </div>
      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1
          // style={{ mixBlendMode: "exclusion" }}
          className="mt-[85px] px-1 md:px-0 mb-5 text-4xl text-center md:text-5xl font-semibold leading-tight xs:text-[64px] mx-auto text-white max-w-[1050px] "
        >
          {heroTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="up" padding fullWidth>
        <h1 className="mt-2 max-w-[450px] text-center text-lg  leading-tight xs:text-xl font-thin mx-auto text-white  ">
          {heroSubtitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="up" padding fullWidth>
        <div className="relative mx-auto px-4  w-full xs:w-[460px] mt-11">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full font-semibold px-1 w-full bg-primary px-10 outline-none pl-6 pr-[68px] text-white text-base xs:text-lg placeholder-white"
          />
          <img
            src={searchIcon}
            alt=""
            className="absolute top-2/4 -translate-y-2/4 right-3 h-11 active:scale-90 duration-150 cursor-pointer w-7"
          />
        </div>
      </FadeIn>
      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#fff_100%)]"></div>
    </div>
  );
};

export default Hero;

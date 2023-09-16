// local imports
import { referenceTitle, referenceSubtitle } from "../data";

import imageOne from "../assets/image-one.svg";
import imageTwo from "../assets/image-two.svg";
import imageThree from "../assets/image-three.svg";

import FadeIn from "../components/FadeIn";

const Reference = () => {
  return (
    <div className="max-w-[1400px] m-40 px-2 mx-auto" id="reference">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[65px] font-medium text-black mb-6 text-center">
          {referenceTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h1 className="text-lg text-gray-500 mb-6 text-center">
          {referenceSubtitle}
        </h1>
      </FadeIn>
      <div className="flex  flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.4} direction="right">
          <div className="flex flex-col gap-8 px-3 md:px-0">
            <img src={imageOne} alt=""className="hover:scale-105 duration-200 cursor-pointer" />
            <img src={imageTwo} alt="" className="hover:scale-105 duration-200 cursor-pointer" />
          </div>
        </FadeIn>
        <FadeIn delay={0.4} direction="left">
          <div className="px-3 md:px-0">
            {/* <img src={imageOne} alt="" /> */}
         
            <img src={imageThree} alt="" className="hover:scale-105 duration-200 cursor-pointer" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Reference;

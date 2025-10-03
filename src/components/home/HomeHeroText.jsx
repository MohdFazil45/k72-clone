import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font-300] mt-[90vw] lg:mt-0 pt-5 text-white text-center">
      <div className="lg:text-[10vw]  text-[13vw] uppercase lg:leading-[8vw] leading-[12vw] flex items-center justify-center">The spark for</div>
      <div className="lg:text-[10vw]  text-[13vw] uppercase lg:leading-[8vw] leading-[12vw] flex items-start justify-center">
        all
        <div className="h-[8vw] w-[16vw] mb-5 rounded-full overflow-hidden ">
          <Video />
        </div>
        things
      </div>
      <div className="lg:text-[10vw]  text-[13vw] uppercase lg:leading-[8vw] leading-[12vw] flex items-center justify-center">creative</div>
    </div>
  );
};

export default HomeHeroText;

import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font-300] pt-5 text-center">
      <div className="text-[10vw] uppercase leading-[8vw] flex items-center justify-center">The spark for</div>
      <div className="text-[10vw] uppercase leading-[8vw] flex items-start justify-center">
        all
        <div className="h-[8vw] w-[16vw] mb-5 rounded-full overflow-hidden ">
          <Video />
        </div>
        things
      </div>
      <div className="text-[10vw] uppercase leading-[8vw] flex items-center justify-center">creative</div>
    </div>
  );
};

export default HomeHeroText;

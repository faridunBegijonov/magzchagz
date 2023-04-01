import React from "react";
import img from "../../assets/project/cls.jpg";

export const ItemOurWorksComponent: React.FC = () => {
  return (
    <div className="overflow-hidden relative blockProject w-full cursor-pointer ">
      <img src={img} className="transition-transform" />
      <div className="w-full transition-opacity opacity-0 bgBanner absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center text-[#fff] ">
        Animte
      </div>
    </div>
  );
};

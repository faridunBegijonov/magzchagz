import React from "react";
import logo from "../../assets/about/Logo.png";
import img from "../../assets/about/logomagz 1.png";

export const AboutComponent: React.FC = () => {
  return (
    <div
      id="about"
      className="s:px-[20px] s:py-[25px] w-[100%] xl:px-[50px] py-[45px]  px-[80px] "
    >
      <div className="h-screen w-[100%] flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <img
            src={logo}
            className="max-[600px]:w-[100px] max-[400px]:w-[70px]"
            alt="Logo"
          />
          <h1 className="max-[900px]:text-[24px] sm:text-[24px] max-[900px]:mt-[10px] lg:text-[34px] lg:mt-[15px] text-center text-[44px] text-[white] font-bold mt-[60px]">
            BRAIN <span className="text-[#02FFFD]">FO</span>CUSED ON YOU!
          </h1>
        </div>
      </div>
      <div className="sm:justify-center sm:flex-col flex items-center max-w-[1000px] mx-auto justify-between">
        <img
          src={img}
          alt="Img"
          className="s:w-[200px] sm:w-[250px] max-[600px]:mx-auto xl:mr-0 xl:w-[300px] 2xl:w-[350px]"
        />
        <h1 className="sm:w-[100%] sm:text-[24px] max-[900px]:text-[34px] max-[900px]:mt-[10px] lg:text-[44px] lg:mt-[15px] text-center text-[54px] text-[white] font-bold w-[50%] ">
          РЕКЛАМА ПРОДАКШН <span className="text-[#02FFFD]">МОЗГ</span>
        </h1>
      </div>
    </div>
  );
};

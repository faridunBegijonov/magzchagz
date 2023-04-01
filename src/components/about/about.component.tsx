import React from "react";
import logo from "../../assets/about/Logo.png";
import img from "../../assets/about/logomagz 1.png";
import img2 from "../../assets/about/Magz.png";
import about2Img from "../../assets/about/о нас4.png";
import about2imgItem from "../../assets/about/о насItem1.png";
import about3imgItem from "../../assets/about/о насItem2.png";
import about4imgItem from "../../assets/about/о насItem4.png";
import { aboutModel, aboutModel2, IAboutModel } from "./about.model";

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
            BRAIN F<span className="text-[#02FFFD]">O</span>CUSED ON YOU!
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

      <div className="max-[920px]:mt-[100px] lg:mt-[120px] mt-[300px]">
        <h2 className="sm:text-[16px] 3xl:w-[100%] w-[60%] mx-auto mt-8 max-[920px]:text-[28px] max-[920px]:mt-[20px] lg:text-[34px] lg:mt-[50px] text-center text-[44px] text-[white]">
          <span className="text-[#02FFFD]">
            MAGZ - THINKING, FILMING, MAKING.
          </span>{" "}
          <br />
          МЫ ЛЮБИМ СОЗДАВАТЬ НОВЫЙ МИР, ГДЕ СТАНОВЯТСЯ РЕАЛЬНОСТЬЮ ЛЮБЫЕ ИДЕИ.
        </h2>
      </div>

      <div className="max-w-[1280px] mx-auto">
        <div className="sm:flex-col 2xl:mt-[80px] max-[900px]:flex-col max-[900px]:justify-center lg:mt-[120px] mt-[300px] flex items-center justify-around">
          <div className="2xl:w-[100%] max-[900px]:w-[100%] w-[50%]">
            <h1 className="sm:mb-8 sm:text-[24px] lg:text-[34px] xl:text-[54px] text-[64px] text-[white] font-bold">
              КРЕАТИВ
              <br />
              В РЕШЕНИИ
              <br />
              ЗАДАЧ
              <br />
              КЛИЕНТА
            </h1>
          </div>
          <img src={img2} alt="Img" className="sm:block" />
        </div>
        <p className="sm:text-[16px] sm:mt-[20px] text-center 2xl:mt-[40px] text-[white] mt-[100px] text-[25px]">
          ЛЮБАЯ ЗАДАЧА, КОТОРАЯ СТОИТ ПЕРЕД НАМИ - ЭТО НЕ ПРОСТО ПРОИЗВОДСТВО.
          ЭТО, В ПЕРВУЮ ОЧЕРЕДЬ, ХУДОЖЕСТВЕННОЕ РЕШЕНИЕ, КОТОРОЕ ЗАСТАВИТ
          ЗРИТЕЛЕЙ ПЕРЕСМАТРИВАТЬ ВИДЕО{" "}
          <span className="text-[#02FFFD]">СНОВА И СНОВА</span>, ЧТОБЫ ПОЛУЧИТЬ
          ЭМОЦИИ. ТЕ ЭМОЦИИ, КОТОРЫЕ ВЫ И ХОТЕЛИ ИМ ПЕРЕДАТЬ.
        </p>
      </div>

      <div className="sm:mt-[50px] max-[770px]:mt-[80px] 2xl:mt-[100px] mt-[200px] max-w-[1280px] mx-auto ">
        <h1 className="sm:text-[24px] 2xl:text-[34px] text-[44px] text-[white] text-center">
          ЧЕМ МЫ ОТЛИЧАЕМСЯ ?
        </h1>

        <div className="sm:mt-[50px] mt-[100px] sm:flex-col flex items-center justify-around">
          {aboutModel.map((item: IAboutModel) => (
            <div
              key={item.img}
              className="sm:mb-6 md:w-[100%] border-2 border-white 2xl:w-[350px] 2xl:h-[350px] w-[500px] h-[500px] px-[15px] py-[20px] flex items-center justify-center "
            >
              <div>
                <img
                  className="sm:w-[60px] md:w-[80px] mx-auto"
                  src={item.img}
                  alt="Img"
                />
                <h1 className="sm:mt-[20px] sm:text-[20px] last:mt-4  2xl:text-[20px] text-[white] mt-[65px] text-[25px] text-center ">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className=" md:mt-0 xl:mt-[50px] mt-[100px] sm:flex-col flex items-center justify-around">
          {aboutModel2.map((item: IAboutModel) => (
            <div
              key={item.img}
              className="sm:mb-6 last:mb-0 md:w-[100%] border-2 border-white 2xl:w-[350px] 2xl:h-[350px] w-[500px] h-[500px] px-[15px] py-[20px] flex items-center justify-center "
            >
              <div>
                <img
                  className="sm:w-[60px] md:w-[80px] mx-auto"
                  src={item.img}
                  alt="Img"
                />
                <h1 className="sm:mt-[20px] sm:text-[20px] last:mt-4  2xl:text-[20px] text-[white] mt-[65px] text-[25px] text-center ">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="2xl:mt-[100px] xl:mt-[80px] mt-[160px] 3xl:w-full w-[80%] mx-auto
      "
      >
        <h1 className="sm:text-[24px] 2xl:text-[34px] text-[44px] text-[white] text-center">
          НАШ ПОДХОД К РАБОТЕ
        </h1>
        <img
          src={about2Img}
          className="2xl:mt-[100px] sm:hidden xl:mt-[80px] lg:mt-[50px] w-full mx-auto"
        />
        <img
          src={about2imgItem}
          className="sm:block hidden xl:mt-[80px] lg:mt-[50px] w-full mx-auto"
        />
        <img
          src={about3imgItem}
          className="sm:block hidden xl:mt-[80px] lg:mt-[50px] w-full mx-auto"
        />
        <img
          src={about4imgItem}
          className="sm:block hidden xl:mt-[80px] lg:mt-[50px] w-full mx-auto"
        />
      </div>
      <a
        href="#our-works"
        className="sm:text-[24px] sm:mt-[80px] text-center inline-block	flex justify-center transition-colors hover:text-[#8DA399FF] lg:text-[34px] text-center text-[44px] text-[white] mt-[24px] font-bold"
      >
        ДАВАЙТЕ ТВОРИТЬ С НАМИ!
      </a>
    </div>
  );
};

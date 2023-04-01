import React, { FC, useState } from "react";
import video from "../../../assets/banner/Siyoma Rose drink water TVC.mp4";
import pdfImg from "../../../assets/banner/pdf.svg";
import { SidebarComponentBanner } from "./sidebar.component";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ItemVideoYoutubeBannerComponent } from "./itemVideoYoutubeBanner.component";
import { itemVideoModel } from "../model";
import { ItemVideoType } from "../types";
import img1 from "../../../assets/logo/1.png";
import img2 from "../../../assets/logo/2.png";
import img3 from "../../../assets/logo/3.png";
import img4 from "../../../assets/logo/4.png";
import img5 from "../../../assets/logo/5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const BannerComponent: FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <div id="home" className="h-[screen] relative overflow-hidden">
        <video
          src={video}
          className="s:scale-[4.5] w-[100%] h-screen videoB"
          autoPlay
          loop
          muted
        />
        <div className="s:px-[20px] s:py-[25px] w-[100%] h-screen bgBanner absolute top-0 left-0 right-0 bottom-0 xl:px-[50px] py-[45px]  px-[80px] flex items-start justify-between flex-col">
          <div className="xl:hidden w-[300px] absolute right-0 bottom-0">
            {itemVideoModel.map((item: ItemVideoType) => (
              <ItemVideoYoutubeBannerComponent key={item.srcVideo} {...item} />
            ))}
          </div>
          <div className="absolute right-0 bottom-0"></div>
          <div className="flex items-center justify-between w-[100%]">
            <a
              href="./magzfinal_draft1.pdf"
              download
              className="flex items-center"
            >
              <img
                src={pdfImg}
                alt="Img"
                className="xl:w-[40px] xl:h-[40px] w-[60px] xl:mr-[10px] mr-[18px]"
              />
              <span className="xl:text-sm text-[#43AEF1]">
                скачать <br /> презентацию
              </span>
            </a>
            <div
              onClick={() => setMenu(!menu)}
              className="xl:flex cursor-pointer hidden w-[70px] h-[70px] items-center justify-center  "
            >
              {menu ? (
                <CloseIcon
                  className="text-[#fff]"
                  sx={{ fontSize: "2.5rem" }}
                />
              ) : (
                <MenuIcon className="text-[#fff]" sx={{ fontSize: "2.5rem" }} />
              )}
            </div>
          </div>
          <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] text-[50px] leading-snug	 text-[#fff] font-[900] w-[950px]">
            МЫ ПРИДУМЫВАЕМ И ПРОИЗВОДИМ ВИДЕОРОЛИКИ САМОГО РАЗНОГО СТИЛЯ И
            НАПРАВЛЕНИЙ
          </h1>
          <div className="hidden sm:block">
            <div className="sm:text-[10px]">Нам доверяют</div>
            <img className="w-[100%]" src={img1} alt="Logo" />
          </div>
          <div className="sm:hidden sm:text-[10px]">Нам доверяют</div>
          <Swiper className="w-[80%] xl:w-[100%]" slidesPerView={2}>
            <SwiperSlide>
              <img className="w-[100%]" src={img1} alt="Logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[100%]  " src={img2} alt="Logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[100%] " src={img3} alt="Logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[100%] " src={img4} alt="Logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[100%] " src={img5} alt="Logo" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <SidebarComponentBanner isOpen={menu} />
    </>
  );
};

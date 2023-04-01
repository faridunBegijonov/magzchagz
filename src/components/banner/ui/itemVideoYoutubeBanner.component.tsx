import React, { FC, useState } from "react";
import logo from "../../../assets/banner/play-square.png";
import { AnimatePresence, motion } from "framer-motion";
import { itemVideoAnimate } from "../model";
import { ItemVideoType } from "../types";
export const ItemVideoYoutubeBannerComponent: FC<ItemVideoType> = ({
  srcVideo,
  title,
  img,
}: ItemVideoType) => {
  const [openModal, setOpenModal] = useState(false);
  const handlerModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div
        onClick={handlerModal}
        className="w-[300px] overflow-hidden h-[170px] relative cursor-pointer "
      >
        <img
          src={logo}
          alt="Img"
          className="absolute left-0 top-0 w-[40px] transition-all"
        />
        <img src={img} className="w-[100%] transition-transform " alt="Img" />
        <span className="absolute left-4 bottom-4 text-[#fff] font-normal ">
          {title}
        </span>
      </div>
      <AnimatePresence>
        {openModal && (
          <motion.div
            variants={itemVideoAnimate}
            initial="hidden"
            animate="animate"
            exit="exit"
            onClick={handlerModal}
            className="fixed z-[100] top-0 bottom-0 left-0 right-0 bgBanner h-screen w-[100%] flex items-center justify-center"
          >
            <div
              onClick={handlerModal}
              className="absolute right-10 cursor-pointer top-1 text-[#fff] text-[85px] rotate-45"
            >
              +
            </div>
            <iframe
              width="960"
              height="515"
              src={srcVideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

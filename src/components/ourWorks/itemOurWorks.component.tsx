import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { itemVideoAnimate } from "../banner/model";
import { ItemVideoType } from "../banner";

export const ItemOurWorksComponent: React.FC<ItemVideoType> = ({
  srcVideo,
  img,
  title,
  type,
  typeVideo = "YouTube video player",
}: ItemVideoType) => {
  const [openModal, setOpenModal] = useState(false);
  const handlerModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="overflow-hidden relative blockProject w-full cursor-pointer ">
      <img src={img} className="transition-transform" />
      <div
        onClick={handlerModal}
        className="w-full transition-opacity opacity-0 bgBanner absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center text-[#fff] "
      >
        <div className="px-[8px] flex items-center justify-center flex-col">
          <span>{type}</span>
          <h1 className="text-center font-bold text-[20px] ">{title}</h1>
        </div>
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
              className="sm:hidden absolute right-10 cursor-pointer top-1 text-[#fff] text-[65px] rotate-45"
            >
              +
            </div>
            <div className="sm:w-[90%] sm:h-[30%] w-[50%] h-[50%]">
              <iframe
                width="100%"
                height="100%"
                src={srcVideo}
                title={typeVideo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import React, { FC } from "react";
import logo from "../../../assets/sidebar/logo.png";
import { linksModel } from "../model";
export const SidebarComponent: FC = () => {
  return (
    <div className="xl:hidden xl:py-[28px] py-[48px] px-[14px] flex items-center flex-col justify-between fixed left-0 top-0 bottom-0 w-[250px] h-screen bg-[#171717] ">
      <div className="flex items-center flex-col justify-between ">
        <a href="#home">
          <img src={logo} className="w-[113px] h-[113px]" alt="Logo" />
        </a>
        <div className="flex flex-col items-center justify-between xl:h-[180px] h-[280px] mt-[8px] ">
          {linksModel.map((links) => (
            <a
              key={links.title}
              href={links.href}
              className="hover:text-[#8DA399] transition-colors"
            >
              {links.title}
            </a>
          ))}
        </div>
      </div>
      <a
        href="tel:+992 90 911 2221"
        className="hover:text-[#8DA399] transition-colors"
      >
        +992 90 911 2221
      </a>
      <a
        className="w-full"
        target="_blank"
        rel="noreferrer"
        href="https://t.me/magzchagzbot"
      >
        <button className="w-full bg-[#e53012] py-[13px] px-[24px]">
          Telegram Bot
        </button>
      </a>
    </div>
  );
};

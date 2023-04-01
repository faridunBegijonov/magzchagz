import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

export const ContactComponent: React.FC = () => {
  return (
    <div id="contact" className="bgBannerImgContact">
      <div className="s:px-[20px] justify-center items-start  h-screen bg-[red] flex s:py-[25px] w-[100%] h-screen bgBanner xl:px-[50px] py-[45px] px-[80px] flex-col">
        <div className="3xl:w-[70%] 2xl:w-[100%] w-[50%]">
          <p className="mb-2">Мы находимся —</p>
          <h1 className="font-bold 2xl:text-[44px] xl:text-[34px] sm:text-[24px] text-[55px]">
            Таджикистан г. Душанбе
          </h1>
          <p className="xl:text-[28px] sm:text-[24px] text-[38px]">
            ул. Зафар, 174 734025
          </p>
          <div className="flex items-center justify-between sm:h-[400px] justify-start items-start sm:flex-col w-[100%] flex-wrap mt-[38px]">
            <a
              href="https://www.youtube.com/@JereemeProWork"
              rel="noreferrer"
              target="_blank"
              className="3xl:w-[300px] w-[400px] sm:w-full "
            >
              <div className="flex items-center">
                <div className="bg-[#E02F2FFF] rounded-full xl:p-[10px]  p-[15px] text-[#fff]">
                  <YouTubeIcon sx={{ fontSize: "35px" }} />
                </div>
                <div className="ml-[14px]">
                  <h1 className="3xl:text-[25px] xl:text-[20px] font-bold text-[29px]">
                    Портфолио на YouTube
                  </h1>
                  <a
                    href="https://www.youtube.com/@JereemeProWork"
                    rel="noreferrer"
                    target="_blank"
                    className="3xl:text-[20px] underline hover:no-underline mt-[4px] text-[25px] text-[#41ADF0FF]"
                  >
                    Tj production
                  </a>
                </div>
              </div>
            </a>

            <a
              href="https://t.me/thechose1ne"
              rel="noreferrer"
              className="3xl:w-[300px] w-[400px] sm:w-full "
              target="_blank"
            >
              <div className="flex items-center">
                <div className="bg-[#4B92BDFF] rounded-full xl:p-[10px] p-[15px] text-[#fff]">
                  <TelegramIcon sx={{ fontSize: "35px" }} />
                </div>
                <div className="ml-[14px]">
                  <h1 className="3xl:text-[25px] font-bold text-[29px]">
                    Telegram
                  </h1>
                  <a
                    href="https://t.me/magzchagzbot"
                    rel="noreferrer"
                    target="_blank"
                    className="3xl:text-[20px] underline hover:no-underline mt-[4px] text-[25px] text-[#41ADF0FF]"
                  >
                    @magzchagzbot
                  </a>
                </div>
              </div>
            </a>

            <a
              href="mailto:maghzchaghz@gmail.com"
              className="3xl:w-[300px] sm:mt-0 mt-[34px] w-[400px] sm:w-full "
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex items-center">
                <div className="bg-[red] rounded-full xl:p-[10px] p-[15px] text-[#fff]">
                  <EmailIcon sx={{ fontSize: "35px" }} />
                </div>
                <div className="ml-[14px]">
                  <h1 className="3xl:text-[25px] font-bold text-[29px]">
                    E-mail для заказчиков
                  </h1>
                  <a
                    href="mailto:maghzchaghz@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    className="3xl:text-[20px] underline hover:no-underline mt-[4px] text-[25px] text-[#41ADF0FF]"
                  >
                    maghzchaghz@gmail.com
                  </a>
                </div>
              </div>
            </a>

            <a
              href="mailto:sayodzade@gmail.com"
              className="3xl:w-[300px] sm:mt-0 mt-[34px] w-[400px] sm:w-full "
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex items-center">
                <div className="bg-[red] rounded-full xl:p-[10px] p-[15px] text-[#fff]">
                  <EmailIcon sx={{ fontSize: "35px" }} />
                </div>
                <div className="ml-[14px]">
                  <h1 className="3xl:text-[25px] font-bold text-[29px]">
                    Сотрудничество
                  </h1>
                  <a
                    href="mailto:sayodzade@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    className="3xl:text-[20px] underline hover:no-underline mt-[4px] text-[25px] text-[#41ADF0FF]"
                  >
                    sayodzade@gmail.com
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

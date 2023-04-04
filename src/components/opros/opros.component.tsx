import React, { useState } from "react";
import video from "../../assets/banner/Siyoma Rose drink water TVC.mp4";
import img from "../../assets/opros/quiz.png";

export const OprosComponent: React.FC = () => {
  const [start, setStart] = useState(false);
  const [tematika, setTematika] = useState("Видеопрезентация");
  const handleChange = (event: any) => {
    console.log(event.target.value);
    setTematika(event.target.value);
  };
  return (
    <>
      <div id="price" className="h-[screen] relative overflow-hidden">
        <video
          src={video}
          className="s:scale-[4.5] w-[100%] h-screen videoB"
          autoPlay
          loop
          muted
        />
        <div className="s:px-[20px] s:py-[25px] w-[100%] h-screen bgBanner absolute top-0 left-0 right-0 bottom-0 xl:px-[50px] py-[45px]  px-[80px] flex items-start justify-center flex-col">
          {start ? (
            <>
              <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                Какая тематика съёмки вам подходит?
              </h1>
              <div className="w-[80%]">
                <div className="flex items-center sm:h-[180px] sm:justify-between sm:flex-col mt-8">
                  <div className="flex items-center  3xl:w-[300px] sm:w-full w-[500px]  ">
                    <input
                      type="radio"
                      id="Видеопрезентация"
                      name="Видеопрезентация"
                      value="Видеопрезентация"
                      checked={tematika === "Видеопрезентация"}
                      onChange={handleChange}
                    />
                    <label className="text-[#fff]" htmlFor="Видеопрезентация">
                      Видеопрезентация
                    </label>
                  </div>

                  <div className="flex items-center 3xl:w-[300px] sm:w-full w-[500px] ">
                    <input
                      type="radio"
                      id="Рекламный ролик (промо)"
                      name="Рекламный ролик (промо)"
                      value="Рекламный ролик (промо)"
                      checked={tematika === "Рекламный ролик (промо)"}
                      onChange={handleChange}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Рекламный ролик (промо)"
                    >
                      Рекламный ролик (промо)
                    </label>
                  </div>

                  <div className="flex items-center 3xl:w-[300px] sm:w-full w-[500px] ">
                    <input
                      type="radio"
                      id="Освещение мероприятий"
                      name="Освещение мероприятий"
                      value="Освещение мероприятий"
                      checked={tematika === "Освещение мероприятий"}
                      onChange={handleChange}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Освещение мероприятий"
                    >
                      Освещение мероприятий
                    </label>
                  </div>
                </div>
                <div className="flex items-center sm:flex-col sm:h-[160px] sm:mt-5 sm:justify-between sm:mt-0 mt-8">
                  <div className="flex items-center sm:w-full 3xl:w-[300px] w-[500px] ">
                    <input
                      type="radio"
                      id="Корпоративный ролик"
                      name="Корпоративный ролик"
                      value="Корпоративный ролик"
                      checked={tematika === "Корпоративный ролик"}
                      onChange={handleChange}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Корпоративный ролик"
                    >
                      Корпоративный ролик
                    </label>
                  </div>

                  <div className="flex items-center3xl:w-[300px] sm:w-full w-[500px] ">
                    <input
                      type="radio"
                      id="Обучающий фильм"
                      name="Обучающий фильм"
                      value="Обучающий фильм"
                      checked={tematika === "Обучающий фильм"}
                      onChange={handleChange}
                    />
                    <label className="text-[#fff]" htmlFor="Обучающий фильм">
                      Обучающий фильм
                    </label>
                  </div>

                  <div className="flex items-center 3xl:w-[300px] sm:w-full w-[500px] ">
                    <input
                      type="radio"
                      id="Другое"
                      name="Другое"
                      value="Другое"
                      checked={tematika === "Другое"}
                      onChange={handleChange}
                    />
                    <label className="text-[#fff]" htmlFor="Другое">
                      Другое
                    </label>
                  </div>
                </div>
                <button
                  onClick={() => alert(tematika)}
                  className="text-[20px] text-[24px] mx-auto mt-[38px] 3xl:text-[20px]  bg-[#e53012] 3xl:py-[7px] py-[15px] px-[34px]"
                >
                  СЛЕДУЮЩИЙ
                </button>
                <h1 className="mt-4 font-bold text-[28px] lg:w-full flex justify-end w-[60%] ">
                  1 / 10
                </h1>
              </div>
            </>
          ) : (
            <>
              <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                Пройдите опрос <br /> из 10 вопросов
              </h1>
              <div className="flex items-center sm:items-start sm:flex-col mt-[22px]">
                <img className="3xl:w-[200px] w-[400px]" src={img} alt="Img" />
                <p className="text-[25px] sm:w-full sm:mt-4 w-[40%] ml-[18px] ">
                  и получите{" "}
                  <span className="jobT text-[#222] bg-[#FFC600FF] px-[18px] font-bold py-1">
                    скидку 10%
                  </span>{" "}
                  + 3 варианта сметы по стоимости вашего видео в течение дня
                </p>
              </div>
              <button
                onClick={() => setStart(true)}
                className="font-bold text-[24px] mx-auto mt-[18px] 3xl:text-[20px]  bg-[#e53012] py-[13px] px-[24px]"
              >
                Начать тест
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

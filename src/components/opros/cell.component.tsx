import React, { useState } from "react";

export const CellComponent: React.FC = () => {
  const [cell, setCell] = useState(
    "Доходчиво рассказать о продукте или услуге целевой аудитории"
  );
  const handleChange = (event: any) => {
    console.log(event.target.value);
    setCell(event.target.value);
  };
  return (
    <>
      <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
        Какую цель преследует ваше видео?
      </h1>
      <div className="w-[100%]">
        <div className="flex items-center sm:h-[180px] sm:justify-between sm:flex-col mt-8">
          <div className="flex items-center  3xl:w-[300px] sm:w-full w-[500px]  ">
            <input
              type="radio"
              id="Доходчиво рассказать о продукте или услуге целевой аудитории"
              name="Доходчиво рассказать о продукте или услуге целевой аудитории"
              value="Доходчиво рассказать о продукте или услуге целевой аудитории"
              checked={
                cell ===
                "Доходчиво рассказать о продукте или услуге целевой аудитории"
              }
              onChange={handleChange}
            />
            <label
              className="text-[#fff]"
              htmlFor="Доходчиво рассказать о продукте или услуге целевой аудитории"
            >
              Доходчиво рассказать о продукте или услуге целевой аудитории
            </label>
          </div>

          <div className="flex items-center 3xl:w-[300px] sm:w-full w-[500px] ">
            <input
              type="radio"
              id="Повысить узнаваемость бренда"
              name="Повысить узнаваемость бренда"
              value="Повысить узнаваемость бренда"
              checked={cell === "Повысить узнаваемость бренда"}
              onChange={handleChange}
            />
            <label
              className="text-[#fff]"
              htmlFor="Повысить узнаваемость бренда"
            >
              Повысить узнаваемость бренда
            </label>
          </div>
        </div>
        <div className="flex items-center sm:flex-col sm:h-[220px] sm:mt-5 sm:justify-between sm:mt-0 mt-8">
          <div className="flex items-center sm:w-full 3xl:w-[800px] sm:w-full w-[500px]">
            <input
              type="radio"
              id="Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
              name="Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
              value="Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
              checked={
                cell ===
                "Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
              }
              onChange={handleChange}
            />
            <label
              className="text-[#fff]"
              htmlFor="Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
            >
              Сформировать доверие, повысить лояльность сотрудников, партнеров,
              потенциальных клиентов
            </label>
          </div>

          <div className="flex items-center 3xl:w-[300px] sm:w-full w-[500px]">
            <input
              type="radio"
              id="Сформировать спрос на новый продукт или услугу"
              name="Сформировать спрос на новый продукт или услугу"
              value="Сформировать спрос на новый продукт или услугу"
              checked={
                cell === "Сформировать спрос на новый продукт или услугу"
              }
              onChange={handleChange}
            />
            <label
              className="text-[#fff]"
              htmlFor="Сформировать спрос на новый продукт или услугу"
            >
              Сформировать спрос на новый продукт или услугу
            </label>
          </div>
        </div>
        <button
          onClick={() => alert(cell)}
          className="text-[20px] text-[24px] mx-auto mt-[38px] 3xl:text-[20px]  bg-[#e53012] 3xl:py-[7px] py-[15px] px-[34px]"
        >
          СЛЕДУЮЩИЙ
        </button>
        <h1 className="mt-4 font-bold text-[28px] lg:w-full flex justify-end w-[60%] ">
          2 / 10
        </h1>
      </div>
    </>
  );
};

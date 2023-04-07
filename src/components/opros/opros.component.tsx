import React, { useState } from "react";
import video from "../../assets/banner/Siyoma Rose drink water TVC.mp4";
import img from "../../assets/opros/quiz.png";

export const OprosComponent: React.FC = () => {
  const [start, setStart] = useState(false);
  const [tematika, setTematika] = useState("Видеопрезентация");
  const [cell, setCell] = useState(
    "Доходчиво рассказать о продукте или услуге целевой аудитории"
  );
  const [delay, setDelay] = useState("От 10 до 30 секунд");
  const [lang, setLang] = useState("Русский");
  const [scenari, setScenari] = useState("Да, мне нужна помощь");
  const [kogda, setKogda] = useState("Сроки горят, есть меньше недели");
  const [auditori, setAuditori] = useState("Молодёжь, нужно хайпануть");
  const [geroy, setGeroy] = useState("Исключительно люди");
  const [money, setMoney] = useState("Исключительно люди");
  const [sendBnt, setSendBtn] = useState(false);
  const [nameAvtor, setNameAvtor] = useState("");
  const [phoneAvtor, setPhoneAvtor] = useState("");
  const [polya, setPolya] = useState(false);
  const handleChange = (event: any) => {
    console.log(event.target.value);
    setTematika(event.target.value);
  };
  const handleChangeCell = (event: any) => {
    setCell(event.target.value);
  };

  const handleChangeDelay = (event: any) => {
    setDelay(event.target.value);
  };

  const handleChangeLang = (event: any) => {
    setLang(event.target.value);
  };

  const handleChangeScenari = (event: any) => {
    setScenari(event.target.value);
  };

  const handleChangeKogda = (event: any) => {
    setKogda(event.target.value);
  };

  const handleChangeAuditori = (event: any) => {
    setAuditori(event.target.value);
  };
  const handleChangeGeroy = (event: any) => {
    setGeroy(event.target.value);
  };

  const handleChangeMoney = (event: any) => {
    setMoney(event.target.value);
  };

  const sendMassage = () => {
    if (nameAvtor && phoneAvtor) {
      const message = {
        "Какая тематика съёмки вам подходит?": tematika,
        "Какую цель преследует ваше видео?": cell,
        "Какой длительности должно быть видео?": delay,
        "На каком языке должно быть ваше видео?": lang,
        "Вам потребуется написание сценария или текста?": scenari,
        "Когда полностью должно быть готово видео?": kogda,
        "Какая целевая аудитория вас интересует?": auditori,
        "Кто или что является героем видео?": geroy,
        Имя: nameAvtor,
        Телефон: phoneAvtor,
      };
      console.log(JSON.stringify(message, null, "\t"));
      setNameAvtor("");
      setPhoneAvtor("");
      setSendBtn(true);
      setPolya(false);
    } else {
      setPolya(true);
    }
  };
  return (
    <>
      <div
        id="price"
        className={`${start && "h-auto"} h-[screen] relative ${
          start ? "" : "overflow-hidden"
        }`}
      >
        <div
          className={`s:px-[20px] s:py-[25px] w-[100%] xl:px-[50px] py-[45px]  px-[80px] ${
            start ? "" : "h-screen flex items-start justify-center"
          } flex-col`}
        >
          {start ? (
            <>
              <div className="w-[100%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  Какая тематика съёмки вам подходит?
                </h1>
                <div className="flex items-center flex-wrap w-[80%] mt-[18px] ">
                  <div className="flex items-center">
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

                  <div className="flex items-center">
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

                  <div className="flex items-center">
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

                  <div className="flex items-center">
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

                  <div className="flex items-center">
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

                  <div className="flex items-center">
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
              </div>
              <hr className="my-[40px]" />
              <div className="w-[100%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  Какую цель преследует ваше видео?
                </h1>
                <div className="flex items-center flex-wrap w-[80%] mt-[18px] ">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Доходчиво рассказать о продукте или услуге целевой аудитории"
                      name="Доходчиво рассказать о продукте или услуге целевой аудитории"
                      value="Доходчиво рассказать о продукте или услуге целевой аудитории"
                      checked={
                        cell ===
                        "Доходчиво рассказать о продукте или услуге целевой аудитории"
                      }
                      onChange={handleChangeCell}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Доходчиво рассказать о продукте или услуге целевой аудитории"
                    >
                      Доходчиво рассказать о продукте или услуге целевой
                      аудитории
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Повысить узнаваемость бренда"
                      name="Повысить узнаваемость бренда"
                      value="Повысить узнаваемость бренда"
                      checked={cell === "Повысить узнаваемость бренда"}
                      onChange={handleChangeCell}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Повысить узнаваемость бренда"
                    >
                      Повысить узнаваемость бренда
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
                      name="Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
                      value="Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
                      checked={
                        cell ===
                        "Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
                      }
                      onChange={handleChangeCell}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Сформировать доверие, повысить лояльность сотрудников, партнеров, потенциальных клиентов"
                    >
                      Сформировать доверие, повысить лояльность сотрудников,
                      партнеров, потенциальных клиентов
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Сформировать спрос на новый продукт или услугу"
                      name="Сформировать спрос на новый продукт или услугу"
                      value="Сформировать спрос на новый продукт или услугу"
                      checked={
                        cell ===
                        "Сформировать спрос на новый продукт или услугу"
                      }
                      onChange={handleChangeCell}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Сформировать спрос на новый продукт или услугу"
                    >
                      Сформировать спрос на новый продукт или услугу
                    </label>
                  </div>
                </div>
              </div>
              <hr className="my-[40px]" />

              <div className="w-[100%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  Какой длительности должно быть видео?
                </h1>
                <div className="flex items-center flex-wrap w-[80%] mt-[18px] ">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="От 10 до 30 секунд"
                      name="От 10 до 30 секунд"
                      value="От 10 до 30 секунд"
                      checked={delay === "От 10 до 30 секунд"}
                      onChange={handleChangeDelay}
                    />
                    <label className="text-[#fff]" htmlFor="От 10 до 30 секунд">
                      От 10 до 30 секунд
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="От 30 до 60 секунд"
                      name="От 30 до 60 секунд"
                      value="От 30 до 60 секунд"
                      checked={delay === "От 30 до 60 секунд"}
                      onChange={handleChangeDelay}
                    />
                    <label className="text-[#fff]" htmlFor="От 30 до 60 секунд">
                      От 30 до 60 секунд
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="От 1 до 2 минут"
                      name="От 1 до 2 минут"
                      value="От 1 до 2 минут"
                      checked={delay === "От 1 до 2 минут"}
                      onChange={handleChangeDelay}
                    />
                    <label className="text-[#fff]" htmlFor="От 1 до 2 минут">
                      От 1 до 2 минут
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="От 2 до 3 минут"
                      name="От 2 до 3 минут"
                      value="От 2 до 3 минут"
                      checked={delay === "От 2 до 3 минут"}
                      onChange={handleChangeDelay}
                    />
                    <label className="text-[#fff]" htmlFor="От 2 до 3 минут">
                      От 2 до 3 минут
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="От 3 минут и более"
                      name="От 3 минут и более"
                      value="От 3 минут и более"
                      checked={delay === "От 3 минут и более"}
                      onChange={handleChangeDelay}
                    />
                    <label className="text-[#fff]" htmlFor="От 3 минут и более">
                      От 3 минут и более
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Мы будем снимать кино"
                      name="Мы будем снимать кино"
                      value="Мы будем снимать кино"
                      checked={delay === "Мы будем снимать кино"}
                      onChange={handleChangeDelay}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Мы будем снимать кино"
                    >
                      Мы будем снимать кино
                    </label>
                  </div>
                </div>
              </div>
              <hr className="my-[40px]" />

              <div className="w-[100%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  На каком языке должно быть ваше видео?
                </h1>
                <div className="flex items-center flex-wrap w-[80%] mt-[18px] ">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Русский"
                      name="Русский"
                      value="Русский"
                      checked={lang === "Русский"}
                      onChange={handleChangeLang}
                    />
                    <label className="text-[#fff]" htmlFor="Русский">
                      Русский
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Английский"
                      name="Английский"
                      value="Английский"
                      checked={lang === "Английский"}
                      onChange={handleChangeLang}
                    />
                    <label className="text-[#fff]" htmlFor="Английский">
                      Английский
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Русский и английский"
                      name="Русский и английский"
                      value="Русский и английский"
                      checked={lang === "Русский и английский"}
                      onChange={handleChangeLang}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Русский и английский"
                    >
                      Русский и английский
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Другие языки"
                      name="Другие языки"
                      value="Другие языки"
                      checked={lang === "Другие языки"}
                      onChange={handleChangeLang}
                    />
                    <label className="text-[#fff]" htmlFor="Другие языки">
                      Другие языки
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Только музыкальное сопровождение"
                      name="Только музыкальное сопровождение"
                      value="Только музыкальное сопровождение"
                      checked={lang === "Только музыкальное сопровождение"}
                      onChange={handleChangeLang}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Только музыкальное сопровождение"
                    >
                      Только музыкальное сопровождение
                    </label>
                  </div>
                </div>
              </div>

              <hr className="my-[40px]" />

              <div className="w-[100%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  Вам потребуется написание сценария или текста?
                </h1>
                <div className="flex items-center flex-wrap w-[80%] mt-[18px] ">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Да, мне нужна помощь"
                      name="Да, мне нужна помощь"
                      value="Да, мне нужна помощь"
                      checked={scenari === "Да, мне нужна помощь"}
                      onChange={handleChangeScenari}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Да, мне нужна помощь"
                    >
                      Да, мне нужна помощь
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Видел классную идею и хочу повторить"
                      name="Видел классную идею и хочу повторить"
                      value="Видел классную идею и хочу повторить"
                      checked={
                        scenari === "Видел классную идею и хочу повторить"
                      }
                      onChange={handleChangeScenari}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Видел классную идею и хочу повторить"
                    >
                      Видел классную идею и хочу повторить
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="У меня свой сценарий и текст"
                      name="У меня свой сценарий и текст"
                      value="У меня свой сценарий и текст"
                      checked={scenari === "У меня свой сценарий и текст"}
                      onChange={handleChangeScenari}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="У меня свой сценарий и текст"
                    >
                      У меня свой сценарий и текст
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Надо просто снимать по факту"
                      name="Надо просто снимать по факту"
                      value="Надо просто снимать по факту"
                      checked={scenari === "Надо просто снимать по факту"}
                      onChange={handleChangeScenari}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Надо просто снимать по факту"
                    >
                      Надо просто снимать по факту
                    </label>
                  </div>
                </div>
              </div>

              <hr className="my-[40px]" />

              <div className="w-[100%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  Когда полностью должно быть готово видео?
                </h1>
                <div className="flex items-center flex-wrap w-[80%] mt-[18px] ">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Сроки горят, есть меньше недели"
                      name="Сроки горят, есть меньше недели"
                      value="Сроки горят, есть меньше недели"
                      checked={kogda === "Сроки горят, есть меньше недели"}
                      onChange={handleChangeKogda}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Сроки горят, есть меньше недели"
                    >
                      Сроки горят, есть меньше недели
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Неделя, две — меня устроит"
                      name="Неделя, две — меня устроит"
                      value="Неделя, две — меня устроит"
                      checked={kogda === "Неделя, две — меня устроит"}
                      onChange={handleChangeKogda}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Неделя, две — меня устроит"
                    >
                      Неделя, две — меня устроит
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Вписаться в рамки месяца, железно"
                      name="Вписаться в рамки месяца, железно"
                      value="Вписаться в рамки месяца, железно"
                      checked={kogda === "Вписаться в рамки месяца, железно"}
                      onChange={handleChangeKogda}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Вписаться в рамки месяца, железно"
                    >
                      Вписаться в рамки месяца, железно
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Я не тороплюсь"
                      name="Я не тороплюсь"
                      value="Я не тороплюсь"
                      checked={kogda === "Я не тороплюсь"}
                      onChange={handleChangeKogda}
                    />
                    <label className="text-[#fff]" htmlFor="Я не тороплюсь">
                      Я не тороплюсь
                    </label>
                  </div>
                </div>
              </div>

              <hr className="my-[40px]" />

              <div className="w-[100%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  Какая целевая аудитория вас интересует?
                </h1>
                <div className="flex items-center flex-wrap w-[80%] mt-[18px] ">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Молодёжь, нужно хайпануть"
                      name="Молодёжь, нужно хайпануть"
                      value="Молодёжь, нужно хайпануть"
                      checked={auditori === "Молодёжь, нужно хайпануть"}
                      onChange={handleChangeAuditori}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Молодёжь, нужно хайпануть"
                    >
                      Молодёжь, нужно хайпануть
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Мамочки и их детишки"
                      name="Мамочки и их детишки"
                      value="Мамочки и их детишки"
                      checked={auditori === "Мамочки и их детишки"}
                      onChange={handleChangeAuditori}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Мамочки и их детишки"
                    >
                      Мамочки и их детишки
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Пожилые, бывалые люди"
                      name="Пожилые, бывалые люди"
                      value="Пожилые, бывалые люди"
                      checked={auditori === "Пожилые, бывалые люди"}
                      onChange={handleChangeAuditori}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Пожилые, бывалые люди"
                    >
                      Пожилые, бывалые люди
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Серьёзные люди, предприниматели"
                      name="Серьёзные люди, предприниматели"
                      value="Серьёзные люди, предприниматели"
                      checked={auditori === "Серьёзные люди, предприниматели"}
                      onChange={handleChangeAuditori}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Серьёзные люди, предприниматели"
                    >
                      Серьёзные люди, предприниматели
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Узкая, профессиональная"
                      name="Узкая, профессиональная"
                      value="Узкая, профессиональная"
                      checked={auditori === "Узкая, профессиональная"}
                      onChange={handleChangeAuditori}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Узкая, профессиональная"
                    >
                      Узкая, профессиональная
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Видео должно подходить всем"
                      name="Видео должно подходить всем"
                      value="Видео должно подходить всем"
                      checked={auditori === "Видео должно подходить всем"}
                      onChange={handleChangeAuditori}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Видео должно подходить всем"
                    >
                      Видео должно подходить всем
                    </label>
                  </div>
                </div>
              </div>

              <hr className="my-[40px]" />

              <div className="w-[100%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  Кто или что является героем видео?
                </h1>
                <div className="flex items-center flex-wrap w-[80%] mt-[18px] ">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Исключительно люди"
                      name="Исключительно люди"
                      value="Исключительно люди"
                      checked={geroy === "Исключительно люди"}
                      onChange={handleChangeGeroy}
                    />
                    <label className="text-[#fff]" htmlFor="Исключительно люди">
                      Исключительно люди
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Крупногабаритные предметы"
                      name="Крупногабаритные предметы"
                      value="Крупногабаритные предметы"
                      checked={geroy === "Крупногабаритные предметы"}
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Крупногабаритные предметы"
                    >
                      Крупногабаритные предметы
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Пейзажи, природа, пространство"
                      name="Пейзажи, природа, пространство"
                      value="Пейзажи, природа, пространство"
                      checked={geroy === "Пейзажи, природа, пространство"}
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Пейзажи, природа, пространство"
                    >
                      Пейзажи, природа, пространство
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Интересует фудсъёмка"
                      name="Интересует фудсъёмка"
                      value="Интересует фудсъёмка"
                      checked={geroy === "Интересует фудсъёмка"}
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Интересует фудсъёмка"
                    >
                      Интересует фудсъёмка
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Нужно будет снимать животных"
                      name="Нужно будет снимать животных"
                      value="Нужно будет снимать животных"
                      checked={geroy === "Нужно будет снимать животных"}
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Нужно будет снимать животных"
                    >
                      Нужно будет снимать животных
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Совмещенная съёмка из нескольких вариантов"
                      name="Совмещенная съёмка из нескольких вариантов"
                      value="Совмещенная съёмка из нескольких вариантов"
                      checked={
                        geroy === "Совмещенная съёмка из нескольких вариантов"
                      }
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Совмещенная съёмка из нескольких вариантов"
                    >
                      Совмещенная съёмка из нескольких вариантов
                    </label>
                  </div>
                </div>
              </div>

              <hr className="my-[40px]" />

              <div className="w-[100%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  Какой примерный бюджет вашего видео?
                </h1>
                <div className="flex items-center flex-wrap w-[80%] mt-[18px] ">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Исключительно люди"
                      name="Исключительно люди"
                      value="Исключительно люди"
                      checked={geroy === "Исключительно люди"}
                      onChange={handleChangeGeroy}
                    />
                    <label className="text-[#fff]" htmlFor="Исключительно люди">
                      Исключительно люди
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Крупногабаритные предметы"
                      name="Крупногабаритные предметы"
                      value="Крупногабаритные предметы"
                      checked={geroy === "Крупногабаритные предметы"}
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Крупногабаритные предметы"
                    >
                      Крупногабаритные предметы
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Пейзажи, природа, пространство"
                      name="Пейзажи, природа, пространство"
                      value="Пейзажи, природа, пространство"
                      checked={geroy === "Пейзажи, природа, пространство"}
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Пейзажи, природа, пространство"
                    >
                      Пейзажи, природа, пространство
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Интересует фудсъёмка"
                      name="Интересует фудсъёмка"
                      value="Интересует фудсъёмка"
                      checked={geroy === "Интересует фудсъёмка"}
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Интересует фудсъёмка"
                    >
                      Интересует фудсъёмка
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Нужно будет снимать животных"
                      name="Нужно будет снимать животных"
                      value="Нужно будет снимать животных"
                      checked={geroy === "Нужно будет снимать животных"}
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Нужно будет снимать животных"
                    >
                      Нужно будет снимать животных
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Совмещенная съёмка из нескольких вариантов"
                      name="Совмещенная съёмка из нескольких вариантов"
                      value="Совмещенная съёмка из нескольких вариантов"
                      checked={
                        geroy === "Совмещенная съёмка из нескольких вариантов"
                      }
                      onChange={handleChangeGeroy}
                    />
                    <label
                      className="text-[#fff]"
                      htmlFor="Совмещенная съёмка из нескольких вариантов"
                    >
                      Совмещенная съёмка из нескольких вариантов
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-[84px] sm:w-full w-[80%]">
                <h1 className="sm:text-[24px] lg:w-[100%] xl:text-[40px] xl:w-[850px] 3xl:text-[50px] text-[70px] leading-snug	 text-[#fff] font-[900] w-[950px]">
                  Спасибо за ответы, заполните форму обратной связи —
                </h1>
                <div
                  className="flex sm:mt-[28px] mt-[44px] 3xl:flex-wrap sm:flex-col items-center justify-between xl:w-full xl:flex-nowrap 3xl:w-[60%] w-[100%]
                 "
                >
                  <input
                    className="text-[#fff] sm:text-[18px] sm:mr-0 xl:mr-[18px] 3xl:text-[20px] bg-transparent border shadow-2xl w-full font-bold text-[28px] 3xl:mr-0 mr-[28px] px-[18px] py-[13px] "
                    type="text"
                    placeholder="Имя"
                    value={nameAvtor}
                    onChange={(e) => setNameAvtor(e.target.value)}
                  />
                  {polya && (
                    <span className="hidden sm:block text-[red] mt-[18px] block">
                      Заполните поля
                    </span>
                  )}
                  <input
                    className="text-[#fff] sm:text-[18px] sm:mr-0 3xl:text-[20px] xl:mr-[18px] bg-transparent border shadow-2xl w-full font-bold text-[28px] 3xl:mr-0 3xl:my-[18px] mr-[28px] px-[18px] py-[13px] "
                    type="text"
                    placeholder="Телефон"
                    value={phoneAvtor}
                    onChange={(e) => setPhoneAvtor(e.target.value)}
                  />

                  <button
                    onClick={sendMassage}
                    className="font-bold sm:text-[18px] text-[24px] 3xl:text-[20px] w-full  bg-[#e53012] py-[17px] px-[18px]"
                  >
                    {sendBnt ? "Отправлено" : "Отправить"}
                  </button>
                </div>
                {polya && (
                  <span className="sm:hidden text-[red] mt-[18px] block">
                    Заполните поля
                  </span>
                )}
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

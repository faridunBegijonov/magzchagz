import React, { useState } from "react";
import { ItemOurWorksComponent } from "./itemOurWorks.component";
import { ItemVideoType } from "../banner";
import img1 from "../../assets/project/cls.jpg";
import img2 from "../../assets/project/maxresdefault.jpg";
import img3 from "../../assets/project/kvas.jpg";
import img4 from "../../assets/project/safar.jpg";
import img5 from "../../assets/project/paykar.jpg";
import img6 from "../../assets/project/baby.jpg";
import img7 from "../../assets/project/tamaddon.png";
import img8 from "../../assets/project/navruzs23ultra.jpg";
import img9 from "../../assets/project/phoneZfold.jpg";
import img10 from "../../assets/project/nafisa.jpg";
import img11 from "../../assets/project/foodfest.jpg";
import img12 from "../../assets/project/image_2023-04-02_14-55-49.png";
import img13 from "../../assets/project/image_2023-04-02_14-56-10.png";
import img14 from "../../assets/project/image_2023-04-02_14-55-27 (1) (1) (1) (1) (1).png";
import img15 from "../../assets/project/pardifen.png";
import img16 from "../../assets/project/sad.jpg";
import img17 from "../../assets/project/siyomaRose.jpg";
import img18 from "../../assets/project/siyoma.jpg";
import img19 from "../../assets/project/siyoma2.jpg";
import img20 from "../../assets/project/marcoPoloImg.jpg";
import img21 from "../../assets/project/OLYMPICImg.jpg";
import img22 from "../../assets/project/ё1ё11ёё1.jpg";
import img23 from "../../assets/project/pri.jpg";
import img24 from "../../assets/project/alifTvc.jpg";
import img25 from "../../assets/project/kris.png";
import img26 from "../../assets/project/hair.png";
import img27 from "../../assets/project/bisot.jpg";
import img30 from "../../assets/project/siyomanon2.png";
import img31 from "../../assets/project/xavas.jpg";
import img32 from "../../assets/project/8mart.jpg";
import img33 from "../../assets/project/gr33.jpg";
import img34 from "../../assets/project/kok.jpg";
import img35 from "./image_2023-04-15_12-47-55.png";

export const ourWorksModel: ItemVideoType[] = [
  {
    img: img15,
    srcVideo: "https://www.youtube.com/embed/5Qifle_g3j8",
    title: "Lindavit - TVC",
    type: "Рекламный ролик",
  },
  {
    img: img8,
    srcVideo: "https://www.youtube.com/embed/mybhln-X6fA",
    title: "Navrooz - Shot on Galaxy S23 Ultra",
    type: "Рекламный ролик",
  },
  {
    img: img7,
    srcVideo: "https://www.youtube.com/embed/VijeT2_X5_s",
    title: "Tamaddoon - ZHIWJ",
    type: "Fashion Film",
  },
  {
    img: img4,
    srcVideo: "https://www.youtube.com/embed/Cfv3zaNcKi0",
    title: "Samsung - Safarmuhammad New Year",
    type: "Рекламный ролик",
  },

  {
    img: img1,
    srcVideo: "https://www.youtube.com/embed/9WT5_8OsVoc",
    title: "Pierre Cardin - Cosmetics",
    type: "Fashion Film",
  },
  {
    img: img2,
    srcVideo: "https://www.youtube.com/embed/Hs6wKpa6OGg",
    title: "Documentary - Health",
    type: "Документальный фильм",
  },

  {
    img: img9,
    srcVideo: "https://www.youtube.com/embed/jLExQac7vks",
    title: "Samsung ZFold4 - Nafisa Imranova",
    type: "Рекламный ролик",
  },
  {
    img: img30,
    srcVideo: "https://www.youtube.com/embed/ycAOWOz-dz0",
    title: "Siyoma Water - Feel the Nature",
    type: "Рекламный ролик",
  },
  {
    img: img14,
    srcVideo: "https://www.youtube.com/embed/a3O8rKqOpoY",
    title: "RakshRace - Highlights 2022",
    type: "Event",
  },
  {
    img: img35,
    srcVideo: "https://www.youtube.com/embed/rXVsCDrMzjc",
    title: "Pierre Cardin - Pallete",
    type: "Fashion Film",
  },
  {
    img: img3,
    srcVideo: "https://www.youtube.com/embed/kzcxVlmvMHQ",
    title: "Siyoma - KVASS TVC",
    type: "Рекламный ролик",
  },
  {
    img: img10,
    srcVideo: "https://www.youtube.com/embed/y9PE-u5485k",
    title: "ZHIWJ MEANS LOVE - TVC",
    type: "Рекламный ролик",
  },
  {
    img: img16,
    srcVideo: "https://www.youtube.com/embed/MahtcGbXpYc",
    title: "ZHIWJ - JEANS OUTFITS TVC",
    type: "Рекламный ролик",
  },
  {
    img: img19,
    srcVideo: "https://www.youtube.com/embed/0Jw7aRfiNGg",
    title: "Paykar - Ramazan",
    type: "Рекламный ролик",
  },
  {
    img: img6,
    srcVideo: "https://www.youtube.com/embed/aB7k0thettY",
    title: "Comfort Baby - TVC",
    type: "Рекламный ролик",
  },
  {
    img: img17,
    srcVideo: "https://www.youtube.com/embed/OdB6TsQBGxA",
    title: "Siyoma Rose drink water TVC",
    type: "Рекламный ролик",
  },

  {
    img: img20,
    srcVideo: "https://www.youtube.com/embed/75YMg8wIS4Q",
    title: "Marco Polo Energy drink by Siyoma TVC",
    type: "Рекламный ролик",
  },
  {
    img: img21,
    srcVideo: "https://www.youtube.com/embed/8OOxHqLHJs4",
    title: "IMDIFFERENT OLYMPIC 2021 OUTFITS TVC",
    type: "Рекламный ролик",
  },

  {
    img: img34,
    srcVideo: "https://www.youtube.com/embed/XYgXGg9zmWw",
    title: "Сухарики KOK",
    type: "Рекламный ролик",
  },

  {
    img: img32,
    srcVideo: "https://www.youtube.com/embed/fAqimZRCHrs",
    title: "МегаФон Таджикистан - Мама",
    type: "Рекламный ролик",
  },

  {
    img: img31,
    srcVideo: "https://www.youtube.com/embed/Gr0IEJEbWGY",
    title: "Семечки - Хавас",
    type: "Рекламный ролик",
  },

  {
    img: img11,
    srcVideo: "https://www.youtube.com/embed/gJOXZNurG2I",
    title: "FoodFest Dushanbe - Highlights 2017",
    type: "Event",
  },
  {
    img: img18,
    srcVideo: "https://www.youtube.com/embed/2Q8HLCu2kWw",
    title: "Siyoma Water TVC",
    type: "Рекламный ролик",
  },
  {
    img: img12,
    srcVideo: "https://www.youtube.com/embed/PT1Ma51wNRU",
    title: "Megafon Tajikistan - 20 ЛЕТ",
    type: "Рекламный ролик",
  },
  {
    img: img25,
    srcVideo: "https://www.youtube.com/embed/3fKKlPTYWzI",
    title: "Таджик Кристалл TVC",
    type: "Рекламный ролик",
  },
  {
    img: img26,
    srcVideo: "https://www.youtube.com/embed/4XsQS-ZOAEA",
    title: "Haier TVC",
    type: "Рекламный ролик",
  },

  {
    img: img13,
    srcVideo: "https://www.youtube.com/embed/sOhytVV4duI",
    title: "Интернет-магазин Gelos - TVC",
    type: "Рекламный ролик",
  },
  {
    img: img22,
    srcVideo: "https://www.youtube.com/embed/g43wpOiMuO0",
    title: "СПОРТКОМПЛЕКС X-FIT",
    type: "Рекламный ролик",
  },
  {
    img: img23,
    srcVideo: "https://www.youtube.com/embed/KgQncQgvu0k",
    title: "TFF SPORTWEAR TVC",
    type: "Рекламный ролик",
  },
  {
    img: img24,
    srcVideo: "https://www.youtube.com/embed/RFE_AEE17Ss",
    title: "Алиф Банк TVC",
    type: "Рекламный ролик",
  },

  {
    img: img27,
    srcVideo: "https://www.youtube.com/embed/mwVsyIzAy0I",
    title: 'Мебельная фабрика "Бисот" TVC',
    type: "Рекламный ролик",
  },
  {
    img: img33,
    srcVideo: "https://www.youtube.com/embed/0xLwB_ypn1Y",
    title: "Пример Инфографики | magzchagz",
    type: "Рекламный ролик",
  },
];

const ourWorksModel2: ItemVideoType[] = [
  {
    img: img1,
    srcVideo: "https://www.youtube.com/embed/rXVsCDrMzjc",
    title: "Pierre Cardin Cometics Teaser",
    type: "Fashion Film",
  },
  {
    img: img2,
    srcVideo: "https://www.youtube.com/embed/Hs6wKpa6OGg",
    title: "Documentary - Health",
    type: "Документальный фильм",
  },
  {
    img: img3,
    srcVideo: "https://www.youtube.com/embed/kzcxVlmvMHQ",
    title: "Siyoma - KVASS TVC",
    type: "Рекламный ролик",
  },
  {
    img: img4,
    srcVideo: "https://www.youtube.com/embed/Cfv3zaNcKi0",
    title: "Samsung - Safarmuhammad New Year",
    type: "Рекламный ролик",
  },
];

export const OurWorksComponent: React.FC = () => {
  const [mobile, setMobile] = useState(true);
  return (
    <>
      <div id="our-works" className="sm:hidden gridProject">
        {ourWorksModel.map((item: ItemVideoType) => (
          <ItemOurWorksComponent {...item} key={item.title} />
        ))}
      </div>
      <div className="sm:flex flex items-center justify-center flex-col hidden">
        {mobile
          ? ourWorksModel2.map((item: ItemVideoType) => (
              <ItemOurWorksComponent {...item} key={item.title} />
            ))
          : ourWorksModel.map((item: ItemVideoType) => (
              <ItemOurWorksComponent {...item} key={item.title} />
            ))}
        <button
          onClick={() => setMobile(!mobile)}
          className="mt-[8px] mx-[13px]  w-[95%] bg-[#e53012] py-[13px] px-[24px]"
        >
          {mobile ? "Больше проектов" : "Свернуть"}
        </button>
      </div>
    </>
  );
};

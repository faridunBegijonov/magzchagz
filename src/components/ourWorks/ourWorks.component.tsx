import React, { useState } from "react";
import { ItemOurWorksComponent } from "./itemOurWorks.component";
import { ItemVideoType } from "../banner";
import img1 from "../../assets/project/cls.jpg";
import img2 from "../../assets/project/maxresdefault.jpg";
import img3 from "../../assets/project/kvas.jpg";
import img4 from "../../assets/project/safar.jpg";
import img5 from "../../assets/project/paykar.jpg";
import img6 from "../../assets/project/baby.jpg";
import img7 from "../../assets/project/zwjh.jpg";
import img8 from "../../assets/project/navruzs23ultra.jpg";
import img9 from "../../assets/project/phoneZfold.jpg";
import img10 from "../../assets/project/nafisa.jpg";
import img11 from "../../assets/project/foodfest.jpg";
import img12 from "../../assets/project/image_2023-04-02_14-55-49.png";
import img13 from "../../assets/project/image_2023-04-02_14-56-10.png";
import img14 from "../../assets/project/image_2023-04-02_14-55-27 (1) (1) (1) (1) (1).png";

export const ourWorksModel: ItemVideoType[] = [
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
  {
    img: img5,
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
    img: img7,
    srcVideo: "https://www.youtube.com/embed/VijeT2_X5_s",
    title: "Tamaddoon - ZHIWJ",
    type: "Рекламный ролик",
  },
  {
    img: img8,
    srcVideo: "https://www.youtube.com/embed/mybhln-X6fA",
    title: "Navrooz - Shot on Galaxy S23 Ultra",
    type: "Рекламный ролик",
  },
  {
    img: img9,
    srcVideo: "https://www.youtube.com/embed/jLExQac7vks",
    title: "Samsung ZFold4 - Nafisa Imranova",
    type: "Рекламный ролик",
  },
  {
    img: img10,
    srcVideo: "https://www.youtube.com/embed/y9PE-u5485k",
    title: "ZHIWJ MEANS LOVE - TVC",
    type: "Рекламный ролик",
  },
  {
    img: img11,
    srcVideo: "https://www.youtube.com/embed/gJOXZNurG2I",
    title: "FoodFest Dushanbe - Highlights 2017",
    type: "Рекламный ролик",
  },
  {
    img: img12,
    srcVideo: "https://www.youtube.com/embed/PT1Ma51wNRU",
    title: "Megafon Tajikistan - 20 ЛЕТ",
    type: "Рекламный ролик",
  },
  {
    img: img13,
    srcVideo: "https://www.youtube.com/embed/sOhytVV4duI",
    title: "Интернет-магазин Gelos - TVC",
    type: "Рекламный ролик",
  },
  {
    img: img14,
    srcVideo: "https://www.youtube.com/embed/a3O8rKqOpoY",
    title: "RakshRace - Highlights 2022",
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

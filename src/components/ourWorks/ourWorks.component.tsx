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
import { ourWorksModel1 } from "./model/ourWorks1.model";
import { ourWorks3 } from "./model/ourWorks2.model";
import { OutWorksfullModel } from "./model/outWorksfull.model";

const ourWorksModel2: ItemVideoType[] = [
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
];

export const OurWorksComponent: React.FC = () => {
  const [mobile, setMobile] = useState(true);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <div id="our-works" className="sm:hidden gridProject">
        {ourWorksModel1.map((item: ItemVideoType) => (
          <ItemOurWorksComponent {...item} key={item.title} />
        ))}
      </div>
      {show2 ? (
        <div className="sm:hidden gridProject">
          {ourWorks3.map((item: ItemVideoType) => (
            <ItemOurWorksComponent {...item} key={item.title} />
          ))}
        </div>
      ) : (
        <button
          onClick={() => setShow2(true)}
          className="sm:hidden  mt-[8px] w-[450px] mx-auto
       flex items-center justify-center mt-[45px] bg-[#e53012] py-[13px] px-[24px]"
        >
          Еще проектов
        </button>
      )}
      <div className="sm:flex flex items-center justify-center flex-col hidden">
        {mobile
          ? ourWorksModel2.map((item: ItemVideoType) => (
              <ItemOurWorksComponent {...item} key={item.title} />
            ))
          : OutWorksfullModel.map((item: ItemVideoType) => (
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

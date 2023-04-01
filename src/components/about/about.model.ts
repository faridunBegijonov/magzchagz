import img1 from "../../assets/about/Vector.png";
import img2 from "../../assets/about/Vector (Stroke).png";
import img3 from "../../assets/about/Frame 12.png";
import img4 from "../../assets/about/Vector (Stroke) (1).png";
export const aboutModel: IAboutModel[] = [
  {
    img: img1,
    title: "ВЕСЬ ЦИКЛ ПРОИЗВОДСТВА ЛЮБОГО УРОВНЯ И ЗАДАЧ В ВАШИХ РУКАХ",
  },
  {
    img: img2,
    title: "ПРОФЕССИОНАЛЬНАЯ КОМАНДА ИМЕЮЩАЯ ОБРАЗОВАНИЕ В РОССИЙСКИХ ВУЗАХ",
  },
];

export const aboutModel2: IAboutModel[] = [
  {
    img: img3,
    title: "БОЛЬШОЙ ОПЫТ РАБОТЫ ДЛЯ БОЛЬШИХ ЭКРАНОВ 6K ANAMORPHIC",
  },
  {
    img: img4,
    title: "ПОБЕДИТЕЛИ В КОНКУРСЕ В РАМКАХ “НОЧЬ ПОЖИРАТЕЛЕЙ РЕКЛАМЫ” ДУШАНБЕ",
  },
];

export interface IAboutModel {
  img: string;
  title: string;
}

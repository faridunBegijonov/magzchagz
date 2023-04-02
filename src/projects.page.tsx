import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ItemVideoType } from "./components";
import { ItemOurWorksComponent } from "./components/ourWorks/itemOurWorks.component";
import { ourWorksModel } from "./components/ourWorks/ourWorks.component";
import { Link } from "react-router-dom";
import { ContactComponent } from "./components/contact/contact.component";

export const ProjectsPage: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-[18px] py-[25px]">
        <h1 className="text-[25px] font-bold">Все проекты</h1>
        <Link to="/">
          <ChevronRightIcon sx={{ fontSize: "35px" }} />
        </Link>
      </div>
      <div className="gridProject">
        {ourWorksModel.map((item: ItemVideoType) => (
          <ItemOurWorksComponent {...item} key={item.title} />
        ))}
      </div>
      <ContactComponent />
    </div>
  );
};

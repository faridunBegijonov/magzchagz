import React from "react";
import {
  BannerComponent,
  SidebarComponent,
  AboutComponent,
  ItemVideoYoutubeBannerComponent,
} from "./components";
import { itemVideoModel } from "./components/banner/model";

function App() {
  return (
    <>
      <SidebarComponent />
      <div className="pl-[250px] xl:pl-0 w-[100%]">
        <BannerComponent />
        <div className="sm:flex flex flex-col items-center justify-center hidden ">
          {itemVideoModel.map((item) => {
            return (
              <ItemVideoYoutubeBannerComponent key={item.srcVideo} {...item} />
            );
          })}
        </div>
        <AboutComponent />
      </div>
    </>
  );
}

export default App;

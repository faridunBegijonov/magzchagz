import React from "react";
import {
  BannerComponent,
  SidebarComponent,
  AboutComponent,
  ItemVideoYoutubeBannerComponent,
} from "./components";
import { itemVideoModel } from "./components/banner/model";
import { ContactComponent } from "./components/contact/contact.component";
import { OurWorksComponent } from "./components/ourWorks/ourWorks.component";

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
        <div className="sm:hidden flex items-center justify-between xl:flex hidden ">
          {itemVideoModel.map((item) => {
            return (
              <ItemVideoYoutubeBannerComponent key={item.srcVideo} {...item} />
            );
          })}
        </div>
        <OurWorksComponent />
        <AboutComponent />
        <ContactComponent />
      </div>
    </>
  );
}

export default App;

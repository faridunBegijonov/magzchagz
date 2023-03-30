import React from "react";
import { BannerComponent, SidebarComponent } from "./components";

function App() {
  return (
    <>
      <SidebarComponent />
      <div className="pl-[250px] xl:pl-0 w-[100%]">
        <BannerComponent />
      </div>
    </>
  );
}

export default App;

import React from "react";
//HoC
import HomeLayoutHoc from "./HOC/HomeHoc";
//Component
import Temp from "./Components/Temp";

function App() {
  return (

    <>
      <div >
      <HomeLayoutHoc path="/" exact component={Temp}/>
      </div>
    </>
  );
}

export default App;

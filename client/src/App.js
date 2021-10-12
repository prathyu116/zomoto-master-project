import React from "react";
//HoC
import HomeLayoutHoc from "./HOC/HomeHoc";
//Component
import Temp from "./Components/Temp";
import Master from "./Components/Master";

function App() {
  return (

    <>
      <div >
      <HomeLayoutHoc path="/" exact component={Temp}/>
      <HomeLayoutHoc path="/:type" exact component={Master}/>
      </div>
    </>
  );
}

export default App;

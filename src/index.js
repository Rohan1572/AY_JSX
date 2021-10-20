import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Cuisines</h1>
    {/* <ul>
      <li>Pasta</li>
      <li>Noodles</li>
      <li>Rajma Chawal</li>
    </ul> */}
    <div>
      <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/arrabiata-pasta-1.jpg"></img>
      <img src="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg"></img>
      <img src="https://s9c2c8i7.rocketcdn.me/wp-content/uploads/2017/08/rajma-chawal-1.jpg"></img>
    </div>
  </div>,
  document.getElementById("root")
);

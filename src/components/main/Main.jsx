import React from "react";
import First from "../hero/First";
import Second from "../hero/Second";
import Third from "../hero/Third"

function Main() {
  return (
    <div className="main">
      <div className="container">
        <First />
        <Second />
        <Third/>
      </div>
    </div>
  );
}

export default Main;

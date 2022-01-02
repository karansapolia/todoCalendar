import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./Calendar";

import "../../styles/tailwind-utils.css";

const Homepage = () => {
  return (
    <div className="text-3xl text-blue-600 font-extrabold">
      <Calendar />
    </div>
  );
};

ReactDOM.render(<Homepage />, document.getElementById("app"));

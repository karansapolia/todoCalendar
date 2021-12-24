import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./Calendar";

const Homepage = () => {
  return (
    <div className="text-3xl text-blue-600 font-extrabold">
      Hello
      <Calendar />
    </div>
  );
};

ReactDOM.render(<Homepage />, document.getElementById("app"));

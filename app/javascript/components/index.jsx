import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Calendar, Badge } from "antd";

const Homepage = () => {
  return (
    <Calendar />
  )
}

ReactDOM.render(<Homepage />, document.getElementById("app"));

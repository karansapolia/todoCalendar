import React, { useState } from "react";
import { Calendar as Cal } from "antd";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(
    currentDate.toLocaleString("default", { month: "long" })
  );

  setInterval(() => {
    setCurrentDate(new Date());
  }, 1000);

  return (
    <div className="m-4 border-rounded border-2 border-gray rounded-md p-2 px-4">
      <Cal />
    </div>
  );
};

export default Calendar;

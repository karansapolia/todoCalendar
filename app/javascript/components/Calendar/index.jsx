import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(
    currentDate.toLocaleString("default", { month: "long" })
  );

  setInterval(() => {
    setCurrentDate(new Date());
  }, 1000);

  return (
    <div className="m-4 border-rounded border-2 border-black rounded-md">
      <p>This will be the calendar</p>
      <p>{`Time:  ${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`}</p>
      <p>{`${currentDate.toLocaleString("default", {
        weekday: "long",
      })} ${currentDate.getDate()} ${currentMonth}`}</p>
    </div>
  );
};

export default Calendar;

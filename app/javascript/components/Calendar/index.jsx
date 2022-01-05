import React, { useState } from "react";
import { Calendar as Cal, Badge } from "antd";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(
    currentDate.toLocaleString("default", { month: "long" })
  );

  setInterval(() => {
    setCurrentDate(new Date());
  }, 1000);

  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "Missed Tennis training" },
          { type: "success", content: "Completed 1-1 with Team members" },
          { type: "warning", content: "Missed Tennis training" },
          { type: "success", content: "Completed 1-1 with Team members" },
          { type: "warning", content: "Missed Tennis training" },
          { type: "success", content: "Completed 1-1 with Team members" },
          { type: "warning", content: "Missed Tennis training" },
          { type: "success", content: "Completed 1-1 with Team members" },
          { type: "warning", content: "Missed Tennis training" },
          { type: "success", content: "Completed 1-1 with Team members" },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="m-4 border-rounded border-2 border-gray rounded-md p-2 px-4">
      <Cal dateCellRender={dateCellRender} />
    </div>
  );
};

export default Calendar;

import { React, useState, useEffect } from "react";
import dayjs from "dayjs";
import "./Calendar.css";
import ExerciseTracker from "./ExerciseTracker";

function Calendar({ token }) {
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [month, setMonth] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());

  const [days, setDays] = useState([]);
  const [clickedDate, setClickedDate] = useState(dayjs());
  const [exeDates, setExeDates] = useState([]);

  useEffect(() => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
    let temp = [];

    for (let i = 0; i < firstDateOfMonth.day(); i++) {
      let tempDay = firstDateOfMonth.day(i);
      tempDay["isActive"] = false;
      temp.push(tempDay);
    }

    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
      let tempDay = firstDateOfMonth.date(i);
      tempDay["isActive"] = true;
      temp.push(tempDay);
    }

    for (let i = lastDateOfMonth.day() + 1; i < 7; i++) {
      let tempDay = lastDateOfMonth.day(i);
      tempDay["isActive"] = false;
      temp.push(tempDay);
    }

    setDays(temp);
  }, [month, year]);

  function incMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  function decMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  return (
    <div className="Calendar--component">
      <div className="calendar--container">
        <div className="calendar--top">
          <div className="month">
            {months[month]}, {year}
          </div>
          <div className="calendar--buttons">
            <button onClick={decMonth}>&lt;</button>
            <button onClick={incMonth}>&gt;</button>
          </div>
        </div>

        <div className="calendar--dates">
          {days.map((day, index) => (
            <button
              key={index}
              className={`${
                day.isSame(clickedDate, "day") ? "selected--date" : ""
              } date-btn ${
                exeDates.includes(day.format("YYYY-MM-DD"))
                  ? "highlighted-btn "
                  : ""
              }`}
              onClick={() => {
                setClickedDate(day);
              }}
              disabled={!day.isActive}
            >
              {day.date()}
            </button>
          ))}
        </div>
      </div>
      <ExerciseTracker
        clickedDate={clickedDate}
        token={token}
        setExeDates={setExeDates}
      />
    </div>
  );
}

export default Calendar;

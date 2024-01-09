import { useState, useEffect } from "react";

export default function WeatherCard({ day, icon, temp }) {
  const [dayName, setDayName] = useState("Mon");

  useEffect(() => {
    function changeDayName() {
      const formattedDay = new Date(day * 1000);
      const newDayName = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
      }).format(formattedDay);

      return newDayName;
    }

    setDayName(changeDayName());
  }, [day]);

  return (
    <article className="h-full flex-[1_100%] py-2 bg-transparent flex flex-col items-center">
      <h1 className="text-white text-xl font-serif font-thin text-center">
        {dayName}
      </h1>
      <img src={icon} alt="" className="w-16 h-16" />
      <h1 className="text-white text-lg font-serif font-thin text-center">
        {temp}&#8728;
      </h1>
    </article>
  );
}

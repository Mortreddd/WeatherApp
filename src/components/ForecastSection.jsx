import WeatherCard from "./WeatherCard";

export default function ForecastSection({ forecastday }) {
  return (
    <>
      <section className="w-full my-3 inline-flex rounded-xl h-fit p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 bg-gray-400 border-gray-100">
        {forecastday.map((date) => (
          <WeatherCard
            key={date}
            day={date.date_epoch}
            icon={date.day.condition.icon}
            temp={date.day.mintemp_c}
          />
        ))}
      </section>
    </>
  );
}

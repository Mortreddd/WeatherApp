import { fetchForecastByLocation } from "./hooks/Forecast";
import WeatherHeading from "./components/WeatherHeading";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import ForecastSection from "./components/ForecastSection";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const data = await fetchForecastByLocation();
      setResult(data);
    }

    fetchData();
  }, []);
  if (!result) {
    return <Loading />;
  }
  const { current, forecast, location } = result;
  return (
    <>
      <main className="w-full h-screen transition-all duration-300 ease-in-out px-5 gap-3 md:px-24 py-3 md:py-10 md:gap-6  bg-gradient-to-b from-teal-900 via-40% via-teal-700 to-teal-500">
        <WeatherHeading current={current} location={location} />
        <ForecastSection forecastday={forecast.forecastday} />

        <Footer />
      </main>
    </>
  );
}

export default App;

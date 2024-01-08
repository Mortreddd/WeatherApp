import { useState } from "react";
import { fetchForecastByLocation } from "./hooks/Forecast";

function App() {
  const [city, setCity] = useState("Pampanga");

  const handleSearch = async () => {
    try {
      const forecastData = await fetchForecastByLocation(city);
      // Handle the fetched data here, for example, log it to the console
      console.log("Forecast data:", forecastData);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };

  return (
    <>
      <main className="flex flex-col w-fit">
        <h1 className="text-center text-3xl font-sans text-black">
          Weather App
        </h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name=""
          id=""
          className="rounded-lg text-2xl"
        />
        <button
          onClick={handleSearch} // Call handleSearch function when button clicked
          className="bg-green-600 text-white font-sans text-lg py-2 px-5 hover:bg-green-700"
        >
          Search
        </button>
      </main>
    </>
  );
}

export default App;

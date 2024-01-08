const API_KEY = "8fcb8045472845869e810120240701";
const BASE_URL = `http://api.weatherapi.com/v1/`;

export async function fetchForecastByLocation(location) {
  const resourceJson = "forecast.json";
  const days = 7;
  const url = `${BASE_URL}${resourceJson}?key=${API_KEY}&q=${location}&days=${days}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

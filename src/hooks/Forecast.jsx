// const API_KEY = import.meta.env.VITE_API_KEY;
// const BASE_URL = import.meta.env.VITE_API_URL;

const API_KEY = "8fcb8045472845869e810120240701";
const BASE_URL = "https://api.weatherapi.com/v1/";
export async function fetchForecastByLocation() {
  const location = "Pampanga";
  const resourceJson = "forecast.json";
  const days = 7;
  const url = `${BASE_URL}${resourceJson}?key=${API_KEY}&q=${location}&days=${days}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      alert("Unable to load resource");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
export async function fetchForecastByLocation() {
  const location = "Philippines";
  const resourceJson = "forecast.json";
  const days = 7;
  console.log(location);
  const url = `${API_URL}${resourceJson}?key=${API_KEY}&q=${location}&days=${days}`;

  try {
    const response = await fetch(url, {
      method: "GET",
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

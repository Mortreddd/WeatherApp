const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
export async function fetchForecastByLocation(location) {
  const latitude = location.coords.latitude;
  const longtitude = location.coords.longtitude;
  const decimalDegree = `${latitude},${longtitude}}`;
  const resourceJson = "forecast.json";
  const days = 7;
  const url = `${API_URL}${resourceJson}?key=${API_KEY}&q=${decimalDegree}&days=${days}`;

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

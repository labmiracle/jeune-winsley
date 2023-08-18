const https = require("https"); 
const URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson";

https.get(URL, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    try {
      const earthquakeData = JSON.parse(data);
      displayEarthquakeInfo(earthquakeData);
    } catch (error) {
      console.error("Error parsing JSON data:", error);
    }
  });
}).on("error", (error) => {
  console.error("Error fetching earthquake data:", error);
});

function displayEarthquakeInfo(data) {
  console.log("Earthquakes in the last hour:");
  console.log("================================");

  data.features.forEach((feature, index) => {
    const properties = feature.properties;
    const coordinates = feature.geometry.coordinates;

    console.log(`Event ${index + 1}:`);
    console.log(`Magnitude: ${properties.mag}`);
    console.log(`Location: ${properties.place}`);
    console.log(`Time: ${new Date(properties.time).toLocaleString()}`);
    console.log(`Coordinates: Longitude ${coordinates[0]}, Latitude ${coordinates[1]}`);
    console.log(`More info: ${properties.url}`);
    console.log("--------------------------------");
  });
}

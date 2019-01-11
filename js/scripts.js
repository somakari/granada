// Set the map variable
const myMap = L.map('map');

// Load the basemap
const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Add basemap to map id
myBasemap.addTo(myMap);

// Set view of the map
myMap.setView([41.939948, -87.650673], 12);

// Make an XMLHttpRequest to the JSON data
const request = new XMLHttpRequest();

request.open('GET', 'map.json', true);
request.onload = function() {
    // Begin accessing JSON data here
    const data = JSON.parse(this.response);

    // Print cafe markers
    const cafes = data.cafes.map(cafe => {
    L.marker([cafe.lat, cafe.long]).bindPopup(`
        <h2>${cafe.name}</h2>
        <p><b>Neighborhood:</b> ${cafe.neighborhood}</p>
        <p><b>Ambiance:</b> ${cafe.ambiance}</p>
        <p><b>Flavor:</b> ${cafe.flavor}</p>
        <p><b>Comments:</b> ${cafe.comments}</p>
    `).openPopup().addTo(myMap);
    });
}

request.send();

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
myMap.setView([37.176539, -3.599309], 15);

// Adding location markers with JSON
const elMeson = L.marker([37.176266, -3.600165]).addTo(myMap);
const wormhole = L.marker([37.177731, -3.601326]).addTo(myMap);
const ipsento = L.marker([37.172966, -3.602518]).addTo(myMap);

const elMeson = L.marker([37.176266, -3.600165]).bindPopup(`
    <h2>El Meson</h2>
    <p><b>Neighborhood:</b> Rogers Park</p>
    <p><b>Ambiance:</b> Great!</p>
    <p><b>Flavor:</b> Great!</p>
    <p><b>Comments:</b> Great!</p>
`).openPopup().addTo(myMap);

const wormhole = L.marker([37.177731, -3.601326]).bindPopup(`
    <h2>Wormhole</h2>
    <p><b>Neighborhood:</b> Wicker Park</p>
    <p><b>Ambiance:</b> Great!</p>
    <p><b>Flavor:</b> Great!</p>
    <p><b>Comments:</b> Great!</p>
`).openPopup().addTo(myMap);

const ipsento = L.marker([37.172966, -3.602518]).bindPopup(`
    <h2>Wormhole</h2>
    <p><b>Neighborhood:</b> Wicker Park</p>
    <p><b>Ambiance:</b> Great!</p>
    <p><b>Flavor:</b> Great!</p>
    <p><b>Comments:</b> Great!</p>
`).openPopup().addTo(myMap);

// And so on...

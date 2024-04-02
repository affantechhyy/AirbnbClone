// const mapboxgl = require('mapbox-gl');
// Ensure mapToken is properly retrieved from the environment variable
mapboxgl.accessToken = mapToken;

// Make sure to use the correct latitude and longitude values for the center
const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v12',
  center: listing.geometry.coordinates, // longitude, latitude
  zoom: 9,
});

console.log(listing)
const marker = new mapboxgl.Marker({color: "red"})
  .setLngLat(listing.geometry.coordinates) // Listing coordinates
  .setPopup(
    new mapboxgl.Popup({offset: 25}).setHTML(
      `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
      ))
  .addTo(map);

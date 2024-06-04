mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// console.log(coordinates);

const marker1 = new mapboxgl.Marker({color:"red"})
.setLngLat(coordinates)
.addTo(map)


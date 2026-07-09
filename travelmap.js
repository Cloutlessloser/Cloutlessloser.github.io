// 46.8139° N latitude and -71.2080° W longitude
var coordinates = [46.8139, -71.2080];
var place1 = [46.9167, -70.9000];
var place2 = [46.887508, -71.147911];
var place3 = [46.811943, -71.205002];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from Quebec City!</p>").addTo(map);
var marker1 = L.circle(place1,{color: "black", fillColor: "#09c902", radius: 100}).bindPopup("<p>Hello, from Centre Municipal St Jean Ile D'Orléans!</p>").addTo(map);
var marker2 = L.circle(place2,{color: "black", fillColor: "#09c902", radius: 100}).bindPopup("<p>Hello, from Montmorency Falls!</p>").addTo(map);
var marker3 = L.circle(place3,{color: "black", fillColor: "#09c902", radius: 100}).bindPopup("<p>Hello, from Fairmont Le Château Frontenac!</p>").addTo(map);

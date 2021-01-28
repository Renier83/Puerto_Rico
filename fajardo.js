// Change to Farjardo info
var farmap = L.map('mapid').setView([18.330379, -65.660606], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmVuaWVycHIiLCJhIjoiY2trZW9kdDhsMDFlNzJ1cGJmNWx3MHR0aSJ9.uSCpxR81uvourow2XGgpDA'
}).addTo(farmap);
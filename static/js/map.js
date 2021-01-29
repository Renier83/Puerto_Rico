var mymap = L.map('mapid').setView([18.220833, -66.590149], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmVuaWVycHIiLCJhIjoiY2trZW9kdDhsMDFlNzJ1cGJmNWx3MHR0aSJ9.uSCpxR81uvourow2XGgpDA'
}).addTo(mymap);

d3.json('/api/restaurants').then(data => {
    console.log(data);

    data.forEach(d => {

        var coords = [d['lat'], d['lng']];
        var name = d['name'];
        var address = d['address'];


        
        marker = L.marker(coords, {'title': name});
        marker.bindPopup(`<h4>${name}</h4><hr/><b>${address}</b>`)
        marker.addTo(mymap);

    });
});
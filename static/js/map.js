<<<<<<< HEAD
console.log("info")

var mapCountainer = document.querySelector('[data-map-container]');
console.log(mapCountainer)
var mapid = mapCountainer.id

var mymap = L.map(mapid).setView([18.220833, -66.590149], 10);
=======
var mymap = L.map('mapid').setView([18.220833, -66.590149], 10);
>>>>>>> d53b65b75fc0859a881e68ef20ce00dd42c90014
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmVuaWVycHIiLCJhIjoiY2trZW9kdDhsMDFlNzJ1cGJmNWx3MHR0aSJ9.uSCpxR81uvourow2XGgpDA'
}).addTo(mymap);

// Change to San Juan information
//18.466333, -66.105721]
// var rinmap = L.map('rnid').setView([18.340111, -67.249947], 13);
// var ponceCoords = [18.012630, -66.626038];
// var farmap = L.map('frid').setView([18.330379, -65.660606], 13);
// var arecibomap = L.map('arid').setView([18.470440, -66.722282], 13);

// san_juan = [18.466333, -66.105721]
// ponce = [18.01108, -66.61406]
// rincon = [18.340216, -67.250015]
// fajardo = [18.325787, -65.652382]
// arecibo = [18.47245, -66.71573]
// humacao = [18.148750, -65.819099]
// mayaguez = [18.201349, -67.139488]

// cities = [san_juan, ponce, rincon, fajardo, arecibo, humacao, mayaguez]

// cities.forEach(d => {

//     console.log(d);

//     //var coords = [d[0], d['lng']];
//     //var name = d['name'];
//     //var address = d['address'];
    
//     marker = L.marker(d).addTo(mymap);
//     //marker.bindPopup(`<h4>${name}</h4><hr/><b>${address}</b>`)
//     //marker.addTo(mymap);
// });


    // ALL MARKERS

d3.json('/api/restaurants').then(data => {
    console.log(data);

    data.forEach(d => {

        var coords = [d['lat'], d['lng']];
        var name = d['name'];
        var address = d['address'];
<<<<<<< HEAD



        marker = L.marker(coords, { 'title': name });
=======
        
        marker = L.marker(coords, {'title': name});
>>>>>>> d53b65b75fc0859a881e68ef20ce00dd42c90014
        marker.bindPopup(`<h4>${name}</h4><hr/><b>${address}</b>`)
        marker.addTo(mymap);

        
        
        //mymap.setZoom(13);
        //mymap.setView(new L.LatLng(ponceCoords[0], ponceCoords[1]), 13)
        
        
        

    });
});


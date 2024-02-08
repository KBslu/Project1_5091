const map = L.map('map').setView([38.6270, -90.1994], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

function onEachWard(feature, layer) {
  
  layer.bindPopup('One of the STL wards in Saint Louis');
}

var wardsLayer = L.esri.featureLayer({
  url: 'https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/wards_stl/FeatureServer/0',
  onEachFeature: onEachWard
}).addTo(map);

var roadsLayer = L.esri.featureLayer({
  url: 'https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/roads_stl/FeatureServer/0'
}).addTo(map);


var baseMaps = {
  "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};

var overlayMaps = {
  "Wards": wardsLayer,
  "Roads": roadsLayer
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

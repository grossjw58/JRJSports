mapboxgl.accessToken = 'pk.eyJ1IjoiZ3Jvc3MxanciLCJhIjoiY2pkeXlhYjNxNGZjbTJ3cXB2ODg1OGJiYiJ9.KJO8FL7aEC-9SKfqGUdbjQ';
var map1 = new mapboxgl.Map({
	container: 'mainMap',
	style: 'mapbox://styles/mapbox/dark-v9',
	zoom: 4,
	center: [-98.5795,38],
});
var teams;
var zoom=parseFloat(map1.getZoom()*5).toFixed(0)+'px';
$.getJSON("Data/Nfl_Teams.json",function(json){
	teams=json.features;
	$.each(json.features,function(i,feature){
		var el = document.createElement('div');
		el.style.backgroundImage = "url("+feature.properties.IMAGE+")";
		el.className = "teamMarker";
		el.style.backgroundSize= "contain";
		el.style.width=zoom;
		el.style.height=zoom;
		el.style.backgroundRepeat="no-repeat";
		el.style.cursor="pointer";
		// make a marker for each feature and add to the map
		new mapboxgl.Marker(el)
		.setLngLat(feature.geometry.coordinates)
		.addTo(map1);
	});
});
map1.on('zoom',function(){
	document.getElementById("zoom").innerHTML="Zoom"+parseFloat(map1.getZoom()).toFixed(1); 
	zoom=parseFloat(map1.getZoom()*5).toFixed(0)+'px';
	console.log(zoom);
	var markers = document.getElementsByClassName('teamMarker');
	console.log(markers.length);
	console.log(zoom);
	for(i=0; i<markers.length; i++) {
		markers[i].style.width=zoom;
		markers[i].style.height=zoom;
	}
});
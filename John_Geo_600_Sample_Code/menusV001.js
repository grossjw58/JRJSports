//functions for handling state toggles
var state = null;
var species = null;
function StateSubset(_map,_value){
	if(_value =="all"){
		ResetAll(_map);
	}else{
		SubsetAll(_map,"State",_value,"==");
	}
	switch(_value){
		case "alabama":
			_map.setCenter([-86.9023,32.3182]);
			_map.setZoom(6.2);
			break;
		case "arizona":
			_map.setCenter([-111.0937,34.0489]);
			_map.setZoom(6);
			break;
		case "arkansas":
			_map.setCenter([-91.8318,35.2010]);
			_map.setZoom(6.7);
			break;
		case "california":
			_map.setCenter([-119.4179,36.7783]);
			_map.setZoom(5);
			break;
		case "colorado":
			_map.setCenter([-105.669,39.125]);
			_map.setZoom(6.2);
			break;
		case "connecticut":
			_map.setCenter([-73.0877,41.6032]);
			_map.setZoom(7.8);
			break;
		case "delaware":
			_map.setCenter([-75.491,38.939]);
			_map.setZoom(7.8);
			break;
		case "florida":
			_map.setCenter([-81.5158,27.6648]);
			_map.setZoom(6);
			break;
		case "georgia":
			_map.setCenter([-82.452,32.920]);
			_map.setZoom(6.4);
			break;
		case "idaho":
			_map.setCenter([-114.895,45.429]);
			_map.setZoom(5.5);
			break;
		case "illinois":
			_map.setCenter([-89.043,40.190]);
			_map.setZoom(5.9);
			break;
		case "indiana":
			_map.setCenter([-86.281,40.150]);
			_map.setZoom(6.4);
			break;
		case "iowa":
			_map.setCenter([-93.372,42.125]);
			_map.setZoom(6.5);
			break;
		case "kansas":
			_map.setCenter([-98.4842,39.0119]);
			_map.setZoom(6.4);
			break;
		case "kentucky":
			_map.setCenter([-84.2700,37.8393]);
			_map.setZoom(6.4);
			break;
		case "louisiana":
			_map.setCenter([-91.9623,30.9843]);
			_map.setZoom(6.4);
			break;
		case "maine":
			_map.setCenter([-69.4455,45.2538]);
			_map.setZoom(6.2);
			break;
		case "maryland":
			_map.setCenter([-76.6413,39.0458]);
			_map.setZoom(6.8);
			break;
		case "massachusetts":
			_map.setCenter([-71.3824,42.4072]);
			_map.setZoom(7.3);
			break;
		case "michigan":
			_map.setCenter([-84.929,44.270]);
			_map.setZoom(5.9);
			break;
		case "minnesota":
			_map.setCenter([-94.6859,46.7296]);
			_map.setZoom(5.7);
			break;
		case "mississippi":
			_map.setCenter([-89.3985,32.3547]);
			_map.setZoom(5.9);
			break;
		case "missouri":
			_map.setCenter([-92.659,38.538]);
			_map.setZoom(6.2);
			break;
		case "montana":
			_map.setCenter([-110.3626,46.8797]);
			_map.setZoom(5.7);
			break;
		case "nebraska":
			_map.setCenter([-99.9018,41.4925]);
			_map.setZoom(6.1);
			break;
		case "nevada":
			_map.setCenter([-116.4194,38.8026]);
			_map.setZoom(5.7);
			break;
		case "new hampshire":
			_map.setCenter([-71.359,43.984]);
			_map.setZoom(7);
			break;
		case "new jersey":
			_map.setCenter([-74.4057,40.0583]);
			_map.setZoom(7);
			break;
		case "new mexico":
			_map.setCenter([-106.267,34.594]);
			_map.setZoom(6.1);
			break;
		case "new york":
			_map.setCenter([-75.378,42.882]);
			_map.setZoom(6.2);
			break;
		case "north carolina":
			_map.setCenter([-79.0193,35.7596]);
			_map.setZoom(6.2);
			break;
		case "ohio":
			_map.setCenter([-82.9071,40.4173]);
			_map.setZoom(6.4);
			break;
		case "oklahoma":
			_map.setCenter([-97.948,35.892]);
			_map.setZoom(6.1);
			break;
		case "oregon":
			_map.setCenter([-120.5542,43.8041]);
			_map.setZoom(6.1);
			break;
		case "pennsylvania":
			_map.setCenter([-86.281,40.150]);
			_map.setZoom(6.6);
			break;
		case "south carolina":
			_map.setCenter([-81.1637,33.8361]);
			_map.setZoom(6.4);
			break;
		case "south dakota":
			_map.setCenter([-100.361,44.432]);
			_map.setZoom(6.4);
			break;
		case "tennessee":
			_map.setCenter([-86.5804,35.5175]);
			_map.setZoom(6.1);
			break;
		case "texas":
			_map.setCenter([-99.9018,31.9686]);
			_map.setZoom(5.2);
			break;
		case "utah":
			_map.setCenter([-111.723,39.280]);
			_map.setZoom(6.1);
			break;
		case "vermont":
			_map.setCenter([-72.5778,44.5588]);
			_map.setZoom(6.7);
			break;
		case "virginia":
		_map.setCenter([-79.419,37.427]);
			_map.setZoom(6.4);
			break;
		case "washington":
			_map.setCenter([-120.7401,47.7511]);
			_map.setZoom(6.1);
			break;
		case "washington, d.c.":
			_map.setCenter([-77.0369,38.9072]);
			_map.setZoom(10.3);
			break;
		case "west virginia":
			_map.setCenter([-80.582,38.765]);
			_map.setZoom(6.7);
			break;
		case "wisconsin":
			_map.setCenter([-89.779,44.603]);
			_map.setZoom(6.2);
			break;
		case "wyoming":
			_map.setCenter([-107.2903,43.0760]);
			_map.setZoom(6.3);
			break;
		default:
			_map.setCenter([-98.5795,35.8283]);
			_map.setZoom(3.5);
			state=null
	}
}
//deals with the legend

function StateButtonOnClick() {
	document.getElementById("myDropdown").classList.toggle("show");
}
function SpeciesButtonOnClick() {
	document.getElementById("navbar").classList.toggle("show");
}

//subset function for dealing with feature filters
function Subset(_map,_layer,_catagory,_subset,_type="=="){
	if(_catagory == "Species" && state==null){//set the filter to the state and ignore the species//_catagory == "Species" && state==null
		console.log("We are in the species only subset");
		_map.setFilter(_layer,[_type,_catagory,_subset]);
		species=_subset;
	}else if(_catagory == "State" && species==null){//set the filter to species and ignore the state
		console.log("We are in the state only subset");
		_map.setFilter(_layer,[_type,_catagory,_subset]);
		state=_subset;
	}else if(_catagory == "Species" && state!=null){//set the filter to species maintain current state
		var new_Filter = ["all",[_type,_catagory,_subset],["==","State",state]];
		_map.setFilter(_layer,new_Filter);
		species=_subset;
	}else if(_catagory == "State" && species!=null){//set the filter to state maintain current species
		var new_Filter = ["all",[_type,_catagory,_subset],["==","Species",species]];
		_map.setFilter(_layer,new_Filter);
		state=_subset;
	}
};
function SubsetAll(_map,_catagory,_subset,_type){
	Subset(_map,'amphibians-heat',_catagory,_subset,_type);
	Subset(_map,'amphibians-point',_catagory,_subset,_type);
}

function ResetAll(_map){
	Reset(_map,'amphibians-heat');
	Reset(_map,'amphibians-point');
}
//reset function for dealing with feature filters
function Reset(_map,_layer){
	_map.setFilter(_layer, null);
};
		
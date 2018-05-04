// Pull Screendoor project id and API key from admin config
var endpoint = 'https://screendoor.dobt.co/api/projects/' + iip_map_params.screendoor_project + '/responses?v=0&api_key=' + iip_map_params.screendoor_api_key;

var cityField = iip_map_params.screendoor_city;
var regionField = iip_map_params.screendoor_region;
var countryField = iip_map_params.screendoor_country;

var googleKey = iip_map_params.google_api_key;

// Make request to Screendoor API
var request = new XMLHttpRequest();
request.open('GET', endpoint);
request.responseType = 'json';
request.send();

request.onload = function() {
  var data = request.response;

  getAddressString(data);

}

// Pull out address info and write to a string
function getAddressString(jsonObj) {
  jsonObj.forEach(function(item) {
    address = item.responses[cityField] + ', ' + item.responses[countryField];

    geocodeAddress(address);
  });
}

// Geocode event locations to latitude/longitude
function geocodeAddress(address) {
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == 'OK') {
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();

      var latLng = { lat: lat, lng: lng}

    }
  });
}
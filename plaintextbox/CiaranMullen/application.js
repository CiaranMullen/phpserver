/* global fetch, google */

// ###################################################################
// # Call loadMap once the document has finished loading
// ###################################################################

document.addEventListener('DOMContentLoaded', () => {
  loadMap();
});

// ###################################################################
// # Function to be executed when the documented has been loaded
// ###################################################################

function loadMap() {

  // Config options for the new map
  const mapOptions = {
    center : new google.maps.LatLng(35.683333, 139.766667),
    zoom   : 6
  };

  // Initialize a new map object
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Retrieve markers array from JSON file
  fetch('../startbootstrap-bare-gh-pages/map.json')
    .then(res  => res.json())
    .then(json => json.forEach(mapMarker => {

      // The JSON object is now stored in 'json' param
      image ='../CiaranMullen/image/rugbyImage.svg';

      new google.maps.Marker({
        map      : map,
        position : new google.maps.LatLng(mapMarker.location[0], mapMarker.location[1]),
        title    : mapMarker.name,
	icon     : image
      });

    }));
}

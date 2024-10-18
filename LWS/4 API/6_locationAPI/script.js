const display = document.getElementById("display");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPostion);
  } else {
    display.innerHTML("Geolocation is not available in your browser");
  }
}

function showPostion(position) {
  display.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "</br>Longitude: " +
    position.coords.longitude;
}

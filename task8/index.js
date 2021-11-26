// Initialize and add the map
function initMap() {
  // The location of office
  const office = { lat: 55.76466830131906, lng: 37.568354477339014 };
  // The map, centered at office
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: office,
  });
  // The marker, positioned at office
  const marker = new google.maps.Marker({
    position: office,
    map: map,
  });
}
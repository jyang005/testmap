
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex=0;

function initMap() {
  
  //Map otion
    var options = {
    center: { lat: 36.886035, lng: -76.3033870 },
    zoom: 17
  }
  //New Map
    map = new google.maps.Map(document.getElementById("map"),options)

  //Marker
 /* const marker1 = new google.maps.Marker({
    position: {lat: 36.883653798264305, lng: -76.30784697770437},
    label: labels[labelIndex++ % labels.length],
    map:map
  });
  const marker2 = new google.maps.Marker({
    position: {lat: 36.88368168820865, lng: -76.30642272473119},
    label: labels[labelIndex++ % labels.length],
    map:map
  });
  const marker3 = new google.maps.Marker({
    position: {lat: 36.88791796184182, lng: -76.30552048510066},
    label: labels[labelIndex++ % labels.length],
    map:map
  });

  //InfoWindow

  const detailWindow = new google.maps.InfoWindow({
    content: '<h2>43rd and Elkhorn Garage<h2>'
  });

  marker1.addListener("mouseover", () =>{
    detailWindow.open(map, marker1);
  })
*/
function addMarker(property){
    const marker = new google.maps.Marker({
        position: property.location,
        label: labels[labelIndex++ % labels.length],
        map:map,
        title: "Click to zoom",
       
});
map.addListener("center_changed", () =>{
    window.setTimeout(() =>{
        map.panTo(marker.getPosition());

    },3000);
});
marker.addListener("click", () => {
    map.setZoom(35);
    map.setCenter(marker.getPosition());
})
  
}

addMarker({location: {lat: 36.883653798264305, lng: -76.30784697770437}});
addMarker({location: {lat: 36.88368168820865, lng: -76.30642272473119}});
addMarker({location: {lat: 36.88791796184182, lng: -76.30552048510066}});

}



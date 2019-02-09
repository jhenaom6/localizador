//js

$("#botonDibujar").click(function(e){
    initMap(valores);
});


function initMap(valores) {
    console.log("funcionando");
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: 0, lng: -180},
      mapTypeId: 'terrain',
      gestureHandling: 'cooperative'
    });

    var flightPath = new google.maps.Polyline({
      path: valores,
      geodesic: true,
      strokeColor: '#FF4000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(map);
  }
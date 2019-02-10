//js
var valores = [];

$("#botonDibujar").click(function(e){
    printMap(valores);
});


function haga(){

  var id = document.getElementById('texto2').innerHTML;
  console.log(id);
  var data={
      option: id,
  }

  var url="/rutas/verRuta";
  $.post(url, data, function asyn(data, status){
      data.puntos.forEach(punto => {
        var lat = Number(punto.lat);
        var lng = Number(punto.lng);
        valores.push({lat, lng});
        console.log(lat);
        console.log(lng);    
      }); 
  });
}

function printMap(valores) {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: valores[0],
      mapTypeId: 'terrain',
      gestureHandling: 'cooperative'
    });

    var flightPath = new google.maps.Polyline({
      path: valores,
      geodesic: true,
      strokeColor: '#FF4000',
      strokeOpacity: 1.0,
      strokeWeight: 10
    });

    flightPath.setMap(map);
  }
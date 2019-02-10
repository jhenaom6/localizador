
var id;
var puntos=[];

$("#iniciar").click(function () { 
    getLocation();
});

$("#parar").click(function () { 
    var nombre = document.getElementById('idTexto').innerHTML;
    navigator.geolocation.clearWatch(id);

    var data={
        nombre: nombre,
        puntos: puntos
    }

    var url="/rutas/guardarRuta";
    $.post(url, data, function(data, status){
        console.log('${data} and status is ${status}');
    });
});

$("#verData").click(function () { 
    var val = document.getElementById('texto2').innerHTML;

    val.forEach( punto => {
            var lat = Number(punto.lat);
            var lng = Number(punto.lng);
            puntos.push({lat, lng});
          });

    console.log(val);
    initMap(puntos);
});

function getLocation() {
    if (navigator.geolocation) {
        id = navigator.geolocation.watchPosition(obtenerPosiciones);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function obtenerPosiciones(position){
    var nuevoPunto = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    puntos.push(nuevoPunto);

    initMap(puntos);

}


function initMap(valores) {
    console.log("funcionando");
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: valores[0].lat, lng: valores[0].lng},
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
    console.log("imprime 1 punto");

    flightPath.setMap(map);
  }




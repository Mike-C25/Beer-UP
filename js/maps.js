  
$(document).ready(function() {
	console.log(Bar);

    // var mapsKey = "AIzaSyA8a8x-3TdPvdkvSQ94_RgPPyU5kkuaJnM";
    
    $(document).on("click",'.cards', function() {
     
       var iteration = $(this).attr("data-id")
       console.log(iteration)
       var latitude = Bar[iteration].location.lat;
       var longitude = Bar[iteration].location.lng;

       console.log(latitude);
       console.log(longitude);

       var map;
       function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: parseInt(latitude), lng: parseInt(longitude)},
         zoom: 8
        });
     }
       console.log(map);
       
    });
});
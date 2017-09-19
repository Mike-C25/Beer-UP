  
$(document).ready(function() {
	console.log(Bar);
    
	function initMap() {
       	var map;
       map = new google.maps.Map(document.getElementById('map'), {
         center: uluru,
         zoom: 8
        });
        console.log("done");
        console.log(map);
     }

    // var mapsKey = "AIzaSyA8a8x-3TdPvdkvSQ94_RgPPyU5kkuaJnM";
    
    $(document).on("click",'.cards', function() {
     
       var iteration = $(this).attr("data-id")
       console.log(iteration)


       var latitude = Bar[iteration].location.lat;
       var longitude = Bar[iteration].location.lng;

          uluru = { lat: latitude,
                   lng: longitude
                  }; 

       console.log(latitude);
       console.log(longitude);

       initMap();

       

      
       
    });
});
  
function initMap() {
  console.log(uluru);
        var map;
       map = new google.maps.Map(document.getElementById('map'), {
         center: uluru,
         zoom: 8
        });
        console.log("done");
        console.log(map);
     
        var marker;
        marker = new google.maps.Marker({
        position: uluru,
        map: map
        });

     };

$(document).ready(function() {
	// console.log(Bar);
  $(".map").hide();

    // var mapsKey = "AIzaSyA8a8x-3TdPvdkvSQ94_RgPPyU5kkuaJnM";
    
    $(document).on("click",'.cards', function() {
       var iteration = $(this).attr("data-id")
       console.log(iteration)


       var latitude = Bar[iteration].location.lat;
       var longitude = Bar[iteration].location.lng;

          uluru = { lat: latitude,
                   lng: longitude
                  }; 

       // console.log(latitude);
       // console.log(longitude);

       initMap();
       $(".results").fadeOut();
       $(".map").fadeIn(1000);


       

      
       
    });

    $(document).on("click",'.backButt', function() {

      $(".results").fadeIn(1000);
       $(".map").fadeOut();
       $("#map").empty()
     });
});
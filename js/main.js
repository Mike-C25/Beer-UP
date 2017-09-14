$(document).ready(function(){
    $(".card").on("click", function(e) {
        e.preventDefault();
        var selection = $(this).attr("data-name");
        localStorage.clear();
        localStorage.setItem("beerChoice",selection);
        
    });
});
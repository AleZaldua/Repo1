function fade() {
  $('.preloader').fadeOut("slow");  
}
setTimeout(fade, 3000);

$(document).ready(function(){
    $(".nav-link").mouseenter(function(){
      $(".nav-link").css("background-color", "yellow");
    });
    $(".nav-link").mouseleave(function(){
        $(".nav-link").css("background-color", "white");
      });
});



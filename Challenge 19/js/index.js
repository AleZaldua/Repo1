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

$("#example").typer({
  strings: [
    "Concept",
    "Stories",
    "Projects"
  ]
});

$("#example").typer({
  typeSpeed: 60,
  backspaceSpeed: 20,
  backspaceDelay: 800,
  repeatDelay: 1000,
  repeat: true,
  autoStart: true,
  startDelay: 100,
});

$("#example").typer({
  useCursor: true
});




$(document).ready(function(){
   $(window).on("scroll", function(){
      if($(window).scrollTop()>50){
        $("#mainNavbar").addClass("active");
      }
      else{
        $("#mainNavbar").removeClass("active");
   }})
});


$(document).ready(function(){
   $(window).on("scroll", function(){
      if($(window).scrollTop()>50){
        $("#mainNavbar").addClass("active");
      }
      else{
        $("#mainNavbar").removeClass("active");
   }})
});

var scrollLinks = document.querySelectorAll(".scroll-link");
for(var i = 0; i < scrollLinks.length; i++) {
	scrollLinks[i].addEventListener("click", function(){
	    window.scroll({
			  top: 675,
			  behavior: 'smooth'
		});
	})
}

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

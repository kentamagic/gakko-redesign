$(function(){
	//function for the vimeo window to replace hero img
 	$("#playVid").click(play);

 	//Detect scroll and change the position of the menu
	$(window).on('scroll', function () {

		var container = $(".container"),
		    low = $(".low-menu"),
		    high = $(".high-menu");

    	var scrollTop     = $(window).scrollTop(),
        	elementOffset = $(container).offset().top,
        	distance      = (elementOffset - scrollTop);

        if(distance < -500){
        	$(low).fadeOut("slow");
        	$(high).fadeIn("slow");
        }else{
        	$(high).hide();
        	$(low).show();
        }
	});



});

function play(){
	var embed = ' <iframe src="http://player.vimeo.com/video/58013264?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1" width="1280" height="720" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
	
	var $video = $(".hero-vid");
	$video.html(embed)
		.fitVids()
		.fadeIn();
	
	$(".hero-img").hide();
}


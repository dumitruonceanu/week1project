$(function() {
	$('a.nav').smoothScroll({
		offset: -80,
	});//end of smoothscroll

	$('a.openModal').on('click', function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$(href).addClass('visible');
	});

	$('a.close').on('click', function(){
		$('.modalDialog').removeClass('visible');
	});

	// Get the headers position from the top of the page, plus its own height
			if ($(window).width() >= 480){	

			var startY = 70;

			$(window).scroll(function(){
			    checkY();
			});

			function checkY(){
			    if( $(window).scrollTop() > startY ){
			        $('.fixedDiv').slideDown();
			    }else{
			        $('.fixedDiv').slideUp();
			    }
			}
	// Do this on load just in case the user starts half way down the page
	checkY();
}
	//add the green underline on the form inputs

	$('.field').on("click", function(){
		$('.field').css("border-bottom", "1px solid #E3E3E1");
		$(this).css("border-bottom", "1px solid #00B480");
		$('label').css("color", "#B0B2B4");
		$(this).find('label').css("color", "#00B480");
	});


	
	if ($(window).width() >= 480){	
		function parallax(){
	    var scrolled = $(window).scrollTop();
	    $('.innerAside').css('top', -(scrolled * 0.75) + 'px');
		}

		$(window).scroll(function(e){
		    parallax();
		});
	}
});//end of doc ready

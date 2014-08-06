var pagescript = {}
pagescript.init = function(){
	// functions to add and remove the visible class to the bioWrapper div, which by default is display:none
	$('.mobileNavButton').click(function(){
		if ($('.currentPage').hasClass('visible')){
			setTimeout(function(){
			    $('.currentPage').toggleClass('visible notVisible', function(){
			    });
			}, 500);
		}
		else{
			$('.currentPage').toggleClass('notVisible visible');
		}

		if($('.mainNavList').hasClass('visible')){
			setTimeout(function(){
			    $('.mainNavList').toggleClass('visible notVisible', function(){
			    });
			}, 500);
		}
		else{
			$('.mainNavList').toggleClass('notVisible visible');
		}


		// $('.currentPage').toggleClass('visible notVisible');
	});

	//****testing jQuery with mobieNavButton
    $('.mobileNavButton').on('click', function(){
    	$('.buttonLines').toggleClass('close');
    	if ($('.buttonLines').hasClass('close')){
    		$('.mobileNavButton p').html("CLOSE");
    		console.log("change MENU to CLOSE");
    		$('.currentPage').animate({
    			// console.log("animate");
    			left: "-100%"
    		}, 500);
    		$('.mainNavList').animate({
    			// console.log("animate");
    			right: "70px"
    		}, 500);

    	}
    	else{
    		$('.mobileNavButton p').html("MENU");
    		console.log("change CLOSE to MENU");
    		$('.currentPage').animate({
    			// console.log("animate");
    			left: "130px"
    		}, 500);
    		$('.mainNavList').animate({
    			// console.log("animate");
    			// right: "-100%"
    			right: "-800px"
    		}, 500);
    	}
    });

}
$(function(){
	pagescript.init();
	console.log("called pagescript.init");
});
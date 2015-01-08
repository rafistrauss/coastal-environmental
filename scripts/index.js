$(document).ready(function() {
	
});


function changeHeader(color) {
	color = '#' + color;
	
	$('#logo').css(
		{
			background: "linear-gradient(" + color + ", #FFF)"
		}
	);
}

function changeHeaderSolid(color) {
	color = '#' + color;
	
	$('#logo').css(
		{
			background: color
		}
	);
}




function showSection(id) {
	
	id = '#' + id;
	
	
	if ($(id).is(":visible")) {
		
	} else {
//		$('.section.selected').removeClass('selected');
//        $('.slideshow div').removeClass('selected');
        
		var button = id.id + 'Button';

		$('.slideshow > div').fadeOut(500);
		$(id).delay(500).fadeIn(500);
        goToByScroll('slideshow');
		// addSelected(button);

	}

}

function goToByScroll(id){
      
//    alert(id);
    //console.log(id);
    var el = '#' + id;
    console.log(el);
    $(el).ScrollTo({
        duration: 1000,
        easeing: 'easeIn'
        
    });
    
      // Scroll
//    $('html,body').animate({
//        scrollTop: $("#"+id).offset().top},
//        'slow');
}

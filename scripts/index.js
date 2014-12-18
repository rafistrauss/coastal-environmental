$(document).ready(function() {
	//Because IE is a steaming pile of garbage that chokes on parallax and stutters like it's having a
	//stroke, we apply a class to disable parallax on that pathetic excuse for a browser.
	if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) {
		$('.parallax').addClass('ieStinks');
        $('.ieBabyFeeding').show();
	}
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
		$('.section.selected').removeClass('selected');
		var button = id.id + 'Button';

		$('.switchable').fadeOut(500);
		$(id).delay(500).fadeIn(500);
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

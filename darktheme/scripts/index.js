$(document).ready(function() {
	$('#about h2').on('click', function(el) {
		// console.log($(this).parent().children().find('p'));
		
		
	});
	
	
	
});


function changeHeader(color) {
	color = '#' + color;
	
	$('#logo').css(
		{
			background: "linear-gradient(" + color + ", #1a1a1a)"
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





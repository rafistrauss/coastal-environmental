
function changeHeader(color) {
	color = '#' + color;
	
	$('#logo').css(
		{
			background: "linear-gradient(" + color + ", #FFF)"
		}
	);
}


function showSection(id) {
	
	if ($(id).is(":visible")) {

	} else {
		$('.section.selected').removeClass('selected');
		var button = id.id + 'Button';

		$(personalBox).fadeOut(500);
		$(measureBox).fadeOut(500);
		$(orderBox).fadeOut(500);
		$(id).delay(500).fadeIn(500);
		addSelected(button);

	}

}

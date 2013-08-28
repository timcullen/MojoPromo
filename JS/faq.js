
function showanswer() {
	$(this)
		.next()
			.fadeIn(600)
			.siblings('dd')
				.slideUp(300);	
}


$(function(){

$('dd').filter(':nth-child(n+4)').addClass('hide');
$('dl').on('mouseenter','dt', showanswer);

});


// transitions when clicking get in touch.
$('#open').click(function() {
		$('.flipper').toggleClass('flipped');
		$('.avatar').toggleClass('small');
		$('.small-name').toggleClass('small');
		$('input.email').focus();
		$('.buttons.large').toggleClass('hide');
});

// transitions for the cancel button
$('#cancel').click(function() {
		$('.flipper').toggleClass('flipped');
		$('.avatar').toggleClass('small');
		$('.small-name').toggleClass('small');
		$('.buttons.large').toggleClass('hide');
})

// Float label styles for subject & comments on focus
$('input.email').focus(function(){
	$('label.email').addClass('active blue');
})
$('input.subject').focus(function() {
		$('label.subject').addClass('active blue');
})
$('textarea.message').focus(function() {
		$('label.message').addClass('active blue');
})

// Float label styles for subject & comments on blur, if there is no value in the section.
$('input.email').blur(function(){
	$('label.email').removeClass('blue');
	  if (!$(this).val()) {
			$('label.email').removeClass('active blue');
		}
})

$('input.subject').blur(function() {
	$('label.subject').removeClass('blue');
		if (!$(this).val()) {
				$('label.subject').removeClass('active blue');
		}
})
$('textarea.message').blur(function() {
	$('label.message').removeClass('blue');
		if (!$(this).val()) {
				$('label.message').removeClass('active blue');
		}
})
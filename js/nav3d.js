jQuery(document).ready(function($){
	//toggle 3d navigation
	$('.nav-trigger').on('click', function(){
		toggle3dBlock(!$('.header').hasClass('nav-is-visible'));
	});

	//select a new item from the 3d navigation
	$('.nav').on('click', 'a', function(){
		var selected = $(this);
		selected.parent('li').addClass('selected').siblings('li').removeClass('selected');
		updateSelectedNav('close');
	});

	$(window).on('resize', function(){
		window.requestAnimationFrame(updateSelectedNav);
	});

	function toggle3dBlock(addOrRemove) {
		if(typeof(addOrRemove)==='undefined') addOrRemove = true;	
		$('.header').toggleClass('nav-is-visible', addOrRemove);
		$('.nav-container').toggleClass('nav-is-visible', addOrRemove);
		$('main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//fix marker position when opening the menu (after a window resize)
			addOrRemove && updateSelectedNav();
		});
	}

	//this function update the .marker position
	function updateSelectedNav(type) {
		var selectedItem = $('.selected'),
			selectedItemPosition = selectedItem.index() + 1, 
			leftPosition = selectedItem.offset().left,
			backgroundColor = selectedItem.data('color'),
			marker = $('.marker');

		marker.removeClassPrefix('color').addClass('color-'+ selectedItemPosition).css({
			'left': leftPosition,
		});
		if( type == 'close') {
			marker.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				toggle3dBlock(false);
			});
		}
	}

	$.fn.removeClassPrefix = function(prefix) {
	    this.each(function(i, el) {
	        var classes = el.className.split(" ").filter(function(c) {
	            return c.lastIndexOf(prefix, 0) !== 0;
	        });
	        el.className = $.trim(classes.join(" "));
	    });
	    return this;
	};
});
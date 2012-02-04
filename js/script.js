jQuery(function($) {
	$('body').delegate('article > section', 'waypoint.reached', function(event, direction) {
		var $active = $(this);

		if (direction === "up") {
			$active = $active.prev();
		}
		if (!$active.length) $active = $active.end();

		$('.section-active').removeClass('section-active');
		$active.addClass('section-active');

		$('.link-active').removeClass('link-active');
		$('a[href=#'+$active.attr('id')+']').addClass('link-active');
	});

	$('article > section').waypoint({ offset: '50%' });

	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}
	});

	$("a[href^='#']").click(function(event) {
		event.preventDefault();

		var $this = $(this),
		target = this.hash,
		$target = $(target);

		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function() {
			window.location.hash = target;
		});

	});
});

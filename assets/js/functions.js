(function($){
		var $mobileNavToggleBtn,
			$blankATags	= $('a[href^="#"]'),
			$body = $('html, body'),
			settings = {
				duration: 1500
			};

		function onBtnClick	(e){
			var $this = $(this);
			var $selectors = $('.mobile-nav');
			$this.toggleClass('is-open');	
			$selectors.toggleClass('is-open');
		}

		function onBlankAClick(event){
			var $this = $(this),
				href = $this.attr('href'),
				$target = $(href);

			if($target.length > 0){
				event.preventDefault();
				$body.animate({
					scrollTop: $target.offset().top
				},settings.duration);
			}
		}

		$(document).ready(function(){
			$mobileNavToggleBtn	= $('.mobile-nav-toggle');
			$mobileNavToggleBtn.on('click', onBtnClick);
			$blankATags.on('click', onBlankAClick);
		});

})(jQuery);
/*
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});*/



/*

$(function() {
	//mentoringBubbleClick();
	//setInterval(function(){articleTada()}, 4000);
	//designBGStuff();
	//smoothScroll(300);
	mobileNav();
	});
*/



/*

(function($){
	"use strict"



	var $mobileNavToggleBtn,
		$blankATags = $('a[href^="#"]'),
		$body = $('html, body'),
		settings = {
			duration: 300
		};

	function onBtnClick (e) {
		var $this = $(this),
			$selectors = $('.mobile-nav');

		$this.toggleClass('.is-open');
		$selectors.toggleClass('.is-open');
	}

	function onBlakAClick (event) {
		var $this = $(this),
			href = $this.attr('href'),
			$target = $(href);

		if ($target.length > 0){
			event.preventDeafult();
			$body.animate({
				scrollTop: $target.offset().top
			}, settings.duration);
		}
	}

	$(document).ready(function(){
		$mobileNavToggleBtn = $('.mobile-nav-toggle');

		$mobileNavToggleBtn.on('click', onBtnClick);
		$blankATags.on('click', onBlanKAClick);
	});


});(jQuery);

*/
/*
function mobileNav() {
	$('mobile-nav-toggle').on('click', function(){
		var status = $(this).hasClass('is-open');
		if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
		else { $('.moblile-nav-toggle, .mobile-nav').addClass('is-open');}
		});
}*/


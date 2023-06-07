$(document).ready(function ($) {
	$('#navbar-toggler-demo a').on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function () {
				window.location.hash = hash;
			});
		}
	});
	$('#navbar-footer a').on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function () {
				window.location.hash = hash;
			});
		}
	});
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});
	$('body').scrollspy({
		target: '#mainNav',
		offset: 100
	});
	var navbarCollapse = function () {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-shrink");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
		}
	};
	navbarCollapse();
	$(window).scroll(navbarCollapse);
	$('.wrapper a').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		removalDelay: 200,
		showCloseBtn: false,
		mainClass: 'mfp-fade'
	});
	$(document).on('click', '.description-box-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});
$(window).load(function () {
	$('.preloader').fadeOut(1000);
});
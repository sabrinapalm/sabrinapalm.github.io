(function($) {
	"use strict";
	document.addEventListener('DOMContentLoaded', function () {
		$("#loader").fadeOut("slow", function() {
			$("#preloader").delay(300).fadeOut("slow");
		});
	})

	setTimeout(function() {
		$('#intro h1').fitText(1, {
				minFontSize: '42px', maxFontSize: '84px'
			});
		}, 100);

		$(".fluid-video-wrapper").fitVids();
		$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	// 	var flag = document.getElementsByClassName('language-toggle')[0];
	// 	flag.addEventListener("click", function(){
	// 		changeLanguage();
	// 	});
	//
	// function changeLanguage() {
	// 	var languageFlag = document.getElementById('language-flag');
	// 	var current = languageFlag.getAttribute('src');
	// 	if (current === 'images/logos/gb_flag.png') {
	// 		languageFlag.src = 'images/logos/se_flag.png'
	// 	} else {
	// 		languageFlag.src = 'images/logos/gb_flag.png';
	// 	}
	// };


	function getRandomColorOnLoad() {
	 	var root = document.documentElement;
		var colors = ["#41aaa8", "#D37A90", "#f69314", "#6b76ff", "#a6cb12", "#df0e62"];

		function getColor() {
		   return colors[
		     Math.floor(Math.random() * colors.length)
		   ];
		}
		root.style.setProperty('--main-accent-color', getColor());
	}
	getRandomColorOnLoad();



	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});

	var statSection = $("#stats");
	var stats = $(".stat-count");
	statSection.waypoint({
		handler: function(direction) {
			if (direction === "down") {
				stats.each(function () {
					var $this = $(this);

					$({ Counter: 0 }).animate({
						Counter: $this.text()
					},
					{
						duration: 4000,
						easing: 'swing',
						step: function (curValue) {
							$this.text(Math.ceil(curValue));
						}
					});
				});
			}
			this.destroy();

		},
		offset: "90%"
	});


	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {
		  	itemSelector: '.folio-item',
		  	resize: true
		});

	});



   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });



   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');


   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});


  	nav.find('li a').on("click", function() {


   	toggleButton.toggleClass('is-clicked');
   	// fadeout the navigation panel
   	nav.fadeOut();

  	});



	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '25%'
	});


  	$('.smoothscroll').on('click', function (e) {

	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


	$('input, textarea, select').placeholder()


/*
	$('#contactForm').validate({
		submitHandler: function(form) {
			var sLoader = $('#submit-loader');
			$.ajax({
		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() {
						sLoader.fadeIn();
					},
					success: function(msg) {
						 // Message was sent
						 if (msg == 'OK') {
							 sLoader.fadeOut();
							 $('#message-warning').hide();
							 $('#contactForm').fadeOut();
							 $('#message-success').fadeIn();
						 } else {
							 sLoader.fadeOut();
							 $('#message-warning').html(msg);
							 $('#message-warning').fadeIn();
						 }
		      },
		      error: function() {
		      	sLoader.fadeOut();
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();
		      }
	      });
  		}
	});
	*/

	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {
		if (!( $("#header-search").hasClass('is-visible'))) {
			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}
		}
	});
})(jQuery);

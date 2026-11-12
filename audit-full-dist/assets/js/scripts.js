(function($) { 
	"use strict";  

	/*Preloader js */
	$('.preloader_wrap').delay(400).fadeOut('slow');
	$('.preloader_wrap').delay(350).fadeOut('slow'); 
	
	jQuery(document).ready(function($) {
					
		/*Mobile Menu Js Start*/
		$(".main-menu").meanmenu({
			meanMenuContainer: ".mobile-menu",
			meanScreenWidth: "1199",
			meanExpand: ['<i class="far fa-plus"></i>'],
		});

		// Sidebar Toggle Js Start //
		$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
			$(".offcanvas__info").removeClass("info-open");
			$(".offcanvas__overlay").removeClass("overlay-open");
		});
		$(".sidebar__toggle").on("click", function () {
			$(".offcanvas__info").addClass("info-open");
			$(".offcanvas__overlay").addClass("overlay-open");
		});

		// Slider Start //
		
		var homeSlider = new Swiper('.mar_slider', {
			// Optional parameters
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			// Navigation arrows
			navigation: {
				nextEl: '.hs_next_arrow',
				prevEl: '.hs_prev_arrow',		
			},
			pagination: {
				clickable: false,
			},
			effect: "fade",
			fadeEffect: { crossFade: true },
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1299: {
					slidesPerView: 1,
				},
				1199: {
					slidesPerView: 1,
				},					
				1024: {
					slidesPerView: 1,
				},
				991: {
					slidesPerView: 1,
				},			

				767: {
					slidesPerView: 1,
				},
				575: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});

		/*Feature Slider*/
		var swiper = new Swiper(".feature_slider", {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			centeredSlides: true,
			pagination: {
				el: ".feature-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: "",
				prevEl: "",
			},
			breakpoints: {
				1400: {
					slidesPerView: 4,
				},
				1299: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 3,
				},					
				1024: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},			

				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			}
		});

		/*Counter*/
		$('.counterup').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('span.counter').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});				
	});		


	// Student Images (thumbnails)
	var testimonialImages = new Swiper('.testimonial_images', {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 30,
		centeredSlides: true,
		slideToClickedSlide: true,
			breakpoints: {
			1400: {
				slidesPerView: 5,
			},
			1299: {
				slidesPerView: 4,
			},
			1199: {
				slidesPerView: 4,
			},					
			1024: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 3,
			},			

			767: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 3,
			},
			0: {
				slidesPerView: 3,
			},
		}
	});

  // Student Testimonials (text)
  var testimonialSlider = new Swiper('.testimonial_slider', {
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.testimonial-pagination',
      clickable: true,
    },
  });

  // Sync both sliders
  testimonialImages.controller.control = testimonialSlider;
  testimonialSlider.controller.control = testimonialImages;

  // Add active class to center image
  function updateActiveImage(){
    $('.testimonial_images .swiper-slide').removeClass('active');
    $('.testimonial_images .swiper-slide.swiper-slide-active').addClass('active');
  }

  testimonialImages.on('init', updateActiveImage);
  testimonialImages.on('slideChangeTransitionEnd', updateActiveImage);
  testimonialImages.init();

	//Clients
	$('.clients_slider').owlCarousel({
		loop: true,
		item:6,
		margin: 25,
		navText: ["<i class='ph ph-arrow-up-left'></i>" ,"<i class='ph ph-arrow-up-right'></i>"],
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},			
			440: {
				items: 2
			},
			768: {
				items: 4
			},
			992: {
				items: 5
			},			
			1199: {
				items: 6
			}
		}
	});

	//------------- Event Slider -------------//

	var eventSwiper = new Swiper(".event_slider", {
		loop: true,
		centeredSlides: true,
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1400: {
				slidesPerView: 3,
			},
			1299: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 3,
			},					
			1024: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 3,
			},			

			767: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			}
		}	
	});

	//------------- Client Slider -------------//
	var clientSwiper = new Swiper(".client_slider", {
		loop: true,
		slidesPerView: 5,       // number of logos to show
		spaceBetween: 20,       // gap between slides
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: { slidesPerView: 2 },
			640: { slidesPerView: 3 },
			1024: { slidesPerView: 5 },
		},

	});

	
	/* WOW */
	new WOW().init();
	
}(jQuery));



import $ from 'jquery';

let swiper = new Swiper('#intro-slider', {
	slidesPerView: 'auto',
	spaceBetween: 15,
	pagination: {
			el: '#intro-slider .intro-slider__dots',
			clickable: true,
	},
});

$('.article-slider').each(function (index, element) {	
	const slider_id = '#' + $(this).attr('id');
	
  let slider = new Swiper(slider_id, {
		slidesPerView: 'auto',
		spaceBetween: 15,
		pagination: {
				el: slider_id + ' .article-slider__dots',
				clickable: true,
		},
		on: {
			afterInit: function () {
				const numberOfDots = $(slider_id + ' .article-slider__dots').find('span').length;
				
				if (numberOfDots <= 1) {
					$(slider_id + ' .article-slider__dots').addClass('invisible');					
				} else {
					$(slider_id + ' .article-slider__dots').removeClass('invisible');	
				}
			},

			resize: function () {
				const numberOfDots = $(slider_id + ' .article-slider__dots').find('span').length;
				
				if (numberOfDots <= 1) {
					$(slider_id + ' .article-slider__dots').addClass('invisible');					
				} else {
					$(slider_id + ' .article-slider__dots').removeClass('invisible');	
				}
			}
		}
	});
});


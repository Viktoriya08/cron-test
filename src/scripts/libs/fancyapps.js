/*
	Документация по работе в шаблоне:
	Документация слайдера: https://fancyapps.com/docs/ui/fancybox/
	Сниппет(HTML): popup
*/

import { Fancybox } from "@fancyapps/ui"

function initFancybox() {
	Fancybox.bind("[data-fancybox]", {
		Toolbar: false,
		dragToClose: false,
		Thumbs: false,
	})

	Fancybox.bind('[data-fancybox="gallery"]', {
		// caption: function (fancybox, carousel, slide) {
		// 	return (
		// 		`${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
		// 	);
		// },
		Toolbar: false,
		closeButton: 'outside',
		Carousel: {
			// Disable content slide animation
			friction: 0,

		},
	});

	Fancybox.bind("[data-fancybox-full]", {
		Toolbar: false,
		dragToClose: false,
		Thumbs: false,
		mainClass: "popup--fullscreen",
		showClass: "popupInBottom",
		hideClass: "popupOutBottom",
		autoFocus: true,
		animated: false,
	})
}

document.addEventListener("DOMContentLoaded", () => {
	initFancybox()
})

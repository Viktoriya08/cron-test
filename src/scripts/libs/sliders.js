/*
	Документация по работе в шаблоне:
	Документация слайдера: https://swiperjs.com/swiper-api
	Сниппет (PUG): swiper

	Подключаем слайдер Swiper из node_modules
	При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
	Пример: { Navigation, Autoplay }

	Подробнее смотри https://swiperjs.com/swiper-api#modules
*/
import Swiper, { EffectFade, Navigation, Pagination, Autoplay } from "swiper"

// Инициализация слайдеров
export default function initSliders() {
	// Перечень слайдеров
	// const swiperSlider = document.querySelector(".swiper")
	// if (swiperSlider) {
	// 	new Swiper(swiperSlider, {
	// 		// Подключаем модули слайдера
	// 		// для конкретного случая
	// 		modules: [Navigation],
	// 		slidesPerView: 1,
	// 		spaceBetween: 10,
	// 		speed: 500,
	// 		loop: false,
	// 		preloadImages: false,
	// 		lazy: {
	// 			loadPrevNext: true,
	// 		},
	// 		// Dotts
	// 		//pagination: {
	// 		//	el: '.slider-quality__pagging',
	// 		//	clickable: true,
	// 		//},
	// 		// Arrows
	// 		navigation: {
	// 			nextEl: "",
	// 			prevEl: "",
	// 		},
	// 		breakpoints: {
	// 			320: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 10,
	// 			},
	// 			992: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 30,
	// 			},
	// 			1200: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 	})
	// }
	//Баннер детальной
	const standartSlider = document.querySelector(".standart-page__slider")
	if (standartSlider) {
		new Swiper(standartSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".standart-page__slider .swiper-button-next",
				prevEl: ".standart-page__slider .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true
			}
		})
	}

	//Слайдер партнеров
	const partnersSlider = document.querySelector(".partners-slider")
	if (partnersSlider) {
		new Swiper(partnersSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".partners-slider .swiper-button-next",
				prevEl: ".partners-slider .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true
			}
		})
	}

	//Баннер детальной
	const detailBannerSlider = document.querySelector(".detail-banner__slider")
	if (detailBannerSlider) {
		new Swiper(detailBannerSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".detail-banner__slider .swiper-button-next",
				prevEl: ".detail-banner__slider .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true
			}
		})
	}

	//Отзывы
	const reviewsSlider = document.querySelector(".reviews-slider")
	if (reviewsSlider) {
		new Swiper(reviewsSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1.1,
			spaceBetween: 8,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".reviews-slider .swiper-button-next",
				prevEl: ".reviews-slider .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar"
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 8
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 8
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 8
				}
			}
		})
	}

	//Площадки рядом
	const cardsSlider = document.querySelector(".cards-slider")
	if (cardsSlider) {
		new Swiper(cardsSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1.1,
			spaceBetween: 8,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".cards-slider .swiper-button-next",
				prevEl: ".cards-slider .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar"
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 8
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 8
				}
			}
		})
	}

	//**** БАЗА ЗНАНИЙ ****

	//СЛАЙДЕР ВИДЕОУРОКОВ
	const lessonsSlider = document.querySelector(".lessons-slider__slider")
	if (lessonsSlider) {
		new Swiper(lessonsSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".lessons-slider__slider .swiper-button-next",
				prevEl: ".lessons-slider__slider .swiper-button-prev"
			},
			pagination: {
				el: ".lessons-slider__slider .swiper-pagination",
				type: "bullets",
				clickable: true
			}
		})
	}

	// СТАТЬИ
	const articlesSlider = document.querySelector(".articles-slider")
	if (articlesSlider) {
		new Swiper(articlesSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1.1,
			spaceBetween: 8,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".articles-slider .swiper-button-next",
				prevEl: ".articles-slider .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar"
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 8
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 8
				}
			}
		})
	}

	// ТРЕНЕРЫ
	const trainersSlider = document.querySelector(".trainers-slider")
	if (trainersSlider) {
		new Swiper(trainersSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 8,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".trainers-slider .swiper-button-next",
				prevEl: ".trainers-slider .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar"
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 8
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 8
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 8
				}
			}
		})
	}

	//ДОСТИЖЕНИЯ
	const achievementsSlider = document.querySelector(".achievements-slider")
	if (achievementsSlider) {
		new Swiper(achievementsSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1.2,
			spaceBetween: 8,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".achievements-slider .swiper-button-next",
				prevEl: ".achievements-slider .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar"
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 8
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 8
				}
			}
		})
	}

	//КОМАНДА - ДОСТИЖЕНИЯ
	const teamAchievementsSlider = document.querySelector(".team-achievements-slider")
	if (teamAchievementsSlider) {
		new Swiper(teamAchievementsSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1.2,
			spaceBetween: 8,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".team-achievements-slider .swiper-button-next",
				prevEl: ".team-achievements-slider .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar"
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 8
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 8
				}
			}
		})
	}

	//**** ГЛАВНАЯ ****
	// main-banner
	const mainBanner = document.querySelector(".main-banner")
	if (mainBanner) {
		const pagination = document.querySelectorAll(".main-banner__nav-item")
		const mainBannerSlider = new Swiper(".main-banner__slider", {
			modules: [Pagination, Navigation, EffectFade, Autoplay],
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 500,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: ".main-banner .swiper-button-next",
				prevEl: ".main-banner .swiper-button-prev"
			},
			pagination: {
				el: ".main-banner .swiper-pagination",
				type: "bullets"
			},
			loop: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			on: {
				slideChangeTransitionStart() {
					pagination.forEach((page, index) => {
						page.classList.remove("active")
						if (index === this.realIndex) {
							page.classList.add("active")
						}
					})
				}
			}
		})

		pagination.forEach((page, index) => {
			page.addEventListener("mouseover", () => {
				mainBannerSlider.slideToLoop(index)
			})
		})

		//Для доступа из лоадера
		window.mainSlider = mainBannerSlider
	}
	// if (window.matchMedia("(min-width: 769px)").matches) {
	// 	mainBannerSlider.autoplay.stop()
	// 	setTimeout(() => {
	// 		mainBanner.classList.add('active')
	// 		mainBannerSlider.autoplay.start()
	// 	}, 3500)
	// } else {
	// 	mainBanner.classList.add('active')
	// 	mainBannerSlider.autoplay.stop()
	// }

	//**** МЕДИА ****
	//События
	const eventsBannerSlider = document.querySelector(".events-banner__slider")
	if (eventsBannerSlider) {
		new Swiper(eventsBannerSlider, {
			modules: [Pagination, EffectFade, Autoplay],
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			speed: 500,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true
			}
		})
	}

	//Слайдер команды
	const mediaTeamSlider = document.querySelector(".team-slider__list")
	if (mediaTeamSlider) {
		new Swiper(mediaTeamSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 8,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: mediaTeamSlider.querySelector(".swiper-button-next"),
				prevEl: mediaTeamSlider.querySelector(".swiper-button-prev")
			},
			pagination: {
				el: mediaTeamSlider.querySelector(".swiper-pagination"),
				type: "bullets",
				clickable: true
			}
		})
	}

	//другие номинации
	const candidatesSlider = document.querySelector(".other-candidates")
	if (candidatesSlider) {
		new Swiper(candidatesSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1.1,
			spaceBetween: 8,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".other-candidates .swiper-button-next",
				prevEl: ".other-candidates .swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar"
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 8
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 8
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 8
				}
			}
		})
	}

	//Слайдер Федерации контакты
	const fedContactsSlider = document.querySelector(".contacts-slider")
	if (fedContactsSlider) {
		new Swiper(fedContactsSlider, {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 8,
			speed: 500,
			loop: false,
			preloadImages: false,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: fedContactsSlider.querySelector(".swiper-button-next"),
				prevEl: fedContactsSlider.querySelector(".swiper-button-prev")
			},
			pagination: {
				el: fedContactsSlider.querySelector(".swiper-pagination"),
				type: "bullets",
				clickable: true
			}
		})
	}


}

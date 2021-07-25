$(function () {
	// подключаем табы

	$(".goods-tabs__top-item").on("click", function (e) {
		e.preventDefault();
		$(".goods-tabs__top-item").removeClass("goods-tabs__top-item--active");
		$(this).addClass("goods-tabs__top-item--active");

		$(".goods-tabs__content-item").removeClass("goods-tabs__content-item--active");
		$($(this).attr("href")).addClass("goods-tabs__content-item--active");
	});

	// подлючаем рейндж слайдер
	$(".filter-price__input").ionRangeSlider({
		type: "double",
		prefix: "$",
		onStart: function (data) {
			$(".filter-price__from").text(data.from);
			$(".filter-price__to").text(data.to);
		},
		onChange: function (data) {
			$(".filter-price__from").text(data.from);
			$(".filter-price__to").text(data.to);
		},
	});

	//  подключаем стили для селектов
	$(".select-style, .goods-item__num").styler();

	// меняем вид карточек

	$(".shop-content__filter-btn").on("click", function () {
		$(".shop-content__filter-btn").removeClass("shop-content__filter-btn--active");
		$(this).addClass("shop-content__filter-btn--active");
	});

	$(".button-list").on("click", () => {
		$(".product-item").addClass("product-item--list");
	});
	$(".button-grid").on("click", () => {
		$(".product-item").removeClass("product-item--list");
	});

	//  slick-slider
	$(".top-slider__inner").slick({
		dots: true,
		arrows: false,
		// autoplay: true,
		// autoplaySpeed: 2000,
		// fade: true,
	});
	//  slick-slider blog
	$(".blog-page__slider").slick({
		dots: false,
		arrows: true,
		infinite: false,
		prevArrow:
			'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="11pt" viewBox="0 0 7 11" version="1.1"><g><path d="M 0.753906 5.136719 L 5.007812 0.960938 C 5.210938 0.757812 5.542969 0.757812 5.75 0.960938 L 6.246094 1.445312 C 6.449219 1.648438 6.449219 1.972656 6.246094 2.175781 L 2.875 5.5 L 6.246094 8.824219 C 6.449219 9.027344 6.449219 9.351562 6.246094 9.554688 L 5.75 10.039062 C 5.542969 10.242188 5.210938 10.242188 5.007812 10.039062 L 0.753906 5.863281 C 0.550781 5.664062 0.550781 5.335938 0.753906 5.136719 Z M 0.753906 5.136719 "/></g></svg></button > ',
		nextArrow:
			'<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg"  width="7pt" height="11pt" viewBox="0 0 7 11" version="1.1"><g><path d="M 6.246094 5.863281 L 1.992188 10.039062 C 1.789062 10.242188 1.457031 10.242188 1.25 10.039062 L 0.753906 9.554688 C 0.550781 9.351562 0.550781 9.027344 0.753906 8.824219 L 4.125 5.5 L 0.753906 2.175781 C 0.550781 1.972656 0.550781 1.648438 0.753906 1.445312 L 1.25 0.960938 C 1.457031 0.757812 1.789062 0.757812 1.992188 0.960938 L 6.246094 5.136719 C 6.449219 5.335938 6.449219 5.664062 6.246094 5.863281 Z M 6.246094 5.863281 "/></g></svg></button>',
		// autoplay: true,
		// autoplaySpeed: 2000,
		// fade: true,
	});

	// слайдер товара

	$(".goods-slide__thumb").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		vertical: true,
		draggable: false,
		arrows: false,
		asNavFor: ".goods-slide__big",
	});
	$(".goods-slide__big").slick({
		draggable: false,
		arrows: false,
		fade: true,
		asNavFor: ".goods-slide__thumb",
	});

	//star - рейтинг
	$(function () {
		$(".star").rateYo({
			starWidth: "17px",
			normalFill: "#ccccce",
			ratedFill: "#ffc35b",
			readOnly: true,
		});
	});

	//  таймер
	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));

		return {
			total,
			days,
			hours,
			minutes,
			seconds,
		};
	}

	function initializeClock(id, endtime) {
		// const clock = document.querySelector(".promo__clock");
		const daysSpan = document.querySelector(".promo__days");
		const hoursSpan = document.querySelector(".promo__hours");
		const minutesSpan = document.querySelector(".promo__minutes");
		const secondsSpan = document.querySelector(".promo__seconds");

		function updateClock() {
			const t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
			minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
			secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		const timeinterval = setInterval(updateClock, 1000);
	}
	const deadline = $(".promo__clock").attr("data-time");
	initializeClock(".promo__clock", deadline);

	// конец стартовой функции
});

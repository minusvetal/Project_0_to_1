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

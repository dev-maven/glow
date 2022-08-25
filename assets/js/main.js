(function () {
	('use strict');

	/**
	 * FAQ Panel
	 */
	document.addEventListener('DOMContentLoaded', function (event) {
		var acc = document.getElementsByClassName('accordion');
		var panel = document.getElementsByClassName('panel');

		for (var i = 0; i < acc.length; i++) {
			acc[i].onclick = function () {
				var setClasses = !this.classList.contains('active');
				setClass(acc, 'active', 'remove');
				setClass(panel, 'show', 'remove');

				if (setClasses) {
					this.classList.toggle('active');
					this.nextElementSibling.classList.toggle('show');
				}
			};
		}

		function setClass(els, className, fnName) {
			for (var i = 0; i < els.length; i++) {
				els[i].classList[fnName](className);
			}
		}
	});

	/**
	 * Animation on scroll
	 */
	window.addEventListener('load', () => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false,
		});

		WOW.prototype.addBox = function (element) {
			this.boxes.push(element);
		};

		var wow = new WOW();
		wow.init();
		$('.wow')
			.on('scrollSpy:exit', function () {
				$(this)
					.css({
						visibility: 'hidden',
						'animation-name': 'none',
					})
					.removeClass('animated');
				wow.addBox(this);
			})
			.scrollSpy();
		setTimeout(() => {
			document.getElementById('main-cont').style.display = 'block';
			document.getElementById('preloader').style.display = 'none';
			document.body.style.background = '#fbf9f8';
		}, 2500);
	});
})();

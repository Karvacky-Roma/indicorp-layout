let headerList   = document.querySelector('.header__list');
	 headerBurger = document.querySelector('.header__burger')
	 body         = document.querySelector('body');

headerBurger.addEventListener('click', function(e){
	e.preventDefault();
	headerList.classList.toggle('header--active');
	headerBurger.classList.toggle('header--active');
	header.classList.toggle("header--active");
});
//下拉菜单
document.addEventListener('DOMContentLoaded', function() {
	var dropdowns = document.getElementsByClassName('dropdown');
	for (var i = 0; i < dropdowns.length; i++) {
		dropdowns[i].addEventListener('mouseover', function() {
			var dropdownContent = this.querySelector('.dropdown-content');
			dropdownContent.classList.add('show');
		});

		dropdowns[i].addEventListener('mouseout', function() {
			var dropdownContent = this.querySelector('.dropdown-content');
			dropdownContent.classList.remove('show');
		});
	}
});
/*轮播图*/
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let slideInterval; // 保存定时器的引用  

function showSlide(n) {
	slides.forEach((slide, index) => {
		slide.style.display = index === n ? 'block' : 'none'; // 优化代码  
	});
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % totalSlides;
	showSlide(currentSlide);
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	showSlide(currentSlide);
}

// 初始显示第一张幻灯片  
showSlide(currentSlide);

// （可选）自动播放轮播图  
slideInterval = setInterval(nextSlide, 2000); // 保存定时器的引用  

// // 获取轮播控制按钮  
// const footer = document.querySelector(".foot");  
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');

// // 绑定事件监听器  
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

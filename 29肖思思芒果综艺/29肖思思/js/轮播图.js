var slideIndex = 0; //初始化变量
var slides = document.querySelectorAll('.carousel .slides img');//document 是一个全局对象，它代表了整个 HTML 文档。


// 初始化并显示第一张幻灯片
function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

// 切换到下一张幻灯片
function nextSlide() {
    slides[slideIndex].style.display = 'none';
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = 'block';
}

// 切换到上一张幻灯片
function prevSlide() {
    slides[slideIndex].style.display = 'none'; 
	 //将幻灯片数组 slides 中索引为 slideIndex 的元素的 display 样式属性设置为 'none'，这将隐藏该幻灯片元素。
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = 'block';
}

// 为按钮添加事件监听器
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

function startSlideshow() {
  setInterval(nextSlide, 2000); // 每2秒自动切换到下一张幻灯片
}

startSlideshow();

var slideIndex = 0;
// 这行代码声明了一个变量 slideIndex 并初始化为 0。这个变量通常用于跟踪当前显示的幻灯片（slide）的索引。在轮播图中，每张幻灯片通常都有一个索引，从0开始计数。
var slides = document.querySelectorAll('.carousel .slides img');
// 声明一个变量 slides，用来存储通过CSS选择器 '.carousel .slides img' 查询到的所有符合条件的元素组成的节点列表

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
	// 将幻灯片数组 slides 中索引为 slideIndex 的元素的 display 样式属性设置为 'block'，这将使该幻灯片元素在文档流中以块级元素的形式显示
}

// 切换到上一张幻灯片
function prevSlide() {
    slides[slideIndex].style.display = 'none';
	// 将幻灯片数组 slides 中索引为 slideIndex 的元素的 display 样式属性设置为 'none'，这将隐藏该幻灯片元素。
    slideIndex--;
	// 将 slideIndex 的值减一；如果 slideIndex 小于0，那么将 slideIndex 设置为 slides 数组长度减去1，即循环到幻灯片数组的最后一个元素
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = 'block';
}

// 为按钮添加事件监听器
document.getElementById("next").addEventListener("click", nextSlide);
// 为页面上ID为 'next' 的元素添加一个点击（'click'）事件的监听器，并指定当该元素被点击时，调用 nextSlide 函数
document.getElementById("prev").addEventListener("click", prevSlide);

function startSlideshow() {
  setInterval(nextSlide, 2000); // 每2秒自动切换到下一张幻灯片
}

startSlideshow();

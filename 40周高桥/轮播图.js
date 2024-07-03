// 简单的轮播图逻辑
let slides = document.querySelectorAll('.jd-banner .slide');
let currentIndex = 0;
function cycleSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });
    currentIndex = (currentIndex + 1) % slides.length;
}
 document.addEventListener('DOMContentLoaded', function() { 
            // 获取左、右按钮元素
            const leftButton = document.getElementById('left')
            const rightButton = document.getElementById('right')
            let i = 0; // 初始化图片索引
            let timer; // 定时器变量
            // 右按钮点击事件
            rightButton.addEventListener('click', function() {
                i = (i + 1) % 3; // 索引加1并取模运算以实现循环
                toggle(); // 切换图片
            });

            // 左按钮点击事件
            leftButton.addEventListener('click', function() {
                i = (i - 1 + 3) % 3; // 索引减1并取模运算以实现循环
                toggle(); // 切换图片
            });

            // 获取图片元素
            const img = document.querySelector(".content img");

            // 切换图片函数
            function toggle() {
                img.src = "img/" + i + '.jpg'; // 更新图片路径
            }

            // 获取底部元素
            const footer = document.querySelector(".foot");

            // 设置定时器，每2秒切换一次图片
            timer = setInterval(function() {
                rightButton.click(); // 模拟右按钮点击
            }, 2000);

            // 当鼠标移出底部区域时，重新启动定时器
            footer.addEventListener('mouseleave', function() {
                timer = setInterval(function() {
                    rightButton.click(); // 模拟右按钮点击
                }, 2000);
            });

            // 当鼠标进入底部区域时，清除定时器
            footer.addEventListener('mouseenter', function() {
                clearInterval(timer); // 清除定时器
            });
        });
setInterval(cycleSlides, 3000); // 每3秒切换一次
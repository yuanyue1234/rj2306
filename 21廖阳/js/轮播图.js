document.addEventListener('DOMContentLoaded', function() {
	// 获取左、右按钮元素
	const leftButton = document.getElementById('left')
	const rightButton = document.getElementById('right')
	let i = 0; // 初始化图片索引
	let timer; // 定时器变量
	// 右按钮点击事件
	rightButton.addEventListener('click', function() {
		i = (i + 1) % 5; // 索引加1并取模运算以实现循环
		toggle(); // 切换图片
	});

	// 左按钮点击事件
	leftButton.addEventListener('click', function() {
		i = (i - 1 + 5) % 5; // 索引减1并取模运算以实现循环
		toggle(); // 切换图片
	});

	// 获取图片元素
	const img = document.querySelector(".content img");

	// 切换图片函数
	function toggle() {
		img.src = "https://asunny-1314135129.cos.ap-guangzhou.myqcloud.com/img/0" + i + '.png'; // 更新图片路径
		}
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
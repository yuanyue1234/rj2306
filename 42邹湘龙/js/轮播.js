var items = document.querySelectorAll(".item"); //图片节点
        var points = document.querySelectorAll(".point") //点
        var left = document.getElementById("leftBtn");
        var right = document.getElementById("rightBtn");
        var all = document.querySelector(".wrap")
        var index = 0;
        var time = 0; //定时器跳转参数初始化


        //封装一个清除active方法
        var clearActive = function() {
        	for (i = 0; i < items.length; i++) {
        		items[i].className = 'item';
        	}
        	for (j = 0; j < points.length; j++) {
        		points[j].className = 'point';
        	}
        }

        //改变active方法
        var goIndex = function() {
        	clearActive();
        	items[index].className = 'item active';
        	points[index].className = 'point active'
        }
        //左按钮事件
        var goLeft = function() {
        	if (index == 0) {
        		index = 4;
        	} else {
        		index--;
        	}
        	goIndex();
        }

        //右按钮事件
        var goRight = function() {
        	if (index < 4) {
        		index++;
        	} else {
        		index = 0;
        	}
        	goIndex();
        }


        //绑定点击事件监听
        left.addEventListener('click', function() {
        	goLeft();
        	time = 0; //计时器跳转清零
        })

        right.addEventListener('click', function() {
        	goRight();
        	time = 0; //计时器跳转清零
        })

        for (i = 0; i < points.length; i++) {
        	points[i].addEventListener('mouseenter', function() {
        		var pointIndex = this.getAttribute('data-index')
        		index = pointIndex;
        		goIndex();
        		time = 0; //计时器跳转清零
        	})
        }
        //计时器轮播效果
        var timer;

        function play() {
        	timer = setInterval(() => {
        		time++;
        		if (time == 20) {
        			goRight();
        			time = 0;
        		}
        	}, 100)
        }
        play();
        //移入清除计时器
        all.onmousemove = function() {
        	clearInterval(timer)
        }
        //移出启动计时器
        all.onmouseleave = function() {
        	play();
        }

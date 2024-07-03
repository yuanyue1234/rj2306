 let currentIndex = 0;
     	//幻灯片				查询 选择器 所有
     const slides = document.querySelectorAll('.carousel img');
     //展示  								.表示类选择器
     function showSlide(index) {
     		//遍历 回调函数		当前元素索引
     		//=>是箭头符号 		>是比较运算符
         slides.forEach((slide, i) => {
     		//		集合  		删除		活动
             slide.classList.remove('active');
     	//使用 if 语句检查当前幻灯片的索引 i 是否等于要显示的幻灯片的索引 index。
             if (i === index) {
     //如果 if 条件成立，这行代码将调用 classList.add 方法给当前的 slide 元素添加一个类名为 'active' 类。
                 slide.classList.add('active');
             }
         });
     }
     function nextSlide() {
     	//当前索引 currentIndex 增加 1
     	  // %当索引达到数组末尾时，使用模运算可以让索引回到数组的开始位置。
         currentIndex = (currentIndex + 1) % slides.length;
         showSlide(currentIndex);
     }
     function prevSlide() {
     	//当前索引 currentIndex 减去 1，如果结果为负数，就加上幻灯片的长度
         currentIndex = (currentIndex - 1 + slides.length) % slides.length;
         showSlide(currentIndex);
     }
     function autoSlide() {
     	// 切换到下一张幻灯片
         nextSlide();
     	//使用 setTimeout 函数来延迟调用 autoSlide 函数自身
     //集合
         setTimeout(autoSlide, 3000); 
     }
     showSlide(currentIndex);
     autoSlide();
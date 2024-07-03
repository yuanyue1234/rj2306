//let用来描述网页的结构和内容
let img=document.getElementById('img');//getElementById用于根据指定的ID从HTML文档中获取一个元素。
 // 获取具有id="img"的图片元素
let lis=document.querySelectorAll('.banner-btn>li');//querySelectorAll根据CSS选择器在文档中查找所有匹配的元素
 // 获取所有具有".banner-btn>li"选择器的列表元素
let slideBanner=document.querySelector('.slide-banner');//querySelector在HTML文档中根据指定的CSS选择器找到第一个匹配的元素
  // 获取具有".slide-banner"类名的元素
let imgArr=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];
 // 定义一个包含图片名称的数组
let i=0;
 // 初始化图片索引为 0
//封装切换的函数
function banner(){//function定义可重用的代码块，即函数
	img.src = 'images/' + imgArr[i];
//设置图片的路径，通过索引 i 从数组 imgArr 中获取图片名称
}

// 封装自动切换图片的函数
function autoBanner(){
	i++;
// 图片索引递增
	if(i>imgArr.length - 1){
		i=0;
// 如果索引超过图片数组的长度 - 1，则重置为 0
	}
	banner();
// 调用 banner 函数进行图片切换
}
let timer= setInterval(autoBanner,3000);//setInterval一个函数，用于在指定的时间间隔内重复执行一段代码。
// 使用 setInterval 方法每隔 3000 毫秒自动调用 autoBanner 函数，实现自动切换效果
// 返回的 timer 变量可用于后续清除定时器

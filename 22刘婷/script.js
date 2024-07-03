// 初始化变量  
let totalImages = 3; // 图片总数
let currentImageIndex = 1; // 当前显示的图片索引，从0开始  
let img=document.querySelector(".carousel-images img");
console.log(currentImageIndex,img);
// 更新轮播图  
function updateCarousel() {  
    // 计算 translateX 的值，将当前图片移到左边  
    //const transformValue = `translateX(${-currentImageIndex * 100}%)`;  
    // 应用 transform 到图片容器上，使得图片向左滚动  
    //document.querySelector('.carousel-images').style.transform = transformValue;   
    img.src = `img/${(currentImageIndex + 1)}.jpg`; // 假设图片命名从1开始，所以加1  
} 
  
// 处理上一个按钮的点击事件  
document.querySelector('.prev-btn').addEventListener('click', function() {  
    // 如果当前不是第一张图片，则减1；否则，跳转到最后一张图片  
    currentImageIndex = (currentImageIndex >0) ? currentImageIndex - 1 : totalImages - 1;  
    updateCarousel();  
});  
  
// 处理下一个按钮的点击事件  
document.querySelector('.next-btn').addEventListener('click', function() {  
    // 如果当前不是最后一张图片，则加1；否则，跳转到第一张图片  
    currentImageIndex = (currentImageIndex < 2) ? currentImageIndex + 1 : 0;  
    updateCarousel();  
});  


  
// 初始显示第一张图片  

  
// 自动滚动图片（可选）  
function autoRotate() {  
    setInterval(function() {  
        currentImageIndex = (currentImageIndex < totalImages - 1) ? currentImageIndex + 1 : 0;  
        updateCarousel();  
    }, 3000); // 每3秒滚动一次  
}  
  
// 如果需要自动滚动，取消注释下一行  
autoRotate();  
const carouselImages = document.querySelectorAll('.carousel-image');  
let currentIndex = 0;  
const imageCount = carouselImages.length;  
  
function showImage(index) {  
    carouselImages.forEach((image, i) => {  
        image.classList.remove('active');  
        if (i === index) {  
            image.classList.add('active');  
        }  
    });  
}  
  
function nextImage() {  
    currentIndex = (currentIndex + 1) % imageCount;  
    showImage(currentIndex);  
}  
  
function prevImage() {  
    currentIndex = (currentIndex - 1 + imageCount) % imageCount; // 确保索引为正数  
    showImage(currentIndex);  
}  
  
// 自动播放  
setInterval(nextImage, 2000);  
  
// 导航按钮点击事件  
document.querySelector('.carousel-next').addEventListener('click', nextImage);  
document.querySelector('.carousel-prev').addEventListener('click', prevImage);
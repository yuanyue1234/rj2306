document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('#carousel > img');
    var currentSlide = 0;

    function showSlide(index) {
        slides.forEach(function(slide, idx) {
            slide.style.display = 'none';
            if (idx === index) {
                slide.style.display = 'block';
            }
        });
    }

    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000); // 3秒切换一次

    showSlide(currentSlide); // 初始显示第一张幻灯片
});
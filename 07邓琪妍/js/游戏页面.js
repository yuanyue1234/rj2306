// 轮播图逻辑（保持不变）  
var slides = document.querySelector('.slides').getElementsByTagName('img');  
var currentSlide = 0;  
var slideInterval = setInterval(nextSlide, 1000); //用于定期执行某个函数 
  
function hideAllSlides() {  
  for (var i = 0; i < slides.length; i++) {  // 在这里，你可以使用 slides[i] 来引用 slides 数组中的当前元素
    slides[i].style.display = 'none';  // 将每个幻灯片的display属性设置为'none'，从而隐藏它们
  }  
}  
  
function showSlide(n) {  //函数调用，引用幻灯片
  hideAllSlides();  //动用函数隐藏幻灯片
  slides[n].style.display = 'block';  
}  
  
function nextSlide() {  
  showSlide(++currentSlide % slides.length); // 计算下一张幻灯片的索引  
}  
  
function prevSlide() {  
  showSlide(--currentSlide < 0 ? slides.length - 1 : currentSlide);  
}  
  
document.querySelector('.next').addEventListener('click', nextSlide);  
document.querySelector('.prev').addEventListener('click', prevSlide);  
  
var carousel = document.querySelector('.carousel');  
carousel.addEventListener('mouseover', function() {  
  clearInterval(slideInterval);  //定时器变量
});  
carousel.addEventListener('mouseout', function() {  
  slideInterval = setInterval(nextSlide, 1000);  
});  
  
// 表单验证逻辑  
document.getElementById('registration-form').addEventListener('submit', function(e) {  
  e.preventDefault(); // 阻止表单默认提交  
  
  var username = document.getElementById('username').value;  
  var password = document.getElementById('password').value;  
  
  // 用户名必须是中文  
  if (!/^[\u4e00-\u9fa5]+$/.test(username)) {  
    alert('用户名必须是中文！');  
    return;  
  }  
  
  // 密码必须八位数以上，包含大小写字母  
  if (!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {  
    alert('密码必须八位数以上，包含大小写字母！');  
    return;  
  }  
  
  // 如果以上验证都通过，则可以提交表单（这里仅做演示，实际应发送数据到服务器）  
  alert('表单提交成功！');  
  // 在这里添加表单处理逻辑，比如发送AJAX请求到服务器  
});
 var dropdown = document.querySelector('.dropbtn');
 var dropdownContent = document.querySelector('.dropdown-content');
 
 // 为下拉按钮添加点击事件监听器
 dropdown.addEventListener('click', function() {
     // 切换下拉内容的显示和隐藏
     dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
 });
 
 // 点击页面其他地方时隐藏下拉菜单
 window.addEventListener('click', function(event) {
     if (!dropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
         dropdownContent.style.display = 'none';
     }
 });
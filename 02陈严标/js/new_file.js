document.querySelector('.dropbtn').addEventListener('click', function(event) {  
    event.stopPropagation(); // 阻止事件冒泡到父元素  
    var dropdownContent = this.nextElementSibling;  
    dropdownContent.classList.toggle('show'); // 使用class来切换显示状态  
});  
  
// 确保点击下拉菜单之外的地方时关闭菜单  
window.addEventListener('click', function(event) {  
    if (!event.target.closest('.dropdown')) { // 如果点击的元素不是下拉菜单或其子元素  
        var dropdowns = document.querySelectorAll('.dropdown-content');  
        dropdowns.forEach(function(dropdown) {  
            dropdown.classList.remove('show'); // 关闭所有下拉菜单  
        });  
    }  
});  
  
// 阻止点击下拉菜单内的链接时关闭菜单  
document.querySelectorAll('.dropdown-content a').forEach(function(link) {  
    link.addEventListener('click', function(event) {  
        event.stopPropagation(); // 阻止事件冒泡到下拉菜单，防止其关闭  
    });  
});
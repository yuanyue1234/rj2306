document.addEventListener('DOMContentLoaded', function() {
    // 获取下拉按钮和下拉菜单
    var moreDropdown = document.querySelector('.dropdown h1');
    var dropdownContent = document.querySelector('.dropdown-content');

    // 为下拉按钮添加点击事件
    moreDropdown.addEventListener('click', function(event) {
        // 切换下拉菜单的显示状态
        dropdownContent.classList.toggle('show');
        event.preventDefault(); // 阻止链接默认的导航行为
    });

    // 点击下拉菜单外部区域隐藏下拉菜单
    window.addEventListener('click', function(event) {
        if (!moreDropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});
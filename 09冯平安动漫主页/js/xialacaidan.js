
function handleSelectChange() {
     var selectElement = document.querySelector('select');
// 获取 select 元素
    var selectedValue = selectElement.value;//“value”通常指的是变量、属性或表达式所具有的具体数据值。
  // 如果选中的值不为空
    if (selectedValue) {//被选中的值
        // 进行页面跳转
        window.location.href = selectedValue;//窗口打开那个被选中的值得链接
    }
}

document.querySelector('select').addEventListener('change', handleSelectChange);

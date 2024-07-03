// 注册表单验证逻辑
document.getElementById('registrationForm').addEventListener('submit', function(event) {
	// 为页面上ID为 'registrationForm' 的元素添加一个事件监听器，用于监听 'submit' 事件，当触发该事件时，执行一个函数，这个函数接收一个名为 'event' 的参数。
    event.preventDefault();
	// 调用事件对象 event 的 preventDefault 方法，以阻止事件的默认行为
    const username = document.getElementById('username').value;
	// 声明一个名为 username 的常量，并将页面上ID为 'username' 的输入元素的值赋给这个常量。
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 正则表达式验证
    if (!/^\w+$/.test(username)) {// / 符号定义了正则表达式的开始和结束。^ 表示匹配字符串的开始。\w 匹配任何单个单词字符，等价于 [a-zA-Z0-9_]。+ 表示前一个字符的一个或多个。$ 表示匹配字符串的结束。
        alert('用户名只能包含字母、数字及下划线');
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('邮箱格式不正确');
        return false;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        alert('密码必须包含至少8位字母和数字');
        return false;
    }

    // 如果所有验证通过，提交表单
    // 实际开发中这里应该发送数据到服务器
    alert('注册成功！');
});
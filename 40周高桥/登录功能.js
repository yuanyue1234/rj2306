document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        // 获取用户输入的用户名和密码
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // 这里可以添加代码来验证用户名和密码
        // 例如，检查它们是否符合特定的格式要求

        // 模拟登录请求（实际应用中应发送到服务器）
        setTimeout(function() {
            if(username === 'root' && password === '123456') {
                alert('登录成功！');
                // 登录成功后的操作，比如页面跳转
                window.location.href = 'https://www.jd.com/'; // 假设登录成功后跳转到主页
            } else {
                alert('用户名或密码错误！');
            }
        }, 1000);
    });
});
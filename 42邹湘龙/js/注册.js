// 注册表单验证逻辑
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 正则表达式验证
    if (!/^\w+$/.test(username)) {
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

document.getElementById('registration_form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (password.length >= 8 && password.length <= 18) {
        message.textContent = '注册成功！';
        message.style.color = 'green';
    } else {
        message.textContent = '注册失败：密码长度必须在8到18位之间。';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
	
    if(username.length >= 5 && username.length <= 20) {
        // 模拟登录成功
        alert('登录成功！');
    } else {
        alert('账号长度必须在5到20个字符之间！');
    }
});
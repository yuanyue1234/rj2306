document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const username = document.getElementById('username').value;
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').textContent = '用户名必须用3-15个字符,并且只包含字母和数字';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }



    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = '密码必须用6-20个字符,至少有一个大写字母,一个小写字母和一个数字';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('注册成功!');
    }
});

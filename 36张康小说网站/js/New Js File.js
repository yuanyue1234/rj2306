document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const username = document.getElementById('username').value;
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    if (!usernameRegex.test(username)) {
		alert('用户名需为3-16位的字母、数字、下划线或短横线');
		return;
        document.getElementById('usernameError').textContent = 'Username must be 3-15 characters long and contain only letters and numbers.';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
		
		alert('请输入有效的邮箱地址');
		return;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(password)) {
		alert('密码需为6-20位，包含至少一个小写字母、一个大写字母和一个数字');
		return;
        document.getElementById('passwordError').textContent = 'Password must be 6-20 characters long and include at least one uppercase letter, one lowercase letter, and one number.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('注册成功!');
    }
});
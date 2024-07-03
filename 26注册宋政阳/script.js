document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();// 事件的监听器 阻止表单默认提交， //
    let isValid = true;
	//初始化验证状态//
    const username = document.getElementById('username').value;
	//用于从HTML文档中通过ID获取一个元素，并获取该元素的value属性值。这里具体解释一下每个部分//
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;//常量//
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').textContent = 'Username must be 3-15 characters long and contain only letters and numbers.';
		//属性表示一个节点及其后代的文本内容。//
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById('email').value;//常量 该属性表示元素的当前值。//
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;////验证错误信息//
    }

    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be 6-20 characters long and include at least one uppercase letter, one lowercase letter, and one number.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('注册成功!');//提交表单//
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // 阻止表单的默认提交行为  
  
    // 获取表单元素  
    var username = document.getElementById('username').value;  
    var email = document.getElementById('email').value;  
    var password = document.getElementById('password').value;  
  
    // 使用正则表达式进行验证  
    var usernameRegex = /^[a-zA-Z0-9_]{4,16}$/; // 用户名：4-16位，包含字母、数字和下划线  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 邮箱：基本验证  
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // 密码：至少8位，包含大小写字母和数字  
  
    // 验证用户名  
    if (!usernameRegex.test(username)) {  
        alert('用户名必须为4-16位，包含字母、数字和下划线');  
        return;  
		 document.getElementById('usernameError').textContent = 'Username must be 3-15 characters long and contain only letters and numbers.';
		        document.getElementById('usernameError').style.display = 'block';
		        isValid = false;
    }  
    // 验证邮箱  
    if (!emailRegex.test(email)) {  
        alert('请输入有效的邮箱地址');  
        return;  
		 document.getElementById('emailError').textContent = 'Please enter a valid email address.';
		        document.getElementById('emailError').style.display = 'block';
		        isValid = false;
    }  
    // 验证密码  
    if (!passwordRegex.test(password)) {  
        alert('密码必须至少8位，包含大小写字母和数字');  
        return;  
		document.getElementById('passwordError').textContent = 'Password must be 6-20 characters long and include at least one uppercase letter, one lowercase letter, and one number.';
		        document.getElementById('passwordError').style.display = 'block';
		        isValid = false;
    }  
    // 如果所有验证都通过，可以发送数据到服务器  
    alert('注册成功！');   
});
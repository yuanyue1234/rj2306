document.addEventListener('DOMContentLoaded', function() {
	// 获取表单数据  
	const dropdown = document.getElementById('dropdown');
	const arrow = document.getElementById('arrow');
});



function register() {
	const username = document.getElementById('user').value;
	const password = document.getElementById('pswd').value;


	// 检查账号和密码的长度是否符合规范
	if (username.length >= 8 && password.length >= 8) {
		// 检查密码是否包含大小写字母、数字和特殊字符
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		if (passwordRegex.test(password)) {
			alert("账号创建成功!!")
		} else {
			alert('密码必须包含大小写字母、数字和特殊字符!');
		}
	} else {
		alert('账号和密码必须至少8位以上!');
	}
	if (username === '15973049651' && password === 'Huangyang?123') {  
		window.location.href = 'http://127.0.0.1:8848/%E6%B8%B8%E6%88%8F%E9%A1%B5%E9%9D%A2/index.html';
	}
}
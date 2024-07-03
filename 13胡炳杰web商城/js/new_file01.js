// 简单的正则表达式验证示例
			document.getElementById('registrationForm').addEventListener('submit', function(event) {
				var username = document.getElementById('username');
				var email = document.getElementById('email');
				var password = document.getElementById('password');
				var errors = [];

				if (!username.checkValidity()) {
					errors.push('用户名不符合要求。');
				}
				if (!email.checkValidity()) {
					errors.push('邮箱地址不符合要求。');
				}
				if (!password.checkValidity()) {
					errors.push('密码不符合要求。');
				}

				if (errors.length > 0) {
					event.preventDefault();
					// 显示错误信息，这里仅做控制台输出，实际应用中应展示给用户
					console.log(errors.join('\n'));
				}
			});
document.addEventListener('DOMContentLoaded', function() {
			    // 正则表达式规则
			    const regexUsername = /^[A-Za-z0-9]+$/;
			    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			    const regexPassword = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
			
			    // 表单提交事件
			    document.getElementById('registrationForm').addEventListener('submit', function(event) {
			        let isValid = true;
			        const username = document.getElementById('username').value;
			        const email = document.getElementById('email').value;
			        const password = document.getElementById('password').value;
			        const confirm_password = document.getElementById('confirm_password').value;
			
			        // 用户名验证
			        if (!regexUsername.test(username)) {
			            alert('用户名只能包含字母和数字。');
			            isValid = false;
			        }
			//检查 username 是否匹配 regexUsername 定义的规则。
			        // 邮箱验证
			        if (!regexEmail.test(email)) {
			            alert('邮箱格式不正确。');
			            isValid = false;
			        }
			
			        // 密码验证
			        if (!regexPassword.test(password)) {
			            alert('密码至少6位，至少包含一个数字和一个字母。');
			            isValid = false;
			        }
			
			        // 密码和确认密码匹配验证
			        if (password !== confirm_password) {
			            alert('密码和确认密码不匹配。');
			            isValid = false;
			        }
			
			        // 如果验证失败，阻止表单提交
			        if (!isValid) {
			            event.preventDefault();
			        } else {
			            // 只有当验证成功时才显示注册成功的消息
			            alert('注册成功！');
			            // 这里可以添加提交表单的代码，例如使用 fetch API 发送数据到服务器
			            // ...
			        }
			    });
			});
			//下划
			document.addEventListener('DOMContentLoaded', function() {
				var menu = document.getElementById('fl');
				var submenus = menu.querySelectorAll('li > ul'); // 获取所有直接子菜单

				menu.addEventListener('mouseover', function(event) {
					var target = event.target;
					// 检查鼠标是否移动到了包含ul的li元素上
					if (target.nodeName.toLowerCase() === 'li' && target.querySelector('ul')) {
						var ul = target.querySelector('ul');
						// 显示下拉菜单
						ul.style.display = 'block';
						// 确保鼠标移出时，如果鼠标没有进入下拉菜单，下拉菜单会隐藏
						ul.addEventListener('mouseleave', function hideSubmenu() {
							ul.style.display = 'none';
							ul.removeEventListener('mouseleave', hideSubmenu); // 移除事件监听器以避免重复触发
						});
					}
				});

				menu.addEventListener('mouseout', function(event) {
					var target = event.target;
					// 检查鼠标是否从包含ul的li元素上移出
					if (target.nodeName.toLowerCase() === 'li' && target.querySelector('ul')) {
						// 找到当前li元素的下拉菜单
						var ul = target.querySelector('ul');
						// 如果鼠标移出的是下拉菜单的父li元素，则隐藏下拉菜单
						if (!ul.contains(event.relatedTarget)) {
							ul.style.display = 'none';
						}
					}
				});
			});
			// 轮播图脚本
			let slideIndex = 0;
			showSlides(slideIndex);

			function showSlides(n) {
				let i;
				let slides = document.getElementsByClassName("slide");
				//将所有具有 'slide' 类名的DOM元素的集合赋值给变量 slides
				if (n >= slides.length) {
					slideIndex = 0
				}
				if (n < 0) {
					slideIndex = slides.length - 1
				}
				for (i = 0; i < slides.length; i++) {
					slides[i].style.display = "none";
				}
				slides[slideIndex].style.display = "block";
			}

			function moveSlide(n) {
				showSlides(slideIndex += n);
			}
			// 自动播放功能
			setInterval(function() {
				moveSlide(1);
			}, 3000);
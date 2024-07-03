function toggleDropdown(dropdownId) {
			    var dropdown = document.getElementById(dropdownId);
			    if (dropdown) {
			        dropdown.classList.toggle('show');
			    }
			}
			
			// 注册表单验证函数
			function validateRegistration() {
			       var username = document.getElementById('username').value;
			       var usernameRegex = /^[a-zA-Z0-9]+$/; // 正则表达式，只允许字母和数字
			   
			       if (!usernameRegex.test(username)) {
			           alert('用户名无效，只允许字母和数字。');
			           return false;
			       }
			       // 可以继续添加其他验证...
			       alert('注册表单已提交，进行验证...');
			       return true; // 验证通过
			   }
			
			// 阻止下拉菜单链接的默认行为和事件冒泡
		// 使用箭头函数简化代码
		const dropdownLinks = document.querySelectorAll('.dropdown-content a');
				dropdownLinks.forEach(link => {
				    link.addEventListener('click', (event) => {
				        event.preventDefault();
				        event.stopPropagation();
				    });
				});
				
				document.addEventListener('DOMContentLoaded', () => {
				    const dropbtns = document.getElementsByClassName('dropbtn');
				    Array.from(dropbtns).forEach((dropbtn, index) => {
				        dropbtn.addEventListener('click', () => {
				            const dropdownId = dropbtn.getAttribute('aria-controls');
				            toggleDropdown(dropdownId);
				        });
				    });
				
				    window.onclick = (event) => {
				        const target = event.target;
				        const dropdowns = document.getElementsByClassName('dropdown-content');
				        const isClickInsideDropdown = Array.from(dropdowns).some(dropdown => dropdown === target || dropdown.contains(target));
				        if (!isClickInsideDropdown) {
				            Array.from(dropdowns).forEach(dropdown => {
				                dropdown.classList.remove('show');
				            });
				        }
				    };
				});
				
					function showSlide(index) {
					    slides[currentSlide].classList.remove('active');
					    slides[index].classList.add('active');
					}
			// 幻灯片播放逻辑
			let currentSlide = 0;
			const slides = document.getElementsByClassName('slide');
			
			function nextSlide() {
			    slides[currentSlide].classList.remove('active');
			    currentSlide = (currentSlide + 1) % slides.length;
			    slides[currentSlide].classList.add('active');
			}
			
			// 设置定时器自动播放
			setInterval(nextSlide, 2000);
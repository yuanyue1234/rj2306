// 获取开发者平台链接和下拉菜单容器
const developerMenu = document.getElementById('developer-menu');
const developerDropdown = document.getElementById('developer-dropdown');

// 鼠标移入开发者平台链接时显示下拉菜单
developerMenu.addEventListener('mouseenter', function() {
    developerDropdown.style.display = 'block';
});

// 鼠标移出开发者平台链接或下拉菜单时隐藏下拉菜单
developerMenu.addEventListener('mouseleave', function() {
    developerDropdown.style.display = 'none';
});

// 鼠标移入下拉菜单时保持显示状态
developerDropdown.addEventListener('mouseenter', function() {
    developerDropdown.style.display = 'block';
});

// 鼠标移出下拉菜单时隐藏下拉菜单
developerDropdown.addEventListener('mouseleave', function() {
    developerDropdown.style.display = 'none';
});
document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止链接的默认行为
    var popupContainer = document.getElementById('popupContainer');
    var registrationForm = document.createElement('div');
    
    // 重新构建注册表单的HTML
    registrationForm.innerHTML = `
        <form id="registrationForm">
            <!-- 将原表单内容放在这里 -->
            <!-- 示例内容，实际应根据之前表单内容复制 -->
            <label for="username">用户名：</label>
            <input type="text" id="username" name="username" required><br>
            <label for="email">电子邮件：</label>
            <input type="email" id="email" name="email" required><br>
            <label for="password">密码：</label>
            <input type="password" id="password" name="password" required><br>
            <input type="submit" class="loginbt" value="注册">
        </form>
		
    `;
    registrationForm.className = "popup-form";
    
    // 清空popupContainer的内容，防止多次点击累积
    popupContainer.innerHTML = '';
    popupContainer.appendChild(registrationForm);
    popupContainer.classList.remove('popup-hidden'); // 显示弹窗
    popupContainer.style.display = 'block'; // 显示弹窗
    // 可以在这里添加关闭弹窗的逻辑，例如点击弹窗外区域关闭等
	
});

// 如果需要，可以在这里添加关闭弹窗的函数
function closePopup() {
    document.getElementById('popupContainer').classList.add('popup-hidden');
}




//注册表单
document.addEventListener("DOMContentLoaded", function(event) {
	event.preventDefault(); 
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const pou =document.getElementById('popupContainer');
    form.addEventListener('submit', function(event) {
		if (!validateUsername(usernameInput.value)) {
			alert('用户名无效！请输入3到16个字符的字母数字下划线组合');
			event.preventDefault();
		}
		if (!validateEmail(emailInput.value)) {
			alert('电子邮件无效！');
			event.preventDefault();
		}
		if (!validatePassword(passwordInput.value)) {
			alert('密码无效！请输入至少6个字符的字母数字组合');
			event.preventDefault();
		}
	});

    function validateUsername(username) {
		const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
		return usernameRegex.test(username);
    }

    function validateEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
    }

    function validatePassword(password) {
		const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
		return passwordRegex.test(password);
    }
	alert('注册成功！');
    pou.classList.add('popup-hidden');
    pou.style.display = 'none';
	return true;
});





//轮播图
const images = document.querySelectorAll('.background img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // 每3秒切换一次图片
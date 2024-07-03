document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault();//阻止元素提交表单
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 正则表达式验证 +是量词 它表示前面的元素至少出现一次
    if(!/^[\u4e00-\u9fa5]{4,}$/.test(username)){
        alert('用户名只能包含中文，且要四位');
        return; // 终止函数的执行
    }
	//检查一个字符串是否与正则表达式中的模式相匹配   $用作锚点，表示输入字符串的末尾
    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(password)){
        alert('密码必须包含至少4位字母和数字');
        return; // 终止函数的执行
    }
    alert('注册成功!');
	// 清空用户名和密码输入框
	document.getElementById('username').value = '';
	document.getElementById('password').value = '';
	 document.getElementById('email').value = '';
});
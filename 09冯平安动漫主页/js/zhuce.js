
  // 定义正则表达式模式
   //正则表达式（Regular Expression，简称regex或regexp）是一种模式匹配工具，用于在文本中查找、替换或验证符合特定模式的字符串。校验
  const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;  // 用户名：3 到 16 个字母、数字或下划线 设置密码的规则
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;  // 密码：至少 8 位，包含小写字母、大写字母和数字
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // 有效的电子邮件格式 电子邮件地址是否规范
  // “const”是一个关键字，在编程语言中通常用于表示常量或不可变的对象。
  // 注册函数
  function register() { //注册
  // 定义常量 username，通过 document.getElementById 方法获取页面中 ID 为 'username' 的输入元素的值
    const username = document.getElementById('username').value;//用来获取HTML页面中ID为 `'username'` 的输入元素
	    // 定义常量 password，通过 document.getElementById 方法获取页面中 ID 为 'password' 的输入元素的值
    const password = document.getElementById('password').value;
	// 定义常量 confirmPassword，通过 document.getElementById 方法获取页面中 ID 为 'confirmPassword' 的输入元素的值，用于确认密码
	    const confirmPassword = document.getElementById('confirmPassword').value;
	// 定义常量 email，通过 document.getElementById 方法获取页面中 ID 为 'email' 的输入元素的值
    const confirmPassword = document.getElementById('confirmPassword').value;//确认密码值
	// 定义一个常量 `email`获取该元素的 `value` 属性值，即用户在该输入框中输入的内容
    const email = document.getElementById('email').value;
	// “value”通常指的是某个元素所具有的“值”。
  
   // 用户名验证，如果用户名不匹配特定的模式（由 usernamePattern 定义）
    if (!usernamePattern.test(username)) {
		 // 弹出提示框，告知用户名不符合要求，并说明要求是 3 到 16 个字母、数字或下划线
      alert('用户名不符合要求，必须为 3 到 16 个字母、数字或下划线。');
	  // 函数直接返回，不再继续执行后续代码
      return;
    }
  
    // 密码验证，如果密码不匹配特定的模式（由 passwordPattern 定义）
    if (!passwordPattern.test(password)) {
      alert('密码不符合要求，至少 8 位，包含小写字母、大写字母和数字。');
      return;
    }
  
    // 确认密码验证，如果输入的密码和确认密码不一致
    if (password!== confirmPassword) {//用户需要再次输入密码以确认其准确性。这是一个安全措施
      alert('两次输入的密码不一致。');
      return;
    }
  
   // 电子邮件验证，如果电子邮件不匹配特定的模式（由 emailPattern 定义）
    if (!emailPattern.test(email)) {
      alert('电子邮件地址格式不正确。');
      return;
    }
    // 如果所有验证都通过，可以进行注册操作（这里只是模拟，实际需要发送请求到服务器）
    alert('注册成功！');
  }

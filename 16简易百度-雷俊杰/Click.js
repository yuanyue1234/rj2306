   var user = new Map([["123", "123"]]);  
  
    function login() {  
          alert('登录成功!')
        var username = document.getElementById("login-username").value;  
        var password = document.getElementById("login-password").value;  
  
        if (user.get(username) === password) {  
            // 注意：使用相对路径或服务器上的URL，而不是本地文件路径  
            window.location.href = "百度主界面.html"; // 假设 loginSuccess.html 在同一目录下  
        } else {  
            alert("用户名或密码错误"); // 修复引号不匹配的问题  
        }  
    }  
	function register(){
		
		var username = document.getElementById("register-username").value;
		var password = document.getElementById("register-password").value;
		  
		    if (!/^[a-zA-Z0-9_]{4,16}$/.test(username)) {  
		        alert("用户名必须为4-16位的字母数字或下划线组合");  
		        return false; // 阻止表单提交  
		    }  
		  
		    // 验证密码（简单示例）  
		    
		     
		        
				if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password.replace(/(?=)/g, ""))) {  
			            alert("密码必须至少8位，且包含至少一个数字、一个小写字母和一个大写字母");    
			            return false; // 阻止表单提交    
			        }  
			 
		  
		
		user.set(username, password);
		alert("注册成功,请登录");
		document.getElementById("register-username").value="";//清空输入框
		document.getElementById("register-password").value="";
		document.getElementById("register-email").value="";
	
	}
document.getElementById('loginForm').addEventListener('submit', function(event) {    
            event.preventDefault(); // 阻止表单的默认提交行为    
  
            // 获取输入值    
            var username = document.getElementById('user').value;    
            var password = document.getElementById('pswd').value;    
  
            // 假设我们的验证逻辑是：用户名必须为"15973049651"，密码必须为"huangyang.123"    
            if (username === '15973049651' && password === 'huangyang.123') {    
                alert('登录成功！');    
                window.location.href = 'http://127.0.0.1:8848/游戏页面/index.html'; // 注意URL编码可能不需要，除非服务器要求  
                // 你可以在这里添加跳转到其他页面的代码，比如：window.location.href = 'dashboard.html';    
            } else {    
                document.getElementById('message').textContent = '用户名或密码错误！';    
            }    
        });  
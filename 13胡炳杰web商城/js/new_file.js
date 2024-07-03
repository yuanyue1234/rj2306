function loginClick(){
      
	  // 获取用户名
      var userName=document.getElementById('user').value
      // 获取密码
      var passwordVal=document.getElementById('password').value
      // 如果用户名等于tydj并且密码等于123456则跳转页面，否则提示账号或密码错误！
      if(userName==='123'&&passwordVal==="123456"){
        location.href = './web.html';//登录成功则跳转到百度页面
      }else{
        alert('账号或密码错误！')
      }
    }

       /* 当window(表示一个包含 DOM 文档的窗口)加载完成时会触发onload事件，也就触发了“匿名函数”，执行函数体内的语句 */ 
	   window.onload= function(){  
            var userName = document.getElementById("Name");  
            var lableName = document.getElementById("lname");  
            var password1 = document.getElementById("Pwd1");  
            var password2 = document.getElementById("Pwd2");  
            var labelPassword1 = document.getElementById("lpass1");  
            var labelPassword2 = document.getElementById("lpass2");  
            var telphone = document.getElementById("telphone");  
            var labelTelphone = document.getElementById("ltelphone");  
            var phone1 = document.getElementById("phone1");  
            var phone2 = document.getElementById("phone2");  
            var phone3 = document.getElementById("phone3");  
            var labelPhone = document.getElementById("lphone");  
            userName.onblur = function(){  
                var nameValue = userName.value;  
                var pattern = /^[a-zA-Z_]\w{5,19}$/g;  
                if(nameValue =="" || nameValue==null){  
                    lableName.innerHTML = "用户名不能为空!";  
                }  
                else if(pattern.test(nameValue)){  
                    lableName.innerHTML = "正确!";  
                }  
                else{  
                    lableName.innerHTML = "数字不能开头,长度在6-20位之间！";  
                }  
            }  
            password1.onblur = function(){  
                var passValue = password1.value;  
                var pattern = /^\w{6,15}$/g;  
                if(pattern.test(passValue)){  
                    labelPassword1.innerHTML = "正确!";  
                }  
                else if(passValue =="" || passValue==null){  
                    labelPassword1.innerHTML = "密码不能为空!";  
                }  
                else{  
                    labelPassword1.innerHTML = "密码长度在6-15位之间！";  
                }  
            }  
            password2.onblur = function(){  
                var pass1Value = password1.value;  
                var pass2Value = password2.value;  
                if(pass2Value =="" || pass2Value==null){  
                    labelPassword2.innerHTML = "密码不能为空!";  
                }  
                else if(pass1Value == pass2Value){  
                    labelPassword2.innerHTML = "输入正确!";  
                }  
                else if(pass1Value!=pass2Value){  
                    labelPassword2.innerHTML = "两次密码输入不一致!";  
                }  
                else{  
                    labelPassword2.innerHTML = "密码长度在6-15位之间！";  
                }  
            }  
            telphone.onblur = function(){  
                var telValue = telphone.value;  
                var pattern = /^1(83|52|38|)\d{8}$/g;  
                if(pattern.test(telValue)){  
                    labelTelphone.innerHTML = "正确!";  
                }  
                else if(telValue =="" || telValue==null){  
                    labelTelphone.innerHTML = "手机号码不能为空!";  
                }  
                else{  
                    labelTelphone.innerHTML = "长度必须11位！";  
                }  
            }  
            phone1.onblur = function(){  
                var phone1Value = phone1.value;  
                var pattern = /^\d{3,4}$/g;  
                if(pattern.test(phone1Value)){  
                    labelPhone.innerHTML = "区号正确!";  
                }  
                else if(phone1Value =="" || phone1Value==null){  
                    labelPhone.innerHTML = "区号不能为空!";  
                }  
                else{  
                    labelPhone.innerHTML = "区号必须3-4位！";  
                }  
            }  
            phone2.onblur = function(){  
                var phone2Value = phone2.value;  
                var pattern = /^\d{7,8}$/g;  
                if(pattern.test(phone2Value)){  
                    labelPhone.innerHTML = "号码正确!";  
                }  
                else if(phone2Value == "" || phone2Value == null){  
                    labelPhone.innerHTML = "号码不能为空!";  
                }  
                else{  
                    labelPhone.innerHTML = "号码必须7-8位！";  
                }  
            }  
            phone3.onblur = function(){  
                var phone3Value = phone3.value;  
                var pattern = /^(\d{1,4})?$/g;  
                if(pattern.test(phone3Value)){  
                    labelPhone.innerHTML = "正确!";  
                }  
                else{  
                    labelPhone.innerHTML = "错误！";  
                }  
            }  

        }  
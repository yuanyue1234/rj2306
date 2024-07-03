	// var 关键字声明了一个变量 eprve ，并通过 document.querySelector('.prev') 来获取页面中具有 .prev 类的第一个元素，并将其赋值给 eprve
	var eprve = document.querySelector('.prev');
			var enext = document.querySelector('.next');
			// 获取esico元素组,组里有四个li元素
			
								// 通过元素的 ID 获取元素    通过标签名获取元素的集合
			var esico = document.getElementById('icolist').getElementsByTagName('li');
			// 使用 document~获取具有 id 为 icolist 的元素，然后通过该元素调用get~方法获取其内部所有的 <li> 元素，并将结果存储在变量 esico 中
			// 获取圆点列表元素
			var eicolist = document.querySelector('#icolist');
			                       // 获取页面中具有 id 为 icolist 的元素，并将其赋值给变量 icolist
			var left = 0;
			var timer;
			run();
			// 做滚动函数run,通过样式marginleft进行移动
			function run() {
				if (left <= -3200) { //如果滚动完,重新开始,重置left值
					left = 0;
				}
				// 创建变量m获取当前图片序号
				var m = Math.floor(-left / 800);
				  // 计算了 `-left` 除以 `800` 的向下取整结果，并将其存储在变量 `m` 中
				imglist.style.marginLeft = left + 'px';
				// 设置了 `imglist` 元素的左边距为 `left` 像素。
				var n = (left % 800 == 0) ? n = 1200 : n = 10; //添加变量n,滚完一张图停1200毫秒
				// 这里定义了变量 `n` ，根据 `left` 除以 `800` 的余数是否为 `0` 来决定 `n` 的值。如果余数为 `0` ，`n` 被赋值为 `1200` ；否则，`n` 被赋值为 `10` 。
				// 4. `left -= 10;`：每过一次执行，`left` 的值减少 `10` 。
				left -= 10; // 每10毫秒进行一次run,每次偏移left累积-10
				timer = setTimeout(run, n); //添加变量n
				// 在run函数调用icochange进行小圆点变化
				icochange(m);
			}
			// 做一个图片定位函数
			function imgchange(n) {
				let lt = -(n * 800);
				// 通过将传入的参数 `n` 乘以 `800` 并取其负值，将结果存储在变量 `lt` 中
				imglist.style.marginLeft = lt + 'px';
				// 设置了 `imglist` 元素的左边距为计算得到的 `lt` 值（以像素为单位）
				left = lt;
				 // `lt` 值赋给了全局变量 `left`
			}
			// 测试这两个按钮的单击事件效果
			eprve.onclick = function() { //鼠标的作用
				// 获取当前位置,减去1,就是上一张
				let prevgo = Math.floor(-left / 800) - 1;
				if (prevgo == -1) {
					prevgo = 3;
				}
				imgchange(prevgo);
			}
			enext.onclick = function() {
				// 获取当前位置,加1,就是下一张
				let nextgo = Math.floor(-left / 800) + 1;
				// 计算当前位置除以 `800` 的向下取整结果，然后加 `1` ，得到下一张图片的索引位置，并存储在变量 `nextgo` 中
				if (nextgo == 4) {
					nextgo = 0;
					// 这是一个边界处理，如果计算得到的下一张图片索引为 `4` （可能表示总共只有 4 张图片），则将其重置为 `0` ，实现循环滚动
				}
				imgchange(nextgo);
				// 调用 `imgchange` 函数，并传入计算得到的下一张图片的索引 `nextgo` ，来进行图片位置的更改
			}

			function icochange(m) {
				// 通过for循环所有li元素背景色清空
				for (let index = 0; index < esico.length; index++) {
					esico[index].style.backgroundColor = '';
				}
				// 当前图片所在的小圆点设置背景色为红色
				if (m < esico.length) {
					esico[m].style.backgroundColor = 'red';
				}
			}
			
			function register() {
				 // 通过元素的 id 属性值获取页面中特定元素的值，并将其赋值给变量 username
			     var username = document.getElementById('username').value;
			     var password = document.getElementById('password').value;
			     var email = document.getElementById('email').value;
			
			     // 用户名验证（至少 4 个字符，只能包含字母、数字和下划线）
			     var usernameRegex = /^[a-zA-Z0-9_]{4,}$/;
				  // 必须以字母开头，后面可以跟字母、数字、下划线和连字符，长度在 4-个字符之间
			     if (!usernameRegex.test(username)) {
			       alert('用户名不符合要求，至少 4 个字符，只能包含字母、数字和下划线');
			       return;
			     }
			
			     // 密码验证（至少 6 个字符，包含字母、数字和特殊字符）
			     var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
			     if (!passwordRegex.test(password)) {
			       alert('密码不符合要求，至少 6 个字符，包含字母、数字和特殊字符');
			       return;
			     }
			
			     // 邮箱验证
			     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				  // ^ 表示匹配字符串的开头
				  // [^\s@]+ 表示匹配一个或多个非空格和非 @ 的字符
				  // @ 则是匹配字符 @ 本身。
				  // 接着 [^\s@]+ 再次匹配一个或多个非空格和非 @ 的字符。
				  // \. 匹配一个点 . 。
				  // 最后的 [^\s@]+ 匹配一个或多个非空格和非 @ 的字符。
				  // $ 表示匹配字符串的结尾。
			     if (!emailRegex.test(email)) {
			       alert('邮箱格式不正确');
			       return;
			     }
			
			     // 假设验证通过，进行注册逻辑（这里只是模拟提示）
			     alert('注册成功！');
			   }
			   
			   // 获取选项元素
			   var options = document.getElementsByTagName('option');
			   
			   // 遍历选项
			   for (var i = 0; i < options.length; i++) {
			       var option = options[i];
			   
			       // 获取选项的值
			       var value = option.value;
			   
			       // 根据值进行不同的操作
			       if (value === '1') {
			           // 处理配方的逻辑
			           console.log('这是配方选项');
			       } else if (value.startsWith('https://baike.baidu.com/item/')) {
			           // 处理茶的链接
			           console.log('这是茶的链接选项');
			       } else if (value.startsWith('https://haokan.baidu.com/v?pd=wisenatural&vid=')) {
			           // 处理蛋糕或咖啡的视频链接
			           if (value.includes('16651656177310058553')) {
			               console.log('这是蛋糕的视频链接选项');
			           } else if (value.includes('9751820214937290570')) {
			               console.log('这是咖啡的视频链接选项');
			           }
			       }
			   }
function handleOptionChange() {
				var selectElement = document.getElementById('choss');
				var selectedValue = selectElement.value;
				console.log("选中的选项值：", selectedValue);
				
				switch (selectedValue) {
				    case '1':
				      alert('忘记密码操作');
				      break;
				    case '2':
				      alert('找回密码操作');
				      break;
				    case '3':
				      alert('冻结账号操作');
				      break;
				    default:
				      alert('请选择一个操作');
				  }
				}
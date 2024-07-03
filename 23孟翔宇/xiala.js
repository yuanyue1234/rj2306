document.addEventListener('DOMContentLoaded', function() {
		        var navs = document.querySelector('.navs');
		        var naver= document.getElementById('dropdown-container');
		//监听 mouseover:鼠标单击进入事件 
		        navs.addEventListener('mouseover', function() {
					naver.style.display = 'block';
		        });				//显示
				//监听 mouseout:鼠标单击出去事件 
		        navs.addEventListener('mouseout', function() {
		            naver.style.display = 'none';
		        });
		    });
			
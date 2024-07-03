window.onload = function(){//页面切换
	var item = document.getElementsByClassName("item");
	var it = item[0].getElementsByTagName("div");
	////获取页面上所有类名为 "item" 的元素，并将它们存储在 item 变量中

	var content = document.getElementsByClassName("content");
	//获取页面上所有类名为 "content" 的元素，并将它们存储在 content 变量中
	var con = content[0].getElementsByTagName("div");

	for(let i=0;i<it.length;i++){
		it[i].onclick = function(){
			for(let j=0;j<it.length;j++){
			it[j].className = '';
			con[j].style.display = "none";
			}
			this.className = "active";
			it[i].index=i;
			con[i].style.display="block";
		}
	}
}
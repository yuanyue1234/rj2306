var nav = document.querySelector('.nav');
var lis = nav.children;
console.log(nav);
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseover = function() {
		this.children[1].style.display = 'block';
	}
	lis[i].onmouseleave = function() {
		this.children[1].style.display = 'none';
	}
}
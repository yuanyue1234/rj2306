let nav = document.querySelectorAll('.nav1');
	        for(let i=0; i<nav.length; i++) {
	            nav[i].addEventListener('mouseover', function() {
	                this.children[1].style.display = "block";
	            });
	            nav[i].addEventListener('mouseout', function() {
	                this.children[1].style.display = "none";
	            });
	        }
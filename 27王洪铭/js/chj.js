document.addEventListener('DOMContentLoaded', function() {
    var Oul = document.querySelector('.ulone');
    var imgs = document.querySelectorAll('.img1, .img2, .img3');
    var slideWidth = 320; // 每次移动的像素宽度
    var currentLeft = 0; // 当前的左偏移量
    var autoPlayInterval;
    var Ol = document.querySelector('.left');
    var Or = document.querySelector('.right');

    function updatePosition(left) {
        // 设置过渡效果，并更新ul的位置
        Oul.style.transition = 'transform 0.5s ease';
        Oul.style.transform = 'translateX(' + left + 'px)';
    }

    function autoPlay() {
        // 自动播放函数，每次向右移动320像素
        autoPlayInterval = setInterval(function() {
            if (currentLeft >= (imgs.length - 1) * slideWidth) {
                currentLeft = 0; // 如果超出最右边界，回到最左边
            }
            currentLeft += slideWidth;
            updatePosition(-currentLeft);
        }, 3000);
    }

    function stopAutoPlay() {
        // 停止自动播放
        clearInterval(autoPlayInterval);
    }

    Ol.addEventListener('click', function() {
        stopAutoPlay();
        // 当前位置向左移动320像素，如果超出左边界则回到最右边
        currentLeft -= slideWidth;
        if (currentLeft < 0) {
            currentLeft = (imgs.length - 1) * slideWidth;
        }
        updatePosition(-currentLeft);
    });

    Or.addEventListener('click', function() {
        stopAutoPlay();
        // 当前位置向右移动320像素，如果超出右边界则回到最左边
        currentLeft += slideWidth;
        if (currentLeft > (imgs.length - 1) * slideWidth) {
            currentLeft = 0;
        }
        updatePosition(-currentLeft);
    });

    // 鼠标悬停暂停轮播
    Oul.addEventListener('mouseover', stopAutoPlay);
    Oul.addEventListener('mouseout', autoPlay);

    // 初始化轮播图位置
    updatePosition(currentLeft);
    autoPlay();
});
// ---------------------------------------------------------------------------------------------------
let mobileDem = document.getElementById('.mobile');
let mobileTip = document.getElementById('.mobileTip');
let codeMsg = document.getElementById('.codeMsg');

function checkMobile(){
	let mobile = mobileDem.value;
	if(!mobile){
		mobileDem.classList.add(".warn");
		mobileTip.innerText = "请输入手机号";
		return false;
	}
	let myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if(!myreg.test(mobile)){
		mobileDem.classList.add(".warn");
		mobileTip.innerText = "手机格式错误";
		return false;
	}else{
		mobileDem.classList.remove(".warn");
		codeMsg.classList.remove(".dis");
		mobileTip.innerText = "";
		return true;
	}
}
	let codeDom = document.getElementById(".code");
	let codeTip = document.getElementById(".codeTip");
	let submit = document.getElementById(".submit")
	
	function checkCode(){
		let ifMobile = checkMobile();
		if(!ifMobile){
			return;
		}
		let code = codeDom.value;
		if(!code){
			codeDom.classList.add("warn");
			codeTip.innerText = "请输入验证码";
			return false;
		}else{
			codeDom.classList.remove("warn");
			codeTip.innerText = "";
		}
		submit.classList.remove("dis");
		return true;
	}
	let flag = false;
	let sec = 60;
	
	function getCode(){
		if(flag){
			return;
		}
		let ifMobile = checkMobile();
		if(!ifMobile){
			return;
		}
		codeMsg.innerText = "60s";
		countF();
	}
	function countF(){
		flag = true;
		sec--;
		codeMsg.innerText = sec + "s";
		setTimeout(function(){
			if(sec == 0){
				codeMsg.innerText = "重新获取"
				flag = false;
				sec = 60;
			}else{
				countF();
			}
			
		},1000)
	}
	function loginF(){
		if(checkMobile() && checkCode()){
			alert("登录成功！");
			windowlocationhref = "chj2.html"
		}
	}
	
	
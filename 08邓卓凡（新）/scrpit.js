// 姓名验证正则表达式（只允许字母和空格）
function validateName(input) {
  let regex = /^[A-Za-z\s]+$/;
  if (regex.test(input.value)) {
    document.getElementById('nameError').innerHTML = '';
    enableSubmitIfAllValid();
  } else {
    document.getElementById('nameError').innerHTML = '姓名只能包含字母和空格';
    disableSubmitButton();
  }
}

// 邮箱验证正则表达式
function validateEmail(input) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(input.value)) {
    document.getElementById('emailError').innerHTML = '';
    enableSubmitIfAllValid();
  } else {
    document.getElementById('emailError').innerHTML = '请输入有效的邮箱地址';
    disableSubmitButton();
  }
}

// 密码验证正则表达式（至少 6 个字符）
function validatePassword(input) {
  let regex = /^.{6,}$/;
  if (regex.test(input.value)) {
    document.getElementById('passwordError').innerHTML = '';
    enableSubmitIfAllValid();
  } else {
    document.getElementById('passwordError').innerHTML = '密码至少 6 个字符';
    disableSubmitButton();
  }
}

function enableSubmitIfAllValid() {
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');

  if (nameInput.value && emailInput.value && passwordInput.value) {
    document.getElementById('submitBtn').disabled = false;
  }
}

function disableSubmitButton() {
  document.getElementById('submitBtn').disabled = true;
}

// 新增轮播图自动切换功能
let sliderImages = document.querySelectorAll('.slider img');
let currentImage = 0;

function autoSlide() {
  console.log('切换轮播图，当前索引:', currentImage);
  sliderImages[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % sliderImages.length;
  sliderImages[currentImage].classList.add('active');
}

setInterval(autoSlide, 3000);
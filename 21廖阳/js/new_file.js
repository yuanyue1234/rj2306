// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // 下拉菜单交互
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener('click', function(event) {
            var dropdownContent = this.querySelector(".dropdown-content");
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
});
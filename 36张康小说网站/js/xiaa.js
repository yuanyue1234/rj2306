
  // 获取元素
     var ullist = document.querySelector('.ullist');
     var lis = ullist.children;
     console.log(ullist);
     // 循环注册事件
     for (var i = 0; i < lis.length; i++) {
         lis[i].onmouseover = function() {
             this.children[1].style.display = 'block'; //里面的ul是他的第二个孩子
         }
         lis[i].onmouseleave = function() {
             this.children[1].style.display = 'none'; //里面的ul是他的第二个孩子
         }
     }


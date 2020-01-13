var tabBox = document.getElementById('tabBox');
var tabLits = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navLits = navBox.getElementsByTagName('li');
//===============解决办法一:自定义属性解决方法  =>myIndex ===================

//循环三个LI 给每一个LI都绑定点击事件

for (var i = 0; i < navLits.length; i++) {
    // navLits[i]:当前循环下我们要操作的哪个LI(I变量存储的值是我们需要获取指定元素的索引)
    //在循环给没个LI绑定点击事件的时候,我们给每一个LI(元素对象)设置一个自定义属性
    console.log(navLits[i]);
    navLits[i].myIndex = i;
    navLits[i].onclick = function() {
        //我想用的点击这个li的索引,但是i不是
        //this是当前点击这个元素li,this.myIndex获取的就是之前绑定在元素自定义属性上的索引值
        changeTab(this.myIndex);
    };
}
/* 
========================其他方式========
//闭包解决方案

navLits[i].onclick = (ifunction() {
        
        changeTab(this.myIndex);
    })(i);


*/

//es6中的let解决方案
//var 改 let
for (let i = 0; i < navLits.liength; i++) {
    navLits[i].onclick = function() {
        changeTab(i);
    };
}

/* 
只有js代码加载完成才能看到页面,只有看到页面用户才能点击

加载到循环 i=0 i<3 i++
i=0   navLits[0].onclick = function() {...};绑定事件的时候方放没有执行,点击第一个li的时候它才执行 i++ ; i++=>1
i=1   navLits[1].onclick = function() {...}; i++=>2
i=2   navLits[2].onclick = function() {...}; i++=>3
3<3 不通过 循环结束,此时 i是3

循环解释看到了页面,用户点击了某一个页卡 接下来开始执行绑定的方法,方法中遇到一个i,但是i已经是循环结束后的3了

*/

//封装一个函数实现切换

//clickIndex:创建函数时候还不知道点谁,所以定义一个入口clickIndex(存储点击这一项的索引),执行方放时候点击这一项的索引传递进来即可
function changeTab(clickIndex) {
    //1. 线上所有li div都没有选中的样式
    for (var i = 0; i < navLits.length; i++) {
        navLits[i].className = '';
        tabLits[i].className = '';
    }

    //2.点击是谁给谁加选中样式
    navLits[clickIndex].className = 'active';
    tabLits[clickIndex].className = 'active';
}

//let tabBox = document.getElementById('tabBox') //=>元素
//let tabBox = document.getElementsByClassName('tabBox') //=>集合

//let tabBox = document.getElementsByClassName('tabBox')[0]

//基于 getElementsByClassName/ getElementsByTagName 获取到的是元素集合,想要操作某一个元素需要在集合中根据索引取出来才可以使用
//querySelector 获取的是一个元素对象,哪怕页面中有多个符合的,也只获取第一个
//querySelectorAll 获取的一个集合,那么只有一个复合,也是一个集合,集合中有一项
//let tabBox = document.querySelector('.tabBox')
//let tabBox = document.querySelectorAll('.tabBox')
//console.log(tabBox);
//gerElementsByTagName 是获取指定上下文后代中所有标签名为N的元素集合
//let navList = tabBox.gerElementsByTagName('li')

/* let tab = tabBox.querySelector('.tab')
let navList = tab.getElementsByTagName('li')
console.log(navList);
 */

//let navList = tabBox.querySelectorAll('.tab li:nth-child(2)')
/* let navList = tabBox.querySelectorAll('.tab li')
let divList = document.querySelectorAll('.tabBox>div')
console.log(navList)
console.log(divList) */

//jQuery一个操作DOM元素的类库




//基于 getElementsByName 主要用于表单
//========================
var sexList = document.getElementsByName('sex');
var submit = document.getElementById('submit');

/* 
var sexList =document.querySelectorAll('[name=sex]')
var submit =document.querySelector('#submit') 
*/



submit.onclick = function() {
    var res = null;
    for (var i = 0; i < sexList.length; i++) {
        var item = sexList[i];
        if (item.checked) {
            res = item.value;
            break;
        }
    }
    alert(res);
};

//let box = document.getElementById('box');
//标准浏览器(非ie6-8)会把空格和换行当作文本节点处理(childNodes)
//console.log(box.childNodes);
//只想要元素节点(但是ie6-8下试用children会把注释也当 )
// console.log(box.children.length);
// console.log(box.children);

/* 
children:获取指定上下文中,所有元素子节点
@params
context[ element object] 指定的上下文元素信息
@return
[array] 返回所有的元素子节点集合
 */
/* function children(context) {
    // 1. 先获取所有的子节点

    var res = [],
        nodeList = context.childNodes;
    //2. 循环遍历所有的子节点(nodeType===1),找出元素子节点,存储到res中即可
    for (var i = 0; i < nodeList.length; i++) {
        var item = nodeList[i];
        item.nodeType === 1 ? res.push(item) : null;
    }
    return res;
} */

//======================
// console.log(box.firstChild);
// console.log(box.firstElementChild);

//======================

var fangqi = document.getElementById('fangqi');
// console.log(fangqi.previousSibling);
// console.log(fangqi.previousElementSibling);

/* 
prev:获取指定上下文中,所有元素子节点
@params
context[ element object] 指定的上下文元素信息
@return
[array] 返回所有的元素子节点集合
 */
function prev(context) {
    // 1. 先找自己的哥哥

    var pre = context.previousSibling;
    //2.如果哥哥不是元素,则找哥哥的哥哥,一直找到的是元素节点为止
    while (pre.nodeType !== 1) {
        pre = pre.previousSibling;
    }
    return pre;
}
console.log(prev(fangqi));

//jQuery中提供一些方法供我们获取元素:children,prev,next,prevAll,nextAll,sibling,siblings,index...

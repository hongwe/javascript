#### JS中的DOM操作-盒子模型属性

> DOM: document object model 文档对象模型,提供系列的属性和方法,放我们能在JS中操作页面中的元素

**获取元素的属性和方法**

```javascript
document.getElementById([ID])
[context].getElementsByTagName([Tag-Name])

document.getElementByName([NAME])//=>在ie中浏览器只对表单元素的NAME有作用
//====================>在ie6-8中不兼容
[context].getElementsByClassName([Class-Name]) /
[context].querySelector([SELECTOR])
[context].querySelectorAll([SELECTOR])

//---------------------
document
document.documentElement
document.head
docyment.body
childNodes 所有子节点
children 所有元素子节点//=>ie6-8中会把注释点当作元素节点获取到
parentNode
firstChild / firstElementChild
lastChild  / lastElementChilde
previousSibling / previousElementSibling  
nextSibling / nextElementSibling  

//=>所有带ELement的 在ie6-8中不兼容
```



**DOM的增删改操作**



```javascript
document.createElement([Tag-Name])
document.createTextNode([TEXT CONTENT])
字符串拼接(模板字符串),然后基于innerHTML/innerText存放到容器中

[PARENT].appendChild([CHILD])
[PARENT].insertBefore([ELEMENT],[NEW-ELEMENT])

[ELEMENT].clonrNode([TRUE/FALSE])
[PARENT].removeChild([ELEMENT])

//=>设置自定义属性

[ELEMENT].xxx =xxx;
console.log([ELEMENT].xxx);
delete [ELEMENT].xxx;

[ELEMENT].setAttribute('xxx',xxx);
console.log([ELEMENT].getAttribute('xxx'));
[ELEMENT].removeAttribute('xxx');

```

**获取元素样式和操作样式**

```javascript
//=>修改元素样式
[ELEMENT].style.xxx = xxx; //=>修改和设置它的行内样式
[ELEMENT].className = xxx; //=>设置样式类

//=>获取元素样式
console.log([ELEMENT].style.xxx) //=> 获取的是当前元素卸载行内的样式,如果有这个样式,但是没有写在行内上,则获取不到
let w = box.style.width
```



**JS盒子模型属性式**

> 基于一些属性和方法,让我们能够获取到当前元素的样式信息,例如:clientWidth,offsetWidth等
>
> - client
>   - width /height
>   - top/left
> - offset
>   - width/height
>   - top/left
>   - parent
> - scroll
>   - width /height
>   - top/left
>
> 方法:window.getComputedStyle([ELEMENT],[伪类]) / [ELEMENT].currentStyle





```javascript
let box = document.getElementById('box')
//=> 获取盒子可视区域的宽高 (内容宽度+左右padding)
//1. 内容溢出与否对他无影响
//2.获取的结果是没有单位的(其余的盒模型属性也是)
//3.获取的结果是整数,它会自己进行四舍五入(其余盒模)
box.clientWidth
box.clientHeight

//获取当前页面一屏幕(可视化)区域的宽高
let winW = document.documentElement.clientWidth || document.body.clientWidth;
let winH = document.documentElement.clientHeight || document.body.clientHeight;

//获取盒子左边框和上边框的大小(IE8有区别)
box.clientLeft
box.clientTop

```

![](\css盒子模型.gif)

```javascript
let box = document.getElementById('box')

//=>在CLIENT 的基础上加上BORDER == 盒子本身的宽高
box.offsetWidth
box.offsetHeight


//=>在没有内容溢出的情况下,获取的结果和CLIENT一样的
//=>在没有内容溢出的情况下,获取的结果约等于真是内容宽高(上 / 左 padding +正式内容的高度/宽度) 
//1. 不同浏览器获取的结果不尽相同
//2. 设置overflow 属性值对最后的结果产生一定的影响
box.scrollWidth
box.scrollHeight

//获取整个页面真实的高度
document.documentElement.scrollHeight || document.body.scrollHeight
```



```javascript
let box = document.getElementById('box')

//=>竖向滚动条卷去的高度
//=>横向滚动条卷去的宽度
//=>1.边界值
//=>min = 0
//=> max = 整个的高度scrollHeight - 屏幕高度clientHeight
box.scrollTop
box.scrollLeft
//=> 13个盒子模型属性,只有这两个是 '可读写'的属性(既可以获取 也可以设置对应的值),其余都是'只读'属性(不能设置值,只能获取)
box.scrollTop = 0;

```

```javascript
//=>offsetParent: 获取它的父参照物(不一定是父元素)
//父参照物和它的父元素没有必然的联系,父参照物查找:同一个平面中,最外层元素是所有后代元素的父参照物,而基于 position:relative/absolute/fixed 可以让元素脱离文档流(一个新的平面),从而改变元素的父参照物
document.body.offsetParent = null
//=>offsetTop: 距离其夫参照物的上偏移
//=>offsetLeft: 距离其夫参照物的左偏移(当前元素的外边框到服参照物的里边框)
```

![](\元素偏移值.gif)





**getComputedStyle / currentStyle**

> 获取当前元素经过浏览器计算过的样式
>
> - 只要元素在页面中呈现出来,那么所有样式都是经过浏览器计算的
> - 哪怕你没有设置和见过的样式也都计算了
> - 不管你写或者不写,也不论写在哪,样式都在这,可以直接获取
>
> 在ie6-8浏览器中不兼容,需要基于currenStyle来获取



```javascript
//=>第一个参数是操作元素,是第二个参数是元素的伪类:after/:before
//=>获取的结果是 CSSStyleDeclaration这个类的的实例,包含了当前元素的所有样式信息
let styleObj window.getComputedStyle([element],null)
styleObj['backroundColor']
styleObj.display

//=>ie6-8
styleObj = [element].currentStyle;
```


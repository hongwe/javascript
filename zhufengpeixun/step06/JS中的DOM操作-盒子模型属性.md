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
> - scrllo
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

//获取盒子左边框和上边框的大小
box.clientLeft
box.clientTop

```

![](D:\github\javascript\zhufengpeixun\step06\css盒子模型.gif)

```javascript
let box = document.getElementById('box')

//=>在CLIENT 的基础上加上BORDER == 盒子本身的宽高
box.offsetWidth
box.offsetHeight


//=>在没有内容溢出的情况下,获取的结果和CLIENT一样的
//=>在没有内容溢出的情况下,获取的结果约等于真是内容宽高(上 / 左 padding +正式内容的高度/宽度) 
//1. 不同浏览器获取的结果不尽相同
//2. 设置overglow 属性值对最后的结果产生一定的影响
box.scrollWidth
box.scrollHeight
```


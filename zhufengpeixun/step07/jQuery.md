**jQuery的概括**

> 一款伟大的 用原生js封装的,`操作DOM`的类库:它里面封装了大量的方法(在原先的版本中v1.xxx,这些方法兼容所有的浏览器),基于这些方法 我们可以快熟的进行DOM操作和项目开发



如何学习JQ

- 看API文档

  http://jquery.cuishifeng.cn/

- 看书籍

  锋利的jQuery第二版

- 大量做案例

  在学习阶段,案例可以用原生js做一遍,再用jq做一边

- 学习JQ源码

  - 更好的掌握JQ的应用,写出高性能可以扩展的项目代码
  - 让自己JS能力 ,尤其是组件插件等封装的能力直接上一个新台阶

JQ的三大版本

- v1.xxx  第一代版本

  - jquery-1.11.3.min.js

  第一代版本的特点:大而全,方法是兼容所有浏览器(包括IE6),主要应用与需要考虑兼容的pc端项目中

- v2.xxx 第二代版本

  主要是为移动端开发准备的2,不在兼容低版本浏览器(例如:ie8以下),配合出现的还有 jQuery mobile等ui库.但是,第二代版本在移动端方法的处理不如 Zepto.js

- v3.xxx 第三代版本

  也不再兼容IE低版本浏览器了,它从性能等方面都要比之前的强,但是生不逢时,此时正好是 angular/ vue/ react这种框架崛起的时代,大家已经能不在基于操作DOM的思想开发了 ,JQ也就慢慢退出舞台



#### JQ中常用的方法

```javascript
//=> 1.获取DOM的元素
//操作方法 JQ选择器(根据选择器类型快速获取需要的元素)
$([selector].[context])
	$('#box')
	$('.imgBox')
	$('.box a')
	$('a', box)
// JQ支持选择器:传统css3中大部分都支持,还支持一些自己独有的
--------------------------
:eq(n) 获取集合中索引为n的
:gt(n) 大于这个索引的
:lt(n) 小于这个索引
--------------------------
let bod = document.getElementsByClassName('box')[0];
let links = box.getElementsByTagName('a')
links = document.querySelectorAll('.box a')
links = box.querySelectorAll('a') 

//节点之间的关系的属性,用JQ选择去获取的元素,我们设置变量名的时候 一般都以$开始
//=> 还可以再设置选择器二次筛选
let $box = $('.box')
$box.children('a') //=> 获取对应的子元素
$box.find('a') //=> 获取对应的后代元素
$('a').filter('.active') //=> 同级筛选(在所有A中筛选出只具备class = active 样式类的a)
$box.prev()
$box.prev('p') //=> 获取它上一个标签名为p的哥哥
$box.prevAll()
$box.next()
$box.nextAll()
$box.siblings() //=> 获取所有的兄弟
$box.index()//=> 获取索引s
$box.parent()//=> 获取父元素
$box.parents()//=> 获取所有祖先元素,一直到document



//=> 2. DOM增删改

let str = "<div id = "box" class = "box"></div>"
$('body').append(str)//=> 追加到容器末尾
$('body').html(str)//=> 等价 innerHTML
$('body').html()//=> 不传参是获取BODY中的HTML内容,除了这个方法还有text方法,等价于innerText
$link.insertBefore(str)//=> 把其放到$link元素的前面
$link.insertAfter(str)//=> 把其放到$link元素的后面
let divBox = document.createElement('div');
divBox.id = ('box');
divBox.className = ('box')

let str = '<div id = "box" class = "box"></div>'
document.body.innerHTML = str;




```


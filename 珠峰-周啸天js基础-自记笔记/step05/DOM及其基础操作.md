#### DOM 及其基础操作

> DOM : document object model 文档对象模型,提供一些属性和方法供我们操作页面中的元素

获取 DOM 元素的方法

-   document.getElementById() 指定在文档中,基于元素的 id 或者这个元素对象
-   [context].getElementsByTagName()指定上下文(容器)中,通过标签名获取一组元素集合
-   [context].getElementsByClassName()指定上下文(容器)中,通过样式名获取一组元素集合(不兼容 IE6,7,8)
-   document.getElementByName() 指定在文档中,通过标签的 NAME 属性值获取一组节点集合(在 IE 中只有表单的 NAME 才能识别,所以我们一般只应用于表单元素的处理)
-   document.head/ document.body / document.documentElement 获取页面中的 HEAD/BODY/HTML 三个元素
-   `[context].querySelector([selector])`在指定上下文中,通过选择器获取到指定的元素对象
-   `[context].querySelectorAll([selector])`在指定上下文中,通过选择器获取到指定的元素集合

```javascript
//=> querySelector/querySelectorAll 不兼容IE6
let box = document.getElementById('box');
//=>let box = document.querySelector('#box')
let links = box.getElementsByTagName('a');
//=>let links = box.querySelectorAll('a')
//=>let links = box.querySelectorAll('#box a')
let aas = document.getElementsByClassName('aa');
//=>let aas = document.querySelectorAll('.aa')
```

**js 中节点和描述节点之间关系的属性**

> 节点: Node(页面中所有东西都是节点)
>
> 节点集合:NodeList(getElementsByName/querySelectorAll 获取的都是节点集合)

-   元素节点(元素标签)
    -   nodeType:1
    -   nodeName:大写的标签名
    -   nodeValue:null
-   文本节点
    -   nodeType:3
    -   nodeName:'#text'
    -   nodeValue:文本内容
-   注释节点
    -   nodeType:8
    -   nodeName:'#commen'
    -   nodeValue:注释内容
-   文档节点 document
    -   nodeType:9
    -   nodeName:'#document'
    -   nodeValue:null
-   ......

描述这些节点之间的关系属性

-   childNodes:获取所有的子节点
-   children:获取所有的元素子节点(子元素标签)
-   firstChild:获取第一个子节点
-   lastChild:获取最后一个子节点
-   firstElementChild/lastElementChild:获取第一个和最后一个元素子节点(不兼容 IE6-8)
-   previousSibling:获取上一个哥哥节点
-   nextSibling:获取下一个弟弟节点
-   previousElementSibling/nextElementSibling :获取哥哥和弟弟元素节点(不兼容 ie6-8)
-

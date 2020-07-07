DOM (Document Object Model) 译为文档对象模型

DOM Nodes
DOM 节点
整个文档是一个文档节点
每个 HTML 元素是元素节点
HTML 元素内的文本是文本节点
每个 HTML 属性是属性节点
注释是注释节点

    父（parent）、子（child）和同胞（sibling）等术语来描述这些关系
        在节点树中，顶端节点被称为根（root）。
        每个节点都有父节点、除了根（它没有父节点）。
        一个节点可拥有任意数量的子节点。
        同胞是拥有相同父节点的节点。



HTML 事件的例子：

当用户点击鼠标时
当网页已加载时
当图片已加载时
当鼠标移动到元素上时
当输入字段被改变时
当 HTML 表单被提交时
当用户触发按键时


onload 和 onunload 事件 :用户进入或离开页面时，会触发 onload 和 onunload 事件
onchange 事件 :常用于输入字段的验证
onmouseover 和 onmouseout 事件 :移动到或离开元素时触发函数
onmousedown、onmouseup 以及 onclick 事件 :onmousedown、onmouseup 以及 onclick 事件是鼠标点击的全部过程。首先当某个鼠标按钮被点击时，触发 onmousedown 事件，然后，当鼠标按钮被松开时，会触发 onmouseup 事件，最后，当鼠标点击完成时，触发 onclick 事件。


HTML DOM 实例
```javascript
document.write("Hello World!") //输出文本

document.write(document.anchors.length); //返回文档中锚的数目
document.write(document.anchors[0].innerHTML); //返回文档中第一个锚的 innerHTML
document.write(document.forms.length); //返回文档中表单数
document.write(document.forms[0].name); //返回文档中第一个表单的名字
document.write(document.images.length); //返回文档中第一个表单的名字
document.write(document.images[0].id); //返回文档中第一个图像的ID
document.write(document.links.length); //返回文档中的链接数
document.write(document.links[0].id); //返回文档中的第一个链接的ID
document.write(document.cookie);//返回文档中的所有cookies的名称/值对
document.write(document.domain);//返回加载的文档的服务器域名
document.write(document.domain);//返回文档的最后一次修改时间
document.write(document.lastModified);//返回文档的最后一次修改时间
document.write(document.referrer);//返回加载的当前文档的URL
document.write(document.title);//返回文档的标题
document.write(document.URL);//返回文档的完整的URL
```
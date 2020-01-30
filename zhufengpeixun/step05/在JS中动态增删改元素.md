#### 在 JS 中动态增删改元素

`createElement` 创建元素对象

`createTextNode` 创建文本对象

`appendChild` :把元素添加到容器末尾

`insertBefore` :把元素添加到指定容器中指定元素前面

```javascript
//动态创建一个div元素对象,把其付给box
let box = document.createElement('div');
box.id = 'boxAcrive';
box.style.width = '200px';
box.style.height = '200px';
box.className = 'red';
//动态创建一个文本
let text = document.createTextNode('珠峰培训');

//添加 : 容器.appendChild(元素)
box.appendChild(text);
//document.body.appendChild(box);

//放到指定元素前: 容器.insertBefore([新增元素],[指定元素])
let haha = document.getElementById('haha');
//haha.parentNode.insertBefore(box,haha)
document.body.insertBefore(box, haha);
```



`cloneNode(true/false)` 克隆元素或节点





`removeChild` 移除某一个元素
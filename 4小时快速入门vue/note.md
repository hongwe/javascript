## 入门 vue

### 01 课程简介

### 02 Vue 基础-简介

### 03 Vue 基础

### 04 Vue 基础 el 挂载点

### 05 Vue 基础 data 数据对象

### 06 本地应用

### 07 本地应用

v-text

### 16 本地应用 v-on 补充
传递自定义参数,事件修饰符
```javascript
<div id="app">
    <input type="button" @clikc= "doIt(666,'老铁')"/>
    <input type="button" @keyup.enter = "sayHi"/>
</div>

var app = new Vue({
                el: '#app',
                data: {
                },
                methods: {
                    doIt: function(p1,p2){},
                    sayHi: function() {}
                }
            });

```

### 17 本地应用 v-model

获取和设置表单元素的值(双向数据绑定)

```javascript
<div id="app">
    <input type="text" v-model="message" />
</div>

var app = new Vue({
                el: '#app',
                data: {
                },
                methods: {
                    message: "黑马"
                   
                }
            });
```

### 小黑记事本 

1. 列表结构可以通过v-for指令结合数据生成
2. v-on结合事情修饰符可以对事件进行限制,比如.enter
3. v-on在绑定事件时可以传递自定义参数
4. 通过v-model可以快速的设置和获取表单的元素的值
5. 基于数据的开发方式


```html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8" />

        <title>小黑记事本</title>
    </head>
    <body>
        <!-- 
            1. 新增
                生成列表结构（v-for 数组）
                获取用户输入（v-model ）
                回车，新增数据（v-on .enter 添加数据）
            2. 删除
                点击删除指定内容(v-on splice 索引)
                    数据改变,和数据绑定的元素同步改变
                    时间的自定义参数
                    solice的方法和使用
            3. 统计
                统计信息个数 (v-text length)
                    基于数据的开发方式
                    v-text的使用
            4. 清空
                点击清除所有信息(v-on 清空数组)
                基于数据的开发方式
            5. 隐藏
                没有数据时,隐藏元素(v-show v-if 数组非空)
         -->
        <!-- 主体区域 -->
        <section id="todoapp">
            <herder class="herder">
                <h1>小黑技术本</h1>
                <input
                    v-model="inputValue"
                    type="text"
                    autofocus="off"
                    placeholder="请输入任务"
                    class="new-todo"
                    @keyup.enter="add"
                />
            </herder>
            <!-- 列表区域 -->
            <section class="main">
                <ul class="todo-list">
                    <li class="todo" v-for="(item, index) in list">
                        <div class="view">
                            <span class="index">{{index + 1}}</span>
                            <label>{{item}}</label>
                            <button class="destroy" @click="remove(index)">
                                x
                            </button>
                        </div>
                    </li>
                </ul>
            </section>
            <!-- 统计和清空 -->
            <footer class="footer">
                <span class="todo-count" v-if="list.length!=0"><strong>{{list.length}}</strong>item left</span>
                <button class="clear-completed" @click="clear" v-show="list.length!=0">Clear</button>
            </footer>
        </section>
        <script src="vue.js"></script>
        <script>
            var app = new Vue({
                el: '#todoapp',
                data: {
                    list: ['写代码', '吃饭饭', '睡觉觉'],
                    inputValue: '好好学习,天天向上'
                },
                methods: {
                    add: function() {
                        this.list.push(this.inputValue);
                    },
                    remove: function(index) {
                        this.list.splice(index, 1);
                    },
                    clear:function(){
                        this.list = []
                    }
                }
            });
        </script>
    </body>
</html>

```


###  axios

功能强大的网络请求库

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

//axios.get(地址?查询字符串).then(function(response){},function(err){})

axios.get(地址?key=value&key2=value2).then(function(response){},function(err){})
axios.post(地址,{key:value,key2:value2}).then(function(response){},function(err){})
```

- axios必须先导入才可以使用
- 使用get或者post方法即可发送对应的请求
- 和方法中的回调函数会在请求成功或失败时候触发
- 通过回调函数的形参可以获取响应内容,或者错误的信息

文档传送门
https://github.com/axios/axios


###  axios +vue

- axios回调函数中的this 已经改变,无法访问data中数据
- 把this保存起来,回调函数中直接使用保存的this即可
- 和本地数据的区别就是改变了数据来源



###  天知道实例

1. 回车查询
    -   应用的逻辑代码建议和页面分离,使用单独js文件编写
    -   axios回调函数中指向改变了,需要额外的保存一份
    -   服务器返回的数据比较复杂是,获取的时候需要注意层级结构

2. 点击查询
    - 点击城市 (v-on 自定义参数)
    - 查询数据
    - 渲染数据
自定义参数可以让代码的复用性更高
methods中定义的方法内部,可以通过this关键字点出其他的方法

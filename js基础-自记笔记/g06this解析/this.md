## this 关键字

-   简单说，this 就是属性或方法“当前”所在的对象

```javascript
this.property;
//this就代表property属性当前所在的对象
```

```javascript
var person = {
    name: '张三',
    describe: function () {
        return '姓名：' + this.name;
    },
};

person.describe();
// "姓名：张三"

// /this.name表示name属性所在的那个对象
```

```javascript
var A = {
    name: '张三',
    describe: function () {
        return '姓名：' + this.name;
    },
};

var B = {
    name: '李四',
};

B.describe = A.describe;
B.describe();
// "姓名：李四"

//A.describe属性被赋给B，于是B.describe就表示describe方法所在的当前对象是B，所以this.name就指向B.name

//重构
function f() {
    return '姓名：' + this.name;
}

var A = {
    name: '张三',
    describe: f,
};

var B = {
    name: '李四',
    describe: f,
};

A.describe(); // "姓名：张三"
B.describe(); // "姓名：李四"
```

-   只要函数被赋给另一个变量，this 的指向就会变。

```javascript
var A = {
    name: '张三',
    describe: function () {
        return '姓名：' + this.name;
    },
};

var name = '李四';
var f = A.describe;
f(); // "姓名：李四"

//A.describe被赋值给变量f，内部的this就会指向f运行时所在的对象（本例是顶层对象）
```

**_ 总结一下，JavaScript 语言之中，一切皆对象，运行环境也是对象，所以函数都是在某个对象之中运行，this 就是函数运行时所在的对象（环境）。这本来并不会让用户糊涂，但是 JavaScript 支持运行环境动态切换，也就是说，this 的指向是动态的，没有办法事先确定到底指向哪个对象，这才是最让初学者感到困惑的地方。 _**

### 使用场合

#### 全局环境

-   全局环境使用 this，它指的就是顶层对象 window

```javascript
this === window; // true

function f() {
    console.log(this === window);
}
f(); // true
```


#### 构造函数

- 构造函数中的this，指的是实例对象。
```javascript
this === window; // true
var Obj = function (p) {
  this.p = p;
};
```

#### 对象的方法

- 对象的方法里面包含this，this的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变this的指向
```javascript
var obj ={
  foo: function () {
    console.log(this);
  }
};

obj.foo() // obj

//下面这几种用法，都会改变this的指向。
// 情况一
(obj.foo = obj.foo)() // window
// 情况二
(false || obj.foo)() // window
// 情况三
(1, obj.foo)() // window

//上面代码中，obj.foo就是一个值。这个值真正调用的时候，运行环境已经不是obj了，而是全局环境，所以this不再指向obj


// 情况一
(obj.foo = function () {
  console.log(this);
})()
// 等同于
(function () {
  console.log(this);
})()

// 情况二
(false || function () {
  console.log(this);
})()

// 情况三
(1, function () {
  console.log(this);
})()

```

+ this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层

+ 如果这时将嵌套对象内部的方法赋值给一个变量，this依然会指向全局对象

```javascript
var a = {
  b: {
    m: function() {
      console.log(this.p);
    },
    p: 'Hello'
  }
};

var hello = a.b.m;
hello() // undefined
```

### 使用注意点

#### 避免多层 this

#### 避免数组处理方法中的 this

#### 避免回调函数中的 this


### 绑定 this 的方法
- JavaScript 提供了call、apply、bind这三个方法
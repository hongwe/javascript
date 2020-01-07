

### JS做客户端语言
> 按照相关js语法,去操作页面元素,有时还要操作浏览器里的一些功能
- 语法规范 ECMAScript3/5/6...: JS语法规范
- Dom   文档对象模型    提供一些JS得属性和方法,用来操作页面中的DOM元素
- Bom   浏览器对象模型  提供一些JS得属性和方法,用来操作浏览器

### JS中的变量 variable
> 变量 :可变    名字    存储和代表不同值
```javascript
//ES3
var a = 12;
a = 13;
console.log(a); // =>输出得a代表的值13

//ES6

let b = 100;
b = 200;

const c = 1000;
c = 2000    // 报错  const 存储的值不能被修改(可以**理解**为叫常量)

//创建函数也相当于创建变量
function fn(){

}

//创建类也相当于创建变量
class A{}

//ES6的模块导入也可以创建变量
import B from './B.js';

//Symbol 创建唯一值

let n = Symbol(100);

```

### JS中的命名规范
- 严格区分大小写
  ```javascript
    let Test =100;
    console
  ```
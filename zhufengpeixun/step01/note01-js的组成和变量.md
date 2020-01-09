

### JS做客户端语言
> 按照相关js语法,去操作页面元素,有时还要操作浏览器里的一些功能
- 语法规范 ECMAScript3/5/6...: JS语法规范
- Dom   文档对象模型    提供一些JS得属性和方法,用来操作页面中的DOM元素
- Bom   浏览器对象模型  提供一些JS得属性和方法,用来操作浏览器

### JS中的变量 variable
> 变量 :可变    名字    存储和代表不同值
- 多种定义方式  **var/let/cons/function/import/class**
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
    console.log(test); //=> 无法输出  大小写
  ```
- 使用数字,字母,下划线,$,   *数字不能作为开头*
 ```javascript
  let $box; //=> 一般用JQ获取 以$开头
  let _box; //=> 一般公共变量_开头
  let 1box; //=> 不可以, 可以写box1
  ```
- 驼峰命名 :首字母小写,其余单词首字母大写,尽可能语义明显,英文单词
  ```javascript
  let studentInformation;
  let studentInfo;
  //常用的缩写: 
  //add/insert/create/new (新增)
  //update(修改)
  //delete/del/remove/rm(删除)
  //sel/select/query/get(查询,获取)
  //info(信息)
  //...

  //不正确的写法
  let xueshengInfo;
  let xueshengxinxi;
  let xsxx;
  ```
- 不能使用关键字,保留字
  ```javascript
  //当下有特殊含义的关键字,未来有可能成为关键字的叫保留字
  //var let const function ...

  var var10 = 10; //=>肯定不行的
  ```
- 代码强迫症,洁癖,极客精神,良好的编程习惯


### JS的常用的数据类型

- 基本数据类型
    + 数字 number
      + 常规数字和NaN
    + 字符串 string
      + 所有单引号,双引号,反引号(撇)包起来的都是字符串
    + 布尔 boolean
      + true/false
    + 空对象指针 null
    + 未定义 undefined
- 引用数据类型
    + 对象数据类型 object
        + {} 普通对象
        + [] 数组对象
        + /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/ 正则对象
        + Math 数学函数对象
        + 日期对象
        + ...
    + 函数数据类型 function
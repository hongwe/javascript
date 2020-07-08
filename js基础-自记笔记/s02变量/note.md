### JS中的变量 variable
> 变量：可变的量，在编程语言中，变量其实就是一个名字，用来存储和代表不同值的东西

```javascript
//ES3
var a = 12;
a = 13;
console.log(a); //=>输出的是a代表的值13

//ES6
let b = 100;
b = 200;

const c = 1000;
c = 2000; //=>报错：CONST创建的变量，存储的值不能被修改（可以理解为叫做常量）

//创建函数也相当于在创建变量
function fn(){}
//创建类也相当于创建变量
class A{}
//ES6的模块导入也可以创建变量
import B from './B.js';

//Symbol创建唯一值
let n=Symbol(100);
let m=Symbol(100);
```

### JS中的命名规范
- 严格区分大小写
```
let Test=100;
console.log(test);//=>无法输出，因为第一个字母小写了
```
- 使用数字、字母、下划线、$，数字不能作为开头
```
let $box; //=>一般用JQ获取的以$开头
let _box; //=>一般公共变量都是_开头
let 1box; //=>不可以，但是可以写box1
```
- 使用驼峰命名法：首字母小写，其余每一个有意义单词的首字母都要大写（命名尽可能语义化明显，使用英文单词）
```
let studentInformation;
let studentInfo;
//常用的缩写：add/insert/create/new（新增）、update（修改）、delete/del/remove/rm（删除）、sel/select/query/get（查询）、info（信息）...

//不正确的写法
let xueshengInfo;
let xueshengxinxi;
let xsxx;
```
- 不能使用关键字和保留字
```
当下有特殊含义的是关键字，未来可能会成为关键字的叫做保留字(？)
var let const function ...

var var = 10; //=>肯定不行的
```
//=>代码强迫症（代码洁癖）：良好的编程习惯、极客精神

### JS中常用的数据类型
- 基本数据类型
	+ 数字number
		常规数字和NaN
	+ 字符串string
		所有用单引号、双引号、反引号（撇）包起来的都是字符串
	+ 布尔boolean
		true/false
	+ 空对象指针null
	+ 未定义undefined
- 引用数据类型
	+ 对象数据类型object
		+ {} 普通对象
		+ [] 数组对象
		+ /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/ 正则对象
		+ Math数学函数对象
		+ 日期对象
		+ ...
	+ 函数数据类型function

作业：
1. 自己查询关键字和保留字
2. 2018年录制的免费课基础视频：https://pan.baidu.com/s/1GBykF3c_eg9dqmTcxAfDow#list/path=%2F
   第一周：24/25/26/27






## number 数字数据类型(1.js)

> 包括:常规数字,NaN

```javascript
//==========console.log([val]) : 在控制台输出内容=============

console.log('hello world~~'); //=>hello world~~
// == :进行比较
console.log(1 == 2); //=>false
```

### NaN

> not a number: `不是一个数,属于数字类型`
> NaN 和任何值(包括自己)都不相等: `NaN!=NaN`,所以不能用相等的方式判断是否为有效数字

```javascript
//=============NaN=============

console.log('AA' == NaN); //=>false
console.log(10 == NaN); //=>false
console.log(NaN == NaN); //=>false
```

### isNaN

> 检测一个值是否为非有效数字 不是有效数字返回 true,是有效数字返回 false

在 isNaN 检测时,首先会验证的值是否为数字类型,如果不是,先 Number()这个方法,然后检测

```javascript
//=============isNaN([val])//=============

console.log(isNaN(10)); //=>false
console.log(isNaN('AA')); //=>true
console.log(isNaN('10')); //=>false

Number('10')  //=>10
isNaN('10')   //=>false


```

### 把其他类型值转换为数字类型

-   Number([val])

-   parseInt / parseFloat([val],[进制]):也是转换为数字的方法,对于字符串来说,它是从左到右依次查找有效数字字符,知道遇到非有效数字字符,停止查找(不管后面有没有数字字符)
-   `==` 进行比较的时候,可能要出现把其他类型值转换为数字

```javascript
// =============Number================

console.log(Number('12.5')); //=>12.5
console.log(Number('12.5px')); //=>NaN
console.log(Number('12.5.5')); //=>NaN
console.log(Number('')); //=>0

// 布尔类型转换为数字

console.log(Number(true)); //=>1
console.log(Number(false)); //=>0
console.log(isNaN(false)); //=>false
console.log(isNaN(true)); //=>false

// null =>0     undefined=>NaN

console.log(Number(null)); //=>0
console.log(Number(undefined)); //=>NaN

// 引用数据类型转数字,先toString 转字符串,然后转数字

console.log(Number({ name: '10' })); //=>NaN
// {}/{xxx:'xxx'}.toString() => "[object Object]" => NaN
console.log(Number({})); //=>NaN
console.log(Number([])); //=>0
//[].toString(); =>""
console.log(Number([12])); //=>12
//[12].toString(); =>"12"
console.log(Number([12, 23])); //=>NaN
//[12,23].toString(); =>"12,23"

//Number/parseInt/parseFloat

let str = '12.5px';
console.log(Number(str)); //=>NaN
console.log(parseInt(str)); //=>12
console.log(parseFloat(str)); //=>12.5
console.log(parseFloat('width:12.5px')); //=>NaN
console.log('10' == 10);

console.log(parseInt(true)); //=>NaN
```

## string 字符串数据类型(2.js)

> 所有单引号,双引号,反引号(撇 ES6 模版字符串)包起来的都是字符串

-   [val].toString()

```javascript
let a = 12;
console.log(a.toString()); //=>'12'
console.log(NaN.toString()); //=>'NaN'
console.log(null.toString()); //=>报错
// null和undefined是禁止直接 toString的
//(null).toString() =>报错
//null和undefined转成字符串结果 'null'/'undefined'

//({name:'xxx'}).toString()  => "[object Object]"
//普通对象.toString()  => "[object Object]" =>?
//=>Object.prototype.toString 方法不是转换字符串的 ,而是用来检测数据类型的
```

-   字符串拼接

```javascript
//=======================字符串拼接
//四则运算法则中,除加法之外,其余都是数学计算,只有加法可能存在字符串拼接

console.log('10' + 10); //=> 1010
console.log('10' - 10); //=> 0
console.log('10px' - 10); //=> NaN

let a = 10 + null + true + [] + undefined + '珠峰' + null + [] + 10 + false;
//一遇到字符串 + 变拼接
// 10 +null -> 10+0 > 10
// 10 +true -> 10+1 > 11
// 11 +[] -> 11+0 > 11 + '' -> '11'
//'11' + undefined -> '11undefined'
//..
//'11undefined珠峰null10false'
console.log(a); //=> '11undefined珠峰null10false'
```

## boolean 布尔数据类型(3.js)

> 只有两个值 true/false



### 把其他类型值转换为布尔类型

> 只有 0 , NaN, '' , null, undefined 五个值转换为 false,其余都转换为 true(而且没有特殊情况)

-   Boolean([val])
-   !/!!
-   条件判断



```javascript
console.log(Boolean(0)); //=>false
console.log(Boolean('')); //=>false
console.log(Boolean(' ')); //=>true
console.log(Boolean(null)); //=>false
console.log(Boolean(undefined)); //=>false
console.log(Boolean([])); //=>true
console.log(Boolean([12])); //=>true

// !: 取反(先转为布尔,然后取反)
console.log(Boolean(!1)); //=>false
console.log(Boolean(!!1)); //=>true

// 如果条件只是一个值,不是==/===/!=/>=等等这些比较,要先把这个转成布尔类型,然后验证真假
if (1) {
    console.log('哈哈');
}
if ('3px' + 3) {
    //=> '3px3'
    console.log('呵呵');
}
if ('3px' - 3) {
    // =>NaN-3 => NaN
    console.log('嘿嘿');
}
```

## null / undefined

> null 和 undefined 都代表没有 ,

-   null:意料之中(一般都是开始不知道值,手动设置为 null,后期在赋值操作)

```javascript
let num = null; //=> let num = 0 ; 0不是空值,在栈内存中有自己存储的位置(占了位置) 一般最好用null作为初始空值
...
num = 12

```

-   undefined:意料之外(不是我能决定的)

```javascript
let num ; //=> 创建一个变量没有赋值,默认值是undefined
...
num = 12

```

## object 对象数据类型 - 普通对象(4.js)

> {[key]:[value],...} 任何一个对象都是由零到多组键值对(属性名:属性值)组成的(_属性名不能重复_)

> 数组是特殊的对象数据类型

#### 浏览器想要执行 js 代码 (5.js)

```
栈内存
变量存储空间    值存储空间      堆内存
a               12              堆aaafff000
b               13                  name:'珠峰' =>培训
n               aaafff000
m
​```javascript

    1. 从电脑内存中分配出一块内存,用来执行代码(栈内存 => stack)
    2. 分配一个主线程用来自上而下执行js代码

```
let a = 12  //创建变量的过程
进栈执行
1. 创建变量a 放它到当前栈内存存储区域中
2. 创建一个值12 放它到当前栈内存存值区域中(简单的基本类型这样存,复杂的不这样)
3. =位赋值,其实赋值是让变量和值相互关联的过程
执行完出栈
进栈执行
let b = a
b = 13
```

> 复杂值(引用类型值)的存储,又分成了 3 个步骤
>
> 1.  在内存中分配一块新内存,用来存储引用类型值(堆内存 => heap) => **_内存有一个 16 进制地址_**
> 2.  把对象中的键值对(属性名:属性值)依次存储到堆内存中
> 3.  把堆内存地址和变量关联起来

#### 基本类型: 按值操作(直接操作的值),所以也叫作值类型

#### 引用类型: 操作的是堆内存的地址(按引用地址操作的)

```
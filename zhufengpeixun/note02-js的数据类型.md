## number 数字数据类型(1.js)

> 包括:常规数字,NaN

### NaN

> not a number: 不是一个数,属于数字类型
> NaN 和任何值(包括自己)都不相等: NaN!=NaN,所以不能用相等的方式判断是否为有效数字

### isNaN

> 检测一个值是否为非有效数字 不是有效数字返回 true,是有效数字返回 false

在 isNaN 检测时,首先会验证的值是否为数字类型,如果不是,先 Number()这个方法,然后检测

### 把其他类型值转换为数字类型

-   Number([val])
-   parseInt / parseFloat([val],[进制]):也是转换为数字的方法,对于字符串来说,它是从左到右依次查找有效数字字符,知道遇到非有效数字字符,停止查找(不管后面有没有数字字符)
-   ==进行比较的时候,可能要出现把其他类型值转换为数字

## string 字符串数据类型(2.js)

> 所有单引号,双引号,反引号(撇 ES6 模版字符串)包起来的都是字符串

-   [val].toString()
-   字符串拼接

## boolean 布尔数据类型(3.js)

> 只有两个值 true/false

### 把其他类型值转换为布尔类型

> 只有 0 , NaN, '' , null, undefined 五个值转换为 false,其余都转换为 true(而且没有特殊情况)

-   Boolean([val])
-   !/!!
-   条件判断

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

## object 对象数据类型 - 普通对象
> {[key]:[value],...} 任何一个对象都是由零到多组键值对(属性名:属性值)组成的(*属性名不能重复*)

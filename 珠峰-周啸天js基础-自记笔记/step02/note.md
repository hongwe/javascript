## js 数据类型检测

-   typeof [val] : 用来检测数据类型的运算符
-   instanceof : 用来检测当前实例是否属于某个类
-   constructor : 基于构造函数数据类型(也是基于类的方式)
-   Object.prototype.toSting.call() : 检测数据类型的最好的办法

### typeof(1.js)

基于 typeof 检测出来的结果

1. 首先是一个 字符串
2. 字符串中包含对应的类型
   局限性
3. typeof null => "object" 但是 null 并不是对象
4. 无法细分出当前值是普通对象还是数组对象,只要是对象数据类型,返回结果都是 'object'

```javascript
console.log(typeof 1); //=>'number'
console.log(typeof '12'); //=>'string'
console.log(typeof true); //=>'boolean'

let a = NaN;
console.log(typeof a); //=>'number'
console.log(typeof null); //=>'object'
console.log(typeof undefined); //=>'undefined'

console.log(typeof {}); //=>'object'
console.log(typeof []); //=>'object'
console.log(typeof /\d+/); //=>'object'

console.log(typeof typeof typeof []); //=>'string'
//=>typeof[]=> 'object'
//=>typeof 'object'=> 'string'
//因为typeof 检测结果都是字符串,所以两个及以上同时检测 最后结果必然 'string'
```

### js 中的操作语句: 判断 循环

#### 判断(2.js)

> 条件成立做什么?不成立做什么?

-   if/else if/else
-   三元运算符
-   switch case

1. if/else

```javascript
if(条件){
    条件成立执行
}else if(条件2){
     条件2成立执行
}
...
else{
    以上条件都不成立执行
}
```

2. 三元运算
3. switch case

####  循环
> 重复做某些事情就是循环
- for 循环
- for in 循环
- for of 循环(es6新增)
- while 循环
- do while 循环

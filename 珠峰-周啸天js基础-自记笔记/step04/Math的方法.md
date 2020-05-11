### JS 中的数学函数 Math

#### 一. Math

> 数学函数 : 但是他不是一个函数,它是一个对象,对象中存储了很多操作数字的属性方法,因此被称为数学函数

```javascript
console.log(typeof Math); //=>object
console.dir(Math);
/* 
Math ={
        PI: 3.141592653589793,
        abs: function(){[native code]},
        ceil: function(){[native code]},
        ...

}

Math.abs();
Math.PI;

*/
```

##### Math 常用的属性和方法

1. Math.abs([number value])
    - 获取绝对值(绝对值永远是正数或者零)

```javascript
console.log(Math.abs(-12.5)); //=>12.5
console.log(Math.abs(12)); //=>12
console.log(Math.abs(0)); //=>0
// 不是数字类型的值,先基于Number()转换为数字再处理
console.log(Math.abs('-1')); //=>1
console.log(Math.abs('-1px')); //=>NaN
console.log(Math.abs(true)); //=>1
```

2. Math.ceil/floor([number value])
    - 把一个数向上取整/向下取整

```javascript
console.log(Math.ceil(12)); //=>12
console.log(Math.ceil(12.1)); //=>13
console.log(Math.ceil(12.9)); //=>13
console.log(Math.ceil(-12.1)); //=>-12
console.log(Math.ceil(-12.9)); //=>-12

console.log(Math.floor(12)); //=>12
console.log(Math.floor(12.1)); //=>12
console.log(Math.floor(12.9)); //=>12
console.log(Math.floor(-12.1)); //=>-13
console.log(Math.floor(-12.9)); //=>-13
```

3. Math.round([number value])
    - 四舍五入(正数里.5 是入,负数里.5 是舍)

```javascript
console.log(Math.round(12)); //=>12
console.log(Math.round(12.1)); //=>12
console.log(Math.round(12.5)); //=>13
console.log(Math.round(12.9)); //=>13
console.log(Math.round(-12.1)); //=>-12
console.log(Math.round(-12.5)); //=>-12
console.log(Math.round(-12.9)); //=>-13
```

4. Math.max/min([val1],[val2],...)
    - 获取一堆数中的最大值和最小值

```javascript
console.log(Math.max(12, 32, 345, 4564, 2, 234, 3)); //=>4564
console.log(Math.min(12, 32, 345, 4564, 2, 234, 3)); //=>3

//思考题 如何基于Math.max/min获取数组中的最大值最小值
console.log(Math.min([12, 32, 345, 4564, 2, 234, 3])); //=>NaN 此处只传递第一个值是一个数组,和内置的语法要求不符
```

5. Math.sqrt/pow()
    - sqrt :给一个数开平方
    - pow :计算一个数的多少次幂

```javascript
console.log(Math.sqrt(9)); //=>3 符合N*N=M 这样的M才能整开平方
console.log(Math.sqrt(-9)); //=> NaN 负数开不了平方

console.log(Math.pow(2, 10)); //=> 1024
```

6. Math.random()
    - 获取 0-1 之间的随机小数

```javascript
for (let i = 0; i < 10; i++) {
    console.log(Math.random());
}
/* 

0.49093805524010725
0.11846110309940494
0.9631385306954925
...
 */
```

-   扩展:获取[n-m]随机整数

    1. 包含 n 也包含 m
    2. n < m

    > Math.round(Math.random()\*(m-n)+n)

```javascript
for (let i = 1; i <= 100; i++) {
    let ran = Math.round(Math.random() * (96 - 25) + 25);
    console.log(ran);
}

//所以生成[1,max]的随机数，公式如下：

// max - 期望的最大值
parseInt(Math.random()*max,10)+1;
Math.floor(Math.random()*max)+1;
Math.ceil(Math.random()*max);

//所以生成[0,max]到任意数的随机数，公式如下：

// max - 期望的最大值
parseInt(Math.random()*(max+1),10);
Math.floor(Math.random()*(max+1));


//所以希望生成[min,max]的随机数，公式如下：

// max - 期望的最大值
// min - 期望的最小值
parseInt(Math.random()*(max-min+1)+min,10);
Math.floor(Math.random()*(max-min+1)+min);
```

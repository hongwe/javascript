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

// Math.abs()

console.log(Math.abs(-12.5)); //=>12.5
console.log(Math.abs(12)); //=>12
console.log(Math.abs(0)); //=>0
// 不是数字类型的值,先基于Number()转换为数字再处理
console.log(Math.abs('-1')); //=>1
console.log(Math.abs('-1px')); //=>NaN
console.log(Math.abs(true)); //=>1

// Math.ceil()

console.log(Math.ceil(12)); //=>12
console.log(Math.ceil(12.1)); //=>13
console.log(Math.ceil(12.9)); //=>13
console.log(Math.ceil(-12.1)); //=>-12floor
console.log(Math.ceil(-12.9)); //=>-12

// Math.floor()

console.log(Math.floor(12)); //=>12
console.log(Math.floor(12.1)); //=>12
console.log(Math.floor(12.9)); //=>12
console.log(Math.floor(-12.1)); //=>-13
console.log(Math.floor(-12.9)); //=>-13

// Math.round()
console.log(Math.round(12)); //=>12
console.log(Math.round(12.1)); //=>12
console.log(Math.round(12.5)); //=>13
console.log(Math.round(12.9)); //=>13
console.log(Math.round(-12.1)); //=>-12
console.log(Math.round(-12.5)); //=>-12
console.log(Math.round(-12.9)); //=>-13

// Math.max/min()
console.log(Math.max(12, 32, 345, 4564, 2, 234, 3)); //=>4564
console.log(Math.min(12, 32, 345, 4564, 2, 234, 3)); //=>3

//思考题 如何基于Math.max/min获取数组中的最大值最小值
console.log(Math.min([12, 32, 345, 4564, 2, 234, 3])); //=>NaN 此处只传递第一个值是一个数组,和内置的语法要求不符

//Math.sqrt/pow()
console.log(Math.sqrt(9)); //=> 符合N*N=M 这样的M才能整开平方
console.log(Math.sqrt(-9)); //=> NaN 负数开不了平方

console.log(Math.pow(2, 10)); //=> 1024

//Math.random()

for (let i = 0; i < 10; i++) {
    console.log(Math.random());
}
/* 

0.49093805524010725
0.11846110309940494
0.9631385306954925
...
 */

//获取1-10之间的随机整数
Math.round(Math.random()); //0-1之间的整数
console.log(Math.round(Math.random() * (10 - 1) + 1)); //0-1之间的整数
//  Math.round(Math.randow()*(m-n)+n)

for (let i = 1; i <= 100; i++) {
    let ran = Math.round(Math.random() * (96 - 25) + 25);
    console.log(ran);

}

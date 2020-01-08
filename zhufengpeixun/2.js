/* let a = 12;
console.log(a.toString()); //=>'12'
console.log((NaN).toString());//=>'NaN'
console.log((null).toString());//=>报错
// null和undefined是禁止直接 toString的
//(null).toString() =>报错
//null和undefined转成字符串结果 'null'/'undefined' */

//({name:'xxx'}).toString()  => "[object Object]"
//普通对象.toString()  => "[object Object]" =>?
//=>Object.prototype.toString 方法不是转换字符串的 ,而是用来检测数据类型的

//=======================字符串拼接
//四则运算法则中,除加法之外,其余都是数学计算,只有加法可能存在字符串拼接

console.log('10' + 10); //=> 1010
console.log('10' - 10); //=> 0
console.log('10px' - 10); //=> NaN

let a = 10 + null + true + [] + undefined + '珠峰' + null + [] + 10 + false;
//一遇到字符串 + 变拼接
// 10 +null -> 10+0 > 10
// 10 +true -> 10+1 > 11
// 11 +[] -> 10+1 > 11 + '' -> '11'
//'11' + undefined -> '11undefined'
//..
//'11undefined珠峰null10false'
console.log(a); //=> '11undefined珠峰null10false'

/*  变量提升
var a,var b,var c,fn(a)
 */

var a = 12,
    b = 13,
    c = 14;
function fn(a) {
    /* 
    形参赋值
        a=12
    变量提升
        var b
    代码执行=> 在私有作用域中,只有以下两种是私有变量
    A声明过的变量(带var和function)
    B形参也是私有变量
    剩下都不是自己的私有变量,需要继续与作用域链的机制向上查找
    */
    console.log(a, b, c);  //=>12 undefined 14(c是全局)
    var b = c = a = 20;
    console.log(a, b, c);//=>20 20 20
}
fn(a); //=>  把fn执行(小括号中是实参值)=>执行tn把全局变量A的值12当作实参传递个函数形参=>fn(12)
console.log(a, b, c);//=>12 13 20

function sample1() {
    //==========console.log([val]) : 在控制台输出内容=============
    console.log('hello world~~'); //=>hello world~~
    // == :进行比较
    console.log(1 == 2); //=>false

    //=============NaN=============

    console.log('AA' == NaN); //=>false
    console.log(10 == NaN); //=>false
    console.log(NaN == NaN); //=>false

    //=============isNaN([val])//=============

    console.log(isNaN(10)); //=>false
    console.log(isNaN('AA')); //=>true
    console.log(isNaN('10')); //=>false

    Number('10'); //=>10
    isNaN('10'); //=>false

    //=============Number================

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

    //================Number/parseInt/parseFloat==========

    let str = '12.5px';
    console.log(Number(str)); //=>NaN
    console.log(parseInt(str)); //=>12
    console.log(parseFloat(str)); //=>12.5
    console.log(parseFloat('width:12.5px')); //=>NaN
    console.log('10' == 10);

    console.log(parseInt(true)); //=>NaN
}
sample1();

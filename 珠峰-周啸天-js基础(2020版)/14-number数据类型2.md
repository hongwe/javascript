### number 数据类型2

```javascript
parseInt / parseFloat 也是其他数据类型转换为number类型
处理原理和Number不一样,他们是把字符串转换为数字类型(如果处理值不是字符串,需要先转换为字符串,然后转number类型)
    =>从字符串最左边开始查找,把找到的有效数字字符转换为数字,直到遇到非有效数字字符,则结束查找

Number('12px') //=>NaN
parseInt('12px') //=>12
parseInt('12px24') //=>12
parseInt('width:12px') //=>NaN
parseInt('12.5px') //=>12
parseFloat('12.5px') //=>12.5  =>parseFloat比parseInt多识别一个小数点

Number(true) //=>1
parseInt(true) //=>先把true转成字符串 true  parseInt('true')=>NaN
parseInt(NaN) //=>NaN
Number(null) //=>0
parseInt(null) //=>parseInt('null')=>NaN
isNaN(Number(parseInt("0.8"))) //=> parseInt("0.8") ->0,Number(0) ->0 ,isNaN(0) ->false
Number('') //=>0
parseInt('') //=>NaN


//保留小数点后面N位(最后结果是一个字符串)
let n = 3.1415926
console.log(n.toFixed(2)) //=> "3.14"


console.log(number.MAX_SAFE_INTEGER) //=>9007199254740991  最大安全数(js有效识别的最大整数)
console.log(9007199254740992 == 9007199254740993)  //=>true 超出,无法精确计算
//es6中提供一个新的数据类型 BigInt,管理超过安全数值得数字

console.log(BigInt(9007199254740992) , BigInt(9007199254740993)) //=>9007199254740992n 9007199254740992n
:
```
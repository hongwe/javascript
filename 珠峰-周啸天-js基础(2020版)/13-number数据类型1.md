### number 数据类型

```javascript
number数据类型
=>正数,零,负数,小数
=>NaN  不是一个有效数字,属于number
=>Infinity 无穷大值,属于number
=>BigInt 新增

1==1  //=>true
NaN==NaN  //=>false  NaN和任何值都不相等(包括自己)

想要验证一下n是不是有效数字: isNaN 验证某一个值是否为有效数字,如果时有效数字返回false,如果不是有效数字,返回true

isNaN(1) //=>false
isNaN(NaN)//=>true
isNaN(Infinity)//=>false
在使用isNaN进行检测时候,如果检测的值是非数字类型的值,则需要先把其转换为数字类型,然后进行检测
把其数据累心转换为数字类型
    Number([value])  而isNaN在检测的时候,就是使用这种方式转换数字类型
    parseInt([value])
    parseFloat([value])
isNaN('12') //=>false


isNaN('AA') //=>true
isNaN('12.5') //=>false
isNaN('12.5px') //=>true
isNaN([]) //=>false
isNaN([10]) //=>false
isNaN([10,20]) //=>true
isNaN({}) //=>true
isNaN(null) //=>false
isNaN(undefined) //=>true
isNaN(Symbol(13))//=>报错


Number 是JS内置的转换方法,可以把其他数据类型"强制"转换为数字类型
    + 把字符串转换为数字,一旦字符串中出现非有效数字字符,结果NaN,只有都是有效数字字符,才能转换为具体数字,空字符串转换为0
    + 不为之转换数字 true =>1  false=> 0
    + 把空转换为数字  : null转成0, undefined转成NaN
    + 不能把Symbol类型转换为数字,报错
    + 对象转换数字,先把对象转成字符串,再把字符串转数字
        + 普通对象
        + 数组对象
        + 数组对象其余对象基本转成NaN

    + 函数转换数字 NaN
Number('12') //=>12
Number('12.5') //=>12.5
Number('12px') //=>NaN
Number('12.5.0') //=>NaN
Number(true) //=>1
Number(false) //=>0
Number(null) //=>0
Number(undefined) //=>NaN
Number(Symbol(13))) //=>报错
let obg = {x:100}
Number(obj) => NaN
1.先把arr转为字符串 "10"
2.再把'10'转成数字10
let arr = ['10']
Number(arr) =>10
1.先把arr转为字符串 "10,20"
2.再把'10,20'转成数字 NaN
let arr = ['10','20']
Number(arr) => NaN

Number([]) //=> []->''   Number('') ->0
Number(['AA']) //=> ['AA']->'AA'   Number('AA') ->NaN
```

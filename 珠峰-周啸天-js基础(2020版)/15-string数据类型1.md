### string 数据类型

JS中 单引号双引号反引号包起来得都是字符串
其他数据类型转换位字符串类型
+ String([value])
+ [value].toString()
普通对象转换位字符串都是'[objert,Object]',数组对象转位字符串是 "第一项,第二项..."(逗号分隔)

Js中常用数学运算
+ 数学运算 + - * /
+ % 取余数
  除了加法,其余都是数学运算(如果遇到非数字类型,需要基于Number八七强制转换数字类型,然后进行运算)

  console.log(4/2)  //=>2
  console.log(7/3)  //=>2.333333333333335
  console.log(7%3)  //=>1
  console.log(10-null)  //=>10
  console.log( 3*undefined)  //=>NaN
  console.log( true - '12')  //=>1-12 =>-11

  加法还有拼接意思
    console.log(3+'3px') //=> '33px'
    console.log(1+'1') //=> '11'
    console.log(1+{}) //=> '1[object,Object]' 把{}转换位数字过程中,先转为字符串"[object,Object]",右侧出现字符串,不再是数学运算,而是字符串拼接
    console.log(1+[]) //=> '1'
    console.log([10]+true) //=> '10true' [10]转换数字过程中先转字符串'10',变成拼接
    console.log(true+[10]) //=> 'true10'
    console.log(1+ true) //=> 2


console.log(100+true +21.2+null+undefined+"Tencent"+[]+null+9+false) 
<!-- 100+true => 101
101+21.2 => 122.2
122.2+null => 122.2
122.2+undefined => NaN
NaN+"TenTcent"=> "NaNTenTcent"  字符串拼接以后都是拼接
"NaNTenTcent"+[] ="NaNTenTcent"
"NaNTenTcent"+null = "NaNTenTcentnull"
"NaNTenTcentnull"+9 = "NaNTenTcentnull9"
"NaNTenTcentnull9"+false ="NaNTenTcentnull9false" -->
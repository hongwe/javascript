/* 输出结果 */
//E1
var a = {},
    b = '123',
    c = 123;
a[b] = 'b';
a[c] = 'c';
console.log(a);
console.log(a[b]);

//E2
var a = {},
    b = Symbol('123'),
    c = Symbol('123');
a[b] = 'b';
a[c] = 'c';
console.log(a);
console.log(a[b]);
//Symbol 为一只


//E3
var a = {},
    b = { key: '123' },
    c = { key: '456' };
a[b] = 'b';
a[c] = 'c';
console.log(a);
console.log(a[b]);


//1.对象的属性名不能是个对象,遇到对象属性名,会默认转换为字符串
// obj={},arr=[12,23], obj[arr]=珠峰  obj=>{"12,23":"珠峰"}
//2.普通对象.toString()调取的市 Object.protptype 上的方法 是用来检测数据类新的
// obj={}, obj.toString()=>"[object Object]"
//obj[b] =>obj["[bject Object]"] = 'b'

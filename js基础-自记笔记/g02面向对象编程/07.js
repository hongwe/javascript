//===============

/* 
function Fn() {}
//=>普通函数执行
//1.形成一个私有作用域
//2.形参赋值
//3.变量提升
//4.代码执行
//5.栈内存释放问题
Fn();
 */

function Fn(name, age) {
    var n = 10;
    this.name = name;
    this.age = age + n;
}
var f = new Fn('xxx', 20);
//=>构造函数执行

//图解
/* 
window
    变量提升 Fn = aaafff000

aaafff000
    "var a =10
    this.name = name;
    this.age = age + n;"


new Fn('xxx',20)   私有栈
    参&升 : name = 'xxx', age=20  var n
    -------------------------------------
    this= bbbfff111  =>运行机制,我们看不见

    n=10
    this.name = 'xxx'
    this.age = age+n =30
    ------------------------------------
    return bbbfff111 浏览器默认,看不见

    也就是开始创建的对象其实就是当前Fn这个类的一个实例,我们让this指向这个实例,代码执行中的this.xxx =xxx都是给实例设置"私有属性",最好浏览器会把默认创建的实例返回,供外面接收
    
    再次执行 new Fn, 就是把上面的操作克隆一份,会形成新的实例(新的内存空间),所以说实例时独立分开的


bbbfff111
    name : 'xxx'
    age: 30
*/

/*
1. 向普通函数执行一样,形成一个私有作用域(栈内存)
    形参赋值 ⇘
            私有变量
    变量提升 ⇗

2. [构造函数执行独有] :在js代码自上而下执行之前,首先在当前的私有栈中创建一个对象(创建一个堆内存:暂时不存储任何东西),并且让函数中的执行主体(THIS)指向这个新的堆内存(THIS===创建的对象)

3. 代码自上而下执行

4. [构造函数执行独有] 代码执行完成 ,把之前创建的堆内存地址返回(浏览器默认返回)
*/

//例子

var f1 = new Fn('xxx', 20);
var f2 = new Fn('aaa', 30);

console.log(f1 === f2); //=>false: 两个不同的实例(两个不同的堆内存地址)
console.log(f1.age); //=>30
console.log(f2.name); //=> 'aaa'
console.log('name' in f1); //=> true    name&age在两个不同的实例都有存储,但是都是每个实例自己私有的属性

console.log(f1.n); //=>undefined,只有this.xxx = xxx 彩盒实例有关系,n时私有作用域中的私有变量而已(this时当前类的实例)

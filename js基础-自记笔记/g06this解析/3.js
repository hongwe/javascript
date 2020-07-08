//隐式丢失就是指被隐式绑定的函数丢失了绑定对象,从而默认绑定到window
//这种情况比较容易处出错又非常常见
/*  情况1. 函数别名
var a = 0;
function foo() {
    console.log(this.a);
}
var obj ={
    a:1,
    foo:foo
}
//把obj.foo()赋值给别名bar,造成隐式丢失,因为只是把obj.foo()赋值给了bar,而bar和obj对象毫无关系
var bar = obj.foo;
bar(); //=>0
 */
/* 
var a = 0;

var bar =  function foo() {
    console.log(this.a);
}

bar ()//=>0
 */

//情况2 参数传递
/* 
var a = 0;
function foo() {
    console.log(this.a);
}
function bar(fn) {
   fn();
}
var obj = {
    a: 1,
    foo: foo,
};

//把obj.foo当作参数传递到bar函数中,有隐式的函数赋值 fn = obj.foo,只是foo函数赋值给了fn,而fn与obj对象毫无关系,所以当前foo函数的内部this指向window
bar(obj.foo)//=>0
 */
/* 
var a = 0;
function bar(fn) {
    fn();
}
bar(function foo() {
    console.log(this.a);
}); //=>0
 */

//3. 内置函数 setTimeout()和setInterval()第一个参数的回调函数中this默认指向window,类似情况2
/* 
var a = 10;
function foo() {
    console.log(this.a);
}
var obj = {
    a: 1,
    foo: foo,
};
setTimeout(obj.foo, 1000);
 */

//情况4 间接调用
/* 
var a = 2;
function foo() {
    console.log(this.a);
}
var obj = {
    a: 3,
    foo: foo,
};
var p = { a: 4 };
//隐式绑定,函数当做对象中的方法来使用,内部this指向该对象
obj.foo(); //=>3
//将obj.foo函数对象赋值给p.foo函数,然后立即执行,相当于仅仅是foo()函数的立即调用,内部this默认指向window
(p.foo = obj.foo)(); //=>2

//将obj.foo函数对象赋值给p.foo函数,之后p.foo()函数再执行,其实是属于p对象的方法的指向,this指向当前p对象
p.foo = obj.foo;
p.foo(); //=>4

 */

//情况5 其他 内部this默认指向window

/* var a = 0;
var obj = {
    a: 1,
    foo: foo,
};
function foo() {
    console.log(this.a);
}

(obj.foo = obj.foo)(); //=>0
(false || obj.foo)(); //=>0
(1, obj.foo)(); //=>0
 */
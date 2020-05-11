//call(),apply(),bind()把对象绑定到this上,叫显示绑定
/* 
ar a = 0;
function foo() {
    console.log(this.a);
}
var obj = {
    a:2
}
foo();//=>0
foo.call(obj);//=>2
foo.apply(obj);//=>2
var fn = foo.bind(obj);
fn();//=>2
 */

//硬绑定是显示绑定的一个变种,使得this不能再被改变
/* var a = 0;
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
};
var bar = function () {
    foo.call(obj);
};

bar(); //=>2
setTimeout(bar,1000)//=1秒后 输出 2
bar.call(window)//=>2 */

//数组的forEach(fn,对象) map() filter() some() every()
var id = 'w1'
function fn(el) {
    console.log(el,this.id);
}
var obj = {
    id : 'fn'
}
var ary = [1, 2, 3];
ary.forEach(fn)
//w1
//w1
//w1
ary.forEach(fn,obj)
//fn
//fn
//fn
ary.forEach(function (el,index) {
    console.log(el,index,this)
},obj)
//0 {id: "fn"}
//1 {id: "fn"}
//2 {id: "fn"}


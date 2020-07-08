/* 

THIS
1.给当前元素的某个事件绑定方法,当事件触发方法中的THIS是当前操作的元素对象
oBox.onclick = function(){
    //=>this:oBox
}

2. 普通函数执行,函数中的This取决于执行的主体,THIS就是谁(执行主体:执行方法,看方法名前面是否有点前面是this就是谁,没有this就是window)
function  fn() {
    console.log(1);
}
var obj = {
    fn:fn //=>fn:AAAFFF000
}
//=>执行的是相同的方法(不同的地方在于函数执行不一样)
obj.fn(); //=>this:obj
fn(); //=>this:window

~function(){
//=>this: window
}();

*/

var n = 2;
var obj = {
    n: 3,
    fn: (function (n) {
        n *= 2;
        this.n += 2;//=>this=>window
        var n = 5;
        return function (m) {
            this.n *= 2;
            console.log(m + ++n);
        };
    })(n), //=>自执行函数执行时候,堆内存还没有存储完成键值对,和obj还没关系,此时obj=undefined,obj.n会报错
};
var fn = obj.fn;
fn(3);
obj.fn(3);

console.log(n, obj.n);

//=>
//9
//10
//8 6
//
/* 
全局作用域
    升 :var n; var obj; var fn;
    n= -2- =>4 =>8
    obj = aaafff000
    fn =obj.fn
        = bbbfff111

    8

    6


aaafff000
    n:3
    fn  :自执行函数的返回值
        :bbbfff111

自执行函数
    形参赋值: n=2 (全局变量N的值)
    变量提升: -var n-
    n*2;  =>n=4
    this.n+=2 =>this:window
    n=5 => 6=>7
    retunrn bbbfff111 

    不销毁

bbbfff111
    "this.n *= 2;
     console.log(m + ++n);"

fn(3)
    参:m=3
    this.n*2 //=>this.window
    3+(++n)
    9


obj.fn(3)
    参:m=3
    this.n*2 //=>this.obj
    3+ (++n)
    9
*/
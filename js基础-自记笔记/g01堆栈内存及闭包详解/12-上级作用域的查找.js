/* 
当前函数执行,形成一个私有作用域A,A的上级作用域是谁,和他在哪执行没有关系,和他在哪里创建(定义)的有关系,在哪里创建,她的上级作用域就是谁
*/
/* 
var a = 12;
function fn() {
   // console.log(a);
   //=>arguments实参集合
   //=>arguments.callee:函数本身FN
   //=>arguments.callee.caller:当前函数在哪里执行的,caller就是谁,(记录的是他的执行的宿主环境),在全局下执行caller结果是NULL
   // console.log(arguments.callee);
    console.log(arguments.callee.caller);
}
function sum() {
    var a = 120;
    fn();
}
sum();
 */

/* 
 图12-1
 解题
 
window
    升
    var n, fn=aaafff111 ,var x

    n=10
    [跳过fn创建]
    x=fn() // => 把FN执行的结果赋值给x全局变量
        = aaafff222


    x()
    x()
    =>n=10

堆内存
    aaafff111 =>
        var n = 20;

        function f() {
            n++;
            console.log(n);
        }
        f();
        return f;

fn()私有作用域
    参&升 var n; f =aaafff222
    n=20 =>21 => 22 => 23;
    [跳过创建f]
    f()
    return aaafff222

堆内存
    aaafff222 =>
        
            n++;
            console.log(n);
    
f()私有作用域
    参&升 无
    n=++ //=>n不是当前作用域的私有变量

x() 私用作用域
 参&升 无
 n++ //=> n是上级作用域中的私有变量,此处是让上级作用域的变为22


x() 私用作用域
 参&升 无
 n++ //=> n是上级作用域中的私有变量,此处是让上级作用域的变为23
 */




 
var n = 10;
function fn() {
    var n = 20;

    function f() {
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x = fn();

x();
x();
console.log(n);

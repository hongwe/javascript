//问题1.对等号左边进行变量提升

/* 
变量提升:
var fn; =>只对等号左边进行变量提升
sum = AAAFFF111
*/
/* fn();//=>fn未定义
sum();

//=> 匿名函数值函数表达式
var fn = function () {
    console.log(1)
};
//=> 普通函数
function sum() {
    console.log(2)
};

fn();
sum(); */

//问题2 条件判断的变量提升

/* 

在当前作用域下,不管条件是否成立都有进行变量提升

=>带VAR的还只是声明
=>带FUNCTION的在老版本浏览器渲染机制下 声明+定义都处理,但是为了迎合es6中的块级作用域,新版本浏览器对于函数(在条件判断中的函数),不管条件是否成立,都是先声明 没有定义,类似VAR

*/
/* console.log(a);

if (1 === 2) {
    var a = 12;
}

console.log(a); 
*/

/* console.log(a);  //=>undefined

if ('a' in window) {
    var a = 100;
}

console.log(a);//=>100 */


/* 
变量提升:无


*/

f = function () {
    return true;
}; //=> window.f= ...(true)
g = function () {
    return false;
};//=> window.g= ...(false)
~function () {
    /* 
    变量提升:
    function g; //=>g是私有变量
    */
  
    if (g() && [] == ![]) { //=> 报错  g is not undefined
         //=>[] == ![] => true
        f = function () {
            return false;
        };
        function g() {
            return true;
        }
    }
}();
console.log(f());//老 false //新 报错
console.log(g());//老 false//新 报错 


//老版本浏览器执行,新版本浏览器报错
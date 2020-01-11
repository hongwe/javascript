// => sum是函数名,代表函数本身
// => sum()是让函数执行,代表的是函数执行返回的结果

/* function sum(n, m) {
    let result = n + m;
    result *= 10;
    result /= 2;

    console.log(result);
}

let n = 10 + 10;
n = n * 10;
n = n / 2; 
sum(10,20);
 */

//================= 形参的细节
// 创建函数的时候,设置形参变量,但如果执行的时候并没有传递对应的实参值,那么形参变量默认的是 undefined
function sum(n, m) {
    //形参默认值处理 如果没有传递形参值,给与一个默认值
    if (n === undefined) {
        n = 0;
    }
    if (typeof m === 'undefined') {
        m = 0;
    }

    let result = n + m;
    result *= 10;
    result /= 2;

    console.log(result);
}
sum(); //=> undefined undefined
sum(10); //=> undefined
sum(10, 20); //=> 150
sum(10, 20, 30); //=> 150

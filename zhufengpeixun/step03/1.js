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
/* function sum(n, m) {
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
 */

//=============================函数中的返回值

//函数执行的时候,函数体内部创建的变量我们是无法获取和操作的,如果想要获取内部信息,我们需要基于return 返回值机制,把信息返回才可以
/* function sum(n, m) {
    let result = n + m;

    console.log(result);

    //return 一定是值:此处是吧 result变量储存的值返回给外面
    return result; //=> return 30
}
sum(10, 20); //=> 30
//console.log(result); //=> Uncaught ReferenceError: result is not defined

let AA = sum(10, 20);
console.log(AA) */

//没有 return 函数默认返回值是 undefined
/* function sum(n, m) {
    let result = n + m;
}
let AA = sum(10, 20);
console.log(AA); //=> undefined
 */

function sum(n, m) {
    if (n === undefined || m === undefined) {
        // 函数体中遇到 return ,后面代码则不再执行了
        return; //=> break,continue
    }
    let result = n + m;
}
sum(10, 20);

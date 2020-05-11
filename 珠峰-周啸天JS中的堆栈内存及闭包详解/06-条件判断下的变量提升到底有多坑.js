/* 
变量提升
function fn
*/
console.log(fn); //=> undefined
if (1 === 1) {
    function fn() { //=> 函数本身:当条件成立,进入到判断题中(es6中他是个一块级作用域)第一件事并不是代码执行,而是类似变量提升一下,先把FN声明和定义了,也就是判断体中代码执行之前 fn就已经赋值了
        
        console.log('ok');
    }
}
console.log(fn); //=> 函数本身

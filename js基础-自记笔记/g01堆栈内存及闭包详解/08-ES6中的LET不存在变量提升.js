/* 
在es6中基于let /const等方式创建的变量或者函数不存在变量提升
=>写断了全局变量和window属性的映射机制
=>在相同作用域中,基于let 不能声明相同名字的变量(不管用什么方式,在当前作用下声明了变量,再次使用let创建会报错)
=>虽然没有变量提升机制,但是在当前作用域代码自上而下执行之前,浏览器会做一个重复性的检测,自上而下查找当前作用域下所有变量,一旦发现有重复,直接抛出异常,代码不会执行(虽然没有吧变量提升声明定义,但是浏览器已经记住,当前作用域有哪些变量)
*/
//console.log(a); //=>报错

/* let a =12;
console.log(window.a) //=>undefined
console.log(a) //=>12 */

/* let a = 10,
    b = 10;
let fn = function () {
    console.log(a, b);
    let a = (b = 20);
    console.log(a, b);
};
 */

/*  let a = 12;
 console.log(a)//=报错
 let a = 13; //=报错 */

let a = 10,
    b = 10;
let fn = function () {
    let a = (b = 20);
    /* 
    let a =20;
    b=20; //=>全局b=20
    */

    console.log(a, b); //=> 20,20
};
fn();
console.log(a, b); //=>10,20

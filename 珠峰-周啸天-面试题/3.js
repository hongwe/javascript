/* 3 . 箭头函数与普通函数(function)的区别是什么?构造函数(function)可以使用new生成实例,那么箭头函数可以吗?为什么 */

/*
箭头函数和普通函数的区别
1.箭头函数语法比普通函数更加简洁(es6中每一种函数都可以使用形参赋默认值和剩余运算符)
2.箭头函数没有自己的this,它里面出现的this是继承函数所处上下文中的this(使用call/apply等任何方式都无法改变this所指向)
3.箭头函数没有arguments(类数组)
4.箭头函数不能被new执行,因为箭头函数没有this,没有prototype
 */
/*
简介
function fn(x) {
    return function (y) {
        return x + y;
    };
}
let fn = x => y => x + y;
 */

/*
this
let obj = {
    name: 'OBJ',
};

function fn1() {
    console.log(this);
}
fn1.call(obj);
let fn2 = () => {
    console.log(this);
};
fn2.call(obj);
 */

/* document.body.onclick = () => {
    //=>this:window不是当前操作的body了
};

document.body.onclick = function () {
    //=>this:body
    // arr.sort(function (a, b) {
    //     //=>this:window 回调函数中的this一般都是window
    //     return a - b;
    // });

    arr.sort((a, b) => a - b);
    //=>this:body
};
//=>回调函数:把一个函数B作为实参传递给另外一个函数A,函数A在执行的时候,可以把传递进来的函数B去执行(执行N次,可传值,可改this)
function each(arr, callBack) {
    //=>callBack:function(itme,index){}
    for (let i = 0; i < arr.length; i++) {
        // let item = arr[i],
        //     index = i;
        // callBack(item, index);

        //callBack(arr[i],i)

        //callBack.call(arr, arr[i], i);

        let flag = callBack.call(arr, arr[i], i);
        //=>接受回调函数返回的结果,如果是false,我们结束循环
        if (flag === false) {
            break;
        }
    }
}

each([10, 20, 30, 40], function (item, index) {
    //=>this:原始操作数组
    if (index > 1) {
        return false;
    }
});
 */

/* let fn = () => {
    console.log(arguments);
};

let fn1 = (...arg) => {
    console.log(arg);
};
fn(10, 20, 30); //=>报错
fn1(10, 20, 30);
 */

/* function Fn() {
    this.x = 100;
}
Fn.prototype.getX = function () {};
let f = new Fn(); */

/* let Fn = () => {
    this.x = 200;
};
let f = new Fn(); */

/* 思考题 */

// 1.each
let arr = [10, 20, 30, 'AA', 40],
    obj = {};
arr = arr.each(function (item, index) {
    //=> this:obj(each 第二个参数不传,This是window即可)
    if (isNaN(item)) {
        return false; //=>如果return是false,则结束当前数组的循环
    }
    return item * 10; //=>返回的结束是啥,就把数组当前项替换成啥
}, obj);
//arr = [100,200,300,'AA',40]

//2. replace
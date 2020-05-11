//this 默认指向window
//1.全局环境下this指向window
/* console.log(this); */

//2.函数独立调用,函数内部的this也指向window
/* function fn() {
    console.log(this);
}
fn();
 */
/* var obj = {
    a: 2,
    foo: function () {
        function test() {
            console.log(this);
        }
        test();
    },
};
obj.foo(); //=>  window */

//3.被嵌套的函数独立调用,函数内部的this也指向window
/* var a = 0;
var obj = {
    a: 2,
    foo: function () {
        //函数当作对象的方法来调用,this指向window
        var _this = this;
        function test() {
            console.log(_this.a, this.a);
        }
        test();
    },
};

obj.foo(); //=>2 0 */

//4.IIFE自执行函数中内部的this指向window
/* var a = 10;
function foo() {
    console.log(this.a);
    (function test() {
        console.log(this.a);
    })();
}

var obj = {
    a: 2,
    foo: foo,
};
obj.foo();
//=>2
//=>10 */
/* 
var a = 10;
function foo() {
    console.log(this.a);
    (function test(that) {
        console.log(that.a);
    })(this);
}

var obj = {
    a: 2,
    foo: foo,
};
obj.foo();

//=>2
//=>2 */

/* (function () {
    console.log('自执行函数中的内部this: ' + this);
})(); */
//=>自执行函数中的内部this: [object Window]

//5.闭包 this默认指向window
/* var a = 0;
var obj = {
    a: 2,
    foo: function () {
        var _this = this;
        return function test() {
            return _this.a + '-' + this.a;
        };
    },
};
var fn = obj.foo();
console.log(fn());

//=>2-0
 */
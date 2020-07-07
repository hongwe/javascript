var r1 = 12.34;
var r2 = 9.08;
var r3 = 73.1;
var s1 = 3.14 * r1 * r1;
var s2 = 3.14 * r2 * r2;
var s3 = 3.14 * r3 * r3;

/* 
    totleSum  求两个数之间得总和

*/
/* 
function totleSum(n1, n2) {
    var num = null;
    if (n1 > n2) {
        var n = n2;
        n2 = n1;
        n1 = n;
    }
    for (var i = n1; i <= n2; i++) {
        num += i;
        console.log(num);
    }
} */

/* function abs(x){
    if ( isNaN(x) ){
        return console.log('非有效数字')
    }
    if(x>0){
        return x
    } else{
        return -x
    }
} */
/* function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
} */
/* 
function foo() {
    return;
    {
        name: 'foo';
    }
}

function area_of_circle(r, pi) {
    'use strict';
    if (arguments.length < 2) {
        console.log(arguments[0])
        var pi = 3.14;
    }

    var area = pi * r * r;
    return area;
}

if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    console.log(area_of_circle(2));
    console.log(area_of_circle(2, 3.1416));
    console.log('测试通过');
} else {
    console.log(area_of_circle(2));
    console.log(area_of_circle(2, 3.1416));
    console.log('测试失败');
}
 */

/* 
function foo() {
    var x = 1;
    x = x + 1;
}

function bar() {
    var x = 'A';
    x = x + 'B';
} */

/* function foo() {
    var x = 1;
    function bar() {
        var y = x + 1; // bar可以访问foo的变量x!
    }
    var z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
} */

/* var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};
MYAPP.date1 =[1,2,3] */

/* var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
}; */

/* function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25, 正常结果
getAge(); */

// (function (x) {
//     return x * x;
// })(3);

/* var MYAPP = {};

MYAPP.n1 = null;
MYAPP.n2 = null;
MYAPP.add = add;
MYAPP.sub = sub;

function add(x, y) {
    this.n1 = x;
    this.n2 = y;
    return this.n1 + this.n2;
}

function sub(x, y) {
    this.n1 = x;
    this.n2 = y;
    return this.n1 - this.n2;
}

MYAPP.add(1, 2);
 */

function Cat(name) {
    this.name = name;
    //console.log(this);
    // this.say =function(){ return 'Hello, ' + this.name + '!';}
    //Cat.prototype.say = function(){ return 'Hello, ' + this.name + '!';}
}

var kitty = new Cat('Kitty');

var doraemon = new Cat('哆啦A梦');
kitty.__proto__.say = function () {
        //console.log(this);
        return 'Hello, ' + this.name + '!';
  };
// console.log(kitty)
// console.log(kitty.name)
// console.log(kitty.say)
// console.log(typeof kitty.say)
// console.log(kitty.say())
// console.log(kitty.say === doraemon.say)
// console.log(kitty.say)
// console.log(doraemon.say)

//
/* 
Cat {name: "Kitty", say: ƒ}
函数.js:167 Kitty
函数.js:168 ƒ (){ return 'Hello, ' + this.name + '!';}
函数.js:169 function
函数.js:170 Hello, Kitty!
函数.js:171 false
函数.js:181 测试失败!
 */

/* 
Cat {name: "Kitty"}
函数.js:167 Kitty
函数.js:168 ƒ (){ return 'Hello, ' + this.name + '!';}
函数.js:169 function
函数.js:170 Hello, Kitty!
函数.js:171 true
函数.js:189 测试通过
 */

if (
    kitty &&
    kitty.name === 'Kitty' &&
    kitty.say &&
    typeof kitty.say === 'function' &&
    kitty.say() === 'Hello, Kitty!' &&
    kitty.say === doraemon.say
) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

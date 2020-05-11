//严格模式下 this 指向
//1. 严格模式下,独立调用的函数内部this指向undefined
function fn() {
    'use strict';
    console.log(this);
}
fn(); //=>undefined
//2. 严格模式下,函数apply()和call()内部this始终是他们第一个参数
var color = 'red';
function showColor() {
    console.log(this.color);
}
showColor.call(null); //=>red

var color = 'red';
function showColor() {
    'use strict';
    console.log(this);
    console.log(this.color);
}
showColor.call(undefined);

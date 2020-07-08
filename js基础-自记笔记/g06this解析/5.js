//new绑定
function fn() {
    //如果是new关键来执行函数,相当于构造函数实例化读一下,那么内部的this指向当前实例化的对象
    console.log(this);
    return;
}
fn(); //=>window
new fn(); //=>fn{}

var fn = new fn();
console.log(fn);
//=>fn{}
//=>fn{}

function fn2() {
    //this还是指向当前的对象
    console.log(this);
    //使用return关键来返回对象的时候,实例化出来的对象是当前返回对象
    return {
        name: 'mjj',
    };
}
var fn2 = new fn2();
console.log(fn2);
//=>fn2 {}
//=>{name: "mjj"}

var person = {
    fav: function () {
        return this;
    },
};
var p = new person.fav();
console.log(p, p === person); //=>fav {} false
//实例化出来的对象内部属性constructor属性指向了当前的构造函数
console.log(p.constructor === person.fav); //=>fav {} true

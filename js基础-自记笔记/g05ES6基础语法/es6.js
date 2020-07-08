/* 
let obj = {};
let fn = (context = window,...args) => {
    //console.log(arguments);//=>Uncaught ReferenceError: arguments is not defined箭头函数中没有arguments
    // ...args :剩余运算符(把除第一项外的,其他传递的实参信息都存储到ARGS这个数组集合中)
    console.log(args);
    
};
fn(obj, 10, 20, 30); //=>context :obj arg:[10,20,30]
fn();//=>context:window
 */
/* 
window.name = 'WINDOW';
let obj = {
    name: 'OBJ',
};
let fn = (n) => {
    console.log(this.name);
};
//FN所处的执行上下文中THIS是WINDOW
fn(10); //=>this:window
fn.call(obj, 10); //=>this:window 不是我们预期的OBJ

document.body.onclick = fn;//=>this:window 不是我们预期的BODY
obj.fn(10);//=>this:window 
 */

/* 
let obj ={
    name: 'OBJ',
    fn: function(){
        //=>this:obj 普通函数有自己的THIS的
        let f=() =>{
            console.log(this);
        }
        f(); //=>this:obj
    }
}
obj.fn();
 */

/* 
let obj ={
    name: 'OBJ',
    fn: function(){
        //=>this:obj 普通函数有自己的THIS的
        let f=() =>{
            console.log(this);
        }
        f(); //=>this:obj
        return f;
    }
}
let f = obj.fn();
f(); //=>this:obj 
*/
/*
 let obj = {
    name: 'OBJ',
    fn: function () {
        //this:obj
        //...
        //原本期望的需求 1s后把OBJ中的NAME改成'珠峰'
     
        setTimeout(function () {
            console.log(this); /=>windows
            this.name = '珠峰';
        },1000);
    
         let _this = this;

        setTimeout(function () {
            console.log(this,_this);
            _this.name = '珠峰';
 
        setTimeout(() => {
            console.log(this);//=>OBJ
            this.name = '珠峰';
        }, 1000);
    }
};
obj.fn();
 
*/

//==========================
//=>数值解构赋值
/*let ary = [10, 20, 30, 40, 50];
 let name = ary[0],
    m = ary[1],
    x = ary.slice(2); 
    */
/* 
    ...x拓展运算符:把剩下的内容存储到x种(x是个数组),但是它只能出现在最后
   */
/* //let [n, m, ...x] = ary;
//console.log(n,m,x); //=>10 20 [30, 40, 50] */
/* let [n,,m] = ary;
console.log(n,m);//=>10 30  */
//let [n, , m, , , x = 0] = ary; //如果没有这一项,我们可以基于等号赋值默认值
//console.log(n, m, x); //=>10 20 0
//=>多为数值解构赋值
//let ary1= [10, [20, 30, [40, 50]]];
//获取10和50
//let [n, [, , [, m]]] = ary1;
//console.log(n, m);

//=>对象的解构赋值
//=>创建的变量要和对象的属性名一致(默认)
/* 
let obj = {
    name: '王汇丰',
    age: 79,
    sex: 'BOY',
    friend: ['唐唐', '郭郭', '王王', '李李'],
};

let {name,sex} = obj;
console.log(name,sex); //=>王汇丰 BOY */
//=>冒号相当于给获取的结果设置了一个别名(变量名):创建了一个叫做nianling的变量存储与obj.age的值
/* let {
    age:nianling
} = obj;

console.log(nianling); //=>79 */
//=>获取的结果设置默认值,(没有这个属性走的是默认值)

//=>多维对象获取
/* let {
    name,
    friend: [firstFriend],
} = obj;

console.log(name, firstFriend); //=>王汇丰 唐唐
 */

//class 创建类

//传统es3/es5创建类的方法
/* function Fn() {
    this.x = 100;
}
Fn.prototype.getX = function () {
    console.log(this.x);
};

var f1 = new Fn();
f1.getX();
//也可以当作普通函数执行
Fn();
//还可以把Fn当作普通的对象键值对
Fn.queryX = function () {};
Fn.queryX();
 */
//es6中类创建
/* class Fn {
    //等价与之前的构造函数体
    constructor() {
        this.x = 100;
    }
    //给实例设置私有属性
    y = 200;
    //直接写的方法就是加载原型上的 === Fn.prototype.getX...
    getX() {
        console.log(this.x);
    }
    //前面设置static的:把当前Fn当作普通对象设置键值对
    static queryX() {}
    static z = 300;
    //=>但是这样写再原型上和私有属性上的只能是方法属性,其余类型值属性无法编写,会产生语法错误
}
//也可以在外面单独这样写
//Fn.prototype.getX = function () {};
//Fn.prototype.y = 200;
//Fn.z = 300; 
let f = new Fn(10, 20);
f.getX();
Fn.queryX();

fn();// =>Uncaught TypeError: Class constructor Fn cannot be invoked without 'new' => class创建的类只能new执行,不能当作普通函数执行
 */

//ES6中模板字符串

/* let year = '2019',
    month = '08',
    day = '09';
//=> "你好,今天是2019年08月09日,今天天气很糟糕~"
let res =
    '你好,今天是' + year + '年' + month + '月' + day + '日,今天天气很糟糕~';
console.log(res); */

/* let ID = 'box';
let html = '<ul class="list clear" id = "' + ID + '"></ul>'; */
//=>我们真是项目中会大量进行字符串拼接操作(尤其是需要动态绑定数据:把现有HTML代码拼接成有数据的HTML字符串),传统ES3语法模式下拼接字符串是一个非常苦逼的任务

let year = '2019',
    month = '08',
    day = '09';

//=>反引号(撇) TAB键上面的(ES模板字符串语法)
// ${} 模板字符串中书写JS表达式的方式n(凡是有输出结果的都可以被称为JS表达式)
let res = `你好,今天是${year}年${month}月${day}日,今天天气很糟糕~`;
console.log(res);

let ID = 'box';
let html = `<div>
                <ul>
                    <li id="${ID}"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>`;

console.log(html);

//传统方式拼接一套html字符串,还需要一行一行处理,非常麻烦

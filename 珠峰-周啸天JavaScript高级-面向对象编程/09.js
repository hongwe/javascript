/* 

原型(prototype)\原型链(__proto__)

[函数]
    普通函数,类(所有的类:内置类,自己创建的类)

[对象]
    普通对象,数组,正则,Math,arguments...
    实例是对象类型的(除了基本类型的字面量创建的值)
    prototype的值也是对象类型的
    函数也是对象类型的
    ...
1. 所有的函数数据类型都天生自带一个属性:prototype(原型),这个属性的值是一个对象,浏览器会默认给他开辟一个堆内存
2. 在浏览器给prototype 开辟的堆内存中有个天生自带属性: constructor,这个属性存储的值是当前函数本身
3. 每一个对象都有一个 __proto__的属性指向当前实例所属的类的prototype(如果不能确定它是谁的实例,都是Object的实例)


图9-1
原型链
它是一种基于 __proto__向上查找的机制.当我们操作实例的某个属性或者方法的时候,首先先找自己空间私有属性或方法
1,找到了,则结束查找,使用自己私有的即可
2.没有找到,则基于 __proto__找所属类的prototype,如果找到就用这个共有的,如果没找到,基于原型上的__proto__继续向上查找,一直找到Object.prototype的原型为止,如果再没有,操作的属性或方法不存在


*/

function Fn() {
    var n = 100;
    this.AA = function () {
        console.log('AA[私]')
    };
    this.BB = function () {
        console.log('BB[私]')
    }
}
Fn.prototype.AA = function () {
    console.log('AA[公]')
}
var f1 = new Fn
var f2 = new Fn

/* 
9-2
*/
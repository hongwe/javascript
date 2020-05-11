//=> 在全局作用域下声明一个变量,也相当于给window全局对象设置了一个属性,变量的值就是属性值(私有作用域中声明的私有变量和WINDOW没啥关系)
console.log(a); //=>undefined
console.log(window.a); //=>undefined
console.log('a' in window); //=>TURE,在变量提升阶段,在全局作用域中声明了一个变量A,此时就已经把A当作属性赋值给WINDOW,只不过此时还没有给A赋值,默认值UNDEFINED, in:检测讴歌属性是否隶属雨这个对象

var a = 12; //=>全局变量值修改,WIN的属性值也跟着修改
console.log(a); //=>全局变量 A      12
console.log(window.a); //=>WINDOW的一个属性名 A      12

a = 13;
console.log(window.a); //=>13

window.a = 14;
console.log(a); //=>14

//=>全局变量和WINDOW中的属性存在"映射机制"

/* ...  */
//不加VAR  是WINDOW下的属性
/* console.log(window.a);//=>undefined
console.log('a' in window);//=>false
a = 12;//=>window.a=12 的省略写法
console.log(a);//=>12
console.log(window.a);//=>12
for (i = 0; i < 5; i++) {}
 */

/* ...  */
/* 
var a = 12,
    b = 13;b //=>这样行 b带var

var a = b = 12; //=>这样行 b不带var */
console.log(a, b); //=>undefined  undefined
var a = 12,
    b = 12;
function fn() {
    console.log(a, b); //=>undefined  12
    var a = b = 12;
    console.log(a, b);//=>12  12
}
fn()

//图3-1
//私用作用域中带VAR和不带也有区别
/* 1,带var的在私有作用域变量提升阶段,都声明为私有变量 
2.不带var的不是私有变量,会向它的上级作用域查找,看是否为上级的变量,不是,继续向上查找,一直找到window位置(机制:"作用域链"),也就是我们在私有作用域中操作的这个非私有变量,是操作别人的
*/
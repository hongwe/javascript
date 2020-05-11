/*
构造函数执行,不写return,浏览器会默认返回创建的实例,但是我们自己写了RETURN?
1. return 是一个基本值,返回的结果依然是类的实例,没有受到影响
2. 如果返回的是引用之,则会把默认返回的实例覆盖,此时接收到的结果就不在当前类的实例了

    =>构造函数执行的时候,尽量减少用RETURN的使用,防止覆盖实例
 */
function Fn() {
    var n =10;
    this.m =n;
    //return '哈哈';
    //return { name: '哈哈'};
    return//=>  这样RETURN是结束代码执行的作用,并且不会覆盖返回的实例
    console.log(1);
    
}
var f = new Fn(); //=> new Fn; 在构造函数执行时候,如果Fn不需要传递实参,我们可以省略小括号,意思还是创建实例(和加小括号没有区别)

console.log(f);


//=>instanceof; 检测某一个实例是否隶属于这个类
console.log(f instanceof Fn)//=>true
console.log(f instanceof Array)//=>false
console.log(f instanceof Object)//=>true  (万物皆对象:所有的对象,包含创建的实例都是Object的实例)

console.log(1 instanceof Number)//=>false

n
//=>in; 检测当前对象是否存在某个属性 (不管当前这个属性是对象的私有属性 还是公有属性,只要有结果就是TURE)

console.log('m' in f)//=>true
console.log('n' in f)//=>false
console.log('toString' in f)//=>true

//=> hasOwnProperty; 检测当前属性是否为对象的私有属性 (不不仅要有这个属性,而且必须还是私有属性才可以)

console.log(f.hasOwnProperty('m'))//=>true
console.log(f.hasOwnProperty('n'))//=>false 连这个属性都没有
console.log(f.hasOwnProperty('toString'))//=>false 虽然有这个属性但不是私有属性



//=> 思考题 : 编写一个方法 hasPubProperty  检测当前属性是否为对象公有属性 和 hasOwnProperty 对应

function hasPubProperty(obj,arrt){
    //=>OBJ:需要检测的对象
    //=>ATTR:需要检测的属性
}


console.log(hasPubProperty(f,'m'))
console.log(hasPubProperty(f,'n'))
console.log(hasPubProperty(f,'toString'))
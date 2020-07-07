/* 
单例设计模式(Singleton Pattern)
1.表现形式
var obj = {
    xxx:xxx,
    ...
}
在单例设计模型中,OBJ不仅仅是对象名,它被称为"命名空间[NameSpace]",把描述事物的属性存放到命名空间中,多个命名空间是独立分开的,互不冲突

2.作用
把描述同一件事物的属性和特征进行'分组 ,归类'(存储在同一个堆内存空间中),因此避免的全局变量直接的冲突和污染
var parent1={name:'xxx'}
var parent2={name:'xxx'}

3.单例设计模型命名的由来
每一个命名空间都是js中object这个内置基类的实例,而实例之间是互相独立互不干扰的,所以我们称它为"单例:单独的实例"
*/

//
/* var name = '陆相莹';
    var age = 18;
    var sex = 'girl';

    var name = '刘司南';
    var age = 81;
    var sex = 'boy'; 
    */

// 单例设计模式 Singleton Pattern
/* var parent1={
        name:'陆相莹',
        age = 18
    }

    var parent2={
        name:'刘司南',
        age = 81
    }
    */

/* var obg - {
        xxx:'xxx'
    } */

/* 
    高级单例模式
    1.在内命名空间赋值的时候,不是直接赋值一个对象,而是先执行匿名函数,形成一个私有作用域AA(不销毁的栈内存),在AA中创建一个堆内存,把堆内存地址赋值给命名空间
    2.这种模式好处,我们可以在AA中创造很多内容(变量OR函数),哪些需要提供外面调取使用的,我们暴露返回对象中(模块化实现的一种思想)
*/
var nameSpace = (function () {
    var n = 12;
    function fn() {
        //...
    }
    function sum() {
        //...
    }
    return {
        fn: fn,
        sum: sum,
    };
})();

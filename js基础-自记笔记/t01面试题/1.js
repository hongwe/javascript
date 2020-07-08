/* 1.call 和apply 区别是什么,哪个性能更好一些?  */
//fn.call(obj, 10, 20, 30);
//fn.apply(obj, [10, 20, 30]);
//=>call的性能要比apply好那么一些,尤其是传递的参数超过三个的时候,所以后期开发的时候,可以使用call多一点
let arr = [10, 20, 30],
    obj = {};
function fn() {}
fn.apply(obj, arr); //=>x=19 y=20 z=30
fn.call(obj, arr); //=>x=[10,20,30],y=z=undefined
// fn.call(obj, ...arr); //=>基于es6的展开运算符也可以实现把数组中的每一项依次传递给函数
//=>自己实现性能测试(结果只供参考):任何的代码性能测试都适合测试的环境有关系,例如cpu,内存,gpu等电脑当前性能不会有相同的情况,不同的浏览器也会导致性能上的不同:
//console.profile() 在火狐浏览器中安装fireBug可以更精准的获取到当前程序每一个步骤所消耗的时间
console.time('A');
//let t1=new Date();
for (let i = 0; i < 1000000; i++) {}
//console.log(new Date() - t1)
console.timeEnd('A');


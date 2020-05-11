var p1 = {
    name: '',
    age: 29,
};
var p2 = {
    name: '',
    age: 29,
};

/*
    工厂模式   (Factory Pattern)
    1. 把实现功能相同的代码进行"封装,以此来实现"批量生产"(后期想要实现这个功能,我们只需要执行函数即可)
    2. "低耦合高内聚":教师啊页面的冗余代码,提高代码的重复使用率

    注: 比较低端,不推荐
*/
function CreatPerson(name, age) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    return obj;
}
var p1 = CreatPerson('xxx', 29);
var p2 = CreatPerson('xxx', 25);

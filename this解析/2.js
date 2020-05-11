function foo() {
    console.log(this.a);
}

//当函数当作方法来调用,this直接指向对象

var obj = {
    a: 1,
    foo: foo,
    obj2: {
        a: 2,
        foo: foo,
    },
};
//foo()函数直接对象是obj，this的指向指向了直接对象
obj.foo(); //=>1
//foo()函数直接对象是obj2，this的指向指向了直接对象
obj.obj2.foo(); //=>2

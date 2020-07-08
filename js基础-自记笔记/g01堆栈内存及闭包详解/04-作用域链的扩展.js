function fn() {
    /* 
    变量提升无
     */
    b = 13;
    //console.log('b' in window); //=> true   在作用域链查找的过程中,如果找到window也没这个变量,相当于给window设置了一个属性b(window.b=13)
    console.log(b);
}
fn();
console.log(b);

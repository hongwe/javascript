/* var a = 12;
if (true) {
    console.log(a); //报错
    let a = 13; //=> 基于let创建变量,会把大部分{}当作一个私有块级作用域(类似函数四哟哟作用域,这里也是重新检测语法规范,看一下是否居于新语法创建的变量,如果是按照新语法规划来解析)
} */

/*
 */

/* 
 console.log(typeof a); //=>undefined  在原有浏览器渲染机制下 基于typeof 等于逻辑运算符检测一个未被声明的变量,不会报错,返回undefined

  */

/* 
  console.log(typeof a) ; //=>报错
  let a = 12; //=>如果当前变量基于es6语法处理,在没有声明这个变量的时候,使用typeof检测会直接报错,不是undefined,解决的暂时性死区问题

  */

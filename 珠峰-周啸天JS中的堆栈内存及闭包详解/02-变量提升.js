//
/*
变量提升:
=> 当栈内存(作用域)形成,JS代码自上而下执行之前,浏览器首先会把所有带 "VAR"/"FUNCTION"关键词的进行"声明"或者"定义",这种预先处理的机制称为"变量提升"


=> 声明(declare):var a(默认值undefined)
=> 定义(definde):a=12(定义其实就是赋值操作)

[变量提升阶段]
=>带"VAR"的只声明未定义
=>带"FUNCTION"的声明和符值都完成了

=>变量提升只发生在当前作用域(例如:开始加载页面时候只对全局作用域虾的进行提升,因为此时函数中存储的都是字符串而已)
=>在全局作用域下声明的函数或者变量是"全局变量",同理,在私有作用域声明的变量是"私有变量"[带 "VAR"/"FUNCTION"的才是声明]

=>浏览器很懒,做过的事情不会重复执行第二遍,也就是,当代码执行遇到创建函数这部分代码后,直接跳过即可(因为在提升阶段就已经完成函数的赋值操作了
    )
 */
console.log(a); //=>undefined
var a = 12;

function sum() {
    var total = null;
    for (var i = 0; i < arguments.length; i++) {
        var item = arguments[i];
        item = parseFloat(item);
        !isNaN(item) ? (total += item) : null;
    }
    return total;
}

//图2-1

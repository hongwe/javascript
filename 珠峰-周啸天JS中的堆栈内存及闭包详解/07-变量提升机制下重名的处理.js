/* 
1.带var和带function关键字声明相同的名字,这种算重名(其实是一个fn,只是存值类型不一样)
*/
/* 
var fn =12
function fn(){} */

/* 
2.关于重名的处理:如果名字重复,不会重新声明,但会重新定义(重新赋值)[不管是变量提升还是代码执行阶段皆是如此]
*/

/* 
变量提升
fn  = ...(1)
    = ...(2)
    = ...(3)
    = ...(4)
 */
fn() //=>4
function fn() {console.log(1);}
fn()//=>4
function fn() {console.log(2);}
fn()//=>4
var fn = 100
fn() //=>报错
function fn() {console.log(3);}
fn()//=>不执行
function fn() {console.log(4);}
fn()//=>不执行
/* 
let a = 10;
if(!a){
    //条件多样性,最后要计算出 true还是false
}
if (a <= 0) {
    console.log('haha');
} else if (a > 0 && a < 10) {
    //A && BB :A和B都成立才true
    //A || BB :A或B只有一个成立就true
    console.log('hehe');
} else if (a == 10) {
    console.log('heihei');
} else {
    console.log('xixi');
} */

//=====================三元运算符:简单 if/else的特殊处理方式

/* 
let a =10
if (a>=10) {
    console.log('haha')
} else {
    console.log('hehe')
}
 */

// 条件?条件成立处理的事情:不成立处理的事情
// 1.如果处理的事情比较多,我们用括号包起来,每一件事情用逗号分隔Z
// 2.如果不需要处理事情,可以使用null/undefined 占位

/* 
let a =10
a>=10? console.log('haha'):console.log('hehe') 
*/

/* 
let a = 10;
if (a > 0 && a < 20) {
    a++; //=>a+1 a=a+1 =>自身累加1
    console.log(a);
}
a > 0 && a < 20 ? (a++, console.log(a)) : null; 
*/
/* 
let a = 10;
if (a > 0) {
    if (a < 10) {
        a++;
    } else {
        a--;
    }
} else {
    if (a > -10) {
        a += 2;
    }
}
a > 0 ? (a < 10 ? a++ : a--) : a > -10 ? (a += 2) : null;
 */

//======================switch case  一个变量在不同值情况下不同操作
// 1. 没中case情况结束后最好都加上BREAK
// 2. default等价于else,以上都不成立干的事情
// 3. 每一种 case用的是 === "绝对相等"

//不加 BREAK 当前条件完成执行后 后面条件不论是否成立都要执行,直到遇到break(不加break可以实现变量在某些值的情况下 做相同的事情)=>编程开发人员需要具备探索之心
let a = 10;
switch (a) {
    case 1:
        console.log('hehe');
        break;
    case 2:
        console.log('xixi');
        break;
    case 3:
        console.log('haha');
        break;
    default:
        console.log('huhu');
        break;
}
let b = 1;
switch (b) {
    case 1:
    case 2:
        console.log('xixi');
        break;
    case 3:
        console.log('haha');
        break;
    default:
        console.log('huhu');
        break;
}
/* 
let ary = [12, 23, 34, 45];
console.log(typeof ary);
console.dir(ary);

ary ={
    0: 12
    1: 23
    2: 34
    3: 45
    length: 4
}

数字作为索引(KEY 属性名)
length代表长度

ary[0] 根据索引获取指定项的内容
ary.length 获取数组的长度
ary.length-1 最后一项的索引

*/


//push  向数组末尾增加内容


/* let ary = [10, 20,30];
let res = ary.push(30, 'AA');
console.log(res,ary);
// 基于原生js操作键值对的方法,也可以向末尾追加一项新的
ary[ary.length] = 40
console.log(res,ary); 
 */

/* 
//unshift :向数组开始位置增加内容
-   @params
    -   多个任意类型
-   @return
    -   新增后的数组长度
 */
let ary = [10, 20];
let res = ary.unshift(30, 'AA');
console.log(res,ary); 
// 基于原生es6展开运算符,把原有ary克隆一份,再新的数组中创建第一项,其余内容是由原始ary中的信息即可,也算实现了向开始追加的效果
ary = [100, ...ary]
console.log(res,ary);

/* 
-   `shift` : 删除数组中的第一项
-   @params
    -   多个任意类型
-   @return
    -   删除的那一项
 */

/* let ary = [10, 20, 30, 40];
let res = ary.shift();
console.log(res, ary); //=> 10   [20,30,40]


//基于原生js中的delete,把数组当作普通的对象,确实可以删除掉某一项内容,但是不会影响数组本身的结构特点(length长度不会跟着修改),真实项目中杜绝这样的删除使用
delete ary[0] 
console.log(ary) //=>{1:30,2:40,length:3} */

/* 
-   `pop` : 删除数组中的最后一项
-   @params
    -   多个任意类型
-   @return
    -   删除的那一项
 */

/* let ary = [10, 20, 30, 40];
let res = ary.pop();
console.log(res, ary); //=> 40   [10,20,30]
//基于原生js 让数组数组长度干掉一位,默认干掉的就是最后一项
ary.length--; //=> ary.length = ary.length-1
console.log(ary); //=> [10,20,30] */

/* let ary = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let res = ary.splice(2, 4);
console.log(res, ary); //=> [30,40,50,60]   [10,20,70,80,90]
//基于这种方法可以清空一个数组,把原始数组重的内容以新数组存储起来(有点类似素组的克隆:把原来数组克隆一份一模一样的给新数组)
res = ary.splice(0);
console.log(ary);
//删除最后一项和第一项
ary.splice(ary.length - 1);
ary.splice(0, 1);
console.log(ary); */

/* let ary = [10, 20, 30, 40, 50];
let res = ary.splice(1, 2,'珠峰培训');
console.log(res, ary); //=> [20,30] [10,'珠峰培训',40,50]
//实现增加
ary.splice(3, 0,'呵呵呵');
console.log(ary);//=>  [10,'珠峰培训','呵呵呵',40,50]
//向数组末尾追加
ary.splice(ary.length, 0,'AAA');
console.log(ary);//=>  [10,'珠峰培训','呵呵呵',40,50,'AAA']

//向数组开始追加

ary.splice(0, 0,'BBB');
console.log(ary);//=>  ['BBB',10,'珠峰培训','呵呵呵',40,50,'AAA']

 */

/* 
-   `slice` : 实现数组的查询
-   @params
    -   n,m都是数字  从索引n开始,找到索引为m的地方(不包括m这一项)
-   @return
    -   把找到的内容以一个新数组的形式返回
 */

/* let ary = [10, 20, 30, 40, 50];
let res = ary.slice(1, 3);

console.log(res, ary); //=>  [20,30] [10, 20, 30, 40, 50]
//m不写 是找到末尾
res = ary.slice(1);
console.log(res); //=> [20, 30, 40, 50]
//数组的克隆,参数0也可以不写
res = ary.slice(0);
console.log(res); //=> [10,20, 30, 40, 50] */

//思考题 1.n和m为负数会咋的,如果n>m会咋地,如果是小数会咋地,如果是非有效数字会咋地,如果m或n的值大于索引会咋地
//2.这种克隆方式教师浅克隆,可以回去先看看深度克隆如何处理

/* res = ary.slice(2,1);
console.log( res + '   n>m'); 
res = ary.slice(1.2,3);
console.log( res + '   n小数'); 
res = ary.slice(1,3.6);
console.log( res + '   m小数'); 
res = ary.slice( 'a',3);
console.log( res + '   n字符串'); 

res = ary.slice( 1,'b');
console.log( res + '   m字符串'); 

res = ary.slice(1,8);
console.log( res + '   n,m大于索引');  */

/* 
`concat`

-   `concat` : 实现数组的拼接
-   @params
    -   多个任意类型值
-   @return
    -   拼接后的新组数(原来数组不变)
 */
/* 
let ary1 = [10, 20, 30];
let ary2 = [40, 50, 60];
let res = ary1.concat('珠峰培训')
console.log(res)
res = ary1.concat()
console.log(res)

res = ary1.concat('珠峰培训',ary2)
console.log(res)
 */

/* 
`toString`

-   `toString` : 把数组转化为字符串
-   @params
    -  无
-   @return
    -   转换后的字符串,每一项用逗号分隔(原来数组不变)
 */

/* let ary = [10, 20, 30];

let res = ary.toString();
console.log(res); //=> "10,20,30"
console.log([].toString()); //=> ""
console.log([12].toString()); //=> "12" */

/* 
`join`

-   `join` : 把数组转化为字符串
-   @params
    -  指定的分隔符(字符串格式)
-   @return
    -   转换后的字符串(原来数组不变)
 */

/* let ary = [10, 20, 30];

let res = ary.join('');
console.log(res); //=> "102030"

res = ary.join(' ');
console.log(res); //=> "10 20 30"

res = ary.join('|');
console.log(res); //=> "10|20|30"

res = ary.join('+');
console.log(res); //=> "10+20+30"
//组数求和
console.log(eval(res)); //=> 60  eval把字符串变成JS表达式执行 */

/* 

indexOf / lastIndexOf / includes
-   `indexOf / lastIndexOf` : 检测当前项在数组中第一次或者最后一次出现的位置的索引值(ie6-8不兼容)
-   @params
    -  要检测的这一项内容
-   @return
    -   这一项出现的位置索引值(数字),如果数组中没有这一项,返回的结果是 -1
    原来数组不变
 */

/* let ary = [10, 20, 30, 10, 20, 30];

console.log(ary.indexOf(20)); //=>1
console.log(ary.lastIndexOf(20)); //=>s4
//想验证ary中是否包含'珠峰培训'

if (ary.indexOf('珠峰培训') === -1) {
    //不包含
}
//es6  includes
console.log(ary.includes(30)); //=>true
if (ary.includes('珠峰培训')) {
    //包含:如果存在返回值是true
}
 */
/* 

reverse
-   `reverse` : 把数组倒过来排列
-   @params
    -  
-   @return
    -   排列后的新数组,
    原来数组改变
 */
/* 
let ary = [12, 15, 9, 28, 10, 22];
ary.reverse()
console.log(ary); //=> [22, 10, 28, 9, 15, 12]
 */

/* 

sort
-   `sort` : 实现数组的排序
-   @params
    -  可以没有,也可以是个函数
-   @return
    -   排列后的新数组,
    原来数组改变
 */
//sort方法中如果不传递参数,是无法处理10以上的数字排序的(它默认按照第一项第一个字符来排列,不是我们想要的效果),想要实现多位数正常排序,需要给sort传递一个函数,函数中返回 `a-b` 实现升序,返回 `b-a` 实现降序(为啥?需要先了解冒泡排序机制,后续学习)
/* let ary = [12, 15, 9, 28, 10, 22];
ary.sort();
console.log(ary); //=> [10, 12, 15, 22, 28, 9] */
/* 
ary.sort(function (a,b) {
    ...
})
 */
/* ary.sort(function(a, b) {
    console.log(a, b);
}); */
/* ary.sort(function(a, b) {
    return a - b;
}); */
/* ary.sort((a, b) => a - b);
console.log(ary); //=> [9, 10, 12, 15, 22, 28] */

/* 

-   `forEach` : 遍历数组中的每一项内容
-   @params
    -  回调函数
-   @return
    -   
    原来数组不变

*/

/* let ary = [12, 15, 9, 28, 10, 22]; */

//基于原生js中的循环可以实现

/* for (let i = 0; i < ary.length; i++) {
    //i:当前循环这一项的索引
    //ary[i] :根据索引循环这一项
    console.log('索引:' + i + ' 内容' + ary[i]);
} */

/* ary.forEach((item, index) => {
    //数组中有多少项,函数就会被默认执行多少次
    //每一次执行函数:item是数组中当前要操作的这一项,index是当前项的索引
    console.log('索引:' + index + ' 内容' + item);
}); */
/* ary.forEach( function (item, index) {
    console.log('索引:' + index + ' 内容' + item);
}) */
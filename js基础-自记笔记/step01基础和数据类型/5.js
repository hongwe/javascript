function sampl5() {
    let a = 12;
    let b = a;
    b = 13;
    console.log(b);
    console.log(a);

    let n = { name: '珠峰' };
    let m = n;
    m.name = '培训';
    console.log(n.name);

    /* 
        变量存储    值存储          堆内存aaafff000
        n         aaafff000         0:10 100
                                    1:20
                                    2:400
                                    length:3
        m           同上
        x           同上
        x           aaafff111       0:30 => 200
                                    1:40 => 300
                                    length:2
        m           同上
    */
    /* 
let n = [10, 20]; //=> n = [10, 20]
let m = n; //=> m = [10, 20]
let x = m; //=> x = [10, 20]
m[0] = 100; //=> m=[100, 20]
x = [30, 40]; //=> x=[30, 40]
x[0] = 200; //=> x=[200, 40]

m = x; //=> m=[200, 40]
m[1] = 300; //=> m=[200, 300]
n[2] = 400; //=> n=[100, 20,400]

console.log(n, m, x); //=> [100, 20, 400]  ,[200, 300] */

    /* let a = { n: 1 };
let b = a;
a.x = a = { n: 2 };

console.log(a.x); //=> undefined
console.log(b); //=> { n: 1,x:{n:2} } */
    /* 
a   1       1- n: 1
            x:地址2
b   1           

a            2- n:2
*/

    // var a = 'abc' + 123 + 456;
    // var b = '456' - '123';

    /* let a = { n: 1 };
let b = a;
a.x = b;

console.log(a); //=>{n: 1, x: {…}}
console.log(a.x); //=>{n: 1, x: {…}}
console.log(b); //=>{n: 1, x: {…}}
结果嵌套了
*/
}

let a = 12;
let b = a;
b = 13;
console.log(a);
//=>12

let n1 = {
	name: '珠峰'
};
let m1 = n1;
m1.name = '培训';
console.log(n1.name);
//=>培训


let n = [10, 20];
let m = n;
let x = m;
m[0] = 100;
x = [30, 40];
x[0] = 200;
m = x;
m[1] = 300;
n[2] = 400;
console.log(n, m, x);
//(3) [100, 20, 400] (2) [200, 300] (2) [200, 300]
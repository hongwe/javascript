// 1
// NaN
// '1'
// true
// []
// /\d+/
// function fn(){}

console.log(typeof 1); //=>'number'
console.log(typeof '12'); //=>'string'
console.log(typeof true); //=>'boolean'

let a = NaN;
console.log(typeof a); //=>'number'
console.log(typeof null); //=>'object'
console.log(typeof undefined); //=>'undefined'

console.log(typeof {}); //=>'object'
console.log(typeof []); //=>'object'
console.log(typeof /\d+/); //=>'object'
console.log(typeof typeof typeof[]); //=>'object'
//=>typeof[]=> 'object'
//=>typeof 'object'=> 'string'
//因为typeof 检测结果都是字符串,所以两个及以上同时检测 最后结果必然 'string'
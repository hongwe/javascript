/* 
let str = 'zhifengpeixunyangfanqihang';

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(char);
} */

/* 
    charAt:根据索引获取指定位置的字符
    charCodeAt:获取指定字符的ASII码值（Unicode编码值）
    @params
        n[number]获取字符指定的索引
    @return
        返回查找的字符（找不到返回的是空字符串不是undefined，或者对应的编码值

*/
/* let str = 'zhifengpeixunyangfanqihang';
console.log(str.charAt(0)); //=>'z'
console.log(str[0]); //=>'z'
console.log(str.charAt(10000)); //=>''
console.log(str[10000]); //=>'undefined'

console.log(str.charCodeAt(0)); //=>'122'
console.log(str.charCodeAt(10000)); //=>'NaN'
console.log(String.fromCharCode(122)); //=>'z' */

/* 

substr  /  substring  /slice
    都是为了实现字符串的截取（在原来字符串中查找自己想要的）

    substr(n,m):从索引n开始截取m个字符，m不b写截取到末尾
    substring(n,m):从索引n开始找到索引m处（不含m）
    slice(n,m):和substring一样，都是找到索引为m处，但是slice可以支持负数作为索引，其余两个方法不可以


*/
/* let str = 'zhifengpeixunyangfanqihang';
console.log(str.substr(3, 7)); //=>'fengpei'
console.log(str.substr(3)); //=>'fengpeixunyangfanqihang' 截取到末尾
console.log(str.substring(3, 7)); //=>'feng'
console.log(str.substring(3)); //=>'fengpeixunyangfanqihang'  截取到末尾
console.log(str.substring(3, 10000)); //=>'fengpeixunyangfanqihang'  截取到末尾（超国索引的也只截取到末尾）
console.log(str.substring(3, 7)); //=>'feng'
console.log(str.slice(3, 7)); //=>'feng'
console.log(str.substring(-7, -3)); //=>'' substring不支持负数索引
console.log(str.slice(-7, -3)); //=>'nqih' slice支持负数索引，快捷查找：负数索引，我们可以展昭 str。length+负索引 的发放查找  => slice(26-7,26-3) => slice(19,23) */

/* 

indexOf  /  lastIndexOf  /  includes
    验证字符是否存在

    indexOf(x,y):获取x第一次出现位置的索引,y是控制查找的起始位置索引
    lastIndexOf(x):最后一次出现位置的索引 

    =>没用找个字符，返回结果是-1
   

*/
/* let str = 'zhifengpeixunyangfanqihang';
console.log(str.indexOf('n')); //=>5
console.log(str.indexOf('@')); //=>-1 不存在返回-1
console.log(str.lastIndexOf('n')); //=>24
console.log(str.lastIndexOf('@')); //=>-1 不存在返回-1

if (str.indexOf('@') === -1) {
    //字符串中不包含@找个字符
}

console.log(str.indexOf('feng')); //=>3 验证整体第一次出现的位置,返回的索引是第一个字符所在位置的索引值
console.log(str.indexOf('peiy')); //=>-1 不存在返回-1
console.log(str.indexOf('n', 7)); //=>12  查找字符串索引7之后的字符串中,n第一次出现的位置索引

if (!str.includes('@')) {
    console.log('当前字符串不包含@');
}
 */

/* 

toUpperCase / toLowerCase
    字符串中字母的大小写转换

    toUpperCase():转大写
    toLowerCase():转小写




*/

/* let str = 'zhifengpeixunyangfanqihang';
str = str.toUpperCase();
console.log(str); //=>'ZHIFENGPEIXUNYANGFANQIHANG'
str = str.toLowerCase();
console.log(str); //=>'zhifengpeixunyangfanqihang'

str = str.substr(0, 1).toUpperCase + str.substr(1);
console.log(str); //=>'Zhifengpeixunyangfanqihang'
 */

/* 
 
 split([分隔符]):把字符串按照指定的分隔符拆分成数组(和数组中的join对应)

 split支持传递正则表达式
 */
/* let str = 'music|movie|eat|sport';
let ary = str.split('|');
console.log(ary); //=>["music", "movie", "eat", "sport"]

str = ary.join(',');//== str = ary.toString();
console.log(str); //=>music,movie,eat,sport
 */

/* 
 
 replace(新字符,老字符):实现字符串的替换(经常伴随正则而用)


 */

let str = '珠峰@培训@扬帆@起航';
str = str.replace('@', '-');

console.log(str); //=>珠峰-培训@扬帆@起航  //=>在不使用正则表达式情况下,执行一次replace只能替换一次字符

str = str.replace(/@/g, '-');
console.log(str);

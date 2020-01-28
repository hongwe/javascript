let time = '2019-7-4 12:6:23';
//=> 变为自己需要呈现的格式,例如:
// "2019年07月24日 12时06分23秒"
// "2019年07月24日"
// "07/24 12:06"
//方案一  一路replace
/* time =
    time
        .replace('-', '年')
        .replace('-', '月')
        .replace(' ', '日 ')
        .replace(':', '时')
        .replace(':', '分') + '秒';
console.log(time); */

//方案二:获取年月日小时分钟秒,最后想拼成什么效果就拼成什么
//获取值的方法:基于indexOf获取指定的符号索引,基于substring一点一点截

/* let n = time.indexOf('-');
let m = time.lastIndexOf('-');
let x = time.indexOf(' ');
let y = time.indexOf(':');
let z = time.lastIndexOf(':');
let year = time.substring(0, n);
let month = time.substring(n + 1, m);
let day = time.substring(m+1, x);
console.log(year,month,day);  //=> 2019 7 24
 */
//获取值的方法:基于split
/* let n = time.split(' '); //=> ['2019-07-24','12:6:23']
let m = n[0].split('-'); //=> ['2019-07-24']
let x = n[1].split(':'); //=> ['12:6:23']
console.log(x); */

//不足10位补零

/* let addZero = val => {
    if (val.length < 2) {
        val = '0' + val;
    }
    return val;
};
 */
//简写
/* let addZero = val => (val.length < 2 ? '0' + val : val);

let ary = time.split(/(?: |-|:)/g); //=> ['2019','7','24','12','6','23']

time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日';
console.log(time); */

//

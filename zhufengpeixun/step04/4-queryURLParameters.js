/* let url =
    'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box'; */
/* 
结果:{
    lx:1,
    name:'zhufeng'
    teacher:'aaa'
    HASH:'box'
}

*/
//1. 获取问号后面的值或者#号的值
/* 
let askIndex = url.indexOf('?');
let wellIndex = url.indexOf('#');
let askText = url.substring(askIndex + 1, wellIndex);
let wellText = url.substring(wellIndex + 1);

// askText = 'lx=1&name=zhufeng&teacher=aaa'
// wellText = 'box'

//console.log(askText, wellText);

//2. 问号后面的值的详细处理
let result = {};
let askAry = askText.split('&');
console.log(askAry); //=>["lx=1", "name=zhufeng", "teacher=aaa"]
askAry.forEach(item => {
    // itme:当前从数组中循环的这一项 'lx=1'
    let n = item.split('=');
    let key = n[0];
    let value = n[1];
    result[key] = value;
});
result['HASH'] = wellText;
console.log(result);
 */

/* 
queryURLparams:获取url地址中问号传参的信息和哈希值
@params
url [string] 要解析的url字符串
@return
[object] 包含参数和哈希值信息的对象
 */

function queryURLparams(url) {
    //获取?和#后面的信息
    let askIn = url.indexOf('?'),
        wellIn = url.indexOf('#'),
        askText = '',
        wellText = '';
    //#不存在
    wellIn === -1 ? (wellIn = url.length) : null;
    /*  if (askIn >= 0) {
        //?存在
        askText = url.substring(askIn+1, wellIn)
    } */
    //?存在
    askIn >= 0 ? (askText = url.substring(askIn + 1, wellIn)) : null;
    wellText = url.substring(wellIn + 1);
    //2.获取每一部分信息
    let result = {};

    wellText === '' ? (result['HASH'] = wellText) : null;
    if (askText !== '') {
        let ary = askText.split('&');
        ary.forEach(item => {
            let itemAry = item.split('=');
            result[itemAry[0]] = itemAry[1];
        });
    }

    return result;
}
//基于正则封装才是最完美的
function queryURLparamsReg(url) {
    let result = {},
        reg1 = /([^?=&#]+)=([^?=&#]+)/g,
        reg2 = /#[^?=&#]+/g;
    url.replace(reg1, (n, x, y) => (result[x] = y));
    url.replace(reg2, (n, x) => (result['HASH'] = x));
    return result;
}

let url =
    'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';

let paramsObj1 = queryURLparams(url);
let paramsObj2 = queryURLparamsReg(url);
console.log(paramsObj1);
console.log(paramsObj2);

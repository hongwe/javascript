/* 判断正确的网址 */

let str = "http://www.zhufengpeixun.cn/index.html?lx=1&from=wx#video"

//=>URL格式
//1.协议 :// http/https/ftp
//2.域名
    // www.xxx.xx
    // xxx.xx
    // xxx.xxxxx.xx.xxx.xx
//3.请求路径
    // /
    // /index.html
    // /stu/index.html
    //  /stu/
//4.问号传参
//?xxx=xxx&xxx=xxx
//5.哈希值
// #xxx

//1,3,4,5可以省 ,2不能省

let reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)??$/i;

console.log(reg.exec(str));

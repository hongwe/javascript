/* 如何把一个字符串大小写取反(大写变小写,小写变大写) */

let str = 'zhufengPEIxun的周老师很帅!吁*100!HAHA';

// for( let i = 0; i < str.length; i++){
//     let
// }
str = str.replace(/[a-zA-Z]/g, (constent) => {
    //=>constent:每一次正则匹配的结果
    //验证是否位大写字母?把字母转换位大写后看和之前是否一样,如果是就是大写,在ascii表中找到大写字母取值范围判断(65-90)
    //constent.toUpperCase === constent;
    //constent.charCodeAt() >=65 && constent.charCodeAt()<=95;
    return constent.toUpperCase() === constent
        ? constent.toLowerCase()
        : constent.toUpperCase();
});

console.log(str);


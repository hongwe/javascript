## boolean 布尔数据类型
-   Boolean([val])
-   !
-   !!
true

false
只有 0 , NaN, '' , null, undefined 五个值转换为 false

```javascript
console.log(Boolean(0)); //=>false
console.log(Boolean('')); //=>false
console.log(Boolean(' ')); //=>true
console.log(Boolean(null)); //=>false
console.log(Boolean(undefined)); //=>false
console.log(Boolean([])); //=>true
console.log(Boolean([12])); //=>true

// !: 取反(先转为布尔,然后取反)
console.log(!1); //=>false
console.log(!!1); //=>true

// 如果条件只是一个值,不是==/===/!=/>=等等这些比较,要先把这个转成布尔类型,然后验证真假
if (1) {
    console.log('哈哈');
}
if ('3px' + 3) {
    //=> '3px3'
    console.log('呵呵');
}
if ('3px' - 3) {
    // =>NaN-3 => NaN
    console.log('嘿嘿');
}
```
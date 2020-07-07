//1-100奇数的和
/* 
function getSum(x, y) {
    var totle = null;
    var oddAry = gedOdd(x, y);
    for (var i = 0; i < oddAry.length; i++) {
        totle += oddAry[i];
    }
    var div1 = document.getElementById('div1');
    div1.innerHTML = totle;
    return totle;
}

function gedOdd(x, y) {
    var oddAry = [];
    var odd = null;
    for (let i = x; i <= y; i++) {
        if (i % 2 != 0) {
            odd = i;
            oddAry.push(odd);
        }
    }
    return oddAry;
}

console.log(getSum(1, 500)); */

//本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？

/* var x = 10000;
var div2 = document.getElementById('div2');
for (var i = 0; i < 5; i++) {
    x += x * 0.003;
}
console.log(x);

div2.innerHTML = x;
 */
/* 
一年之内一对兔子能繁殖多少对？
于是就筑了一道围墙把一对兔子关在里面。
已知一对兔子每个月可以生一对小兔子，
而一对兔子从出生后第3个月起每月生一对小兔子。
假如一年内没有发生死亡现象，
那么，一对兔子一年内（12个月）能繁殖成多少对？ */
//1.定义三个变量，然后两个初始化值。第三个作为存储使用
/* var temp;
var num1 = 1;
var num2 = 1;
//2.先把第二个变量存储进入第三个变量汇总，第二个变量重新赋值成为第一个和第二个之和
for (var i = 1; i <= 10; i++) {
    temp = num2;
    num2 = num1 + num2;
    //3.把存储好的第三个变量赋值给第一个变量。
    num1 = temp;
    //4.执行10次。（因为前两项不需要计算，所以只需要执行10次）
}
var div3 = document.getElementById('div3');
div3.innerHTML = num2;
 */
// 自定义表格:
/* 要求:
(1)手动输入行数和列数;
(2)JS之 for循环实现 创建表格的行和列
(3)表格在页面中居中,并具备背景图片和 每一个单元格的边框(单一的边框); */
/* var x = null,
    y = null;
var inputA = document.getElementById('inputA');
var inputB = document.getElementById('inputB');
var btn4 = document.getElementById('btn4');
var table4 = document.getElementById('table4');

var tr = '<tr></tr>';
var td = '<td></td>';

btn4.onclick = function () {
    table4.innerHTML = '';
    var trs = '';
    x = inputA.value;
    y = inputB.value;

    for (var i = 0; i < x; i++) {
        var tds = '';
        for (var j = 0; j < y; j++) {
            tds += td;
        }
        trs += '<tr>' + tds + '</tr>';
    }
    console.log(trs);
    table4.innerHTML = trs;
}; */

// 大马驮2石粮食，中马驮1石粮食，两头小马驮一石粮食，要用100匹马，驮100石粮食，该如何调配？

/* for (let i = 0; i <= 50; i++) {
    for (let j = 0; j <= 100 - i; j++) {
        k = 100 - i - j;
        if (k >= 0 && i + j + k == 100 && 2 * i + j + k / 2 == 100) {
            //console.log('大马' + i + '中马' + j + '小马' + k);
        }
    }
}
 */

//.求整数1~100的累加值，但要求跳过所有个位为3的数。（使用for循环实现）
/* var num = null;
var num2 = '';
for (let i = 0; i <= 100; i++) {
    num2 = parseInt(i % 10);
    console.log(num2);
    if (!(num2 == 3)) {
        num += i;
    }
}
console.log(num); */

/* for (let i = 0; i < i.length; i++) {
    let;
}
function duplicateCount(text) {
    //...
    let cunnt = 0;
    let newAry =[] 
    for( var k = 0; k < text.length; k++){
        newAry[k] = text.toUpperCase()[k] 
    } */

/*   
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j < text.length; j++) {
            if (text[i].toUpperCase() == text[j].toUpperCase()) {
                text.slice(j, 0);
                cunnt++;
                break;
                continue
            }
        }
    }
    return cunnt;
} */

/* 
function descendingOrder(n){
    //...
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
  } */

/* function persistence(num) {
    //code me
    let num1 = null;
    let num2 = null;
    let temp = null;
    var ary = num.toString().split('');
    temp = ary[0];
    for (let i = 1; i < ary.length; i++) {
        temp *= ary[i];
    }
    num1++;
    console.log(num1);
    
    if( temp>10){
       
    }
    
}
console.log(persistence(999));
 */

function accum(s) {
    // your code
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accum('abcd'));

// s001:用法
//alert('第一个JS');

//s002:<head> 中的 JavaScript 函数
/* function myFunction() {
    document.getElementById('divS002').innerHTML = '第二个JS新内容';
}
 */
//

// console.log(n);
/* switch (d) {
    case 1:
        console.log('周1');

        break;
    case 2:
        console.log('周2');

        break;
    case 3:
        console.log('周3');

        break;
    case 4:
        console.log('周4');

        break;
    case 5:
        console.log('周5');

        break;
    case 6:
        console.log('周6');

        break;
 
    default:
        console.log('周日');
        break;
} */

/* var tbody = document.querySelector('tbody');
// tbody.setAttribute('data', 't0');

var tr = tbody.querySelectorAll('tr');
//var td = tr.querySelectorAll('td');
console.log(tr) */

// var ary = [];
// for (var i = 0; i < tr.length; i++) {
//     //tr[i].className = 'tr_' + i;

//     ary[i] = tr[i].querySelectorAll('td');

//     for (var j = 0; j < ary[i].length; j++) {
//         if ((j = 3)) {
//             ary[i][j].className = 'tdd td_' + i + '_' + j;
//         }
//     }
// }
// var x = 0,
//     y = 0;
// var selectTd = tbody.querySelectorAll('.tdd');
// console.log(selectTd);
// for (var k = 0; k < selectTd.length; i++) {
//     // if (selectTd[k].innerHTML == selectTd[k + 1].innerHTML) {
//     //     // selectTd[k+1].remove
//     // }
// }

/* $('td:last-child').addClass('t3');
// debugger
// console.log($('.t3').length)

var i = 0;
var j = 1;
while (
    $('.t3').eq(i).html() ==
    $('.t3')
        .eq(i + 1)
        .html()
) {
    j++;
    $('.t3').eq(0).attr('rowspan', j);
    $('.t3').eq(1).remove();

    console.log($('.t3').length);
}
 */

//双色球
/* function shuangSeBall() {
    var red = {};
    var blue = Math.floor(Math.random() * 16 + 1);
    console.log(blue);

    for (let i = 1; i <= 6; i++) {
        var r = Math.floor(Math.random() * 32 + 1);
        if (red.hasOwnProperty(r)) {
            i--;
        }
        red[r] = r;
    }

    var redAry = [];
    for (var key in red) {
        redAry.push(red[key]);
    }
    console.log(redAry);

    for (var j = 0; j < redAry.length; j++) {
        $('#red li').eq(redAry[j]).addClass('on');
    }

    $('#blue li').eq(blue).addClass('on');
}
var ssqBtn = document.getElementById('ssqBtn');
ssqBtn.onclick = function () {
    $('#blue li').removeClass('on');
    $('#red li').removeClass('on');
    shuangSeBall();
};

var aa = function () {
    $('#blue li').removeClass('on');
    $('#red li').removeClass('on');
    shuangSeBall();
}; */
/* (function() {
    'use strict';

    // Your code here...
    setInerval(function(){console.log(111)},500)
})(); */

/* var bike = {};
bike.车架 = '铝制6061车架';

bike.车叉 = {};
bike.车叉.弹簧 = '1-1/8" 钢制枢纽';
bike.车叉.行程 = '63mm';
bike.传动系统 = {};
bike.传动系统.变速把 = 'Microshift SL759';
bike.传动系统.飞轮 = 'Microshift H090 9速';
bike.传动系统.链条 = {};
bike.传动系统.链条.型号 = 'KMC X9';
bike.传动系统.链条.快拆 = true;
bike.传动系统.后变速器 = 'B\'Twin Microshift RD M46-L';
bike.传动系统.齿盘 = 36;
bike.传动系统.齿轮 = [11,36];
bike.传动系统.架座 = '防脱位旋转式';
bike.制动 = '机械前/后盘式制动';
bike.手把 = '半升式铝合金车把(620毫米)';
bike.把立 = '1-1/8" 铝合金, 75毫米长度';
bike.车头碗组 = '半集成式1-1/8"';
bike.调节垫片 = '2个铝制5毫米';
bike.鞍座 = 'B\'Twin Sport 500 Ergofit 人体工程学设计的泡沫鞍座';
bike.座管 = {};
bike.座管.卡箍直径 = '32毫米';
bike.座管.座管直径 = '27.2毫米';
bike.座管.快拆 = true; 
 */

/**
 * 打印三角形
 *
 *
 *
 *
 *
 */

function printTriangle(x) {
    var oStar = document.getElementById('star');
    let star = '',
        noStar = [
            // '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            // '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            // '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            // '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            // '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            // '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            // '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            // '&nbsp;&nbsp;&nbsp;&nbsp;',
            // '&nbsp;&nbsp;',
            // '',
        ],
        num = null;
    let starAry = [];
    let noStarAry = [''];
    let noStarAry2 = [];

    for (let j = 0; j < x; j++) {
        star += '&nbsp;*&nbsp;';
        noStar += '&nbsp;&nbsp;';

        starAry.push(star);
        noStarAry.push(noStar);
    }
    var y = 0;
    noStarAry.length = x;
    for (let x = noStarAry.length - 1; x >= 0; x--) {
        noStarAry2[y] = noStarAry[x];
        y++;
    }

    // console.log(starAry);

    console.log(noStarAry2);

    for (let i = 0; i < starAry.length; i++) {
        oStar.innerHTML += noStarAry2[i] + starAry[i] + '</br>';
    }
}

//printTriangle(10);

// 100元购物卡，牙刷5元，香皂2元、洗发水15元 100元正好花完有多少种可能

/* let x = Math.floor(100 / 5),
    y = Math.floor(100 / 2),
    z = Math.floor(100 / 15),
    counte = null;

for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
        for (let k = 0; k <= z; k++) {
            if (i * 5 + j * 2 + k * 15 == 100) {
                counte++;
            }
        }
    }
}

console.log(x,y,z,counte+'种可能') */

//有一个棋盘，有64个方格，在第一个方格里面放1粒芝麻重量是0.00001kg，第二个里面放2粒，第三个里面放4，棋盘上放的所有芝麻的重量
/* let num = 1;
let sum = 1;
for (let i = 1; i < 64; i++) {
    num = 2 * num;
    sum += num;

    
}
console.log(sum*0.00001 + 'kg'); */

//公园里有一只猴子和一堆桃子，猴子每天吃掉桃子总数的一半，把剩下一半中扔掉一个坏的。到第七天的时候，猴子睁开眼发现只剩下一个桃子。问公园里刚开始有多少个桃子？

/* let num = 1;
let sum = 1;

for (let i = 6; i > 0; i--) {
    num = 2 * (num + 1);

    console.log(num)
}


 */

/* var ckbox = document.getElementById('ckbox');
var alls = document.getElementById('alls');
var allc = document.getElementById('allc');
var oCheckbox = ckbox.getElementsByTagName('input');

alls.onclick = function () {
    if (alls.checked == true) {
        allc.checked = false;
        for (var i = 0; i < oCheckbox.length; i++) {
            oCheckbox[i].checked = true;
        }
    }
};
allc.onclick = function () {
    if (allc.checked == true) {
        alls.checked = false;
        for (var i = 0; i < oCheckbox.length; i++) {
            oCheckbox[i].checked = false;
        }
    }
};
 */

var uname = 'jack'
function change() {
    alert(uname) // ?
    //var uname = 'lily'
    alert(uname)  //?
}
debugger
change()
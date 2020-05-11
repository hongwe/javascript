// 1-100之间的和用函数封装

function getSum(num) {
    let x = null;
    for (let i = 0; i <= num; i++) {
        x += i;
    }
    console.log(x);
    return x;
}

var res = document.getElementById('res');
var btn = document.getElementById('btn');

btn.onclick = function (n) {
    var n = res.value;
    getSum(n);
};

//函数封装求圆的周长

function getLong(r) {
    return Math.PI * r * 2;
}

//函数封装求圆的周长

function getArea(r) {
    //return Math.PI*r*r;
    return Math.PI * Math.pow(r, 2);
}

//判断2个数字的大小

function isMax(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

//判断3个数字的大小
function isMax2(n1, n2, n3) {
    return (n1 > n2 ? n1 : n2) > n3 ? (n1 > n2 ? n1 : n2) : n3;
}
//封装求数组中的最大值
//var arr = [18, 45, 0, 58, 32,59]
function arrMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        var arr1 = arr[0];
        if (arr[i] > arr1) {
            arr1 = arr[i];
        }
    }
    return arr1;
}

//数组排序

function arrSort(arr) {
    return arr.sort((a, b) => a - b);
}

function arrReverse(arr) {
    return arr.sort((a, b) => b - a);
}

//阶乘
function getJC(num) {
    var sum = 1;
    for (var i = 1; i <= num; i++) {
        sum *= i;
        R;
    }
    return sum;
}

//判断质数
function primeNumber(num) {
    if (num == 1) {
        return num + '不是质数';
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return num + '不是质数';
        }
    }

    return num + '是质数';
}

//判断一年中哪一天

function getDays(y, m, d) {
    //第一先知道每个月有多少天，让它累加。 arr = [31,28,31,30,31,30,31,31,30,31,30,31]; 这是每个月的天数，只有2月是不固定的。
    //2月份不固定，是因为有闰年的存在，所以还要判断是不是闰年。就OK啦。

    //先写个判断闰年的函数。
    //闰年的规律是四年一闰，百年不闰，四百年再闰。

    arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (y % 4 === 0) {
        arrMonth[1] = 29;
    }
    let day = d;
    for (let i = 0; i < m - 1; i++) {
        day += arrMonth[i];
    }

    return day;
}

//找数组最大差

function maxMin(a) {
    let minN = (maxN = a[0]);
    for (let i = 0; i < a.length; i++) {
        if (minN > a[i]) {
            minN = a[i];
        } else {
            minN = minN;
        }
        if (maxN > a[i]) {
            maxN = maxN;
        } else {
            maxN = a[i];
        }
    }
    console.log(maxN, minN);
    return maxN - minN;
}


//随机生成指定长度的字符串

function get26Letters(){
    let str = '';
    for( let i = 0; i < 26; i++){
        str += String.fromCharCode(97+i);
    }
    return str;
}

function randomString(n){
    var str = get26Letters();
    var tmp = '', i = 0 ;
    for(i = 0; i < n; i++){
      tmp += str.charAt(Math.floor(Math.random() * str.length));
    }
    return tmp;
  }
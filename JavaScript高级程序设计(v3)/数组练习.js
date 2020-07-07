/* var ary = ['a', 'b', 'c', 'd', 'e','3'];
let y = '';
function copy(x, index) {
    y = x;
    for (let i = index-1; i >= 0; i--) {
        y += x;
    }
    return y;
}

let newAry = ary.map(copy);

console.log(ary);
console.log(newAry);
 */

/* function accum(s) {
    // your code
    let y = '';
    let ary = s.split('');
    function copy(x, index) {
        y = x.toUpperCase();
        for (let i = index - 1; i >= 0; i--) {
            y += x.toLowerCase();
        }
        return y;
    }
    let newAry = ary.map(copy);
    let newSrt = newAry.join('-'); //=>
    return newSrt;
} */

//数组的位置
// function indexOf(arr, item) {
//     if (arr.includes(item)) {
//         for (let i = 0; i < arr.length; i++) {
//             if (item == arr[i]) {
//                 return i + 1;
//             }
//         }
//     } else {
//         return -1;
//     }
// }
// console.log(indexOf([1, 2, 3, 4], 3));

//计算给定数组 arr 中所有元素的总和,数组中的元素均为 Number 类型

// function sum(arr) {
//     var total = null;
//     for (let i = 0; i < arr.length; i++) {
//         total += Number(arr[i]);
//     }
//     return total
// }
// console.log(sum([1, 2, 3, 4]));

//移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
/* 
function remove(arr, item) {
    // var curIndex = null,
    //     newArr = null,
    //     oldArr = arr;
    // for (let i = 0; i < oldArr.length; i++) {
    //     if (oldArr.includes(item)) {
    //         curIndex = oldArr.indexOf(item);
    //         newArr = oldArr.slice(curIndex, 1);
    //     }
    // }
    // newArr = oldArr;
    // console.log(newArr,oldArr,arr)
    // return newArr;
    var arr1 = [],
        arr2 = [],
        newArr = arr;
    for (let i = 0; i < newArr.length; i++) {
        if (item == newArr[i]) {
            arr1 = newArr.slice(0, i);
            arr2 = newArr.slice(i + 1, arr.length);
            newArr = arr1.concat(arr2);
            i--;
        }else {
            continue;
        }

    }
    return newArr;
}
console.log(remove([1, 2, 2, 3, 4, 2, 2], 2));  */

//移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回

/* function removeWithoutCopy(arr, item) {

    var newArr = arr;

    for (let i = 0; i < arr.length; i++) {
        if (item == arr[i]) {
            newArr = arr.splice( i,1);
            i--;
            console.log(newArr,arr);
            
        }else {
            continue;
        }

    }
    return arr;
}
console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2));  */

//在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

// function append(arr, item) {
//     var index = arr.length,
//         newArr = [];
//     for (let i = 0; i < index; i++) {
//         newArr[i] = arr[i];
//     }
//     newArr[index] = item;

//     console.log(newArr,  arr);
//     return newArr;
// }
// append([1, 2, 3, 4], 10);

//删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
// function truncate(arr) {
//     var index = arr.length,
//         newArr = [];
//     for (let i = 0; i < index; i++) {
//         newArr[i] = arr[i];
//     }
//     newArr.pop();

//     console.log(newArr,  arr);
//     return newArr;
// }

//在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
/* function prepend(arr, item) {
    var index = arr.length,
        newArr = [];
    for (let i = 0; i < index; i++) {
        newArr[i] = arr[i];
    }
    newArr.unshift(item);

    console.log(newArr,  arr);
    return newArr;
}
prepend([1, 2, 3, 4], 10) */

// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组

/* function curtail(arr) {
    var index = arr.length,
        newArr = [];
    for (let i = 0; i < index; i++) {
        newArr[i] = arr[i];
    }
    newArr.shift();

    console.log(newArr,  arr);
    return newArr;
}
curtail([1, 2, 3, 4]) */

//合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
// function concat(arr1, arr2) {
// var newArr =[];
//     return newArr = arr1.concat(arr2)

// }
// concat([1, 2, 3, 4], ['a', 'b', 'c', 1])

//在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
// function insert(arr, item, index) {
//     var newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i];
//     }
//     console.log(newArr,index)
//     newArr.splice(index,0,item);
//     console.log(newArr)
//     return newArr;
// }
// insert([1, 2, 3, 4], 'z', 2);

//统计数组 arr 中值等于 item 的元素出现的次数

// function count(arr, item) {
// var countNum = null;
//     for( let i = 0; i < arr.length; i++){
//         if (arr[i] === item ) {

//             countNum++
//         }
//     }

// return countNum
// }

// count([1, 2, 4, 4, 3, 4, 3], 4)

//找出数组 arr 中重复出现过的元素
// function duplicates(arr) {
//     var newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (
//             arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) &&
//             !newArr.includes(arr[i])
//         ) {
//             newArr.push(arr[i]);
//         } else {
//             continue;
//         }
//     }
//     console.log(newArr);
//     return newArr;
// }
// duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

//为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
// function square(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i] * arr[i];
//     }

//     return newArr;
// }
// square([1, 2, 3, 4]);

//在数组 arr 中，查找值与 item 相等的元素出现的所有位置
// function findAllOccurrences(arr, target) {
//     var newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (target == arr[i]) {
//             newArr.push(i);
//         }
//     }
//     return newArr;
// }

// findAllOccurrences(['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c'], 'a');

/* function functions(flag) {
    if (flag) {
        //function getValue() { return 'a'; }
        var getValue = () => 'a';
    } else {
        function getValue() { return 'b'; }
        var getValue = () => 'b';
    }

    return getValue();
}
console.log(functions(true));

//  var getValue =()=>
 */

//修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
// function parse2Int(num) {
//     return parseInt(num,10);
// }
// console.log(parse2Int(12));
// console.log(parse2Int('12px'));
// console.log(parse2Int('0x12'));

//判断 val1 和 val2 是否完全等同

// function identity(val1, val2) {
//     return val1===val2?true:false;
// }

/* 实现一个打点计时器，要求
1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
3、第一个数需要立即输出 */

/* function count(start, end) {
    //立即输出第一个值
    console.log(start++);
    let timer = setInterval(function () {
        if (start <= end) {
            console.log(start++);
        } else {
            clearInterval(timer);
        }
    }, 100);
    //返回一个对象
    return {
        cancel: function () {
            clearInterval(timer);
        },
    };
} */

/* 
实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
2、如果 num 能被 3 整除，返回字符串 fizz
3、如果 num 能被 5 整除，返回字符串 buzz
4、如果参数为空或者不是 Number 类型，返回 false
5、其余情况，返回参数 num


*/

/* function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    } else if (num % 3 === 0 && num % 5 !== 0) {
        return 'fizz';
    }else if (num % 5 === 0 && num % 3 !== 0) {
        return 'buzz';
    }else if (num == null || num == '' || typeof num!="number") {
        return false;
    } else{
        return num;
    }
} */

//将数组 arr 中的元素作为调用函数 fn 的参数

// 实现函数 functionFunction，调用之后满足如下条件：
// 1、返回值为一个函数 f
// 2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
// 3、所有函数的参数数量为 1，且均为 String 类型

// function functionFunction (arg1) {
//     return function(arg2){
//         return arg1 + ', ' + arg2;
//     };
// }

// console.log(functionFunction('Hello')('world'));

/* function valueAtBit(num, bit) {
    var str= num.toString(2);
    return str[str.length - bit]
    
} */

//给定二进制字符串，将其换算成对应的十进制数字
/* function base10(str) {
    return parseInt(str,2)
} */

//将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
/* 
function convertToBinary(num) {
    var str = num.toString(2);
    var bit = 8 - str.length;
    console.log(str);
    
    if (bit > 0) {
        for (let i = 0; i < bit; i++) {
            str = '0' + str;
        }
        return str
    } else {
        return str
    }
}
console.log(convertToBinary(65));
 */

//求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题

// function multiply(a, b) {
//     return  (a*b).toFixed(4)
//  }

//  function multiply(a, b) {
//     a = a.toString();
//     b = b.toString();
//     var aLen = a.substring(a.indexOf(".")+1).length;
//     var bLen = a.substring(a.indexOf(".")+1).length;
//     return (a * Math.pow(10,aLen)) * (b * Math.pow(10,bLen)) / Math.pow(10,aLen+bLen);


/* 
给定字符串 str，检查其是否包含 连续3个数字
1、如果包含，返回最先出现的 3 个数字的字符串
2、如果不包含，返回 false */


/* function captureThreeNumbers(str) {
    var reg;
     if(reg = str.match(/\d{3}/)){
         console.log(reg);
         
       return reg[0];
     }else{
        console.log(reg);
       return false;
     }
   }


captureThreeNumbers('978654321') */


function matchesPattern(str) {
    return (/^\d{3}\-\d{3}\-\d{4}$/).test(str);
     
 }

 matchesPattern('a00-555-1212')


 function isUSD(str) {
    return (/^\$([1-9]\d{0,2}(,\d{3})*|0)(\.\d{2})?$/).test(str);
}
// 方法一
function indexOf(arr, item) {
    if (Array.prototype.indexOf) {
        // 判断浏览器是否支持indexOf方法
        return arr.indexOf(item);
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
    }
    return -1;
}
// 方法二
function indexOf(arr, item) {
    if (Array.prototype.indexOf) {
        // 判断浏览器是否支持indexOf方法
        return arr.indexOf(item);
    } else if (arr.indexOf(item) > 0) {
        return arr.indexOf(item);
    } else {
        return -1;
    }
}

function addArr(arr, item) {
    var arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1[i] = arr[i];
    }
    arr1.push(item);
    console.log(arr, arr1);
    return arr1;
}

//方法一：普通的for循环拷贝+push

function append(arr, item) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        resArr.push(arr[i]);
    }
    resArr.push(item);
    return resArr;
}
//方法二：使用concat将传入的数组或非数组值与原数组合并,组成一个新的数组并返回

function append(arr, item) {
    return arr.concat(item);
}
//方法三：使用slice浅拷贝+push

function append(arr, item) {
    let newArr = arr.slice(0); // slice(start, end)浅拷贝数组
    newArr.push(item);
    return newArr;
}
//方法四：...扩展运算符如果不知道的，可以看看es6的相关知识

function append(arr, item) {
    let resArr = [...arr, item];
    return resArr;
}

//3.
//方法一
function removeWithoutCopy(arr, item) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
//方法二
function removeWithoutCopy(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

// 数组求和

function sumArr(arr) {}

//7.数组求2次方arr

function pow(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}

//冒泡排序 Bubble sort
/**
 *  冒泡排序的思想
 *      让数组中的当前项和后一项比较,如果当前项比后一项大,两项交换位置(让大的靠后)
 */

/**
 * bubble 实现冒泡排序
 * @param
 *     ary[ARRAY] 需要排序的数组
 * @return
 *     [ARRAY] 排序后的新数组
 *
 *
 */
let ary = [12, 8, 24, 16, 1, 1000, 2342];

function bubble(ary) {
    let temp = '';
    for (let i = 0; i < ary.length - 1; i++) {
        for (let j = 0; j < ary.length - 1 - i; j++) {
            if (ary[j] > ary[j + 1]) {
                temp = ary[j];
                ary[j] = ary[j + 1];
                ary[j + 1] = temp;
            }
        }
    }
    return ary;
}

//console.log(bubble(ary));

//插入排序 Insertion sort

/**
 * insertion 实现插入排序
 * @param
 *     ary[ARRAY] 需要排序的数组
 * @return
 *     [ARRAY] 排序后的新数组
 *
 *
 */
function insertion(ary) {
    //1.准备一个新数组
    let handle = [];
    handle.push(ary[0]);
    //2.从第二项开始
    for (let i = 1; i < ary.length; i++) {
        //A是新抓排
        let A = ary[i];
        //和handle手里牌依次比较(从后向前比较)
        for (let j = handle.length - 1; j >= 0; j--) {
            //每一次要比较手里的牌
            let B = handle[j];
            //如果当前新牌要比要比较的牌B大了,把A放到B的后面
            if (A > B) {
                handle.splice(j + 1, 0, A);
                break;
            }
            //比较到第一项,把新牌放到最前面
            if (j === 0) {
                handle.unshift(A);
            }
        }
    }

    return handle;
}

//console.log(insertion(ary));
//快速排序 Quick sort

/**
 * quick 实现插入排序
 * @param
 *     ary[ARRAY] 需要排序的数组
 * @return
 *     [ARRAY] 排序后的新数组
 *
 *
 */

function quick(ary) {
    //4.结束递归,ary小于等于一项,不用处理
    if (ary.length <= 1) {
        return ary;
    }
    //1.找到数组中间项目,再原有数组中移除
    let middleIndex = Math.floor(ary.length / 2);
    let middleValue = ary.splice(middleIndex, 1)[0];

    //2.左右准备两个数组,循环剩下数组中的每一项,比当前项小的放到左边数值中,反之放到右边
    let aryLeft = [];
    let aryRight = [];
    for (let i = 0; i < ary.length; i++) {
        let item = ary[i];
        item < middleValue ? aryLeft.push(item) : aryRight.push(item);
    }
    //递归方式让左右两边数组持续这样处理,一直到左右两边都排好序位置
    return quick(aryLeft).concat(middleValue, quick(aryRight));
}

console.log(quick(ary));

//递归:函数执行时候自己调自己

/* function fn() {
    fn()//死递归导致栈溢出 Uncaught RangeError: Maximum call stack size exceeded
}
fn() */

/* function fn() {
    setTimeout(fn,0) //这种看似死递归,不会导致栈溢出
}
fn() */
/* let total = null
for( let i = 0; i < 10; i++){
    total +=i 
} */
//递归求和
/* function sum(n) {
    if(n>10){
        return 0
    }
    return n+sum(n+1)
    //return 1+sum(2)
    //return 1+2+sum(3)
    //...
    //return 1+2+3+4+5+6+7+8+9+10+sum(11)
    //return 1+2+3+4+5+6+7+8+9+10+0
}
let total = sum(1)
console.log(total) */

//

/* let minIndex = ''

for( let i = 0; i < ary.length-1; i++){
    minIndex = i;
    if(ary[i]<ary[minIndex]){
        ary[minIndex] = 
    }
    
}

 */
//
let i, j, str,nAry =[];
for (i = 1; i <= 9; i++) {
    str = '';
    for (j = 1; j <= i; j++) {
        str =  i + '*' + j + '=' + i * j;
        nAry.push(str)
    }
    console.log(str);
    
}
console.log(nAry);
//方案一
// 循环原有数组中的每一项,每拿到一项都往新数组中添加
//  添加之前验证新数组中是否存在这一项,不存在再添加

/* 
let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
let newAry = [];
for (let i = 0; i < ary.length; i++) {
    //循环获取原有数组中的每一项
    let item = ary[i];
    //验证新数组中是否存在这一项
    if (newAry.includes(item)) {
        //存在这一项,不在增加到新数组中,继续下一轮寻呼那即可
        continue;
    }
    // 新数组中不存在这一项,我们加入到新数组中即可
    newAry.push(item);
}
console.log(newAry); 
*/

//代码简化
/* 
let newAry = [];
ary.forEach(item => {
    if (newAry.includes(item)) return;
    newAry.push(item);
});
console.log(newAry); 
*/

//方案二
// 先分别拿出数组中的没一项
// 用这一项和它后面的每一项依次进行比较,如果遇到和当前项A相同的,则在原来的数组中把这一项移除掉
// 不用 incloudes/indexOf/forEach(兼容性)
//  splice

/* var ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];

for (var i = 0; i < ary.length; i++) {
    //item : 每一次循环拿出来的当前项
    //i:当前项的索引    i+1 :代表后一项
    //itemBack:当前项后面的所有内容(新数组)
    var item = ary[i];
    //var itemBack = ary.slice(i+1);
    //让当前项和后面的每一项进行比较(循环)
    for (var j = i + 1; j < ary.length; j++) {
        //compare:后面拿出来要比较的没一项
        var compare = ary[j];
        //如果compare和item相等,说明这一项时重复的,我们把它删掉
        if (compare === item) {
            //j索引这一项要从数组中移除
            ary.splice(j, 1);
            //数组塌陷了: j后面的每一项索引都提前了一位,下一次要比较的应该还是j找个索引内容
            j--;
        }
    }
}
console.log(ary); */

//数组塌陷问题
/* 
ary = [10, 20, 30];
for (var i = 0; i < ary.length; i++) {
    //把当前数组中移除(原来数组变)
    ary.splice(i, 1);
    //数组塌陷后,我们为了不再让i继续累加,我们先把i--
    i--;
} 
*/
//删除一项,后面的每一项索引都要提前一位

//再来一遍步骤,巩固
/* var ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];

for (var i = 0; i < ary.length; i++) {

    //第一轮
    //i=0 item=1 拿到第一项

    //第二轮
    //i=1 item=2 拿到第一项
    var item = ary[i];

    for (var j = i + 1; j < ary.length; j++) {
        //j=1 compare=2 2!==1
        //j=2 compare=3 3!==1
        //j=3 compare=1 1===1 ary.splice(3,1)   [1, 2, 3,(1) 2,...] j-- j++
        //j=3 compare=2 ...
        var compare = ary[j];
        if (compare === item) {
            ary.splice(j, 1);
            j--;
        }
    }
}
console.log(ary); */

//高级方式

//方案三
//创建对象

let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];

//1.创建一个空对象
let obj = {};
//2.循环数组中的每一项,把每一项向对象中进行存储 => item:item
for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    //3.每次存储之前进行判断:验证obj中是否存在这一项
    if (obj[item] !== undefined) {
        ary.splice(i, 1);
        //数组塌陷问题 i--
        i--;
        //已经存在这一项
        continue;
    }
    obj[item] = item;
}
console.log(ary, obj);

//基于splice实现删除性能不好:当前项被删后,后面每一项的索引都要向前提一位,如果后面内容过多,一定影响性能




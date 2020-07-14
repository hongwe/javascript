/* 5.实现一个字符串匹配算法 ,从字符串 S 中,查找是否存在字符串 T 如存在返回位置,不存在返回 -1 (不能用 indexOf和includes)*/

~(function () {
    //方式1
    // function myIndexOf(T) {
    //     //this :S
    //     //循环原始字符串中每一项,截取T.length,然后比较,如果不一样 继续循环,如果一样返回当前索引(循环结束)
    //     let lenT = T.length,
    //         lenS = this.length,
    //         res = -1;
    //     if (lenT > lenS) return -1;
    //     for (let i = 0; i < lenS - lenT + 1; i++) {
    //         let char = this[i];

    //         if (this.substr(i, lenT) === T) {
    //             res = i;
    //             break;
    //         }
    //     }
    //     return res;
    // }

    //方式2 正则
    //  /pei/.exec('zhufengpeixun')
    function myIndexOf(T) {
        //this :S
        let reg = new RegExp(T),
            res = reg.exec(this);
        return res === null ? -1 : res.index;
    }

    String.prototype.myIndexOf = myIndexOf;
})();
let S = 'zhufengpeixun',
    T = 'pei';
console.log(S.myIndexOf(T));

function sampl4() {
    let person = {
        name: '易烊千玺',
        age: 40,
        height: '185cm',
        weight: '80kg',
        1: 100,
    };
    //删除属性
    //=> 真删除  彻底删掉
    delete person[1];
    //=> 假删除  属性还在 值为空
    person.weight = null;
    console.log(person.weight);

    //设置属性名属性值
    //=> 属性名不能重复,如果已经存在,不属于新增 属于修改属性值
    person.GF = '圆圆';
    person.name = '李易峰';

    console.log(person.GF);

    //获取属性名对应的属性值
    //=>对象.属性名
    //=>对象.[属性名]
    //如果属性名不存在,结果 undefined
    //如果属性名是数字,不能用点的方式获取属性值
    console.log(person);
    console.log(person.name); //=>易烊千玺
    console.log(person['age']); //=>40
    console.log(person.sex); //=>undefined
    console.log(person[1]); //=>100
    //console.log(person.1); //= SyntaxError 语法错误

    /* 
        数组是特殊的对象
            1.中括号中设置的属性值,它的属性名是默认的生成数字,从零开始递增,而且这个数字代表每一项的位置,成为'索引' => 从零开始 ,连续递增,代表每一项的位置的数字属性名
            2.天生默认一个属性名 length .存储数组的长度
    */

    let ary = [12, '哈哈', true, 13];
    console.log(ary);
    console.log(ary.length); //=>4
    console.log(ary['length']); //=>4
    console.log(ary[1]); //=>哈哈
    // 第一项索引是0 最后一项索引是 ary.length-1
    console.log(ary[0]); //=>12
    console.log(ary[ary.length - 1]); //=>13
    //向数组末尾追加内容
    ary[ary.length] = 100;
    console.log(ary);
}
sampl4();
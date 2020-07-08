//
var a = 12;
var b = a;
b = 13;
console.log(a);


//
var ary1 = [12, 23];
var ary2 = ary1;
ary2.push(100);
console.log(ary1);

//函数
function sum() {
    var total = null;
    for (var i = 0; i < arguments.length; i++) {
        var item = arguments[i];
        item = parseFloat(item);
        !isNaN(item) ? (total += item) : null;
    }
    return total;
}

console.log(sum(12,23,'34','AA'));
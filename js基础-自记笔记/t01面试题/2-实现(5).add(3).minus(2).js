/*2. 实现(5).add(3).minus(2) ,使其结果输出6 */

~(function () {
    //=>每一个方法执行完,都要返回NUMBER这个类的实例,这样才可以调取NUMBER类原型中的方法(链式写法)
    function check(n) {
        n = Number(n);
        return isNaN(n) ? 0 : n;

        //return (n = Number(n) && (isNaN(n) ? 0 : n));
    }
    function add(n) {
        n = check(n);
        return this + n;
    }
    function minus(n) {
        n = check(n);
        return this - n;
    }
    Number.prototype.add = add;
    Number.prototype.minus = minus;
    /* ['add', 'minus'].forEach((item) => {
        Number.prototype[item] = eval(item);
    }); */
})();

console.log((5).add(3).minus(2));

/* 自定义Promise函数模块IIFE */
(function (window) {
    const PENDDING = 'pendding';
    const RESOLVED = 'resolved';
    const REJECTED = 'rejected';
    /* Promise构造函数
    executor：执行器函数（同步执行）
    */
    function Promise(excutor) {
        /* 将当前promise对象保存起来 */
        const self = this;
        this.status = 'pending'; //给Promise对象指定status，初始值为pendding
        this.data = undefined; //给Promise对象指定一个用于存储结果数据的属性
        this.callbacks = []; //每个元素的结构：{onResolved(){},onRejected(){}F}
        function resolve(value) {
            //  如果当前状态不是pendding，直接结束
            if (self.status == 'pendding') {
                return;
            }
        }
        function reject(reason) {}

        //立即同步执行excutor
        excutor(resolve, reject);
    }

    /* Promise 原型对象then() */
    Promise.prototype.then = function (onResolved, onRejected) {
        const self = this;
        return new Promise((resolve, reject) => {
            if (self.status === PENDDING) {
                //假设当前状态还是pendding状态，将回调函数保存起来
                self.callbacks.push({
                    onResolved,
                    onRejected,
                });
            } else if (self.status === RESOLVED) {
                setTimeout(() => {
                    /* 
                    1. 如果抛出异常，return的promise就会失败，reutrn就是error
                    2.如果回调函数不是promise，return 的promise 就会失败，value就是返回的值
                    3.如果回地函数返回是promise，return的promise结果就是这个promise的结果
                     */
                    try {
                        const result = onResolved(self.data);
                        //3
                        if (result instanceof Promise) {
                            // result.then(
                            //     (value) => resolve(value), //当result 成功时，让return 的promise也成功
                            //     (reason) => reject(reason) //当reject失败时，让return 的promise也失败
                            // );
                            result.then(resolve,reject)
                        } else {
                            //3
                            resolve(result);
                        }
                    } catch (error) {
                        //1
                        reject(error);
                    }

                    onResolved(self.data);
                }, 1000);
            } else {
                setTimeout(() => {
                    /* 
                    1. 如果抛出异常，return的promise就会失败，reutrn就是error
                    2.如果回调函数不是promise，return 的promise 就会失败，value就是返回的值
                    3.如果回地函数返回是promise，return的promise结果就是这个promise的结果
                     */
                    try {
                        const result = onRejected(self.data);
                        //3
                        if (result instanceof Promise) {
                            // result.then(
                            //     (value) => resolve(value), //当result 成功时，让return 的promise也成功
                            //     (reason) => reject(reason) //当reject失败时，让return 的promise也失败
                            // );
                            result.then(resolve,reject)
                        } else {
                            //3
                            resolve(result);
                        }
                    } catch (error) {
                        //1
                        reject(error);
                    }

                    onResolved(self.data);
                }, 1000);
            }
        });
    };

    /* Promise 原型对象catch() 
     指定失败的回调函数
     */
    Promise.prototype.catch = function (onRejected) {};

    /* Promise函数对象resolve方法*/
    Promise.resolve = function (value) {};

    /* Promise函数对象reject方法 */

    Promise.reject = function (reason) {};

    /* Promise函数对象all方法 */
    Promise.all = function (promises) {};
    /* Promise函数对象race方法 */
    Promise.race = function (promises) {};
})(window);

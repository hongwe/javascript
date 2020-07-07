### 2.1 Promise 是什么

理解

1. 抽象表达 :Promise 是 js 中进行异步编程的新的解决方案
2. 具体表达
    1. 从语法来说 Promise 是个构造函数
    2. 从功能来说 Promise 对象用来封装一个异步操作并可以获取其结果

Promise 状态改变

1. pendding 变为 resolved
2. pendding 变为 rejected

-   说明:只有这两种 且 一个 promise 对象只能改变一次,无论成功失败,都会有一个结果数据,成功结果数据 一般称 value,失败结果数据 一般称 reason

Promise 基本流程

图 2.png

基本使用

```javascript
//基本使用
//1.创建
const p = new Promise((resolve, reject) => {
    //执行器函数 同步回调
    console.log('执行excutor');
    //2.执行异步操作任务
    setTimeout(() => {
        const time = Date.now(); //如果当前时间为偶数代表成功,否则失败
        //3.1如果成功 调用 resolve(value)
        if (time % 2 === 0) {
            resolve('成功数据,time=' + time);
        } else {
            //3.2如果失败 调用 reject(reason)
            reject('失败数据,time=' + time);
        }
    }, 1000);
});
p.then(
    (value) => {
        //接收得到成功的value数据 (onResolved)
        console.log('成功的回调', value);
    },
    (reason) => {
        //接收得到失败的reason数据 (onRejected)
        console.log('失败的回调', reason);
    }
);
```

### 2.2 为什么要使用 Promise

1. 使用纯回调函数

```javascript
createAudioFileAsyns(audioSettings, successCallback, failureCallback);
```

2. 使用 Promise

```javascript
const promise = createAudioFileAsyns(audioSettings); //2
setTimeout(() => {
    promise.then(successCallback, failureCallback);
}, 3000);
```

1. 指定回调函数的方式更加灵活:
    - 旧的:必须再奇动异步人五千指定
    - promise:启动异步任务 => 返回 promise 对象 =>给 primise 对象绑定回调函数(甚至可以在异步)
2. 支持链式调用,可以解决回调地狱问题
    - 什么是回调地狱?回调函数嵌套调用,外部回调函数异步执行的结果是嵌套的回调函数执行的条件
    - 回调地狱的缺点?不便阅读, / 不便与异常处理
    - 解决方案:promise 链式调用
    - 终极解决方案? async/await

```javascript
//成功的回调函数
function successCallback(result) {
    console.log('声音文件创建成功' + result);
}
//失败的回调函数
function failereCallback(error) {
    console.log('声音文件创建成功' + error);
}
```

async/await 回调地狱的终极解决方案

```javascript
async function request() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doSomethingElse(newResult);
        console.log('got the final frsult:' + finalResult);
    } catch (error) {
        failereCallback(error);
    }
}
```

### 2.3 如何使用 Promise

#### 2.3.1 API

1. Promise 构造函数: Promise(excutor){}

    - excutor 函数:同步执行 (resolve,reject) =>{}
    - resolve 函数:内部定义成功时我们调用的函数 value=>{}
    - reject 函数:内部定义失败时我们调用的函数 reason=>{}
    - 说明 excutor 函数会在 Promise 内部立即同步调用,异步操作再执行器中执行

2. Promise.prototype.then 方法:(onResolved,onRejected)=>{}

    - onResolved 函数: 成功的回调函数(value)=>{}
    - onRejected 函数: 失败的回调函数(reason)=>{}
    - 说明指定用于得到成功 value 的成功回调和用于得到失败 reason 的失败回调返回一个新的 promise 对象

3. Promise.prototype.catch 方法 :(onRejected)=>{}

    - onRejected 函数: 失败的回调函数(reason)=>{}
    - then()的语法糖,相当于 then(undefined,onRejected)

4. Promise.resolve 方法 :(value)=>{}

    - value: 成功的数据或 promise 对象
    - 说明:返回一个成功/失败的 promise 对象

5. Promise.reject 方法 :(reason)=>{}

    - reason: 失败的原因
    - 说明:返回一个失败的 promise 对象

6. Promise.all 方法 :(promises)=>{}

    - promises: 包含 n 个 promise 数组
    - 说明:返回一个新的 promise,只有所有的 promise 都成功才成功,只有有一个失败就直接失败

7. Promise.race 方法 :(promises)=>{}
    - promises: 包含 n 个 promise 数组
    - 说明:返回一个新的 promise,第一个完成的 promise 的结果状态就是最终结果状态

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功的数据');
        //reject('失败的数据')
    }, 1000);
})
    .then((value) => {
        console.log('onResolved()1', value);
    })
    .catch((reason) => {
        console.log('onReject()1', reason);
    });

//产生一个成功值为1的promise对象
const p1 = new Promise((resolve, reject) => {
    resolve(1);
});
const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);
p1.then((value) => {
    console.log(value);
});
p2.then((value) => {
    console.log(value);
});
// p3.then((value) => {
//     null,
//         (reason) => {
//             console.log(reason);
//         };
// });
p3.catch((reason) => {
    console.log(reason);
});

// const pAll = Promise.all([p1, p2, p3]);
const pAll = Promise.all([p1, p2]);
pAll.then(
    (values) => {
        console.log('all onResolved()', values);
    },
    (reason) => {
        console.log('all onRejected()', reason);
    }
);

const pRace = Promise.race([p1, p2, p3]);
pRace.then(
    (value) => {
        console.log('all onResolved()', value);
    },
    (reason) => {
        console.log('all onRejected()', reason);
    }
);
```

### 常见问题

1. 如何改变 promise 的状态?
    1. resolve(value):如果当前是 pending 就会变为 resolved
    2. reject(reason):如果当前是 pending 就会变为 rejected
    3. 抛出异常:如果当前是 pendding 会变为 reject

```javascript
const p = new Promise((resolve, reject) => {
    //resolve(1)//promise变为resolved成功状态
    //reject(2)//promise变为rejected失败状态
    // throw new Error('出错了')//抛出异常 ,promise变为rejected失败状态,reason为抛出的error
    throw 3; //抛出异常 promise变为rejected失败状态,reason为抛出的3
});
p.then(
    (value) => {},
    (reason) => {
        console.log('reason', reason);
    }
);
```

2. 一个 promise 指定多个成功/失败回调函数,都会调用吗
3.

```javascript
//改先后方法1
new Promise((resolve, reject) => {
    resolve(1); //先改变的状态(同时指定数据)
}).then(
    //后指定回调函数,异步执行回调函数
    (value) => {
        console.log('value2', value);
    },
    (reason) => {
        console.log('reason2', reason);
    }
);
//改先后方法2
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1); //后改变的状态(同时指定数据),异步执行回调函数
    }, 1000);
});
setTimeout(() => {
    p.then(
        //后指定回调函数,异步执行回调函数
        (value) => {
            console.log('value3', value);
        },
        (reason) => {
            console.log('reason3', reason);
        }
    );
}, 1100);
```

4. promise.then()返回的新的 promise 的结果状态由什么决定
    1. 简单表达 : 由 then()指定的回调函数执行的结果决定
    2. 详细表达
        1. 如果抛出异常:新 promise 变为 rejected,reason 为抛出异常
        2. 如果返回的时非 promise 的任意值,新 promise 变为 resolved,value 为返回的值
        3. 如果返回的另一个新 prosmise,此 promise 的结果就会成为新 promise 的结果

```javascript
new Promise((resolve, reject) => {
    resolve(1);
    //reject(2);
})
    .then(
        (value) => {
            console.log('onResolved1()', value);
            //return 2
            //return Promise.resolve(3)
            //return Promise.reject(4)
            throw 5;
        },
        (reason) => {
            console.log('onRecjcted1()', reason);
        }
    )
    .then(
        (value) => {
            console.log('onResolved2()', value);
        },
        (reason) => {
            console.log('onRecjcted2()', reason);
        }
    );
```

5. promise 如何`串连`多个操作任务
    1. promise 的 then()返回一个新的 prpmise,可以写成 then()的链式调用
    2. 通过 then 链式调用多个同步异步任务

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行任务1(异步)');
        resolve(1);
    }, 1000);
})
    .then((value) => {
        console.log('任务1的结果', value);
        console.log('执行任务2(同步)');
        //resolve(2);
        return 2;
    })
    .then((value) => {
        console.log('任务2的结果', value);
        return new Promise((resolve, reject) => {
            //启动异步任务3
            setTimeout(() => {
                console.log('执行任务3(异步)');
                resolve(3);
            }, 1000);
        });
    })
    .then((value) => {
        console.log('任务1的结果', value);
    });



    //6问题
    reason => { throw reason}
    ...
    .catch(reason => {
         console.log('onRecjcted1()', reason);
    })
```
6. 问题
7. 中断promise链
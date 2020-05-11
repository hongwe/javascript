/* 
模块化开发
    1. 团队协作开发的时候 ,会把产品按照功能板块进行划分,每一个功能板块有专人负责开发
    2. 把各个板块之间公用的部分进行提取封装,后期在想实现这些功能,直接调取引用即可(模块封装)

*/

var utils = (function () {
    return {
        aa: function () {},
    };
})();

//=> codeA

var skipRender = (function () {
    var fn = function () {
        //...
    };
    //...
    return {
        init: function () {},
        fn: fn,
    };
})();
skipRender.init();

//=> codeB
var weatherRender = (function () {
    var fn = function () {
        //...
    };
    //...
    return {
        init: function () {
            fn(); //调取自己模块中的方法直接调取使用即可
            skipRender.fn(); //调取别人模块中的方法
        },
    };
})();
weatherRender.init();

/* 
基于单例设计模式管理商城排序的代码
*/
let shopModule = (function() {
    //=>queryData :从服务器获取数据
    function queryData() {}
    //=>bindHTML :把数据绑定在页面中
    function bindHTML() {}
    //=>sortHandle :实现商城排序
    function sortHandle() {}
    return {
        //=> 当前模块的入口: 想让商城排序开始执行,我们只需要执行INIT,在INIT中会按照排序,依次完成具体的业务逻辑
        init() {
            //=>init:function(){}
            queryData();
            bindHTML();
            sortHandle();
        }
    };
})();


shopModule.init();

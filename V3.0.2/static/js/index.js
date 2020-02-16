layui.define(['form','layer','element','carousel'],function(exports){
    var $ = layui.$;
    var form = layui.form;
    var layer = layui.layer;
    var element = layui.element;
    var carousel = layui.carousel;
 
    var objList = {
        ajax:function(filter,url){
            form.on(filter,function(data){
                $.ajax({
                    url:url,
                    data:data.field,
                    type:'post',
                    dataType:'json',
                    success:function(result){
                        if(result.status==0){
                            layer.msg(result.msg);
                        }
                    }
                });
                return false;
            });
        },
        hello:function(str){
            $('#btn').click(function(){
                layer.msg(str);
            });
        },
        say:function(str){
            $("#say").on('click', function(event) {
                alert(str);
            });
        },
        slider:function(){
            carousel.render({
                elem: '#test1'
                ,arrow: 'always'
            });
        },
        inru:function(){
            var _this = this;
            $('#btn2').on('click', function(event) {
                _this.ceshi();
            });
        },
        ceshi:function(str){
            layer.msg('这是ceshi的方法，它被inru方法调用了！');
        },
        tabs:function(){
            //$(".slideTxtBox").slide({});
        }

    };
    exports('index',objList);
});
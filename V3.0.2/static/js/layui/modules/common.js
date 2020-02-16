var $win = $(window), 
	$body = $('body'), 
	$body_html = $('body, html'), 
	$scroll_to_top = $('#scroll-to-top'),
	$menus_nav = $("#menus-nav>a");

layui.define(["jquery"], function (exports) {
	var $ = layui.jquery;
	var jQuery = layui.jquery;

	var common = {
		//ajax
        ajax: function (url, type, dataType, data, callback) {
            $.ajax({
                url: url,
                type: type,
                dataType: dataType,
                data: data,
                success: callback
            });
        },
        //导航菜单点击高亮
        clickMenus:function(obj){
        	if($menus_nav){
        		$menus_nav.click(function(){
					$(this).addClass("active").siblings().removeClass("active");
				});
        	}
        },
        //返回顶部
        goTotop:function(){
			var navigation_height = $body_html.height();
			$(window).scroll(function () {
		        var $scroll_top = $(this).scrollTop()+$body_html.height();
		        console.log($scroll_top,navigation_height)
		        if ($scroll_top > navigation_height) {
		            $scroll_to_top.addClass('on');
		        } else {
		            $scroll_to_top.removeClass('on');
		        }
		    });
		    $scroll_to_top.click(function() {
		        $.scrollWindow(0);
		    });
		    $.scrollWindow = function(offset) {
		        $body_html.animate({
		            scrollTop: offset
		        }, 300);
		    };
		}
    };
    common.clickMenus();
    common.goTotop();

	exports('common', common);
});
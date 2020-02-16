// 完美运动框架

/*
    @params:obj，DOM元素
    @params:attr，css属性
*/
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

/*
    @params: obj，DOM元素
    @params: json，传入需要进行运动的CSS属性键值对，如{width: 300, opacity: 80}
    @params: fn，当一个属性运动完成时，进行下一个运动（链式运动）
*/
function move(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true; // 设定所有属性都已完成运动

        for (var attr in json) {
            // 获取当前值并处理透明度
            if (attr == "opacity") {
                var cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                var cur = parseInt(getStyle(obj, attr));
            }
            // 设置速度
            var speed = (json[attr] - cur) / 10;
            // 判断方向
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            // 判断是否全部完成运动
            if (cur != json[attr]) flag = false;

            // 运动
            if (attr == "opacity") {
                obj.style.filter = "alpha(opacity:" + (cur + speed) + ")";
                obj.style.opacity = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + "px";
            }
        }

        if (flag) {
            clearInterval(obj.timer);
            // 若存在下一个运动，则进行下一次运动
            if (fn) fn();
        }
    }, 30);
}

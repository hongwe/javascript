/* 
图片完全显示出来的条件
 a:盒子底边距离BODY(页面的最顶端)的距离: 盒子的高度+盒子距body的上偏移
 b:浏览器底边距离body的距离: 一屏的高度 + 卷曲的高度

 a<=b :盒子就完全出现在用户的视野中

 让图片显示

 获取图片true-img属性的值 赋值给src属性 ,当乳品能正常加载出来后 让图片显示即可
*/

function offset(curEle) {
    let par = curEle.offsetParent,
        l = curEle.offsetLeft;
    t = curEle.offsetTop;
    while (par && par.tagName !== 'BODY') {
        //在原有偏移的基础上累加; 父参照物的边框,服参照物的偏移
        if (!/MSIE 8\.0/.test(navigator.userAgent)) {
            l += par.clientLeft;
            t += par.clientTop;
        }
        l += par.offsetLeft;
        t += par.offsetTop;
        par = par.offsetParent;
    }
    return {
        top: t,
        left: l
    };
}

let imgBox = document.querySelector('.imgBox'),
    _img = imgBox.querySelector('img');

//=>显示图片

function lazyImg(curImg) {
    let trueImg = curImg.getAttribute('trueImg');
    //给src复制真实地址
    curImg.src = trueImg;

    //校验图片是否能投正常加载出来
    curImg.onload = function() {
        curImg.style.display = 'block';
    };
    //=>设置自定义属性 isLoad存储当前图片已经加载过了
    curImg.isLoad = true;
}

//=> 监听页面滚动事件(不论基于什么方式,只要页面滚动了,则触发事件)

window.onscroll = function() {
    //=>已经加载过就不要在重复加载了
    if (_img.isLoad) return;
    let HTML = document.documentElement,
        b = HTML.clientHeight + HTML.scrollTop,
        a = imgBox.offsetHeight + offset(imgBox).top; //=>当前案例中获取距离Body的上偏移完全可以imgBox.offsetTop,因为夫参照物就是bodyimg
    if (a <= b) {
        //=>符合图片显示的条件了
        this.lazyImg(_img);
    }
};

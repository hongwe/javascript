function pList(min, max) {
    let list = document.getElementById('list');
    for (let i = min; i <= max; i++) {
        if (i < 10) {
            let html =
                '<div id ="p00' +
                i +
                '">' +
                '<div class="page">' +
                '<img src="gzb/00' +
                i +
                '-gzb.png" />' +
                '</div>' +
                '<div class="pagehalf">' +
                '<img src="zp/00' +
                i +
                '-zp.jpg" />' +
                '</div>' +
                '<div class="pagehalf">' +
                '<img src="wgd/00' +
                i +
                '-wgd.png" />' +
                '</div>' +
                '<div class="pagenone1">' +
                '<img src="wgd/00' +
                i +
                '-wgd-wh.png" />' +
                '</div>' +
                '<div class="pagenone2">' +
                '<img src="wgd/00' +
                i +
                '-wgd-yj.png" />' +
                '</div></div>';
            list.innerHTML += html;
        } else if (i < 100) {
            let html =
                '<div id ="p0' +
                i +
                '">' +
                '<div class="page">' +
                '<img src="gzb/0' +
                i +
                '-gzb.png" />' +
                '</div>' +
                '<div class="pagehalf">' +
                '<img src="zp/0' +
                i +
                '-zp.jpg" />' +
                '</div>' +
                '<div class="pagehalf">' +
                '<img src="wgd/0' +
                i +
                '-wgd.png" />' +
                '</div>' +
                '<div class="pagenone1">' +
                '<img src="wgd/0' +
                i +
                '-wgd-wh.png" />' +
                '</div>' +
                '<div class="pagenone2">' +
                '<img src="wgd/0' +
                i +
                '-wgd-yj.png" />' +
                '</div></div>';
            list.innerHTML += html;
        } else {
            let html =
                '<div id ="p' +
                i +
                '">' +
                '<div class="page">' +
                '<img src="gzb/' +
                i +
                '-gzb.png" />' +
                '</div>' +
                '<div class="pagehalf">' +
                '<img src="zp/' +
                i +
                '-zp.jpg" />' +
                '</div>' +
                '<div class="pagehalf">' +
                '<img src="wgd/' +
                i +
                '-wgd.png" />' +
                '</div>' +
                '<div class="pagenone1">' +
                '<img src="wgd/' +
                i +
                '-wgd-wh.png" />' +
                '</div>' +
                '<div class="pagenone2">' +
                '<img src="wgd/' +
                i +
                '-wgd-yj.png" />' +
                '</div></div>';
            list.innerHTML += html;
        }
    }
}

function ajax(url,fnSucc,fnFaild ){
    if (window.XMLHttpRequest) {
        var oAjax = new XMLHttpRequest();
      } else {
        var oAjax = new ActiveXObject("Microsift.XMLHTTP");
      }
    
      oAjax.open('GET', 'a.txt?t=' + new Data().getTime(),true);
      oAjax.send();
      oAjax.onreadystatechange = function() {
        //oAjax.readyState
        if ((oAjax.readyState = 4)) //读取完成
        {
            if(oAjax.status==200)//成功
            {
               fnSucc(oAjax.responseText);
            }
            else{

                if(fnFaild){
                    fnFaild(oAjax.status)
                }
                alert('失败:' + oAjax.status);
            }
        }
      };
}

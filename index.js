var s_count=0;
var b_count=0;
var t_count=0;

function searchWord(){
    s_count++;
    b_count=0;
    t_count=0;
    if (s_count%2 == 1) {
        pic = document.getElementById("wide9").value;
        document.getElementById("wide9").innerHTML = '<div class="func_area"><form action="/search" method="get"><input type="text" value="" size="50" name="q" value="{SearchQuery}" style="font-size: 30px; line-height: 50px;"><input type="submit" value="検索" style="font-size: 30px; line-height: 50px;"></form></div>';
    } else {
        document.getElementById("wide9").innerHTML = '<img src="http://static.tumblr.com/e83s8oh/ksrn9rtj0/twicesleepbig.png" style="width: 952px;">';
    }
}

function bookmark(toURL,toStr){
        if(navigator.userAgent.indexOf("MSIE") > -1){
        //Internet Explorer
                window.external.AddFavorite(toURL,toStr);
        }else if(navigator.userAgent.indexOf("Lunascape") > -1){
        //Lunascape
                alert("Please type [Ctrl]or[Command] and [G].");
        }else if(navigator.userAgent.indexOf("Flock") > -1){
        //Flock
                window.sidebar.addPanel(toStr,toURL,'');
        }else if(navigator.userAgent.indexOf("Firefox") > -1){
        //Firefox
                window.sidebar.addPanel(toStr,toURL,'');
        }else if(navigator.userAgent.indexOf("Opera") > -1){
        //Opera
                window.open(toURL,'sidebar','title='+toStr);
        }else if(navigator.userAgent.indexOf("Chrome") > -1){
        //Chrome,Safari
                alert("Sorry, this button is not for Google Chrome and Safari.Please type [Ctrl]or[Command] + [D]");
        }else{
        //その他
                alert("Sorry, Please use Bookmark on your browser....");
        }
}

function twitter(){
    s_count=0;
    b_count=0;
}
function isMobileBrowser(){
    var result=false;
    var sUserAgent= navigator.userAgent.toLowerCase();  
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";  
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";  
    var bIsMidp= sUserAgent.match(/midp/i) == "midp";  
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";  
    var bIsAndroid= sUserAgent.match(/android/i) == "android";  
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";  
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
    if(bIsIpad||(window.screen.height>=768&&window.screen.width>=1024)){
        result=false;
    }
    else if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {  
        result=true; 
    }
    else
    {  
        result=false;
    }
    return result;
}

if(isMobileBrowser()){
    var currentHref=location.href;
    currentHref=currentHref.replace("www.","m.");
    location.href=currentHref;
}
document.writeln("<script language=\'javascript\' type=\'text/javascript\' src=\'https://apps.bdimg.com/libs/jquery/1.4.2/jquery.js\'></script>");
//
var jieqiUserId = 0;
var jieqiUserName = '';
var jieqiUserPassword = '';
var jieqiUserGroup = 0;
var jieqiNewMessage = 0;
var jieqiUserVip = 0;
var jieqiUserHonor = '';
var jieqiUserGroupName = '';
var jieqiUserVipName = '';

var timestamp = Math.ceil((new Date()).valueOf()/1000); //��ǰʱ���
var flag_overtime = -1;
if(document.cookie.indexOf('jieqiUserInfo') >= 0){
	var jieqiUserInfo = get_cookie_value('jieqiUserInfo');
	//document.write(jieqiUserInfo);
	start = 0;
	offset = jieqiUserInfo.indexOf(',', start); 
	while(offset > 0){
		tmpval = jieqiUserInfo.substring(start, offset);
		tmpidx = tmpval.indexOf('=');
		if(tmpidx > 0){
           tmpname = tmpval.substring(0, tmpidx);
		   tmpval = tmpval.substring(tmpidx+1, tmpval.length);
		   if(tmpname == 'jieqiUserId') jieqiUserId = tmpval;
		   else if(tmpname == 'jieqiUserName_un') jieqiUserName = tmpval;
		   else if(tmpname == 'jieqiUserPassword') jieqiUserPassword = tmpval;
		   else if(tmpname == 'jieqiUserGroup') jieqiUserGroup = tmpval;
		   else if(tmpname == 'jieqiNewMessage') jieqiNewMessage = tmpval;
		   else if(tmpname == 'jieqiUserVip') jieqiUserVip = tmpval;
		   else if(tmpname == 'jieqiUserHonor_un') jieqiUserHonor = tmpval;
		   else if(tmpname == 'jieqiUserGroupName_un') jieqiUserGroupName = tmpval;
		}
		start = offset+1;
		if(offset < jieqiUserInfo.length){
		  offset = jieqiUserInfo.indexOf(',', start); 
		  if(offset == -1) offset =  jieqiUserInfo.length;
		}else{
          offset = -1;
		}
	}
	flag_overtime = get_cookie_value('overtime');
} else {
	delCookie('overtime');
}
function delCookie(name){
   var date = new Date();
   date.setTime(date.getTime() - 10000);
   document.cookie = name + "=a; expires=" + date.toGMTString();
}

function get_cookie_value(Name) { 
  var search = Name + "=";
��var returnvalue = ""; 
��if (document.cookie.length > 0) { 
��  offset = document.cookie.indexOf(search) 
����if (offset != -1) { 
����  offset += search.length 
����  end = document.cookie.indexOf(";", offset); 
����  if (end == -1) 
����  end = document.cookie.length; 
����  returnvalue=unescape(document.cookie.substring(offset, end));
����} 
��} 
��return returnvalue; 
}
function login(){
	document.writeln("<div class=\"ywtop\"><div class=\"ywtop_con\"><div class=\"ywtop_sethome\"></div>");
document.writeln("		<div class=\"ywtop_addfavorite\"><a href=\"javascript:window.external.addFavorite(\'http://www.okma.net\',\'������ѧ_������ֵ���ղص�����С˵�Ķ���\')\">�ղ�������ѧ</a></div>");
document.write('<div class="nri">');
if(jieqiUserId != 0 && jieqiUserName != '' && (document.cookie.indexOf('PHPSESSID') != -1 || jieqiUserPassword != '')){
  if(jieqiUserVip == 1) jieqiUserVipName='<span class="hottext">����VIP-</span>';
  document.write('Hi,<a href="/userdetail.php?uid='+jieqiUserId+'" target="_top">'+jieqiUserName+'</a>&nbsp;&nbsp;<a href="/modules/article/bookcase.php?uid='+jieqiUserId+'" target="_top">�ҵ����</a>');
  if(jieqiNewMessage > 0){
	  document.write(' | <a href="/message.php?uid='+jieqiUserId+'&box=inbox" target="_top"><span class=\"hottext\">���ж���</span></a>');
  }else{
	  document.write(' | <a href="/message.php?uid='+jieqiUserId+'&box=inbox" target="_top">�鿴����</a>');
  }
  document.write(' | <a href="/userdetail.php?uid='+jieqiUserId+'" target="_top">�鿴����</a> | <a href="/logout.php" target="_self">�˳���¼</a>&nbsp;');
}else{
  var jumpurl="";
  if(location.href.indexOf("jumpurl") == -1){
    jumpurl=location.href;
  }
  document.write('<form name="frmlogin" id="frmlogin" method="post" action="/login.php?do=submit&action=login&usecookie=1&jumpurl="'+jumpurl+'&jumpreferer=1>');
  document.write('<div class="cc"><div class="txt">�˺ţ�</div><div class="inp"><input type="text" name="username" id="username" /></div></div>');
  document.write('<div class="cc"><div class="txt">���룺</div><div class="inp"><input type="password" name="password" id="password" /></div></div>');
  document.write('<div class="frii"><input type="submit" class="int" value=" " /></div><div class="ccc"><div class="txtt"><a href="/getpass.php">��������</a></div><div class="txtt"><a href="/register.php">�û�ע��</a></div></div></form>');
}
 document.write('</div></div></div>');
}
function ttt(){
	document.getElementById("keyword").value = "";
}
function bqg_panel(){
document.writeln('<div class="header_search"><div class="_17mb_searchtype"><span>����</span></div><form name="form" action="http://www.okma.net/search.html" id="sform" target="_blank" method="post"><input type="text" value="�������������ߣ���������Ҳ������֡�" name="keyword" class="search" id="keyword" onclick="ttt()" baiduSug="2" /><button id="sss" type="submit">�� ��</button><select id="stype" name="searchtype" style="displany:none"><option value="articlename" selected>����</option><option value="author">����</option></select></form></div><div class="userpanel">&nbsp;<font color="red">���ԣ�</font>��<a href="/newmessage.php?tosys=1" >վ�ڶ���</a><br /><a target="_blank" href="/jifen.html">���ֹ���</a>&nbsp;&nbsp;<a target="_blank" href="/dns.html">����������վ</a></div>');
}




function clicktabs(tit_id,box_id,cur){
	var g_tags=$(tit_id),
	g_conts=$(box_id),
	g_current=cur;
	g_tags.mouseover(function(){
		var g_index=g_tags.index(this);
		$(this).addClass(g_current).siblings().removeClass(g_current);
		g_conts.eq(g_index).show().siblings().hide();
		})
}




function bdshare_novel(){

}


function tj(){
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?545700dadf1da6b6fca27f78f4301682";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
}
function topa(){

}
function bottoma(){
	
}
function style_1(){
	
}
function style_2(){
	
}
function style_3(){

}





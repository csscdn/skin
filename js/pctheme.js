function Go(a) {
    window.location = a
}
function login() {
    function k(a) {
        var b = a + "=",
        c = "";
        return document.cookie.length > 0 && (offset = document.cookie.indexOf(b), -1 != offset && (offset += b.length, end = document.cookie.indexOf(";", offset), -1 == end && (end = document.cookie.length), c = unescape(document.cookie.substring(offset, end)))),
        c
    }
    var j, a = 0,
    b = "",
    c = "",
    d = 0,
    e = 0,
    f = 0,
    g = "",
    h = "";
    if (document.cookie.indexOf("jieqiUserInfo") >= 0) for (j = k("jieqiUserInfo"), start = 0, offset = j.indexOf(",", start); offset > 0;) tmpval = j.substring(start, offset),
    tmpidx = tmpval.indexOf("="),
    tmpidx > 0 && (tmpname = tmpval.substring(0, tmpidx), tmpval = tmpval.substring(tmpidx + 1, tmpval.length), "jieqiUserId" == tmpname ? a = tmpval: "jieqiUserName_un" == tmpname ? b = tmpval: "jieqiUserPassword" == tmpname ? c = tmpval: "jieqiUserGroup" == tmpname ? d = tmpval: "jieqiNewMessage" == tmpname ? e = tmpval: "jieqiUserVip" == tmpname ? f = tmpval: "jieqiUserHonor_un" == tmpname ? g = tmpval: "jieqiUserGroupName_un" == tmpname && (h = tmpval)),
    start = offset + 1,
    offset < j.length ? (offset = j.indexOf(",", start), -1 == offset && (offset = j.length)) : offset = -1;
    0 == a || "" == b || -1 == document.cookie.indexOf("PHPSESSID") && "" == c ? (document.write('<form action="/login.php"  name="frmlogin" method="post">'), document.write('<div class="unloginl">'), document.write('<input type="text" name="username" placeholder="帐号" class="putk">'), document.write(' <input type="password" name="password" placeholder="密码" class="putk">'), document.write(' <input type="hidden" class="login_box" checked="checked" name="usecookie" value="315360000"> '), document.write(' <input class="loginbtn" type="hidden" name="action" value="login">'), document.write(' <input type="submit" name="submit" class="logint" value="登录">&nbsp;&nbsp;<a href="/register.php">注册</a>'), document.write("</form>")) : (document.write("<b>Hi " + b + ' </b>，<a href="/user.php">个人中心</a> | <a href="/bookcase.php">我的书架</a>'), e > 0 ? document.write(' | <a href="/message.php?box=inbox" style="color:#f00">您有短信</a>') : document.write(' | <a href="/message.php?box=inbox">收件箱</a>'), document.write(' | <a href="/logout.php" target="_self">退出</a>'))
}
function sq(a, b) {
    e = "/modules/article/addbookcase.php?bid=" + a + "&cid=" + b + "&ajax_request=1",
    $.get(e,
    function(a) {
        alert(a.replace("<br />", "").replace(/(\<br \/\>)/g, "\r\n"))
    })
}
function tjp(a) {
    e = "/modules/article/uservote.php?id=" + a + "&ajax_request=1",
    $.get(e,
    function(a) {
        alert(a.replace("<br />", "").replace(/(\<br \/\>)/g, "\r\n"))
    })
}
function dj(a) {
    $.get("/click?id=" + a)
}

function shezhi() {
    document.writeln('<div class="container"><ul class="links"><li><a onclick="sq(' + bid + "," + cid + ');">标记书签</a> | </li><li><a onclick="tjp(' + bid + ');">给书点赞</a> | </li><li><a href="/newmessage.php?tosys=1&amp;title=' + name + '有错误&content=https://www.x23qb.com/modules/article/chapteredit.php?id='+ cid +'%0D%0A%C7%EB%C3%F7%C8%B7%B4%ED%CE%F3%D4%AD%D2%F2%0D%0A%0D%0A%A3%B1%D5%C2%BD%DA%D3%D0%CE%F3%0D%0A%A3%B2%B8%FC%D0%C2%CC%AB%C2%FD%0D%0A%A3%B3%C7%F3%CA%E9%0D%0A%0D%0A%D4%AD%D2%F2%C8%E7%CF%C2%A3%BA%0D%0A%0D%0A%0D%0A">报错求书</a> | </li></ul>'),
    document.writeln('<div class="mlfy_main_l"><i class="szk"><em class="icon-cog"></em> <z>阅读</z>设置</i><i class="hid">（推荐配合 快捷键[F11] 进入全屏沉浸式阅读）</i></div></div>'),
    document.writeln('<div class="mlfy_main_sz b2" ><p class="ml"><span class="txt">设置</span><span class="close">X</span></p><ul><li><span class="fl">阅读主题</span><i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i><i class="c5"></i><i class="c6 hover"></i><i class="c7"></i><i class="c8"></i></li> <li class="hid"><span class="fl">正文字体</span><span class="zt hover">雅黑</span><span class="zt">宋体</span><span class="zt">楷体</span><span class="zt" title="方正启体简体">启体</span><span class="zt" title="思源黑体 CN">思源</span><span class="zt" title="苹方字体">苹方</span></li><li><span class="fl">字体大小</span><span class="dx dxl">A-</span><span class="dx dxc">20</span><span class="dx dxr">A+</span></li><li class="hid"><span class="fl">页面宽度</span><p class="dx kdl"><span class="icon"></span><span class="fl">-</span></p><p class="dx kdc">100%</p><p class="dx kdr"><span class="icon"></span><span class="fl">+</span></p></li></ul><div class="btn-wrap"><a class="red-btn" href="javascript:">保存</a><a class="grey-btn"   href="javascript:">取消</a></div></div>')
}
function yuedu() {
    function a() {
        var a = -parseInt($(".mlfy_main").css("width")) / 2 - 60,
        b = a + 70 + "px";
        $(".mlf11y_main_l").css("margin-left", a + "px"),
        $(".mlfy_main_r").css("margin-right", a + "px"),
        $(".mlfy_main_sz").css("margin-left", b)
    }
    function b() {
        $(".mlfy_main_sz").removeClass("hover"),
        $(".mlfy_main_l i").removeClass("hover")
    }
    function c() {
        var a, b, c;
        void 0 != $.cookie("xszjsz") && (a = $.cookie("xszjsz").split(","), $("body").removeClass().addClass(a[0]), b = a[0].substring(2, 3) - 1, $(".mlfy_main_sz.b2 ul li i").eq(b).addClass("hover").siblings().removeClass("hover"), c = a[1].substring(2, 3) - 1, $(".mlfy_main_sz.b2 ul li .zt").eq(c).addClass("hover").siblings().removeClass("hover"), $("#mlfy_main_text").removeClass().addClass(a[1]), $(".mlfy_main_sz.b2 ul li .dxc").text(a[2]), $("#mlfy_main_text").css("font-size", a[2] + "px"), $(".mlfy_main_sz.b2 ul li .kdc").text(a[3]), $(".bar,.mlfy_main,.mlfy_add,.mlfy_page").css("width", a[3] + "px"), e = $.inArray(a[3], d))
    }
    var d, e, f, g, h, i, j, k;
    !
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    } (function(a) {
        function b(a) {
            return h.raw ? a: encodeURIComponent(a)
        }
        function c(a) {
            return h.raw ? a: decodeURIComponent(a)
        }
        function d(a) {
            return b(h.json ? JSON.stringify(a) : String(a))
        }
        function e(a) {
            0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return a = decodeURIComponent(a.replace(g, " ")),
                h.json ? JSON.parse(a) : a
            } catch(a) {}
        }
        function f(b, c) {
            var d = h.raw ? b: e(b);
            return a.isFunction(c) ? c(d) : d
        }
        var g = /\+/g,
        h = a.cookie = function(e, g, i) {
            var j, k, l, m, n, o, p, q, r;
            if (void 0 !== g && !a.isFunction(g)) return i = a.extend({},
            h.defaults, i),
            "number" == typeof i.expires && (j = i.expires, k = i.expires = new Date, k.setTime( + k + 864e5 * j)),
            document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path: "", i.domain ? "; domain=" + i.domain: "", i.secure ? "; secure": ""].join("");
            for (l = e ? void 0 : {},
            m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                if (p = m[n].split("="), q = c(p.shift()), r = p.join("="), e && e === q) {
                    l = f(r, g);
                    break
                }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
        h.defaults = {},
        a.removeCookie = function(b, c) {
            return void 0 !== a.cookie(b) && (a.cookie(b, "", a.extend({},
            c, {
                expires: -1
            })), !a.cookie(b))
        }
    }),
    d = ["640", "800", "990", "1200", "1400"],
    e = 2,
    void 0 != $.cookie("xszjsz") && (f = $.cookie("xszjsz").split(","), g = $.inArray(f[3], d), e = g),
    c(),
    a(),
    $(".szk").click(function() {
        $(".mlfy_main_sz,.szk").addClass("hover").siblings(".mlfy_main_sz").removeClass("hover")
    }),
    h = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7", "bg8"],
    $(".mlfy_main_sz.b2 ul li i").click(function() {
        $(this).addClass("hover").siblings().removeClass("hover");
        var a = $(this).index() - 1;
        $("body").removeClass().addClass(h[a])
    }),
    i = ["zt1", "zt2", "zt3", "zt4", "zt5", "zt6"],
    $(".mlfy_main_sz.b2 ul li .zt").click(function() {
        $(this).addClass("hover").siblings().removeClass("hover");
        var a = $(this).index() - 1;
        $("#mlfy_main_text").removeClass().addClass(i[a])
    }),
    $(".mlfy_main_sz.b2 ul li .dxl").click(function() {
        var a = parseInt($(".mlfy_main_sz.b2 ul li .dxc").text());
        a > 12 && (a -= 2, $(".mlfy_main_sz.b2 ul li .dxc").text(a), $("#mlfy_main_text").css("font-size", a))
    }),
    $(".mlfy_main_sz.b2 ul li .dxr").click(function() {
        var a = parseInt($(".mlfy_main_sz.b2 ul li .dxc").text());
        48 > a && (a += 2, $(".mlfy_main_sz.b2 ul li .dxc").text(a), $("#mlfy_main_text").css("font-size", a))
    }),
    $(".mlfy_main_sz.b2 ul li .kdl").click(function() {
        e > 0 && (e -= 1, $(".bar,.mlfy_main,.mlfy_add,.mlfy_page").css("width", d[e] + "px"), $(".kdc").text(d[e]), a())
    }),
    $(".mlfy_main_sz.b2 ul li .kdr").click(function() {
        4 > e && (e += 1, $(".bar,.mlfy_main,.mlfy_add,.mlfy_page").css("width", d[e] + "px"), $(".kdc").text(d[e]), a())
    }),
    $(".mlfy_main_sz.b2 ul li .yd").click(function() {
        $(this).addClass("hover").siblings().removeClass("hover")
    }),
    $(".mlfy_main_sz.b2 ul li .zd").click(function() {
        "开启" == $(this).text() ? ($(this).text("关闭").animate({
            left: "0px"
        }), $(this).parent().removeClass("on").addClass("off")) : ($(this).text("开启").animate({
            left: "20px"
        }), $(this).parent().removeClass("off").addClass("on"))
    }),
    $(".mlfy_main_sz.b2 .red-btn").click(function() {
        $.cookie("xszjsz", null, {
            expires: 7,
            path: "/"
        });
        var a = [];
        a.push($("body").attr("class")),
        a.push($("#mlfy_main_text").attr("class")),
        a.push($(".mlfy_main_sz.b2 ul li .dxc").text()),
        a.push($(".mlfy_main_sz.b2 ul li .kdc").text()),
        a.push($("#zd_bg").attr("class")),
        $.cookie("xszjsz", a.join(","), {
            expires: 7,
            path: "/"
        }),
        b()
    }),
    $(".mlfy_main_sz.b2 .grey-btn,.close").click(function() {
        void 0 == $.cookie("xszjsz") ? ($("body").removeClass().addClass("bg6"), $(".mlfy_main_sz.b2 ul li i").eq(0).addClass("hover").siblings().removeClass("hover"), $(".mlfy_main_sz.b2 ul li .zt").eq(0).addClass("hover").siblings().removeClass("hover"), $("#mlfy_main_text").removeClass(), $(".mlfy_main_sz.b2 ul li .dxc").text("20"), $("#mlfy_main_text").css("font-size", "20px"), $(".bar,.mlfy_main,.mlfy_add,.mlfy_page").css("width", "990px"), $(".kdc").text("990"), e = 2, b(), a()) : (b(), c(), a())
    }),
    j = $(".mlfy_add a").eq(2).attr("href"),
    $(".mlfy_main_r .a1").attr("href", j + "#l3"),
    k = document.getElementById("TextContent").innerHTML,
    k = k.replace(new RegExp("&nbsp;&nbsp;&nbsp;&nbsp;", "gi"), "<p>").replace(new RegExp("<br><br>", "gi"), "</p>").replace(new RegExp("<br>\n<br>", "gi"), "</p>"),
    document.getElementById("TextContent").innerHTML = k
}

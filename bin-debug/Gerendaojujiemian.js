var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Gerendaojujiemian = (function (_super) {
    __extends(Gerendaojujiemian, _super);
    function Gerendaojujiemian() {
        return _super.call(this) || this;
    }
    Gerendaojujiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Gerendaojujiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Gerendaojujiemian.prototype.chushihua = function (leixing, caiid) {
        this.guanbianniu.enabled = true;
        this.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbizhujiemian, this);
        this.jiemianzhezao.touchEnabled = true;
        this.jiemianzhezao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbizhujiemian, this);
        this.dangqiancaiid = caiid;
        this.dangqianshiyongleixing = leixing;
        /*
        初始化时，所有的道具格子都不显示
        */
        this.daojuzu.alpha = 0;
        this.daojuzu0.alpha = 0;
        this.daojuzu1.alpha = 0;
        this.daojuzu2.alpha = 0;
        this.daojuzu3.alpha = 0;
        this.daojuzu4.alpha = 0;
        this.daojuzu5.alpha = 0;
        this.daojuzu6.alpha = 0;
        this.daojuzu7.alpha = 0;
        this.daojuzu8.alpha = 0;
        this.daojuzu9.alpha = 0;
        this.daojuzu10.alpha = 0;
        /*
        初始化时，将所有坑的id重置为0
        */
        this.di1kengid = "0";
        this.di2kengid = "0";
        this.di3kengid = "0";
        this.di4kengid = "0";
        this.di5kengid = "0";
        this.di6kengid = "0";
        this.di7kengid = "0";
        this.di8kengid = "0";
        this.di9kengid = "0";
        this.di10kengid = "0";
        this.di11kengid = "0";
        this.di12kengid = "0";
        this.dangqianid = "0";
        /*
        /根据类型判断是个人使用道具，还是菜品使用道具,1为个人，2为道具
        */
        if (leixing == 1) {
            this.biaotiwenzixianshi.text = "个人进修";
            this.gerendaojuxiangguan();
        }
        else {
            this.biaotiwenzixianshi.text = "菜品研制";
            this.caipinyanzhixiangguang();
        }
    };
    Gerendaojujiemian.prototype.guanbizhujiemian = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.parent.removeChild(this);
    };
    /*
        对应道具表，检查菜品用的道具
        */
    Gerendaojujiemian.prototype.caipinyanzhixiangguang = function () {
        //		let caipindaojuzu = [];
        var caipinweizhi = 0;
        for (var i = 0; i < Gerenshuxing.daojubiao.length; i++) {
            if (Gerenshuxing.daojubiao[i].shiyongleixing == "5") {
                //				caipindaojuzu.push(Gerenshuxing.daojubiao[i].id);
                caipinweizhi += 1;
                this.panduanxianshineirong(Gerenshuxing.daojubiao[i].id, Gerenshuxing.daojubiao[i].xianshiicon, caipinweizhi);
            }
        }
    };
    /*
    对应道具表，检查个人使用道具
    */
    Gerendaojujiemian.prototype.gerendaojuxiangguan = function () {
        //		let gerendaojuzu = [];
        var geziweizhi = 0;
        for (var i = 0; i < Gerenshuxing.daojubiao.length; i++) {
            if (Gerenshuxing.daojubiao[i].shiyongleixing == "6") {
                //				gerendaojuzu.push(Gerenshuxing.daojubiao[i].id);
                geziweizhi += 1;
                this.panduanxianshineirong(Gerenshuxing.daojubiao[i].id, Gerenshuxing.daojubiao[i].xianshiicon, geziweizhi);
            }
        }
    };
    /*
    得到对应的道具ID，开始进行格子的显示
    */
    Gerendaojujiemian.prototype.panduanxianshineirong = function (id, tupian, xuhao) {
        if (xuhao == 1) {
            this.daojuicon.source = tupian;
            this.di1kengid = id;
            this.daojuzu.alpha = 1;
            this.daojuzu.touchEnabled = true;
            this.daojuzu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji1keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 2) {
            this.di2kengid = id;
            this.daojuicon0.source = tupian;
            this.daojuzu0.alpha = 1;
            this.daojuzu0.touchEnabled = true;
            this.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji2keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 3) {
            this.di3kengid = id;
            this.daojuicon1.source = tupian;
            this.daojuzu1.alpha = 1;
            this.daojuzu1.touchEnabled = true;
            this.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji3keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 4) {
            this.di4kengid = id;
            this.daojuicon2.source = tupian;
            this.daojuzu2.alpha = 1;
            this.daojuzu2.touchEnabled = true;
            this.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji4keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 5) {
            this.di5kengid = id;
            this.daojuicon3.source = tupian;
            this.daojuzu3.alpha = 1;
            this.daojuzu3.touchEnabled = true;
            this.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji5keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 6) {
            this.di6kengid = id;
            this.daojuicon4.source = tupian;
            this.daojuzu4.alpha = 1;
            this.daojuzu4.touchEnabled = true;
            this.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji6keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 7) {
            this.di7kengid = id;
            this.daojuicon5.source = tupian;
            this.daojuzu5.alpha = 1;
            this.daojuzu5.touchEnabled = true;
            this.daojuzu5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji7keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 8) {
            this.di8kengid = id;
            this.daojuicon6.source = tupian;
            this.daojuzu6.alpha = 1;
            this.daojuzu6.touchEnabled = true;
            this.daojuzu6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji8keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 9) {
            this.di9kengid = id;
            this.daojuicon7.source = tupian;
            this.daojuzu7.alpha = 1;
            this.daojuzu7.touchEnabled = true;
            this.daojuzu7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji9keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 10) {
            this.di10kengid = id;
            this.daojuicon8.source = tupian;
            this.daojuzu8.alpha = 1;
            this.daojuzu8.touchEnabled = true;
            this.daojuzu8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji10keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 11) {
            this.di11kengid = id;
            this.daojuicon9.source = tupian;
            this.daojuzu9.alpha = 1;
            this.daojuzu9.touchEnabled = true;
            this.daojuzu9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji11keng, this);
            this.panduankengbeijing(xuhao, id);
        }
        else if (xuhao == 12) {
            this.di12kengid = id;
            this.daojuicon10.source = tupian;
            this.daojuzu10.alpha = 1;
            this.daojuzu10.touchEnabled = true;
            this.daojuzu10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianji12keng, this);
            this.panduankengbeijing(xuhao, id);
        }
    };
    /*
    得到对应的道具ID，判断格子的背景板和数量显示
    */
    Gerendaojujiemian.prototype.panduankengbeijing = function (xuhao, id) {
        var shuliang = 0;
        var xianshishuliang = "0";
        var liangbeijing = "img_jiaohuanniudibu_png";
        var anbeijing = "img_jiaohuanniudibu1_png";
        var dangqianbeijing = "img_jiaohuanniudibu1_png";
        for (var h in Gerencaipudengji.daoju) {
            if (h == id) {
                shuliang = parseInt(Gerencaipudengji.daoju[h][0]);
                if (shuliang > 0 && shuliang < 10) {
                    xianshishuliang = shuliang + "";
                    dangqianbeijing = liangbeijing;
                }
                else if (shuliang >= 10) {
                    xianshishuliang = "9+";
                    dangqianbeijing = liangbeijing;
                }
                else {
                    xianshishuliang = "0";
                    dangqianbeijing = anbeijing;
                }
                break;
            }
        }
        switch (xuhao) {
            case 1:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang.source = dangqianbeijing;
                    this.shuliangdiban.source = "";
                    this.shuliangxianshi.text = "";
                }
                else {
                    this.daojubeijingkuang.source = dangqianbeijing;
                    this.shuliangdiban.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi.text = xianshishuliang;
                }
                break;
            case 2:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang0.source = dangqianbeijing;
                    this.shuliangdiban0.source = "";
                    this.shuliangxianshi0.text = "";
                }
                else {
                    this.daojubeijingkuang0.source = dangqianbeijing;
                    this.shuliangdiban0.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi0.text = xianshishuliang;
                }
                break;
            case 3:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang1.source = dangqianbeijing;
                    this.shuliangdiban1.source = "";
                    this.shuliangxianshi1.text = "";
                }
                else {
                    this.daojubeijingkuang1.source = dangqianbeijing;
                    this.shuliangdiban1.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi1.text = xianshishuliang;
                }
                break;
            case 4:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang2.source = dangqianbeijing;
                    this.shuliangdiban2.source = "";
                    this.shuliangxianshi2.text = "";
                }
                else {
                    this.daojubeijingkuang2.source = dangqianbeijing;
                    this.shuliangdiban2.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi2.text = xianshishuliang;
                }
                break;
            case 5:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang3.source = dangqianbeijing;
                    this.shuliangdiban3.source = "";
                    this.shuliangxianshi3.text = "";
                }
                else {
                    this.daojubeijingkuang3.source = dangqianbeijing;
                    this.shuliangdiban3.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi3.text = xianshishuliang;
                }
                break;
            case 6:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang4.source = dangqianbeijing;
                    this.shuliangdiban4.source = "";
                    this.shuliangxianshi4.text = "";
                }
                else {
                    this.daojubeijingkuang4.source = dangqianbeijing;
                    this.shuliangdiban4.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi4.text = xianshishuliang;
                }
                break;
            case 7:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang5.source = dangqianbeijing;
                    this.shuliangdiban5.source = "";
                    this.shuliangxianshi5.text = "";
                }
                else {
                    this.daojubeijingkuang5.source = dangqianbeijing;
                    this.shuliangdiban5.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi5.text = xianshishuliang;
                }
                break;
            case 8:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang6.source = dangqianbeijing;
                    this.shuliangdiban6.source = "";
                    this.shuliangxianshi6.text = "";
                }
                else {
                    this.daojubeijingkuang6.source = dangqianbeijing;
                    this.shuliangdiban6.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi6.text = xianshishuliang;
                }
                break;
            case 9:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang7.source = dangqianbeijing;
                    this.shuliangdiban7.source = "";
                    this.shuliangxianshi7.text = "";
                }
                else {
                    this.daojubeijingkuang7.source = dangqianbeijing;
                    this.shuliangdiban7.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi7.text = xianshishuliang;
                }
                break;
            case 10:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang8.source = dangqianbeijing;
                    this.shuliangdiban8.source = "";
                    this.shuliangxianshi8.text = "";
                }
                else {
                    this.daojubeijingkuang8.source = dangqianbeijing;
                    this.shuliangdiban8.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi8.text = xianshishuliang;
                }
                break;
            case 11:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang9.source = dangqianbeijing;
                    this.shuliangdiban9.source = "";
                    this.shuliangxianshi9.text = "";
                }
                else {
                    this.daojubeijingkuang9.source = dangqianbeijing;
                    this.shuliangdiban9.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi9.text = xianshishuliang;
                }
                break;
            case 12:
                if (xianshishuliang == "0") {
                    this.daojubeijingkuang10.source = dangqianbeijing;
                    this.shuliangdiban10.source = "";
                    this.shuliangxianshi10.text = "";
                }
                else {
                    this.daojubeijingkuang10.source = dangqianbeijing;
                    this.shuliangdiban10.source = "img_shuliangtubiao_png";
                    this.shuliangxianshi10.text = xianshishuliang;
                }
                break;
        }
    };
    /*
    点击每个坑时，弹出通用提示界面，使用道具
    */
    Gerendaojujiemian.prototype.dianji1keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di1kengid);
    };
    Gerendaojujiemian.prototype.dianji2keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di2kengid);
    };
    Gerendaojujiemian.prototype.dianji3keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di3kengid);
    };
    Gerendaojujiemian.prototype.dianji4keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di4kengid);
    };
    Gerendaojujiemian.prototype.dianji5keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di5kengid);
    };
    Gerendaojujiemian.prototype.dianji6keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di6kengid);
    };
    Gerendaojujiemian.prototype.dianji7keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di7kengid);
    };
    Gerendaojujiemian.prototype.dianji8keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di8kengid);
    };
    Gerendaojujiemian.prototype.dianji9keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di9kengid);
    };
    Gerendaojujiemian.prototype.dianji10keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di10kengid);
    };
    Gerendaojujiemian.prototype.dianji11keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di11kengid);
    };
    Gerendaojujiemian.prototype.dianji12keng = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.dangqianid = "0";
        this.shiyongdaojutanchu(this.di12kengid);
    };
    /*
    统一的道具使用弹出框
    */
    Gerendaojujiemian.prototype.shiyongdaojutanchu = function (id) {
        this.daojutanchukuang = new Daojutipsui();
        this.addChild(this.daojutanchukuang);
        for (var j = 0; j < Gerenshuxing.daojubiao.length; j++) {
            if (Gerenshuxing.daojubiao[j].id == id) {
                this.daojutanchukuang.shuomingneirong.text = Gerenshuxing.daojubiao[j].tips;
                this.daojutanchukuang.leixingming.text = Gerenshuxing.daojubiao[j].daojuleixing;
                this.daojutanchukuang.daojumingzi.text = Gerenshuxing.daojubiao[j].mingcheng;
                this.daojutanchukuang.daojuicon.source = Gerenshuxing.daojubiao[j].xianshiicon;
                break;
            }
        }
        if (parseInt(Gerencaipudengji.daoju[id][0]) > 0) {
            this.dangqianid = id;
            this.daojutanchukuang.quedinganniu.alpha = 0;
            this.daojutanchukuang.quedinganniu.enabled = false;
            this.daojutanchukuang.shiyonganniu.alpha = 1;
            this.daojutanchukuang.shiyonganniu.enabled = true;
            this.daojutanchukuang.shiyonganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishiyong, this);
        }
        else {
            this.daojutanchukuang.quedinganniu.alpha = 1;
            this.daojutanchukuang.quedinganniu.enabled = true;
            this.daojutanchukuang.shiyonganniu.alpha = 0;
            this.daojutanchukuang.shiyonganniu.enabled = false;
            this.daojutanchukuang.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishiyong, this);
        }
    };
    /*
    点击确定按钮，需要向服务器请求发送奖励了
    */
    Gerendaojujiemian.prototype.dianjishiyong = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (this.dangqianid == "0") {
            this.removeChild(this.daojutanchukuang);
        }
        else {
            this.removeChild(this.daojutanchukuang);
            var jianglileixing = "0";
            var jianglishuliangxiao = 0;
            var jianglishuliangda = 0;
            var suijijilv1 = 0;
            var suijijilv2 = 0;
            for (var i = 0; i < Gerenshuxing.daojushiyongbiao.length; i++) {
                if (Gerenshuxing.daojushiyongbiao[i].id == this.dangqianid) {
                    jianglileixing = Gerenshuxing.daojushiyongbiao[i].jianglileixing;
                    jianglishuliangxiao = parseInt(Gerenshuxing.daojushiyongbiao[i].zuixiao);
                    jianglishuliangda = parseInt(Gerenshuxing.daojushiyongbiao[i].zuida);
                    suijijilv1 = parseInt(Gerenshuxing.daojushiyongbiao[i].jilvdi);
                    suijijilv2 = parseInt(Gerenshuxing.daojushiyongbiao[i].jilvgao);
                    break;
                }
            }
            /*
            这里开始具体判断每个道具的使用效果
            */
            switch (this.dangqianid) {
                case "10021":
                    var huodejilv = Math.floor(Math.random() * 100);
                    if (huodejilv < suijijilv1) {
                        var dijijineng = [];
                        for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                            if (Gerenshuxing.jinengbiao[i].jinengpinzhi == "1") {
                                dijijineng.push(Gerenshuxing.jinengbiao[i].id);
                            }
                        }
                        var suijijineng = Math.floor(Math.random() * dijijineng.length);
                        var jianglijineng = dijijineng[suijijineng];
                        Weblianjie.fasongshuju("code:111", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"leixing"' + ":" + '"' + jianglijineng + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("jineng", jianglijineng);
                    }
                    else {
                        this.chenggongjiemian("jineng", "0");
                        Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"kouchuleixing"' + ":" + '"10021"' + ","
                            + '"kouchushuliang"' + ":" + '"1"' + ","
                            + '"leixing"' + ":" + '"0"' + ","
                            + '"shuliang"' + ":" + '"0"' + ","
                            + '"beishu"' + ":" + '"1"' + "}");
                    }
                    break;
                case "10022":
                    var dijijineng2 = [];
                    var gaojijineng2 = [];
                    for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                        if (Gerenshuxing.jinengbiao[i].jinengpinzhi == "1") {
                            dijijineng2.push(Gerenshuxing.jinengbiao[i].id);
                        }
                        else if (Gerenshuxing.jinengbiao[i].jinengpinzhi == "2") {
                            gaojijineng2.push(Gerenshuxing.jinengbiao[i].id);
                        }
                    }
                    var huodejilv2 = Math.floor(Math.random() * 100);
                    if (huodejilv2 < suijijilv1) {
                        var suijijineng2 = Math.floor(Math.random() * dijijineng2.length);
                        var jianglijineng2 = dijijineng2[suijijineng2];
                        Weblianjie.fasongshuju("code:111", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"leixing"' + ":" + '"' + jianglijineng2 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("jineng", jianglijineng2);
                    }
                    else {
                        var suijijineng3 = Math.floor(Math.random() * gaojijineng2.length);
                        var jianglijineng3 = gaojijineng2[suijijineng3];
                        Weblianjie.fasongshuju("code:112", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"leixing"' + ":" + '"' + jianglijineng3 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("jineng", jianglijineng3);
                    }
                    break;
                case "10023":
                    var dijijineng4 = [];
                    var gaojijineng4 = [];
                    for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                        if (Gerenshuxing.jinengbiao[i].jinengpinzhi == "1") {
                            dijijineng4.push(Gerenshuxing.jinengbiao[i].id);
                        }
                        else if (Gerenshuxing.jinengbiao[i].jinengpinzhi == "2") {
                            gaojijineng4.push(Gerenshuxing.jinengbiao[i].id);
                        }
                    }
                    var huodejilv4 = Math.floor(Math.random() * 100);
                    if (huodejilv4 < suijijilv1) {
                        var suijijineng4 = Math.floor(Math.random() * dijijineng4.length);
                        var jianglijineng4 = dijijineng4[suijijineng4];
                        Weblianjie.fasongshuju("code:111", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"leixing"' + ":" + '"' + jianglijineng4 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("jineng", jianglijineng4);
                    }
                    else {
                        var suijijineng5 = Math.floor(Math.random() * gaojijineng4.length);
                        var jianglijineng5 = gaojijineng4[suijijineng5];
                        Weblianjie.fasongshuju("code:112", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"leixing"' + ":" + '"' + jianglijineng5 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("jineng", jianglijineng5);
                    }
                    break;
                case "10024":
                    var suijicai_1_1 = Math.floor(Math.random() * 100) + 1;
                    if (suijicai_1_1 < suijijilv1) {
                        var suijicaima_1_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
                        Weblianjie.fasongshuju("code:113", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_1_1 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("caima", suijicaima_1_1);
                    }
                    else {
                        var suijicaima_1_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
                        Weblianjie.fasongshuju("code:113", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_1_2 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("caima", suijicaima_1_2);
                    }
                    break;
                case "10025":
                    var suijicai_2_1 = Math.floor(Math.random() * 100) + 1;
                    if (suijicai_2_1 < suijijilv1) {
                        var suijicaima_2_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
                        Weblianjie.fasongshuju("code:114", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_2_1 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("caila", suijicaima_2_1);
                    }
                    else {
                        var suijicaima_2_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
                        Weblianjie.fasongshuju("code:114", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_2_2 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("caila", suijicaima_2_2);
                    }
                    break;
                case "10026":
                    var suijicai_3_1 = Math.floor(Math.random() * 100) + 1;
                    if (suijicai_3_1 < suijijilv1) {
                        var suijicaima_3_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
                        Weblianjie.fasongshuju("code:115", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_3_1 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("caitian", suijicaima_3_1);
                    }
                    else {
                        var suijicaima_3_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
                        Weblianjie.fasongshuju("code:115", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_3_2 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("caitian", suijicaima_3_2);
                    }
                    break;
                case "10027":
                    var suijicai_4_1 = Math.floor(Math.random() * 100) + 1;
                    if (suijicai_4_1 < suijijilv1) {
                        var suijicaima_4_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
                        Weblianjie.fasongshuju("code:116", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_4_1 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("caisuan", suijicaima_4_1);
                    }
                    else {
                        var suijicaima_4_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
                        Weblianjie.fasongshuju("code:116", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_4_2 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("caisuan", suijicaima_4_2);
                    }
                    break;
                case "10028":
                    var suijicai_5_1 = Math.floor(Math.random() * 100) + 1;
                    if (suijicai_5_1 < suijijilv1) {
                        var suijicaima_5_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
                        Weblianjie.fasongshuju("code:117", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_5_1 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("renla", suijicaima_5_1);
                    }
                    else {
                        var suijicaima_5_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
                        Weblianjie.fasongshuju("code:117", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_5_2 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("renla", suijicaima_5_2);
                    }
                    break;
                case "10029":
                    var suijicai_6_1 = Math.floor(Math.random() * 100) + 1;
                    if (suijicai_6_1 < suijijilv1) {
                        var suijicaima_6_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
                        Weblianjie.fasongshuju("code:118", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_6_1 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("renma", suijicaima_6_1);
                    }
                    else {
                        var suijicaima_6_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
                        Weblianjie.fasongshuju("code:118", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_6_2 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("renma", suijicaima_6_2);
                    }
                    break;
                case "10030":
                    var suijicai_7_1 = Math.floor(Math.random() * 100) + 1;
                    if (suijicai_7_1 < suijijilv1) {
                        var suijicaima_7_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
                        Weblianjie.fasongshuju("code:119", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_7_1 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("rensuan", suijicaima_7_1);
                    }
                    else {
                        var suijicaima_7_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
                        Weblianjie.fasongshuju("code:119", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_7_2 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("rensuan", suijicaima_7_2);
                    }
                    break;
                case "10031":
                    var suijicai_8_1 = Math.floor(Math.random() * 100) + 1;
                    if (suijicai_8_1 < suijijilv1) {
                        var suijicaima_8_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
                        Weblianjie.fasongshuju("code:120", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_8_1 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("rentian", suijicaima_8_1);
                    }
                    else {
                        var suijicaima_8_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
                        Weblianjie.fasongshuju("code:120", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                            + '"shuliang"' + ":" + '"' + suijicaima_8_2 + '"' + ","
                            + '"dangqiandaoju"' + ":" + '"' + this.dangqianid + '"' + ","
                            + '"caiid"' + ":" + '"' + this.dangqiancaiid + '"' + "}");
                        this.chenggongjiemian("rentian", suijicaima_8_2);
                    }
                    break;
            }
        }
    };
    /*
    奖励展示界面显示
    */
    Gerendaojujiemian.prototype.chenggongjiemian = function (leixing, shuliang) {
        this.jianglijiemian = new Jianglijiesuanui();
        this.addChild(this.jianglijiemian);
        this.jianglijiemian.qudinganniu.enabled = true;
        this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
        switch (leixing) {
            case "jineng":
                for (var i = 0; i < Gerenshuxing.jinengbiao.length; i++) {
                    if (Gerenshuxing.jinengbiao[i].id == shuliang) {
                        this.jianglijiemian.jiangliicon.source = Gerenshuxing.jinengbiao[i].jinengicon;
                        this.jianglijiemian.jianglishuliang.text = "获得精修效果: " + Gerenshuxing.jinengbiao[i].mingcheng;
                        break;
                    }
                }
                break;
            case "caima":
                this.jianglijiemian.jiangliicon.source = "img_maicon_png";
                this.jianglijiemian.jianglishuliang.text = "菜品麻味提升: " + shuliang + "%";
                break;
            case "caila":
                this.jianglijiemian.jiangliicon.source = "img_laicon_png";
                this.jianglijiemian.jianglishuliang.text = "菜品辣味提升: " + shuliang + "%";
                break;
            case "caitian":
                this.jianglijiemian.jiangliicon.source = "img_tianicon_png";
                this.jianglijiemian.jianglishuliang.text = "菜品甜味提升: " + shuliang + "%";
                break;
            case "caisuan":
                this.jianglijiemian.jiangliicon.source = "img_suanicon_png";
                this.jianglijiemian.jianglishuliang.text = "菜品酸味提升: " + shuliang + "%";
                break;
            case "renma":
                this.jianglijiemian.jiangliicon.source = "img_maicon_png";
                this.jianglijiemian.jianglishuliang.text = "麻系精通: +" + shuliang;
                break;
            case "renla":
                this.jianglijiemian.jiangliicon.source = "img_laicon_png";
                this.jianglijiemian.jianglishuliang.text = "辣系精通: +" + shuliang;
                break;
            case "rentian":
                this.jianglijiemian.jiangliicon.source = "img_tianicon_png";
                this.jianglijiemian.jianglishuliang.text = "甜系精通: +" + shuliang;
                break;
            case "rensuan":
                this.jianglijiemian.jiangliicon.source = "img_suanicon_png";
                this.jianglijiemian.jianglishuliang.text = "酸系精通: +" + shuliang;
                break;
        }
    };
    Gerendaojujiemian.prototype.guanbijiangli = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        this.removeChild(this.jianglijiemian);
        this.chushihua(this.dangqianshiyongleixing, this.dangqiancaiid);
        if (Gameguanli.Kongzhitai().dingbuui.gerenshuxingui.parent) {
            Gameguanli.Kongzhitai().dingbuui.chengchengjiemianneirong();
        }
        if (Gameguanli.Kongzhitai().caiPuUi.caiPingjieshao.parent) {
            Gameguanli.Kongzhitai().caiPuUi.panduancaiid();
        }
    };
    return Gerendaojujiemian;
}(eui.Component));
__reflect(Gerendaojujiemian.prototype, "Gerendaojujiemian", ["eui.UIComponent", "egret.DisplayObject"]);

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
var Timeguanli = (function (_super) {
    __extends(Timeguanli, _super);
    function Timeguanli() {
        return _super.call(this) || this;
    }
    Timeguanli.jisuanshijian = function () {
        //当前小时数计算
        Gerenshuxing.xianshishijian = Gerenshuxing.shijian % 24;
        //计算每天家庭成员是否应该回家
        if (Gerenshuxing.xianshishijian >= 18 && Gerenshuxing.xianshishijian <= 23) {
            this.daerzihuijia();
        }
        if (Gerenshuxing.xianshishijian >= 16 && Gerenshuxing.xianshishijian <= 23) {
            this.sunnvhuijia();
        }
        if (Gerenshuxing.xianshishijian >= 18 && Gerenshuxing.xianshishijian <= 23) {
            this.xifuhuijia();
        }
        if (Gerenshuxing.xianshishijian >= 18 && Gerenshuxing.xianshishijian <= 23) {
            this.ererzihuijia();
        }
        //计算家庭成员是否未归家，扣除心情
        if (Gerenshuxing.xianshishijian == 6) {
            this.meirichengyuanguijia();
        }
        //每小时几率计算各项低保
        if (Gerenshuxing.xianshishijian >= 10 && Gerenshuxing.xianshishijian <= 20) {
            this.jisuandibao();
        }
        //根据成员的亲和值，计算成员每天可谈话的次数
        if (Gerenshuxing.xianshishijian == 8) {
            Gerenshuxing.daerzijiaotan = Math.floor(parseInt(Gerenshuxing.daerzixinxi[0]) / 100 + 5);
            Gerenshuxing.ererzijiaotan = Math.floor(parseInt(Gerenshuxing.ererzixinxi[0]) / 100 + 5);
            Gerenshuxing.xifujiaotan = Math.floor(parseInt(Gerenshuxing.xifuxinxi[0]) / 100 + 5);
            Gerenshuxing.sunnvjiaotan = Math.floor(parseInt(Gerenshuxing.sunnvxinxi[0]) / 100 + 5);
            this.jiatingchengyuanlijia();
        }
        //当前日期计算
        Gerenshuxing.riqi = Math.floor((Gerenshuxing.shijian / 24) % 30 + 1);
        //当前月份计算
        Gerenshuxing.yuefen = Math.floor((Gerenshuxing.shijian / 24 / 30) % 12) + 1;
        //当前第几年计算
        Gerenshuxing.nian = Math.floor(Gerenshuxing.shijian / (24 * 365)) + 1;
        //当前天气计算
        var tianqijilv = Math.floor(Math.random() * 10);
        if (tianqijilv <= 4) {
            var tianqibiangeng = Math.floor(Math.random() * 10);
            if (Gerenshuxing.yuefen == 0 || Gerenshuxing.yuefen == 1 || Gerenshuxing.yuefen == 2) {
                if (tianqibiangeng >= 0 && tianqibiangeng < 5) {
                    Gerenshuxing.dangqiantianqi = 3;
                }
                else if (tianqibiangeng >= 5 && tianqibiangeng < 8) {
                    Gerenshuxing.dangqiantianqi = 1;
                }
                else {
                    Gerenshuxing.dangqiantianqi = 2;
                }
            }
            else if (Gerenshuxing.yuefen == 3 || Gerenshuxing.yuefen == 4 || Gerenshuxing.yuefen == 5) {
                if (tianqibiangeng >= 0 && tianqibiangeng < 5) {
                    Gerenshuxing.dangqiantianqi = 2;
                }
                else if (tianqibiangeng >= 5 && tianqibiangeng < 8) {
                    Gerenshuxing.dangqiantianqi = 1;
                }
                else {
                    Gerenshuxing.dangqiantianqi = 3;
                }
            }
            else if (Gerenshuxing.yuefen == 6 || Gerenshuxing.yuefen == 7 || Gerenshuxing.yuefen == 8) {
                if (tianqibiangeng >= 0 && tianqibiangeng < 6) {
                    Gerenshuxing.dangqiantianqi = 2;
                }
                else if (tianqibiangeng >= 6 && tianqibiangeng < 10) {
                    Gerenshuxing.dangqiantianqi = 1;
                }
                else {
                    Gerenshuxing.dangqiantianqi = 3;
                }
            }
            else if (Gerenshuxing.yuefen == 9 || Gerenshuxing.yuefen == 10 || Gerenshuxing.yuefen == 11) {
                if (tianqibiangeng >= 0 && tianqibiangeng < 5) {
                    Gerenshuxing.dangqiantianqi = 2;
                }
                else if (tianqibiangeng >= 5 && tianqibiangeng < 10) {
                    Gerenshuxing.dangqiantianqi = 1;
                }
                else {
                    Gerenshuxing.dangqiantianqi = 3;
                }
            }
        }
        if (Gameguanli.Kongzhitai().dingbuui.parent) {
            this.fandianshijiankongzhi();
        }
        Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
        Gerenshuxing.yuangongshuxing();
    };
    Timeguanli.fandianshijiankongzhi = function () {
        var tianqihanhua = "";
        //通过天气增加的客流量
        switch (Gerenshuxing.dangqiantianqi) {
            case 1:
                Gerenshuxing.tqkeliuliang = 120;
                Gerenshuxing.tqwaimai = 80;
                tianqihanhua = "晴空万里，客流量增加：20%";
                break;
            case 2:
                Gerenshuxing.tqkeliuliang = 90;
                Gerenshuxing.tqwaimai = 110;
                tianqihanhua = "阴雨绵绵，客流量减少：10%";
                break;
            case 3:
                Gerenshuxing.tqkeliuliang = 80;
                Gerenshuxing.tqwaimai = 120;
                tianqihanhua = "大雪纷飞，客流量减少：20%";
                break;
            default:
                Gerenshuxing.tqkeliuliang = 100;
                Gerenshuxing.tqwaimai = 100;
                tianqihanhua = "阴天时分，客流量增加：0%";
                break;
        }
        //通过时间增加的客流量
        switch (Gerenshuxing.xianshishijian) {
            case 0:
                Gerenshuxing.sjkeliuliang = 80;
                Gerenshuxing.sjwaimai = 80;
                Gameguanli.Kongzhitai().xiamiantishi("深夜将至，客流量减少：20%    " + tianqihanhua);
                break;
            case 1:
                Gerenshuxing.sjkeliuliang = 70;
                Gerenshuxing.sjwaimai = 70;
                Gameguanli.Kongzhitai().xiamiantishi("深夜已至，客流量减少：30%    " + tianqihanhua);
                break;
            case 2:
                Gerenshuxing.sjkeliuliang = 60;
                Gerenshuxing.sjwaimai = 60;
                Gameguanli.Kongzhitai().xiamiantishi("夜深人静，客流量减少：40%    " + tianqihanhua);
                break;
            case 3:
                Gerenshuxing.sjkeliuliang = 50;
                Gerenshuxing.sjwaimai = 50;
                Gameguanli.Kongzhitai().xiamiantishi("酣睡时分，客流量减少：50%    " + tianqihanhua);
                break;
            case 4:
                Gerenshuxing.sjkeliuliang = 40;
                Gerenshuxing.sjwaimai = 40;
                Gameguanli.Kongzhitai().xiamiantishi("后夜至深，客流量减少：60%    " + tianqihanhua);
                break;
            case 5:
                Gerenshuxing.sjkeliuliang = 50;
                Gerenshuxing.sjwaimai = 50;
                Gameguanli.Kongzhitai().xiamiantishi("凌晨时分，客流量减少：50%    " + tianqihanhua);
                break;
            case 6:
                Gerenshuxing.sjkeliuliang = 60;
                Gerenshuxing.sjwaimai = 60;
                Gameguanli.Kongzhitai().xiamiantishi("鸡鸣日出，客流量减少：20%    " + tianqihanhua);
                break;
            case 7:
                Gerenshuxing.sjkeliuliang = 70;
                Gerenshuxing.sjwaimai = 70;
                Gameguanli.Kongzhitai().xiamiantishi("日出东方，客流量减少：20%    " + tianqihanhua);
                break;
            case 8:
                Gerenshuxing.sjkeliuliang = 80;
                Gerenshuxing.sjwaimai = 70;
                Gameguanli.Kongzhitai().xiamiantishi("上班高峰，客流量减少：20%    " + tianqihanhua);
                break;
            case 9:
                Gerenshuxing.sjkeliuliang = 90;
                Gerenshuxing.sjwaimai = 70;
                Gameguanli.Kongzhitai().xiamiantishi("逐梦伊始，客流量减少：10%    " + tianqihanhua);
                break;
            case 10:
                Gerenshuxing.sjkeliuliang = 100;
                Gerenshuxing.sjwaimai = 100;
                Gameguanli.Kongzhitai().xiamiantishi("伏案时刻，客流量减少：0%    " + tianqihanhua);
                break;
            case 11:
                Gerenshuxing.sjkeliuliang = 110;
                Gerenshuxing.sjwaimai = 120;
                Gameguanli.Kongzhitai().xiamiantishi("午间来临，客流量增加：10%    " + tianqihanhua);
                break;
            case 12:
                Gerenshuxing.sjkeliuliang = 120;
                Gerenshuxing.sjwaimai = 140;
                Gameguanli.Kongzhitai().xiamiantishi("午饭时刻，客流量增加：20%    " + tianqihanhua);
                break;
            case 13:
                Gerenshuxing.sjkeliuliang = 120;
                Gerenshuxing.sjwaimai = 120;
                Gameguanli.Kongzhitai().xiamiantishi("正午时刻，客流量增加：20%    " + tianqihanhua);
                break;
            case 14:
                Gerenshuxing.sjkeliuliang = 110;
                Gerenshuxing.sjwaimai = 110;
                Gameguanli.Kongzhitai().xiamiantishi("日照当空，客流量增加：10%    " + tianqihanhua);
                break;
            case 15:
                Gerenshuxing.sjkeliuliang = 100;
                Gerenshuxing.sjwaimai = 100;
                Gameguanli.Kongzhitai().xiamiantishi("伏案时刻，客流量增加：0%    " + tianqihanhua);
                break;
            case 16:
                Gerenshuxing.sjkeliuliang = 100;
                Gerenshuxing.sjwaimai = 100;
                Gameguanli.Kongzhitai().xiamiantishi("伏案时刻，客流量增加：0%    " + tianqihanhua);
                break;
            case 17:
                Gerenshuxing.sjkeliuliang = 110;
                Gerenshuxing.sjwaimai = 110;
                Gameguanli.Kongzhitai().xiamiantishi("下班将至，客流量增加：10%    " + tianqihanhua);
                break;
            case 18:
                Gerenshuxing.sjkeliuliang = 120;
                Gerenshuxing.sjwaimai = 120;
                Gameguanli.Kongzhitai().xiamiantishi("晚饭时刻，客流量增加：20%    " + tianqihanhua);
                break;
            case 19:
                Gerenshuxing.sjkeliuliang = 120;
                Gerenshuxing.sjwaimai = 120;
                Gameguanli.Kongzhitai().xiamiantishi("晚饭时刻，客流量增加：20%    " + tianqihanhua);
                break;
            case 20:
                Gerenshuxing.sjkeliuliang = 120;
                Gerenshuxing.sjwaimai = 120;
                Gameguanli.Kongzhitai().xiamiantishi("晚饭时刻，客流量增加：20%    " + tianqihanhua);
                break;
            case 21:
                Gerenshuxing.sjkeliuliang = 110;
                Gerenshuxing.sjwaimai = 110;
                Gameguanli.Kongzhitai().xiamiantishi("休息时刻，客流量增加：10%    " + tianqihanhua);
                break;
            case 22:
                Gerenshuxing.sjkeliuliang = 100;
                Gerenshuxing.sjwaimai = 100;
                Gameguanli.Kongzhitai().xiamiantishi("夜幕将深，客流量增加：0%    " + tianqihanhua);
                break;
            case 23:
                Gerenshuxing.sjkeliuliang = 90;
                Gerenshuxing.sjwaimai = 80;
                Gameguanli.Kongzhitai().xiamiantishi("归家欲睡，客流量减少：10%    " + tianqihanhua);
                break;
            default:
                Gerenshuxing.sjkeliuliang = 100;
                Gerenshuxing.sjwaimai = 100;
                Gameguanli.Kongzhitai().xiamiantishi("归家欲睡，客流量减少：10%    " + tianqihanhua);
                break;
        }
    };
    Timeguanli.daerzihuijia = function () {
        if (Gerenshuxing.daerzixinxi[5] == 0) {
            var huijiajilv = parseInt(Gerenshuxing.daerzixinxi[0]) + 100;
            var suijizhi = Math.floor(Math.random() * 1000);
            if (suijizhi <= huijiajilv) {
                Weblianjie.fasongshuju("code:048", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
        }
    };
    Timeguanli.sunnvhuijia = function () {
        if (Gerenshuxing.sunnvxinxi[5] == 0) {
            var huijiajilv1 = parseInt(Gerenshuxing.sunnvxinxi[0]) + 100;
            var suijizhi1 = Math.floor(Math.random() * 1000);
            if (suijizhi1 <= huijiajilv1) {
                Weblianjie.fasongshuju("code:051", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
        }
    };
    Timeguanli.xifuhuijia = function () {
        if (Gerenshuxing.xifuxinxi[5] == 0) {
            var huijiajilv2 = parseInt(Gerenshuxing.xifuxinxi[0]) + 100;
            var suijizhi2 = Math.floor(Math.random() * 1000);
            if (suijizhi2 <= huijiajilv2) {
                Weblianjie.fasongshuju("code:050", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
        }
    };
    Timeguanli.ererzihuijia = function () {
        if (Gerenshuxing.ererzixinxi[5] == 0) {
            var huijiajilv3 = parseInt(Gerenshuxing.ererzixinxi[0]) + 100;
            var suijizhi3 = Math.floor(Math.random() * 1000);
            if (suijizhi3 <= huijiajilv3) {
                Weblianjie.fasongshuju("code:049", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
        }
    };
    Timeguanli.jiatingchengyuanlijia = function () {
        Weblianjie.fasongshuju("code:052", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"ererzi"' + ":" + '"0"' + "}");
    };
    Timeguanli.meirichengyuanguijia = function () {
        var daerziming = "";
        var ererziming = "";
        var daerximing = "";
        var sunnvming = "";
        var xingqingjiansha = 0;
        if (Gerenshuxing.daerzixinxi[5] == 0) {
            daerziming = "[大儿子]";
            xingqingjiansha += 10;
        }
        if (Gerenshuxing.ererzixinxi[5] == 0) {
            ererziming = "[二儿子]";
            xingqingjiansha += 10;
        }
        if (Gerenshuxing.xifuxinxi[5] == 0) {
            daerximing = "[大儿媳]";
            xingqingjiansha += 10;
        }
        if (Gerenshuxing.sunnvxinxi[5] == 0) {
            sunnvming = "[小孙女]";
            xingqingjiansha += 20;
        }
        if (xingqingjiansha > 0) {
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"4"' + ","
                + '"kouchushuliang"' + ":" + '"' + xingqingjiansha + '"' + ","
                + '"leixing"' + ":" + '"0"' + ","
                + '"shuliang"' + ":" + '"0"' + ","
                + '"beishu"' + ":" + '"0"' + "}");
            var wenzineirong = "昨天一天，您的" + daerziming + ererziming + daerximing + sunnvming + "彻夜未归，失落之下，您不免开始胡思乱想，心情-[" + xingqingjiansha + "]，头上白发似乎又多了几根。";
            Gameguanli.Kongzhitai().daitutanchukuang("chengyuanweigui", wenzineirong);
        }
    };
    Timeguanli.jisuandibao = function () {
        //通用的体力不足10点时，概率出现低保
        if (Gerenshuxing.jiatingzhi <= 10) {
            var tilibuchong = Math.floor(Math.random() * 100);
            if (tilibuchong > 90) {
                //触发体力低保
                Gameguanli.Kongzhitai().daitutanchukuang("tilidibao");
            }
        }
        else if (Gameguanli.Kongzhitai().zhujiemian.parent) {
            //当前位于饭店内，确定是否给予饭店低保
            if (Gerenshuxing.jinbizhi < 2000) {
                //金币低保
                var jinbidibao = Math.floor(Math.random() * 100);
                if (jinbidibao > 90) {
                    //触发金币低保
                    Gameguanli.Kongzhitai().daitutanchukuang("jinbidibao");
                }
                ;
            }
            else if (Gerenshuxing.dibaokeliushijian <= 0) {
                //店铺客流量低保
                var dianpukeliudibao = Math.floor(Math.random() * 100);
                if (dianpukeliudibao > 90) {
                    //触发店铺客流低保
                    Gameguanli.Kongzhitai().daitutanchukuang("keliudibao");
                }
            }
        }
        else if (Gameguanli.Kongzhitai().jiatingjiemian.parent) {
            if (Gerenshuxing.sunnvxinxi[5] == "1" && Gerenshuxing.kaixinzhi < 100) {
                //触发心情低保
                var xinqindibao = Math.floor(Math.random() * 100);
                if (xinqindibao > 90) {
                    //触发心情低保
                    Gameguanli.Kongzhitai().daitutanchukuang("xinqindibao");
                }
            }
            else if (parseInt(Gerenshuxing.daerzixinxi[0]) < 100) {
                //触发大儿子亲和低保
                var daerziqinhe = Math.floor(Math.random() * 100);
                if (daerziqinhe > 90) {
                    //触发大儿子亲和低保
                    Gameguanli.Kongzhitai().daitutanchukuang("daerziqinhe");
                }
            }
            else if (parseInt(Gerenshuxing.ererzixinxi[0]) < 100) {
                //触发二儿子亲和低保
                var ererziqinhe = Math.floor(Math.random() * 100);
                if (ererziqinhe > 90) {
                    //触发二儿子亲和低保
                    Gameguanli.Kongzhitai().daitutanchukuang("ererziqinhe");
                }
            }
            else if (parseInt(Gerenshuxing.xifuxinxi[0]) < 100) {
                //触发媳妇亲和低保
                var xifuqinhe = Math.floor(Math.random() * 100);
                if (xifuqinhe > 90) {
                    //触发媳妇亲和低保
                    Gameguanli.Kongzhitai().daitutanchukuang("xifuqinhe");
                }
            }
            else if (parseInt(Gerenshuxing.sunnvxinxi[0]) < 100) {
                //触发孙女亲和低保
                var sunnvqinhe = Math.floor(Math.random() * 100);
                if (sunnvqinhe > 90) {
                    //触发孙女亲和低保
                    Gameguanli.Kongzhitai().daitutanchukuang("sunnvqinhe");
                }
            }
        }
    };
    return Timeguanli;
}(egret.DisplayObjectContainer));
__reflect(Timeguanli.prototype, "Timeguanli");
//# sourceMappingURL=Timeguanli.js.map
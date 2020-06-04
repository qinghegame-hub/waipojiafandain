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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Teshushijianjiemian = (function (_super) {
    __extends(Teshushijianjiemian, _super);
    function Teshushijianjiemian() {
        return _super.call(this) || this;
    }
    Teshushijianjiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Teshushijianjiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Teshushijianjiemian.prototype.chushihua = function (shijianid) {
        this.dangqianshijian = shijianid;
        var teshushijianbiao = RES.getRes("teshushijianbiao_json");
        this.biaotiwenzi.text = "天降鸿运";
        for (var i = 0; i < teshushijianbiao.length; i++) {
            if (teshushijianbiao[i].id == this.dangqianshijian) {
                this.tishiwenzi0.text = teshushijianbiao[i].shijianduihua;
                this.tupiantishi.source = teshushijianbiao[i].shijiantupian;
                break;
            }
        }
        this.but_queding1.enabled = true;
        this.but_queding1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemain, this);
        this.but_shuangbei0.enabled = true;
        this.but_shuangbei0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.quedingguangao, this);
    };
    Teshushijianjiemian.prototype.guanbijiemain = function () {
        this.parent.removeChild(this);
    };
    Teshushijianjiemian.prototype.quedingguangao = function () {
        return __awaiter(this, void 0, void 0, function () {
            var huidiaodengdai, zhudongzhuanfa;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        huidiaodengdai = new egret.Timer(3000, 1);
                        huidiaodengdai.addEventListener(egret.TimerEvent.TIMER, this.fasongjiangli, this);
                        huidiaodengdai.start();
                        return [4 /*yield*/, platform.shareAppMessage("第六十四年", Gerenshuxing.fenxianglianjiedizhi, 11)];
                    case 1:
                        zhudongzhuanfa = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Teshushijianjiemian.prototype.fasongjiangli = function () {
        switch (this.dangqianshijian) {
            case "16":
                this.jiesuo16neirong();
                break;
            case "17":
                this.jiesuo17neirong();
                break;
            case "18":
                this.jiesuo18neirong();
                break;
            case "19":
                this.jiesuo19neirong();
                break;
            case "20":
                this.jiesuo20neirong();
                break;
            case "21":
                this.jiesuo21neirong();
                break;
            case "22":
                this.jiesuo22neirong();
                break;
            case "23":
                this.jiesuo23neirong();
                break;
            case "24":
                this.jiesuo24neirong();
                break;
        }
    };
    Teshushijianjiemian.prototype.jiesuo16neirong = function () {
        var jiajubiao = RES.getRes("jiajubiao_json");
        var suoyoukejiesuo = [];
        var kejiesuoliebiao = [];
        for (var i = 0; i < jiajubiao.length; i++) {
            if (jiajubiao[i].jiajuislock == "2") {
                suoyoukejiesuo.push(jiajubiao[i].id);
            }
        }
        console.log("当前可特殊解锁家具：" + suoyoukejiesuo);
        for (var h = 0; h < suoyoukejiesuo.length; h++) {
            for (var j = 0; j < Gerenshuxing.jiesuojiaju.length; j++) {
                if (suoyoukejiesuo[h] == Gerenshuxing.jiesuojiaju[j]) {
                    suoyoukejiesuo[h] = "-1";
                    break;
                }
            }
        }
        console.log("剔除已解锁家具：" + suoyoukejiesuo);
        for (var k = 0; k < suoyoukejiesuo.length; k++) {
            if (suoyoukejiesuo[k] != "-1") {
                kejiesuoliebiao.push(suoyoukejiesuo[k]);
            }
        }
        console.log("正式可解锁家具：" + kejiesuoliebiao);
        if (kejiesuoliebiao.length > 0) {
            var bencijiesuo = Math.floor(Math.random() * kejiesuoliebiao.length);
            var bencijiesuoid = kejiesuoliebiao[bencijiesuo];
            var jiajuming = "特殊家具";
            for (var o = 0; o < jiajubiao.length; o++) {
                if (jiajubiao[o].id == bencijiesuoid) {
                    var fasongtupian = jiajubiao[o].imgname + "_png";
                    jiajuming = jiajubiao[o].jiajuName;
                    var fasongwenzi = "恭喜您，成功解锁[" + jiajubiao[o].jiajuName + "]";
                    this.fasongjianglijiemian(fasongtupian, fasongwenzi);
                    break;
                }
            }
            Weblianjie.fasongshuju("code:127", "{" + '"jiajuid"' + ":" + '"' + bencijiesuoid + '"' + ","
                + '"jiajuming"' + ":" + '"' + jiajuming + '"' + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            var jianglijinbi = Math.floor(Math.random() * 2000);
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"1"' + ","
                + '"shuliang"' + ":" + '"' + jianglijinbi + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            var fasongtupian = "img_qian_png";
            var fasongwenzi = "您的家具已经全部解锁，老板把家具价值折算成了钱币奖励给您!";
            this.fasongjianglijiemian(fasongtupian, fasongwenzi);
        }
    };
    Teshushijianjiemian.prototype.jiesuo17neirong = function () {
        var chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
        var chengyuankejiesuo = [];
        var jiesuochengyuanliebiao = [];
        for (var i = 0; i < chengyuanhudongbiao.length; i++) {
            if (chengyuanhudongbiao[i].juese == "4" && chengyuanhudongbiao[i].jiesuo == "0" && chengyuanhudongbiao[i].leixing == "1") {
                chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
            }
        }
        console.log("当前可特殊解锁家具：" + chengyuankejiesuo);
        for (var h = 0; h < chengyuankejiesuo.length; h++) {
            for (var j = 0; j < Gerenshuxing.sunnvxuexi.length; j++) {
                if (chengyuankejiesuo[h] == Gerenshuxing.sunnvxuexi[j]) {
                    chengyuankejiesuo[h] = "-1";
                    break;
                }
            }
        }
        console.log("剔除已解锁家具：" + chengyuankejiesuo);
        for (var k = 0; k < chengyuankejiesuo.length; k++) {
            if (chengyuankejiesuo[k] != "-1") {
                jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
            }
        }
        console.log("正式可解锁家具：" + jiesuochengyuanliebiao);
        if (jiesuochengyuanliebiao.length > 0) {
            var bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
            var bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
            var sunnvming = "";
            for (var o = 0; o < chengyuanhudongbiao.length; o++) {
                if (chengyuanhudongbiao[o].id == bencijiesuosunnvid) {
                    var fasongtupian = chengyuanhudongbiao[o].xianshiicon;
                    sunnvming = chengyuanhudongbiao[o].xingdongming;
                    var fasongwenzi = "恭喜您，成功解锁小孙女培养项目[" + chengyuanhudongbiao[o].xingdongming + "]";
                    this.fasongjianglijiemian(fasongtupian, fasongwenzi);
                    break;
                }
            }
            Weblianjie.fasongshuju("code:129", "{" + '"jiajuid"' + ":" + '"' + bencijiesuosunnvid + '"' + ","
                + '"jiajuming"' + ":" + '"' + sunnvming + '"' + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            var jianglijinbi = Math.floor(Math.random() * 2000);
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"1"' + ","
                + '"shuliang"' + ":" + '"' + jianglijinbi + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            var fasongtupian = "img_qian_png";
            var fasongwenzi = "您小孙女的培养内容已经全部解锁，游乐园把培养价值折算成了钱币奖励给您!";
            this.fasongjianglijiemian(fasongtupian, fasongwenzi);
        }
    };
    Teshushijianjiemian.prototype.jiesuo18neirong = function () {
        var chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
        var chengyuankejiesuo = [];
        var jiesuochengyuanliebiao = [];
        for (var i = 0; i < chengyuanhudongbiao.length; i++) {
            if (chengyuanhudongbiao[i].juese == "1" && chengyuanhudongbiao[i].jiesuo == "0" && chengyuanhudongbiao[i].leixing == "1") {
                chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
            }
        }
        for (var h = 0; h < chengyuankejiesuo.length; h++) {
            for (var j = 0; j < Gerenshuxing.daerzixuexi.length; j++) {
                if (chengyuankejiesuo[h] == Gerenshuxing.daerzixuexi[j]) {
                    chengyuankejiesuo[h] = "-1";
                    break;
                }
            }
        }
        for (var k = 0; k < chengyuankejiesuo.length; k++) {
            if (chengyuankejiesuo[k] != "-1") {
                jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
            }
        }
        if (jiesuochengyuanliebiao.length > 0) {
            var bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
            var bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
            var sunnvming = "";
            for (var o = 0; o < chengyuanhudongbiao.length; o++) {
                if (chengyuanhudongbiao[o].id == bencijiesuosunnvid) {
                    var fasongtupian = chengyuanhudongbiao[o].xianshiicon;
                    sunnvming = chengyuanhudongbiao[o].xingdongming;
                    var fasongwenzi = "恭喜您，成功解锁大儿子进修内容[" + chengyuanhudongbiao[o].xingdongming + "]";
                    this.fasongjianglijiemian(fasongtupian, fasongwenzi);
                    break;
                }
            }
            Weblianjie.fasongshuju("code:131", "{" + '"jiajuid"' + ":" + '"' + bencijiesuosunnvid + '"' + ","
                + '"jiajuming"' + ":" + '"' + sunnvming + '"' + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            var jianglijinbi = Math.floor(Math.random() * 2000);
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"1"' + ","
                + '"shuliang"' + ":" + '"' + jianglijinbi + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            var fasongtupian = "img_qian_png";
            var fasongwenzi = "您大儿子的进修内容已经全部解锁，游乐园把培养价值折算成了钱币奖励给您!";
            this.fasongjianglijiemian(fasongtupian, fasongwenzi);
        }
    };
    Teshushijianjiemian.prototype.jiesuo19neirong = function () {
        var chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
        var chengyuankejiesuo = [];
        var jiesuochengyuanliebiao = [];
        for (var i = 0; i < chengyuanhudongbiao.length; i++) {
            if (chengyuanhudongbiao[i].juese == "2" && chengyuanhudongbiao[i].jiesuo == "0" && chengyuanhudongbiao[i].leixing == "1") {
                chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
            }
        }
        for (var h = 0; h < chengyuankejiesuo.length; h++) {
            for (var j = 0; j < Gerenshuxing.ererzixuexi.length; j++) {
                if (chengyuankejiesuo[h] == Gerenshuxing.ererzixuexi[j]) {
                    chengyuankejiesuo[h] = "-1";
                    break;
                }
            }
        }
        for (var k = 0; k < chengyuankejiesuo.length; k++) {
            if (chengyuankejiesuo[k] != "-1") {
                jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
            }
        }
        if (jiesuochengyuanliebiao.length > 0) {
            var bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
            var bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
            var sunnvming = "";
            for (var o = 0; o < chengyuanhudongbiao.length; o++) {
                if (chengyuanhudongbiao[o].id == bencijiesuosunnvid) {
                    var fasongtupian = chengyuanhudongbiao[o].xianshiicon;
                    sunnvming = chengyuanhudongbiao[o].xingdongming;
                    var fasongwenzi = "恭喜您，成功解锁二儿子工作内容[" + chengyuanhudongbiao[o].xingdongming + "]";
                    this.fasongjianglijiemian(fasongtupian, fasongwenzi);
                    break;
                }
            }
            Weblianjie.fasongshuju("code:133", "{" + '"jiajuid"' + ":" + '"' + bencijiesuosunnvid + '"' + ","
                + '"jiajuming"' + ":" + '"' + sunnvming + '"' + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            var jianglijinbi = Math.floor(Math.random() * 2000);
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"1"' + ","
                + '"shuliang"' + ":" + '"' + jianglijinbi + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            var fasongtupian = "img_qian_png";
            var fasongwenzi = "您二儿子的工作内容已经全部解锁，办公楼把工作价值折算成了钱币奖励给您!";
            this.fasongjianglijiemian(fasongtupian, fasongwenzi);
        }
    };
    Teshushijianjiemian.prototype.jiesuo20neirong = function () {
        var chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
        var chengyuankejiesuo = [];
        var jiesuochengyuanliebiao = [];
        for (var i = 0; i < chengyuanhudongbiao.length; i++) {
            if (chengyuanhudongbiao[i].juese == "3" && chengyuanhudongbiao[i].jiesuo == "0" && chengyuanhudongbiao[i].leixing == "1") {
                chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
            }
        }
        for (var h = 0; h < chengyuankejiesuo.length; h++) {
            for (var j = 0; j < Gerenshuxing.xifuxuexi.length; j++) {
                if (chengyuankejiesuo[h] == Gerenshuxing.xifuxuexi[j]) {
                    chengyuankejiesuo[h] = "-1";
                    break;
                }
            }
        }
        for (var k = 0; k < chengyuankejiesuo.length; k++) {
            if (chengyuankejiesuo[k] != "-1") {
                jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
            }
        }
        if (jiesuochengyuanliebiao.length > 0) {
            var bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
            var bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
            var sunnvming = "";
            for (var o = 0; o < chengyuanhudongbiao.length; o++) {
                if (chengyuanhudongbiao[o].id == bencijiesuosunnvid) {
                    var fasongtupian = chengyuanhudongbiao[o].xianshiicon;
                    sunnvming = chengyuanhudongbiao[o].xingdongming;
                    var fasongwenzi = "恭喜您，成功解锁大儿媳的家务内容[" + chengyuanhudongbiao[o].xingdongming + "]";
                    this.fasongjianglijiemian(fasongtupian, fasongwenzi);
                    break;
                }
            }
            Weblianjie.fasongshuju("code:135", "{" + '"jiajuid"' + ":" + '"' + bencijiesuosunnvid + '"' + ","
                + '"jiajuming"' + ":" + '"' + sunnvming + '"' + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            var jianglijinbi = Math.floor(Math.random() * 2000);
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"1"' + ","
                + '"shuliang"' + ":" + '"' + jianglijinbi + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            var fasongtupian = "img_qian_png";
            var fasongwenzi = "您大儿媳的家务内容已经全部解锁，李阿婆给了你一些钱币!";
            this.fasongjianglijiemian(fasongtupian, fasongwenzi);
        }
    };
    Teshushijianjiemian.prototype.jiesuo21neirong = function () {
        var chengyuanhudongbiao = RES.getRes("yuangongbiao_json");
        var chengyuankejiesuo = [];
        var jiesuochengyuanliebiao = [];
        for (var i = 0; i < chengyuanhudongbiao.length; i++) {
            if (chengyuanhudongbiao[i].ygislock == "0") {
                chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
            }
        }
        for (var h = 0; h < chengyuankejiesuo.length; h++) {
            for (var j = 0; j < Gerenshuxing.jiesuoyuangong.length; j++) {
                if (chengyuankejiesuo[h] == Gerenshuxing.jiesuoyuangong[j]) {
                    chengyuankejiesuo[h] = "-1";
                    break;
                }
            }
        }
        for (var k = 0; k < chengyuankejiesuo.length; k++) {
            if (chengyuankejiesuo[k] != "-1") {
                jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
            }
        }
        if (jiesuochengyuanliebiao.length > 0) {
            var bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
            var bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
            var sunnvming = "";
            for (var o = 0; o < chengyuanhudongbiao.length; o++) {
                if (chengyuanhudongbiao[o].id == bencijiesuosunnvid) {
                    var fasongtupian = chengyuanhudongbiao[o].shape + "_png";
                    sunnvming = chengyuanhudongbiao[o].name;
                    var fasongwenzi = "恭喜您，成功聘得员工[" + sunnvming + "]";
                    this.fasongjianglijiemian(fasongtupian, fasongwenzi);
                    break;
                }
            }
            Weblianjie.fasongshuju("code:137", "{" + '"jiajuid"' + ":" + '"' + bencijiesuosunnvid + '"' + ","
                + '"jiajuming"' + ":" + '"' + sunnvming + '"' + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            var jianglijinbi = Math.floor(Math.random() * 2000);
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"1"' + ","
                + '"shuliang"' + ":" + '"' + jianglijinbi + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            var fasongtupian = "img_qian_png";
            var fasongwenzi = "您店铺员工候选人已经足够多啦，人才市场反馈您咨询费!";
            this.fasongjianglijiemian(fasongtupian, fasongwenzi);
        }
    };
    Teshushijianjiemian.prototype.jiesuo22neirong = function () {
        var suijijinbi = Math.floor(Math.random() * 19000) + 1000;
        Weblianjie.fasongshuju("code:139", "{" + '"jiajuid"' + ":" + '"' + suijijinbi + '"' + ","
            + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        var fasongtupian = "img_qian_png";
        var fasongwenzi = "您炖的骨头汤受到神秘富商的赞赏，他当即奖励了你一大笔钱财！";
        this.fasongjianglijiemian(fasongtupian, fasongwenzi);
    };
    Teshushijianjiemian.prototype.jiesuo23neirong = function () {
        var chengyuanhudongbiao = RES.getRes("shipubiao_json");
        var chengyuankejiesuo = [];
        var jiesuochengyuanliebiao = [];
        for (var i = 0; i < chengyuanhudongbiao.length; i++) {
            if (chengyuanhudongbiao[i].islock == "2") {
                chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
            }
        }
        for (var h = 0; h < chengyuankejiesuo.length; h++) {
            for (var j = 0; j < Gerenshuxing.jiesuocaipin.length; j++) {
                if (chengyuankejiesuo[h] == Gerenshuxing.jiesuocaipin[j]) {
                    chengyuankejiesuo[h] = "-1";
                    break;
                }
            }
        }
        for (var k = 0; k < chengyuankejiesuo.length; k++) {
            if (chengyuankejiesuo[k] != "-1") {
                jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
            }
        }
        if (jiesuochengyuanliebiao.length > 0) {
            var bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
            var bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
            var sunnvming = "";
            for (var o = 0; o < chengyuanhudongbiao.length; o++) {
                if (chengyuanhudongbiao[o].id == bencijiesuosunnvid) {
                    var fasongtupian = chengyuanhudongbiao[o].id + "_png";
                    sunnvming = chengyuanhudongbiao[o].foodName;
                    var fasongwenzi = "恭喜您，成功解锁菜品[" + sunnvming + "]";
                    this.fasongjianglijiemian(fasongtupian, fasongwenzi);
                    break;
                }
            }
            Weblianjie.fasongshuju("code:141", "{" + '"jiajuid"' + ":" + '"' + bencijiesuosunnvid + '"' + ","
                + '"jiajuming"' + ":" + '"' + sunnvming + '"' + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            var jianglijinbi = Math.floor(Math.random() * 2000);
            Weblianjie.fasongshuju("code:085", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                + '"kouchuleixing"' + ":" + '"0"' + ","
                + '"kouchushuliang"' + ":" + '"0"' + ","
                + '"leixing"' + ":" + '"1"' + ","
                + '"shuliang"' + ":" + '"' + jianglijinbi + '"' + ","
                + '"beishu"' + ":" + '"1"' + "}");
            var fasongtupian = "img_qian_png";
            var fasongwenzi = "您已经掌握了全部的菜品，张小可给了你一些钱币!";
            this.fasongjianglijiemian(fasongtupian, fasongwenzi);
        }
    };
    Teshushijianjiemian.prototype.jiesuo24neirong = function () {
        var suijijinbi = Math.floor(Math.random() * 100) + 100;
        Weblianjie.fasongshuju("code:143", "{" + '"jiajuid"' + ":" + '"' + suijijinbi + '"' + ","
            + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        var fasongtupian = "img_jiankang_png";
        var fasongwenzi = "您接受了医院的免费体检，健康得到了提升！";
        this.fasongjianglijiemian(fasongtupian, fasongwenzi);
    };
    Teshushijianjiemian.prototype.fasongjianglijiemian = function (tupian, wenzi) {
        this.jianglijiemian = new Jianglijiesuanui();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
        this.jianglijiemian.qudinganniu.enabled = true;
        this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijianglijiemain, this);
        this.jianglijiemian.jiangliicon.source = tupian;
        this.jianglijiemian.jianglishuliang.text = wenzi;
    };
    Teshushijianjiemian.prototype.guanbijianglijiemain = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jianglijiemian);
        this.guanbijiemain();
    };
    return Teshushijianjiemian;
}(eui.Component));
__reflect(Teshushijianjiemian.prototype, "Teshushijianjiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Teshushijianjiemian.js.map
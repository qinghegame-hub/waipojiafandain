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
var Pvppipeijiemian = (function (_super) {
    __extends(Pvppipeijiemian, _super);
    function Pvppipeijiemian() {
        var _this = _super.call(this) || this;
        _this.keyipipei = true;
        _this.pipeidonghuakongzhi = true;
        _this.direnzhenshitouxiang = new egret.Bitmap();
        return _this;
    }
    Pvppipeijiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Pvppipeijiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Pvppipeijiemian.prototype.chushihua = function () {
        //关闭按钮初始化
        this.guanbijiemiananniu.enabled = true;
        this.guanbijiemiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiemian, this);
        //倍数信息初始化
        this.fanbeianniuchushi();
        //匹配信息初始化
        this.pipeianniuchushi();
        //自己信息初始化
        this.zijixinxichushi();
        //敌人信息初始化
        this.direnchushi();
        this.keyipipei = true;
        this.pipeidonghuakongzhi = true;
    };
    Pvppipeijiemian.prototype.direnchushi = function () {
        if (this.direnzhenshitouxiang.parent) {
            this.direnzhenshitouxiang.parent.removeChild(this.direnzhenshitouxiang);
        }
        this.hongfangmingwang.text = "名望:????级";
        this.hongfangnicheng.text = "??????";
    };
    Pvppipeijiemian.prototype.fanbeianniuchushi = function () {
        if (Gerenshuxing.tiaozhanbeishu[1] == "1") {
            this.fanbeianniu.enabled = true;
            this.fanbeianniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.fanbeijiangli, this);
        }
        else {
            this.fanbeianniu.enabled = false;
            this.fanbeianniu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.fanbeijiangli, this);
        }
        this.shengyu5beicishu.text = "今日剩余5倍奖励次数:" + Gerenshuxing.tiaozhanbeishu[0] + "次";
        this.dangqianbeishu.text = "当前奖励倍数:" + Gerenshuxing.tiaozhanbeishu[1] + "倍";
    };
    Pvppipeijiemian.prototype.pipeianniuchushi = function () {
        if (this.keyipipei == true) {
            this.kaishipipeianniu.enabled = true;
            this.kaishipipeianniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kaishipipei, this);
            this.dangqiantishi.text = "点击下方的‘开始匹配’搜寻对手！";
        }
        else {
            this.kaishipipeianniu.enabled = false;
            this.kaishipipeianniu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.kaishipipei, this);
            this.dangqiantishi.text = "正在匹配对手，请稍后...";
        }
        this.xiaohaoshuliang.text = "- 5";
    };
    Pvppipeijiemian.prototype.zijixinxichushi = function () {
        //自己头像显示
        this.zijitouxiangxianshi();
        //等级和昵称显示
        this.lanfangnicheng.text = Gerenshuxing.mingzi;
        this.lanfangmingwang.text = "名望:" + Gerenshuxing.xingfudengji + "级";
    };
    Pvppipeijiemian.prototype.zijitouxiangxianshi = function () {
        var youbiaoLoader = new egret.ImageLoader;
        youbiaoLoader.load(Gerenshuxing.touxiang);
        youbiaoLoader.once(egret.Event.COMPLETE, this.xianshizijitouxiang, this);
    };
    Pvppipeijiemian.prototype.xianshizijitouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.lanfangtouxiangzu.width;
            head.height = this.lanfangtouxiangzu.height;
            this.lanfangtouxiangzu.addChild(head);
        }
    };
    Pvppipeijiemian.prototype.direntouxiang = function (url) {
        var youbiaoLoader = new egret.ImageLoader;
        youbiaoLoader.load(url);
        youbiaoLoader.once(egret.Event.COMPLETE, this.xianshidirentouxiang, this);
    };
    Pvppipeijiemian.prototype.xianshidirentouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            this.direnzhenshitouxiang = new egret.Bitmap(texture);
            this.direnzhenshitouxiang.x = 0;
            this.direnzhenshitouxiang.y = 0;
            this.direnzhenshitouxiang.width = this.hongfangtouxiangzu.width;
            this.direnzhenshitouxiang.height = this.hongfangtouxiangzu.height;
            this.hongfangtouxiangzu.addChild(this.direnzhenshitouxiang);
        }
    };
    Pvppipeijiemian.prototype.fanbeijiangli = function () {
        return __awaiter(this, void 0, void 0, function () {
            var huidiaodengdai, zhudongzhuanfa;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Gamesound.Soundkongzhi().anniuyinxiao();
                        this.fanbeianniu.enabled = false;
                        huidiaodengdai = new egret.Timer(3000, 1);
                        huidiaodengdai.addEventListener(egret.TimerEvent.TIMER, this.fasongfanbeiqingqiu, this);
                        huidiaodengdai.start();
                        return [4 /*yield*/, platform.shareAppMessage("第六十四年", Gerenshuxing.fenxianglianjiedizhi, 11)];
                    case 1:
                        zhudongzhuanfa = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Pvppipeijiemian.prototype.fasongfanbeiqingqiu = function () {
        Weblianjie.fasongshuju("code:167", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Pvppipeijiemian.prototype.guanbijiemian = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        Gameguanli.Kongzhitai().pvppipeiui("guan");
    };
    Pvppipeijiemian.prototype.kaishipipei = function () {
        Gamesound.Soundkongzhi().anniuyinxiao();
        if (Gerenshuxing.jiatingzhi >= 5) {
            this.keyipipei = false;
            this.pipeianniuchushi();
            this.pipeidonghua();
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("您的行动力不足，无法开始比拼!");
        }
    };
    Pvppipeijiemian.prototype.pipeidonghua = function () {
        var pipeisudu = 300;
        var pipeijilv = 10;
        this.pipeigundong(pipeisudu, pipeijilv);
    };
    Pvppipeijiemian.prototype.pipeigundong = function (sudu, jilv) {
        var _this = this;
        var pipeirenming = this.suijimingzi();
        var pipeidengji = this.suijidengji();
        var touxiangdizhi = this.suijitouxiang();
        if (this.pipeidonghuakongzhi == true) {
            var pipeidaojilv = Math.floor(Math.random() * 1000);
            if (pipeidaojilv <= jilv) {
                Weblianjie.fasongshuju("code:165", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
                this.pipeidonghuakongzhi = false;
            }
            else {
                this.morentouxianghong.source = touxiangdizhi;
                this.hongfangnicheng.text = pipeirenming;
                this.hongfangmingwang.text = "名望:" + pipeidengji + "级";
                var biangengsudu_1 = sudu + 50;
                var biangengjilv_1 = jilv + 5;
                egret.Tween.get(this.morentouxianghong).wait(biangengsudu_1).call(function () {
                    if (_this.pipeidonghuakongzhi == true) {
                        _this.pipeigundong(biangengsudu_1, biangengjilv_1);
                    }
                });
            }
        }
    };
    Pvppipeijiemian.prototype.pipeichenggong = function (pvpduishouxin) {
        this.pipeidonghuakongzhi = false;
        this.hongfangnicheng.text = pvpduishouxin.mingzi;
        //显示敌人的头像
        this.direntouxiang(pvpduishouxin.touxiang);
        //计算敌人的等级
        var direndengji = this.direndengjijisuan(pvpduishouxin);
        this.hongfangmingwang.text = "名望:" + direndengji + "级";
        this.jinruzhandou(5, pvpduishouxin);
    };
    Pvppipeijiemian.prototype.jinruzhandou = function (daojishi, pvpduishouxin) {
        var _this = this;
        if (this.parent) {
            if (daojishi <= 0) {
                this.dangqiantishi.text = "比拼开始！！！";
                /*
                扣除行动力
                */
                Weblianjie.fasongshuju("code:037", "{" + '"kouchushu"' + ":" + "5" + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
                /*
                进入战斗
                */
                Gameguanli.Kongzhitai().pvpzhandoujiemian("kai", pvpduishouxin, Gerenshuxing.tiaozhanbeishu[1]);
                /*
                变更奖励状态
                */
                Weblianjie.fasongshuju("code:169", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
                this.keyipipei = true;
                this.chushihua();
            }
            else {
                this.dangqiantishi.text = "比拼开始倒计时:" + daojishi;
                var xindaojishi_1 = daojishi - 1;
                egret.Tween.get(this.dangqiantishi).wait(1000).call(function () {
                    if (_this.parent) {
                        _this.jinruzhandou(xindaojishi_1, pvpduishouxin);
                    }
                });
            }
        }
    };
    /*
    敌人等级计算
    */
    Pvppipeijiemian.prototype.direndengjijisuan = function (pvpduishouxin) {
        var direndengji = 0;
        for (var i = 0; i < Gerenshuxing.gerendengjibiao.length; i++) {
            if (pvpduishouxin.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].levelexp)) {
                direndengji = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length - 1].id);
                break;
            }
            else {
                if (pvpduishouxin.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[i].levelexp) && pvpduishouxin.xingfuzhi < parseInt(Gerenshuxing.gerendengjibiao[i + 1].levelexp)) {
                    direndengji = parseInt(Gerenshuxing.gerendengjibiao[i].id);
                    break;
                }
            }
        }
        return direndengji;
    };
    /*
    随机名字生成
    */
    Pvppipeijiemian.prototype.suijimingzi = function () {
        var xingmingku = RES.getRes("xingmingku_json");
        var suijixing1 = Math.floor(Math.random() * xingmingku.length);
        var xing1 = xingmingku[suijixing1].xing1;
        var suijixing2 = Math.floor(Math.random() * xingmingku.length);
        var xing2 = xingmingku[suijixing2].xing2;
        var suijixing3 = Math.floor(Math.random() * xingmingku.length);
        var xing3 = xingmingku[suijixing3].xing3;
        var xingmingquan = xing1 + xing2 + xing3;
        return xingmingquan;
    };
    /*
    随机等级生成
    */
    Pvppipeijiemian.prototype.suijidengji = function () {
        var dengji = Math.floor(Math.random() * 30);
        return dengji;
    };
    /*
    随机头像生成
    */
    Pvppipeijiemian.prototype.suijitouxiang = function () {
        var touxiangxuhao = Math.floor(Math.random() * 109) + 1000;
        var touxiang = "tx" + touxiangxuhao + "_png";
        return touxiang;
    };
    return Pvppipeijiemian;
}(eui.Component));
__reflect(Pvppipeijiemian.prototype, "Pvppipeijiemian", ["eui.UIComponent", "egret.DisplayObject"]);

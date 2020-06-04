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
var Paihangbangjiemian = (function (_super) {
    __extends(Paihangbangjiemian, _super);
    function Paihangbangjiemian() {
        var _this = _super.call(this) || this;
        //世界排行榜分数排序后的数据表
        _this.totalGroup = [];
        _this.dakaijiemian = 1; //1为世界排行榜，2为好友排行榜
        _this.paihangbangui = new egret.Bitmap();
        return _this;
    }
    Paihangbangjiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Paihangbangjiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Paihangbangjiemian.prototype.chushihua = function () {
        this.but_haoyou.enabled = true;
        this.but_haoyou.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjihaoyoujiemian, this);
        this.but_shijie.enabled = true;
        this.but_shijie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjishijiejiemian, this);
        //默认打开世界排行榜界面
        this.dianjishijiejiemian();
    };
    Paihangbangjiemian.prototype.dianjihaoyoujiemian = function () {
        this.dakaijiemian = 2;
        if (this.paihangbangui.parent) {
            this.removeChild(this.paihangbangui);
        }
        this.but_haoyou.enabled = false;
        this.but_shijie.enabled = true;
        this.biaotitupian.source = "img_biaotihaoyou_png";
        this.xiaoxizu.alpha = 0;
        this.xiaoxizu0.alpha = 0;
        this.xiaoxizu1.alpha = 0;
        this.xiaoxizu2.alpha = 0;
        this.but_shangyiye.enabled = false;
        this.but_shangyiye.alpha = 0;
        this.but_xiayiye.enabled = false;
        this.but_xiayiye.alpha = 0;
        var platform = window.platform;
        this.paihangbangui = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this.addChild(this.paihangbangui);
        this.chushihuapaihangbang();
    };
    //排行榜显示内容逻辑
    Paihangbangjiemian.prototype.chushihuapaihangbang = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.openDataContext.postMessage({
                            time: (new Date()).getFullYear() + 2,
                            uid: Gerenshuxing.uid,
                            command: "open"
                        })
                        /*await platform.openDataContext.postMessage({
                            time:(new Date()).getFullYear() + 2,
                            command:"haoyoushuju"
                        })*/
                    ];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Paihangbangjiemian.prototype.dianjishijiejiemian = function () {
        this.dakaijiemian = 1;
        if (Gerenshuxing.paihangbangshuju.length > 0) {
            if (Gerenshuxing.xingfuzhi >= parseInt(Gerenshuxing.paihangbangshuju[Gerenshuxing.paihangbangshuju.length - 1].fenshu) &&
                Gerenshuxing.xingfuzhi != Gerenshuxing.qingqiupaihangfenshu) {
                Gerenshuxing.qingqiupaihangfenshu = Gerenshuxing.xingfuzhi;
                Weblianjie.fasongshuju("code:096", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            }
        }
        else {
            Gerenshuxing.qingqiupaihangfenshu = Gerenshuxing.xingfuzhi;
            Weblianjie.fasongshuju("code:096", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        if (this.paihangbangui.parent) {
            this.removeChild(this.paihangbangui);
        }
        this.but_haoyou.enabled = true;
        this.but_shijie.enabled = false;
        this.biaotitupian.source = "img_biaotishijie_png";
        this.xiaoxizu.alpha = 0;
        this.xiaoxizu0.alpha = 0;
        this.xiaoxizu1.alpha = 0;
        this.xiaoxizu2.alpha = 0;
        this.but_xiayiye.alpha = 1;
        this.but_shangyiye.alpha = 1;
        this.dangqianyeshu = 0;
        this.paixufenshu();
    };
    Paihangbangjiemian.prototype.paixufenshu = function () {
        var data = Gerenshuxing.paihangbangshuju;
        var key = 0;
        var xinpaimingzu = [];
        for (var i = 0; i < data.length - 1; i++) {
            for (var j = 0; j < data.length - i - 1; j++) {
                if (parseInt(data[j].fenshu) <= parseInt(data[j + 1].fenshu)) {
                    //把小的数字放到后面
                    var swap = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = swap;
                }
            }
        }
        xinpaimingzu = data;
        for (var h = 0; h < xinpaimingzu.length; h++) {
            this.totalGroup[h] = {
                openid: xinpaimingzu[h].openid,
                key: h + 1,
                name: xinpaimingzu[h].nickname,
                url: xinpaimingzu[h].url,
                scroes: xinpaimingzu[h].fenshu
            };
        }
        this.zuidayeshu = Math.ceil(this.totalGroup.length / 3);
        this.xianshizishen();
        this.zhuyaoxianshi(0);
    };
    Paihangbangjiemian.prototype.zhuyaoxianshi = function (yeshu) {
        if (this.totalGroup.length >= yeshu * 3 + 1) {
            this.xiaoxizu.alpha = 1;
            if (yeshu == 0) {
                this.img_mingciditu.source = "img_diyiming_png";
            }
            else if (yeshu > 0 && yeshu <= 3) {
                this.img_mingciditu.source = "img_qitaming_png";
            }
            else {
                this.img_mingciditu.source = "img_wuming_png";
            }
            this.nicheng.text = this.totalGroup[yeshu * 3 + 0].name;
            this.fenshu.text = this.totalGroup[yeshu * 3 + 0].scroes;
            this.paiming.text = "" + (yeshu * 3 + 1);
            this.jiazaidiyigetuoxiang(this.totalGroup[yeshu * 3 + 0].url);
        }
        else {
            this.xiaoxizu.alpha = 0;
        }
        if (this.totalGroup.length >= yeshu * 3 + 2) {
            this.xiaoxizu0.alpha = 1;
            if (yeshu == 0) {
                this.img_mingciditu0.source = "img_dierming_png";
            }
            else if (yeshu > 0 && yeshu < 3) {
                this.img_mingciditu0.source = "img_qitaming_png";
            }
            else {
                this.img_mingciditu0.source = "img_wuming_png";
            }
            this.nicheng0.text = this.totalGroup[yeshu * 3 + 1].name;
            this.fenshu0.text = this.totalGroup[yeshu * 3 + 1].scroes;
            this.paiming0.text = "" + (yeshu * 3 + 2);
            this.jiazaidiergetuoxiang(this.totalGroup[yeshu * 3 + 1].url);
        }
        else {
            this.xiaoxizu0.alpha = 0;
        }
        if (this.totalGroup.length >= yeshu * 3 + 3) {
            this.xiaoxizu1.alpha = 1;
            if (yeshu == 0) {
                this.img_mingciditu1.source = "img_disanming_png";
            }
            else if (yeshu > 0 && yeshu < 3) {
                this.img_mingciditu1.source = "img_qitaming_png";
            }
            else {
                this.img_mingciditu1.source = "img_wuming_png";
            }
            this.nicheng1.text = this.totalGroup[yeshu * 3 + 2].name;
            this.fenshu1.text = this.totalGroup[yeshu * 3 + 2].scroes;
            this.paiming1.text = "" + (yeshu * 3 + 3);
            this.jiazaidisangetuoxiang(this.totalGroup[yeshu * 3 + 2].url);
        }
        else {
            this.xiaoxizu1.alpha = 0;
        }
        if (this.dangqianyeshu <= 0) {
            this.but_shangyiye.enabled = false;
        }
        else {
            this.but_shangyiye.enabled = true;
            this.but_shangyiye.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shangyiye, this);
        }
        if (this.dangqianyeshu >= this.zuidayeshu) {
            this.but_xiayiye.enabled = false;
        }
        else {
            this.but_xiayiye.enabled = true;
            this.but_xiayiye.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiayiye, this);
        }
    };
    Paihangbangjiemian.prototype.shangyiye = function () {
        this.dangqianyeshu -= 1;
        this.zhuyaoxianshi(this.dangqianyeshu);
    };
    Paihangbangjiemian.prototype.xiayiye = function () {
        this.dangqianyeshu += 1;
        this.zhuyaoxianshi(this.dangqianyeshu);
    };
    Paihangbangjiemian.prototype.jiazaidiyigetuoxiang = function (url) {
        var youbiaoLoader = new egret.ImageLoader;
        youbiaoLoader.load(url);
        youbiaoLoader.once(egret.Event.COMPLETE, this.xianshidiyigetouxiang, this);
    };
    Paihangbangjiemian.prototype.xianshidiyigetouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.touxiang.width;
            head.height = this.touxiang.height;
            this.touxiang.addChild(head);
        }
    };
    Paihangbangjiemian.prototype.jiazaidiergetuoxiang = function (url) {
        var youbiaoLoader = new egret.ImageLoader;
        youbiaoLoader.load(url);
        youbiaoLoader.once(egret.Event.COMPLETE, this.xianshidiergetouxiang, this);
    };
    Paihangbangjiemian.prototype.xianshidiergetouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.touxiang.width;
            head.height = this.touxiang.height;
            this.touxiang0.addChild(head);
        }
    };
    Paihangbangjiemian.prototype.jiazaidisangetuoxiang = function (url) {
        var youbiaoLoader = new egret.ImageLoader;
        youbiaoLoader.load(url);
        youbiaoLoader.once(egret.Event.COMPLETE, this.xianshidisangetouxiang, this);
    };
    Paihangbangjiemian.prototype.xianshidisangetouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.touxiang.width;
            head.height = this.touxiang.height;
            this.touxiang1.addChild(head);
        }
    };
    Paihangbangjiemian.prototype.xianshizishen = function () {
        this.xiaoxizu2.alpha = 1;
        this.nicheng2.text = Gerenshuxing.mingzi;
        this.fenshu2.text = "" + Gerenshuxing.xingfuzhi;
        for (var j = 0; j < Gerenshuxing.paihangbangshuju.length; j++) {
            if (Gerenshuxing.paihangbangshuju[j].openid == Gerenshuxing.uid) {
                Gerenshuxing.paiming = j + 1;
                break;
            }
        }
        if (Gerenshuxing.paiming == 1) {
            this.img_mingciditu2.source = "img_diyiming_png";
            this.paiming2.text = "" + Gerenshuxing.paiming;
        }
        else if (Gerenshuxing.paiming == 2) {
            this.img_mingciditu2.source = "img_dierming_png";
            this.paiming2.text = "" + Gerenshuxing.paiming;
        }
        else if (Gerenshuxing.paiming == 3) {
            this.img_mingciditu2.source = "img_disanming_png";
            this.paiming2.text = "" + Gerenshuxing.paiming;
        }
        else if (Gerenshuxing.paiming > 3 && Gerenshuxing.paiming <= 50) {
            this.img_mingciditu2.source = "img_qitaming_png";
            this.paiming2.text = "" + Gerenshuxing.paiming;
        }
        else {
            this.img_mingciditu2.source = "img_wuming_png";
            this.paiming2.text = "无";
        }
        this.zishengtouxiang(Gerenshuxing.touxiang);
    };
    Paihangbangjiemian.prototype.zishengtouxiang = function (url) {
        var youbiaoLoader = new egret.ImageLoader;
        youbiaoLoader.load(url);
        youbiaoLoader.once(egret.Event.COMPLETE, this.xianshizijitouxiang, this);
    };
    Paihangbangjiemian.prototype.xianshizijitouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.touxiang.width;
            head.height = this.touxiang.height;
            this.touxiang2.addChild(head);
        }
    };
    return Paihangbangjiemian;
}(eui.Component));
__reflect(Paihangbangjiemian.prototype, "Paihangbangjiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Paihangbangjiemian.js.map
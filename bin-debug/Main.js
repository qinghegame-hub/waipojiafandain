//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banben = "weixin"; //游戏上线渠道入口标志;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var denglu, e_1, zhanghaojiemian_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        if (!(this.banben == "weixin")) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        denglu = _a.sent();
                        Gerenshuxing.gerencode = denglu.code;
                        console.log(Gerenshuxing.gerencode);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        this.dengluyouxi();
                        return [3 /*break*/, 7];
                    case 6:
                        if (this.banben == "0") {
                            zhanghaojiemian_1 = new Zhucejiemian();
                            this.stage.addChild(zhanghaojiemian_1);
                            zhanghaojiemian_1.quedingjinru.enabled = true;
                            zhanghaojiemian_1.quedingjinru.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                                Gamesound.Soundkongzhi().anniuyinxiao();
                                if (zhanghaojiemian_1.ceshizhanghaoshuru.text != null && zhanghaojiemian_1.ceshizhanghaoshuru.text != "请输入一个测试账号") {
                                    Gerenshuxing.uid = zhanghaojiemian_1.ceshizhanghaoshuru.text;
                                    _this.stage.removeChild(zhanghaojiemian_1);
                                    console.log("您本次登录的id为:" + Gerenshuxing.uid);
                                    _this.dengluyouxi();
                                }
                            }, this);
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.dengluyouxi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, suijimingzi, userinfo, result, beidongzhuanfa;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.banben == "weixin")) return [3 /*break*/, 6];
                        this.kaishiyouxianniu = new egret.Bitmap();
                        this.kaishiyouxianniu.texture = RES.getRes('but_kaishiyouxi_png');
                        this.stage.addChild(this.kaishiyouxianniu);
                        this.kaishiyouxianniu.x = this.stage.width / 2 - this.kaishiyouxianniu.width / 2;
                        this.kaishiyouxianniu.y = this.stage.height / 10 * 8;
                        return [4 /*yield*/, platform.getUserInfo(this.kaishiyouxianniu.x, this.kaishiyouxianniu.y, this.kaishiyouxianniu.width, this.kaishiyouxianniu.height)];
                    case 1:
                        userInfo = _a.sent();
                        if (userInfo == "jujue") {
                            suijimingzi = this.suijimingzi();
                            userinfo = {
                                nickName: suijimingzi,
                                avatarUrl: "https://www.qinghegame.com/loading/tongyitouxiang.png",
                                gender: "1",
                                province: "hunan"
                            };
                            Gerenshuxing.gerenshuju = userinfo;
                        }
                        else {
                            Gerenshuxing.gerenshuju = userInfo;
                        }
                        this.stage.removeChild(this.kaishiyouxianniu);
                        this.stage.removeChild(this.loadingView);
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.showShareMenu("第六十四年", Gerenshuxing.fenxianglianjiedizhi)];
                    case 3:
                        beidongzhuanfa = _a.sent();
                        console.log(beidongzhuanfa);
                        return [4 /*yield*/, platform.openDataContext.postMessage({
                                title: "nihao",
                                text: "你好",
                                time: (new Date()).getFullYear() + 1,
                                command: "loadRes"
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, platform.openDataContext.postMessage({
                                time: (new Date()).getFullYear() + 2,
                                uid: Gerenshuxing.uid
                            })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        if (this.banben == "0") {
                            this.kaishiyouxianniu = new egret.Bitmap();
                            this.kaishiyouxianniu.texture = RES.getRes('but_kaishiyouxi_png');
                            this.stage.addChild(this.kaishiyouxianniu);
                            //           this.kaishiyouxianniu.anchorOffsetX = this.kaishiyouxianniu.width / 2
                            //           this.kaishiyouxianniu.anchorOffsetY = this.kaishiyouxianniu.height / 2
                            this.kaishiyouxianniu.x = this.stage.width / 2 - this.kaishiyouxianniu.width / 2;
                            this.kaishiyouxianniu.y = this.stage.height / 10 * 8;
                            this.kaishiyouxianniu.touchEnabled = true;
                            this.kaishiyouxianniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjikaishiyouxi, this);
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.dianjikaishiyouxi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Gamesound.Soundkongzhi().anniuyinxiao();
                        this.stage.removeChild(this.kaishiyouxianniu);
                        this.stage.removeChild(this.loadingView);
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 1:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        //await RES.loadConfig("default.res.json", "http://192.168.1.4/res/resource/resource");
                        return [4 /*yield*/, RES.loadConfig("default.res.json", "https://www.qinghegame.com/res_wx/resource")];
                    case 1:
                        //await RES.loadConfig("default.res.json", "http://192.168.1.4/res/resource/resource");
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("loading")];
                    case 3:
                        _a.sent();
                        /*const loadingjie = new Loadingjiemian()
                        this.stage.addChild(loadingjie);*/
                        this.loadingView = new LoadingUI();
                        this.stage.addChild(this.loadingView);
                        return [4 /*yield*/, RES.loadGroup("preload", 0, this.loadingView)];
                    case 4:
                        _a.sent();
                        this.loadingView.jindutiaodi.alpha = 0;
                        this.loadingView.jindutiaoshang.alpha = 0;
                        this.loadingView.textField.text = "";
                        return [3 /*break*/, 6];
                    case 5:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            egret.ImageLoader.crossOrigin = "anonymous"; //设置允许跨域加载
            //            EXML.prefixURL = "http://192.168.1.1/res/resource/resource/eui_skins/";//更改目录位置,这里要填入服务器的ip地址
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            //let theme = new eui.Theme("http://192.168.1.4/res/resource/resource/default.thm.json", this.stage);
            var theme = new eui.Theme("https://www.qinghegame.com/res_wx/resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        var textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;
        /*
        连接服务器
        */
        var webseverlianji = new Weblianjie();
        webseverlianji.kaishilianjie();
        //进入场景
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 3000);
        }, this);
        var shijianstart = new Timekongzhi();
        //进入游戏主界面
        this.addChild(Gameguanli.Kongzhitai());
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    /*
    随机名字生成
    */
    Main.prototype.suijimingzi = function () {
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
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");

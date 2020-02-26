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
var Dajiejiemian = (function (_super) {
    __extends(Dajiejiemian, _super);
    function Dajiejiemian() {
        var _this = _super.call(this) || this;
        _this.dangqianbushu = 1; //当前所处的台阶步数;
        _this.dangqiansaizi = 1; //当前筛子抛出的点数;
        return _this;
    }
    Dajiejiemian.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Dajiejiemian.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.chushihua();
    };
    Dajiejiemian.prototype.chushihua = function () {
        this.jiedaobiao = RES.getRes("jiedaobiao_json");
        this.jiedaosuijibiao = RES.getRes("jiedaosuijibiao_json");
        this.but_shaizi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjisaizi, this);
        this.juesezu.x = this.taijie0.x;
        this.juesezu.y = this.taijie0.y;
        this.dangqianbushu = 1;
        this.dangqiansaizi = 1;
        this.tilixiaohaochushi();
    };
    Dajiejiemian.prototype.tilixiaohaochushi = function () {
        this.tilixiaohao.text = "1 / " + Gerenshuxing.jiatingzhi;
    };
    Dajiejiemian.prototype.dianjisaizi = function () {
        var _this = this;
        this.but_shaizi.enabled = false;
        if (Gerenshuxing.jiatingzhi > 0) {
            Weblianjie.fasongshuju("code:037", "{" + '"kouchushu"' + ":" + "1" + "," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
            var kouchudonghua_1 = new Cailiaoxiaohao();
            this.addChild(kouchudonghua_1);
            kouchudonghua_1.wenzizu.x = this.kaishianniuzu.x + this.kaishianniuzu.width / 2 - kouchudonghua_1.wenzizu.width / 2;
            kouchudonghua_1.wenzizu.y = this.kaishianniuzu.y - kouchudonghua_1.wenzizu.height;
            kouchudonghua_1.wenzineirong.text = " - 1";
            kouchudonghua_1.img_shicai.source = "img_jiating_png";
            egret.Tween.get(kouchudonghua_1).to({ x: kouchudonghua_1.x, y: kouchudonghua_1.y - 60 }, 2000).call(function () {
                _this.removeChild(kouchudonghua_1);
            });
            this.dangqiansaizi = Math.floor(Math.random() * 6) + 1;
            Gameguanli.Kongzhitai().cuowutishixinxi("当前掷出：" + this.dangqiansaizi + "点");
            this.zouluyanshi();
        }
        else {
            Gameguanli.Kongzhitai().cuowutishixinxi("当前您的劳动力已不足1点");
            this.but_shaizi.enabled = true;
        }
    };
    Dajiejiemian.prototype.zouluyanshi = function () {
        var _this = this;
        if (this.dangqiansaizi > 0) {
            switch (this.dangqianbushu) {
                case 1:
                    this.dangqianbushu = 2;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie1.x, y: this.taijie1.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 2:
                    this.dangqianbushu = 3;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie2.x, y: this.taijie2.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 3:
                    this.dangqianbushu = 4;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie3.x, y: this.taijie3.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 4:
                    this.dangqianbushu = 5;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie4.x, y: this.taijie4.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 5:
                    this.dangqianbushu = 6;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie5.x, y: this.taijie5.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 6:
                    this.dangqianbushu = 7;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie6.x, y: this.taijie6.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 7:
                    this.dangqianbushu = 8;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie7.x, y: this.taijie7.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 8:
                    this.dangqianbushu = 9;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie8.x, y: this.taijie8.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 9:
                    this.dangqianbushu = 10;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie9.x, y: this.taijie9.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 10:
                    this.dangqianbushu = 11;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie10.x, y: this.taijie10.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 11:
                    this.dangqianbushu = 12;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie11.x, y: this.taijie11.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 12:
                    this.dangqianbushu = 13;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie12.x, y: this.taijie12.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 13:
                    this.dangqianbushu = 14;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie13.x, y: this.taijie13.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 14:
                    this.dangqianbushu = 15;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie14.x, y: this.taijie14.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 15:
                    this.dangqianbushu = 16;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie15.x, y: this.taijie15.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 16:
                    this.dangqianbushu = 17;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie16.x, y: this.taijie16.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 17:
                    this.dangqianbushu = 18;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie17.x, y: this.taijie17.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 18:
                    this.dangqianbushu = 19;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie18.x, y: this.taijie18.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 19:
                    this.dangqianbushu = 20;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie19.x, y: this.taijie19.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 20:
                    this.dangqianbushu = 21;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie20.x, y: this.taijie20.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 21:
                    this.dangqianbushu = 22;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie21.x, y: this.taijie21.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 22:
                    this.dangqianbushu = 23;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie22.x, y: this.taijie22.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 23:
                    this.dangqianbushu = 24;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie23.x, y: this.taijie23.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 24:
                    this.dangqianbushu = 25;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie24.x, y: this.taijie24.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 25:
                    this.dangqianbushu = 26;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie25.x, y: this.taijie25.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 26:
                    this.dangqianbushu = 27;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie26.x, y: this.taijie26.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 27:
                    this.dangqianbushu = 2;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie1.x, y: this.taijie1.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
            }
        }
        else {
            this.chufagongneng();
        }
    };
    Dajiejiemian.prototype.chufagongneng = function () {
        var _this = this;
        switch (this.dangqianbushu) {
            case 1:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "1") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 2:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "2") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 3:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "3") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 4:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "4") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 5:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "5") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 6:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "6") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 7:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "7") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 8:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "8") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 9:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "9") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 10:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "10") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 11:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "11") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 12:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "12") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 13:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "13") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 14:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "14") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 15:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "15") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 16:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "16") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 17:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "17") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 18:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "18") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 19:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "19") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 20:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "20") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 21:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "21") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 22:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "22") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 23:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "23") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 24:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "24") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 25:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "25") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 26:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "26") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
            case 27:
                this.zhuanchangjiemian = new Dianpurukou();
                Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
                for (var i = 0; i < this.jiedaobiao.length; i++) {
                    if (this.jiedaobiao[i].id == "27") {
                        this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
                        this.jiedaopeizhi = this.jiedaobiao[i];
                    }
                }
                this.zhuanchangjiemian.alpha = 0;
                egret.Tween.get(this.zhuanchangjiemian).to({ alpha: 1 }, 1500).wait(2000).call(function () {
                    egret.Tween.get(_this.zhuanchangjiemian).to({ alpha: 0 }, 1500).call(function () {
                        Gameguanli.Kongzhitai().dingbuui.removeChild(_this.zhuanchangjiemian);
                        _this.chufadianpu1();
                    });
                });
                break;
        }
    };
    Dajiejiemian.prototype.fandianbufen = function () {
    };
    Dajiejiemian.prototype.chufadianpu1 = function () {
        if (this.jiedaopeizhi.suijiliebiao == "0") {
            this.but_shaizi.enabled = true;
            this.fandianbufen();
        }
        else {
            this.suijichufaliebiao = this.jiedaopeizhi.suijiliebiao.split(",");
            var suijishu = Math.floor(Math.random() * (this.suijichufaliebiao.length + 1));
            for (var j = 0; j < this.jiedaosuijibiao.length; j++) {
                if (this.suijichufaliebiao[suijishu] == this.jiedaosuijibiao[j].id) {
                    this.suijipeizhi = this.jiedaosuijibiao[j];
                    break;
                }
            }
            this.suijijiemian = new Tongyongquerenkuang();
            Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
            this.suijijiemian.tishiwenzi.text = this.suijipeizhi.neirong;
            this.kouchuleixing = this.suijipeizhi.kouchuleixing;
            this.suijichufaid = this.suijipeizhi.id;
            this.kouchushuliang = this.suijipeizhi.kouchushuliang;
            this.jianglileixing = this.suijipeizhi.jianglileixing;
            this.jianglishuliang = this.suijipeizhi.jianglishuliang;
            this.suijijiemian.jiangli2.text = "- " + this.kouchushuliang;
            this.suijijiemian.jiangli1.text = "+ " + this.jianglishuliang;
            this.kouchutubiaopanduan();
            this.jianglitubiaopanduan();
            this.suijijiemian.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.suijiqueding, this);
            this.suijijiemian.but_shuangbei.addEventListener(egret.TouchEvent.TOUCH_TAP, this.suijishuangbei, this);
        }
    };
    Dajiejiemian.prototype.jianglitubiaopanduan = function () {
        if (this.jianglileixing == "1") {
            this.suijijiemian.jiangliicon1.source = "img_qian_png";
        }
        else if (this.jianglileixing == "2") {
            this.suijijiemian.jiangliicon1.source = "img_jiating_png";
        }
        else if (this.jianglileixing == "3") {
            this.suijijiemian.jiangliicon1.source = "img_jiankang_png";
        }
        else if (this.jianglileixing == "4") {
            this.suijijiemian.jiangliicon1.source = "img_xinqing_png";
        }
        else if (this.jianglileixing == "5") {
            this.suijijiemian.jiangliicon1.source = "img_xingfu_png";
        }
    };
    Dajiejiemian.prototype.kouchutubiaopanduan = function () {
        if (this.kouchuleixing == "1") {
            this.suijijiemian.jiangliicon2.source = "img_qian_png";
        }
        else if (this.kouchuleixing == "2") {
            this.suijijiemian.jiangliicon2.source = "img_jiating_png";
        }
        else if (this.kouchuleixing == "3") {
            this.suijijiemian.jiangliicon2.source = "img_jiankang_png";
        }
        else if (this.kouchuleixing == "4") {
            this.suijijiemian.jiangliicon2.source = "img_xinqing_png";
        }
        else if (this.kouchuleixing == "5") {
            this.suijijiemian.jiangliicon2.source = "img_xingfu_png";
        }
    };
    Dajiejiemian.prototype.suijiqueding = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
        this.but_shaizi.enabled = true;
        switch (this.kouchuleixing) {
            case "1":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(1);
                    this.jianglijiemian.jiangliicon.source = "img_qian_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您无法支付费用，只得黯自离去！");
                }
                break;
            case "2":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(1);
                    this.jianglijiemian.jiangliicon.source = "img_jiating_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您的行动力不足，只得黯自离去！");
                }
                break;
            case "3":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(1);
                    this.jianglijiemian.jiangliicon.source = "img_jiankang_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您的身体不太健康，只得黯自离去！");
                }
                break;
            case "4":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(1);
                    this.jianglijiemian.jiangliicon.source = "img_xinqing_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您的心情不太开心，只得黯自离去！");
                }
                break;
            case "5":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(1);
                    this.jianglijiemian.jiangliicon.source = "img_xingfu_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您的幸福值太低，只得黯自离去！");
                }
                break;
        }
    };
    Dajiejiemian.prototype.suijishuangbei = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
        this.but_shaizi.enabled = true;
        switch (this.kouchuleixing) {
            case "1":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(2);
                    this.jianglijiemian.jiangliicon.source = "img_qian_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang * 2;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您无法支付费用，只得黯自离去！");
                }
                break;
            case "2":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(2);
                    this.jianglijiemian.jiangliicon.source = "img_jiating_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang * 2;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您的行动力不足，只得黯自离去！");
                }
                break;
            case "3":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(2);
                    this.jianglijiemian.jiangliicon.source = "img_jiankang_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang * 2;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您的身体不太健康，只得黯自离去！");
                }
                break;
            case "4":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(2);
                    this.jianglijiemian.jiangliicon.source = "img_xinqing_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang * 2;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您的心情不太开心，只得黯自离去！");
                }
                break;
            case "5":
                if (Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)) {
                    this.jianglijiemian = new Jianglijiesuanui();
                    Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
                    this.fasongjiangli(2);
                    this.jianglijiemian.jiangliicon.source = "img_xingfu_png";
                    this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang * 2;
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您的幸福值太低，只得黯自离去！");
                }
                break;
        }
    };
    Dajiejiemian.prototype.fasongjiangli = function (beishu) {
        Weblianjie.fasongshuju("code:040", "{" + '"kouchuleixing"' + ":" + '"' + this.kouchuleixing + '"' + ","
            + '"kouchushuliang"' + ":" + '"' + this.kouchushuliang + '"' + ","
            + '"jianglileixing"' + ":" + '"' + this.jianglileixing + '"' + ","
            + '"jianglishuliang"' + ":" + '"' + this.jianglishuliang + '"' + ","
            + '"beishu"' + ":" + '"' + beishu + '"' + ","
            + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Dajiejiemian.prototype.guanbijiangli = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jianglijiemian);
    };
    Dajiejiemian.prototype.chufadianpu2 = function () {
    };
    Dajiejiemian.prototype.chufadianpu3 = function () {
    };
    Dajiejiemian.prototype.chufadianpu4 = function () {
    };
    Dajiejiemian.prototype.chufadianpu5 = function () {
    };
    Dajiejiemian.prototype.chufadianpu6 = function () {
    };
    Dajiejiemian.prototype.chufadianpu7 = function () {
    };
    Dajiejiemian.prototype.chufadianpu8 = function () {
    };
    Dajiejiemian.prototype.chufadianpu9 = function () {
    };
    Dajiejiemian.prototype.chufadianpu10 = function () {
    };
    Dajiejiemian.prototype.chufadianpu11 = function () {
    };
    Dajiejiemian.prototype.chufadianpu12 = function () {
    };
    Dajiejiemian.prototype.chufadianpu13 = function () {
    };
    Dajiejiemian.prototype.chufadianpu14 = function () {
    };
    Dajiejiemian.prototype.chufadianpu15 = function () {
    };
    Dajiejiemian.prototype.chufadianpu16 = function () {
    };
    Dajiejiemian.prototype.chufadianpu17 = function () {
    };
    Dajiejiemian.prototype.chufadianpu18 = function () {
    };
    Dajiejiemian.prototype.chufadianpu19 = function () {
    };
    Dajiejiemian.prototype.chufadianpu20 = function () {
    };
    Dajiejiemian.prototype.chufadianpu21 = function () {
    };
    Dajiejiemian.prototype.chufadianpu22 = function () {
    };
    Dajiejiemian.prototype.chufadianpu23 = function () {
    };
    Dajiejiemian.prototype.chufadianpu24 = function () {
    };
    Dajiejiemian.prototype.chufadianpu25 = function () {
    };
    Dajiejiemian.prototype.chufadianpu26 = function () {
    };
    return Dajiejiemian;
}(eui.Component));
__reflect(Dajiejiemian.prototype, "Dajiejiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Dajiejiemian.js.map
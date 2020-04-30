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
        _this.keyishougou = false; //是否可以收购;
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
        this.youbiaotouxiang();
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
        this.fandianjiemian = new Dianpufandian();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.fandianjiemian);
        for (var p = 0; p < this.jiedaobiao.length; p++) {
            if (this.dangqianbushu == parseInt(this.jiedaobiao[p].id)) {
                this.jiedaopeizhi = this.jiedaobiao[p];
                this.fandianjiemian.dianpuming.text = this.jiedaopeizhi.name;
                break;
            }
        }
        for (var g in Gerencaipudengji.jiedaoshuju) {
            if (g == String(this.dangqianbushu)) {
                this.fandianpeizhi = Gerencaipudengji.jiedaoshuju[g];
                break;
            }
        }
        var zuizongrenqi = parseInt(this.fandianpeizhi[0]) + parseInt(this.fandianpeizhi[18]) + parseInt(this.fandianpeizhi[19]) + parseInt(this.fandianpeizhi[20]);
        var tishengrenqi = parseInt(this.fandianpeizhi[18]) + parseInt(this.fandianpeizhi[19]) + parseInt(this.fandianpeizhi[20]);
        this.fandianjiemian.renqishu.text = "" + zuizongrenqi + "(" + tishengrenqi + ")";
        this.fandianjiemian.zujinshu.text = this.fandianpeizhi[1];
        this.fandianjiemian.zuqishu.text = this.fandianpeizhi[3] + "天";
        this.fandianjiemian.but_xiaofei.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaofeidianji, this);
        if (this.fandianpeizhi[3] == "0") {
            this.fandianjiemian.zhuangtaishu.text = "可收购";
        }
        else {
            this.fandianjiemian.zhuangtaishu.text = "不可收购";
        }
        switch (this.fandianpeizhi[4]) {
            case "0":
                this.fandianjiemian.img_yinye.source = "img_shoufei_png";
                this.fandianjiemian.shoufeishu.text = this.fandianpeizhi[2];
                this.fandianjiemian.dianzhuming.text = "暂无主人";
                this.fandianjiemian.but_shougou.enabled = true;
                this.fandianjiemian.but_shougou.alpha = 1;
                this.fandianjiemian.but_shouyin.enabled = false;
                this.fandianjiemian.but_shouyin.alpha = 0;
                this.fandianjiemian.but_shougou.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shougou, this);
                this.fandianjiemian.but_guyuan1.enabled = false;
                this.fandianjiemian.but_guyuan2.enabled = false;
                this.fandianjiemian.but_guyuan3.enabled = false;
                this.fandianjiemian.but_guyuan1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguyuan1, this);
                this.fandianjiemian.but_guyuan2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguyuan2, this);
                this.fandianjiemian.but_guyuan3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguyuan3, this);
                break;
            case "1":
                this.fandianjiemian.img_yinye.source = "img_shoufei1_png";
                this.fandianjiemian.shoufeishu.text = this.fandianpeizhi[5];
                this.fandianjiemian.dianzhuming.text = Gerenshuxing.mingzi;
                this.fandianjiemian.but_shougou.enabled = false;
                this.fandianjiemian.but_shougou.alpha = 0;
                this.fandianjiemian.but_shouyin.enabled = true;
                this.fandianjiemian.but_shouyin.alpha = 1;
                this.huoquzijitouxiang(Gerenshuxing.touxiang);
                this.fandianjiemian.but_shouyin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shouyindianji, this);
                this.fandianjiemian.but_guyuan1.enabled = true;
                this.fandianjiemian.but_guyuan2.enabled = true;
                this.fandianjiemian.but_guyuan3.enabled = true;
                this.fandianjiemian.but_guyuan1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguyuan1, this);
                this.fandianjiemian.but_guyuan2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguyuan2, this);
                this.fandianjiemian.but_guyuan3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguyuan3, this);
                if (this.fandianpeizhi[7] == "0") {
                    this.fandianjiemian.guyuantouxiang1.source = "img_kongbaijiahao_png";
                }
                else if (this.fandianpeizhi[7] == "2") {
                    this.jiazaiguyuan1touxiangsj(this.fandianpeizhi[11]);
                }
                else if (this.fandianpeizhi[7] == "1") {
                    this.fandianjiemian.guyuantouxiang1.source = this.fandianpeizhi[11];
                }
                if (this.fandianpeizhi[8] == "0") {
                    this.fandianjiemian.guyuantouxiang2.source = "img_kongbaijiahao_png";
                }
                else if (this.fandianpeizhi[8] == "2") {
                    this.jiazaiguyuan2touxiangsj(this.fandianpeizhi[13]);
                }
                else if (this.fandianpeizhi[8] == "1") {
                    this.fandianjiemian.guyuantouxiang2.source = this.fandianpeizhi[13];
                }
                if (this.fandianpeizhi[9] == "0") {
                    this.fandianjiemian.guyuantouxiang3.source = "img_kongbaijiahao_png";
                }
                else if (this.fandianpeizhi[9] == "2") {
                    this.jiazaiguyuan3touxiangsj(this.fandianpeizhi[15]);
                }
                else if (this.fandianpeizhi[9] == "1") {
                    this.fandianjiemian.guyuantouxiang3.source = this.fandianpeizhi[15];
                }
                break;
            default:
                this.fandianjiemian.img_yinye.source = "img_shoufei_png";
                this.fandianjiemian.shoufeishu.text = this.fandianpeizhi[2];
                this.fandianjiemian.dianzhuming.text = this.fandianpeizhi[16];
                this.huoquzijitouxiang(this.fandianpeizhi[17]);
                this.fandianjiemian.but_shougou.enabled = false;
                this.fandianjiemian.but_shougou.alpha = 1;
                this.fandianjiemian.but_shouyin.enabled = false;
                this.fandianjiemian.but_shouyin.alpha = 0;
                this.fandianjiemian.but_shougou.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.shougou, this);
                this.fandianjiemian.but_guyuan1.enabled = true;
                this.fandianjiemian.but_guyuan2.enabled = true;
                this.fandianjiemian.but_guyuan3.enabled = true;
                this.fandianjiemian.but_guyuan1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguyuan1, this);
                this.fandianjiemian.but_guyuan2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguyuan2, this);
                this.fandianjiemian.but_guyuan3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dianjiguyuan3, this);
                if (this.fandianpeizhi[7] == "0") {
                    this.fandianjiemian.guyuantouxiang1.source = "img_kongbaijiahao_png";
                }
                else if (this.fandianpeizhi[7] == "2") {
                    this.jiazaiguyuan1touxiangsj(this.fandianpeizhi[11]);
                }
                else if (this.fandianpeizhi[7] == "1") {
                    this.fandianjiemian.guyuantouxiang1.source = this.fandianpeizhi[11];
                }
                if (this.fandianpeizhi[8] == "0") {
                    this.fandianjiemian.guyuantouxiang2.source = "img_kongbaijiahao_png";
                }
                else if (this.fandianpeizhi[8] == "2") {
                    this.jiazaiguyuan2touxiangsj(this.fandianpeizhi[13]);
                }
                else if (this.fandianpeizhi[8] == "1") {
                    this.fandianjiemian.guyuantouxiang2.source = this.fandianpeizhi[13];
                }
                if (this.fandianpeizhi[9] == "0") {
                    this.fandianjiemian.guyuantouxiang3.source = "img_kongbaijiahao_png";
                }
                else if (this.fandianpeizhi[9] == "2") {
                    this.jiazaiguyuan3touxiangsj(this.fandianpeizhi[15]);
                }
                else if (this.fandianpeizhi[9] == "1") {
                    this.fandianjiemian.guyuantouxiang3.source = this.fandianpeizhi[15];
                }
        }
    };
    //雇员界面
    Dajiejiemian.prototype.dianjiguyuan1 = function () {
        this.fandianguyuan = new Dianpuzhaopinui();
        this.fandianjiemian.addChild(this.fandianguyuan);
        this.fandianguyuan.img_heisezhezao1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbiguyuan, this);
        if (this.fandianpeizhi[4] == "2") {
            if (this.fandianpeizhi[7] == "0") {
                this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
                this.fandianguyuan.mingzi.text = "暂无雇员";
                this.fandianguyuan.jinengshu.text = "无";
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            else if (this.fandianpeizhi[7] == "1") {
                this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[11];
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[10];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[18];
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            else if (this.fandianpeizhi[7] == "2") {
                this.guyuanjiazaitouxiang1(this.fandianpeizhi[11]);
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[10];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[18];
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            this.fandianguyuan.but_zhaopin.enabled = false;
            this.fandianguyuan.but_zhaopin.alpha = 0;
            this.fandianguyuan.but_jiepin.enabled = false;
            this.fandianguyuan.but_jiepin.alpha = 0;
        }
        else if (this.fandianpeizhi[4] == "1") {
            if (this.fandianpeizhi[7] == "0") {
                this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
                this.fandianguyuan.mingzi.text = "暂无雇员";
                this.fandianguyuan.jinengshu.text = "无";
                this.fandianguyuan.but_zhaopin.enabled = true;
                this.fandianguyuan.but_zhaopin.alpha = 1;
                this.fandianguyuan.but_zhaopin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.zhaopinguyuan1, this);
                this.fandianguyuan.but_jiepin.enabled = false;
                this.fandianguyuan.but_jiepin.alpha = 0;
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            else if (this.fandianpeizhi[7] == "1") {
                this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[11];
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[10];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[18];
                this.fandianguyuan.but_zhaopin.enabled = false;
                this.fandianguyuan.but_zhaopin.alpha = 0;
                this.fandianguyuan.but_jiepin.enabled = true;
                this.fandianguyuan.but_jiepin.alpha = 1;
                this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiepinguyuan1, this);
                this.fandianguyuan.shuoming.text = "解聘后可重新招募";
            }
            else if (this.fandianpeizhi[7] == "2") {
                this.guyuanjiazaitouxiang1(this.fandianpeizhi[11]);
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[10];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[18];
                this.fandianguyuan.but_zhaopin.enabled = false;
                this.fandianguyuan.but_zhaopin.alpha = 0;
                this.fandianguyuan.but_jiepin.enabled = true;
                this.fandianguyuan.but_jiepin.alpha = 1;
                this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiepinguyuan1, this);
                this.fandianguyuan.shuoming.text = "解聘后可重新招募";
            }
        }
    };
    Dajiejiemian.prototype.dianjiguyuan2 = function () {
        this.fandianguyuan = new Dianpuzhaopinui();
        this.fandianjiemian.addChild(this.fandianguyuan);
        this.fandianguyuan.img_heisezhezao1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbiguyuan, this);
        if (this.fandianpeizhi[4] == "2") {
            if (this.fandianpeizhi[8] == "0") {
                this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
                this.fandianguyuan.mingzi.text = "暂无雇员";
                this.fandianguyuan.jinengshu.text = "无";
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            else if (this.fandianpeizhi[8] == "1") {
                this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[13];
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[12];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[19];
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            else if (this.fandianpeizhi[8] == "2") {
                this.guyuanjiazaitouxiang1(this.fandianpeizhi[13]);
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[12];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[19];
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            this.fandianguyuan.but_zhaopin.enabled = false;
            this.fandianguyuan.but_zhaopin.alpha = 0;
            this.fandianguyuan.but_jiepin.enabled = false;
            this.fandianguyuan.but_jiepin.alpha = 0;
        }
        else if (this.fandianpeizhi[4] == "1") {
            if (this.fandianpeizhi[8] == "0") {
                this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
                this.fandianguyuan.mingzi.text = "暂无雇员";
                this.fandianguyuan.jinengshu.text = "无";
                this.fandianguyuan.but_zhaopin.enabled = true;
                this.fandianguyuan.but_zhaopin.alpha = 1;
                this.fandianguyuan.but_zhaopin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.zhaopinguyuan2, this);
                this.fandianguyuan.but_jiepin.enabled = false;
                this.fandianguyuan.but_jiepin.alpha = 0;
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            else if (this.fandianpeizhi[8] == "1") {
                this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[13];
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[12];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[19];
                this.fandianguyuan.but_zhaopin.enabled = false;
                this.fandianguyuan.but_zhaopin.alpha = 0;
                this.fandianguyuan.but_jiepin.enabled = true;
                this.fandianguyuan.but_jiepin.alpha = 1;
                this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiepinguyuan2, this);
                this.fandianguyuan.shuoming.text = "解聘后可重新招募";
            }
            else if (this.fandianpeizhi[8] == "2") {
                this.guyuanjiazaitouxiang1(this.fandianpeizhi[13]);
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[12];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[19];
                this.fandianguyuan.but_zhaopin.enabled = false;
                this.fandianguyuan.but_zhaopin.alpha = 0;
                this.fandianguyuan.but_jiepin.enabled = true;
                this.fandianguyuan.but_jiepin.alpha = 1;
                this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiepinguyuan2, this);
                this.fandianguyuan.shuoming.text = "解聘后可重新招募";
            }
        }
    };
    Dajiejiemian.prototype.dianjiguyuan3 = function () {
        this.fandianguyuan = new Dianpuzhaopinui();
        this.fandianjiemian.addChild(this.fandianguyuan);
        this.fandianguyuan.img_heisezhezao1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbiguyuan, this);
        if (this.fandianpeizhi[4] == "2") {
            if (this.fandianpeizhi[9] == "0") {
                this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
                this.fandianguyuan.mingzi.text = "暂无雇员";
                this.fandianguyuan.jinengshu.text = "无";
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            else if (this.fandianpeizhi[9] == "1") {
                this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[15];
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[14];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[20];
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            else if (this.fandianpeizhi[9] == "2") {
                this.guyuanjiazaitouxiang1(this.fandianpeizhi[15]);
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[14];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[20];
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            this.fandianguyuan.but_zhaopin.enabled = false;
            this.fandianguyuan.but_zhaopin.alpha = 0;
            this.fandianguyuan.but_jiepin.enabled = false;
            this.fandianguyuan.but_jiepin.alpha = 0;
        }
        else if (this.fandianpeizhi[4] == "1") {
            if (this.fandianpeizhi[9] == "0") {
                this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
                this.fandianguyuan.mingzi.text = "暂无雇员";
                this.fandianguyuan.jinengshu.text = "无";
                this.fandianguyuan.but_zhaopin.enabled = true;
                this.fandianguyuan.but_zhaopin.alpha = 1;
                this.fandianguyuan.but_zhaopin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.zhaopinguyuan3, this);
                this.fandianguyuan.but_jiepin.enabled = false;
                this.fandianguyuan.but_jiepin.alpha = 0;
                this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
            }
            else if (this.fandianpeizhi[9] == "1") {
                this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[15];
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[14];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[20];
                this.fandianguyuan.but_zhaopin.enabled = false;
                this.fandianguyuan.but_zhaopin.alpha = 0;
                this.fandianguyuan.but_jiepin.enabled = true;
                this.fandianguyuan.but_jiepin.alpha = 1;
                this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiepinguyuan3, this);
                this.fandianguyuan.shuoming.text = "解聘后可重新招募";
            }
            else if (this.fandianpeizhi[9] == "2") {
                this.guyuanjiazaitouxiang1(this.fandianpeizhi[15]);
                this.fandianguyuan.mingzi.text = this.fandianpeizhi[14];
                this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[20];
                this.fandianguyuan.but_zhaopin.enabled = false;
                this.fandianguyuan.but_zhaopin.alpha = 0;
                this.fandianguyuan.but_jiepin.enabled = true;
                this.fandianguyuan.but_jiepin.alpha = 1;
                this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiepinguyuan3, this);
                this.fandianguyuan.shuoming.text = "解聘后可重新招募";
            }
        }
    };
    Dajiejiemian.prototype.zhaopinguyuan2 = function () {
        var _this = this;
        this.guyuan2leixing = 0;
        this.guyuan2mingzi = "0";
        this.guyuan2touxiang = "0";
        this.guyuan2jiacheng = 0;
        var npcbiao = RES.getRes("gukehanhuabiao_json");
        var suijinpc = Math.floor(Math.random() * npcbiao.length);
        var mingzi = npcbiao[suijinpc].name;
        var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
        var jiacheng = Math.floor(Math.random() * 15) + 1;
        var suijishijie = Math.floor(Math.random() * 100);
        if (suijishijie > 80) {
            if (Gerenshuxing.paihangbangshuju.length >= 60) {
                var suijishu = Math.floor(Math.random() * 50);
                jiacheng = 50 - suijishu + 20;
                mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                this.guyuanjiazaitouxiang1(touxiang);
            }
        }
        this.fandianguyuan.xitongtouxiang.source = touxiang;
        this.fandianguyuan.mingzi.text = mingzi;
        this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
        this.fandianguyuan.shuoming.text = "正在寻觅店员";
        this.fandianguyuan.but_zhaopin.enabled = false;
        this.fandianguyuan.but_zhaopin.alpha = 0;
        this.fandianguyuan.but_jiepin.enabled = false;
        this.fandianguyuan.but_jiepin.alpha = 0;
        this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.zhaopinguyuan1, this);
        egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(500).call(function () {
            var npcbiao = RES.getRes("gukehanhuabiao_json");
            var suijinpc = Math.floor(Math.random() * npcbiao.length);
            var mingzi = npcbiao[suijinpc].name;
            var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
            var jiacheng = Math.floor(Math.random() * 15) + 1;
            var suijishijie = Math.floor(Math.random() * 100);
            if (suijishijie > 80) {
                if (Gerenshuxing.paihangbangshuju.length >= 60) {
                    var suijishu = Math.floor(Math.random() * 50);
                    jiacheng = 50 - suijishu + 20;
                    mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                    touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                    _this.guyuanjiazaitouxiang1(touxiang);
                }
            }
            _this.fandianguyuan.xitongtouxiang.source = touxiang;
            _this.fandianguyuan.mingzi.text = mingzi;
            _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
            _this.fandianguyuan.shuoming.text = "正在寻觅店员";
            _this.fandianguyuan.but_zhaopin.enabled = false;
            _this.fandianguyuan.but_zhaopin.alpha = 0;
            _this.fandianguyuan.but_jiepin.enabled = false;
            _this.fandianguyuan.but_jiepin.alpha = 0;
            _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
            egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(800).call(function () {
                var npcbiao = RES.getRes("gukehanhuabiao_json");
                var suijinpc = Math.floor(Math.random() * npcbiao.length);
                var mingzi = npcbiao[suijinpc].name;
                var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                var jiacheng = Math.floor(Math.random() * 15) + 1;
                var suijishijie = Math.floor(Math.random() * 100);
                if (suijishijie > 80) {
                    if (Gerenshuxing.paihangbangshuju.length >= 60) {
                        var suijishu = Math.floor(Math.random() * 50);
                        jiacheng = 50 - suijishu + 20;
                        mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                        touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                        _this.guyuanjiazaitouxiang1(touxiang);
                    }
                }
                _this.fandianguyuan.xitongtouxiang.source = touxiang;
                _this.fandianguyuan.mingzi.text = mingzi;
                _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                _this.fandianguyuan.but_zhaopin.enabled = false;
                _this.fandianguyuan.but_zhaopin.alpha = 0;
                _this.fandianguyuan.but_jiepin.enabled = false;
                _this.fandianguyuan.but_jiepin.alpha = 0;
                _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1100).call(function () {
                    var npcbiao = RES.getRes("gukehanhuabiao_json");
                    var suijinpc = Math.floor(Math.random() * npcbiao.length);
                    var mingzi = npcbiao[suijinpc].name;
                    var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                    var jiacheng = Math.floor(Math.random() * 15) + 1;
                    var suijishijie = Math.floor(Math.random() * 100);
                    if (suijishijie > 80) {
                        if (Gerenshuxing.paihangbangshuju.length >= 60) {
                            var suijishu = Math.floor(Math.random() * 50);
                            jiacheng = 50 - suijishu + 20;
                            mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                            touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                            _this.guyuanjiazaitouxiang1(touxiang);
                        }
                    }
                    _this.fandianguyuan.xitongtouxiang.source = touxiang;
                    _this.fandianguyuan.mingzi.text = mingzi;
                    _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                    _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                    _this.fandianguyuan.but_zhaopin.enabled = false;
                    _this.fandianguyuan.but_zhaopin.alpha = 0;
                    _this.fandianguyuan.but_jiepin.enabled = false;
                    _this.fandianguyuan.but_jiepin.alpha = 0;
                    _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                    egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1200).call(function () {
                        var npcbiao = RES.getRes("gukehanhuabiao_json");
                        var suijinpc = Math.floor(Math.random() * npcbiao.length);
                        var mingzi = npcbiao[suijinpc].name;
                        var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                        var jiacheng = Math.floor(Math.random() * 15) + 1;
                        var suijishijie = Math.floor(Math.random() * 100);
                        if (suijishijie > 80) {
                            if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                var suijishu = Math.floor(Math.random() * 50);
                                jiacheng = 50 - suijishu + 20;
                                mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                _this.guyuanjiazaitouxiang1(touxiang);
                            }
                        }
                        _this.fandianguyuan.xitongtouxiang.source = touxiang;
                        _this.fandianguyuan.mingzi.text = mingzi;
                        _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                        _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                        _this.fandianguyuan.but_zhaopin.enabled = false;
                        _this.fandianguyuan.but_zhaopin.alpha = 0;
                        _this.fandianguyuan.but_jiepin.enabled = false;
                        _this.fandianguyuan.but_jiepin.alpha = 0;
                        _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                        egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1300).call(function () {
                            var npcbiao = RES.getRes("gukehanhuabiao_json");
                            var suijinpc = Math.floor(Math.random() * npcbiao.length);
                            var mingzi = npcbiao[suijinpc].name;
                            var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                            var jiacheng = Math.floor(Math.random() * 15) + 1;
                            var suijishijie = Math.floor(Math.random() * 100);
                            if (suijishijie > 80) {
                                if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                    var suijishu = Math.floor(Math.random() * 50);
                                    jiacheng = 50 - suijishu + 20;
                                    mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                    touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                    _this.guyuanjiazaitouxiang1(touxiang);
                                }
                            }
                            _this.fandianguyuan.xitongtouxiang.source = touxiang;
                            _this.fandianguyuan.mingzi.text = mingzi;
                            _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                            _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                            _this.fandianguyuan.but_zhaopin.enabled = false;
                            _this.fandianguyuan.but_zhaopin.alpha = 0;
                            _this.fandianguyuan.but_jiepin.enabled = false;
                            _this.fandianguyuan.but_jiepin.alpha = 0;
                            _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                            egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1400).call(function () {
                                var npcbiao = RES.getRes("gukehanhuabiao_json");
                                var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                var mingzi = npcbiao[suijinpc].name;
                                var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                var jiacheng = Math.floor(Math.random() * 15) + 1;
                                var suijishijie = Math.floor(Math.random() * 100);
                                if (suijishijie > 80) {
                                    if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                        var suijishu = Math.floor(Math.random() * 50);
                                        jiacheng = 50 - suijishu + 20;
                                        mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                        touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                        _this.guyuanjiazaitouxiang1(touxiang);
                                    }
                                }
                                _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                _this.fandianguyuan.mingzi.text = mingzi;
                                _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                _this.fandianguyuan.but_zhaopin.enabled = false;
                                _this.fandianguyuan.but_zhaopin.alpha = 0;
                                _this.fandianguyuan.but_jiepin.enabled = false;
                                _this.fandianguyuan.but_jiepin.alpha = 0;
                                _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1500).call(function () {
                                    var npcbiao = RES.getRes("gukehanhuabiao_json");
                                    var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                    var mingzi = npcbiao[suijinpc].name;
                                    var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                    var jiacheng = Math.floor(Math.random() * 15) + 1;
                                    var suijishijie = Math.floor(Math.random() * 100);
                                    if (suijishijie > 80) {
                                        if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                            var suijishu = Math.floor(Math.random() * 50);
                                            jiacheng = 50 - suijishu + 20;
                                            mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                            touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                            _this.guyuanjiazaitouxiang1(touxiang);
                                        }
                                    }
                                    _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                    _this.fandianguyuan.mingzi.text = mingzi;
                                    _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                    _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                    _this.fandianguyuan.but_zhaopin.enabled = false;
                                    _this.fandianguyuan.but_zhaopin.alpha = 0;
                                    _this.fandianguyuan.but_jiepin.enabled = false;
                                    _this.fandianguyuan.but_jiepin.alpha = 0;
                                    _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                    egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1600).call(function () {
                                        var npcbiao = RES.getRes("gukehanhuabiao_json");
                                        var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                        var mingzi = npcbiao[suijinpc].name;
                                        var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                        var jiacheng = Math.floor(Math.random() * 15) + 1;
                                        var suijishijie = Math.floor(Math.random() * 100);
                                        if (suijishijie > 80) {
                                            if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                                var suijishu = Math.floor(Math.random() * 50);
                                                jiacheng = 50 - suijishu + 20;
                                                mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                                touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                                _this.guyuanjiazaitouxiang1(touxiang);
                                            }
                                        }
                                        _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                        _this.fandianguyuan.mingzi.text = mingzi;
                                        _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                        _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                        _this.fandianguyuan.but_zhaopin.enabled = false;
                                        _this.fandianguyuan.but_zhaopin.alpha = 0;
                                        _this.fandianguyuan.but_jiepin.enabled = false;
                                        _this.fandianguyuan.but_jiepin.alpha = 0;
                                        _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                        egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1700).call(function () {
                                            var npcbiao = RES.getRes("gukehanhuabiao_json");
                                            var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                            var mingzi = npcbiao[suijinpc].name;
                                            var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                            var jiacheng = Math.floor(Math.random() * 15) + 1;
                                            var suijishijie = Math.floor(Math.random() * 100);
                                            _this.guyuan2leixing = 1;
                                            if (suijishijie > 80) {
                                                if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                                    var suijishu = Math.floor(Math.random() * 50);
                                                    jiacheng = 50 - suijishu + 20;
                                                    mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                                    touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                                    _this.guyuan2leixing = 2;
                                                    _this.guyuanjiazaitouxiang1(touxiang);
                                                }
                                            }
                                            _this.guyuan2mingzi = mingzi;
                                            _this.guyuan2touxiang = touxiang;
                                            _this.guyuan2jiacheng = jiacheng;
                                            _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                            _this.fandianguyuan.mingzi.text = mingzi;
                                            _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                            _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                            _this.fandianguyuan.but_zhaopin.enabled = false;
                                            _this.fandianguyuan.but_zhaopin.alpha = 0;
                                            _this.fandianguyuan.but_jiepin.enabled = false;
                                            _this.fandianguyuan.but_jiepin.alpha = 0;
                                            _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                            egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1800).call(function () {
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][8] = _this.guyuan2leixing;
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][12] = _this.guyuan2mingzi;
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][13] = _this.guyuan2touxiang;
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][19] = _this.guyuan2jiacheng;
                                                Weblianjie.fasongshuju("code:101", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                                    + '"guyuanhao"' + ":" + '"2"' + ","
                                                    + '"guyuanleixing"' + ":" + '"' + _this.guyuan2leixing + '"' + ","
                                                    + '"guyuanmingzi"' + ":" + '"' + _this.guyuan2mingzi + '"' + ","
                                                    + '"guyuantouxiang"' + ":" + '"' + _this.guyuan2touxiang + '"' + ","
                                                    + '"dianpuid"' + ":" + '"' + _this.dangqianbushu + '"' + ","
                                                    + '"guyuanjiacheng"' + ":" + '"' + _this.guyuan2jiacheng + '"' + "}");
                                                _this.fandianjiemian.removeChild(_this.fandianguyuan);
                                                Gameguanli.Kongzhitai().dingbuui.removeChild(_this.fandianjiemian);
                                                _this.fandianbufen();
                                                _this.dianjiguyuan2();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    Dajiejiemian.prototype.zhaopinguyuan3 = function () {
        var _this = this;
        this.guyuan3leixing = 0;
        this.guyuan3mingzi = "0";
        this.guyuan3touxiang = "0";
        this.guyuan3jiacheng = 0;
        var npcbiao = RES.getRes("gukehanhuabiao_json");
        var suijinpc = Math.floor(Math.random() * npcbiao.length);
        var mingzi = npcbiao[suijinpc].name;
        var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
        var jiacheng = Math.floor(Math.random() * 15) + 1;
        var suijishijie = Math.floor(Math.random() * 100);
        if (suijishijie > 80) {
            if (Gerenshuxing.paihangbangshuju.length >= 60) {
                var suijishu = Math.floor(Math.random() * 50);
                jiacheng = 50 - suijishu + 20;
                mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                this.guyuanjiazaitouxiang1(touxiang);
            }
        }
        this.fandianguyuan.xitongtouxiang.source = touxiang;
        this.fandianguyuan.mingzi.text = mingzi;
        this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
        this.fandianguyuan.shuoming.text = "正在寻觅店员";
        this.fandianguyuan.but_zhaopin.enabled = false;
        this.fandianguyuan.but_zhaopin.alpha = 0;
        this.fandianguyuan.but_jiepin.enabled = false;
        this.fandianguyuan.but_jiepin.alpha = 0;
        this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.zhaopinguyuan1, this);
        egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(500).call(function () {
            var npcbiao = RES.getRes("gukehanhuabiao_json");
            var suijinpc = Math.floor(Math.random() * npcbiao.length);
            var mingzi = npcbiao[suijinpc].name;
            var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
            var jiacheng = Math.floor(Math.random() * 15) + 1;
            var suijishijie = Math.floor(Math.random() * 100);
            if (suijishijie > 80) {
                if (Gerenshuxing.paihangbangshuju.length >= 60) {
                    var suijishu = Math.floor(Math.random() * 50);
                    jiacheng = 50 - suijishu + 20;
                    mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                    touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                    _this.guyuanjiazaitouxiang1(touxiang);
                }
            }
            _this.fandianguyuan.xitongtouxiang.source = touxiang;
            _this.fandianguyuan.mingzi.text = mingzi;
            _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
            _this.fandianguyuan.shuoming.text = "正在寻觅店员";
            _this.fandianguyuan.but_zhaopin.enabled = false;
            _this.fandianguyuan.but_zhaopin.alpha = 0;
            _this.fandianguyuan.but_jiepin.enabled = false;
            _this.fandianguyuan.but_jiepin.alpha = 0;
            _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
            egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(800).call(function () {
                var npcbiao = RES.getRes("gukehanhuabiao_json");
                var suijinpc = Math.floor(Math.random() * npcbiao.length);
                var mingzi = npcbiao[suijinpc].name;
                var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                var jiacheng = Math.floor(Math.random() * 15) + 1;
                var suijishijie = Math.floor(Math.random() * 100);
                if (suijishijie > 80) {
                    if (Gerenshuxing.paihangbangshuju.length >= 60) {
                        var suijishu = Math.floor(Math.random() * 50);
                        jiacheng = 50 - suijishu + 20;
                        mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                        touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                        _this.guyuanjiazaitouxiang1(touxiang);
                    }
                }
                _this.fandianguyuan.xitongtouxiang.source = touxiang;
                _this.fandianguyuan.mingzi.text = mingzi;
                _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                _this.fandianguyuan.but_zhaopin.enabled = false;
                _this.fandianguyuan.but_zhaopin.alpha = 0;
                _this.fandianguyuan.but_jiepin.enabled = false;
                _this.fandianguyuan.but_jiepin.alpha = 0;
                _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1100).call(function () {
                    var npcbiao = RES.getRes("gukehanhuabiao_json");
                    var suijinpc = Math.floor(Math.random() * npcbiao.length);
                    var mingzi = npcbiao[suijinpc].name;
                    var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                    var jiacheng = Math.floor(Math.random() * 15) + 1;
                    var suijishijie = Math.floor(Math.random() * 100);
                    if (suijishijie > 80) {
                        if (Gerenshuxing.paihangbangshuju.length >= 60) {
                            var suijishu = Math.floor(Math.random() * 50);
                            jiacheng = 50 - suijishu + 20;
                            mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                            touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                            _this.guyuanjiazaitouxiang1(touxiang);
                        }
                    }
                    _this.fandianguyuan.xitongtouxiang.source = touxiang;
                    _this.fandianguyuan.mingzi.text = mingzi;
                    _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                    _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                    _this.fandianguyuan.but_zhaopin.enabled = false;
                    _this.fandianguyuan.but_zhaopin.alpha = 0;
                    _this.fandianguyuan.but_jiepin.enabled = false;
                    _this.fandianguyuan.but_jiepin.alpha = 0;
                    _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                    egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1200).call(function () {
                        var npcbiao = RES.getRes("gukehanhuabiao_json");
                        var suijinpc = Math.floor(Math.random() * npcbiao.length);
                        var mingzi = npcbiao[suijinpc].name;
                        var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                        var jiacheng = Math.floor(Math.random() * 15) + 1;
                        var suijishijie = Math.floor(Math.random() * 100);
                        if (suijishijie > 80) {
                            if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                var suijishu = Math.floor(Math.random() * 50);
                                jiacheng = 50 - suijishu + 20;
                                mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                _this.guyuanjiazaitouxiang1(touxiang);
                            }
                        }
                        _this.fandianguyuan.xitongtouxiang.source = touxiang;
                        _this.fandianguyuan.mingzi.text = mingzi;
                        _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                        _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                        _this.fandianguyuan.but_zhaopin.enabled = false;
                        _this.fandianguyuan.but_zhaopin.alpha = 0;
                        _this.fandianguyuan.but_jiepin.enabled = false;
                        _this.fandianguyuan.but_jiepin.alpha = 0;
                        _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                        egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1300).call(function () {
                            var npcbiao = RES.getRes("gukehanhuabiao_json");
                            var suijinpc = Math.floor(Math.random() * npcbiao.length);
                            var mingzi = npcbiao[suijinpc].name;
                            var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                            var jiacheng = Math.floor(Math.random() * 15) + 1;
                            var suijishijie = Math.floor(Math.random() * 100);
                            if (suijishijie > 80) {
                                if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                    var suijishu = Math.floor(Math.random() * 50);
                                    jiacheng = 50 - suijishu + 20;
                                    mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                    touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                    _this.guyuanjiazaitouxiang1(touxiang);
                                }
                            }
                            _this.fandianguyuan.xitongtouxiang.source = touxiang;
                            _this.fandianguyuan.mingzi.text = mingzi;
                            _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                            _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                            _this.fandianguyuan.but_zhaopin.enabled = false;
                            _this.fandianguyuan.but_zhaopin.alpha = 0;
                            _this.fandianguyuan.but_jiepin.enabled = false;
                            _this.fandianguyuan.but_jiepin.alpha = 0;
                            _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                            egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1400).call(function () {
                                var npcbiao = RES.getRes("gukehanhuabiao_json");
                                var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                var mingzi = npcbiao[suijinpc].name;
                                var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                var jiacheng = Math.floor(Math.random() * 15) + 1;
                                var suijishijie = Math.floor(Math.random() * 100);
                                if (suijishijie > 80) {
                                    if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                        var suijishu = Math.floor(Math.random() * 50);
                                        jiacheng = 50 - suijishu + 20;
                                        mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                        touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                        _this.guyuanjiazaitouxiang1(touxiang);
                                    }
                                }
                                _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                _this.fandianguyuan.mingzi.text = mingzi;
                                _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                _this.fandianguyuan.but_zhaopin.enabled = false;
                                _this.fandianguyuan.but_zhaopin.alpha = 0;
                                _this.fandianguyuan.but_jiepin.enabled = false;
                                _this.fandianguyuan.but_jiepin.alpha = 0;
                                _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1500).call(function () {
                                    var npcbiao = RES.getRes("gukehanhuabiao_json");
                                    var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                    var mingzi = npcbiao[suijinpc].name;
                                    var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                    var jiacheng = Math.floor(Math.random() * 15) + 1;
                                    var suijishijie = Math.floor(Math.random() * 100);
                                    if (suijishijie > 80) {
                                        if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                            var suijishu = Math.floor(Math.random() * 50);
                                            jiacheng = 50 - suijishu + 20;
                                            mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                            touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                            _this.guyuanjiazaitouxiang1(touxiang);
                                        }
                                    }
                                    _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                    _this.fandianguyuan.mingzi.text = mingzi;
                                    _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                    _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                    _this.fandianguyuan.but_zhaopin.enabled = false;
                                    _this.fandianguyuan.but_zhaopin.alpha = 0;
                                    _this.fandianguyuan.but_jiepin.enabled = false;
                                    _this.fandianguyuan.but_jiepin.alpha = 0;
                                    _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                    egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1600).call(function () {
                                        var npcbiao = RES.getRes("gukehanhuabiao_json");
                                        var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                        var mingzi = npcbiao[suijinpc].name;
                                        var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                        var jiacheng = Math.floor(Math.random() * 15) + 1;
                                        var suijishijie = Math.floor(Math.random() * 100);
                                        if (suijishijie > 80) {
                                            if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                                var suijishu = Math.floor(Math.random() * 50);
                                                jiacheng = 50 - suijishu + 20;
                                                mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                                touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                                _this.guyuanjiazaitouxiang1(touxiang);
                                            }
                                        }
                                        _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                        _this.fandianguyuan.mingzi.text = mingzi;
                                        _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                        _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                        _this.fandianguyuan.but_zhaopin.enabled = false;
                                        _this.fandianguyuan.but_zhaopin.alpha = 0;
                                        _this.fandianguyuan.but_jiepin.enabled = false;
                                        _this.fandianguyuan.but_jiepin.alpha = 0;
                                        _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                        egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1700).call(function () {
                                            var npcbiao = RES.getRes("gukehanhuabiao_json");
                                            var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                            var mingzi = npcbiao[suijinpc].name;
                                            var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                            var jiacheng = Math.floor(Math.random() * 15) + 1;
                                            var suijishijie = Math.floor(Math.random() * 100);
                                            _this.guyuan3leixing = 1;
                                            if (suijishijie > 80) {
                                                if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                                    var suijishu = Math.floor(Math.random() * 50);
                                                    jiacheng = 50 - suijishu + 20;
                                                    mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                                    touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                                    _this.guyuan3leixing = 2;
                                                    _this.guyuanjiazaitouxiang1(touxiang);
                                                }
                                            }
                                            _this.guyuan3mingzi = mingzi;
                                            _this.guyuan3touxiang = touxiang;
                                            _this.guyuan3jiacheng = jiacheng;
                                            _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                            _this.fandianguyuan.mingzi.text = mingzi;
                                            _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                            _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                            _this.fandianguyuan.but_zhaopin.enabled = false;
                                            _this.fandianguyuan.but_zhaopin.alpha = 0;
                                            _this.fandianguyuan.but_jiepin.enabled = false;
                                            _this.fandianguyuan.but_jiepin.alpha = 0;
                                            _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                            egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1800).call(function () {
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][9] = _this.guyuan3leixing;
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][14] = _this.guyuan3mingzi;
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][15] = _this.guyuan3touxiang;
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][20] = _this.guyuan3jiacheng;
                                                Weblianjie.fasongshuju("code:101", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                                    + '"guyuanhao"' + ":" + '"3"' + ","
                                                    + '"guyuanleixing"' + ":" + '"' + _this.guyuan3leixing + '"' + ","
                                                    + '"guyuanmingzi"' + ":" + '"' + _this.guyuan3mingzi + '"' + ","
                                                    + '"guyuantouxiang"' + ":" + '"' + _this.guyuan3touxiang + '"' + ","
                                                    + '"dianpuid"' + ":" + '"' + _this.dangqianbushu + '"' + ","
                                                    + '"guyuanjiacheng"' + ":" + '"' + _this.guyuan3jiacheng + '"' + "}");
                                                _this.fandianjiemian.removeChild(_this.fandianguyuan);
                                                Gameguanli.Kongzhitai().dingbuui.removeChild(_this.fandianjiemian);
                                                _this.fandianbufen();
                                                _this.dianjiguyuan3();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    Dajiejiemian.prototype.zhaopinguyuan1 = function () {
        var _this = this;
        this.guyuan1leixing = 0;
        this.guyuan1mingzi = "0";
        this.guyuan1touxiang = "0";
        this.guyuan1jiacheng = 0;
        var npcbiao = RES.getRes("gukehanhuabiao_json");
        var suijinpc = Math.floor(Math.random() * npcbiao.length);
        var mingzi = npcbiao[suijinpc].name;
        var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
        var jiacheng = Math.floor(Math.random() * 15) + 1;
        var suijishijie = Math.floor(Math.random() * 100);
        if (suijishijie > 80) {
            if (Gerenshuxing.paihangbangshuju.length >= 60) {
                var suijishu = Math.floor(Math.random() * 50);
                jiacheng = 50 - suijishu + 20;
                mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                this.guyuanjiazaitouxiang1(touxiang);
            }
        }
        this.fandianguyuan.xitongtouxiang.source = touxiang;
        this.fandianguyuan.mingzi.text = mingzi;
        this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
        this.fandianguyuan.shuoming.text = "正在寻觅店员";
        this.fandianguyuan.but_zhaopin.enabled = false;
        this.fandianguyuan.but_zhaopin.alpha = 0;
        this.fandianguyuan.but_jiepin.enabled = false;
        this.fandianguyuan.but_jiepin.alpha = 0;
        this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.zhaopinguyuan1, this);
        egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(500).call(function () {
            var npcbiao = RES.getRes("gukehanhuabiao_json");
            var suijinpc = Math.floor(Math.random() * npcbiao.length);
            var mingzi = npcbiao[suijinpc].name;
            var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
            var jiacheng = Math.floor(Math.random() * 15) + 1;
            var suijishijie = Math.floor(Math.random() * 100);
            if (suijishijie > 80) {
                if (Gerenshuxing.paihangbangshuju.length >= 60) {
                    var suijishu = Math.floor(Math.random() * 50);
                    jiacheng = 50 - suijishu + 20;
                    mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                    touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                    _this.guyuanjiazaitouxiang1(touxiang);
                }
            }
            _this.fandianguyuan.xitongtouxiang.source = touxiang;
            _this.fandianguyuan.mingzi.text = mingzi;
            _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
            _this.fandianguyuan.shuoming.text = "正在寻觅店员";
            _this.fandianguyuan.but_zhaopin.enabled = false;
            _this.fandianguyuan.but_zhaopin.alpha = 0;
            _this.fandianguyuan.but_jiepin.enabled = false;
            _this.fandianguyuan.but_jiepin.alpha = 0;
            _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
            egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(800).call(function () {
                var npcbiao = RES.getRes("gukehanhuabiao_json");
                var suijinpc = Math.floor(Math.random() * npcbiao.length);
                var mingzi = npcbiao[suijinpc].name;
                var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                var jiacheng = Math.floor(Math.random() * 15) + 1;
                var suijishijie = Math.floor(Math.random() * 100);
                if (suijishijie > 80) {
                    if (Gerenshuxing.paihangbangshuju.length >= 60) {
                        var suijishu = Math.floor(Math.random() * 50);
                        jiacheng = 50 - suijishu + 20;
                        mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                        touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                        _this.guyuanjiazaitouxiang1(touxiang);
                    }
                }
                _this.fandianguyuan.xitongtouxiang.source = touxiang;
                _this.fandianguyuan.mingzi.text = mingzi;
                _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                _this.fandianguyuan.but_zhaopin.enabled = false;
                _this.fandianguyuan.but_zhaopin.alpha = 0;
                _this.fandianguyuan.but_jiepin.enabled = false;
                _this.fandianguyuan.but_jiepin.alpha = 0;
                _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1100).call(function () {
                    var npcbiao = RES.getRes("gukehanhuabiao_json");
                    var suijinpc = Math.floor(Math.random() * npcbiao.length);
                    var mingzi = npcbiao[suijinpc].name;
                    var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                    var jiacheng = Math.floor(Math.random() * 15) + 1;
                    var suijishijie = Math.floor(Math.random() * 100);
                    if (suijishijie > 80) {
                        if (Gerenshuxing.paihangbangshuju.length >= 60) {
                            var suijishu = Math.floor(Math.random() * 50);
                            jiacheng = 50 - suijishu + 20;
                            mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                            touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                            _this.guyuanjiazaitouxiang1(touxiang);
                        }
                    }
                    _this.fandianguyuan.xitongtouxiang.source = touxiang;
                    _this.fandianguyuan.mingzi.text = mingzi;
                    _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                    _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                    _this.fandianguyuan.but_zhaopin.enabled = false;
                    _this.fandianguyuan.but_zhaopin.alpha = 0;
                    _this.fandianguyuan.but_jiepin.enabled = false;
                    _this.fandianguyuan.but_jiepin.alpha = 0;
                    _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                    egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1200).call(function () {
                        var npcbiao = RES.getRes("gukehanhuabiao_json");
                        var suijinpc = Math.floor(Math.random() * npcbiao.length);
                        var mingzi = npcbiao[suijinpc].name;
                        var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                        var jiacheng = Math.floor(Math.random() * 15) + 1;
                        var suijishijie = Math.floor(Math.random() * 100);
                        if (suijishijie > 80) {
                            if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                var suijishu = Math.floor(Math.random() * 50);
                                jiacheng = 50 - suijishu + 20;
                                mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                _this.guyuanjiazaitouxiang1(touxiang);
                            }
                        }
                        _this.fandianguyuan.xitongtouxiang.source = touxiang;
                        _this.fandianguyuan.mingzi.text = mingzi;
                        _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                        _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                        _this.fandianguyuan.but_zhaopin.enabled = false;
                        _this.fandianguyuan.but_zhaopin.alpha = 0;
                        _this.fandianguyuan.but_jiepin.enabled = false;
                        _this.fandianguyuan.but_jiepin.alpha = 0;
                        _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                        egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1300).call(function () {
                            var npcbiao = RES.getRes("gukehanhuabiao_json");
                            var suijinpc = Math.floor(Math.random() * npcbiao.length);
                            var mingzi = npcbiao[suijinpc].name;
                            var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                            var jiacheng = Math.floor(Math.random() * 15) + 1;
                            var suijishijie = Math.floor(Math.random() * 100);
                            if (suijishijie > 80) {
                                if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                    var suijishu = Math.floor(Math.random() * 50);
                                    jiacheng = 50 - suijishu + 20;
                                    mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                    touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                    _this.guyuanjiazaitouxiang1(touxiang);
                                }
                            }
                            _this.fandianguyuan.xitongtouxiang.source = touxiang;
                            _this.fandianguyuan.mingzi.text = mingzi;
                            _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                            _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                            _this.fandianguyuan.but_zhaopin.enabled = false;
                            _this.fandianguyuan.but_zhaopin.alpha = 0;
                            _this.fandianguyuan.but_jiepin.enabled = false;
                            _this.fandianguyuan.but_jiepin.alpha = 0;
                            _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                            egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1400).call(function () {
                                var npcbiao = RES.getRes("gukehanhuabiao_json");
                                var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                var mingzi = npcbiao[suijinpc].name;
                                var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                var jiacheng = Math.floor(Math.random() * 15) + 1;
                                var suijishijie = Math.floor(Math.random() * 100);
                                if (suijishijie > 80) {
                                    if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                        var suijishu = Math.floor(Math.random() * 50);
                                        jiacheng = 50 - suijishu + 20;
                                        mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                        touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                        _this.guyuanjiazaitouxiang1(touxiang);
                                    }
                                }
                                _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                _this.fandianguyuan.mingzi.text = mingzi;
                                _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                _this.fandianguyuan.but_zhaopin.enabled = false;
                                _this.fandianguyuan.but_zhaopin.alpha = 0;
                                _this.fandianguyuan.but_jiepin.enabled = false;
                                _this.fandianguyuan.but_jiepin.alpha = 0;
                                _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1500).call(function () {
                                    var npcbiao = RES.getRes("gukehanhuabiao_json");
                                    var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                    var mingzi = npcbiao[suijinpc].name;
                                    var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                    var jiacheng = Math.floor(Math.random() * 15) + 1;
                                    var suijishijie = Math.floor(Math.random() * 100);
                                    if (suijishijie > 80) {
                                        if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                            var suijishu = Math.floor(Math.random() * 50);
                                            jiacheng = 50 - suijishu + 20;
                                            mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                            touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                            _this.guyuanjiazaitouxiang1(touxiang);
                                        }
                                    }
                                    _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                    _this.fandianguyuan.mingzi.text = mingzi;
                                    _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                    _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                    _this.fandianguyuan.but_zhaopin.enabled = false;
                                    _this.fandianguyuan.but_zhaopin.alpha = 0;
                                    _this.fandianguyuan.but_jiepin.enabled = false;
                                    _this.fandianguyuan.but_jiepin.alpha = 0;
                                    _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                    egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1600).call(function () {
                                        var npcbiao = RES.getRes("gukehanhuabiao_json");
                                        var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                        var mingzi = npcbiao[suijinpc].name;
                                        var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                        var jiacheng = Math.floor(Math.random() * 15) + 1;
                                        var suijishijie = Math.floor(Math.random() * 100);
                                        if (suijishijie > 80) {
                                            if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                                var suijishu = Math.floor(Math.random() * 50);
                                                jiacheng = 50 - suijishu + 20;
                                                mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                                touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                                _this.guyuanjiazaitouxiang1(touxiang);
                                            }
                                        }
                                        _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                        _this.fandianguyuan.mingzi.text = mingzi;
                                        _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                        _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                        _this.fandianguyuan.but_zhaopin.enabled = false;
                                        _this.fandianguyuan.but_zhaopin.alpha = 0;
                                        _this.fandianguyuan.but_jiepin.enabled = false;
                                        _this.fandianguyuan.but_jiepin.alpha = 0;
                                        _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                        egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1700).call(function () {
                                            var npcbiao = RES.getRes("gukehanhuabiao_json");
                                            var suijinpc = Math.floor(Math.random() * npcbiao.length);
                                            var mingzi = npcbiao[suijinpc].name;
                                            var touxiang = npcbiao[suijinpc].gktouxiang + "_png";
                                            var jiacheng = Math.floor(Math.random() * 15) + 1;
                                            var suijishijie = Math.floor(Math.random() * 100);
                                            _this.guyuan1leixing = 1;
                                            if (suijishijie > 80) {
                                                if (Gerenshuxing.paihangbangshuju.length >= 60) {
                                                    var suijishu = Math.floor(Math.random() * 50);
                                                    jiacheng = 50 - suijishu + 20;
                                                    mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
                                                    touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
                                                    _this.guyuan1leixing = 2;
                                                    _this.guyuanjiazaitouxiang1(touxiang);
                                                }
                                            }
                                            _this.guyuan1mingzi = mingzi;
                                            _this.guyuan1touxiang = touxiang;
                                            _this.guyuan1jiacheng = jiacheng;
                                            _this.fandianguyuan.xitongtouxiang.source = touxiang;
                                            _this.fandianguyuan.mingzi.text = mingzi;
                                            _this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
                                            _this.fandianguyuan.shuoming.text = "正在寻觅店员";
                                            _this.fandianguyuan.but_zhaopin.enabled = false;
                                            _this.fandianguyuan.but_zhaopin.alpha = 0;
                                            _this.fandianguyuan.but_jiepin.enabled = false;
                                            _this.fandianguyuan.but_jiepin.alpha = 0;
                                            _this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.zhaopinguyuan1, _this);
                                            egret.Tween.get(_this.fandianguyuan.xitongtouxiang).wait(1800).call(function () {
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][7] = _this.guyuan1leixing;
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][10] = _this.guyuan1mingzi;
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][11] = _this.guyuan1touxiang;
                                                Gerencaipudengji.jiedaoshuju[_this.dangqianbushu][18] = _this.guyuan1jiacheng;
                                                Weblianjie.fasongshuju("code:101", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
                                                    + '"guyuanhao"' + ":" + '"1"' + ","
                                                    + '"guyuanleixing"' + ":" + '"' + _this.guyuan1leixing + '"' + ","
                                                    + '"guyuanmingzi"' + ":" + '"' + _this.guyuan1mingzi + '"' + ","
                                                    + '"guyuantouxiang"' + ":" + '"' + _this.guyuan1touxiang + '"' + ","
                                                    + '"dianpuid"' + ":" + '"' + _this.dangqianbushu + '"' + ","
                                                    + '"guyuanjiacheng"' + ":" + '"' + _this.guyuan1jiacheng + '"' + "}");
                                                _this.fandianjiemian.removeChild(_this.fandianguyuan);
                                                Gameguanli.Kongzhitai().dingbuui.removeChild(_this.fandianjiemian);
                                                _this.fandianbufen();
                                                _this.dianjiguyuan1();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    Dajiejiemian.prototype.jiepinguyuan1 = function () {
        this.guyuan1leixing = 0;
        this.guyuan1mingzi = "0";
        this.guyuan1touxiang = "0";
        this.guyuan1jiacheng = 0;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][7] = this.guyuan1leixing;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][10] = this.guyuan1mingzi;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][11] = this.guyuan1touxiang;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][18] = this.guyuan1jiacheng;
        Weblianjie.fasongshuju("code:101", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"guyuanhao"' + ":" + '"1"' + ","
            + '"guyuanleixing"' + ":" + '"' + this.guyuan1leixing + '"' + ","
            + '"guyuanmingzi"' + ":" + '"' + this.guyuan1mingzi + '"' + ","
            + '"guyuantouxiang"' + ":" + '"' + this.guyuan1touxiang + '"' + ","
            + '"dianpuid"' + ":" + '"' + this.dangqianbushu + '"' + ","
            + '"guyuanjiacheng"' + ":" + '"' + this.guyuan1jiacheng + '"' + "}");
        this.fandianjiemian.removeChild(this.fandianguyuan);
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
        this.fandianbufen();
        this.dianjiguyuan1();
    };
    Dajiejiemian.prototype.jiepinguyuan2 = function () {
        this.guyuan2leixing = 0;
        this.guyuan2mingzi = "0";
        this.guyuan2touxiang = "0";
        this.guyuan2jiacheng = 0;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][8] = this.guyuan2leixing;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][12] = this.guyuan2mingzi;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][13] = this.guyuan2touxiang;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][19] = this.guyuan2jiacheng;
        Weblianjie.fasongshuju("code:101", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"guyuanhao"' + ":" + '"2"' + ","
            + '"guyuanleixing"' + ":" + '"' + this.guyuan2leixing + '"' + ","
            + '"guyuanmingzi"' + ":" + '"' + this.guyuan2mingzi + '"' + ","
            + '"guyuantouxiang"' + ":" + '"' + this.guyuan2touxiang + '"' + ","
            + '"dianpuid"' + ":" + '"' + this.dangqianbushu + '"' + ","
            + '"guyuanjiacheng"' + ":" + '"' + this.guyuan2jiacheng + '"' + "}");
        this.fandianjiemian.removeChild(this.fandianguyuan);
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
        this.fandianbufen();
        this.dianjiguyuan2();
    };
    Dajiejiemian.prototype.jiepinguyuan3 = function () {
        this.guyuan3leixing = 0;
        this.guyuan3mingzi = "0";
        this.guyuan3touxiang = "0";
        this.guyuan3jiacheng = 0;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][9] = this.guyuan3leixing;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][14] = this.guyuan3mingzi;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][15] = this.guyuan3touxiang;
        Gerencaipudengji.jiedaoshuju[this.dangqianbushu][20] = this.guyuan3jiacheng;
        Weblianjie.fasongshuju("code:101", "{" + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + ","
            + '"guyuanhao"' + ":" + '"3"' + ","
            + '"guyuanleixing"' + ":" + '"' + this.guyuan3leixing + '"' + ","
            + '"guyuanmingzi"' + ":" + '"' + this.guyuan3mingzi + '"' + ","
            + '"guyuantouxiang"' + ":" + '"' + this.guyuan3touxiang + '"' + ","
            + '"dianpuid"' + ":" + '"' + this.dangqianbushu + '"' + ","
            + '"guyuanjiacheng"' + ":" + '"' + this.guyuan3jiacheng + '"' + "}");
        this.fandianjiemian.removeChild(this.fandianguyuan);
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
        this.fandianbufen();
        this.dianjiguyuan3();
    };
    Dajiejiemian.prototype.guanbiguyuan = function () {
        this.fandianjiemian.removeChild(this.fandianguyuan);
    };
    Dajiejiemian.prototype.jiazaiguyuan1touxiangsj = function (youxiangurl) {
        var imgLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        imgLoader.load(youxiangurl);
        imgLoader.once(egret.Event.COMPLETE, this.xianshiguyuan1touxiangsj, this);
    };
    Dajiejiemian.prototype.xianshiguyuan1touxiangsj = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.fandianjiemian.guyuantxgroup1.width;
            head.height = this.fandianjiemian.guyuantxgroup1.height;
            this.fandianjiemian.guyuantxgroup1.addChild(head);
        }
    };
    Dajiejiemian.prototype.guyuanjiazaitouxiang1 = function (youxiangurl) {
        var imgLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        imgLoader.load(youxiangurl);
        imgLoader.once(egret.Event.COMPLETE, this.xianshiguyuanzutouxiang1, this);
    };
    Dajiejiemian.prototype.xianshiguyuanzutouxiang1 = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.fandianguyuan.touxiangzu.width;
            head.height = this.fandianguyuan.touxiangzu.height;
            this.fandianguyuan.touxiangzu.addChild(head);
        }
    };
    Dajiejiemian.prototype.jiazaiguyuan2touxiangsj = function (youxiangurl) {
        var imgLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        imgLoader.load(youxiangurl);
        imgLoader.once(egret.Event.COMPLETE, this.xianshiguyuan2touxiangsj, this);
    };
    Dajiejiemian.prototype.xianshiguyuan2touxiangsj = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.fandianjiemian.guyuantxgroup2.width;
            head.height = this.fandianjiemian.guyuantxgroup2.height;
            this.fandianjiemian.guyuantxgroup2.addChild(head);
        }
    };
    Dajiejiemian.prototype.jiazaiguyuan3touxiangsj = function (youxiangurl) {
        var imgLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        imgLoader.load(youxiangurl);
        imgLoader.once(egret.Event.COMPLETE, this.xianshiguyuan3touxiangsj, this);
    };
    Dajiejiemian.prototype.xianshiguyuan3touxiangsj = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.fandianjiemian.guyuantxgroup3.width;
            head.height = this.fandianjiemian.guyuantxgroup3.height;
            this.fandianjiemian.guyuantxgroup3.addChild(head);
        }
    };
    Dajiejiemian.prototype.huoquzijitouxiang = function (youxiangurl) {
        var imgLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        imgLoader.load(youxiangurl);
        imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
    };
    Dajiejiemian.prototype.xianshigerentouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.fandianjiemian.dianzutxgroup.width;
            head.height = this.fandianjiemian.dianzutxgroup.height;
            this.fandianjiemian.dianzutxgroup.addChild(head);
        }
    };
    Dajiejiemian.prototype.youbiaotouxiang = function () {
        var youbiaoLoader = new egret.ImageLoader;
        /*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
            imgLoader.load(Gerenshuxing.touxiang);
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }else{
            imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
            imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
        }*/
        youbiaoLoader.load(Gerenshuxing.touxiang);
        youbiaoLoader.once(egret.Event.COMPLETE, this.youbiaoxianshitouxiang, this);
    };
    Dajiejiemian.prototype.youbiaoxianshitouxiang = function (evt) {
        if (evt.currentTarget.data) {
            //			egret.log("加载头像成功: " + evt.currentTarget.data);
            var texture = new egret.Texture();
            texture.bitmapData = evt.currentTarget.data;
            var head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.youbiaotouxiangzu.width;
            head.height = this.youbiaotouxiangzu.height;
            this.youbiaotouxiangzu.addChild(head);
        }
    };
    Dajiejiemian.prototype.xiaofeidianji = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
        this.suijijiemian = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
        this.suijijiemian.but_queding0.enabled = false;
        this.suijijiemian.but_queding0.alpha = 0;
        this.suijijiemian.but_queding.enabled = true;
        this.suijijiemian.but_queding.alpha = 1;
        this.suijijiemian.but_shuangbei.enabled = true;
        this.suijijiemian.but_shuangbei.alpha = 1;
        var shengchengcaipin = [];
        switch (this.jiedaopeizhi.type) {
            case "1":
                for (var a = 0; a < Gerenshuxing.jiesuocaipin.length; a++) {
                    if (parseInt(Gerenshuxing.jiesuocaipin[a]) >= 1000 && parseInt(Gerenshuxing.jiesuocaipin[a]) < 2000) {
                        shengchengcaipin.push(Gerenshuxing.jiesuocaipin[a]);
                    }
                }
                break;
            case "2":
                for (var a = 0; a < Gerenshuxing.jiesuocaipin.length; a++) {
                    if (parseInt(Gerenshuxing.jiesuocaipin[a]) >= 2000 && parseInt(Gerenshuxing.jiesuocaipin[a]) < 3000) {
                        shengchengcaipin.push(Gerenshuxing.jiesuocaipin[a]);
                    }
                }
                break;
            case "3":
                for (var a = 0; a < Gerenshuxing.jiesuocaipin.length; a++) {
                    if (parseInt(Gerenshuxing.jiesuocaipin[a]) >= 3000 && parseInt(Gerenshuxing.jiesuocaipin[a]) < 4000) {
                        shengchengcaipin.push(Gerenshuxing.jiesuocaipin[a]);
                    }
                }
                break;
            case "4":
                for (var a = 0; a < Gerenshuxing.jiesuocaipin.length; a++) {
                    if (parseInt(Gerenshuxing.jiesuocaipin[a]) >= 4000 && parseInt(Gerenshuxing.jiesuocaipin[a]) < 5000) {
                        shengchengcaipin.push(Gerenshuxing.jiesuocaipin[a]);
                    }
                }
                break;
        }
        var suijixiabiao = Math.floor(Math.random() * shengchengcaipin.length);
        this.jianglileixing = shengchengcaipin[suijixiabiao];
        this.kouchuleixing = "1";
        this.kouchushuliang = this.fandianpeizhi[2];
        var jianglijignyan = Math.floor(Math.random() * 100) + 50;
        this.jianglishuliang = jianglijignyan;
        this.suijijiemian.tishiwenzi.text = "你品尝了一道美味佳肴，似乎与自己所掌握的烹饪手艺不同，大受启发！";
        this.kouchutubiaopanduan(this.kouchuleixing, this.kouchushuliang);
        this.jianglitubiaopanduan(this.jianglileixing, this.jianglishuliang);
        this.suijijiemian.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.suijiqueding, this);
        this.suijijiemian.but_shuangbei.addEventListener(egret.TouchEvent.TOUCH_TAP, this.suijishuangbei, this);
    };
    Dajiejiemian.prototype.shouyindianji = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
        this.suijijiemian = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
        this.suijijiemian.but_queding0.enabled = true;
        this.suijijiemian.but_queding0.alpha = 1;
        this.suijijiemian.but_queding.enabled = false;
        this.suijijiemian.but_queding.alpha = 0;
        this.suijijiemian.but_shuangbei.enabled = false;
        this.suijijiemian.but_shuangbei.alpha = 0;
        this.suijijiemian.jiangli2.text = "";
        this.suijijiemian.jiangli1.text = "+ " + this.fandianpeizhi[5];
        this.suijijiemian.jiangliicon1.source = "img_qian_png";
        this.suijijiemian.jiangliicon2.source = "";
        this.suijijiemian.tishiwenzi.text = "您离开店铺的这段时间，店铺的营业额为：" + this.fandianpeizhi[5] + "。\n现在为您全部取出。";
        this.suijijiemian.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.quedingquqian, this);
    };
    Dajiejiemian.prototype.quedingquqian = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
        this.jianglijiemian = new Jianglijiesuanui();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
        this.fasongjiezhang();
        this.jianglijiemian.jiangliicon.source = "img_qian_png";
        this.jianglijiemian.jianglishuliang.text = "+ " + this.fandianpeizhi[5];
        this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
    };
    Dajiejiemian.prototype.fasongjiezhang = function () {
        Weblianjie.fasongshuju("code:046", "{" + '"dianpuid"' + ":" + '"' + this.dangqianbushu + '"' + ","
            + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Dajiejiemian.prototype.shougou = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
        this.suijijiemian = new Tongyongquerenkuang();
        Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
        this.keyishougou = false;
        var zhangwoleixing;
        var yizhangwo = [];
        switch (this.jiedaopeizhi.type) {
            case "1":
                zhangwoleixing = "小炒";
                for (var b = 0; b < Gerenshuxing.jiesuocaipin.length; b++) {
                    if (parseInt(Gerenshuxing.jiesuocaipin[b]) >= 1000 && parseInt(Gerenshuxing.jiesuocaipin[b]) < 2000) {
                        yizhangwo.push(Gerenshuxing.jiesuocaipin[b]);
                    }
                }
                break;
            case "2":
                zhangwoleixing = "火锅";
                for (var b = 0; b < Gerenshuxing.jiesuocaipin.length; b++) {
                    if (parseInt(Gerenshuxing.jiesuocaipin[b]) >= 2000 && parseInt(Gerenshuxing.jiesuocaipin[b]) < 3000) {
                        yizhangwo.push(Gerenshuxing.jiesuocaipin[b]);
                    }
                }
                break;
            case "3":
                zhangwoleixing = "小吃";
                for (var b = 0; b < Gerenshuxing.jiesuocaipin.length; b++) {
                    if (parseInt(Gerenshuxing.jiesuocaipin[b]) >= 3000 && parseInt(Gerenshuxing.jiesuocaipin[b]) < 4000) {
                        yizhangwo.push(Gerenshuxing.jiesuocaipin[b]);
                    }
                }
                break;
            case "4":
                zhangwoleixing = "早餐";
                for (var b = 0; b < Gerenshuxing.jiesuocaipin.length; b++) {
                    if (parseInt(Gerenshuxing.jiesuocaipin[b]) >= 4000 && parseInt(Gerenshuxing.jiesuocaipin[b]) < 5000) {
                        yizhangwo.push(Gerenshuxing.jiesuocaipin[b]);
                    }
                }
                break;
        }
        this.suijijiemian.tishiwenzi.text = "收购[" + this.jiedaopeizhi.name + "]作为自己的经验饭馆，需满足以下条件:" + " \n " + "1.掌握的“" + zhangwoleixing + "”菜品种类达到：" + yizhangwo.length + "/"
            + this.jiedaopeizhi.xuyaoshuliang + "种。" + "\n" + "2.拥有的钱币数量大于等于店铺每月租金:" + Gerenshuxing.jinbizhi + "/" + this.fandianpeizhi[1] + "。";
        this.suijijiemian.but_queding0.enabled = true;
        this.suijijiemian.but_queding0.alpha = 1;
        this.suijijiemian.but_queding.enabled = false;
        this.suijijiemian.but_queding.alpha = 0;
        this.suijijiemian.but_shuangbei.enabled = false;
        this.suijijiemian.but_shuangbei.alpha = 0;
        this.suijijiemian.jiangli2.text = "";
        this.suijijiemian.jiangli1.text = "";
        this.suijijiemian.jiangliicon1.source = "";
        this.suijijiemian.jiangliicon2.source = "";
        if (yizhangwo.length >= parseInt(this.jiedaopeizhi.xuyaoshuliang) && Gerenshuxing.jinbizhi >= this.fandianpeizhi[1]) {
            this.keyishougou = true;
        }
        this.suijijiemian.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.quedingshougou, this);
    };
    Dajiejiemian.prototype.quedingshougou = function () {
        if (this.keyishougou == true) {
            Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
            Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，成功收购[" + this.jiedaopeizhi.name + "]！饭店经营为30天！");
            Gameguanli.Kongzhitai().paomadengui("恭喜“" + Gerenshuxing.mingzi + "”成功收购[" + this.jiedaopeizhi.name + "]！期待饭店生意红红火火！");
            Weblianjie.fasongshuju("code:043", "{" + '"dianpuid"' + ":" + '"' + this.dangqianbushu + '"' + ","
                + '"shougoufeiyong"' + ":" + '"' + this.fandianpeizhi[1] + '"' + ","
                + '"shougouqixian"' + ":" + "30" + ","
                + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
        }
        else {
            Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
            Gameguanli.Kongzhitai().cuowutishixinxi("很遗憾，您目前还不满足[" + this.jiedaopeizhi.name + "]的收购条件！");
        }
    };
    Dajiejiemian.prototype.chufadianpu1 = function () {
        if (this.jiedaopeizhi.suijiliebiao == "0") {
            this.but_shaizi.enabled = true;
            this.fandianbufen();
        }
        else {
            this.suijichufaliebiao = this.jiedaopeizhi.suijiliebiao.split(",");
            var suijishu = Math.floor(Math.random() * this.suijichufaliebiao.length);
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
            this.suijijiemian.but_queding0.enabled = false;
            this.suijijiemian.but_queding0.alpha = 0;
            this.suijijiemian.but_queding.enabled = true;
            this.suijijiemian.but_queding.alpha = 1;
            this.suijijiemian.but_shuangbei.enabled = true;
            this.suijijiemian.but_shuangbei.alpha = 1;
            this.kouchutubiaopanduan(this.kouchuleixing, this.kouchushuliang);
            this.jianglitubiaopanduan(this.jianglileixing, this.jianglishuliang);
            this.suijijiemian.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.suijiqueding, this);
            this.suijijiemian.but_shuangbei.addEventListener(egret.TouchEvent.TOUCH_TAP, this.suijishuangbei, this);
        }
    };
    Dajiejiemian.prototype.jianglitubiaopanduan = function (leixing, shuliang) {
        switch (leixing) {
            case "0":
                this.suijijiemian.jiangliicon1.source = "";
                this.suijijiemian.jiangli1.text = "";
                break;
            case "1":
                this.suijijiemian.jiangliicon1.source = "img_qian_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "2":
                this.suijijiemian.jiangliicon1.source = "img_jiating_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "3":
                this.suijijiemian.jiangliicon1.source = "img_jiankang_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "4":
                this.suijijiemian.jiangliicon1.source = "img_xinqing_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "5":
                this.suijijiemian.jiangliicon1.source = "img_xingfu_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "6":
                this.suijijiemian.jiangliicon1.source = "img_daerzibiaoshi_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "7":
                this.suijijiemian.jiangliicon1.source = "img_xiaoerzibiaoshi_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "8":
                this.suijijiemian.jiangliicon1.source = "img_xifubiaoshi_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "9":
                this.suijijiemian.jiangliicon1.source = "img_sunnvbiaoshi_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "10":
                this.suijijiemian.jiangliicon1.source = "img_daerzibiaoshi_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "11":
                this.suijijiemian.jiangliicon1.source = "img_xiaoerzibiaoshi_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "12":
                this.suijijiemian.jiangliicon1.source = "img_xifubiaoshi_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            case "13":
                this.suijijiemian.jiangliicon1.source = "img_sunnvbiaoshi_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            default:
                if (parseInt(leixing) >= 1000 && parseInt(leixing) < 10000) {
                    this.jianglicaipuxianshi(leixing, shuliang);
                }
                else if (parseInt(leixing) >= 10000) {
                    this.jianglidaojuxianshi(leixing, shuliang);
                }
                ;
                break;
        }
    };
    Dajiejiemian.prototype.jianglijiemianjianglitubiao = function (shuliang) {
        switch (this.jianglileixing) {
            case "0":
                this.jianglijiemian.jiangliicon.source = "";
                this.jianglijiemian.jianglishuliang.text = "";
                break;
            case "1":
                this.jianglijiemian.jiangliicon.source = "img_qian_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "2":
                this.jianglijiemian.jiangliicon.source = "img_jiating_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "3":
                this.jianglijiemian.jiangliicon.source = "img_jiankang_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "4":
                this.jianglijiemian.jiangliicon.source = "img_xinqing_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "5":
                this.jianglijiemian.jiangliicon.source = "img_xingfu_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "6":
                this.jianglijiemian.jiangliicon.source = "img_daerzibiaoshi_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "7":
                this.jianglijiemian.jiangliicon.source = "img_xiaoerzibiaoshi_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "8":
                this.jianglijiemian.jiangliicon.source = "img_xifubiaoshi_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "9":
                this.jianglijiemian.jiangliicon.source = "img_sunnvbiaoshi_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "10":
                this.jianglijiemian.jiangliicon.source = "img_daerzibiaoshi_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "11":
                this.jianglijiemian.jiangliicon.source = "img_xiaoerzibiaoshi_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "12":
                this.jianglijiemian.jiangliicon.source = "img_xifubiaoshi_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            case "13":
                this.jianglijiemian.jiangliicon.source = "img_sunnvbiaoshi_png";
                this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
                break;
            default:
                if (parseInt(this.jianglileixing) >= 1000 && parseInt(this.jianglileixing) < 10000) {
                    this.dajianglipuxianshi(this.jianglileixing, shuliang);
                }
                else if (parseInt(this.jianglileixing) >= 10000) {
                    this.dajianglidaojuxianshi(this.jianglileixing, shuliang);
                }
                ;
                break;
        }
    };
    Dajiejiemian.prototype.dajianglipuxianshi = function (leixing, shuliang) {
        var caipubiao = RES.getRes("shipubiao_json");
        for (var i = 0; i < caipubiao.length; i++) {
            if (caipubiao[i].id == leixing) {
                this.jianglijiemian.jiangliicon.source = caipubiao[i].id + "_png";
                this.jianglijiemian.jianglishuliang.text = "熟练度 + " + shuliang;
                break;
            }
        }
    };
    Dajiejiemian.prototype.dajianglidaojuxianshi = function (leixing, shuliang) {
        var daojubiao = RES.getRes("daojubiao_json");
        for (var i = 0; i < daojubiao.length; i++) {
            if (daojubiao[i].id == leixing) {
                this.jianglijiemian.jiangliicon.source = daojubiao[i].xianshiicon;
                this.jianglijiemian.jianglishuliang.text = "X " + shuliang;
                break;
            }
        }
    };
    Dajiejiemian.prototype.kouchutubiaopanduan = function (leixing, shuliang) {
        switch (leixing) {
            case "0":
                this.suijijiemian.jiangliicon2.source = "";
                this.suijijiemian.jiangli2.text = "";
                break;
            case "1":
                this.suijijiemian.jiangliicon2.source = "img_qian_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "2":
                this.suijijiemian.jiangliicon2.source = "img_jiating_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "3":
                this.suijijiemian.jiangliicon2.source = "img_jiankang_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "4":
                this.suijijiemian.jiangliicon2.source = "img_xinqing_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "5":
                this.suijijiemian.jiangliicon2.source = "img_xingfu_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "6":
                this.suijijiemian.jiangliicon2.source = "img_daerzibiaoshi_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "7":
                this.suijijiemian.jiangliicon2.source = "img_xiaoerzibiaoshi_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "8":
                this.suijijiemian.jiangliicon2.source = "img_xifubiaoshi_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "9":
                this.suijijiemian.jiangliicon2.source = "img_sunnvbiaoshi_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "10":
                this.suijijiemian.jiangliicon2.source = "img_daerzibiaoshi_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "11":
                this.suijijiemian.jiangliicon2.source = "img_xiaoerzibiaoshi_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "12":
                this.suijijiemian.jiangliicon2.source = "img_xifubiaoshi_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            case "13":
                this.suijijiemian.jiangliicon2.source = "img_sunnvbiaoshi_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            default:
                if (parseInt(leixing) >= 1000 && parseInt(leixing) < 10000) {
                    this.kouchucaipuxianshi(leixing, shuliang);
                }
                else if (parseInt(leixing) >= 10000) {
                    this.kouchudaojuxianshi(leixing, shuliang);
                }
                ;
                break;
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 2);
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 2);
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 2);
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 2);
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
                    this.jianglijiemianjianglitubiao(this.jianglishuliang * 2);
                    this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.guanbijiangli, this);
                }
                else {
                    Gameguanli.Kongzhitai().cuowutishixinxi("由于您的幸福值太低，只得黯自离去！");
                }
                break;
        }
    };
    Dajiejiemian.prototype.fasongjiangli = function (beishu) {
        Weblianjie.fasongshuju("code:085", "{" + '"kouchuleixing"' + ":" + '"' + this.kouchuleixing + '"' + ","
            + '"kouchushuliang"' + ":" + '"' + this.kouchushuliang + '"' + ","
            + '"leixing"' + ":" + '"' + this.jianglileixing + '"' + ","
            + '"shuliang"' + ":" + '"' + this.jianglishuliang + '"' + ","
            + '"beishu"' + ":" + '"' + beishu + '"' + ","
            + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
    };
    Dajiejiemian.prototype.guanbijiangli = function () {
        Gameguanli.Kongzhitai().dingbuui.removeChild(this.jianglijiemian);
    };
    Dajiejiemian.prototype.kouchucaipuxianshi = function (leixing, shuliang) {
        var caipubiao = RES.getRes("shipubiao_json");
        for (var i = 0; i < caipubiao.length; i++) {
            if (caipubiao[i].id == leixing) {
                this.suijijiemian.jiangliicon2.source = caipubiao[i].id + "_png";
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            }
        }
    };
    Dajiejiemian.prototype.jianglicaipuxianshi = function (leixing, shuliang) {
        var caipubiao = RES.getRes("shipubiao_json");
        for (var i = 0; i < caipubiao.length; i++) {
            if (caipubiao[i].id == leixing) {
                this.suijijiemian.jiangliicon1.source = caipubiao[i].id + "_png";
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            }
        }
    };
    Dajiejiemian.prototype.jianglidaojuxianshi = function (leixing, shuliang) {
        var daojubiao = RES.getRes("daojubiao_json");
        for (var i = 0; i < daojubiao.length; i++) {
            if (daojubiao[i].id == leixing) {
                this.suijijiemian.jiangliicon1.source = daojubiao[i].xianshiicon;
                this.suijijiemian.jiangli1.text = "+ " + shuliang;
                break;
            }
        }
    };
    Dajiejiemian.prototype.kouchudaojuxianshi = function (leixing, shuliang) {
        var daojubiao = RES.getRes("daojubiao_json");
        for (var i = 0; i < daojubiao.length; i++) {
            if (daojubiao[i].id == leixing) {
                this.suijijiemian.jiangliicon2.source = daojubiao[i].xianshiicon;
                this.suijijiemian.jiangli2.text = "- " + shuliang;
                break;
            }
        }
    };
    return Dajiejiemian;
}(eui.Component));
__reflect(Dajiejiemian.prototype, "Dajiejiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Dajiejiemian.js.map
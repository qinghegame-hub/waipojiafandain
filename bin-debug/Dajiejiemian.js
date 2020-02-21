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
        }
    };
    Dajiejiemian.prototype.zouluyanshi = function () {
        var _this = this;
        if (this.dangqiansaizi > 0) {
            switch (this.dangqianbushu) {
                case 1:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie1.x, y: this.taijie1.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 2:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie2.x, y: this.taijie2.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 3:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie3.x, y: this.taijie3.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 4:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie4.x, y: this.taijie4.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 5:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie5.x, y: this.taijie5.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 6:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie6.x, y: this.taijie6.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 7:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie7.x, y: this.taijie7.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 8:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie8.x, y: this.taijie8.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 9:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie9.x, y: this.taijie9.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 10:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie10.x, y: this.taijie10.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 11:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie11.x, y: this.taijie11.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 12:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie12.x, y: this.taijie12.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 13:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie13.x, y: this.taijie13.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 14:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie14.x, y: this.taijie14.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 15:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie15.x, y: this.taijie15.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 16:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie16.x, y: this.taijie16.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 17:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie17.x, y: this.taijie17.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 18:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie18.x, y: this.taijie18.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 19:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie19.x, y: this.taijie19.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 20:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie20.x, y: this.taijie20.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 21:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie21.x, y: this.taijie21.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 22:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie22.x, y: this.taijie22.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 23:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie23.x, y: this.taijie23.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 24:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie24.x, y: this.taijie24.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 25:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie25.x, y: this.taijie25.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 26:
                    this.dangqianbushu += 1;
                    egret.Tween.get(this.juesezu).to({ x: this.taijie26.x, y: this.taijie26.y }, 1000).call(function () {
                        _this.dangqiansaizi -= 1;
                        _this.zouluyanshi();
                    });
                    break;
                case 27:
                    this.dangqianbushu = 1;
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
    };
    return Dajiejiemian;
}(eui.Component));
__reflect(Dajiejiemian.prototype, "Dajiejiemian", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Dajiejiemian.js.map
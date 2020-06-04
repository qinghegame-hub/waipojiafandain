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
var Zhandoubuffui = (function (_super) {
    __extends(Zhandoubuffui, _super);
    function Zhandoubuffui() {
        return _super.call(this) || this;
    }
    Zhandoubuffui.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Zhandoubuffui.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Zhandoubuffui.prototype.chushihua = function (xuhao, mingzi, huiheshu, tupian, jinengshuoming) {
        switch (xuhao) {
            case 0:
                this.jinengtu.source = tupian;
                this.jinengmingcheng.text = mingzi;
                this.shengyuhuiheshu.text = huiheshu;
                this.chixuhuihe.text = "剩余回合:";
                this.xiaoguo.text = "效果:";
                this.jinengshuoming.text = jinengshuoming;
                break;
            case 1:
                this.jinengtu0.source = tupian;
                this.jinengmingcheng0.text = mingzi;
                this.shengyuhuiheshu0.text = huiheshu;
                this.chixuhuihe0.text = "剩余回合:";
                this.xiaoguo0.text = "效果:";
                this.jinengshuoming0.text = jinengshuoming;
                break;
            case 2:
                this.jinengtu1.source = tupian;
                this.jinengmingcheng1.text = mingzi;
                this.shengyuhuiheshu1.text = huiheshu;
                this.chixuhuihe1.text = "剩余回合:";
                this.xiaoguo1.text = "效果:";
                this.jinengshuoming1.text = jinengshuoming;
                break;
            case 3:
                this.jinengtu2.source = tupian;
                this.jinengmingcheng2.text = mingzi;
                this.shengyuhuiheshu2.text = huiheshu;
                this.chixuhuihe2.text = "剩余回合:";
                this.xiaoguo2.text = "效果:";
                this.jinengshuoming2.text = jinengshuoming;
                break;
            case 4:
                this.jinengtu3.source = tupian;
                this.jinengmingcheng3.text = mingzi;
                this.shengyuhuiheshu3.text = huiheshu;
                this.chixuhuihe3.text = "剩余回合:";
                this.xiaoguo3.text = "效果:";
                this.jinengshuoming3.text = jinengshuoming;
                break;
            case 5:
                this.jinengtu4.source = tupian;
                this.jinengmingcheng4.text = mingzi;
                this.shengyuhuiheshu4.text = huiheshu;
                this.chixuhuihe4.text = "剩余回合:";
                this.xiaoguo4.text = "效果:";
                this.jinengshuoming4.text = jinengshuoming;
                break;
            case 6:
                this.jinengtu5.source = tupian;
                this.jinengmingcheng5.text = mingzi;
                this.shengyuhuiheshu5.text = huiheshu;
                this.chixuhuihe5.text = "剩余回合:";
                this.xiaoguo5.text = "效果:";
                this.jinengshuoming5.text = jinengshuoming;
                break;
            case 7:
                this.jinengtu6.source = tupian;
                this.jinengmingcheng6.text = mingzi;
                this.shengyuhuiheshu6.text = huiheshu;
                this.chixuhuihe6.text = "剩余回合:";
                this.xiaoguo6.text = "效果:";
                this.jinengshuoming6.text = jinengshuoming;
                break;
            case 8:
                this.jinengtu7.source = tupian;
                this.jinengmingcheng7.text = mingzi;
                this.shengyuhuiheshu7.text = huiheshu;
                this.chixuhuihe7.text = "剩余回合:";
                this.xiaoguo7.text = "效果:";
                this.jinengshuoming7.text = jinengshuoming;
                break;
            case 9:
                this.jinengtu8.source = tupian;
                this.jinengmingcheng8.text = mingzi;
                this.shengyuhuiheshu8.text = huiheshu;
                this.chixuhuihe8.text = "剩余回合:";
                this.xiaoguo8.text = "效果:";
                this.jinengshuoming8.text = jinengshuoming;
                break;
        }
    };
    return Zhandoubuffui;
}(eui.Component));
__reflect(Zhandoubuffui.prototype, "Zhandoubuffui", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Zhandoubuffui.js.map
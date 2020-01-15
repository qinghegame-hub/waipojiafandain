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
var Chuangzaolaji = (function (_super) {
    __extends(Chuangzaolaji, _super);
    function Chuangzaolaji() {
        return _super.call(this) || this;
    }
    Chuangzaolaji.shengchenglaji = function (num1) {
        Chuangzaolaji.xinzu = [];
        for (var i = 0; i <= Chuangzaolaji.cunzailaji.length; i++) {
            if (Chuangzaolaji.cunzailaji[i] == 1) {
                Chuangzaolaji.xinzu[Chuangzaolaji.xinzu.length] = i;
            }
        }
        if (Chuangzaolaji.xinzu.length != 0) {
            if (Chuangzaolaji.xinzu.length <= num1) {
                this.shengchenggeshu = Chuangzaolaji.xinzu.length;
            }
            else {
                this.shengchenggeshu = num1;
            }
        }
        this.panduanxunhuanti(this.shengchenggeshu);
    };
    Chuangzaolaji.panduanxunhuanti = function (num2) {
        for (var panduan = 0; panduan < this.shengchenggeshu; panduan++) {
            this.chulixianshiluoji(Chuangzaolaji.xinzu[panduan]);
        }
    };
    Chuangzaolaji.chulixianshiluoji = function (zhi) {
        switch (zhi) {
            case 0:
                Gameguanli.Kongzhitai().zhujiemian.but_laji0.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji0.enabled = true;
                Chuangzaolaji.cunzailaji[0] = 0;
                break;
            case 1:
                Gameguanli.Kongzhitai().zhujiemian.but_laji1.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji1.enabled = true;
                Chuangzaolaji.cunzailaji[1] = 0;
                break;
            case 2:
                Gameguanli.Kongzhitai().zhujiemian.but_laji2.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji2.enabled = true;
                Chuangzaolaji.cunzailaji[2] = 0;
                break;
            case 3:
                Gameguanli.Kongzhitai().zhujiemian.but_laji3.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji3.enabled = true;
                Chuangzaolaji.cunzailaji[3] = 0;
                break;
            case 4:
                Gameguanli.Kongzhitai().zhujiemian.but_laji4.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji4.enabled = true;
                Chuangzaolaji.cunzailaji[4] = 0;
                break;
            case 5:
                Gameguanli.Kongzhitai().zhujiemian.but_laji5.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji5.enabled = true;
                Chuangzaolaji.cunzailaji[5] = 0;
                break;
            case 6:
                Gameguanli.Kongzhitai().zhujiemian.but_laji6.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji6.enabled = true;
                Chuangzaolaji.cunzailaji[6] = 0;
                break;
            case 7:
                Gameguanli.Kongzhitai().zhujiemian.but_laji7.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji7.enabled = true;
                Chuangzaolaji.cunzailaji[7] = 0;
                break;
            case 8:
                Gameguanli.Kongzhitai().zhujiemian.but_laji8.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji8.enabled = true;
                Chuangzaolaji.cunzailaji[8] = 0;
                break;
            case 9:
                Gameguanli.Kongzhitai().zhujiemian.but_laji9.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji9.enabled = true;
                Chuangzaolaji.cunzailaji[9] = 0;
                break;
            case 10:
                Gameguanli.Kongzhitai().zhujiemian.but_laji10.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji10.enabled = true;
                Chuangzaolaji.cunzailaji[10] = 0;
                break;
            case 11:
                Gameguanli.Kongzhitai().zhujiemian.but_laji11.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji11.enabled = true;
                Chuangzaolaji.cunzailaji[11] = 0;
                break;
            case 12:
                Gameguanli.Kongzhitai().zhujiemian.but_laji12.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji12.enabled = true;
                Chuangzaolaji.cunzailaji[12] = 0;
                break;
            case 13:
                Gameguanli.Kongzhitai().zhujiemian.but_laji13.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji13.enabled = true;
                Chuangzaolaji.cunzailaji[13] = 0;
                break;
            case 14:
                Gameguanli.Kongzhitai().zhujiemian.but_laji14.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji14.enabled = true;
                Chuangzaolaji.cunzailaji[14] = 0;
                break;
            case 15:
                Gameguanli.Kongzhitai().zhujiemian.but_laji15.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji15.enabled = true;
                Chuangzaolaji.cunzailaji[15] = 0;
                break;
            case 16:
                Gameguanli.Kongzhitai().zhujiemian.but_laji16.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji16.enabled = true;
                Chuangzaolaji.cunzailaji[16] = 0;
                break;
            case 17:
                Gameguanli.Kongzhitai().zhujiemian.but_laji17.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji17.enabled = true;
                Chuangzaolaji.cunzailaji[17] = 0;
                break;
            case 18:
                Gameguanli.Kongzhitai().zhujiemian.but_laji18.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji18.enabled = true;
                Chuangzaolaji.cunzailaji[18] = 0;
                break;
            case 19:
                Gameguanli.Kongzhitai().zhujiemian.but_laji19.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji19.enabled = true;
                Chuangzaolaji.cunzailaji[19] = 0;
                break;
            case 20:
                Gameguanli.Kongzhitai().zhujiemian.but_laji20.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji20.enabled = true;
                Chuangzaolaji.cunzailaji[20] = 0;
                break;
            case 21:
                Gameguanli.Kongzhitai().zhujiemian.but_laji21.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji21.enabled = true;
                Chuangzaolaji.cunzailaji[21] = 0;
                break;
            case 22:
                Gameguanli.Kongzhitai().zhujiemian.but_laji22.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji22.enabled = true;
                Chuangzaolaji.cunzailaji[22] = 0;
                break;
            case 23:
                Gameguanli.Kongzhitai().zhujiemian.but_laji23.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji23.enabled = true;
                Chuangzaolaji.cunzailaji[23] = 0;
                break;
            case 24:
                Gameguanli.Kongzhitai().zhujiemian.but_laji24.alpha = 1;
                Gameguanli.Kongzhitai().zhujiemian.but_laji24.enabled = true;
                Chuangzaolaji.cunzailaji[24] = 0;
                break;
        }
    };
    Chuangzaolaji.cunzailaji = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    Chuangzaolaji.xinzu = [];
    Chuangzaolaji.shengchenggeshu = 0;
    return Chuangzaolaji;
}(egret.DisplayObjectContainer));
__reflect(Chuangzaolaji.prototype, "Chuangzaolaji");
//# sourceMappingURL=Chuangzaolaji.js.map
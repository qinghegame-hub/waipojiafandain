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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
        //       this.createView();
    }
    LoadingUI.prototype.createView = function () {
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        //加载大背景
        this.Bg = new egret.Bitmap();
        this.Bg.texture = RES.getRes('img_beijingloading_png');
        this.Bg.width = this.width;
        this.Bg.height = this.height;
        this.addChild(this.Bg);
        //加载的进度条下层图片
        this.jindutiaodi = new egret.Bitmap();
        this.jindutiaodi.texture = RES.getRes('img_jindutiaoxia_png');
        this.jindutiaodi.x = this.width / 2 - this.jindutiaodi.width / 2;
        this.jindutiaodi.y = this.height / 10 * 8;
        this.jindutiaodi.width = this.width / 10 * 7;
        this.addChild(this.jindutiaodi);
        // loading图标
        this.jindutiaoshang = new egret.Bitmap();
        this.jindutiaoshang.texture = RES.getRes('img_jindutiaoshang_png');
        //设置锚点
        this.jindutiaoshang.x = this.width / 2 - this.jindutiaoshang.width / 2 + this.jindutiaodi.width / 600;
        this.jindutiaoshang.y = this.height / 10 * 8 + this.jindutiaodi.height / 6;
        this.jindutiaoshang.width = 0;
        this.jindukuan = this.width / 10 * 7;
        this.addChild(this.jindutiaoshang);
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        /* this.textField.anchorOffsetX = this.textField.width / 2
         this.textField.anchorOffsetY = this.textField.height / 2*/
        this.textField.width = this.width / 10 * 7;
        this.textField.height = 100;
        this.textField.x = this.width / 2 - this.textField.width / 2;
        this.textField.y = this.height / 10 * 8.5;
        this.textField.textColor = 161719;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        //      this.textField.text = `Loading...${current}/${total}`;
        //       this.loadingjie.img_jindutiaoshang.width = current * this.yuanshijindukuang / total;
        this.jindutiaoshang.width = this.jindukuan * current / total;
        this.textField.text = "正在进入游戏世界，请稍后...";
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);

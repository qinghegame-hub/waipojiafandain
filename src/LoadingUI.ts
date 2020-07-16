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

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
 //       this.createView();
    }

    public textField: egret.TextField;
   /* public loadingjie:Loadingjiemian;
    public yuanshijindukuang:number;*/
    public Bg:egret.Bitmap;//背景
    public jindutiaodi:egret.Bitmap;//小背景图片
    public jindutiaoshang:egret.Bitmap;//loading图标

    private jindukuan:number;


    public createView(): void {
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
 
        //加载大背景
        this.Bg = new egret.Bitmap();
        this.Bg.texture = RES.getRes('img_beijingloading_png');
        this.Bg.width = this.width;
        this.Bg.height = this.height;
        this.addChild(this.Bg);
        //加载的进度条下层图片
        this.jindutiaodi = new egret.Bitmap()
        this.jindutiaodi.texture = RES.getRes('img_jindutiaoxia_png');
        this.jindutiaodi.x = this.width / 2 - this.jindutiaodi.width / 2;
        this.jindutiaodi.y = this.height / 10 * 8
        this.jindutiaodi.width = this.width / 10 * 7
        this.addChild(this.jindutiaodi)
 
        // loading图标
        this.jindutiaoshang = new egret.Bitmap()
        this.jindutiaoshang.texture = RES.getRes('img_jindutiaoshang_png')
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
        this.textField.y = this.height / 10 * 8.5
        this.textField.textColor = 161719;
        this.textField.textAlign = "center";
    }

    public onProgress(current: number, total: number): void {
  //      this.textField.text = `Loading...${current}/${total}`;
 //       this.loadingjie.img_jindutiaoshang.width = current * this.yuanshijindukuang / total;
        this.jindutiaoshang.width = this.jindukuan * current / total;
        this.textField.text = "正在进入游戏世界，请稍后...";
    }

   /* public shiyongloadingpifu(){
        this.loadingjiemian = new Loadingjiemian();
        this.addChild(this.loadingjiemian);
    }*/

   /* public jiazaibeijingtu(){
        var imgLoader: egret.ImageLoader = new egret.ImageLoader;
        imgLoader.load("http://192.168.1.2/res/resource/loading/img_beijingloading.png");
		imgLoader.once(egret.Event.COMPLETE, this.xinashibeijingui, this);
    }


	public xinashibeijingui(evt: egret.Event):void{
			if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width = this.stage.width;
            head.height = this.stage.height;
            this.addChild(head);
			}
		}*/
}

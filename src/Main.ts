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

class Main extends eui.UILayer {
    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    public banben:string = "weixin";//游戏上线渠道入口标志;
    public loadingView:LoadingUI;//loading界面实例化;

    private async runGame() {
        await this.loadResource()
        if(this.banben == "weixin"){
            try{
                const denglu = await platform.login();
                Gerenshuxing.gerencode = denglu.code;
                console.log(Gerenshuxing.gerencode);
            }
            catch(e){
                console.error(e);
            }
            this.dengluyouxi();
        }else{
            this.dengluyouxi();
        }

    }

    public kaishiyouxianniu:egret.Bitmap;

    private async dengluyouxi(){
        if(this.banben == "weixin"){
            this.kaishiyouxianniu = new egret.Bitmap()
            this.kaishiyouxianniu.texture = RES.getRes('but_kaishiyouxi_png');
            this.stage.addChild(this.kaishiyouxianniu);
            this.kaishiyouxianniu.x = this.stage.width / 2 -  this.kaishiyouxianniu.width / 2;
            this.kaishiyouxianniu.y = this.stage.height / 10 * 8
            const userInfo = await platform.getUserInfo(this.kaishiyouxianniu.x,this.kaishiyouxianniu.y,this.kaishiyouxianniu.width,this.kaishiyouxianniu.height);
            Gerenshuxing.gerenshuju = userInfo;
            this.stage.removeChild(this.kaishiyouxianniu);
            this.stage.removeChild(this.loadingView);
            this.createGameScene();
            const result = await RES.getResAsync("description_json");
            this.startAnimation(result);
            /*
            主动转发接口
            */
           const beidongzhuanfa = await platform.showShareMenu("第六十四年",Gerenshuxing.fenxianglianjiedizhi);
           console.log(beidongzhuanfa);
            await platform.openDataContext.postMessage({
                    title:"nihao",
                    text:"你好",
                    time:(new Date()).getFullYear() + 1,
                    command:"loadRes"
            })
            await platform.openDataContext.postMessage({
                time:(new Date()).getFullYear() + 2,
                uid:Gerenshuxing.uid
            })
        }else{
            this.kaishiyouxianniu = new egret.Bitmap()
            this.kaishiyouxianniu.texture = RES.getRes('but_kaishiyouxi_png');
            this.stage.addChild(this.kaishiyouxianniu);
 //           this.kaishiyouxianniu.anchorOffsetX = this.kaishiyouxianniu.width / 2
 //           this.kaishiyouxianniu.anchorOffsetY = this.kaishiyouxianniu.height / 2
            this.kaishiyouxianniu.x = this.stage.width / 2 -  this.kaishiyouxianniu.width / 2;
            this.kaishiyouxianniu.y = this.stage.height / 10 * 8
            this.kaishiyouxianniu.touchEnabled = true;
            this.kaishiyouxianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjikaishiyouxi,this);
        }
    }

    private async dianjikaishiyouxi() {
        this.stage.removeChild(this.kaishiyouxianniu);
        this.stage.removeChild(this.loadingView);
        this.createGameScene();
        const result = await RES.getResAsync("description_json");
        this.startAnimation(result);
    }

    private async loadResource() {
        try {
            await RES.loadConfig("default.res.json", "http://47.114.145.229/resource/");
            await this.loadTheme();
            await RES.loadGroup("loading");
            /*const loadingjie = new Loadingjiemian()
            this.stage.addChild(loadingjie);*/
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            await RES.loadGroup("preload", 0, this.loadingView);
            this.loadingView.jindutiaodi.alpha = 0;
            this.loadingView.jindutiaoshang.alpha = 0;
            this.loadingView.textField.text = "";
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            egret.ImageLoader.crossOrigin = "anonymous";//设置允许跨域加载
//            EXML.prefixURL = "http://192.168.1.1/res/resource/resource/eui_skins/";//更改目录位置,这里要填入服务器的ip地址
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("http://47.114.145.229/resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield:egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        let textfield = new egret.TextField();
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
        let webseverlianji:Weblianjie =new  Weblianjie();
        webseverlianji.kaishilianjie();
        //进入场景
        egret.Ticker.getInstance().register((advancedTime)=>{
            dragonBones.WorldClock.clock.advanceTime(advancedTime/3000);
        },this);
        let shijianstart:Timekongzhi = new Timekongzhi(); 
        //进入游戏主界面
        this.addChild(Gameguanli.Kongzhitai());
        //默认进行1次垃圾添加
		Chuangzaolaji.shengchenglaji(21);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }

    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        let panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    }


}

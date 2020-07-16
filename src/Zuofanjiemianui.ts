class Zuofanjiemianui extends eui.Component implements  eui.UIComponent {
	public caitubiao:eui.Image;
	public zaotaizu:eui.Group;
	public img_xiaceng:eui.Image;
	public huoyantupian:eui.Image;
	public img_shangcengbudong:eui.Image;
	public dangqiantishi:eui.Image;
	public xiaoshitishi:eui.Image;
	public weilaitishi:eui.Image;
	public xiaoshitishitu:eui.Image;
	public weilaitishitu:eui.Image;
	public dangqiantishitu:eui.Image;
	public jindutiao:eui.Image;
	public dingbulan:eui.Image;
	public shijianwenzi:eui.Label;
	public shijianwenzi0:eui.Label;
	public caocaijinduwenzi:eui.Label;
	public shiwucishuwenzi:eui.Label;
	public but_queding:eui.Button;
	public lvsecaizu:eui.Group;
	public lvsexuanxiang:eui.Image;
	public zisezu:eui.Group;
	public zisexuanxiang:eui.Image;
	public chengsezu:eui.Group;
	public chengsexuanxiang:eui.Image;
	public shangjindutiaodi:eui.Image;
	public shangjindutiaojindu:eui.Image;
	public tishiwenzizu:eui.Group;
	public tishiwenzidi:eui.Image;
	public tishiwenzi:eui.Label;
	public youbiao:eui.Image;
	public jinduyoubiao:eui.Group;
	public jindutiaozhibiao:eui.Image;
	public shansuojindu:eui.Image;




	public shengyushijian:number = 0;

	public zhuandong:number = 0;
	public keshibaicishu:number = 0;
	public yaoqiuliebiao:any;
//	public zhengshiliebiao:any;
	public jindu:number = 0;
	public dangqianjindu:number = 0;

	public jishiqi:egret.Timer;

	public zhuangtai:string;

	public dangqianbuzou:number = 0;

	public buzouhao:number = 0;

	public xuqiuleixing1:any = 0;
	public xuqiumubiao1:any = 0;
	public fengezu1:any = [];

	public xuqiuleixing2:any = 0;
	public xuqiumubiao2:any = 0;
	public fengezu2:any = [];

	public xuqiuleixing3:any = 0;
	public xuqiumubiao3:any = 0;
	public fengezu3:any = [];

	public zhengquejieduan:number = 0;
	public xianshicai1:string = "";
	public xianshicai2:string = "";
	public xianshicai3:string = "";

	public zhengquequjian:number = 0;

	public zhuandongfangxiang:number = 1;

	public gundongdingshi:egret.Timer;

	public tupian:string;

	public dingshikaiguan:Boolean = true;

	public caiid:string;

	public caijingyan:number = 50; 

	public combo:number = 1;

	 public zuofanxinshouyindao:Xinshouyindaodakuang;




	public constructor() {
		super();
//		this.chushihua();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public yindao_0_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.zuofanxinshouyindao.dakuangzu.alpha = 0;
		this.zuofanxinshouyindao.xiaokuangzu.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.zuofanxinshouyindao.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.242 - this.zuofanxinshouyindao.yindaoshouzhi.width / 2;
		this.zuofanxinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.099;
		this.zuofanxinshouyindao.xiaokuangzu.x = this.zuofanxinshouyindao.yindaoshouzhi.x;
		this.zuofanxinshouyindao.xiaokuangzu.y = this.zuofanxinshouyindao.yindaoshouzhi.y + this.zuofanxinshouyindao.yindaoshouzhi.height;
		this.zuofanxinshouyindao.xiaokuanwenzi.text = "倒计时，显示本次烹饪的倒计时时间。";
		this.zuofanxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.zuofanxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_2,this);
	}

	public yindao_0_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.zuofanxinshouyindao.dakuangzu.alpha = 0;
		this.zuofanxinshouyindao.xiaokuangzu.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.zuofanxinshouyindao.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.532 - this.zuofanxinshouyindao.yindaoshouzhi.width / 2;
		this.zuofanxinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.099;
		this.zuofanxinshouyindao.xiaokuangzu.x = this.zuofanxinshouyindao.yindaoshouzhi.x - this.zuofanxinshouyindao.xiaokuangzu.width / 2;
		this.zuofanxinshouyindao.xiaokuangzu.y = this.zuofanxinshouyindao.yindaoshouzhi.y + this.zuofanxinshouyindao.yindaoshouzhi.height;
		this.zuofanxinshouyindao.xiaokuanwenzi.text = "显示您本次烹饪可获得的菜品熟练度。";
		this.zuofanxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.zuofanxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_3,this);
	}

	public yindao_0_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.zuofanxinshouyindao.dakuangzu.alpha = 0;
		this.zuofanxinshouyindao.xiaokuangzu.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.zuofanxinshouyindao.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.813 - this.zuofanxinshouyindao.yindaoshouzhi.width / 2;
		this.zuofanxinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.099;
		this.zuofanxinshouyindao.xiaokuangzu.x = this.zuofanxinshouyindao.yindaoshouzhi.x - this.zuofanxinshouyindao.xiaokuangzu.width;
		this.zuofanxinshouyindao.xiaokuangzu.y = this.zuofanxinshouyindao.yindaoshouzhi.y + this.zuofanxinshouyindao.yindaoshouzhi.height;
		this.zuofanxinshouyindao.xiaokuanwenzi.text = "显示您本次烹饪可失误的次数。";
		this.zuofanxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.zuofanxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_4,this);
	}

	public yindao_0_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.zuofanxinshouyindao.dakuangzu.alpha = 0;
		this.zuofanxinshouyindao.xiaokuangzu.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.zuofanxinshouyindao.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.499 - this.zuofanxinshouyindao.yindaoshouzhi.width / 2;
		this.zuofanxinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.197;
		this.zuofanxinshouyindao.xiaokuangzu.x = this.zuofanxinshouyindao.yindaoshouzhi.x - this.zuofanxinshouyindao.xiaokuangzu.width / 2;
		this.zuofanxinshouyindao.xiaokuangzu.y = this.zuofanxinshouyindao.yindaoshouzhi.y + this.zuofanxinshouyindao.yindaoshouzhi.height;
		this.zuofanxinshouyindao.xiaokuanwenzi.text = "这里代表您本次烹饪的完成度，完成度达到100%时，则烹饪成功。";
		this.zuofanxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.zuofanxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_5,this);
	}

	public yindao_0_5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.zuofanxinshouyindao.dakuangzu.alpha = 0;
		this.zuofanxinshouyindao.xiaokuangzu.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.zuofanxinshouyindao.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.499 - this.zuofanxinshouyindao.yindaoshouzhi.width / 2;
		this.zuofanxinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.287;
		this.zuofanxinshouyindao.xiaokuangzu.x = this.zuofanxinshouyindao.yindaoshouzhi.x - this.zuofanxinshouyindao.xiaokuangzu.width / 2;
		this.zuofanxinshouyindao.xiaokuangzu.y = this.zuofanxinshouyindao.yindaoshouzhi.y + this.zuofanxinshouyindao.yindaoshouzhi.height;
		this.zuofanxinshouyindao.xiaokuanwenzi.text = "这里呈现的是当前您需要进行的烹饪操作。";
		this.zuofanxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.zuofanxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_6,this);
	}

	public yindao_0_6(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.zuofanxinshouyindao.dakuangzu.alpha = 0;
		this.zuofanxinshouyindao.xiaokuangzu.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.source = "img_yindaoxiashouzhi_png";
		this.zuofanxinshouyindao.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.213 - this.zuofanxinshouyindao.yindaoshouzhi.width / 2;
		this.zuofanxinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.636 - this.zuofanxinshouyindao.yindaoshouzhi.height;
		this.zuofanxinshouyindao.xiaokuangzu.x = this.zuofanxinshouyindao.yindaoshouzhi.x + this.zuofanxinshouyindao.yindaoshouzhi.width / 2;
		this.zuofanxinshouyindao.xiaokuangzu.y = this.zuofanxinshouyindao.yindaoshouzhi.y - this.zuofanxinshouyindao.yindaoshouzhi.height;
		this.zuofanxinshouyindao.xiaokuanwenzi.text = "代表当前烹饪步骤的正确区域，当“小锅铲”到达这个区域时。";
		this.zuofanxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.zuofanxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_7,this);
	}

	public yindao_0_7(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.zuofanxinshouyindao.dakuangzu.alpha = 0;
		this.zuofanxinshouyindao.xiaokuangzu.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.source = "img_yindaoxiashouzhi_png";
		this.zuofanxinshouyindao.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.499 - this.zuofanxinshouyindao.yindaoshouzhi.width / 2;
		this.zuofanxinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.844 - this.zuofanxinshouyindao.yindaoshouzhi.height;
		this.zuofanxinshouyindao.xiaokuangzu.x = this.zuofanxinshouyindao.yindaoshouzhi.x - this.zuofanxinshouyindao.xiaokuangzu.width / 2;
		this.zuofanxinshouyindao.xiaokuangzu.y = this.zuofanxinshouyindao.yindaoshouzhi.y - this.zuofanxinshouyindao.yindaoshouzhi.height;
		this.zuofanxinshouyindao.xiaokuanwenzi.text = "您可按下确定键，则正确进行本步骤的烹饪。";
		this.zuofanxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.zuofanxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_8,this);
	}

	public yindao_0_8(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.zuofanxinshouyindao.xiaokuangzu.alpha = 0;
		this.zuofanxinshouyindao.dakuangzu.alpha = 1;
		this.zuofanxinshouyindao.yindaoshouzhi.alpha = 0;
		this.zuofanxinshouyindao.dakuangwenzi.text = "好了，下面请您自己开始进行烹饪吧！";
		this.zuofanxinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.zuofanxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_9,this);
	}

	public yindao_0_9(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.removeChild(this.zuofanxinshouyindao);
	}

	public chushihua(id?:any){
		//新手引导界面
		if(Gerenshuxing.guideuiyindao == 15){
			this.zuofanxinshouyindao = new Xinshouyindaodakuang();
			this.addChild(this.zuofanxinshouyindao);
			this.zuofanxinshouyindao.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.zuofanxinshouyindao.dakuangzu.width / 2;
			this.zuofanxinshouyindao.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.zuofanxinshouyindao.dakuangzu.height / 2;
			this.zuofanxinshouyindao.xiaokuangzu.alpha = 0;
			this.zuofanxinshouyindao.dakuangzu.alpha = 1;
			this.zuofanxinshouyindao.yindaoshouzhi.alpha = 0;
			this.zuofanxinshouyindao.xiaokuangzu.touchEnabled = false;
			this.zuofanxinshouyindao.dakuangzu.touchEnabled = false;
			this.zuofanxinshouyindao.yindaoshouzhi.touchEnabled = false;
			this.zuofanxinshouyindao.dakuangwenzi.text = "开始给顾客上菜了，请认真看好介绍哦";
			this.zuofanxinshouyindao.heisezhezhaodianji.touchEnabled = true;
			this.zuofanxinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_1,this);
		}
		this.combo = 1;
		this.caijingyan = 50;
		this.caiid = id;
		let shijianbiao = Gerenshuxing.shipubiao;
		for(var i = 0;i<shijianbiao.length;i++){
			if(shijianbiao[i].id == id){
				this.shengyushijian = parseInt(shijianbiao[i].timeyaoqiu);
				this.zhuandong = parseInt(shijianbiao[i].zhuangdong);
				this.keshibaicishu =parseInt(shijianbiao[i].shibaishu);
				this.yaoqiuliebiao = shijianbiao[i].zuofan;
				this.tupian = shijianbiao[i].id;
				this.caitubiao.source = shijianbiao[i].id + "_png";
			}
		}
		this.yaoqiuliebiao = this.yaoqiuliebiao.split(",") ;
		this.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP,this.queding,this);
		this.youbiao.x = this.jindutiao.x;
		this.youbiao.y = this.jindutiao.y - this.youbiao.height / 3 * 1;
		this.huoyantupian.source = "";
		this.shijianwenzi0.text = "完成度: 0";
		this.gongxupailie();
		this.shijianjisuan();
		this.donghuakai("kai");
		this.youbiaodonghua();
		this.huoyandonghua();
		this.shandiandonghua();
		//初始化时，上层进度的宽度为1;
		this.shangjindutiaojindu.width = 1;
/*		this.gundongdingshi = new egret.Timer(500,0);
		this.gundongdingshi.addEventListener(egret.TimerEvent.TIMER,this.kaishishijian,this);*/
	}

	public dingbuxianshi(){
		this.shijianwenzi.text = "" + Math.floor(this.shengyushijian / 60) + ":" + this.shengyushijian % 60;
		this.shijianwenzi0.text = "完成度: " + Math.floor(this.dangqianjindu / this.yaoqiuliebiao.length * 100) + "%";
		egret.Tween.get(this.shangjindutiaojindu).to({width:this.shangjindutiaodi.width * (this.dangqianjindu / this.yaoqiuliebiao.length)},1000);
		this.shiwucishuwenzi.text = "" + this.keshibaicishu;
		this.caocaijinduwenzi.text = "+" + this.caijingyan;
	}

	public shijianjisuan(){
		this.jishiqi = null;
		if(this.dingshikaiguan == true){
			if(this.keshibaicishu <= 0){
				Gerenshuxing.zuocaichenggong = "false";
				this.fankuijiemian("shibai");
				}else if(this.shengyushijian > 0){
					this.jishiqi = new egret.Timer(1000,1);
					this.jishiqi.addEventListener(egret.TimerEvent.TIMER,this.kaishishijian,this);
					this.jishiqi.start();
				}else{
					Gerenshuxing.zuocaichenggong = "false";
					this.fankuijiemian("shibai");
				}
		}
	}

	public kaishishijian(){
		this.shengyushijian -= 1;
		this.dingbuxianshi();
		this.shijianjisuan();
	}

	public guanbi(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		 Gameguanli.Kongzhitai().zuofanjiemian("guan");
//		 this.jishiqi.stop();
		 this.jishiqi = null;
		 this.dingshikaiguan = false;
		 if(Gerenshuxing.guideuiyindao == 15){
			 Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"16"'+"}");
		 }
	}

	public gongxupailie(){
		if(this.dangqianbuzou >= this.yaoqiuliebiao.length - 1){
			this.dangqianbuzou = -1;
		}
		switch(this.dangqianbuzou){
			case -1:
				this.weilaitishi.alpha = 0;
				this.dangqiantishi.alpha = 1;
				this.xiaoshitishi.alpha =1;
				this.weilaitishitu.source = "";
				this.fengezu1 = this.yaoqiuliebiao[this.yaoqiuliebiao.length - 1].split(":");
				this.xuqiuleixing1 = this.fengezu1[0];
				this.xuqiumubiao1 = this.fengezu1[1];
				this.fengezu2 = this.yaoqiuliebiao[this.yaoqiuliebiao.length -2].split(":");
				this.xuqiuleixing2 = this.fengezu2[0];
				this.xuqiumubiao2 = this.fengezu2[1];
				this.leixingfenzu1();
				this.leixingfenzu2();
//				this.leixingfenzu3();
				break;
			case 0:
				this.weilaitishi.alpha = 1;
				this.dangqiantishi.alpha = 1;
				this.xiaoshitishi.alpha =0;
				this.xiaoshitishitu.source = "";
				this.fengezu1 = this.yaoqiuliebiao[this.dangqianbuzou].split(":");
				this.xuqiuleixing1 = this.fengezu1[0];
				this.xuqiumubiao1 = this.fengezu1[1];
				this.fengezu3 = this.yaoqiuliebiao[this.dangqianbuzou + 1].split(":");
				this.xuqiuleixing3 = this.fengezu3[0];
				this.xuqiumubiao3 = this.fengezu3[1];
				this.leixingfenzu1();
//				this.leixingfenzu2();
				this.leixingfenzu3();
				break;
			default:
				this.weilaitishi.alpha = 1;
				this.dangqiantishi.alpha = 1;
				this.xiaoshitishi.alpha =1;
				this.fengezu1 = this.yaoqiuliebiao[this.dangqianbuzou].split(":");
				this.xuqiuleixing1 = this.fengezu1[0];
				this.xuqiumubiao1 = this.fengezu1[1];
				this.fengezu2 = this.yaoqiuliebiao[this.dangqianbuzou - 1].split(":");
				this.xuqiuleixing2 = this.fengezu2[0];
				this.xuqiumubiao2 = this.fengezu2[1];
				this.fengezu3 = this.yaoqiuliebiao[this.dangqianbuzou + 1].split(":");
				this.xuqiuleixing3 = this.fengezu3[0];
				this.xuqiumubiao3 = this.fengezu3[1];
				this.leixingfenzu1();
				this.leixingfenzu2();
				this.leixingfenzu3();
				break;		
		}

	}

	public gundongdonghua(){
		if(this.zhuandongfangxiang == 1){
			egret.Tween.get(this.youbiao).to({x:this.jindutiao.x + this.jindutiao.width - this.youbiao.width},this.zhuandong)
			.call(()=>{
				this.zhuandongfangxiang = -1;
				this.donghuakai("kai");
			})
		}else if(this.zhuandongfangxiang == -1){
			egret.Tween.get(this.youbiao).to({x:this.jindutiao.x},this.zhuandong)
			.call(()=>{
				this.zhuandongfangxiang = 1;
				this.donghuakai("kai");
			})
		}
	}


	public queding(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.keshibaicishu > 0){
			if(this.youbiao.x <= this.jindutiao.x + this.jindutiao.width / 3 * 1 && this.youbiao.x >=0){
				if(this.xuqiuleixing1 == "1"){
					this.huoyantupian.source = "img_xiaohuohou_png";
				}
				if(this.zhengquejieduan == 1){
					this.dangqianjindu += 1;
					this.dangqianbuzou += 1;
				//	Gameguanli.Kongzhitai().cuowutishixinxi("正确的操作方式，烹饪进度+1");
					this.panduanjiacheng();
				}else{
					this.keshibaicishu -= 1;
				//	Gameguanli.Kongzhitai().cuowutishixinxi("错误的操作方式，失败次数+1");
					this.combo = 1;
					this.tanchuwenzi("cuo");
					this.panduanwancheng();
				}
			}else if(this.youbiao.x <= this.jindutiao.x + this.jindutiao.width / 3 * 2 && this.youbiao.x > this.jindutiao.x + this.jindutiao.width / 3 * 1){
				if(this.xuqiuleixing1 == "1"){
					this.huoyantupian.source = "img_zhonghuohou_png";
				}
				if(this.zhengquejieduan == 2){
					this.dangqianjindu += 1;
					this.dangqianbuzou += 1;
			//		Gameguanli.Kongzhitai().cuowutishixinxi("正确的操作方式，烹饪进度+1");
					this.panduanjiacheng();
				}else{
					this.keshibaicishu -= 1;
			//		Gameguanli.Kongzhitai().cuowutishixinxi("错误的操作方式，失败次数+1");
					this.combo = 1;
					this.tanchuwenzi("cuo");
					this.panduanwancheng();
				}
			}else if(this.youbiao.x > this.jindutiao.x + this.jindutiao.width / 3 * 2){
				if(this.xuqiuleixing1 == "1"){
					this.huoyantupian.source = "img_dahuohou_png";
				}
				if(this.zhengquejieduan == 3){
					this.dangqianjindu += 1;
					this.dangqianbuzou += 1;
			//		Gameguanli.Kongzhitai().cuowutishixinxi("正确的操作方式，烹饪进度+1");
					this.panduanjiacheng();
				}else{
					this.keshibaicishu -= 1;
			//		Gameguanli.Kongzhitai().cuowutishixinxi("错误的操作方式，失败次数+1");
					this.combo = 1;
					this.tanchuwenzi("cuo");
					this.panduanwancheng();
				}
			}
		}
		this.dingbuxianshi();
		
	}

	public tanchuwenzi(canshu){
		let ziyuanming = new Zuocaitanchuui();
		Gameguanli.Kongzhitai().zuofanui.addChild(ziyuanming);
		if(canshu == "yiban"){
			ziyuanming.tishitupian.source = "img_chenggong1_png";
		}else if(canshu == "youxiu"){
			ziyuanming.tishitupian.source = "img_chenggong2_png";
		}else if(canshu == "jihao"){
			ziyuanming.tishitupian.source = "img_chenggong3_png";
		}else if(canshu == "cuo"){
			let suijizhi:number = Math.floor(Math.random() * 3) + 1;
			let tupian:string = "";
			switch(suijizhi){
				case 1:
					ziyuanming.tishitupian.source = "img_shibai1_png";
					break;
				case 2:
					ziyuanming.tishitupian.source = "img_shibai2_png";
					break;
				case 3:
					ziyuanming.tishitupian.source = "img_shibai3_png";
					break;
			}
		}
		ziyuanming.x = this.img_xiaceng.width / 2 - ziyuanming.width / 2;
		ziyuanming.y = this.img_xiaceng.height / 2 + ziyuanming.height / 2;
		egret.Tween.get(ziyuanming).to({x:ziyuanming.x,y:ziyuanming.y - 200},2000).call(()=>{
			Gameguanli.Kongzhitai().zuofanui.removeChild(ziyuanming)
		})
	}

	public panduanjiacheng(){
		//进行转动速度的调整
		let zhuandongsuiji = Math.floor(Math.random() * 40) + 80;
		this.zhuandong = this.zhuandong * (zhuandongsuiji / 100);
		//从游标处发射完成粒子
		this.wanchengdulizi();
		if(this.youbiao.x + this.youbiao.width / 2 >= this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 0 && this.youbiao.x + this.youbiao.width / 2 < this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 1){
			this.combo = 1;
			this.tanchuwenzi("yiban");
		}else if(this.youbiao.x + this.youbiao.width / 2 >= this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 1 && this.youbiao.x + this.youbiao.width / 2 < this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 2){
			this.combo = 1;
			this.tanchuwenzi("youxiu");
		}else if(this.youbiao.x + this.youbiao.width / 2 >= this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 2 && this.youbiao.x + this.youbiao.width / 2 < this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 3){
			this.combo += 1;
			this.tanchuwenzi("jihao");
		}else if(this.youbiao.x + this.youbiao.width / 2 >= this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 3 && this.youbiao.x + this.youbiao.width / 2 < this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 4){
			this.combo = 1;
			this.tanchuwenzi("youxiu");
		}else if(this.youbiao.x + this.youbiao.width / 2 >= this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 4 && this.youbiao.x + this.youbiao.width / 2 < this.jinduyoubiao.x + this.jinduyoubiao.width / 5 * 5){
			this.combo = 1;
			this.tanchuwenzi("yiban");
		}else{
			this.combo = 1;
			this.tanchuwenzi("yiban");
		}
		this.xianshilianjitexiao();
		this.caijingyan += this.combo * 10;
		this.dingbuxianshi();
		this.panduanwancheng();
		this.xunhuanbofangjingyan(this.combo,0);
		this.gongxupailie();
		
	}

	public wanchengdulizi(){
		let wanchengdulizi = new Zuofanlizi();
		Gameguanli.Kongzhitai().zuofanui.addChild(wanchengdulizi);
		wanchengdulizi.liziming.source = "img_wanchengdulizi_png";
		wanchengdulizi.x = this.youbiao.x;
		wanchengdulizi.y = this.youbiao.y;
		egret.Tween.get(wanchengdulizi).to({x:this.shangjindutiaojindu.x + this.shangjindutiaojindu.width,y:this.shangjindutiaojindu.y},600).call(()=>{
			Gameguanli.Kongzhitai().zuofanui.removeChild(wanchengdulizi);
			egret.Tween.get(this.shangjindutiaojindu).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
				this.shangjindutiaojindu.scaleX = 1;
				this.shangjindutiaojindu.scaleY = 1;
			})
		})
	}

	public xunhuanbofangjingyan(xunhuanshu:number,kechuxianshu:number){
		if(xunhuanshu > 0){
			let jiangechuxian = new egret.Timer(100,1);
			jiangechuxian.start();
			jiangechuxian.addEventListener(egret.TimerEvent.TIMER,()=>{
				kechuxianshu += 1;
				this.jingyanlizi(kechuxianshu);
				xunhuanshu -= 1;
				this.xunhuanbofangjingyan(xunhuanshu,kechuxianshu);
			},this);
		}
	}

	public jingyanlizi(cishu){
		switch(cishu){
			case 1:
				let jingyanlizi_1_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_1_);
				jingyanlizi_1_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_1_.x = this.youbiao.x;
				jingyanlizi_1_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_1_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_1_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			case 2:
				let jingyanlizi_2_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_2_);
				jingyanlizi_2_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_2_.x = this.youbiao.x;
				jingyanlizi_2_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_2_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_2_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			case 3:
				let jingyanlizi_3_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_3_);
				jingyanlizi_3_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_3_.x = this.youbiao.x;
				jingyanlizi_3_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_3_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_3_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			case 4:
				let jingyanlizi_4_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_4_);
				jingyanlizi_4_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_4_.x = this.youbiao.x;
				jingyanlizi_4_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_4_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_4_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			case 5:
				let jingyanlizi_5_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_5_);
				jingyanlizi_5_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_5_.x = this.youbiao.x;
				jingyanlizi_5_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_5_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_5_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			case 6:
				let jingyanlizi_6_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_6_);
				jingyanlizi_6_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_6_.x = this.youbiao.x;
				jingyanlizi_6_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_6_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_6_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			case 7:
				let jingyanlizi_7_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_7_);
				jingyanlizi_7_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_7_.x = this.youbiao.x;
				jingyanlizi_7_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_7_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_7_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			case 8:
				let jingyanlizi_8_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_8_);
				jingyanlizi_8_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_8_.x = this.youbiao.x;
				jingyanlizi_8_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_8_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_8_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			case 9:
				let jingyanlizi_9_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_9_);
				jingyanlizi_9_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_9_.x = this.youbiao.x;
				jingyanlizi_9_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_9_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_9_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			case 10:
				let jingyanlizi_10_ = new Zuofanlizi();
				Gameguanli.Kongzhitai().zuofanui.addChild(jingyanlizi_10_);
				jingyanlizi_10_.liziming.source = "img_jingyanlizi_png";
				jingyanlizi_10_.x = this.youbiao.x;
				jingyanlizi_10_.y = this.youbiao.y;
				egret.Tween.get(jingyanlizi_10_).to({x:this.caitubiao.x,y:this.caitubiao.y},600).call(()=>{
					Gameguanli.Kongzhitai().zuofanui.removeChild(jingyanlizi_10_);
					egret.Tween.get(this.caitubiao).to({scaleX:1.1,scaleY:1.1},300).call(()=>{
						this.caitubiao.scaleX = 1;
						this.caitubiao.scaleY = 1;
					})
				})
				break;
			
		}
	}

	public xianshilianjitexiao(){
		if(this.combo > 1){
			let lianjixianshi = new Lianjixianshi();
			Gameguanli.Kongzhitai().zuofanui.addChild(lianjixianshi);
			switch(this.combo){
				case 2:
					lianjixianshi.lianjixianshiming.source = "img_wanmeix1_png";
					break;
				case 3:
					lianjixianshi.lianjixianshiming.source = "img_wanmeix2_png";
					break;
				case 4:
					lianjixianshi.lianjixianshiming.source = "img_wanmeix3_png";
					break;
				case 5:
					lianjixianshi.lianjixianshiming.source = "img_wanmeix4_png";
					break;
				case 6:
					lianjixianshi.lianjixianshiming.source = "img_wanmeix5_png";
					break;
				case 7:
					lianjixianshi.lianjixianshiming.source = "img_wanmeix6_png";
					break;
				case 8:
					lianjixianshi.lianjixianshiming.source = "img_wanmeix7_png";
					break;
				case 9:
					lianjixianshi.lianjixianshiming.source = "img_wanmeix8_png";
					break;
				case 10:
					lianjixianshi.lianjixianshiming.source = "img_wanmeix9_png";
					break;
			}
			lianjixianshi.x = this.img_xiaceng.width / 2 - lianjixianshi.width / 2;
			lianjixianshi.y = this.img_xiaceng.height / 2 + lianjixianshi.height * 1.5;
			egret.Tween.get(lianjixianshi).to({x:lianjixianshi.x,y:lianjixianshi.y - 200},2000).call(()=>{
				Gameguanli.Kongzhitai().zuofanui.removeChild(lianjixianshi)
			})
		}
	}

	public panduanwancheng(){
		if(this.dangqianjindu >= this.yaoqiuliebiao.length){
			Gerenshuxing.zuocaichenggong = "true";
			Weblianjie.fasongshuju("code:036","{" + '"caiid"' +":"+ '"' + this.caiid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"'
			+"," + '"zengjiajingyan"' + ":"+ '"' + this.caijingyan + '"' + "}");
			this.fankuijiemian("chenggong");

		}
	}

	public fankuijiemian(shifouchenggon){
		let jianglijiemain = new Pengrenfankuiui();
		Gameguanli.Kongzhitai().zuofanui.addChild(jianglijiemain);
		jianglijiemain.jiangliicon0.source = this.tupian + "_png";
		jianglijiemain.qudinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbi,this);
		if(shifouchenggon == "chenggong"){
			jianglijiemain.img_jianglibiaoti0.source = "img_pengrenchenggong_png";
			jianglijiemain.jianglishuliang0.text = "这道菜烹饪得很成功，食客评价颇高！";
			jianglijiemain.img_jindutiaobeijing.alpha = 1;
			jianglijiemain.img_jindutiaogundong.alpha = 1;
			jianglijiemain.dengjitishi.alpha = 0;
			let duqudengji3 = Gerencaipudengji.caipulevel;
			let caipudengjishuju3 = Gerenshuxing.shipudengjibiao;
			let shengjisuoxujingyan3 = 0;
			let qianyijijingyan = 0;
			for(var g in duqudengji3){
				if(g == this.tupian){
					for(var k = 0;k<caipudengjishuju3.length;k++){
						if(duqudengji3[g][0] == caipudengjishuju3[k].id){
							shengjisuoxujingyan3 = parseFloat(caipudengjishuju3[k].levelexp);
						}
					}
					qianyijijingyan = parseInt(duqudengji3[g][1]) - this.caijingyan;
					jianglijiemain.levelwenzi.text = duqudengji3[g][0];
					if(qianyijijingyan <= 0){
						jianglijiemain.img_jindutiaogundong.width = 1;
						egret.Tween.get(jianglijiemain.img_jindutiaogundong).to({width:parseInt(duqudengji3[g][1]) * 176 / shengjisuoxujingyan3},1000);
						egret.Tween.get(jianglijiemain.dengjitishi).to({alpha:1},2000).call(()=>{
							jianglijiemain.dengjitishi.alpha = 0;
						});
					}else{
						jianglijiemain.img_jindutiaogundong.width = parseInt[(duqudengji3[g][1]) - this.caijingyan] * 176 / shengjisuoxujingyan3;
						egret.Tween.get(jianglijiemain.img_jindutiaogundong).to({width:parseInt(duqudengji3[g][1]) * 176 / shengjisuoxujingyan3},1000);
					}
				}
			}
			if(Gerenshuxing.meirirenwutwo[3] == "0"){
				Weblianjie.fasongshuju("code:161","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"zengjialeixing"' +":"+ '"2"' +"}")
			}
			jianglijiemain.huodejingyanwenzi.text = "熟练度 + " + this.caijingyan;
			jianglijiemain.huodejingyanwenzi.alpha = 0.2;
			egret.Tween.get(jianglijiemain.huodejingyanwenzi).to({alpha:1},2000);	
		}else if(shifouchenggon == "shibai"){
			jianglijiemain.img_jianglibiaoti0.source = "img_pengrenshibai_png";
			jianglijiemain.jianglishuliang0.text = "这道菜烹饪没有完成，食客仍在等待！";
			jianglijiemain.img_jindutiaobeijing.alpha = 0;
			jianglijiemain.levelwenzi.text = "";
			jianglijiemain.huodejingyanwenzi.text = "";
			jianglijiemain.img_jindutiaogundong.alpha = 0;
			jianglijiemain.dengjitishi.alpha = 0;
		}	
	}

	public donghuakai(num2){
		if(num2 == "kai"){
			this.gundongdonghua();
		}
	}

	public youbiaodonghua(){
		this.youbiao.alpha = 0.5;
		egret.Tween.get(this.youbiao).to({alpha:1},200).call(()=>{
			egret.Tween.get(this.youbiao).to({alpha:0.5},200).call(()=>{
				this.youbiaodonghua();
			});
		})
	}

	public shandiandonghua(){
		this.shansuojindu.alpha = 0.5;
		egret.Tween.get(this.shansuojindu).to({alpha:1},200).call(()=>{
			egret.Tween.get(this.shansuojindu).to({alpha:0.5},200).call(()=>{
				this.shandiandonghua();
			});
		})
	}

	public huoyandonghua(){
		this.huoyantupian.alpha = 0.5;
		egret.Tween.get(this.huoyantupian).to({alpha:1},1000).call(()=>{
			egret.Tween.get(this.huoyantupian).to({alpha:0.5},1000).call(()=>{
				this.huoyandonghua();
			});
		})
	}

	public leixingfenzu1(){
		if(this.xuqiuleixing1 == "1"){
			this.xianshicai1 = "img_xiaohuo_png";
			this.xianshicai2 = "img_zhonghuo_png";
			this.xianshicai3 = "img_dahuo_png";
			this.lvsexuanxiang.source = "img_xiaohuo_png";
			this.zisexuanxiang.source = "img_zhonghuo_png";
			this.chengsexuanxiang.source = "img_dahuo_png";
			switch(this.xuqiumubiao1){
				case "1":
					this.dangqiantishitu.source = "img_xiaohuo_png";
					this.jinduyoubiao.x = this.jindutiao.x;
					this.tishiwenzi.text = "现在需要“文火慢炖”";
					this.zhengquejieduan = 1;
					break;
				case "2":
					this.dangqiantishitu.source = "img_zhonghuo_png";
					this.jinduyoubiao.x = this.jindutiao.x + this.jindutiao.width / 3;
					this.tishiwenzi.text = "接下来我们使用“中火收汁”";
					this.zhengquejieduan = 2;
					break;
				case "3":
					this.dangqiantishitu.source = "img_dahuo_png";
					this.jinduyoubiao.x = this.jindutiao.x + this.jindutiao.width / 3 * 2;
					this.tishiwenzi.text = "下面开始“大火爆炒”";
					this.zhengquejieduan = 3;
					break;
			}
		}else
		if(this.xuqiuleixing1 == "2"){
			this.xianshicai1 = "img_baicai1_png";
			this.xianshicai2 = "img_lajiao_png";
			this.xianshicai3 = "img_rou1_png";
			this.lvsexuanxiang.source = "img_baicai1_png";
			this.zisexuanxiang.source = "img_lajiao_png";
			this.chengsexuanxiang.source = "img_rou1_png";
			switch(this.xuqiumubiao1){
				case "1":
					this.dangqiantishitu.source = "img_baicai1_png";
					this.jinduyoubiao.x = this.jindutiao.x;
					this.tishiwenzi.text = "接下来我们放入“佐料”";
					this.zhengquejieduan = 1;
					break;
				case "2":
					this.dangqiantishitu.source = "img_lajiao_png";
					this.jinduyoubiao.x = this.jindutiao.x + this.jindutiao.width / 3;
					this.tishiwenzi.text = "下面请加入少许“调料”";
					this.zhengquejieduan = 2;
					break;
				case "3":
					this.dangqiantishitu.source = "img_rou1_png";
					this.jinduyoubiao.x = this.jindutiao.x + this.jindutiao.width / 3 * 2;
					this.tishiwenzi.text = "接下来我们加入“肉类原料”";
					this.zhengquejieduan = 3;
					break;
			}
		}
	}

	public leixingfenzu2(){
		if(this.xuqiuleixing2 == "1"){
			this.xianshicai1 = "img_xiaohuo_png";
			this.xianshicai2 = "img_zhonghuo_png";
			this.xianshicai3 = "img_dahuo_png";
			switch(this.xuqiumubiao2){
				case "1":
					this.xiaoshitishitu.source = "img_xiaohuo_png";
					break;
				case "2":
					this.xiaoshitishitu.source = "img_zhonghuo_png";
					break;
				case "3":
					this.xiaoshitishitu.source = "img_dahuo_png";
					break;
			}
		}else
		if(this.xuqiuleixing2 == "2"){
			this.xianshicai1 = "img_baicai1_png";
			this.xianshicai2 = "img_lajiao_png";
			this.xianshicai3 = "img_rou1_png";
			switch(this.xuqiumubiao2){
				case "1":
					this.xiaoshitishitu.source = "img_baicai1_png";
					break;
				case "2":
					this.xiaoshitishitu.source = "img_lajiao_png";
					break;
				case "3":
					this.xiaoshitishitu.source = "img_rou1_png";
					break;
			}
		}
	}

	public leixingfenzu3(){
		if(this.xuqiuleixing3 == "1"){
			this.xianshicai1 = "img_xiaohuo_png";
			this.xianshicai2 = "img_zhonghuo_png";
			this.xianshicai3 = "img_dahuo_png";
			switch(this.xuqiumubiao3){
				case "1":
					this.weilaitishitu.source = "img_xiaohuo_png";
					break;
				case "2":
					this.weilaitishitu.source = "img_zhonghuo_png";
					break;
				case "3":
					this.weilaitishitu.source = "img_dahuo_png";
					break;
			}
		}else
		if(this.xuqiuleixing3 == "2"){
			this.xianshicai1 = "img_baicai1_png";
			this.xianshicai2 = "img_lajiao_png";
			this.xianshicai3 = "img_rou1_png";
			switch(this.xuqiumubiao3){
				case "1":
					this.weilaitishitu.source = "img_baicai1_png";
					break;
				case "2":
					this.weilaitishitu.source = "img_lajiao_png";
					break;
				case "3":
					this.weilaitishitu.source = "img_rou1_png";
					break;
			}
		}
	}



}
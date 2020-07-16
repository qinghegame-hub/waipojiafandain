class Zhujiemianshangceng extends eui.Component implements  eui.UIComponent {
	public zhuyaozu:eui.Group;
	public img_tiziqianduan:eui.Image;
	public zhongbuzu1:eui.Group;
	public but_caipu1:eui.Button;
	public but_liuyan1:eui.Button;
	public but_guanli1:eui.Button;
	public but_jingyinbaobiao1:eui.Button;
	public zhuangatizu:eui.Group;
	public img_zhuangtaixianshibg:eui.Image;
	public shicaiwenzi:eui.Label;
	public img_shicai:eui.Image;
	public but_tianjia:eui.Button;
	public img_zhuangtaixianshibg0:eui.Image;
	public weishengwenzi:eui.Label;
	public img_saoba:eui.Image;
	public img_shicaibuzu:eui.Image;
	public yinxiaoicon:eui.Image;
	public yinxiaoicon0:eui.Image;
	public yinxiaoicon1:eui.Image;
	public yinxiaoicon2:eui.Image;
	public yinxiaoicon3:eui.Image;









	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.anniuchuli();
	}

	public anniuchuli():void{
		this.chushihua();
		//点击菜谱按钮时，触发
		this.but_caipu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openCaipu,this);
		//点击管理按钮时，触发
		this.but_guanli1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openGuanli,this);
		//点击食材添加按钮时触发
		this.but_tianjia.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishicai,this);
		//点击经营报表按钮时，触发
		this.but_jingyinbaobiao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjijingying,this);
		//点击留言按钮时触发
		this.but_liuyan1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiliuyan,this);
		//营销提示显示
		this.yinxiaotishixianshi();
		//每日任务显示
//		this.meirirenwuchushihua();
		

		
	}

	/*public meirirenwuchushihua(){
		if(Gerenshuxing.guideuiyindao > 21){
			this.richengzu.alpha = 1;
			this.richenganniu.enabled = true;
			this.richenganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openmeirirenwu,this);
			if(Gerenshuxing.meirirenwuone[3] == "0" || Gerenshuxing.meirirenwutwo[3] == "0" || Gerenshuxing.meirirenwutre[3] == "0"
			|| Gerenshuxing.meirirenwufor[3] == "0"){
				this.richenghongdian.alpha = 1;
			}else{
				this.richenghongdian.alpha = 0;
			}
		}else{
			this.richengzu.alpha = 0;
			this.richenganniu.enabled = false;
			this.richenghongdian.alpha = 0;
		}
	}*/

	/*
	打开每日任务界面
	*/
	/*public openmeirirenwu(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		let renwujiemian:Meirirenwujiemian = new Meirirenwujiemian();
		this.addChild(renwujiemian);
		renwujiemian.guanbi();
		renwujiemian.chushihua();
	}*/

	public openCaipu(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().caipujiemian("fandian","kai");
	}

	public openGuanli(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().caipujiemian("guanli","kai");

	}

	public dianjijingying(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().caipujiemian("jingying","kai");
	}

	public dianjishicai(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().changjingrukou("caishichang","kai");
	}

	public dianjiliuyan(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().caipujiemian("liuyan","kai");
	}

	public chushihua(){
		this.shicaiwenzi.text = "" + Gerenshuxing.yongyouyuanliao;
		this.weishengwenzi.text = "" + Gerenshuxing.zzweishengzhi;
		this.shicaiwenzitixing();
	}

	public shicaiwenzitixing(){
		if(Gerenshuxing.yongyouyuanliao >= 100){
			this.img_shicaibuzu.alpha = 0;
		}else{
			this.img_shicaibuzu.alpha = 1;
		}
	}

	public yinxiaotishixianshi(){
		if(Gameguanli.Kongzhitai().zhujiemiandingbu.parent){
			let xianshiyinxiaozu = [];
			if(Gerenshuxing.dibaokeliushijian > 0){
				xianshiyinxiaozu.push("img_meishijie_png");
			}
			if(Gerenshuxing.shengyuchuandan > 0){
				xianshiyinxiaozu.push("img_chuandanbiaozhi_png");
			}
			if(Gerenshuxing.shengyudianshi > 0){
				xianshiyinxiaozu.push("img_dianshibiaozhi_png");
			}
			if(Gerenshuxing.shengyupinglun > 0){
				xianshiyinxiaozu.push("img_pinglunbiaozhi_png");
			}
			if(Gerenshuxing.shengyudaiyan > 0){
				xianshiyinxiaozu.push("img_daiyanbiaozhi_png");
			}
			if(xianshiyinxiaozu[0] != undefined){
				this.yinxiaoicon.source = xianshiyinxiaozu[0];
			}else{
				this.yinxiaoicon.source = "";
			}
			if(xianshiyinxiaozu[1] != undefined){
				this.yinxiaoicon0.source = xianshiyinxiaozu[1];
			}else{
				this.yinxiaoicon0.source = "";
			}
			if(xianshiyinxiaozu[2] != undefined){
				this.yinxiaoicon1.source = xianshiyinxiaozu[2];
			}else{
				this.yinxiaoicon1.source = "";
			}
			if(xianshiyinxiaozu[3] != undefined){
				this.yinxiaoicon2.source = xianshiyinxiaozu[3];
			}else{
				this.yinxiaoicon2.source = "";
			}
			if(xianshiyinxiaozu[4] != undefined){
				this.yinxiaoicon3.source = xianshiyinxiaozu[4];
			}else{
				this.yinxiaoicon3.source = "";
			}
		}
	}


	
}
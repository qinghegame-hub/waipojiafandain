class Jinyingguanlijiemian extends eui.Component implements  eui.UIComponent {
	public biaotitupian:eui.Image;
	public jingyinguanlizu:eui.Group;
	public img_heisezhezao:eui.Image;
	public img_baobiaodiban:eui.Image;
	public but_guanbi:eui.Button;
	public keliuliangtext:eui.Label;
	public kerongliangtext:eui.Label;
	public lixianshouyitext:eui.Label;
	public waimaishouyitext:eui.Label;
	public yuangongxinzitext:eui.Label;
	public zujinshouru:eui.Label;
	public meiqishouru:eui.Label;
	public fadanshouru:eui.Label;
	public fangwuzujintext:eui.Label;
	public shuidianmeiqitext:eui.Label;
	public jingyinfadantext:eui.Label;
	public weishentext:eui.Label;
	public anbaotext:eui.Label;
	public xiaochaotijiatext:eui.Label;
	public xiaochitijiatext:eui.Label;
	public shangcaisudutext:eui.Label;
	public shicaichubeitext:eui.Label;
	public fandiankoubeitext:eui.Label;
	public huoguotijiatext:eui.Label;
	public zaocantijiatext:eui.Label;
	public shihaojiangditext:eui.Label;
	public shuomingbut:eui.Button;
	public shuomingbut0:eui.Button;
	public shuomingbut1:eui.Button;
	public shuomingbut2:eui.Button;
	public shuomingbut3:eui.Button;
	public shuomingbut4:eui.Button;
	public shuomingbut5:eui.Button;
	public shuomingbut6:eui.Button;
	public shuomingbut7:eui.Button;
	public shuomingbut8:eui.Button;
	public shuomingbut9:eui.Button;
	public shuomingbut10:eui.Button;
	public shuomingbut11:eui.Button;
	public shuomingbut12:eui.Button;
	public shuomingbut13:eui.Button;
	public shuomingbut14:eui.Button;
	public shuomingbut15:eui.Button;
	public shuomingbut16:eui.Button;




	public youxitishibiao:any;



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
		this.chushihua();
	}

	public chushihua(){
		this.youxitishibiao = RES.getRes("youxitishibiao_json");
		//增加关闭按钮点击
		this.but_guanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguanbi,this);
		Gerenshuxing.yuangongshuxing();
		this.keliuliangtext.text =  "" +Gerenshuxing.zzkeliuliang;
		this.kerongliangtext.text =  "" +Gerenshuxing.zzkerongliang;
		this.weishentext.text =  "" +Gerenshuxing.zzweishengzhi;
		this.shicaichubeitext.text =  "" +Gerenshuxing.yongyouyuanliao;
		this.anbaotext.text =  "" +Gerenshuxing.zzanbaozhi;
		this.fandiankoubeitext.text =  "" +Gerenshuxing.zzkoubeizhi;
		this.shangcaisudutext.text =  "" +Gerenshuxing.zzchushishangcaisudu;
		this.shihaojiangditext.text =  "" +Gerenshuxing.zzyuanliaoxiaohao;
		this.lixianshouyitext.text = Math.floor(parseInt(Gerenshuxing.daerzixinxi[1]) / 100 + 1) * 60 + "/h";
		this.waimaishouyitext.text = "24h";
		let yuangongbiao = Gerenshuxing.yuangongbiao;
		let xiaochaozengjia = 0;
		let huoguozengjia = 0;
		let xiaochizengjia = 0;
		let zaocanzengjia = 0;
		let yuangonggongzi = 0;
		for(var i = 0;i<Gerenshuxing.shiyongyuangong.length;i++){
			for(var j = 0;j<yuangongbiao.length;j++){
				if(Gerenshuxing.shiyongyuangong[i] == yuangongbiao[j].id){
					yuangonggongzi += parseInt(yuangongbiao[j].pay);
					switch(yuangongbiao[j].skill){
						case "1":
							xiaochaozengjia += parseInt(yuangongbiao[j].skillparameter);
							break;
						case "2":
							huoguozengjia += parseInt(yuangongbiao[j].skillparameter);
							break;
						case "3":
							xiaochizengjia += parseInt(yuangongbiao[j].skillparameter);
							break;
						case "4":
							zaocanzengjia += parseInt(yuangongbiao[j].skillparameter);
							break;
					}
				}
			}
		}
		this.xiaochaotijiatext.text = "" + xiaochaozengjia;
		this.huoguotijiatext.text = "" + huoguozengjia;
		this.xiaochitijiatext.text = "" + xiaochizengjia;
		this.zaocantijiatext.text = "" + zaocanzengjia;
		this.yuangongxinzitext.text = "" + yuangonggongzi + "/天";
		let fangwu = 0;
		let fangzu = 0;
		let meiqi = 0;
		let meiqifei = 0;
		let fadan = 0;
		let fadanfei = 0;
		let danjubiao = Gerenshuxing.danjubiao;
		for(var k = 0;k<Gerenshuxing.yongyoudanju.length;k ++){
			for(var n = 0;n<danjubiao.length;n++){
				if(Gerenshuxing.yongyoudanju[k] == danjubiao[n].id){
					switch(danjubiao[n].id){
						case "1001":
							fangwu += parseInt(danjubiao[n].debuff);
							fangzu += parseInt(danjubiao[n].pay);
							break;
						case "1002":
							meiqi += parseInt(danjubiao[n].debuff);
							meiqifei += parseInt(danjubiao[n].pay);
							break;
						case "1003":
							fadan += parseInt(danjubiao[n].debuff);
							fadanfei += parseInt(danjubiao[n].pay);
							break;
						case "1004":
							fadan += parseInt(danjubiao[n].debuff);
							fadanfei += parseInt(danjubiao[n].pay);
							break;
					}
				}
			}
		}
		if(fangwu > 0){
			this.fangwuzujintext.text = ""+ fangzu ;
			this.zujinshouru.text ="总收入-" +fangwu+"%";
		}else{
			this.fangwuzujintext.text = "已缴";
			this.zujinshouru.text = "";
		}
		if(meiqi > 0){
			this.shuidianmeiqitext.text = ""+ meiqifei ;
			this.meiqishouru.text = "总收入-" +meiqi+"%" ;
		}else{
			this.shuidianmeiqitext.text = "已缴";
			this.meiqishouru.text = "";
		}
		if(fadan > 0){
			this.jingyinfadantext.text = ""+ fadanfei;
			this.fadanshouru.text = "总收入-" +fadan+"%";
		}else{
			this.jingyinfadantext.text = "已缴";
			this.fadanshouru.text = "";
		}

		/*
		增加小提示按钮点击事件，点击后弹出介绍界面
		*/
		this.shuomingbut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming1,this);
		this.shuomingbut0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming2,this);
		this.shuomingbut1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming3,this);
		this.shuomingbut2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming4,this);
		this.shuomingbut3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming5,this);
		this.shuomingbut4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming6,this);
		this.shuomingbut5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming7,this);
		this.shuomingbut6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming8,this);
		this.shuomingbut7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming9,this);
		this.shuomingbut8.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming10,this);
		this.shuomingbut9.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming11,this);
		this.shuomingbut10.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming12,this);
		this.shuomingbut11.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming13,this);
		this.shuomingbut12.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming14,this);
		this.shuomingbut13.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming15,this);
		this.shuomingbut14.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming16,this);
		this.shuomingbut15.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming17,this);
		this.shuomingbut16.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuoming18,this);

	}

	public dianjiguanbi(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().caipujiemian("jingying","guan");
	}

	public shuoming1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "1"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "2"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "3"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "4"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "5"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming6(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "6"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming7(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "7"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming8(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "8"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming9(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "9"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming10(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "10"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming11(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "11"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming12(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "12"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming13(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "13"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming14(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "14"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming15(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "15"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming16(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "16"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming17(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "17"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public shuoming18(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "18"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public youxitishijiemian(neirong){
		let tishijiemian = new Youxitishiui();
		this.addChild(tishijiemian);
		tishijiemian.xianshineirong(neirong);
	}


	
}
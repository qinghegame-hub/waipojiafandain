class Jinyingguanlijiemian extends eui.Component implements  eui.UIComponent {
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
		this.lixianshouyitext.text = Math.floor(parseInt(Gerenshuxing.daerzixinxi[1]) / 20) + "/分钟";
		this.waimaishouyitext.text = "24小时";
		let yuangongbiao = RES.getRes("yuangongbiao_json");
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
		let danjubiao = RES.getRes("danjubiao_json");
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
			this.fangwuzujintext.text = "[已缴纳]";
			this.zujinshouru.text = "";
		}
		if(meiqi > 0){
			this.shuidianmeiqitext.text = ""+ meiqifei ;
			this.meiqishouru.text = "总收入-" +meiqi+"%" ;
		}else{
			this.shuidianmeiqitext.text = "[已缴纳]";
			this.meiqishouru.text = "";
		}
		if(fadan > 0){
			this.jingyinfadantext.text = ""+ fadanfei;
			this.fadanshouru.text = "总收入-" +fadan+"%";
		}else{
			this.jingyinfadantext.text = "[已缴纳]";
			this.fadanshouru.text = "";
		}
	}

	public dianjiguanbi(){
		Gameguanli.Kongzhitai().caipujiemian("jingying","guan");
	}
	
}
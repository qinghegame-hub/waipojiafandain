class Gonggaojiemian extends eui.Component implements  eui.UIComponent {
	public gonggaojiemianzu:eui.Group;
	public gonggaobeijing:eui.Image;
	public richengzu:eui.Group;
	public richenganniu:eui.Button;
	public richenghongdian:eui.Image;
	public taotaozu:eui.Group;
	public taotaoanniu:eui.Button;
	public taotaohongdian:eui.Image;
	public paihangzu:eui.Group;
	public paihanganniu:eui.Button;
	public paihanghongdian:eui.Image;
	public tiaozhanzu:eui.Group;
	public tiaozhananniu:eui.Button;
	public tiaozhanhongdian:eui.Image;


	public chaoshishuliang:any = [0,0,0,0,0,0,1,1,1];//超市道具数量[0,0,0,0,0,0]
	public chaoshijiage:any = [0,0,0,0,0,0,0,0,0];//超市道具价格[0,0,0,0,0,0]
	public chaoshiid:any= [0,0,0,0,0,0,0,0,0];//超市道具ID[0,0,0,0,0,0]
	public chaoshitupian:any= [0,0,0,0,0,0,0,0,0];//超市图片[0,0,0,0,0,0]
	public chaoshimingcheng:any= [0,0,0,0,0,0,0,0,0];//超市道具名称[0,0,0,0,0,0]
	public chaoshiteshu:boolean;//超市第一个格子是否特价
	public chaoshigoumaiui:Taotaoshangdianui;//超市商店界面
	public daojutipsui:Daojutipsui;

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
	}

	public chushihua(){
		//日程界面相关
		this.richengzu.alpha = 1;
		this.richenganniu.enabled = true;
		this.richenghongdian.alpha = 0;
		this.richenganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openricheng,this);
		this.richengchushihua();
		//淘淘界面相关
		this.taotaozu.alpha = 1;
		this.taotaoanniu.enabled = true;
		this.taotaohongdian.alpha = 0;
		this.taotaoanniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.opentaotao,this);
		this.taotaochushihua();
		//排行界面相关
		this.paihangzu.alpha = 1;
		this.paihanganniu.enabled = true;
		this.paihanghongdian.alpha = 0;
		this.paihanganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openpaihang,this);
		this.paihangchushihua();
		//挑战界面相关
		this.tiaozhanzu.alpha = 1;
		this.tiaozhananniu.enabled = true;
		this.tiaozhanhongdian.alpha = 0;
		this.tiaozhananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.opentiaozhan,this);
		this.tiaozhanchushihua();	
	}

	public openricheng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		let renwujiemian:Meirirenwujiemian = new Meirirenwujiemian();
		this.addChild(renwujiemian);
		renwujiemian.guanbi();
		renwujiemian.chushihua();
	}

	public richengchushihua(){
		if(Gerenshuxing.meirirenwuone[3] == "0" || Gerenshuxing.meirirenwutwo[3] == "0" || Gerenshuxing.meirirenwutre[3] == "0"
			|| Gerenshuxing.meirirenwufor[3] == "0"){
				this.richenghongdian.alpha = 1;
		}else{
			this.richenghongdian.alpha = 0;
		}
	}

	public opentaotao(){
		let chaoshiyongpinid = [];
		let chaoshiyongpinjiage = [];
		for(var i = 0;i<Gerenshuxing.chaoshishangdianbiao.length;i++){
			if(Gerenshuxing.chaoshishangdianbiao[i].shangdianleixing == "5"){
				chaoshiyongpinid.push(Gerenshuxing.chaoshishangdianbiao[i].id);
				chaoshiyongpinjiage.push(Gerenshuxing.chaoshishangdianbiao[i].shoujia);
			}
		}
		for(var k =0;k<9;k++){
			this.chaoshiid[k] = chaoshiyongpinid[k];
			this.chaoshijiage[k] = chaoshiyongpinjiage[k];
			this.chaoshishuliang[k] = 100;
		}
		this.xianshichaoshishangdianjiemian();
	}

	public xianshichaoshishangdianjiemian(){
		this.chaoshigoumaiui = new Taotaoshangdianui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.chaoshigoumaiui);
		this.chaoshigoumaiui.guanbijiemain_taotao_9.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.chaoshigoumaiui.heisezhezao_taotao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.chaoshijiemianchushihua();
	}

	public chaoshijiemianchushihua(){
		this.chaoshigoumaiui.biaotilan_taotao.text = "淘淘商店";
		for(var h = 0;h<Gerenshuxing.daojubiao.length;h++){
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[0]){
				this.chaoshitupian[0] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[0] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[1]){
				this.chaoshitupian[1] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[1] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[2]){
				this.chaoshitupian[2] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[2] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[3]){
				this.chaoshitupian[3] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[3] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[4]){
				this.chaoshitupian[4] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[4] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[5]){
				this.chaoshitupian[5] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[5] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[6]){
				this.chaoshitupian[6] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[6] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[7]){
				this.chaoshitupian[7] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[7] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[8]){
				this.chaoshitupian[8] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[8] = Gerenshuxing.daojubiao[h].mingcheng;
			};
		}
		this.chaoshigoumaiui.daojutubiao_taotao_1.source = this.chaoshitupian[0];
		this.chaoshigoumaiui.daojutubiao_taotao_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips1,this);
		this.chaoshigoumaiui.daojutubiao_taotao_2.source = this.chaoshitupian[1];
		this.chaoshigoumaiui.daojutubiao_taotao_2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips2,this);
		this.chaoshigoumaiui.daojutubiao_taotao_3.source = this.chaoshitupian[2];
		this.chaoshigoumaiui.daojutubiao_taotao_3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips3,this);
		this.chaoshigoumaiui.daojutubiao_taotao_4.source = this.chaoshitupian[3];
		this.chaoshigoumaiui.daojutubiao_taotao_4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips4,this);
		this.chaoshigoumaiui.daojutubiao_taotao_5.source = this.chaoshitupian[4];
		this.chaoshigoumaiui.daojutubiao_taotao_5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips5,this);
		this.chaoshigoumaiui.daojutubiao_taotao_6.source = this.chaoshitupian[5];
		this.chaoshigoumaiui.daojutubiao_taotao_6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips6,this);
		this.chaoshigoumaiui.daojutubiao_taotao_7.source = this.chaoshitupian[6];
		this.chaoshigoumaiui.daojutubiao_taotao_7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips7,this);
		this.chaoshigoumaiui.daojutubiao_taotao_8.source = this.chaoshitupian[7];
		this.chaoshigoumaiui.daojutubiao_taotao_8.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips8,this);
		this.chaoshigoumaiui.daojutubiao_taotao_9.source = this.chaoshitupian[8];
		this.chaoshigoumaiui.daojutubiao_taotao_9.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips9,this);
		if(parseInt(this.chaoshishuliang[0]) <= 0){
			this.chaoshigoumaiui.goumaijine_taotao_1.text = "已售罄";
			this.chaoshigoumaiui.but_goumai_taotao_1.enabled = false;
			this.chaoshigoumaiui.but_goumai_taotao_1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi1keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine_taotao_1.text = "- " + this.chaoshijiage[0];
			this.chaoshigoumaiui.but_goumai_taotao_1.enabled = true;
			this.chaoshigoumaiui.but_goumai_taotao_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi1keng,this);
		}
		if(parseInt(this.chaoshishuliang[1]) <= 0){
			this.chaoshigoumaiui.goumaijine_taotao_2.text = "已售罄";
			this.chaoshigoumaiui.but_goumai_taotao_2.enabled = false;
			this.chaoshigoumaiui.but_goumai_taotao_2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi2keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine_taotao_2.text = "- " + this.chaoshijiage[1];
			this.chaoshigoumaiui.but_goumai_taotao_2.enabled = true;
			this.chaoshigoumaiui.but_goumai_taotao_2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi2keng,this);
		}
		if(parseInt(this.chaoshishuliang[2]) <= 0){
			this.chaoshigoumaiui.goumaijine_taotao_3.text = "已售罄";
			this.chaoshigoumaiui.but_goumai_taotao_3.enabled = false;
			this.chaoshigoumaiui.but_goumai_taotao_3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi3keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine_taotao_3.text = "- " + this.chaoshijiage[2];
			this.chaoshigoumaiui.but_goumai_taotao_3.enabled = true;
			this.chaoshigoumaiui.but_goumai_taotao_3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi3keng,this);
		}
		if(parseInt(this.chaoshishuliang[3]) <= 0){
			this.chaoshigoumaiui.goumaijine_taotao_4.text = "已售罄";
			this.chaoshigoumaiui.but_goumai_taotao_4.enabled = false;
			this.chaoshigoumaiui.but_goumai_taotao_4.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi4keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine_taotao_4.text = "- " + this.chaoshijiage[3];
			this.chaoshigoumaiui.but_goumai_taotao_4.enabled = true;
			this.chaoshigoumaiui.but_goumai_taotao_4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi4keng,this);
		}
		if(parseInt(this.chaoshishuliang[4]) <= 0){
			this.chaoshigoumaiui.goumaijine_taotao_5.text = "已售罄";
			this.chaoshigoumaiui.but_goumai_taotao_5.enabled = false;
			this.chaoshigoumaiui.but_goumai_taotao_5.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi5keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine_taotao_5.text = "- " + this.chaoshijiage[4];
			this.chaoshigoumaiui.but_goumai_taotao_5.enabled = true;
			this.chaoshigoumaiui.but_goumai_taotao_5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi5keng,this);
		}
		if(parseInt(this.chaoshishuliang[5]) <= 0){
			this.chaoshigoumaiui.goumaijine_taotao_6.text = "已售罄";
			this.chaoshigoumaiui.but_goumai_taotao_6.enabled = false;
			this.chaoshigoumaiui.but_goumai_taotao_6.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi6keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine_taotao_6.text = "- " + this.chaoshijiage[5];
			this.chaoshigoumaiui.but_goumai_taotao_6.enabled = true;
			this.chaoshigoumaiui.but_goumai_taotao_6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi6keng,this);
		}
		if(parseInt(this.chaoshishuliang[6]) <= 0){
			this.chaoshigoumaiui.goumaijine_taotao_7.text = "已售罄";
			this.chaoshigoumaiui.but_goumai_taotao_7.enabled = false;
			this.chaoshigoumaiui.but_goumai_taotao_7.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi7keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine_taotao_7.text = "- " + this.chaoshijiage[6];
			this.chaoshigoumaiui.but_goumai_taotao_7.enabled = true;
			this.chaoshigoumaiui.but_goumai_taotao_7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi7keng,this);
		}
		if(parseInt(this.chaoshishuliang[7]) <= 0){
			this.chaoshigoumaiui.goumaijine_taotao_8.text = "已售罄";
			this.chaoshigoumaiui.but_goumai_taotao_8.enabled = false;
			this.chaoshigoumaiui.but_goumai_taotao_8.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi8keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine_taotao_8.text = "- " + this.chaoshijiage[7];
			this.chaoshigoumaiui.but_goumai_taotao_8.enabled = true;
			this.chaoshigoumaiui.but_goumai_taotao_8.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi8keng,this);
		}
		if(parseInt(this.chaoshishuliang[8]) <= 0){
			this.chaoshigoumaiui.goumaijine_taotao_9.text = "已售罄";
			this.chaoshigoumaiui.but_goumai_taotao_9.enabled = false;
			this.chaoshigoumaiui.but_goumai_taotao_9.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi9keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine_taotao_9.text = "- " + this.chaoshijiage[8];
			this.chaoshigoumaiui.but_goumai_taotao_9.enabled = true;
			this.chaoshigoumaiui.but_goumai_taotao_9.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi9keng,this);
		}
	}

	public guanbichaoshiui(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gameguanli.Kongzhitai().dingbuui.parent){
			Gameguanli.Kongzhitai().dingbuui.removeChild(this.chaoshigoumaiui);
		}
	}

	public daojutips1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[0]);
	}

	public daojutips2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[1]);
	}

	public daojutips3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[2]);
	}

	public daojutips4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[3]);
	}

	public daojutips5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[4]);
	}

	public daojutips6(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[5]);
	}

	public daojutips7(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[6]);
	}

	public daojutips8(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[7]);
	}

	public daojutips9(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[8]);
	}

	public daojutipsjiemian(daojuid){
		this.daojutipsui = new Daojutipsui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.daojutipsui);
		for(var n = 0;n<Gerenshuxing.daojubiao.length;n++){
			if(Gerenshuxing.daojubiao[n].id == daojuid){
				this.daojutipsui.daojuicon.source = Gerenshuxing.daojubiao[n].xianshiicon;
				this.daojutipsui.daojumingzi.text = Gerenshuxing.daojubiao[n].mingcheng;
				this.daojutipsui.leixingming.text = Gerenshuxing.daojubiao[n].daojuleixing;
				this.daojutipsui.shuomingneirong.text = Gerenshuxing.daojubiao[n].tips;
			}
		}
		this.daojutipsui.heiseguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbitips,this);
		this.daojutipsui.shiyonganniu.alpha = 0;
		this.daojutipsui.shiyonganniu.enabled = false;
		this.daojutipsui.quedinganniu.alpha = 1;
		this.daojutipsui.quedinganniu.enabled = true;
		this.daojutipsui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbitips,this);
	}

	public guanbitips(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.daojutipsui);
	}


	public chaoshi1keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[0])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[0]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[0] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[0] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[0] -= 1;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi2keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[1])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[1]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[1] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[1] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[1] -= 1;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi3keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[2])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[2]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[2] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[2] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[2] -= 1;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi4keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[3])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[3]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[3] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[3] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[3] -= 1;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi5keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[4])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[4]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[4] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[4] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[4] -= 1;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi6keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[5])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[5]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[5] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[5] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[5] -= 1;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi7keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[6])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[6]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[6] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[6] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[6] -= 1;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}


	public chaoshi8keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[7])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[7]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[7] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[7] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[7] -= 1;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}


	public chaoshi9keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[8])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[8]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[8] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[8] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[8] -= 1;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}



	public taotaochushihua(){

	}

	public openpaihang(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		let paihangbangui = new Paihangbangjiemian();
		this.addChild(paihangbangui);
		paihangbangui.chushihua();
	}

	public paihangchushihua(){
		if(Gerenshuxing.tiaozhanbeishu[2] == "1"){
			this.paihanghongdian.alpha = 1;
		}else{
			this.paihanghongdian.alpha = 0;
		}
	}

	public opentiaozhan(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().pvppipeiui("kai");
	}

	public tiaozhanchushihua(){
		if(Gerenshuxing.tiaozhanbeishu[0] != "0"){
			this.tiaozhanhongdian.alpha = 1;
		}else{
			this.tiaozhanhongdian.alpha = 0;
		}

	}
	
}
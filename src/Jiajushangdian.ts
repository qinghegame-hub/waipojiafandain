class Jiajushangdian extends egret.DisplayObjectContainer{
	public chaoshishuliang:any = [0,0,0,0,0,0];//超市道具数量[0,0,0,0,0,0]
	public chaoshijiage:any = [0,0,0,0,0,0];//超市道具价格[0,0,0,0,0,0]
	public chaoshiid:any= [0,0,0,0,0,0];//超市道具ID[0,0,0,0,0,0]
	public chaoshitupian:any= [0,0,0,0,0,0];//超市图片[0,0,0,0,0,0]
	public chaoshimingcheng:any= [0,0,0,0,0,0];//超市道具名称[0,0,0,0,0,0]
	public chaoshiteshu:boolean;//超市第一个格子是否特价
	public chaoshigoumaiui:Chaoshishangdianui;//超市商店界面

	public daojutipsui:Daojutipsui;


	public constructor() {
		super()
	}

	public chaoshimaimai(dazheid,){
		this.chaoshiteshu = false;
		for(var k =0;k<6;k++){
			let suijichushou = Math.floor(Math.random() * Gerenshuxing.jiajushangdianbiao.length);
			this.chaoshiid[k] = Gerenshuxing.jiajushangdianbiao[suijichushou].id;
			this.chaoshijiage[k] = Gerenshuxing.jiajushangdianbiao[suijichushou].shoujia;
			this.chaoshishuliang[k] = 1;
		}
		for(var i = 0;i<Gerenshuxing.jiajushangdianbiao.length;i++){
			if(Gerenshuxing.jiajushangdianbiao[i].teshuid == Gerenshuxing.teshushijian){
				this.chaoshiid[0] = Gerenshuxing.jiajushangdianbiao[i].id;
				this.chaoshijiage[0] = Math.floor(parseInt(Gerenshuxing.jiajushangdianbiao[i].shoujia) * (parseInt(Gerenshuxing.jiajushangdianbiao[i].zhekou) / 10));
				this.chaoshishuliang[0] = 1;
				this.chaoshiteshu = true;
				break;
			}
		}
		this.xianshichaoshishangdianjiemian();
	}

	public xianshichaoshishangdianjiemian(){
		this.chaoshigoumaiui = new Chaoshishangdianui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.chaoshigoumaiui);
		this.chaoshigoumaiui.heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.chaoshijiemianchushihua();
	}

	public chaoshijiemianchushihua(){
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
		}
		this.chaoshigoumaiui.daojutubiao.source = this.chaoshitupian[0];
		this.chaoshigoumaiui.daojutubiao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips1,this);
		this.chaoshigoumaiui.daojutubiao0.source = this.chaoshitupian[1];
		this.chaoshigoumaiui.daojutubiao0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips2,this);
		this.chaoshigoumaiui.daojutubiao1.source = this.chaoshitupian[2];
		this.chaoshigoumaiui.daojutubiao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips3,this);
		this.chaoshigoumaiui.daojutubiao2.source = this.chaoshitupian[3];
		this.chaoshigoumaiui.daojutubiao2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips4,this);
		this.chaoshigoumaiui.daojutubiao3.source = this.chaoshitupian[4];
		this.chaoshigoumaiui.daojutubiao3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips5,this);
		this.chaoshigoumaiui.daojutubiao4.source = this.chaoshitupian[5];
		this.chaoshigoumaiui.daojutubiao4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips6,this);
		if(this.chaoshiteshu == true){
			this.chaoshigoumaiui.zhekoutubiao.alpha = 1;
		}else{
			this.chaoshigoumaiui.zhekoutubiao.alpha = 0;
		}
		if(parseInt(this.chaoshishuliang[0]) <= 0){
			this.chaoshigoumaiui.goumaijine.text = "已售罄";
			this.chaoshigoumaiui.but_goumai.enabled = false;
			this.chaoshigoumaiui.but_goumai.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi1keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine.text = "- " + this.chaoshijiage[0];
			this.chaoshigoumaiui.but_goumai.enabled = true;
			this.chaoshigoumaiui.but_goumai.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi1keng,this);
		}
		if(parseInt(this.chaoshishuliang[1]) <= 0){
			this.chaoshigoumaiui.goumaijine0.text = "已售罄";
			this.chaoshigoumaiui.but_goumai0.enabled = false;
			this.chaoshigoumaiui.but_goumai0.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi2keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine0.text = "- " + this.chaoshijiage[1];
			this.chaoshigoumaiui.but_goumai0.enabled = true;
			this.chaoshigoumaiui.but_goumai0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi2keng,this);
		}
		if(parseInt(this.chaoshishuliang[2]) <= 0){
			this.chaoshigoumaiui.goumaijine1.text = "已售罄";
			this.chaoshigoumaiui.but_goumai1.enabled = false;
			this.chaoshigoumaiui.but_goumai1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi3keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine1.text = "- " + this.chaoshijiage[2];
			this.chaoshigoumaiui.but_goumai1.enabled = true;
			this.chaoshigoumaiui.but_goumai1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi3keng,this);
		}
		if(parseInt(this.chaoshishuliang[3]) <= 0){
			this.chaoshigoumaiui.goumaijine2.text = "已售罄";
			this.chaoshigoumaiui.but_goumai2.enabled = false;
			this.chaoshigoumaiui.but_goumai2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi4keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine2.text = "- " + this.chaoshijiage[3];
			this.chaoshigoumaiui.but_goumai2.enabled = true;
			this.chaoshigoumaiui.but_goumai2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi4keng,this);
		}
		if(parseInt(this.chaoshishuliang[4]) <= 0){
			this.chaoshigoumaiui.goumaijine3.text = "已售罄";
			this.chaoshigoumaiui.but_goumai3.enabled = false;
			this.chaoshigoumaiui.but_goumai3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi5keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine3.text = "- " + this.chaoshijiage[4];
			this.chaoshigoumaiui.but_goumai3.enabled = true;
			this.chaoshigoumaiui.but_goumai3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi5keng,this);
		}
		if(parseInt(this.chaoshishuliang[5]) <= 0){
			this.chaoshigoumaiui.goumaijine4.text = "已售罄";
			this.chaoshigoumaiui.but_goumai4.enabled = false;
			this.chaoshigoumaiui.but_goumai4.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi6keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine4.text = "- " + this.chaoshijiage[5];
			this.chaoshigoumaiui.but_goumai4.enabled = true;
			this.chaoshigoumaiui.but_goumai4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi6keng,this);
		}
	}

	public guanbichaoshiui(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.chaoshigoumaiui);
	}

	public daojutips1(){
		this.daojutipsjiemian(this.chaoshiid[0]);
	}

	public daojutips2(){
		this.daojutipsjiemian(this.chaoshiid[1]);
	}

	public daojutips3(){
		this.daojutipsjiemian(this.chaoshiid[2]);
	}

	public daojutips4(){
		this.daojutipsjiemian(this.chaoshiid[3]);
	}

	public daojutips5(){
		this.daojutipsjiemian(this.chaoshiid[4]);
	}

	public daojutips6(){
		this.daojutipsjiemian(this.chaoshiid[5]);
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
	}

	public guanbitips(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.daojutipsui);
	}


	public chaoshi1keng(){
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[0])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[0]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[0] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[0] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[0] = 0;
			this.chaoshijiemianchushihua();
			if(this.chaoshiteshu == true){
				Gameguanli.Kongzhitai().paomadengui("天降鸿运！“"+ Gerenshuxing.mingzi +"”以超低的价格购买到超市出售的特价商品["+ this.chaoshimingcheng[0] +"]！");
			}
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi2keng(){
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[1])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[1]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[1] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[1] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[1] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi3keng(){
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[2])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[2]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[2] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[2] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[2] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi4keng(){
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[3])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[3]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[3] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[3] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[3] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi5keng(){
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[4])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[4]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[4] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[4] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[4] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi6keng(){
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[5])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[5]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[5] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[5] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[5] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}
}
class Wendatijiemian extends eui.Component implements  eui.UIComponent {
	public datijiemianzu:eui.Group;
	public heisezhezao:eui.Image;
	public datizu:eui.Group;
	public wentirentu:eui.Image;
	public datibikuang:eui.Image;
	public guanbidati:eui.Button;
	public xuanxiananniua:eui.Button;
	public xuanxiananniub:eui.Button;
	public xuanxiananniuc:eui.Button;
	public xuanxiananniud:eui.Button;
	public datibiaoti:eui.Label;
	public duixiaing:eui.Label;
	public duixiangren:eui.Label;
	public jiangli:eui.Label;
	public jinrishenyu:eui.Label;
	public shengtucishu:eui.Label;
	public jianglishuliang:eui.Label;
	public jiangliicon:eui.Image;
	public timuneirong:eui.Label;
	public axuanxiang:eui.Label;
	public adaan:eui.Label;
	public bdaan:eui.Label;
	public cdaan:eui.Label;
	public ddaan:eui.Label;
	public bxuanxiang:eui.Label;
	public cxuanxiang:eui.Label;
	public dxuanxiang:eui.Label;


	public chengyuanbiao:any;//家庭成员表;
	public jianglileixing:string;//本次奖励类型;
	public jianglishu:string;//本次奖励数量;

	public zhengquedaan:string = "F";//本次正确答案;

	public datiduixiang:string;//本次答题的出题对象;


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

	public chushihua(duixiang?:string){
		this.datiduixiang = duixiang;
		//先把按钮隐藏
		this.xuanxiananniua.enabled = false;
		this.xuanxiananniua.alpha = 0;
		this.xuanxiananniub.enabled = false;
		this.xuanxiananniub.alpha = 0;
		this.xuanxiananniuc.enabled = false;
		this.xuanxiananniuc.alpha = 0;
		this.xuanxiananniud.enabled = false;
		this.xuanxiananniud.alpha = 0;
		//关闭按钮处理
		this.guanbidati.enabled = true;
		this.guanbidati.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbidatijiemian,this);
		this.heisezhezao.touchEnabled = true;
		this.heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbidatijiemian,this);

		//判断显示内容
		if(duixiang == "1"){
			this.datibiaoti.text = "家庭交谈";
			this.duixiaing.text = "成员";
			this.duixiangren.text = "大儿子";
			this.jiangli.text = "奖励";
			this.jinrishenyu.text = "本次剩余:";
			this.shengtucishu.text = Gerenshuxing.daerzijiaotan + "";
			this.wentirentu.source = "img_daerzibiaoshi_png";
		}else if(duixiang == "2"){
			this.datibiaoti.text = "家庭交谈";
			this.duixiaing.text = "成员";
			this.duixiangren.text = "二儿子";
			this.jiangli.text = "奖励";
			this.jinrishenyu.text = "本次剩余:";
			this.shengtucishu.text = Gerenshuxing.ererzijiaotan + "";
			this.wentirentu.source = "img_xiaoerzibiaoshi_png";
		}else if(duixiang == "3"){
			this.datibiaoti.text = "家庭交谈";
			this.duixiaing.text = "成员";
			this.duixiangren.text = "大儿媳";
			this.jiangli.text = "奖励";
			this.jinrishenyu.text = "本次剩余:";
			this.shengtucishu.text = Gerenshuxing.xifujiaotan + "";
			this.wentirentu.source = "img_xifubiaoshi_png";
		}else if(duixiang == "4"){
			this.datibiaoti.text = "家庭交谈";
			this.duixiaing.text = "成员";
			this.duixiangren.text = "孙女";
			this.jiangli.text = "奖励";
			this.jinrishenyu.text = "本次剩余:";
			this.shengtucishu.text = Gerenshuxing.sunnvjiaotan + "";
			this.wentirentu.source = "img_sunnvbiaoshi_png";
		}
		this.jianglixianshichu(duixiang);
		this.datiluojichuli(duixiang);
	}

	public jianglixianshichu(duixiang){
		this.chengyuanbiao = Gerenshuxing.jiatingchengyuan;
		this.jianglileixing = "0";
		this.jianglishu = "0";
		for(var i = 0;i<this.chengyuanbiao.length;i++){
			if(this.chengyuanbiao[i].id == duixiang){
				this.jianglileixing = this.chengyuanbiao[i].datijiangli;
				this.jianglishu = this.chengyuanbiao[i].jianglinum;
				break;
			}
		}
		this.jianglixianshi(this.jianglileixing,this.jianglishu);
	}

	public jianglixianshi(leixing,shuliang){
		switch(leixing){
			case "0":
				this.jiangliicon.source = "";
				this.jianglishuliang.text = "";
				break;
			case "1":
				this.jiangliicon.source = "img_qian_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "2":
				this.jiangliicon.source = "img_jiating_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "3":
				this.jiangliicon.source = "img_jiankang_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "4":
				this.jiangliicon.source = "img_xinqing_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "5":
				this.jiangliicon.source = "img_xingfu_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "6":
				this.jiangliicon.source = "img_daerzixinqinicon_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "7":
				this.jiangliicon.source = "img_ererzixinqinicon_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "8":
				this.jiangliicon.source = "img_xifuxinqingicon_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "9":
				this.jiangliicon.source = "img_sunnvxinqingicon_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "10":
				this.jiangliicon.source = "img_daerzinengliicon_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "11":
				this.jiangliicon.source = "img_ererzinengliicon_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "12":
				this.jiangliicon.source = "img_xifunengliicon_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			case "13":
				this.jiangliicon.source = "img_sunnvnengliicon_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			default:
				if(parseInt(leixing) >= 1000 && parseInt(leixing) < 10000){
					this.jianglicaipuxianshi(leixing,shuliang);
				}else if(parseInt(leixing) >= 10000){
					this.jianglidaojuxianshi(leixing,shuliang);
				};
				break;
		}
	}

	public jianglicaipuxianshi(leixing,shuliang){
		let caipubiao = Gerenshuxing.shipubiao;
		for(var i = 0;i<caipubiao.length;i++){
			if(caipubiao[i].id == leixing){
				this.jiangliicon.source = caipubiao[i].id + "_png";
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			}
		}
	}

	public jianglidaojuxianshi(leixing,shuliang){
		for(var i = 0;i<Gerenshuxing.daojubiao.length;i++){
			if(Gerenshuxing.daojubiao[i].id == leixing){
				this.jiangliicon.source = Gerenshuxing.daojubiao[i].xianshiicon;
				this.jianglishuliang.text = "+ " + shuliang;
				break;
			}
		}
	}

	public datiluojichuli(duixiang){
		let tiku = RES.getRes("daerzitiku_json");
		if(duixiang == "1"){
			tiku = RES.getRes("daerzitiku_json");
		}else if(duixiang == "2"){
			tiku = RES.getRes("ererzitiku_json");
		}else if(duixiang == "3"){
			tiku = RES.getRes("xifutiku_json");
		}else if(duixiang == "4"){
			tiku = RES.getRes("sunnvtiku_json");
		}
		let suijitixuhao = Math.floor(Math.random() * tiku.length);
		let timu = tiku[suijitixuhao];
		this.timuneirong.text = timu.timushuoming;
		this.zhengquedaan = timu.zhengquedaan;
		if(timu.daana != ""){
			this.axuanxiang.text = "A";
			this.adaan.text = timu.daana;
			this.xuanxiananniua.enabled = true;
			this.xuanxiananniua.alpha = 1;
			this.xuanxiananniua.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidaana,this);
		}else{
			this.axuanxiang.text = "";
			this.adaan.text = "";
			this.xuanxiananniua.enabled = false;
			this.xuanxiananniua.alpha = 0;
		}
		if(timu.daanb != ""){
			this.bxuanxiang.text = "B";
			this.bdaan.text = timu.daanb;
			this.xuanxiananniub.enabled = true;
			this.xuanxiananniub.alpha = 1;
			this.xuanxiananniub.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidaanb,this);
		}else{
			this.bxuanxiang.text = "";
			this.bdaan.text = "";
			this.xuanxiananniub.enabled = false;
			this.xuanxiananniub.alpha = 0;
		}
		if(timu.daanc != ""){
			this.cxuanxiang.text = "C";
			this.cdaan.text = timu.daanc;
			this.xuanxiananniuc.enabled = true;
			this.xuanxiananniuc.alpha = 1;
			this.xuanxiananniuc.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidaanc,this);
		}else{
			this.cxuanxiang.text = "";
			this.cdaan.text = "";
			this.xuanxiananniuc.enabled = false;
			this.xuanxiananniuc.alpha = 0;
		}
		if(timu.daand != ""){
			this.dxuanxiang.text = "D";
			this.ddaan.text = timu.daand;
			this.xuanxiananniud.enabled = true;
			this.xuanxiananniud.alpha = 1;
			this.xuanxiananniud.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidaand,this);
		}else{
			this.dxuanxiang.text = "";
			this.ddaan.text = "";
			this.xuanxiananniud.enabled = false;
			this.xuanxiananniud.alpha = 0;
		}
	}

	public dianjidaana(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.zhengquedaan == "A"){
			Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，回答正确！");
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"' + this.jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + this.jianglishu + '"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.shuaxintimu();
			this.panduanmeirirenwu();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("这个答案似乎并不是TA需要的...");
			this.shuaxintimu();
		}
	}

	public dianjidaanb(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.zhengquedaan == "B"){
			Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，回答正确！");
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"' + this.jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + this.jianglishu + '"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.shuaxintimu();
			this.panduanmeirirenwu();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("这个答案似乎并不是TA需要的...");
			this.shuaxintimu();
		}
	}

	public dianjidaanc(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.zhengquedaan == "C"){
			Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，回答正确！");
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"' + this.jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + this.jianglishu + '"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.shuaxintimu();
			this.panduanmeirirenwu();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("这个答案似乎并不是TA需要的...");
			this.shuaxintimu();
		}
	}

	public dianjidaand(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.zhengquedaan == "D"){
			Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，回答正确！");
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"' + this.jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + this.jianglishu + '"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.shuaxintimu();
			this.panduanmeirirenwu();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("这个答案似乎并不是TA需要的...");
			this.shuaxintimu();
		}
	}

	public shuaxintimu(){
		switch(this.datiduixiang){
			case "1":
				if(Gerenshuxing.daerzijiaotan > 0){
					Gerenshuxing.daerzijiaotan -= 1;
					this.chushihua("1");
				}else{
					this.guanbidatijiemian();
				}
				break;
			case "2":
				if(Gerenshuxing.ererzijiaotan > 0){
					Gerenshuxing.ererzijiaotan -= 1;
					this.chushihua("2");
				}else{
					this.guanbidatijiemian();
				}
				break;
			case "3":
				if(Gerenshuxing.xifujiaotan > 0){
					Gerenshuxing.xifujiaotan -= 1;
					this.chushihua("3");
				}else{
					this.guanbidatijiemian();
				}
				break;
			case "4":
				if(Gerenshuxing.sunnvjiaotan > 0){
					Gerenshuxing.sunnvjiaotan -= 1;
					this.chushihua("4");
				}else{
					this.guanbidatijiemian();
				}
				break;
		}
	}

	public guanbidatijiemian(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.parent.removeChild(this);
	}

	public panduanmeirirenwu(){
		let meirirenwubiao = Gerenshuxing.meirirenwubiao;
		for(var i = 0;i<meirirenwubiao.length;i++){
			if(meirirenwubiao[i].id == Gerenshuxing.meirirenwufor[0]){
				if(meirirenwubiao[i].renwuduixiang == this.datiduixiang){
					if(Gerenshuxing.meirirenwufor[3] == "0"){
						Weblianjie.fasongshuju("code:161","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"zengjialeixing"' +":"+ '"4"' +"}");
						break;
					}
				}
			}
		}
	}
	
}
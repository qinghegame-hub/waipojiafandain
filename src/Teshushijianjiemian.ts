class Teshushijianjiemian extends eui.Component implements  eui.UIComponent {
	public querenkuangzu:eui.Group;
	public heisediban0:eui.Image;
	public tongyongtishizu0:eui.Group;
	public img_tongyongtishikuang0:eui.Image;
	public tishiwenzi0:eui.Label;
	public but_queding1:eui.Button;
	public but_shuangbei0:eui.Button;
	public biaotiwenzi:eui.Label;
	public tupiantishi:eui.Image;


	public dangqianshijian:string;

	public jianglijiemian:Jianglijiesuanui;


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

	public chushihua(shijianid){
		this.dangqianshijian = shijianid;
		let teshushijianbiao = RES.getRes("teshushijianbiao_json");
		this.biaotiwenzi.text = "天降鸿运";
		for(var i = 0;i<teshushijianbiao.length;i++){
			if(teshushijianbiao[i].id == this.dangqianshijian){
				this.tishiwenzi0.text  = teshushijianbiao[i].shijianduihua;
				this.tupiantishi.source = teshushijianbiao[i].shijiantupian;
				break;
			}
		}
		this.but_queding1.enabled = true;
		this.but_queding1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiemain,this);
		this.but_shuangbei0.enabled = true;
		this.but_shuangbei0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.quedingguangao,this);
	}

	public guanbijiemain(){
		this.parent.removeChild(this);
	}

	public async quedingguangao(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongjiangli,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongjiangli(){
		switch(this.dangqianshijian){
			case "16":
				this.jiesuo16neirong();
				break;
			case "17":
				this.jiesuo17neirong();
				break;
			case "18":
				this.jiesuo18neirong();
				break;
			case "19":
				this.jiesuo19neirong();
				break;
			case "20":
				this.jiesuo20neirong();
				break;
			case "21":
				this.jiesuo21neirong();
				break;
			case "22":
				this.jiesuo22neirong();
				break;
			case "23":
				this.jiesuo23neirong();
				break;
			case "24":
				this.jiesuo24neirong();
				break;

				
		}

	}

	public jiesuo16neirong(){
		let jiajubiao = RES.getRes("jiajubiao_json");
		let suoyoukejiesuo = [];
		let kejiesuoliebiao = [];
		for(var i = 0;i<jiajubiao.length;i++){
			if(jiajubiao[i].jiajuislock == "2"){
				suoyoukejiesuo.push(jiajubiao[i].id);
			}
		}
		console.log("当前可特殊解锁家具：" + suoyoukejiesuo);
		for(var h = 0;h<suoyoukejiesuo.length;h++){
			for(var j = 0;j<Gerenshuxing.jiesuojiaju.length;j++){
				if(suoyoukejiesuo[h] == Gerenshuxing.jiesuojiaju[j]){
					suoyoukejiesuo[h] = "-1";
					break;
				}
			}
		}
		console.log("剔除已解锁家具：" + suoyoukejiesuo);
		for(var k = 0;k<suoyoukejiesuo.length;k++){
			if(suoyoukejiesuo[k] != "-1"){
				kejiesuoliebiao.push(suoyoukejiesuo[k]);
			}
		}
		console.log("正式可解锁家具：" + kejiesuoliebiao);
		if(kejiesuoliebiao.length > 0){
			let bencijiesuo = Math.floor(Math.random() * kejiesuoliebiao.length);
			let bencijiesuoid = kejiesuoliebiao[bencijiesuo];
			let jiajuming = "特殊家具";
			for(var o = 0;o<jiajubiao.length;o++){
				if(jiajubiao[o].id == bencijiesuoid){
					let fasongtupian = jiajubiao[o].imgname + "_png";
					jiajuming = jiajubiao[o].jiajuName;
					let fasongwenzi = "恭喜您，成功解锁[" + jiajubiao[o].jiajuName + "]";
					this.fasongjianglijiemian(fasongtupian,fasongwenzi);
					break;
				}
			}
			Weblianjie.fasongshuju("code:127","{" + '"jiajuid"' +":"+ '"' + bencijiesuoid + '"' +","
			+ '"jiajuming"' +":"+ '"' + jiajuming + '"' +","
			+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");	
		}else{
			let jianglijinbi = Math.floor(Math.random() * 2000);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"1"' +","
				+ '"shuliang"' +":"+ '"' + jianglijinbi + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				let fasongtupian = "img_qian_png";
				let fasongwenzi = "您的家具已经全部解锁，老板把家具价值折算成了钱币奖励给您!";
				this.fasongjianglijiemian(fasongtupian,fasongwenzi);
		}
	}

	public jiesuo17neirong(){
		let chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
		let chengyuankejiesuo = [];
		let jiesuochengyuanliebiao = [];
		for(var i = 0;i<chengyuanhudongbiao.length;i++){
			if(chengyuanhudongbiao[i].juese == "4" && chengyuanhudongbiao[i].jiesuo == "0" && chengyuanhudongbiao[i].leixing == "1"){
				chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
			}
		}
		console.log("当前可特殊解锁家具：" + chengyuankejiesuo);
		for(var h = 0;h<chengyuankejiesuo.length;h++){
			for(var j = 0;j<Gerenshuxing.sunnvxuexi.length;j++){
				if(chengyuankejiesuo[h] == Gerenshuxing.sunnvxuexi[j]){
					chengyuankejiesuo[h] = "-1";
					break;
				}
			}
		}
		console.log("剔除已解锁家具：" + chengyuankejiesuo);
		for(var k = 0;k<chengyuankejiesuo.length;k++){
			if(chengyuankejiesuo[k] != "-1"){
				jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
			}
		}
		console.log("正式可解锁家具：" + jiesuochengyuanliebiao);
		if(jiesuochengyuanliebiao.length > 0){
			let bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
			let bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
			let sunnvming = "";
			for(var o = 0;o<chengyuanhudongbiao.length;o++){
				if(chengyuanhudongbiao[o].id == bencijiesuosunnvid){
					let fasongtupian = chengyuanhudongbiao[o].xianshiicon;
					sunnvming = chengyuanhudongbiao[o].xingdongming;
					let fasongwenzi = "恭喜您，成功解锁小孙女培养项目[" + chengyuanhudongbiao[o].xingdongming + "]";
					this.fasongjianglijiemian(fasongtupian,fasongwenzi);
					break;
				}
			}
			Weblianjie.fasongshuju("code:129","{" + '"jiajuid"' +":"+ '"' + bencijiesuosunnvid + '"' +","
			+ '"jiajuming"' +":"+ '"' + sunnvming + '"' +","
			+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");	
		}else{
			let jianglijinbi = Math.floor(Math.random() * 2000);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"1"' +","
				+ '"shuliang"' +":"+ '"' + jianglijinbi + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				let fasongtupian = "img_qian_png";
				let fasongwenzi = "您小孙女的培养内容已经全部解锁，游乐园把培养价值折算成了钱币奖励给您!";
				this.fasongjianglijiemian(fasongtupian,fasongwenzi);
		}
	}

	public jiesuo18neirong(){
		let chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
		let chengyuankejiesuo = [];
		let jiesuochengyuanliebiao = [];
		for(var i = 0;i<chengyuanhudongbiao.length;i++){
			if(chengyuanhudongbiao[i].juese == "1" && chengyuanhudongbiao[i].jiesuo == "0" && chengyuanhudongbiao[i].leixing == "1"){
				chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
			}
		}
		for(var h = 0;h<chengyuankejiesuo.length;h++){
			for(var j = 0;j<Gerenshuxing.daerzixuexi.length;j++){
				if(chengyuankejiesuo[h] == Gerenshuxing.daerzixuexi[j]){
					chengyuankejiesuo[h] = "-1";
					break;
				}
			}
		}
		for(var k = 0;k<chengyuankejiesuo.length;k++){
			if(chengyuankejiesuo[k] != "-1"){
				jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
			}
		}
		if(jiesuochengyuanliebiao.length > 0){
			let bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
			let bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
			let sunnvming = "";
			for(var o = 0;o<chengyuanhudongbiao.length;o++){
				if(chengyuanhudongbiao[o].id == bencijiesuosunnvid){
					let fasongtupian = chengyuanhudongbiao[o].xianshiicon;
					sunnvming = chengyuanhudongbiao[o].xingdongming;
					let fasongwenzi = "恭喜您，成功解锁大儿子进修内容[" + chengyuanhudongbiao[o].xingdongming + "]";
					this.fasongjianglijiemian(fasongtupian,fasongwenzi);
					break;
				}
			}
			Weblianjie.fasongshuju("code:131","{" + '"jiajuid"' +":"+ '"' + bencijiesuosunnvid + '"' +","
			+ '"jiajuming"' +":"+ '"' + sunnvming + '"' +","
			+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");	
		}else{
			let jianglijinbi = Math.floor(Math.random() * 2000);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"1"' +","
				+ '"shuliang"' +":"+ '"' + jianglijinbi + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				let fasongtupian = "img_qian_png";
				let fasongwenzi = "您大儿子的进修内容已经全部解锁，游乐园把培养价值折算成了钱币奖励给您!";
				this.fasongjianglijiemian(fasongtupian,fasongwenzi);
		}
	}

	public jiesuo19neirong(){
		let chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
		let chengyuankejiesuo = [];
		let jiesuochengyuanliebiao = [];
		for(var i = 0;i<chengyuanhudongbiao.length;i++){
			if(chengyuanhudongbiao[i].juese == "2" && chengyuanhudongbiao[i].jiesuo == "0" && chengyuanhudongbiao[i].leixing == "1"){
				chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
			}
		}
		for(var h = 0;h<chengyuankejiesuo.length;h++){
			for(var j = 0;j<Gerenshuxing.ererzixuexi.length;j++){
				if(chengyuankejiesuo[h] == Gerenshuxing.ererzixuexi[j]){
					chengyuankejiesuo[h] = "-1";
					break;
				}
			}
		}
		for(var k = 0;k<chengyuankejiesuo.length;k++){
			if(chengyuankejiesuo[k] != "-1"){
				jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
			}
		}
		if(jiesuochengyuanliebiao.length > 0){
			let bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
			let bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
			let sunnvming = "";
			for(var o = 0;o<chengyuanhudongbiao.length;o++){
				if(chengyuanhudongbiao[o].id == bencijiesuosunnvid){
					let fasongtupian = chengyuanhudongbiao[o].xianshiicon;
					sunnvming = chengyuanhudongbiao[o].xingdongming;
					let fasongwenzi = "恭喜您，成功解锁二儿子工作内容[" + chengyuanhudongbiao[o].xingdongming + "]";
					this.fasongjianglijiemian(fasongtupian,fasongwenzi);
					break;
				}
			}
			Weblianjie.fasongshuju("code:133","{" + '"jiajuid"' +":"+ '"' + bencijiesuosunnvid + '"' +","
			+ '"jiajuming"' +":"+ '"' + sunnvming + '"' +","
			+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");	
		}else{
			let jianglijinbi = Math.floor(Math.random() * 2000);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"1"' +","
				+ '"shuliang"' +":"+ '"' + jianglijinbi + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				let fasongtupian = "img_qian_png";
				let fasongwenzi = "您二儿子的工作内容已经全部解锁，办公楼把工作价值折算成了钱币奖励给您!";
				this.fasongjianglijiemian(fasongtupian,fasongwenzi);
		}
	}

	public jiesuo20neirong(){
		let chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
		let chengyuankejiesuo = [];
		let jiesuochengyuanliebiao = [];
		for(var i = 0;i<chengyuanhudongbiao.length;i++){
			if(chengyuanhudongbiao[i].juese == "3" && chengyuanhudongbiao[i].jiesuo == "0" && chengyuanhudongbiao[i].leixing == "1"){
				chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
			}
		}
		for(var h = 0;h<chengyuankejiesuo.length;h++){
			for(var j = 0;j<Gerenshuxing.xifuxuexi.length;j++){
				if(chengyuankejiesuo[h] == Gerenshuxing.xifuxuexi[j]){
					chengyuankejiesuo[h] = "-1";
					break;
				}
			}
		}
		for(var k = 0;k<chengyuankejiesuo.length;k++){
			if(chengyuankejiesuo[k] != "-1"){
				jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
			}
		}
		if(jiesuochengyuanliebiao.length > 0){
			let bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
			let bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
			let sunnvming = "";
			for(var o = 0;o<chengyuanhudongbiao.length;o++){
				if(chengyuanhudongbiao[o].id == bencijiesuosunnvid){
					let fasongtupian = chengyuanhudongbiao[o].xianshiicon;
					sunnvming = chengyuanhudongbiao[o].xingdongming;
					let fasongwenzi = "恭喜您，成功解锁大儿媳的家务内容[" + chengyuanhudongbiao[o].xingdongming + "]";
					this.fasongjianglijiemian(fasongtupian,fasongwenzi);
					break;
				}
			}
			Weblianjie.fasongshuju("code:135","{" + '"jiajuid"' +":"+ '"' + bencijiesuosunnvid + '"' +","
			+ '"jiajuming"' +":"+ '"' + sunnvming + '"' +","
			+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");	
		}else{
			let jianglijinbi = Math.floor(Math.random() * 2000);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"1"' +","
				+ '"shuliang"' +":"+ '"' + jianglijinbi + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				let fasongtupian = "img_qian_png";
				let fasongwenzi = "您大儿媳的家务内容已经全部解锁，李阿婆给了你一些钱币!";
				this.fasongjianglijiemian(fasongtupian,fasongwenzi);
		}
	}

	public jiesuo21neirong(){
		let chengyuanhudongbiao = RES.getRes("yuangongbiao_json");
		let chengyuankejiesuo = [];
		let jiesuochengyuanliebiao = [];
		for(var i = 0;i<chengyuanhudongbiao.length;i++){
			if(chengyuanhudongbiao[i].ygislock == "0"){
				chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
			}
		}
		for(var h = 0;h<chengyuankejiesuo.length;h++){
			for(var j = 0;j<Gerenshuxing.jiesuoyuangong.length;j++){
				if(chengyuankejiesuo[h] == Gerenshuxing.jiesuoyuangong[j]){
					chengyuankejiesuo[h] = "-1";
					break;
				}
			}
		}
		for(var k = 0;k<chengyuankejiesuo.length;k++){
			if(chengyuankejiesuo[k] != "-1"){
				jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
			}
		}
		if(jiesuochengyuanliebiao.length > 0){
			let bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
			let bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
			let sunnvming = "";
			for(var o = 0;o<chengyuanhudongbiao.length;o++){
				if(chengyuanhudongbiao[o].id == bencijiesuosunnvid){
					let fasongtupian = chengyuanhudongbiao[o].shape + "_png";
					sunnvming = chengyuanhudongbiao[o].name;
					let fasongwenzi = "恭喜您，成功聘得员工[" + sunnvming + "]";
					this.fasongjianglijiemian(fasongtupian,fasongwenzi);
					break;
				}
			}
			Weblianjie.fasongshuju("code:137","{" + '"jiajuid"' +":"+ '"' + bencijiesuosunnvid + '"' +","
			+ '"jiajuming"' +":"+ '"' + sunnvming + '"' +","
			+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");	
		}else{
			let jianglijinbi = Math.floor(Math.random() * 2000);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"1"' +","
				+ '"shuliang"' +":"+ '"' + jianglijinbi + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				let fasongtupian = "img_qian_png";
				let fasongwenzi = "您店铺员工候选人已经足够多啦，人才市场反馈您咨询费!";
				this.fasongjianglijiemian(fasongtupian,fasongwenzi);
		}
	}

	public jiesuo22neirong(){
		let suijijinbi = Math.floor(Math.random() * 19000) + 1000;
		Weblianjie.fasongshuju("code:139","{" + '"jiajuid"' +":"+ '"' + suijijinbi + '"' +","
			+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");	
		let fasongtupian = "img_qian_png";
		let fasongwenzi = "您炖的骨头汤受到神秘富商的赞赏，他当即奖励了你一大笔钱财！";
		this.fasongjianglijiemian(fasongtupian,fasongwenzi);
	}

	public jiesuo23neirong(){
		let chengyuanhudongbiao = RES.getRes("shipubiao_json");
		let chengyuankejiesuo = [];
		let jiesuochengyuanliebiao = [];
		for(var i = 0;i<chengyuanhudongbiao.length;i++){
			if(chengyuanhudongbiao[i].islock == "2"){
				chengyuankejiesuo.push(chengyuanhudongbiao[i].id);
			}
		}
		for(var h = 0;h<chengyuankejiesuo.length;h++){
			for(var j = 0;j<Gerenshuxing.jiesuocaipin.length;j++){
				if(chengyuankejiesuo[h] == Gerenshuxing.jiesuocaipin[j]){
					chengyuankejiesuo[h] = "-1";
					break;
				}
			}
		}
		for(var k = 0;k<chengyuankejiesuo.length;k++){
			if(chengyuankejiesuo[k] != "-1"){
				jiesuochengyuanliebiao.push(chengyuankejiesuo[k]);
			}
		}
		if(jiesuochengyuanliebiao.length > 0){
			let bencijiesuosunnv = Math.floor(Math.random() * jiesuochengyuanliebiao.length);
			let bencijiesuosunnvid = jiesuochengyuanliebiao[bencijiesuosunnv];
			let sunnvming = "";
			for(var o = 0;o<chengyuanhudongbiao.length;o++){
				if(chengyuanhudongbiao[o].id == bencijiesuosunnvid){
					let fasongtupian = chengyuanhudongbiao[o].id + "_png";
					sunnvming = chengyuanhudongbiao[o].foodName;
					let fasongwenzi = "恭喜您，成功解锁菜品[" + sunnvming + "]";
					this.fasongjianglijiemian(fasongtupian,fasongwenzi);
					break;
				}
			}
			Weblianjie.fasongshuju("code:141","{" + '"jiajuid"' +":"+ '"' + bencijiesuosunnvid + '"' +","
			+ '"jiajuming"' +":"+ '"' + sunnvming + '"' +","
			+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");	
		}else{
			let jianglijinbi = Math.floor(Math.random() * 2000);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"1"' +","
				+ '"shuliang"' +":"+ '"' + jianglijinbi + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				let fasongtupian = "img_qian_png";
				let fasongwenzi = "您已经掌握了全部的菜品，张小可给了你一些钱币!";
				this.fasongjianglijiemian(fasongtupian,fasongwenzi);
		}
	}

	public jiesuo24neirong(){
		let suijijinbi = Math.floor(Math.random() * 100) + 100;
		Weblianjie.fasongshuju("code:143","{" + '"jiajuid"' +":"+ '"' + suijijinbi + '"' +","
			+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");	
		let fasongtupian = "img_jiankang_png";
		let fasongwenzi = "您接受了医院的免费体检，健康得到了提升！";
		this.fasongjianglijiemian(fasongtupian,fasongwenzi);
	}


	public fasongjianglijiemian(tupian,wenzi){
		this.jianglijiemian = new Jianglijiesuanui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
		this.jianglijiemian.qudinganniu.enabled = true;
		this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijianglijiemain,this);
		this.jianglijiemian.jiangliicon.source = tupian;
		this.jianglijiemian.jianglishuliang.text = wenzi;
	}

	public guanbijianglijiemain(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jianglijiemian);
		this.guanbijiemain();
	}
	
}
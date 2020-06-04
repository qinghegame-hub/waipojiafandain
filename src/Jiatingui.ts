class Jiatingui extends eui.Component implements  eui.UIComponent {
	public jiatingzu:eui.Group;
	public img_jiatingbeijing:eui.Image;
	public but_chuang:eui.Image;
	public but_guizi:eui.Image;
	public but_shuzhuo:eui.Image;
	public but_dianshi:eui.Image;
	public but_chaji:eui.Image;
	public but_shafa:eui.Image;
	public but_maowo:eui.Image;
	public butun_shafa:eui.Button;
	public butun_shafa0:eui.Button;
	public butun_chaji:eui.Button;
	public butun_dianshi:eui.Button;
	public butun_maowo:eui.Button;
	public butun_shuzhuo:eui.Button;
	public butun_guizi:eui.Button;
	public butun_chuang:eui.Button;
	public butun_chuang0:eui.Button;
	public img_daerzi:eui.Image;
	public img_ererzi:eui.Image;
	public img_daerxi:eui.Image;
	public img_xiaosunnv:eui.Image;
	public duihuatishi:eui.Image;
	public laodongtishi:eui.Image;
	public duihuatishi0:eui.Image;
	public laodongtishi0:eui.Image;
	public duihuatishi1:eui.Image;
	public laodongtishi1:eui.Image;
	public duihuatishi2:eui.Image;
	public laodongtishi2:eui.Image;
	public shafatishi:eui.Image;



	public daerzijiaohu:Daerzijiaohuui;
	public ererzijiaohu:Ererzijiaohuui;
	public xifujiaohu:Xifujiaohuui;
	public sunnvjiaohu:Sunnvjiaohuui;

	public shafajiaohu:Shafajiaohuui;
	public chajijiaohu:Chajijiaohuui;
	public dianshijiaohu:Dianshijiaohuui;
	public chuangjiaohu:Chuangjiaohuui;

	public erjitanchuui:any;
	public renwujiemian:any;
	public jinxiuquerenui:any;

	public jiatingchengyuanbiao:any;
	public chengyuanhudongbiao:any;
	public daojubiao:any;

	public zengsongid1:any;
	public zengsongid2:any;
	public zengsongid3:any;
	public zengsongid4:any;
	public zengsongid5:any;







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
		this.butun_chuang.touchEnabled = true;
		this.butun_chuang.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjichuang,this);
		this.butun_chuang0.touchEnabled = true;
		this.butun_chuang0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjichuang,this);
//		this.butun_guizi.touchEnabled = true;
//		this.butun_guizi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguizi,this);
//		this.butun_shuzhuo.touchEnabled = true;
//		this.butun_shuzhuo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishuzhuo,this);
		this.butun_dianshi.touchEnabled = true;
		this.butun_dianshi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidianshi,this);
		this.butun_chaji.touchEnabled = true;
		this.butun_chaji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjichaji,this);
		this.butun_shafa.touchEnabled = true;
		this.butun_shafa.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishafa,this);
		this.butun_shafa0.touchEnabled = true;
		this.butun_shafa0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishafa,this);
//		this.butun_maowo.touchEnabled = true;
//		this.butun_maowo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjimaowo,this);
		//初始隐藏各人物头顶的两个提示图标和沙发的提示图标
		this.duihuatishi.source = "";
		this.duihuatishi0.source = "";
		this.duihuatishi1.source = "";
		this.duihuatishi2.source = "";
		this.shafatishi.source = "";
		this.jiatingchengyuanxianshi();
		this.shafachushi();
	}

	//沙发显示初始化
	public shafachushi(){
		if(parseInt(Gerenshuxing.shafaxinxi[0]) > 0){
			this.shafatishi.source = "img_xiuxitishi_png";
		}
	}

	public dianjichuang(){
		egret.Tween.get(this.but_chuang).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.but_chuang).to({scaleX:1,scaleY:1},500);
		})
		this.chuangjiaohu = new Chuangjiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.chuangjiaohu);
		this.chuangjiaohu.chuangguanbi.touchEnabled = true;
		this.chuangjiaohu.chuangguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichuang,this);
		this.chuangjiaohu.chuangchakan.enabled = true;
		this.chuangjiaohu.chuangjinxiu.enabled = true;
		this.chuangjiaohu.chuangzengsong.enabled = true;
		this.chuangjiaohu.chuangchakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chuangck,this);
		this.chuangjiaohu.chuangjinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chuanggz,this);
		this.chuangjiaohu.chuangzengsong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chuangzs,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
	}

	public guanbichuang(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.chuangjiaohu);
	}

	public chuangck(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.parent){
			if(this.chuangjiaohu.chuangchakan.enabled == false || this.chuangjiaohu.chuangjinxiu.enabled == false || this.chuangjiaohu.chuangzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.removeChild(this.erjitanchuui);
			this.chuangjiaohu.chuangchakan.enabled = true;
		},this)
		this.chuangjiaohu.chuangchakan.enabled = false;
		this.chuangjiaohu.chuangjinxiu.enabled = true;
		this.chuangjiaohu.chuangzengsong.enabled = true;
		/*this.erjitanchuui.x = this.chuangjiaohu.chuangbeijing.x  + this.chuangjiaohu.chuangbeijing.width;
		this.erjitanchuui.y = this.chuangjiaohu.chuangbeijing.y;*/
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "名称";
		this.erjitanchuui.qinhelibiaoqian.text = "普通睡眠";
		this.erjitanchuui.gongzuobiaoqian.text = "药物助眠";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "5"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "健康 + " + this.jiatingchengyuanbiao[i].qinghezhi;
				this.erjitanchuui.gongzuozhi.text = "健康 + " + this.jiatingchengyuanbiao[i].gongzuonengli;
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		} 
		}
	}

	public chuanggz(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.parent){
			if(this.chuangjiaohu.chuangchakan.enabled == false || this.chuangjiaohu.chuangjinxiu.enabled == false || this.chuangjiaohu.chuangzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Shafadianshidengjiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.removeChild(this.erjitanchuui);
			this.chuangjiaohu.chuangjinxiu.enabled = true;
		},this)
		this.chuangjiaohu.chuangchakan.enabled = true;
		this.chuangjiaohu.chuangjinxiu.enabled = false;
		this.chuangjiaohu.chuangzengsong.enabled = true;
		/*this.erjitanchuui.x = this.chuangjiaohu.chuangbeijing.x  + this.chuangjiaohu.chuangbeijing.width;
		this.erjitanchuui.y = this.chuangjiaohu.chuangbeijing.y;*/
		this.erjitanchuui.biaotiwenzi0.text = "普通睡眠";
		this.erjitanchuui.guanxibiaoqian0.text = "效果";
		this.erjitanchuui.guanxineirong0.text = "加少量健康";
		this.erjitanchuui.qinhelibiaoqian0.text = "睡眠时长";
		let shuimianshijian = Gerenshuxing.xianshishijian;
		if(shuimianshijian >= 6){
			shuimianshijian = 24 - shuimianshijian + 6;
		}else{
			shuimianshijian = 6 - shuimianshijian;
		}
		this.erjitanchuui.qinghelizhi0.text = shuimianshijian + "小时";
		this.erjitanchuui.jiesaobiaoqian0.text = "说明";
		this.erjitanchuui.jiesaoneirong0.text = "1.睡眠完成后，根据当前的心情值决定本次睡眠的质量。\n2.睡眠的质量越高，恢复的健康值越多。\n3.睡眠时长也可提高本次恢复的健康值。";
		this.erjitanchuui.qurenanniu.enabled = true;
		this.erjitanchuui.qurenanniu0.enabled = false;
		this.erjitanchuui.qurenanniu1.enabled = false;
		this.erjitanchuui.qurenanniu.alpha = 1;
		this.erjitanchuui.qurenanniu0.alpha = 0;
		this.erjitanchuui.qurenanniu1.alpha = 0;
		this.erjitanchuui.qurenanniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiputongshuimian,this);
		}
		
	}

	public dianjiputongshuimian(){
		let shuimianshijian = Gerenshuxing.xianshishijian;
		if(shuimianshijian >= 5 && shuimianshijian < 21){
			Gameguanli.Kongzhitai().cuowutishixinxi("现在睡觉还有早，趁着家人在，多陪陪家人吧！");
		}else{
			if(shuimianshijian >= 8){
				shuimianshijian = 24 - shuimianshijian + 6;
			}else{
				shuimianshijian = 6 - shuimianshijian;
			}
			this.guanbichuang();
			let guoduchangjing = new Dianpurukou();
			Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing);
			guoduchangjing.jinruwenzi.text = "你缓缓进入了睡眠...";
			egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
						if(Gerenshuxing.kaixinzhi >= 0 && Gerenshuxing.kaixinzhi < 100){
							guoduchangjing.jinruwenzi.text = "你的心情很糟糕，家庭不和谐，生活一团糟，焦虑使你五味杂陈，几乎彻夜未眠...";
						}else if(Gerenshuxing.kaixinzhi >= 100 && Gerenshuxing.kaixinzhi < 200){
							guoduchangjing.jinruwenzi.text = "你的心情不太好，家人似乎对你不太亲近，致使你在床上胡思乱想，差点失眠...";
						}else if(Gerenshuxing.kaixinzhi >= 200 && Gerenshuxing.kaixinzhi < 300){
							guoduchangjing.jinruwenzi.text = "你的心情很一般，躺在床上的你依然与平常一样，为了家人的生活担忧，你在床上辗转反侧,久久未能睡着...";
						}else if(Gerenshuxing.kaixinzhi >= 300 && Gerenshuxing.kaixinzhi < 400){
							guoduchangjing.jinruwenzi.text = "你的心情不错，家庭和睦使你不必有太多的担忧，躺在床上很快便进入了梦乡...";
						}else{
							guoduchangjing.jinruwenzi.text = "你的心情非常好，家庭和睦，事业也一帆风顺，你陷入了沉睡，睡梦中又浮现出年轻时的开心回忆...";
						}
						egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:1},1500).wait(2000).call(()=>{
							egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
								let jianglishuliang = 0;
								for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
									if(this.jiatingchengyuanbiao[i].id == "5"){
										jianglishuliang = parseInt(this.jiatingchengyuanbiao[i].qinghezhi) + Math.floor(Gerenshuxing.kaixinzhi / 100) * shuimianshijian;
										break;
									}
								} 
								if(shuimianshijian >= 0 && shuimianshijian < 2){
									guoduchangjing.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠严重不足！对健康影响很大！";
								}else if(shuimianshijian >= 2 && shuimianshijian < 4){
									guoduchangjing.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠不足！对健康影响较大！";
								}else if(shuimianshijian >= 4 && shuimianshijian < 6){
									guoduchangjing.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠较短！对健康影响一般！";
								}else{
									guoduchangjing.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠充足！能有效提高身体健康！";
								}
								Weblianjie.fasongshuju("code:086","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
								+ '"kouchuleixing"' +":"+ '"0"' +","
								+ '"kouchushuliang"' +":"+ '"0"' +","
								+ '"leixing"' +":"+ '"3"' +","
								+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
								+ '"shijianzengjia"' +":"+ '"' + shuimianshijian + '"' +","
								+ '"beishu"' +":"+ '"1"' +"}");
								egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:1},1500).wait(2000).call(()=>{
									egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
										guoduchangjing.jinruwenzi.text = "随着闹钟的响起，你的睡眠结束了，新的一天又开始了！";
										egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:1},1500).wait(2000).call(()=>{
											egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
												Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing);
											})
										})
									})
								})
						
						})
						
					})
				})
		}
	}

	public chuangzs(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.parent){
			if(this.chuangjiaohu.chuangchakan.enabled == false || this.chuangjiaohu.chuangjinxiu.enabled == false || this.chuangjiaohu.chuangzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Shafadianshidengjiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.removeChild(this.erjitanchuui);
			this.chuangjiaohu.chuangzengsong.enabled = true;
		},this)
		this.chuangjiaohu.chuangchakan.enabled = true;
		this.chuangjiaohu.chuangjinxiu.enabled = true;
		this.chuangjiaohu.chuangzengsong.enabled = false;
		/*this.erjitanchuui.x = this.chuangjiaohu.chuangbeijing.x  + this.chuangjiaohu.chuangbeijing.width;
		this.erjitanchuui.y = this.chuangjiaohu.chuangbeijing.y;*/
		this.erjitanchuui.biaotiwenzi0.text = "药物助眠";
		this.erjitanchuui.guanxibiaoqian0.text = "效果";
		this.erjitanchuui.guanxineirong0.text = "加大量健康";
		this.erjitanchuui.qinhelibiaoqian0.text = "睡眠时长";
		let shuimianshijian = Gerenshuxing.xianshishijian;
		if(shuimianshijian >= 6){
			shuimianshijian = 24 - shuimianshijian + 6;
		}else{
			shuimianshijian = 6 - shuimianshijian;
		}
		this.erjitanchuui.qinghelizhi0.text = shuimianshijian + "小时";
		this.erjitanchuui.jiesaobiaoqian0.text = "说明";
		this.erjitanchuui.jiesaoneirong0.text = "1.睡眠完成后，根据当前的心情值决定本次睡眠的质量。\n2.使用药物睡眠增加的健康值为普通的2倍。\n3.使用药物虽然能强迫进入睡眠，但其实并不提倡。";
		this.erjitanchuui.qurenanniu.enabled = false;
		this.erjitanchuui.qurenanniu0.enabled = true;
		this.erjitanchuui.qurenanniu1.enabled = false;
		this.erjitanchuui.qurenanniu.alpha = 0;
		this.erjitanchuui.qurenanniu0.alpha = 1;
		this.erjitanchuui.qurenanniu1.alpha = 0;
		this.erjitanchuui.qurenanniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiyaowushuimian,this);
		}
		
	}

	public async dianjiyaowushuimian(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.yaowuchenggong,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}


	public yaowuchenggong(){
		let shuimianshijian = Gerenshuxing.xianshishijian;
		if(shuimianshijian >= 5 && shuimianshijian < 21){
			Gameguanli.Kongzhitai().cuowutishixinxi("现在睡觉还有早，趁着家人在，多陪陪家人吧！");
		}else{
			if(shuimianshijian >= 8){
				shuimianshijian = 24 - shuimianshijian + 6;
			}else{
				shuimianshijian = 6 - shuimianshijian;
			}
			this.guanbichuang();
			let guoduchangjing = new Dianpurukou();
			Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing);
			guoduchangjing.jinruwenzi.text = "你很快进入了睡眠...";
			egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
						if(Gerenshuxing.kaixinzhi >= 0 && Gerenshuxing.kaixinzhi < 100){
							guoduchangjing.jinruwenzi.text = "你的心情很糟糕，家庭不和谐，生活一团糟，焦虑使你五味杂陈，几乎彻夜未眠...";
						}else if(Gerenshuxing.kaixinzhi >= 100 && Gerenshuxing.kaixinzhi < 200){
							guoduchangjing.jinruwenzi.text = "你的心情不太好，家人似乎对你不太亲近，致使你在床上胡思乱想，差点失眠...";
						}else if(Gerenshuxing.kaixinzhi >= 200 && Gerenshuxing.kaixinzhi < 300){
							guoduchangjing.jinruwenzi.text = "你的心情很一般，躺在床上的你依然与平常一样，为了家人的生活担忧，你在床上辗转反侧,久久未能睡着...";
						}else if(Gerenshuxing.kaixinzhi >= 300 && Gerenshuxing.kaixinzhi < 400){
							guoduchangjing.jinruwenzi.text = "你的心情不错，家庭和睦使你不必有太多的担忧，躺在床上很快便进入了梦乡...";
						}else{
							guoduchangjing.jinruwenzi.text = "你的心情非常好，家庭和睦，事业也一帆风顺，你陷入了沉睡，睡梦中又浮现出年轻时的开心回忆...";
						}
						egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:1},1500).wait(2000).call(()=>{
							egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
								let jianglishuliang = 0;
								for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
									if(this.jiatingchengyuanbiao[i].id == "5"){
										jianglishuliang = parseInt(this.jiatingchengyuanbiao[i].qinghezhi) + Math.floor(Gerenshuxing.kaixinzhi / 100) * shuimianshijian;
										break;
									}
								} 
								if(shuimianshijian >= 0 && shuimianshijian < 2){
									guoduchangjing.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠严重不足！对健康影响很大！";
								}else if(shuimianshijian >= 2 && shuimianshijian < 4){
									guoduchangjing.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠不足！对健康影响较大！";
								}else if(shuimianshijian >= 4 && shuimianshijian < 6){
									guoduchangjing.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠较短！对健康影响一般！";
								}else{
									guoduchangjing.jinruwenzi.text = "本次睡眠时间为" + shuimianshijian + "个小时，睡眠充足！能有效提高身体健康！";
								}
								Weblianjie.fasongshuju("code:086","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
								+ '"kouchuleixing"' +":"+ '"0"' +","
								+ '"kouchushuliang"' +":"+ '"0"' +","
								+ '"leixing"' +":"+ '"3"' +","
								+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
								+ '"shijianzengjia"' +":"+ '"' + shuimianshijian + '"' +","
								+ '"beishu"' +":"+ '"2"' +"}");
								egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:1},1500).wait(2000).call(()=>{
									egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
										guoduchangjing.jinruwenzi.text = "随着闹钟的响起，你的睡眠结束了，新的一天又开始了！";
										egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:1},1500).wait(2000).call(()=>{
											egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
												Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing);
											})
										})
									})
								})						
						})
						
					})
				})
		}
	}

	public dianjiguizi(){
		egret.Tween.get(this.but_guizi).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.but_guizi).to({scaleX:1,scaleY:1},500);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	public dianjishuzhuo(){
		egret.Tween.get(this.but_shuzhuo).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.but_shuzhuo).to({scaleX:1,scaleY:1},500);
		})
	}

	public dianjidianshi(){
		egret.Tween.get(this.but_dianshi).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.but_dianshi).to({scaleX:1,scaleY:1},500);
		})
		this.dianshijiaohu = new Dianshijiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.dianshijiaohu);
		this.dianshijiaohu.dianshiguanbi.touchEnabled = true;
		this.dianshijiaohu.dianshiguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbidianshi,this);
		this.dianshijiaohu.dianshichakan.enabled = true;
		this.dianshijiaohu.dianshijinxiu.enabled = true;
		this.dianshijiaohu.dianshizengsong.enabled = true;
		this.dianshijiaohu.dianshichakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianshick,this);
		this.dianshijiaohu.dianshijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianshigz,this);
		this.dianshijiaohu.dianshizengsong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianshizs,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
	}

	public guanbidianshi(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.dianshijiaohu);
	}

	public dianshick(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.parent){
			if(this.dianshijiaohu.dianshichakan.enabled == false || this.dianshijiaohu.dianshijinxiu.enabled == false || this.dianshijiaohu.dianshizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.removeChild(this.erjitanchuui);
			this.dianshijiaohu.dianshichakan.enabled = true;
		},this)
		this.dianshijiaohu.dianshichakan.enabled = false;
		this.dianshijiaohu.dianshijinxiu.enabled = true;
		this.dianshijiaohu.dianshizengsong.enabled = true;
		/*this.erjitanchuui.x = this.dianshijiaohu.dianshibeijing.x  - this.erjitanchuui.width - this.dianshijiaohu.dianshibeijing.width;
		this.erjitanchuui.y = this.dianshijiaohu.dianshibeijing.y -  this.dianshijiaohu.dianshibeijing.height;*/
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "名称";
		this.erjitanchuui.qinhelibiaoqian.text = "剧集";
		this.erjitanchuui.gongzuobiaoqian.text = "小品";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "6"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "心情 + " + this.jiatingchengyuanbiao[i].qinghezhi;
				this.erjitanchuui.gongzuozhi.text = "心情 + " + this.jiatingchengyuanbiao[i].gongzuonengli;
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		}
		}
		
	}

	public dianshigz(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.parent){
			if(this.dianshijiaohu.dianshichakan.enabled == false || this.dianshijiaohu.dianshijinxiu.enabled == false || this.dianshijiaohu.dianshizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Shafadianshidengjiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.removeChild(this.erjitanchuui);
			this.dianshijiaohu.dianshijinxiu.enabled = true;
		},this)
		this.dianshijiaohu.dianshichakan.enabled = true;
		this.dianshijiaohu.dianshijinxiu.enabled = false;
		this.dianshijiaohu.dianshizengsong.enabled = true;
		/*this.erjitanchuui.x = this.dianshijiaohu.dianshibeijing.x  - this.erjitanchuui.width - this.dianshijiaohu.dianshibeijing.width;
		this.erjitanchuui.y = this.dianshijiaohu.dianshibeijing.y -  this.dianshijiaohu.dianshibeijing.height;*/
		this.erjitanchuui.biaotiwenzi0.text = "剧集观看";
		this.erjitanchuui.guanxibiaoqian0.text = "效果";
		this.erjitanchuui.guanxineirong0.text = "提升心情";
		this.erjitanchuui.qinhelibiaoqian0.text = "提升效果";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "6"){
				this.erjitanchuui.qinghelizhi0.text = "+ " + this.jiatingchengyuanbiao[i].qinghezhi;
				break;
			}
		}
		this.erjitanchuui.jiesaobiaoqian0.text = "说明";
		this.erjitanchuui.jiesaoneirong0.text = "1.当老人独自在家时，观看电视似乎成为他们的唯一消遣。\n2.观看电视连续剧或许能提升他们少量的心情。\n3.对老人来说，家人的陪伴才是他们的真正诉求。";
		this.erjitanchuui.qurenanniu.enabled = true;
		this.erjitanchuui.qurenanniu0.enabled = false;
		this.erjitanchuui.qurenanniu1.enabled = false;
		this.erjitanchuui.qurenanniu.alpha = 1;
		this.erjitanchuui.qurenanniu0.alpha = 0;
		this.erjitanchuui.qurenanniu1.alpha = 0;
		if(parseInt(Gerenshuxing.dianshixinxi) < 1){
			this.erjitanchuui.qurenanniu.enabled = true;
			this.erjitanchuui.qurenanniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjijuji,this);
		}else{
			this.erjitanchuui.qurenanniu.enabled = false;
		}
		}
		
	}

	public dianjijuji(){
		this.guanbidianshi();
		let jianglishuliang = 0;
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "6"){
				jianglishuliang = this.jiatingchengyuanbiao[i].qinghezhi;
				break;
			}
		}
		let guoduchangjing = new Dianpurukou();
		Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing);
		guoduchangjing.jinruwenzi.text = "电视中正在播放80年代题材的剧集，你被剧情代入进去，陷入了回忆...";
		egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
			egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:1},1500).wait(2000).call(()=>{
				Weblianjie.fasongshuju("code:087","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"4"' +","
				+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				guoduchangjing.jinruwenzi.text = "那自行车上的爱情，不禁让你回想到了自己年轻时的场景...";
				egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
					Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing);
				})
			})
		})
	}

	public dianshizs(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.parent){
			if(this.dianshijiaohu.dianshichakan.enabled == false || this.dianshijiaohu.dianshijinxiu.enabled == false || this.dianshijiaohu.dianshizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Shafadianshidengjiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.removeChild(this.erjitanchuui);
			this.dianshijiaohu.dianshizengsong.enabled = true;
		},this)
		this.dianshijiaohu.dianshichakan.enabled = true;
		this.dianshijiaohu.dianshijinxiu.enabled = true;
		this.dianshijiaohu.dianshizengsong.enabled = false;
		/*this.erjitanchuui.x = this.dianshijiaohu.dianshibeijing.x  - this.erjitanchuui.width - this.dianshijiaohu.dianshibeijing.width;
		this.erjitanchuui.y = this.dianshijiaohu.dianshibeijing.y -  this.dianshijiaohu.dianshibeijing.height;*/
		this.erjitanchuui.biaotiwenzi0.text = "小品观看";
		this.erjitanchuui.guanxibiaoqian0.text = "效果";
		this.erjitanchuui.guanxineirong0.text = "提升心情";
		this.erjitanchuui.qinhelibiaoqian0.text = "提升效果";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "6"){
				this.erjitanchuui.qinghelizhi0.text = "+ " + this.jiatingchengyuanbiao[i].gongzuonengli;
				break;
			}
		}
		this.erjitanchuui.jiesaobiaoqian0.text = "说明";
		this.erjitanchuui.jiesaoneirong0.text = "1.当老人独自在家时，观看电视似乎成为他们的唯一消遣。\n2.观看小品相声能提升他们大量的心情。\n3.对老人来说，家人的陪伴才是他们的真正诉求。";
		this.erjitanchuui.qurenanniu.enabled = false;
		this.erjitanchuui.qurenanniu0.enabled = true;
		this.erjitanchuui.qurenanniu1.enabled = false;
		this.erjitanchuui.qurenanniu.alpha = 0;
		this.erjitanchuui.qurenanniu0.alpha = 1;
		this.erjitanchuui.qurenanniu1.alpha = 0;
		if(parseInt(Gerenshuxing.dianshixinxi) < 1){
			this.erjitanchuui.qurenanniu0.enabled = true;
			this.erjitanchuui.qurenanniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjixiaopin,this);
		}else{
			this.erjitanchuui.qurenanniu0.enabled = false;
		}
		}
		
	}

	public async dianjixiaopin(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.xiaopinchenggong,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public xiaopinchenggong(){
		this.guanbidianshi();
		let jianglishuliang = 0;
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "6"){
				jianglishuliang = this.jiatingchengyuanbiao[i].gongzuonengli;
				break;
			}
		}
		let guoduchangjing = new Dianpurukou();
		Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing);
		guoduchangjing.jinruwenzi.text = "电视中正在播放小品演员们精心演绎的段子，惹得你捧腹大笑...";
		egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
			egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:1},1500).wait(2000).call(()=>{
				Weblianjie.fasongshuju("code:087","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"4"' +","
				+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				guoduchangjing.jinruwenzi.text = "一场欢笑过后，你似乎暂时忘却了心中琐事带来的烦闷...";
				egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
					Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing);
				})
			})
		})
	}

	public dianjichaji(){
		egret.Tween.get(this.but_chaji).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.but_chaji).to({scaleX:1,scaleY:1},500);
		})
		this.chajijiaohu = new Chajijiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.chajijiaohu);
		this.chajijiaohu.chajiguanbi.touchEnabled = true;
		this.chajijiaohu.chajiguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaji,this);
		this.chajijiaohu.chajichakan.enabled = true;
		this.chajijiaohu.chajijinxiu.enabled = true;
		this.chajijiaohu.chajichakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajick,this);
		this.chajijiaohu.chajijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajigz,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
	}

	public guanbichaji(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.chajijiaohu);
	}

	public chajick(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.parent){
			if(this.chajijiaohu.chajichakan.enabled == false || this.chajijiaohu.chajijinxiu.enabled == false ){
			Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.removeChild(this.erjitanchuui);
			this.chajijiaohu.chajichakan.enabled = true;
		},this)
		this.chajijiaohu.chajichakan.enabled = false;
		this.chajijiaohu.chajijinxiu.enabled = true;
		/*this.erjitanchuui.x = this.chajijiaohu.chajibeijing.x + this.chajijiaohu.chajibeijing.width - this.erjitanchuui.width / 2;
		this.erjitanchuui.y = this.chajijiaohu.chajibeijing.y - this.chajijiaohu.chajibeijing.height - this.erjitanchuui.height / 2;*/
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "名称";
		this.erjitanchuui.qinhelibiaoqian.text = "用途";
		this.erjitanchuui.gongzuobiaoqian.text = "提升";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "7"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "可使用药物";
				this.erjitanchuui.gongzuozhi.text = "治疗疾病";
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		}
		}
		
	}

	public chajigz(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.parent){
			if(this.chajijiaohu.chajichakan.enabled == false || this.chajijiaohu.chajijinxiu.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuandaojuui();
		Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.removeChild(this.erjitanchuui);
			this.chajijiaohu.chajijinxiu.enabled = true;
		},this)
		/*this.erjitanchuui.x = this.chajijiaohu.chajibeijing.x + this.chajijiaohu.chajibeijing.width - this.erjitanchuui.width / 2;
		this.erjitanchuui.y = this.chajijiaohu.chajibeijing.y - this.chajijiaohu.chajibeijing.height - this.erjitanchuui.height / 2;*/
		this.erjitanchuui.daojubiaoti.text = "药物列表";
		this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
		this.daojubiao = Gerenshuxing.daojubiao;
		this.chajijiaohu.chajichakan.enabled = true;
		this.chajijiaohu.chajijinxiu.enabled = false;
		for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
			if(this.chengyuanhudongbiao[i].id == "36"){
				this.zengsongid1 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "37"){
				this.zengsongid2 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "38"){
				this.zengsongid3 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "39"){
				this.zengsongid4 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "40"){
				this.zengsongid5 = this.chengyuanhudongbiao[i].xiaohao;
			}
		}
		this.chajizskeng1();
		this.chajizskeng2();
		this.chajizskeng3();
		this.chajizskeng4();
		this.chajizskeng5();
		}
		
	}

	public chajizskeng1(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid1){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang1.alpha = 1;
					this.erjitanchuui.geshuwenzi1.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong1.enabled = true;
					this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng1jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu1_png";					
					this.erjitanchuui.geshudikuang1.alpha = 0;
					this.erjitanchuui.geshuwenzi1.text = "";
					this.erjitanchuui.zengsong1.enabled = true;
					this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng1jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid1){
				this.erjitanchuui.zengsongtupian1.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr1.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public chajizskeng2(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid2){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang2.alpha = 1;
					this.erjitanchuui.geshuwenzi2.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong2.enabled = true;
					this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng2jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang2.alpha = 0;
					this.erjitanchuui.geshuwenzi2.text = "";
					this.erjitanchuui.zengsong2.enabled = true;
					this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng2jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid2){
				this.erjitanchuui.zengsongtupian2.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr2.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public chajizskeng3(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid3){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang3.alpha = 1;
					this.erjitanchuui.geshuwenzi3.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong3.enabled = true;
					this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng3jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang3.alpha = 0;
					this.erjitanchuui.geshuwenzi3.text = "";
					this.erjitanchuui.zengsong3.enabled = true;
					this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng3jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid3){
				this.erjitanchuui.zengsongtupian3.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr3.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public chajizskeng4(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid4){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang4.alpha = 1;
					this.erjitanchuui.geshuwenzi4.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong4.enabled = true;
					this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng4jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang4.alpha = 0;
					this.erjitanchuui.geshuwenzi4.text = "";
					this.erjitanchuui.zengsong4.enabled = true;
					this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng4jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid4){
				this.erjitanchuui.zengsongtupian4.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr4.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public chajizskeng5(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid5){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang5.alpha = 1;
					this.erjitanchuui.geshuwenzi5.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong5.enabled = true;
					this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng5jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang5.alpha = 0;
					this.erjitanchuui.geshuwenzi5.text = "";
					this.erjitanchuui.zengsong5.enabled = true;
					this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizskeng5jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid5){
				this.erjitanchuui.zengsongtupian5.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr5.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public chajizskeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid1){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizs1queren,this);
	}

	public chajizskeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid2){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizs2queren,this);
	}

	public chajizskeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid3){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizs3queren,this);
	}

	public chajizskeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid4){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizs4queren,this);
	}

	public chajizskeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid5){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chajizs5queren,this);
	}


	public chajizs1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid1){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.chajigz();
					this.tongguojiangli(this.zengsongid1);
					Gameguanli.Kongzhitai().cuowutishixinxi("你喝下一碗止疼药，身上的疼痛有所缓解...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
					break;
				}
			}
		}
	}

	public chajizs2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid2){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.chajigz();
					this.tongguojiangli(this.zengsongid2);
					Gameguanli.Kongzhitai().cuowutishixinxi("你喝下一杯枇杷膏，嗓子舒服了不少...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
					break;
				}
			}
		}
	}

	public chajizs3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid3){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.chajigz();
					this.tongguojiangli(this.zengsongid3);
					Gameguanli.Kongzhitai().cuowutishixinxi("你服下两粒感冒药，似乎感觉舒服了不少...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
					break;
				}
			}
		}
	}

	public chajizs4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid4){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.chajigz();
					this.tongguojiangli(this.zengsongid4);
					Gameguanli.Kongzhitai().cuowutishixinxi("你服下几粒降压药，血压降了下来...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
					break;
				}
			}
		}
	}

	public chajizs5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid5){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.chajigz();
					this.tongguojiangli(this.zengsongid5);
					Gameguanli.Kongzhitai().cuowutishixinxi("你服用了速效救心丸，心梗明显得到缓解...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该药品可使用...");
					break;
				}
			}
		}
	}

	public dianjishafa(){
		egret.Tween.get(this.but_shafa).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.but_shafa).to({scaleX:1,scaleY:1},500);
		})
		this.shafajiaohu = new Shafajiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.shafajiaohu);
		this.shafajiaohu.shafaguanbi.touchEnabled = true;
		this.shafajiaohu.shafaguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbishafa,this);
		this.shafajiaohu.shafachakan.enabled = true;
		this.shafajiaohu.shafajinxiu.enabled = true;
		this.shafajiaohu.shafachakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shafack,this);
		this.shafajiaohu.shafajinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shafagz,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");
	}

	public guanbishafa(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.shafajiaohu);
	}

	public shafack(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.parent){
			if(this.shafajiaohu.shafachakan.enabled == false || this.shafajiaohu.shafajinxiu.enabled == false ){
			Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.removeChild(this.erjitanchuui);
			this.shafajiaohu.shafachakan.enabled = true;
		},this)
		this.shafajiaohu.shafachakan.enabled = false;
		this.shafajiaohu.shafajinxiu.enabled = true;
		/*this.erjitanchuui.x = this.shafajiaohu.shafabeijing.x  + this.shafajiaohu.shafabeijing.width * 2  -  this.shafajiaohu.shafabeijing.width / 3;
		this.erjitanchuui.y = this.shafajiaohu.shafabeijing.y - this.shafajiaohu.shafabeijing.height / 3;*/
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "名称";
		this.erjitanchuui.qinhelibiaoqian.text = "每次恢复";
		this.erjitanchuui.gongzuobiaoqian.text = "积累上限";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "8"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "" + this.jiatingchengyuanbiao[i].qinghezhi;
				this.erjitanchuui.gongzuozhi.text = "" + this.jiatingchengyuanbiao[i].gongzuonengli;
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		}
		}
		
	}

	public shafagz(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.parent){
			if(this.shafajiaohu.shafachakan.enabled == false || this.shafajiaohu.shafajinxiu.enabled == false ){
				Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.removeChild(this.erjitanchuui);
			}
				this.erjitanchuui = new Shafadianshidengjiaohuui();
				Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.addChild(this.erjitanchuui);
				this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.removeChild(this.erjitanchuui);
					this.shafajiaohu.shafajinxiu.enabled = true;
				},this)
				this.shafajiaohu.shafachakan.enabled = true;
				this.shafajiaohu.shafajinxiu.enabled = false;
				/*this.erjitanchuui.x = this.shafajiaohu.shafabeijing.x  + this.shafajiaohu.shafabeijing.width * 2  -  this.shafajiaohu.shafabeijing.width / 3;
				this.erjitanchuui.y = this.shafajiaohu.shafabeijing.y - this.shafajiaohu.shafabeijing.height / 3;*/
				this.erjitanchuui.biaotiwenzi0.text  = "沙发休息";
				this.erjitanchuui.guanxibiaoqian0.text = "累积次数";
				this.erjitanchuui.guanxineirong0.text = Gerenshuxing.shafaxinxi[0] + "/" + Gerenshuxing.shafaxinxi[1] + "  " + "["+ Gerenshuxing.shafaxinxi[3] +"]";
				this.erjitanchuui.qinhelibiaoqian0.text = "恢复间隔";
				this.erjitanchuui.qurenanniu.enabled = true;
				this.erjitanchuui.qurenanniu0.enabled = false;
				this.erjitanchuui.qurenanniu1.enabled = false;
				this.erjitanchuui.qurenanniu.alpha = 1;
				this.erjitanchuui.qurenanniu0.alpha = 0;
				this.erjitanchuui.qurenanniu1.alpha = 0;
				this.erjitanchuui.jiesaobiaoqian0.text = "说明";
				this.erjitanchuui.jiesaoneirong0.text = "1.沙发每隔一定的时间会根据当前的心情值恢复体力。\n2.恢复的体力会寄存在沙发上，每次休息会将寄存的体力领取完。\n3.寄存的体力达到上限时不再恢复。";
				if(parseInt(Gerenshuxing.shafaxinxi[0]) == parseInt(Gerenshuxing.shafaxinxi[1])){
					this.erjitanchuui.qinghelizhi0.text = "已累积满";	
				}else{
					let dangqianshijian = (new Date()).valueOf();
					let shengyushijian = parseInt(Gerenshuxing.shafaxinxi[2]) - dangqianshijian;
					this.erjitanchuui.qinghelizhi0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian  / 1000) % 60) ;
				}
				if(parseInt(Gerenshuxing.shafaxinxi[0]) > 0){
					this.erjitanchuui.qurenanniu.enabled = true;
					this.erjitanchuui.qurenanniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shafatililingqu,this);
				}else{
					this.erjitanchuui.qurenanniu.enabled = false;
				}
				if(parseInt(Gerenshuxing.shafaxinxi[0]) < parseInt(Gerenshuxing.shafaxinxi[1])){
					let dingshiqi = new egret.Timer(1000,1);
					dingshiqi.addEventListener(egret.TimerEvent.TIMER,this.panduanshafajishi,this);
					dingshiqi.start();
				}
		}
		
	}

	public panduanshafajishi(){
		if(this.shafajiaohu.shafajinxiu.enabled == false){
			this.shafagz();
		}
	}

	public shafatililingqu(){
		this.guanbishafa();
		let guoduchangjing = new Dianpurukou();
		Gameguanli.Kongzhitai().dingbuui.addChild(guoduchangjing);
		guoduchangjing.jinruwenzi.text = "你在沙发上休息了一会儿，感觉很放松...";
		egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
			egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:1},1500).wait(2000).call(()=>{
				let jianglishuliang = Gerenshuxing.shafaxinxi[3];
				let xianzaishijian6 = (new Date()).valueOf();
				xianzaishijian6 = xianzaishijian6 + 120000;
				Weblianjie.fasongshuju("code:091","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"0"' +","
				+ '"kouchushuliang"' +":"+ '"0"' +","
				+ '"leixing"' +":"+ '"2"' +","
				+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
				+ '"xiayishijian"' +":"+ '"' + xianzaishijian6 + '"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
				guoduchangjing.jinruwenzi.text = "短暂的休息过后，你的行动力得到了有效恢复，疲劳感降低了许多...";
				this.shafatishi.source = "";
				egret.Tween.get(guoduchangjing.jinruwenzi).to({alpha:0},1500).call(()=>{
					Gameguanli.Kongzhitai().dingbuui.removeChild(guoduchangjing);
				})
			})
		})
	}

	public dianjimaowo(){
		egret.Tween.get(this.but_maowo).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.but_maowo).to({scaleX:1,scaleY:1},500);
			Gameguanli.Kongzhitai().cuowutishixinxi("点击成功");
		})
	}

	//大儿子回家时，服务器通知刷新
	public daerzihuijiashi(){
		this.jiatingchengyuanxianshi();
		let daerzihuijiahanhua = new Toudingwenzi();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(daerzihuijiahanhua);
		daerzihuijiahanhua.x = this.img_daerzi.x - daerzihuijiahanhua.width / 2 + daerzihuijiahanhua.toudingwenzizu.width + this.img_daerzi.width;
		daerzihuijiahanhua.y = this.img_daerzi.y - daerzihuijiahanhua.height / 2 + daerzihuijiahanhua.toudingwenzizu.height + this.img_daerzi.height / 6;
		daerzihuijiahanhua.wenzineirong.text = "妈，我回家了..."
		egret.Tween.get(daerzihuijiahanhua).to({alpha:0.5},3000).call(()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(daerzihuijiahanhua);
		})
	}

	//二儿子回家时，服务器通知刷新
	public ererzihuijiashi(){
		this.jiatingchengyuanxianshi();
		let ererzihuijiahanhua = new Toudingwenzi();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(ererzihuijiahanhua);
		ererzihuijiahanhua.x = this.img_ererzi.x - ererzihuijiahanhua.width / 2  + ererzihuijiahanhua.toudingwenzizu.width + this.img_ererzi.width;
		ererzihuijiahanhua.y = this.img_ererzi.y - ererzihuijiahanhua.height / 2 + ererzihuijiahanhua.toudingwenzizu.height + this.img_ererzi.height / 6;
		ererzihuijiahanhua.wenzineirong.text = "亲爱的老妈，我回家了..."
		egret.Tween.get(ererzihuijiahanhua).to({alpha:0.5},3000).call(()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(ererzihuijiahanhua);
		})
	}

	//儿媳妇回家时，服务器通知刷新
	public xifuhuijiashi(){
		this.jiatingchengyuanxianshi();
		let xifuhuijiahanhua = new Toudingwenzi();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(xifuhuijiahanhua);
		xifuhuijiahanhua.img_toudingwenzikuang.skewY = 180
		xifuhuijiahanhua.x = this.img_daerxi.x - xifuhuijiahanhua.width / 2 + xifuhuijiahanhua.toudingwenzizu.width - this.img_daerxi.width * 2.5;
		xifuhuijiahanhua.y = this.img_daerxi.y - xifuhuijiahanhua.height / 2 + xifuhuijiahanhua.toudingwenzizu.height + this.img_daerxi.height / 6;
		xifuhuijiahanhua.wenzineirong.text = "婆婆，我回家了..."
		egret.Tween.get(xifuhuijiahanhua).to({alpha:0.5},3000).call(()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(xifuhuijiahanhua);
		})
	}

	//孙女回家时，服务器通知刷新
	public sunnvhuijiashi(){
		this.jiatingchengyuanxianshi();
		let sunnvhuijiahanhua = new Toudingwenzi();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(sunnvhuijiahanhua);
		sunnvhuijiahanhua.x = this.img_xiaosunnv.x - sunnvhuijiahanhua.width / 2 + sunnvhuijiahanhua.toudingwenzizu.width + this.img_xiaosunnv.width;
		sunnvhuijiahanhua.y = this.img_xiaosunnv.y - sunnvhuijiahanhua.height / 2 + sunnvhuijiahanhua.toudingwenzizu.height + this.img_xiaosunnv.height / 6;
		sunnvhuijiahanhua.wenzineirong.text = "奶奶，我回家了..."
		egret.Tween.get(sunnvhuijiahanhua).to({alpha:0.5},3000).call(()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(sunnvhuijiahanhua);
		})
	}

	//成员离开家时刷新显示数据
	public chengyuanlikaijiashi(){
		this.jiatingchengyuanxianshi();
		let daerzihuijiahanhua = new Toudingwenzi();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(daerzihuijiahanhua);
		daerzihuijiahanhua.x = this.img_daerzi.x - daerzihuijiahanhua.width / 2 + daerzihuijiahanhua.toudingwenzizu.width + this.img_daerzi.width;
		daerzihuijiahanhua.y = this.img_daerzi.y - daerzihuijiahanhua.height / 2 + daerzihuijiahanhua.toudingwenzizu.height + this.img_daerzi.height / 6;
		daerzihuijiahanhua.wenzineirong.text = "妈，我去饭店了..."
		egret.Tween.get(daerzihuijiahanhua).to({alpha:0.5},3000).call(()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(daerzihuijiahanhua);
			egret.Tween.get(this.img_daerzi).to({alpha:0},3000).call(()=>{
				this.img_daerzi.alpha = 0;
				if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.daerzijiaohu);
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.erjitanchuui);
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.renwujiemian);
					Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.jinxiuquerenui);
				}
			})
		})
		let ererzihuijiahanhua = new Toudingwenzi();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(ererzihuijiahanhua);
		ererzihuijiahanhua.x = this.img_ererzi.x - ererzihuijiahanhua.width / 2  + ererzihuijiahanhua.toudingwenzizu.width + this.img_ererzi.width;
		ererzihuijiahanhua.y = this.img_ererzi.y - ererzihuijiahanhua.height / 2 + ererzihuijiahanhua.toudingwenzizu.height + this.img_ererzi.height / 6;
		ererzihuijiahanhua.wenzineirong.text = "亲爱的老妈，我出去工作啦，您别太挂念我，照顾好自己..."
		egret.Tween.get(ererzihuijiahanhua).to({alpha:0.5},3000).call(()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(ererzihuijiahanhua);
			egret.Tween.get(this.img_ererzi).to({alpha:0},3000).call(()=>{
				this.img_ererzi.alpha = 0;
				if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.ererzijiaohu);
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.erjitanchuui);
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.renwujiemian);
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.jinxiuquerenui);
				}
			})
		})
		let xifuhuijiahanhua = new Toudingwenzi();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(xifuhuijiahanhua);
		xifuhuijiahanhua.img_toudingwenzikuang.skewY = 180
		xifuhuijiahanhua.x = this.img_daerxi.x - xifuhuijiahanhua.width / 2 + xifuhuijiahanhua.toudingwenzizu.width - this.img_daerxi.width * 2.5;
		xifuhuijiahanhua.y = this.img_daerxi.y - xifuhuijiahanhua.height / 2 + xifuhuijiahanhua.toudingwenzizu.height + this.img_daerxi.height / 6;
		xifuhuijiahanhua.wenzineirong.text = "婆婆，我上班去啦..."
		egret.Tween.get(xifuhuijiahanhua).to({alpha:0.5},3000).call(()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(xifuhuijiahanhua);
			egret.Tween.get(this.img_daerxi).to({alpha:0},3000).call(()=>{
				this.img_daerxi.alpha = 0;
				if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.xifujiaohu);
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.erjitanchuui);
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.renwujiemian);
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.jinxiuquerenui);
				}
			})
		})
		let sunnvhuijiahanhua = new Toudingwenzi();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(sunnvhuijiahanhua);
		sunnvhuijiahanhua.x = this.img_xiaosunnv.x - sunnvhuijiahanhua.width / 2 + sunnvhuijiahanhua.toudingwenzizu.width + this.img_xiaosunnv.width;
		sunnvhuijiahanhua.y = this.img_xiaosunnv.y - sunnvhuijiahanhua.height / 2 + sunnvhuijiahanhua.toudingwenzizu.height + this.img_xiaosunnv.height / 6;
		sunnvhuijiahanhua.wenzineirong.text = "奶奶，我去上学了..."
		egret.Tween.get(sunnvhuijiahanhua).to({alpha:0.5},3000).call(()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(sunnvhuijiahanhua);
			egret.Tween.get(this.img_xiaosunnv).to({alpha:0},3000).call(()=>{
				this.img_xiaosunnv.alpha = 0;
				if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.sunnvjiaohu);
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.erjitanchuui);
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.renwujiemian);
						Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.jinxiuquerenui);
				}
			})
		})
	}

	//家庭成员显示模块

	public jiatingchengyuanxianshi(){
		if(parseInt(Gerenshuxing.daerzixinxi[5]) == 1){
			this.img_daerzi.alpha = 1;
			this.img_daerzi.touchEnabled = true;
			this.img_daerzi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidaerzi,this);
			if(Gerenshuxing.daerzijiaotan > 0){
				this.duihuatishi.source = "img_duihuatishi_png";
			}else{
				this.duihuatishi.source = "";
			}
			if(parseInt(Gerenshuxing.daerzixinxi[2]) != 0 && parseInt(Gerenshuxing.daerzixinxi[3]) == 0){
				this.laodongtishi.source = "img_laodongtishi_png";
			}else{
				this.laodongtishi.source = "";
			}
		}else{
			this.img_daerzi.alpha = 0;
			this.img_daerzi.touchEnabled = false;
			this.laodongtishi.source = "";
			this.duihuatishi.source = "";
		}
		if(Gerenshuxing.ererzixinxi[5] == 1){
			this.img_ererzi.alpha = 1;
			this.img_ererzi.touchEnabled = true;
			this.img_ererzi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiererzi,this);
			if(Gerenshuxing.ererzijiaotan > 0){
				this.duihuatishi0.source = "img_duihuatishi_png";
			}else{
				this.duihuatishi0.source = "";
			}
			if(parseInt(Gerenshuxing.ererzixinxi[2]) != 0 && parseInt(Gerenshuxing.ererzixinxi[3]) == 0){
				this.laodongtishi0.source = "img_laodongtishi_png";
			}else{
				this.laodongtishi0.source = "";
			}
		}else{
			this.img_ererzi.alpha = 0;
			this.img_ererzi.touchEnabled = false;
			this.laodongtishi0.source = "";
			this.duihuatishi0.source = "";
		}
		if(Gerenshuxing.xifuxinxi[5] == 1){
			this.img_daerxi.alpha = 1;
			this.img_daerxi.touchEnabled = true;
			this.img_daerxi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjixifu,this);
			if(Gerenshuxing.xifujiaotan > 0){
				this.duihuatishi1.source = "img_duihuatishi_png";
			}else{
				this.duihuatishi1.source = "";
			}
			if(parseInt(Gerenshuxing.xifuxinxi[2]) != 0 && parseInt(Gerenshuxing.xifuxinxi[3]) == 0){
				this.laodongtishi1.source = "img_laodongtishi_png";
			}else{
				this.laodongtishi1.source = "";
			}
		}else{
			this.img_daerxi.alpha = 0;
			this.img_daerxi.touchEnabled = false;
			this.duihuatishi1.source = "";
			this.laodongtishi1.source = "";
		}
		if(Gerenshuxing.sunnvxinxi[5] == 1){
			this.img_xiaosunnv.alpha = 1;
			this.img_xiaosunnv.touchEnabled = true;
			this.img_xiaosunnv.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjixiaosunnv,this);
			if(Gerenshuxing.sunnvjiaotan > 0){
				this.duihuatishi2.source = "img_duihuatishi_png";
			}else{
				this.duihuatishi2.source = "";
			}
			if(parseInt(Gerenshuxing.sunnvxinxi[2]) != 0 && parseInt(Gerenshuxing.sunnvxinxi[3]) == 0){
				this.laodongtishi2.source = "img_laodongtishi_png";
			}else{
				this.laodongtishi2.source = "";
			}
		}else{
			this.img_xiaosunnv.alpha = 0;
			this.img_xiaosunnv.touchEnabled = false;
			this.duihuatishi2.source = "";
			this.laodongtishi2.source = "";
		}
	}

	//点击大儿子触发

	public dianjidaerzi(){
		egret.Tween.get(this.img_daerzi).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.img_daerzi).to({scaleX:1,scaleY:1},500);
		})
		this.daerzijiaohu = new Daerzijiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.daerzijiaohu);
		this.daerzijiaohu.daerziguanbi.touchEnabled = true;
		this.daerzijiaohu.daerziguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbidaerzi,this);
		this.daerzijiaohu.daerzichakan.enabled = true;
		if(Gerenshuxing.daerzijiaotan > 0){
			this.daerzijiaohu.daerzijiaotan.enabled = true;
		}else{
			this.daerzijiaohu.daerzijiaotan.enabled = false;
		}
		this.daerzijiaohu.daerzijinxiu.enabled = true;
		this.daerzijiaohu.daerzizengsong.enabled = true;
		this.daerzijiaohu.daerzichakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzick,this);
		this.daerzijiaohu.daerzijiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijt,this);
		this.daerzijiaohu.daerzijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigz,this);
		this.daerzijiaohu.daerzizengsong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizs,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");

	}

	//点击大儿子查看按钮触发

	public daerzick(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.parent){
			if(this.daerzijiaohu.daerzichakan.enabled == false || this.daerzijiaohu.daerzijinxiu.enabled == false || this.daerzijiaohu.daerzizengsong.enabled == false){
				Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
			}
			this.erjitanchuui = new Jiatingchengyuanjieshaoui();
			Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.guanbiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
				this.daerzijiaohu.daerzichakan.enabled = true;
			},this)
			this.daerzijiaohu.daerzichakan.enabled = false;
			this.daerzijiaohu.daerzijinxiu.enabled = true;
			this.daerzijiaohu.daerzizengsong.enabled = true;
			/*this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
			this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;*/
			if(Gerenshuxing.daerzijiaotan > 0){
				this.daerzijiaohu.daerzijiaotan.enabled = true;
			}else{
				this.daerzijiaohu.daerzijiaotan.enabled = false;
			}
			this.erjitanchuui.biaotiwenzi.text = "介绍";
			this.erjitanchuui.guanxibiaoqian.text = "关系";
			this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
			this.erjitanchuui.gongzuobiaoqian.text = "工作能力";
			this.erjitanchuui.jiesaobiaoqian.text = "说明";
			for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
				if(this.jiatingchengyuanbiao[i].id == "1"){
					this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
					this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.daerzixinxi[0];
					this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.daerzixinxi[1];
					this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
					break;
				}
			} 
		}
		
	}

	//点击大儿子交谈按钮触发

	public daerzijt(){
		Gerenshuxing.daerzijiaotan -= 1;
		this.renwujiemian = new Npcduihuaui();
		if(this.daerzijiaohu.daerzichakan.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
		}
		Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
		this.renwujiemian.chushihua("1");
		this.daerzijiaohu.daerzichakan.enabled = true;
		this.daerzijiaohu.daerzijinxiu.enabled = true;
		this.daerzijiaohu.daerzizengsong.enabled = true;
		if(Gerenshuxing.daerzijiaotan > 0){
			this.daerzijiaohu.daerzijiaotan.enabled = true;
		}else{
			this.daerzijiaohu.daerzijiaotan.enabled = false;
			this.duihuatishi.source = "";
		}

	}

	//点击大儿子工作按钮触发

	public daerzigz(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.parent){
			if(this.daerzijiaohu.daerzichakan.enabled == false || this.daerzijiaohu.daerzijinxiu.enabled == false || this.daerzijiaohu.daerzizengsong.enabled == false){
				Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
			}
			if(Gerenshuxing.daerzixinxi[2] != "0"){
				this.erjitanchuui = new Jiatingjinxiuui();
				Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
				this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
					this.daerzijiaohu.daerzijinxiu.enabled = true;
				},this)
				/*this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
				this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;*/
				this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
				this.daerzijiaohu.daerzichakan.enabled = true;
				this.daerzijiaohu.daerzizengsong.enabled = true;
				this.daerzijiaohu.daerzijinxiu.enabled = false;
				if(Gerenshuxing.daerzijiaotan > 0){
					this.daerzijiaohu.daerzijiaotan.enabled = true;
				}else{
					this.daerzijiaohu.daerzijiaotan.enabled = false;
				}
				for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
					if(this.chengyuanhudongbiao[i].id == Gerenshuxing.daerzixinxi[2]){
						this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
						this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
					}
				}
				if(Gerenshuxing.daerzixinxi[3] == "0"){
					this.erjitanchuui.shengyushijian0.text = "已完成";
					this.erjitanchuui.quedinganniu.enabled = true;
					this.erjitanchuui.quedinganniu0.enabled = false;
					this.erjitanchuui.quedinganniu1.enabled = false;
					this.erjitanchuui.quedinganniu.alpha = 1;
					this.erjitanchuui.quedinganniu0.alpha = 0;
					this.erjitanchuui.quedinganniu1.alpha = 0;
					this.erjitanchuui.jiasuwenzi.alpha = 0;
					this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiulinjiang,this);
				}else{
					let dangqianshijian = (new Date()).valueOf();
					let shengyushijian = parseInt(Gerenshuxing.daerzixinxi[3]) - dangqianshijian;
					this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian  / 1000) % 60) ;
					this.erjitanchuui.quedinganniu.enabled = false;
					this.erjitanchuui.quedinganniu0.enabled = true;
					this.erjitanchuui.quedinganniu1.enabled = false;
					this.erjitanchuui.quedinganniu.alpha = 0;
					this.erjitanchuui.quedinganniu0.alpha = 1;
					this.erjitanchuui.quedinganniu1.alpha = 0;
					this.erjitanchuui.jiasuwenzi.alpha = 1;
					this.erjitanchuui.quedinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiusuoduan,this);
					let dingshiqi = new egret.Timer(1000,1);
					dingshiqi.addEventListener(egret.TimerEvent.TIMER,this.panduandaerzijinxiu,this);
					dingshiqi.start();
				}
			}else{
				this.erjitanchuui = new Jiatingchengyuanzengsong();
				Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
				this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
					this.daerzijiaohu.daerzijinxiu.enabled = true;
				},this)
				/*this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
				this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;*/
				this.erjitanchuui.wenzibiaoti.text = "工作内容";
				this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
				this.daerzigzkeng1();
				this.daerzigzkeng2();
				this.daerzigzkeng3();
				this.daerzigzkeng4();
				this.daerzigzkeng5();
			}
			this.daerzijiaohu.daerzichakan.enabled = true;
			if(Gerenshuxing.daerzijiaotan > 0){
				this.daerzijiaohu.daerzijiaotan.enabled = true;
			}else{
				this.daerzijiaohu.daerzijiaotan.enabled = false;
			}
			this.daerzijiaohu.daerzijinxiu.enabled = false;
			this.daerzijiaohu.daerzizengsong.enabled = true;
		}
			
	}

	public daerzijinxiulinjiang(){
		let idshuju = Gerenshuxing.daerzixinxi[2];
		let jianglileixing = 0;
		let jianglishuliang = 0;
		let beishu = 1;
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == idshuju){
				jianglileixing = this.chengyuanhudongbiao[j].jiangli;
				jianglishuliang = parseInt(this.chengyuanhudongbiao[j].jianglishuliang);
				break;
			}
		}
		jianglishuliang = Math.floor(jianglishuliang + jianglishuliang * parseInt(Gerenshuxing.daerzixinxi[1]) / 1000);
		Gerenshuxing.daerzixinxi[2] = "0";
		Weblianjie.fasongshuju("code:077","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"leixing"' +":"+ '"' + jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +"}");
		this.laodongtishi.source = "";
		this.daerzigz();
		

	}

	public async daerzijinxiusuoduan(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.daerzijiasu,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public daerzijiasu(){
		Weblianjie.fasongshuju("code:146","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"shijian"' +":"+ '"600000"' +"}");
	}

	public panduandaerzijinxiu(){
		if(this.daerzijiaohu.daerzijinxiu.enabled == false){
			this.daerzigz();
		}
	}

	public daerzigzkeng1(){
		let duihua1jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "1"){
				duihua1jiesuo = true;
				break;
			}
		}
		if(duihua1jiesuo == true){
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng1jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng1weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "1"){
				this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng2(){
		let duihua2jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "2"){
				duihua2jiesuo = true;
				break;
			}
		}
		if(duihua2jiesuo == true){
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng2jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng2weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "2"){
				this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng3(){
		let duihua3jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "3"){
				duihua3jiesuo = true;
				break;
			}
		}
		if(duihua3jiesuo == true){
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng3jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng3weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "3"){
				this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng4(){
		let duihua4jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "4"){
				duihua4jiesuo = true;
				break;
			}
		}
		if(duihua4jiesuo == true){
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng4jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng4weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "4"){
				this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng5(){
		let duihua5jiesuo = false;
		for(var i = 0;i<Gerenshuxing.daerzixuexi.length;i++){
			if(Gerenshuxing.daerzixuexi[i] == "5"){
				duihua5jiesuo = true;
				break;
			}
		}
		if(duihua5jiesuo == true){
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng5jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzigzkeng5weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "5"){
				this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public daerzigzkeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "1"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.daerzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu1queren,this);
	}

	public daerzigzkeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "2"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.daerzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu2queren,this);
	}

	public daerzigzkeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "3"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.daerzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu3queren,this);
	}

	public daerzigzkeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "4"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.daerzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu4queren,this);
	}

	public daerzigzkeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "5"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.daerzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzijinxiu5queren,this);
	}

	public daerzijinxiu1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("1","1","1");
	}

	

	public daerzijinxiu2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("2","1","1");
	}

	public daerzijinxiu3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("3","1","1");
	}

	public daerzijinxiu4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("4","1","1");
	}

	public daerzijinxiu5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("5","1","1");
	}


	public daerzigzkeng1weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
	}

	public daerzigzkeng2weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public daerzigzkeng3weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public daerzigzkeng4weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}

	public daerzigzkeng5weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【书店】时，有几率解锁该进修内容。";
		
	}



	public daerzizs(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.parent){
			if(this.daerzijiaohu.daerzichakan.enabled == false || this.daerzijiaohu.daerzijinxiu.enabled == false || this.daerzijiaohu.daerzizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuandaojuui();
		Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.removeChild(this.erjitanchuui);
			this.daerzijiaohu.daerzizengsong.enabled = true;
		},this)
		/*this.erjitanchuui.x = this.daerzijiaohu.daerzibeijing.x + this.daerzijiaohu.daerzibeijing.width;
		this.erjitanchuui.y = this.daerzijiaohu.daerzibeijing.y;*/
		this.erjitanchuui.daojubiaoti.text = "赠送列表";
		this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
		this.daojubiao = Gerenshuxing.daojubiao;
		this.daerzijiaohu.daerzichakan.enabled = true;
		if(Gerenshuxing.daerzijiaotan > 0){
			this.daerzijiaohu.daerzijiaotan.enabled = true;
		}else{
			this.daerzijiaohu.daerzijiaotan.enabled = false;
		}
		this.daerzijiaohu.daerzijinxiu.enabled = true;
		this.daerzijiaohu.daerzizengsong.enabled = false;
		for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
			if(this.chengyuanhudongbiao[i].id == "6"){
				this.zengsongid1 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "7"){
				this.zengsongid2 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "8"){
				this.zengsongid3 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "9"){
				this.zengsongid4 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "10"){
				this.zengsongid5 = this.chengyuanhudongbiao[i].xiaohao;
			}
		}
		this.daerzizskeng1();
		this.daerzizskeng2();
		this.daerzizskeng3();
		this.daerzizskeng4();
		this.daerzizskeng5();
		}
	}

	public daerzizskeng1(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid1){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang1.alpha = 1;
					this.erjitanchuui.geshuwenzi1.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong1.enabled = true;
					this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng1jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu1_png";					
					this.erjitanchuui.geshudikuang1.alpha = 0;
					this.erjitanchuui.geshuwenzi1.text = "";
					this.erjitanchuui.zengsong1.enabled = true;
					this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng1jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid1){
				this.erjitanchuui.zengsongtupian1.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr1.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public daerzizskeng2(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid2){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang2.alpha = 1;
					this.erjitanchuui.geshuwenzi2.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong2.enabled = true;
					this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng2jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang2.alpha = 0;
					this.erjitanchuui.geshuwenzi2.text = "";
					this.erjitanchuui.zengsong2.enabled = true;
					this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng2jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid2){
				this.erjitanchuui.zengsongtupian2.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr2.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public daerzizskeng3(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid3){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang3.alpha = 1;
					this.erjitanchuui.geshuwenzi3.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong3.enabled = true;
					this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng3jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang3.alpha = 0;
					this.erjitanchuui.geshuwenzi3.text = "";
					this.erjitanchuui.zengsong3.enabled = true;
					this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng3jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid3){
				this.erjitanchuui.zengsongtupian3.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr3.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public daerzizskeng4(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid4){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang4.alpha = 1;
					this.erjitanchuui.geshuwenzi4.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong4.enabled = true;
					this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng4jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang4.alpha = 0;
					this.erjitanchuui.geshuwenzi4.text = "";
					this.erjitanchuui.zengsong4.enabled = true;
					this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng4jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid4){
				this.erjitanchuui.zengsongtupian4.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr4.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public daerzizskeng5(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid5){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang5.alpha = 1;
					this.erjitanchuui.geshuwenzi5.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong5.enabled = true;
					this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng5jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang5.alpha = 0;
					this.erjitanchuui.geshuwenzi5.text = "";
					this.erjitanchuui.zengsong5.enabled = true;
					this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizskeng5jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid5){
				this.erjitanchuui.zengsongtupian5.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr5.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public daerzizskeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid1){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizs1queren,this);
	}

	public daerzizskeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid2){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizs2queren,this);
	}

	public daerzizskeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid3){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizs3queren,this);
	}

	public daerzizskeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid4){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizs4queren,this);
	}

	public daerzizskeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid5){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daerzizs5queren,this);
	}


	public daerzizs1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid1){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.daerzizs();
					this.tongguojiangli(this.zengsongid1);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.daerzizs();
					break;
				}
			}
		}
	}

	public daerzizs2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid2){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.daerzizs();
					this.tongguojiangli(this.zengsongid2);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.daerzizs();
					break;
				}
			}
		}
	}

	public daerzizs3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid3){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.daerzizs();
					this.tongguojiangli(this.zengsongid3);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.daerzizs();
					break;
				}
			}
		}
	}

	public daerzizs4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid4){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.daerzizs();
					this.tongguojiangli(this.zengsongid4);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.daerzizs();
					break;
				}
			}
		}
	}

	public daerzizs5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid5){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.daerzizs();
					this.tongguojiangli(this.zengsongid5);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.daerzizs();
					break;
				}
			}
		}
	}



	public guanbidaerzi(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.daerzijiaohu);
	}

	public dianjiererzi(){
		egret.Tween.get(this.img_ererzi).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.img_ererzi).to({scaleX:1,scaleY:1},500);
		})
		this.ererzijiaohu = new Ererzijiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.ererzijiaohu);
		this.ererzijiaohu.ererziguanbi.touchEnabled = true;
		this.ererzijiaohu.ererziguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbiererzi,this);
		this.ererzijiaohu.ererzichakan.enabled = true;
		if(Gerenshuxing.ererzijiaotan > 0){
			this.ererzijiaohu.ererzijiaotan.enabled = true;
		}else{
			this.ererzijiaohu.ererzijiaotan.enabled = false;
		}
		this.ererzijiaohu.ererzijinxiu.enabled = true;
		this.ererzijiaohu.ererzizengsong.enabled = true;
		this.ererzijiaohu.ererzichakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzick,this);
		this.ererzijiaohu.ererzijiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijt,this);
		this.ererzijiaohu.ererzijinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigz,this);
		this.ererzijiaohu.ererzizengsong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizs,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");

	}

	public ererzick(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.parent){
			if(this.ererzijiaohu.ererzichakan.enabled == false || this.ererzijiaohu.ererzijinxiu.enabled == false || this.ererzijiaohu.ererzizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
				this.ererzijiaohu.ererzichakan.enabled = true;
		},this)
		this.ererzijiaohu.ererzichakan.enabled = false;
		if(Gerenshuxing.ererzijiaotan > 0){
			this.ererzijiaohu.ererzijiaotan.enabled = true;
		}else{
			this.ererzijiaohu.ererzijiaotan.enabled = false;
		}
		this.ererzijiaohu.ererzijinxiu.enabled = true;
		this.ererzijiaohu.ererzizengsong.enabled = true;
		/*this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
		this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;*/
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "关系";
		this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
		this.erjitanchuui.gongzuobiaoqian.text = "工作能力";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "2"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.ererzixinxi[0];
				this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.ererzixinxi[1];
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		}
		} 
	}

	public ererzijt(){
		Gerenshuxing.ererzijiaotan -= 1;
		this.renwujiemian = new Npcduihuaui();
		if(this.ererzijiaohu.ererzichakan.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
		}
		Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
		this.renwujiemian.chushihua("2");
		this.ererzijiaohu.ererzichakan.enabled = true;
		if(Gerenshuxing.ererzijiaotan > 0){
			this.ererzijiaohu.ererzijiaotan.enabled = true;
		}else{
			this.ererzijiaohu.ererzijiaotan.enabled = false;
			this.duihuatishi0.source = "";
		}
		this.ererzijiaohu.ererzijinxiu.enabled = true;
		this.ererzijiaohu.ererzizengsong.enabled = true;

	}

	public ererzigz(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.parent){
			if(this.ererzijiaohu.ererzichakan.enabled == false || this.ererzijiaohu.ererzijinxiu.enabled == false || this.ererzijiaohu.ererzizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
		}
		if(Gerenshuxing.ererzixinxi[2] != "0"){
			this.erjitanchuui = new Jiatingjinxiuui();
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
					this.ererzijiaohu.ererzijinxiu.enabled = true;
				},this)
			/*this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
			this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;*/
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.ererzijiaohu.ererzichakan.enabled = true;
			if(Gerenshuxing.ererzijiaotan > 0){
				this.ererzijiaohu.ererzijiaotan.enabled = true;
			}else{
				this.ererzijiaohu.ererzijiaotan.enabled = false;
			}
			this.ererzijiaohu.ererzijinxiu.enabled = false;
			this.ererzijiaohu.ererzizengsong.enabled = true;
			for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
				if(this.chengyuanhudongbiao[i].id == Gerenshuxing.ererzixinxi[2]){
					this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
					this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
				}
			}
			if(Gerenshuxing.ererzixinxi[3] == "0"){
				this.erjitanchuui.shengyushijian0.text = "已完成";
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu0.enabled = false;
				this.erjitanchuui.quedinganniu1.enabled = false;
				this.erjitanchuui.quedinganniu.alpha = 1;
				this.erjitanchuui.quedinganniu0.alpha = 0;
				this.erjitanchuui.quedinganniu1.alpha = 0;
				this.erjitanchuui.jiasuwenzi.alpha = 0;
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiulinjiang,this);
			}else{
				let dangqianshijian = (new Date()).valueOf();
				let shengyushijian = parseInt(Gerenshuxing.ererzixinxi[3]) - dangqianshijian;
				this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian  / 1000) % 60) ;
				this.erjitanchuui.quedinganniu.enabled = false;
				this.erjitanchuui.quedinganniu0.enabled = true;
				this.erjitanchuui.quedinganniu1.enabled = false;
				this.erjitanchuui.quedinganniu.alpha = 0;
				this.erjitanchuui.quedinganniu0.alpha = 1;
				this.erjitanchuui.quedinganniu1.alpha = 0;
				this.erjitanchuui.jiasuwenzi.alpha = 1;
				this.erjitanchuui.quedinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiusuoduan,this);
				let dingshiqi = new egret.Timer(1000,1);
				dingshiqi.addEventListener(egret.TimerEvent.TIMER,this.panduanererzijinxiu,this);
				dingshiqi.start();
			}
		}else{
			this.erjitanchuui = new Jiatingchengyuanzengsong();
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
					this.ererzijiaohu.ererzijinxiu.enabled = true;
				},this)
			/*this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
			this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;*/
			this.erjitanchuui.wenzibiaoti.text = "工作内容";
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.ererzigzkeng1();
			this.ererzigzkeng2();
			this.ererzigzkeng3();
			this.ererzigzkeng4();
			this.ererzigzkeng5();
		}
		this.ererzijiaohu.ererzichakan.enabled = true;
		if(Gerenshuxing.ererzijiaotan > 0){
			this.ererzijiaohu.ererzijiaotan.enabled = true;
		}else{
			this.ererzijiaohu.ererzijiaotan.enabled = false;
		}
		this.ererzijiaohu.ererzijinxiu.enabled = false;
		this.ererzijiaohu.ererzizengsong.enabled = true;
		
		}
	}

	public ererzijinxiulinjiang(){
		let idshuju = Gerenshuxing.ererzixinxi[2];
		let jianglileixing = 0;
		let jianglishuliang = 0;
		let beishu = 1;
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == idshuju){
				jianglileixing = this.chengyuanhudongbiao[j].jiangli;
				jianglishuliang = parseInt(this.chengyuanhudongbiao[j].jianglishuliang);
				break;
			}
		}
		jianglishuliang = Math.floor(jianglishuliang + jianglishuliang * parseInt(Gerenshuxing.ererzixinxi[1]) / 1000);
		Gerenshuxing.ererzixinxi[2] = "0";
		Weblianjie.fasongshuju("code:078","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"leixing"' +":"+ '"' + jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +"}");
		this.laodongtishi0.source = "";
		this.ererzigz();
		

	}

	public async ererzijinxiusuoduan(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.ererzijiasu,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public ererzijiasu(){
		Weblianjie.fasongshuju("code:147","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"shijian"' +":"+ '"600000"' +"}");
	}

	public panduanererzijinxiu(){
		if(this.ererzijiaohu.ererzijinxiu.enabled == false){
			this.ererzigz();
		}
	}

	public ererzigzkeng1(){
		let duihua1jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "21"){
				duihua1jiesuo = true;
				break;
			}
		}
		if(duihua1jiesuo == true){
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng1jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng1weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "21"){
				this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng2(){
		let duihua2jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "22"){
				duihua2jiesuo = true;
				break;
			}
		}
		if(duihua2jiesuo == true){
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng2jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng2weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "22"){
				this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng3(){
		let duihua3jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "23"){
				duihua3jiesuo = true;
				break;
			}
		}
		if(duihua3jiesuo == true){
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng3jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng3weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "23"){
				this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng4(){
		let duihua4jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "24"){
				duihua4jiesuo = true;
				break;
			}
		}
		if(duihua4jiesuo == true){
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng4jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng4weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "24"){
				this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng5(){
		let duihua5jiesuo = false;
		for(var i = 0;i<Gerenshuxing.ererzixuexi.length;i++){
			if(Gerenshuxing.ererzixuexi[i] == "25"){
				duihua5jiesuo = true;
				break;
			}
		}
		if(duihua5jiesuo == true){
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng5jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzigzkeng5weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "25"){
				this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public ererzigzkeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "21"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.ererzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu1queren,this);
	}

	public ererzigzkeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "22"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.ererzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu2queren,this);
	}

	public ererzigzkeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "23"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.ererzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu3queren,this);
	}

	public ererzigzkeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "24"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.ererzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu4queren,this);
	}

	public ererzigzkeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "25"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.ererzixinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzijinxiu5queren,this);
	}

	public ererzijinxiu1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("21","2","1");
	}

	

	public ererzijinxiu2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("22","2","1");
	}

	public ererzijinxiu3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("23","2","1");
	}

	public ererzijinxiu4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("24","2","1");
	}

	public ererzijinxiu5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("25","2","1");
	}


	public ererzigzkeng1weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【办公楼】时，有几率解锁该进修内容。";
	}

	public ererzigzkeng2weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【办公楼】时，有几率解锁该进修内容。";
		
	}

	public ererzigzkeng3weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【办公楼】时，有几率解锁该进修内容。";
		
	}

	public ererzigzkeng4weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【办公楼】时，有几率解锁该进修内容。";
		
	}

	public ererzigzkeng5weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【办公楼】时，有几率解锁该进修内容。";
		
	}

	public ererzizs(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.parent){
			if(this.ererzijiaohu.ererzichakan.enabled == false || this.ererzijiaohu.ererzijinxiu.enabled == false || this.ererzijiaohu.ererzizengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuandaojuui();
		Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.removeChild(this.erjitanchuui);
			this.ererzijiaohu.ererzizengsong.enabled = true;
		},this)
		/*this.erjitanchuui.x = this.ererzijiaohu.ererzibeijing.x - this.erjitanchuui.width;
		this.erjitanchuui.y = this.ererzijiaohu.ererzibeijing.y;*/
		this.erjitanchuui.daojubiaoti.text = "赠送列表";
		this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
		this.daojubiao = Gerenshuxing.daojubiao;
		this.ererzijiaohu.ererzichakan.enabled = true;
		if(Gerenshuxing.ererzijiaotan > 0){
			this.ererzijiaohu.ererzijiaotan.enabled = true;
		}else{
			this.ererzijiaohu.ererzijiaotan.enabled = false;
		}
		this.ererzijiaohu.ererzijinxiu.enabled = true;
		this.ererzijiaohu.ererzizengsong.enabled = false;
		for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
			if(this.chengyuanhudongbiao[i].id == "26"){
				this.zengsongid1 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "27"){
				this.zengsongid2 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "28"){
				this.zengsongid3 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "29"){
				this.zengsongid4 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "30"){
				this.zengsongid5 = this.chengyuanhudongbiao[i].xiaohao;
			}
		}
		this.ererzizskeng1();
		this.ererzizskeng2();
		this.ererzizskeng3();
		this.ererzizskeng4();
		this.ererzizskeng5();
		}
	}

	public ererzizskeng1(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid1){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang1.alpha = 1;
					this.erjitanchuui.geshuwenzi1.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong1.enabled = true;
					this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng1jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu1_png";					
					this.erjitanchuui.geshudikuang1.alpha = 0;
					this.erjitanchuui.geshuwenzi1.text = "";
					this.erjitanchuui.zengsong1.enabled = true;
					this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng1jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid1){
				this.erjitanchuui.zengsongtupian1.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr1.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public ererzizskeng2(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid2){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang2.alpha = 1;
					this.erjitanchuui.geshuwenzi2.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong2.enabled = true;
					this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng2jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang2.alpha = 0;
					this.erjitanchuui.geshuwenzi2.text = "";
					this.erjitanchuui.zengsong2.enabled = true;
					this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng2jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid2){
				this.erjitanchuui.zengsongtupian2.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr2.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public ererzizskeng3(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid3){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang3.alpha = 1;
					this.erjitanchuui.geshuwenzi3.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong3.enabled = true;
					this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng3jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang3.alpha = 0;
					this.erjitanchuui.geshuwenzi3.text = "";
					this.erjitanchuui.zengsong3.enabled = true;
					this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng3jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid3){
				this.erjitanchuui.zengsongtupian3.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr3.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public ererzizskeng4(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid4){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang4.alpha = 1;
					this.erjitanchuui.geshuwenzi4.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong4.enabled = true;
					this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng4jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang4.alpha = 0;
					this.erjitanchuui.geshuwenzi4.text = "";
					this.erjitanchuui.zengsong4.enabled = true;
					this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng4jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid4){
				this.erjitanchuui.zengsongtupian4.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr4.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public ererzizskeng5(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid5){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang5.alpha = 1;
					this.erjitanchuui.geshuwenzi5.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong5.enabled = true;
					this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng5jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang5.alpha = 0;
					this.erjitanchuui.geshuwenzi5.text = "";
					this.erjitanchuui.zengsong5.enabled = true;
					this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizskeng5jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid5){
				this.erjitanchuui.zengsongtupian5.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr5.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public ererzizskeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid1){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizs1queren,this);
	}

	public ererzizskeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid2){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizs2queren,this);
	}

	public ererzizskeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid3){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizs3queren,this);
	}

	public ererzizskeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid4){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizs4queren,this);
	}

	public ererzizskeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid5){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ererzizs5queren,this);
	}


	public ererzizs1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid1){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.ererzizs();
					this.tongguojiangli(this.zengsongid1);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.ererzizs();
					break;
				}
			}
		}
	}

	public ererzizs2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid2){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.ererzizs();
					this.tongguojiangli(this.zengsongid2);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.ererzizs();
					break;
				}
			}
		}
	}

	public ererzizs3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid3){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.ererzizs();
					this.tongguojiangli(this.zengsongid3);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.ererzizs();
					break;
				}
			}
		}
	}

	public ererzizs4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid4){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.ererzizs();
					this.tongguojiangli(this.zengsongid4);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.ererzizs();
					break;
				}
			}
		}
	}

	public ererzizs5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid5){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.ererzizs();
					this.tongguojiangli(this.zengsongid5);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，二儿子似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.ererzizs();
					break;
				}
			}
		}
	}

	public guanbiererzi(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.ererzijiaohu);
	}

	public dianjixifu(){
		egret.Tween.get(this.img_daerxi).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.img_daerxi).to({scaleX:1,scaleY:1},500);
		})
		this.xifujiaohu = new Xifujiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.xifujiaohu);
		this.xifujiaohu.xifuguanbi.touchEnabled = true;
		this.xifujiaohu.xifuguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbixifu,this);
		this.xifujiaohu.xifuchakan.enabled = true;
		if(Gerenshuxing.xifujiaotan > 0){
			this.xifujiaohu.xifujiaotan.enabled = true;
		}else{
			this.xifujiaohu.xifujiaotan.enabled = false;
		}
		this.xifujiaohu.xifujinxiu.enabled = true;
		this.xifujiaohu.xifuzengsong.enabled = true;
		this.xifujiaohu.xifuchakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuck,this);
		this.xifujiaohu.xifujiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujt,this);
		this.xifujiaohu.xifujinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugz,this);
		this.xifujiaohu.xifuzengsong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzs,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");

	}

	public xifuck(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.parent){
			if(this.xifujiaohu.xifuchakan.enabled == false || this.xifujiaohu.xifujinxiu.enabled == false || this.xifujiaohu.xifuzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
				this.xifujiaohu.xifuchakan.enabled = true;
		},this)
		this.xifujiaohu.xifuchakan.enabled = false;
		if(Gerenshuxing.xifujiaotan > 0){
			this.xifujiaohu.xifujiaotan.enabled = true;
		}else{
			this.xifujiaohu.xifujiaotan.enabled = false;
		}
		this.xifujiaohu.xifujinxiu.enabled = true;
		this.xifujiaohu.xifuzengsong.enabled = true;
		/*this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
		this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;*/
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "关系";
		this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
		this.erjitanchuui.gongzuobiaoqian.text = "家务能力";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "3"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.xifuxinxi[0];
				this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.xifuxinxi[1];
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		} 
		}
	}

	public xifujt(){
		Gerenshuxing.xifujiaotan -= 1;
		this.renwujiemian = new Npcduihuaui();
		if(this.xifujiaohu.xifuchakan.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
		}
		Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
		this.renwujiemian.chushihua("3");
		this.xifujiaohu.xifuchakan.enabled = true;
		if(Gerenshuxing.xifujiaotan > 0){
			this.xifujiaohu.xifujiaotan.enabled = true;
		}else{
			this.xifujiaohu.xifujiaotan.enabled = false;
			this.duihuatishi1.source = "";
		}
		this.xifujiaohu.xifujinxiu.enabled = true;
		this.xifujiaohu.xifuzengsong.enabled = true;

	}

	public xifugz(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.parent){
			if(this.xifujiaohu.xifuchakan.enabled == false || this.xifujiaohu.xifujinxiu.enabled == false || this.xifujiaohu.xifuzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
		}
		if(Gerenshuxing.xifuxinxi[2] != "0"){
			this.erjitanchuui = new Jiatingjinxiuui();
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
					this.xifujiaohu.xifujinxiu.enabled = true;
				},this)
			/*this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
			this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;*/
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.xifujiaohu.xifuchakan.enabled = true;
			if(Gerenshuxing.xifujiaotan > 0){
				this.xifujiaohu.xifujiaotan.enabled = true;
			}else{
				this.xifujiaohu.xifujiaotan.enabled = false;
			}
			this.xifujiaohu.xifujinxiu.enabled = false;
			this.xifujiaohu.xifuzengsong.enabled = true;
			for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
				if(this.chengyuanhudongbiao[i].id == Gerenshuxing.xifuxinxi[2]){
					this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
					this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
				}
			}
			if(Gerenshuxing.xifuxinxi[3] == "0"){
				this.erjitanchuui.shengyushijian0.text = "已完成";
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu0.enabled = false;
				this.erjitanchuui.quedinganniu1.enabled = false;
				this.erjitanchuui.quedinganniu.alpha = 1;
				this.erjitanchuui.quedinganniu0.alpha = 0;
				this.erjitanchuui.quedinganniu1.alpha = 0;
				this.erjitanchuui.jiasuwenzi.alpha = 0;
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiulinjiang,this);
			}else{
				let dangqianshijian = (new Date()).valueOf();
				let shengyushijian = parseInt(Gerenshuxing.xifuxinxi[3]) - dangqianshijian;
				this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian  / 1000) % 60) ;
				this.erjitanchuui.quedinganniu.enabled = false;
				this.erjitanchuui.quedinganniu0.enabled = true;
				this.erjitanchuui.quedinganniu1.enabled = false;
				this.erjitanchuui.quedinganniu.alpha = 0;
				this.erjitanchuui.quedinganniu0.alpha = 1;
				this.erjitanchuui.quedinganniu1.alpha = 0;
				this.erjitanchuui.jiasuwenzi.alpha = 1;
				this.erjitanchuui.quedinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiusuoduan,this);
				let dingshiqi = new egret.Timer(1000,1);
				dingshiqi.addEventListener(egret.TimerEvent.TIMER,this.panduanxifujinxiu,this);
				dingshiqi.start();
			}
		}else{
			this.erjitanchuui = new Jiatingchengyuanzengsong();
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
					this.xifujiaohu.xifujinxiu.enabled = true;
				},this)
			/*this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
			this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;*/
			this.erjitanchuui.wenzibiaoti.text = "家务内容";
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.xifugzkeng1();
			this.xifugzkeng2();
			this.xifugzkeng3();
			this.xifugzkeng4();
			this.xifugzkeng5();
		}
		this.xifujiaohu.xifuchakan.enabled = true;
		if(Gerenshuxing.xifujiaotan > 0){
			this.xifujiaohu.xifujiaotan.enabled = true;
		}else{
			this.xifujiaohu.xifujiaotan.enabled = false;
		}
		this.xifujiaohu.xifujinxiu.enabled = false;
		this.xifujiaohu.xifuzengsong.enabled = true;
		}
		
	}

	public xifujinxiulinjiang(){
		let idshuju = Gerenshuxing.xifuxinxi[2];
		let jianglileixing = 0;
		let jianglishuliang = 0;
		let beishu = 1;
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == idshuju){
				jianglileixing = this.chengyuanhudongbiao[j].jiangli;
				jianglishuliang = parseInt(this.chengyuanhudongbiao[j].jianglishuliang);
				break;
			}
		}
		jianglishuliang = Math.floor(jianglishuliang + jianglishuliang * parseInt( Gerenshuxing.xifuxinxi[1]) / 1000);
		Gerenshuxing.xifuxinxi[2] = "0";
		Weblianjie.fasongshuju("code:079","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"leixing"' +":"+ '"' + jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +"}");
		this.laodongtishi1.source = "";
		this.xifugz();
		

	}

	public async xifujinxiusuoduan(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.xifujiasu,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public xifujiasu(){
		Weblianjie.fasongshuju("code:148","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"shijian"' +":"+ '"600000"' +"}");
	}

	public panduanxifujinxiu(){
		if(this.xifujiaohu.xifujinxiu.enabled == false){
			this.xifugz();
		}
	}

	public xifugzkeng1(){
		let duihua1jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "11"){
				duihua1jiesuo = true;
				break;
			}
		}
		if(duihua1jiesuo == true){
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng1jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng1weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "11"){
				this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng2(){
		let duihua2jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "12"){
				duihua2jiesuo = true;
				break;
			}
		}
		if(duihua2jiesuo == true){
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng2jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng2weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "12"){
				this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng3(){
		let duihua3jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "13"){
				duihua3jiesuo = true;
				break;
			}
		}
		if(duihua3jiesuo == true){
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng3jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng3weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "13"){
				this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng4(){
		let duihua4jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "14"){
				duihua4jiesuo = true;
				break;
			}
		}
		if(duihua4jiesuo == true){
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng4jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng4weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "14"){
				this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng5(){
		let duihua5jiesuo = false;
		for(var i = 0;i<Gerenshuxing.xifuxuexi.length;i++){
			if(Gerenshuxing.xifuxuexi[i] == "15"){
				duihua5jiesuo = true;
				break;
			}
		}
		if(duihua5jiesuo == true){
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng5jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifugzkeng5weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "15"){
				this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public xifugzkeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "11"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.xifuxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu1queren,this);
	}

	public xifugzkeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "12"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.xifuxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu2queren,this);
	}

	public xifugzkeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "13"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.xifuxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu3queren,this);
	}

	public xifugzkeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "14"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.xifuxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu4queren,this);
	}

	public xifugzkeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "15"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.xifuxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifujinxiu5queren,this);
	}

	public xifujinxiu1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("11","3","1");
	}

	

	public xifujinxiu2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("12","3","1");
	}

	public xifujinxiu3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("13","3","1");
	}

	public xifujinxiu4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("14","3","1");
	}

	public xifujinxiu5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("15","3","1");
	}


	public xifugzkeng1weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【菜市场】时，有几率解锁该进修内容。";
	}

	public xifugzkeng2weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【菜市场】时，有几率解锁该进修内容。";
		
	}

	public xifugzkeng3weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【菜市场】时，有几率解锁该进修内容。";
		
	}

	public xifugzkeng4weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【菜市场】时，有几率解锁该进修内容。";
		
	}

	public xifugzkeng5weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【菜市场】时，有几率解锁该进修内容。";
		
	}

	public xifuzs(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.parent){
			if(this.xifujiaohu.xifuchakan.enabled == false || this.xifujiaohu.xifujinxiu.enabled == false || this.xifujiaohu.xifuzengsong.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuandaojuui();
		Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.removeChild(this.erjitanchuui);
			this.xifujiaohu.xifuzengsong.enabled = true;
		},this)
		/*this.erjitanchuui.x = this.xifujiaohu.xifubeijing.x - this.erjitanchuui.width - this.xifujiaohu.xifubeijing.width;
		this.erjitanchuui.y = this.xifujiaohu.xifubeijing.y - this.erjitanchuui.height;*/
		this.erjitanchuui.daojubiaoti.text = "赠送列表";
		this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
		this.daojubiao = Gerenshuxing.daojubiao;
		this.xifujiaohu.xifuchakan.enabled = true;
		if(Gerenshuxing.xifujiaotan > 0){
			this.xifujiaohu.xifujiaotan.enabled = true;
		}else{
			this.xifujiaohu.xifujiaotan.enabled = false;
		}
		this.xifujiaohu.xifujinxiu.enabled = true;
		this.xifujiaohu.xifuzengsong.enabled = false;
		for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
			if(this.chengyuanhudongbiao[i].id == "16"){
				this.zengsongid1 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "17"){
				this.zengsongid2 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "18"){
				this.zengsongid3 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "19"){
				this.zengsongid4 = this.chengyuanhudongbiao[i].xiaohao;
			}
			if(this.chengyuanhudongbiao[i].id == "20"){
				this.zengsongid5 = this.chengyuanhudongbiao[i].xiaohao;
			}
		}
		this.xifuzskeng1();
		this.xifuzskeng2();
		this.xifuzskeng3();
		this.xifuzskeng4();
		this.xifuzskeng5();
		}
	}

	public xifuzskeng1(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid1){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang1.alpha = 1;
					this.erjitanchuui.geshuwenzi1.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong1.enabled = true;
					this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng1jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb1.source = "img_jiaohuanniudibu1_png";					
					this.erjitanchuui.geshudikuang1.alpha = 0;
					this.erjitanchuui.geshuwenzi1.text = "";
					this.erjitanchuui.zengsong1.enabled = true;
					this.erjitanchuui.zengsong1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng1jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid1){
				this.erjitanchuui.zengsongtupian1.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr1.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public xifuzskeng2(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid2){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang2.alpha = 1;
					this.erjitanchuui.geshuwenzi2.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong2.enabled = true;
					this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng2jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb2.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang2.alpha = 0;
					this.erjitanchuui.geshuwenzi2.text = "";
					this.erjitanchuui.zengsong2.enabled = true;
					this.erjitanchuui.zengsong2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng2jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid2){
				this.erjitanchuui.zengsongtupian2.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr2.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public xifuzskeng3(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid3){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang3.alpha = 1;
					this.erjitanchuui.geshuwenzi3.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong3.enabled = true;
					this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng3jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb3.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang3.alpha = 0;
					this.erjitanchuui.geshuwenzi3.text = "";
					this.erjitanchuui.zengsong3.enabled = true;
					this.erjitanchuui.zengsong3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng3jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid3){
				this.erjitanchuui.zengsongtupian3.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr3.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public xifuzskeng4(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid4){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang4.alpha = 1;
					this.erjitanchuui.geshuwenzi4.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong4.enabled = true;
					this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng4jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb4.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang4.alpha = 0;
					this.erjitanchuui.geshuwenzi4.text = "";
					this.erjitanchuui.zengsong4.enabled = true;
					this.erjitanchuui.zengsong4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng4jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid4){
				this.erjitanchuui.zengsongtupian4.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr4.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public xifuzskeng5(){
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid5){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu_png";
					this.erjitanchuui.geshudikuang5.alpha = 1;
					this.erjitanchuui.geshuwenzi5.text = Gerencaipudengji.daoju[h][0];
					this.erjitanchuui.zengsong5.enabled = true;
					this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng5jiesuo,this);
					break;
				}else{
					this.erjitanchuui.zsanniudb5.source = "img_jiaohuanniudibu1_png";
					this.erjitanchuui.geshudikuang5.alpha = 0;
					this.erjitanchuui.geshuwenzi5.text = "";
					this.erjitanchuui.zengsong5.enabled = true;
					this.erjitanchuui.zengsong5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzskeng5jiesuo,this);
					break;
				}
			}
		}
		for(var j = 0;j<this.daojubiao.length;j++){
			if(this.daojubiao[j].id == this.zengsongid5){
				this.erjitanchuui.zengsongtupian5.source = this.daojubiao[j].xianshiicon;
				this.erjitanchuui.wznr5.text = this.daojubiao[j].mingcheng;
				break;
			}
		}
	}

	public xifuzskeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid1){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzs1queren,this);
	}

	public xifuzskeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid2){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzs2queren,this);
	}

	public xifuzskeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid3){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzs3queren,this);
	}

	public xifuzskeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid4){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzs4queren,this);
	}

	public xifuzskeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.daojubiao.length;g++){
			if(this.daojubiao[g].id == this.zengsongid5){
				this.jinxiuquerenui.tishiwenzi.text = this.daojubiao[g].tips;
				this.querenjinxiujiangliqueren(this.daojubiao[g].jiangli,this.daojubiao[g].jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.daojubiao[g].id,1);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xifuzs5queren,this);
	}


	public xifuzs1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid1){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.xifuzs();
					this.tongguojiangli(this.zengsongid1);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.xifuzs();
					break;
				}
			}
		}
	}

	public xifuzs2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid2){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.xifuzs();
					this.tongguojiangli(this.zengsongid2);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.xifuzs();
					break;
				}
			}
		}
	}

	public xifuzs3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid3){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.xifuzs();
					this.tongguojiangli(this.zengsongid3);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.xifuzs();
					break;
				}
			}
		}
	}

	public xifuzs4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid4){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.xifuzs();
					this.tongguojiangli(this.zengsongid4);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.xifuzs();
					break;
				}
			}
		}
	}

	public xifuzs5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		for(var h in Gerencaipudengji.daoju){
			if(h == this.zengsongid5){
				if(parseInt(Gerencaipudengji.daoju[h][0]) > 0){
					Gerencaipudengji.daoju[h][0] = Gerencaipudengji.daoju[h][0] - 1;
					this.xifuzs();
					this.tongguojiangli(this.zengsongid5);
					Gameguanli.Kongzhitai().cuowutishixinxi("收到你的礼物，大儿媳似乎开心了许多...");
					break;
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("您并没有该物品可赠送...");
					this.xifuzs();
					break;
				}
			}
		}
	}

	public guanbixifu(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.xifujiaohu);
	}

	public dianjixiaosunnv(){
		egret.Tween.get(this.img_xiaosunnv).to({scaleX:1.1,scaleY:1.1},500).call(()=>{
			egret.Tween.get(this.img_xiaosunnv).to({scaleX:1,scaleY:1},500);
		})
		this.sunnvjiaohu = new Sunnvjiaohuui();
		Gameguanli.Kongzhitai().jiatingjiemian.addChild(this.sunnvjiaohu);
		this.sunnvjiaohu.sunnvguanbi.touchEnabled = true;
		this.sunnvjiaohu.sunnvguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbisunvn,this);
		this.sunnvjiaohu.sunnvchakan.enabled = true;
		if(Gerenshuxing.sunnvjiaotan > 0){
			this.sunnvjiaohu.sunnvjiaotan.enabled = true;
		}else{
			this.sunnvjiaohu.sunnvjiaotan.enabled = false;
		}
		this.sunnvjiaohu.sunnvjinxiu.enabled = true;
		this.sunnvjiaohu.sunnvchakan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvck,this);
		this.sunnvjiaohu.sunnvjiaotan.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjt,this);
		this.sunnvjiaohu.sunnvjinxiu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgz,this);
		this.jiatingchengyuanbiao = RES.getRes("jiatingchengyuanbiao_json");

	}

	public sunnvck(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.parent){
			if(this.sunnvjiaohu.sunnvchakan.enabled == false || this.sunnvjiaohu.sunnvjinxiu.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
		}
		this.erjitanchuui = new Jiatingchengyuanjieshaoui();
		Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.addChild(this.erjitanchuui);
		this.erjitanchuui.guanbiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
				this.sunnvjiaohu.sunnvchakan.enabled = true;
		},this)
		this.sunnvjiaohu.sunnvchakan.enabled = false;
		if(Gerenshuxing.sunnvjiaotan > 0){
			this.sunnvjiaohu.sunnvjiaotan.enabled = true;
		}else{
			this.sunnvjiaohu.sunnvjiaotan.enabled = false;
		}
		this.sunnvjiaohu.sunnvjinxiu.enabled = true;
		/*this.erjitanchuui.x = this.sunnvjiaohu.sunnvbeijing.x - this.erjitanchuui.width - this.sunnvjiaohu.sunnvbeijing.width;
		this.erjitanchuui.y = this.sunnvjiaohu.sunnvbeijing.y - this.erjitanchuui.height;*/
		this.erjitanchuui.biaotiwenzi.text = "介绍";
		this.erjitanchuui.guanxibiaoqian.text = "关系";
		this.erjitanchuui.qinhelibiaoqian.text = "亲和值";
		this.erjitanchuui.gongzuobiaoqian.text = "乖巧值";
		this.erjitanchuui.jiesaobiaoqian.text = "说明";
		for(var i = 0 ;i<this.jiatingchengyuanbiao.length;i++){
			if(this.jiatingchengyuanbiao[i].id == "4"){
				this.erjitanchuui.guanxineirong.text = "" + this.jiatingchengyuanbiao[i].chengyuanming;
				this.erjitanchuui.qinghelizhi.text = "" + Gerenshuxing.sunnvxinxi[0];
				this.erjitanchuui.gongzuozhi.text = "" + Gerenshuxing.sunnvxinxi[1];
				this.erjitanchuui.jiesaoneirong.text = "" + this.jiatingchengyuanbiao[i].shuoming;
				break;
			}
		}
		} 
	}

	public sunnvjt(){
		Gerenshuxing.sunnvjiaotan -= 1;
		this.renwujiemian = new Npcduihuaui();
		if(this.sunnvjiaohu.sunnvchakan.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
		}
		Gameguanli.Kongzhitai().dingbuui.addChild(this.renwujiemian);
		this.renwujiemian.chushihua("4");
		this.sunnvjiaohu.sunnvchakan.enabled = true;
		if(Gerenshuxing.sunnvjiaotan > 0){
			this.sunnvjiaohu.sunnvjiaotan.enabled = true;
		}else{
			this.sunnvjiaohu.sunnvjiaotan.enabled = false;
			this.duihuatishi2.source = "";
		}
		this.sunnvjiaohu.sunnvjinxiu.enabled = true;

	}

	public sunnvgz(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.parent){
			if(this.sunnvjiaohu.sunnvchakan.enabled == false || this.sunnvjiaohu.sunnvjinxiu.enabled == false){
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
		}
		if(Gerenshuxing.sunnvxinxi[2] != "0"){
			this.erjitanchuui = new Jiatingjinxiuui();
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
					this.sunnvjiaohu.sunnvjinxiu.enabled = true;
				},this)
			/*this.erjitanchuui.x = this.sunnvjiaohu.sunnvbeijing.x - this.erjitanchuui.width - this.sunnvjiaohu.sunnvbeijing.width;
			this.erjitanchuui.y = this.sunnvjiaohu.sunnvbeijing.y - this.erjitanchuui.height;*/
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.sunnvjiaohu.sunnvchakan.enabled = true;
			if(Gerenshuxing.sunnvjiaotan > 0){
				this.sunnvjiaohu.sunnvjiaotan.enabled = true;
			}else{
				this.sunnvjiaohu.sunnvjiaotan.enabled = false;
			}
			this.sunnvjiaohu.sunnvjinxiu.enabled = false;
			for(var i = 0;i<this.chengyuanhudongbiao.length;i++){
				if(this.chengyuanhudongbiao[i].id == Gerenshuxing.sunnvxinxi[2]){
					this.erjitanchuui.jinxiubiaoti.text = this.chengyuanhudongbiao[i].xingdongming;
					this.erjitanchuui.jinxiutupian.source = this.chengyuanhudongbiao[i].xianshiicon;
				}
			}
			if(Gerenshuxing.sunnvxinxi[3] == "0"){
				this.erjitanchuui.shengyushijian0.text = "已完成";
				this.erjitanchuui.quedinganniu.enabled = true;
				this.erjitanchuui.quedinganniu0.enabled = false;
				this.erjitanchuui.quedinganniu1.enabled = false;
				this.erjitanchuui.quedinganniu.alpha = 1;
				this.erjitanchuui.quedinganniu0.alpha = 0;
				this.erjitanchuui.quedinganniu1.alpha = 0;
				this.erjitanchuui.jiasuwenzi.alpha = 0;
				this.erjitanchuui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiulinjiang,this);
			}else{
				let dangqianshijian = (new Date()).valueOf();
				let shengyushijian = parseInt(Gerenshuxing.sunnvxinxi[3]) - dangqianshijian;
				this.erjitanchuui.shengyushijian0.text = Math.floor((shengyushijian / 60000) % 60) + ":" + Math.floor((shengyushijian  / 1000) % 60) ;
				this.erjitanchuui.quedinganniu.enabled = false;
				this.erjitanchuui.quedinganniu0.enabled = true;
				this.erjitanchuui.quedinganniu1.enabled = false;
				this.erjitanchuui.quedinganniu.alpha = 0;
				this.erjitanchuui.quedinganniu0.alpha = 1;
				this.erjitanchuui.quedinganniu1.alpha = 0;
				this.erjitanchuui.jiasuwenzi.alpha = 1;
				this.erjitanchuui.quedinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiusuoduan,this);
				let dingshiqi = new egret.Timer(1000,1);
				dingshiqi.addEventListener(egret.TimerEvent.TIMER,this.panduansunnvjinxiu,this);
				dingshiqi.start();
			}
		}else{
			this.erjitanchuui = new Jiatingchengyuanzengsong();
			Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.addChild(this.erjitanchuui);
			this.erjitanchuui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
					Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.removeChild(this.erjitanchuui);
					this.sunnvjiaohu.sunnvjinxiu.enabled = true;
				},this)
			/*this.erjitanchuui.x = this.sunnvjiaohu.sunnvbeijing.x - this.erjitanchuui.width - this.sunnvjiaohu.sunnvbeijing.width;
			this.erjitanchuui.y = this.sunnvjiaohu.sunnvbeijing.y - this.erjitanchuui.height;*/
			this.erjitanchuui.wenzibiaoti.text = "玩耍内容";
			this.chengyuanhudongbiao = RES.getRes("chengyuanhudongbiao_json");
			this.sunnvgzkeng1();
			this.sunnvgzkeng2();
			this.sunnvgzkeng3();
			this.sunnvgzkeng4();
			this.sunnvgzkeng5();
		}
		this.sunnvjiaohu.sunnvchakan.enabled = true;
		if(Gerenshuxing.sunnvjiaotan > 0){
			this.sunnvjiaohu.sunnvjiaotan.enabled = true;
		}else{
			this.sunnvjiaohu.sunnvjiaotan.enabled = false;
		}
		this.sunnvjiaohu.sunnvjinxiu.enabled = false;
		}
		
	}

	public sunnvjinxiulinjiang(){
		let idshuju = Gerenshuxing.sunnvxinxi[2];
		let jianglileixing = 0;
		let jianglishuliang = 0;
		let beishu = 1;
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == idshuju){
				jianglileixing = this.chengyuanhudongbiao[j].jiangli;
				jianglishuliang = parseInt(this.chengyuanhudongbiao[j].jianglishuliang);
				break;
			}
		}
		jianglishuliang = Math.floor(jianglishuliang + jianglishuliang * parseInt( Gerenshuxing.sunnvxinxi[1]) / 1000);
		Gerenshuxing.sunnvxinxi[2] = "0";
		Weblianjie.fasongshuju("code:080","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"leixing"' +":"+ '"' + jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +"}");
		this.laodongtishi2.source = "";
		this.sunnvgz();
		

	}

	public async sunnvjinxiusuoduan(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.sunnvjiasu,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public sunnvjiasu(){
		Weblianjie.fasongshuju("code:149","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"shijian"' +":"+ '"600000"' +"}");
	}

	public panduansunnvjinxiu(){
		if(this.sunnvjiaohu.sunnvjinxiu.enabled == false){
			this.sunnvgz();
		}
	}

	public sunnvgzkeng1(){
		let duihua1jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "31"){
				duihua1jiesuo = true;
				break;
			}
		}
		if(duihua1jiesuo == true){
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng1jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu0.enabled = true;
			this.erjitanchuui.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng1weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "31"){
				this.erjitanchuui.wenzineirong.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng2(){
		let duihua2jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "32"){
				duihua2jiesuo = true;
				break;
			}
		}
		if(duihua2jiesuo == true){
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng2jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu0.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu1.enabled = true;
			this.erjitanchuui.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng2weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "32"){
				this.erjitanchuui.wenzineirong0.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao0.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng3(){
		let duihua3jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "33"){
				duihua3jiesuo = true;
				break;
			}
		}
		if(duihua3jiesuo == true){
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng3jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu1.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu2.enabled = true;
			this.erjitanchuui.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng3weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "33"){
				this.erjitanchuui.wenzineirong1.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao1.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng4(){
		let duihua4jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "34"){
				duihua4jiesuo = true;
				break;
			}
		}
		if(duihua4jiesuo == true){
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng4jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu2.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu3.enabled = true;
			this.erjitanchuui.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng4weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "34"){
				this.erjitanchuui.wenzineirong2.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao2.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng5(){
		let duihua5jiesuo = false;
		for(var i = 0;i<Gerenshuxing.sunnvxuexi.length;i++){
			if(Gerenshuxing.sunnvxuexi[i] == "35"){
				duihua5jiesuo = true;
				break;
			}
		}
		if(duihua5jiesuo == true){
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng5jiesuo,this);			
		}else{
			this.erjitanchuui.anniudibu3.source = "img_jiaohuanniudibu1_png";
			this.erjitanchuui.daojuzu4.enabled = true;
			this.erjitanchuui.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvgzkeng5weijiesuo,this);
		}
		for(var j = 0;j<this.chengyuanhudongbiao.length;j++){
			if(this.chengyuanhudongbiao[j].id == "35"){
				this.erjitanchuui.wenzineirong3.text = this.chengyuanhudongbiao[j].xingdongming;
				this.erjitanchuui.daojutubiao3.source = this.chengyuanhudongbiao[j].xianshiicon;
				break;
			}
		}
	}

	public sunnvgzkeng1jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "31"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.sunnvxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu1queren,this);
	}

	public sunnvgzkeng2jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "32"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.sunnvxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu2queren,this);
	}

	public sunnvgzkeng3jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "33"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.sunnvxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu3queren,this);
	}

	public sunnvgzkeng4jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "34"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.sunnvxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu4queren,this);
	}

	public sunnvgzkeng5jiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		for(var g = 0;g<this.chengyuanhudongbiao.length;g++){
			if(this.chengyuanhudongbiao[g].id == "35"){
				this.jinxiuquerenui.tishiwenzi.text = "您已选择进修：【" + this.chengyuanhudongbiao[g].xingdongming + "】。\n此次进修消耗时间为：【" + this.chengyuanhudongbiao[g].shijian + "】分钟（现实时间）。";
				let jianglishuliang = Math.floor(parseInt(this.chengyuanhudongbiao[g].jianglishuliang) + parseInt(this.chengyuanhudongbiao[g].jianglishuliang) * parseInt( Gerenshuxing.sunnvxinxi[1]) / 1000);
				this.querenjinxiujiangliqueren(this.chengyuanhudongbiao[g].jiangli,jianglishuliang);
				this.querenjinxiuxiaohaoqueren(this.chengyuanhudongbiao[g].xiaohao,this.chengyuanhudongbiao[g].xiaohaoshuliang);
				break;
			}
		}
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sunnvjinxiu5queren,this);
	}

	public sunnvjinxiu1queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("31","4","1");
	}

	

	public sunnvjinxiu2queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("32","4","1");
	}

	public sunnvjinxiu3queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("33","4","1");
	}

	public sunnvjinxiu4queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("34","4","1");
	}

	public sunnvjinxiu5queren(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
		this.fasongqurenshuju("35","4","1");
	}


	public sunnvgzkeng1weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【游乐园】时，有几率解锁该进修内容。";
	}

	public sunnvgzkeng2weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【游乐园】时，有几率解锁该进修内容。";
		
	}

	public sunnvgzkeng3weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【游乐园】时，有几率解锁该进修内容。";
		
	}

	public sunnvgzkeng4weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【游乐园】时，有几率解锁该进修内容。";
		
	}

	public sunnvgzkeng5weijiesuo(){
		this.jinxiuquerenui = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jinxiuquerenui);
		this.jinxiuquerenui.jiangliicon1.source = "";
		this.jinxiuquerenui.jiangli1.text = "";
		this.jinxiuquerenui.jiangliicon2.source = "";
		this.jinxiuquerenui.jiangli2.text = "";
		this.jinxiuquerenui.but_queding.enabled = false;
		this.jinxiuquerenui.but_shuangbei.enabled = false;
		this.jinxiuquerenui.but_queding.alpha = 0;
		this.jinxiuquerenui.but_shuangbei.alpha = 0;
		this.jinxiuquerenui.but_queding0.enabled = true;
		this.jinxiuquerenui.but_queding0.alpha = 1;
		this.jinxiuquerenui.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijinxiuquerenui,this);
		this.jinxiuquerenui.tishiwenzi.text = "上街到访【游乐园】时，有几率解锁该进修内容。";
		
	}

	public sunnvzs(){

	}

	public guanbisunvn(){
		Gameguanli.Kongzhitai().jiatingjiemian.removeChild(this.sunnvjiaohu);
	}


	public guanbijinxiuquerenui(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jinxiuquerenui);
	}


	public fasongqurenshuju(idhao,fasongren,beishu){
		for(var h = 0;h<this.chengyuanhudongbiao.length;h++){
			if(this.chengyuanhudongbiao[h].id == idhao){
				let shijian = (new Date()).valueOf() + parseInt(this.chengyuanhudongbiao[h].shijian) * 60000;
				switch(this.chengyuanhudongbiao[h].xiaohao){
					case "1":
						if(Gerenshuxing.jinbizhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "金钱");
						}
						break;
					case "2":
						if(Gerenshuxing.jiatingzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "体力");
						}
						break;
					case "3":
						if(Gerenshuxing.jiankangzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "健康值");
						}
						break;
					case "4":
						if(Gerenshuxing.kaixinzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "心情值");
						}
						break;
					case "5":
						if(Gerenshuxing.xingfuzhi >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "名望值");
						}
						break;
					case "6":
						if(parseInt(Gerenshuxing.daerzixinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿子亲和值");
						}
						break;
					case "7":
						if(parseInt(Gerenshuxing.ererzixinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "二儿子亲和值");
						}
						break;
					case "8":
						if(parseInt(Gerenshuxing.xifuxinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿媳亲和值");
						}
						break;
					case "9":
						if(parseInt(Gerenshuxing.sunnvxinxi[0]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "孙女亲和值");
						}
						break;
					case "10":
						if(parseInt(Gerenshuxing.daerzixinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿子工作能力");
						}
						break;
					case "11":
						if(parseInt(Gerenshuxing.ererzixinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "二儿子工作能力");
						}
						break;
					case "12":
						if(parseInt(Gerenshuxing.xifuxinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "大儿媳家务能力");
						}
						break;
					case "13":
						if(parseInt(Gerenshuxing.sunnvxinxi[1]) >= parseInt(this.chengyuanhudongbiao[h].xiaohaoshuliang)){
							switch(fasongren){
								case "1":
									Gerenshuxing.daerzixinxi[2] = "1";
									Gerenshuxing.daerzixinxi[3] = "100000000";
									this.daerzigz();
									break;
								case "2":
									Gerenshuxing.ererzixinxi[2] = "21";
									Gerenshuxing.ererzixinxi[3] = "100000000";
									this.ererzigz();
									break;
								case "3":
									Gerenshuxing.xifuxinxi[2] = "11";
									Gerenshuxing.xifuxinxi[3] = "100000000";
									this.xifugz();
									break;
								case "4":
									Gerenshuxing.sunnvxinxi[2] = "31";
									Gerenshuxing.sunnvxinxi[3] = "100000000";
									this.sunnvgz();
									break;
							}
							Weblianjie.fasongshuju("code:066","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + 
							"," +'"xiaohaoleixing"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohao +'"' +
							"," +'"xiaohaoshuliang"' + ":"+ '"'+ this.chengyuanhudongbiao[h].xiaohaoshuliang +'"' +
							"," +'"jinxiuid"' + ":"+ '"'+ idhao +'"' + 
							"," +'"beishu"' + ":"+ '"'+ beishu +'"' +
							"," +'"geishuijia"' + ":"+ '"'+ fasongren +'"' + 
							"," +'"jinxiushijian"' + ":"+ '"'+ shijian +'"' +"}");
							Gameguanli.Kongzhitai().cuowutishixinxi("开始进修，请耐心等待...");
						}else{
							Gameguanli.Kongzhitai().cuowutishixinxi("进修失败，需要消耗" + this.chengyuanhudongbiao[h].xiaohaoshuliang + "孙女乖巧值");
						}
						break;	
				}
			}
		}
	}

	public querenjinxiujiangliqueren(leixing,shuliang){
		switch(leixing){
			case "0":
				this.jinxiuquerenui.jiangliicon1.source = "";
				this.jinxiuquerenui.jiangli1.text = "";
				break;
			case "1":
				this.jinxiuquerenui.jiangliicon1.source = "img_qian_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "2":
				this.jinxiuquerenui.jiangliicon1.source = "img_jiating_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "3":
				this.jinxiuquerenui.jiangliicon1.source = "img_jiankang_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "4":
				this.jinxiuquerenui.jiangliicon1.source = "img_xinqing_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "5":
				this.jinxiuquerenui.jiangliicon1.source = "img_xingfu_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "6":
				this.jinxiuquerenui.jiangliicon1.source = "img_daerzibiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "7":
				this.jinxiuquerenui.jiangliicon1.source = "img_xiaoerzibiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "8":
				this.jinxiuquerenui.jiangliicon1.source = "img_xifubiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "9":
				this.jinxiuquerenui.jiangliicon1.source = "img_sunnvbiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "10":
				this.jinxiuquerenui.jiangliicon1.source = "img_daerzibiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "11":
				this.jinxiuquerenui.jiangliicon1.source = "img_xiaoerzibiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "12":
				this.jinxiuquerenui.jiangliicon1.source = "img_xifubiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			case "13":
				this.jinxiuquerenui.jiangliicon1.source = "img_sunnvbiaoshi_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
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

	public querenjinxiuxiaohaoqueren(leixing,shuliang){
		switch(leixing){
			case "0":
				this.jinxiuquerenui.jiangliicon2.source = "";
				this.jinxiuquerenui.jiangli2.text = "";
				break;
			case "1":
				this.jinxiuquerenui.jiangliicon2.source = "img_qian_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "2":
				this.jinxiuquerenui.jiangliicon2.source = "img_jiating_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "3":
				this.jinxiuquerenui.jiangliicon2.source = "img_jiankang_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "4":
				this.jinxiuquerenui.jiangliicon2.source = "img_xinqing_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "5":
				this.jinxiuquerenui.jiangliicon2.source = "img_xingfu_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "6":
				this.jinxiuquerenui.jiangliicon2.source = "img_daerzibiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "7":
				this.jinxiuquerenui.jiangliicon2.source = "img_xiaoerzibiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "8":
				this.jinxiuquerenui.jiangliicon2.source = "img_xifubiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "9":
				this.jinxiuquerenui.jiangliicon2.source = "img_sunnvbiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "10":
				this.jinxiuquerenui.jiangliicon2.source = "img_daerzibiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "11":
				this.jinxiuquerenui.jiangliicon2.source = "img_xiaoerzibiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "12":
				this.jinxiuquerenui.jiangliicon2.source = "img_xifubiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			case "13":
				this.jinxiuquerenui.jiangliicon2.source = "img_sunnvbiaoshi_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			default:
				if(parseInt(leixing) >= 1000 && parseInt(leixing) < 10000){
					this.kouchucaipuxianshi(leixing,shuliang);
				}else if(parseInt(leixing) >= 10000){
					this.kouchudaojuxianshi(leixing,shuliang);
				};
				break;
		}
	}

	public kouchucaipuxianshi(leixing,shuliang){
		let caipubiao = RES.getRes("shipubiao_json");
		for(var i = 0;i<caipubiao.length;i++){
			if(caipubiao[i].id == leixing){
				this.jinxiuquerenui.jiangliicon2.source = caipubiao[i].id + "_png";
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			}
		}
	}

	public jianglicaipuxianshi(leixing,shuliang){
		let caipubiao = RES.getRes("shipubiao_json");
		for(var i = 0;i<caipubiao.length;i++){
			if(caipubiao[i].id == leixing){
				this.jinxiuquerenui.jiangliicon1.source = caipubiao[i].id + "_png";
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			}
		}
	}

	public jianglidaojuxianshi(leixing,shuliang){
		for(var i = 0;i<this.daojubiao.length;i++){
			if(this.daojubiao[i].id == leixing){
				this.jinxiuquerenui.jiangliicon1.source = this.daojubiao[i].xianshiicon;
				this.jinxiuquerenui.jiangli1.text = "+ " + shuliang;
				break;
			}
		}
	}

	public kouchudaojuxianshi(leixing,shuliang){
		for(var i = 0;i<this.daojubiao.length;i++){
			if(this.daojubiao[i].id == leixing){
				this.jinxiuquerenui.jiangliicon2.source = this.daojubiao[i].xianshiicon;
				this.jinxiuquerenui.jiangli2.text = "- " + shuliang;
				break;
			}
		}
	}

	public tongguojiangli(daojuid){
		let jianglileixing = 0;
		let jianglishuliang = 0;
		let jianglibeishu = 1;
		for(var h = 0;h<this.daojubiao.length;h++){
			if(this.daojubiao[h].id == daojuid){
				jianglileixing = this.daojubiao[h].jiangli;
				jianglishuliang = this.daojubiao[h].jianglishuliang;
				break;
			}
		}
		this.fasongjianglijiekou(daojuid,1,jianglileixing,jianglishuliang,jianglibeishu);
	}

	public fasongjianglijiekou(daojuid,daojushuliang,jianglileixing,jianglishuliang,jianglibeishu){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"' + daojuid + '"' +","
			+ '"kouchushuliang"' +":"+ '"' + daojushuliang + '"' +","
			+ '"leixing"' +":"+ '"' + jianglileixing + '"' +","
			+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
			+ '"beishu"' +":"+ '"' + jianglibeishu + '"' +"}");
	}

	

	

	
	
}
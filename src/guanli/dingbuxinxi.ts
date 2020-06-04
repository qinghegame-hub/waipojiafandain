class dingbuxinxi extends eui.Component implements  eui.UIComponent {
	public dingbuzu0:eui.Group;
	public img_topbg0:eui.Image;
	public kaishizhizu0:eui.Group;
	public img_happiness0:eui.Image;
	public xingfute0:eui.Label;
	public xingfutubiao:eui.Image;
	public kaixinzu0:eui.Group;
	public img_mood0:eui.Image;
	public kaixinte0:eui.Label;
	public xinqingtubiao:eui.Image;
	public jiatingzu0:eui.Group;
	public img_family0:eui.Image;
	public jiatingte0:eui.Label;
	public tilitubiao:eui.Image;
	public jiankangzu0:eui.Group;
	public img_fealth0:eui.Image;
	public jiankangte0:eui.Label;
	public jiankangtubiao:eui.Image;
	public jinbizu0:eui.Group;
	public img_money0:eui.Image;
	public jinbite0:eui.Label;
	public qiantubiao:eui.Image;
	public riqizu0:eui.Group;
	public img_calendar0:eui.Image;
	public riqi:eui.Label;
	public nian:eui.Label;
	public shijianzu0:eui.Group;
	public img_timebg0:eui.Image;
	public dqshijiante0:eui.Label;
	public img_shijian:eui.Image;
	public img_tianqi:eui.Image;
	public img_dangqianshike7:eui.Image;
	public img_dangqianshike8:eui.Image;
	public img_dangqianshike9:eui.Image;
	public img_dangqianshike10:eui.Image;
	public img_dangqianshike11:eui.Image;
	public img_dangqianshike12:eui.Image;
	public img_dangqianshike13:eui.Image;
	public img_dangqianshike14:eui.Image;
	public img_dangqianshike15:eui.Image;
	public img_dangqianshike16:eui.Image;
	public img_dangqianshike17:eui.Image;
	public img_dangqianshike18:eui.Image;
	public wangluozhuangtai:eui.Image;





	public gerenshuxingui:Gerenshuxingjiemian;

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
		this.dingbuchushihua();  //初始化顶部数值
	}

	public dingbuchushihua() {
		this.youxitishibiao = RES.getRes("youxitishibiao_json");
		//刷新幸福值
		this.shuaxinxingfu();
		//幸福值控件增加点击事件
		this.kaishizhizu0.touchEnabled = true;
		this.kaishizhizu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chakangerenshuxing,this);		
		//刷新开心值
		this.shuaxinkaixin();
		this.kaixinzu0.touchEnabled = true;
		this.kaixinzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.kaixinjieshao,this);		
		//刷新家庭值
		this.shuaxinjiating();
		this.jiatingzu0.touchEnabled = true;
		this.jiatingzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tilijieshao,this);
		//刷新金币值
		this.shuaxinjinbi();
		this.jinbizu0.touchEnabled = true;
		this.jinbizu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jinbijieshao,this);		
		//刷新日期值
		this.shuaxinriqi();
		//刷新当前时间
		this.shuaxindqshijian();
		//刷新健康值
		this.shuaxinjiankang();
		this.jiankangzu0.touchEnabled = true;
		this.jiankangzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiankangjieshao,this);	
		//刷新天气
		this.shuaxintianqi();
		//日期按钮增加点击事件
		this.riqizu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiriqi,this);	
//		this.but_seting0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shezhi,this);
		//网络连接提示
		this.wangluolianjietishi();
	}

	public wangluolianjietishi(){
		if(Gerenshuxing.wangluolianjie == false){
			this.wangluozhuangtai.alpha = 1;
			this.wangluozhuangtai.source = "img_wangluo2_png";
			egret.Tween.get(this.wangluozhuangtai).to({alpha:0.5},1000).call(()=>{
				this.wangluolianjietishi();
			})
		}else{
			this.wangluozhuangtai.alpha = 1;
			this.wangluozhuangtai.source = "img_wangluo1_png";
		}
	}


	public dianjiriqi(){
		Gameguanli.Kongzhitai().meirijiesuanjiemian("kai",Gerenshuxing.yuangongxupin,Gerenshuxing.yuangongjiepin);
	}
	

	public shezhi(){
		Gameguanli.Kongzhitai().zhandoujiemianui("kai","1","2","3");
	}

	public shuaxinxingfu() {
		this.xingfute0.text = Gerenshuxing.xingfudengji + "级";
	}

	public shuaxinkaixin() {
		this.kaixinte0.text = "" + Gerenshuxing.kaixinzhi;		
	}

	public shuaxinjiating() {
		this.jiatingte0.text = "" + Gerenshuxing.jiatingzhi;		
	}
	public shuaxinjinbi() {
		this.jinbite0.text = "" + Gerenshuxing.jinbizhi;
	}
	public shuaxinriqi() {
		//当前日期计算
		Gerenshuxing.riqi = Math.floor((Gerenshuxing.shijian / 24) % 30 +1);
		//当前月份计算
		Gerenshuxing.yuefen = Math.floor((Gerenshuxing.shijian / 24 / 30) % 12) + 1;
		//当前第几年计算
		Gerenshuxing.nian = Math.floor(Gerenshuxing.shijian / (24 * 365))  + 1;
		this.riqi.text = Gerenshuxing.yuefen + "月" + Gerenshuxing.riqi + "日";
		this.nian.text = "第" + Gerenshuxing.nian + "年";		
	}
	public shuaxindqshijian() {
		Gerenshuxing.xianshishijian =  Gerenshuxing.shijian % 24;
		this.dqshijiante0.text =  Gerenshuxing.xianshishijian + " : 00";
		if(Gerenshuxing.xianshishijian >= 6 && Gerenshuxing.xianshishijian < 18){
			this.img_shijian.source = "img_shijianbaitian_png";
		}else{
			this.img_shijian.source = "img_shijianheiye_png";
		}
		switch(Gerenshuxing.xianshishijian){
			case 6:
				this.img_dangqianshike7.alpha = 1;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 7:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 1;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 8:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 1;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 9:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 1;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 10:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 1;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 11:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 1;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 12:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 1;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 13:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 1;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 14:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 1;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 15:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 1;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 16:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 1;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 17:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 1;
				break;
			case 18:
				this.img_dangqianshike7.alpha = 1;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 19:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 1;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 20:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 1;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 21:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 1;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 22:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 1;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 23:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 1;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 0:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 1;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 1:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 1;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 2:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 1;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 3:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 1;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 4:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 1;
				this.img_dangqianshike18.alpha = 0;
				break;
			case 5:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 1;
				break;
			default:
				this.img_dangqianshike7.alpha = 0;
				this.img_dangqianshike8.alpha = 0;
				this.img_dangqianshike9.alpha = 0;
				this.img_dangqianshike10.alpha = 0;
				this.img_dangqianshike11.alpha = 0;
				this.img_dangqianshike12.alpha = 0;
				this.img_dangqianshike13.alpha = 0;
				this.img_dangqianshike14.alpha = 0;
				this.img_dangqianshike15.alpha = 0;
				this.img_dangqianshike16.alpha = 0;
				this.img_dangqianshike17.alpha = 0;
				this.img_dangqianshike18.alpha = 0;
				break;
		}	
	}
	public shuaxinjiankang() {
		this.jiankangte0.text = "" + Gerenshuxing.jiankangzhi;		
	}

	public shuaxintianqi(){
		switch(Gerenshuxing.dangqiantianqi){
			case 1:
				this.img_tianqi.source = "img_tianqiqing_png";
				break;
			case 2:
				this.img_tianqi.source = "img_tianqiyu_png";
				break;
			case 3:
				this.img_tianqi.source = "img_tianqixue_png";
				break;
		}
	}

	public chakangerenshuxing(){
		this.gerenshuxingui = new Gerenshuxingjiemian();
		this.addChild(this.gerenshuxingui);
		this.chengchengjiemianneirong();
	}

	public chengchengjiemianneirong(){
		this.gerenshuxingui.jinxinganniu.enabled = true;
		this.gerenshuxingui.jinxinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dakaijinxiu,this);
		this.gerenshuxingui.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbigerenshuxing,this);
		this.gerenshuxingui.img_heisezhezao.touchEnabled = true;
		this.gerenshuxingui.img_heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbigerenshuxing,this);
		this.gerenshuxingui.nichengwenzi.text = Gerenshuxing.mingzi;
		this.gerenshuxingui.dengjineirong.text = Gerenshuxing.xingfudengji + "级";
		this.gerenshuxingui.cunhuoshijian.text = Gerenshuxing.nian + "年" + Gerenshuxing.yuefen + "月" + Gerenshuxing.riqi + "天";
		this.xianshitouxiang();
		let xiayijijingyanzhi:number = 0;
		let benjijingyanzhi:number = 0;
		for(var h = 0;h<Gerenshuxing.gerendengjibiao.length;h++){
			if(parseInt(Gerenshuxing.gerendengjibiao[h].id) == Gerenshuxing.xingfudengji){
				if(h == Gerenshuxing.gerendengjibiao.length -1){
					xiayijijingyanzhi = 1000000000;
					break;
				}else{
					xiayijijingyanzhi = Gerenshuxing.gerendengjibiao[h + 1].levelexp;
					benjijingyanzhi = Gerenshuxing.gerendengjibiao[h].levelexp;
					break;
				}
			}
		}
		let xiangchajingyan = xiayijijingyanzhi - benjijingyanzhi;
		let yidadaojingyan = Gerenshuxing.xingfuzhi - benjijingyanzhi;
		let baifenbijindu = Math.floor(yidadaojingyan * 100 / xiangchajingyan);
		this.gerenshuxingui.xingfuzhishu.text = Gerenshuxing.xingfuzhi + "/" + xiayijijingyanzhi;
		this.gerenshuxingui.jindubaifenbi.text = baifenbijindu + "%";
		this.gerenshuxingui.jindutiao.width = this.gerenshuxingui.jindutiao.width * baifenbijindu / 100;

		this.gerenshuxingui.naixinzhi.text = Gerenshuxing.gerenaixin + "(" + Math.floor(Gerenshuxing.xingfunaixin * Gerenshuxing.jiankangzhi / 1000) +")";
		this.gerenshuxingui.yizhizhi.text = Gerenshuxing.gerenyizhi + "(" + Math.floor(Gerenshuxing.xingfuyizhi * Gerenshuxing.kaixinzhi / 1000) +")";
		this.gerenshuxingui.xingzhizhi.text = Gerenshuxing.gerenxingzhi + "";
		this.gerenshuxingui.laxizhi.text = Gerenshuxing.gerenla + "(" + Gerenshuxing.tishengxingfula +")";
		this.gerenshuxingui.maxizhi.text = Gerenshuxing.gerenma + "(" + Gerenshuxing.tishengxingfuma +")";
		this.gerenshuxingui.suanxizhi.text = Gerenshuxing.gerensuan + "(" + Gerenshuxing.tishengxingfusuan +")";
		this.gerenshuxingui.tianxizhi.text = Gerenshuxing.gerentian + "(" + Gerenshuxing.tishengxingfutian +")";
	}

	public dakaijinxiu(){
		let jinxiujiemian = new Gerendaojujiemian();
		this.addChild(jinxiujiemian);
		jinxiujiemian.chushihua("1");
	}


	public guanbigerenshuxing(){
		this.removeChild(this.gerenshuxingui);
	}

	public xianshitouxiang(){
		var imgLoader: egret.ImageLoader = new egret.ImageLoader;
		/*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
			imgLoader.load(Gerenshuxing.touxiang);
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}else{
			imgLoader.load("http://192.168.1.2/res/resource/resource/wxtx/undefined.png");
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}*/
		imgLoader.load(Gerenshuxing.touxiang);
		imgLoader.once(egret.Event.COMPLETE, this.xianshizijitouxiang, this);		
	}

	public xianshizijitouxiang(evt: egret.Event):void{
			if (evt.currentTarget.data) {
	//			egret.log("加载头像成功: " + evt.currentTarget.data);
				let texture = new egret.Texture();
				texture.bitmapData = evt.currentTarget.data;
				let head = new egret.Bitmap(texture);
				head.x = 0;
				head.y = 0;
				head.width=this.gerenshuxingui.wanjiatouxiang.width;
				head.height=this.gerenshuxingui.wanjiatouxiang.height;
				this.gerenshuxingui.wanjiatouxiang.addChild(head);
			}
	}


	public kaixinjieshao(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "27"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public tilijieshao(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "28"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public jinbijieshao(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "29"){
				this.youxitishijiemian(this.youxitishibiao[i].neirong);
				break;
			}
		}
	}

	public jiankangjieshao(){
		for(var i = 0;i<this.youxitishibiao.length;i++){
			if(this.youxitishibiao[i].id == "30"){
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


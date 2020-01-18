class dingbuxinxi extends eui.Component implements  eui.UIComponent {
	public dingbuzu0:eui.Group;
	public img_topbg0:eui.Image;
	public kaishizhizu0:eui.Group;
	public img_happiness0:eui.Image;
	public xingfute0:eui.Label;
	public kaixinzu0:eui.Group;
	public img_mood0:eui.Image;
	public kaixinte0:eui.Label;
	public jiatingzu0:eui.Group;
	public img_family0:eui.Image;
	public jiatingte0:eui.Label;
	public jiankangzu0:eui.Group;
	public img_fealth0:eui.Image;
	public jiankangte0:eui.Label;
	public jinbizu0:eui.Group;
	public img_money0:eui.Image;
	public jinbite0:eui.Label;
	public riqizu0:eui.Group;
	public img_calendar0:eui.Image;
	public riqi:eui.Label;
	public nian:eui.Label;
	public shijianzu0:eui.Group;
	public img_timebg0:eui.Image;
	public dqshijiante0:eui.Label;
	public but_seting0:eui.Button;
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
		//刷新幸福值
		this.shuaxinxingfu();		
		//刷新开心值
		this.shuaxinkaixin();		
		//刷新家庭值
		this.shuaxinjiating();
		//刷新金币值
		this.shuaxinjinbi();		
		//刷新日期值
		this.shuaxinriqi();
		//刷新当前时间
		this.shuaxindqshijian();
		//刷新健康值
		this.shuaxinjiankang();	
		//刷新天气
		this.shuaxintianqi();
		//日期按钮增加点击事件
		this.riqizu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiriqi,this);	
	}


	public dianjiriqi(){
		Gameguanli.Kongzhitai().meirijiesuanjiemian("kai",Gerenshuxing.yuangongxupin,Gerenshuxing.yuangongjiepin);
	}
	

	

	public shuaxinxingfu() {
		this.xingfute0.text = "" + Gerenshuxing.xingfuzhi;
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
	
}


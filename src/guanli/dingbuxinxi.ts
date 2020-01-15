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
	public riqite0:eui.Label;
	public shijianzu0:eui.Group;
	public img_timebg0:eui.Image;
	public img_timezhong0:eui.Image;
	public daojishizu0:eui.Group;
	public img_timebarbg0:eui.Image;
	public img_timebar0:eui.Image;
	public img_timetextbg0:eui.Image;
	public dqshijiante0:eui.Label;
	public but_seting0:eui.Button;





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
		this.riqite0.text = "" + Gerenshuxing.yuefen;		
	}
	public shuaxindqshijian() {
		this.dqshijiante0.text = "" + Gerenshuxing.shijian;		
	}
	public shuaxinjiankang() {
		this.jiankangte0.text = "" + Gerenshuxing.jiankangzhi;		
	}
	
}


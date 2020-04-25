class Timekongzhi extends egret.DisplayObjectContainer{


	public constructor() {
		super();
		console.log("进入倒计时");
		this.shijianjisuan();//游戏内每小时计算定时


	}

	public shijianjisuan(){
		let youxishijiandingshi = new egret.Timer(6000,0);
		youxishijiandingshi.addEventListener(egret.TimerEvent.TIMER,this.kaishijisuan,this);
		youxishijiandingshi.start();
	}

	public kaishijisuan(){
		let dangqianshijian = (new Date()).valueOf();
		Weblianjie.fasongshuju("code:028","{" + '"shijian"' +":"+ '"1"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		Gerenshuxing.lixianjianglidingshi();
	}

	
}
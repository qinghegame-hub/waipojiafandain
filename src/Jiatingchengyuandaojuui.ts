class Jiatingchengyuandaojuui extends eui.Component implements  eui.UIComponent {
	public daojujiemian:eui.Group;
	public img_daojubeijing:eui.Image;
	public daojubiaoti:eui.Label;
	public jiatingdaojuzu:eui.Group;
	public zengsong1:eui.Group;
	public zsanniudb1:eui.Image;
	public zengsongtupian1:eui.Image;
	public zswzk1:eui.Image;
	public wznr1:eui.Label;
	public geshudikuang1:eui.Image;
	public geshuwenzi1:eui.Label;
	public zengsong2:eui.Group;
	public zsanniudb2:eui.Image;
	public zengsongtupian2:eui.Image;
	public zswzk2:eui.Image;
	public wznr2:eui.Label;
	public geshudikuang2:eui.Image;
	public geshuwenzi2:eui.Label;
	public zengsong3:eui.Group;
	public zsanniudb3:eui.Image;
	public zengsongtupian3:eui.Image;
	public zswzk3:eui.Image;
	public wznr3:eui.Label;
	public geshudikuang3:eui.Image;
	public geshuwenzi3:eui.Label;
	public zengsong4:eui.Group;
	public zsanniudb4:eui.Image;
	public zengsongtupian4:eui.Image;
	public zswzk4:eui.Image;
	public wznr4:eui.Label;
	public geshudikuang4:eui.Image;
	public geshuwenzi4:eui.Label;
	public zengsong5:eui.Group;
	public zsanniudb5:eui.Image;
	public zengsongtupian5:eui.Image;
	public zswzk5:eui.Image;
	public wznr5:eui.Label;
	public geshudikuang5:eui.Image;
	public geshuwenzi5:eui.Label;
	public guanbianniu:eui.Button;





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
//		this.guanbianniuguanbi();
	}

	public guanbianniuguanbi(){
		this.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gamesound.Soundkongzhi().anniuyinxiao();
			this.parent.removeChild(this);
		},this)
	}

	
	
}
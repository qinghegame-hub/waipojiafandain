class Chaoshishangdianui extends eui.Component implements  eui.UIComponent {
	public chaoshishangdianzu:eui.Group;
	public heisezhezao:eui.Image;
	public img_chaoshijiemianbj:eui.Image;
	public biaotilan:eui.Label;
	public daojuzu:eui.Group;
	public daojutubiao:eui.Image;
	public goumaianniuzu:eui.Group;
	public but_goumai:eui.Button;
	public goumaijine:eui.Label;
	public qianicon:eui.Image;
	public zhekoutubiao:eui.Image;
	public daojuzu0:eui.Group;
	public daojutubiao0:eui.Image;
	public goumaianniuzu0:eui.Group;
	public but_goumai0:eui.Button;
	public goumaijine0:eui.Label;
	public qianicon0:eui.Image;
	public daojuzu1:eui.Group;
	public daojutubiao1:eui.Image;
	public goumaianniuzu1:eui.Group;
	public but_goumai1:eui.Button;
	public goumaijine1:eui.Label;
	public qianicon1:eui.Image;
	public daojuzu2:eui.Group;
	public daojutubiao2:eui.Image;
	public goumaianniuzu2:eui.Group;
	public but_goumai2:eui.Button;
	public goumaijine2:eui.Label;
	public qianicon2:eui.Image;
	public daojuzu3:eui.Group;
	public daojutubiao3:eui.Image;
	public goumaianniuzu3:eui.Group;
	public but_goumai3:eui.Button;
	public goumaijine3:eui.Label;
	public qianicon3:eui.Image;
	public daojuzu4:eui.Group;
	public daojutubiao4:eui.Image;
	public goumaianniuzu4:eui.Group;
	public but_goumai4:eui.Button;
	public goumaijine4:eui.Label;
	public qianicon4:eui.Image;
	public daojuzu5:eui.Group;
	public daojutubiao5:eui.Image;
	public goumaianniuzu5:eui.Group;
	public but_goumai5:eui.Button;
	public goumaijine5:eui.Label;
	public daojuzu6:eui.Group;
	public daojutubiao6:eui.Image;
	public goumaianniuzu6:eui.Group;
	public but_goumai6:eui.Button;
	public goumaijine6:eui.Label;
	public daojuzu7:eui.Group;
	public daojutubiao7:eui.Image;
	public goumaianniuzu7:eui.Group;
	public but_goumai7:eui.Button;
	public goumaijine7:eui.Label;
	public guanbijiemain:eui.Button;




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
		this.guanbijiemainanniu();
	}

	public guanbijiemainanniu(){
		if(this.parent){
			this.guanbijiemain.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				this.parent.removeChild(this);
			},this)
		}
	}
	
}
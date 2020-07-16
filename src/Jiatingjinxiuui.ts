class Jiatingjinxiuui extends eui.Component implements  eui.UIComponent {
	public jinxiujiemian:eui.Group;
	public jinxiubj:eui.Image;
	public jinxiubiaoti:eui.Label;
	public jinxiutupian:eui.Image;
	public shengyushijian:eui.Label;
	public shengyushijian0:eui.Label;
	public quedinganniu:eui.Button;
	public quedinganniu0:eui.Button;
	public quedinganniu1:eui.Button;
	public guanbianniu:eui.Button;
	public jiasuwenzi:eui.Label;





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
//		this.guanbianniujiaohu();
	}

	public guanbianniujiaohu(){
		this.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gamesound.Soundkongzhi().anniuyinxiao();
			this.parent.removeChild(this);
		},this)
	}
	
}
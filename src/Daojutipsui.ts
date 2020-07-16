class Daojutipsui extends eui.Component implements  eui.UIComponent {
	public daojuzu:eui.Group;
	public heiseguanbi:eui.Image;
	public tipszu:eui.Group;
	public img_daojutipsbj:eui.Image;
	public zhezaodikuang:eui.Image;
	public zhezhaodikuang1:eui.Image;
	public zhezaodikuang0:eui.Image;
	public mingcheng:eui.Label;
	public daojumingzi:eui.Label;
	public leixing:eui.Label;
	public leixingming:eui.Label;
	public shuoming:eui.Label;
	public shuomingneirong:eui.Label;
	public daojuiconzu:eui.Group;
	public daojuicon:eui.Image;
	public daojubiankuang:eui.Image;
	public guanbianniudaoju:eui.Button;
	public biaotiwenzi:eui.Label;
	public shiyonganniu:eui.Button;
	public quedinganniu:eui.Button;


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
		if(this.parent){
			this.guanbianniudaoju.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				this.parent.removeChild(this);
			},this);
		}
	}
	
}
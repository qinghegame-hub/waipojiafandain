class Tongyongquerenkuang extends eui.Component implements  eui.UIComponent {
	public querenkuangzu:eui.Group;
	public heisediban:eui.Image;
	public tongyongtishizu:eui.Group;
	public img_tongyongtishikuang:eui.Image;
	public tishiwenzi:eui.Label;
	public but_queding:eui.Button;
	public but_queding0:eui.Button;
	public but_shuangbei:eui.Button;
	public jiangli1:eui.Label;
	public jiangli2:eui.Label;
	public jiangliicon1:eui.Image;
	public jiangliicon2:eui.Image;








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
		this.heisediban.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiemian,this);
	}

	public guanbijiemian(){
		this.parent.removeChild(this);
	}
	
}
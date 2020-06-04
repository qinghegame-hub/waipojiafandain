class Daojutipsui extends eui.Component implements  eui.UIComponent {
	public daojuzu:eui.Group;
	public heiseguanbi:eui.Image;
	public tipszu:eui.Group;
	public img_daojutipsbj:eui.Image;
	public daojuicon:eui.Image;
	public mingcheng:eui.Label;
	public daojumingzi:eui.Label;
	public leixing:eui.Label;
	public leixingming:eui.Label;
	public shuoming:eui.Label;
	public shuomingneirong:eui.Label;

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
	}
	
}
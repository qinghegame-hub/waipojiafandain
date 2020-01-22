class Tanmujiemian extends eui.Component implements  eui.UIComponent {
	public danmuzu:eui.Group;
	public touxiang:eui.Image;
	public img_cuowutishi:eui.Image;
	public danmutext:eui.Label;
	public xingming:eui.Label;
	public img_danmuzeizao:eui.Image;
	public img_haopin:eui.Image;



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
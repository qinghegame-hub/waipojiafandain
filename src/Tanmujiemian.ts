class Tanmujiemian extends eui.Component implements  eui.UIComponent {
	public danmuzu:eui.Group;
	public img_cuowutishi:eui.Image;
	public danmutext:eui.Label;

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
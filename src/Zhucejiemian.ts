class Zhucejiemian extends eui.Component implements  eui.UIComponent {
	public zhanghaoshuruzu:eui.Group;
	public img_tongyongtishikuang:eui.Image;
	public zhanghao:eui.Label;
	public ceshizhanghaoshuru:eui.EditableText;
	public quedingjinru:eui.Button;

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
class Xinshouyindaodakuang extends eui.Component implements  eui.UIComponent {
	public yindaozu:eui.Group;
	public heisezhezhaodianji:eui.Image;
	public dakuangzu:eui.Group;
	public yindaodatukuang:eui.Image;
	public dakuangwenzi:eui.Label;
	public yindaoshouzhi:eui.Image;
	public xiaokuangzu:eui.Group;
	public yindaoxiaokuang:eui.Image;
	public xiaokuanwenzi:eui.Label;



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
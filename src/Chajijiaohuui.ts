class Chajijiaohuui extends eui.Component implements  eui.UIComponent {
	public chaji:eui.Group;
	public chajiguanbi:eui.Image;
	public chajibeijing:eui.Image;
	public chajibiaoshi:eui.Image;
	public chajichakan:eui.Button;
	public chajijinxiu:eui.Button;

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
class Dianshijiaohuui extends eui.Component implements  eui.UIComponent {
	public dianshi:eui.Group;
	public dianshiguanbi:eui.Image;
	public dianshibeijing:eui.Image;
	public dianshibiaoshi:eui.Image;
	public dianshichakan:eui.Button;
	public dianshijinxiu:eui.Button;
	public dianshizengsong:eui.Button;

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
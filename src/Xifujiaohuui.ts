class Xifujiaohuui extends eui.Component implements  eui.UIComponent {
	public xifuzu:eui.Group;
	public xifuguanbi:eui.Image;
	public xifubeijing:eui.Image;
	public xifubiaoshi:eui.Image;
	public xifuchakan:eui.Button;
	public xifujiaotan:eui.Button;
	public xifujinxiu:eui.Button;
	public xifuzengsong:eui.Button;



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
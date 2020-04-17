class Chuangjiaohuui extends eui.Component implements  eui.UIComponent {
	public chuang:eui.Group;
	public chuangguanbi:eui.Image;
	public chuangbeijing:eui.Image;
	public chuangbiaoshi:eui.Image;
	public chuangchakan:eui.Button;
	public chuangjinxiu:eui.Button;
	public chuangzengsong:eui.Button;


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
class Paomadenggonggao extends eui.Component implements  eui.UIComponent {
	public paomadengzu:eui.Group;
	public img_paomadeng:eui.Image;
	public paomakongjian:eui.Scroller;
	public paomazu:eui.Group;
	public wenzineirong:eui.Label;

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
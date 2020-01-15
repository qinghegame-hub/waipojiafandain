class Cuowutishi extends eui.Component implements  eui.UIComponent {
	public cuowutishi:eui.Group;
	public img_cuowutishi:eui.Image;
	public tishiwenzi:eui.Label;

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
//		this.xianshineirong();
	}

//	public xianshineirong(wenzi?){
//		this.tishiwenzi.text = wenzi;
//	}



	
}
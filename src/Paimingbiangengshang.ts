class Paimingbiangengshang extends eui.Component implements  eui.UIComponent {
	public paimingshangshengzu:eui.Group;
	public img_shangdikuang:eui.Image;
	public xiangpianzu:eui.Group;
	public xiangkuang:eui.Image;
	public img_shangjiantou:eui.Image;
	public img_paimingshangsheng:eui.Image;
	public paiming:eui.Label;
	public xingfuzhi:eui.Label;
	public img_xingfu:eui.Image;

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
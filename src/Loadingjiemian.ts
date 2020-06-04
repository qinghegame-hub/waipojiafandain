class Loadingjiemian extends eui.Component implements  eui.UIComponent {
	public loadingzu:eui.Group;
	public beijingtu:eui.Image;
	public img_jindutiaoxia:eui.Image;
	public img_jindutiaoshang:eui.Image;
	public but_kaishiyouxi:eui.Image;

	public chushijinduchang:number;

	public constructor() {
		super();
		 this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public createView(){
		this.but_kaishiyouxi.alpha = 0;
		this.chushijinduchang = this.img_jindutiaoshang.width;
		console.log("chushi" + this.chushijinduchang);
	}
	
}
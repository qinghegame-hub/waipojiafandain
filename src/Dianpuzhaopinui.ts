class Dianpuzhaopinui extends eui.Component implements  eui.UIComponent {
	public zhaopinzu:eui.Group;
	public img_heisezhezao1:eui.Image;
	public jiemianbeijing:eui.Image;
	public xitongtouxiang:eui.Image;
	public touxiangzu:eui.Group;
	public xiangkuang:eui.Image;
	public xingming:eui.Label;
	public mingzi:eui.Label;
	public jineng:eui.Label;
	public jinengshu:eui.Label;
	public shuoming:eui.Label;
	public but_zhaopin:eui.Button;
	public but_jiepin:eui.Button;



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
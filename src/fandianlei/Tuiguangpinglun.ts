class Tuiguangpinglun extends eui.Component implements  eui.UIComponent {
	public tuiguangpinglunzu:eui.Group;
	public dianshiliebiaozu0:eui.Group;
	public img_dianshiguanggao0:eui.Image;
	public tuiguangwenzi1:eui.Label;
	public chixushijianwenzi1:eui.Label;
	public tuiguangfeiyongwenzi1:eui.Label;
	public tuiguangxiaoguowenzi1:eui.Label;
	public tuiguangshengyu1:eui.Label;
	public tuiguangshengyuwenzi1:eui.Label;
	public img_qian1:eui.Image;
	public but_tuiguanganniu1:eui.Button;

	public chuandanneirong:any;

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
		this.chushihuajiemian();
	}

	protected chushihuajiemian(){
		//点击推广按钮时触发
		this.but_tuiguanganniu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjituiguanganniu,this);
	}

	protected dianjituiguanganniu(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:016","{" + '"tuiguangid"' +":"+ '"' + this.chuandanneirong.id + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}

	public chulishujuluoji(yeqian?:number,yeshu?:number){
		let guanlileixingleibiao:any = Gerenshuxing.yinxiaobiao;
		this.chuandanneirong = guanlileixingleibiao[2];
		this.tuiguangwenzi1.text = this.chuandanneirong.selltext;
		this.tuiguangxiaoguowenzi1.text =  "+ " + this.chuandanneirong.sellachievement;
		this.chixushijianwenzi1.text = this.chuandanneirong.selltime + "天";
		this.tuiguangfeiyongwenzi1.text = this.chuandanneirong.sellpay;
		if(Gerenshuxing.shengyupinglun > 0){
			this.tuiguangshengyu1.alpha = 1;
			this.tuiguangshengyuwenzi1.alpha = 1;
			this.tuiguangshengyuwenzi1.text = Gerenshuxing.shengyupinglun + "天";
			this.but_tuiguanganniu1.enabled = false;
			this.but_tuiguanganniu1.alpha = 0;
		}else{
			this.tuiguangshengyu1.alpha = 0;
			this.tuiguangshengyuwenzi1.alpha = 0;
			this.tuiguangshengyuwenzi1.text = Gerenshuxing.shengyupinglun + "天";
			this.but_tuiguanganniu1.enabled = true;
			this.but_tuiguanganniu1.alpha = 1;
		}
		
	}
	
}
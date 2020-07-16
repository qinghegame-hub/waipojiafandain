class Tuiguangdianshi extends eui.Component implements  eui.UIComponent {
	public tuiguangdianshizu:eui.Group;
	public dianshiliebiaozu:eui.Group;
	public img_dianshiguanggao:eui.Image;
	public tuiguangwenzi0:eui.Label;
	public chixushijianwenzi0:eui.Label;
	public tuiguangfeiyongwenzi0:eui.Label;
	public tuiguangxiaoguowenzi0:eui.Label;
	public tuiguangshengyu0:eui.Label;
	public tuiguangshengyuwenzi0:eui.Label;
	public img_qian0:eui.Image;
	public but_tuiguanganniu0:eui.Button;

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
		this.but_tuiguanganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjituiguanganniu,this);
	}

	protected dianjituiguanganniu(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:015","{" + '"tuiguangid"' +":"+ '"' + this.chuandanneirong.id + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}


	public chulishujuluoji(yeqian?:number,yeshu?:number){
		let guanlileixingleibiao:any = Gerenshuxing.yinxiaobiao;
		this.chuandanneirong = guanlileixingleibiao[1];
		this.tuiguangwenzi0.text = this.chuandanneirong.selltext;
		this.tuiguangxiaoguowenzi0.text =  "+ " + this.chuandanneirong.sellachievement;
		this.chixushijianwenzi0.text = this.chuandanneirong.selltime + "天";
		this.tuiguangfeiyongwenzi0.text = this.chuandanneirong.sellpay;
		if(Gerenshuxing.shengyudianshi > 0){
			this.tuiguangshengyu0.alpha = 1;
			this.tuiguangshengyuwenzi0.alpha = 1;
			this.tuiguangshengyuwenzi0.text = Gerenshuxing.shengyudianshi + "天";
			this.but_tuiguanganniu0.enabled = false;
			this.but_tuiguanganniu0.alpha = 0;
		}else{
			this.tuiguangshengyu0.alpha = 0;
			this.tuiguangshengyuwenzi0.alpha = 0;
			this.tuiguangshengyuwenzi0.text = Gerenshuxing.shengyudianshi + "天";
			this.but_tuiguanganniu0.enabled = true;
			this.but_tuiguanganniu0.alpha = 1;
		}
		
	}
	
}
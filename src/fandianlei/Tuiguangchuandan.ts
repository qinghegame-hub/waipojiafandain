class Tuiguangchuandan extends eui.Component implements  eui.UIComponent {
	public tuiguangchuandanzu:eui.Group;
	public chuandanliebiaozu:eui.Group;
	public img_chuandantuiguang:eui.Image;
	public tuiguangwenzi:eui.Label;
	public chixushijianwenzi:eui.Label;
	public tuiguangfeiyongwenzi:eui.Label;
	public tuiguangxiaoguowenzi:eui.Label;
	public tuiguangshengyu:eui.Label;
	public tuiguangshengyuwenzi:eui.Label;
	public img_qian:eui.Image;
	public but_tuiguanganniu:eui.Button;

	public panduanyeqian:number;

	public tuiguangyeshu:number;

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
		this.but_tuiguanganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjituiguanganniu,this);
	}

	protected dianjituiguanganniu(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Weblianjie.fasongshuju("code:014","{" + '"tuiguangid"' +":"+ '"' + this.chuandanneirong.id + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}


	public chulishujuluoji(yeqian?:number,yeshu?:number){
		let guanlileixingleibiao:any = Gerenshuxing.yinxiaobiao;
		this.chuandanneirong = guanlileixingleibiao[0];
		this.tuiguangwenzi.text = this.chuandanneirong.selltext;
		this.tuiguangxiaoguowenzi.text =  "+ " + this.chuandanneirong.sellachievement;
		this.chixushijianwenzi.text = this.chuandanneirong.selltime + "天";
		this.tuiguangfeiyongwenzi.text = this.chuandanneirong.sellpay;
		if(Gerenshuxing.shengyuchuandan > 0){
			this.tuiguangshengyu.alpha = 1;
			this.tuiguangshengyuwenzi.alpha = 1;
			this.tuiguangshengyuwenzi.text = Gerenshuxing.shengyuchuandan + "天";
			this.but_tuiguanganniu.enabled = false;
			this.but_tuiguanganniu.alpha = 0;
		}else{
			this.tuiguangshengyu.alpha = 0;
			this.tuiguangshengyuwenzi.alpha = 0;
			this.tuiguangshengyuwenzi.text = Gerenshuxing.shengyuchuandan + "天";
			this.but_tuiguanganniu.enabled = true;
			this.but_tuiguanganniu.alpha = 1;
		}
		
	}
	
}
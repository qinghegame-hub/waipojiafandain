class Changjingrukouui extends eui.Component implements  eui.UIComponent {
	public jiemainrukouzu:eui.Group;
	public jiemainzu:eui.Group;
	public img_jinrubeijing:eui.Image;
	public img_biaotitu:eui.Image;
	public rukoushuoming:eui.Label;
	public but_quxiao:eui.Button;
	public but_jinru:eui.Button;
	public img_qian:eui.Image;
	public xiaohaoqian:eui.Label;

	public leixing:string;



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
		this.chushihua();
	}

	public chushihua(){
		this.but_quxiao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiemian,this);
		this.but_jinru.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jinrujiemian,this);

		if(this.leixing == "caishichang"){
			this.img_biaotitu.source = "img_biaoticaishichang_png";
			this.rukoushuoming.text = "这里是菜市场，当您的饭店缺少食材时，可以在本菜市场进行食材购买。（每次均需消耗一定数量的钱币。）";
			let changshubiao = Gerenshuxing.changshubiao;
			let xiaohaoqianbi:number = 0;
			for(var i = 0;i<changshubiao.length;i++){
				if(changshubiao[i].id == 0){
					xiaohaoqianbi = changshubiao[i].numshu;
				}
			}
			this.xiaohaoqian.text = "-" + xiaohaoqianbi;
		}else if(this.leixing == "shangjie"){
			this.img_biaotitu.source = "img_biaotijiedao_png";
			this.rukoushuoming.text = "经常出门转转，多上街走走肯定是极好的，如果运气好，或许还能得到意想不到的收获。";
			this.img_qian.source = "img_jiating_png";
			this.xiaohaoqian.text = "- 30";
		}
		
	}

	public guanbijiemian(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.leixing == "caishichang"){
			Gameguanli.Kongzhitai().changjingrukou("caishichang","guan");
		}else if(this.leixing == "shangjie"){
			Gameguanli.Kongzhitai().changjingrukou("shangjie","guan");
		}
	}

	public jinrujiemian(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.leixing == "caishichang"){
			if(Gerenshuxing.jinbizhi >= 500){
				Weblianjie.fasongshuju("code:033","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}else{
				Gameguanli.Kongzhitai().cuowutishixinxi("您的钱币不足，无法进行原料的采购！");
			}
		}else if(this.leixing == "shangjie"){
			if(Gerenshuxing.jiatingzhi >= 30){
				Weblianjie.fasongshuju("code:109","{" + '"kouchuxingdongli"' +":"+ '"30"' +","
				+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}else{
				Gameguanli.Kongzhitai().cuowutishixinxi("您当前的行动力不足，无法上街！");
			}
		}		
	}
	
}
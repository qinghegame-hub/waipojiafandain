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
			let changshubiao = RES.getRes("changshubiao_json");
			let xiaohaoqianbi:number = 0;
			for(var i = 0;i<changshubiao.length;i++){
				if(changshubiao[i].id == 0){
					xiaohaoqianbi = changshubiao[i].numshu;
				}
			}
			this.xiaohaoqian.text = "-" + xiaohaoqianbi;
		}
	}

	public guanbijiemian(){
		if(this.leixing == "caishichang"){
			Gameguanli.Kongzhitai().changjingrukou("caishichang","guan");
		}
	}

	public jinrujiemian(){
		if(this.leixing == "caishichang"){
			Weblianjie.fasongshuju("code:033","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		}
	}
	
}
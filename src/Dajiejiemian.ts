class Dajiejiemian extends eui.Component implements  eui.UIComponent {
	public dajiezu:eui.Group;
	public img_chengshibeijing:eui.Image;
	public taijie0:eui.Image;
	public taijie1:eui.Image;
	public taijie2:eui.Image;
	public taijie3:eui.Image;
	public taijie4:eui.Image;
	public taijie5:eui.Image;
	public taijie6:eui.Image;
	public taijie7:eui.Image;
	public taijie8:eui.Image;
	public taijie9:eui.Image;
	public taijie10:eui.Image;
	public taijie11:eui.Image;
	public taijie12:eui.Image;
	public taijie13:eui.Image;
	public taijie14:eui.Image;
	public taijie15:eui.Image;
	public taijie16:eui.Image;
	public taijie17:eui.Image;
	public taijie18:eui.Image;
	public taijie19:eui.Image;
	public taijie20:eui.Image;
	public taijie21:eui.Image;
	public taijie22:eui.Image;
	public taijie23:eui.Image;
	public taijie24:eui.Image;
	public taijie25:eui.Image;
	public taijie26:eui.Image;
	public juesezu:eui.Group;
	public juesetubiao:eui.Image;
	public touxiang:eui.Image;
	public touxiangkuang:eui.Image;
	public img_dianpu:eui.Image;
	public kaishianniuzu:eui.Group;
	public but_shaizi:eui.Button;
	public img_tilitishibj:eui.Image;
	public img_jiating:eui.Image;
	public tilixiaohao:eui.Label;





	public dangqianbushu:number = 1;//当前所处的台阶步数;
	public dangqiansaizi:number = 1;//当前筛子抛出的点数;


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
		this.but_shaizi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjisaizi,this);
		this.juesezu.x = this.taijie0.x;
		this.juesezu.y = this.taijie0.y;
		this.dangqianbushu = 1;
		this.dangqiansaizi = 1;
		this.tilixiaohaochushi();
	}

	public tilixiaohaochushi(){
		this.tilixiaohao.text = "1 / " + Gerenshuxing.jiatingzhi;
	}

	public dianjisaizi(){
		if(Gerenshuxing.jiatingzhi > 0){
			Weblianjie.fasongshuju("code:037","{" + '"kouchushu"' +":"+ "1" +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			let kouchudonghua = new Cailiaoxiaohao();
			this.addChild(kouchudonghua);
			kouchudonghua.wenzizu.x = this.kaishianniuzu.x + this.kaishianniuzu.width / 2 - kouchudonghua.wenzizu.width /2;
			kouchudonghua.wenzizu.y = this.kaishianniuzu.y - kouchudonghua.wenzizu.height;
			kouchudonghua.wenzineirong.text = " - 1";
			kouchudonghua.img_shicai.source = "img_jiating_png";
			egret.Tween.get(kouchudonghua).to({x:kouchudonghua.x,y:kouchudonghua.y - 60},2000).call(()=>{
				this.removeChild(kouchudonghua);
			});
			this.dangqiansaizi = Math.floor(Math.random() * 6) + 1;
			Gameguanli.Kongzhitai().cuowutishixinxi("当前掷出：" + this.dangqiansaizi + "点");
			this.zouluyanshi();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("当前您的劳动力已不足1点");
		}
	}

	public zouluyanshi(){
		if(this.dangqiansaizi > 0){
			switch(this.dangqianbushu){
				case 1:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 2:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 3:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 4:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 5:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 6:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 7:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 8:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 9:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 10:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 11:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 12:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 13:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 14:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 15:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 16:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 17:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 18:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 19:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 20:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 21:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 22:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 23:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 24:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 25:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 26:
					this.dangqianbushu += 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 27:
					this.dangqianbushu = 1;
					egret.Tween.get(this.juesezu).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
			}
		}else{
			this.chufagongneng();
		}
	}

	public chufagongneng(){

	}


	

	
	
}
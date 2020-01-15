class Zhujiemian extends eui.Component implements  eui.UIComponent {
	public zhuyaozu:eui.Group;
	public img_fandianyuanhuabg0:eui.Image;
	public img_jiaju_xiaochao:eui.Image;
	public img_jiaju_huoguo:eui.Image;
	public img_jiaju_xiaochi:eui.Image;
	public img_jiaju_dianxin:eui.Image;
	public but_laji2:eui.Button;
	public but_laji0:eui.Button;
	public but_laji1:eui.Button;
	public but_laji3:eui.Button;
	public but_laji4:eui.Button;
	public but_laji5:eui.Button;
	public but_laji6:eui.Button;
	public but_laji7:eui.Button;
	public but_laji8:eui.Button;
	public but_laji9:eui.Button;
	public but_laji10:eui.Button;
	public but_laji11:eui.Button;
	public but_laji12:eui.Button;
	public but_laji13:eui.Button;
	public but_laji14:eui.Button;
	public but_laji15:eui.Button;
	public but_laji16:eui.Button;
	public but_laji17:eui.Button;
	public but_laji18:eui.Button;
	public but_laji19:eui.Button;
	public but_laji20:eui.Button;
	public but_laji21:eui.Button;
	public but_laji22:eui.Button;
	public but_laji23:eui.Button;
	public but_laji24:eui.Button;

	public dangqianX:number;
	public dangqianY:number;
	
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
		this.lajianniuchushi();
//		this.chushihuaui();

	}

	//遍历所有表格，取出当前正在使用的家具内容
	public guanlileixingleibiao:any = RES.getRes("jiajubiao_json");
	//初始化4个饭店区域的显示内容
	public chushihuaui(){
		this.chushihua_xiaochao();
		this.chushihua_huoguo();
		this.chushihua_xiaochi();
		this.chushihua_zaocan();
	}

	public chushihua_xiaochao(){
		if(Gerenshuxing.jiesuoxiaochao == "1"){
			let xiaocaoquyuxianshi:any[] = [];
			for(var i = 0;i<this.guanlileixingleibiao.length;i++){
				if(this.guanlileixingleibiao[i].id == Gerenshuxing.usexiaochao){
					xiaocaoquyuxianshi[0] = this.guanlileixingleibiao[i];
				}
			}
			this.img_jiaju_xiaochao.source = xiaocaoquyuxianshi[0].imgname + "_png";
			this.img_jiaju_xiaochao.touchEnabled = false;
		}else{
			this.img_jiaju_xiaochao.source = "img_weijiesuo_png";
			this.img_jiaju_xiaochao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiesuodating1,this);
		}	
	}

	public chushihua_huoguo(){
		if(Gerenshuxing.jiesuohuoguo == "1"){
			let huoguoquyuxianshi:any[] = [];
			for(var i = 0;i<this.guanlileixingleibiao.length;i++){
				if(this.guanlileixingleibiao[i].id == Gerenshuxing.usehuoguo){
					huoguoquyuxianshi[0] = this.guanlileixingleibiao[i];
				}
			}
			this.img_jiaju_huoguo.source = huoguoquyuxianshi[0].imgname + "_png";
			this.img_jiaju_huoguo.touchEnabled = false;
		}else{
			this.img_jiaju_huoguo.source = "img_weijiesuo_png";
			this.img_jiaju_huoguo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiesuodating2,this);
		}	
	}

	public chushihua_xiaochi(){
		if(Gerenshuxing.jiesuoxiaochi == "1"){
			let xiaochiquyuxianshi:any[] = [];
			for(var i = 0;i<this.guanlileixingleibiao.length;i++){
				if(this.guanlileixingleibiao[i].id == Gerenshuxing.usexiaochi){
					xiaochiquyuxianshi[0] = this.guanlileixingleibiao[i];
				}
			}
			this.img_jiaju_xiaochi.source = xiaochiquyuxianshi[0].imgname + "_png";
			this.img_jiaju_xiaochi.touchEnabled = false;
		}else{
			this.img_jiaju_xiaochi.source = "img_weijiesuo_png";
			this.img_jiaju_xiaochi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiesuodating3,this);
		}	
	}

	public chushihua_zaocan(){
		if(Gerenshuxing.jiesuozaocan == "1"){
			let dianxinquyuxianshi:any[] = [];
			for(var i = 0;i<this.guanlileixingleibiao.length;i++){
				if(this.guanlileixingleibiao[i].id == Gerenshuxing.usezaocan){
					dianxinquyuxianshi[0] = this.guanlileixingleibiao[i];
				}
			}
			this.img_jiaju_dianxin.source = dianxinquyuxianshi[0].imgname + "_png";
			this.img_jiaju_dianxin.touchEnabled = false;
		}else{
			this.img_jiaju_dianxin.source = "img_weijiesuo_png";
			this.img_jiaju_dianxin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiesuodating4,this);
		}	
	}


	public jiesuodating1(){
		console.log("dianji1fasong");
		Weblianjie.fasongshuju("code:006","{" + '"jiesuoid"' + ":" + '"1"' +"," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
	}
	public jiesuodating2(){
		console.log("dianji2fasong");
		Weblianjie.fasongshuju("code:006","{" + '"jiesuoid"' + ":" + '"2"' +"," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
	}
	public jiesuodating3(){
		console.log("dianji3fasong");
		Weblianjie.fasongshuju("code:006","{" + '"jiesuoid"' + ":" + '"3"' +"," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
	}
	public jiesuodating4(){
		console.log("dianji4fasong");
		Weblianjie.fasongshuju("code:006","{" + '"jiesuoid"' + ":" + '"4"' +"," + '"uid"' + ":" + '"' + Gerenshuxing.uid + '"' + "}");
	}

	public lajianniuchushi(){
		this.but_laji0.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji0,this);
		this.but_laji1.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji1,this);
		this.but_laji2.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji2,this);
		this.but_laji3.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji3,this);
		this.but_laji4.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji4,this);
		this.but_laji5.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji5,this);
		this.but_laji6.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji6,this);
		this.but_laji7.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji7,this);
		this.but_laji8.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji8,this);
		this.but_laji9.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji9,this);
		this.but_laji10.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji10,this);
		this.but_laji11.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji11,this);
		this.but_laji12.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji12,this);
		this.but_laji13.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji13,this);
		this.but_laji14.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji14,this);
		this.but_laji15.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji15,this);
		this.but_laji16.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji16,this);
		this.but_laji17.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji17,this);
		this.but_laji18.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji18,this);
		this.but_laji19.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji19,this);
		this.but_laji20.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji20,this);
		this.but_laji21.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji21,this);
		this.but_laji22.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji22,this);
		this.but_laji23.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji23,this);
		this.but_laji24.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.laji24,this);
	}


	public laji0(){
		this.dangqianX = this.but_laji0.x;
		this.dangqianY = this.but_laji0.y;
		let lajidonghua0 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[0] = 1;
		this.but_laji0.alpha = 0;
		this.but_laji0.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji1(){
		this.dangqianX = this.but_laji1.x;
		this.dangqianY = this.but_laji1.y;
		let lajidonghua1 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[1] = 1;
		this.but_laji1.alpha = 0;
		this.but_laji1.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji2(){
		this.dangqianX = this.but_laji2.x;
		this.dangqianY = this.but_laji2.y;
		let lajidonghua2 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[2] = 1;
		this.but_laji2.alpha = 0;
		this.but_laji2.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji3(){
		this.dangqianX = this.but_laji3.x;
		this.dangqianY = this.but_laji3.y;
		let lajidonghua3 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[3] = 1;
		this.but_laji3.alpha = 0;
		this.but_laji3.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji4(){
		this.dangqianX = this.but_laji4.x;
		this.dangqianY = this.but_laji4.y;
		let lajidonghua4 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[4] = 1;
		this.but_laji4.alpha = 0;
		this.but_laji4.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji5(){
		this.dangqianX = this.but_laji5.x;
		this.dangqianY = this.but_laji5.y;
		let lajidonghua5 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[5] = 1;
		this.but_laji5.alpha = 0;
		this.but_laji5.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji6(){
		this.dangqianX = this.but_laji6.x;
		this.dangqianY = this.but_laji6.y;
		let lajidonghua6 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[6] = 1;
		this.but_laji6.alpha = 0;
		this.but_laji6.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji7(){
		this.dangqianX = this.but_laji7.x;
		this.dangqianY = this.but_laji7.y;
		let lajidonghua7 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[7] = 1;
		this.but_laji7.alpha = 0;
		this.but_laji7.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji8(){
		this.dangqianX = this.but_laji8.x;
		this.dangqianY = this.but_laji8.y;
		let lajidonghua8 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[8] = 1;
		this.but_laji8.alpha = 0;
		this.but_laji8.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji9(){
		this.dangqianX = this.but_laji9.x;
		this.dangqianY = this.but_laji9.y;
		let lajidonghua9 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[9] = 1;
		this.but_laji9.alpha = 0;
		this.but_laji9.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji10(){
		this.dangqianX = this.but_laji10.x;
		this.dangqianY = this.but_laji10.y;
		let lajidonghua10 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[10] = 1;
		this.but_laji10.alpha = 0;
		this.but_laji10.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji11(){
		this.dangqianX = this.but_laji11.x;
		this.dangqianY = this.but_laji11.y;
		let lajidonghua11 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[11] = 1;
		this.but_laji11.alpha = 0;
		this.but_laji11.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji12(){
		this.dangqianX = this.but_laji12.x;
		this.dangqianY = this.but_laji12.y;
		let lajidonghua12 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[12] = 1;
		this.but_laji12.alpha = 0;
		this.but_laji12.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji13(){
		this.dangqianX = this.but_laji13.x;
		this.dangqianY = this.but_laji13.y;
		let lajidonghua13 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[13] = 1;
		this.but_laji13.alpha = 0;
		this.but_laji13.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji14(){
		this.dangqianX = this.but_laji14.x;
		this.dangqianY = this.but_laji14.y;
		let lajidonghua14 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[14] = 1;
		this.but_laji14.alpha = 0;
		this.but_laji14.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji15(){
		this.dangqianX = this.but_laji15.x;
		this.dangqianY = this.but_laji15.y;
		let lajidonghua15 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[15] = 1;
		this.but_laji15.alpha = 0;
		this.but_laji15.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji16(){
		this.dangqianX = this.but_laji16.x;
		this.dangqianY = this.but_laji16.y;
		let lajidonghua16 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[16] = 1;
		this.but_laji16.alpha = 0;
		this.but_laji16.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji17(){
		this.dangqianX = this.but_laji17.x;
		this.dangqianY = this.but_laji17.y;
		let lajidonghua17 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[17] = 1;
		this.but_laji17.alpha = 0;
		this.but_laji17.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji18(){
		this.dangqianX = this.but_laji18.x;
		this.dangqianY = this.but_laji18.y;
		let lajidonghua18 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[18] = 1;
		this.but_laji18.alpha = 0;
		this.but_laji18.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji19(){
		this.dangqianX = this.but_laji19.x;
		this.dangqianY = this.but_laji19.y;
		let lajidonghua19 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[19] = 1;
		this.but_laji19.alpha = 0;
		this.but_laji19.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji20(){
		this.dangqianX = this.but_laji20.x;
		this.dangqianY = this.but_laji20.y;
		let lajidonghua20 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[20] = 1;
		this.but_laji20.alpha = 0;
		this.but_laji20.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji21(){
		this.dangqianX = this.but_laji21.x;
		this.dangqianY = this.but_laji21.y;
		let lajidonghua21 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[21] = 1;
		this.but_laji21.alpha = 0;
		this.but_laji21.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji22(){
		this.dangqianX = this.but_laji22.x;
		this.dangqianY = this.but_laji22.y;
		let lajidonghua22 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[22] = 1;
		this.but_laji22.alpha = 0;
		this.but_laji22.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji23(){
		this.dangqianX = this.but_laji23.x;
		this.dangqianY = this.but_laji23.y;
		let lajidonghua23 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[23] = 1;
		this.but_laji23.alpha = 0;
		this.but_laji23.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}

	public laji24(){
		this.dangqianX = this.but_laji24.x;
		this.dangqianY = this.but_laji24.y;
		let lajidonghua24 = new Dasaodonghua(this.dangqianX,this.dangqianY);
		Chuangzaolaji.cunzailaji[24] = 1;
		this.but_laji24.alpha = 0;
		this.but_laji24.enabled = false;
		Gerenshuxing.dangqiankesaoweisheng -= 1;
	}


	


}
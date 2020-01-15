class Yuangongjiemian extends eui.Component implements  eui.UIComponent {
	public yuangongzu:eui.Group;
	public yuangongliebiao:eui.Group;
	public img_yuangongbeijing:eui.Image;
	public img_xiangkuangbeijing:eui.Image;
	public ygtouxiang:eui.Image;
	public xingming:eui.Label;
	public nianling:eui.Label;
	public jiguan:eui.Label;
	public xueli:eui.Label;
	public gerenjieshao:eui.Label;
	public jinengming:eui.Label;
	public jinengjiacheng:eui.Label;
	public xinzi:eui.Label;
	public xinzizhi:eui.Label;
	public but_pinyong:eui.Button;
	public but_jiepin:eui.Button;
	public img_pinyongyinzhang:eui.Image;


	public dangqianyeqianshu:number;
	public dangqianyeshu:number;

	public panduanyeqian:number;

	public yuangongyeshu:number;

	public yuangongid:string;

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
		this.chushihuaxianshiliebiao();
	}


	public chushihuaxianshiliebiao(){
	//点击第一个坑的聘用时触发
	this.but_pinyong.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjipinyong,this);
	//点击第一个坑的解聘时触发	
	this.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjijiepin,this);	
	}

	protected dianjipinyong(){
		let shifouyishiyong=false;
		for(var i = 0;i<Gerenshuxing.shiyongyuangong.length;i++){
			if(this.yuangongid == Gerenshuxing.shiyongyuangong[i]){
				shifouyishiyong = true;
				break;
			}
		}

		if(shifouyishiyong==false){
			Weblianjie.fasongshuju("code:010","{" + '"yuangongid"' +":"+ '"' + this.yuangongid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		}
	}

	protected dianjijiepin(){
		let shifouyishiyong=false;
		for(var i = 0;i<Gerenshuxing.shiyongyuangong.length;i++){
			if(this.yuangongid == Gerenshuxing.shiyongyuangong[i]){
				shifouyishiyong = true;
				break;
			}
		}

		if(shifouyishiyong==true){
			Weblianjie.fasongshuju("code:012","{" + '"yuangongid"' +":"+ '"' + this.yuangongid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		}
	}
	

	//判断每个显示格子的具体显示内容
	protected panduanxianshineirong (leixingxuhao:number,leixingdizhi:any,leixingxiabiao:any){
			if(leixingxuhao == 1){
				if(leixingdizhi[leixingxiabiao] !== undefined){
					this.xingming.text = leixingdizhi[leixingxiabiao].name;
					this.nianling.text = leixingdizhi[leixingxiabiao].age;
					this.jiguan.text = leixingdizhi[leixingxiabiao].nativeplace;
					this.xueli.text = leixingdizhi[leixingxiabiao].education;
					this.gerenjieshao.text = leixingdizhi[leixingxiabiao].selfintroduction;
					this.jinengjiacheng.text = leixingdizhi[leixingxiabiao].skillparameter;
					this.xinzi.text = "日薪：";
					this.xinzizhi.text = leixingdizhi[leixingxiabiao].pay + "/天";
					this.ygtouxiang.source = leixingdizhi[leixingxiabiao].shape + "_png";
					this.yuangongid = leixingdizhi[leixingxiabiao].id;
					switch(leixingdizhi[leixingxiabiao].skill){
						case "1":
							this.jinengming.text = "小炒单价：+";
							break;
						case "2":
							this.jinengming.text = "火锅单价：+";
							break;
						case "3":
							this.jinengming.text = "小吃单价：+";
							break;
						case "4":
							this.jinengming.text = "早餐单价：+";
							break;
						case "5":
							this.jinengming.text = "上菜速度：+";
							break;
						case "6":
							this.jinengming.text = "卫生度：+";
							break;
						case "7":
							this.jinengming.text = "食材消耗：-";
							break;
						case "8":
							this.jinengming.text = "安保度：+";
							break;
						case "9":
							this.jinengming.text = "全部单价：+";
							break;
					}
					switch(leixingdizhi[leixingxiabiao].ygisshiyong){
						case 1:
							this.img_pinyongyinzhang.alpha = 1;
							this.but_pinyong.alpha = 0;
							this.but_pinyong.enabled = false;
							this.but_jiepin.alpha =1;
							this.but_jiepin.enabled = true;
							break;
						default:
							this.img_pinyongyinzhang.alpha = 0;
							this.but_pinyong.alpha = 1;
							this.but_pinyong.enabled = true;
							this.but_jiepin.alpha =0;
							this.but_jiepin.enabled = false;
					}
				}
			}
	}


	//管理界面数据逻辑的处理
	public chulishujujiajujiegou(yeqian?:number,yeshu?:number){
		let guanlileixingleibiao:any = RES.getRes("yuangongbiao_json");
//接收服务端数据后，处理家具信息
		for(var bi = 0;bi<guanlileixingleibiao.length;bi ++){
			guanlileixingleibiao[bi].ygisshiyong = 0;
			guanlileixingleibiao[bi].ygislock = 0;
			for(var ki = 0;ki<Gerenshuxing.jiesuoyuangong.length;ki ++){
				if(guanlileixingleibiao[bi].id == Gerenshuxing.jiesuoyuangong[ki]){
					guanlileixingleibiao[bi].ygislock = 1;	
				}
				if(guanlileixingleibiao[bi].id == Gerenshuxing.shiyongyuangong[ki]){
					guanlileixingleibiao[bi].ygisshiyong = 1;
				}
			}
		}
		if(yeqian){
			this.panduanyeqian = yeqian;
		}
		let yuangongxianshi:any[] = [];
		let yuangongj:number = 0;
//遍历json表格，将所有分类;
		for (var i:number = 0;i < guanlileixingleibiao.length;i ++ ){
			if(guanlileixingleibiao[i].ygislock == 1){
				yuangongxianshi[yuangongj] = guanlileixingleibiao[i];
				yuangongj ++;				
			}
		}
//		console.log(xiaocaoquyuxianshi.length)
//判断需要的页面长度	
	this.yuangongyeshu = yuangongxianshi.length;

//判断每夜的显示内容
		if(yeqian == 1 && yeshu == 1){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 2){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 3){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 4){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 5){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 6){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 7){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 8){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 9){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 10){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 11){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 12){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 13){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 14){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 15){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 16){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 17){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 18){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 19){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 20){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 21){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 22){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 23){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 24){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 25){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 26){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 27){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 28){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 29){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}

		if(yeqian == 1 && yeshu == 30){
			var k = 1;
			for (var i = k * yeshu - 1,j = 1;i< k * yeshu ;i++,j++){
				this.panduanxianshineirong(j,yuangongxianshi,i);	
			}
		}
	}
}
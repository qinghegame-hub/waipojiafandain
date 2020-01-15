class Danjujiemian extends eui.Component implements  eui.UIComponent {
	public danjuguanlizu:eui.Group;
	public danjuguanli0:eui.Group;
	public di1gezu0:eui.Group;
	public img_danjuneirong0:eui.Image;
	public danjubiaoti0:eui.Label;
	public danjubianhao0:eui.Label;
	public jiaoferen0:eui.Label;
	public fumianzhuangtai0:eui.Label;
	public jiaonajine0:eui.Label;
	public jiaonayuanyin0:eui.Label;
	public jinbi0:eui.Image;
	public but_jiaona0:eui.Button;
	public di1gezu1:eui.Group;
	public img_danjuneirong1:eui.Image;
	public danjubiaoti1:eui.Label;
	public danjubianhao1:eui.Label;
	public jiaoferen1:eui.Label;
	public fumianzhuangtai1:eui.Label;
	public jiaonajine1:eui.Label;
	public jiaonayuanyin1:eui.Label;
	public jinbi1:eui.Image;
	public but_jiaona1:eui.Button;
	public img_weichuli:eui.Image;



	public danjuyeshu:number;
	public danjuyeshuxianshi:number;

	public di1geid:string;
	public di2geid:string;


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
		//点击装修界面的第一个坑的解锁时触发
		this.but_jiaona0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi1gejiesuo,this);
		//点击装修界面的第2个坑的解锁时触发
		this.but_jiaona1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjidi2gejiesuo,this);
	}

	protected dianjidi1gejiesuo(){
		Weblianjie.fasongshuju("code:022","{" + '"danjuid"' +":"+ '"' + this.di1geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}

	protected dianjidi2gejiesuo(){
		Weblianjie.fasongshuju("code:022","{" + '"danjuid"' +":"+ '"' + this.di2geid + '"' +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}


	//修改饭店界面的家具的小吃区域显示内容和判断使用是否成功
	public  tongzhizhujiemain1(id:string){
		this.di1geid = id;
	}

	public  tongzhizhujiemain2(id:string){
		this.di2geid = id;
	}

	//判断每个显示格子的具体显示内容
	protected panduanxianshineirong (leixingxuhao:number,leixingdizhi:any,leixingxiabiao:any){
			if(leixingxuhao == 1){
//				console.log(leixingxuhao,leixingdizhi,leixingxiabiao);
				if(leixingdizhi[leixingxiabiao] !== undefined){
						this.img_danjuneirong0.source = "img_danjuneirong_png";
						this.danjubiaoti0.text = leixingdizhi[leixingxiabiao].danjuname;
						this.danjubianhao0.text = leixingdizhi[leixingxiabiao].serial;
						this.jiaoferen0.text = Gerenshuxing.uid;
						this.fumianzhuangtai0.text = "总收入：-" + leixingdizhi[leixingxiabiao].debuff + "%";
						this.jiaonajine0.text = "- " + leixingdizhi[leixingxiabiao].pay;
						this.jiaonayuanyin0.text = leixingdizhi[leixingxiabiao].reason;
						this.jinbi0.alpha = 1;
						this.but_jiaona0.alpha = 1;
						this.but_jiaona0.enabled = true;
						this.tongzhizhujiemain1(leixingdizhi[leixingxiabiao].id);
					}else{
						this.img_danjuneirong0.source = "";
						this.danjubiaoti0.text = "";
						this.danjubianhao0.text = "";
						this.jiaoferen0.text = "";
						this.fumianzhuangtai0.text = "";
						this.jiaonajine0.text = "";
						this.jiaonayuanyin0.text = "";
						this.but_jiaona0.alpha = 0;
						this.but_jiaona0.enabled = false;
						this.jinbi0.alpha = 0;
					}	
			}

			if(leixingxuhao == 2){
				if(leixingdizhi[leixingxiabiao] !== undefined){
						this.img_danjuneirong1.source = "img_danjuneirong_png";
						this.danjubiaoti1.text = leixingdizhi[leixingxiabiao].danjuname;
						this.danjubianhao1.text = leixingdizhi[leixingxiabiao].serial;
						this.jiaoferen1.text = Gerenshuxing.uid;
						this.fumianzhuangtai1.text = "总收入：-" + leixingdizhi[leixingxiabiao].debuff + "%";
						this.jiaonajine1.text = "- " + leixingdizhi[leixingxiabiao].pay;
						this.jiaonayuanyin1.text = leixingdizhi[leixingxiabiao].reason;
						this.jinbi1.alpha = 1;
						this.but_jiaona1.alpha = 1;
						this.but_jiaona1.enabled = true;
						this.tongzhizhujiemain2(leixingdizhi[leixingxiabiao].id);
					}else{
						this.img_danjuneirong1.source = "";
						this.danjubiaoti1.text = "";
						this.danjubianhao1.text = "";
						this.jiaoferen1.text = "";
						this.fumianzhuangtai1.text = "";
						this.jiaonajine1.text = "";
						this.jiaonayuanyin1.text = "";
						this.but_jiaona1.alpha = 0;
						this.but_jiaona1.enabled = false;
						this.jinbi1.alpha = 0;
					}
				
			}
	}

	//管理界面数据逻辑的处理
	public chulishujujiajujiegou(yeqian?:number,yeshu?:number){
		let guanlileixingleibiao:any = RES.getRes("danjubiao_json");
		let dangqiandanjuliebiao:any = [];
		let xunhuan:number = 0;
//接收服务端数据后，处理家具信息
		for(var bi = 0;bi<guanlileixingleibiao.length;bi ++){
			for(var ki = 0;ki<Gerenshuxing.yongyoudanju.length;ki ++){
				if(guanlileixingleibiao[bi].id == Gerenshuxing.yongyoudanju[ki]){
					dangqiandanjuliebiao[xunhuan] = guanlileixingleibiao[bi];
					xunhuan ++;
					break;
				};
			}
		}
//判断需要的页面长度	
		if(dangqiandanjuliebiao.length % 2 > 0){
			this.danjuyeshu = Math.floor(dangqiandanjuliebiao.length / 2 + 1);
		}else{
			this.danjuyeshu = dangqiandanjuliebiao.length / 2;
		}


//判断每夜的显示内容
		if(dangqiandanjuliebiao.length >= 1){
			this.img_weichuli.alpha = 0;
			if(yeqian == 1 && yeshu == 1){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}

			if(yeqian == 1 && yeshu == 2){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}

			if(yeqian == 1 && yeshu == 3){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}

			if(yeqian == 1 && yeshu == 4){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}

			if(yeqian == 1 && yeshu == 5){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}

			if(yeqian == 1 && yeshu == 6){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}

			if(yeqian == 1 && yeshu == 7){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}

			if(yeqian == 1 && yeshu == 8){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}

			if(yeqian == 1 && yeshu == 9){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}

			if(yeqian == 1 && yeshu == 10){
				var k = 2;
				for (var i = k * yeshu - 2,j = 1;i< k * yeshu ;i++,j++){
					this.panduanxianshineirong(j,dangqiandanjuliebiao,i);	
				}
			}
		}else{
			this.img_weichuli.alpha = 1;
			this.img_danjuneirong1.source = "";
			this.danjubiaoti1.text = "";
			this.danjubianhao1.text = "";
			this.jiaoferen1.text = "";
			this.fumianzhuangtai1.text = "";
			this.jiaonajine1.text = "";
			this.jiaonayuanyin1.text = "";
			this.but_jiaona1.alpha = 0;
			this.but_jiaona1.enabled = false;
			this.jinbi1.alpha = 0;
			this.img_danjuneirong0.source = "";
			this.danjubiaoti0.text = "";
			this.danjubianhao0.text = "";
			this.jiaoferen0.text = "";
			this.fumianzhuangtai0.text = "";
			this.jiaonajine0.text = "";
			this.jiaonayuanyin0.text = "";
			this.but_jiaona0.alpha = 0;
			this.but_jiaona0.enabled = false;
			this.jinbi0.alpha = 0;
		}				
	}
	
}
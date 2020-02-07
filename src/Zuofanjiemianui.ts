class Zuofanjiemianui extends eui.Component implements  eui.UIComponent {
	public zaotaizu:eui.Group;
	public img_xiaceng:eui.Image;
	public huoyantupian:eui.Image;
	public img_shangcengbudong:eui.Image;
	public dangqiantishi:eui.Image;
	public xiaoshitishi:eui.Image;
	public weilaitishi:eui.Image;
	public xiaoshitishitu:eui.Image;
	public weilaitishitu:eui.Image;
	public dangqiantishitu:eui.Image;
	public jindutiao:eui.Image;
	public dingbulan:eui.Image;
	public shijianwenzi:eui.Label;
	public caocaijinduwenzi:eui.Label;
	public shiwucishuwenzi:eui.Label;
	public but_queding:eui.Button;
	public lvsexuanxiang:eui.Image;
	public zisexuanxiang:eui.Image;
	public chengsexuanxiang:eui.Image;
	public youbiao:eui.Image;

	public shengyushijian:number = 0;

	public zhuandong:number = 0;
	public keshibaicishu:number = 0;
	public yaoqiuliebiao:any;
//	public zhengshiliebiao:any;
	public jindu:number = 0;
	public dangqianjindu:number = 0;

	public jishiqi:egret.Timer;

	public zhuangtai:string;

	public dangqianbuzou:number = 0;

	public buzouhao:number = 0;

	public xuqiuleixing1:any = 0;
	public xuqiumubiao1:any = 0;
	public fengezu1:any = [];

	public xuqiuleixing2:any = 0;
	public xuqiumubiao2:any = 0;
	public fengezu2:any = [];

	public xuqiuleixing3:any = 0;
	public xuqiumubiao3:any = 0;
	public fengezu3:any = [];

	public zhengquejieduan:number = 0;
	public xianshicai1:string = "";
	public xianshicai2:string = "";
	public xianshicai3:string = "";

	public zhengquequjian:number = 0;

	public zhuandongfangxiang:number = 1;

	public gundongdingshi:egret.Timer;

	public tupian:string;

	public dingshikaiguan:Boolean = true;




	public constructor() {
		super();
//		this.chushihua();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public chushihua(id?:any){
		let shijianbiao = RES.getRes("shipubiao_json");
		for(var i = 0;i<shijianbiao.length;i++){
			if(shijianbiao[i].id == id){
				this.shengyushijian = parseInt(shijianbiao[i].timeyaoqiu);
				this.zhuandong = parseInt(shijianbiao[i].zhuangdong);
				this.keshibaicishu =parseInt(shijianbiao[i].shibaishu);
				this.yaoqiuliebiao = shijianbiao[i].zuofan;
				this.tupian = shijianbiao[i].id;
			}
		}
		this.yaoqiuliebiao = this.yaoqiuliebiao.split(",") ;
		this.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP,this.queding,this);
		this.youbiao.x = this.jindutiao.x;
		this.youbiao.y = this.jindutiao.y;
		this.gongxupailie();
		this.shijianjisuan();
		this.donghuakai("kai");
/*		this.gundongdingshi = new egret.Timer(500,0);
		this.gundongdingshi.addEventListener(egret.TimerEvent.TIMER,this.kaishishijian,this);*/
	}

	public dingbuxianshi(){
		this.shijianwenzi.text = "" + Math.floor(this.shengyushijian / 60) + ":" + this.shengyushijian % 60;
		this.caocaijinduwenzi.text = "" + this.dangqianjindu / this.yaoqiuliebiao.length * 100 + "%";
		this.shiwucishuwenzi.text = "" + this.keshibaicishu;
	}

	public shijianjisuan(){
		this.jishiqi = null;
		if(this.dingshikaiguan == true){
			if(this.keshibaicishu <= 0){
				Gerenshuxing.zuocaichenggong = "false";
				this.fankuijiemian("shibai");
				}else if(this.shengyushijian > 0){
					this.jishiqi = new egret.Timer(1000,1);
					this.jishiqi.addEventListener(egret.TimerEvent.TIMER,this.kaishishijian,this);
					this.jishiqi.start();
				}else{
					Gerenshuxing.zuocaichenggong = "false";
					this.fankuijiemian("shibai");
				}
		}
	}

	public kaishishijian(){
		this.shengyushijian -= 1;
		this.dingbuxianshi();
		this.shijianjisuan();
	}

	public guanbi(){
		 Gameguanli.Kongzhitai().zuofanjiemian("guan");
		 this.jishiqi.stop();
		 this.jishiqi = null;
		 this.dingshikaiguan = false;
	}

	public gongxupailie(){
		if(this.dangqianbuzou >= this.yaoqiuliebiao.length - 1){
			this.dangqianbuzou = -1;
		}
		switch(this.dangqianbuzou){
			case -1:
				this.weilaitishi.alpha = 0;
				this.dangqiantishi.alpha = 1;
				this.xiaoshitishi.alpha =1;
				this.weilaitishitu.source = "";
				this.fengezu1 = this.yaoqiuliebiao[this.yaoqiuliebiao.length - 1].split(":");
				this.xuqiuleixing1 = this.fengezu1[0];
				this.xuqiumubiao1 = this.fengezu1[1];
				this.fengezu2 = this.yaoqiuliebiao[this.yaoqiuliebiao.length -2].split(":");
				this.xuqiuleixing2 = this.fengezu2[0];
				this.xuqiumubiao2 = this.fengezu2[1];
				this.leixingfenzu1();
				this.leixingfenzu2();
//				this.leixingfenzu3();
				break;
			case 0:
				this.weilaitishi.alpha = 1;
				this.dangqiantishi.alpha = 1;
				this.xiaoshitishi.alpha =0;
				this.xiaoshitishitu.source = "";
				this.fengezu1 = this.yaoqiuliebiao[this.dangqianbuzou].split(":");
				this.xuqiuleixing1 = this.fengezu1[0];
				this.xuqiumubiao1 = this.fengezu1[1];
				this.fengezu3 = this.yaoqiuliebiao[this.dangqianbuzou + 1].split(":");
				this.xuqiuleixing3 = this.fengezu3[0];
				this.xuqiumubiao3 = this.fengezu3[1];
				this.leixingfenzu1();
//				this.leixingfenzu2();
				this.leixingfenzu3();
				break;
			default:
				this.weilaitishi.alpha = 1;
				this.dangqiantishi.alpha = 1;
				this.xiaoshitishi.alpha =1;
				this.fengezu1 = this.yaoqiuliebiao[this.dangqianbuzou].split(":");
				this.xuqiuleixing1 = this.fengezu1[0];
				this.xuqiumubiao1 = this.fengezu1[1];
				this.fengezu2 = this.yaoqiuliebiao[this.dangqianbuzou - 1].split(":");
				this.xuqiuleixing2 = this.fengezu2[0];
				this.xuqiumubiao2 = this.fengezu2[1];
				this.fengezu3 = this.yaoqiuliebiao[this.dangqianbuzou + 1].split(":");
				this.xuqiuleixing3 = this.fengezu3[0];
				this.xuqiumubiao3 = this.fengezu3[1];
				this.leixingfenzu1();
				this.leixingfenzu2();
				this.leixingfenzu3();
				break;		
		}

	}

	public gundongdonghua(){
		if(this.zhuandongfangxiang == 1){
			egret.Tween.get(this.youbiao).to({x:this.jindutiao.x + this.jindutiao.width - this.youbiao.width,y:this.jindutiao.y},this.zhuandong)
			.call(()=>{
				this.zhuandongfangxiang = -1;
				this.donghuakai("kai");
			})
		}else if(this.zhuandongfangxiang == -1){
			egret.Tween.get(this.youbiao).to({x:this.jindutiao.x,y:this.jindutiao.y},this.zhuandong)
			.call(()=>{
				this.zhuandongfangxiang = 1;
				this.donghuakai("kai");
			})
		}
	}


	public queding(){
		if(this.keshibaicishu > 0){
			if(this.youbiao.x <= this.jindutiao.x + this.jindutiao.width / 3 && this.youbiao.x >=0){
				if(this.zhengquejieduan == 1){
					this.dangqianjindu += 1;
					this.dangqianbuzou += 1;
					this.gongxupailie();
					Gameguanli.Kongzhitai().cuowutishixinxi("正确的操作方式，烹饪进度+1");
					this.tanchuwenzi("dui");
					this.panduanwancheng();
				}else{
					this.keshibaicishu -= 1;
					Gameguanli.Kongzhitai().cuowutishixinxi("错误的操作方式，失败次数+1");
					this.tanchuwenzi("cuo");
					this.panduanwancheng();
				}
			}else if(this.youbiao.x <= this.jindutiao.x + this.jindutiao.width / 2 && this.youbiao.x > this.jindutiao.x + this.jindutiao.width / 3){
				if(this.zhengquejieduan == 2){
					this.dangqianjindu += 1;
					this.dangqianbuzou += 1;
					this.gongxupailie();
					Gameguanli.Kongzhitai().cuowutishixinxi("正确的操作方式，烹饪进度+1");
					this.tanchuwenzi("dui");
					this.panduanwancheng();
				}else{
					this.keshibaicishu -= 1;
					Gameguanli.Kongzhitai().cuowutishixinxi("错误的操作方式，失败次数+1");
					this.tanchuwenzi("cuo");
					this.panduanwancheng();
				}
			}else if(this.youbiao.x > this.jindutiao.x + this.jindutiao.width / 2){
				if(this.zhengquejieduan == 3){
					this.dangqianjindu += 1;
					this.dangqianbuzou += 1;
					this.gongxupailie();
					Gameguanli.Kongzhitai().cuowutishixinxi("正确的操作方式，烹饪进度+1");
					this.tanchuwenzi("dui");
					this.panduanwancheng();
				}else{
					this.keshibaicishu -= 1;
					Gameguanli.Kongzhitai().cuowutishixinxi("错误的操作方式，失败次数+1");
					this.tanchuwenzi("cuo");
					this.panduanwancheng();
				}
			}
		}
		
	}

	public tanchuwenzi(canshu){
		if(canshu == "dui"){
			let ziyuanming = new Zuocaitanchuui();
			Gameguanli.Kongzhitai().zuofanui.addChild(ziyuanming);
			let suijizhi:number = Math.floor(Math.random() * 3) + 1;
			let tupian:string = "";
			switch(suijizhi){
				case 1:
					ziyuanming.tishitupian.source = "img_chenggong1_png";
					break;
				case 2:
					ziyuanming.tishitupian.source = "img_chenggong2_png";
					break;
				case 3:
					ziyuanming.tishitupian.source = "img_chenggong3_png";
					break;
			}
			ziyuanming.x = this.img_xiaceng.width / 2 - ziyuanming.width / 2;
			ziyuanming.y = this.img_xiaceng.height / 2 + ziyuanming.height / 2;
			egret.Tween.get(ziyuanming).to({x:ziyuanming.x,y:ziyuanming.y - 200},2000).call(()=>{
				Gameguanli.Kongzhitai().zuofanui.removeChild(ziyuanming)
			})
		}
		if(canshu == "cuo"){
			let ziyuanming = new Zuocaitanchuui();
			Gameguanli.Kongzhitai().zuofanui.addChild(ziyuanming);
			let suijizhi:number = Math.floor(Math.random() * 3) + 1;
			let tupian:string = "";
			switch(suijizhi){
				case 1:
					ziyuanming.tishitupian.source = "img_shibai1_png";
					break;
				case 2:
					ziyuanming.tishitupian.source = "img_shibai2_png";
					break;
				case 3:
					ziyuanming.tishitupian.source = "img_shibai3_png";
					break;
			}
			ziyuanming.x = this.img_xiaceng.width / 2 - ziyuanming.width / 2;
			ziyuanming.y = this.img_xiaceng.height / 2 + ziyuanming.height / 2;
			egret.Tween.get(ziyuanming).to({x:ziyuanming.x,y:ziyuanming.y - 200},2000).call(()=>{
				Gameguanli.Kongzhitai().zuofanui.removeChild(ziyuanming)
			})
		}
	}

	public panduanwancheng(){
		if(this.dangqianjindu >= this.yaoqiuliebiao.length){
			Gerenshuxing.zuocaichenggong = "true";
			this.fankuijiemian("chenggong");
		}
	}

	public fankuijiemian(shifouchenggon){
		let jianglijiemain = new Pengrenfankuiui();
		Gameguanli.Kongzhitai().zuofanui.addChild(jianglijiemain);
		jianglijiemain.jiangliicon0.source = this.tupian + "_png";
		jianglijiemain.qudinganniu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbi,this);
		if(shifouchenggon == "chenggong"){
			jianglijiemain.img_jianglibiaoti0.source = "img_pengrenchenggong_png";
			jianglijiemain.jianglishuliang0.text = "这道菜烹饪得很成功，食客实用后评价颇高！";
		}else if(shifouchenggon == "shibai"){
			jianglijiemain.img_jianglibiaoti0.source = "img_pengrenshibai_png";
			jianglijiemain.jianglishuliang0.text = "这道菜烹饪没有完成，食客仍在焦急等待！";
		}	
	}

	public donghuakai(num2){
		if(num2 == "kai"){
			this.gundongdonghua();
		}
	}

	public leixingfenzu1(){
		if(this.xuqiuleixing1 == "1"){
			this.xianshicai1 = "img_xiaohuo_png";
			this.xianshicai2 = "img_zhonghuo_png";
			this.xianshicai3 = "img_dahuo_png";
			this.lvsexuanxiang.source = "img_xiaohuo_png";
			this.zisexuanxiang.source = "img_zhonghuo_png";
			this.chengsexuanxiang.source = "img_dahuo_png";
			switch(this.xuqiumubiao1){
				case "1":
					this.dangqiantishitu.source = "img_xiaohuo_png";
					this.zhengquejieduan = 1;
					break;
				case "2":
					this.dangqiantishitu.source = "img_zhonghuo_png";
					this.zhengquejieduan = 2;
					break;
				case "3":
					this.dangqiantishitu.source = "img_dahuo_png";
					this.zhengquejieduan = 3;
					break;
			}
		}else
		if(this.xuqiuleixing1 == "2"){
			this.xianshicai1 = "img_baicai1_png";
			this.xianshicai2 = "img_lajiao_png";
			this.xianshicai3 = "img_rou1_png";
			this.lvsexuanxiang.source = "img_baicai1_png";
			this.zisexuanxiang.source = "img_lajiao_png";
			this.chengsexuanxiang.source = "img_rou1_png";
			switch(this.xuqiumubiao1){
				case "1":
					this.dangqiantishitu.source = "img_baicai1_png";
					this.zhengquejieduan = 1;
					break;
				case "2":
					this.dangqiantishitu.source = "img_lajiao_png";
					this.zhengquejieduan = 2;
					break;
				case "3":
					this.dangqiantishitu.source = "img_rou1_png";
					this.zhengquejieduan = 3;
					break;
			}
		}
	}

	public leixingfenzu2(){
		if(this.xuqiuleixing2 == "1"){
			this.xianshicai1 = "img_xiaohuo_png";
			this.xianshicai2 = "img_zhonghuo_png";
			this.xianshicai3 = "img_dahuo_png";
			switch(this.xuqiumubiao2){
				case "1":
					this.xiaoshitishitu.source = "img_xiaohuo_png";
					break;
				case "2":
					this.xiaoshitishitu.source = "img_zhonghuo_png";
					break;
				case "3":
					this.xiaoshitishitu.source = "img_dahuo_png";
					break;
			}
		}else
		if(this.xuqiuleixing2 == "2"){
			this.xianshicai1 = "img_baicai1_png";
			this.xianshicai2 = "img_lajiao_png";
			this.xianshicai3 = "img_rou1_png";
			switch(this.xuqiumubiao2){
				case "1":
					this.xiaoshitishitu.source = "img_baicai1_png";
					break;
				case "2":
					this.xiaoshitishitu.source = "img_lajiao_png";
					break;
				case "3":
					this.xiaoshitishitu.source = "img_rou1_png";
					break;
			}
		}
	}

	public leixingfenzu3(){
		if(this.xuqiuleixing3 == "1"){
			this.xianshicai1 = "img_xiaohuo_png";
			this.xianshicai2 = "img_zhonghuo_png";
			this.xianshicai3 = "img_dahuo_png";
			switch(this.xuqiumubiao3){
				case "1":
					this.weilaitishitu.source = "img_xiaohuo_png";
					break;
				case "2":
					this.weilaitishitu.source = "img_zhonghuo_png";
					break;
				case "3":
					this.weilaitishitu.source = "img_dahuo_png";
					break;
			}
		}else
		if(this.xuqiuleixing3 == "2"){
			this.xianshicai1 = "img_baicai1_png";
			this.xianshicai2 = "img_lajiao_png";
			this.xianshicai3 = "img_rou1_png";
			switch(this.xuqiumubiao3){
				case "1":
					this.weilaitishitu.source = "img_baicai1_png";
					break;
				case "2":
					this.weilaitishitu.source = "img_lajiao_png";
					break;
				case "3":
					this.weilaitishitu.source = "img_rou1_png";
					break;
			}
		}
	}



}
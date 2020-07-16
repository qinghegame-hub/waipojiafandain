class Dajiejiemian extends eui.Component implements  eui.UIComponent {
	public sanrenzu8:eui.Group;
	public sanrentubiao8:eui.Image;
	public sanrentouxiang8:eui.Image;
	public sanrentouxiangzu8:eui.Group;
	public sanrentouxiangkuang8:eui.Image;
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
	public xianshizu:eui.Group;
	public teshuxianshi:eui.Image;
	public teshuxianshi0:eui.Image;
	public teshuxianshi1:eui.Image;
	public teshuxianshi2:eui.Image;
	public teshuxianshi3:eui.Image;
	public teshuxianshi4:eui.Image;
	public teshuxianshi5:eui.Image;
	public teshuxianshi6:eui.Image;
	public teshuxianshi7:eui.Image;
	public teshuxianshi8:eui.Image;
	public teshuxianshi9:eui.Image;
	public teshuxianshi10:eui.Image;
	public teshuxianshi11:eui.Image;
	public teshuxianshi12:eui.Image;
	public teshuxianshi13:eui.Image;
	public teshuxianshi14:eui.Image;
	public teshuxianshi15:eui.Image;
	public teshuxianshi16:eui.Image;
	public teshuxianshi17:eui.Image;
	public teshuxianshi18:eui.Image;
	public teshuxianshi19:eui.Image;
	public teshuxianshi20:eui.Image;
	public teshuxianshi21:eui.Image;
	public teshuxianshi22:eui.Image;
	public teshuxianshi23:eui.Image;
	public teshuxianshi24:eui.Image;
	public teshuxianshi25:eui.Image;
	public img_dianpu:eui.Image;
	public juesezu:eui.Group;
	public juesetubiao:eui.Image;
	public touxiang:eui.Image;
	public youbiaotouxiangzu:eui.Group;
	public touxiangkuang:eui.Image;
	public sanrenzu:eui.Group;
	public sanrentubiao:eui.Image;
	public sanrentouxiang:eui.Image;
	public sanrentouxiangzu:eui.Group;
	public sanrentouxiangkuang:eui.Image;
	public sanrenzu0:eui.Group;
	public sanrentubiao0:eui.Image;
	public sanrentouxiang0:eui.Image;
	public sanrentouxiangzu0:eui.Group;
	public sanrentouxiangkuang0:eui.Image;
	public sanrenzu1:eui.Group;
	public sanrentubiao1:eui.Image;
	public sanrentouxiang1:eui.Image;
	public sanrentouxiangzu1:eui.Group;
	public sanrentouxiangkuang1:eui.Image;
	public sanrenzu2:eui.Group;
	public sanrentubiao2:eui.Image;
	public sanrentouxiang2:eui.Image;
	public sanrentouxiangzu2:eui.Group;
	public sanrentouxiangkuang2:eui.Image;
	public sanrenzu3:eui.Group;
	public sanrentubiao3:eui.Image;
	public sanrentouxiang3:eui.Image;
	public sanrentouxiangzu3:eui.Group;
	public sanrentouxiangkuang3:eui.Image;
	public sanrenzu4:eui.Group;
	public sanrentubiao4:eui.Image;
	public sanrentouxiang4:eui.Image;
	public sanrentouxiangzu4:eui.Group;
	public sanrentouxiangkuang4:eui.Image;
	public sanrenzu5:eui.Group;
	public sanrentubiao5:eui.Image;
	public sanrentouxiang5:eui.Image;
	public sanrentouxiangzu5:eui.Group;
	public sanrentouxiangkuang5:eui.Image;
	public sanrenzu6:eui.Group;
	public sanrentubiao6:eui.Image;
	public sanrentouxiang6:eui.Image;
	public sanrentouxiangzu6:eui.Group;
	public sanrentouxiangkuang6:eui.Image;
	public sanrenzu7:eui.Group;
	public sanrentubiao7:eui.Image;
	public sanrentouxiang7:eui.Image;
	public sanrentouxiangzu7:eui.Group;
	public sanrentouxiangkuang7:eui.Image;
	public kaishianniuzu:eui.Group;
	public but_shaizi:eui.Button;
	public img_tilitishibj:eui.Image;
	public tilixiaohao:eui.Label;






	public sanrenjinzuzu:any = [0,0,0,0,0,0,0,0,0,0];//散人逛街入驻组
	public sanrenweizhi:any = [0,0,0,0,0,0,0,0,0,0];//散人当前位置
	public sanrendianshu:any = [0,0,0,0,0,0,0,0,0,0];//散人当前掷出点数
	public sanren1xinxi:any = undefined;
	public sanren2xinxi:any= undefined;
	public sanren3xinxi:any= undefined;
	public sanren4xinxi:any= undefined;
	public sanren5xinxi:any= undefined;
	public sanren6xinxi:any= undefined;
	public sanren7xinxi:any= undefined;
	public sanren8xinxi:any= undefined;
	public sanren9xinxi:any= undefined;
	public sanren10xinxi:any= undefined;
	public sanrenbuchongdingshiqi:egret.Timer;//散人补充定时器
	public sanrenxingzoudingshiqi:egret.Timer;//散人行走定时器


	public dangqianbushu:number = 1;//当前所处的台阶步数;
	public dangqiansaizi:number = 1;//当前筛子抛出的点数;
	public dangqianshengyucishu:number = 0;//当前剩余的筛子次数;

	public jiedaoteshushijianzu:any = [];//街道特殊事件组;

	public jiedaobiao:any//街道表;
	public jiedaosuijibiao:any//街道随机触发表;
	public jiedaopeizhi:any//街道配置;
	public suijichufaliebiao:any//随机触发列表;
	public suijipeizhi:any//随机配置;
	public kouchuleixing:any//扣除材料类型;
	public kouchushuliang:any//扣除材料数量;
	public jianglileixing:any//奖励材料类型；
	public jianglishuliang:any//奖励材料数量;
	public suijichufaid:any//随机触发的id;
	public fandianpeizhi:any//饭店配置;
	public keyishougou:boolean = false;//是否可以收购;

	public guyuan1leixing:number;//雇员1的类型;
	public guyuan2leixing:number;//雇员2的类型;
	public guyuan3leixing:number;//雇员3的类型;

	public guyuan1mingzi:string;
	public guyuan2mingzi:string;
	public guyuan3mingzi:string;

	public guyuan1touxiang:string;
	public guyuan2touxiang:string;
	public guyuan3touxiang:string;

	public guyuan1jiacheng:number;
	public guyuan2jiacheng:number;
	public guyuan3jiacheng:number;

	public zhuanchangjiemian:Dianpurukou;//转场入口界面;
	public suijijiemian:any;//弹出界面;
	public jianglijiemian:Jianglijiesuanui;
	public fandianjiemian:Dianpufandian;//饭店类店铺界面;
	public fandianguyuan:Dianpuzhaopinui;//店铺招聘界面;


	public chaoshishuliang:any = [0,0,0,0,0,0,1,1,1];//超市道具数量[0,0,0,0,0,0]
	public chaoshijiage:any = [0,0,0,0,0,0,0,0,0];//超市道具价格[0,0,0,0,0,0]
	public chaoshiid:any= [0,0,0,0,0,0,"1_1","1_2","1_3"];//超市道具ID[0,0,0,0,0,0]
	public chaoshitupian:any= [0,0,0,0,0,0,"img_chaoshifudai1_png","img_chaoshifudai2_png","img_chaoshifudai3_png"];//超市图片[0,0,0,0,0,0]
	public chaoshimingcheng:any= [0,0,0,0,0,0,"日用福袋","男士福袋","数码福袋"];//超市道具名称[0,0,0,0,0,0]
	public chaoshiteshu:boolean;//超市第一个格子是否特价
	public chaoshigoumaiui:Chaoshishangdianui;//超市商店界面


	public yaodianshuliang:any = [0,0,0,0,0,0,1,1,1];//超市道具数量[0,0,0,0,0,0]
	public yaodianjiage:any = [0,0,0,0,0,0,0,0,0];//超市道具价格[0,0,0,0,0,0]
	public yaodianid:any= [0,0,0,0,0,0,0,0,0];//超市道具ID[0,0,0,0,0,0]
	public yaodiantupian:any= [0,0,0,0,0,0,0,0,0];//超市图片[0,0,0,0,0,0]
	public yaodianmingcheng:any= [0,0,0,0,0,0,0,0,0];//超市道具名称[0,0,0,0,0,0]
	public yaodianteshu:boolean;//超市第一个格子是否特价

	public caishichangshuliang:any = [0,0,0,0,0,0,1,1,1];//超市道具数量[0,0,0,0,0,0]
	public caishichangjiage:any = [0,0,0,0,0,0,0,0,0];//超市道具价格[0,0,0,0,0,0]
	public caishichangid:any= [0,0,0,0,0,0,0,0,0];//超市道具ID[0,0,0,0,0,0]
	public caishichangtupian:any= [0,0,0,0,0,0,0,0,0];//超市图片[0,0,0,0,0,0]
	public caishichangmingcheng:any= [0,0,0,0,0,0,0,0,0];//超市道具名称[0,0,0,0,0,0]
	public caishichangteshu:boolean;//超市第一个格子是否特价

	public peixunshuliang:any = [0,0,0,0,0,0,1,1,1];//超市道具数量[0,0,0,0,0,0]
	public peixunjiage:any = [0,0,0,0,0,0,0,0,0];//超市道具价格[0,0,0,0,0,0]
	public peixunid:any= [0,0,0,0,0,0,0,0,0];//超市道具ID[0,0,0,0,0,0]
	public peixuntupian:any= [0,0,0,0,0,0,0,0,0];//超市图片[0,0,0,0,0,0]
	public peixunmingcheng:any= [0,0,0,0,0,0,0,0,0];//超市道具名称[0,0,0,0,0,0]
	public peixunteshu:boolean;//超市第一个格子是否特价

	public daojutipsui:Daojutipsui;

	public dajiexinshouyindao:Xinshouyindaodakuang;



	public constructor() {
		super();
		this.chaoshigoumaiui = new Chaoshishangdianui();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
//		this.chushihua();
	}

	public yindao_0_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.dajiexinshouyindao.dakuangzu.alpha = 0;
		this.dajiexinshouyindao.xiaokuangzu.alpha = 1;
		this.dajiexinshouyindao.yindaoshouzhi.alpha = 1;
		this.dajiexinshouyindao.yindaoshouzhi.source = "img_yindaoxiashouzhi_png";
		this.dajiexinshouyindao.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.512 - this.dajiexinshouyindao.yindaoshouzhi.width / 2;
		this.dajiexinshouyindao.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.663 - this.dajiexinshouyindao.yindaoshouzhi.height;
		this.dajiexinshouyindao.xiaokuangzu.x = this.dajiexinshouyindao.yindaoshouzhi.x - this.dajiexinshouyindao.xiaokuangzu.width / 2;
		this.dajiexinshouyindao.xiaokuangzu.y = this.dajiexinshouyindao.yindaoshouzhi.y - this.dajiexinshouyindao.yindaoshouzhi.height;
		this.dajiexinshouyindao.xiaokuanwenzi.text = "点击“骰子”，随机前往街道某处。";
		this.dajiexinshouyindao.heisezhezhaodianji.touchEnabled = true;
		this.dajiexinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_2,this);
	}

	public yindao_0_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.removeChild(this.dajiexinshouyindao);
	}

	public chushihua(){
		if(Gerenshuxing.guideuiyindao == 21){
			Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"22"'+"}");
			this.dajiexinshouyindao = new Xinshouyindaodakuang();
			this.addChild(this.dajiexinshouyindao);
			this.dajiexinshouyindao.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.dajiexinshouyindao.dakuangzu.width / 2;
			this.dajiexinshouyindao.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.dajiexinshouyindao.dakuangzu.height / 2;
			this.dajiexinshouyindao.xiaokuangzu.alpha = 0;
			this.dajiexinshouyindao.dakuangzu.alpha = 1;
			this.dajiexinshouyindao.yindaoshouzhi.alpha = 0;
			this.dajiexinshouyindao.xiaokuangzu.touchEnabled = false;
			this.dajiexinshouyindao.dakuangzu.touchEnabled = false;
			this.dajiexinshouyindao.yindaoshouzhi.touchEnabled = false;
			this.dajiexinshouyindao.dakuangwenzi.text = "这里是我们街道，每天都会发生各式各样的事情，没事常来街道转转总是好的！";
			this.dajiexinshouyindao.heisezhezhaodianji.touchEnabled = true;
			this.dajiexinshouyindao.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_1,this);
		}
		this.jiedaobiao = Gerenshuxing.jiedaobiao;
		this.jiedaosuijibiao = Gerenshuxing.jiedaosuijibiao;
		this.kaishianniuzu.alpha = 1;
		this.but_shaizi.enabled = true;
		this.but_shaizi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjisaizi,this);
		this.juesezu.x = this.taijie0.x;
		this.juesezu.y = this.taijie0.y;
		this.dangqianbushu = 1;
		this.dangqiansaizi = 1;
		this.dangqianshengyucishu = 0;
		this.youbiaotouxiang();
		this.tilixiaohaochushi();
		/*
		初始化街道特殊事件
		*/
		this.jiedaoteshushijian();
		/*
		散人行动和补充初始化
		*/
		this.sanrenjinzuzu = [0,0,0,0,0,0,0,0,0,0];//散人逛街入驻组
		this.sanrenweizhi = [0,0,0,0,0,0,0,0,0,0];//散人当前位置
		this.sanrendianshu = [0,0,0,0,0,0,0,0,0,0];//散人当前掷出点数
		this.sanren1xinxi = undefined;
		this.sanren2xinxi= undefined;
		this.sanren3xinxi= undefined;
		this.sanren4xinxi= undefined;
		this.sanren5xinxi= undefined;
		this.sanren6xinxi= undefined;
		this.sanren7xinxi= undefined;
		this.sanren8xinxi= undefined;
		this.sanren9xinxi= undefined;
		this.sanren10xinxi= undefined;
		/*
		散人的显示初始化
		*/
		if(this.sanrenjinzuzu[0] == 0){
			this.sanrenzu.alpha = 0;
		}
		if(this.sanrenjinzuzu[1] == 0){
			this.sanrenzu0.alpha = 0;
		}
		if(this.sanrenjinzuzu[2] == 0){
			this.sanrenzu1.alpha = 0;
		}
		if(this.sanrenjinzuzu[3] == 0){
			this.sanrenzu2.alpha = 0;
		}
		if(this.sanrenjinzuzu[4] == 0){
			this.sanrenzu3.alpha = 0;
		}
		if(this.sanrenjinzuzu[5] == 0){
			this.sanrenzu4.alpha = 0;
		}
		if(this.sanrenjinzuzu[6] == 0){
			this.sanrenzu5.alpha = 0;
		}
		if(this.sanrenjinzuzu[7] == 0){
			this.sanrenzu6.alpha = 0;
		}
		if(this.sanrenjinzuzu[8] == 0){
			this.sanrenzu7.alpha = 0;
		}
		if(this.sanrenjinzuzu[9] == 0){
			this.sanrenzu8.alpha = 0;
		}
		/*
		开启定时器，补充逛街散人
		*/
		this.sanrenbuchongdingshi();
		/*
		开启定时器，进行散人行走
		*/
		this.sanrenxingzoudingshi();
	}

	public sanrenbuchongdingshi(){
		if(this.parent){
			let suijishijian = Math.floor(Math.random() * 10000) + 5000;
			this.sanrenbuchongdingshiqi = new egret.Timer(suijishijian,1)
			this.sanrenbuchongdingshiqi.addEventListener(egret.TimerEvent.TIMER,this.kaishibuchongsanren,this);
			this.sanrenbuchongdingshiqi.start();
		}else{
			this.sanrenbuchongdingshiqi = null;
		} 

	}

	public kaishibuchongsanren(){
		if(this.parent){
			if(this.sanrenjinzuzu[0] == 0 || this.sanrenjinzuzu[1] == 0 || this.sanrenjinzuzu[2] == 0
			|| this.sanrenjinzuzu[3] == 0 || this.sanrenjinzuzu[4] == 0 || this.sanrenjinzuzu[5] == 0
			|| this.sanrenjinzuzu[6] == 0 || this.sanrenjinzuzu[7] == 0 || this.sanrenjinzuzu[8] == 0
			|| this.sanrenjinzuzu[9] == 0)
			{
				Weblianjie.fasongshuju("code:170","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +"}");
			}
			/*
			继续开始定时补充人
			*/
			this.sanrenbuchongdingshi();
		}
	}

	public buchongsanrenzhanwei(sanrenxinxi:any){
		if(this.parent){
			if(this.sanrenjinzuzu[0] == 0){
				this.sanren1xinxi = sanrenxinxi;
				this.sanrenjinzuzu[0] = 1;
				this.sanrenzu.alpha = 1;
				this.sanren1touxiang(this.sanren1xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[0] = suijiweizhi;
				this.sanrenweizhichushihua(0);
			}else if(this.sanrenjinzuzu[1] == 0){
				this.sanren2xinxi = sanrenxinxi;
				this.sanrenjinzuzu[1] = 1;
				this.sanrenzu0.alpha = 1;
				this.sanren2touxiang(this.sanren2xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[1] = suijiweizhi;
				this.sanrenweizhichushihua(1);
			}else if(this.sanrenjinzuzu[2] == 0){
				this.sanren3xinxi = sanrenxinxi;
				this.sanrenjinzuzu[2] = 1;
				this.sanrenzu1.alpha = 1;
				this.sanren3touxiang(this.sanren3xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[2] = suijiweizhi;
				this.sanrenweizhichushihua(2);
			}else if(this.sanrenjinzuzu[3] == 0){
				this.sanren4xinxi = sanrenxinxi;
				this.sanrenjinzuzu[3] = 1;
				this.sanrenzu2.alpha = 1;
				this.sanren4touxiang(this.sanren4xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[3] = suijiweizhi;
				this.sanrenweizhichushihua(3);
			}else if(this.sanrenjinzuzu[4] == 0){
				this.sanren5xinxi = sanrenxinxi;
				this.sanrenjinzuzu[4] = 1;
				this.sanrenzu3.alpha = 1;
				this.sanren5touxiang(this.sanren5xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[4] = suijiweizhi;
				this.sanrenweizhichushihua(4);
			}else if(this.sanrenjinzuzu[5] == 0){
				this.sanren6xinxi = sanrenxinxi;
				this.sanrenjinzuzu[5] = 1;
				this.sanrenzu4.alpha = 1;
				this.sanren6touxiang(this.sanren6xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[5] = suijiweizhi;
				this.sanrenweizhichushihua(5);
			}else if(this.sanrenjinzuzu[6] == 0){
				this.sanren7xinxi = sanrenxinxi;
				this.sanrenjinzuzu[6] = 1;
				this.sanrenzu5.alpha = 1;
				this.sanren7touxiang(this.sanren7xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[6] = suijiweizhi;
				this.sanrenweizhichushihua(6);
			}else if(this.sanrenjinzuzu[7] == 0){
				this.sanren8xinxi = sanrenxinxi;
				this.sanrenjinzuzu[7] = 1;
				this.sanrenzu6.alpha = 1;
				this.sanren8touxiang(this.sanren8xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[7] = suijiweizhi;
				this.sanrenweizhichushihua(7);
			}else if(this.sanrenjinzuzu[8] == 0){
				this.sanren9xinxi = sanrenxinxi;
				this.sanrenjinzuzu[8] = 1;
				this.sanrenzu7.alpha = 1;
				this.sanren9touxiang(this.sanren9xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[8] = suijiweizhi;
				this.sanrenweizhichushihua(8);
			}else if(this.sanrenjinzuzu[9] == 0){
				this.sanren10xinxi = sanrenxinxi;
				this.sanrenjinzuzu[9] = 1;
				this.sanrenzu8.alpha = 1;
				this.sanren10touxiang(this.sanren10xinxi.touxiang);
				let suijiweizhi = Math.floor(Math.random() * 6) + 1;
				this.sanrenweizhi[9] = suijiweizhi;
				this.sanrenweizhichushihua(9);
			}
		}
	}

	public sanrenweizhichushihua(duixiang:number){
		if(duixiang == 0){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[0]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[0]);
			this.sanrenzu.x = sanrenX;
			this.sanrenzu.y = sanrenY;
		}else if(duixiang == 1){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[1]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[1]);
			this.sanrenzu0.x = sanrenX;
			this.sanrenzu0.y = sanrenY;
		}else if(duixiang == 2){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[2]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[2]);
			this.sanrenzu1.x = sanrenX;
			this.sanrenzu1.y = sanrenY;
		}else if(duixiang == 3){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[3]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[3]);
			this.sanrenzu2.x = sanrenX;
			this.sanrenzu2.y = sanrenY;
		}else if(duixiang == 4){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[4]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[4]);
			this.sanrenzu3.x = sanrenX;
			this.sanrenzu3.y = sanrenY;
		}else if(duixiang == 5){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[5]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[5]);
			this.sanrenzu4.x = sanrenX;
			this.sanrenzu4.y = sanrenY;
		}else if(duixiang == 6){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[6]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[6]);
			this.sanrenzu5.x = sanrenX;
			this.sanrenzu5.y = sanrenY;
		}else if(duixiang == 7){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[7]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[7]);
			this.sanrenzu6.x = sanrenX;
			this.sanrenzu6.y = sanrenY;
		}else if(duixiang == 8){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[8]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[8]);
			this.sanrenzu7.x = sanrenX;
			this.sanrenzu7.y = sanrenY;
		}else if(duixiang == 9){
			let sanrenX:number = this.sanrenX(this.sanrenweizhi[9]);
			let sanrenY:number = this.sanrenY(this.sanrenweizhi[9]);
			this.sanrenzu8.x = sanrenX;
			this.sanrenzu8.y = sanrenY;
		}
	}

	public sanrenX(weizhi:number){
		let zuizhongX:number = this.taijie0.x;
		switch(weizhi){
			case 0:
				zuizhongX = this.taijie0.x;
				return zuizhongX;
			case 1:
				zuizhongX = this.taijie1.x;
				return zuizhongX;
			case 2:
				zuizhongX = this.taijie2.x;
				return zuizhongX;
			case 3:
				zuizhongX = this.taijie3.x;
				return zuizhongX;
			case 4:
				zuizhongX = this.taijie4.x;
				return zuizhongX;
			case 5:
				zuizhongX = this.taijie5.x;
				return zuizhongX;
		}
	}

	public sanrenY(weizhi:number){
		let zuizhongY:number = this.taijie0.y;
		switch(weizhi){
			case 0:
				zuizhongY = this.taijie0.y;
				return zuizhongY;
			case 1:
				zuizhongY = this.taijie1.y;
				return zuizhongY;
			case 2:
				zuizhongY = this.taijie2.y;
				return zuizhongY;
			case 3:
				zuizhongY = this.taijie3.y;
				return zuizhongY;
			case 4:
				zuizhongY = this.taijie4.y;
				return zuizhongY;
			case 5:
				zuizhongY = this.taijie5.y;
				return zuizhongY;
		}
	}

	/*
	散人行走定时
	*/
	public sanrenxingzoudingshi(){
		if(this.parent){
			let suijishijian = Math.floor(Math.random() * 1000) + 7000;
			this.sanrenxingzoudingshiqi = new egret.Timer(suijishijian,1)
			this.sanrenxingzoudingshiqi.addEventListener(egret.TimerEvent.TIMER,this.kaishisanrenxingzou,this);
			this.sanrenxingzoudingshiqi.start();
		}else{
			this.sanrenxingzoudingshiqi = null;
		} 
	}

	public kaishisanrenxingzou(){
		if(this.parent){
			if(this.sanrenjinzuzu[0] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[0] = 0;
					this.sanrenweizhi[0] = 0;
					this.sanrendianshu[0] = 0;
					this.sanrenzu.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[0] = sanrensaizi;
						this.sanrenxingzou_1();
					}
				}
			}
			if(this.sanrenjinzuzu[1] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[1] = 0;
					this.sanrenweizhi[1] = 0;
					this.sanrendianshu[1] = 0;
					this.sanrenzu0.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[1] = sanrensaizi;
						this.sanrenxingzou_2();
					}
				}
			}
			if(this.sanrenjinzuzu[2] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[2] = 0;
					this.sanrenweizhi[2] = 0;
					this.sanrendianshu[2] = 0;
					this.sanrenzu1.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[2] = sanrensaizi;
						this.sanrenxingzou_3();
					}
				}
			}
			if(this.sanrenjinzuzu[3] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[3] = 0;
					this.sanrenweizhi[3] = 0;
					this.sanrendianshu[3] = 0;
					this.sanrenzu2.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let sanrensaizi = Math.floor(Math.random() * 6) + 1
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[3] = sanrensaizi;
						this.sanrenxingzou_4();
					}
				}
			}
			if(this.sanrenjinzuzu[4] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[4] = 0;
					this.sanrenweizhi[4] = 0;
					this.sanrendianshu[4] = 0;
					this.sanrenzu3.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let sanrensaizi = Math.floor(Math.random() * 6) + 1
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[4] = sanrensaizi;
						this.sanrenxingzou_5();
					}
				}
			}
			if(this.sanrenjinzuzu[5] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[5] = 0;
					this.sanrenweizhi[5] = 0;
					this.sanrendianshu[5] = 0;
					this.sanrenzu4.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let sanrensaizi = Math.floor(Math.random() * 6) + 1
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[5] = sanrensaizi;
						this.sanrenxingzou_6();
					}
				}
			}
			if(this.sanrenjinzuzu[6] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[6] = 0;
					this.sanrenweizhi[6] = 0;
					this.sanrendianshu[6] = 0;
					this.sanrenzu5.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let sanrensaizi = Math.floor(Math.random() * 6) + 1
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[6] = sanrensaizi;
						this.sanrenxingzou_7();
					}
				}
			}
			if(this.sanrenjinzuzu[7] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[7] = 0;
					this.sanrenweizhi[7] = 0;
					this.sanrendianshu[7] = 0;
					this.sanrenzu6.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let sanrensaizi = Math.floor(Math.random() * 6) + 1
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[7] = sanrensaizi;
						this.sanrenxingzou_8();
					}
				}
			}
			if(this.sanrenjinzuzu[8] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[8] = 0;
					this.sanrenweizhi[8] = 0;
					this.sanrendianshu[8] = 0;
					this.sanrenzu7.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let sanrensaizi = Math.floor(Math.random() * 6) + 1
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[8] = sanrensaizi;
						this.sanrenxingzou_9();
					}
				}
			}
			if(this.sanrenjinzuzu[9] == 1){
				/*
				一定几率删除散人
				*/
				let shanchushanren = Math.floor(Math.random() * 100)
				if(shanchushanren > 90){
					this.sanrenjinzuzu[9] = 0;
					this.sanrenweizhi[9] = 0;
					this.sanrendianshu[9] = 0;
					this.sanrenzu8.alpha = 0;
				}else{
					/*
					散人投掷塞子
					*/
					let sanrensaizi = Math.floor(Math.random() * 6) + 1
					let xingzoujilv = Math.floor(Math.random() * 100);
					if(xingzoujilv > 50){
						let sanrensaizi = Math.floor(Math.random() * 6) + 1
						this.sanrendianshu[9] = sanrensaizi;
						this.sanrenxingzou_10();
					}
				}
			}
			/*
			继续开始行走人
			*/
			this.sanrenxingzoudingshi();
		}
	}

	public sanrenxingzou_1(){
		if(this.parent){
			if(this.sanrendianshu[0] > 0){
				switch(this.sanrenweizhi[0]){
					case 1:
						this.sanrenweizhi[0] = 2;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 2:
						this.sanrenweizhi[0] = 3;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 3:
						this.sanrenweizhi[0] = 4;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 4:
						this.sanrenweizhi[0] = 5;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 5:
						this.sanrenweizhi[0] = 6;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 6:
						this.sanrenweizhi[0] = 7;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 7:
						this.sanrenweizhi[0] = 8;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 8:
						this.sanrenweizhi[0] = 9;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 9:
						this.sanrenweizhi[0] = 10;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 10:
						this.sanrenweizhi[0] = 11;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 11:
						this.sanrenweizhi[0] = 12;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 12:
						this.sanrenweizhi[0] = 13;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 13:
						this.sanrenweizhi[0] = 14;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 14:
						this.sanrenweizhi[0] = 15;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 15:
						this.sanrenweizhi[0] = 16;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 16:
						this.sanrenweizhi[0] = 17;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 17:
						this.sanrenweizhi[0] = 18;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 18:
						this.sanrenweizhi[0] = 19;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 19:
						this.sanrenweizhi[0] = 20;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 20:
						this.sanrenweizhi[0] = 21;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 21:
						this.sanrenweizhi[0] = 22;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 22:
						this.sanrenweizhi[0] = 23;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 23:
						this.sanrenweizhi[0] = 24;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 24:
						this.sanrenweizhi[0] = 25;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 25:
						this.sanrenweizhi[0] = 26;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 26:
						this.sanrenweizhi[0] = 27;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
					case 27:
						this.sanrenweizhi[0] = 2;
						egret.Tween.get(this.sanrenzu).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[0] -= 1;
							this.sanrenxingzou_1();
						});
						break;
				}
			}
		}
	}

	public sanrenxingzou_2(){
		if(this.parent){
			if(this.sanrendianshu[1] > 0){
				switch(this.sanrenweizhi[1]){
					case 1:
						this.sanrenweizhi[1] = 2;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 2:
						this.sanrenweizhi[1] = 3;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 3:
						this.sanrenweizhi[1] = 4;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 4:
						this.sanrenweizhi[1] = 5;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 5:
						this.sanrenweizhi[1] = 6;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 6:
						this.sanrenweizhi[1] = 7;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 7:
						this.sanrenweizhi[1] = 8;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 8:
						this.sanrenweizhi[1] = 9;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 9:
						this.sanrenweizhi[1] = 10;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 10:
						this.sanrenweizhi[1] = 11;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 11:
						this.sanrenweizhi[1] = 12;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 12:
						this.sanrenweizhi[1] = 13;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 13:
						this.sanrenweizhi[1] = 14;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 14:
						this.sanrenweizhi[1] = 15;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 15:
						this.sanrenweizhi[1] = 16;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 16:
						this.sanrenweizhi[1] = 17;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 17:
						this.sanrenweizhi[1] = 18;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 18:
						this.sanrenweizhi[1] = 19;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 19:
						this.sanrenweizhi[1] = 20;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 20:
						this.sanrenweizhi[1] = 21;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 21:
						this.sanrenweizhi[1] = 22;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 22:
						this.sanrenweizhi[1] = 23;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 23:
						this.sanrenweizhi[1] = 24;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 24:
						this.sanrenweizhi[1] = 25;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 25:
						this.sanrenweizhi[1] = 26;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 26:
						this.sanrenweizhi[1] = 27;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
					case 27:
						this.sanrenweizhi[1] = 2;
						egret.Tween.get(this.sanrenzu0).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[1] -= 1;
							this.sanrenxingzou_2();
						});
						break;
				}
			}
		}
	}

	public sanrenxingzou_3(){
		if(this.parent){
			if(this.sanrendianshu[2] > 0){
				switch(this.sanrenweizhi[2]){
					case 1:
						this.sanrenweizhi[2] = 2;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 2:
						this.sanrenweizhi[2] = 3;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 3:
						this.sanrenweizhi[2] = 4;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 4:
						this.sanrenweizhi[2] = 5;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 5:
						this.sanrenweizhi[2] = 6;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 6:
						this.sanrenweizhi[2] = 7;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 7:
						this.sanrenweizhi[2] = 8;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 8:
						this.sanrenweizhi[2] = 9;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 9:
						this.sanrenweizhi[2] = 10;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 10:
						this.sanrenweizhi[2] = 11;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 11:
						this.sanrenweizhi[2] = 12;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 12:
						this.sanrenweizhi[2] = 13;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 13:
						this.sanrenweizhi[2] = 14;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 14:
						this.sanrenweizhi[2] = 15;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 15:
						this.sanrenweizhi[2] = 16;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 16:
						this.sanrenweizhi[2] = 17;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 17:
						this.sanrenweizhi[2] = 18;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 18:
						this.sanrenweizhi[2] = 19;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 19:
						this.sanrenweizhi[2] = 20;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 20:
						this.sanrenweizhi[2] = 21;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 21:
						this.sanrenweizhi[2] = 22;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 22:
						this.sanrenweizhi[2] = 23;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 23:
						this.sanrenweizhi[2] = 24;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 24:
						this.sanrenweizhi[2] = 25;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 25:
						this.sanrenweizhi[2] = 26;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 26:
						this.sanrenweizhi[2] = 27;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
					case 27:
						this.sanrenweizhi[2] = 2;
						egret.Tween.get(this.sanrenzu1).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[2] -= 1;
							this.sanrenxingzou_3();
						});
						break;
				}
			}
		}
	}

	public sanrenxingzou_4(){
		if(this.parent){
			if(this.sanrendianshu[3] > 0){
				switch(this.sanrenweizhi[3]){
					case 1:
						this.sanrenweizhi[3] = 2;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 2:
						this.sanrenweizhi[3] = 3;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 3:
						this.sanrenweizhi[3] = 4;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 4:
						this.sanrenweizhi[3] = 5;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 5:
						this.sanrenweizhi[3] = 6;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 6:
						this.sanrenweizhi[3] = 7;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 7:
						this.sanrenweizhi[3] = 8;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 8:
						this.sanrenweizhi[3] = 9;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 9:
						this.sanrenweizhi[3] = 10;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 10:
						this.sanrenweizhi[3] = 11;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 11:
						this.sanrenweizhi[3] = 12;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 12:
						this.sanrenweizhi[3] = 13;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 13:
						this.sanrenweizhi[3] = 14;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 14:
						this.sanrenweizhi[3] = 15;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 15:
						this.sanrenweizhi[3] = 16;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 16:
						this.sanrenweizhi[3] = 17;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 17:
						this.sanrenweizhi[3] = 18;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 18:
						this.sanrenweizhi[3] = 19;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 19:
						this.sanrenweizhi[3] = 20;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 20:
						this.sanrenweizhi[3] = 21;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 21:
						this.sanrenweizhi[3] = 22;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 22:
						this.sanrenweizhi[3] = 23;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 23:
						this.sanrenweizhi[3] = 24;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 24:
						this.sanrenweizhi[3] = 25;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 25:
						this.sanrenweizhi[3] = 26;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 26:
						this.sanrenweizhi[3] = 27;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
					case 27:
						this.sanrenweizhi[3] = 2;
						egret.Tween.get(this.sanrenzu2).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[3] -= 1;
							this.sanrenxingzou_4();
						});
						break;
				}
			}
		}
	}

	public sanrenxingzou_5(){
		if(this.parent){
			if(this.sanrendianshu[4] > 0){
				switch(this.sanrenweizhi[4]){
					case 1:
						this.sanrenweizhi[4] = 2;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 2:
						this.sanrenweizhi[4] = 3;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 3:
						this.sanrenweizhi[4] = 4;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 4:
						this.sanrenweizhi[4] = 5;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 5:
						this.sanrenweizhi[4] = 6;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 6:
						this.sanrenweizhi[4] = 7;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 7:
						this.sanrenweizhi[4] = 8;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 8:
						this.sanrenweizhi[4] = 9;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 9:
						this.sanrenweizhi[4] = 10;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 10:
						this.sanrenweizhi[4] = 11;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 11:
						this.sanrenweizhi[4] = 12;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 12:
						this.sanrenweizhi[4] = 13;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 13:
						this.sanrenweizhi[4] = 14;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 14:
						this.sanrenweizhi[4] = 15;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 15:
						this.sanrenweizhi[4] = 16;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 16:
						this.sanrenweizhi[4] = 17;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 17:
						this.sanrenweizhi[4] = 18;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 18:
						this.sanrenweizhi[4] = 19;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 19:
						this.sanrenweizhi[4] = 20;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 20:
						this.sanrenweizhi[4] = 21;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 21:
						this.sanrenweizhi[4] = 22;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 22:
						this.sanrenweizhi[4] = 23;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 23:
						this.sanrenweizhi[4] = 24;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 24:
						this.sanrenweizhi[4] = 25;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 25:
						this.sanrenweizhi[4] = 26;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 26:
						this.sanrenweizhi[4] = 27;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
					case 27:
						this.sanrenweizhi[4] = 2;
						egret.Tween.get(this.sanrenzu3).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[4] -= 1;
							this.sanrenxingzou_5();
						});
						break;
				}
			}
		}
	}

	public sanrenxingzou_6(){
		if(this.parent){
			if(this.sanrendianshu[5] > 0){
				switch(this.sanrenweizhi[5]){
					case 1:
						this.sanrenweizhi[5] = 2;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 2:
						this.sanrenweizhi[5] = 3;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 3:
						this.sanrenweizhi[5] = 4;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 4:
						this.sanrenweizhi[5] = 5;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 5:
						this.sanrenweizhi[5] = 6;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 6:
						this.sanrenweizhi[5] = 7;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 7:
						this.sanrenweizhi[5] = 8;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 8:
						this.sanrenweizhi[5] = 9;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 9:
						this.sanrenweizhi[5] = 10;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 10:
						this.sanrenweizhi[5] = 11;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 11:
						this.sanrenweizhi[5] = 12;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 12:
						this.sanrenweizhi[5] = 13;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 13:
						this.sanrenweizhi[5] = 14;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 14:
						this.sanrenweizhi[5] = 15;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 15:
						this.sanrenweizhi[5] = 16;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 16:
						this.sanrenweizhi[5] = 17;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 17:
						this.sanrenweizhi[5] = 18;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 18:
						this.sanrenweizhi[5] = 19;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 19:
						this.sanrenweizhi[5] = 20;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 20:
						this.sanrenweizhi[5] = 21;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 21:
						this.sanrenweizhi[5] = 22;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 22:
						this.sanrenweizhi[5] = 23;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 23:
						this.sanrenweizhi[5] = 24;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 24:
						this.sanrenweizhi[5] = 25;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 25:
						this.sanrenweizhi[5] = 26;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 26:
						this.sanrenweizhi[5] = 27;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
					case 27:
						this.sanrenweizhi[5] = 2;
						egret.Tween.get(this.sanrenzu4).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[5] -= 1;
							this.sanrenxingzou_6();
						});
						break;
				}
			}
		}
	}

	public sanrenxingzou_7(){
		if(this.parent){
			if(this.sanrendianshu[6] > 0){
				switch(this.sanrenweizhi[6]){
					case 1:
						this.sanrenweizhi[6] = 2;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 2:
						this.sanrenweizhi[6] = 3;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 3:
						this.sanrenweizhi[6] = 4;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 4:
						this.sanrenweizhi[6] = 5;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 5:
						this.sanrenweizhi[6] = 6;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 6:
						this.sanrenweizhi[6] = 7;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 7:
						this.sanrenweizhi[6] = 8;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 8:
						this.sanrenweizhi[6] = 9;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 9:
						this.sanrenweizhi[6] = 10;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 10:
						this.sanrenweizhi[6] = 11;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 11:
						this.sanrenweizhi[6] = 12;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 12:
						this.sanrenweizhi[6] = 13;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 13:
						this.sanrenweizhi[6] = 14;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 14:
						this.sanrenweizhi[6] = 15;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 15:
						this.sanrenweizhi[6] = 16;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 16:
						this.sanrenweizhi[6] = 17;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 17:
						this.sanrenweizhi[6] = 18;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 18:
						this.sanrenweizhi[6] = 19;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 19:
						this.sanrenweizhi[6] = 20;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 20:
						this.sanrenweizhi[6] = 21;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 21:
						this.sanrenweizhi[6] = 22;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 22:
						this.sanrenweizhi[6] = 23;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 23:
						this.sanrenweizhi[6] = 24;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 24:
						this.sanrenweizhi[6] = 25;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 25:
						this.sanrenweizhi[6] = 26;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 26:
						this.sanrenweizhi[6] = 27;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
					case 27:
						this.sanrenweizhi[6] = 2;
						egret.Tween.get(this.sanrenzu5).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[6] -= 1;
							this.sanrenxingzou_7();
						});
						break;
				}
			}
		}
	}

	public sanrenxingzou_8(){
		if(this.parent){
			if(this.sanrendianshu[7] > 0){
				switch(this.sanrenweizhi[7]){
					case 1:
						this.sanrenweizhi[7] = 2;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 2:
						this.sanrenweizhi[7] = 3;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 3:
						this.sanrenweizhi[7] = 4;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 4:
						this.sanrenweizhi[7] = 5;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 5:
						this.sanrenweizhi[7] = 6;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 6:
						this.sanrenweizhi[7] = 7;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 7:
						this.sanrenweizhi[7] = 8;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 8:
						this.sanrenweizhi[7] = 9;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 9:
						this.sanrenweizhi[7] = 10;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 10:
						this.sanrenweizhi[7] = 11;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 11:
						this.sanrenweizhi[7] = 12;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 12:
						this.sanrenweizhi[7] = 13;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 13:
						this.sanrenweizhi[7] = 14;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 14:
						this.sanrenweizhi[7] = 15;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 15:
						this.sanrenweizhi[7] = 16;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 16:
						this.sanrenweizhi[7] = 17;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 17:
						this.sanrenweizhi[7] = 18;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 18:
						this.sanrenweizhi[7] = 19;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 19:
						this.sanrenweizhi[7] = 20;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 20:
						this.sanrenweizhi[7] = 21;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 21:
						this.sanrenweizhi[7] = 22;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 22:
						this.sanrenweizhi[7] = 23;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 23:
						this.sanrenweizhi[7] = 24;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 24:
						this.sanrenweizhi[7] = 25;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 25:
						this.sanrenweizhi[7] = 26;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 26:
						this.sanrenweizhi[7] = 27;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
					case 27:
						this.sanrenweizhi[7] = 2;
						egret.Tween.get(this.sanrenzu6).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[7] -= 1;
							this.sanrenxingzou_8();
						});
						break;
				}
			}
		}
	}

	public sanrenxingzou_9(){
		if(this.parent){
			if(this.sanrendianshu[8] > 0){
				switch(this.sanrenweizhi[8]){
					case 1:
						this.sanrenweizhi[8] = 2;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 2:
						this.sanrenweizhi[8] = 3;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 3:
						this.sanrenweizhi[8] = 4;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 4:
						this.sanrenweizhi[8] = 5;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 5:
						this.sanrenweizhi[8] = 6;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 6:
						this.sanrenweizhi[8] = 7;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 7:
						this.sanrenweizhi[8] = 8;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 8:
						this.sanrenweizhi[8] = 9;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 9:
						this.sanrenweizhi[8] = 10;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 10:
						this.sanrenweizhi[8] = 11;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 11:
						this.sanrenweizhi[8] = 12;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 12:
						this.sanrenweizhi[8] = 13;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 13:
						this.sanrenweizhi[8] = 14;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 14:
						this.sanrenweizhi[8] = 15;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 15:
						this.sanrenweizhi[8] = 16;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 16:
						this.sanrenweizhi[8] = 17;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 17:
						this.sanrenweizhi[8] = 18;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 18:
						this.sanrenweizhi[8] = 19;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 19:
						this.sanrenweizhi[8] = 20;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 20:
						this.sanrenweizhi[8] = 21;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 21:
						this.sanrenweizhi[8] = 22;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 22:
						this.sanrenweizhi[8] = 23;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 23:
						this.sanrenweizhi[8] = 24;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 24:
						this.sanrenweizhi[8] = 25;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 25:
						this.sanrenweizhi[8] = 26;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 26:
						this.sanrenweizhi[8] = 27;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
					case 27:
						this.sanrenweizhi[8] = 2;
						egret.Tween.get(this.sanrenzu7).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[8] -= 1;
							this.sanrenxingzou_9();
						});
						break;
				}
			}
		}
	}

	public sanrenxingzou_10(){
		if(this.parent){
			if(this.sanrendianshu[9] > 0){
				switch(this.sanrenweizhi[9]){
					case 1:
						this.sanrenweizhi[9] = 2;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 2:
						this.sanrenweizhi[9] = 3;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 3:
						this.sanrenweizhi[9] = 4;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 4:
						this.sanrenweizhi[9] = 5;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 5:
						this.sanrenweizhi[9] = 6;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 6:
						this.sanrenweizhi[9] = 7;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 7:
						this.sanrenweizhi[9] = 8;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 8:
						this.sanrenweizhi[9] = 9;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 9:
						this.sanrenweizhi[9] = 10;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 10:
						this.sanrenweizhi[9] = 11;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 11:
						this.sanrenweizhi[9] = 12;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 12:
						this.sanrenweizhi[9] = 13;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 13:
						this.sanrenweizhi[9] = 14;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 14:
						this.sanrenweizhi[9] = 15;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 15:
						this.sanrenweizhi[9] = 16;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 16:
						this.sanrenweizhi[9] = 17;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 17:
						this.sanrenweizhi[9] = 18;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 18:
						this.sanrenweizhi[9] = 19;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 19:
						this.sanrenweizhi[9] = 20;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 20:
						this.sanrenweizhi[9] = 21;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 21:
						this.sanrenweizhi[9] = 22;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 22:
						this.sanrenweizhi[9] = 23;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 23:
						this.sanrenweizhi[9] = 24;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 24:
						this.sanrenweizhi[9] = 25;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 25:
						this.sanrenweizhi[9] = 26;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 26:
						this.sanrenweizhi[9] = 27;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
					case 27:
						this.sanrenweizhi[9] = 2;
						egret.Tween.get(this.sanrenzu8).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
							this.sanrendianshu[9] -= 1;
							this.sanrenxingzou_10();
						});
						break;
				}
			}
		}
	}






	public sanren1touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren1touxiangxianshi, this);
	}

	public sanren1touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu.width;
			head.height=this.sanrentouxiangzu.height;
			this.sanrentouxiangzu.addChild(head);
		}
	}

	public sanren2touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren2touxiangxianshi, this);
	}

	public sanren2touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu0.width;
			head.height=this.sanrentouxiangzu0.height;
			this.sanrentouxiangzu0.addChild(head);
		}
	}

	public sanren3touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren3touxiangxianshi, this);
	}

	public sanren3touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu1.width;
			head.height=this.sanrentouxiangzu1.height;
			this.sanrentouxiangzu1.addChild(head);
		}
	}

	public sanren4touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren4touxiangxianshi, this);
	}

	public sanren4touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu2.width;
			head.height=this.sanrentouxiangzu2.height;
			this.sanrentouxiangzu2.addChild(head);
		}
	}

	public sanren5touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren5touxiangxianshi, this);
	}

	public sanren5touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu3.width;
			head.height=this.sanrentouxiangzu3.height;
			this.sanrentouxiangzu3.addChild(head);
		}
	}

	public sanren6touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren6touxiangxianshi, this);
	}

	public sanren6touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu4.width;
			head.height=this.sanrentouxiangzu4.height;
			this.sanrentouxiangzu4.addChild(head);
		}
	}

	public sanren7touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren7touxiangxianshi, this);
	}

	public sanren7touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu5.width;
			head.height=this.sanrentouxiangzu5.height;
			this.sanrentouxiangzu5.addChild(head);
		}
	}

	public sanren8touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren8touxiangxianshi, this);
	}

	public sanren8touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu6.width;
			head.height=this.sanrentouxiangzu6.height;
			this.sanrentouxiangzu6.addChild(head);
		}
	}

	public sanren9touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren9touxiangxianshi, this);
	}

	public sanren9touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu7.width;
			head.height=this.sanrentouxiangzu7.height;
			this.sanrentouxiangzu7.addChild(head);
		}
	}

	public sanren10touxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.sanren10touxiangxianshi, this);
	}

	public sanren10touxiangxianshi(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.sanrentouxiangzu8.width;
			head.height=this.sanrentouxiangzu8.height;
			this.sanrentouxiangzu8.addChild(head);
		}
	}

	public jiedaoteshushijian(){
		this.jiedaoteshushijianzu = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		/*
		循环随机一下，将那些有战斗的地方计算出来
		*/
		for(var j = 2;j<this.jiedaoteshushijianzu.length;j++){
			let suijishu = Math.floor(Math.random() * 100);
			if(suijishu >= 90){
				this.jiedaoteshushijianzu[j] = "101";
			}
		}
		/*
		循环随机一下，将那些有雨水的地方计算出来,减少健康
		*/
		for(var y = 2;y<this.jiedaoteshushijianzu.length;y++){
			let suijishuy = Math.floor(Math.random() * 100);
			if(suijishuy >= 90){
				this.jiedaoteshushijianzu[y] = "102";
			}
		}
		/*
		循环随机一下，将那些有乞丐的地方计算出来,减少金钱
		*/
		for(var q = 2;q<this.jiedaoteshushijianzu.length;q++){
			let suijishuq = Math.floor(Math.random() * 100);
			if(suijishuq >= 90){
				this.jiedaoteshushijianzu[q] = "103";
			}
		}
		/*
		根据今天的特殊事件，计算那些地方有特殊内容
		*/
		switch(Gerenshuxing.teshushijian){
			case "1":
				this.jiedaoteshushijianzu[3] = "1";
				break;
			case "2":
				this.jiedaoteshushijianzu[3] = "2";
				break;
			case "3":
				this.jiedaoteshushijianzu[3] = "3";
				break;
			case "4":
				this.jiedaoteshushijianzu[3] = "4";
				break;
			case "5":
				this.jiedaoteshushijianzu[3] = "5";
				break;
			case "6":
				this.jiedaoteshushijianzu[3] = "6";
				break;
			case "7":
				this.jiedaoteshushijianzu[3] = "7";
				break;
			case "8":
				this.jiedaoteshushijianzu[3] = "8";
				break;
			case "9":
				this.jiedaoteshushijianzu[3] = "9";
				break;
			case "10":
				this.jiedaoteshushijianzu[3] = "10";
				break;
			case "11":
				this.jiedaoteshushijianzu[3] = "11";
				break;
			case "12":
				this.jiedaoteshushijianzu[3] = "12";
				break;
			case "13":
				this.jiedaoteshushijianzu[3] = "13";
				break;
			case "14":
				this.jiedaoteshushijianzu[3] = "14";
				break;
			case "15":
				this.jiedaoteshushijianzu[3] = "15";
				break;
			case "16":
				this.jiedaoteshushijianzu[9] = "16";
				break;
			case "17":
				this.jiedaoteshushijianzu[16] = "17";
				break;
			case "18":
				this.jiedaoteshushijianzu[10] = "18";
				break;
			case "19":
				this.jiedaoteshushijianzu[24] = "19";
				break;
			case "20":
				this.jiedaoteshushijianzu[19] = "20";
				break;
			case "21":
				this.jiedaoteshushijianzu[21] = "21";
			//	this.jiedaoteshushijianzu[2] = "21";
				break;
			case "24":
				this.jiedaoteshushijianzu[21] = "12";				
				break;
			case "22":
				let fushang = Math.floor(Math.random() * 22) + 2;
				this.jiedaoteshushijianzu[fushang] = "22";
				break;
			case "23":
				let chuyi = Math.floor(Math.random() * 22) + 2;
				this.jiedaoteshushijianzu[chuyi] = "23";
				break;
		}
		console.log("特殊事件组："+this.jiedaoteshushijianzu);
		/*
		初始化街道特殊事件之后，需要刷新一下显示内容
		*/
		this.teshuxianshishuaxin();
	}

	public teshuxianshishuaxin(){
		this.teshuxianshi.source = "";
		this.teshuxianshi0.source = this.taijiexianshi(this.jiedaoteshushijianzu[2]);
		this.teshuxianshi1.source = this.taijiexianshi(this.jiedaoteshushijianzu[3]);
		this.teshuxianshi2.source = this.taijiexianshi(this.jiedaoteshushijianzu[4]);
		this.teshuxianshi3.source = this.taijiexianshi(this.jiedaoteshushijianzu[5]);
		this.teshuxianshi4.source = this.taijiexianshi(this.jiedaoteshushijianzu[6]);
		this.teshuxianshi5.source = this.taijiexianshi(this.jiedaoteshushijianzu[7]);
		this.teshuxianshi6.source = this.taijiexianshi(this.jiedaoteshushijianzu[8]);
		this.teshuxianshi7.source = this.taijiexianshi(this.jiedaoteshushijianzu[9]);
		this.teshuxianshi8.source = this.taijiexianshi(this.jiedaoteshushijianzu[10]);
		this.teshuxianshi9.source = this.taijiexianshi(this.jiedaoteshushijianzu[11]);
		this.teshuxianshi10.source = this.taijiexianshi(this.jiedaoteshushijianzu[12]);
		this.teshuxianshi11.source = this.taijiexianshi(this.jiedaoteshushijianzu[13]);
		this.teshuxianshi12.source = this.taijiexianshi(this.jiedaoteshushijianzu[14]);
		this.teshuxianshi13.source = this.taijiexianshi(this.jiedaoteshushijianzu[15]);
		this.teshuxianshi14.source = this.taijiexianshi(this.jiedaoteshushijianzu[16]);
		this.teshuxianshi15.source = this.taijiexianshi(this.jiedaoteshushijianzu[17]);
		this.teshuxianshi16.source = this.taijiexianshi(this.jiedaoteshushijianzu[18]);
		this.teshuxianshi17.source = this.taijiexianshi(this.jiedaoteshushijianzu[19]);
		this.teshuxianshi18.source = this.taijiexianshi(this.jiedaoteshushijianzu[20]);
		this.teshuxianshi19.source = this.taijiexianshi(this.jiedaoteshushijianzu[21]);
		this.teshuxianshi20.source = this.taijiexianshi(this.jiedaoteshushijianzu[22]);
		this.teshuxianshi21.source = this.taijiexianshi(this.jiedaoteshushijianzu[23]);
		this.teshuxianshi22.source = this.taijiexianshi(this.jiedaoteshushijianzu[24]);
		this.teshuxianshi23.source = this.taijiexianshi(this.jiedaoteshushijianzu[25]);
		this.teshuxianshi24.source = this.taijiexianshi(this.jiedaoteshushijianzu[26]);
		this.teshuxianshi25.source = this.taijiexianshi(this.jiedaoteshushijianzu[27]);
	}

	public taijiexianshi(taijieshu){
		let xianshitupian:string = "";
		switch(taijieshu){
			case "1":
				 xianshitupian = "img_dazhe_png";
				 break;
			case "2":
				xianshitupian = "img_dazhe_png";
				break;
			case "3":
				xianshitupian = "img_dazhe_png";
				break;
			case "4":
				xianshitupian = "img_dazhe_png";
				break;
			case "5":
				xianshitupian = "img_dazhe_png";
				break;
			case "6":
				xianshitupian = "img_dazhe_png";
				break;
			case "7":
				xianshitupian = "img_dazhe_png";
				break;
			case "8":
				xianshitupian = "img_dazhe_png";
				break;
			case "9":
				xianshitupian = "img_dazhe_png";
				break;
			case "10":
				xianshitupian = "img_dazhe_png";
				break;
			case "11":
				xianshitupian = "img_dazhe_png";
				break;
			case "12":
				xianshitupian = "img_dazhe_png";
				break;
			case "13":
				xianshitupian = "img_dazhe_png";
				break;
			case "14":
				xianshitupian = "img_dazhe_png";
				break;
			case "15":
				xianshitupian = "img_dazhe_png";
				break;
			case "16":
				xianshitupian = "img_jiaju_png";
				break;
			case "17":
				xianshitupian = "img_youleyuan_png";
				break;
			case "18":
				xianshitupian = "img_shudian_png";
				break;
			case "19":
				xianshitupian = "img_bangong_png";
				break;
			case "20":
				xianshitupian = "img_shucai_png";
				break;
			case "21":
				xianshitupian = "img_rencai_png";
				break;
			case "22":
				xianshitupian = "img_fushang_png";
				break;
			case "23":
				xianshitupian = "img_zhangxiaoke_png";
				break;
			case "24":
				xianshitupian = "img_tijian_png";
				break;
			case "101":
				xianshitupian = "img_zhandou_png";
				break;
			case "102":
				xianshitupian = "img_yushui_png";
				break;
			case "103":
				xianshitupian = "img_qigai_png";
				break;
		}
		return xianshitupian;
	}

	public tilixiaohaochushi(){
		this.tilixiaohao.text = this.dangqianshengyucishu + "/10 ";
	}

	public dianjisaizi(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.but_shaizi.enabled = false;
		this.kaishianniuzu.alpha = 0;
		if(this.dangqianshengyucishu < 10){
			/*let kouchudonghua = new Cailiaoxiaohao();
			this.addChild(kouchudonghua);
			kouchudonghua.wenzizu.x = this.kaishianniuzu.x + this.kaishianniuzu.width / 2 - kouchudonghua.wenzizu.width /2;
			kouchudonghua.wenzizu.y = this.kaishianniuzu.y - kouchudonghua.wenzizu.height;
			kouchudonghua.wenzineirong.text = " - 1";
			kouchudonghua.img_shicai.source = "img_jiating_png";
			egret.Tween.get(kouchudonghua).to({x:kouchudonghua.x,y:kouchudonghua.y - 60},2000).call(()=>{
				this.removeChild(kouchudonghua);
			});*/
			this.dangqianshengyucishu += 1;
			this.tilixiaohaochushi();
			this.dangqiansaizi = Math.floor(Math.random() * 6) + 1;
		//	this.dangqiansaizi = 1;
			Gameguanli.Kongzhitai().cuowutishixinxi("当前掷出：" + this.dangqiansaizi + "点");
			this.zouluyanshi();
			if(Gameguanli.Kongzhitai().dibuui.parent){
				Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = false;
				Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = false;
				Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = false;
				Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = false;
			}
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("您本次的上街行动数已用完！请返回其他场景");
			this.but_shaizi.enabled = false;
		}
	}

	public zouluyanshi(){
		if(this.dangqiansaizi > 0){
			switch(this.dangqianbushu){
				case 1:
					this.dangqianbushu = 2;
					egret.Tween.get(this.juesezu).to({x:this.taijie1.x,y:this.taijie1.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 2:
					this.dangqianbushu = 3;
					egret.Tween.get(this.juesezu).to({x:this.taijie2.x,y:this.taijie2.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 3:
					this.dangqianbushu = 4;
					egret.Tween.get(this.juesezu).to({x:this.taijie3.x,y:this.taijie3.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 4:
					this.dangqianbushu = 5;
					egret.Tween.get(this.juesezu).to({x:this.taijie4.x,y:this.taijie4.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 5:
					this.dangqianbushu = 6;
					egret.Tween.get(this.juesezu).to({x:this.taijie5.x,y:this.taijie5.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 6:
					this.dangqianbushu = 7;
					egret.Tween.get(this.juesezu).to({x:this.taijie6.x,y:this.taijie6.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 7:
					this.dangqianbushu = 8;
					egret.Tween.get(this.juesezu).to({x:this.taijie7.x,y:this.taijie7.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 8:
					this.dangqianbushu = 9;
					egret.Tween.get(this.juesezu).to({x:this.taijie8.x,y:this.taijie8.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 9:
					this.dangqianbushu = 10;
					egret.Tween.get(this.juesezu).to({x:this.taijie9.x,y:this.taijie9.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 10:
					this.dangqianbushu = 11;
					egret.Tween.get(this.juesezu).to({x:this.taijie10.x,y:this.taijie10.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 11:
					this.dangqianbushu = 12;
					egret.Tween.get(this.juesezu).to({x:this.taijie11.x,y:this.taijie11.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 12:
					this.dangqianbushu = 13;
					egret.Tween.get(this.juesezu).to({x:this.taijie12.x,y:this.taijie12.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 13:
					this.dangqianbushu = 14;
					egret.Tween.get(this.juesezu).to({x:this.taijie13.x,y:this.taijie13.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 14:
					this.dangqianbushu = 15;
					egret.Tween.get(this.juesezu).to({x:this.taijie14.x,y:this.taijie14.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 15:
					this.dangqianbushu = 16;
					egret.Tween.get(this.juesezu).to({x:this.taijie15.x,y:this.taijie15.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 16:
					this.dangqianbushu = 17;
					egret.Tween.get(this.juesezu).to({x:this.taijie16.x,y:this.taijie16.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 17:
					this.dangqianbushu = 18;
					egret.Tween.get(this.juesezu).to({x:this.taijie17.x,y:this.taijie17.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 18:
					this.dangqianbushu = 19;
					egret.Tween.get(this.juesezu).to({x:this.taijie18.x,y:this.taijie18.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 19:
					this.dangqianbushu = 20;
					egret.Tween.get(this.juesezu).to({x:this.taijie19.x,y:this.taijie19.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 20:
					this.dangqianbushu = 21;
					egret.Tween.get(this.juesezu).to({x:this.taijie20.x,y:this.taijie20.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 21:
					this.dangqianbushu = 22;
					egret.Tween.get(this.juesezu).to({x:this.taijie21.x,y:this.taijie21.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 22:
					this.dangqianbushu = 23;
					egret.Tween.get(this.juesezu).to({x:this.taijie22.x,y:this.taijie22.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 23:
					this.dangqianbushu = 24;
					egret.Tween.get(this.juesezu).to({x:this.taijie23.x,y:this.taijie23.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 24:
					this.dangqianbushu = 25;
					egret.Tween.get(this.juesezu).to({x:this.taijie24.x,y:this.taijie24.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 25:
					this.dangqianbushu = 26;
					egret.Tween.get(this.juesezu).to({x:this.taijie25.x,y:this.taijie25.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 26:
					this.dangqianbushu = 27;
					egret.Tween.get(this.juesezu).to({x:this.taijie26.x,y:this.taijie26.y},1000).call(()=>{
						this.dangqiansaizi -= 1;
						this.zouluyanshi();
					});
					break;
				case 27:
					this.dangqianbushu = 2;
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

	/*
	PK挑战提示界面
	*/
	public pktiaozhan(direnxinxi:any){
		this.suijijiemian = new Daitutanchukuangui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
		this.suijijiemian.biaotiwenzidt.text = "厨艺比拼";
		this.suijijiemian.tishineirongdt.text = "[" + direnxinxi.mingzi +  "]想和你切磋切磋厨艺！" ;
		this.suijijiemian.tishitupiandt.source = "img_pvpbiaozhi_png";
		this.suijijiemian.quedinganniudt.enabled = true;
		this.suijijiemian.quedinganniudt.alpha = 1;
		this.suijijiemian.quedinganniu0dt.enabled = false;
		this.suijijiemian.quedinganniu0dt.alpha = 0;
		this.suijijiemian.quedinganniu1dt.enabled = false;
		this.suijijiemian.quedinganniu1dt.alpha = 0;
		this.suijijiemian.quedinganniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gamesound.Soundkongzhi().anniuyinxiao();
			Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
			Gameguanli.Kongzhitai().pvpzhandoujiemian("kai",direnxinxi,"1");
		},this);
		this.suijijiemian.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Gamesound.Soundkongzhi().anniuyinxiao();
			Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
		},this);
	}

	public chufagongneng(){
		if(Gameguanli.Kongzhitai().dibuui.parent){
			Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = true;
			Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = false;
			Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = true;
			Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = true;
		}
		if(this.dangqianbushu == this.sanrenweizhi[0] && this.sanrenjinzuzu[0] == 1){
			this.pktiaozhan(this.sanren1xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else if(this.dangqianbushu == this.sanrenweizhi[1] && this.sanrenjinzuzu[1] == 1){
			this.pktiaozhan(this.sanren2xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else if(this.dangqianbushu == this.sanrenweizhi[2] && this.sanrenjinzuzu[2] == 1){
			this.pktiaozhan(this.sanren3xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else if(this.dangqianbushu == this.sanrenweizhi[3] && this.sanrenjinzuzu[3] == 1){
			this.pktiaozhan(this.sanren4xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else if(this.dangqianbushu == this.sanrenweizhi[4] && this.sanrenjinzuzu[4] == 1){
			this.pktiaozhan(this.sanren5xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else if(this.dangqianbushu == this.sanrenweizhi[5] && this.sanrenjinzuzu[5] == 1){
			this.pktiaozhan(this.sanren6xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else if(this.dangqianbushu == this.sanrenweizhi[6] && this.sanrenjinzuzu[6] == 1){
			this.pktiaozhan(this.sanren7xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else if(this.dangqianbushu == this.sanrenweizhi[7] && this.sanrenjinzuzu[7] == 1){
			this.pktiaozhan(this.sanren8xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else if(this.dangqianbushu == this.sanrenweizhi[8] && this.sanrenjinzuzu[8] == 1){
			this.pktiaozhan(this.sanren9xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else if(this.dangqianbushu == this.sanrenweizhi[9] && this.sanrenjinzuzu[9] == 1){
			this.pktiaozhan(this.sanren10xinxi);
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
		}else{
			switch(this.dangqianbushu){
				case 1:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "1"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 2:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "2"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 3:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "3"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 4:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "4"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 5:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "5"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 6:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "6"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 7:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "7"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 8:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "8"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 9:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "9"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 10:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "10"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 11:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "11"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 12:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "12"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 13:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "13"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 14:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "14"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 15:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "15"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 16:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "16"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 17:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "17"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 18:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "18"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 19:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "19"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 20:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "20"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 21:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "21"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 22:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "22"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 23:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "23"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 24:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "24"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 25:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "25"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 26:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "26"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
				case 27:
					this.zhuanchangjiemian = new Dianpurukou();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.zhuanchangjiemian);
					for(var i = 0;i<this.jiedaobiao.length;i++){
						if(this.jiedaobiao[i].id == "27"){
							this.zhuanchangjiemian.jinruwenzi.text = this.jiedaobiao[i].ruchangwenzi;
							this.jiedaopeizhi = this.jiedaobiao[i];
						}
					}
					this.zhuanchangjiemian.alpha = 0;
					egret.Tween.get(this.zhuanchangjiemian).to({alpha:1},1500).wait(2000).call(()=>{
						egret.Tween.get(this.zhuanchangjiemian).to({alpha:0},1500).call(()=>{
							Gameguanli.Kongzhitai().dingbuui.removeChild(this.zhuanchangjiemian);
							this.chufadianpu1();
						})
					})
					break;
			}

		}
	}


	public fandianbufen(){
		this.fandianjiemian = new Dianpufandian();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.fandianjiemian);
		for(var p = 0;p<this.jiedaobiao.length;p++){
			if(this.dangqianbushu == parseInt(this.jiedaobiao[p].id)){
				this.jiedaopeizhi = this.jiedaobiao[p];
				this.fandianjiemian.dianpuming.text = this.jiedaopeizhi.name;
				break;
			}
		}
		for (var g in Gerencaipudengji.jiedaoshuju){
			if(g == String(this.dangqianbushu)){
				this.fandianpeizhi = Gerencaipudengji.jiedaoshuju[g];
				break;
			}
		}
		let zuizongrenqi = parseInt(this.fandianpeizhi[0]) + parseInt(this.fandianpeizhi[18]) +parseInt( this.fandianpeizhi[19]) + parseInt(this.fandianpeizhi[20]);
		let tishengrenqi = parseInt(this.fandianpeizhi[18]) +parseInt( this.fandianpeizhi[19]) + parseInt(this.fandianpeizhi[20]);
		this.fandianjiemian.renqishu.text = "" + zuizongrenqi + "(" + tishengrenqi + ")";
		this.fandianjiemian.zujinshu.text = this.fandianpeizhi[1];
		this.fandianjiemian.zuqishu.text = this.fandianpeizhi[3] + "天";
		this.fandianjiemian.but_xiaofei.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xiaofeidianji,this);
		if(this.fandianpeizhi[3] == "0"){
			this.fandianjiemian.zhuangtaishu.text = "可收购";
		}else{
			this.fandianjiemian.zhuangtaishu.text = "不可收购";
		}
		switch(this.fandianpeizhi[4]){
			case "0":
				this.fandianjiemian.img_yinye.source = "img_shoufei_png";
				this.fandianjiemian.shoufeishu.text = this.fandianpeizhi[2];
				this.fandianjiemian.dianzhuming.text = "暂无主人";
				this.fandianjiemian.but_shougou.enabled = true;
				this.fandianjiemian.but_shougou.alpha = 1;
				this.fandianjiemian.but_shouyin.enabled = false;
				this.fandianjiemian.but_shouyin.alpha = 0;
				this.fandianjiemian.but_shougou.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shougou,this);
				this.fandianjiemian.but_guyuan1.enabled = false;
				this.fandianjiemian.but_guyuan2.enabled = false;
				this.fandianjiemian.but_guyuan3.enabled = false;
				this.fandianjiemian.but_guyuan1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguyuan1,this);
				this.fandianjiemian.but_guyuan2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguyuan2,this);
				this.fandianjiemian.but_guyuan3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguyuan3,this);
				break;
			case "1":
				this.fandianjiemian.img_yinye.source = "img_shoufei1_png";
				this.fandianjiemian.shoufeishu.text = this.fandianpeizhi[5];
				this.fandianjiemian.dianzhuming.text = Gerenshuxing.mingzi;
				this.fandianjiemian.but_shougou.enabled = false;
				this.fandianjiemian.but_shougou.alpha = 0;
				this.fandianjiemian.but_shouyin.enabled = true;
				this.fandianjiemian.but_shouyin.alpha = 1;
				this.huoquzijitouxiang(Gerenshuxing.touxiang);
				this.fandianjiemian.but_shouyin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shouyindianji,this);
				this.fandianjiemian.but_guyuan1.enabled = true;
				this.fandianjiemian.but_guyuan2.enabled = true;
				this.fandianjiemian.but_guyuan3.enabled = true;
				this.fandianjiemian.but_guyuan1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguyuan1,this);
				this.fandianjiemian.but_guyuan2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguyuan2,this);
				this.fandianjiemian.but_guyuan3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguyuan3,this);
				if(this.fandianpeizhi[7] == "0"){
					this.fandianjiemian.guyuantouxiang1.source = "img_kongbaijiahao_png";
				}else if(this.fandianpeizhi[7] == "2"){
					this.jiazaiguyuan1touxiangsj(this.fandianpeizhi[11]);
				}else if(this.fandianpeizhi[7] == "1"){
					this.fandianjiemian.guyuantouxiang1.source = this.fandianpeizhi[11];
				}
				if(this.fandianpeizhi[8] == "0"){
					this.fandianjiemian.guyuantouxiang2.source = "img_kongbaijiahao_png";
				}else if(this.fandianpeizhi[8] == "2"){
					this.jiazaiguyuan2touxiangsj(this.fandianpeizhi[13]);
				}else if(this.fandianpeizhi[8] == "1"){
					this.fandianjiemian.guyuantouxiang2.source = this.fandianpeizhi[13];
				}
				if(this.fandianpeizhi[9] == "0"){
					this.fandianjiemian.guyuantouxiang3.source = "img_kongbaijiahao_png";
				}else if(this.fandianpeizhi[9] == "2"){
					this.jiazaiguyuan3touxiangsj(this.fandianpeizhi[15]);
				}else if(this.fandianpeizhi[9] == "1"){
					this.fandianjiemian.guyuantouxiang3.source = this.fandianpeizhi[15];
				}
				break;
			default:
				this.fandianjiemian.img_yinye.source = "img_shoufei_png";
				this.fandianjiemian.shoufeishu.text = this.fandianpeizhi[2];
				this.fandianjiemian.dianzhuming.text = this.fandianpeizhi[16];
				this.huoquzijitouxiang(this.fandianpeizhi[17]);
				this.fandianjiemian.but_shougou.enabled = false;
				this.fandianjiemian.but_shougou.alpha = 1;
				this.fandianjiemian.but_shouyin.enabled = false;
				this.fandianjiemian.but_shouyin.alpha = 0;
				this.fandianjiemian.but_shougou.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.shougou,this);
				this.fandianjiemian.but_guyuan1.enabled = true;
				this.fandianjiemian.but_guyuan2.enabled = true;
				this.fandianjiemian.but_guyuan3.enabled = true;
				this.fandianjiemian.but_guyuan1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguyuan1,this);
				this.fandianjiemian.but_guyuan2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguyuan2,this);
				this.fandianjiemian.but_guyuan3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguyuan3,this);
				if(this.fandianpeizhi[7] == "0"){
					this.fandianjiemian.guyuantouxiang1.source = "img_kongbaijiahao_png";
				}else if(this.fandianpeizhi[7] == "2"){
					this.jiazaiguyuan1touxiangsj(this.fandianpeizhi[11]);
				}else if(this.fandianpeizhi[7] == "1"){
					this.fandianjiemian.guyuantouxiang1.source = this.fandianpeizhi[11];
				}
				if(this.fandianpeizhi[8] == "0"){
					this.fandianjiemian.guyuantouxiang2.source = "img_kongbaijiahao_png";
				}else if(this.fandianpeizhi[8] == "2"){
					this.jiazaiguyuan2touxiangsj(this.fandianpeizhi[13]);
				}else if(this.fandianpeizhi[8] == "1"){
					this.fandianjiemian.guyuantouxiang2.source = this.fandianpeizhi[13];
				}
				if(this.fandianpeizhi[9] == "0"){
					this.fandianjiemian.guyuantouxiang3.source = "img_kongbaijiahao_png";
				}else if(this.fandianpeizhi[9] == "2"){
					this.jiazaiguyuan3touxiangsj(this.fandianpeizhi[15]);
				}else if(this.fandianpeizhi[9] == "1"){
					this.fandianjiemian.guyuantouxiang3.source = this.fandianpeizhi[15];
				}
		}


	}

	//雇员界面
	public dianjiguyuan1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.fandianguyuan = new Dianpuzhaopinui();
		this.fandianjiemian.addChild(this.fandianguyuan);
		this.fandianguyuan.img_heisezhezao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbiguyuan,this);
		if(this.fandianpeizhi[4] == "2"){
			if(this.fandianpeizhi[7] == "0"){
				this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
				this.fandianguyuan.mingzi.text = "暂无雇员";
				this.fandianguyuan.jinengshu.text = "无";
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}else if(this.fandianpeizhi[7] == "1"){
				this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[11];
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[10];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[18];
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}else if(this.fandianpeizhi[7] == "2"){
				this.guyuanjiazaitouxiang1(this.fandianpeizhi[11]);
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[10];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[18];
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}
			this.fandianguyuan.but_zhaopin.enabled = false;
			this.fandianguyuan.but_zhaopin.alpha = 0;
			this.fandianguyuan.but_jiepin.enabled = false;
			this.fandianguyuan.but_jiepin.alpha = 0;
		}else if(this.fandianpeizhi[4] == "1"){
			if(this.fandianpeizhi[7] == "0"){
				this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
				this.fandianguyuan.mingzi.text = "暂无雇员";
				this.fandianguyuan.jinengshu.text = "无";
				this.fandianguyuan.but_zhaopin.enabled = true;
				this.fandianguyuan.but_zhaopin.alpha = 1;
				this.fandianguyuan.but_zhaopin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
				this.fandianguyuan.but_jiepin.enabled = false;
				this.fandianguyuan.but_jiepin.alpha = 0;
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}else if(this.fandianpeizhi[7] == "1"){
				this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[11];
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[10];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[18];
				this.fandianguyuan.but_zhaopin.enabled = false;
				this.fandianguyuan.but_zhaopin.alpha = 0;
				this.fandianguyuan.but_jiepin.enabled = true;
				this.fandianguyuan.but_jiepin.alpha = 1;
				this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiepinguyuan1,this);
				this.fandianguyuan.shuoming.text = "解聘后可重新招募";
			}else if(this.fandianpeizhi[7] == "2"){
				this.guyuanjiazaitouxiang1(this.fandianpeizhi[11]);
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[10];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[18];
				this.fandianguyuan.but_zhaopin.enabled = false;
				this.fandianguyuan.but_zhaopin.alpha = 0;
				this.fandianguyuan.but_jiepin.enabled = true;
				this.fandianguyuan.but_jiepin.alpha = 1;
				this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiepinguyuan1,this);
				this.fandianguyuan.shuoming.text = "解聘后可重新招募";
			}
		}
	}

	public dianjiguyuan2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.fandianguyuan = new Dianpuzhaopinui();
		this.fandianjiemian.addChild(this.fandianguyuan);
		this.fandianguyuan.img_heisezhezao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbiguyuan,this);
		if(this.fandianpeizhi[4] == "2"){
			if(this.fandianpeizhi[8] == "0"){
				this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
				this.fandianguyuan.mingzi.text = "暂无雇员";
				this.fandianguyuan.jinengshu.text = "无";
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}else if(this.fandianpeizhi[8] == "1"){
				this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[13];
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[12];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[19];
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}else if(this.fandianpeizhi[8] == "2"){
				this.guyuanjiazaitouxiang1(this.fandianpeizhi[13]);
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[12];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[19];
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}
			this.fandianguyuan.but_zhaopin.enabled = false;
			this.fandianguyuan.but_zhaopin.alpha = 0;
			this.fandianguyuan.but_jiepin.enabled = false;
			this.fandianguyuan.but_jiepin.alpha = 0;
		}else if(this.fandianpeizhi[4] == "1"){
			if(this.fandianpeizhi[8] == "0"){
				this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
				this.fandianguyuan.mingzi.text = "暂无雇员";
				this.fandianguyuan.jinengshu.text = "无";
				this.fandianguyuan.but_zhaopin.enabled = true;
				this.fandianguyuan.but_zhaopin.alpha = 1;
				this.fandianguyuan.but_zhaopin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan2,this);
				this.fandianguyuan.but_jiepin.enabled = false;
				this.fandianguyuan.but_jiepin.alpha = 0;
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}else if(this.fandianpeizhi[8] == "1"){
				this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[13];
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[12];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[19];
				this.fandianguyuan.but_zhaopin.enabled = false;
				this.fandianguyuan.but_zhaopin.alpha = 0;
				this.fandianguyuan.but_jiepin.enabled = true;
				this.fandianguyuan.but_jiepin.alpha = 1;
				this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiepinguyuan2,this);
				this.fandianguyuan.shuoming.text = "解聘后可重新招募";
			}else if(this.fandianpeizhi[8] == "2"){
				this.guyuanjiazaitouxiang1(this.fandianpeizhi[13]);
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[12];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[19];
				this.fandianguyuan.but_zhaopin.enabled = false;
				this.fandianguyuan.but_zhaopin.alpha = 0;
				this.fandianguyuan.but_jiepin.enabled = true;
				this.fandianguyuan.but_jiepin.alpha = 1;
				this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiepinguyuan2,this);
				this.fandianguyuan.shuoming.text = "解聘后可重新招募";
			}
		}
		
	}

	public dianjiguyuan3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.fandianguyuan = new Dianpuzhaopinui();
		this.fandianjiemian.addChild(this.fandianguyuan);
		this.fandianguyuan.img_heisezhezao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbiguyuan,this);
		if(this.fandianpeizhi[4] == "2"){
			if(this.fandianpeizhi[9] == "0"){
				this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
				this.fandianguyuan.mingzi.text = "暂无雇员";
				this.fandianguyuan.jinengshu.text = "无";
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}else if(this.fandianpeizhi[9] == "1"){
				this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[15];
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[14];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[20];
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}else if(this.fandianpeizhi[9] == "2"){
				this.guyuanjiazaitouxiang1(this.fandianpeizhi[15]);
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[14];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[20];
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}
			this.fandianguyuan.but_zhaopin.enabled = false;
			this.fandianguyuan.but_zhaopin.alpha = 0;
			this.fandianguyuan.but_jiepin.enabled = false;
			this.fandianguyuan.but_jiepin.alpha = 0;
		}else if(this.fandianpeizhi[4] == "1"){
			if(this.fandianpeizhi[9] == "0"){
				this.fandianguyuan.xitongtouxiang.source = "kongbaitouxiang_png";
				this.fandianguyuan.mingzi.text = "暂无雇员";
				this.fandianguyuan.jinengshu.text = "无";
				this.fandianguyuan.but_zhaopin.enabled = true;
				this.fandianguyuan.but_zhaopin.alpha = 1;
				this.fandianguyuan.but_zhaopin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan3,this);
				this.fandianguyuan.but_jiepin.enabled = false;
				this.fandianguyuan.but_jiepin.alpha = 0;
				this.fandianguyuan.shuoming.text = "招聘可寻觅店员";
			}else if(this.fandianpeizhi[9] == "1"){
				this.fandianguyuan.xitongtouxiang.source = this.fandianpeizhi[15];
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[14];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[20];
				this.fandianguyuan.but_zhaopin.enabled = false;
				this.fandianguyuan.but_zhaopin.alpha = 0;
				this.fandianguyuan.but_jiepin.enabled = true;
				this.fandianguyuan.but_jiepin.alpha = 1;
				this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiepinguyuan3,this);
				this.fandianguyuan.shuoming.text = "解聘后可重新招募";
			}else if(this.fandianpeizhi[9] == "2"){
				this.guyuanjiazaitouxiang1(this.fandianpeizhi[15]);
				this.fandianguyuan.mingzi.text = this.fandianpeizhi[14];
				this.fandianguyuan.jinengshu.text = "人气 + " + this.fandianpeizhi[20];
				this.fandianguyuan.but_zhaopin.enabled = false;
				this.fandianguyuan.but_zhaopin.alpha = 0;
				this.fandianguyuan.but_jiepin.enabled = true;
				this.fandianguyuan.but_jiepin.alpha = 1;
				this.fandianguyuan.but_jiepin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jiepinguyuan3,this);
				this.fandianguyuan.shuoming.text = "解聘后可重新招募";
			}
		}		
	}



	public async zhaopinguyuan2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.zhaopinguyuan2chenggong,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public zhaopinguyuan2chenggong(){
		this.guyuan2leixing = 0;
		this.guyuan2mingzi = "0";
	 	this.guyuan2touxiang = "0";
	 	this.guyuan2jiacheng = 0;
		let npcbiao = RES.getRes("gukehanhuabiao_json");
		let suijinpc = Math.floor(Math.random() * npcbiao.length);
		let mingzi = npcbiao[suijinpc].name;
		let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
		let jiacheng = Math.floor(Math.random() * 15) + 1;
		let suijishijie = Math.floor(Math.random() * 100);
		if(suijishijie > 80){
			if(Gerenshuxing.paihangbangshuju.length >= 60){
				let suijishu = Math.floor(Math.random() * 50);
				jiacheng = 50 - suijishu + 20;
				mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
				touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
				this.guyuanjiazaitouxiang1(touxiang);			
			}
		}
		this.fandianguyuan.xitongtouxiang.source = touxiang;
		this.fandianguyuan.mingzi.text = mingzi;
		this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
		this.fandianguyuan.shuoming.text = "正在寻觅店员";
		this.fandianguyuan.but_zhaopin.enabled = false;
		this.fandianguyuan.but_zhaopin.alpha = 0;
		this.fandianguyuan.but_jiepin.enabled = false;
		this.fandianguyuan.but_jiepin.alpha = 0;
		this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
		egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(500).call(()=>{
			let npcbiao = RES.getRes("gukehanhuabiao_json");
			let suijinpc = Math.floor(Math.random() * npcbiao.length);
			let mingzi = npcbiao[suijinpc].name;
			let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
			let jiacheng = Math.floor(Math.random() * 15) + 1;
			let suijishijie = Math.floor(Math.random() * 100);
			if(suijishijie > 80){
				if(Gerenshuxing.paihangbangshuju.length >= 60){
					let suijishu = Math.floor(Math.random() * 50);
					jiacheng = 50 - suijishu + 20;
					mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
					touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
					this.guyuanjiazaitouxiang1(touxiang);			
				}
			}
			this.fandianguyuan.xitongtouxiang.source = touxiang;
			this.fandianguyuan.mingzi.text = mingzi;
			this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
			this.fandianguyuan.shuoming.text = "正在寻觅店员";
			this.fandianguyuan.but_zhaopin.enabled = false;
			this.fandianguyuan.but_zhaopin.alpha = 0;
			this.fandianguyuan.but_jiepin.enabled = false;
			this.fandianguyuan.but_jiepin.alpha = 0;
			this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
			egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(800).call(()=>{
				let npcbiao = RES.getRes("gukehanhuabiao_json");
				let suijinpc = Math.floor(Math.random() * npcbiao.length);
				let mingzi = npcbiao[suijinpc].name;
				let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
				let jiacheng = Math.floor(Math.random() * 15) + 1;
				let suijishijie = Math.floor(Math.random() * 100);
				if(suijishijie > 80){
					if(Gerenshuxing.paihangbangshuju.length >= 60){
						let suijishu = Math.floor(Math.random() * 50);
						jiacheng = 50 - suijishu + 20;
						mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
						touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
						this.guyuanjiazaitouxiang1(touxiang);			
					}
				}
				this.fandianguyuan.xitongtouxiang.source = touxiang;
				this.fandianguyuan.mingzi.text = mingzi;
				this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
				this.fandianguyuan.shuoming.text = "正在寻觅店员";
				this.fandianguyuan.but_zhaopin.enabled = false;
				this.fandianguyuan.but_zhaopin.alpha = 0;
				this.fandianguyuan.but_jiepin.enabled = false;
				this.fandianguyuan.but_jiepin.alpha = 0;
				this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
				egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1100).call(()=>{
					let npcbiao = RES.getRes("gukehanhuabiao_json");
					let suijinpc = Math.floor(Math.random() * npcbiao.length);
					let mingzi = npcbiao[suijinpc].name;
					let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
					let jiacheng = Math.floor(Math.random() * 15) + 1;
					let suijishijie = Math.floor(Math.random() * 100);
					if(suijishijie > 80){
						if(Gerenshuxing.paihangbangshuju.length >= 60){
							let suijishu = Math.floor(Math.random() * 50);
							jiacheng = 50 - suijishu + 20;
							mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
							touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
							this.guyuanjiazaitouxiang1(touxiang);			
						}
					}
					this.fandianguyuan.xitongtouxiang.source = touxiang;
					this.fandianguyuan.mingzi.text = mingzi;
					this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
					this.fandianguyuan.shuoming.text = "正在寻觅店员";
					this.fandianguyuan.but_zhaopin.enabled = false;
					this.fandianguyuan.but_zhaopin.alpha = 0;
					this.fandianguyuan.but_jiepin.enabled = false;
					this.fandianguyuan.but_jiepin.alpha = 0;
					this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
					egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1200).call(()=>{
						let npcbiao = RES.getRes("gukehanhuabiao_json");
						let suijinpc = Math.floor(Math.random() * npcbiao.length);
						let mingzi = npcbiao[suijinpc].name;
						let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
						let jiacheng = Math.floor(Math.random() * 15) + 1;
						let suijishijie = Math.floor(Math.random() * 100);
						if(suijishijie > 80){
							if(Gerenshuxing.paihangbangshuju.length >= 60){
								let suijishu = Math.floor(Math.random() * 50);
								jiacheng = 50 - suijishu + 20;
								mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
								touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
								this.guyuanjiazaitouxiang1(touxiang);			
							}
						}
						this.fandianguyuan.xitongtouxiang.source = touxiang;
						this.fandianguyuan.mingzi.text = mingzi;
						this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
						this.fandianguyuan.shuoming.text = "正在寻觅店员";
						this.fandianguyuan.but_zhaopin.enabled = false;
						this.fandianguyuan.but_zhaopin.alpha = 0;
						this.fandianguyuan.but_jiepin.enabled = false;
						this.fandianguyuan.but_jiepin.alpha = 0;
						this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
						egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1300).call(()=>{
							let npcbiao = RES.getRes("gukehanhuabiao_json");
							let suijinpc = Math.floor(Math.random() * npcbiao.length);
							let mingzi = npcbiao[suijinpc].name;
							let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
							let jiacheng = Math.floor(Math.random() * 15) + 1;
							let suijishijie = Math.floor(Math.random() * 100);
							if(suijishijie > 80){
								if(Gerenshuxing.paihangbangshuju.length >= 60){
									let suijishu = Math.floor(Math.random() * 50);
									jiacheng = 50 - suijishu + 20;
									mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
									touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
									this.guyuanjiazaitouxiang1(touxiang);			
								}
							}
							this.fandianguyuan.xitongtouxiang.source = touxiang;
							this.fandianguyuan.mingzi.text = mingzi;
							this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
							this.fandianguyuan.shuoming.text = "正在寻觅店员";
							this.fandianguyuan.but_zhaopin.enabled = false;
							this.fandianguyuan.but_zhaopin.alpha = 0;
							this.fandianguyuan.but_jiepin.enabled = false;
							this.fandianguyuan.but_jiepin.alpha = 0;
							this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
							egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1400).call(()=>{
								let npcbiao = RES.getRes("gukehanhuabiao_json");
								let suijinpc = Math.floor(Math.random() * npcbiao.length);
								let mingzi = npcbiao[suijinpc].name;
								let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
								let jiacheng = Math.floor(Math.random() * 15) + 1;
								let suijishijie = Math.floor(Math.random() * 100);
								if(suijishijie > 80){
									if(Gerenshuxing.paihangbangshuju.length >= 60){
										let suijishu = Math.floor(Math.random() * 50);
										jiacheng = 50 - suijishu + 20;
										mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
										touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
										this.guyuanjiazaitouxiang1(touxiang);			
									}
								}
								this.fandianguyuan.xitongtouxiang.source = touxiang;
								this.fandianguyuan.mingzi.text = mingzi;
								this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
								this.fandianguyuan.shuoming.text = "正在寻觅店员";
								this.fandianguyuan.but_zhaopin.enabled = false;
								this.fandianguyuan.but_zhaopin.alpha = 0;
								this.fandianguyuan.but_jiepin.enabled = false;
								this.fandianguyuan.but_jiepin.alpha = 0;
								this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
								egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1500).call(()=>{
									let npcbiao = RES.getRes("gukehanhuabiao_json");
									let suijinpc = Math.floor(Math.random() * npcbiao.length);
									let mingzi = npcbiao[suijinpc].name;
									let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
									let jiacheng = Math.floor(Math.random() * 15) + 1;
									let suijishijie = Math.floor(Math.random() * 100);
									if(suijishijie > 80){
										if(Gerenshuxing.paihangbangshuju.length >= 60){
											let suijishu = Math.floor(Math.random() * 50);
											jiacheng = 50 - suijishu + 20;
											mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
											touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
											this.guyuanjiazaitouxiang1(touxiang);			
										}
									}
									this.fandianguyuan.xitongtouxiang.source = touxiang;
									this.fandianguyuan.mingzi.text = mingzi;
									this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
									this.fandianguyuan.shuoming.text = "正在寻觅店员";
									this.fandianguyuan.but_zhaopin.enabled = false;
									this.fandianguyuan.but_zhaopin.alpha = 0;
									this.fandianguyuan.but_jiepin.enabled = false;
									this.fandianguyuan.but_jiepin.alpha = 0;
									this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
									egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1600).call(()=>{
										let npcbiao = RES.getRes("gukehanhuabiao_json");
										let suijinpc = Math.floor(Math.random() * npcbiao.length);
										let mingzi = npcbiao[suijinpc].name;
										let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
										let jiacheng = Math.floor(Math.random() * 15) + 1;
										let suijishijie = Math.floor(Math.random() * 100);
										if(suijishijie > 80){
											if(Gerenshuxing.paihangbangshuju.length >= 60){
												let suijishu = Math.floor(Math.random() * 50);
												jiacheng = 50 - suijishu + 20;
												mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
												touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
												this.guyuanjiazaitouxiang1(touxiang);			
											}
										}
										this.fandianguyuan.xitongtouxiang.source = touxiang;
										this.fandianguyuan.mingzi.text = mingzi;
										this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
										this.fandianguyuan.shuoming.text = "正在寻觅店员";
										this.fandianguyuan.but_zhaopin.enabled = false;
										this.fandianguyuan.but_zhaopin.alpha = 0;
										this.fandianguyuan.but_jiepin.enabled = false;
										this.fandianguyuan.but_jiepin.alpha = 0;
										this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
										egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1700).call(()=>{
											let npcbiao = RES.getRes("gukehanhuabiao_json");
											let suijinpc = Math.floor(Math.random() * npcbiao.length);
											let mingzi = npcbiao[suijinpc].name;
											let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
											let jiacheng = Math.floor(Math.random() * 15) + 1;
											let suijishijie = Math.floor(Math.random() * 100);
											this.guyuan2leixing = 1;
											if(suijishijie > 80){
												if(Gerenshuxing.paihangbangshuju.length >= 60){
													let suijishu = Math.floor(Math.random() * 50);
													jiacheng = 50 - suijishu + 20;
													mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
													touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
													this.guyuan2leixing = 2;
													this.guyuanjiazaitouxiang1(touxiang);			
												}
											}
											this.guyuan2mingzi = mingzi;
											this.guyuan2touxiang = touxiang;
											this.guyuan2jiacheng = jiacheng;
											this.fandianguyuan.xitongtouxiang.source = touxiang;
											this.fandianguyuan.mingzi.text = mingzi;
											this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
											this.fandianguyuan.shuoming.text = "正在寻觅店员";
											this.fandianguyuan.but_zhaopin.enabled = false;
											this.fandianguyuan.but_zhaopin.alpha = 0;
											this.fandianguyuan.but_jiepin.enabled = false;
											this.fandianguyuan.but_jiepin.alpha = 0;
											this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
											egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1800).call(()=>{
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][8] = this.guyuan2leixing;
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][12] = this.guyuan2mingzi;
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][13] = this.guyuan2touxiang;
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][19] = this.guyuan2jiacheng;
												Weblianjie.fasongshuju("code:101","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
													+ '"guyuanhao"' +":"+ '"2"' +","
													+ '"guyuanleixing"' +":"+ '"' + this.guyuan2leixing + '"' +","
													+ '"guyuanmingzi"' +":"+ '"' + this.guyuan2mingzi + '"' +","
													+ '"guyuantouxiang"' +":"+ '"' + this.guyuan2touxiang + '"' +","
													+ '"dianpuid"' +":"+ '"' + this.dangqianbushu + '"' +","
													+ '"guyuanjiacheng"' +":"+ '"' + this.guyuan2jiacheng + '"' +"}");
												this.fandianjiemian.removeChild(this.fandianguyuan);
												Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
												this.fandianbufen();
												this.dianjiguyuan2();
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	}

	public async zhaopinguyuan3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.zhaopinguyuan3chenggong,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public zhaopinguyuan3chenggong(){
		this.guyuan3leixing = 0;
		this.guyuan3mingzi = "0";
	 	this.guyuan3touxiang = "0";
	 	this.guyuan3jiacheng = 0;
		let npcbiao = RES.getRes("gukehanhuabiao_json");
		let suijinpc = Math.floor(Math.random() * npcbiao.length);
		let mingzi = npcbiao[suijinpc].name;
		let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
		let jiacheng = Math.floor(Math.random() * 15) + 1;
		let suijishijie = Math.floor(Math.random() * 100);
		if(suijishijie > 80){
			if(Gerenshuxing.paihangbangshuju.length >= 60){
				let suijishu = Math.floor(Math.random() * 50);
				jiacheng = 50 - suijishu + 20;
				mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
				touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
				this.guyuanjiazaitouxiang1(touxiang);			
			}
		}
		this.fandianguyuan.xitongtouxiang.source = touxiang;
		this.fandianguyuan.mingzi.text = mingzi;
		this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
		this.fandianguyuan.shuoming.text = "正在寻觅店员";
		this.fandianguyuan.but_zhaopin.enabled = false;
		this.fandianguyuan.but_zhaopin.alpha = 0;
		this.fandianguyuan.but_jiepin.enabled = false;
		this.fandianguyuan.but_jiepin.alpha = 0;
		this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
		egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(500).call(()=>{
			let npcbiao = RES.getRes("gukehanhuabiao_json");
			let suijinpc = Math.floor(Math.random() * npcbiao.length);
			let mingzi = npcbiao[suijinpc].name;
			let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
			let jiacheng = Math.floor(Math.random() * 15) + 1;
			let suijishijie = Math.floor(Math.random() * 100);
			if(suijishijie > 80){
				if(Gerenshuxing.paihangbangshuju.length >= 60){
					let suijishu = Math.floor(Math.random() * 50);
					jiacheng = 50 - suijishu + 20;
					mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
					touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
					this.guyuanjiazaitouxiang1(touxiang);			
				}
			}
			this.fandianguyuan.xitongtouxiang.source = touxiang;
			this.fandianguyuan.mingzi.text = mingzi;
			this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
			this.fandianguyuan.shuoming.text = "正在寻觅店员";
			this.fandianguyuan.but_zhaopin.enabled = false;
			this.fandianguyuan.but_zhaopin.alpha = 0;
			this.fandianguyuan.but_jiepin.enabled = false;
			this.fandianguyuan.but_jiepin.alpha = 0;
			this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
			egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(800).call(()=>{
				let npcbiao = RES.getRes("gukehanhuabiao_json");
				let suijinpc = Math.floor(Math.random() * npcbiao.length);
				let mingzi = npcbiao[suijinpc].name;
				let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
				let jiacheng = Math.floor(Math.random() * 15) + 1;
				let suijishijie = Math.floor(Math.random() * 100);
				if(suijishijie > 80){
					if(Gerenshuxing.paihangbangshuju.length >= 60){
						let suijishu = Math.floor(Math.random() * 50);
						jiacheng = 50 - suijishu + 20;
						mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
						touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
						this.guyuanjiazaitouxiang1(touxiang);			
					}
				}
				this.fandianguyuan.xitongtouxiang.source = touxiang;
				this.fandianguyuan.mingzi.text = mingzi;
				this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
				this.fandianguyuan.shuoming.text = "正在寻觅店员";
				this.fandianguyuan.but_zhaopin.enabled = false;
				this.fandianguyuan.but_zhaopin.alpha = 0;
				this.fandianguyuan.but_jiepin.enabled = false;
				this.fandianguyuan.but_jiepin.alpha = 0;
				this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
				egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1100).call(()=>{
					let npcbiao = RES.getRes("gukehanhuabiao_json");
					let suijinpc = Math.floor(Math.random() * npcbiao.length);
					let mingzi = npcbiao[suijinpc].name;
					let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
					let jiacheng = Math.floor(Math.random() * 15) + 1;
					let suijishijie = Math.floor(Math.random() * 100);
					if(suijishijie > 80){
						if(Gerenshuxing.paihangbangshuju.length >= 60){
							let suijishu = Math.floor(Math.random() * 50);
							jiacheng = 50 - suijishu + 20;
							mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
							touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
							this.guyuanjiazaitouxiang1(touxiang);			
						}
					}
					this.fandianguyuan.xitongtouxiang.source = touxiang;
					this.fandianguyuan.mingzi.text = mingzi;
					this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
					this.fandianguyuan.shuoming.text = "正在寻觅店员";
					this.fandianguyuan.but_zhaopin.enabled = false;
					this.fandianguyuan.but_zhaopin.alpha = 0;
					this.fandianguyuan.but_jiepin.enabled = false;
					this.fandianguyuan.but_jiepin.alpha = 0;
					this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
					egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1200).call(()=>{
						let npcbiao = RES.getRes("gukehanhuabiao_json");
						let suijinpc = Math.floor(Math.random() * npcbiao.length);
						let mingzi = npcbiao[suijinpc].name;
						let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
						let jiacheng = Math.floor(Math.random() * 15) + 1;
						let suijishijie = Math.floor(Math.random() * 100);
						if(suijishijie > 80){
							if(Gerenshuxing.paihangbangshuju.length >= 60){
								let suijishu = Math.floor(Math.random() * 50);
								jiacheng = 50 - suijishu + 20;
								mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
								touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
								this.guyuanjiazaitouxiang1(touxiang);			
							}
						}
						this.fandianguyuan.xitongtouxiang.source = touxiang;
						this.fandianguyuan.mingzi.text = mingzi;
						this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
						this.fandianguyuan.shuoming.text = "正在寻觅店员";
						this.fandianguyuan.but_zhaopin.enabled = false;
						this.fandianguyuan.but_zhaopin.alpha = 0;
						this.fandianguyuan.but_jiepin.enabled = false;
						this.fandianguyuan.but_jiepin.alpha = 0;
						this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
						egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1300).call(()=>{
							let npcbiao = RES.getRes("gukehanhuabiao_json");
							let suijinpc = Math.floor(Math.random() * npcbiao.length);
							let mingzi = npcbiao[suijinpc].name;
							let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
							let jiacheng = Math.floor(Math.random() * 15) + 1;
							let suijishijie = Math.floor(Math.random() * 100);
							if(suijishijie > 80){
								if(Gerenshuxing.paihangbangshuju.length >= 60){
									let suijishu = Math.floor(Math.random() * 50);
									jiacheng = 50 - suijishu + 20;
									mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
									touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
									this.guyuanjiazaitouxiang1(touxiang);			
								}
							}
							this.fandianguyuan.xitongtouxiang.source = touxiang;
							this.fandianguyuan.mingzi.text = mingzi;
							this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
							this.fandianguyuan.shuoming.text = "正在寻觅店员";
							this.fandianguyuan.but_zhaopin.enabled = false;
							this.fandianguyuan.but_zhaopin.alpha = 0;
							this.fandianguyuan.but_jiepin.enabled = false;
							this.fandianguyuan.but_jiepin.alpha = 0;
							this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
							egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1400).call(()=>{
								let npcbiao = RES.getRes("gukehanhuabiao_json");
								let suijinpc = Math.floor(Math.random() * npcbiao.length);
								let mingzi = npcbiao[suijinpc].name;
								let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
								let jiacheng = Math.floor(Math.random() * 15) + 1;
								let suijishijie = Math.floor(Math.random() * 100);
								if(suijishijie > 80){
									if(Gerenshuxing.paihangbangshuju.length >= 60){
										let suijishu = Math.floor(Math.random() * 50);
										jiacheng = 50 - suijishu + 20;
										mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
										touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
										this.guyuanjiazaitouxiang1(touxiang);			
									}
								}
								this.fandianguyuan.xitongtouxiang.source = touxiang;
								this.fandianguyuan.mingzi.text = mingzi;
								this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
								this.fandianguyuan.shuoming.text = "正在寻觅店员";
								this.fandianguyuan.but_zhaopin.enabled = false;
								this.fandianguyuan.but_zhaopin.alpha = 0;
								this.fandianguyuan.but_jiepin.enabled = false;
								this.fandianguyuan.but_jiepin.alpha = 0;
								this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
								egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1500).call(()=>{
									let npcbiao = RES.getRes("gukehanhuabiao_json");
									let suijinpc = Math.floor(Math.random() * npcbiao.length);
									let mingzi = npcbiao[suijinpc].name;
									let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
									let jiacheng = Math.floor(Math.random() * 15) + 1;
									let suijishijie = Math.floor(Math.random() * 100);
									if(suijishijie > 80){
										if(Gerenshuxing.paihangbangshuju.length >= 60){
											let suijishu = Math.floor(Math.random() * 50);
											jiacheng = 50 - suijishu + 20;
											mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
											touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
											this.guyuanjiazaitouxiang1(touxiang);			
										}
									}
									this.fandianguyuan.xitongtouxiang.source = touxiang;
									this.fandianguyuan.mingzi.text = mingzi;
									this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
									this.fandianguyuan.shuoming.text = "正在寻觅店员";
									this.fandianguyuan.but_zhaopin.enabled = false;
									this.fandianguyuan.but_zhaopin.alpha = 0;
									this.fandianguyuan.but_jiepin.enabled = false;
									this.fandianguyuan.but_jiepin.alpha = 0;
									this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
									egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1600).call(()=>{
										let npcbiao = RES.getRes("gukehanhuabiao_json");
										let suijinpc = Math.floor(Math.random() * npcbiao.length);
										let mingzi = npcbiao[suijinpc].name;
										let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
										let jiacheng = Math.floor(Math.random() * 15) + 1;
										let suijishijie = Math.floor(Math.random() * 100);
										if(suijishijie > 80){
											if(Gerenshuxing.paihangbangshuju.length >= 60){
												let suijishu = Math.floor(Math.random() * 50);
												jiacheng = 50 - suijishu + 20;
												mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
												touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
												this.guyuanjiazaitouxiang1(touxiang);			
											}
										}
										this.fandianguyuan.xitongtouxiang.source = touxiang;
										this.fandianguyuan.mingzi.text = mingzi;
										this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
										this.fandianguyuan.shuoming.text = "正在寻觅店员";
										this.fandianguyuan.but_zhaopin.enabled = false;
										this.fandianguyuan.but_zhaopin.alpha = 0;
										this.fandianguyuan.but_jiepin.enabled = false;
										this.fandianguyuan.but_jiepin.alpha = 0;
										this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
										egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1700).call(()=>{
											let npcbiao = RES.getRes("gukehanhuabiao_json");
											let suijinpc = Math.floor(Math.random() * npcbiao.length);
											let mingzi = npcbiao[suijinpc].name;
											let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
											let jiacheng = Math.floor(Math.random() * 15) + 1;
											let suijishijie = Math.floor(Math.random() * 100);
											this.guyuan3leixing = 1;
											if(suijishijie > 80){
												if(Gerenshuxing.paihangbangshuju.length >= 60){
													let suijishu = Math.floor(Math.random() * 50);
													jiacheng = 50 - suijishu + 20;
													mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
													touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
													this.guyuan3leixing = 2;
													this.guyuanjiazaitouxiang1(touxiang);			
												}
											}
											this.guyuan3mingzi = mingzi;
											this.guyuan3touxiang = touxiang;
											this.guyuan3jiacheng = jiacheng;
											this.fandianguyuan.xitongtouxiang.source = touxiang;
											this.fandianguyuan.mingzi.text = mingzi;
											this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
											this.fandianguyuan.shuoming.text = "正在寻觅店员";
											this.fandianguyuan.but_zhaopin.enabled = false;
											this.fandianguyuan.but_zhaopin.alpha = 0;
											this.fandianguyuan.but_jiepin.enabled = false;
											this.fandianguyuan.but_jiepin.alpha = 0;
											this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
											egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1800).call(()=>{
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][9] = this.guyuan3leixing;
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][14] = this.guyuan3mingzi;
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][15] = this.guyuan3touxiang;
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][20] = this.guyuan3jiacheng;
												Weblianjie.fasongshuju("code:101","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
													+ '"guyuanhao"' +":"+ '"3"' +","
													+ '"guyuanleixing"' +":"+ '"' + this.guyuan3leixing + '"' +","
													+ '"guyuanmingzi"' +":"+ '"' + this.guyuan3mingzi + '"' +","
													+ '"guyuantouxiang"' +":"+ '"' + this.guyuan3touxiang + '"' +","
													+ '"dianpuid"' +":"+ '"' + this.dangqianbushu + '"' +","
													+ '"guyuanjiacheng"' +":"+ '"' + this.guyuan3jiacheng + '"' +"}");
												this.fandianjiemian.removeChild(this.fandianguyuan);
												Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
												this.fandianbufen();
												this.dianjiguyuan3();
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	}

	public async zhaopinguyuan1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.zhaopinguyuan1chenggong,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public zhaopinguyuan1chenggong(){
		this.guyuan1leixing = 0;
		this.guyuan1mingzi = "0";
	 	this.guyuan1touxiang = "0";
	 	this.guyuan1jiacheng = 0;
		let npcbiao = RES.getRes("gukehanhuabiao_json");
		let suijinpc = Math.floor(Math.random() * npcbiao.length);
		let mingzi = npcbiao[suijinpc].name;
		let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
		let jiacheng = Math.floor(Math.random() * 15) + 1;
		let suijishijie = Math.floor(Math.random() * 100);
		if(suijishijie > 80){
			if(Gerenshuxing.paihangbangshuju.length >= 60){
				let suijishu = Math.floor(Math.random() * 50);
				jiacheng = 50 - suijishu + 20;
				mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
				touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
				this.guyuanjiazaitouxiang1(touxiang);			
			}
		}
		this.fandianguyuan.xitongtouxiang.source = touxiang;
		this.fandianguyuan.mingzi.text = mingzi;
		this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
		this.fandianguyuan.shuoming.text = "正在寻觅店员";
		this.fandianguyuan.but_zhaopin.enabled = false;
		this.fandianguyuan.but_zhaopin.alpha = 0;
		this.fandianguyuan.but_jiepin.enabled = false;
		this.fandianguyuan.but_jiepin.alpha = 0;
		this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
		egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(500).call(()=>{
			let npcbiao = RES.getRes("gukehanhuabiao_json");
			let suijinpc = Math.floor(Math.random() * npcbiao.length);
			let mingzi = npcbiao[suijinpc].name;
			let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
			let jiacheng = Math.floor(Math.random() * 15) + 1;
			let suijishijie = Math.floor(Math.random() * 100);
			if(suijishijie > 80){
				if(Gerenshuxing.paihangbangshuju.length >= 60){
					let suijishu = Math.floor(Math.random() * 50);
					jiacheng = 50 - suijishu + 20;
					mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
					touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
					this.guyuanjiazaitouxiang1(touxiang);			
				}
			}
			this.fandianguyuan.xitongtouxiang.source = touxiang;
			this.fandianguyuan.mingzi.text = mingzi;
			this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
			this.fandianguyuan.shuoming.text = "正在寻觅店员";
			this.fandianguyuan.but_zhaopin.enabled = false;
			this.fandianguyuan.but_zhaopin.alpha = 0;
			this.fandianguyuan.but_jiepin.enabled = false;
			this.fandianguyuan.but_jiepin.alpha = 0;
			this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
			egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(800).call(()=>{
				let npcbiao = RES.getRes("gukehanhuabiao_json");
				let suijinpc = Math.floor(Math.random() * npcbiao.length);
				let mingzi = npcbiao[suijinpc].name;
				let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
				let jiacheng = Math.floor(Math.random() * 15) + 1;
				let suijishijie = Math.floor(Math.random() * 100);
				if(suijishijie > 80){
					if(Gerenshuxing.paihangbangshuju.length >= 60){
						let suijishu = Math.floor(Math.random() * 50);
						jiacheng = 50 - suijishu + 20;
						mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
						touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
						this.guyuanjiazaitouxiang1(touxiang);			
					}
				}
				this.fandianguyuan.xitongtouxiang.source = touxiang;
				this.fandianguyuan.mingzi.text = mingzi;
				this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
				this.fandianguyuan.shuoming.text = "正在寻觅店员";
				this.fandianguyuan.but_zhaopin.enabled = false;
				this.fandianguyuan.but_zhaopin.alpha = 0;
				this.fandianguyuan.but_jiepin.enabled = false;
				this.fandianguyuan.but_jiepin.alpha = 0;
				this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
				egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1100).call(()=>{
					let npcbiao = RES.getRes("gukehanhuabiao_json");
					let suijinpc = Math.floor(Math.random() * npcbiao.length);
					let mingzi = npcbiao[suijinpc].name;
					let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
					let jiacheng = Math.floor(Math.random() * 15) + 1;
					let suijishijie = Math.floor(Math.random() * 100);
					if(suijishijie > 80){
						if(Gerenshuxing.paihangbangshuju.length >= 60){
							let suijishu = Math.floor(Math.random() * 50);
							jiacheng = 50 - suijishu + 20;
							mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
							touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
							this.guyuanjiazaitouxiang1(touxiang);			
						}
					}
					this.fandianguyuan.xitongtouxiang.source = touxiang;
					this.fandianguyuan.mingzi.text = mingzi;
					this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
					this.fandianguyuan.shuoming.text = "正在寻觅店员";
					this.fandianguyuan.but_zhaopin.enabled = false;
					this.fandianguyuan.but_zhaopin.alpha = 0;
					this.fandianguyuan.but_jiepin.enabled = false;
					this.fandianguyuan.but_jiepin.alpha = 0;
					this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
					egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1200).call(()=>{
						let npcbiao = RES.getRes("gukehanhuabiao_json");
						let suijinpc = Math.floor(Math.random() * npcbiao.length);
						let mingzi = npcbiao[suijinpc].name;
						let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
						let jiacheng = Math.floor(Math.random() * 15) + 1;
						let suijishijie = Math.floor(Math.random() * 100);
						if(suijishijie > 80){
							if(Gerenshuxing.paihangbangshuju.length >= 60){
								let suijishu = Math.floor(Math.random() * 50);
								jiacheng = 50 - suijishu + 20;
								mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
								touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
								this.guyuanjiazaitouxiang1(touxiang);			
							}
						}
						this.fandianguyuan.xitongtouxiang.source = touxiang;
						this.fandianguyuan.mingzi.text = mingzi;
						this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
						this.fandianguyuan.shuoming.text = "正在寻觅店员";
						this.fandianguyuan.but_zhaopin.enabled = false;
						this.fandianguyuan.but_zhaopin.alpha = 0;
						this.fandianguyuan.but_jiepin.enabled = false;
						this.fandianguyuan.but_jiepin.alpha = 0;
						this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
						egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1300).call(()=>{
							let npcbiao = RES.getRes("gukehanhuabiao_json");
							let suijinpc = Math.floor(Math.random() * npcbiao.length);
							let mingzi = npcbiao[suijinpc].name;
							let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
							let jiacheng = Math.floor(Math.random() * 15) + 1;
							let suijishijie = Math.floor(Math.random() * 100);
							if(suijishijie > 80){
								if(Gerenshuxing.paihangbangshuju.length >= 60){
									let suijishu = Math.floor(Math.random() * 50);
									jiacheng = 50 - suijishu + 20;
									mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
									touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
									this.guyuanjiazaitouxiang1(touxiang);			
								}
							}
							this.fandianguyuan.xitongtouxiang.source = touxiang;
							this.fandianguyuan.mingzi.text = mingzi;
							this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
							this.fandianguyuan.shuoming.text = "正在寻觅店员";
							this.fandianguyuan.but_zhaopin.enabled = false;
							this.fandianguyuan.but_zhaopin.alpha = 0;
							this.fandianguyuan.but_jiepin.enabled = false;
							this.fandianguyuan.but_jiepin.alpha = 0;
							this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
							egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1400).call(()=>{
								let npcbiao = RES.getRes("gukehanhuabiao_json");
								let suijinpc = Math.floor(Math.random() * npcbiao.length);
								let mingzi = npcbiao[suijinpc].name;
								let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
								let jiacheng = Math.floor(Math.random() * 15) + 1;
								let suijishijie = Math.floor(Math.random() * 100);
								if(suijishijie > 80){
									if(Gerenshuxing.paihangbangshuju.length >= 60){
										let suijishu = Math.floor(Math.random() * 50);
										jiacheng = 50 - suijishu + 20;
										mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
										touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
										this.guyuanjiazaitouxiang1(touxiang);			
									}
								}
								this.fandianguyuan.xitongtouxiang.source = touxiang;
								this.fandianguyuan.mingzi.text = mingzi;
								this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
								this.fandianguyuan.shuoming.text = "正在寻觅店员";
								this.fandianguyuan.but_zhaopin.enabled = false;
								this.fandianguyuan.but_zhaopin.alpha = 0;
								this.fandianguyuan.but_jiepin.enabled = false;
								this.fandianguyuan.but_jiepin.alpha = 0;
								this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
								egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1500).call(()=>{
									let npcbiao = RES.getRes("gukehanhuabiao_json");
									let suijinpc = Math.floor(Math.random() * npcbiao.length);
									let mingzi = npcbiao[suijinpc].name;
									let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
									let jiacheng = Math.floor(Math.random() * 15) + 1;
									let suijishijie = Math.floor(Math.random() * 100);
									if(suijishijie > 80){
										if(Gerenshuxing.paihangbangshuju.length >= 60){
											let suijishu = Math.floor(Math.random() * 50);
											jiacheng = 50 - suijishu + 20;
											mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
											touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
											this.guyuanjiazaitouxiang1(touxiang);			
										}
									}
									this.fandianguyuan.xitongtouxiang.source = touxiang;
									this.fandianguyuan.mingzi.text = mingzi;
									this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
									this.fandianguyuan.shuoming.text = "正在寻觅店员";
									this.fandianguyuan.but_zhaopin.enabled = false;
									this.fandianguyuan.but_zhaopin.alpha = 0;
									this.fandianguyuan.but_jiepin.enabled = false;
									this.fandianguyuan.but_jiepin.alpha = 0;
									this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
									egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1600).call(()=>{
										let npcbiao = RES.getRes("gukehanhuabiao_json");
										let suijinpc = Math.floor(Math.random() * npcbiao.length);
										let mingzi = npcbiao[suijinpc].name;
										let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
										let jiacheng = Math.floor(Math.random() * 15) + 1;
										let suijishijie = Math.floor(Math.random() * 100);
										if(suijishijie > 80){
											if(Gerenshuxing.paihangbangshuju.length >= 60){
												let suijishu = Math.floor(Math.random() * 50);
												jiacheng = 50 - suijishu + 20;
												mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
												touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
												this.guyuanjiazaitouxiang1(touxiang);			
											}
										}
										this.fandianguyuan.xitongtouxiang.source = touxiang;
										this.fandianguyuan.mingzi.text = mingzi;
										this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
										this.fandianguyuan.shuoming.text = "正在寻觅店员";
										this.fandianguyuan.but_zhaopin.enabled = false;
										this.fandianguyuan.but_zhaopin.alpha = 0;
										this.fandianguyuan.but_jiepin.enabled = false;
										this.fandianguyuan.but_jiepin.alpha = 0;
										this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
										egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1700).call(()=>{
											let npcbiao = RES.getRes("gukehanhuabiao_json");
											let suijinpc = Math.floor(Math.random() * npcbiao.length);
											let mingzi = npcbiao[suijinpc].name;
											let touxiang = npcbiao[suijinpc].gktouxiang + "_png";
											let jiacheng = Math.floor(Math.random() * 15) + 1;
											let suijishijie = Math.floor(Math.random() * 100);
											this.guyuan1leixing = 1;
											if(suijishijie > 80){
												if(Gerenshuxing.paihangbangshuju.length >= 60){
													let suijishu = Math.floor(Math.random() * 50);
													jiacheng = 50 - suijishu + 20;
													mingzi = Gerenshuxing.paihangbangshuju[suijishu].nickname;
													touxiang = Gerenshuxing.paihangbangshuju[suijishu].url;
													this.guyuan1leixing = 2;
													this.guyuanjiazaitouxiang1(touxiang);			
												}
											}
											this.guyuan1mingzi = mingzi;
											this.guyuan1touxiang = touxiang;
											this.guyuan1jiacheng = jiacheng;
											this.fandianguyuan.xitongtouxiang.source = touxiang;
											this.fandianguyuan.mingzi.text = mingzi;
											this.fandianguyuan.jinengshu.text = "人气 + " + jiacheng;
											this.fandianguyuan.shuoming.text = "正在寻觅店员";
											this.fandianguyuan.but_zhaopin.enabled = false;
											this.fandianguyuan.but_zhaopin.alpha = 0;
											this.fandianguyuan.but_jiepin.enabled = false;
											this.fandianguyuan.but_jiepin.alpha = 0;
											this.fandianguyuan.but_zhaopin.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.zhaopinguyuan1,this);
											egret.Tween.get(this.fandianguyuan.xitongtouxiang).wait(1800).call(()=>{
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][7] = this.guyuan1leixing;
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][10] = this.guyuan1mingzi;
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][11] = this.guyuan1touxiang;
												Gerencaipudengji.jiedaoshuju[this.dangqianbushu][18] = this.guyuan1jiacheng;
												Weblianjie.fasongshuju("code:101","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
													+ '"guyuanhao"' +":"+ '"1"' +","
													+ '"guyuanleixing"' +":"+ '"' + this.guyuan1leixing + '"' +","
													+ '"guyuanmingzi"' +":"+ '"' + this.guyuan1mingzi + '"' +","
													+ '"guyuantouxiang"' +":"+ '"' + this.guyuan1touxiang + '"' +","
													+ '"dianpuid"' +":"+ '"' + this.dangqianbushu + '"' +","
													+ '"guyuanjiacheng"' +":"+ '"' + this.guyuan1jiacheng + '"' +"}");
												this.fandianjiemian.removeChild(this.fandianguyuan);
												Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
												this.fandianbufen();
												this.dianjiguyuan1();
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	}



	public jiepinguyuan1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.guyuan1leixing = 0;
		this.guyuan1mingzi = "0";
	 	this.guyuan1touxiang = "0";
	 	this.guyuan1jiacheng = 0;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][7] = this.guyuan1leixing;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][10] = this.guyuan1mingzi;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][11] = this.guyuan1touxiang;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][18] = this.guyuan1jiacheng;
		Weblianjie.fasongshuju("code:101","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"guyuanhao"' +":"+ '"1"' +","
			+ '"guyuanleixing"' +":"+ '"' + this.guyuan1leixing + '"' +","
			+ '"guyuanmingzi"' +":"+ '"' + this.guyuan1mingzi + '"' +","
			+ '"guyuantouxiang"' +":"+ '"' + this.guyuan1touxiang + '"' +","
			+ '"dianpuid"' +":"+ '"' + this.dangqianbushu + '"' +","
			+ '"guyuanjiacheng"' +":"+ '"' + this.guyuan1jiacheng + '"' +"}");
		this.fandianjiemian.removeChild(this.fandianguyuan);
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
		this.fandianbufen();
		this.dianjiguyuan1();
	}

	public jiepinguyuan2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.guyuan2leixing = 0;
		this.guyuan2mingzi = "0";
	 	this.guyuan2touxiang = "0";
	 	this.guyuan2jiacheng = 0;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][8] = this.guyuan2leixing;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][12] = this.guyuan2mingzi;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][13] = this.guyuan2touxiang;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][19] = this.guyuan2jiacheng;
		Weblianjie.fasongshuju("code:101","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"guyuanhao"' +":"+ '"2"' +","
			+ '"guyuanleixing"' +":"+ '"' + this.guyuan2leixing + '"' +","
			+ '"guyuanmingzi"' +":"+ '"' + this.guyuan2mingzi + '"' +","
			+ '"guyuantouxiang"' +":"+ '"' + this.guyuan2touxiang + '"' +","
			+ '"dianpuid"' +":"+ '"' + this.dangqianbushu + '"' +","
			+ '"guyuanjiacheng"' +":"+ '"' + this.guyuan2jiacheng + '"' +"}");
		this.fandianjiemian.removeChild(this.fandianguyuan);
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
		this.fandianbufen();
		this.dianjiguyuan2();
	}

	public jiepinguyuan3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.guyuan3leixing = 0;
		this.guyuan3mingzi = "0";
	 	this.guyuan3touxiang = "0";
	 	this.guyuan3jiacheng = 0;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][9] = this.guyuan3leixing;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][14] = this.guyuan3mingzi;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][15] = this.guyuan3touxiang;
		Gerencaipudengji.jiedaoshuju[this.dangqianbushu][20] = this.guyuan3jiacheng;
		Weblianjie.fasongshuju("code:101","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"guyuanhao"' +":"+ '"3"' +","
			+ '"guyuanleixing"' +":"+ '"' + this.guyuan3leixing + '"' +","
			+ '"guyuanmingzi"' +":"+ '"' + this.guyuan3mingzi + '"' +","
			+ '"guyuantouxiang"' +":"+ '"' + this.guyuan3touxiang + '"' +","
			+ '"dianpuid"' +":"+ '"' + this.dangqianbushu + '"' +","
			+ '"guyuanjiacheng"' +":"+ '"' + this.guyuan3jiacheng + '"' +"}");
		this.fandianjiemian.removeChild(this.fandianguyuan);
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
		this.fandianbufen();
		this.dianjiguyuan3();
	}



	public guanbiguyuan(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.fandianjiemian.removeChild(this.fandianguyuan);
	}

	public jiazaiguyuan1touxiangsj(youxiangurl){
		var imgLoader: egret.ImageLoader = new egret.ImageLoader;
		/*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
			imgLoader.load(Gerenshuxing.touxiang);
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}else{
			imgLoader.load("http://47.114.145.229//resource/wxtx/undefined.png");
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}*/
		imgLoader.load(youxiangurl);
		imgLoader.once(egret.Event.COMPLETE, this.xianshiguyuan1touxiangsj, this);
		
	}

	public xianshiguyuan1touxiangsj(evt: egret.Event):void{
			if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width=this.fandianjiemian.guyuantxgroup1.width;
            head.height=this.fandianjiemian.guyuantxgroup1.height;
            this.fandianjiemian.guyuantxgroup1.addChild(head);
			}
		}

	public guyuanjiazaitouxiang1(youxiangurl){
		var imgLoader: egret.ImageLoader = new egret.ImageLoader;
		/*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
			imgLoader.load(Gerenshuxing.touxiang);
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}else{
			imgLoader.load("http://47.114.145.229//resource/wxtx/undefined.png");
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}*/
		imgLoader.load(youxiangurl);
		imgLoader.once(egret.Event.COMPLETE, this.xianshiguyuanzutouxiang1, this);
		
	}

	public xianshiguyuanzutouxiang1(evt: egret.Event):void{
			if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width=this.fandianguyuan.touxiangzu.width;
            head.height=this.fandianguyuan.touxiangzu.height;
            this.fandianguyuan.touxiangzu.addChild(head);
			}
		}
	
	public jiazaiguyuan2touxiangsj(youxiangurl){
		var imgLoader: egret.ImageLoader = new egret.ImageLoader;
		/*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
			imgLoader.load(Gerenshuxing.touxiang);
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}else{
			imgLoader.load("http://47.114.145.229//resource/wxtx/undefined.png");
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}*/
		imgLoader.load(youxiangurl);
		imgLoader.once(egret.Event.COMPLETE, this.xianshiguyuan2touxiangsj, this);
		
	}

	public xianshiguyuan2touxiangsj(evt: egret.Event):void{
			if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width=this.fandianjiemian.guyuantxgroup2.width;
            head.height=this.fandianjiemian.guyuantxgroup2.height;
            this.fandianjiemian.guyuantxgroup2.addChild(head);
			}
		}

	public jiazaiguyuan3touxiangsj(youxiangurl){
		var imgLoader: egret.ImageLoader = new egret.ImageLoader;
		/*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
			imgLoader.load(Gerenshuxing.touxiang);
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}else{
			imgLoader.load("http://47.114.145.229//resource/wxtx/undefined.png");
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}*/
		imgLoader.load(youxiangurl);
		imgLoader.once(egret.Event.COMPLETE, this.xianshiguyuan3touxiangsj, this);
		
	}

	public xianshiguyuan3touxiangsj(evt: egret.Event):void{
			if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width=this.fandianjiemian.guyuantxgroup3.width;
            head.height=this.fandianjiemian.guyuantxgroup3.height;
            this.fandianjiemian.guyuantxgroup3.addChild(head);
			}
		}

	public huoquzijitouxiang(youxiangurl){
		var imgLoader: egret.ImageLoader = new egret.ImageLoader;
		/*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
			imgLoader.load(Gerenshuxing.touxiang);
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}else{
			imgLoader.load("http://47.114.145.229//resource/wxtx/undefined.png");
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}*/
		imgLoader.load(youxiangurl);
		imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		
	}

	public xianshigerentouxiang(evt: egret.Event):void{
			if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width=this.fandianjiemian.dianzutxgroup.width;
            head.height=this.fandianjiemian.dianzutxgroup.height;
            this.fandianjiemian.dianzutxgroup.addChild(head);
			}
		}

	public youbiaotouxiang(){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		/*if(Gerenshuxing.touxiangbaocunzhuangtai == true){
			imgLoader.load(Gerenshuxing.touxiang);
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}else{
			imgLoader.load("http://47.114.145.229//resource/wxtx/undefined.png");
			imgLoader.once(egret.Event.COMPLETE, this.xianshigerentouxiang, this);
		}*/
		youbiaoLoader.load(Gerenshuxing.touxiang);
		youbiaoLoader.once(egret.Event.COMPLETE, this.youbiaoxianshitouxiang, this);
		
	}

	public youbiaoxianshitouxiang(evt: egret.Event):void{
			if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
            head.x = 0;
            head.y = 0;
            head.width=this.youbiaotouxiangzu.width;
            head.height=this.youbiaotouxiangzu.height;
            this.youbiaotouxiangzu.addChild(head);
			}
		}


	public xiaofeidianji(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
		this.suijijiemian = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
		this.suijijiemian.but_queding0.enabled = false;
		this.suijijiemian.but_queding0.alpha = 0;
		this.suijijiemian.but_queding.enabled = true;
		this.suijijiemian.but_queding.alpha = 1;
		this.suijijiemian.but_shuangbei.enabled = true;
		this.suijijiemian.but_shuangbei.alpha = 1;
		let shengchengcaipin = [];
		switch(this.jiedaopeizhi.type){
			case "1":
				for(var a = 0;a<Gerenshuxing.jiesuocaipin.length;a++){
					if(parseInt(Gerenshuxing.jiesuocaipin[a]) >= 1000 && parseInt(Gerenshuxing.jiesuocaipin[a]) < 2000){
						shengchengcaipin.push(Gerenshuxing.jiesuocaipin[a]);
					}
				}
				break;
			case "2":
				for(var a = 0;a<Gerenshuxing.jiesuocaipin.length;a++){
					if(parseInt(Gerenshuxing.jiesuocaipin[a]) >= 2000 && parseInt(Gerenshuxing.jiesuocaipin[a]) < 3000){
						shengchengcaipin.push(Gerenshuxing.jiesuocaipin[a]);
					}
				}
				break;
			case "3":
				for(var a = 0;a<Gerenshuxing.jiesuocaipin.length;a++){
					if(parseInt(Gerenshuxing.jiesuocaipin[a]) >= 3000 && parseInt(Gerenshuxing.jiesuocaipin[a]) < 4000){
						shengchengcaipin.push(Gerenshuxing.jiesuocaipin[a]);
					}
				}
				break;
			case "4":
				for(var a = 0;a<Gerenshuxing.jiesuocaipin.length;a++){
					if(parseInt(Gerenshuxing.jiesuocaipin[a]) >= 4000 && parseInt(Gerenshuxing.jiesuocaipin[a]) < 5000){
						shengchengcaipin.push(Gerenshuxing.jiesuocaipin[a]);
					}
				}
				break;
		}
		let suijixiabiao = Math.floor(Math.random() * shengchengcaipin.length);
		this.jianglileixing = shengchengcaipin[suijixiabiao];
		this.kouchuleixing = "1";
		this.kouchushuliang = this.fandianpeizhi[2];
		let jianglijignyan = Math.floor(Math.random() * 100) + 50;
		this.jianglishuliang = jianglijignyan;
		this.suijijiemian.tishiwenzi.text = "你品尝了一道美味佳肴，似乎与自己所掌握的烹饪手艺不同，大受启发！";
		this.kouchutubiaopanduan(this.kouchuleixing,this.kouchushuliang);
		this.jianglitubiaopanduan(this.jianglileixing,this.jianglishuliang);
		this.suijijiemian.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP,this.suijiqueding,this);
		this.suijijiemian.but_shuangbei.addEventListener(egret.TouchEvent.TOUCH_TAP,this.suijishuangbei,this);
	}

	public shouyindianji(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
		this.suijijiemian = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
		this.suijijiemian.but_queding0.enabled = true;
		this.suijijiemian.but_queding0.alpha = 1;
		this.suijijiemian.but_queding.enabled = false;
		this.suijijiemian.but_queding.alpha = 0;
		this.suijijiemian.but_shuangbei.enabled = false;
		this.suijijiemian.but_shuangbei.alpha = 0;
		this.suijijiemian.jiangli2.text = "";
		this.suijijiemian.jiangli1.text = "+ " + this.fandianpeizhi[5];
		this.suijijiemian.jiangliicon1.source = "img_qian_png";
		this.suijijiemian.jiangliicon2.source = "";
		this.suijijiemian.tishiwenzi.text = "您离开店铺的这段时间，店铺的营业额为：" + this.fandianpeizhi[5] + "。\n现在为您全部取出。";
		this.suijijiemian.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.quedingquqian,this);
	}

	public quedingquqian(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
		this.jianglijiemian = new Jianglijiesuanui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
		this.fasongjiezhang();
		this.jianglijiemian.jiangliicon.source = "img_qian_png";
		this.jianglijiemian.jianglishuliang.text = "+ " + this.fandianpeizhi[5];
		this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
	}

	public fasongjiezhang(){
		Weblianjie.fasongshuju("code:046","{" + '"dianpuid"' +":"+ '"' + this.dangqianbushu + '"' +","
				+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}

	public shougou(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
		this.suijijiemian = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
		this.keyishougou = false;
		let zhangwoleixing:string;
		let yizhangwo = [];
		switch(this.jiedaopeizhi.type){
			case "1":
				zhangwoleixing = "小炒";
				for(var b = 0;b<Gerenshuxing.jiesuocaipin.length;b++){
					if(parseInt(Gerenshuxing.jiesuocaipin[b]) >= 1000 && parseInt(Gerenshuxing.jiesuocaipin[b]) < 2000){
						yizhangwo.push(Gerenshuxing.jiesuocaipin[b]);
					}
				}
				break;
			case "2":
				zhangwoleixing = "火锅";
				for(var b = 0;b<Gerenshuxing.jiesuocaipin.length;b++){
					if(parseInt(Gerenshuxing.jiesuocaipin[b]) >= 2000 && parseInt(Gerenshuxing.jiesuocaipin[b]) < 3000){
						yizhangwo.push(Gerenshuxing.jiesuocaipin[b]);
					}
				}
				break;
			case "3":
				zhangwoleixing = "小吃";
				for(var b = 0;b<Gerenshuxing.jiesuocaipin.length;b++){
					if(parseInt(Gerenshuxing.jiesuocaipin[b]) >= 3000 && parseInt(Gerenshuxing.jiesuocaipin[b]) < 4000){
						yizhangwo.push(Gerenshuxing.jiesuocaipin[b]);
					}
				}
				break;
			case "4":
				zhangwoleixing = "早餐";
				for(var b = 0;b<Gerenshuxing.jiesuocaipin.length;b++){
					if(parseInt(Gerenshuxing.jiesuocaipin[b]) >= 4000 && parseInt(Gerenshuxing.jiesuocaipin[b]) < 5000){
						yizhangwo.push(Gerenshuxing.jiesuocaipin[b]);
					}
				}
				break;
		}
		this.suijijiemian.tishiwenzi.text = "收购[" + this.jiedaopeizhi.name + "]作为自己的经验饭馆，需满足以下条件:" + " \n " + "1.掌握的“" + zhangwoleixing + "”菜品种类达到：" + yizhangwo.length  + "/"
		+ this.jiedaopeizhi.xuyaoshuliang+ "种。" + "\n"  + "2.拥有的钱币数量大于等于店铺每月租金:" + Gerenshuxing.jinbizhi  + "/" + this.fandianpeizhi[1] +"。";
		this.suijijiemian.but_queding0.enabled = true;
		this.suijijiemian.but_queding0.alpha = 1;
		this.suijijiemian.but_queding.enabled = false;
		this.suijijiemian.but_queding.alpha = 0;
		this.suijijiemian.but_shuangbei.enabled = false;
		this.suijijiemian.but_shuangbei.alpha = 0;
		this.suijijiemian.jiangli2.text = "";
		this.suijijiemian.jiangli1.text = "";
		this.suijijiemian.jiangliicon1.source = "";
		this.suijijiemian.jiangliicon2.source = "";
		if(yizhangwo.length >= parseInt(this.jiedaopeizhi.xuyaoshuliang) && Gerenshuxing.jinbizhi >= this.fandianpeizhi[1]){
			this.keyishougou = true;
		}
		this.suijijiemian.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.quedingshougou,this);
	}

	public quedingshougou(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.keyishougou == true){
			Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
			Gameguanli.Kongzhitai().cuowutishixinxi("恭喜您，成功收购["+ this.jiedaopeizhi.name +"]！饭店经营为30天！");
			Gameguanli.Kongzhitai().paomadengui("恭喜“"+ Gerenshuxing.mingzi +"”成功收购["+ this.jiedaopeizhi.name +"]！期待饭店生意红红火火！");
			 Weblianjie.fasongshuju("code:043","{" + '"dianpuid"' +":"+ '"' + this.dangqianbushu + '"' +","
				+ '"shougoufeiyong"' +":"+ '"' + this.fandianpeizhi[1] + '"' +"," 
				+ '"shougouqixian"' +":"+ "30" +","
				+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		}else{
			Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
			Gameguanli.Kongzhitai().cuowutishixinxi("很遗憾，您目前还不满足["+ this.jiedaopeizhi.name +"]的收购条件！");
		}
	}




	public chufadianpu1(){
		if(this.jiedaopeizhi.suijiliebiao == "0"){
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
			let dangqianshuzi = parseInt(this.jiedaopeizhi.id);
			if(this.jiedaoteshushijianzu[dangqianshuzi] == "0"){
				this.fandianbufen();
			}else{
				this.chufateshushijian(this.jiedaoteshushijianzu[dangqianshuzi]);
				this.jiedaoteshushijianzu[dangqianshuzi] = "0";
				this.teshuxianshishuaxin();
			}
		}else{
			this.but_shaizi.enabled = true;
			this.kaishianniuzu.alpha = 1;
			switch(this.jiedaopeizhi.id){
				case "3":
					if(this.jiedaoteshushijianzu[3] == "0"){
						let chaoshisuiji = Math.floor(Math.random() * 10);
						if(chaoshisuiji > 5){
							this.chaoshimaimai();
						}else{
							this.jiedaosuijichufa();
						}
					}else{
						if(parseInt(this.jiedaoteshushijianzu[3]) <= 15){
							this.chaoshimaimai();
						}else{
							this.chufateshushijian(this.jiedaoteshushijianzu[3]);
							this.jiedaoteshushijianzu[3] = "0";
							this.teshuxianshishuaxin();
						}
					}
					break;
				case "9":
					if(this.jiedaoteshushijianzu[9] == "0"){
						/*let jiajusuiji = Math.floor(Math.random() * 10);
						if(jiajusuiji > 5){
							this.jiajuyouxi();
						}else{
							this.jiedaosuijichufa();
						}*/
						this.jiedaosuijichufa();
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[9]);
						this.jiedaoteshushijianzu[9] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "10":
					if(this.jiedaoteshushijianzu[10] == "0"){
						/*let jiajusuiji = Math.floor(Math.random() * 10);
						if(jiajusuiji > 5){
							this.jiajuyouxi();
						}else{
							this.jiedaosuijichufa();
						}*/
						this.jiedaosuijichufa();
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[10]);
						this.jiedaoteshushijianzu[10] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "12":
					if(this.jiedaoteshushijianzu[12] == "0"){
						/*let jiajusuiji = Math.floor(Math.random() * 10);
						if(jiajusuiji > 5){
							this.jiajuyouxi();
						}else{
							this.jiedaosuijichufa();
						}*/
						this.jiedaosuijichufa();
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[12]);
						this.jiedaoteshushijianzu[12] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "13":
					if(this.jiedaoteshushijianzu[13] == "0"){
						let yaodiansuiji = Math.floor(Math.random() * 10);
						if(yaodiansuiji > 5){
							this.yaodianmaimai();
						}else{
							this.jiedaosuijichufa();
						}
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[13]);
						this.jiedaoteshushijianzu[13] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "14":
					if(this.jiedaoteshushijianzu[14] == "0"){
						/*let jiajusuiji = Math.floor(Math.random() * 10);
						if(jiajusuiji > 5){
							this.jiajuyouxi();
						}else{
							this.jiedaosuijichufa();
						}*/
						this.jiedaosuijichufa();
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[14]);
						this.jiedaoteshushijianzu[14] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "16":
					if(this.jiedaoteshushijianzu[16] == "0"){
						/*let jiajusuiji = Math.floor(Math.random() * 10);
						if(jiajusuiji > 5){
							this.jiajuyouxi();
						}else{
							this.jiedaosuijichufa();
						}*/
						this.jiedaosuijichufa();
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[16]);
						this.jiedaoteshushijianzu[16] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "19":
					if(this.jiedaoteshushijianzu[19] == "0"){
						let caishichangsuiji = Math.floor(Math.random() * 10);
						if(caishichangsuiji <= 4){
							this.caishichangmaimai();
						}else if(caishichangsuiji > 4 && caishichangsuiji < 7){
							this.caishichangjinru();				
						}else{
							this.jiedaosuijichufa();
						}
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[19]);
						this.jiedaoteshushijianzu[19] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "20":
					if(this.jiedaoteshushijianzu[20] == "0"){
						/*let jiajusuiji = Math.floor(Math.random() * 10);
						if(jiajusuiji > 5){
							this.jiajuyouxi();
						}else{
							this.jiedaosuijichufa();
						}*/
						this.jiedaosuijichufa();
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[20]);
						this.jiedaoteshushijianzu[20] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "21":
					if(this.jiedaoteshushijianzu[21] == "0"){
						/*let jiajusuiji = Math.floor(Math.random() * 10);
						if(jiajusuiji > 5){
							this.jiajuyouxi();
						}else{
							this.jiedaosuijichufa();
						}*/
						this.jiedaosuijichufa();
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[21]);
						this.jiedaoteshushijianzu[21] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "23":
					if(this.jiedaoteshushijianzu[23] == "0"){
						let yaodiansuiji = Math.floor(Math.random() * 10);
						if(yaodiansuiji > 5){
							this.peixunmaimai();
						}else{
							this.jiedaosuijichufa();
						}
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[23]);
						this.jiedaoteshushijianzu[23] = "0";
						this.teshuxianshishuaxin();
					}
					break;
				case "24":
					if(this.jiedaoteshushijianzu[24] == "0"){
						/*let jiajusuiji = Math.floor(Math.random() * 10);
						if(jiajusuiji > 5){
							this.jiajuyouxi();
						}else{
							this.jiedaosuijichufa();
						}*/
						this.jiedaosuijichufa();
					}else{
						this.chufateshushijian(this.jiedaoteshushijianzu[24]);
						this.jiedaoteshushijianzu[24] = "0";
						this.teshuxianshishuaxin();
					}
					break;
			}
		}
	}

	public chufateshushijian(shijianid){
		if(shijianid == "101"){
			/*
			101属于战斗模块，这时候应该刷新怪物，进入战斗模式
			*/
			let suijizuidazhi =  Gerenshuxing.xingfudengji * 10;
			let zhuguaishuiji = Math.floor(Math.random() * suijizuidazhi);
			if(zhuguaishuiji == 0){
				zhuguaishuiji = 1;
			}
			let xiaoguai1shuiji =  Math.floor(Math.random() * suijizuidazhi);
			if(xiaoguai1shuiji == 0){
				xiaoguai1shuiji = 1;
			}
			let xiaoguai2shuiji =  Math.floor(Math.random() * suijizuidazhi);
			if(xiaoguai2shuiji == 0){
				xiaoguai2shuiji = 1;
			}
			Gameguanli.Kongzhitai().zhandoujiemianui("kai",zhuguaishuiji + "",xiaoguai1shuiji + "",xiaoguai2shuiji + "");
		}else if(shijianid == "102"){
			/*
			102属于雨水模块，这时候应该扣除健康值
			*/
			let kouchushu = Math.floor(Math.random() * 100);
			if(Gerenshuxing.jiankangzhi >= kouchushu){
				kouchushu = kouchushu;
			}else{
				kouchushu = Gerenshuxing.jiankangzhi;
			}
			this.suijijiemian = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"3"' +","
				+ '"kouchushuliang"' +":"+ '"' + kouchushu + '"' +","
				+ '"leixing"' +":"+ '"0"' +","
				+ '"shuliang"' +":"+ '"0"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
			this.suijijiemian.biaotiwenzidt.text = "霉运连连";
			this.suijijiemian.tishineirongdt.text = "昨日下雨，路上积了一小滩水洼，你踩了上去不慎跌了一跤。";
			this.suijijiemian.tishitupiandt.source = "img_yushui_png";
			this.suijijiemian.quedinganniudt.enabled = true;
			this.suijijiemian.quedinganniudt.alpha = 1;
			this.suijijiemian.quedinganniu0dt.enabled = false;
			this.suijijiemian.quedinganniu0dt.alpha = 0;
			this.suijijiemian.quedinganniu1dt.enabled = false;
			this.suijijiemian.quedinganniu1dt.alpha = 0;
			this.suijijiemian.quedinganniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
			},this);
			this.suijijiemian.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
			},this);
		}else if(shijianid == "103"){
			/*
			102属于乞丐模块，这时候应该扣除金币
			*/
			let kouchushu = Math.floor(Math.random() * 1000);
			if(Gerenshuxing.jinbizhi >= kouchushu){
				kouchushu = kouchushu;
			}else{
				kouchushu = Gerenshuxing.jinbizhi;
			}
			if(Gerenshuxing.meirirenwuone[3] == "0"){
				Weblianjie.fasongshuju("code:161","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"zengjialeixing"' +":"+ '"1"' +"}")
			}
			this.suijijiemian = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"kouchuleixing"' +":"+ '"1"' +","
				+ '"kouchushuliang"' +":"+ '"' + kouchushu + '"' +","
				+ '"leixing"' +":"+ '"0"' +","
				+ '"shuliang"' +":"+ '"0"' +","
				+ '"beishu"' +":"+ '"1"' +"}");
			this.suijijiemian.biaotiwenzidt.text = "霉运连连";
			this.suijijiemian.tishineirongdt.text = "路遇一乞丐对你百般乞讨，不依不饶，无奈之下，只得乖乖给钱。";
			this.suijijiemian.tishitupiandt.source = "img_qigai_png";
			this.suijijiemian.quedinganniudt.enabled = true;
			this.suijijiemian.quedinganniudt.alpha = 1;
			this.suijijiemian.quedinganniu0dt.enabled = false;
			this.suijijiemian.quedinganniu0dt.alpha = 0;
			this.suijijiemian.quedinganniu1dt.enabled = false;
			this.suijijiemian.quedinganniu1dt.alpha = 0;
			this.suijijiemian.quedinganniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
			},this);
			this.suijijiemian.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
			},this);
		}else{
			if(this.parent){
				let teshuchufajiemain = new Teshushijianjiemian();
				this.addChild(teshuchufajiemain);
				teshuchufajiemain.chushihua(shijianid);
			}
		}

	}

	public chaoshimaimai(){
		this.chaoshiteshu = false;
		let chaoshiyongpinid = [];
		let chaoshiyongpinjiage = [];
		for(var i = 0;i<Gerenshuxing.chaoshishangdianbiao.length;i++){
			if(Gerenshuxing.chaoshishangdianbiao[i].shangdianleixing == "1"){
				chaoshiyongpinid.push(Gerenshuxing.chaoshishangdianbiao[i].id);
				chaoshiyongpinjiage.push(Gerenshuxing.chaoshishangdianbiao[i].shoujia);
			}
		}
		for(var k =0;k<6;k++){
			let suijichushou = Math.floor(Math.random() * chaoshiyongpinid.length);
			this.chaoshiid[k] = chaoshiyongpinid[suijichushou];
			this.chaoshijiage[k] = chaoshiyongpinjiage[suijichushou];
			this.chaoshishuliang[k] = 1;
		}
		for(var i = 0;i<Gerenshuxing.chaoshishangdianbiao.length;i++){
			if(Gerenshuxing.chaoshishangdianbiao[i].teshuid == Gerenshuxing.teshushijian){
				this.chaoshiid[0] = Gerenshuxing.chaoshishangdianbiao[i].id;
				this.chaoshijiage[0] = Math.floor(parseInt(Gerenshuxing.chaoshishangdianbiao[i].shoujia) * (parseInt(Gerenshuxing.chaoshishangdianbiao[i].zhekou) / 10));
				this.chaoshishuliang[0] = 1;
				this.chaoshiteshu = true;
				break;
			}
		}
		this.xianshichaoshishangdianjiemian();
	}

	public xianshichaoshishangdianjiemian(){
		this.chaoshigoumaiui = new Chaoshishangdianui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.chaoshigoumaiui);
		this.chaoshigoumaiui.guanbijiemain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.chaoshigoumaiui.heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.chaoshijiemianchushihua();
	}

	public chaoshijiemianchushihua(){
		this.chaoshigoumaiui.biaotilan.text = "超级商店";
		for(var h = 0;h<Gerenshuxing.daojubiao.length;h++){
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[0]){
				this.chaoshitupian[0] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[0] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[1]){
				this.chaoshitupian[1] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[1] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[2]){
				this.chaoshitupian[2] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[2] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[3]){
				this.chaoshitupian[3] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[3] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[4]){
				this.chaoshitupian[4] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[4] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.chaoshiid[5]){
				this.chaoshitupian[5] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.chaoshimingcheng[5] = Gerenshuxing.daojubiao[h].mingcheng;
			};
		}
		this.chaoshigoumaiui.daojutubiao.source = this.chaoshitupian[0];
		this.chaoshigoumaiui.daojutubiao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips1,this);
		this.chaoshigoumaiui.daojutubiao0.source = this.chaoshitupian[1];
		this.chaoshigoumaiui.daojutubiao0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips2,this);
		this.chaoshigoumaiui.daojutubiao1.source = this.chaoshitupian[2];
		this.chaoshigoumaiui.daojutubiao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips3,this);
		this.chaoshigoumaiui.daojutubiao2.source = this.chaoshitupian[3];
		this.chaoshigoumaiui.daojutubiao2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips4,this);
		this.chaoshigoumaiui.daojutubiao3.source = this.chaoshitupian[4];
		this.chaoshigoumaiui.daojutubiao3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips5,this);
		this.chaoshigoumaiui.daojutubiao4.source = this.chaoshitupian[5];
		this.chaoshigoumaiui.daojutubiao4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips6,this);
		/*
		超市的三个福袋特殊制作
		*/
		this.chaoshigoumaiui.daojutubiao5.source = this.chaoshitupian[6];
		this.chaoshigoumaiui.daojutubiao5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips7,this);
		this.chaoshigoumaiui.daojutubiao6.source = this.chaoshitupian[7];
		this.chaoshigoumaiui.daojutubiao6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips8,this);
		this.chaoshigoumaiui.daojutubiao7.source = this.chaoshitupian[8];
		this.chaoshigoumaiui.daojutubiao7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.daojutips9,this);
		if(this.chaoshiteshu == true){
			this.chaoshigoumaiui.zhekoutubiao.alpha = 1;
		}else{
			this.chaoshigoumaiui.zhekoutubiao.alpha = 0;
		}
		if(parseInt(this.chaoshishuliang[0]) <= 0){
			this.chaoshigoumaiui.goumaijine.text = "已售罄";
			this.chaoshigoumaiui.but_goumai.enabled = false;
			this.chaoshigoumaiui.but_goumai.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi1keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine.text = "- " + this.chaoshijiage[0];
			this.chaoshigoumaiui.but_goumai.enabled = true;
			this.chaoshigoumaiui.but_goumai.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi1keng,this);
		}
		if(parseInt(this.chaoshishuliang[1]) <= 0){
			this.chaoshigoumaiui.goumaijine0.text = "已售罄";
			this.chaoshigoumaiui.but_goumai0.enabled = false;
			this.chaoshigoumaiui.but_goumai0.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi2keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine0.text = "- " + this.chaoshijiage[1];
			this.chaoshigoumaiui.but_goumai0.enabled = true;
			this.chaoshigoumaiui.but_goumai0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi2keng,this);
		}
		if(parseInt(this.chaoshishuliang[2]) <= 0){
			this.chaoshigoumaiui.goumaijine1.text = "已售罄";
			this.chaoshigoumaiui.but_goumai1.enabled = false;
			this.chaoshigoumaiui.but_goumai1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi3keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine1.text = "- " + this.chaoshijiage[2];
			this.chaoshigoumaiui.but_goumai1.enabled = true;
			this.chaoshigoumaiui.but_goumai1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi3keng,this);
		}
		if(parseInt(this.chaoshishuliang[3]) <= 0){
			this.chaoshigoumaiui.goumaijine2.text = "已售罄";
			this.chaoshigoumaiui.but_goumai2.enabled = false;
			this.chaoshigoumaiui.but_goumai2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi4keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine2.text = "- " + this.chaoshijiage[3];
			this.chaoshigoumaiui.but_goumai2.enabled = true;
			this.chaoshigoumaiui.but_goumai2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi4keng,this);
		}
		if(parseInt(this.chaoshishuliang[4]) <= 0){
			this.chaoshigoumaiui.goumaijine3.text = "已售罄";
			this.chaoshigoumaiui.but_goumai3.enabled = false;
			this.chaoshigoumaiui.but_goumai3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi5keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine3.text = "- " + this.chaoshijiage[4];
			this.chaoshigoumaiui.but_goumai3.enabled = true;
			this.chaoshigoumaiui.but_goumai3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi5keng,this);
		}
		if(parseInt(this.chaoshishuliang[5]) <= 0){
			this.chaoshigoumaiui.goumaijine4.text = "已售罄";
			this.chaoshigoumaiui.but_goumai4.enabled = false;
			this.chaoshigoumaiui.but_goumai4.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi6keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine4.text = "- " + this.chaoshijiage[5];
			this.chaoshigoumaiui.but_goumai4.enabled = true;
			this.chaoshigoumaiui.but_goumai4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi6keng,this);
		}
		if(parseInt(this.chaoshishuliang[6]) <= 0){
			this.chaoshigoumaiui.goumaijine5.text = "已售罄";
			this.chaoshigoumaiui.but_goumai5.enabled = false;
			this.chaoshigoumaiui.but_goumai5.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi7keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine5.text = "抽奖";
			this.chaoshigoumaiui.but_goumai5.enabled = true;
			this.chaoshigoumaiui.but_goumai5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi7keng,this);
		}
		if(parseInt(this.chaoshishuliang[7]) <= 0){
			this.chaoshigoumaiui.goumaijine6.text = "已售罄";
			this.chaoshigoumaiui.but_goumai6.enabled = false;
			this.chaoshigoumaiui.but_goumai6.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi8keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine6.text = "抽奖";
			this.chaoshigoumaiui.but_goumai6.enabled = true;
			this.chaoshigoumaiui.but_goumai6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi8keng,this);
		}
		if(parseInt(this.chaoshishuliang[8]) <= 0){
			this.chaoshigoumaiui.goumaijine7.text = "已售罄";
			this.chaoshigoumaiui.but_goumai7.enabled = false;
			this.chaoshigoumaiui.but_goumai7.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi9keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine7.text = "抽奖";
			this.chaoshigoumaiui.but_goumai7.enabled = true;
			this.chaoshigoumaiui.but_goumai7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.chaoshi9keng,this);
		}
	}

	public guanbichaoshiui(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gameguanli.Kongzhitai().dingbuui.parent){
			Gameguanli.Kongzhitai().dingbuui.removeChild(this.chaoshigoumaiui);
		}
	}

	public daojutips1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[0]);
	}

	public daojutips2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[1]);
	}

	public daojutips3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[2]);
	}

	public daojutips4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[3]);
	}

	public daojutips5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[4]);
	}

	public daojutips6(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[5]);
	}

	public daojutips7(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[6]);
	}

	public daojutips8(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[7]);
	}

	public daojutips9(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.chaoshiid[8]);
	}

	public daojutipsjiemian(daojuid){
		this.daojutipsui = new Daojutipsui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.daojutipsui);
		if(daojuid == "1_1"){
			this.daojutipsui.daojuicon.source = this.chaoshitupian[6];
			this.daojutipsui.daojumingzi.text = this.chaoshimingcheng[6];
			this.daojutipsui.leixingming.text = "福袋";
			this.daojutipsui.shuomingneirong.text = "可随机获得一件日常家务用品.";
		}else if(daojuid == "1_2"){
			this.daojutipsui.daojuicon.source = this.chaoshitupian[7];
			this.daojutipsui.daojumingzi.text = this.chaoshimingcheng[7];
			this.daojutipsui.leixingming.text = "福袋";
			this.daojutipsui.shuomingneirong.text = "可随机获得一件男士用品.";
		}else if(daojuid == "1_3"){
			this.daojutipsui.daojuicon.source = this.chaoshitupian[8];
			this.daojutipsui.daojumingzi.text = this.chaoshimingcheng[8];
			this.daojutipsui.leixingming.text = "福袋";
			this.daojutipsui.shuomingneirong.text = "可随机获得一件数码产品.";
		}else{
			for(var n = 0;n<Gerenshuxing.daojubiao.length;n++){
				if(Gerenshuxing.daojubiao[n].id == daojuid){
					this.daojutipsui.daojuicon.source = Gerenshuxing.daojubiao[n].xianshiicon;
					this.daojutipsui.daojumingzi.text = Gerenshuxing.daojubiao[n].mingcheng;
					this.daojutipsui.leixingming.text = Gerenshuxing.daojubiao[n].daojuleixing;
					this.daojutipsui.shuomingneirong.text = Gerenshuxing.daojubiao[n].tips;
				}
			}
		}
		this.daojutipsui.heiseguanbi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbitips,this);
		this.daojutipsui.shiyonganniu.alpha = 0;
		this.daojutipsui.shiyonganniu.enabled = false;
		this.daojutipsui.quedinganniu.alpha = 1;
		this.daojutipsui.quedinganniu.enabled = true;
		this.daojutipsui.quedinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbitips,this);
	}

	public guanbitips(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.daojutipsui);
	}


	public chaoshi1keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[0])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[0]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[0] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[0] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[0] = 0;
			this.chaoshijiemianchushihua();
			if(this.chaoshiteshu == true){
				Gameguanli.Kongzhitai().paomadengui("天降鸿运！“"+ Gerenshuxing.mingzi +"”以超低的价格购买到超市出售的特价商品["+ this.chaoshimingcheng[0] +"]！");
			}
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi2keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[1])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[1]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[1] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[1] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[1] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi3keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[2])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[2]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[2] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[2] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[2] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi4keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[3])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[3]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[3] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[3] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[3] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi5keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[4])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[4]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[4] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[4] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[4] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public chaoshi6keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.chaoshijiage[5])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.chaoshijiage[5]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.chaoshijiage[5] + '"' +","
			+ '"leixing"' +":"+ '"' + this.chaoshiid[5] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.chaoshishuliang[5] = 0;
			this.chaoshijiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public async chaoshi7keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai5.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.chaoshifudaizhuanfa1,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public chaoshifudaizhuanfa1(){
		let kejiangliliebiao = [];
		for(var i = 0;i<Gerenshuxing.daojubiao.length;i++){
			if(Gerenshuxing.daojubiao[i].shiyongleixing == "2"){
				kejiangliliebiao.push(Gerenshuxing.daojubiao[i].id);
			}
		}
		let suijigeiyu = Math.floor(Math.random() * kejiangliliebiao.length);
		let geiyudaoju = kejiangliliebiao[suijigeiyu];
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + geiyudaoju + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.chaoshishuliang[6] = 0;
		this.chaoshijiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(geiyudaoju);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}

	public async chaoshi8keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai6.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.chaoshifudaizhuanfa2,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public chaoshifudaizhuanfa2(){
		let kejiangliliebiao = [];
		for(var i = 0;i<Gerenshuxing.daojubiao.length;i++){
			if(Gerenshuxing.daojubiao[i].shiyongleixing == "1"){
				kejiangliliebiao.push(Gerenshuxing.daojubiao[i].id);
			}
		}
		let suijigeiyu = Math.floor(Math.random() * kejiangliliebiao.length);
		let geiyudaoju = kejiangliliebiao[suijigeiyu];
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + geiyudaoju + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.chaoshishuliang[7] = 0;
		this.chaoshijiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(geiyudaoju);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}

	public async chaoshi9keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai7.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.chaoshifudaizhuanfa3,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public chaoshifudaizhuanfa3(){
		let kejiangliliebiao = [];
		for(var i = 0;i<Gerenshuxing.daojubiao.length;i++){
			if(Gerenshuxing.daojubiao[i].shiyongleixing == "3"){
				kejiangliliebiao.push(Gerenshuxing.daojubiao[i].id);
			}
		}
		let suijigeiyu = Math.floor(Math.random() * kejiangliliebiao.length);
		let geiyudaoju = kejiangliliebiao[suijigeiyu];
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + geiyudaoju + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.chaoshishuliang[8] = 0;
		this.chaoshijiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(geiyudaoju);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}



	public jiedaosuijichufa(){
		this.suijichufaliebiao = this.jiedaopeizhi.suijiliebiao.split(",") ;
		console.log(this.suijichufaliebiao);
		let suijishu = Math.floor(Math.random() * this.suijichufaliebiao.length);
		for(var j = 0;j<this.jiedaosuijibiao.length;j++){
			if(this.suijichufaliebiao[suijishu] == this.jiedaosuijibiao[j].id){
				this.suijipeizhi = this.jiedaosuijibiao[j];
				break;
			}
		}
		this.suijijiemian = new Tongyongquerenkuang();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.suijijiemian);
		this.suijijiemian.tishiwenzi.text = this.suijipeizhi.neirong;
		this.kouchuleixing = this.suijipeizhi.kouchuleixing;
		this.suijichufaid = this.suijipeizhi.id;
		this.kouchushuliang = this.suijipeizhi.kouchushuliang;
		this.jianglileixing = this.suijipeizhi.jianglileixing;
		this.jianglishuliang = this.suijipeizhi.jianglishuliang;
		this.kouchutubiaopanduan(this.kouchuleixing,this.kouchushuliang);
		this.jianglitubiaopanduan(this.jianglileixing,this.jianglishuliang);
		if(this.jianglileixing == "0"){
			this.suijijiemian.but_queding0.enabled = true;
			this.suijijiemian.but_queding0.alpha = 1;
			this.suijijiemian.but_queding.enabled = false;
			this.suijijiemian.but_queding.alpha = 0;
			this.suijijiemian.but_shuangbei.enabled = false;
			this.suijijiemian.but_shuangbei.alpha = 0;
			this.suijijiemian.heisediban.touchEnabled = false;
			this.suijijiemian.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.suijiqueding,this);
		}else{
			this.suijijiemian.but_queding0.enabled = false;
			this.suijijiemian.but_queding0.alpha = 0;
			this.suijijiemian.but_queding.enabled = true;
			this.suijijiemian.but_queding.alpha = 1;
			this.suijijiemian.but_shuangbei.enabled = true;
			this.suijijiemian.but_shuangbei.alpha = 1;
			this.suijijiemian.heisediban.touchEnabled = false;
			this.suijijiemian.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP,this.suijiqueding,this);
			this.suijijiemian.but_shuangbei.addEventListener(egret.TouchEvent.TOUCH_TAP,this.suijishuangbei,this);
		}
	}

	public jianglitubiaopanduan(leixing,shuliang){
		switch(leixing){
			case "0":
				this.suijijiemian.jiangliicon1.source = "";
				this.suijijiemian.jiangli1.text = "";
				break;
			case "1":
				this.suijijiemian.jiangliicon1.source = "img_qian_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "2":
				this.suijijiemian.jiangliicon1.source = "img_jiating_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "3":
				this.suijijiemian.jiangliicon1.source = "img_jiankang_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "4":
				this.suijijiemian.jiangliicon1.source = "img_xinqing_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "5":
				this.suijijiemian.jiangliicon1.source = "img_xingfu_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "6":
				this.suijijiemian.jiangliicon1.source = "img_daerzixinqinicon_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "7":
				this.suijijiemian.jiangliicon1.source = "img_ererzixinqinicon_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "8":
				this.suijijiemian.jiangliicon1.source = "img_xifuxinqingicon_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "9":
				this.suijijiemian.jiangliicon1.source = "img_sunnvxinqingicon_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "10":
				this.suijijiemian.jiangliicon1.source = "img_daerzinengliicon_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "11":
				this.suijijiemian.jiangliicon1.source = "img_ererzinengliicon_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "12":
				this.suijijiemian.jiangliicon1.source = "img_xifunengliicon_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			case "13":
				this.suijijiemian.jiangliicon1.source = "img_sunnvnengliicon_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			default:
				if(parseInt(leixing) >= 1000 && parseInt(leixing) < 10000){
					this.jianglicaipuxianshi(leixing,shuliang);
				}else if(parseInt(leixing) >= 10000){
					this.jianglidaojuxianshi(leixing,shuliang);
				};
				break;
		}
	}

	public jianglijiemianjianglitubiao(shuliang){
		switch(this.jianglileixing){
			case "0":
				this.jianglijiemian.jiangliicon.source = "";
				this.jianglijiemian.jianglishuliang.text  = "";
				break;
			case "1":
				this.jianglijiemian.jiangliicon.source = "img_qian_png";
				this.jianglijiemian.jianglishuliang.text  = "+ " + shuliang;
				break;
			case "2":
				this.jianglijiemian.jiangliicon.source = "img_jiating_png";
				this.jianglijiemian.jianglishuliang.text  = "+ " + shuliang;
				break;
			case "3":
				this.jianglijiemian.jiangliicon.source = "img_jiankang_png";
				this.jianglijiemian.jianglishuliang.text  = "+ " + shuliang;
				break;
			case "4":
				this.jianglijiemian.jiangliicon.source = "img_xinqing_png";
				this.jianglijiemian.jianglishuliang.text  = "+ " + shuliang;
				break;
			case "5":
				this.jianglijiemian.jiangliicon.source = "img_xingfu_png";
				this.jianglijiemian.jianglishuliang.text  = "+ " + shuliang;
				break;
			case "6":
				this.jianglijiemian.jiangliicon.source = "img_daerzixinqinicon_png";
				this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
				break;
			case "7":
				this.jianglijiemian.jiangliicon.source = "img_ererzixinqinicon_png";
				this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
				break;
			case "8":
				this.jianglijiemian.jiangliicon.source = "img_xifuxinqingicon_png";
				this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
				break;
			case "9":
				this.jianglijiemian.jiangliicon.source = "img_sunnvxinqingicon_png";
				this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
				break;
			case "10":
				this.jianglijiemian.jiangliicon.source = "img_daerzinengliicon_png";
				this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
				break;
			case "11":
				this.jianglijiemian.jiangliicon.source = "img_ererzinengliicon_png";
				this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
				break;
			case "12":
				this.jianglijiemian.jiangliicon.source = "img_xifunengliicon_png";
				this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
				break;
			case "13":
				this.jianglijiemian.jiangliicon.source = "img_sunnvnengliicon_png";
				this.jianglijiemian.jianglishuliang.text = "+ " + shuliang;
				break;
			default:
				if(parseInt(this.jianglileixing) >= 1000 && parseInt(this.jianglileixing) < 10000){
					this.dajianglipuxianshi(this.jianglileixing,shuliang);
				}else if(parseInt(this.jianglileixing) >= 10000){
					this.dajianglidaojuxianshi(this.jianglileixing,shuliang);
				};
				break;
		}
	}

	public dajianglipuxianshi(leixing,shuliang){
		let caipubiao = Gerenshuxing.shipubiao;
		for(var i = 0;i<caipubiao.length;i++){
			if(caipubiao[i].id == leixing){
				this.jianglijiemian.jiangliicon.source = caipubiao[i].id + "_png";
				this.jianglijiemian.jianglishuliang.text = "熟练度 + " + shuliang;
				break;
			}
		}
	}

	public dajianglidaojuxianshi(leixing,shuliang){
		for(var i = 0;i<Gerenshuxing.daojubiao.length;i++){
			if(Gerenshuxing.daojubiao[i].id == leixing){
				this.jianglijiemian.jiangliicon.source = Gerenshuxing.daojubiao[i].xianshiicon;
				this.jianglijiemian.jianglishuliang.text = "X " + shuliang;
				break;
			}
		}
	}


	public kouchutubiaopanduan(leixing,shuliang){
		switch(leixing){
			case "0":
				this.suijijiemian.jiangliicon2.source = "";
				this.suijijiemian.jiangli2.text = "";
				break;
			case "1":
				this.suijijiemian.jiangliicon2.source = "img_qian_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "2":
				this.suijijiemian.jiangliicon2.source = "img_jiating_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "3":
				this.suijijiemian.jiangliicon2.source = "img_jiankang_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "4":
				this.suijijiemian.jiangliicon2.source = "img_xinqing_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "5":
				this.suijijiemian.jiangliicon2.source = "img_xingfu_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "6":
				this.suijijiemian.jiangliicon2.source = "img_daerzixinqinicon_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "7":
				this.suijijiemian.jiangliicon2.source = "img_ererzixinqinicon_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "8":
				this.suijijiemian.jiangliicon2.source = "img_xifuxinqingicon_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "9":
				this.suijijiemian.jiangliicon2.source = "img_sunnvxinqingicon_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "10":
				this.suijijiemian.jiangliicon2.source = "img_daerzinengliicon_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "11":
				this.suijijiemian.jiangliicon2.source = "img_ererzinengliicon_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "12":
				this.suijijiemian.jiangliicon2.source = "img_xifunengliicon_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			case "13":
				this.suijijiemian.jiangliicon2.source = "img_sunnvnengliicon_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			default:
				if(parseInt(leixing) >= 1000 && parseInt(leixing) < 10000){
					this.kouchucaipuxianshi(leixing,shuliang);
				}else if(parseInt(leixing) >= 10000){
					this.kouchudaojuxianshi(leixing,shuliang);
				};
				break;
		}
	}



	public suijiqueding(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
		this.but_shaizi.enabled = true;
		this.kaishianniuzu.alpha = 1;
		switch(this.kouchuleixing){
			case "1":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(1);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您无法支付费用，只得黯自离去！");
				}
				break;
			case "2":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(1);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的行动力不足，只得黯自离去！");
				}
				break;
			case "3":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(1);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的身体不太健康，只得黯自离去！");
				}
				break;
			case "4":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(1);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的心情不太开心，只得黯自离去！");
				}
				break;
			case "5":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(1);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 1);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的幸福值太低，只得黯自离去！");
				}
				break;
		}
	}

	public async suijishuangbei(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
		this.but_shaizi.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.zhuanfahuidiaoshijian,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public zhuanfahuidiaoshijian(){
		this.but_shaizi.enabled = true;
		this.kaishianniuzu.alpha = 1;
		switch(this.kouchuleixing){
			case "1":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(5);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 5);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您无法支付费用，只得黯自离去！");
				}
				break;
			case "2":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(5);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 5);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的行动力不足，只得黯自离去！");
				}
				break;
			case "3":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(5);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 5);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的身体不太健康，只得黯自离去！");
				}
				break;
			case "4":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(5);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 5);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的心情不太开心，只得黯自离去！");
				}
				break;
			case "5":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(5);
					this.jianglijiemianjianglitubiao(this.jianglishuliang * 5);
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的幸福值太低，只得黯自离去！");
				}
				break;
		}
	}

	public fasongjiangli(beishu){
		 Weblianjie.fasongshuju("code:085","{" + '"kouchuleixing"' +":"+ '"' + this.kouchuleixing + '"' +","
		 + '"kouchushuliang"' +":"+ '"' + this.kouchushuliang + '"' +"," 
		 + '"leixing"' +":"+ '"' + this.jianglileixing + '"' +","
		 + '"shuliang"' +":"+ '"' + this.jianglishuliang + '"' +","
		 + '"beishu"' +":"+ '"' + beishu + '"' +","
		 + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}

	public guanbijiangli(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jianglijiemian);
	}


	public kouchucaipuxianshi(leixing,shuliang){
		let caipubiao = Gerenshuxing.shipubiao;
		for(var i = 0;i<caipubiao.length;i++){
			if(caipubiao[i].id == leixing){
				this.suijijiemian.jiangliicon2.source = caipubiao[i].id + "_png";
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			}
		}
	}

	public jianglicaipuxianshi(leixing,shuliang){
		let caipubiao = Gerenshuxing.shipubiao;
		for(var i = 0;i<caipubiao.length;i++){
			if(caipubiao[i].id == leixing){
				this.suijijiemian.jiangliicon1.source = caipubiao[i].id + "_png";
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			}
		}
	}

	public jianglidaojuxianshi(leixing,shuliang){
		for(var i = 0;i<Gerenshuxing.daojubiao.length;i++){
			if(Gerenshuxing.daojubiao[i].id == leixing){
				this.suijijiemian.jiangliicon1.source = Gerenshuxing.daojubiao[i].xianshiicon;
				this.suijijiemian.jiangli1.text = "+ " + shuliang;
				break;
			}
		}
	}

	public kouchudaojuxianshi(leixing,shuliang){
		for(var i = 0;i<Gerenshuxing.daojubiao.length;i++){
			if(Gerenshuxing.daojubiao[i].id == leixing){
				this.suijijiemian.jiangliicon2.source = Gerenshuxing.daojubiao[i].xianshiicon;
				this.suijijiemian.jiangli2.text = "- " + shuliang;
				break;
			}
		}
	}


	/*
	药店商店相关内容
	*/
	public yaodianmaimai(){
		this.yaodianteshu = false;
		let yaodianyongpinid = [];
		let yaodianyongpinjiage = [];
		for(var i = 0;i<Gerenshuxing.chaoshishangdianbiao.length;i++){
			if(Gerenshuxing.chaoshishangdianbiao[i].shangdianleixing == "2"){
				yaodianyongpinid.push(Gerenshuxing.chaoshishangdianbiao[i].id);
				yaodianyongpinjiage.push(Gerenshuxing.chaoshishangdianbiao[i].shoujia);
			}
		}
		for(var k =0;k<9;k++){
			let suijichushou = Math.floor(Math.random() * yaodianyongpinid.length);
			this.yaodianid[k] = yaodianyongpinid[suijichushou];
			this.yaodianjiage[k] = yaodianyongpinjiage[suijichushou];
			this.yaodianshuliang[k] = 1;
		}
		/*for(var i = 0;i<Gerenshuxing.yaodianshangdianbiao.length;i++){
			if(Gerenshuxing.yaodianshangdianbiao[i].teshuid == Gerenshuxing.teshushijian){
				this.yaodianid[0] = Gerenshuxing.yaodianshangdianbiao[i].id;
				this.yaodianjiage[0] = Math.floor(parseInt(Gerenshuxing.yaodianshangdianbiao[i].shoujia) * (parseInt(Gerenshuxing.yaodianshangdianbiao[i].zhekou) / 10));
				this.yaodianshuliang[0] = 1;
				this.yaodianteshu = true;
				break;
			}
		}
		*/
		this.xianshiyaodianshangdianjiemian();
	}

	public xianshiyaodianshangdianjiemian(){
		this.chaoshigoumaiui = new Chaoshishangdianui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.chaoshigoumaiui);
		this.chaoshigoumaiui.guanbijiemain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.chaoshigoumaiui.heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.yaodianjiemianchushihua();
	}

	public yaodianjiemianchushihua(){
		this.chaoshigoumaiui.biaotilan.text = "药房商店";
		for(var h = 0;h<Gerenshuxing.daojubiao.length;h++){
			if(Gerenshuxing.daojubiao[h].id == this.yaodianid[0]){
				this.yaodiantupian[0] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.yaodianmingcheng[0] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.yaodianid[1]){
				this.yaodiantupian[1] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.yaodianmingcheng[1] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.yaodianid[2]){
				this.yaodiantupian[2] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.yaodianmingcheng[2] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.yaodianid[3]){
				this.yaodiantupian[3] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.yaodianmingcheng[3] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.yaodianid[4]){
				this.yaodiantupian[4] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.yaodianmingcheng[4] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.yaodianid[5]){
				this.yaodiantupian[5] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.yaodianmingcheng[5] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.yaodianid[6]){
				this.yaodiantupian[6] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.yaodianmingcheng[6] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.yaodianid[7]){
				this.yaodiantupian[7] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.yaodianmingcheng[7] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.yaodianid[8]){
				this.yaodiantupian[8] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.yaodianmingcheng[8] = Gerenshuxing.daojubiao[h].mingcheng;
			};
		}
		this.chaoshigoumaiui.daojutubiao.source = this.yaodiantupian[0];
		this.chaoshigoumaiui.daojutubiao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodiantips1,this);
		this.chaoshigoumaiui.daojutubiao0.source = this.yaodiantupian[1];
		this.chaoshigoumaiui.daojutubiao0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodiantips2,this);
		this.chaoshigoumaiui.daojutubiao1.source = this.yaodiantupian[2];
		this.chaoshigoumaiui.daojutubiao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodiantips3,this);
		this.chaoshigoumaiui.daojutubiao2.source = this.yaodiantupian[3];
		this.chaoshigoumaiui.daojutubiao2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodiantips4,this);
		this.chaoshigoumaiui.daojutubiao3.source = this.yaodiantupian[4];
		this.chaoshigoumaiui.daojutubiao3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodiantips5,this);
		this.chaoshigoumaiui.daojutubiao4.source = this.yaodiantupian[5];
		this.chaoshigoumaiui.daojutubiao4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodiantips6,this);
		this.chaoshigoumaiui.daojutubiao5.source = this.yaodiantupian[6];
		this.chaoshigoumaiui.daojutubiao5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodiantips7,this);
		this.chaoshigoumaiui.daojutubiao6.source = this.yaodiantupian[7];
		this.chaoshigoumaiui.daojutubiao6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodiantips8,this);
		this.chaoshigoumaiui.daojutubiao7.source = this.yaodiantupian[8];
		this.chaoshigoumaiui.daojutubiao7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodiantips9,this);
		if(this.yaodianteshu == true){
			this.chaoshigoumaiui.zhekoutubiao.alpha = 1;
		}else{
			this.chaoshigoumaiui.zhekoutubiao.alpha = 0;
		}
		if(parseInt(this.yaodianshuliang[0]) <= 0){
			this.chaoshigoumaiui.goumaijine.text = "已售罄";
			this.chaoshigoumaiui.but_goumai.enabled = false;
			this.chaoshigoumaiui.but_goumai.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian1keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine.text = "- " + this.yaodianjiage[0];
			this.chaoshigoumaiui.but_goumai.enabled = true;
			this.chaoshigoumaiui.but_goumai.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian1keng,this);
		}
		if(parseInt(this.yaodianshuliang[1]) <= 0){
			this.chaoshigoumaiui.goumaijine0.text = "已售罄";
			this.chaoshigoumaiui.but_goumai0.enabled = false;
			this.chaoshigoumaiui.but_goumai0.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian2keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine0.text = "- " + this.yaodianjiage[1];
			this.chaoshigoumaiui.but_goumai0.enabled = true;
			this.chaoshigoumaiui.but_goumai0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian2keng,this);
		}
		if(parseInt(this.yaodianshuliang[2]) <= 0){
			this.chaoshigoumaiui.goumaijine1.text = "已售罄";
			this.chaoshigoumaiui.but_goumai1.enabled = false;
			this.chaoshigoumaiui.but_goumai1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian3keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine1.text = "- " + this.yaodianjiage[2];
			this.chaoshigoumaiui.but_goumai1.enabled = true;
			this.chaoshigoumaiui.but_goumai1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian3keng,this);
		}
		if(parseInt(this.yaodianshuliang[3]) <= 0){
			this.chaoshigoumaiui.goumaijine2.text = "已售罄";
			this.chaoshigoumaiui.but_goumai2.enabled = false;
			this.chaoshigoumaiui.but_goumai2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian4keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine2.text = "- " + this.yaodianjiage[3];
			this.chaoshigoumaiui.but_goumai2.enabled = true;
			this.chaoshigoumaiui.but_goumai2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian4keng,this);
		}
		if(parseInt(this.yaodianshuliang[4]) <= 0){
			this.chaoshigoumaiui.goumaijine3.text = "已售罄";
			this.chaoshigoumaiui.but_goumai3.enabled = false;
			this.chaoshigoumaiui.but_goumai3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian5keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine3.text = "- " + this.yaodianjiage[4];
			this.chaoshigoumaiui.but_goumai3.enabled = true;
			this.chaoshigoumaiui.but_goumai3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian5keng,this);
		}
		if(parseInt(this.yaodianshuliang[5]) <= 0){
			this.chaoshigoumaiui.goumaijine4.text = "已售罄";
			this.chaoshigoumaiui.but_goumai4.enabled = false;
			this.chaoshigoumaiui.but_goumai4.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian6keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine4.text = "- " + this.yaodianjiage[5];
			this.chaoshigoumaiui.but_goumai4.enabled = true;
			this.chaoshigoumaiui.but_goumai4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian6keng,this);
		}
		if(parseInt(this.yaodianshuliang[6]) <= 0){
			this.chaoshigoumaiui.goumaijine5.text = "已售罄";
			this.chaoshigoumaiui.but_goumai5.enabled = false;
			this.chaoshigoumaiui.but_goumai5.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian7keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine5.text =  "免费";
			this.chaoshigoumaiui.but_goumai5.enabled = true;
			this.chaoshigoumaiui.but_goumai5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian7keng,this);
		}
		if(parseInt(this.yaodianshuliang[7]) <= 0){
			this.chaoshigoumaiui.goumaijine6.text = "已售罄";
			this.chaoshigoumaiui.but_goumai6.enabled = false;
			this.chaoshigoumaiui.but_goumai6.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian8keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine6.text =  "免费";
			this.chaoshigoumaiui.but_goumai6.enabled = true;
			this.chaoshigoumaiui.but_goumai6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian8keng,this);
		}
		if(parseInt(this.yaodianshuliang[8]) <= 0){
			this.chaoshigoumaiui.goumaijine7.text = "已售罄";
			this.chaoshigoumaiui.but_goumai7.enabled = false;
			this.chaoshigoumaiui.but_goumai7.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian9keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine7.text =  "免费";
			this.chaoshigoumaiui.but_goumai7.enabled = true;
			this.chaoshigoumaiui.but_goumai7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yaodian9keng,this);
		}
	}


	public yaodiantips1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.yaodianid[0]);
	}

	public yaodiantips2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.yaodianid[1]);
	}

	public yaodiantips3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.yaodianid[2]);
	}

	public yaodiantips4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.yaodianid[3]);
	}

	public yaodiantips5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.yaodianid[4]);
	}

	public yaodiantips6(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.yaodianid[5]);
	}

	public yaodiantips7(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.yaodianid[6]);
	}

	public yaodiantips8(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.yaodianid[7]);
	}

	public yaodiantips9(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.yaodianid[8]);
	}

	


	public yaodian1keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.yaodianjiage[0])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.yaodianjiage[0]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.yaodianjiage[0] + '"' +","
			+ '"leixing"' +":"+ '"' + this.yaodianid[0] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.yaodianshuliang[0] = 0;
			this.yaodianjiemianchushihua();
			if(this.yaodianteshu == true){
				Gameguanli.Kongzhitai().paomadengui("天降鸿运！“"+ Gerenshuxing.mingzi +"”以超低的价格购买到超市出售的特价商品["+ this.yaodianmingcheng[0] +"]！");
			}
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public yaodian2keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.yaodianjiage[1])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.yaodianjiage[1]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.yaodianjiage[1] + '"' +","
			+ '"leixing"' +":"+ '"' + this.yaodianid[1] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.yaodianshuliang[1] = 0;
			this.yaodianjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public yaodian3keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.yaodianjiage[2])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.yaodianjiage[2]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.yaodianjiage[2] + '"' +","
			+ '"leixing"' +":"+ '"' + this.yaodianid[2] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.yaodianshuliang[2] = 0;
			this.yaodianjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public yaodian4keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.yaodianjiage[3])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.yaodianjiage[3]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.yaodianjiage[3] + '"' +","
			+ '"leixing"' +":"+ '"' + this.yaodianid[3] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.yaodianshuliang[3] = 0;
			this.yaodianjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public yaodian5keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.yaodianjiage[4])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.yaodianjiage[4]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.yaodianjiage[4] + '"' +","
			+ '"leixing"' +":"+ '"' + this.yaodianid[4] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.yaodianshuliang[4] = 0;
			this.yaodianjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public yaodian6keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.yaodianjiage[5])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.yaodianjiage[5]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.yaodianjiage[5] + '"' +","
			+ '"leixing"' +":"+ '"' + this.yaodianid[5] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.yaodianshuliang[5] = 0;
			this.yaodianjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public async yaodian7keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai5.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.yaodianfudaizhuanfa1,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public yaodianfudaizhuanfa1(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + this.yaodianid[6] + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.yaodianshuliang[6] = 0;
		this.yaodianjiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(this.yaodianid[6]);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}

	public async yaodian8keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai6.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.yaodianfudaizhuanfa2,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public yaodianfudaizhuanfa2(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + this.yaodianid[7] + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.yaodianshuliang[7] = 0;
		this.yaodianjiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(this.yaodianid[7]);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}

	public async yaodian9keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai7.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.yaodianfudaizhuanfa3,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public yaodianfudaizhuanfa3(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + this.yaodianid[8] + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.yaodianshuliang[8] = 0;
		this.yaodianjiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(this.yaodianid[8]);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}


		/*
	菜市场商店相关内容
	*/
	public caishichangmaimai(){
		this.caishichangteshu = false;
		let caishichangyongpinid = [];
		let caishichangyongpinjiage = [];
		for(var i = 0;i<Gerenshuxing.chaoshishangdianbiao.length;i++){
			if(Gerenshuxing.chaoshishangdianbiao[i].shangdianleixing == "3"){
				caishichangyongpinid.push(Gerenshuxing.chaoshishangdianbiao[i].id);
				caishichangyongpinjiage.push(Gerenshuxing.chaoshishangdianbiao[i].shoujia);
			}
		}
		for(var k =0;k<9;k++){
			let suijichushou = Math.floor(Math.random() * caishichangyongpinid.length);
			this.caishichangid[k] = caishichangyongpinid[suijichushou];
			this.caishichangjiage[k] = caishichangyongpinjiage[suijichushou];
			this.caishichangshuliang[k] = 1;
		}
		/*for(var i = 0;i<Gerenshuxing.caishichangshangdianbiao.length;i++){
			if(Gerenshuxing.caishichangshangdianbiao[i].teshuid == Gerenshuxing.teshushijian){
				this.caishichangid[0] = Gerenshuxing.caishichangshangdianbiao[i].id;
				this.caishichangjiage[0] = Math.floor(parseInt(Gerenshuxing.caishichangshangdianbiao[i].shoujia) * (parseInt(Gerenshuxing.caishichangshangdianbiao[i].zhekou) / 10));
				this.caishichangshuliang[0] = 1;
				this.caishichangteshu = true;
				break;
			}
		}
		*/
		this.xianshicaishichangshangdianjiemian();
	}

	public xianshicaishichangshangdianjiemian(){
		this.chaoshigoumaiui = new Chaoshishangdianui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.chaoshigoumaiui);
		this.chaoshigoumaiui.guanbijiemain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.chaoshigoumaiui.heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.caishichangjiemianchushihua();
	}

	public caishichangjiemianchushihua(){
		this.chaoshigoumaiui.biaotilan.text = "调料商店";
		for(var h = 0;h<Gerenshuxing.daojubiao.length;h++){
			if(Gerenshuxing.daojubiao[h].id == this.caishichangid[0]){
				this.caishichangtupian[0] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.caishichangmingcheng[0] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.caishichangid[1]){
				this.caishichangtupian[1] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.caishichangmingcheng[1] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.caishichangid[2]){
				this.caishichangtupian[2] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.caishichangmingcheng[2] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.caishichangid[3]){
				this.caishichangtupian[3] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.caishichangmingcheng[3] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.caishichangid[4]){
				this.caishichangtupian[4] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.caishichangmingcheng[4] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.caishichangid[5]){
				this.caishichangtupian[5] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.caishichangmingcheng[5] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.caishichangid[6]){
				this.caishichangtupian[6] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.caishichangmingcheng[6] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.caishichangid[7]){
				this.caishichangtupian[7] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.caishichangmingcheng[7] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.caishichangid[8]){
				this.caishichangtupian[8] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.caishichangmingcheng[8] = Gerenshuxing.daojubiao[h].mingcheng;
			};
		}
		this.chaoshigoumaiui.daojutubiao.source = this.caishichangtupian[0];
		this.chaoshigoumaiui.daojutubiao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichangtips1,this);
		this.chaoshigoumaiui.daojutubiao0.source = this.caishichangtupian[1];
		this.chaoshigoumaiui.daojutubiao0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichangtips2,this);
		this.chaoshigoumaiui.daojutubiao1.source = this.caishichangtupian[2];
		this.chaoshigoumaiui.daojutubiao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichangtips3,this);
		this.chaoshigoumaiui.daojutubiao2.source = this.caishichangtupian[3];
		this.chaoshigoumaiui.daojutubiao2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichangtips4,this);
		this.chaoshigoumaiui.daojutubiao3.source = this.caishichangtupian[4];
		this.chaoshigoumaiui.daojutubiao3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichangtips5,this);
		this.chaoshigoumaiui.daojutubiao4.source = this.caishichangtupian[5];
		this.chaoshigoumaiui.daojutubiao4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichangtips6,this);
		this.chaoshigoumaiui.daojutubiao5.source = this.caishichangtupian[6];
		this.chaoshigoumaiui.daojutubiao5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichangtips7,this);
		this.chaoshigoumaiui.daojutubiao6.source = this.caishichangtupian[7];
		this.chaoshigoumaiui.daojutubiao6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichangtips8,this);
		this.chaoshigoumaiui.daojutubiao7.source = this.caishichangtupian[8];
		this.chaoshigoumaiui.daojutubiao7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichangtips9,this);
		if(this.caishichangteshu == true){
			this.chaoshigoumaiui.zhekoutubiao.alpha = 1;
		}else{
			this.chaoshigoumaiui.zhekoutubiao.alpha = 0;
		}
		if(parseInt(this.caishichangshuliang[0]) <= 0){
			this.chaoshigoumaiui.goumaijine.text = "已售罄";
			this.chaoshigoumaiui.but_goumai.enabled = false;
			this.chaoshigoumaiui.but_goumai.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang1keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine.text = "- " + this.caishichangjiage[0];
			this.chaoshigoumaiui.but_goumai.enabled = true;
			this.chaoshigoumaiui.but_goumai.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang1keng,this);
		}
		if(parseInt(this.caishichangshuliang[1]) <= 0){
			this.chaoshigoumaiui.goumaijine0.text = "已售罄";
			this.chaoshigoumaiui.but_goumai0.enabled = false;
			this.chaoshigoumaiui.but_goumai0.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang2keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine0.text = "- " + this.caishichangjiage[1];
			this.chaoshigoumaiui.but_goumai0.enabled = true;
			this.chaoshigoumaiui.but_goumai0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang2keng,this);
		}
		if(parseInt(this.caishichangshuliang[2]) <= 0){
			this.chaoshigoumaiui.goumaijine1.text = "已售罄";
			this.chaoshigoumaiui.but_goumai1.enabled = false;
			this.chaoshigoumaiui.but_goumai1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang3keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine1.text = "- " + this.caishichangjiage[2];
			this.chaoshigoumaiui.but_goumai1.enabled = true;
			this.chaoshigoumaiui.but_goumai1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang3keng,this);
		}
		if(parseInt(this.caishichangshuliang[3]) <= 0){
			this.chaoshigoumaiui.goumaijine2.text = "已售罄";
			this.chaoshigoumaiui.but_goumai2.enabled = false;
			this.chaoshigoumaiui.but_goumai2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang4keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine2.text = "- " + this.caishichangjiage[3];
			this.chaoshigoumaiui.but_goumai2.enabled = true;
			this.chaoshigoumaiui.but_goumai2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang4keng,this);
		}
		if(parseInt(this.caishichangshuliang[4]) <= 0){
			this.chaoshigoumaiui.goumaijine3.text = "已售罄";
			this.chaoshigoumaiui.but_goumai3.enabled = false;
			this.chaoshigoumaiui.but_goumai3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang5keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine3.text = "- " + this.caishichangjiage[4];
			this.chaoshigoumaiui.but_goumai3.enabled = true;
			this.chaoshigoumaiui.but_goumai3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang5keng,this);
		}
		if(parseInt(this.caishichangshuliang[5]) <= 0){
			this.chaoshigoumaiui.goumaijine4.text = "已售罄";
			this.chaoshigoumaiui.but_goumai4.enabled = false;
			this.chaoshigoumaiui.but_goumai4.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang6keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine4.text = "- " + this.caishichangjiage[5];
			this.chaoshigoumaiui.but_goumai4.enabled = true;
			this.chaoshigoumaiui.but_goumai4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang6keng,this);
		}
		if(parseInt(this.caishichangshuliang[6]) <= 0){
			this.chaoshigoumaiui.goumaijine5.text = "已售罄";
			this.chaoshigoumaiui.but_goumai5.enabled = false;
			this.chaoshigoumaiui.but_goumai5.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang7keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine5.text =  "免费";
			this.chaoshigoumaiui.but_goumai5.enabled = true;
			this.chaoshigoumaiui.but_goumai5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang7keng,this);
		}
		if(parseInt(this.caishichangshuliang[7]) <= 0){
			this.chaoshigoumaiui.goumaijine6.text = "已售罄";
			this.chaoshigoumaiui.but_goumai6.enabled = false;
			this.chaoshigoumaiui.but_goumai6.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang8keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine6.text =  "免费";
			this.chaoshigoumaiui.but_goumai6.enabled = true;
			this.chaoshigoumaiui.but_goumai6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang8keng,this);
		}
		if(parseInt(this.caishichangshuliang[8]) <= 0){
			this.chaoshigoumaiui.goumaijine7.text = "已售罄";
			this.chaoshigoumaiui.but_goumai7.enabled = false;
			this.chaoshigoumaiui.but_goumai7.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang9keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine7.text =  "免费";
			this.chaoshigoumaiui.but_goumai7.enabled = true;
			this.chaoshigoumaiui.but_goumai7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.caishichang9keng,this);
		}
	}


	public caishichangtips1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.caishichangid[0]);
	}

	public caishichangtips2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.caishichangid[1]);
	}

	public caishichangtips3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.caishichangid[2]);
	}

	public caishichangtips4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.caishichangid[3]);
	}

	public caishichangtips5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.caishichangid[4]);
	}

	public caishichangtips6(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.caishichangid[5]);
	}

	public caishichangtips7(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.caishichangid[6]);
	}

	public caishichangtips8(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.caishichangid[7]);
	}

	public caishichangtips9(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.caishichangid[8]);
	}

	


	public caishichang1keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.caishichangjiage[0])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.caishichangjiage[0]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.caishichangjiage[0] + '"' +","
			+ '"leixing"' +":"+ '"' + this.caishichangid[0] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.caishichangshuliang[0] = 0;
			this.caishichangjiemianchushihua();
			if(this.caishichangteshu == true){
				Gameguanli.Kongzhitai().paomadengui("天降鸿运！“"+ Gerenshuxing.mingzi +"”以超低的价格购买到超市出售的特价商品["+ this.caishichangmingcheng[0] +"]！");
			}
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public caishichang2keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.caishichangjiage[1])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.caishichangjiage[1]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.caishichangjiage[1] + '"' +","
			+ '"leixing"' +":"+ '"' + this.caishichangid[1] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.caishichangshuliang[1] = 0;
			this.caishichangjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public caishichang3keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.caishichangjiage[2])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.caishichangjiage[2]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.caishichangjiage[2] + '"' +","
			+ '"leixing"' +":"+ '"' + this.caishichangid[2] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.caishichangshuliang[2] = 0;
			this.caishichangjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public caishichang4keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.caishichangjiage[3])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.caishichangjiage[3]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.caishichangjiage[3] + '"' +","
			+ '"leixing"' +":"+ '"' + this.caishichangid[3] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.caishichangshuliang[3] = 0;
			this.caishichangjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public caishichang5keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.caishichangjiage[4])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.caishichangjiage[4]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.caishichangjiage[4] + '"' +","
			+ '"leixing"' +":"+ '"' + this.caishichangid[4] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.caishichangshuliang[4] = 0;
			this.caishichangjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public caishichang6keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.caishichangjiage[5])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.caishichangjiage[5]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.caishichangjiage[5] + '"' +","
			+ '"leixing"' +":"+ '"' + this.caishichangid[5] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.caishichangshuliang[5] = 0;
			this.caishichangjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public async caishichang7keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai5.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.caishichangfudaizhuanfa1,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public caishichangfudaizhuanfa1(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + this.caishichangid[6] + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.caishichangshuliang[6] = 0;
		this.caishichangjiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(this.caishichangid[6]);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}

	public async caishichang8keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai6.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.caishichangfudaizhuanfa2,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public caishichangfudaizhuanfa2(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + this.caishichangid[7] + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.caishichangshuliang[7] = 0;
		this.caishichangjiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(this.caishichangid[7]);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}

	public async caishichang9keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai7.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.caishichangfudaizhuanfa3,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public caishichangfudaizhuanfa3(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + this.caishichangid[8] + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.caishichangshuliang[8] = 0;
		this.caishichangjiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(this.caishichangid[8]);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}

	/*
	菜市场买菜入口
	*/
	public caishichangjinru(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().maicaijiemian("kai");
	}


		/*
	培训中心商店相关内容
	*/
	public peixunmaimai(){
		this.peixunteshu = false;
		let peixunyongpinid = [];
		let peixunyongpinjiage = [];
		for(var i = 0;i<Gerenshuxing.chaoshishangdianbiao.length;i++){
			if(Gerenshuxing.chaoshishangdianbiao[i].shangdianleixing == "4"){
				peixunyongpinid.push(Gerenshuxing.chaoshishangdianbiao[i].id);
				peixunyongpinjiage.push(Gerenshuxing.chaoshishangdianbiao[i].shoujia);
			}
		}
		for(var k =0;k<9;k++){
			let suijichushou = Math.floor(Math.random() * peixunyongpinid.length);
			this.peixunid[k] = peixunyongpinid[suijichushou];
			this.peixunjiage[k] = peixunyongpinjiage[suijichushou];
			this.peixunshuliang[k] = 1;
		}
		/*for(var i = 0;i<Gerenshuxing.peixunshangdianbiao.length;i++){
			if(Gerenshuxing.peixunshangdianbiao[i].teshuid == Gerenshuxing.teshushijian){
				this.peixunid[0] = Gerenshuxing.peixunshangdianbiao[i].id;
				this.peixunjiage[0] = Math.floor(parseInt(Gerenshuxing.peixunshangdianbiao[i].shoujia) * (parseInt(Gerenshuxing.peixunshangdianbiao[i].zhekou) / 10));
				this.peixunshuliang[0] = 1;
				this.peixunteshu = true;
				break;
			}
		}
		*/
		this.xianshipeixunshangdianjiemian();
	}

	public xianshipeixunshangdianjiemian(){
		this.chaoshigoumaiui = new Chaoshishangdianui();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.chaoshigoumaiui);
		this.chaoshigoumaiui.guanbijiemain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.chaoshigoumaiui.heisezhezao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbichaoshiui,this);
		this.peixunjiemianchushihua();
	}

	public peixunjiemianchushihua(){
		this.chaoshigoumaiui.biaotilan.text = "培训商店";
		for(var h = 0;h<Gerenshuxing.daojubiao.length;h++){
			if(Gerenshuxing.daojubiao[h].id == this.peixunid[0]){
				this.peixuntupian[0] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.peixunmingcheng[0] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.peixunid[1]){
				this.peixuntupian[1] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.peixunmingcheng[1] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.peixunid[2]){
				this.peixuntupian[2] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.peixunmingcheng[2] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.peixunid[3]){
				this.peixuntupian[3] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.peixunmingcheng[3] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.peixunid[4]){
				this.peixuntupian[4] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.peixunmingcheng[4] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.peixunid[5]){
				this.peixuntupian[5] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.peixunmingcheng[5] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.peixunid[6]){
				this.peixuntupian[6] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.peixunmingcheng[6] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.peixunid[7]){
				this.peixuntupian[7] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.peixunmingcheng[7] = Gerenshuxing.daojubiao[h].mingcheng;
			};
			if(Gerenshuxing.daojubiao[h].id == this.peixunid[8]){
				this.peixuntupian[8] = Gerenshuxing.daojubiao[h].xianshiicon;
				this.peixunmingcheng[8] = Gerenshuxing.daojubiao[h].mingcheng;
			};
		}
		this.chaoshigoumaiui.daojutubiao.source = this.peixuntupian[0];
		this.chaoshigoumaiui.daojutubiao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixuntips1,this);
		this.chaoshigoumaiui.daojutubiao0.source = this.peixuntupian[1];
		this.chaoshigoumaiui.daojutubiao0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixuntips2,this);
		this.chaoshigoumaiui.daojutubiao1.source = this.peixuntupian[2];
		this.chaoshigoumaiui.daojutubiao1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixuntips3,this);
		this.chaoshigoumaiui.daojutubiao2.source = this.peixuntupian[3];
		this.chaoshigoumaiui.daojutubiao2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixuntips4,this);
		this.chaoshigoumaiui.daojutubiao3.source = this.peixuntupian[4];
		this.chaoshigoumaiui.daojutubiao3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixuntips5,this);
		this.chaoshigoumaiui.daojutubiao4.source = this.peixuntupian[5];
		this.chaoshigoumaiui.daojutubiao4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixuntips6,this);
		this.chaoshigoumaiui.daojutubiao5.source = this.peixuntupian[6];
		this.chaoshigoumaiui.daojutubiao5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixuntips7,this);
		this.chaoshigoumaiui.daojutubiao6.source = this.peixuntupian[7];
		this.chaoshigoumaiui.daojutubiao6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixuntips8,this);
		this.chaoshigoumaiui.daojutubiao7.source = this.peixuntupian[8];
		this.chaoshigoumaiui.daojutubiao7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixuntips9,this);
		if(this.peixunteshu == true){
			this.chaoshigoumaiui.zhekoutubiao.alpha = 1;
		}else{
			this.chaoshigoumaiui.zhekoutubiao.alpha = 0;
		}
		if(parseInt(this.peixunshuliang[0]) <= 0){
			this.chaoshigoumaiui.goumaijine.text = "已售罄";
			this.chaoshigoumaiui.but_goumai.enabled = false;
			this.chaoshigoumaiui.but_goumai.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun1keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine.text = "- " + this.peixunjiage[0];
			this.chaoshigoumaiui.but_goumai.enabled = true;
			this.chaoshigoumaiui.but_goumai.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun1keng,this);
		}
		if(parseInt(this.peixunshuliang[1]) <= 0){
			this.chaoshigoumaiui.goumaijine0.text = "已售罄";
			this.chaoshigoumaiui.but_goumai0.enabled = false;
			this.chaoshigoumaiui.but_goumai0.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun2keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine0.text = "- " + this.peixunjiage[1];
			this.chaoshigoumaiui.but_goumai0.enabled = true;
			this.chaoshigoumaiui.but_goumai0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun2keng,this);
		}
		if(parseInt(this.peixunshuliang[2]) <= 0){
			this.chaoshigoumaiui.goumaijine1.text = "已售罄";
			this.chaoshigoumaiui.but_goumai1.enabled = false;
			this.chaoshigoumaiui.but_goumai1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun3keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine1.text = "- " + this.peixunjiage[2];
			this.chaoshigoumaiui.but_goumai1.enabled = true;
			this.chaoshigoumaiui.but_goumai1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun3keng,this);
		}
		if(parseInt(this.peixunshuliang[3]) <= 0){
			this.chaoshigoumaiui.goumaijine2.text = "已售罄";
			this.chaoshigoumaiui.but_goumai2.enabled = false;
			this.chaoshigoumaiui.but_goumai2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun4keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine2.text = "- " + this.peixunjiage[3];
			this.chaoshigoumaiui.but_goumai2.enabled = true;
			this.chaoshigoumaiui.but_goumai2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun4keng,this);
		}
		if(parseInt(this.peixunshuliang[4]) <= 0){
			this.chaoshigoumaiui.goumaijine3.text = "已售罄";
			this.chaoshigoumaiui.but_goumai3.enabled = false;
			this.chaoshigoumaiui.but_goumai3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun5keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine3.text = "- " + this.peixunjiage[4];
			this.chaoshigoumaiui.but_goumai3.enabled = true;
			this.chaoshigoumaiui.but_goumai3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun5keng,this);
		}
		if(parseInt(this.peixunshuliang[5]) <= 0){
			this.chaoshigoumaiui.goumaijine4.text = "已售罄";
			this.chaoshigoumaiui.but_goumai4.enabled = false;
			this.chaoshigoumaiui.but_goumai4.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun6keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine4.text = "- " + this.peixunjiage[5];
			this.chaoshigoumaiui.but_goumai4.enabled = true;
			this.chaoshigoumaiui.but_goumai4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun6keng,this);
		}
		if(parseInt(this.peixunshuliang[6]) <= 0){
			this.chaoshigoumaiui.goumaijine5.text = "已售罄";
			this.chaoshigoumaiui.but_goumai5.enabled = false;
			this.chaoshigoumaiui.but_goumai5.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun7keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine5.text =  "免费";
			this.chaoshigoumaiui.but_goumai5.enabled = true;
			this.chaoshigoumaiui.but_goumai5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun7keng,this);
		}
		if(parseInt(this.peixunshuliang[7]) <= 0){
			this.chaoshigoumaiui.goumaijine6.text = "已售罄";
			this.chaoshigoumaiui.but_goumai6.enabled = false;
			this.chaoshigoumaiui.but_goumai6.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun8keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine6.text =  "免费";
			this.chaoshigoumaiui.but_goumai6.enabled = true;
			this.chaoshigoumaiui.but_goumai6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun8keng,this);
		}
		if(parseInt(this.peixunshuliang[8]) <= 0){
			this.chaoshigoumaiui.goumaijine7.text = "已售罄";
			this.chaoshigoumaiui.but_goumai7.enabled = false;
			this.chaoshigoumaiui.but_goumai7.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun9keng,this);
		}else{
			this.chaoshigoumaiui.goumaijine7.text =  "免费";
			this.chaoshigoumaiui.but_goumai7.enabled = true;
			this.chaoshigoumaiui.but_goumai7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.peixun9keng,this);
		}
	}


	public peixuntips1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.peixunid[0]);
	}

	public peixuntips2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.peixunid[1]);
	}

	public peixuntips3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.peixunid[2]);
	}

	public peixuntips4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.peixunid[3]);
	}

	public peixuntips5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.peixunid[4]);
	}

	public peixuntips6(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.peixunid[5]);
	}

	public peixuntips7(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.peixunid[6]);
	}

	public peixuntips8(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.peixunid[7]);
	}

	public peixuntips9(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.daojutipsjiemian(this.peixunid[8]);
	}

	


	public peixun1keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.peixunjiage[0])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.peixunjiage[0]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.peixunjiage[0] + '"' +","
			+ '"leixing"' +":"+ '"' + this.peixunid[0] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.peixunshuliang[0] = 0;
			this.peixunjiemianchushihua();
			if(this.peixunteshu == true){
				Gameguanli.Kongzhitai().paomadengui("天降鸿运！“"+ Gerenshuxing.mingzi +"”以超低的价格购买到超市出售的特价商品["+ this.peixunmingcheng[0] +"]！");
			}
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public peixun2keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.peixunjiage[1])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.peixunjiage[1]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.peixunjiage[1] + '"' +","
			+ '"leixing"' +":"+ '"' + this.peixunid[1] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.peixunshuliang[1] = 0;
			this.peixunjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public peixun3keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.peixunjiage[2])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.peixunjiage[2]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.peixunjiage[2] + '"' +","
			+ '"leixing"' +":"+ '"' + this.peixunid[2] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.peixunshuliang[2] = 0;
			this.peixunjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public peixun4keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.peixunjiage[3])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.peixunjiage[3]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.peixunjiage[3] + '"' +","
			+ '"leixing"' +":"+ '"' + this.peixunid[3] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.peixunshuliang[3] = 0;
			this.peixunjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public peixun5keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.peixunjiage[4])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.peixunjiage[4]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.peixunjiage[4] + '"' +","
			+ '"leixing"' +":"+ '"' + this.peixunid[4] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.peixunshuliang[4] = 0;
			this.peixunjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public peixun6keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jinbizhi >= parseInt(this.peixunjiage[5])){
			Gerenshuxing.jinbizhi = Gerenshuxing.jinbizhi - parseInt(this.peixunjiage[5]);
			Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"1"' +","
			+ '"kouchushuliang"' +":"+ '"' + this.peixunjiage[5] + '"' +","
			+ '"leixing"' +":"+ '"' + this.peixunid[5] + '"' +","
			+ '"shuliang"' +":"+ '"1"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			this.peixunshuliang[5] = 0;
			this.peixunjiemianchushihua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("对不起，您的金钱不足，无法购买！");
		}
	}

	public async peixun7keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai5.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.peixunfudaizhuanfa1,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public peixunfudaizhuanfa1(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + this.peixunid[6] + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.peixunshuliang[6] = 0;
		this.peixunjiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(this.peixunid[6]);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}

	public async peixun8keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai6.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.peixunfudaizhuanfa2,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public peixunfudaizhuanfa2(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + this.peixunid[7] + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.peixunshuliang[7] = 0;
		this.peixunjiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(this.peixunid[7]);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}

	public async peixun9keng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.chaoshigoumaiui.but_goumai7.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.peixunfudaizhuanfa3,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public peixunfudaizhuanfa3(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"' + this.peixunid[8] + '"' +","
		+ '"shuliang"' +":"+ '"1"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
		this.peixunshuliang[8] = 0;
		this.peixunjiemianchushihua();
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon(this.peixunid[8]);
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1");
	}


	


	

	
	
}
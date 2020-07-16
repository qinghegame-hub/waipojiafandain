class Npcduihuaui extends eui.Component implements  eui.UIComponent {
	public npcduihuazu:eui.Group;
	public img_npcduihuakuang:eui.Image;
	public npctouxiang:eui.Image;
	public npcname:eui.Label;
	public shuohuaren:eui.Label;
	public shuohuaneirong:eui.Label;
	public guanbiduihua:eui.Button;
	public huida1:eui.Button;
	public huida2:eui.Button;
	public dianjijixu:eui.Image;

	public npcbiao:any;
	public renwubiao:any;

	public mingzi:any;
	public waixing:any;
	public didian:any;
	public tianqi:any;
	public shijian:any;
	public jilv:any;
	public juqingjilv:any;
	public juqingid:any;
	public putongid:any;
	public npcid:any;

	public renwuxuhao:any;
	public xiayirenwu:any;
	public renwutiaozhuan1:any;
	public renwutiaozhuan2:any;
	public renwuneirong:any;
	public renwuxuanze1:any;
	public renwuxuanze2:any;
	public renwujiangli1:any;
	public renwujiangli2:any;
	public zhengquexuanxiang:any;

	public dangqianrenwu:any;

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
	}

	public chushihua(npcidid){
		this.npcbiao = RES.getRes("npcbiao_json");
		this.renwubiao = RES.getRes("renwubiao_json");
		for(var i = 0 ; i < this.npcbiao.length; i ++){
			if(this.npcbiao[i].id == npcidid){
				this.mingzi = this.npcbiao[i].mingzi;
				this.waixing = this.npcbiao[i].waixing;
				this.didian = this.npcbiao[i].didian;
				this.tianqi = this.npcbiao[i].tianqi;
				this.shijian = this.npcbiao[i].shijian;
				this.jilv = this.npcbiao[i].jilv;
				this.juqingjilv = this.npcbiao[i].juqingjilv;
				this.juqingid = this.npcbiao[i].juqingid;
				this.putongid = this.npcbiao[i].putongid;
				this.npcid = this.npcbiao[i].id;
				break;
			}
		}
		this.npctouxiang.source = this.waixing;
		this.npcname.text = this.mingzi;
		this.shuohuaren.text = this.mingzi;
		this.fenpeirenwu();
	}

	public fenpeirenwu(){
		let suijijuqing = Math.floor(Math.random() * 100);
		if(suijijuqing < parseInt(this.juqingjilv)){
			this.dangqianrenwu = this.juqingid;
		}else{
			this.dangqianrenwu = this.putongid;
		}
		this.dangqianrenwu = this.dangqianrenwu.split(",");
		let suijiputong = Math.floor(Math.random() * this.dangqianrenwu.length);
		this.dangqianrenwu = this.dangqianrenwu[suijiputong];
		this.renwuxiafa(this.dangqianrenwu);

	}

	public renwuxiafa(renwuid){
		this.huida1.enabled = false;
		this.huida1.alpha = 0;
		this.huida1.label = "";
		this.huida2.enabled = false;
		this.huida2.alpha = 0;
		this.huida2.label = "";
		this.guanbiduihua.enabled = false;
		this.guanbiduihua.alpha = 0;
		this.guanbiduihua.label = "";
		for(var r = 0;r<this.renwubiao.length;r++){
			if(this.renwubiao[r].id == renwuid){
				this.renwuxuhao = this.renwubiao[r].id;
				this.xiayirenwu = this.renwubiao[r].nextid;
				this.renwutiaozhuan1 = this.renwubiao[r].renwu1tiaozhuan;
				this.renwutiaozhuan2 = this.renwubiao[r].renwu2tiaozhuan;
				this.renwuneirong = this.renwubiao[r].renwuneirong;
				this.renwuxuanze1 = this.renwubiao[r].renwuxuanxiang1;
				this.renwuxuanze2 = this.renwubiao[r].renwuxuanxiang2;
				this.renwujiangli1 = this.renwubiao[r].renwujiangli1;
				this.renwujiangli2 = this.renwubiao[r].renwujiangli2;
				this.zhengquexuanxiang = this.renwubiao[r].zhengquerenwu;
				break;
			}
		}
		this.shuohuaneirong.text = this.renwuneirong;
		if(this.renwuxuanze1 != "-1"){
			this.huida2.enabled = true;
			this.huida2.alpha = 1;
			this.huida2.label = this.renwuxuanze1;
			this.huida2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjihuida1,this);
			if(this.renwuxuanze2 != "-1"){
				this.huida1.enabled = true;
				this.huida1.alpha = 1;
				this.huida1.label = this.renwuxuanze2;
				this.huida1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjihuida2,this);
				this.guanbiduihua.enabled = true;
				this.guanbiduihua.alpha = 1;
				this.guanbiduihua.label = "关闭";
				this.guanbiduihua.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbiduihuakuang,this);
			}else{
				this.huida1.enabled = true;
				this.huida1.alpha = 1;
				this.huida1.label = "关闭";
				this.huida1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbiduihuakuang,this);
				this.guanbiduihua.enabled = false;
				this.guanbiduihua.alpha = 0;
				this.guanbiduihua.label = "";
			}
		}else{
			if(this.renwuxuanze2 != "-1"){
				this.huida2.enabled = true;
				this.huida2.alpha = 1;
				this.huida2.label = this.renwuxuanze2;
				this.huida2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjihuida2,this);
				this.huida1.enabled = true;
				this.huida1.alpha = 1;
				this.huida1.label = "关闭";
				this.huida1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbiduihuakuang,this);
				this.guanbiduihua.enabled = false;
				this.guanbiduihua.alpha = 0;
				this.guanbiduihua.label = "";
			}else{
				this.huida2.enabled = true;
				this.huida2.alpha = 1;
				this.huida2.label = "关闭";
				this.huida2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbiduihuakuang,this);
			}
		}

		
	}

	public dianjihuida1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.renwujiangli1 != "-1"){
			this.renwujiangli1 = this.renwujiangli1.split(",");
			let beishu = 1;
			Weblianjie.fasongshuju("code:993","{" + '"leixing"' +":"+ '"' + this.renwujiangli1[0] + '"' +","
			+ '"shuliang"' +":"+ '"' + this.renwujiangli1[1] + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +","
			 + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		}
		this.renwuxiafa(this.renwutiaozhuan1);
	}

	public dianjihuida2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(this.renwujiangli2 != "-1"){
			this.renwujiangli2 = this.renwujiangli2.split(",");
			let beishu = 1;
			Weblianjie.fasongshuju("code:993","{" + '"leixing"' +":"+ '"' + this.renwujiangli2[0] + '"' +","
			+ '"shuliang"' +":"+ '"' + this.renwujiangli2[1] + '"' +","
			+ '"beishu"' +":"+ '"' + beishu + '"' +","
			 + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
		}
		this.renwuxiafa(this.renwutiaozhuan2);
	}

	public guanbiduihuakuang(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this);
	}

	
}
class Pvppipeijiemian extends eui.Component implements  eui.UIComponent {
	public pipeijiemianzu:eui.Group;
	public pipeibeiijng:eui.Image;
	public lanfangtouxiang:eui.Group;
	public lanfangtouxiangzu:eui.Group;
	public morentouxianglan:eui.Image;
	public lanfangtouxiangkuang:eui.Image;
	public hongfangtouxiang:eui.Group;
	public hongfangtouxiangzu:eui.Group;
	public morentouxianghong:eui.Image;
	public hongfangtouxiangkuang:eui.Image;
	public lanfangnicheng:eui.Label;
	public lanfangmingwang:eui.Label;
	public hongfangmingwang:eui.Label;
	public hongfangnicheng:eui.Label;
	public shengyu5beicishu:eui.Label;
	public dangqianbeishu:eui.Label;
	public dangqiantishi:eui.Label;
	public xiaohaoshuliang:eui.Label;
	public xiaohaoicon:eui.Image;
	public kaishipipeianniu:eui.Button;
	public fanbeianniu:eui.Button;
	public guanbijiemiananniu:eui.Button;


	public keyipipei:boolean = true;

	public direnzhenshitouxiang:egret.Bitmap;

	public pipeidonghuakongzhi:boolean = true;

	public constructor() {
		super();
		this.direnzhenshitouxiang = new egret.Bitmap();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public chushihua(){
		//关闭按钮初始化
		this.guanbijiemiananniu.enabled = true;
		this.guanbijiemiananniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiemian,this);
		//倍数信息初始化
		this.fanbeianniuchushi();
		//匹配信息初始化
		this.pipeianniuchushi();
		//自己信息初始化
		this.zijixinxichushi();
		//敌人信息初始化
		this.direnchushi();
		this.keyipipei = true;
		this.pipeidonghuakongzhi = true;
	}

	public direnchushi(){
		if(this.direnzhenshitouxiang.parent){
			this.direnzhenshitouxiang.parent.removeChild(this.direnzhenshitouxiang);
		}
		this.hongfangmingwang.text = "名望:????级";
		this.hongfangnicheng.text = "??????";
	}

	public fanbeianniuchushi(){
		if(Gerenshuxing.tiaozhanbeishu[1] == "1"){
			this.fanbeianniu.enabled = true;
			this.fanbeianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.fanbeijiangli,this);
		}else{
			this.fanbeianniu.enabled = false;
			this.fanbeianniu.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.fanbeijiangli,this);
		}
		this.shengyu5beicishu.text = "今日剩余5倍奖励次数:" + Gerenshuxing.tiaozhanbeishu[0] + "次";
		this.dangqianbeishu.text = "当前奖励倍数:" + Gerenshuxing.tiaozhanbeishu[1] + "倍";
	}

	public pipeianniuchushi(){
		if(this.keyipipei == true){
			this.kaishipipeianniu.enabled = true;
			this.kaishipipeianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.kaishipipei,this);
			this.dangqiantishi.text = "点击下方的‘开始匹配’搜寻对手！"
		}else{
			this.kaishipipeianniu.enabled = false;
			this.kaishipipeianniu.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.kaishipipei,this);
			this.dangqiantishi.text = "正在匹配对手，请稍后..."
		}
		this.xiaohaoshuliang.text = "- 5";
		
	}

	public zijixinxichushi(){
		//自己头像显示
		this.zijitouxiangxianshi();
		//等级和昵称显示
		this.lanfangnicheng.text = Gerenshuxing.mingzi;
		this.lanfangmingwang.text = "名望:" + Gerenshuxing.xingfudengji + "级";
	}

	public zijitouxiangxianshi(){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(Gerenshuxing.touxiang);
		youbiaoLoader.once(egret.Event.COMPLETE, this.xianshizijitouxiang, this);
		
	}

	public xianshizijitouxiang(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			let head = new egret.Bitmap(texture);
			head.x = 0;
			head.y = 0;
			head.width=this.lanfangtouxiangzu.width;
			head.height=this.lanfangtouxiangzu.height;
			this.lanfangtouxiangzu.addChild(head);
		}
	}

	public direntouxiang(url){
		var youbiaoLoader: egret.ImageLoader = new egret.ImageLoader;
		youbiaoLoader.load(url);
		youbiaoLoader.once(egret.Event.COMPLETE, this.xianshidirentouxiang, this);
		
	}

	public xianshidirentouxiang(evt: egret.Event):void{
		if (evt.currentTarget.data) {
//			egret.log("加载头像成功: " + evt.currentTarget.data);
			let texture = new egret.Texture();
			texture.bitmapData = evt.currentTarget.data;
			this.direnzhenshitouxiang = new egret.Bitmap(texture);
			this.direnzhenshitouxiang.x = 0;
			this.direnzhenshitouxiang.y = 0;
			this.direnzhenshitouxiang.width=this.hongfangtouxiangzu.width;
			this.direnzhenshitouxiang.height=this.hongfangtouxiangzu.height;
			this.hongfangtouxiangzu.addChild(this.direnzhenshitouxiang);
		}
	}

	public async fanbeijiangli(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.fanbeianniu.enabled = false;
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongfanbeiqingqiu,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongfanbeiqingqiu(){
		Weblianjie.fasongshuju("code:167","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +"}");
	}

	public guanbijiemian(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().pvppipeiui("guan");
	}

	public kaishipipei(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		if(Gerenshuxing.jiatingzhi >= 5){
			this.keyipipei = false;
			this.pipeianniuchushi();
			this.pipeidonghua();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("您的行动力不足，无法开始比拼!");
		}
	}

	public pipeidonghua(){
		let pipeisudu:number = 300;
		let pipeijilv:number = 10;
		this.pipeigundong(pipeisudu,pipeijilv);
	}

	public pipeigundong(sudu:number,jilv:number){
		let pipeirenming = this.suijimingzi();
		let pipeidengji = this.suijidengji();
		let touxiangdizhi = this.suijitouxiang();
		if(this.pipeidonghuakongzhi == true){
			let pipeidaojilv = Math.floor(Math.random() * 1000);
			if(pipeidaojilv <= jilv){
				Weblianjie.fasongshuju("code:165","{"  + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
				this.pipeidonghuakongzhi = false;
			}else{
				this.morentouxianghong.source = touxiangdizhi;
				this.hongfangnicheng.text = pipeirenming;
				this.hongfangmingwang.text = "名望:" + pipeidengji + "级";
				let biangengsudu:number = sudu + 50;
				let biangengjilv:number = jilv + 5;
				egret.Tween.get(this.morentouxianghong).wait(biangengsudu).call(()=>{
					if(this.pipeidonghuakongzhi == true){
						this.pipeigundong(biangengsudu,biangengjilv);
					}
				})
			}
		}
	}

	public pipeichenggong(pvpduishouxin:any){
		this.pipeidonghuakongzhi = false;
		this.hongfangnicheng.text = pvpduishouxin.mingzi;
		//显示敌人的头像
		this.direntouxiang(pvpduishouxin.touxiang);
		//计算敌人的等级
		let direndengji = this.direndengjijisuan(pvpduishouxin);
		this.hongfangmingwang.text = "名望:" + direndengji + "级";
		this.jinruzhandou(5,pvpduishouxin);
	}

	public jinruzhandou(daojishi:number,pvpduishouxin:any){
		if(this.parent){
			if(daojishi <= 0){
				this.dangqiantishi.text = "比拼开始！！！"
				/*
				扣除行动力
				*/
				Weblianjie.fasongshuju("code:037","{" + '"kouchushu"' +":"+ "5" +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
				/*
				进入战斗
				*/
				Gameguanli.Kongzhitai().pvpzhandoujiemian("kai",pvpduishouxin,Gerenshuxing.tiaozhanbeishu[1]);
				/*
				变更奖励状态
				*/
				Weblianjie.fasongshuju("code:169","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +"}");
				this.keyipipei = true;
				this.chushihua();
			}else{
				this.dangqiantishi.text = "比拼开始倒计时:" + daojishi;
				let xindaojishi:number = daojishi - 1;
				egret.Tween.get(this.dangqiantishi).wait(1000).call(()=>{
					if(this.parent){
						this.jinruzhandou(xindaojishi,pvpduishouxin);
					}
				})
			}
		}
	}


	/*
	敌人等级计算
	*/
	public direndengjijisuan(pvpduishouxin){
		let direndengji:number = 0;
		for(var i = 0;i<Gerenshuxing.gerendengjibiao.length;i++){
			if(pvpduishouxin.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].levelexp)){
				direndengji = parseInt(Gerenshuxing.gerendengjibiao[Gerenshuxing.gerendengjibiao.length -1].id);
				break;
			}else{
				if(pvpduishouxin.xingfuzhi >= parseInt(Gerenshuxing.gerendengjibiao[i].levelexp) && pvpduishouxin.xingfuzhi < parseInt(Gerenshuxing.gerendengjibiao[i + 1].levelexp)){
					direndengji = parseInt(Gerenshuxing.gerendengjibiao[i].id);
					break; 
				}
			}
		}
		return direndengji;
	}

	/*
    随机名字生成
    */
    public suijimingzi(){
        let xingmingku = RES.getRes("xingmingku_json");
        let suijixing1 = Math.floor(Math.random() * xingmingku.length);
        let xing1 = xingmingku[suijixing1].xing1;
        let suijixing2 = Math.floor(Math.random() * xingmingku.length);
        let xing2 = xingmingku[suijixing2].xing2;
        let suijixing3 = Math.floor(Math.random() * xingmingku.length);
        let xing3 = xingmingku[suijixing3].xing3;
        let xingmingquan = xing1 + xing2 + xing3;
        return xingmingquan;
    }

	/*
    随机等级生成
    */
    public suijidengji(){
		let dengji = Math.floor(Math.random() * 30);
        return dengji;
    }

	/*
    随机头像生成
    */
    public suijitouxiang(){
		let touxiangxuhao:number = Math.floor(Math.random() * 109) + 1000;
		let touxiang:string = "tx" + touxiangxuhao + "_png";
        return touxiang;
    }
	
}
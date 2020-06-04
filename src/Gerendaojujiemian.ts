class Gerendaojujiemian extends eui.Component implements  eui.UIComponent {
	public gerendaojuzu:eui.Group;
	public jiemianzhezao:eui.Image;
	public dajiemianbeijing:eui.Image;
	public biaotiwenzixianshi:eui.Label;
	public daojuzu:eui.Group;
	public daojubeijingkuang:eui.Image;
	public daojuicon:eui.Image;
	public shuliangdiban:eui.Image;
	public shuliangxianshi:eui.Label;
	public daojuzu0:eui.Group;
	public daojubeijingkuang0:eui.Image;
	public daojuicon0:eui.Image;
	public shuliangdiban0:eui.Image;
	public shuliangxianshi0:eui.Label;
	public daojuzu1:eui.Group;
	public daojubeijingkuang1:eui.Image;
	public daojuicon1:eui.Image;
	public shuliangdiban1:eui.Image;
	public shuliangxianshi1:eui.Label;
	public daojuzu2:eui.Group;
	public daojubeijingkuang2:eui.Image;
	public daojuicon2:eui.Image;
	public shuliangdiban2:eui.Image;
	public shuliangxianshi2:eui.Label;
	public daojuzu3:eui.Group;
	public daojubeijingkuang3:eui.Image;
	public daojuicon3:eui.Image;
	public shuliangdiban3:eui.Image;
	public shuliangxianshi3:eui.Label;
	public daojuzu4:eui.Group;
	public daojubeijingkuang4:eui.Image;
	public daojuicon4:eui.Image;
	public shuliangdiban4:eui.Image;
	public shuliangxianshi4:eui.Label;
	public daojuzu5:eui.Group;
	public daojubeijingkuang5:eui.Image;
	public daojuicon5:eui.Image;
	public shuliangdiban5:eui.Image;
	public shuliangxianshi5:eui.Label;
	public daojuzu6:eui.Group;
	public daojubeijingkuang6:eui.Image;
	public daojuicon6:eui.Image;
	public shuliangdiban6:eui.Image;
	public shuliangxianshi6:eui.Label;
	public daojuzu7:eui.Group;
	public daojubeijingkuang7:eui.Image;
	public daojuicon7:eui.Image;
	public shuliangdiban7:eui.Image;
	public shuliangxianshi7:eui.Label;
	public daojuzu8:eui.Group;
	public daojubeijingkuang8:eui.Image;
	public daojuicon8:eui.Image;
	public shuliangdiban8:eui.Image;
	public shuliangxianshi8:eui.Label;
	public daojuzu9:eui.Group;
	public daojubeijingkuang9:eui.Image;
	public daojuicon9:eui.Image;
	public shuliangdiban9:eui.Image;
	public shuliangxianshi9:eui.Label;
	public daojuzu10:eui.Group;
	public daojubeijingkuang10:eui.Image;
	public daojuicon10:eui.Image;
	public shuliangdiban10:eui.Image;
	public shuliangxianshi10:eui.Label;
	public guanbianniu:eui.Button;




	/*
	每一个坑需要一个单独的ID，来确保点击查看TIPS时，能获取到数据
	*/
	public di1kengid:string
	public di2kengid:string
	public di3kengid:string
	public di4kengid:string
	public di5kengid:string
	public di6kengid:string
	public di7kengid:string
	public di8kengid:string
	public di9kengid:string
	public di10kengid:string
	public di11kengid:string
	public di12kengid:string

	/*
	当前正在使用的道具id
	*/
	public dangqianid:string;

	public dangqiancaiid:string;

	/*
	道具弹出框实例
	*/
	public daojutanchukuang:Tongyongquerenkuang;

	/*
	奖励展示界面实例
	*/
	public jianglijiemian:Jianglijiesuanui;

	/*
	当前类型和菜的id记录，以便于获得奖励后刷新界面
	*/
	public dangqianshiyongleixing:string;
	public dangqianshiyongcaiid:string;
	

	
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

	public chushihua(leixing,caiid?){
		this.guanbianniu.enabled = true;
		this.guanbianniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbizhujiemian,this);
		this.jiemianzhezao.touchEnabled = true;
		this.jiemianzhezao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbizhujiemian,this);
		this.dangqiancaiid = caiid;
		this.dangqianshiyongleixing = leixing;
		/*
		初始化时，所有的道具格子都不显示
		*/
		this.daojuzu.alpha = 0;
		this.daojuzu0.alpha = 0;
		this.daojuzu1.alpha = 0;
		this.daojuzu2.alpha = 0;
		this.daojuzu3.alpha = 0;
		this.daojuzu4.alpha = 0;
		this.daojuzu5.alpha = 0;
		this.daojuzu6.alpha = 0;
		this.daojuzu7.alpha = 0;
		this.daojuzu8.alpha = 0;
		this.daojuzu9.alpha = 0;
		this.daojuzu10.alpha = 0;
		/*
		初始化时，将所有坑的id重置为0
		*/
		this.di1kengid = "0"
		this.di2kengid = "0"
		this.di3kengid = "0"
		this.di4kengid = "0"
		this.di5kengid = "0"
		this.di6kengid = "0"
		this.di7kengid = "0"
		this.di8kengid = "0"
		this.di9kengid = "0"
		this.di10kengid = "0"
		this.di11kengid = "0"
		this.di12kengid = "0"

		this.dangqianid = "0"

		/*
		/根据类型判断是个人使用道具，还是菜品使用道具,1为个人，2为道具
		*/
		if(leixing == 1){
			this.biaotiwenzixianshi.text = "个人进修";
			this.gerendaojuxiangguan();
		}else{
			this.biaotiwenzixianshi.text = "菜品研制";
			this.caipinyanzhixiangguang();
		}

	}

	public guanbizhujiemian(){
		this.parent.removeChild(this);
	}
/*
	对应道具表，检查菜品用的道具
	*/

	public caipinyanzhixiangguang(){
//		let caipindaojuzu = [];
		let caipinweizhi:number = 0;
		for(var i = 0;i<Gerenshuxing.daojubiao.length;i++){
			if(Gerenshuxing.daojubiao[i].shiyongleixing == "5"){
//				caipindaojuzu.push(Gerenshuxing.daojubiao[i].id);
				caipinweizhi += 1;
				this.panduanxianshineirong(Gerenshuxing.daojubiao[i].id,Gerenshuxing.daojubiao[i].xianshiicon,caipinweizhi);
			}
		}
	}

	/*
	对应道具表，检查个人使用道具
	*/
	public gerendaojuxiangguan(){
//		let gerendaojuzu = [];
		let geziweizhi:number = 0;
		for(var i = 0;i<Gerenshuxing.daojubiao.length;i++){
			if(Gerenshuxing.daojubiao[i].shiyongleixing == "6"){
//				gerendaojuzu.push(Gerenshuxing.daojubiao[i].id);
				geziweizhi += 1;
				this.panduanxianshineirong(Gerenshuxing.daojubiao[i].id,Gerenshuxing.daojubiao[i].xianshiicon,geziweizhi);
			}
		}

	}

	/*
	得到对应的道具ID，开始进行格子的显示
	*/
	public panduanxianshineirong(id,tupian,xuhao){
		if(xuhao == 1){
			this.daojuicon.source = tupian;
			this.di1kengid = id;
			this.daojuzu.alpha = 1;
			this.daojuzu.touchEnabled = true;
			this.daojuzu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji1keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 2){
			this.di2kengid = id;
			this.daojuicon0.source = tupian;
			this.daojuzu0.alpha = 1;
			this.daojuzu0.touchEnabled = true;
			this.daojuzu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji2keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 3){
			this.di3kengid = id;
			this.daojuicon1.source = tupian;
			this.daojuzu1.alpha = 1;
			this.daojuzu1.touchEnabled = true;
			this.daojuzu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji3keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 4){
			this.di4kengid = id;
			this.daojuicon2.source = tupian;
			this.daojuzu2.alpha = 1;
			this.daojuzu2.touchEnabled = true;
			this.daojuzu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji4keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 5){
			this.di5kengid = id;
			this.daojuicon3.source = tupian;
			this.daojuzu3.alpha = 1;
			this.daojuzu3.touchEnabled = true;
			this.daojuzu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji5keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 6){
			this.di6kengid = id;
			this.daojuicon4.source = tupian;
			this.daojuzu4.alpha = 1;
			this.daojuzu4.touchEnabled = true;
			this.daojuzu4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji6keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 7){
			this.di7kengid = id;
			this.daojuicon5.source = tupian;
			this.daojuzu5.alpha = 1;
			this.daojuzu5.touchEnabled = true;
			this.daojuzu5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji7keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 8){
			this.di8kengid = id;
			this.daojuicon6.source = tupian;
			this.daojuzu6.alpha = 1;
			this.daojuzu6.touchEnabled = true;
			this.daojuzu6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji8keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 9){
			this.di9kengid = id;
			this.daojuicon7.source = tupian;
			this.daojuzu7.alpha = 1;
			this.daojuzu7.touchEnabled = true;
			this.daojuzu7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji9keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 10){
			this.di10kengid = id;
			this.daojuicon8.source = tupian;
			this.daojuzu8.alpha = 1;
			this.daojuzu8.touchEnabled = true;
			this.daojuzu8.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji10keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 11){
			this.di11kengid = id;
			this.daojuicon9.source = tupian;
			this.daojuzu9.alpha = 1;
			this.daojuzu9.touchEnabled = true;
			this.daojuzu9.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji11keng,this);
			this.panduankengbeijing(xuhao,id);
		}else if(xuhao == 12){
			this.di12kengid = id;
			this.daojuicon10.source = tupian;
			this.daojuzu10.alpha = 1;
			this.daojuzu10.touchEnabled = true;
			this.daojuzu10.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianji12keng,this);
			this.panduankengbeijing(xuhao,id);
		}
	}

	/*
	得到对应的道具ID，判断格子的背景板和数量显示
	*/
	public panduankengbeijing(xuhao,id){
		let shuliang:number = 0;
		let xianshishuliang:string = "0";
		let liangbeijing:string = "img_jiaohuanniudibu_png";
		let anbeijing:string = "img_jiaohuanniudibu1_png";
		let dangqianbeijing:string = "img_jiaohuanniudibu1_png";
		for(var h in Gerencaipudengji.daoju){
			if(h == id){
				shuliang = parseInt(Gerencaipudengji.daoju[h][0]);
				if(shuliang > 0 && shuliang < 10){
					xianshishuliang = shuliang + "";
					dangqianbeijing = liangbeijing;
				}else if(shuliang >= 10){
					xianshishuliang = "9+"
					dangqianbeijing = liangbeijing;
				}else{
					xianshishuliang = "0"
					dangqianbeijing = anbeijing;
				}
				break;
			}
		}
		switch(xuhao){
			case 1:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang.source = dangqianbeijing;
					this.shuliangdiban.source = "";
					this.shuliangxianshi.text = "";
				}else{
					this.daojubeijingkuang.source = dangqianbeijing;
					this.shuliangdiban.source = "img_shuliangtubiao_png";
					this.shuliangxianshi.text = xianshishuliang;
				}
				break;
			case 2:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang0.source = dangqianbeijing;
					this.shuliangdiban0.source = "";
					this.shuliangxianshi0.text = "";
				}else{
					this.daojubeijingkuang0.source = dangqianbeijing;
					this.shuliangdiban0.source = "img_shuliangtubiao_png";
					this.shuliangxianshi0.text = xianshishuliang;
				}
				break;
			case 3:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang1.source = dangqianbeijing;
					this.shuliangdiban1.source = "";
					this.shuliangxianshi1.text = "";
				}else{
					this.daojubeijingkuang1.source = dangqianbeijing;
					this.shuliangdiban1.source = "img_shuliangtubiao_png";
					this.shuliangxianshi1.text = xianshishuliang;
				}
				break;
			case 4:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang2.source = dangqianbeijing;
					this.shuliangdiban2.source = "";
					this.shuliangxianshi2.text = "";
				}else{
					this.daojubeijingkuang2.source = dangqianbeijing;
					this.shuliangdiban2.source = "img_shuliangtubiao_png";
					this.shuliangxianshi2.text = xianshishuliang;
				}
				break;
			case 5:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang3.source = dangqianbeijing;
					this.shuliangdiban3.source = "";
					this.shuliangxianshi3.text = "";
				}else{
					this.daojubeijingkuang3.source = dangqianbeijing;
					this.shuliangdiban3.source = "img_shuliangtubiao_png";
					this.shuliangxianshi3.text = xianshishuliang;
				}
				break;
			case 6:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang4.source = dangqianbeijing;
					this.shuliangdiban4.source = "";
					this.shuliangxianshi4.text = "";
				}else{
					this.daojubeijingkuang4.source = dangqianbeijing;
					this.shuliangdiban4.source = "img_shuliangtubiao_png";
					this.shuliangxianshi4.text = xianshishuliang;
				}
				break;
			case 7:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang5.source = dangqianbeijing;
					this.shuliangdiban5.source = "";
					this.shuliangxianshi5.text = "";
				}else{
					this.daojubeijingkuang5.source = dangqianbeijing;
					this.shuliangdiban5.source = "img_shuliangtubiao_png";
					this.shuliangxianshi5.text = xianshishuliang;
				}
				break;
			case 8:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang6.source = dangqianbeijing;
					this.shuliangdiban6.source = "";
					this.shuliangxianshi6.text = "";
				}else{
					this.daojubeijingkuang6.source = dangqianbeijing;
					this.shuliangdiban6.source = "img_shuliangtubiao_png";
					this.shuliangxianshi6.text = xianshishuliang;
				}
				break;
			case 9:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang7.source = dangqianbeijing;
					this.shuliangdiban7.source = "";
					this.shuliangxianshi7.text = "";
				}else{
					this.daojubeijingkuang7.source = dangqianbeijing;
					this.shuliangdiban7.source = "img_shuliangtubiao_png";
					this.shuliangxianshi7.text = xianshishuliang;
				}
				break;
			case 10:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang8.source = dangqianbeijing;
					this.shuliangdiban8.source = "";
					this.shuliangxianshi8.text = "";
				}else{
					this.daojubeijingkuang8.source = dangqianbeijing;
					this.shuliangdiban8.source = "img_shuliangtubiao_png";
					this.shuliangxianshi8.text = xianshishuliang;
				}
				break;
			case 11:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang9.source = dangqianbeijing;
					this.shuliangdiban9.source = "";
					this.shuliangxianshi9.text = "";
				}else{
					this.daojubeijingkuang9.source = dangqianbeijing;
					this.shuliangdiban9.source = "img_shuliangtubiao_png";
					this.shuliangxianshi9.text = xianshishuliang;
				}
				break;
			case 12:
				if(xianshishuliang == "0"){
					this.daojubeijingkuang10.source = dangqianbeijing;
					this.shuliangdiban10.source = "";
					this.shuliangxianshi10.text = "";
				}else{
					this.daojubeijingkuang10.source = dangqianbeijing;
					this.shuliangdiban10.source = "img_shuliangtubiao_png";
					this.shuliangxianshi10.text = xianshishuliang;
				}
				break;
		}
	}
	

	/*
	点击每个坑时，弹出通用提示界面，使用道具
	*/
	public dianji1keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di1kengid);
	}
	public dianji2keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di2kengid);
	}
	public dianji3keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di3kengid);
	}
	public dianji4keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di4kengid);
	}
	public dianji5keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di5kengid);
	}
	public dianji6keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di6kengid);
	}
	public dianji7keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di7kengid);
	}
	public dianji8keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di8kengid);
	}
	public dianji9keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di9kengid);
	}
	public dianji10keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di10kengid);
	}
	public dianji11keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di11kengid);
	}
	public dianji12keng(){
		this.dangqianid = "0";
		this.shiyongdaojutanchu(this.di12kengid);
	}

	/*
	统一的道具使用弹出框
	*/
	public shiyongdaojutanchu(id){
		this.daojutanchukuang = new Tongyongquerenkuang();
		this.addChild(this.daojutanchukuang);
		this.daojutanchukuang.but_shuangbei.enabled = false;
		this.daojutanchukuang.but_shuangbei.alpha = 0;
		this.daojutanchukuang.but_queding.enabled = false;
		this.daojutanchukuang.but_queding.alpha = 0;
		this.daojutanchukuang.but_queding0.enabled = true;
		this.daojutanchukuang.but_queding0.alpha = 1;
		let daojushuoming:string = "您尚未拥有该道具，在某些机缘巧合之下或许能获得，多出去走走吧！"
		if(parseInt(Gerencaipudengji.daoju[id][0]) > 0){
			this.dangqianid = id;
			for(var j = 0;j<Gerenshuxing.daojubiao.length;j++){
				if(Gerenshuxing.daojubiao[j].id == id){
					daojushuoming = Gerenshuxing.daojubiao[j].tips;
					this.daojutanchukuang.jiangliicon2.source = Gerenshuxing.daojubiao[j].xianshiicon;
					this.daojutanchukuang.jiangli2.text = "- 1";
					if(id == "10021" || id == "10022" || id == "10023"){
						this.daojutanchukuang.jiangliicon1.source = "img_meiweijienng_png";
						this.daojutanchukuang.jiangli1.text = "精修X1";
					}else if(id == "10024"){
						this.daojutanchukuang.jiangliicon1.source = "img_maicon_png";
						this.daojutanchukuang.jiangli1.text = "提升:1%~20%";
					}else if(id == "10025"){
						this.daojutanchukuang.jiangliicon1.source = "img_laicon_png";
						this.daojutanchukuang.jiangli1.text = "提升:1%~20%";
					}else if(id == "10026"){
						this.daojutanchukuang.jiangliicon1.source = "img_tianicon_png";
						this.daojutanchukuang.jiangli1.text = "提升:1%~20%";
					}else if(id == "10027"){
						this.daojutanchukuang.jiangliicon1.source = "img_suanicon_png";
						this.daojutanchukuang.jiangli1.text = "提升:1%~20%";
					}else if(id == "10028"){
						this.daojutanchukuang.jiangliicon1.source = "img_laicon_png";
						this.daojutanchukuang.jiangli1.text = "增加:1~5";
					}else if(id == "10029"){
						this.daojutanchukuang.jiangliicon1.source = "img_maicon_png";
						this.daojutanchukuang.jiangli1.text = "增加:1~5";
					}else if(id == "10030"){
						this.daojutanchukuang.jiangliicon1.source = "img_suanicon_png";
						this.daojutanchukuang.jiangli1.text = "增加:1~5";
					}else if(id == "10031"){
						this.daojutanchukuang.jiangliicon1.source = "img_tianicon_png";
						this.daojutanchukuang.jiangli1.text = "增加:1~5";
					}
					break;
				}
			}
		}else{
			this.daojutanchukuang.jiangliicon2.source = "";
			this.daojutanchukuang.jiangli2.text = "";
			this.daojutanchukuang.jiangliicon1.source = "";
			this.daojutanchukuang.jiangli1.text = "";
		}
		this.daojutanchukuang.tishiwenzi.text = daojushuoming;
		this.daojutanchukuang.but_queding0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjishiyong,this);

	}

	/*
	点击确定按钮，需要向服务器请求发送奖励了
	*/
	public dianjishiyong(){
		if(this.dangqianid == "0"){
			this.removeChild(this.daojutanchukuang);
		}else{
			this.removeChild(this.daojutanchukuang);
			let jianglileixing = "0";
			let jianglishuliangxiao:number = 0;
			let jianglishuliangda:number = 0;
			let suijijilv1:number = 0;
			let suijijilv2:number = 0;
			for(var i = 0;i<Gerenshuxing.daojushiyongbiao.length;i++){
				if(Gerenshuxing.daojushiyongbiao[i].id == this.dangqianid){
					jianglileixing = Gerenshuxing.daojushiyongbiao[i].jianglileixing;
					jianglishuliangxiao = parseInt(Gerenshuxing.daojushiyongbiao[i].zuixiao);
					jianglishuliangda = parseInt(Gerenshuxing.daojushiyongbiao[i].zuida);
					suijijilv1 = parseInt(Gerenshuxing.daojushiyongbiao[i].jilvdi);
					suijijilv2 = parseInt(Gerenshuxing.daojushiyongbiao[i].jilvgao);
					break;
				}
			}
			/*
			这里开始具体判断每个道具的使用效果
			*/
			switch(this.dangqianid){
				case "10021":
					let huodejilv = Math.floor(Math.random() * 100);
					if(huodejilv < suijijilv1){
						let dijijineng = [];
						for(var i =0;i<Gerenshuxing.jinengbiao.length;i++){
							if(Gerenshuxing.jinengbiao[i].jinengpinzhi == "1"){
								dijijineng.push(Gerenshuxing.jinengbiao[i].id);
							}
						}
						let suijijineng = Math.floor(Math.random() * dijijineng.length);
						let jianglijineng = dijijineng[suijijineng];
						Weblianjie.fasongshuju("code:111","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"leixing"' +":"+ '"' + jianglijineng + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("jineng",jianglijineng);
					}else{
						this.chenggongjiemian("jineng","0");
						Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"kouchuleixing"' +":"+ '"10021"' +","
						+ '"kouchushuliang"' +":"+ '"1"' +","
						+ '"leixing"' +":"+ '"0"' +","
						+ '"shuliang"' +":"+ '"0"' +","
						+ '"beishu"' +":"+ '"1"' +"}");
					}
					break;
				case "10022":
					let dijijineng2 = [];
					let gaojijineng2 = [];
					for(var i =0;i<Gerenshuxing.jinengbiao.length;i++){
						if(Gerenshuxing.jinengbiao[i].jinengpinzhi == "1"){
							dijijineng2.push(Gerenshuxing.jinengbiao[i].id);
						}else if(Gerenshuxing.jinengbiao[i].jinengpinzhi == "2"){
							gaojijineng2.push(Gerenshuxing.jinengbiao[i].id);
						}
					}
					let huodejilv2 = Math.floor(Math.random() * 100);
					if(huodejilv2 < suijijilv1){
						let suijijineng2 = Math.floor(Math.random() * dijijineng2.length);
						let jianglijineng2 = dijijineng2[suijijineng2];
						Weblianjie.fasongshuju("code:111","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"leixing"' +":"+ '"' + jianglijineng2 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("jineng",jianglijineng2);
					}else{
						let suijijineng3 = Math.floor(Math.random() * gaojijineng2.length);
						let jianglijineng3 = gaojijineng2[suijijineng3];
						Weblianjie.fasongshuju("code:112","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"leixing"' +":"+ '"' + jianglijineng3 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("jineng",jianglijineng3);
					}
					break;
				case "10023":
					let dijijineng4 = [];
					let gaojijineng4 = [];
					for(var i =0;i<Gerenshuxing.jinengbiao.length;i++){
						if(Gerenshuxing.jinengbiao[i].jinengpinzhi == "1"){
							dijijineng4.push(Gerenshuxing.jinengbiao[i].id);
						}else if(Gerenshuxing.jinengbiao[i].jinengpinzhi == "2"){
							gaojijineng4.push(Gerenshuxing.jinengbiao[i].id);
						}
					}
					let huodejilv4 = Math.floor(Math.random() * 100);
					if(huodejilv4 < suijijilv1){
						let suijijineng4 = Math.floor(Math.random() * dijijineng4.length);
						let jianglijineng4 = dijijineng4[suijijineng4];
						Weblianjie.fasongshuju("code:111","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"leixing"' +":"+ '"' + jianglijineng4 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("jineng",jianglijineng4);
					}else{
						let suijijineng5 = Math.floor(Math.random() * gaojijineng4.length);
						let jianglijineng5 = gaojijineng4[suijijineng5];
						Weblianjie.fasongshuju("code:112","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"leixing"' +":"+ '"' + jianglijineng5 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("jineng",jianglijineng5);
					}
					break;
				case "10024":
					let suijicai_1_1 = Math.floor(Math.random() * 100) + 1;
					if(suijicai_1_1 < suijijilv1){
						let suijicaima_1_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
						Weblianjie.fasongshuju("code:113","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_1_1 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("caima",suijicaima_1_1);
					}else{
						let suijicaima_1_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
						Weblianjie.fasongshuju("code:113","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_1_2 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("caima",suijicaima_1_2);
					}
					break;
				case "10025":
					let suijicai_2_1 = Math.floor(Math.random() * 100) + 1;
					if(suijicai_2_1 < suijijilv1){
						let suijicaima_2_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
						Weblianjie.fasongshuju("code:114","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_2_1 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("caila",suijicaima_2_1);
					}else{
						let suijicaima_2_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
						Weblianjie.fasongshuju("code:114","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_2_2 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"'  + "}");
						this.chenggongjiemian("caila",suijicaima_2_2);
					}
					break;
				case "10026":
					let suijicai_3_1 = Math.floor(Math.random() * 100) + 1;
					if(suijicai_3_1 < suijijilv1){
						let suijicaima_3_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
						Weblianjie.fasongshuju("code:115","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_3_1 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("caitian",suijicaima_3_1);
					}else{
						let suijicaima_3_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
						Weblianjie.fasongshuju("code:115","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_3_2 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("caitian",suijicaima_3_2);
					}
					break;
				case "10027":
					let suijicai_4_1 = Math.floor(Math.random() * 100) + 1;
					if(suijicai_4_1 < suijijilv1){
						let suijicaima_4_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
						Weblianjie.fasongshuju("code:116","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_4_1 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("caisuan",suijicaima_4_1);
					}else{
						let suijicaima_4_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
						Weblianjie.fasongshuju("code:116","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_4_2 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("caisuan",suijicaima_4_2);
					}
					break;
				case "10028":
					let suijicai_5_1 = Math.floor(Math.random() * 100) + 1;
					if(suijicai_5_1 < suijijilv1){
						let suijicaima_5_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
						Weblianjie.fasongshuju("code:117","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_5_1 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("renla",suijicaima_5_1);
					}else{
						let suijicaima_5_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
						Weblianjie.fasongshuju("code:117","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_5_2 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("renla",suijicaima_5_2);
					}
					break;
				case "10029":
					let suijicai_6_1 = Math.floor(Math.random() * 100) + 1;
					if(suijicai_6_1 < suijijilv1){
						let suijicaima_6_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
						Weblianjie.fasongshuju("code:118","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_6_1 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("renma",suijicaima_6_1);
					}else{
						let suijicaima_6_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
						Weblianjie.fasongshuju("code:118","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_6_2 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("renma",suijicaima_6_2);
					}
					break;
				case "10030":
					let suijicai_7_1 = Math.floor(Math.random() * 100) + 1;
					if(suijicai_7_1 < suijijilv1){
						let suijicaima_7_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
						Weblianjie.fasongshuju("code:119","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_7_1 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("rensuan",suijicaima_7_1);
					}else{
						let suijicaima_7_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
						Weblianjie.fasongshuju("code:119","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_7_2 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("rensuan",suijicaima_7_2);
					}
					break;
				case "10031":
					let suijicai_8_1 = Math.floor(Math.random() * 100) + 1;
					if(suijicai_8_1 < suijijilv1){
						let suijicaima_8_1 = Math.floor(Math.random() * (jianglishuliangda / 2)) + jianglishuliangxiao;
						Weblianjie.fasongshuju("code:120","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_8_1 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("rentian",suijicaima_8_1);
					}else{
						let suijicaima_8_2 = Math.floor(Math.random() * (jianglishuliangda / 2)) + Math.floor(jianglishuliangda / 2);
						Weblianjie.fasongshuju("code:120","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
						+ '"shuliang"' +":"+ '"' + suijicaima_8_2 + '"' +","
						+ '"dangqiandaoju"' +":"+ '"' + this.dangqianid + '"' +","
						+ '"caiid"' +":"+ '"' + this.dangqiancaiid + '"' + "}");
						this.chenggongjiemian("rentian",suijicaima_8_2);
					}
					break;
			}
			
		}
	}

	/*
	奖励展示界面显示
	*/
	public chenggongjiemian(leixing,shuliang){
		this.jianglijiemian = new Jianglijiesuanui();
		this.addChild(this.jianglijiemian);
		this.jianglijiemian.qudinganniu.enabled = true;
		this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
		switch(leixing){
			case "jineng":
				for(var i = 0;i<Gerenshuxing.jinengbiao.length;i++){
					if(Gerenshuxing.jinengbiao[i].id == shuliang){
						this.jianglijiemian.jiangliicon.source = Gerenshuxing.jinengbiao[i].jinengicon;
						this.jianglijiemian.jianglishuliang.text = "获得精修效果: " + Gerenshuxing.jinengbiao[i].mingcheng;
						break;
					}
				}
				break;
			case "caima":
				this.jianglijiemian.jiangliicon.source = "img_maicon_png";
				this.jianglijiemian.jianglishuliang.text = "菜品麻味提升: " + shuliang + "%";
				break;
			case "caila":
				this.jianglijiemian.jiangliicon.source = "img_laicon_png";
				this.jianglijiemian.jianglishuliang.text = "菜品辣味提升: " + shuliang + "%";
				break;
			case "caitian":
				this.jianglijiemian.jiangliicon.source = "img_tianicon_png";
				this.jianglijiemian.jianglishuliang.text = "菜品甜味提升: " + shuliang + "%";
				break;
			case "caisuan":
				this.jianglijiemian.jiangliicon.source = "img_suanicon_png";
				this.jianglijiemian.jianglishuliang.text = "菜品酸味提升: " + shuliang + "%";
				break;
			case "renma":
				this.jianglijiemian.jiangliicon.source = "img_maicon_png";
				this.jianglijiemian.jianglishuliang.text = "麻系精通: +" + shuliang;
				break;
			case "renla":
				this.jianglijiemian.jiangliicon.source = "img_laicon_png";
				this.jianglijiemian.jianglishuliang.text = "辣系精通: +" + shuliang;
				break;
			case "rentian":
				this.jianglijiemian.jiangliicon.source = "img_tianicon_png";
				this.jianglijiemian.jianglishuliang.text = "甜系精通: +" + shuliang;
				break;
			case "rensuan":
				this.jianglijiemian.jiangliicon.source = "img_suanicon_png";
				this.jianglijiemian.jianglishuliang.text = "酸系精通: +" + shuliang;
				break;
		}

	}


	public guanbijiangli(){
		this.removeChild(this.jianglijiemian);
		this.chushihua(this.dangqianshiyongleixing,this.dangqiancaiid);
		if(Gameguanli.Kongzhitai().dingbuui.gerenshuxingui.parent){
			Gameguanli.Kongzhitai().dingbuui.chengchengjiemianneirong();
		}
		if(Gameguanli.Kongzhitai().caiPuUi.caiPingjieshao.parent){
			Gameguanli.Kongzhitai().caiPuUi.panduancaiid();
		}

	}






}
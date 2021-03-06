class Gameguanli extends egret.DisplayObjectContainer{
	//主界面实例
	public zhujiemian:Zhujiemian;
	public zhujiemiandingbu:Zhujiemianshangceng;

	//上街界面实例
	public waichudajie:Dajiejiemian;

	//家庭界面实例
	public jiatingjiemian:Jiatingui;

	//上菜界面实例
	public zhandoujiemian:Zhandoujiemian;

	//pvp战斗界面
	public pvpzhandou:Pvpzhandoujiemian;

	//pvp匹配界面
	public pvppipeijiemian:Pvppipeijiemian;


	//排行榜大界面
	public paihangbangdaui:Paihangbangjiemian;

	//公告大界面
	public gonggaoui:Gonggaojiemian;

	//顶部菜单实例
	public dingbuui:dingbuxinxi;
//	public dingbuui:any;

	//底部菜单实例
	public dibuui:dibuxinxi;

	//个人属性调用实例
	public gerenshuju:Gerenshuxing;

	//菜谱界面实例
	public caiPuUi:Caipujiemian;

	//管理界面实例
	public guanLiui:Guanlijiemian;

	//错误提示信息界面实例
	public cuowutishi1:Cuowutishi;
	public cuowutishi2:Cuowutishi;
	public cuowutishi3:Cuowutishi;
	public cuowutishi4:Cuowutishi;
	public cuowutishi5:Cuowutishi;
	public cuowutishi6:Cuowutishi;
	public cuowutishi7:Cuowutishi;
	public cuowutishi8:Cuowutishi;
	public jinlaicishu:any = [1,1,1,1,1,1,1,1];

	//弹幕提示信息界面实例
	public danmu1:Tanmujiemian;
	public danmu2:Tanmujiemian;
	public danmu3:Tanmujiemian;
	public danmu4:Tanmujiemian;
	public danmu5:Tanmujiemian;
	public danmu6:Tanmujiemian;
	public danmu7:Tanmujiemian;
	public danmu8:Tanmujiemian;
	public danmucishu:any = [1,1,1,1,1,1,1,1];


	//下面提示信息界面实例
	public xiamiantishi1:Xiamiantishi;
	public xiamiantishi2:Xiamiantishi;
	public xiamiantishi3:Xiamiantishi;
	public xiamiantishi4:Xiamiantishi;
	public xiamiantishi5:Xiamiantishi;
	public xiamiancishu:any = [1,1,1,1,1];

	//获得奖励提示信息界面实例
	public jiangliui1:Cailiaoxiaohao;
	public jiangliui2:Cailiaoxiaohao;
	public jiangliui3:Cailiaoxiaohao;
	public jiangliui4:Cailiaoxiaohao;
	public jiangliui5:Cailiaoxiaohao;
	public jiangliui6:Cailiaoxiaohao;
	public jiangliui7:Cailiaoxiaohao;
	public jiangliui8:Cailiaoxiaohao;
	public jiangliui9:Cailiaoxiaohao;
	public jiangliui10:Cailiaoxiaohao;
	public jianglicishu:any = [1,1,1,1,1,1,1,1,1,1];

	//跑马灯提示界面实例
	public paomadeng1:Paomadenggonggao;
	public paomadeng2:Paomadenggonggao;
	public paomadeng3:Paomadenggonggao;
	public paomadeng4:Paomadenggonggao;
	public paomadeng5:Paomadenggonggao;
	public paomadengcishu:any = [1,1,1,1,1];

	//每日结算界面实例
	public meirijieusan:Meirijiesuan;
	public gundongjuli:number;

	//经营管理界面实例
	public jingyingguanli:Jinyingguanlijiemian;

	//留言界面实例
	public liuyan:Liuyanjiemian;

	//买菜界面实例
	public maicai:Maicaiui;

	//场景入口界面实例
	public changjinrukou:Changjingrukouui;

	//奖励获得界面实例
	public huodejiangli:Jianglijiesuanui;

	//做饭界面实例
	public zuofanui:Zuofanjiemianui;

	//离线奖励界面
	public lixianjiangliui:Tongyongquerenkuang;

	//上街确认框
	public shangjiequerenkuang:Tongyongquerenkuang;

	//带图通用弹出框
//	public daitutongyongtanchu:Daitutanchukuangui;

	//任务奖励进度界面
	public meirirenwujindu:Renwuwanchengtanchuui;

	


	//实例化一个饭店核心结算
//	public fandianjiesuan:Fandianjisuan;



	public constructor() {
		super();
		this.gerenshuju = new Gerenshuxing();
		this.dibuui = new dibuxinxi();
		this.dingbuui = new dingbuxinxi();
		this.zhujiemian = new Zhujiemian();
		this.zhujiemiandingbu = new Zhujiemianshangceng();
		this.meirijieusan = new Meirijiesuan();
		this.guanLiui = new Guanlijiemian();
		this.jingyingguanli = new Jinyingguanlijiemian();
		this.liuyan = new Liuyanjiemian();
		this.caiPuUi = new Caipujiemian();
		this.waichudajie = new Dajiejiemian();
		this.jiatingjiemian = new Jiatingui();
		//this.paihangbangdaui = new Paihangbangjiemian();
		this.gonggaoui = new Gonggaojiemian();
		this.pvppipeijiemian = new Pvppipeijiemian();
		

		//默认加载主界面相关界面
		this.addChild(this.jiatingjiemian);
		//进入主界面时，加载背景音效
		Gamesound.Soundkongzhi().beijingyinxiao();
		this.addChild(this.dibuui);
		this.addChild(this.dingbuui);

	}

	private static kongzhitai:Gameguanli;
	public static Kongzhitai():Gameguanli{
		if(Gameguanli.kongzhitai == null){
			Gameguanli.kongzhitai = new Gameguanli();
		}
		return Gameguanli.kongzhitai;
	}
//主界面菜单显示逻辑
	public jiemianxianshi (canshu1:string):void {
		if (canshu1 == "zhujiemian"){
			if(Gameguanli.Kongzhitai().waichudajie.parent){
				this.removeChild(Gameguanli.Kongzhitai().waichudajie);
				Gameguanli.Kongzhitai().waichudajie.sanrenbuchongdingshiqi = null;
				Gameguanli.Kongzhitai().waichudajie.sanrenxingzoudingshiqi = null;
			}
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				this.removeChild(Gameguanli.Kongzhitai().jiatingjiemian);
			}
			if(Gameguanli.Kongzhitai().dibuui.parent){
				this.removeChild(Gameguanli.Kongzhitai().dibuui);
			}
			if(Gameguanli.Kongzhitai().dingbuui.parent){
				this.removeChild(Gameguanli.Kongzhitai().dingbuui);
			}
			if(Gameguanli.Kongzhitai().gonggaoui.parent){
				this.removeChild(Gameguanli.Kongzhitai().gonggaoui);
			}
			this.addChild(Gameguanli.Kongzhitai().zhujiemian);
			this.addChild(Gameguanli.Kongzhitai().zhujiemiandingbu);
			this.addChild(Gameguanli.Kongzhitai().dibuui);
			this.addChild(Gameguanli.Kongzhitai().dingbuui);
			//默认进行1次垃圾添加
			if(Gerenshuxing.weishengyidasao == true){
				Chuangzaolaji.shengchenglaji(21);
				Gerenshuxing.weishengyidasao = false;
			}
			if(Gerenshuxing.guideuiyindao >= 17){
				Fandianjisuan.chushihuajisuan(1);
			}
			if(Gerenshuxing.guideuiyindao >= 19){
				this.lixianjiangli();
			}
			if(Gerenshuxing.guideuiyindao < 22){
				Xinshouyindao.chushihua();
			}	
		};
		if(canshu1 == "shangjie"){
			this.changjingrukou("shangjie","kai");
		}
		if(canshu1 == "huijia"){
			if(Gameguanli.Kongzhitai().zhujiemian.parent){
				this.removeChild(Gameguanli.Kongzhitai().zhujiemian);
			}
			if(Gameguanli.Kongzhitai().zhujiemiandingbu.parent){
				this.removeChild(Gameguanli.Kongzhitai().zhujiemiandingbu);
			}
			if(Gameguanli.Kongzhitai().waichudajie.parent){
				this.removeChild(Gameguanli.Kongzhitai().waichudajie);
				Gameguanli.Kongzhitai().waichudajie.sanrenbuchongdingshiqi = null;
				Gameguanli.Kongzhitai().waichudajie.sanrenxingzoudingshiqi = null;
			}
			if(Gameguanli.Kongzhitai().dibuui.parent){
				this.removeChild(Gameguanli.Kongzhitai().dibuui);
			}
			if(Gameguanli.Kongzhitai().dingbuui.parent){
				this.removeChild(Gameguanli.Kongzhitai().dingbuui);
			}
			if(Gameguanli.Kongzhitai().gonggaoui.parent){
				this.removeChild(Gameguanli.Kongzhitai().gonggaoui);
			}
			this.addChild(Gameguanli.Kongzhitai().jiatingjiemian);
			this.addChild(Gameguanli.Kongzhitai().dibuui);
			this.addChild(Gameguanli.Kongzhitai().dingbuui);
			Fandianjisuan.chushihuajisuan(0);
			Gameguanli.Kongzhitai().jiatingjiemian.chushihua();
		};
		if (canshu1 == "gonggao"){
			if(Gameguanli.Kongzhitai().waichudajie.parent){
				this.removeChild(Gameguanli.Kongzhitai().waichudajie);
				Gameguanli.Kongzhitai().waichudajie.sanrenbuchongdingshiqi = null;
				Gameguanli.Kongzhitai().waichudajie.sanrenxingzoudingshiqi = null;
			}
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				this.removeChild(Gameguanli.Kongzhitai().jiatingjiemian);
			}
			if(Gameguanli.Kongzhitai().dibuui.parent){
				this.removeChild(Gameguanli.Kongzhitai().dibuui);
			}
			if(Gameguanli.Kongzhitai().dingbuui.parent){
				this.removeChild(Gameguanli.Kongzhitai().dingbuui);
			}
			if(Gameguanli.Kongzhitai().zhujiemian.parent){
				this.removeChild(Gameguanli.Kongzhitai().zhujiemian);
			}
			if(Gameguanli.Kongzhitai().zhujiemiandingbu.parent){
				this.removeChild(Gameguanli.Kongzhitai().zhujiemiandingbu);
			}
			this.gonggaoui = new Gonggaojiemian();
			this.addChild(this.gonggaoui);
			this.addChild(Gameguanli.Kongzhitai().dibuui);
			this.addChild(Gameguanli.Kongzhitai().dingbuui);
			Fandianjisuan.chushihuajisuan(0);
			this.gonggaoui.chushihua();	
		};

	}



	//上街请求成功
	public shangjiechenggong(){
		if(Gameguanli.Kongzhitai().zhujiemian.parent){
				this.removeChild(Gameguanli.Kongzhitai().zhujiemian);
			}
			if(Gameguanli.Kongzhitai().zhujiemiandingbu.parent){
				this.removeChild(Gameguanli.Kongzhitai().zhujiemiandingbu);
			}
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				this.removeChild(Gameguanli.Kongzhitai().jiatingjiemian);
			}
			if(Gameguanli.Kongzhitai().dibuui.parent){
				this.removeChild(Gameguanli.Kongzhitai().dibuui);
			}
			if(Gameguanli.Kongzhitai().dingbuui.parent){
				this.removeChild(Gameguanli.Kongzhitai().dingbuui);
			}
			if(Gameguanli.Kongzhitai().gonggaoui.parent){
				this.removeChild(Gameguanli.Kongzhitai().gonggaoui);
			}
			Gameguanli.Kongzhitai().dibuui.but_hotel1.enabled = true;
			Gameguanli.Kongzhitai().dibuui.but_gongyuan1.enabled = false;
			Gameguanli.Kongzhitai().dibuui.but_huijia1.enabled = true;
			Gameguanli.Kongzhitai().dibuui.but_licai1.enabled = true;
			//关闭家庭界面
			Gameguanli.Kongzhitai().jiatingjiemianguanbi();
			this.addChild(Gameguanli.Kongzhitai().waichudajie);
			this.addChild(Gameguanli.Kongzhitai().dibuui);
			this.addChild(Gameguanli.Kongzhitai().dingbuui);
			Fandianjisuan.chushihuajisuan(0);
			Gameguanli.Kongzhitai().waichudajie.chushihua();
	}


//饭店界面显示逻辑
	public caipujiemian (leixing:string,kaiguan:string){
		//菜谱界面相关
		if(kaiguan == "kai" && leixing =="fandian"){
			if(Gameguanli.Kongzhitai().caiPuUi.parent){
				this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
			}
			this.addChild(Gameguanli.Kongzhitai().caiPuUi);
			Gameguanli.Kongzhitai().caiPuUi.chulishujujiegou();
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = false;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled = true;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = true;
			if(Gameguanli.Kongzhitai().guanLiui.parent){
				this.removeChild(Gameguanli.Kongzhitai().guanLiui);
			}
			if(Gameguanli.Kongzhitai().jingyingguanli.parent){
				this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
			}
		}
		if(kaiguan == "guan" && leixing =="fandian"){
			this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
		}
		//管理界面相关
		if(kaiguan == "kai" && leixing =="guanli"){
			if(Gameguanli.Kongzhitai().guanLiui.parent){
				this.removeChild(Gameguanli.Kongzhitai().guanLiui);
			}
			this.addChild(Gameguanli.Kongzhitai().guanLiui);
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = false;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled = true;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = true;
			if(Gameguanli.Kongzhitai().caiPuUi.parent){
				this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
			}
			if(Gameguanli.Kongzhitai().jingyingguanli.parent){
				this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
			}
		}
		if(kaiguan == "guan" && leixing =="guanli"){
			this.removeChild(Gameguanli.Kongzhitai().guanLiui);
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;		
		}
		//经营管理界面相关
		if(kaiguan == "kai" && leixing == "jingying"){
			if(Gameguanli.Kongzhitai().jingyingguanli.parent){
				this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
			}
			this.addChild(Gameguanli.Kongzhitai().jingyingguanli);
			Gameguanli.Kongzhitai().jingyingguanli.chushihua();
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled =false;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = true;
			if(Gameguanli.Kongzhitai().caiPuUi.parent){
				this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
			}
			if(Gameguanli.Kongzhitai().guanLiui.parent){
				this.removeChild(Gameguanli.Kongzhitai().guanLiui);
			}
		}
		if(kaiguan == "guan" && leixing == "jingying"){
			this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled = true;
		}
		//留言界面相关
		if(kaiguan == "kai" && leixing =="liuyan"){
			if(Gameguanli.Kongzhitai().liuyan.parent){
				this.removeChild(Gameguanli.Kongzhitai().liuyan);
			}
			this.addChild(Gameguanli.Kongzhitai().liuyan);
			Gameguanli.Kongzhitai().liuyan.chushihua();
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_caipu1.enabled = true;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_guanli1.enabled = true;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_jingyinbaobiao1.enabled = true;
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = false;
			if(Gameguanli.Kongzhitai().guanLiui.parent){
				this.removeChild(Gameguanli.Kongzhitai().guanLiui);
			}
			if(Gameguanli.Kongzhitai().jingyingguanli.parent){
				this.removeChild(Gameguanli.Kongzhitai().jingyingguanli);
			}
			if(Gameguanli.Kongzhitai().caiPuUi.parent){
				this.removeChild(Gameguanli.Kongzhitai().caiPuUi);
			}
		}
		if(kaiguan == "guan" && leixing =="liuyan"){
			this.removeChild(Gameguanli.Kongzhitai().liuyan);
			Gameguanli.Kongzhitai().zhujiemiandingbu.but_liuyan1.enabled = true;
		}	
	}

//买菜界面
	public maicaijiemian(zhuangtai){
		if(zhuangtai == "kai"){
			this.maicai = new Maicaiui();
			this.addChild(this.maicai);
		};
		if(zhuangtai == "guan"){
			if(this.maicai.parent){
				this.removeChild(this.maicai);
			}
		}
	}



//做饭界面
	public zuofanjiemian(zhuangtai:string,id?:any){
		if(zhuangtai == "kai"){
			this.zuofanui = new Zuofanjiemianui();
			this.addChild(this.zuofanui);
			this.zuofanui.chushihua(id);
		};
		if(zhuangtai == "guan"){
			if(this.zuofanui.parent){
				this.removeChild(this.zuofanui);
			}
		}
	}

//pve上菜界面
	public zhandoujiemianui(zhuangtai:string,idone:string,idtwo:string,idthe:string){
		if(zhuangtai == "kai"){
			this.zhandoujiemian = new Zhandoujiemian();
			this.addChild(this.zhandoujiemian);
			this.zhandoujiemian.chushihua(idone,idtwo,idthe);
		};
		if(zhuangtai == "guan"){
			if(this.zhandoujiemian.parent){
				this.removeChild(this.zhandoujiemian);
			}
		}
	}

	//pvp上菜界面
	public pvpzhandoujiemian(zhuangtai:string,direnxinxi:any,beishu:any){
		if(zhuangtai == "kai"){
			this.pvpzhandou = new Pvpzhandoujiemian();
			this.addChild(this.pvpzhandou);
			this.pvpzhandou.chushihua(direnxinxi,beishu);
		};
		if(zhuangtai == "guan"){
			if(this.pvpzhandou.parent){
				this.removeChild(this.pvpzhandou);
			}
		}
	}
//场景入口界面
	public changjingrukou(leixing,zhuangtai){
		//菜市场入口
		if(leixing == "caishichang" && zhuangtai == "kai"){
			this.changjinrukou = new Changjingrukouui();
			this.addChild(this.changjinrukou);
			this.changjinrukou.leixing = "caishichang";
			this.changjinrukou.chushihua();
		}
		if(leixing == "caishichang" && zhuangtai == "guan"){
			if(this.changjinrukou.parent){
				this.removeChild(this.changjinrukou);
			}
		}
		//上街入口
		if(leixing == "shangjie" && zhuangtai == "kai"){
			this.changjinrukou = new Changjingrukouui();
			this.addChild(this.changjinrukou);
			this.changjinrukou.leixing = "shangjie";
			this.changjinrukou.chushihua();
		}
		if(leixing == "shangjie" && zhuangtai == "guan"){
			if(this.changjinrukou.parent){
				this.removeChild(this.changjinrukou);
			}
		}

	}


//奖励获得界面
	public jianglijiemian(zhuangtai,tupian?,num?){
		if(zhuangtai == "kai"){
			this.huodejiangli = new Jianglijiesuanui();
			this.addChild(this.huodejiangli);
			this.huodejiangli.chushihua();
			this.huodejiangli.jiangliicon.source = tupian;
			this.huodejiangli.jianglishuliang.text = "X" + num;
			this.huodejiangli.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
			if(Gerenshuxing.guideuiyindao == 14){
				Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"15"'+"}");
			}
		}
	}

	public guanbijiangli(){
		Gamesound.Soundkongzhi().anniuyinxiao();
			if(this.huodejiangli.parent){
				this.huodejiangli.parent.removeChild(this.huodejiangli);
			}

	}

	//pvp匹配界面
	public pvppipeiui(zhuangtai){
		if(zhuangtai == "kai"){
			if(this.pvppipeijiemian.parent){
				this.removeChild(this.pvppipeijiemian);
			}
			this.pvppipeijiemian = new Pvppipeijiemian();
			this.addChild(this.pvppipeijiemian);
			this.pvppipeijiemian.chushihua();
		}else if(zhuangtai == "guan"){
			if(this.pvppipeijiemian.parent){
				this.removeChild(this.pvppipeijiemian);
			}
		}
	}



//错误提示信息界面
	public cuowutishixinxi(neirong){
		if(this.jinlaicishu[0] == 1){
				this.jinlaicishu[0] = 0;
				this.cuowutishi1 = new Cuowutishi();
				this.addChild(this.cuowutishi1);
				this.cuowutishi1.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.cuowutishi1.width / 2;
				this.cuowutishi1.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.cuowutishi1.height / 2;
				this.cuowutishi1.tishiwenzi.text = neirong;
				egret.Tween.get(this.cuowutishi1).to({x:this.cuowutishi1.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3},3000)
				.call(()=>{
					this.jinlaicishu[0] = 1;
					this.removeChild(this.cuowutishi1);
				});
		}else if(this.jinlaicishu[1] == 1){
				this.jinlaicishu[1] = 0;
				this.cuowutishi2 = new Cuowutishi();
				this.addChild(this.cuowutishi2);
				this.cuowutishi2.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.cuowutishi2.width / 2;
				this.cuowutishi2.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.cuowutishi2.height / 2 + 80 *1;
				this.cuowutishi2.tishiwenzi.text = neirong;
				egret.Tween.get(this.cuowutishi2).to({x:this.cuowutishi2.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + 80 *1},3000)
				.call(()=>{
					this.jinlaicishu[1] = 1;
					this.removeChild(this.cuowutishi2);
				});
		}else if(this.jinlaicishu[2] == 1){
					this.jinlaicishu[2] = 0;
					this.cuowutishi3 = new Cuowutishi();
					this.addChild(this.cuowutishi3);
					this.cuowutishi3.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.cuowutishi3.width / 2;
					this.cuowutishi3.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.cuowutishi3.height / 2 + 80 *2;
					this.cuowutishi3.tishiwenzi.text = neirong;
					egret.Tween.get(this.cuowutishi3).to({x:this.cuowutishi3.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + 80 *2},3000)
					.call(()=>{
						this.jinlaicishu[2] = 1;
						this.removeChild(this.cuowutishi3);
					});
		}else if(this.jinlaicishu[3] == 1){
			this.jinlaicishu[3] = 0;
					this.cuowutishi4 = new Cuowutishi();
					this.addChild(this.cuowutishi4);
					this.cuowutishi4.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.cuowutishi4.width / 2;
					this.cuowutishi4.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.cuowutishi4.height / 2 + 80 *3;
					this.cuowutishi4.tishiwenzi.text = neirong;
					egret.Tween.get(this.cuowutishi4).to({x:this.cuowutishi4.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + 80 *3},3000)
					.call(()=>{
						this.jinlaicishu[3] = 1;
						this.removeChild(this.cuowutishi4);
					});
		}else if(this.jinlaicishu[4] == 1){
			this.jinlaicishu[4] = 0;
					this.cuowutishi5 = new Cuowutishi();
					this.addChild(this.cuowutishi5);
					this.cuowutishi5.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.cuowutishi5.width / 2;
					this.cuowutishi5.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.cuowutishi5.height / 2 + 80 *4;
					this.cuowutishi5.tishiwenzi.text = neirong;
					egret.Tween.get(this.cuowutishi5).to({x:this.cuowutishi5.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + 80 *4},3000)
					.call(()=>{
						this.jinlaicishu[4] = 1;
						this.removeChild(this.cuowutishi5);
					});
		}else if(this.jinlaicishu[5] == 1){
			this.jinlaicishu[5] = 0;
					this.cuowutishi6 = new Cuowutishi();
					this.addChild(this.cuowutishi6);
					this.cuowutishi6.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.cuowutishi6.width / 2;
					this.cuowutishi6.y =Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.cuowutishi6.height / 2 + 80 *5;
					this.cuowutishi6.tishiwenzi.text = neirong;
					egret.Tween.get(this.cuowutishi6).to({x:this.cuowutishi6.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + 80 *5},3000)
					.call(()=>{
						this.jinlaicishu[5] = 1;
						this.removeChild(this.cuowutishi6);
					});
		}else if(this.jinlaicishu[6] == 1){
			this.jinlaicishu[6] = 0;
					this.cuowutishi7 = new Cuowutishi();
					this.addChild(this.cuowutishi7);
					this.cuowutishi7.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.cuowutishi7.width / 2;
					this.cuowutishi7.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.cuowutishi7.height / 2 + 80 *6;
					this.cuowutishi7.tishiwenzi.text = neirong;
					egret.Tween.get(this.cuowutishi7).to({x:this.cuowutishi7.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + 80 *6},3000)
					.call(()=>{
						this.jinlaicishu[6] = 1;
						this.removeChild(this.cuowutishi7);
					});
		}else if(this.jinlaicishu[7] == 1){
			this.jinlaicishu[7] = 0;
					this.cuowutishi8 = new Cuowutishi();
					this.addChild(this.cuowutishi8);
					this.cuowutishi8.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.cuowutishi8.width / 2;
					this.cuowutishi8.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.cuowutishi8.height / 2 + 80 *7;
					this.cuowutishi8.tishiwenzi.text = neirong;
					egret.Tween.get(this.cuowutishi8).to({x:this.cuowutishi8.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + 80 *7},3000)
					.call(()=>{
						this.jinlaicishu[7] = 1;
						this.removeChild(this.cuowutishi8);
					});
		}
	}


	//下面提示信息界面
	public xiamiantishi(neirong){
		if(this.xiamiancishu[0] == 1){
				this.xiamiancishu[0] = 0;
				this.xiamiantishi1 = new Xiamiantishi();
				this.addChild(this.xiamiantishi1);
				this.xiamiantishi1.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.xiamiantishi1.width / 2;
				this.xiamiantishi1.y = Gameguanli.Kongzhitai().jiatingjiemian.height + this.xiamiantishi1.height / 2;
				this.xiamiantishi1.xiamiantishiwenzi.text = neirong;
				egret.Tween.get(this.xiamiantishi1).to({x:this.xiamiantishi1.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height - this.xiamiantishi1.height * 1},2000)
				.wait(3000).call(()=>{
					this.xiamiancishu[0] = 1;
					this.removeChild(this.xiamiantishi1);
				});
		}else if(this.xiamiancishu[1] == 1){
				this.xiamiancishu[1] = 0;
				this.xiamiantishi2 = new Xiamiantishi();
				this.addChild(this.xiamiantishi2);
				this.xiamiantishi2.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.xiamiantishi2.width / 2;
				this.xiamiantishi2.y = Gameguanli.Kongzhitai().jiatingjiemian.height + this.xiamiantishi2.height / 2;
				this.xiamiantishi2.xiamiantishiwenzi.text = neirong;
				egret.Tween.get(this.xiamiantishi2).to({x:this.xiamiantishi2.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height - this.xiamiantishi2.height * 1},2000)
				.wait(3000).call(()=>{
					this.xiamiancishu[1] = 1;
					this.removeChild(this.xiamiantishi2);
				});
		}else if(this.xiamiancishu[2] == 1){
					this.xiamiancishu[2] = 0;
					this.xiamiantishi3 = new Xiamiantishi();
					this.addChild(this.xiamiantishi3);
					this.xiamiantishi3.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.xiamiantishi3.width / 2;
					this.xiamiantishi3.y =Gameguanli.Kongzhitai().jiatingjiemian.height + this.xiamiantishi3.height / 2;
					this.xiamiantishi3.xiamiantishiwenzi.text = neirong;
					egret.Tween.get(this.xiamiantishi3).to({x:this.xiamiantishi3.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height - this.xiamiantishi3.height * 1},2000)
					.wait(3000).call(()=>{
						this.xiamiancishu[2] = 1;
						this.removeChild(this.xiamiantishi3);
					});
		}else if(this.xiamiancishu[3] == 1){
			this.xiamiancishu[3] = 0;
					this.xiamiantishi4 = new Xiamiantishi();
					this.addChild(this.xiamiantishi4);
					this.xiamiantishi4.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.xiamiantishi4.width / 2;
					this.xiamiantishi4.y = Gameguanli.Kongzhitai().jiatingjiemian.height + this.xiamiantishi4.height / 2;
					this.xiamiantishi4.xiamiantishiwenzi.text = neirong;
					egret.Tween.get(this.xiamiantishi4).to({x:this.xiamiantishi4.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height - this.xiamiantishi4.height * 1},2000)
					.wait(3000).call(()=>{
						this.xiamiancishu[3] = 1;
						this.removeChild(this.xiamiantishi4);
					});
		}else if(this.xiamiancishu[4] == 1){
			this.xiamiancishu[4] = 0;
					this.xiamiantishi5 = new Xiamiantishi();
					this.addChild(this.xiamiantishi5);
					this.xiamiantishi5.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.xiamiantishi5.width / 2;
					this.xiamiantishi5.y = Gameguanli.Kongzhitai().jiatingjiemian.height + this.xiamiantishi5.height / 2;
					this.xiamiantishi5.xiamiantishiwenzi.text = neirong;
					egret.Tween.get(this.xiamiantishi5).to({x:this.xiamiantishi5.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height - this.xiamiantishi5.height * 1},2000)
					.wait(3000).call(()=>{
						this.xiamiancishu[4] = 1;
						this.removeChild(this.xiamiantishi5);
					});
		}
	}

//每日结算界面实例
	public meirijiesuanjiemian(num1:string,jixupinyongyuangong?:any,fangqipinyongyuangong?:any){
		if(num1 == "kai"){
			if(Gameguanli.Kongzhitai().meirijieusan.parent){
				this.removeChild(Gameguanli.Kongzhitai().meirijieusan);
			}
		this.addChild(this.meirijieusan);
		Gameguanli.Kongzhitai().meirijieusan.chushihua();
		let yuangongyuanshibiao:any = Gerenshuxing.yuangongbiao;
		let dijige:number = 0;
		let zhuangtai:number = 0;
		this.gundongjuli = 0;
		//显示每日特殊事件
		console.log(Gerenshuxing.teshushijian);
		if(Gerenshuxing.teshushijian == "0"){
			this.meirijieusan.meiriyaowentext.text = "今天看起来一切都那么平常。似乎无事发生。但是你要相信，每一天都是崭新的一天，每一天都是最值得珍惜的一天。";
		}else{
			let teshuchufabiao = Gerenshuxing.teshushijianbiao;
			for(var i = 0;i<teshuchufabiao.length;i++){
				if(teshuchufabiao[i].id == Gerenshuxing.teshushijian){
					this.meirijieusan.meiriyaowentext.text = teshuchufabiao[i].shijianmiaoshu;
					break;
				}
			}
		}
		this.xianshirenshi(dijige,zhuangtai,"","");
		if(jixupinyongyuangong != undefined){
            for(var jx = 0;jx<yuangongyuanshibiao.length;jx++){
                for(var jx2 = 0;jx2<jixupinyongyuangong.length;jx2++){
                    if(jixupinyongyuangong[jx2] == yuangongyuanshibiao[jx].id){
						dijige += 1;
						zhuangtai = 1;
						this.xianshirenshi(dijige,zhuangtai,yuangongyuanshibiao[jx].name,yuangongyuanshibiao[jx].pay);
                        break;
                    }
            	}
        	}
		}
		if(fangqipinyongyuangong != undefined){
			for(var fq = 0;fq<yuangongyuanshibiao.length;fq++){
                for(var fq2 = 0;fq2<fangqipinyongyuangong.length;fq2++){
                    if(fangqipinyongyuangong[fq2] == yuangongyuanshibiao[fq].id){
						dijige += 1;
						zhuangtai = 2;
						this.xianshirenshi(dijige,zhuangtai,yuangongyuanshibiao[fq].name,"无法付工资");
                        break;
                    }
                }
            }
		}
		Gameguanli.Kongzhitai().meirijieusan.renshirongqizu.scrollV = 0;
		Gameguanli.Kongzhitai().meirijieusan.renshigundong.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.gundongjianting,this);
	}else if(num1 == "guan"){
			if(Gameguanli.Kongzhitai().meirijieusan.parent){
			this.removeChild(Gameguanli.Kongzhitai().meirijieusan);
			}
		}

	}


	public xianshirenshi(xulieid:number,zhuangtai:number,mingzi:string,jinbi:any){
		if(zhuangtai == 0){
			Gameguanli.Kongzhitai().meirijieusan.renshigundong.enabled = false;
			Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.text = "当前没有人事变更!!";
			Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.alpha = 1;
			Gameguanli.Kongzhitai().meirijieusan.di1text.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text0.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi0.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb0.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text1.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi1.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb1.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text2.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi2.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb2.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text3.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi3.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb3.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text4.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi4.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb4.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text5.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi5.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb5.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text6.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi6.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb6.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text7.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi7.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb7.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text8.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi8.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb8.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text9.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi9.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb9.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text10.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi10.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb10.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text11.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi11.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb11.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text12.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi12.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb12.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text13.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi13.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb13.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text14.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi14.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb14.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text15.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi15.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb15.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text16.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi16.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb16.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text17.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi17.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb17.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text18.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi18.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb18.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text19.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi19.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb19.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text20.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi20.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb20.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text21.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi21.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb21.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text22.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi22.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb22.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text23.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi23.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb23.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text24.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi24.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb24.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text25.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi25.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb25.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text26.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi26.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb26.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text27.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi27.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb27.alpha = 0;
			Gameguanli.Kongzhitai().meirijieusan.di1text28.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbi28.text = "";
			Gameguanli.Kongzhitai().meirijieusan.di1jinbitb28.alpha = 0;
		}else if(zhuangtai == 1){
			Gameguanli.Kongzhitai().meirijieusan.renshigundong.enabled = true;
			Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.text = "";
			Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.alpha = 0;
			switch(xulieid){
				case 1:
					Gameguanli.Kongzhitai().meirijieusan.di1text.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 1;
					break;
				case 2:
					Gameguanli.Kongzhitai().meirijieusan.di1text0.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi0.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb0.alpha = 1;
					break;
				case 3:
					Gameguanli.Kongzhitai().meirijieusan.di1text1.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi1.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb1.alpha = 1;
					break;
				case 4:
					Gameguanli.Kongzhitai().meirijieusan.di1text2.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi2.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb2.alpha = 1;
					this.gundongjuli += 1;
					break;
				case 5:
					Gameguanli.Kongzhitai().meirijieusan.di1text3.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi3.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb3.alpha = 1;
					break;
				case 6:
					Gameguanli.Kongzhitai().meirijieusan.di1text4.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi4.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb4.alpha = 1;
					break;
				case 7:
					Gameguanli.Kongzhitai().meirijieusan.di1text5.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi5.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb5.alpha = 1;
					break;
				case 8:
					Gameguanli.Kongzhitai().meirijieusan.di1text6.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi6.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb6.alpha = 1;
					this.gundongjuli += 1;
					break;
				case 9:
					Gameguanli.Kongzhitai().meirijieusan.di1text7.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi7.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb7.alpha = 1;
					break;
				case 10:
					Gameguanli.Kongzhitai().meirijieusan.di1text8.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi8.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb8.alpha = 1;
					break;
				case 11:
					Gameguanli.Kongzhitai().meirijieusan.di1text9.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi9.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb9.alpha = 1;
					break;
				case 12:
					Gameguanli.Kongzhitai().meirijieusan.di1text10.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi10.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb10.alpha = 1;
					this.gundongjuli += 1;
					break;
				case 13:
					Gameguanli.Kongzhitai().meirijieusan.di1text11.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi11.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb11.alpha = 1;
					this.gundongjuli += 1;
					break;
				case 14:
					Gameguanli.Kongzhitai().meirijieusan.di1text12.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi12.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb12.alpha = 1;
					break;
				case 15:
					Gameguanli.Kongzhitai().meirijieusan.di1text13.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi13.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb13.alpha = 1;
					break;
				case 16:
					Gameguanli.Kongzhitai().meirijieusan.di1text14.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi14.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb14.alpha = 1;
					this.gundongjuli += 1;
					break;
				case 17:
					Gameguanli.Kongzhitai().meirijieusan.di1text15.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi15.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb15.alpha = 1;
					break;
				case 18:
					Gameguanli.Kongzhitai().meirijieusan.di1text16.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi16.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb16.alpha = 1;
					break;
				case 19:
					Gameguanli.Kongzhitai().meirijieusan.di1text17.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi17.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb17.alpha = 1;
					break;
				case 20:
					Gameguanli.Kongzhitai().meirijieusan.di1text18.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi18.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb18.alpha = 1;
					this.gundongjuli += 1;
					break;
				case 21:
					Gameguanli.Kongzhitai().meirijieusan.di1text19.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi19.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb19.alpha = 1;
					break;
				case 22:
					Gameguanli.Kongzhitai().meirijieusan.di1text20.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi20.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb20.alpha = 1;
					break;
				case 23:
					Gameguanli.Kongzhitai().meirijieusan.di1text21.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi21.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb21.alpha = 1;
					break;
				case 24:
					Gameguanli.Kongzhitai().meirijieusan.di1text22.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi22.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb22.alpha = 1;
					this.gundongjuli += 1;
					break;
				case 25:
					Gameguanli.Kongzhitai().meirijieusan.di1text23.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi23.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb23.alpha = 1;
					break;
				case 26:
					Gameguanli.Kongzhitai().meirijieusan.di1text24.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi24.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb24.alpha = 1;
					break;
				case 27:
					Gameguanli.Kongzhitai().meirijieusan.di1text25.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi25.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb25.alpha = 1;
					break;
				case 28:
					Gameguanli.Kongzhitai().meirijieusan.di1text26.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi26.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb26.alpha = 1;
					this.gundongjuli += 1;
					break;
				case 29:
					Gameguanli.Kongzhitai().meirijieusan.di1text27.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi27.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb27.alpha = 1;
					break;
				case 30:
					Gameguanli.Kongzhitai().meirijieusan.di1text28.text = "续聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi28.text = "-" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb28.alpha = 1;
					break;
				default:
					Gameguanli.Kongzhitai().meirijieusan.di1text.text = "";
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "";
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 0;
					break;			
			}

		}else if(zhuangtai == 2){
			Gameguanli.Kongzhitai().meirijieusan.renshigundong.enabled = true;
			Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.text = "";
			Gameguanli.Kongzhitai().meirijieusan.renshibiangengtext.alpha = 0;
			switch(xulieid){
				case 1:
					Gameguanli.Kongzhitai().meirijieusan.di1text.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 0;
					break;
				case 2:
					Gameguanli.Kongzhitai().meirijieusan.di1text0.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi0.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb0.alpha = 0;
					break;
				case 3:
					Gameguanli.Kongzhitai().meirijieusan.di1text1.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi1.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb1.alpha = 0;
					break;
				case 4:
					Gameguanli.Kongzhitai().meirijieusan.di1text2.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi2.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb2.alpha = 0;
					this.gundongjuli += 1;
					break;
				case 5:
					Gameguanli.Kongzhitai().meirijieusan.di1text3.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi3.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb3.alpha = 0;
					break;
				case 6:
					Gameguanli.Kongzhitai().meirijieusan.di1text4.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi4.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb4.alpha = 0;
					break;
				case 7:
					Gameguanli.Kongzhitai().meirijieusan.di1text5.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi5.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb5.alpha = 0;
					break;
				case 8:
					Gameguanli.Kongzhitai().meirijieusan.di1text6.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi6.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb6.alpha = 0;
					this.gundongjuli += 1;
					break;
				case 9:
					Gameguanli.Kongzhitai().meirijieusan.di1text7.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi7.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb7.alpha = 0;
					break;
				case 10:
					Gameguanli.Kongzhitai().meirijieusan.di1text8.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi8.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb8.alpha = 0;
					break;
				case 11:
					Gameguanli.Kongzhitai().meirijieusan.di1text9.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi9.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb9.alpha = 0;
					break;
				case 12:
					Gameguanli.Kongzhitai().meirijieusan.di1text10.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi10.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb10.alpha = 0;
					this.gundongjuli += 1;
					break;
				case 13:
					Gameguanli.Kongzhitai().meirijieusan.di1text11.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi11.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb11.alpha = 0;
					break;
				case 14:
					Gameguanli.Kongzhitai().meirijieusan.di1text12.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi12.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb12.alpha = 0;
					break;
				case 15:
					Gameguanli.Kongzhitai().meirijieusan.di1text13.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi13.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb13.alpha = 0;
					break;
				case 16:
					Gameguanli.Kongzhitai().meirijieusan.di1text14.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi14.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb14.alpha = 0;
					this.gundongjuli += 1;
					break;
				case 17:
					Gameguanli.Kongzhitai().meirijieusan.di1text15.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi15.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb15.alpha = 0;
					break;
				case 18:
					Gameguanli.Kongzhitai().meirijieusan.di1text16.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi16.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb16.alpha = 0;
					break;
				case 19:
					Gameguanli.Kongzhitai().meirijieusan.di1text17.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi17.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb17.alpha = 0;
					break;
				case 20:
					Gameguanli.Kongzhitai().meirijieusan.di1text18.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi18.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb18.alpha = 0;
					this.gundongjuli += 1;
					break;
				case 21:
					Gameguanli.Kongzhitai().meirijieusan.di1text19.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi19.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb19.alpha = 0;
					break;
				case 22:
					Gameguanli.Kongzhitai().meirijieusan.di1text20.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi20.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb20.alpha = 0;
					break;
				case 23:
					Gameguanli.Kongzhitai().meirijieusan.di1text21.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi21.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb21.alpha = 0;
					break;
				case 24:
					Gameguanli.Kongzhitai().meirijieusan.di1text22.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi22.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb22.alpha = 0;
					this.gundongjuli += 1;
					break;
				case 25:
					Gameguanli.Kongzhitai().meirijieusan.di1text23.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi23.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb23.alpha = 0;
					break;
				case 26:
					Gameguanli.Kongzhitai().meirijieusan.di1text24.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi24.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb24.alpha = 0;
					break;
				case 27:
					Gameguanli.Kongzhitai().meirijieusan.di1text25.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi25.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb25.alpha = 0;
					break;
				case 28:
					Gameguanli.Kongzhitai().meirijieusan.di1text26.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi26.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb26.alpha = 0;
					this.gundongjuli += 1;
					break;
				case 29:
					Gameguanli.Kongzhitai().meirijieusan.di1text27.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi27.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb27.alpha = 0;
					break;
				case 30:
					Gameguanli.Kongzhitai().meirijieusan.di1text28.text = "解聘：" + mingzi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi28.text = "" + jinbi;
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb28.alpha = 0;
					break;
				default:
					Gameguanli.Kongzhitai().meirijieusan.di1text.text = "";
					Gameguanli.Kongzhitai().meirijieusan.di1jinbi.text = "";
					Gameguanli.Kongzhitai().meirijieusan.di1jinbitb.alpha = 0;
					break;
			}

		}
	}

	private gundongjianting(){
		if(Gameguanli.Kongzhitai().meirijieusan.renshirongqizu.scrollV + Gameguanli.Kongzhitai().meirijieusan.renshigundong.height >= this.gundongjuli * Gameguanli.Kongzhitai().meirijieusan.renshigundong.height + Gameguanli.Kongzhitai().meirijieusan.di1wenzizu.height){
			Gameguanli.Kongzhitai().meirijieusan.renshigundong.stopAnimation();
			Gameguanli.Kongzhitai().meirijieusan.renshirongqizu.scrollV = this.gundongjuli * Gameguanli.Kongzhitai().meirijieusan.renshigundong.height - Gameguanli.Kongzhitai().meirijieusan.renshigundong.height + Gameguanli.Kongzhitai().meirijieusan.di1wenzizu.height;
		}
	}

//弹幕信息提示界面
	public danmuxinxi(neirong,mingzi,pingfen,touxiang){
		if(Gameguanli.Kongzhitai().zhujiemiandingbu.parent){
			if(this.danmucishu[0] == 1){
				this.danmucishu[0] = 0;
				this.danmu1 = new Tanmujiemian();
				Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.danmu1);
				this.danmu1.xingming.text = "" + mingzi;
				this.danmu1.danmutext.text = ""  + neirong;
				this.danmu1.touxiang.source = touxiang + "_png";
				switch(pingfen){
					case 1:
						this.danmu1.img_haopin.source = "img_haopin1_png";
						break;
					case 2:
						this.danmu1.img_haopin.source = "img_haopin2_png";
						break;
					case 3:
						this.danmu1.img_haopin.source = "img_haopin3_png";
						break;
					case 4:
						this.danmu1.img_haopin.source = "img_haopin4_png";
						break;
					case 5:
						this.danmu1.img_haopin.source = "img_haopin5_png";
						break;
				}
				this.danmu1.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu1.width / 2;
				this.danmu1.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
				egret.Tween.get(this.danmu1).to({x:0 -this.danmu1.width ,y:this.danmu1.y},10000)
				.call(()=>{
					this.danmucishu[0] = 1;
					Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.danmu1);
				});
		}else if(this.danmucishu[1] == 1){
				this.danmucishu[1] = 0;
				this.danmu2 = new Tanmujiemian();
				Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.danmu2);
				this.danmu2.xingming.text = "" + mingzi;
				this.danmu2.danmutext.text = ""  + neirong;
				this.danmu2.touxiang.source = touxiang + "_png";
				switch(pingfen){
					case 1:
						this.danmu2.img_haopin.source = "img_haopin1_png";
						break;
					case 2:
						this.danmu2.img_haopin.source = "img_haopin2_png";
						break;
					case 3:
						this.danmu2.img_haopin.source = "img_haopin3_png";
						break;
					case 4:
						this.danmu2.img_haopin.source = "img_haopin4_png";
						break;
					case 5:
						this.danmu2.img_haopin.source = "img_haopin5_png";
						break;
				}
				this.danmu2.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu2.width / 2;
				this.danmu2.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
				egret.Tween.get(this.danmu2).to({x:0 -this.danmu2.width ,y:this.danmu2.y},10000)
				.call(()=>{
					this.danmucishu[1] = 1;
					Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.danmu2);
				});
		}else if(this.danmucishu[2] == 1){
					this.danmucishu[2] = 0;
					this.danmu3 = new Tanmujiemian();
					Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.danmu3);
					this.danmu3.xingming.text = "" + mingzi;
					this.danmu3.danmutext.text = ""  + neirong;
					this.danmu3.touxiang.source = touxiang + "_png";
				switch(pingfen){
					case 1:
						this.danmu3.img_haopin.source = "img_haopin1_png";
						break;
					case 2:
						this.danmu3.img_haopin.source = "img_haopin2_png";
						break;
					case 3:
						this.danmu3.img_haopin.source = "img_haopin3_png";
						break;
					case 4:
						this.danmu3.img_haopin.source = "img_haopin4_png";
						break;
					case 5:
						this.danmu3.img_haopin.source = "img_haopin5_png";
						break;
				}
					this.danmu3.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu3.width / 2;
					this.danmu3.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
					egret.Tween.get(this.danmu3).to({x:0 -this.danmu3.width ,y:this.danmu3.y},10000)
					.call(()=>{
						this.danmucishu[2] = 1;
						Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.danmu3);
					});
		}else if(this.danmucishu[3] == 1){
					this.danmucishu[3] = 0;
					this.danmu4 = new Tanmujiemian();
					Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.danmu4);
					this.danmu4.xingming.text = "" + mingzi;
					this.danmu4.danmutext.text = ""  + neirong;
					this.danmu4.touxiang.source = touxiang + "_png";
				switch(pingfen){
					case 1:
						this.danmu4.img_haopin.source = "img_haopin1_png";
						break;
					case 2:
						this.danmu4.img_haopin.source = "img_haopin2_png";
						break;
					case 3:
						this.danmu4.img_haopin.source = "img_haopin3_png";
						break;
					case 4:
						this.danmu4.img_haopin.source = "img_haopin4_png";
						break;
					case 5:
						this.danmu4.img_haopin.source = "img_haopin5_png";
						break;
				}
					this.danmu4.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu4.width / 2;
					this.danmu4.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
					egret.Tween.get(this.danmu4).to({x:0 -this.danmu4.width ,y:this.danmu4.y},10000)
					.call(()=>{
						this.danmucishu[3] = 1;
						Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.danmu4);
					});
		}else if(this.danmucishu[4] == 1){
					this.danmucishu[4] = 0;
					this.danmu5 = new Tanmujiemian();
					Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.danmu5);
					this.danmu5.xingming.text = "" + mingzi;
					this.danmu5.danmutext.text = "" + neirong;
					this.danmu5.touxiang.source = touxiang + "_png";
				switch(pingfen){
					case 1:
						this.danmu5.img_haopin.source = "img_haopin1_png";
						break;
					case 2:
						this.danmu5.img_haopin.source = "img_haopin2_png";
						break;
					case 3:
						this.danmu5.img_haopin.source = "img_haopin3_png";
						break;
					case 4:
						this.danmu5.img_haopin.source = "img_haopin4_png";
						break;
					case 5:
						this.danmu5.img_haopin.source = "img_haopin5_png";
						break;
				}
					this.danmu5.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu5.width / 2;
					this.danmu5.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
					egret.Tween.get(this.danmu5).to({x:0 -this.danmu5.width ,y:this.danmu5.y},10000)
					.call(()=>{
						this.danmucishu[4] = 1;
						Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.danmu5);
					});
		}else if(this.danmucishu[5] == 1){
					this.danmucishu[5] = 0;
					this.danmu6 = new Tanmujiemian();
					Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.danmu6);
					this.danmu6.xingming.text = "" + mingzi;
					this.danmu6.danmutext.text = "" + neirong;
					this.danmu6.touxiang.source = touxiang + "_png";
				switch(pingfen){
					case 1:
						this.danmu6.img_haopin.source = "img_haopin1_png";
						break;
					case 2:
						this.danmu6.img_haopin.source = "img_haopin2_png";
						break;
					case 3:
						this.danmu6.img_haopin.source = "img_haopin3_png";
						break;
					case 4:
						this.danmu6.img_haopin.source = "img_haopin4_png";
						break;
					case 5:
						this.danmu6.img_haopin.source = "img_haopin5_png";
						break;
				}
					this.danmu6.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu6.width / 2;
					this.danmu6.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
					egret.Tween.get(this.danmu6).to({x:0 -this.danmu6.width ,y:this.danmu6.y},10000)
					.call(()=>{
						this.danmucishu[5] = 1;
						Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.danmu6);
					});
		}else if(this.danmucishu[6] == 1){
					this.danmucishu[6] = 0;
					this.danmu7 = new Tanmujiemian();
					Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.danmu7);
					this.danmu7.xingming.text = "" + mingzi;
					this.danmu7.danmutext.text = ""+ neirong;
					this.danmu7.touxiang.source = touxiang + "_png";
				switch(pingfen){
					case 1:
						this.danmu7.img_haopin.source = "img_haopin1_png";
						break;
					case 2:
						this.danmu7.img_haopin.source = "img_haopin2_png";
						break;
					case 3:
						this.danmu7.img_haopin.source = "img_haopin3_png";
						break;
					case 4:
						this.danmu7.img_haopin.source = "img_haopin4_png";
						break;
					case 5:
						this.danmu7.img_haopin.source = "img_haopin5_png";
						break;
				}
					this.danmu7.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu7.width / 2;
					this.danmu7.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
					egret.Tween.get(this.danmu7).to({x:0 -this.danmu7.width ,y:this.danmu7.y},10000)
					.call(()=>{
						this.danmucishu[6] = 1;
						Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.danmu7);
					});
		}else if(this.danmucishu[7] == 1){
					this.danmucishu[7] = 0;
					this.danmu8 = new Tanmujiemian();
					Gameguanli.Kongzhitai().zhujiemiandingbu.addChild(this.danmu8);
					this.danmu8.xingming.text = "" + mingzi;
					this.danmu8.danmutext.text = "" + neirong;
					this.danmu8.touxiang.source = touxiang + "_png";
				switch(pingfen){
					case 1:
						this.danmu8.img_haopin.source = "img_haopin1_png";
						break;
					case 2:
						this.danmu8.img_haopin.source = "img_haopin2_png";
						break;
					case 3:
						this.danmu8.img_haopin.source = "img_haopin3_png";
						break;
					case 4:
						this.danmu8.img_haopin.source = "img_haopin4_png";
						break;
					case 5:
						this.danmu8.img_haopin.source = "img_haopin5_png";
						break;
				}
					this.danmu8.x = Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.width + this.danmu8.width / 2;
					this.danmu8.y = Math.random() * Gameguanli.Kongzhitai().zhujiemian.img_fandianyuanhuabg0.height;
					egret.Tween.get(this.danmu8).to({x:0 -this.danmu8.width ,y:this.danmu8.y},10000)
					.call(()=>{
						this.danmucishu[7] = 1;
						Gameguanli.Kongzhitai().zhujiemiandingbu.removeChild(this.danmu8);
					});
		}
		}
	}

	//统一奖励弹出提示
	public jianglitanchuui(tupian,shuliang,jiajian){
		if(this.jianglicishu[0] == 1){
			this.jianglicishu[0] = 0;
			this.jiangliui1 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui1);
			this.jiangliui1.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui1.width / 2;
			this.jiangliui1.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui1.height / 2;
			this.jiangliui1.img_shicai.source = tupian;
			this.jiangliui1.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui1).to({x:this.jiangliui1.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3},3000)
						.call(()=>{
							this.jianglicishu[0] = 1;
							this.removeChild(this.jiangliui1);
						});
		}else if(this.jianglicishu[1] == 1){
			this.jianglicishu[1] = 0;
			this.jiangliui2 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui2);
			this.jiangliui2.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui2.width / 2;
			this.jiangliui2.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui2.height / 2 + this.jiangliui2.height * 1;
			this.jiangliui2.img_shicai.source = tupian;
			this.jiangliui2.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui2).to({x:this.jiangliui2.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + this.jiangliui2.height * 1},3000)
						.call(()=>{
							this.jianglicishu[1] = 1;
							this.removeChild(this.jiangliui2);
						});
		}else if(this.jianglicishu[2] == 1){
			this.jianglicishu[2] = 0;
			this.jiangliui3 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui3);
			this.jiangliui3.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui3.width / 2;
			this.jiangliui3.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui3.height / 2 + this.jiangliui3.height *2;
			this.jiangliui3.img_shicai.source = tupian;
			this.jiangliui3.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui3).to({x:this.jiangliui3.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + this.jiangliui3.height *2},3000)
						.call(()=>{
							this.jianglicishu[2] = 1;
							this.removeChild(this.jiangliui3);
						});
		}else if(this.jianglicishu[3] == 1){
			this.jianglicishu[3] = 0;
			this.jiangliui4 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui4);
			this.jiangliui4.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui4.width / 2;
			this.jiangliui4.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui4.height / 2 + this.jiangliui4.height *3;
			this.jiangliui4.img_shicai.source = tupian;
			this.jiangliui4.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui4).to({x:this.jiangliui4.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + this.jiangliui4.height *3},3000)
						.call(()=>{
							this.jianglicishu[3] = 1;
							this.removeChild(this.jiangliui4);
						});
		}else if(this.jianglicishu[4] == 1){
			this.jianglicishu[4] = 0;
			this.jiangliui5 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui5);
			this.jiangliui5.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui5.width / 2;
			this.jiangliui5.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui5.height / 2 + this.jiangliui5.height *4;
			this.jiangliui5.img_shicai.source = tupian;
			this.jiangliui5.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui5).to({x:this.jiangliui5.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + this.jiangliui5.height *4},3000)
						.call(()=>{
							this.jianglicishu[4] = 1;
							this.removeChild(this.jiangliui5);
						});
		}else if(this.jianglicishu[5] == 1){
			this.jianglicishu[5] = 0;
			this.jiangliui6 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui6);
			this.jiangliui6.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui6.width / 2;
			this.jiangliui6.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui6.height / 2 + this.jiangliui6.height *5;
			this.jiangliui6.img_shicai.source = tupian;
			this.jiangliui6.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui6).to({x:this.jiangliui6.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + this.jiangliui6.height *5},3000)
						.call(()=>{
							this.jianglicishu[5] = 1;
							this.removeChild(this.jiangliui6);
						});
		}else if(this.jianglicishu[6] == 1){
			this.jianglicishu[6] = 0;
			this.jiangliui7 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui7);
			this.jiangliui7.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui7.width / 2;
			this.jiangliui7.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui7.height / 2 + this.jiangliui7.height *6;
			this.jiangliui7.img_shicai.source = tupian;
			this.jiangliui7.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui7).to({x:this.jiangliui7.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + this.jiangliui7.height *6},3000)
						.call(()=>{
							this.jianglicishu[6] = 1;
							this.removeChild(this.jiangliui7);
						});
		}else if(this.jianglicishu[7] == 1){
			this.jianglicishu[7] = 0;
			this.jiangliui8 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui8);
			this.jiangliui8.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui8.width / 2;
			this.jiangliui8.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui8.height / 2 + this.jiangliui8.height *7;
			this.jiangliui8.img_shicai.source = tupian;
			this.jiangliui8.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui8).to({x:this.jiangliui8.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + this.jiangliui8.height *7},3000)
						.call(()=>{
							this.jianglicishu[7] = 1;
							this.removeChild(this.jiangliui8);
						});
		}else if(this.jianglicishu[8] == 1){
			this.jianglicishu[8] = 0;
			this.jiangliui9 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui9);
			this.jiangliui9.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui9.width / 2;
			this.jiangliui9.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui9.height / 2 + this.jiangliui9.height *8;
			this.jiangliui9.img_shicai.source = tupian;
			this.jiangliui9.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui9).to({x:this.jiangliui9.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + this.jiangliui9.height *8},3000)
						.call(()=>{
							this.jianglicishu[8] = 1;
							this.removeChild(this.jiangliui9);
						});
		}else if(this.jianglicishu[9] == 1){
			this.jianglicishu[9] = 0;
			this.jiangliui10 = new Cailiaoxiaohao();
			this.addChild(this.jiangliui10);
			this.jiangliui10.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.jiangliui10.width / 2;
			this.jiangliui10.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.jiangliui10.height / 2 + this.jiangliui10.height *9;
			this.jiangliui10.img_shicai.source = tupian;
			this.jiangliui10.wenzineirong.text = "" + jiajian + shuliang;
			egret.Tween.get(this.jiangliui10).to({x:this.jiangliui10.x,y:Gameguanli.Kongzhitai().jiatingjiemian.height / 10 * 3 + this.jiangliui10.height *9},3000)
						.call(()=>{
							this.jianglicishu[9] = 1;
							this.removeChild(this.jiangliui10);
						});
		}
		
	}

//判断一次离线奖励
	public lixianjiangli(){
//		if(Gameguanli.Kongzhitai().zhujiemian.parent){
			if(parseInt(Gerenshuxing.lixianjiangli[0]) >= 10){
				this.lixianjiangliui = new Tongyongquerenkuang();
				Gameguanli.Kongzhitai().dingbuui.addChild(this.lixianjiangliui);
				let shengyushijian = parseInt(Gerenshuxing.lixianjiangli[0]);
				this.lixianjiangliui.tishiwenzi.text = "您已离开饭店" + shengyushijian  + "分钟,在您离开期间，饭店由您的大儿子经营管理，共赚得利润：" + Gerenshuxing.lixianjiangli[3] + "元。";
				this.lixianjiangliui.jiangliicon1.source = "img_qian_png";
				this.lixianjiangliui.jiangli1.text = " + " + Gerenshuxing.lixianjiangli[3];
				this.lixianjiangliui.jiangliicon2.source = "";
				this.lixianjiangliui.jiangli2.text = "";
				this.lixianjiangliui.but_queding.enabled = true;
				this.lixianjiangliui.but_shuangbei.enabled = true;
				this.lixianjiangliui.but_queding.alpha = 1;
				this.lixianjiangliui.but_shuangbei.alpha = 1;
				this.lixianjiangliui.but_queding0.enabled = false;
				this.lixianjiangliui.but_queding0.alpha = 0;
				this.lixianjiangliui.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP,this.danbeilixian,this);
				this.lixianjiangliui.but_shuangbei.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shuangbeilixian,this);
			}
//		}
	}

	public danbeilixian(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.lixianjiangliui);
		let jianglishuliang = Gerenshuxing.lixianjiangli[3];
		let xianzaishijianlixian = (new Date()).valueOf();
		xianzaishijianlixian = xianzaishijianlixian + 60000;
		Weblianjie.fasongshuju("code:094","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"1"' +","
		+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
		+ '"xiayishijian"' +":"+ '"' + xianzaishijianlixian + '"' +","
		+ '"beishu"' +":"+ '"1"' +"}");
	}

	public async shuangbeilixian(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.lixianjiangliui);
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.zhuanfahuidiaoshijian,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);		
	}

	public zhuanfahuidiaoshijian(){
		let jianglishuliang = Gerenshuxing.lixianjiangli[3];
		let xianzaishijianlixian = (new Date()).valueOf();
		xianzaishijianlixian = xianzaishijianlixian + 60000;
		Weblianjie.fasongshuju("code:094","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
		+ '"kouchuleixing"' +":"+ '"0"' +","
		+ '"kouchushuliang"' +":"+ '"0"' +","
		+ '"leixing"' +":"+ '"1"' +","
		+ '"shuliang"' +":"+ '"' + jianglishuliang + '"' +","
		+ '"xiayishijian"' +":"+ '"' + xianzaishijianlixian + '"' +","
		+ '"beishu"' +":"+ '"5"' +"}");
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon("1");
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,jianglishuliang);
	}


	//跑马灯信息提示
	public paomadengui(neirong){
		if(this.paomadengcishu[0] == 1){
			this.paomadengcishu[0] = 0;
			this.paomadeng1 = new Paomadenggonggao();
			this.addChild(this.paomadeng1);
			this.paomadeng1.x = 0
			this.paomadeng1.y = this.stage.stageHeight / 10 * 3;
			this.paomadeng1.wenzineirong.x = this.stage.stageWidth;
			this.paomadeng1.wenzineirong.text ="" + neirong;
			egret.Tween.get(this.paomadeng1.wenzineirong).to({x:0 - this.paomadeng1.wenzineirong.width},15000)
						.call(()=>{
							this.paomadengcishu[0] = 1;
							this.removeChild(this.paomadeng1);
						});
		}

	}


	public daitutanchukuang(fangshi,canshu?){
		if(fangshi == "fangzu"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "房租催缴";
			daitutongyongtanchu.tishitupiandt.source = "img_danjuneirong_png";
			daitutongyongtanchu.tishineirongdt.text = "很抱歉的通知您，您饭店的房租已经到期，请及时缴纳房租，否则将对饭店的收益产生巨大影响！！！";
			daitutongyongtanchu.quedinganniudt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "shuidian"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "水电催缴";
			daitutongyongtanchu.tishitupiandt.source = "img_danjuneirong_png";
			daitutongyongtanchu.tishineirongdt.text = "很抱歉的通知您，您饭店应该缴纳本月的水电煤气费了，请及时缴纳，否则将对饭店的收益产生巨大影响！！！";
			daitutongyongtanchu.quedinganniudt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "chengyuanweigui"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "家庭琐事";
			daitutongyongtanchu.tishitupiandt.source = "img_gudujineneg_png";
			daitutongyongtanchu.tishineirongdt.text = canshu;
			daitutongyongtanchu.quedinganniudt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "tilidibao"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "社区福利";
			daitutongyongtanchu.tishitupiandt.source = "img_jiating_png";
			daitutongyongtanchu.tishineirongdt.text = "社区发放中老年人福利，是一些常见的营养品，对行动力提升有很大的帮助。";
			daitutongyongtanchu.quedinganniudt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniu1dt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
				this.tilidibaofasong();
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "jinbidibao"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "社会低保";
			daitutongyongtanchu.tishitupiandt.source = "img_qian_png";
			daitutongyongtanchu.tishineirongdt.text = "您当前拥有的财富值已处于可领取社会低保的范围之内，福利中心为您免费发放一笔救济资金。";
			daitutongyongtanchu.quedinganniudt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniu1dt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
				this.jinbibaofasong();
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "xinqindibao"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "家庭琐事";
			daitutongyongtanchu.tishitupiandt.source = "img_xinqing_png";
			daitutongyongtanchu.tishineirongdt.text = "小孙女见您情绪低落，想逗你开心，为你表演了一段在幼儿园刚学会的舞蹈，惹得你捧腹大笑，心情得到提升。";
			daitutongyongtanchu.quedinganniudt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniu1dt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
				this.xinqingbaofasong();
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "daerziqinhe"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "家庭琐事";
			daitutongyongtanchu.tishitupiandt.source = "img_daerzibiaoshi_png";
			daitutongyongtanchu.tishineirongdt.text = "大儿子一位许久不见的朋友今天登门拜访，您忙碌一下午，为他们准备了丰盛了晚餐。大儿子亲和值提升不少。";
			daitutongyongtanchu.quedinganniudt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniu1dt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
				this.daerzibaofasong();
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "ererziqinhe"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "家庭琐事";
			daitutongyongtanchu.tishitupiandt.source = "img_xiaoerzibiaoshi_png";
			daitutongyongtanchu.tishineirongdt.text = "二儿子今天与公会成员一起开荒新副本，你为了不影响他的网速，决定今天不看电视了。二儿子亲和值提升不少。";
			daitutongyongtanchu.quedinganniudt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniu1dt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
				this.ererzibaofasong();
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "xifuqinhe"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "家庭琐事";
			daitutongyongtanchu.tishitupiandt.source = "img_xifubiaoshi_png";
			daitutongyongtanchu.tishineirongdt.text = "大儿媳加班工作很晚才回家，您为了让她多休息休息，决定今天晚上带着小孙女睡。大儿媳亲和值提升不少。";
			daitutongyongtanchu.quedinganniudt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniu1dt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
				this.xifubaofasong();
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "sunnvqinhe"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "家庭琐事";
			daitutongyongtanchu.tishitupiandt.source = "img_sunnvbiaoshi_png";
			daitutongyongtanchu.tishineirongdt.text = "小孙女在幼儿园得了小红花，你为了奖励她，给她买了她最喜欢吃的零食。小孙女亲和值提升不少。";
			daitutongyongtanchu.quedinganniudt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniu1dt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
				this.sunnvbaofasong();
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}else if(fangshi == "keliudibao"){
			let daitutongyongtanchu = new Daitutanchukuangui();
			Gameguanli.Kongzhitai().dingbuui.addChild(daitutongyongtanchu);
			daitutongyongtanchu.biaotiwenzidt.text = "饭店推广";
			daitutongyongtanchu.tishitupiandt.source = "img_chuandantuiguang_png";
			daitutongyongtanchu.tishineirongdt.text = "最近街道正在举办为期2天的美食节，诚邀各美食商户入驻。入驻将给饭店带来巨大的人流量。";
			daitutongyongtanchu.quedinganniudt.alpha = 0;
			daitutongyongtanchu.quedinganniu1dt.alpha = 1;
			daitutongyongtanchu.quedinganniu0dt.alpha = 0;
			daitutongyongtanchu.guanbianniudt.alpha = 1;
			daitutongyongtanchu.quedinganniudt.enabled = false;
			daitutongyongtanchu.quedinganniu1dt.enabled = true;
			daitutongyongtanchu.quedinganniu0dt.enabled = false;
			daitutongyongtanchu.guanbianniudt.enabled = true;
			daitutongyongtanchu.quedinganniu1dt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
				this.tuiguangbaofasong();
			},this);
			daitutongyongtanchu.guanbianniudt.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				Gamesound.Soundkongzhi().anniuyinxiao();
				Gameguanli.Kongzhitai().dingbuui.removeChild(daitutongyongtanchu);
			},this);
		}

	}

	public async tilidibaofasong(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongtilijiangli,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongtilijiangli(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"2"' +","
			+ '"shuliang"' +":"+ '"10"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon("2");
			Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"10");
	}


	public async jinbibaofasong(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongjinbijiangli,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongjinbijiangli(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"1"' +","
			+ '"shuliang"' +":"+ '"1000"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
			let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon("1");
			Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"1000");
	}

	public async xinqingbaofasong(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongxinqingjiangli,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongxinqingjiangli(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"4"' +","
			+ '"shuliang"' +":"+ '"20"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon("4");
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"20");
	}

	public async daerzibaofasong(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongdaerzijiangli,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongdaerzijiangli(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"6"' +","
			+ '"shuliang"' +":"+ '"20"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon("6");
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"20");
	}

	public async ererzibaofasong(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongererzijiangli,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongererzijiangli(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"7"' +","
			+ '"shuliang"' +":"+ '"20"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon("7");
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"20");
	}

	public async xifubaofasong(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongxifujiangli,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongxifujiangli(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"8"' +","
			+ '"shuliang"' +":"+ '"20"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon("8");
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"20");
	}

	public async sunnvbaofasong(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongsunnvjiangli,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongsunnvjiangli(){
		Weblianjie.fasongshuju("code:085","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"kouchuleixing"' +":"+ '"0"' +","
			+ '"kouchushuliang"' +":"+ '"0"' +","
			+ '"leixing"' +":"+ '"9"' +","
			+ '"shuliang"' +":"+ '"20"' +","
			+ '"beishu"' +":"+ '"1"' +"}");
		let tupianxianshi = Gameguanli.Kongzhitai().daojuxianshiicon("9");
		Gameguanli.Kongzhitai().jianglijiemian("kai",tupianxianshi,"20");
	}

	public async tuiguangbaofasong(){
		let huidiaodengdai = new egret.Timer(3000,1);
		huidiaodengdai.addEventListener(egret.TimerEvent.TIMER,this.fasongtuiguangjiangli,this);
		huidiaodengdai.start();
		const zhudongzhuanfa = await platform.shareAppMessage("第六十四年",Gerenshuxing.fenxianglianjiedizhi,11);
	}

	public fasongtuiguangjiangli(){
		Weblianjie.fasongshuju("code:156","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
			+ '"jianglitianshu"' +":"+ '"2"' +"}");
		Gameguanli.Kongzhitai().jianglijiemian("kai","img_meishijie_png","1");
		
	}


	//奖励道具显示统一管理类
	public daojuxianshiicon(id:string){
		let fanhuitupian = "";
		switch(id){
			case "0":
				fanhuitupian = "";
				break;
			case "1":
				fanhuitupian = "img_qian_png";
				break;
			case "2":
				fanhuitupian = "img_jiating_png";
				break;
			case "3":
				fanhuitupian = "img_jiankang_png";
				break;
			case "4":
				fanhuitupian = "img_xinqing_png";
				break;
			case "5":
				fanhuitupian = "img_xingfu_png";
				break;
			case "6":
				fanhuitupian = "img_daerzixinqinicon_png";
				break;
			case "7":
				fanhuitupian = "img_ererzixinqinicon_png";
				break;
			case "8":
				fanhuitupian = "img_xifuxinqingicon_png";
				break;
			case "9":
				fanhuitupian = "img_sunnvxinqingicon_png";
				break;
			case "10":
				fanhuitupian = "img_daerzinengliicon_png";
				break;
			case "11":
				fanhuitupian = "img_ererzinengliicon_png";
				break;
			case "12":
				fanhuitupian = "img_xifunengliicon_png";
				break;
			case "13":
				fanhuitupian = "img_sunnvnengliicon_png";
				break;
			default:
				if(parseInt(id) >= 1000 && parseInt(id) < 10000){
					let caipubiao = Gerenshuxing.shipubiao;
					for(var i = 0;i<caipubiao.length;i++){
						if(caipubiao[i].id == id){
							fanhuitupian = caipubiao[i].id + "_png";
							break;
						}
					}
				}else if(parseInt(id) >= 10000){
					let daojubiao = Gerenshuxing.daojubiao;
					for(var i = 0;i<daojubiao.length;i++){
						if(daojubiao[i].id == id){
							fanhuitupian = daojubiao[i].xianshiicon;
							break;
						}
					}
				};
				break;
		}
		return fanhuitupian;
	}

	public jiatingjiemianguanbi(){
		if(Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu.parent){
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.shafajiaohu);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu.parent){
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.chajijiaohu);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu.parent){
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.dianshijiaohu);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu.parent){
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.chuangjiaohu);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu.parent){
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.daerzijiaohu);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu.parent){
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.xifujiaohu);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu.parent){
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.sunnvjiaohu);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu.parent){
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.ererzijiaohu);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.renwujiemian.parent){
			Gameguanli.Kongzhitai().dingbuui.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.renwujiemian);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.jinxiuquerenui.parent){
			Gameguanli.Kongzhitai().dingbuui.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.jinxiuquerenui);
		}
		if(Gameguanli.Kongzhitai().jiatingjiemian.erjitanchuui.parent){
			Gameguanli.Kongzhitai().jiatingjiemian.removeChild(Gameguanli.Kongzhitai().jiatingjiemian.erjitanchuui);
		}
	}

	//每日任务完成进度弹出UI
	public renwuwanchengjindu(id:string){
		this.meirirenwujindu = new Renwuwanchengtanchuui();
		this.addChild(this.meirirenwujindu);
		this.meirirenwujindu.x = Gameguanli.Kongzhitai().jiatingjiemian.width / 2 - this.meirirenwujindu.width / 2;
		this.meirirenwujindu.y = Gameguanli.Kongzhitai().jiatingjiemian.height / 2 - this.meirirenwujindu.height / 2;
		let renwubiao = Gerenshuxing.meirirenwubiao;
		if(id == "1"){
			for(var i = 0;i<renwubiao.length;i++){
				if(Gerenshuxing.meirirenwuone[0] == renwubiao[i].id){
					this.meirirenwujindu.renwutushi.source = renwubiao[i].renwuicon;
					this.meirirenwujindu.renwumingzi.text = renwubiao[i].renwuming;
					if(parseInt(Gerenshuxing.meirirenwuone[2]) >= parseInt(Gerenshuxing.meirirenwuone[1])){
						this.meirirenwujindu.renwuwanchengdu.text = "已完成";
					}else{
						this.meirirenwujindu.renwuwanchengdu.text = "(" + Gerenshuxing.meirirenwuone[2] + "/" + Gerenshuxing.meirirenwuone[1] + ")";
					}
					break;
				}
			}
		}else if(id == "2"){
			for(var i = 0;i<renwubiao.length;i++){
				if(Gerenshuxing.meirirenwutwo[0] == renwubiao[i].id){
					this.meirirenwujindu.renwutushi.source = renwubiao[i].renwuicon;
					this.meirirenwujindu.renwumingzi.text = renwubiao[i].renwuming;
					if(parseInt(Gerenshuxing.meirirenwutwo[2]) >= parseInt(Gerenshuxing.meirirenwutwo[1])){
						this.meirirenwujindu.renwuwanchengdu.text = "已完成";
					}else{
						this.meirirenwujindu.renwuwanchengdu.text = "(" + Gerenshuxing.meirirenwutwo[2] + "/" + Gerenshuxing.meirirenwutwo[1] + ")";
					}
					break;
				}
			}
		}else if(id == "3"){
			for(var i = 0;i<renwubiao.length;i++){
				if(Gerenshuxing.meirirenwutre[0] == renwubiao[i].id){
					this.meirirenwujindu.renwutushi.source = renwubiao[i].renwuicon;
					this.meirirenwujindu.renwumingzi.text = renwubiao[i].renwuming;
					if(parseInt(Gerenshuxing.meirirenwutre[2]) >= parseInt(Gerenshuxing.meirirenwutre[1])){
						this.meirirenwujindu.renwuwanchengdu.text = "已完成";
					}else{
						this.meirirenwujindu.renwuwanchengdu.text = "(" + Gerenshuxing.meirirenwutre[2] + "/" + Gerenshuxing.meirirenwutre[1] + ")";
					}
					break;
				}
			}
		}else if(id == "4"){
			for(var i = 0;i<renwubiao.length;i++){
				if(Gerenshuxing.meirirenwufor[0] == renwubiao[i].id){
					this.meirirenwujindu.renwutushi.source = renwubiao[i].renwuicon;
					this.meirirenwujindu.renwumingzi.text = renwubiao[i].renwuming;
					if(parseInt(Gerenshuxing.meirirenwufor[2]) >= parseInt(Gerenshuxing.meirirenwufor[1])){
						this.meirirenwujindu.renwuwanchengdu.text = "已完成";
					}else{
						this.meirirenwujindu.renwuwanchengdu.text = "(" + Gerenshuxing.meirirenwufor[2] + "/" + Gerenshuxing.meirirenwufor[1] + ")";
					}
					break;
				}
			}
		}
		egret.Tween.get(this.meirirenwujindu).to({alpha:0.1},3000)
		.call(()=>{
			this.removeChild(this.meirirenwujindu);
		});
	}




}
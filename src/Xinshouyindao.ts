class Xinshouyindao extends egret.DisplayObjectContainer{
	public static yindaojiemian:Xinshouyindaodakuang;

	public static zhengzaiyindao:boolean = false;


	public constructor() {
		super();
	}

	public static chushihua(){
		if(Gerenshuxing.guideuiyindao == 0){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "欢迎来到我的第六十四岁，由于前不久生过一场大病，为了治好我的病，子女们几乎把自己所有的积蓄都花光了。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_1,this);
					//初始增加家庭成员交谈次数
					Gerenshuxing.daerzijiaotan = Math.floor(parseInt(Gerenshuxing.daerzixinxi[0]) / 100 + 2);
					Gerenshuxing.ererzijiaotan = Math.floor(parseInt(Gerenshuxing.ererzixinxi[0]) / 100 + 2);
					Gerenshuxing.xifujiaotan = Math.floor(parseInt(Gerenshuxing.xifuxinxi[0]) / 100 + 2);
					Gerenshuxing.sunnvjiaotan = Math.floor(parseInt(Gerenshuxing.sunnvxinxi[0]) / 100 + 2);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 1){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "唉，人老了，真实越来越唠叨了，其实我自己也不想的，就是控制不住。。。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_1_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 2){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "二儿子本来在很远的大城市上班，自从我生病以后，便辞了工作回到了家乡发展。。。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_2_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 3){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "大儿媳在一家外贸公司上班，平时上班也挺忙的，没生病之前，我一直帮着带小孙女。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_3_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 4){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "小孙女今年5岁了，是我们全家的开心果。虽然平时捣起蛋来把我累够呛，但是累并快乐着。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_4_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 5){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "家人们与我之间，都有“亲和值”来记录我们之间的默契程度。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_5_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 6){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "自从大病过后，我便更加重视自己身体健康的保持。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_6_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 7){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "大病初愈，很多以前喜欢的活动都没法进行参与了。无聊的时候，我会看看“电视”。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_7_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 8){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "有时候干活累了，我会坐在“沙发”上休息一阵子。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_8_1,this);

				}
			}
		}else if(Gerenshuxing.guideuiyindao == 9){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "现在我的作息越来越规律，每天21点，我都会准时上“床”睡觉。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_9_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 11){
			if(Gameguanli.Kongzhitai().jiatingjiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "新的一天又开始了，子女们都已经去上班了，我也该去饭店瞧瞧了。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_11_1,this);
					Gameguanli.Kongzhitai().dibuui.jiesuokongzhi();
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 12){
			if(Gameguanli.Kongzhitai().zhujiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "这便是我家开的小饭店了，目前只开放了“小炒”这一类目。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_12_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 13){
			if(Gameguanli.Kongzhitai().zhujiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "知道怎样清除“垃圾”了，下面我来介绍下饭店的一些日常管理方法吧。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 14){
			if(Gameguanli.Kongzhitai().zhujiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "好了，现在我们准备开始营业吧！！。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_14_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 15){
			if(Gameguanli.Kongzhitai().zhujiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "现在食材应该够1天的消耗了，下面开始正式营业吧!!!";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_15_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 16){
			if(Gameguanli.Kongzhitai().zhujiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "刚才我们碰到的算是脾气比较好的一类客人，他们通常对饭菜不会太过挑剔。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_16_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 17){
			if(Gameguanli.Kongzhitai().zhujiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					Fandianjisuan.chushihuajisuan(1);
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "通过刚才的上菜，我们得到了客人的不少赏赐。并且获得了名望值的提升。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_17_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 18){
			if(Gameguanli.Kongzhitai().zhujiemian.parent){
				if(this.zhengzaiyindao == false){
					this.zhengzaiyindao = true;
					Fandianjisuan.chushihuajisuan(1);
					this.yindaojiemian = new Xinshouyindaodakuang();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
					this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
					this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
					this.yindaojiemian.xiaokuangzu.alpha = 0;
					this.yindaojiemian.dakuangzu.alpha = 1;
					this.yindaojiemian.yindaoshouzhi.alpha = 0;
					this.yindaojiemian.xiaokuangzu.touchEnabled = false;
					this.yindaojiemian.dakuangzu.touchEnabled = false;
					this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
					this.yindaojiemian.dakuangwenzi.text = "现在请您开始自由管理饭店吧，明天我再带您去街上看看。";
					this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
					this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_18_1,this);
				}
			}
		}else if(Gerenshuxing.guideuiyindao == 19){
			Gameguanli.Kongzhitai().dibuui.jiesuokongzhi();
			if(this.zhengzaiyindao == false){
				this.zhengzaiyindao = true;
				this.yindaojiemian = new Xinshouyindaodakuang();
				Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
				this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
				this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
				this.yindaojiemian.xiaokuangzu.alpha = 0;
				this.yindaojiemian.dakuangzu.alpha = 1;
				this.yindaojiemian.yindaoshouzhi.alpha = 0;
				this.yindaojiemian.xiaokuangzu.touchEnabled = false;
				this.yindaojiemian.dakuangzu.touchEnabled = false;
				this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
				this.yindaojiemian.dakuangwenzi.text = "对了，若您有有空，不妨去看看名望排行榜，瞻仰瞻仰那些“大神”们的风采！";
				this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
				this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_19_1,this);
			}
		}else if(Gerenshuxing.guideuiyindao == 21){
			Gameguanli.Kongzhitai().dibuui.jiesuokongzhi();
			if(this.zhengzaiyindao == false){
				this.zhengzaiyindao = true;
				this.yindaojiemian = new Xinshouyindaodakuang();
				Gameguanli.Kongzhitai().dingbuui.addChild(this.yindaojiemian);
				this.yindaojiemian.dakuangzu.x = Gameguanli.Kongzhitai().width / 2 - this.yindaojiemian.dakuangzu.width / 2;
				this.yindaojiemian.dakuangzu.y = Gameguanli.Kongzhitai().height / 2 - this.yindaojiemian.dakuangzu.height / 2;
				this.yindaojiemian.xiaokuangzu.alpha = 0;
				this.yindaojiemian.dakuangzu.alpha = 1;
				this.yindaojiemian.yindaoshouzhi.alpha = 0;
				this.yindaojiemian.xiaokuangzu.touchEnabled = false;
				this.yindaojiemian.dakuangzu.touchEnabled = false;
				this.yindaojiemian.yindaoshouzhi.touchEnabled = false;
				this.yindaojiemian.dakuangwenzi.text = "新的一天又开始了，今天我们去街道转转。";
				this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
				this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_20_1,this);
			}
		}											
	}


	public static yindao_0_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangwenzi.text = "幸运的是，小命是捡回来了，不过心里总感觉拖欠了家人太多，在以后的日子里，看来还得好好工作来补偿家人。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_2,this);
	}

	public static yindao_0_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangwenzi.text = "下面我就先来介绍一下我的各项基础属性吧！";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_3,this);
	}

	public static yindao_0_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.313 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.045;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "这里记录了我当前的“心情”指标(点击可查看心情说明)";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_4,this);
	}

	public static yindao_0_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.608 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.045;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width / 2;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "这里记录了我当前的“健康”指标(点击可查看健康说明)";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_5,this);
	}

	public static yindao_0_5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.313 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.092;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "这里记录了我当前的“行动力”(点击可查看行动力说明)";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_6,this);
	}

	public static yindao_0_6(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.608 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.092;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width / 2;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "这里记录了我当前的“财富”(点击可查看财富说明)";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_7,this);
	}

	public static yindao_0_7(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.066 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.166;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "这里记录了我当前的“名望等级”(点击可查看名望等级说明)";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_8,this);
	}

	public static yindao_0_8(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.499 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.149;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width / 2;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "这里记录了当前游戏中的每日时辰";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_9,this);
	}

	public static yindao_0_9(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.715 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.149;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width / 1.5;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "这里显示当前时段的天气情况";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_10,this);
	}

	public static yindao_0_10(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "与现实生活中一样，时辰和天气将影响一些日常活动进行。而“名望”则是身份价值的体现。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_11,this);
	}

	public static yindao_0_11(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "“心情”和“健康”对于我这个年纪来说至关重要，对生活中的方方面面都有影响。“财富”只是一小部分。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_12,this);
	}

	public static yindao_0_12(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "也许只有到我这个年纪，你可能才会体会到“金钱并不是万能的”这句话的真实含义。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_0_13,this);
	}

	public static yindao_0_13(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"1"'+"}");
		this.zhengzaiyindao = false;
	}

	public static yindao_1_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "自从生病以后，大儿子就全权接手了“饭店”的日常管理，而我也空闲下来，不用再每天奔波于饭店。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_1_2,this);
	}

	public static yindao_1_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "大儿子也在学习“饭店管理”和“厨艺”方面的知识，我们时常沟通“厨艺”相关的东西，对他算是能起到一点帮助。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_1_3,this);
	}


	public static yindao_1_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaozuoshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.271;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.591;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x + this.yindaojiemian.yindaoshouzhi.width /2;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击大儿子，可对大儿子进行“交谈”、“进修”、“赠送礼物”等管理";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_1_4,this);
	}

	public static yindao_1_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"2"'+"}");	
		this.zhengzaiyindao = false;	
	}

	public static yindao_2_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "说实话，我经常会担心在小城市工作会耽误他的前程。但是内心，又着实舍不得他离开家独自一人在外承受委屈。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_2_2,this);
	}

	public static yindao_2_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "二儿子平时的喜好就是“宅”在家中玩游戏。年纪也老大不小了，可还没谈对象，为这事我老操心。可他却一点不着急。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_2_3,this);
	}

	public static yindao_2_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyouxiashouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.621 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.460;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width /2;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击二儿子，可对二儿子进行“交谈”、“工作”、“赠送礼物”等管理";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_2_4,this);
	}

	public static yindao_2_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"3"'+"}");
		this.zhengzaiyindao = false;	
	}

	public static yindao_3_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "自从我生病以后，她就没有再让我帮忙带过小孙女，想必是怕累着我吧。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_3_2,this);
	}

	public static yindao_3_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "一场大病，把老大家里一点家底都给花光，欣慰的是，大儿媳并没有因此而产生任何怨言。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_3_3,this);
	}

	public static yindao_3_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyouxiashouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.853 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.688;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width / 1.3;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击大儿媳，可对大儿媳进行“交谈”、“家务”、“赠送礼物”等管理";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_3_4,this);
	}

	public static yindao_3_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"4"'+"}");	
		this.zhengzaiyindao = false;
	}

	public static yindao_4_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "与大多数这个年龄段的小孩一样，她对“动画片”和滑滑梯等这些儿童玩耍项目相当痴迷。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_4_2,this);
	}

	public static yindao_4_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "儿媳妇他们挺担心她会输在起跑线上，但是我却认为小孩嘛，就应该有个无忧无虑快乐的童年。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_4_3,this);
	}

	public static yindao_4_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyouxiashouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.689 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.745;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width / 1.3;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击小孙女，可对小孙女进行“交谈”、“培养”等管理";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_4_4,this);
	}

	public static yindao_4_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"5"'+"}");	
		this.zhengzaiyindao = false;
	}

	public static yindao_5_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "平时对他们管理时，都将消耗一定的“亲和值”来进行，毕竟谁也不愿意坦然接受别人对自己的控制。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_5_2,this);
	}

	public static yindao_5_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "“赠送礼物”可以较快的增加他们对我的“亲和值”。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_5_3,this);
	}

	public static yindao_5_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"6"'+"}");
		this.zhengzaiyindao = false;
	}

	public static yindao_6_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "我把一些常用的药物都摆放在“茶几”上。免得我需要用到时，还得去东翻西找。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_6_2,this);
	}

	public static yindao_6_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoxiashouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.548 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.68 - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width / 2;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击“茶几”，可以使用药物来增加自己的健康。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_6_3,this);
	}

	public static yindao_6_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"7"'+"}");
		this.zhengzaiyindao = false;
	}

	public static yindao_7_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "每天看看“电视”可以提升我的心情，忘却那些烦恼。据说还能防止老年痴呆。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_7_2,this);
	}

	public static yindao_7_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.858 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.477 - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击“电视”，可以选择观看“连续剧”或者“相声小品”来提升心情。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_7_3,this);
	}

	public static yindao_7_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"8"'+"}");
		this.zhengzaiyindao = false;
	}

	public static yindao_8_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "通过在“沙发”上休息，我将得到“行动力”的补充。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_8_2,this);
	}

	public static yindao_8_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaozuoxiashouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.161;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.809 - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x + this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击“沙发”，可以进行休息，提高“行动力”。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_8_3,this);
	}

	public static yindao_8_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "好了，介绍了这么多，我也该去打扫打扫家里卫生了，您就先随便逛逛吧。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_8_4,this);
	}

	public static yindao_8_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
//		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "}");	
		this.zhengzaiyindao = false;
	}

	public static yindao_9_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "老年人保证每天充足的睡眠和良好的睡眠质量对健康是相当重要的。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_9_2,this);
	}

	public static yindao_9_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaozuoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.146 + this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.328;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x + this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击“床”，可以进行睡眠，提高“健康值”。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_9_3,this);
	}

	public static yindao_9_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "好了，我该开始“睡觉”了，等明天睡觉起来，我得去店子里面看看。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_9_4,this);
	}

	public static yindao_9_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"10"'+"}");
		this.zhengzaiyindao = false;
	}

	public static yindao_11_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaozuoxiashouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.138;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.926 - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x + this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击“饭店”，去饭店看看吧。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_11_2,this);
	}

	public static yindao_11_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"12"'+"}");
		this.zhengzaiyindao = false;
	}

	public static yindao_12_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "等攒够了钱，我们可以把“火锅”、“小吃”、“早餐”这几个区域装修一下，到时候品种就多了。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_12_2,this);
	}

	public static yindao_12_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "哎呀，饭店现在还没有打扫，太脏了，要知道对饭店来说，卫生情况是很重要的。现在先把卫生打扫干净吧。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_12_3,this);
	}

	public static yindao_12_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaozuoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.377 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.322;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x + this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "在“垃圾”上滑动，便可以清除此处的“垃圾”。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_12_4,this);
	}

	public static yindao_12_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"13"'+"}");
		this.zhengzaiyindao = false;
	}

	public static yindao_13_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.896 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.593 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "“管理”里面，包含饭店的“营销推广”";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_2,this);
	}

	public static yindao_13_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.896 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.593 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "“员工聘用”、“家具替换”、“房租单据”等操作。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_3,this);
	}

	public static yindao_13_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.896 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.593 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "当您需要对饭店的基础设施或者经营策略进行修改时。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_4,this);
	}

	public static yindao_13_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.896 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.593 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "可以在此处进行调整";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_5,this);
	}

	public static yindao_13_5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.896 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.685 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "“留言板”是顾客到店后，对饭店进行的评价，会影响饭店的口碑。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_6,this);
	}

	public static yindao_13_6(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.896 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.685 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "“卫生条件”、“上菜速度”等，都是顾客留言的重要内容哦。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_7,this);
	}

	public static yindao_13_7(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.896 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.779 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "“菜谱”里面记录了我们饭店掌握的菜品。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_8,this);
	}

	public static yindao_13_8(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.896 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.779 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "已经掌握的“菜谱”，我们还可以通过“研制”进行菜谱的升级。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_9,this);
	}

	public static yindao_13_9(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoyoushouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.896 - this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.779 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "另外随着我们对菜谱的熟练度慢慢提升，菜谱的品质也会越来越高。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_10,this);
	}

	public static yindao_13_10(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaozuoshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.048;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.743 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x + this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "当前饭店的各项经营状况，都能通过“经营报表”很直观的查看。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_11,this);
	}

	public static yindao_13_11(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "具体情况就是这些了，至于饭店如何经营会更加盈利，只能通过您的经营经验来总结了。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_12,this);
	}

	public static yindao_13_12(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "“客流量”、“客容量”、“口碑”、“卫生状况”等等这些都是比较重要的数据，我就不班门弄斧了。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_13_13,this);
	}

	public static yindao_13_13(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"14"'+"}");
		this.zhengzaiyindao = false;
	}

	public static yindao_14_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "俗话说“巧妇难为无米之炊”，每天早上，我都会先把一天的所需的食材准备充足。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_14_2,this);
	}

	public static yindao_14_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "食材可以去菜市场进行购买，每次需要消耗一定的金币。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_14_3,this);
	}

	public static yindao_14_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaozuoshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.243;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.437 - this.yindaojiemian.yindaoshouzhi.height / 2;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x + this.yindaojiemian.yindaoshouzhi.width;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击“+”号按钮，可打开“菜市场”的快捷入口。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_14_4,this);
	}


	public static yindao_14_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		this.zhengzaiyindao = false;
		Gameguanli.Kongzhitai().maicaijiemian("kai");
	}

	public static yindao_15_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "请耐心等待食客们入店就餐。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_15_2,this);
	}

	public static yindao_15_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
//		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		this.zhengzaiyindao = false;
		let kaishichuren = new Donghuabifang("1001","凉拌腐竹");
	}

	public static yindao_16_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "还有一类客人，他们情绪比较低落，对饭菜也比较挑剔。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_16_2,this);
	}

	public static yindao_16_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "如今社会越来越浮躁，来自各方面的压力，导致他们在就餐时充满负能量。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_16_3,this);
	}

	public static yindao_16_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "但是，我深知，美食是可以给他们予以慰藉的。这也是我这么多年来经营饭店所努力的方向。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_16_4,this);
	}

	public static yindao_16_4(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "我希望有一天，我烹饪出的美食可以抚平他们心灵的创伤。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_16_5,this);
	}

	public static yindao_16_5(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
//		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		this.zhengzaiyindao = false;
		let kaishichuren = new Donghuabifang("pve","0");
	}

	public static yindao_17_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.dakuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.dakuangwenzi.text = "下面我们来看看名望值提升后会给我们带来什么帮助吧。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_17_2,this);
	}

	public static yindao_17_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoshangshouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.066 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.166;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y + this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击这里，查看我们当前的名望值。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_17_3,this);
	}

	public static yindao_17_3(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		this.zhengzaiyindao = false;
		Gameguanli.Kongzhitai().dingbuui.chakangerenshuxing();
	}

	public static yindao_18_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		this.zhengzaiyindao = false;
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"19"'+"}");
	}

	public static yindao_19_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoxiashouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.622 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.926 - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x - this.yindaojiemian.xiaokuangzu.width / 2;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击“排行”，去看看吧。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_19_2,this);
	}

	public static yindao_19_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		this.zhengzaiyindao = false;
		Weblianjie.fasongshuju("code:158","{"+ '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' +  "," +  '"buzou"' +":"+ '"20"'+"}");
	}

	public static yindao_20_1(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.alpha = 1;
		this.yindaojiemian.yindaoshouzhi.source = "img_yindaoxiashouzhi_png";
		this.yindaojiemian.yindaoshouzhi.x = Gameguanli.Kongzhitai().width * 0.383 - this.yindaojiemian.yindaoshouzhi.width / 2;
		this.yindaojiemian.yindaoshouzhi.y = Gameguanli.Kongzhitai().height * 0.926 - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuangzu.x = this.yindaojiemian.yindaoshouzhi.x;
		this.yindaojiemian.xiaokuangzu.y = this.yindaojiemian.yindaoshouzhi.y - this.yindaojiemian.yindaoshouzhi.height;
		this.yindaojiemian.xiaokuanwenzi.text = "点击“街道”，去街道看看吧。";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = true;
		this.yindaojiemian.heisezhezhaodianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yindao_20_2,this);
	}

	public static yindao_20_2(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.yindaojiemian.dakuangzu.alpha = 0;
		this.yindaojiemian.xiaokuangzu.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.alpha = 0;
		this.yindaojiemian.yindaoshouzhi.source = "";
		this.yindaojiemian.xiaokuanwenzi.text = "";
		this.yindaojiemian.heisezhezhaodianji.touchEnabled = false;
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.yindaojiemian);
		this.zhengzaiyindao = false;
		Gameguanli.Kongzhitai().shangjiechenggong();
	}









	



	

}
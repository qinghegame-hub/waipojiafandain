class Dajiejiemian extends eui.Component implements  eui.UIComponent {
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
	public juesezu:eui.Group;
	public juesetubiao:eui.Image;
	public touxiang:eui.Image;
	public touxiangkuang:eui.Image;
	public img_dianpu:eui.Image;
	public kaishianniuzu:eui.Group;
	public but_shaizi:eui.Button;
	public img_tilitishibj:eui.Image;
	public img_jiating:eui.Image;
	public tilixiaohao:eui.Label;





	public dangqianbushu:number = 1;//当前所处的台阶步数;
	public dangqiansaizi:number = 1;//当前筛子抛出的点数;

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

	public zhuanchangjiemian:Dianpurukou;//转场入口界面;
	public suijijiemian:Tongyongquerenkuang;//弹出界面;
	public jianglijiemian:Jianglijiesuanui;
	public fandianjiemian:Dianpufandian;//饭店类店铺界面;


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
		this.chushihua();
	}

	public chushihua(){
		this.jiedaobiao = RES.getRes("jiedaobiao_json");
		this.jiedaosuijibiao = RES.getRes("jiedaosuijibiao_json");
		this.but_shaizi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjisaizi,this);
		this.juesezu.x = this.taijie0.x;
		this.juesezu.y = this.taijie0.y;
		this.dangqianbushu = 1;
		this.dangqiansaizi = 1;
		this.tilixiaohaochushi();
	}

	public tilixiaohaochushi(){
		this.tilixiaohao.text = "1 / " + Gerenshuxing.jiatingzhi;
	}

	public dianjisaizi(){
		this.but_shaizi.enabled = false;
		if(Gerenshuxing.jiatingzhi > 0){
			Weblianjie.fasongshuju("code:037","{" + '"kouchushu"' +":"+ "1" +"," + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			let kouchudonghua = new Cailiaoxiaohao();
			this.addChild(kouchudonghua);
			kouchudonghua.wenzizu.x = this.kaishianniuzu.x + this.kaishianniuzu.width / 2 - kouchudonghua.wenzizu.width /2;
			kouchudonghua.wenzizu.y = this.kaishianniuzu.y - kouchudonghua.wenzizu.height;
			kouchudonghua.wenzineirong.text = " - 1";
			kouchudonghua.img_shicai.source = "img_jiating_png";
			egret.Tween.get(kouchudonghua).to({x:kouchudonghua.x,y:kouchudonghua.y - 60},2000).call(()=>{
				this.removeChild(kouchudonghua);
			});
			this.dangqiansaizi = Math.floor(Math.random() * 6) + 1;
			Gameguanli.Kongzhitai().cuowutishixinxi("当前掷出：" + this.dangqiansaizi + "点");
			this.zouluyanshi();
		}else{
			Gameguanli.Kongzhitai().cuowutishixinxi("当前您的劳动力已不足1点");
			this.but_shaizi.enabled = true;
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

	public chufagongneng(){
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


	public fandianbufen(){
		this.fandianjiemian = new Dianpufandian();
		Gameguanli.Kongzhitai().dingbuui.addChild(this.fandianjiemian);
		this.fandianjiemian.but_xiaofei.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xiaofeidianji,this);
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
		this.fandianjiemian.renqishu.text = this.fandianpeizhi[0];
		this.fandianjiemian.zujinshu.text = this.fandianpeizhi[1];
		this.fandianjiemian.shoufeishu.text = this.fandianpeizhi[2];
		this.fandianjiemian.zuqishu.text = this.fandianpeizhi[3] + "天";
		if(this.fandianpeizhi[3] == "0"){
			this.fandianjiemian.zhuangtaishu.text = "可收购";
		}else{
			this.fandianjiemian.zhuangtaishu.text = "不可收购";
		}
		switch(this.fandianpeizhi[4]){
			case "0":
				this.fandianjiemian.dianzhuming.text = "暂无主人";
				break;
			case "1":
				this.fandianjiemian.dianzhuming.text = Gerenshuxing.uid;
				break;
			default:
				this.fandianjiemian.dianzhuming.text = "qitaren";
		}

	}

	public xiaofeidianji(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.fandianjiemian);
	}


	public chufadianpu1(){
		if(this.jiedaopeizhi.suijiliebiao == "0"){
			this.but_shaizi.enabled = true;
			this.fandianbufen();
		}else{
			this.suijichufaliebiao = this.jiedaopeizhi.suijiliebiao.split(",") ;
			let suijishu = Math.floor(Math.random() * (this.suijichufaliebiao.length + 1));
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
			this.suijijiemian.jiangli2.text = "- " + this.kouchushuliang;
			this.suijijiemian.jiangli1.text = "+ " + this.jianglishuliang;
			this.kouchutubiaopanduan();
			this.jianglitubiaopanduan();
			this.suijijiemian.but_queding.addEventListener(egret.TouchEvent.TOUCH_TAP,this.suijiqueding,this);
			this.suijijiemian.but_shuangbei.addEventListener(egret.TouchEvent.TOUCH_TAP,this.suijishuangbei,this);
		}
	}

	public jianglitubiaopanduan(){
		if(this.jianglileixing == "1"){
			this.suijijiemian.jiangliicon1.source = "img_qian_png";
		}else if(this.jianglileixing == "2"){
			this.suijijiemian.jiangliicon1.source = "img_jiating_png";
		}else if(this.jianglileixing == "3"){
			this.suijijiemian.jiangliicon1.source = "img_jiankang_png";
		}else if(this.jianglileixing == "4"){
			this.suijijiemian.jiangliicon1.source = "img_xinqing_png";
		}else if(this.jianglileixing == "5"){
			this.suijijiemian.jiangliicon1.source = "img_xingfu_png";
		}
	}

	public kouchutubiaopanduan(){
		if(this.kouchuleixing == "1"){
			this.suijijiemian.jiangliicon2.source = "img_qian_png";
		}else if(this.kouchuleixing == "2"){
			this.suijijiemian.jiangliicon2.source = "img_jiating_png";
		}else if(this.kouchuleixing == "3"){
			this.suijijiemian.jiangliicon2.source = "img_jiankang_png";
		}else if(this.kouchuleixing == "4"){
			this.suijijiemian.jiangliicon2.source = "img_xinqing_png";
		}else if(this.kouchuleixing == "5"){
			this.suijijiemian.jiangliicon2.source = "img_xingfu_png";
		}
	}



	public suijiqueding(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
		this.but_shaizi.enabled = true;
		switch(this.kouchuleixing){
			case "1":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(1);
					this.jianglijiemian.jiangliicon.source = "img_qian_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
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
					this.jianglijiemian.jiangliicon.source = "img_jiating_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
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
					this.jianglijiemian.jiangliicon.source = "img_jiankang_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
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
					this.jianglijiemian.jiangliicon.source = "img_xinqing_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
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
					this.jianglijiemian.jiangliicon.source = "img_xingfu_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang;
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的幸福值太低，只得黯自离去！");
				}
				break;
		}
	}

	public suijishuangbei(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.suijijiemian);
		this.but_shaizi.enabled = true;
		switch(this.kouchuleixing){
			case "1":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(2);
					this.jianglijiemian.jiangliicon.source = "img_qian_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang * 2;
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您无法支付费用，只得黯自离去！");
				}
				break;
			case "2":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(2);
					this.jianglijiemian.jiangliicon.source = "img_jiating_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang  * 2;
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的行动力不足，只得黯自离去！");
				}
				break;
			case "3":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(2);
					this.jianglijiemian.jiangliicon.source = "img_jiankang_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang  * 2;
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的身体不太健康，只得黯自离去！");
				}
				break;
			case "4":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(2);
					this.jianglijiemian.jiangliicon.source = "img_xinqing_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang  * 2;
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的心情不太开心，只得黯自离去！");
				}
				break;
			case "5":
				if(Gerenshuxing.jinbizhi >= parseInt(this.kouchushuliang)){
					this.jianglijiemian = new Jianglijiesuanui();
					Gameguanli.Kongzhitai().dingbuui.addChild(this.jianglijiemian);
					this.fasongjiangli(2);
					this.jianglijiemian.jiangliicon.source = "img_xingfu_png";
					this.jianglijiemian.jianglishuliang.text = "+" + this.jianglishuliang  * 2;
					this.jianglijiemian.qudinganniu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.guanbijiangli,this);
				}else{
					Gameguanli.Kongzhitai().cuowutishixinxi("由于您的幸福值太低，只得黯自离去！");
				}
				break;
		}
	}

	public fasongjiangli(beishu){
		 Weblianjie.fasongshuju("code:040","{" + '"kouchuleixing"' +":"+ '"' + this.kouchuleixing + '"' +","
		 + '"kouchushuliang"' +":"+ '"' + this.kouchushuliang + '"' +"," 
		 + '"jianglileixing"' +":"+ '"' + this.jianglileixing + '"' +","
		 + '"jianglishuliang"' +":"+ '"' + this.jianglishuliang + '"' +","
		 + '"beishu"' +":"+ '"' + beishu + '"' +","
		 + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
	}

	public guanbijiangli(){
		Gameguanli.Kongzhitai().dingbuui.removeChild(this.jianglijiemian);
	}


	public chufadianpu2(){
		
	}

	public chufadianpu3(){
		
	}

	public chufadianpu4(){
		
	}

	public chufadianpu5(){
		
	}

	public chufadianpu6(){
		
	}

	public chufadianpu7(){
		
	}

	public chufadianpu8(){
		
	}

	public chufadianpu9(){
		
	}

	public chufadianpu10(){
		
	}

	public chufadianpu11(){
		
	}

	public chufadianpu12(){
		
	}

	public chufadianpu13(){
		
	}

	public chufadianpu14(){
		
	}

	public chufadianpu15(){
		
	}

	public chufadianpu16(){
		
	}

	public chufadianpu17(){
		
	}

	public chufadianpu18(){
		
	}

	public chufadianpu19(){
		
	}

	public chufadianpu20(){
		
	}

	public chufadianpu21(){
		
	}

	public chufadianpu22(){
		
	}

	public chufadianpu23(){
		
	}

	public chufadianpu24(){
		
	}

	public chufadianpu25(){
		
	}

	public chufadianpu26(){
		
	}


	

	
	
}
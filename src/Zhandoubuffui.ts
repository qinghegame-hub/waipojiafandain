class Zhandoubuffui extends eui.Component implements  eui.UIComponent {
	public gerenshuxingjieshaozu:eui.Group;
	public img_heisezhezao0:eui.Image;
	public img_tongyongpinghejiemianpng0:eui.Image;
	public biaotiwenzi0:eui.Label;
	public guanbianniu0:eui.Button;
	public yitiaoshuju:eui.Group;
	public jinengtu:eui.Image;
	public jinengmingcheng:eui.Label;
	public shengyuhuiheshu:eui.Label;
	public chixuhuihe:eui.Label;
	public xiaoguo:eui.Label;
	public jinengshuoming:eui.Label;
	public yitiaoshuju0:eui.Group;
	public jinengtu0:eui.Image;
	public jinengmingcheng0:eui.Label;
	public shengyuhuiheshu0:eui.Label;
	public chixuhuihe0:eui.Label;
	public xiaoguo0:eui.Label;
	public jinengshuoming0:eui.Label;
	public yitiaoshuju1:eui.Group;
	public jinengtu1:eui.Image;
	public jinengmingcheng1:eui.Label;
	public shengyuhuiheshu1:eui.Label;
	public chixuhuihe1:eui.Label;
	public xiaoguo1:eui.Label;
	public jinengshuoming1:eui.Label;
	public yitiaoshuju2:eui.Group;
	public jinengtu2:eui.Image;
	public jinengmingcheng2:eui.Label;
	public shengyuhuiheshu2:eui.Label;
	public chixuhuihe2:eui.Label;
	public xiaoguo2:eui.Label;
	public jinengshuoming2:eui.Label;
	public yitiaoshuju3:eui.Group;
	public jinengtu3:eui.Image;
	public jinengmingcheng3:eui.Label;
	public shengyuhuiheshu3:eui.Label;
	public chixuhuihe3:eui.Label;
	public xiaoguo3:eui.Label;
	public jinengshuoming3:eui.Label;
	public yitiaoshuju4:eui.Group;
	public jinengtu4:eui.Image;
	public jinengmingcheng4:eui.Label;
	public shengyuhuiheshu4:eui.Label;
	public chixuhuihe4:eui.Label;
	public xiaoguo4:eui.Label;
	public jinengshuoming4:eui.Label;
	public yitiaoshuju5:eui.Group;
	public jinengtu5:eui.Image;
	public jinengmingcheng5:eui.Label;
	public shengyuhuiheshu5:eui.Label;
	public chixuhuihe5:eui.Label;
	public xiaoguo5:eui.Label;
	public jinengshuoming5:eui.Label;
	public yitiaoshuju6:eui.Group;
	public jinengtu6:eui.Image;
	public jinengmingcheng6:eui.Label;
	public shengyuhuiheshu6:eui.Label;
	public chixuhuihe6:eui.Label;
	public xiaoguo6:eui.Label;
	public jinengshuoming6:eui.Label;
	public yitiaoshuju7:eui.Group;
	public jinengtu7:eui.Image;
	public jinengmingcheng7:eui.Label;
	public shengyuhuiheshu7:eui.Label;
	public chixuhuihe7:eui.Label;
	public xiaoguo7:eui.Label;
	public jinengshuoming7:eui.Label;
	public yitiaoshuju8:eui.Group;
	public jinengtu8:eui.Image;
	public jinengmingcheng8:eui.Label;
	public shengyuhuiheshu8:eui.Label;
	public chixuhuihe8:eui.Label;
	public xiaoguo8:eui.Label;
	public jinengshuoming8:eui.Label;





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

	public chushihua(xuhao:number,mingzi:string,huiheshu:string,tupian:string,jinengshuoming:string){
		switch(xuhao){
			case 0:
				this.jinengtu.source = tupian;
				this.jinengmingcheng.text = mingzi;
				this.shengyuhuiheshu.text = huiheshu;
				this.chixuhuihe.text = "剩余回合:";
				this.xiaoguo.text = "效果:";
				this.jinengshuoming.text = jinengshuoming;
				break;
			case 1:
				this.jinengtu0.source = tupian;
				this.jinengmingcheng0.text = mingzi;
				this.shengyuhuiheshu0.text = huiheshu;
				this.chixuhuihe0.text = "剩余回合:";
				this.xiaoguo0.text = "效果:";
				this.jinengshuoming0.text = jinengshuoming;
				break;
			case 2:
				this.jinengtu1.source = tupian;
				this.jinengmingcheng1.text = mingzi;
				this.shengyuhuiheshu1.text = huiheshu;
				this.chixuhuihe1.text = "剩余回合:";
				this.xiaoguo1.text = "效果:";
				this.jinengshuoming1.text = jinengshuoming;
				break;
			case 3:
				this.jinengtu2.source = tupian;
				this.jinengmingcheng2.text = mingzi;
				this.shengyuhuiheshu2.text = huiheshu;
				this.chixuhuihe2.text = "剩余回合:";
				this.xiaoguo2.text = "效果:";
				this.jinengshuoming2.text = jinengshuoming;
				break;
			case 4:
				this.jinengtu3.source = tupian;
				this.jinengmingcheng3.text = mingzi;
				this.shengyuhuiheshu3.text = huiheshu;
				this.chixuhuihe3.text = "剩余回合:";
				this.xiaoguo3.text = "效果:";
				this.jinengshuoming3.text = jinengshuoming;
				break;
			case 5:
				this.jinengtu4.source = tupian;
				this.jinengmingcheng4.text = mingzi;
				this.shengyuhuiheshu4.text = huiheshu;
				this.chixuhuihe4.text = "剩余回合:";
				this.xiaoguo4.text = "效果:";
				this.jinengshuoming4.text = jinengshuoming;
				break;
			case 6:
				this.jinengtu5.source = tupian;
				this.jinengmingcheng5.text = mingzi;
				this.shengyuhuiheshu5.text = huiheshu;
				this.chixuhuihe5.text = "剩余回合:";
				this.xiaoguo5.text = "效果:";
				this.jinengshuoming5.text = jinengshuoming;
				break;
			case 7:
				this.jinengtu6.source = tupian;
				this.jinengmingcheng6.text = mingzi;
				this.shengyuhuiheshu6.text = huiheshu;
				this.chixuhuihe6.text = "剩余回合:";
				this.xiaoguo6.text = "效果:";
				this.jinengshuoming6.text = jinengshuoming;
				break;
			case 8:
				this.jinengtu7.source = tupian;
				this.jinengmingcheng7.text = mingzi;
				this.shengyuhuiheshu7.text = huiheshu;
				this.chixuhuihe7.text = "剩余回合:";
				this.xiaoguo7.text = "效果:";
				this.jinengshuoming7.text = jinengshuoming;
				break;
			case 9:
				this.jinengtu8.source = tupian;
				this.jinengmingcheng8.text = mingzi;
				this.shengyuhuiheshu8.text = huiheshu;
				this.chixuhuihe8.text = "剩余回合:";
				this.xiaoguo8.text = "效果:";
				this.jinengshuoming8.text = jinengshuoming;
				break;
		}
	}

	
	
}
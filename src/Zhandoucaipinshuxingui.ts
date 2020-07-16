class Zhandoucaipinshuxingui extends eui.Component implements  eui.UIComponent {
	public caipinshuxingzu:eui.Group;
	public img_heisezhezao0:eui.Image;
	public img_tongyongpinghejiemianpng0:eui.Image;
	public zhezaodikuang:eui.Image;
	public zhezaodikuang0:eui.Image;
	public zhezaodikuang2:eui.Image;
	public zhezaodikuang3:eui.Image;
	public zhezaodikuang1:eui.Image;
	public biaotiwenzi0:eui.Label;
	public nicheng0:eui.Label;
	public nichengwenzi0:eui.Label;
	public cunhuo0:eui.Label;
	public cunhuoshijian0:eui.Label;
	public xingfudengji0:eui.Label;
	public xingfuzhi0:eui.Label;
	public shuxingzhi0:eui.Label;
	public laxijingtong0:eui.Image;
	public laxizhi0:eui.Label;
	public maxijingtong0:eui.Image;
	public maxizhi0:eui.Label;
	public suanxijingtong0:eui.Image;
	public suanxizhi0:eui.Label;
	public tianxijingtong0:eui.Image;
	public tianxizhi0:eui.Label;
	public guanbianniu0:eui.Button;
	public caiicondizhi:eui.Image;
	public jinengtu:eui.Image;
	public jinengtu0:eui.Image;
	public jinengtu1:eui.Image;
	public jinengtu2:eui.Image;
	public jinengtu3:eui.Image;
	public jinengtips:eui.Label;
	public jinengmingzi:eui.Label;
	public cailiaotu:eui.Image;
	public cailiaotu0:eui.Image;
	public cailiaotu1:eui.Image;
	public cailiaotu2:eui.Image;



	public caidejineng1_9:string;
	public caidejineng1_10:string;
	public caidejineng1_11:string;
	public caidejineng1_12:string;
	public caidejineng1_13:string;

	public caidejinengwenzi1_9:any;
	public caidejinengwenzi1_10:any;
	public caidejinengwenzi1_11:any;
	public caidejinengwenzi1_12:any;
	public caidejinengwenzi1_13:any;

	public caideshuxing1_1:string;
	public caideshuxing1_2:string;
	public caideshuxing1_3:string;
	public caideshuxing1_4:string;
	public caideshuxing1_5:string;
	public caideshuxing1_6:string;

	public caidejinengtupian1_9:string;
	public caidejinengtupian1_10:string;
	public caidejinengtupian1_11:string;
	public caidejinengtupian1_12:string;
	public caidejinengtupian1_13:string;

	public caidejinengmingzi1_9:string;
	public caidejinengmingzi1_10:string;
	public caidejinengmingzi1_11:string;
	public caidejinengmingzi1_12:string;
	public caidejinengmingzi1_13:string;







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

	public chushihua(caiid:string,qidianshu:number){
		let shipubiao = Gerenshuxing.shipubiao;
		for(var i = 0;i<shipubiao.length;i++){
			if(shipubiao[i].id == caiid){
				this.caiicondizhi.source = shipubiao[i].id + "_png";  //菜的图片
				this.nichengwenzi0.text = shipubiao[i].foodName;  //菜的名字
				break;
			}
		}
		let duqudengji1 = Gerencaipudengji.caipulevel;
		let caipudengjishuju = Gerenshuxing.shipudengjibiao;
		let shengjisuoxujingyan = 0;
		let benjijiacheng = 0;
		let benjiweili = 0;
		let xiajijiacheng = 0;
		let xiajiweili = 0;
		let caidedengji:any = 0;
		for(var g in duqudengji1){
            if(g == caiid){
				for(var k = 0;k<caipudengjishuju.length;k++){
					if(duqudengji1[g][0] == caipudengjishuju[k].id){
						shengjisuoxujingyan = parseFloat(caipudengjishuju[k].levelexp);
						benjijiacheng = parseFloat(caipudengjishuju[k].selladd);
						benjiweili = parseFloat(caipudengjishuju[k].atcadd);
						if(parseInt(duqudengji1[g][0]) < 20){
							xiajijiacheng = caipudengjishuju[k+1].selladd;
							xiajiweili = caipudengjishuju[k+1].atcadd;
						}else{
							xiajijiacheng = 0;
							xiajiweili = 0;
						}
					}
				}
				caidedengji = duqudengji1[g][0];  //菜的等级
				this.cunhuoshijian0.text = caidedengji + "";//菜的等级
            }
        }
		//计算消耗配料显示显示
		switch(qidianshu){
			case 1:
				this.cailiaotu.source = "img_tiaoliaoicon_png";
				this.cailiaotu0.source = "";
				this.cailiaotu1.source = "";
				this.cailiaotu2.source = "";
				break;
			case 2:
				this.cailiaotu.source = "img_tiaoliaoicon_png";
				this.cailiaotu0.source = "img_tiaoliaoicon_png";
				this.cailiaotu1.source = "";
				this.cailiaotu2.source = "";
				break;
			case 3:
				this.cailiaotu.source = "img_tiaoliaoicon_png";
				this.cailiaotu0.source = "img_tiaoliaoicon_png";
				this.cailiaotu1.source = "img_tiaoliaoicon_png";
				this.cailiaotu2.source = "";
				break;
			case 4:
				this.cailiaotu.source = "img_tiaoliaoicon_png";
				this.cailiaotu0.source = "img_tiaoliaoicon_png";
				this.cailiaotu1.source = "img_tiaoliaoicon_png";
				this.cailiaotu2.source = "img_tiaoliaoicon_png";
				break;

		}
		//计算等级与属性显示
		let chushilazhi = 0;
		let zuizhonglazhi = 0;
		let fujialazhi = 0;
		let chushimazhi = 0;
		let zuizhongmazhi = 0;
		let fujiamazhi = 0;
		let chushisuanzhi = 0;
		let zuizhongsuanzhi = 0;
		let fujiasuanzhi = 0;
		let chushitianzhi = 0;
		let zuizhongtianzhi = 0;
		let fujiatianzhi = 0;
		let jingjinla = 0;
		let jingjinma = 0;
		let jingjinsuan = 0;
		let jingjintian = 0;
		for(var h = 0;h<Gerenshuxing.caipushuxingbiao.length;h++){
			if(Gerenshuxing.caipushuxingbiao[h].id == caiid){
				chushilazhi = parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].laxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * parseInt(caidedengji);
				chushimazhi = parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].maxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * parseInt(caidedengji);
				chushisuanzhi = parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].suanxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * parseInt(caidedengji);
				chushitianzhi = parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) + parseInt(Gerenshuxing.caipushuxingbiao[h].tianxi) * parseFloat(Gerenshuxing.caipushuxingbiao[h].chengzhanglv) * parseInt(caidedengji);
				for(var o in Gerencaipudengji.caipulevel){
					if(o == caiid){
						this.caidejineng1_9 = Gerencaipudengji.caipulevel[o][6];
						this.caidejineng1_10 = Gerencaipudengji.caipulevel[o][7];
						this.caidejineng1_11 = Gerencaipudengji.caipulevel[o][8];
						this.caidejineng1_12 = Gerencaipudengji.caipulevel[o][9];
						this.caidejineng1_13 = Gerencaipudengji.caipulevel[o][10];
						fujialazhi =  Math.floor(chushilazhi * parseInt(Gerencaipudengji.caipulevel[o][2]) / 100);
						fujiamazhi =  Math.floor(chushimazhi * parseInt(Gerencaipudengji.caipulevel[o][3]) / 100);
						fujiasuanzhi = Math.floor(chushisuanzhi * parseInt(Gerencaipudengji.caipulevel[o][4]) / 100);
						fujiatianzhi =  Math.floor(chushitianzhi * parseInt(Gerencaipudengji.caipulevel[o][5]) / 100);
						jingjinla = Gerencaipudengji.caipulevel[o][2];
						jingjinma = Gerencaipudengji.caipulevel[o][3];
						jingjinsuan = Gerencaipudengji.caipulevel[o][4];
						jingjintian = Gerencaipudengji.caipulevel[o][5];
						break;
					}
				}
				break;
			}
		}
		chushilazhi = Math.floor(chushilazhi);
		chushimazhi = Math.floor(chushimazhi);
		chushisuanzhi = Math.floor(chushisuanzhi);
		chushitianzhi = Math.floor(chushitianzhi);
		zuizhonglazhi = chushilazhi + fujialazhi;
		zuizhongmazhi = chushimazhi + fujiamazhi;
		zuizhongsuanzhi = chushisuanzhi + fujiasuanzhi;
		zuizhongtianzhi = chushitianzhi + fujiatianzhi;
		this.maxizhi0.text = ""  + zuizhongmazhi;
		this.laxizhi0.text = ""  + zuizhonglazhi;
		this.tianxizhi0.text = ""  + zuizhongtianzhi;
		this.suanxizhi0.text = ""  + zuizhongsuanzhi;

		//下面计算技能
		for(var j =0;j<Gerenshuxing.jinengbiao.length;j++){
			if(Gerenshuxing.jinengbiao[j].id == this.caidejineng1_9){
				this.caidejinengtupian1_9 = Gerenshuxing.jinengbiao[j].jinengicon;
				this.caidejinengmingzi1_9 = Gerenshuxing.jinengbiao[j].mingcheng;
				this.caidejinengwenzi1_9 = Gerenshuxing.jinengbiao[j].tips;
				let jinengjiachengzhi1_9 = 0;
				if(this.caidejineng1_9 == "20001"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20002"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20003"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20004"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20005"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20006"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20009"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20010"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20011"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20012"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20013"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20014"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20015"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20016"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20017"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20018"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20019"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20021"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20022"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20023"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}else if(this.caidejineng1_9 == "20024"){
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9.split("&1");
					jinengjiachengzhi1_9 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_9 = Math.floor(jinengjiachengzhi1_9);
					this.caidejinengwenzi1_9 = this.caidejinengwenzi1_9[0] + jinengjiachengzhi1_9 + this.caidejinengwenzi1_9[1];
				}
			}
			if(Gerenshuxing.jinengbiao[j].id == this.caidejineng1_10){
				this.caidejinengtupian1_10 = Gerenshuxing.jinengbiao[j].jinengicon;
				this.caidejinengmingzi1_10 = Gerenshuxing.jinengbiao[j].mingcheng;
				this.caidejinengwenzi1_10 = Gerenshuxing.jinengbiao[j].tips;
				let jinengjiachengzhi1_10 = 0;
				if(this.caidejineng1_10 == "20001"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20002"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20003"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20004"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20005"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20006"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20009"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20010"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20011"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20012"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20013"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20014"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20015"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20016"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20017"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20018"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20019"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20021"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20022"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20023"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}else if(this.caidejineng1_10 == "20024"){
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10.split("&1");
					jinengjiachengzhi1_10 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_10 = Math.floor(jinengjiachengzhi1_10);
					this.caidejinengwenzi1_10 = this.caidejinengwenzi1_10[0] + jinengjiachengzhi1_10 + this.caidejinengwenzi1_10[1];
				}
			}
			if(Gerenshuxing.jinengbiao[j].id == this.caidejineng1_11){
				this.caidejinengtupian1_11 = Gerenshuxing.jinengbiao[j].jinengicon;
				this.caidejinengmingzi1_11 = Gerenshuxing.jinengbiao[j].mingcheng;
				this.caidejinengwenzi1_11 = Gerenshuxing.jinengbiao[j].tips;
				let jinengjiachengzhi1_11 = 0;
				if(this.caidejineng1_11 == "20001"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20002"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20003"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20004"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20005"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20006"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20009"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20010"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20011"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20012"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20013"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20014"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20015"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20016"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20017"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20018"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20019"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20021"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20022"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20023"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}else if(this.caidejineng1_11 == "20024"){
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11.split("&1");
					jinengjiachengzhi1_11 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_11 = Math.floor(jinengjiachengzhi1_11);
					this.caidejinengwenzi1_11 = this.caidejinengwenzi1_11[0] + jinengjiachengzhi1_11 + this.caidejinengwenzi1_11[1];
				}
			}
			if(Gerenshuxing.jinengbiao[j].id == this.caidejineng1_12){
				this.caidejinengmingzi1_12 = Gerenshuxing.jinengbiao[j].mingcheng;
				this.caidejinengtupian1_12 = Gerenshuxing.jinengbiao[j].jinengicon;
				this.caidejinengwenzi1_12 = Gerenshuxing.jinengbiao[j].tips;
				let jinengjiachengzhi1_12 = 0;
				if(this.caidejineng1_12 == "20001"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20002"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20003"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20004"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20005"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20006"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20009"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20010"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20011"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20012"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20013"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20014"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20015"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20016"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20017"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20018"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20019"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20021"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20022"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20023"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}else if(this.caidejineng1_12 == "20024"){
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12.split("&1");
					jinengjiachengzhi1_12 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_12 = Math.floor(jinengjiachengzhi1_12);
					this.caidejinengwenzi1_12 = this.caidejinengwenzi1_12[0] + jinengjiachengzhi1_12 + this.caidejinengwenzi1_12[1];
				}
			}
			if(Gerenshuxing.jinengbiao[j].id == this.caidejineng1_13){
				this.caidejinengmingzi1_13 = Gerenshuxing.jinengbiao[j].mingcheng;
				this.caidejinengtupian1_13 = Gerenshuxing.jinengbiao[j].jinengicon;
				this.caidejinengwenzi1_13 = Gerenshuxing.jinengbiao[j].tips;
				let jinengjiachengzhi1_13 = 0;
				if(this.caidejineng1_13 == "20001"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20002"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20003"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20004"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20005"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20006"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20009"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20010"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20011"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20012"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20013"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20014"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20015"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20016"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20017"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20018"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20019"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20021"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongsuanzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20022"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongmazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20023"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhongtianzhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}else if(this.caidejineng1_13 == "20024"){
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13.split("&1");
					jinengjiachengzhi1_13 = parseInt(Gerenshuxing.jinengbiao[j].chushizhi) + zuizhonglazhi * parseFloat(Gerenshuxing.jinengbiao[j].jiacheng);
					jinengjiachengzhi1_13 = Math.floor(jinengjiachengzhi1_13);
					this.caidejinengwenzi1_13 = this.caidejinengwenzi1_13[0] + jinengjiachengzhi1_13 + this.caidejinengwenzi1_13[1];
				}
			}
		}

		////////////////
		this.jinengtu.source = this.caidejinengtupian1_9;
		this.jinengtu0.source = this.caidejinengtupian1_10;
		this.jinengtu1.source = this.caidejinengtupian1_11;
		this.jinengtu2.source = this.caidejinengtupian1_12;
		this.jinengtu3.source = this.caidejinengtupian1_13;
		this.jinengtips.text = this.caidejinengwenzi1_9;
		this.jinengmingzi.text = this.caidejinengmingzi1_9;
		this.jinengtu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.di1gecaidi1jineng,this);
		this.jinengtu0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.di1gecaidi2jineng,this);
		this.jinengtu1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.di1gecaidi3jineng,this);
		this.jinengtu2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.di1gecaidi4jineng,this);
		this.jinengtu3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.di1gecaidi5jineng,this);



	}

	public di1gecaidi1jineng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.jinengmingzi.text = this.caidejinengmingzi1_9;
		this.jinengtips.text = this.caidejinengwenzi1_9;
	}

	public di1gecaidi2jineng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.jinengmingzi.text = this.caidejinengmingzi1_10;
		this.jinengtips.text = this.caidejinengwenzi1_10;
	}

	public di1gecaidi3jineng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.jinengmingzi.text = this.caidejinengmingzi1_11;
		this.jinengtips.text = this.caidejinengwenzi1_11;
	}

	public di1gecaidi4jineng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.jinengmingzi.text = this.caidejinengmingzi1_12;
		this.jinengtips.text = this.caidejinengwenzi1_12;
	}

	public di1gecaidi5jineng(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		this.jinengmingzi.text = this.caidejinengmingzi1_13;
		this.jinengtips.text = this.caidejinengwenzi1_13;
	}
	
}
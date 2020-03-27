class Timeguanli extends egret.DisplayObjectContainer{
	public constructor() {
		super()
	}

	public static jisuanshijian(){
		//当前小时数计算
		Gerenshuxing.xianshishijian =  Gerenshuxing.shijian % 24;
		//计算每天家庭成员是否回家
		if(Gerenshuxing.xianshishijian >= 18 && Gerenshuxing.xianshishijian <= 24){
			this.daerzihuijia();
		}
		if(Gerenshuxing.xianshishijian >= 16 && Gerenshuxing.xianshishijian <= 24){
			this.sunnvhuijia();
		}
		if(Gerenshuxing.xianshishijian >= 18 && Gerenshuxing.xianshishijian <= 24){
			this.xifuhuijia();
		}
		if(Gerenshuxing.xianshishijian >= 10 && Gerenshuxing.xianshishijian <= 24 && Gerenshuxing.ererzixinxi[3] == 0){
			this.ererzihuijia();
		}
		if(Gerenshuxing.xianshishijian == 8){
			this.jiatingchengyuanlijia();
		}
		//当前日期计算
		Gerenshuxing.riqi = Math.floor((Gerenshuxing.shijian / 24) % 30 +1);
		//当前月份计算
		Gerenshuxing.yuefen = Math.floor((Gerenshuxing.shijian / 24 / 30) % 12) + 1;
		//当前第几年计算
		Gerenshuxing.nian = Math.floor(Gerenshuxing.shijian / (24 * 365))  + 1;
		//当前天气计算
		let tianqijilv:number = Math.floor(Math.random() * 10);
		if(tianqijilv <= 4){
			let tianqibiangeng = Math.floor(Math.random() * 10);
			if(Gerenshuxing.yuefen == 0 || Gerenshuxing.yuefen == 1 || Gerenshuxing.yuefen == 2){
				if(tianqibiangeng >= 0 && tianqibiangeng < 5){
					Gerenshuxing.dangqiantianqi = 3;
				}else if(tianqibiangeng >= 5 && tianqibiangeng < 8){
					Gerenshuxing.dangqiantianqi = 1;
				}else{
					Gerenshuxing.dangqiantianqi = 2;
				}
			}else if(Gerenshuxing.yuefen == 3 || Gerenshuxing.yuefen == 4 || Gerenshuxing.yuefen == 5){
				if(tianqibiangeng >= 0 && tianqibiangeng < 5){
					Gerenshuxing.dangqiantianqi = 2;
				}else if(tianqibiangeng >= 5 && tianqibiangeng < 8){
					Gerenshuxing.dangqiantianqi = 1;
				}else{
					Gerenshuxing.dangqiantianqi = 3;
				}
			}else if(Gerenshuxing.yuefen == 6 || Gerenshuxing.yuefen == 7 || Gerenshuxing.yuefen == 8){
				if(tianqibiangeng >= 0 && tianqibiangeng < 6){
					Gerenshuxing.dangqiantianqi = 2;
				}else if(tianqibiangeng >= 6 && tianqibiangeng < 10){
					Gerenshuxing.dangqiantianqi = 1;
				}else{
					Gerenshuxing.dangqiantianqi = 3;
				}
			}else if(Gerenshuxing.yuefen == 9 || Gerenshuxing.yuefen == 10 || Gerenshuxing.yuefen == 11){
				if(tianqibiangeng >= 0 && tianqibiangeng < 5){
					Gerenshuxing.dangqiantianqi = 2;
				}else if(tianqibiangeng >= 5 && tianqibiangeng < 10){
					Gerenshuxing.dangqiantianqi = 1;
				}else{
					Gerenshuxing.dangqiantianqi = 3;
				}
			}
		}
		if(Gameguanli.Kongzhitai().zhujiemian.parent){
			this.fandianshijiankongzhi();
		}
		Gameguanli.Kongzhitai().dingbuui.dingbuchushihua();
		Gerenshuxing.yuangongshuxing();
	}

	public static fandianshijiankongzhi(){
		let tianqihanhua:string = "";
//通过天气增加的客流量
		switch(Gerenshuxing.dangqiantianqi){
			case 1:
				Gerenshuxing.tqkeliuliang = 120;
				tianqihanhua = "晴空万里，客流量增加：20%";
				break;
			case 2:
				Gerenshuxing.tqkeliuliang = 90;
				tianqihanhua = "阴雨绵绵，客流量减少：10%";
				break;
			case 3:
				Gerenshuxing.tqkeliuliang = 80;
				tianqihanhua = "大雪纷飞，客流量减少：20%";
				break;
			default:
				Gerenshuxing.tqkeliuliang = 100;
				tianqihanhua = "阴天时分，客流量增加：0%";
				break;
			}

//通过时间增加的客流量
		switch(Gerenshuxing.xianshishijian){
			case 0:
				Gerenshuxing.sjkeliuliang = 80;
				Gameguanli.Kongzhitai().xiamiantishi("深夜将至，客流量减少：20%    " + tianqihanhua);
				break;
			case 1:
				Gerenshuxing.sjkeliuliang = 70;
				Gameguanli.Kongzhitai().xiamiantishi("深夜已至，客流量减少：30%    " + tianqihanhua);
				break;
			case 2:
				Gerenshuxing.sjkeliuliang = 60;
				Gameguanli.Kongzhitai().xiamiantishi("夜深人静，客流量减少：40%    " + tianqihanhua);
				break;
			case 3:
				Gerenshuxing.sjkeliuliang = 50;
				Gameguanli.Kongzhitai().xiamiantishi("酣睡时分，客流量减少：50%    " + tianqihanhua);
				break;
			case 4:
				Gerenshuxing.sjkeliuliang = 40;
				Gameguanli.Kongzhitai().xiamiantishi("后夜至深，客流量减少：60%    " + tianqihanhua);
				break;
			case 5:
				Gerenshuxing.sjkeliuliang = 50;
				Gameguanli.Kongzhitai().xiamiantishi("凌晨时分，客流量减少：50%    " + tianqihanhua);
				break;
			case 6:
				Gerenshuxing.sjkeliuliang = 60;
				Gameguanli.Kongzhitai().xiamiantishi("鸡鸣日出，客流量减少：20%    " + tianqihanhua);
				break;
			case 7:
				Gerenshuxing.sjkeliuliang = 70;
				Gameguanli.Kongzhitai().xiamiantishi("日出东方，客流量减少：20%    " + tianqihanhua);
				break;
			case 8:
				Gerenshuxing.sjkeliuliang = 80;
				Gameguanli.Kongzhitai().xiamiantishi("上班高峰，客流量减少：20%    " + tianqihanhua);
				break;
			case 9:
				Gerenshuxing.sjkeliuliang = 90;
				Gameguanli.Kongzhitai().xiamiantishi("逐梦伊始，客流量减少：10%    " + tianqihanhua);
				break;
			case 10:
				Gerenshuxing.sjkeliuliang = 100;
				Gameguanli.Kongzhitai().xiamiantishi("伏案时刻，客流量减少：0%    " + tianqihanhua);
				break;
			case 11:
				Gerenshuxing.sjkeliuliang = 110;
				Gameguanli.Kongzhitai().xiamiantishi("午间来临，客流量增加：10%    " + tianqihanhua);
				break;
			case 12:
				Gerenshuxing.sjkeliuliang = 120;
				Gameguanli.Kongzhitai().xiamiantishi("午饭时刻，客流量增加：20%    " + tianqihanhua);
				break;
			case 13:
				Gerenshuxing.sjkeliuliang = 120;
				Gameguanli.Kongzhitai().xiamiantishi("正午时刻，客流量增加：20%    " + tianqihanhua);
				break;
			case 14:
				Gerenshuxing.sjkeliuliang = 110;
				Gameguanli.Kongzhitai().xiamiantishi("日照当空，客流量增加：10%    " + tianqihanhua);
				break;
			case 15:
				Gerenshuxing.sjkeliuliang = 100;
				Gameguanli.Kongzhitai().xiamiantishi("伏案时刻，客流量增加：0%    " + tianqihanhua);
				break;
			case 16:
				Gerenshuxing.sjkeliuliang = 100;
				Gameguanli.Kongzhitai().xiamiantishi("伏案时刻，客流量增加：0%    " + tianqihanhua);
				break;
			case 17:
				Gerenshuxing.sjkeliuliang = 110;
				Gameguanli.Kongzhitai().xiamiantishi("下班将至，客流量增加：10%    " + tianqihanhua);
				break;
			case 18:
				Gerenshuxing.sjkeliuliang = 120;
				Gameguanli.Kongzhitai().xiamiantishi("晚饭时刻，客流量增加：20%    " + tianqihanhua);
				break;
			case 19:
				Gerenshuxing.sjkeliuliang = 120;
				Gameguanli.Kongzhitai().xiamiantishi("晚饭时刻，客流量增加：20%    " + tianqihanhua);
				break;
			case 20:
				Gerenshuxing.sjkeliuliang = 120;
				Gameguanli.Kongzhitai().xiamiantishi("晚饭时刻，客流量增加：20%    " + tianqihanhua);
				break;
			case 21:
				Gerenshuxing.sjkeliuliang = 110;
				Gameguanli.Kongzhitai().xiamiantishi("休息时刻，客流量增加：10%    " + tianqihanhua);
				break;
			case 22:
				Gerenshuxing.sjkeliuliang = 100;
				Gameguanli.Kongzhitai().xiamiantishi("夜幕将深，客流量增加：0%    " + tianqihanhua);
				break;
			case 23:
				Gerenshuxing.sjkeliuliang = 90;
				Gameguanli.Kongzhitai().xiamiantishi("归家欲睡，客流量减少：10%    " + tianqihanhua);
				break;
			default:
				Gerenshuxing.sjkeliuliang = 100;
				Gameguanli.Kongzhitai().xiamiantishi("归家欲睡，客流量减少：10%    " + tianqihanhua);
				break;			
		}		
	}

	public static daerzihuijia(){
		if(Gerenshuxing.daerzixinxi[5] == 0){
			let huijiajilv = parseInt(Gerenshuxing.daerzixinxi[0]);
			let suijizhi = Math.floor(Math.random() * 100);
			if(suijizhi <= huijiajilv){
				Gerenshuxing.daerzixinxi[4] = 0;
				Gerenshuxing.daerzixinxi[5] = 1;
				Weblianjie.fasongshuju("code:048","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}
		}
	}

	public static sunnvhuijia(){
		if(Gerenshuxing.sunnvxinxi[5] == 0){
			let huijiajilv1 = parseInt(Gerenshuxing.sunnvxinxi[0]);
			let suijizhi1 = Math.floor(Math.random() * 100);
			if(suijizhi1 <= huijiajilv1){
				Gerenshuxing.sunnvxinxi[4] = 0;
				Gerenshuxing.sunnvxinxi[5] = 1;
				Weblianjie.fasongshuju("code:051","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}
		}
	}

	public static xifuhuijia(){
		if(Gerenshuxing.xifuxinxi[5] == 0){
			let huijiajilv2 = parseInt(Gerenshuxing.xifuxinxi[0]);
			let suijizhi2 = Math.floor(Math.random() * 100);
			if(suijizhi2 <= huijiajilv2){
				Gerenshuxing.xifuxinxi[4] = 0;
				Gerenshuxing.xifuxinxi[5] = 1;
				Weblianjie.fasongshuju("code:050","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}
		}
	}

	public static ererzihuijia(){
		if(Gerenshuxing.ererzixinxi[5] == 0){
			let huijiajilv3 = parseInt(Gerenshuxing.ererzixinxi[0]);
			let suijizhi3 = Math.floor(Math.random() * 100);
			if(suijizhi3 <= huijiajilv3){
				Gerenshuxing.ererzixinxi[4] = 0;
				Gerenshuxing.ererzixinxi[5] = 1;
				Weblianjie.fasongshuju("code:049","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + "}");
			}
		}
	}

	public static jiatingchengyuanlijia(){
		Gerenshuxing.daerzixinxi[5] = 0;
		Gerenshuxing.sunnvxinxi[5] = 0;
		Gerenshuxing.xifuxinxi[5] = 0;
		if(Gerenshuxing.ererzixinxi[3] != 0){
			Gerenshuxing.ererzixinxi[5] = 0;
		}else{
			Gerenshuxing.ererzixinxi[5] = 1;
		}
		Weblianjie.fasongshuju("code:052","{" + '"uid"' + ":"+ '"' + Gerenshuxing.uid + '"' + ","
				+ '"ererzi"' +":"+ '"' + Gerenshuxing.ererzixinxi[5] + '"' +"}");
	}
}
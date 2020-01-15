class Chuangzaolaji extends egret.DisplayObjectContainer{

	public static cunzailaji:any = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	public static xinzu:any = [];
	public static shengchenggeshu:number = 0;

	public constructor() {
		super();
	}

	public static shengchenglaji(num1){
		for(var i = 0;i<=Chuangzaolaji.cunzailaji.length;i++){
			if(Chuangzaolaji.cunzailaji[i] == 1){
				Chuangzaolaji.xinzu[Chuangzaolaji.xinzu.length] = i;
			}
		}
		if(Chuangzaolaji.xinzu.length != 0){
			if(Chuangzaolaji.xinzu.length <= num1){
				this.shengchenggeshu = Chuangzaolaji.xinzu.length;
			}else{
				this.shengchenggeshu = num1;
			}
		}
		for(var j = 0;j<this.shengchenggeshu;j++){
				this.chulixianshiluoji(Chuangzaolaji.xinzu[j]);
		}
	}

	public static chulixianshiluoji(zhi){
		switch(zhi){
			case 0:
				Gameguanli.Kongzhitai().zhujiemian.but_laji0.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji0.enabled = true;
				this.cunzailaji[0] = 0;
				break;
			case 1:
				Gameguanli.Kongzhitai().zhujiemian.but_laji1.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji1.enabled = true;
				this.cunzailaji[1] = 0;
				break;
			case 2:
				Gameguanli.Kongzhitai().zhujiemian.but_laji2.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji2.enabled = true;
				this.cunzailaji[2] = 0;
				break;
			case 3:
				Gameguanli.Kongzhitai().zhujiemian.but_laji3.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji3.enabled = true;
				this.cunzailaji[3] = 0;
				break;
			case 4:
				Gameguanli.Kongzhitai().zhujiemian.but_laji4.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji4.enabled = true;
				this.cunzailaji[4] = 0;
				break;
			case 5:
				Gameguanli.Kongzhitai().zhujiemian.but_laji5.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji5.enabled = true;
				this.cunzailaji[5] = 0;
				break;
			case 6:
				Gameguanli.Kongzhitai().zhujiemian.but_laji6.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji6.enabled = true;
				this.cunzailaji[6] = 0;
				break;
			case 7:
				Gameguanli.Kongzhitai().zhujiemian.but_laji7.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji7.enabled = true;
				this.cunzailaji[7] = 0;
				break;
			case 8:
				Gameguanli.Kongzhitai().zhujiemian.but_laji8.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji8.enabled = true;
				this.cunzailaji[8] = 0;
				break;
			case 9:
				Gameguanli.Kongzhitai().zhujiemian.but_laji9.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji9.enabled = true;
				this.cunzailaji[9] = 0;
				break;
			case 10:
				Gameguanli.Kongzhitai().zhujiemian.but_laji10.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji10.enabled = true;
				this.cunzailaji[10] = 0;
				break;
			case 11:
				Gameguanli.Kongzhitai().zhujiemian.but_laji11.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji11.enabled = true;
				this.cunzailaji[11] = 0;
				break;
			case 12:
				Gameguanli.Kongzhitai().zhujiemian.but_laji12.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji12.enabled = true;
				this.cunzailaji[12] = 0;
				break;
			case 13:
				Gameguanli.Kongzhitai().zhujiemian.but_laji13.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji13.enabled = true;
				this.cunzailaji[13] = 0;
				break;
			case 14:
				Gameguanli.Kongzhitai().zhujiemian.but_laji14.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji14.enabled = true;
				this.cunzailaji[14] = 0;
				break;
			case 15:
				Gameguanli.Kongzhitai().zhujiemian.but_laji15.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji15.enabled = true;
				this.cunzailaji[15] = 0;
				break;
			case 16:
				Gameguanli.Kongzhitai().zhujiemian.but_laji16.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji16.enabled = true;
				this.cunzailaji[16] = 0;
				break;
			case 17:
				Gameguanli.Kongzhitai().zhujiemian.but_laji17.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji17.enabled = true;
				this.cunzailaji[17] = 0;
				break;
			case 18:
				Gameguanli.Kongzhitai().zhujiemian.but_laji18.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji18.enabled = true;
				this.cunzailaji[18] = 0;
				break;
			case 19:
				Gameguanli.Kongzhitai().zhujiemian.but_laji19.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji19.enabled = true;
				this.cunzailaji[19] = 0;
				break;
			case 20:
				Gameguanli.Kongzhitai().zhujiemian.but_laji20.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji20.enabled = true;
				this.cunzailaji[20] = 0;
				break;
			case 21:
				Gameguanli.Kongzhitai().zhujiemian.but_laji21.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji21.enabled = true;
				this.cunzailaji[21] = 0;
				break;
			case 22:
				Gameguanli.Kongzhitai().zhujiemian.but_laji22.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji22.enabled = true;
				this.cunzailaji[22] = 0;
				break;
			case 23:
				Gameguanli.Kongzhitai().zhujiemian.but_laji23.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji23.enabled = true;
				this.cunzailaji[23] = 0;
				break;
			case 24:
				Gameguanli.Kongzhitai().zhujiemian.but_laji24.alpha = 1;
				Gameguanli.Kongzhitai().zhujiemian.but_laji24.enabled = true;
				this.cunzailaji[24] = 0;
				break;
				
		}
	}





















}
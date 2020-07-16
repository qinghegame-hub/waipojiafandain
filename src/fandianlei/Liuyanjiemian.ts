class Liuyanjiemian extends eui.Component implements  eui.UIComponent {
	public liuyanzu:eui.Group;
	public img_heisezhezao0:eui.Image;
	public liuyanzu0:eui.Group;
	public liuyanjiemianzu:eui.Group;
	public img_liuyanbg:eui.Image;
	public img_biaotiliuyan:eui.Image;
	public but_guanbi0:eui.Button;
	public pingjunpinfen:eui.Label;
	public zengjiakoubei:eui.Label;
	public img_haopin:eui.Image;
	public liuyanzhanshi:eui.Scroller;
	public liuyanzhanshizu:eui.Group;
	public gerenliuyan:eui.Group;
	public touxiang:eui.Image;
	public img_touxiangkuang:eui.Image;
	public img_qipaokuang:eui.Image;
	public img_haopintiao:eui.Image;
	public pingluntext:eui.Label;
	public xingming:eui.Label;
	public gerenliuyan0:eui.Group;
	public touxiang0:eui.Image;
	public img_touxiangkuang0:eui.Image;
	public img_qipaokuang0:eui.Image;
	public img_haopintiao0:eui.Image;
	public pingluntext0:eui.Label;
	public xingming0:eui.Label;
	public gerenliuyan1:eui.Group;
	public touxiang1:eui.Image;
	public img_touxiangkuang1:eui.Image;
	public img_qipaokuang1:eui.Image;
	public img_haopintiao1:eui.Image;
	public pingluntext1:eui.Label;
	public xingming1:eui.Label;
	public gerenliuyan2:eui.Group;
	public touxiang2:eui.Image;
	public img_touxiangkuang2:eui.Image;
	public img_qipaokuang2:eui.Image;
	public img_haopintiao2:eui.Image;
	public pingluntext2:eui.Label;
	public xingming2:eui.Label;
	public gerenliuyan3:eui.Group;
	public touxiang3:eui.Image;
	public img_touxiangkuang3:eui.Image;
	public img_qipaokuang3:eui.Image;
	public img_haopintiao3:eui.Image;
	public pingluntext3:eui.Label;
	public xingming3:eui.Label;
	public gerenliuyan4:eui.Group;
	public touxiang4:eui.Image;
	public img_touxiangkuang4:eui.Image;
	public img_qipaokuang4:eui.Image;
	public img_haopintiao4:eui.Image;
	public pingluntext4:eui.Label;
	public xingming4:eui.Label;
	public gerenliuyan5:eui.Group;
	public touxiang5:eui.Image;
	public img_touxiangkuang5:eui.Image;
	public img_qipaokuang5:eui.Image;
	public img_haopintiao5:eui.Image;
	public pingluntext5:eui.Label;
	public xingming5:eui.Label;
	public gerenliuyan6:eui.Group;
	public touxiang6:eui.Image;
	public img_touxiangkuang6:eui.Image;
	public img_qipaokuang6:eui.Image;
	public img_haopintiao6:eui.Image;
	public pingluntext6:eui.Label;
	public xingming6:eui.Label;
	public gerenliuyan7:eui.Group;
	public touxiang7:eui.Image;
	public img_touxiangkuang7:eui.Image;
	public img_qipaokuang7:eui.Image;
	public img_haopintiao7:eui.Image;
	public pingluntext7:eui.Label;
	public xingming7:eui.Label;
	public gerenliuyan8:eui.Group;
	public touxiang8:eui.Image;
	public img_touxiangkuang8:eui.Image;
	public img_qipaokuang8:eui.Image;
	public img_haopintiao8:eui.Image;
	public pingluntext8:eui.Label;
	public xingming8:eui.Label;


	//显示各项留言内容
	public static di1tiaomingzi:string = "";
	public static di1tiaoneirong:string = "";
	public static di1tiaoditu:string = "";
	public static di1tiaotouxiangkuang:string = "";
	public static di1tiaotouxiang:string = "";
	public static di1tiaopingfen:string = "";

	public static di2tiaomingzi:string = "";
	public static di2tiaoneirong:string = "";
	public static di2tiaoditu:string = "";
	public static di2tiaotouxiangkuang:string = "";
	public static di2tiaotouxiang:string = "";
	public static di2tiaopingfen:string = "";

	public static di3tiaomingzi:string = "";
	public static di3tiaoneirong:string = "";
	public static di3tiaoditu:string = "";
	public static di3tiaotouxiangkuang:string = "";
	public static di3tiaotouxiang:string = "";
	public static di3tiaopingfen:string = "";

	public static di4tiaomingzi:string = "";
	public static di4tiaoneirong:string = "";
	public static di4tiaoditu:string = "";
	public static di4tiaotouxiangkuang:string = "";
	public static di4tiaotouxiang:string = "";
	public static di4tiaopingfen:string = "";

	public static di5tiaomingzi:string = "";
	public static di5tiaoneirong:string = "";
	public static di5tiaoditu:string = "";
	public static di5tiaotouxiangkuang:string = "";
	public static di5tiaotouxiang:string = "";
	public static di5tiaopingfen:string = "";

	public static di6tiaomingzi:string = "";
	public static di6tiaoneirong:string = "";
	public static di6tiaoditu:string = "";
	public static di6tiaotouxiangkuang:string = "";
	public static di6tiaotouxiang:string = "";
	public static di6tiaopingfen:string = "";

	public static di7tiaomingzi:string = "";
	public static di7tiaoneirong:string = "";
	public static di7tiaoditu:string = "";
	public static di7tiaotouxiangkuang:string = "";
	public static di7tiaotouxiang:string = "";
	public static di7tiaopingfen:string = "";

	public static di8tiaomingzi:string = "";
	public static di8tiaoneirong:string = "";
	public static di8tiaoditu:string = "";
	public static di8tiaotouxiangkuang:string = "";
	public static di8tiaotouxiang:string = "";
	public static di8tiaopingfen:string = "";

	public static di9tiaomingzi:string = "";
	public static di9tiaoneirong:string = "";
	public static di9tiaoditu:string = "";
	public static di9tiaotouxiangkuang:string = "";
	public static di9tiaotouxiang:string = "";
	public static di9tiaopingfen:string = "";

	public static di10tiaomingzi:string = "";
	public static di10tiaoneirong:string = "";
	public static di10tiaoditu:string = "";
	public static di10tiaotouxiangkuang:string = "";
	public static di10tiaotouxiang:string = "";
	public static di10tiaopingfen:string = "";




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
		this.liuyanzhanshizu.scrollV = 0;
		this.but_guanbi0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dianjiguanbi,this);
		this.pingjunpinfen.text = "综合评分： " + Gerenshuxing.pingjunpinlun;
		this.zengjiakoubei.text = "店铺口碑提升： " + Gerenshuxing.pinglunkoubei;
		if(Gerenshuxing.pingjunpinlun >= 0 && Gerenshuxing.pingjunpinlun <= 1){
			this.img_haopin.source = "img_haopin1_png";
		}else if(Gerenshuxing.pingjunpinlun > 1 && Gerenshuxing.pingjunpinlun <= 2){
			this.img_haopin.source = "img_haopin2_png";
		}else if(Gerenshuxing.pingjunpinlun > 2 && Gerenshuxing.pingjunpinlun <= 3){
			this.img_haopin.source = "img_haopin3_png";
		}else if(Gerenshuxing.pingjunpinlun > 3 && Gerenshuxing.pingjunpinlun <= 4){
			this.img_haopin.source = "img_haopin4_png";
		}else{
			this.img_haopin.source = "img_haopin5_png";
		}

	//计算留言的显示列表内容
				this.xingming.text =  Liuyanjiemian.di1tiaomingzi;
				this.pingluntext.text = Liuyanjiemian.di1tiaoneirong;
				this.img_qipaokuang.source = Liuyanjiemian.di1tiaoditu;
				this.img_touxiangkuang.source = Liuyanjiemian.di1tiaotouxiangkuang;
				this.touxiang.source =  Liuyanjiemian.di1tiaotouxiang;
				this.img_haopintiao.source = Liuyanjiemian.di1tiaopingfen;
				
				this.xingming0.text =  Liuyanjiemian.di2tiaomingzi;
				this.pingluntext0.text = Liuyanjiemian.di2tiaoneirong;
				this.img_qipaokuang0.source = Liuyanjiemian.di2tiaoditu;
				this.img_touxiangkuang0.source = Liuyanjiemian.di2tiaotouxiangkuang;
				this.touxiang0.source =  Liuyanjiemian.di2tiaotouxiang;
				this.img_haopintiao0.source = Liuyanjiemian.di2tiaopingfen;

				this.xingming1.text =  Liuyanjiemian.di3tiaomingzi;
				this.pingluntext1.text = Liuyanjiemian.di3tiaoneirong;
				this.img_qipaokuang1.source = Liuyanjiemian.di3tiaoditu;
				this.img_touxiangkuang1.source = Liuyanjiemian.di3tiaotouxiangkuang;
				this.touxiang1.source =  Liuyanjiemian.di3tiaotouxiang;
				this.img_haopintiao1.source = Liuyanjiemian.di3tiaopingfen;

				this.xingming2.text =  Liuyanjiemian.di4tiaomingzi;
				this.pingluntext2.text = Liuyanjiemian.di4tiaoneirong;
				this.img_qipaokuang2.source = Liuyanjiemian.di4tiaoditu;
				this.img_touxiangkuang2.source = Liuyanjiemian.di4tiaotouxiangkuang;
				this.touxiang2.source =  Liuyanjiemian.di4tiaotouxiang;
				this.img_haopintiao2.source = Liuyanjiemian.di4tiaopingfen;

				this.xingming3.text =  Liuyanjiemian.di5tiaomingzi;
				this.pingluntext3.text = Liuyanjiemian.di5tiaoneirong;
				this.img_qipaokuang3.source = Liuyanjiemian.di5tiaoditu;
				this.img_touxiangkuang3.source = Liuyanjiemian.di5tiaotouxiangkuang;
				this.touxiang3.source =  Liuyanjiemian.di5tiaotouxiang;
				this.img_haopintiao3.source = Liuyanjiemian.di5tiaopingfen;

				this.xingming4.text =  Liuyanjiemian.di6tiaomingzi;
				this.pingluntext4.text = Liuyanjiemian.di6tiaoneirong;
				this.img_qipaokuang4.source = Liuyanjiemian.di6tiaoditu;
				this.img_touxiangkuang4.source = Liuyanjiemian.di6tiaotouxiangkuang;
				this.touxiang4.source =  Liuyanjiemian.di6tiaotouxiang;
				this.img_haopintiao4.source = Liuyanjiemian.di6tiaopingfen;

				this.xingming5.text =  Liuyanjiemian.di7tiaomingzi;
				this.pingluntext5.text = Liuyanjiemian.di7tiaoneirong;
				this.img_qipaokuang5.source = Liuyanjiemian.di7tiaoditu;
				this.img_touxiangkuang5.source = Liuyanjiemian.di7tiaotouxiangkuang;
				this.touxiang5.source =  Liuyanjiemian.di7tiaotouxiang;
				this.img_haopintiao5.source = Liuyanjiemian.di7tiaopingfen;

				this.xingming6.text =  Liuyanjiemian.di8tiaomingzi;
				this.pingluntext6.text = Liuyanjiemian.di8tiaoneirong;
				this.img_qipaokuang6.source = Liuyanjiemian.di8tiaoditu;
				this.img_touxiangkuang6.source = Liuyanjiemian.di8tiaotouxiangkuang;
				this.touxiang6.source =  Liuyanjiemian.di8tiaotouxiang;
				this.img_haopintiao6.source = Liuyanjiemian.di8tiaopingfen;

				this.xingming7.text =  Liuyanjiemian.di9tiaomingzi;
				this.pingluntext7.text = Liuyanjiemian.di9tiaoneirong;
				this.img_qipaokuang7.source = Liuyanjiemian.di9tiaoditu;
				this.img_touxiangkuang7.source = Liuyanjiemian.di9tiaotouxiangkuang;
				this.touxiang7.source =  Liuyanjiemian.di9tiaotouxiang;
				this.img_haopintiao7.source = Liuyanjiemian.di9tiaopingfen;

				this.xingming8.text =  Liuyanjiemian.di10tiaomingzi;
				this.pingluntext8.text = Liuyanjiemian.di10tiaoneirong;
				this.img_qipaokuang8.source = Liuyanjiemian.di10tiaoditu;
				this.img_touxiangkuang8.source = Liuyanjiemian.di10tiaotouxiangkuang;
				this.touxiang8.source =  Liuyanjiemian.di10tiaotouxiang;
				this.img_haopintiao8.source = Liuyanjiemian.di10tiaopingfen;






	}

	protected dianjiguanbi(){
		Gamesound.Soundkongzhi().anniuyinxiao();
		Gameguanli.Kongzhitai().caipujiemian("liuyan","guan");
	}

	public static liuyanneirong(neirong?,mingzi?,pingfen?,touxiang?){
		switch(Gerenshuxing.dangqiandiji){
			case 1:
				Liuyanjiemian.di1tiaomingzi =  mingzi;
				Liuyanjiemian.di1tiaoneirong = neirong;
				Liuyanjiemian.di1tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di1tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di1tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di1tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di1tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di1tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di1tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di1tiaopingfen = "img_haopin5_png";
						break;
				}
				break;
			case 2:
				Liuyanjiemian.di2tiaomingzi =  mingzi;
				Liuyanjiemian.di2tiaoneirong = neirong;
				Liuyanjiemian.di2tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di2tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di2tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di2tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di2tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di2tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di2tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di2tiaopingfen = "img_haopin5_png";
						break;
				}
				break;
			case 3:
				Liuyanjiemian.di3tiaomingzi =  mingzi;
				Liuyanjiemian.di3tiaoneirong = neirong;
				Liuyanjiemian.di3tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di3tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di3tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di3tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di3tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di3tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di3tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di3tiaopingfen = "img_haopin5_png";
						break;
				}
				break;
			case 4:
				Liuyanjiemian.di4tiaomingzi =  mingzi;
				Liuyanjiemian.di4tiaoneirong = neirong;
				Liuyanjiemian.di4tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di4tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di4tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di4tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di4tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di4tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di4tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di4tiaopingfen = "img_haopin5_png";
						break;
				}
				break;
			case 5:
				Liuyanjiemian.di5tiaomingzi =  mingzi;
				Liuyanjiemian.di5tiaoneirong = neirong;
				Liuyanjiemian.di5tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di5tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di5tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di5tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di5tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di5tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di5tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di5tiaopingfen = "img_haopin5_png";
						break;
				}
				break;
			case 6:
				Liuyanjiemian.di6tiaomingzi =  mingzi;
				Liuyanjiemian.di6tiaoneirong = neirong;
				Liuyanjiemian.di6tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di6tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di6tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di6tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di6tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di6tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di6tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di6tiaopingfen = "img_haopin5_png";
						break;
				}
				break;
			case 7:
				Liuyanjiemian.di7tiaomingzi =  mingzi;
				Liuyanjiemian.di7tiaoneirong = neirong;
				Liuyanjiemian.di7tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di7tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di7tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di7tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di7tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di7tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di7tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di7tiaopingfen = "img_haopin5_png";
						break;
				}
				break;
			case 8:
				Liuyanjiemian.di8tiaomingzi =  mingzi;
				Liuyanjiemian.di8tiaoneirong = neirong;
				Liuyanjiemian.di8tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di8tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di8tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di8tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di8tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di8tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di8tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di8tiaopingfen = "img_haopin5_png";
						break;
				}
				break;
			case 9:
				Liuyanjiemian.di9tiaomingzi =  mingzi;
				Liuyanjiemian.di9tiaoneirong = neirong;
				Liuyanjiemian.di9tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di9tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di9tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di9tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di9tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di9tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di9tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di9tiaopingfen = "img_haopin5_png";
						break;
				}
				break;
			case 10:
				Liuyanjiemian.di10tiaomingzi =  mingzi;
				Liuyanjiemian.di10tiaoneirong = neirong;
				Liuyanjiemian.di10tiaoditu = "img_qipaokuang_png";
				Liuyanjiemian.di10tiaotouxiangkuang = "img_touxiangkuang_png";
				Liuyanjiemian.di10tiaotouxiang =  touxiang + "_png";
				switch(pingfen){
					case 1:
						Liuyanjiemian.di10tiaopingfen = "img_haopin1_png";
						break;
					case 2:
						Liuyanjiemian.di10tiaopingfen = "img_haopin2_png";
						break;
					case 3:
						Liuyanjiemian.di10tiaopingfen = "img_haopin3_png";
						break;
					case 4:
						Liuyanjiemian.di10tiaopingfen = "img_haopin4_png";
						break;
					case 5:
						Liuyanjiemian.di10tiaopingfen = "img_haopin5_png";
						break;
				}
				break;	 
		}
	}
	
}
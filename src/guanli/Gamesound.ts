class Gamesound extends egret.DisplayObjectContainer{
	public static soundkongzhi:Gamesound;

	//音效控制器
	public yinxiao:boolean = true;
	public anniuyinxiaobofang:egret.Sound;
	public anniudianjibofang:egret.SoundChannel;

	//背景音控制器
	public beijingyin:boolean = true; 
	public beijingyinxiaobofang:egret.Sound;
	public beijingdianjibofang:egret.SoundChannel;

	public constructor() {
		super();
	}

	public static Soundkongzhi(){
		if(Gamesound.soundkongzhi == null){
			Gamesound.soundkongzhi = new Gamesound();
		}
		return Gamesound.soundkongzhi;
	}

	/*
	普通按钮音效
	*/
	public anniuyinxiao(){
		if(Gamesound.Soundkongzhi().yinxiao == true){
			this.anniuyinxiaobofang = RES.getRes("anniu_mp3");
			this.anniudianjibofang = this.anniuyinxiaobofang.play(0,1);
		}
	}

	/*
	背景音效
	*/
	public beijingyinxiao(){
		if(Gamesound.Soundkongzhi().beijingyin == true){
			this.beijingyinxiaobofang = RES.getRes("beijingyin_mp3");
			this.beijingdianjibofang = this.beijingyinxiaobofang.play(0,-1);
		}
	}

	/*
	控制播放和暂停
	*/
	public bofangzanting(zhuangtai:string){
		if(zhuangtai == "kai"){
			if(this.anniudianjibofang){
				this.anniudianjibofang.stop();
				this.anniudianjibofang = null;
			}
			if(this.beijingdianjibofang){
				this.beijingdianjibofang.stop();
				this.beijingdianjibofang = null;
			}
			Gamesound.Soundkongzhi().yinxiao = true;
			Gamesound.Soundkongzhi().beijingyin = true;
			this.beijingyinxiao();
		}else if(zhuangtai == "guan"){
			if(this.anniudianjibofang){
				this.anniudianjibofang.stop();
				this.anniudianjibofang = null;
			}
			if(this.beijingdianjibofang){
				this.beijingdianjibofang.stop();
				this.beijingdianjibofang = null;
			}
			Gamesound.Soundkongzhi().yinxiao = false;
			Gamesound.Soundkongzhi().beijingyin = false;
			this.beijingyinxiao();
		}


	}




}
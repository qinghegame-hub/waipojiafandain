class Weishenqipao extends egret.DisplayObjectContainer {
	public constructor() {
		super();
	}

	public static weishengbiangeng(num1){
		if(Gameguanli.Kongzhitai().dingbuui.parent){
			let weishengzu = new Weishengtishi();
			Gameguanli.Kongzhitai().dingbuui.addChild(weishengzu);
			let zongx = Gameguanli.Kongzhitai().zhujiemiandingbu.zhuangatizu.x;
			let zongy = Gameguanli.Kongzhitai().zhujiemiandingbu.zhuangatizu.y - Gameguanli.Kongzhitai().zhujiemiandingbu.img_zhuangtaixianshibg.height-weishengzu.height /2;
			weishengzu.x = zongx;
			weishengzu.y = zongy;
			weishengzu.wenzineirong0.text = num1;
			egret.Tween.get(weishengzu).wait(1000).to({x:zongx,y:zongy - 50},2000).call(()=>{
				if(Gameguanli.Kongzhitai().dingbuui.parent){
					Gameguanli.Kongzhitai().dingbuui.removeChild(weishengzu);
				}
			})
		}
        
	}

}
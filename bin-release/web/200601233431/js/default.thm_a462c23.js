window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Zhujiemian":"resource/eui_skins/Zhujiemian.exml","dingbuxinxi":"resource/eui_skins/dingbuxinxi.exml","dibuxinxi":"resource/eui_skins/dibuxinxi.exml","Caipujiemian":"resource/eui_skins/Caipujiemian.exml","Caipucaiping":"resource/eui_skins/Caipucaiping.exml","Caipinjieshaojiemian":"resource/eui_skins/Caipinjieshaojiemian.exml","Guanlijiemian":"resource/eui_skins/Guanlijiemian.exml","Jiajugoumai":"resource/eui_skins/Jiajugoumai.exml","Cuowutishi":"resource/eui_skins/Cuowutishi.exml","Yuangongjiemian":"resource/eui_skins/Yuangongjiemian.exml","Tuiguangchuandan":"resource/eui_skins/Tuiguangchuandan.exml","Tuiguangdianshi":"resource/eui_skins/Tuiguangdianshi.exml","Tuiguangpinglun":"resource/eui_skins/Tuiguangpinglun.exml","Tuiguangdaiyan":"resource/eui_skins/Tuiguangdaiyan.exml","Danjujiemian":"resource/eui_skins/Danjujiemian.exml","Ttoudingqipaojiemian":"resource/eui_skins/Ttoudingqipaojiemian.exml","Zhujiemianshangceng":"resource/eui_skins/Zhujiemianshangceng.exml","Toudingwenzi":"resource/eui_skins/Toudingwenzi.exml","Jinbiwenben":"resource/eui_skins/Jinbiwenben.exml","Saobadonghua":"resource/eui_skins/Saobadonghua.exml","Dasaodonghua":"resource/eui_skins/Dasaodonghua.exml","Cailiaoxiaohao":"resource/eui_skins/Cailiaoxiaohao.exml","Weishengtishi":"resource/eui_skins/Weishengtishi.exml","Xiamiantishi":"resource/eui_skins/Xiamiantishi.exml","Meirijiesuan":"resource/eui_skins/Meirijiesuan.exml","Jinyingguanlijiemian":"resource/eui_skins/waipojiemian/Jinyingguanlijiemian.exml","Tanmujiemian":"resource/eui_skins/Tanmujiemian.exml","Liuyanjiemian":"resource/eui_skins/waipojiemian/Liuyanjiemian.exml","Maicaiui":"resource/eui_skins/waipojiemian/Maicaiui.exml","Changjingrukouui":"resource/eui_skins/waipojiemianChangjingrukouui.exml","Jianglijiesuanui":"resource/eui_skins/waipojiemian/Jianglijiesuanui.exml","Zuofanjiemianui":"resource/eui_skins/waipojiemian/Zuofanjiemianui.exml","Pengrenfankuiui":"resource/eui_skins/waipojiemian/Pengrenfankuiui.exml","Zuocaitanchuui":"resource/eui_skins/waipojiemian/Zuocaitanchuui.exml","Dajiejiemian":"resource/eui_skins/waipojiemian/Dajiejiemian.exml","Dianpurukou":"resource/eui_skins/waipojiemian/Dianpurukou.exml","Tongyongquerenkuang":"resource/eui_skins/waipojiemian/Tongyongquerenkuang.exml","Dianpufandian":"resource/eui_skins/waipojiemian/Dianpufandian.exml","Jiatingui":"resource/eui_skins/waipojiemian/Jiatingui.exml","Daerzijiaohuui":"resource/eui_skins/waipojiemian/Daerzijiaohuui.exml","Ererzijiaohuui":"resource/eui_skins/waipojiemian/Ererzijiaohuui.exml","Xifujiaohuui":"resource/eui_skins/waipojiemian/Xifujiaohuui.exml","Sunnvjiaohuui":"resource/eui_skins/waipojiemian/Sunnvjiaohuui.exml","Jiatingchengyuanjieshaoui":"resource/eui_skins/waipojiemian/Jiatingchengyuanjieshaoui.exml","Npcduihuaui":"resource/eui_skins/waipojiemian/Npcduihuaui.exml","Jiatingchengyuanzengsong":"resource/eui_skins/waipojiemian/Jiatingchengyuanzengsong.exml","Jiatingjinxiuui":"resource/eui_skins/waipojiemian/Jiatingjinxiuui.exml","Jiatingchengyuandaojuui":"resource/eui_skins/waipojiemian/Jiatingchengyuandaojuui.exml","Shafajiaohuui":"resource/eui_skins/waipojiemian/Shafajiaohuui.exml","Chajijiaohuui":"resource/eui_skins/waipojiemian/Chajijiaohuui.exml","Dianshijiaohuui":"resource/eui_skins/waipojiemian/Dianshijiaohuui.exml","Chuangjiaohuui":"resource/eui_skins/waipojiemian/Chuangjiaohuui.exml","Shafadianshidengjiaohuui":"resource/eui_skins/waipojiemian/Shafadianshidengjiaohuui.exml","Waimaijiemian":"resource/eui_skins/waipojiemian/Waimaijiemian.exml","Waimaitishi":"resource/eui_skins/waipojiemian/Waimaitishi.exml","Motuoche":"resource/eui_skins/waipojiemian/Motuoche.exml","Waimaiduihuakuang":"resource/eui_skins/waipojiemian/Waimaiduihuakuang.exml","Paimingbiangengshang":"resource/eui_skins/waipojiemian/Paimingbiangengshang.exml","Paimingbiangengxia":"resource/eui_skins/waipojiemian/Paimingbiangengxia.exml","Paihangbangjiemian":"resource/eui_skins/waipojiemian/Paihangbangjiemian.exml","Dianpuzhaopinui":"resource/eui_skins/waipojiemian/Dianpuzhaopinui.exml","Paomadenggonggao":"resource/eui_skins/waipojiemian/Paomadenggonggao.exml","Chaoshishangdianui":"resource/eui_skins/waipojiemian/Chaoshishangdianui.exml","Daojutipsui":"resource/eui_skins/waipojiemian/Daojutipsui.exml","Gerenshuxingjiemian":"resource/eui_skins/waipojiemian/Gerenshuxingjiemian.exml","Zhandoujiemian":"resource/eui_skins/waipojiemian/Zhandoujiemian.exml","Zhandoubuffui":"resource/eui_skins/waipojiemian/Zhandoubuffui.exml","Zhandoucaipinshuxingui":"resource/eui_skins/waipojiemian/Zhandoucaipinshuxingui.exml","Zhandoupiaozi":"resource/eui_skins/waipojiemian/Zhandoupiaozi.exml","Gerendaojujiemian":"resource/eui_skins/waipojiemian/Gerendaojujiemian.exml","Teshushijianjiemian":"resource/eui_skins/waipojiemian/Teshushijianjiemian.exml","Loadingjiemian":"resource/eui_skins/waipojiemian/Loadingjiemian.exml","Pvebiaozhiui":"resource/eui_skins/waipojiemian/Pvebiaozhiui.exml","Youxitishiui":"resource/eui_skins/waipojiemian/Youxitishiui.exml","QuedingptSkin":"resource/eui_skins/waipojiemian/QuedingptSkin.exml","Daitutanchukuangui":"resource/eui_skins/waipojiemian/Daitutanchukuangui.exml","Fandiandonghuarongqi":"resource/eui_skins/waipojiemian/Fandiandonghuarongqi.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Cailiaoxiaohao.exml'] = window.CailiaoxiaohaoSkin = (function (_super) {
	__extends(CailiaoxiaohaoSkin, _super);
	function CailiaoxiaohaoSkin() {
		_super.call(this);
		this.skinParts = ["wenzineirong","img_shicai","wenzizu"];
		
		this.height = 58;
		this.width = 203;
		this.elementsContent = [this.wenzizu_i()];
	}
	var _proto = CailiaoxiaohaoSkin.prototype;

	_proto.wenzizu_i = function () {
		var t = new eui.Group();
		this.wenzizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.width = 201;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.wenzineirong_i(),this.img_shicai_i()];
		return t;
	};
	_proto.wenzineirong_i = function () {
		var t = new eui.Label();
		this.wenzineirong = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0xF7F7EF;
		t.text = "+ 50";
		t.textAlign = "left";
		t.textColor = 0xED871C;
		t.verticalAlign = "middle";
		t.width = 137;
		t.x = 56.5;
		t.y = 14.5;
		return t;
	};
	_proto.img_shicai_i = function () {
		var t = new eui.Image();
		this.img_shicai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.source = "img_shicai_png";
		t.width = 52;
		t.x = 4;
		t.y = 7.5;
		return t;
	};
	return CailiaoxiaohaoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Caipinjieshaojiemian.exml'] = window.CaipinjieshaojiemianSkin = (function (_super) {
	__extends(CaipinjieshaojiemianSkin, _super);
	var CaipinjieshaojiemianSkin$Skin1 = 	(function (_super) {
		__extends(CaipinjieshaojiemianSkin$Skin1, _super);
		function CaipinjieshaojiemianSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_zhuanfa1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_zhuanfa1_png")
					])
			];
		}
		var _proto = CaipinjieshaojiemianSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_zhuanfa2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipinjieshaojiemianSkin$Skin1;
	})(eui.Skin);

	var CaipinjieshaojiemianSkin$Skin2 = 	(function (_super) {
		__extends(CaipinjieshaojiemianSkin$Skin2, _super);
		function CaipinjieshaojiemianSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_zhizuo1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_zhizuo1_png")
					])
			];
		}
		var _proto = CaipinjieshaojiemianSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_zhizuo2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipinjieshaojiemianSkin$Skin2;
	})(eui.Skin);

	var CaipinjieshaojiemianSkin$Skin3 = 	(function (_super) {
		__extends(CaipinjieshaojiemianSkin$Skin3, _super);
		function CaipinjieshaojiemianSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = CaipinjieshaojiemianSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipinjieshaojiemianSkin$Skin3;
	})(eui.Skin);

	function CaipinjieshaojiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_caipujieshaobg","img_biaoticaipujieshao","caipinmingcheng","biaotizu","but_zhuanfa","but_zhizuo","caipinshuxingzu","jianjie","jinengshuoming","jinengmingzi","caipindeicon","chushoudanjia","lashuxing","mashuxing","suanshuxing","tianshuxing","xiaohaoshicai","img_jindutiaobeijing","img_jindutiaogundong","jinduwenzi","lengjiwenzi","img_laicon","img_maicon","img_suanicon","img_tianicon","jineng1","jineng2","jineng3","jineng4","jineng5","guanbianniu","img_qian","img_shicai","caipinjiemainzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.caipinjiemainzu_i()];
	}
	var _proto = CaipinjieshaojiemianSkin.prototype;

	_proto.caipinjiemainzu_i = function () {
		var t = new eui.Group();
		this.caipinjiemainzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_caipujieshaobg_i(),this.biaotizu_i(),this.but_zhuanfa_i(),this.but_zhizuo_i(),this.caipinshuxingzu_i(),this.jianjie_i(),this.jinengshuoming_i(),this.jinengmingzi_i(),this.caipindeicon_i(),this.chushoudanjia_i(),this.lashuxing_i(),this.mashuxing_i(),this.suanshuxing_i(),this.tianshuxing_i(),this.xiaohaoshicai_i(),this.img_jindutiaobeijing_i(),this.img_jindutiaogundong_i(),this.jinduwenzi_i(),this.lengjiwenzi_i(),this.img_laicon_i(),this.img_maicon_i(),this.img_suanicon_i(),this.img_tianicon_i(),this.jineng1_i(),this.jineng2_i(),this.jineng3_i(),this.jineng4_i(),this.jineng5_i(),this.guanbianniu_i(),this.img_qian_i(),this.img_shicai_i()];
		return t;
	};
	_proto.img_caipujieshaobg_i = function () {
		var t = new eui.Image();
		this.img_caipujieshaobg = t;
		t.horizontalCenter = 0;
		t.source = "img_caipujieshaobg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.biaotizu_i = function () {
		var t = new eui.Group();
		this.biaotizu = t;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -594.5;
		t.elementsContent = [this.img_biaoticaipujieshao_i(),this.caipinmingcheng_i()];
		return t;
	};
	_proto.img_biaoticaipujieshao_i = function () {
		var t = new eui.Image();
		this.img_biaoticaipujieshao = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "img_biaoticaipujieshao_png";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.caipinmingcheng_i = function () {
		var t = new eui.Label();
		this.caipinmingcheng = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x6d6868;
		t.text = "香辣回锅肉啊哈哈";
		t.textAlign = "center";
		t.textColor = 0xf7f4f4;
		t.verticalAlign = "middle";
		t.width = 327;
		t.x = -1;
		t.y = -1.5;
		return t;
	};
	_proto.but_zhuanfa_i = function () {
		var t = new eui.Button();
		this.but_zhuanfa = t;
		t.enabled = true;
		t.horizontalCenter = 275.5;
		t.label = "";
		t.verticalCenter = -420.5;
		t.skinName = CaipinjieshaojiemianSkin$Skin1;
		return t;
	};
	_proto.but_zhizuo_i = function () {
		var t = new eui.Button();
		this.but_zhizuo = t;
		t.enabled = true;
		t.horizontalCenter = 1;
		t.label = "";
		t.verticalCenter = 587;
		t.skinName = CaipinjieshaojiemianSkin$Skin2;
		return t;
	};
	_proto.caipinshuxingzu_i = function () {
		var t = new eui.Group();
		this.caipinshuxingzu = t;
		t.horizontalCenter = 38;
		t.verticalCenter = 118;
		return t;
	};
	_proto.jianjie_i = function () {
		var t = new eui.Label();
		this.jianjie = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 94;
		t.horizontalCenter = 13;
		t.size = 18;
		t.text = "农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.verticalCenter = 435;
		t.width = 496;
		return t;
	};
	_proto.jinengshuoming_i = function () {
		var t = new eui.Label();
		this.jinengshuoming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 66;
		t.horizontalCenter = 9;
		t.size = 18;
		t.text = "农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.verticalCenter = 257;
		t.width = 504;
		return t;
	};
	_proto.jinengmingzi_i = function () {
		var t = new eui.Label();
		this.jinengmingzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 29;
		t.horizontalCenter = -103.5;
		t.size = 18;
		t.text = "基恩闹革命你";
		t.textAlign = "left";
		t.textColor = 0x5ef20e;
		t.verticalAlign = "middle";
		t.verticalCenter = 202.5;
		t.width = 279;
		return t;
	};
	_proto.caipindeicon_i = function () {
		var t = new eui.Image();
		this.caipindeicon = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "1007_png";
		t.x = 247.4;
		t.y = 144.3;
		return t;
	};
	_proto.chushoudanjia_i = function () {
		var t = new eui.Label();
		this.chushoudanjia = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "出售单价：584(+56)";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 179;
		t.x = 197;
		t.y = 540;
		return t;
	};
	_proto.lashuxing_i = function () {
		var t = new eui.Label();
		this.lashuxing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.text = "出售单价：584(+56)";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 190;
		t.x = 194;
		t.y = 586;
		return t;
	};
	_proto.mashuxing_i = function () {
		var t = new eui.Label();
		this.mashuxing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.text = "出售单价：584(+56)";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 190;
		t.x = 194;
		t.y = 632;
		return t;
	};
	_proto.suanshuxing_i = function () {
		var t = new eui.Label();
		this.suanshuxing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.text = "出售单价：584(+56)";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 190;
		t.x = 450;
		t.y = 586;
		return t;
	};
	_proto.tianshuxing_i = function () {
		var t = new eui.Label();
		this.tianshuxing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.text = "出售单价：584(+56)";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 190;
		t.x = 450;
		t.y = 632;
		return t;
	};
	_proto.xiaohaoshicai_i = function () {
		var t = new eui.Label();
		this.xiaohaoshicai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.text = "消耗食材：584";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 179;
		t.x = 452;
		t.y = 540;
		return t;
	};
	_proto.img_jindutiaobeijing_i = function () {
		var t = new eui.Image();
		this.img_jindutiaobeijing = t;
		t.height = 52;
		t.source = "img_jindutiaobeijing_png";
		t.width = 250;
		t.x = 240.37;
		t.y = 395.67;
		return t;
	};
	_proto.img_jindutiaogundong_i = function () {
		var t = new eui.Image();
		this.img_jindutiaogundong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0.5;
		t.height = 26;
		t.source = "img_jindutiaogundong_png";
		t.width = 176;
		t.x = 313.5;
		t.y = 412.02;
		return t;
	};
	_proto.jinduwenzi_i = function () {
		var t = new eui.Label();
		this.jinduwenzi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.text = "(200/18888888)";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.x = 243.5;
		t.y = 379;
		return t;
	};
	_proto.lengjiwenzi_i = function () {
		var t = new eui.Label();
		this.lengjiwenzi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "20";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 31;
		t.x = 258.17;
		t.y = 406;
		return t;
	};
	_proto.img_laicon_i = function () {
		var t = new eui.Image();
		this.img_laicon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.source = "img_laicon_png";
		t.width = 50;
		t.x = 138;
		t.y = 576;
		return t;
	};
	_proto.img_maicon_i = function () {
		var t = new eui.Image();
		this.img_maicon = t;
		t.height = 50;
		t.source = "img_maicon_png";
		t.width = 50;
		t.x = 140;
		t.y = 626;
		return t;
	};
	_proto.img_suanicon_i = function () {
		var t = new eui.Image();
		this.img_suanicon = t;
		t.height = 50;
		t.source = "img_suanicon_png";
		t.width = 50;
		t.x = 400;
		t.y = 576;
		return t;
	};
	_proto.img_tianicon_i = function () {
		var t = new eui.Image();
		this.img_tianicon = t;
		t.height = 50;
		t.source = "img_tianicon_png";
		t.width = 50;
		t.x = 400;
		t.y = 626;
		return t;
	};
	_proto.jineng1_i = function () {
		var t = new eui.Image();
		this.jineng1 = t;
		t.height = 80;
		t.source = "img_bazhenyushijineeng_png";
		t.touchEnabled = true;
		t.width = 80;
		t.x = 118;
		t.y = 750;
		return t;
	};
	_proto.jineng2_i = function () {
		var t = new eui.Image();
		this.jineng2 = t;
		t.height = 80;
		t.source = "img_bazhenyushijineeng_png";
		t.touchEnabled = true;
		t.width = 80;
		t.x = 233.12;
		t.y = 750;
		return t;
	};
	_proto.jineng3_i = function () {
		var t = new eui.Image();
		this.jineng3 = t;
		t.height = 80;
		t.source = "img_bazhenyushijineeng_png";
		t.touchEnabled = true;
		t.width = 80;
		t.x = 347.5;
		t.y = 750;
		return t;
	};
	_proto.jineng4_i = function () {
		var t = new eui.Image();
		this.jineng4 = t;
		t.height = 80;
		t.source = "img_bazhenyushijineeng_png";
		t.touchEnabled = true;
		t.width = 80;
		t.x = 461.75;
		t.y = 750;
		return t;
	};
	_proto.jineng5_i = function () {
		var t = new eui.Image();
		this.jineng5 = t;
		t.height = 80;
		t.source = "img_bazhenyushijineeng_png";
		t.touchEnabled = true;
		t.width = 80;
		t.x = 577;
		t.y = 750;
		return t;
	};
	_proto.guanbianniu_i = function () {
		var t = new eui.Button();
		this.guanbianniu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.label = "";
		t.x = 24;
		t.y = 25.5;
		t.skinName = CaipinjieshaojiemianSkin$Skin3;
		return t;
	};
	_proto.img_qian_i = function () {
		var t = new eui.Image();
		this.img_qian = t;
		t.height = 50;
		t.source = "img_qian_png";
		t.width = 50;
		t.x = 138;
		t.y = 530;
		return t;
	};
	_proto.img_shicai_i = function () {
		var t = new eui.Image();
		this.img_shicai = t;
		t.height = 50;
		t.source = "img_shicai_png";
		t.width = 50;
		t.x = 400;
		t.y = 530;
		return t;
	};
	return CaipinjieshaojiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Caipucaiping.exml'] = window.CaipucaipingSkin = (function (_super) {
	__extends(CaipucaipingSkin, _super);
	var CaipucaipingSkin$Skin4 = 	(function (_super) {
		__extends(CaipucaipingSkin$Skin4, _super);
		function CaipucaipingSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo3_png")
					])
			];
		}
		var _proto = CaipucaipingSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiesuo1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipucaipingSkin$Skin4;
	})(eui.Skin);

	var CaipucaipingSkin$Skin5 = 	(function (_super) {
		__extends(CaipucaipingSkin$Skin5, _super);
		function CaipucaipingSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo3_png")
					])
			];
		}
		var _proto = CaipucaipingSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiesuo1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipucaipingSkin$Skin5;
	})(eui.Skin);

	var CaipucaipingSkin$Skin6 = 	(function (_super) {
		__extends(CaipucaipingSkin$Skin6, _super);
		function CaipucaipingSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo3_png")
					])
			];
		}
		var _proto = CaipucaipingSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiesuo1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipucaipingSkin$Skin6;
	})(eui.Skin);

	var CaipucaipingSkin$Skin7 = 	(function (_super) {
		__extends(CaipucaipingSkin$Skin7, _super);
		function CaipucaipingSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo3_png")
					])
			];
		}
		var _proto = CaipucaipingSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiesuo1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipucaipingSkin$Skin7;
	})(eui.Skin);

	var CaipucaipingSkin$Skin8 = 	(function (_super) {
		__extends(CaipucaipingSkin$Skin8, _super);
		function CaipucaipingSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo3_png")
					])
			];
		}
		var _proto = CaipucaipingSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiesuo1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipucaipingSkin$Skin8;
	})(eui.Skin);

	var CaipucaipingSkin$Skin9 = 	(function (_super) {
		__extends(CaipucaipingSkin$Skin9, _super);
		function CaipucaipingSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiesuo3_png")
					])
			];
		}
		var _proto = CaipucaipingSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiesuo1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipucaipingSkin$Skin9;
	})(eui.Skin);

	function CaipucaipingSkin() {
		_super.call(this);
		this.skinParts = ["img_caipandiban0","caipinicon0","caipinname0","caipinjiagezhi0","jiagetubiao0","but_jiesuo0","img_weihuode0","img_dengjitubiao0","levelwenzi0","caixianshi0","img_caipandiban1","caipinicon1","caipinname1","caipinjiagezhi1","jiagetubiao1","but_jiesuo1","img_weihuode1","img_dengjitubiao1","levelwenzi1","caixianshi1","img_caipandiban2","caipinicon2","caipinname2","caipinjiagezhi2","jiagetubiao2","but_jiesuo2","img_weihuode2","img_dengjitubiao2","levelwenzi2","caixianshi2","img_caipandiban3","caipinicon3","caipinname3","caipinjiagezhi3","jiagetubiao3","but_jiesuo3","img_weihuode3","img_dengjitubiao3","levelwenzi3","caixianshi3","img_caipandiban4","caipinname4","caipinjiagezhi4","jiagetubiao4","caipinicon4","but_jiesuo4","img_weihuode4","img_dengjitubiao4","levelwenzi4","caixianshi4","img_caipandiban5","caipinicon5","caipinname5","caipinjiagezhi5","jiagetubiao5","but_jiesuo5","img_weihuode5","img_dengjitubiao5","levelwenzi5","caixianshi5","fenlanxianshizu","canpuzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.canpuzu_i()];
	}
	var _proto = CaipucaipingSkin.prototype;

	_proto.canpuzu_i = function () {
		var t = new eui.Group();
		this.canpuzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.fenlanxianshizu_i()];
		return t;
	};
	_proto.fenlanxianshizu_i = function () {
		var t = new eui.Group();
		this.fenlanxianshizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 684.84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 445.45;
		t.x = 161;
		t.y = 197;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.caixianshi0_i(),this.caixianshi1_i(),this.caixianshi2_i(),this.caixianshi3_i(),this.caixianshi4_i(),this.caixianshi5_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 40;
		t.verticalAlign = "middle";
		t.verticalGap = 24;
		return t;
	};
	_proto.caixianshi0_i = function () {
		var t = new eui.Group();
		this.caixianshi0 = t;
		t.x = 289.35;
		t.y = 7.34;
		t.elementsContent = [this.img_caipandiban0_i(),this.caipinicon0_i(),this.caipinname0_i(),this.caipinjiagezhi0_i(),this.jiagetubiao0_i(),this.but_jiesuo0_i(),this.img_weihuode0_i(),this.img_dengjitubiao0_i(),this.levelwenzi0_i()];
		return t;
	};
	_proto.img_caipandiban0_i = function () {
		var t = new eui.Image();
		this.img_caipandiban0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.caipinicon0_i = function () {
		var t = new eui.Image();
		this.caipinicon0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 124;
		t.x = 38;
		t.y = 23.66;
		return t;
	};
	_proto.caipinname0_i = function () {
		var t = new eui.Label();
		this.caipinname0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 12;
		t.y = 126.66;
		return t;
	};
	_proto.caipinjiagezhi0_i = function () {
		var t = new eui.Label();
		this.caipinjiagezhi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xf7f3ef;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xdb1515;
		t.verticalAlign = "middle";
		t.width = 113;
		t.x = 42;
		t.y = 163.66;
		return t;
	};
	_proto.jiagetubiao0_i = function () {
		var t = new eui.Image();
		this.jiagetubiao0 = t;
		t.height = 30;
		t.source = "";
		t.width = 30;
		t.x = 58;
		t.y = 167.16;
		return t;
	};
	_proto.but_jiesuo0_i = function () {
		var t = new eui.Button();
		this.but_jiesuo0 = t;
		t.alpha = 0;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = false;
		t.x = 29.5;
		t.y = 91.66;
		t.skinName = CaipucaipingSkin$Skin4;
		return t;
	};
	_proto.img_weihuode0_i = function () {
		var t = new eui.Image();
		this.img_weihuode0 = t;
		t.source = "";
		t.x = 6;
		t.y = 7;
		return t;
	};
	_proto.img_dengjitubiao0_i = function () {
		var t = new eui.Image();
		this.img_dengjitubiao0 = t;
		t.source = "img_dengjitubiao_png";
		t.x = 114;
		t.y = 6;
		return t;
	};
	_proto.levelwenzi0_i = function () {
		var t = new eui.Label();
		this.levelwenzi0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "20";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 31;
		t.x = 131;
		t.y = 17;
		return t;
	};
	_proto.caixianshi1_i = function () {
		var t = new eui.Group();
		this.caixianshi1 = t;
		t.x = 42.35;
		t.y = 242.34;
		t.elementsContent = [this.img_caipandiban1_i(),this.caipinicon1_i(),this.caipinname1_i(),this.caipinjiagezhi1_i(),this.jiagetubiao1_i(),this.but_jiesuo1_i(),this.img_weihuode1_i(),this.img_dengjitubiao1_i(),this.levelwenzi1_i()];
		return t;
	};
	_proto.img_caipandiban1_i = function () {
		var t = new eui.Image();
		this.img_caipandiban1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.caipinicon1_i = function () {
		var t = new eui.Image();
		this.caipinicon1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "";
		t.width = 124;
		t.x = 38;
		t.y = 23.66;
		return t;
	};
	_proto.caipinname1_i = function () {
		var t = new eui.Label();
		this.caipinname1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 12;
		t.y = 126.66;
		return t;
	};
	_proto.caipinjiagezhi1_i = function () {
		var t = new eui.Label();
		this.caipinjiagezhi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xf7f3ef;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0x3ee016;
		t.verticalAlign = "middle";
		t.width = 121;
		t.x = 39;
		t.y = 163.66;
		return t;
	};
	_proto.jiagetubiao1_i = function () {
		var t = new eui.Image();
		this.jiagetubiao1 = t;
		t.height = 30;
		t.source = "";
		t.width = 30;
		t.x = 58;
		t.y = 167.16;
		return t;
	};
	_proto.but_jiesuo1_i = function () {
		var t = new eui.Button();
		this.but_jiesuo1 = t;
		t.alpha = 0;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = false;
		t.x = 29.5;
		t.y = 91.66;
		t.skinName = CaipucaipingSkin$Skin5;
		return t;
	};
	_proto.img_weihuode1_i = function () {
		var t = new eui.Image();
		this.img_weihuode1 = t;
		t.source = "";
		t.x = 6;
		t.y = 6;
		return t;
	};
	_proto.img_dengjitubiao1_i = function () {
		var t = new eui.Image();
		this.img_dengjitubiao1 = t;
		t.source = "img_dengjitubiao_png";
		t.x = 114;
		t.y = 6;
		return t;
	};
	_proto.levelwenzi1_i = function () {
		var t = new eui.Label();
		this.levelwenzi1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "20";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 31;
		t.x = 131;
		t.y = 15.5;
		return t;
	};
	_proto.caixianshi2_i = function () {
		var t = new eui.Group();
		this.caixianshi2 = t;
		t.x = 287.35;
		t.y = 241.34;
		t.elementsContent = [this.img_caipandiban2_i(),this.caipinicon2_i(),this.caipinname2_i(),this.caipinjiagezhi2_i(),this.jiagetubiao2_i(),this.but_jiesuo2_i(),this.img_weihuode2_i(),this.img_dengjitubiao2_i(),this.levelwenzi2_i()];
		return t;
	};
	_proto.img_caipandiban2_i = function () {
		var t = new eui.Image();
		this.img_caipandiban2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.caipinicon2_i = function () {
		var t = new eui.Image();
		this.caipinicon2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "";
		t.width = 124;
		t.x = 38;
		t.y = 23.66;
		return t;
	};
	_proto.caipinname2_i = function () {
		var t = new eui.Label();
		this.caipinname2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 12;
		t.y = 126.66;
		return t;
	};
	_proto.caipinjiagezhi2_i = function () {
		var t = new eui.Label();
		this.caipinjiagezhi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xf7f3ef;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 121;
		t.x = 40;
		t.y = 163.66;
		return t;
	};
	_proto.jiagetubiao2_i = function () {
		var t = new eui.Image();
		this.jiagetubiao2 = t;
		t.height = 30;
		t.source = "";
		t.width = 30;
		t.x = 58;
		t.y = 167.16;
		return t;
	};
	_proto.but_jiesuo2_i = function () {
		var t = new eui.Button();
		this.but_jiesuo2 = t;
		t.alpha = 0;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = false;
		t.x = 28;
		t.y = 94.66;
		t.skinName = CaipucaipingSkin$Skin6;
		return t;
	};
	_proto.img_weihuode2_i = function () {
		var t = new eui.Image();
		this.img_weihuode2 = t;
		t.source = "";
		t.x = 6;
		t.y = 5;
		return t;
	};
	_proto.img_dengjitubiao2_i = function () {
		var t = new eui.Image();
		this.img_dengjitubiao2 = t;
		t.source = "img_dengjitubiao_png";
		t.x = 114;
		t.y = 6;
		return t;
	};
	_proto.levelwenzi2_i = function () {
		var t = new eui.Label();
		this.levelwenzi2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "20";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 31;
		t.x = 130.5;
		t.y = 16;
		return t;
	};
	_proto.caixianshi3_i = function () {
		var t = new eui.Group();
		this.caixianshi3 = t;
		t.x = 43.35;
		t.y = 478.34;
		t.elementsContent = [this.img_caipandiban3_i(),this.caipinicon3_i(),this.caipinname3_i(),this.caipinjiagezhi3_i(),this.jiagetubiao3_i(),this.but_jiesuo3_i(),this.img_weihuode3_i(),this.img_dengjitubiao3_i(),this.levelwenzi3_i()];
		return t;
	};
	_proto.img_caipandiban3_i = function () {
		var t = new eui.Image();
		this.img_caipandiban3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.caipinicon3_i = function () {
		var t = new eui.Image();
		this.caipinicon3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "";
		t.width = 124;
		t.x = 38;
		t.y = 23.66;
		return t;
	};
	_proto.caipinname3_i = function () {
		var t = new eui.Label();
		this.caipinname3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 12;
		t.y = 126.66;
		return t;
	};
	_proto.caipinjiagezhi3_i = function () {
		var t = new eui.Label();
		this.caipinjiagezhi3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xf7f3ef;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 41;
		t.y = 163.66;
		return t;
	};
	_proto.jiagetubiao3_i = function () {
		var t = new eui.Image();
		this.jiagetubiao3 = t;
		t.height = 30;
		t.source = "";
		t.width = 30;
		t.x = 58;
		t.y = 167.16;
		return t;
	};
	_proto.but_jiesuo3_i = function () {
		var t = new eui.Button();
		this.but_jiesuo3 = t;
		t.alpha = 0;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = false;
		t.x = 28;
		t.y = 94.66;
		t.skinName = CaipucaipingSkin$Skin7;
		return t;
	};
	_proto.img_weihuode3_i = function () {
		var t = new eui.Image();
		this.img_weihuode3 = t;
		t.source = "";
		t.x = 6;
		t.y = 6;
		return t;
	};
	_proto.img_dengjitubiao3_i = function () {
		var t = new eui.Image();
		this.img_dengjitubiao3 = t;
		t.source = "img_dengjitubiao_png";
		t.x = 114;
		t.y = 6;
		return t;
	};
	_proto.levelwenzi3_i = function () {
		var t = new eui.Label();
		this.levelwenzi3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "20";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 31;
		t.x = 131;
		t.y = 16.5;
		return t;
	};
	_proto.caixianshi4_i = function () {
		var t = new eui.Group();
		this.caixianshi4 = t;
		t.x = 287.35;
		t.y = 477.34;
		t.elementsContent = [this.img_caipandiban4_i(),this.caipinname4_i(),this.caipinjiagezhi4_i(),this.jiagetubiao4_i(),this.caipinicon4_i(),this.but_jiesuo4_i(),this.img_weihuode4_i(),this.img_dengjitubiao4_i(),this.levelwenzi4_i()];
		return t;
	};
	_proto.img_caipandiban4_i = function () {
		var t = new eui.Image();
		this.img_caipandiban4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.caipinname4_i = function () {
		var t = new eui.Label();
		this.caipinname4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 12;
		t.y = 126.66;
		return t;
	};
	_proto.caipinjiagezhi4_i = function () {
		var t = new eui.Label();
		this.caipinjiagezhi4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xf7f3ef;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 119;
		t.x = 40;
		t.y = 163.66;
		return t;
	};
	_proto.jiagetubiao4_i = function () {
		var t = new eui.Image();
		this.jiagetubiao4 = t;
		t.height = 30;
		t.source = "";
		t.width = 30;
		t.x = 58;
		t.y = 167.16;
		return t;
	};
	_proto.caipinicon4_i = function () {
		var t = new eui.Image();
		this.caipinicon4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "";
		t.width = 124;
		t.x = 38;
		t.y = 23.66;
		return t;
	};
	_proto.but_jiesuo4_i = function () {
		var t = new eui.Button();
		this.but_jiesuo4 = t;
		t.alpha = 0;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.x = 28;
		t.y = 81.16;
		t.skinName = CaipucaipingSkin$Skin8;
		return t;
	};
	_proto.img_weihuode4_i = function () {
		var t = new eui.Image();
		this.img_weihuode4 = t;
		t.source = "";
		t.x = 6;
		t.y = 5;
		return t;
	};
	_proto.img_dengjitubiao4_i = function () {
		var t = new eui.Image();
		this.img_dengjitubiao4 = t;
		t.source = "img_dengjitubiao_png";
		t.x = 114;
		t.y = 6;
		return t;
	};
	_proto.levelwenzi4_i = function () {
		var t = new eui.Label();
		this.levelwenzi4 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "20";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 31;
		t.x = 130.5;
		t.y = 16.16;
		return t;
	};
	_proto.caixianshi5_i = function () {
		var t = new eui.Group();
		this.caixianshi5 = t;
		t.x = 41.35;
		t.y = 7.34;
		t.elementsContent = [this.img_caipandiban5_i(),this.caipinicon5_i(),this.caipinname5_i(),this.caipinjiagezhi5_i(),this.jiagetubiao5_i(),this.but_jiesuo5_i(),this.img_weihuode5_i(),this.img_dengjitubiao5_i(),this.levelwenzi5_i()];
		return t;
	};
	_proto.img_caipandiban5_i = function () {
		var t = new eui.Image();
		this.img_caipandiban5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.caipinicon5_i = function () {
		var t = new eui.Image();
		this.caipinicon5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "";
		t.width = 124;
		t.x = 38;
		t.y = 23.66;
		return t;
	};
	_proto.caipinname5_i = function () {
		var t = new eui.Label();
		this.caipinname5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xF7EFEF;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 12;
		t.y = 126.66;
		return t;
	};
	_proto.caipinjiagezhi5_i = function () {
		var t = new eui.Label();
		this.caipinjiagezhi5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xf7f3ef;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 123;
		t.x = 37;
		t.y = 163.66;
		return t;
	};
	_proto.jiagetubiao5_i = function () {
		var t = new eui.Image();
		this.jiagetubiao5 = t;
		t.height = 30;
		t.source = "";
		t.width = 30;
		t.x = 58;
		t.y = 167.16;
		return t;
	};
	_proto.but_jiesuo5_i = function () {
		var t = new eui.Button();
		this.but_jiesuo5 = t;
		t.alpha = 0;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = false;
		t.x = 29.5;
		t.y = 81.16;
		t.skinName = CaipucaipingSkin$Skin9;
		return t;
	};
	_proto.img_weihuode5_i = function () {
		var t = new eui.Image();
		this.img_weihuode5 = t;
		t.source = "";
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.img_dengjitubiao5_i = function () {
		var t = new eui.Image();
		this.img_dengjitubiao5 = t;
		t.source = "img_dengjitubiao_png";
		t.x = 114;
		t.y = 6;
		return t;
	};
	_proto.levelwenzi5_i = function () {
		var t = new eui.Label();
		this.levelwenzi5 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "20";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 31;
		t.x = 130.5;
		t.y = 16.16;
		return t;
	};
	return CaipucaipingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Caipujiemian.exml'] = window.CaipujiemianSkin = (function (_super) {
	__extends(CaipujiemianSkin, _super);
	var CaipujiemianSkin$Skin10 = 	(function (_super) {
		__extends(CaipujiemianSkin$Skin10, _super);
		function CaipujiemianSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_peng1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_peng1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_peng2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipujiemianSkin$Skin10;
	})(eui.Skin);

	var CaipujiemianSkin$Skin11 = 	(function (_super) {
		__extends(CaipujiemianSkin$Skin11, _super);
		function CaipujiemianSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_zha1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_zha1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_zha2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipujiemianSkin$Skin11;
	})(eui.Skin);

	var CaipujiemianSkin$Skin12 = 	(function (_super) {
		__extends(CaipujiemianSkin$Skin12, _super);
		function CaipujiemianSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jian1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jian1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jian2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipujiemianSkin$Skin12;
	})(eui.Skin);

	var CaipujiemianSkin$Skin13 = 	(function (_super) {
		__extends(CaipujiemianSkin$Skin13, _super);
		function CaipujiemianSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_zhu1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_zhu1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_zhu2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipujiemianSkin$Skin13;
	})(eui.Skin);

	var CaipujiemianSkin$Skin14 = 	(function (_super) {
		__extends(CaipujiemianSkin$Skin14, _super);
		function CaipujiemianSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipujiemianSkin$Skin14;
	})(eui.Skin);

	var CaipujiemianSkin$Skin15 = 	(function (_super) {
		__extends(CaipujiemianSkin$Skin15, _super);
		function CaipujiemianSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_up1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_up1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_up2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipujiemianSkin$Skin15;
	})(eui.Skin);

	var CaipujiemianSkin$Skin16 = 	(function (_super) {
		__extends(CaipujiemianSkin$Skin16, _super);
		function CaipujiemianSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_down1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_down1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_down2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CaipujiemianSkin$Skin16;
	})(eui.Skin);

	function CaipujiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao","img_caipubg","img_biaoticaipu","but_peng","but_zha","but_jian","but_zhu","but_guanbi","but_up","but_down","yemainwenzi","zhuyaokongjain","caidanzu","canpuzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.canpuzu_i()];
	}
	var _proto = CaipujiemianSkin.prototype;

	_proto.canpuzu_i = function () {
		var t = new eui.Group();
		this.canpuzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao_i(),this.caidanzu_i()];
		return t;
	};
	_proto.img_heisezhezao_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.caidanzu_i = function () {
		var t = new eui.Group();
		this.caidanzu = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = 92.27000000000001;
		t.elementsContent = [this.zhuyaokongjain_i()];
		return t;
	};
	_proto.zhuyaokongjain_i = function () {
		var t = new eui.Group();
		this.zhuyaokongjain = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_caipubg_i(),this.img_biaoticaipu_i(),this.but_peng_i(),this.but_zha_i(),this.but_jian_i(),this.but_zhu_i(),this.but_guanbi_i(),this.but_up_i(),this.but_down_i(),this.yemainwenzi_i()];
		return t;
	};
	_proto.img_caipubg_i = function () {
		var t = new eui.Image();
		this.img_caipubg = t;
		t.source = "img_caipubg_png";
		t.x = 46;
		t.y = 23.73;
		return t;
	};
	_proto.img_biaoticaipu_i = function () {
		var t = new eui.Image();
		this.img_biaoticaipu = t;
		t.source = "img_biaoticaipu_png";
		t.x = 257.5;
		t.y = 0;
		return t;
	};
	_proto.but_peng_i = function () {
		var t = new eui.Button();
		this.but_peng = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 85.73;
		t.skinName = CaipujiemianSkin$Skin10;
		return t;
	};
	_proto.but_zha_i = function () {
		var t = new eui.Button();
		this.but_zha = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 290.97;
		t.skinName = CaipujiemianSkin$Skin11;
		return t;
	};
	_proto.but_jian_i = function () {
		var t = new eui.Button();
		this.but_jian = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 490.73;
		t.skinName = CaipujiemianSkin$Skin12;
		return t;
	};
	_proto.but_zhu_i = function () {
		var t = new eui.Button();
		this.but_zhu = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 693.33;
		t.skinName = CaipujiemianSkin$Skin13;
		return t;
	};
	_proto.but_guanbi_i = function () {
		var t = new eui.Button();
		this.but_guanbi = t;
		t.enabled = true;
		t.label = "";
		t.x = 625;
		t.y = 4;
		t.skinName = CaipujiemianSkin$Skin14;
		return t;
	};
	_proto.but_up_i = function () {
		var t = new eui.Button();
		this.but_up = t;
		t.enabled = true;
		t.label = "";
		t.x = 665;
		t.y = 392.23;
		t.skinName = CaipujiemianSkin$Skin15;
		return t;
	};
	_proto.but_down_i = function () {
		var t = new eui.Button();
		this.but_down = t;
		t.enabled = true;
		t.label = "";
		t.x = 665;
		t.y = 505.73;
		t.skinName = CaipujiemianSkin$Skin16;
		return t;
	};
	_proto.yemainwenzi_i = function () {
		var t = new eui.Label();
		this.yemainwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 3;
		t.strokeColor = 0x35322f;
		t.text = "第 1 / 2 页";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 181;
		t.x = 277;
		t.y = 802;
		return t;
	};
	return CaipujiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Cuowutishi.exml'] = window.CuowutishiSkin = (function (_super) {
	__extends(CuowutishiSkin, _super);
	function CuowutishiSkin() {
		_super.call(this);
		this.skinParts = ["img_cuowutishi","tishiwenzi","cuowutishi"];
		
		this.height = 70;
		this.width = 580;
		this.elementsContent = [this.cuowutishi_i()];
	}
	var _proto = CuowutishiSkin.prototype;

	_proto.cuowutishi_i = function () {
		var t = new eui.Group();
		this.cuowutishi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.width = 550.67;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_cuowutishi_i(),this.tishiwenzi_i()];
		return t;
	};
	_proto.img_cuowutishi_i = function () {
		var t = new eui.Image();
		this.img_cuowutishi = t;
		t.source = "img_cuowutishi_png";
		t.x = 5;
		t.y = 9.5;
		return t;
	};
	_proto.tishiwenzi_i = function () {
		var t = new eui.Label();
		this.tishiwenzi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.text = "zh这是一个错误";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 508.67;
		t.x = 21;
		t.y = 25.5;
		return t;
	};
	return CuowutishiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Danjujiemian.exml'] = window.DanjujiemianSkin = (function (_super) {
	__extends(DanjujiemianSkin, _super);
	var DanjujiemianSkin$Skin17 = 	(function (_super) {
		__extends(DanjujiemianSkin$Skin17, _super);
		function DanjujiemianSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiaona1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiaona1_png")
					])
			];
		}
		var _proto = DanjujiemianSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiaona2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DanjujiemianSkin$Skin17;
	})(eui.Skin);

	var DanjujiemianSkin$Skin18 = 	(function (_super) {
		__extends(DanjujiemianSkin$Skin18, _super);
		function DanjujiemianSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiaona1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiaona1_png")
					])
			];
		}
		var _proto = DanjujiemianSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiaona2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DanjujiemianSkin$Skin18;
	})(eui.Skin);

	function DanjujiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_danjuneirong0","danjubiaoti0","danjubianhao0","jiaoferen0","fumianzhuangtai0","jiaonajine0","jiaonayuanyin0","jinbi0","but_jiaona0","di1gezu0","img_danjuneirong1","danjubiaoti1","danjubianhao1","jiaoferen1","fumianzhuangtai1","jiaonajine1","jiaonayuanyin1","jinbi1","but_jiaona1","di1gezu1","danjuguanli0","img_weichuli","danjuguanlizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.danjuguanlizu_i()];
	}
	var _proto = DanjujiemianSkin.prototype;

	_proto.danjuguanlizu_i = function () {
		var t = new eui.Group();
		this.danjuguanlizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.danjuguanli0_i(),this.img_weichuli_i()];
		return t;
	};
	_proto.danjuguanli0_i = function () {
		var t = new eui.Group();
		this.danjuguanli0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 400;
		t.left = 94;
		t.right = 73;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 174;
		t.elementsContent = [this.di1gezu0_i(),this.di1gezu1_i()];
		return t;
	};
	_proto.di1gezu0_i = function () {
		var t = new eui.Group();
		this.di1gezu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 359;
		t.width = 568;
		t.x = 7.5;
		t.y = 16;
		t.elementsContent = [this.img_danjuneirong0_i(),this.danjubiaoti0_i(),this.danjubianhao0_i(),this.jiaoferen0_i(),this.fumianzhuangtai0_i(),this.jiaonajine0_i(),this.jiaonayuanyin0_i(),this.jinbi0_i(),this.but_jiaona0_i()];
		return t;
	};
	_proto.img_danjuneirong0_i = function () {
		var t = new eui.Image();
		this.img_danjuneirong0 = t;
		t.source = "img_danjuneirong_png";
		t.x = 12;
		t.y = 13;
		return t;
	};
	_proto.danjubiaoti0_i = function () {
		var t = new eui.Label();
		this.danjubiaoti0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 43;
		t.size = 32;
		t.text = "卫生处罚单";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 234;
		t.x = 167;
		t.y = 47;
		return t;
	};
	_proto.danjubianhao0_i = function () {
		var t = new eui.Label();
		this.danjubianhao0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.text = "000367";
		t.textAlign = "left";
		t.textColor = 0xef1010;
		t.verticalAlign = "middle";
		t.width = 119;
		t.x = 401;
		t.y = 58;
		return t;
	};
	_proto.jiaoferen0_i = function () {
		var t = new eui.Label();
		this.jiaoferen0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 22;
		t.text = "000367";
		t.textAlign = "left";
		t.textColor = 0x1e1616;
		t.verticalAlign = "middle";
		t.width = 161;
		t.x = 154.5;
		t.y = 103;
		return t;
	};
	_proto.fumianzhuangtai0_i = function () {
		var t = new eui.Label();
		this.fumianzhuangtai0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 22;
		t.text = "总收入 - 10%";
		t.textAlign = "left";
		t.textColor = 0x1E1616;
		t.verticalAlign = "middle";
		t.width = 161;
		t.x = 154.5;
		t.y = 138;
		return t;
	};
	_proto.jiaonajine0_i = function () {
		var t = new eui.Label();
		this.jiaonajine0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 22;
		t.text = "-1000";
		t.textAlign = "left";
		t.textColor = 0x1E1616;
		t.verticalAlign = "middle";
		t.width = 119;
		t.x = 196.5;
		t.y = 173;
		return t;
	};
	_proto.jiaonayuanyin0_i = function () {
		var t = new eui.Label();
		this.jiaonayuanyin0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 64;
		t.size = 22;
		t.text = "-1000";
		t.textAlign = "left";
		t.textColor = 0x1E1616;
		t.verticalAlign = "top";
		t.width = 309;
		t.x = 53.5;
		t.y = 263;
		return t;
	};
	_proto.jinbi0_i = function () {
		var t = new eui.Image();
		this.jinbi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.source = "img_qian_png";
		t.width = 32;
		t.x = 154;
		t.y = 171;
		return t;
	};
	_proto.but_jiaona0_i = function () {
		var t = new eui.Button();
		this.but_jiaona0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 401;
		t.y = 272;
		t.skinName = DanjujiemianSkin$Skin17;
		return t;
	};
	_proto.di1gezu1_i = function () {
		var t = new eui.Group();
		this.di1gezu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 359;
		t.width = 568;
		t.x = 7.5;
		t.y = 380;
		t.elementsContent = [this.img_danjuneirong1_i(),this.danjubiaoti1_i(),this.danjubianhao1_i(),this.jiaoferen1_i(),this.fumianzhuangtai1_i(),this.jiaonajine1_i(),this.jiaonayuanyin1_i(),this.jinbi1_i(),this.but_jiaona1_i()];
		return t;
	};
	_proto.img_danjuneirong1_i = function () {
		var t = new eui.Image();
		this.img_danjuneirong1 = t;
		t.source = "img_danjuneirong_png";
		t.x = 12;
		t.y = 13;
		return t;
	};
	_proto.danjubiaoti1_i = function () {
		var t = new eui.Label();
		this.danjubiaoti1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 43;
		t.size = 32;
		t.text = "卫生处罚单";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 234;
		t.x = 167;
		t.y = 47;
		return t;
	};
	_proto.danjubianhao1_i = function () {
		var t = new eui.Label();
		this.danjubianhao1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.text = "000367";
		t.textAlign = "left";
		t.textColor = 0xEF1010;
		t.verticalAlign = "middle";
		t.width = 119;
		t.x = 401;
		t.y = 58;
		return t;
	};
	_proto.jiaoferen1_i = function () {
		var t = new eui.Label();
		this.jiaoferen1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 22;
		t.text = "000367";
		t.textAlign = "left";
		t.textColor = 0x1E1616;
		t.verticalAlign = "middle";
		t.width = 161;
		t.x = 154.5;
		t.y = 103;
		return t;
	};
	_proto.fumianzhuangtai1_i = function () {
		var t = new eui.Label();
		this.fumianzhuangtai1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 22;
		t.text = "总收入 - 10%";
		t.textAlign = "left";
		t.textColor = 0x1E1616;
		t.verticalAlign = "middle";
		t.width = 161;
		t.x = 154.5;
		t.y = 138;
		return t;
	};
	_proto.jiaonajine1_i = function () {
		var t = new eui.Label();
		this.jiaonajine1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 22;
		t.text = "-1000";
		t.textAlign = "left";
		t.textColor = 0x1E1616;
		t.verticalAlign = "middle";
		t.width = 119;
		t.x = 196.5;
		t.y = 173;
		return t;
	};
	_proto.jiaonayuanyin1_i = function () {
		var t = new eui.Label();
		this.jiaonayuanyin1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 64;
		t.size = 22;
		t.text = "-1000";
		t.textAlign = "left";
		t.textColor = 0x1E1616;
		t.verticalAlign = "top";
		t.width = 309;
		t.x = 53.5;
		t.y = 263;
		return t;
	};
	_proto.jinbi1_i = function () {
		var t = new eui.Image();
		this.jinbi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.source = "img_qian_png";
		t.width = 32;
		t.x = 154;
		t.y = 171;
		return t;
	};
	_proto.but_jiaona1_i = function () {
		var t = new eui.Button();
		this.but_jiaona1 = t;
		t.enabled = true;
		t.label = "";
		t.x = 401;
		t.y = 272;
		t.skinName = DanjujiemianSkin$Skin18;
		return t;
	};
	_proto.img_weichuli_i = function () {
		var t = new eui.Image();
		this.img_weichuli = t;
		t.pixelHitTest = true;
		t.source = "img_weichuli_png";
		t.x = 198;
		t.y = 358;
		return t;
	};
	return DanjujiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Dasaodonghua.exml'] = window.DasaodonghuaSkin = (function (_super) {
	__extends(DasaodonghuaSkin, _super);
	function DasaodonghuaSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = DasaodonghuaSkin.prototype;

	return DasaodonghuaSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/dibuxinxi.exml'] = window.dibuxinxiSkin = (function (_super) {
	__extends(dibuxinxiSkin, _super);
	var dibuxinxiSkin$Skin19 = 	(function (_super) {
		__extends(dibuxinxiSkin$Skin19, _super);
		function dibuxinxiSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_hotel2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_hotel2_png")
					])
			];
		}
		var _proto = dibuxinxiSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_hotel1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return dibuxinxiSkin$Skin19;
	})(eui.Skin);

	var dibuxinxiSkin$Skin20 = 	(function (_super) {
		__extends(dibuxinxiSkin$Skin20, _super);
		function dibuxinxiSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_gongyuan2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_gongyuan2_png")
					])
			];
		}
		var _proto = dibuxinxiSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_gongyuan1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return dibuxinxiSkin$Skin20;
	})(eui.Skin);

	var dibuxinxiSkin$Skin21 = 	(function (_super) {
		__extends(dibuxinxiSkin$Skin21, _super);
		function dibuxinxiSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_licai2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_licai2_png")
					])
			];
		}
		var _proto = dibuxinxiSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_licai1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return dibuxinxiSkin$Skin21;
	})(eui.Skin);

	var dibuxinxiSkin$Skin22 = 	(function (_super) {
		__extends(dibuxinxiSkin$Skin22, _super);
		function dibuxinxiSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_huijia2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_huijia2_png")
					])
			];
		}
		var _proto = dibuxinxiSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_huijia1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return dibuxinxiSkin$Skin22;
	})(eui.Skin);

	function dibuxinxiSkin() {
		_super.call(this);
		this.skinParts = ["img_bottombg1","but_hotel1","but_gongyuan1","but_licai1","but_huijia1","dibuzu0"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.dibuzu0_i()];
	}
	var _proto = dibuxinxiSkin.prototype;

	_proto.dibuzu0_i = function () {
		var t = new eui.Group();
		this.dibuzu0 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this.img_bottombg1_i(),this.but_hotel1_i(),this.but_gongyuan1_i(),this.but_licai1_i(),this.but_huijia1_i()];
		return t;
	};
	_proto.img_bottombg1_i = function () {
		var t = new eui.Image();
		this.img_bottombg1 = t;
		t.source = "img_bottombg_png";
		t.x = 0;
		t.y = 57;
		return t;
	};
	_proto.but_hotel1_i = function () {
		var t = new eui.Button();
		this.but_hotel1 = t;
		t.enabled = true;
		t.x = 36;
		t.y = 0;
		t.skinName = dibuxinxiSkin$Skin19;
		return t;
	};
	_proto.but_gongyuan1_i = function () {
		var t = new eui.Button();
		this.but_gongyuan1 = t;
		t.enabled = true;
		t.x = 215;
		t.y = 0;
		t.skinName = dibuxinxiSkin$Skin20;
		return t;
	};
	_proto.but_licai1_i = function () {
		var t = new eui.Button();
		this.but_licai1 = t;
		t.enabled = true;
		t.x = 394;
		t.y = 0;
		t.skinName = dibuxinxiSkin$Skin21;
		return t;
	};
	_proto.but_huijia1_i = function () {
		var t = new eui.Button();
		this.but_huijia1 = t;
		t.enabled = true;
		t.x = 573;
		t.y = 0;
		t.skinName = dibuxinxiSkin$Skin22;
		return t;
	};
	return dibuxinxiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/dingbuxinxi.exml'] = window.dingbuxinxiSkin = (function (_super) {
	__extends(dingbuxinxiSkin, _super);
	function dingbuxinxiSkin() {
		_super.call(this);
		this.skinParts = ["img_topbg0","img_happiness0","xingfute0","xingfutubiao","kaishizhizu0","img_mood0","kaixinte0","xinqingtubiao","kaixinzu0","img_family0","jiatingte0","tilitubiao","jiatingzu0","img_fealth0","jiankangte0","jiankangtubiao","jiankangzu0","img_money0","jinbite0","qiantubiao","jinbizu0","img_calendar0","riqi","nian","riqizu0","img_timebg0","dqshijiante0","shijianzu0","img_shijian","img_tianqi","img_dangqianshike7","img_dangqianshike8","img_dangqianshike9","img_dangqianshike10","img_dangqianshike11","img_dangqianshike12","img_dangqianshike13","img_dangqianshike14","img_dangqianshike15","img_dangqianshike16","img_dangqianshike17","img_dangqianshike18","wangluozhuangtai","dingbuzu0"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.dingbuzu0_i()];
	}
	var _proto = dingbuxinxiSkin.prototype;

	_proto.dingbuzu0_i = function () {
		var t = new eui.Group();
		this.dingbuzu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 338;
		t.horizontalCenter = 0;
		t.top = 0;
		t.touchThrough = true;
		t.width = 750;
		t.elementsContent = [this.img_topbg0_i(),this.kaishizhizu0_i(),this.kaixinzu0_i(),this.jiatingzu0_i(),this.jiankangzu0_i(),this.jinbizu0_i(),this.riqizu0_i(),this.shijianzu0_i(),this.img_shijian_i(),this.img_tianqi_i(),this.img_dangqianshike7_i(),this.img_dangqianshike8_i(),this.img_dangqianshike9_i(),this.img_dangqianshike10_i(),this.img_dangqianshike11_i(),this.img_dangqianshike12_i(),this.img_dangqianshike13_i(),this.img_dangqianshike14_i(),this.img_dangqianshike15_i(),this.img_dangqianshike16_i(),this.img_dangqianshike17_i(),this.img_dangqianshike18_i(),this.wangluozhuangtai_i()];
		return t;
	};
	_proto.img_topbg0_i = function () {
		var t = new eui.Image();
		this.img_topbg0 = t;
		t.fillMode = "scale";
		t.height = 343;
		t.source = "img_topbg_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kaishizhizu0_i = function () {
		var t = new eui.Group();
		this.kaishizhizu0 = t;
		t.x = 38;
		t.y = 206;
		t.elementsContent = [this.img_happiness0_i(),this.xingfute0_i(),this.xingfutubiao_i()];
		return t;
	};
	_proto.img_happiness0_i = function () {
		var t = new eui.Image();
		this.img_happiness0 = t;
		t.height = 51;
		t.source = "img_happiness_png";
		t.width = 143;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.xingfute0_i = function () {
		var t = new eui.Label();
		this.xingfute0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 21;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xf74f07;
		t.verticalAlign = "middle";
		t.width = 55;
		t.x = 39;
		t.y = 7;
		return t;
	};
	_proto.xingfutubiao_i = function () {
		var t = new eui.Image();
		this.xingfutubiao = t;
		t.height = 40;
		t.source = "img_xingfu_png";
		t.width = 40;
		t.x = -7;
		t.y = -3;
		return t;
	};
	_proto.kaixinzu0_i = function () {
		var t = new eui.Group();
		this.kaixinzu0 = t;
		t.x = 218;
		t.y = 42;
		t.elementsContent = [this.img_mood0_i(),this.kaixinte0_i(),this.xinqingtubiao_i()];
		return t;
	};
	_proto.img_mood0_i = function () {
		var t = new eui.Image();
		this.img_mood0 = t;
		t.source = "img_family_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kaixinte0_i = function () {
		var t = new eui.Label();
		this.kaixinte0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xf74f07;
		t.verticalAlign = "middle";
		t.width = 110;
		t.x = 46.3;
		t.y = 14.5;
		return t;
	};
	_proto.xinqingtubiao_i = function () {
		var t = new eui.Image();
		this.xinqingtubiao = t;
		t.height = 40;
		t.source = "img_xinqing_png";
		t.width = 40;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.jiatingzu0_i = function () {
		var t = new eui.Group();
		this.jiatingzu0 = t;
		t.x = 218;
		t.y = 102;
		t.elementsContent = [this.img_family0_i(),this.jiatingte0_i(),this.tilitubiao_i()];
		return t;
	};
	_proto.img_family0_i = function () {
		var t = new eui.Image();
		this.img_family0 = t;
		t.source = "img_family_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jiatingte0_i = function () {
		var t = new eui.Label();
		this.jiatingte0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xf74f07;
		t.width = 110;
		t.x = 46.3;
		t.y = 14.5;
		return t;
	};
	_proto.tilitubiao_i = function () {
		var t = new eui.Image();
		this.tilitubiao = t;
		t.height = 40;
		t.source = "img_jiating_png";
		t.width = 40;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.jiankangzu0_i = function () {
		var t = new eui.Group();
		this.jiankangzu0 = t;
		t.x = 438;
		t.y = 42;
		t.elementsContent = [this.img_fealth0_i(),this.jiankangte0_i(),this.jiankangtubiao_i()];
		return t;
	};
	_proto.img_fealth0_i = function () {
		var t = new eui.Image();
		this.img_fealth0 = t;
		t.source = "img_family_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jiankangte0_i = function () {
		var t = new eui.Label();
		this.jiankangte0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xf74f07;
		t.width = 110;
		t.x = 48.1;
		t.y = 14.5;
		return t;
	};
	_proto.jiankangtubiao_i = function () {
		var t = new eui.Image();
		this.jiankangtubiao = t;
		t.height = 40;
		t.source = "img_jiankang_png";
		t.width = 40;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.jinbizu0_i = function () {
		var t = new eui.Group();
		this.jinbizu0 = t;
		t.x = 438;
		t.y = 102;
		t.elementsContent = [this.img_money0_i(),this.jinbite0_i(),this.qiantubiao_i()];
		return t;
	};
	_proto.img_money0_i = function () {
		var t = new eui.Image();
		this.img_money0 = t;
		t.source = "img_family_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jinbite0_i = function () {
		var t = new eui.Label();
		this.jinbite0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0xf74f07;
		t.width = 110;
		t.x = 46.5;
		t.y = 14.5;
		return t;
	};
	_proto.qiantubiao_i = function () {
		var t = new eui.Image();
		this.qiantubiao = t;
		t.height = 40;
		t.source = "img_qian_png";
		t.width = 40;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.riqizu0_i = function () {
		var t = new eui.Group();
		this.riqizu0 = t;
		t.x = 24;
		t.y = 24;
		t.elementsContent = [this.img_calendar0_i(),this.riqi_i(),this.nian_i()];
		return t;
	};
	_proto.img_calendar0_i = function () {
		var t = new eui.Image();
		this.img_calendar0 = t;
		t.fillMode = "scale";
		t.height = 166;
		t.source = "img_calendar_png";
		t.width = 178;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.riqi_i = function () {
		var t = new eui.Label();
		this.riqi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 20;
		t.strokeColor = 0x767c77;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xf4620e;
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 40.04;
		t.y = 92.5;
		return t;
	};
	_proto.nian_i = function () {
		var t = new eui.Label();
		this.nian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x5d605e;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xf4ebeb;
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 42;
		t.y = 34.5;
		return t;
	};
	_proto.shijianzu0_i = function () {
		var t = new eui.Group();
		this.shijianzu0 = t;
		t.x = 218;
		t.y = 170;
		t.elementsContent = [this.img_timebg0_i(),this.dqshijiante0_i()];
		return t;
	};
	_proto.img_timebg0_i = function () {
		var t = new eui.Image();
		this.img_timebg0 = t;
		t.source = "img_timebg_png";
		t.x = 39;
		t.y = 5;
		return t;
	};
	_proto.dqshijiante0_i = function () {
		var t = new eui.Label();
		this.dqshijiante0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xf4eded;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x0789f4;
		t.verticalAlign = "middle";
		t.width = 107;
		t.x = 105.5;
		t.y = 23;
		return t;
	};
	_proto.img_shijian_i = function () {
		var t = new eui.Image();
		this.img_shijian = t;
		t.source = "img_shijianbaitian_png";
		t.x = 60;
		t.y = 258;
		return t;
	};
	_proto.img_tianqi_i = function () {
		var t = new eui.Image();
		this.img_tianqi = t;
		t.source = "img_tianqiqing_png";
		t.x = 478;
		t.y = 142;
		return t;
	};
	_proto.img_dangqianshike7_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike7 = t;
		t.source = "img_dangqianshike_png";
		t.x = 39.7;
		t.y = 263.52;
		return t;
	};
	_proto.img_dangqianshike8_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike8 = t;
		t.source = "img_dangqianshike_png";
		t.x = 95.04;
		t.y = 252.29;
		return t;
	};
	_proto.img_dangqianshike9_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike9 = t;
		t.source = "img_dangqianshike_png";
		t.x = 150.47;
		t.y = 243.85;
		return t;
	};
	_proto.img_dangqianshike10_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike10 = t;
		t.source = "img_dangqianshike_png";
		t.x = 206.4;
		t.y = 235.8;
		return t;
	};
	_proto.img_dangqianshike11_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike11 = t;
		t.source = "img_dangqianshike_png";
		t.x = 262.9;
		t.y = 231;
		return t;
	};
	_proto.img_dangqianshike12_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike12 = t;
		t.source = "img_dangqianshike_png";
		t.x = 317.1;
		t.y = 228;
		return t;
	};
	_proto.img_dangqianshike13_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike13 = t;
		t.source = "img_dangqianshike_png";
		t.x = 373.3;
		t.y = 228.3;
		return t;
	};
	_proto.img_dangqianshike14_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike14 = t;
		t.source = "img_dangqianshike_png";
		t.x = 428.3;
		t.y = 230.5;
		return t;
	};
	_proto.img_dangqianshike15_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike15 = t;
		t.source = "img_dangqianshike_png";
		t.x = 484.5;
		t.y = 236.2;
		return t;
	};
	_proto.img_dangqianshike16_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike16 = t;
		t.source = "img_dangqianshike_png";
		t.x = 540.6;
		t.y = 243.5;
		return t;
	};
	_proto.img_dangqianshike17_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike17 = t;
		t.source = "img_dangqianshike_png";
		t.x = 595.5;
		t.y = 253;
		return t;
	};
	_proto.img_dangqianshike18_i = function () {
		var t = new eui.Image();
		this.img_dangqianshike18 = t;
		t.source = "img_dangqianshike_png";
		t.x = 652.5;
		t.y = 264.1;
		return t;
	};
	_proto.wangluozhuangtai_i = function () {
		var t = new eui.Image();
		this.wangluozhuangtai = t;
		t.height = 40;
		t.source = "img_wangluo1_png";
		t.width = 60;
		t.x = 592.5;
		t.y = 186;
		return t;
	};
	return dingbuxinxiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Guanlijiemian.exml'] = window.GuanlijiemianSkin = (function (_super) {
	__extends(GuanlijiemianSkin, _super);
	var GuanlijiemianSkin$Skin23 = 	(function (_super) {
		__extends(GuanlijiemianSkin$Skin23, _super);
		function GuanlijiemianSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_zhuangxiu1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_zhuangxiu1_png")
					])
			];
		}
		var _proto = GuanlijiemianSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_zhuangxiu2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GuanlijiemianSkin$Skin23;
	})(eui.Skin);

	var GuanlijiemianSkin$Skin24 = 	(function (_super) {
		__extends(GuanlijiemianSkin$Skin24, _super);
		function GuanlijiemianSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_yuangong1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_yuangong1_png")
					])
			];
		}
		var _proto = GuanlijiemianSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_yuangong2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GuanlijiemianSkin$Skin24;
	})(eui.Skin);

	var GuanlijiemianSkin$Skin25 = 	(function (_super) {
		__extends(GuanlijiemianSkin$Skin25, _super);
		function GuanlijiemianSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_yinxiao1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_yinxiao1_png")
					])
			];
		}
		var _proto = GuanlijiemianSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_yinxiao2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GuanlijiemianSkin$Skin25;
	})(eui.Skin);

	var GuanlijiemianSkin$Skin26 = 	(function (_super) {
		__extends(GuanlijiemianSkin$Skin26, _super);
		function GuanlijiemianSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_danju1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_danju1_png")
					])
			];
		}
		var _proto = GuanlijiemianSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_danju2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GuanlijiemianSkin$Skin26;
	})(eui.Skin);

	var GuanlijiemianSkin$Skin27 = 	(function (_super) {
		__extends(GuanlijiemianSkin$Skin27, _super);
		function GuanlijiemianSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = GuanlijiemianSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GuanlijiemianSkin$Skin27;
	})(eui.Skin);

	var GuanlijiemianSkin$Skin28 = 	(function (_super) {
		__extends(GuanlijiemianSkin$Skin28, _super);
		function GuanlijiemianSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_up1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_up1_png")
					])
			];
		}
		var _proto = GuanlijiemianSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_up2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GuanlijiemianSkin$Skin28;
	})(eui.Skin);

	var GuanlijiemianSkin$Skin29 = 	(function (_super) {
		__extends(GuanlijiemianSkin$Skin29, _super);
		function GuanlijiemianSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_down1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_down1_png")
					])
			];
		}
		var _proto = GuanlijiemianSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_down2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GuanlijiemianSkin$Skin29;
	})(eui.Skin);

	function GuanlijiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao0","img_guanlibeijing","img_biaotiguanli","but_zhuangxiu","but_yuangong","but_yinxiao","but_danju","but_guanbiguanli","but_gaunliup","but_guanlidown","guanliyemianwenzi","guanlikongjian","guanlizu0","guanlizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.guanlizu_i()];
	}
	var _proto = GuanlijiemianSkin.prototype;

	_proto.guanlizu_i = function () {
		var t = new eui.Group();
		this.guanlizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao0_i(),this.guanlizu0_i()];
		return t;
	};
	_proto.img_heisezhezao0_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.guanlizu0_i = function () {
		var t = new eui.Group();
		this.guanlizu0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = 92.27000000000001;
		t.elementsContent = [this.guanlikongjian_i()];
		return t;
	};
	_proto.guanlikongjian_i = function () {
		var t = new eui.Group();
		this.guanlikongjian = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_guanlibeijing_i(),this.img_biaotiguanli_i(),this.but_zhuangxiu_i(),this.but_yuangong_i(),this.but_yinxiao_i(),this.but_danju_i(),this.but_guanbiguanli_i(),this.but_gaunliup_i(),this.but_guanlidown_i(),this.guanliyemianwenzi_i()];
		return t;
	};
	_proto.img_guanlibeijing_i = function () {
		var t = new eui.Image();
		this.img_guanlibeijing = t;
		t.source = "img_caipubg_png";
		t.x = 46;
		t.y = 23.73;
		return t;
	};
	_proto.img_biaotiguanli_i = function () {
		var t = new eui.Image();
		this.img_biaotiguanli = t;
		t.source = "img_biaotiguanli_png";
		t.x = 257.5;
		t.y = 0;
		return t;
	};
	_proto.but_zhuangxiu_i = function () {
		var t = new eui.Button();
		this.but_zhuangxiu = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 85.73;
		t.skinName = GuanlijiemianSkin$Skin23;
		return t;
	};
	_proto.but_yuangong_i = function () {
		var t = new eui.Button();
		this.but_yuangong = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 290.97;
		t.skinName = GuanlijiemianSkin$Skin24;
		return t;
	};
	_proto.but_yinxiao_i = function () {
		var t = new eui.Button();
		this.but_yinxiao = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 490.73;
		t.skinName = GuanlijiemianSkin$Skin25;
		return t;
	};
	_proto.but_danju_i = function () {
		var t = new eui.Button();
		this.but_danju = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 693.33;
		t.skinName = GuanlijiemianSkin$Skin26;
		return t;
	};
	_proto.but_guanbiguanli_i = function () {
		var t = new eui.Button();
		this.but_guanbiguanli = t;
		t.enabled = true;
		t.label = "";
		t.x = 625;
		t.y = 4;
		t.skinName = GuanlijiemianSkin$Skin27;
		return t;
	};
	_proto.but_gaunliup_i = function () {
		var t = new eui.Button();
		this.but_gaunliup = t;
		t.enabled = true;
		t.label = "";
		t.x = 665;
		t.y = 392.23;
		t.skinName = GuanlijiemianSkin$Skin28;
		return t;
	};
	_proto.but_guanlidown_i = function () {
		var t = new eui.Button();
		this.but_guanlidown = t;
		t.enabled = true;
		t.label = "";
		t.x = 665;
		t.y = 505.73;
		t.skinName = GuanlijiemianSkin$Skin29;
		return t;
	};
	_proto.guanliyemianwenzi_i = function () {
		var t = new eui.Label();
		this.guanliyemianwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "第 1 / 2 页";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 181;
		t.x = 277;
		t.y = 817;
		return t;
	};
	return GuanlijiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Jiajugoumai.exml'] = window.JiajugoumaiSkin = (function (_super) {
	__extends(JiajugoumaiSkin, _super);
	var JiajugoumaiSkin$Skin30 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin30, _super);
		function JiajugoumaiSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shiyong1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shiyong3_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shiyong2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin30;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin31 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin31, _super);
		function JiajugoumaiSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_goumai1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_goumai3_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_goumai2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin31;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin32 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin32, _super);
		function JiajugoumaiSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shiyong1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shiyong3_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shiyong2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin32;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin33 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin33, _super);
		function JiajugoumaiSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_goumai1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_goumai3_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_goumai2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin33;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin34 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin34, _super);
		function JiajugoumaiSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shiyong1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shiyong3_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shiyong2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin34;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin35 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin35, _super);
		function JiajugoumaiSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_goumai1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_goumai3_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_goumai2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin35;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin36 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin36, _super);
		function JiajugoumaiSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shiyong1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shiyong3_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shiyong2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin36;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin37 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin37, _super);
		function JiajugoumaiSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_goumai1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_goumai3_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_goumai2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin37;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin38 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin38, _super);
		function JiajugoumaiSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_kuaican1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_kuaican1_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_kuaican2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin38;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin39 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin39, _super);
		function JiajugoumaiSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_huoguo1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_huoguo1_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_huoguo2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin39;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin40 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin40, _super);
		function JiajugoumaiSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_xiaochi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_xiaochi1_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_xiaochi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin40;
	})(eui.Skin);

	var JiajugoumaiSkin$Skin41 = 	(function (_super) {
		__extends(JiajugoumaiSkin$Skin41, _super);
		function JiajugoumaiSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_tiandian1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_tiandian1_png")
					])
			];
		}
		var _proto = JiajugoumaiSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_tiandian2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiajugoumaiSkin$Skin41;
	})(eui.Skin);

	function JiajugoumaiSkin() {
		_super.call(this);
		this.skinParts = ["img_jiajudiban0","jiajuicon0","jiajumingzi0","jiajujiage0","jiajujiagetubiao0","but_jiajushiyong0","but_jiajugoumai0","img_jiajuweihuode0","jiajufenlanzu0","img_jiajudiban1","jiajuicon1","jiajumingzi1","jiajujiage1","jiajujiagetubiao1","but_jiajushiyong1","but_jiajugoumai1","img_jiajuweihuode1","jiajufenlanzu1","img_jiajudiban2","jiajuicon2","jiajumingzi2","jiajujiage2","jiajujiagetubiao2","but_jiajushiyong2","but_jiajugoumai2","img_jiajuweihuode2","jiajufenlanzu2","img_jiajudiban3","jiajuicon3","jiajumingzi3","jiajujiage3","jiajujiagetubiao3","but_jiajushiyong3","but_jiajugoumai3","img_jiajuweihuode3","jiajufenlanzu3","jiajuliebiaozu","but_kuaican","but_huoguo","but_xiaochi","but_tiandian","jiajubiaotizu","guanlizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.guanlizu_i()];
	}
	var _proto = JiajugoumaiSkin.prototype;

	_proto.guanlizu_i = function () {
		var t = new eui.Group();
		this.guanlizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.jiajuliebiaozu_i(),this.jiajubiaotizu_i()];
		return t;
	};
	_proto.jiajuliebiaozu_i = function () {
		var t = new eui.Group();
		this.jiajuliebiaozu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 438;
		t.left = 117;
		t.right = 103;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 271;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.jiajufenlanzu0_i(),this.jiajufenlanzu1_i(),this.jiajufenlanzu2_i(),this.jiajufenlanzu3_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 10;
		t.paddingLeft = 5;
		t.verticalAlign = "middle";
		t.verticalGap = 6;
		return t;
	};
	_proto.jiajufenlanzu0_i = function () {
		var t = new eui.Group();
		this.jiajufenlanzu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 299.84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 254.45;
		t.x = 14;
		t.y = 50.66;
		t.elementsContent = [this.img_jiajudiban0_i(),this.jiajuicon0_i(),this.jiajumingzi0_i(),this.jiajujiage0_i(),this.jiajujiagetubiao0_i(),this.but_jiajushiyong0_i(),this.but_jiajugoumai0_i(),this.img_jiajuweihuode0_i()];
		return t;
	};
	_proto.img_jiajudiban0_i = function () {
		var t = new eui.Image();
		this.img_jiajudiban0 = t;
		t.anchorOffsetX = 0;
		t.source = "img_jiajudiban_png";
		t.width = 230.718;
		t.x = 12.43;
		t.y = 11.12;
		return t;
	};
	_proto.jiajuicon0_i = function () {
		var t = new eui.Image();
		this.jiajuicon0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 131;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_jiaju1_1_png";
		t.width = 215;
		t.x = 19.72;
		t.y = 43.31;
		return t;
	};
	_proto.jiajumingzi0_i = function () {
		var t = new eui.Label();
		this.jiajumingzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "红木桌子";
		t.textAlign = "center";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 40.72;
		t.y = 178.93;
		return t;
	};
	_proto.jiajujiage0_i = function () {
		var t = new eui.Label();
		this.jiajujiage0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xF7F3EF;
		t.text = "3000";
		t.textAlign = "right";
		t.textColor = 0xDB1515;
		t.verticalAlign = "middle";
		t.width = 136;
		t.x = 59.01;
		t.y = 250.81;
		return t;
	};
	_proto.jiajujiagetubiao0_i = function () {
		var t = new eui.Image();
		this.jiajujiagetubiao0 = t;
		t.height = 30;
		t.source = "img_qian_png";
		t.width = 30;
		t.x = 74.84;
		t.y = 254.81;
		return t;
	};
	_proto.but_jiajushiyong0_i = function () {
		var t = new eui.Button();
		this.but_jiajushiyong0 = t;
		t.alpha = 1;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 69.79;
		t.y = 213.31;
		t.skinName = JiajugoumaiSkin$Skin30;
		return t;
	};
	_proto.but_jiajugoumai0_i = function () {
		var t = new eui.Button();
		this.but_jiajugoumai0 = t;
		t.alpha = 1;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 69.79;
		t.y = 213.31;
		t.skinName = JiajugoumaiSkin$Skin31;
		return t;
	};
	_proto.img_jiajuweihuode0_i = function () {
		var t = new eui.Image();
		this.img_jiajuweihuode0 = t;
		t.source = "img_weihuode_png";
		t.x = 19.72;
		t.y = 19.81;
		return t;
	};
	_proto.jiajufenlanzu1_i = function () {
		var t = new eui.Group();
		this.jiajufenlanzu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 299.84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 254.45;
		t.x = 276;
		t.y = 51.66;
		t.elementsContent = [this.img_jiajudiban1_i(),this.jiajuicon1_i(),this.jiajumingzi1_i(),this.jiajujiage1_i(),this.jiajujiagetubiao1_i(),this.but_jiajushiyong1_i(),this.but_jiajugoumai1_i(),this.img_jiajuweihuode1_i()];
		return t;
	};
	_proto.img_jiajudiban1_i = function () {
		var t = new eui.Image();
		this.img_jiajudiban1 = t;
		t.anchorOffsetX = 0;
		t.source = "img_jiajudiban_png";
		t.width = 230.718;
		t.x = 12.43;
		t.y = 11.12;
		return t;
	};
	_proto.jiajuicon1_i = function () {
		var t = new eui.Image();
		this.jiajuicon1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 131;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_jiaju1_1_png";
		t.width = 215;
		t.x = 19.72;
		t.y = 43.31;
		return t;
	};
	_proto.jiajumingzi1_i = function () {
		var t = new eui.Label();
		this.jiajumingzi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "红木桌子";
		t.textAlign = "center";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 40.72;
		t.y = 178.93;
		return t;
	};
	_proto.jiajujiage1_i = function () {
		var t = new eui.Label();
		this.jiajujiage1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xF7F3EF;
		t.text = "3000";
		t.textAlign = "right";
		t.textColor = 0xDB1515;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 57.67;
		t.y = 250.81;
		return t;
	};
	_proto.jiajujiagetubiao1_i = function () {
		var t = new eui.Image();
		this.jiajujiagetubiao1 = t;
		t.height = 30;
		t.source = "img_qian_png";
		t.width = 30;
		t.x = 74.84;
		t.y = 254.81;
		return t;
	};
	_proto.but_jiajushiyong1_i = function () {
		var t = new eui.Button();
		this.but_jiajushiyong1 = t;
		t.alpha = 1;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 69.79;
		t.y = 213.31;
		t.skinName = JiajugoumaiSkin$Skin32;
		return t;
	};
	_proto.but_jiajugoumai1_i = function () {
		var t = new eui.Button();
		this.but_jiajugoumai1 = t;
		t.alpha = 1;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 69.79;
		t.y = 213.31;
		t.skinName = JiajugoumaiSkin$Skin33;
		return t;
	};
	_proto.img_jiajuweihuode1_i = function () {
		var t = new eui.Image();
		this.img_jiajuweihuode1 = t;
		t.source = "img_weihuode_png";
		t.x = 19.72;
		t.y = 19.81;
		return t;
	};
	_proto.jiajufenlanzu2_i = function () {
		var t = new eui.Group();
		this.jiajufenlanzu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 299.84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 254.45;
		t.x = 14;
		t.y = 324.66;
		t.elementsContent = [this.img_jiajudiban2_i(),this.jiajuicon2_i(),this.jiajumingzi2_i(),this.jiajujiage2_i(),this.jiajujiagetubiao2_i(),this.but_jiajushiyong2_i(),this.but_jiajugoumai2_i(),this.img_jiajuweihuode2_i()];
		return t;
	};
	_proto.img_jiajudiban2_i = function () {
		var t = new eui.Image();
		this.img_jiajudiban2 = t;
		t.anchorOffsetX = 0;
		t.source = "img_jiajudiban_png";
		t.width = 230.718;
		t.x = 12.43;
		t.y = 11.12;
		return t;
	};
	_proto.jiajuicon2_i = function () {
		var t = new eui.Image();
		this.jiajuicon2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 131;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_jiaju1_1_png";
		t.width = 215;
		t.x = 19.72;
		t.y = 43.31;
		return t;
	};
	_proto.jiajumingzi2_i = function () {
		var t = new eui.Label();
		this.jiajumingzi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "红木桌子";
		t.textAlign = "center";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 40.72;
		t.y = 178.93;
		return t;
	};
	_proto.jiajujiage2_i = function () {
		var t = new eui.Label();
		this.jiajujiage2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xF7F3EF;
		t.text = "3000";
		t.textAlign = "right";
		t.textColor = 0xDB1515;
		t.verticalAlign = "middle";
		t.width = 134.67;
		t.x = 57.67;
		t.y = 250.81;
		return t;
	};
	_proto.jiajujiagetubiao2_i = function () {
		var t = new eui.Image();
		this.jiajujiagetubiao2 = t;
		t.height = 30;
		t.source = "img_qian_png";
		t.width = 30;
		t.x = 74.84;
		t.y = 254.81;
		return t;
	};
	_proto.but_jiajushiyong2_i = function () {
		var t = new eui.Button();
		this.but_jiajushiyong2 = t;
		t.alpha = 1;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 69.79;
		t.y = 213.31;
		t.skinName = JiajugoumaiSkin$Skin34;
		return t;
	};
	_proto.but_jiajugoumai2_i = function () {
		var t = new eui.Button();
		this.but_jiajugoumai2 = t;
		t.alpha = 1;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 69.79;
		t.y = 213.31;
		t.skinName = JiajugoumaiSkin$Skin35;
		return t;
	};
	_proto.img_jiajuweihuode2_i = function () {
		var t = new eui.Image();
		this.img_jiajuweihuode2 = t;
		t.source = "img_weihuode_png";
		t.x = 19.72;
		t.y = 19.81;
		return t;
	};
	_proto.jiajufenlanzu3_i = function () {
		var t = new eui.Group();
		this.jiajufenlanzu3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 299.84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 254.45;
		t.x = 277;
		t.y = 325.66;
		t.elementsContent = [this.img_jiajudiban3_i(),this.jiajuicon3_i(),this.jiajumingzi3_i(),this.jiajujiage3_i(),this.jiajujiagetubiao3_i(),this.but_jiajushiyong3_i(),this.but_jiajugoumai3_i(),this.img_jiajuweihuode3_i()];
		return t;
	};
	_proto.img_jiajudiban3_i = function () {
		var t = new eui.Image();
		this.img_jiajudiban3 = t;
		t.anchorOffsetX = 0;
		t.source = "img_jiajudiban_png";
		t.width = 230.718;
		t.x = 12.43;
		t.y = 11.12;
		return t;
	};
	_proto.jiajuicon3_i = function () {
		var t = new eui.Image();
		this.jiajuicon3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 131;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_jiaju1_1_png";
		t.width = 215;
		t.x = 19.72;
		t.y = 43.31;
		return t;
	};
	_proto.jiajumingzi3_i = function () {
		var t = new eui.Label();
		this.jiajumingzi3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x35322F;
		t.text = "红木桌子";
		t.textAlign = "center";
		t.textColor = 0xF7F2F2;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 40.72;
		t.y = 178.93;
		return t;
	};
	_proto.jiajujiage3_i = function () {
		var t = new eui.Label();
		this.jiajujiage3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 37;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0xF7F3EF;
		t.text = "3000";
		t.textAlign = "right";
		t.textColor = 0xDB1515;
		t.verticalAlign = "middle";
		t.width = 130.67;
		t.x = 60.34;
		t.y = 250.81;
		return t;
	};
	_proto.jiajujiagetubiao3_i = function () {
		var t = new eui.Image();
		this.jiajujiagetubiao3 = t;
		t.height = 30;
		t.source = "img_qian_png";
		t.width = 30;
		t.x = 74.84;
		t.y = 254.81;
		return t;
	};
	_proto.but_jiajushiyong3_i = function () {
		var t = new eui.Button();
		this.but_jiajushiyong3 = t;
		t.alpha = 1;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 69.79;
		t.y = 213.31;
		t.skinName = JiajugoumaiSkin$Skin36;
		return t;
	};
	_proto.but_jiajugoumai3_i = function () {
		var t = new eui.Button();
		this.but_jiajugoumai3 = t;
		t.alpha = 1;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 69.79;
		t.y = 213.31;
		t.skinName = JiajugoumaiSkin$Skin37;
		return t;
	};
	_proto.img_jiajuweihuode3_i = function () {
		var t = new eui.Image();
		this.img_jiajuweihuode3 = t;
		t.source = "img_weihuode_png";
		t.x = 19.72;
		t.y = 19.81;
		return t;
	};
	_proto.jiajubiaotizu_i = function () {
		var t = new eui.Group();
		this.jiajubiaotizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 1066;
		t.left = 112;
		t.right = 99;
		t.top = 203;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.but_kuaican_i(),this.but_huoguo_i(),this.but_xiaochi_i(),this.but_tiandian_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.but_kuaican_i = function () {
		var t = new eui.Button();
		this.but_kuaican = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 22.72;
		t.y = 1;
		t.skinName = JiajugoumaiSkin$Skin38;
		return t;
	};
	_proto.but_huoguo_i = function () {
		var t = new eui.Button();
		this.but_huoguo = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 158.72000000000003;
		t.y = 1;
		t.skinName = JiajugoumaiSkin$Skin39;
		return t;
	};
	_proto.but_xiaochi_i = function () {
		var t = new eui.Button();
		this.but_xiaochi = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 302.72;
		t.y = 1;
		t.skinName = JiajugoumaiSkin$Skin40;
		return t;
	};
	_proto.but_tiandian_i = function () {
		var t = new eui.Button();
		this.but_tiandian = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 443.34000000000003;
		t.y = 1;
		t.skinName = JiajugoumaiSkin$Skin41;
		return t;
	};
	return JiajugoumaiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Jinbiwenben.exml'] = window.JinbiwenbenSkin = (function (_super) {
	__extends(JinbiwenbenSkin, _super);
	function JinbiwenbenSkin() {
		_super.call(this);
		this.skinParts = ["wenzineirong","wenzizu"];
		
		this.height = 40;
		this.width = 100;
		this.elementsContent = [this.wenzizu_i()];
	}
	var _proto = JinbiwenbenSkin.prototype;

	_proto.wenzizu_i = function () {
		var t = new eui.Group();
		this.wenzizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.width = 93;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.wenzineirong_i()];
		return t;
	};
	_proto.wenzineirong_i = function () {
		var t = new eui.Label();
		this.wenzineirong = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0xf7f7ef;
		t.text = "+ 50";
		t.textColor = 0xed871c;
		t.width = 88;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return JinbiwenbenSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Jinyingguanlijiemian.exml'] = window.JinyingguanlijiemianSkin = (function (_super) {
	__extends(JinyingguanlijiemianSkin, _super);
	var JinyingguanlijiemianSkin$Skin42 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin42, _super);
		function JinyingguanlijiemianSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin42;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin43 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin43, _super);
		function JinyingguanlijiemianSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin43;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin44 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin44, _super);
		function JinyingguanlijiemianSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin44;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin45 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin45, _super);
		function JinyingguanlijiemianSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin45;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin46 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin46, _super);
		function JinyingguanlijiemianSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin46;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin47 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin47, _super);
		function JinyingguanlijiemianSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin47;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin48 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin48, _super);
		function JinyingguanlijiemianSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin48;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin49 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin49, _super);
		function JinyingguanlijiemianSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin49;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin50 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin50, _super);
		function JinyingguanlijiemianSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin50;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin51 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin51, _super);
		function JinyingguanlijiemianSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin51;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin52 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin52, _super);
		function JinyingguanlijiemianSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin52;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin53 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin53, _super);
		function JinyingguanlijiemianSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin53;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin54 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin54, _super);
		function JinyingguanlijiemianSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin54;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin55 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin55, _super);
		function JinyingguanlijiemianSkin$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin55;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin56 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin56, _super);
		function JinyingguanlijiemianSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin56;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin57 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin57, _super);
		function JinyingguanlijiemianSkin$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin57;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin58 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin58, _super);
		function JinyingguanlijiemianSkin$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin58;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin59 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin59, _super);
		function JinyingguanlijiemianSkin$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin59;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin60 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin60, _super);
		function JinyingguanlijiemianSkin$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin60;
	})(eui.Skin);

	function JinyingguanlijiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao","img_baobiaodiban","but_guanbi","keliuliangtext","kerongliangtext","lixianshouyitext","waimaishouyitext","yuangongxinzitext","zujinshouru","meiqishouru","fadanshouru","fangwuzujintext","shuidianmeiqitext","jingyinfadantext","weishentext","anbaotext","xiaochaotijiatext","xiaochitijiatext","shangcaisudutext","shicaichubeitext","fandiankoubeitext","huoguotijiatext","zaocantijiatext","shihaojiangditext","shuomingbut","shuomingbut0","shuomingbut1","shuomingbut3","shuomingbut4","shuomingbut5","shuomingbut6","shuomingbut7","shuomingbut8","shuomingbut9","shuomingbut10","shuomingbut11","shuomingbut12","shuomingbut13","shuomingbut14","shuomingbut15","shuomingbut16","shuomingbut2","jingyinguanlizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.jingyinguanlizu_i()];
	}
	var _proto = JinyingguanlijiemianSkin.prototype;

	_proto.jingyinguanlizu_i = function () {
		var t = new eui.Group();
		this.jingyinguanlizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao_i(),this.img_baobiaodiban_i(),this.but_guanbi_i(),this.keliuliangtext_i(),this.kerongliangtext_i(),this.lixianshouyitext_i(),this.waimaishouyitext_i(),this.yuangongxinzitext_i(),this.zujinshouru_i(),this.meiqishouru_i(),this.fadanshouru_i(),this.fangwuzujintext_i(),this.shuidianmeiqitext_i(),this.jingyinfadantext_i(),this.weishentext_i(),this.anbaotext_i(),this.xiaochaotijiatext_i(),this.xiaochitijiatext_i(),this.shangcaisudutext_i(),this.shicaichubeitext_i(),this.fandiankoubeitext_i(),this.huoguotijiatext_i(),this.zaocantijiatext_i(),this.shihaojiangditext_i(),this.shuomingbut_i(),this.shuomingbut0_i(),this.shuomingbut1_i(),this.shuomingbut3_i(),this.shuomingbut4_i(),this.shuomingbut5_i(),this.shuomingbut6_i(),this.shuomingbut7_i(),this.shuomingbut8_i(),this.shuomingbut9_i(),this.shuomingbut10_i(),this.shuomingbut11_i(),this.shuomingbut12_i(),this.shuomingbut13_i(),this.shuomingbut14_i(),this.shuomingbut15_i(),this.shuomingbut16_i(),this.shuomingbut2_i()];
		return t;
	};
	_proto.img_heisezhezao_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.img_baobiaodiban_i = function () {
		var t = new eui.Image();
		this.img_baobiaodiban = t;
		t.source = "img_baobiaodiban_png";
		t.x = 52;
		t.y = 128;
		return t;
	};
	_proto.but_guanbi_i = function () {
		var t = new eui.Button();
		this.but_guanbi = t;
		t.enabled = true;
		t.label = "";
		t.x = 614;
		t.y = 134;
		t.skinName = JinyingguanlijiemianSkin$Skin42;
		return t;
	};
	_proto.keliuliangtext_i = function () {
		var t = new eui.Label();
		this.keliuliangtext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 284;
		t.y = 335;
		return t;
	};
	_proto.kerongliangtext_i = function () {
		var t = new eui.Label();
		this.kerongliangtext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 284;
		t.y = 384;
		return t;
	};
	_proto.lixianshouyitext_i = function () {
		var t = new eui.Label();
		this.lixianshouyitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 518;
		t.y = 335;
		return t;
	};
	_proto.waimaishouyitext_i = function () {
		var t = new eui.Label();
		this.waimaishouyitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 518;
		t.y = 387;
		return t;
	};
	_proto.yuangongxinzitext_i = function () {
		var t = new eui.Label();
		this.yuangongxinzitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 500;
		return t;
	};
	_proto.zujinshouru_i = function () {
		var t = new eui.Label();
		this.zujinshouru = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 136;
		t.x = 210;
		t.y = 586.5;
		return t;
	};
	_proto.meiqishouru_i = function () {
		var t = new eui.Label();
		this.meiqishouru = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 136;
		t.x = 425;
		t.y = 526.5;
		return t;
	};
	_proto.fadanshouru_i = function () {
		var t = new eui.Label();
		this.fadanshouru = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 136;
		t.x = 425;
		t.y = 586.5;
		return t;
	};
	_proto.fangwuzujintext_i = function () {
		var t = new eui.Label();
		this.fangwuzujintext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 561.5;
		return t;
	};
	_proto.shuidianmeiqitext_i = function () {
		var t = new eui.Label();
		this.shuidianmeiqitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 500;
		return t;
	};
	_proto.jingyinfadantext_i = function () {
		var t = new eui.Label();
		this.jingyinfadantext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 559.5;
		return t;
	};
	_proto.weishentext_i = function () {
		var t = new eui.Label();
		this.weishentext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 680.5;
		return t;
	};
	_proto.anbaotext_i = function () {
		var t = new eui.Label();
		this.anbaotext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 741.5;
		return t;
	};
	_proto.xiaochaotijiatext_i = function () {
		var t = new eui.Label();
		this.xiaochaotijiatext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 795.5;
		return t;
	};
	_proto.xiaochitijiatext_i = function () {
		var t = new eui.Label();
		this.xiaochitijiatext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 855.5;
		return t;
	};
	_proto.shangcaisudutext_i = function () {
		var t = new eui.Label();
		this.shangcaisudutext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 911.5;
		return t;
	};
	_proto.shicaichubeitext_i = function () {
		var t = new eui.Label();
		this.shicaichubeitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 680.5;
		return t;
	};
	_proto.fandiankoubeitext_i = function () {
		var t = new eui.Label();
		this.fandiankoubeitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 740.5;
		return t;
	};
	_proto.huoguotijiatext_i = function () {
		var t = new eui.Label();
		this.huoguotijiatext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 516;
		t.y = 795.5;
		return t;
	};
	_proto.zaocantijiatext_i = function () {
		var t = new eui.Label();
		this.zaocantijiatext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 855.5;
		return t;
	};
	_proto.shihaojiangditext_i = function () {
		var t = new eui.Label();
		this.shihaojiangditext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 911.5;
		return t;
	};
	_proto.shuomingbut_i = function () {
		var t = new eui.Button();
		this.shuomingbut = t;
		t.enabled = true;
		t.label = "";
		t.x = 351;
		t.y = 333;
		t.skinName = JinyingguanlijiemianSkin$Skin43;
		return t;
	};
	_proto.shuomingbut0_i = function () {
		var t = new eui.Button();
		this.shuomingbut0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 588.5;
		t.y = 333;
		t.skinName = JinyingguanlijiemianSkin$Skin44;
		return t;
	};
	_proto.shuomingbut1_i = function () {
		var t = new eui.Button();
		this.shuomingbut1 = t;
		t.enabled = true;
		t.label = "";
		t.x = 351;
		t.y = 386;
		t.skinName = JinyingguanlijiemianSkin$Skin45;
		return t;
	};
	_proto.shuomingbut3_i = function () {
		var t = new eui.Button();
		this.shuomingbut3 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 500;
		t.skinName = JinyingguanlijiemianSkin$Skin46;
		return t;
	};
	_proto.shuomingbut4_i = function () {
		var t = new eui.Button();
		this.shuomingbut4 = t;
		t.enabled = true;
		t.label = "";
		t.x = 588.5;
		t.y = 499;
		t.skinName = JinyingguanlijiemianSkin$Skin47;
		return t;
	};
	_proto.shuomingbut5_i = function () {
		var t = new eui.Button();
		this.shuomingbut5 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 561.5;
		t.skinName = JinyingguanlijiemianSkin$Skin48;
		return t;
	};
	_proto.shuomingbut6_i = function () {
		var t = new eui.Button();
		this.shuomingbut6 = t;
		t.enabled = true;
		t.label = "";
		t.x = 588.5;
		t.y = 558.5;
		t.skinName = JinyingguanlijiemianSkin$Skin49;
		return t;
	};
	_proto.shuomingbut7_i = function () {
		var t = new eui.Button();
		this.shuomingbut7 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 680.5;
		t.skinName = JinyingguanlijiemianSkin$Skin50;
		return t;
	};
	_proto.shuomingbut8_i = function () {
		var t = new eui.Button();
		this.shuomingbut8 = t;
		t.enabled = true;
		t.label = "";
		t.x = 588.5;
		t.y = 680.5;
		t.skinName = JinyingguanlijiemianSkin$Skin51;
		return t;
	};
	_proto.shuomingbut9_i = function () {
		var t = new eui.Button();
		this.shuomingbut9 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 741.5;
		t.skinName = JinyingguanlijiemianSkin$Skin52;
		return t;
	};
	_proto.shuomingbut10_i = function () {
		var t = new eui.Button();
		this.shuomingbut10 = t;
		t.enabled = true;
		t.label = "";
		t.x = 588.5;
		t.y = 739.5;
		t.skinName = JinyingguanlijiemianSkin$Skin53;
		return t;
	};
	_proto.shuomingbut11_i = function () {
		var t = new eui.Button();
		this.shuomingbut11 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 794.5;
		t.skinName = JinyingguanlijiemianSkin$Skin54;
		return t;
	};
	_proto.shuomingbut12_i = function () {
		var t = new eui.Button();
		this.shuomingbut12 = t;
		t.enabled = true;
		t.label = "";
		t.x = 588.5;
		t.y = 794.5;
		t.skinName = JinyingguanlijiemianSkin$Skin55;
		return t;
	};
	_proto.shuomingbut13_i = function () {
		var t = new eui.Button();
		this.shuomingbut13 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 855.5;
		t.skinName = JinyingguanlijiemianSkin$Skin56;
		return t;
	};
	_proto.shuomingbut14_i = function () {
		var t = new eui.Button();
		this.shuomingbut14 = t;
		t.enabled = true;
		t.label = "";
		t.x = 588.5;
		t.y = 854.5;
		t.skinName = JinyingguanlijiemianSkin$Skin57;
		return t;
	};
	_proto.shuomingbut15_i = function () {
		var t = new eui.Button();
		this.shuomingbut15 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 911.5;
		t.skinName = JinyingguanlijiemianSkin$Skin58;
		return t;
	};
	_proto.shuomingbut16_i = function () {
		var t = new eui.Button();
		this.shuomingbut16 = t;
		t.enabled = true;
		t.label = "";
		t.x = 588.5;
		t.y = 910.5;
		t.skinName = JinyingguanlijiemianSkin$Skin59;
		return t;
	};
	_proto.shuomingbut2_i = function () {
		var t = new eui.Button();
		this.shuomingbut2 = t;
		t.enabled = true;
		t.label = "";
		t.x = 588.5;
		t.y = 386;
		t.skinName = JinyingguanlijiemianSkin$Skin60;
		return t;
	};
	return JinyingguanlijiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Meirijiesuan.exml'] = window.MeirijiesuanSkin = (function (_super) {
	__extends(MeirijiesuanSkin, _super);
	var MeirijiesuanSkin$Skin61 = 	(function (_super) {
		__extends(MeirijiesuanSkin$Skin61, _super);
		function MeirijiesuanSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = MeirijiesuanSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MeirijiesuanSkin$Skin61;
	})(eui.Skin);

	function MeirijiesuanSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao","img_meiribaogaobg","riqitext","img_tianqiqing","but_guanbi","img_xinqing","xinqingtext","xinqingzt","xinqingzu","img_jiating","jiatingtext","jiatingzt","jiatingzu","img_jiankang","jiankangtext","jiankangzt","jiankangzu","img_jinbi","jinbitext","jinbizt","jingbizu","gerenzhuangtaizu","meiriyaowentext","renshibiangengtext","di1text","di1jinbi","di1jinbitb","di1wenzizu","di1text0","di1jinbi0","di1jinbitb0","di1wenzizu0","di1text1","di1jinbi1","di1jinbitb1","di1wenzizu1","di1text2","di1jinbi2","di1jinbitb2","di1wenzizu2","di1text3","di1jinbi3","di1jinbitb3","di1wenzizu3","di1text4","di1jinbi4","di1jinbitb4","di1wenzizu4","di1text5","di1jinbi5","di1jinbitb5","di1wenzizu5","di1text6","di1jinbi6","di1jinbitb6","di1wenzizu6","di1text7","di1jinbi7","di1jinbitb7","di1wenzizu7","di1text8","di1jinbi8","di1jinbitb8","di1wenzizu8","di1text9","di1jinbi9","di1jinbitb9","di1wenzizu9","di1text10","di1jinbi10","di1jinbitb10","di1wenzizu10","di1text11","di1jinbi11","di1jinbitb11","di1wenzizu11","di1text12","di1jinbi12","di1jinbitb12","di1wenzizu12","di1text13","di1jinbi13","di1jinbitb13","di1wenzizu13","di1text14","di1jinbi14","di1jinbitb14","di1wenzizu14","di1text15","di1jinbi15","di1jinbitb15","di1wenzizu15","di1text16","di1jinbi16","di1jinbitb16","di1wenzizu16","di1text17","di1jinbi17","di1jinbitb17","di1wenzizu17","di1text18","di1jinbi18","di1jinbitb18","di1wenzizu18","di1text19","di1jinbi19","di1jinbitb19","di1wenzizu19","di1text20","di1jinbi20","di1jinbitb20","di1wenzizu20","di1text21","di1jinbi21","di1jinbitb21","di1wenzizu21","di1text22","di1jinbi22","di1jinbitb22","di1wenzizu22","di1text23","di1jinbi23","di1jinbitb23","di1wenzizu23","di1text24","di1jinbi24","di1jinbitb24","di1wenzizu24","di1text25","di1jinbi25","di1jinbitb25","di1wenzizu25","di1text26","di1jinbi26","di1jinbitb26","di1wenzizu26","di1text27","di1jinbi27","di1jinbitb27","di1wenzizu27","di1text28","di1jinbi28","di1jinbitb28","di1wenzizu28","renshirongqizu","renshigundong","yinxiaotext","yinxiaotext0","yinxiaotext1","yinxiaotext2","yinxiaowenzizu","juesetouxiang","zhuangtai","yitiaochengyuan","juesetouxiang0","zhuangtai0","yitiaochengyuan0","juesetouxiang1","zhuangtai1","yitiaochengyuan1","juesetouxiang2","zhuangtai2","yitiaochengyuan2","meirijiesuanzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.meirijiesuanzu_i()];
	}
	var _proto = MeirijiesuanSkin.prototype;

	_proto.meirijiesuanzu_i = function () {
		var t = new eui.Group();
		this.meirijiesuanzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao_i(),this.img_meiribaogaobg_i(),this.riqitext_i(),this.img_tianqiqing_i(),this.but_guanbi_i(),this.gerenzhuangtaizu_i(),this.meiriyaowentext_i(),this.renshibiangengtext_i(),this.renshigundong_i(),this.yinxiaowenzizu_i(),this.yitiaochengyuan_i(),this.yitiaochengyuan0_i(),this.yitiaochengyuan1_i(),this.yitiaochengyuan2_i()];
		return t;
	};
	_proto.img_heisezhezao_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao = t;
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.img_meiribaogaobg_i = function () {
		var t = new eui.Image();
		this.img_meiribaogaobg = t;
		t.source = "img_meiribaogaobg_png";
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.riqitext_i = function () {
		var t = new eui.Label();
		this.riqitext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 20;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "第1年6月30日";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 166;
		t.x = 504;
		t.y = 286;
		return t;
	};
	_proto.img_tianqiqing_i = function () {
		var t = new eui.Image();
		this.img_tianqiqing = t;
		t.source = "img_tianqiqing_png";
		t.x = 68.5;
		t.y = 195;
		return t;
	};
	_proto.but_guanbi_i = function () {
		var t = new eui.Button();
		this.but_guanbi = t;
		t.enabled = true;
		t.label = "";
		t.x = 639;
		t.y = 195;
		t.skinName = MeirijiesuanSkin$Skin61;
		return t;
	};
	_proto.gerenzhuangtaizu_i = function () {
		var t = new eui.Group();
		this.gerenzhuangtaizu = t;
		t.x = 148;
		t.y = 331;
		t.elementsContent = [this.xinqingzu_i(),this.jiatingzu_i(),this.jiankangzu_i(),this.jingbizu_i()];
		return t;
	};
	_proto.xinqingzu_i = function () {
		var t = new eui.Group();
		this.xinqingzu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_xinqing_i(),this.xinqingtext_i(),this.xinqingzt_i()];
		return t;
	};
	_proto.img_xinqing_i = function () {
		var t = new eui.Image();
		this.img_xinqing = t;
		t.height = 40;
		t.source = "img_xinqing_png";
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.xinqingtext_i = function () {
		var t = new eui.Label();
		this.xinqingtext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "9999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 82;
		t.x = 55;
		t.y = 10;
		return t;
	};
	_proto.xinqingzt_i = function () {
		var t = new eui.Label();
		this.xinqingzt = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "（开心）";
		t.textAlign = "left";
		t.textColor = 0xf26021;
		t.verticalAlign = "middle";
		t.width = 91;
		t.x = 144;
		t.y = 10;
		return t;
	};
	_proto.jiatingzu_i = function () {
		var t = new eui.Group();
		this.jiatingzu = t;
		t.x = 0;
		t.y = 61;
		t.elementsContent = [this.img_jiating_i(),this.jiatingtext_i(),this.jiatingzt_i()];
		return t;
	};
	_proto.img_jiating_i = function () {
		var t = new eui.Image();
		this.img_jiating = t;
		t.height = 40;
		t.source = "img_jiating_png";
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jiatingtext_i = function () {
		var t = new eui.Label();
		this.jiatingtext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "9999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 82;
		t.x = 55;
		t.y = 10;
		return t;
	};
	_proto.jiatingzt_i = function () {
		var t = new eui.Label();
		this.jiatingzt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "（开心）";
		t.textAlign = "left";
		t.textColor = 0xf26021;
		t.verticalAlign = "middle";
		t.width = 90;
		t.x = 145;
		t.y = 10;
		return t;
	};
	_proto.jiankangzu_i = function () {
		var t = new eui.Group();
		this.jiankangzu = t;
		t.x = 265;
		t.y = 0;
		t.elementsContent = [this.img_jiankang_i(),this.jiankangtext_i(),this.jiankangzt_i()];
		return t;
	};
	_proto.img_jiankang_i = function () {
		var t = new eui.Image();
		this.img_jiankang = t;
		t.height = 40;
		t.source = "img_jiankang_png";
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jiankangtext_i = function () {
		var t = new eui.Label();
		this.jiankangtext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "9999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 82;
		t.x = 55;
		t.y = 10;
		return t;
	};
	_proto.jiankangzt_i = function () {
		var t = new eui.Label();
		this.jiankangzt = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "（开心）";
		t.textAlign = "left";
		t.textColor = 0xf26021;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 145;
		t.y = 10;
		return t;
	};
	_proto.jingbizu_i = function () {
		var t = new eui.Group();
		this.jingbizu = t;
		t.x = 265;
		t.y = 61;
		t.elementsContent = [this.img_jinbi_i(),this.jinbitext_i(),this.jinbizt_i()];
		return t;
	};
	_proto.img_jinbi_i = function () {
		var t = new eui.Image();
		this.img_jinbi = t;
		t.height = 40;
		t.source = "img_qian_png";
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jinbitext_i = function () {
		var t = new eui.Label();
		this.jinbitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "9999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 82;
		t.x = 55;
		t.y = 10;
		return t;
	};
	_proto.jinbizt_i = function () {
		var t = new eui.Label();
		this.jinbizt = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "（开心）";
		t.textAlign = "left";
		t.textColor = 0xf26021;
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 145;
		t.y = 10;
		return t;
	};
	_proto.meiriyaowentext_i = function () {
		var t = new eui.Label();
		this.meiriyaowentext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 88;
		t.lineSpacing = 10;
		t.size = 18;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "        第1年6月30日第1年6月30日第1年6月30日第1年6月30日第1年6月30日第1年6月30日第1年6月30日第1年6月30日第1年6";
		t.verticalAlign = "middle";
		t.width = 464;
		t.x = 129;
		t.y = 491;
		return t;
	};
	_proto.renshibiangengtext_i = function () {
		var t = new eui.Label();
		this.renshibiangengtext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 35;
		t.italic = true;
		t.size = 20;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "当前没有人事变更!!";
		t.verticalAlign = "middle";
		t.width = 198;
		t.x = 158;
		t.y = 723;
		return t;
	};
	_proto.renshigundong_i = function () {
		var t = new eui.Scroller();
		this.renshigundong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 104;
		t.width = 201;
		t.x = 151;
		t.y = 687;
		t.viewport = this.renshirongqizu_i();
		return t;
	};
	_proto.renshirongqizu_i = function () {
		var t = new eui.Group();
		this.renshirongqizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 675;
		t.width = 197;
		t.elementsContent = [this.di1wenzizu_i(),this.di1wenzizu0_i(),this.di1wenzizu1_i(),this.di1wenzizu2_i(),this.di1wenzizu3_i(),this.di1wenzizu4_i(),this.di1wenzizu5_i(),this.di1wenzizu6_i(),this.di1wenzizu7_i(),this.di1wenzizu8_i(),this.di1wenzizu9_i(),this.di1wenzizu10_i(),this.di1wenzizu11_i(),this.di1wenzizu12_i(),this.di1wenzizu13_i(),this.di1wenzizu14_i(),this.di1wenzizu15_i(),this.di1wenzizu16_i(),this.di1wenzizu17_i(),this.di1wenzizu18_i(),this.di1wenzizu19_i(),this.di1wenzizu20_i(),this.di1wenzizu21_i(),this.di1wenzizu22_i(),this.di1wenzizu23_i(),this.di1wenzizu24_i(),this.di1wenzizu25_i(),this.di1wenzizu26_i(),this.di1wenzizu27_i(),this.di1wenzizu28_i()];
		return t;
	};
	_proto.di1wenzizu_i = function () {
		var t = new eui.Group();
		this.di1wenzizu = t;
		t.x = 3;
		t.y = 4;
		t.elementsContent = [this.di1text_i(),this.di1jinbi_i(),this.di1jinbitb_i()];
		return t;
	};
	_proto.di1text_i = function () {
		var t = new eui.Label();
		this.di1text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi_i = function () {
		var t = new eui.Label();
		this.di1jinbi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb_i = function () {
		var t = new eui.Image();
		this.di1jinbitb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu0_i = function () {
		var t = new eui.Group();
		this.di1wenzizu0 = t;
		t.x = 3;
		t.y = 35;
		t.elementsContent = [this.di1text0_i(),this.di1jinbi0_i(),this.di1jinbitb0_i()];
		return t;
	};
	_proto.di1text0_i = function () {
		var t = new eui.Label();
		this.di1text0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi0_i = function () {
		var t = new eui.Label();
		this.di1jinbi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb0_i = function () {
		var t = new eui.Image();
		this.di1jinbitb0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu1_i = function () {
		var t = new eui.Group();
		this.di1wenzizu1 = t;
		t.x = 3;
		t.y = 67;
		t.elementsContent = [this.di1text1_i(),this.di1jinbi1_i(),this.di1jinbitb1_i()];
		return t;
	};
	_proto.di1text1_i = function () {
		var t = new eui.Label();
		this.di1text1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi1_i = function () {
		var t = new eui.Label();
		this.di1jinbi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb1_i = function () {
		var t = new eui.Image();
		this.di1jinbitb1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu2_i = function () {
		var t = new eui.Group();
		this.di1wenzizu2 = t;
		t.x = 3;
		t.y = 96;
		t.elementsContent = [this.di1text2_i(),this.di1jinbi2_i(),this.di1jinbitb2_i()];
		return t;
	};
	_proto.di1text2_i = function () {
		var t = new eui.Label();
		this.di1text2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi2_i = function () {
		var t = new eui.Label();
		this.di1jinbi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb2_i = function () {
		var t = new eui.Image();
		this.di1jinbitb2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu3_i = function () {
		var t = new eui.Group();
		this.di1wenzizu3 = t;
		t.x = 3;
		t.y = 128;
		t.elementsContent = [this.di1text3_i(),this.di1jinbi3_i(),this.di1jinbitb3_i()];
		return t;
	};
	_proto.di1text3_i = function () {
		var t = new eui.Label();
		this.di1text3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi3_i = function () {
		var t = new eui.Label();
		this.di1jinbi3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb3_i = function () {
		var t = new eui.Image();
		this.di1jinbitb3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu4_i = function () {
		var t = new eui.Group();
		this.di1wenzizu4 = t;
		t.x = 3;
		t.y = 160;
		t.elementsContent = [this.di1text4_i(),this.di1jinbi4_i(),this.di1jinbitb4_i()];
		return t;
	};
	_proto.di1text4_i = function () {
		var t = new eui.Label();
		this.di1text4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi4_i = function () {
		var t = new eui.Label();
		this.di1jinbi4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb4_i = function () {
		var t = new eui.Image();
		this.di1jinbitb4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu5_i = function () {
		var t = new eui.Group();
		this.di1wenzizu5 = t;
		t.x = 3;
		t.y = 192;
		t.elementsContent = [this.di1text5_i(),this.di1jinbi5_i(),this.di1jinbitb5_i()];
		return t;
	};
	_proto.di1text5_i = function () {
		var t = new eui.Label();
		this.di1text5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi5_i = function () {
		var t = new eui.Label();
		this.di1jinbi5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb5_i = function () {
		var t = new eui.Image();
		this.di1jinbitb5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu6_i = function () {
		var t = new eui.Group();
		this.di1wenzizu6 = t;
		t.x = 3;
		t.y = 224;
		t.elementsContent = [this.di1text6_i(),this.di1jinbi6_i(),this.di1jinbitb6_i()];
		return t;
	};
	_proto.di1text6_i = function () {
		var t = new eui.Label();
		this.di1text6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi6_i = function () {
		var t = new eui.Label();
		this.di1jinbi6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb6_i = function () {
		var t = new eui.Image();
		this.di1jinbitb6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu7_i = function () {
		var t = new eui.Group();
		this.di1wenzizu7 = t;
		t.x = 3;
		t.y = 256;
		t.elementsContent = [this.di1text7_i(),this.di1jinbi7_i(),this.di1jinbitb7_i()];
		return t;
	};
	_proto.di1text7_i = function () {
		var t = new eui.Label();
		this.di1text7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi7_i = function () {
		var t = new eui.Label();
		this.di1jinbi7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb7_i = function () {
		var t = new eui.Image();
		this.di1jinbitb7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu8_i = function () {
		var t = new eui.Group();
		this.di1wenzizu8 = t;
		t.x = 3;
		t.y = 289;
		t.elementsContent = [this.di1text8_i(),this.di1jinbi8_i(),this.di1jinbitb8_i()];
		return t;
	};
	_proto.di1text8_i = function () {
		var t = new eui.Label();
		this.di1text8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi8_i = function () {
		var t = new eui.Label();
		this.di1jinbi8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb8_i = function () {
		var t = new eui.Image();
		this.di1jinbitb8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu9_i = function () {
		var t = new eui.Group();
		this.di1wenzizu9 = t;
		t.x = 3;
		t.y = 321;
		t.elementsContent = [this.di1text9_i(),this.di1jinbi9_i(),this.di1jinbitb9_i()];
		return t;
	};
	_proto.di1text9_i = function () {
		var t = new eui.Label();
		this.di1text9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi9_i = function () {
		var t = new eui.Label();
		this.di1jinbi9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb9_i = function () {
		var t = new eui.Image();
		this.di1jinbitb9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu10_i = function () {
		var t = new eui.Group();
		this.di1wenzizu10 = t;
		t.x = 3;
		t.y = 353;
		t.elementsContent = [this.di1text10_i(),this.di1jinbi10_i(),this.di1jinbitb10_i()];
		return t;
	};
	_proto.di1text10_i = function () {
		var t = new eui.Label();
		this.di1text10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi10_i = function () {
		var t = new eui.Label();
		this.di1jinbi10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb10_i = function () {
		var t = new eui.Image();
		this.di1jinbitb10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu11_i = function () {
		var t = new eui.Group();
		this.di1wenzizu11 = t;
		t.x = 3;
		t.y = 385;
		t.elementsContent = [this.di1text11_i(),this.di1jinbi11_i(),this.di1jinbitb11_i()];
		return t;
	};
	_proto.di1text11_i = function () {
		var t = new eui.Label();
		this.di1text11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi11_i = function () {
		var t = new eui.Label();
		this.di1jinbi11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb11_i = function () {
		var t = new eui.Image();
		this.di1jinbitb11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu12_i = function () {
		var t = new eui.Group();
		this.di1wenzizu12 = t;
		t.x = 3;
		t.y = 417;
		t.elementsContent = [this.di1text12_i(),this.di1jinbi12_i(),this.di1jinbitb12_i()];
		return t;
	};
	_proto.di1text12_i = function () {
		var t = new eui.Label();
		this.di1text12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi12_i = function () {
		var t = new eui.Label();
		this.di1jinbi12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb12_i = function () {
		var t = new eui.Image();
		this.di1jinbitb12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu13_i = function () {
		var t = new eui.Group();
		this.di1wenzizu13 = t;
		t.x = 3;
		t.y = 449;
		t.elementsContent = [this.di1text13_i(),this.di1jinbi13_i(),this.di1jinbitb13_i()];
		return t;
	};
	_proto.di1text13_i = function () {
		var t = new eui.Label();
		this.di1text13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi13_i = function () {
		var t = new eui.Label();
		this.di1jinbi13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb13_i = function () {
		var t = new eui.Image();
		this.di1jinbitb13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu14_i = function () {
		var t = new eui.Group();
		this.di1wenzizu14 = t;
		t.x = 3;
		t.y = 482;
		t.elementsContent = [this.di1text14_i(),this.di1jinbi14_i(),this.di1jinbitb14_i()];
		return t;
	};
	_proto.di1text14_i = function () {
		var t = new eui.Label();
		this.di1text14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi14_i = function () {
		var t = new eui.Label();
		this.di1jinbi14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb14_i = function () {
		var t = new eui.Image();
		this.di1jinbitb14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu15_i = function () {
		var t = new eui.Group();
		this.di1wenzizu15 = t;
		t.x = 3;
		t.y = 513;
		t.elementsContent = [this.di1text15_i(),this.di1jinbi15_i(),this.di1jinbitb15_i()];
		return t;
	};
	_proto.di1text15_i = function () {
		var t = new eui.Label();
		this.di1text15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi15_i = function () {
		var t = new eui.Label();
		this.di1jinbi15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb15_i = function () {
		var t = new eui.Image();
		this.di1jinbitb15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu16_i = function () {
		var t = new eui.Group();
		this.di1wenzizu16 = t;
		t.x = 3;
		t.y = 545;
		t.elementsContent = [this.di1text16_i(),this.di1jinbi16_i(),this.di1jinbitb16_i()];
		return t;
	};
	_proto.di1text16_i = function () {
		var t = new eui.Label();
		this.di1text16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi16_i = function () {
		var t = new eui.Label();
		this.di1jinbi16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb16_i = function () {
		var t = new eui.Image();
		this.di1jinbitb16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu17_i = function () {
		var t = new eui.Group();
		this.di1wenzizu17 = t;
		t.x = 3;
		t.y = 578;
		t.elementsContent = [this.di1text17_i(),this.di1jinbi17_i(),this.di1jinbitb17_i()];
		return t;
	};
	_proto.di1text17_i = function () {
		var t = new eui.Label();
		this.di1text17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi17_i = function () {
		var t = new eui.Label();
		this.di1jinbi17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb17_i = function () {
		var t = new eui.Image();
		this.di1jinbitb17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu18_i = function () {
		var t = new eui.Group();
		this.di1wenzizu18 = t;
		t.x = 3;
		t.y = 606;
		t.elementsContent = [this.di1text18_i(),this.di1jinbi18_i(),this.di1jinbitb18_i()];
		return t;
	};
	_proto.di1text18_i = function () {
		var t = new eui.Label();
		this.di1text18 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi18_i = function () {
		var t = new eui.Label();
		this.di1jinbi18 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb18_i = function () {
		var t = new eui.Image();
		this.di1jinbitb18 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu19_i = function () {
		var t = new eui.Group();
		this.di1wenzizu19 = t;
		t.x = 3;
		t.y = 638;
		t.elementsContent = [this.di1text19_i(),this.di1jinbi19_i(),this.di1jinbitb19_i()];
		return t;
	};
	_proto.di1text19_i = function () {
		var t = new eui.Label();
		this.di1text19 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi19_i = function () {
		var t = new eui.Label();
		this.di1jinbi19 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb19_i = function () {
		var t = new eui.Image();
		this.di1jinbitb19 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu20_i = function () {
		var t = new eui.Group();
		this.di1wenzizu20 = t;
		t.x = 3;
		t.y = 670;
		t.elementsContent = [this.di1text20_i(),this.di1jinbi20_i(),this.di1jinbitb20_i()];
		return t;
	};
	_proto.di1text20_i = function () {
		var t = new eui.Label();
		this.di1text20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi20_i = function () {
		var t = new eui.Label();
		this.di1jinbi20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb20_i = function () {
		var t = new eui.Image();
		this.di1jinbitb20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu21_i = function () {
		var t = new eui.Group();
		this.di1wenzizu21 = t;
		t.x = 3;
		t.y = 702;
		t.elementsContent = [this.di1text21_i(),this.di1jinbi21_i(),this.di1jinbitb21_i()];
		return t;
	};
	_proto.di1text21_i = function () {
		var t = new eui.Label();
		this.di1text21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi21_i = function () {
		var t = new eui.Label();
		this.di1jinbi21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb21_i = function () {
		var t = new eui.Image();
		this.di1jinbitb21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu22_i = function () {
		var t = new eui.Group();
		this.di1wenzizu22 = t;
		t.x = 3;
		t.y = 734;
		t.elementsContent = [this.di1text22_i(),this.di1jinbi22_i(),this.di1jinbitb22_i()];
		return t;
	};
	_proto.di1text22_i = function () {
		var t = new eui.Label();
		this.di1text22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi22_i = function () {
		var t = new eui.Label();
		this.di1jinbi22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb22_i = function () {
		var t = new eui.Image();
		this.di1jinbitb22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu23_i = function () {
		var t = new eui.Group();
		this.di1wenzizu23 = t;
		t.x = 4;
		t.y = 767;
		t.elementsContent = [this.di1text23_i(),this.di1jinbi23_i(),this.di1jinbitb23_i()];
		return t;
	};
	_proto.di1text23_i = function () {
		var t = new eui.Label();
		this.di1text23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi23_i = function () {
		var t = new eui.Label();
		this.di1jinbi23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb23_i = function () {
		var t = new eui.Image();
		this.di1jinbitb23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu24_i = function () {
		var t = new eui.Group();
		this.di1wenzizu24 = t;
		t.x = 4;
		t.y = 799;
		t.elementsContent = [this.di1text24_i(),this.di1jinbi24_i(),this.di1jinbitb24_i()];
		return t;
	};
	_proto.di1text24_i = function () {
		var t = new eui.Label();
		this.di1text24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi24_i = function () {
		var t = new eui.Label();
		this.di1jinbi24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb24_i = function () {
		var t = new eui.Image();
		this.di1jinbitb24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu25_i = function () {
		var t = new eui.Group();
		this.di1wenzizu25 = t;
		t.x = 4;
		t.y = 831;
		t.elementsContent = [this.di1text25_i(),this.di1jinbi25_i(),this.di1jinbitb25_i()];
		return t;
	};
	_proto.di1text25_i = function () {
		var t = new eui.Label();
		this.di1text25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi25_i = function () {
		var t = new eui.Label();
		this.di1jinbi25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb25_i = function () {
		var t = new eui.Image();
		this.di1jinbitb25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu26_i = function () {
		var t = new eui.Group();
		this.di1wenzizu26 = t;
		t.x = 4;
		t.y = 863;
		t.elementsContent = [this.di1text26_i(),this.di1jinbi26_i(),this.di1jinbitb26_i()];
		return t;
	};
	_proto.di1text26_i = function () {
		var t = new eui.Label();
		this.di1text26 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi26_i = function () {
		var t = new eui.Label();
		this.di1jinbi26 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb26_i = function () {
		var t = new eui.Image();
		this.di1jinbitb26 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu27_i = function () {
		var t = new eui.Group();
		this.di1wenzizu27 = t;
		t.x = 4;
		t.y = 895;
		t.elementsContent = [this.di1text27_i(),this.di1jinbi27_i(),this.di1jinbitb27_i()];
		return t;
	};
	_proto.di1text27_i = function () {
		var t = new eui.Label();
		this.di1text27 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi27_i = function () {
		var t = new eui.Label();
		this.di1jinbi27 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb27_i = function () {
		var t = new eui.Image();
		this.di1jinbitb27 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.di1wenzizu28_i = function () {
		var t = new eui.Group();
		this.di1wenzizu28 = t;
		t.x = 4;
		t.y = 927;
		t.elementsContent = [this.di1text28_i(),this.di1jinbi28_i(),this.di1jinbitb28_i()];
		return t;
	};
	_proto.di1text28_i = function () {
		var t = new eui.Label();
		this.di1text28 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.di1jinbi28_i = function () {
		var t = new eui.Label();
		this.di1jinbi28 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 107;
		t.y = 3;
		return t;
	};
	_proto.di1jinbitb28_i = function () {
		var t = new eui.Image();
		this.di1jinbitb28 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "img_qian_png";
		t.width = 29;
		t.x = 109;
		t.y = 0;
		return t;
	};
	_proto.yinxiaowenzizu_i = function () {
		var t = new eui.Group();
		this.yinxiaowenzizu = t;
		t.x = 88;
		t.y = 821;
		t.elementsContent = [this.yinxiaotext_i(),this.yinxiaotext0_i(),this.yinxiaotext1_i(),this.yinxiaotext2_i()];
		return t;
	};
	_proto.yinxiaotext_i = function () {
		var t = new eui.Label();
		this.yinxiaotext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "传单推广：剩余1天";
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yinxiaotext0_i = function () {
		var t = new eui.Label();
		this.yinxiaotext0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "传单推广：剩余1天";
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 0;
		t.y = 23;
		return t;
	};
	_proto.yinxiaotext1_i = function () {
		var t = new eui.Label();
		this.yinxiaotext1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "传单推广：剩余1天";
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 0;
		t.y = 46;
		return t;
	};
	_proto.yinxiaotext2_i = function () {
		var t = new eui.Label();
		this.yinxiaotext2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 16;
		t.stroke = 3;
		t.strokeColor = 0x000000;
		t.text = "传单推广：剩余1天";
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 0;
		t.y = 69;
		return t;
	};
	_proto.yitiaochengyuan_i = function () {
		var t = new eui.Group();
		this.yitiaochengyuan = t;
		t.x = 416;
		t.y = 694;
		t.elementsContent = [this.juesetouxiang_i(),this.zhuangtai_i()];
		return t;
	};
	_proto.juesetouxiang_i = function () {
		var t = new eui.Image();
		this.juesetouxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "img_daerzibiaoshi_png";
		t.width = 74;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuangtai_i = function () {
		var t = new eui.Label();
		this.zhuangtai = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 18;
		t.stroke = 2;
		t.text = "进修中";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 73;
		t.x = 0;
		t.y = 84;
		return t;
	};
	_proto.yitiaochengyuan0_i = function () {
		var t = new eui.Group();
		this.yitiaochengyuan0 = t;
		t.x = 550;
		t.y = 694;
		t.elementsContent = [this.juesetouxiang0_i(),this.zhuangtai0_i()];
		return t;
	};
	_proto.juesetouxiang0_i = function () {
		var t = new eui.Image();
		this.juesetouxiang0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "img_xiaoerzibiaoshi_png";
		t.width = 74;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuangtai0_i = function () {
		var t = new eui.Label();
		this.zhuangtai0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 18;
		t.stroke = 2;
		t.text = "进修中";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 73;
		t.x = 0;
		t.y = 84;
		return t;
	};
	_proto.yitiaochengyuan1_i = function () {
		var t = new eui.Group();
		this.yitiaochengyuan1 = t;
		t.x = 416;
		t.y = 818;
		t.elementsContent = [this.juesetouxiang1_i(),this.zhuangtai1_i()];
		return t;
	};
	_proto.juesetouxiang1_i = function () {
		var t = new eui.Image();
		this.juesetouxiang1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "img_xifubiaoshi_png";
		t.width = 74;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuangtai1_i = function () {
		var t = new eui.Label();
		this.zhuangtai1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 18;
		t.stroke = 2;
		t.text = "进修中";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 73;
		t.x = 0;
		t.y = 84;
		return t;
	};
	_proto.yitiaochengyuan2_i = function () {
		var t = new eui.Group();
		this.yitiaochengyuan2 = t;
		t.x = 549;
		t.y = 818;
		t.elementsContent = [this.juesetouxiang2_i(),this.zhuangtai2_i()];
		return t;
	};
	_proto.juesetouxiang2_i = function () {
		var t = new eui.Image();
		this.juesetouxiang2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "img_sunnvbiaoshi_png";
		t.width = 74;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuangtai2_i = function () {
		var t = new eui.Label();
		this.zhuangtai2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 18;
		t.stroke = 2;
		t.text = "进修中";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 73;
		t.x = 0;
		t.y = 84;
		return t;
	};
	return MeirijiesuanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Tanmujiemian.exml'] = window.TanmujiemianSkin = (function (_super) {
	__extends(TanmujiemianSkin, _super);
	function TanmujiemianSkin() {
		_super.call(this);
		this.skinParts = ["touxiang","img_cuowutishi","danmutext","xingming","img_danmuzeizao","img_haopin","danmuzu"];
		
		this.height = 80;
		this.width = 500;
		this.elementsContent = [this.danmuzu_i()];
	}
	var _proto = TanmujiemianSkin.prototype;

	_proto.danmuzu_i = function () {
		var t = new eui.Group();
		this.danmuzu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.width = 496;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.touxiang_i(),this.img_cuowutishi_i(),this.danmutext_i(),this.xingming_i(),this.img_danmuzeizao_i(),this.img_haopin_i()];
		return t;
	};
	_proto.touxiang_i = function () {
		var t = new eui.Image();
		this.touxiang = t;
		t.height = 36;
		t.source = "tx1000_png";
		t.width = 36;
		t.x = 22;
		t.y = 22;
		return t;
	};
	_proto.img_cuowutishi_i = function () {
		var t = new eui.Image();
		this.img_cuowutishi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.source = "img_cuowutishi_png";
		t.width = 404;
		t.x = 75.5;
		t.y = 33;
		return t;
	};
	_proto.danmutext_i = function () {
		var t = new eui.Label();
		this.danmutext = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.stroke = 2;
		t.text = "这是一条弹幕弹幕弹幕弹幕";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 384;
		t.x = 85.5;
		t.y = 41;
		return t;
	};
	_proto.xingming_i = function () {
		var t = new eui.Label();
		this.xingming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 20;
		t.stroke = 2;
		t.text = "这是一条弹幕弹幕弹幕弹幕";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 261;
		t.x = 78.5;
		t.y = 5.25;
		return t;
	};
	_proto.img_danmuzeizao_i = function () {
		var t = new eui.Image();
		this.img_danmuzeizao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.source = "img_danmuzeizao_png";
		t.width = 66;
		t.x = 6.5;
		t.y = 6;
		return t;
	};
	_proto.img_haopin_i = function () {
		var t = new eui.Image();
		this.img_haopin = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 344;
		t.y = 4;
		return t;
	};
	return TanmujiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Toudingwenzi.exml'] = window.ToudingwenziSkin = (function (_super) {
	__extends(ToudingwenziSkin, _super);
	function ToudingwenziSkin() {
		_super.call(this);
		this.skinParts = ["img_toudingwenzikuang","wenzineirong","toudingwenzizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.toudingwenzizu_i()];
	}
	var _proto = ToudingwenziSkin.prototype;

	_proto.toudingwenzizu_i = function () {
		var t = new eui.Group();
		this.toudingwenzizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.5;
		t.width = 219;
		t.x = 147.5;
		t.y = 558.5;
		t.elementsContent = [this.img_toudingwenzikuang_i(),this.wenzineirong_i()];
		return t;
	};
	_proto.img_toudingwenzikuang_i = function () {
		var t = new eui.Image();
		this.img_toudingwenzikuang = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_toudingwenzikuang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.wenzineirong_i = function () {
		var t = new eui.Label();
		this.wenzineirong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22.5;
		t.horizontalCenter = 5.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 10;
		t.stroke = 1;
		t.strokeColor = 0xeadede;
		t.text = "今天发工资了，必须要来一份牛肉火锅哈哈哈";
		t.textAlign = "center";
		t.textColor = 0x282626;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.75;
		t.width = 189.5;
		return t;
	};
	return ToudingwenziSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Ttoudingqipaojiemian.exml'] = window.TtoudingqipaojiemianSkin = (function (_super) {
	__extends(TtoudingqipaojiemianSkin, _super);
	var TtoudingqipaojiemianSkin$Skin62 = 	(function (_super) {
		__extends(TtoudingqipaojiemianSkin$Skin62, _super);
		function TtoudingqipaojiemianSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_xuqiucaiqipao2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","ing_xuqiuqipao_png")
					])
			];
		}
		var _proto = TtoudingqipaojiemianSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_xuqiucaiqipao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TtoudingqipaojiemianSkin$Skin62;
	})(eui.Skin);

	function TtoudingqipaojiemianSkin() {
		_super.call(this);
		this.skinParts = ["but_xuqiucaiqipao0","xianshitupian0","toudingqipaozu"];
		
		this.elementsContent = [this.toudingqipaozu_i()];
	}
	var _proto = TtoudingqipaojiemianSkin.prototype;

	_proto.toudingqipaozu_i = function () {
		var t = new eui.Group();
		this.toudingqipaozu = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.elementsContent = [this.but_xuqiucaiqipao0_i(),this.xianshitupian0_i()];
		return t;
	};
	_proto.but_xuqiucaiqipao0_i = function () {
		var t = new eui.Button();
		this.but_xuqiucaiqipao0 = t;
		t.enabled = true;
		t.height = 79;
		t.label = "";
		t.width = 66;
		t.skinName = TtoudingqipaojiemianSkin$Skin62;
		return t;
	};
	_proto.xianshitupian0_i = function () {
		var t = new eui.Image();
		this.xianshitupian0 = t;
		t.height = 48;
		t.horizontalCenter = 0;
		t.source = "img_fennulian_png";
		t.touchEnabled = false;
		t.verticalCenter = -10;
		t.width = 48;
		return t;
	};
	return TtoudingqipaojiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Tuiguangchuandan.exml'] = window.TuiguangchuandanSkin = (function (_super) {
	__extends(TuiguangchuandanSkin, _super);
	var TuiguangchuandanSkin$Skin63 = 	(function (_super) {
		__extends(TuiguangchuandanSkin$Skin63, _super);
		function TuiguangchuandanSkin$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_tuiguanganniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_tuiguanganniu2_png")
					])
			];
		}
		var _proto = TuiguangchuandanSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_tuiguanganniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TuiguangchuandanSkin$Skin63;
	})(eui.Skin);

	function TuiguangchuandanSkin() {
		_super.call(this);
		this.skinParts = ["img_chuandantuiguang","tuiguangwenzi","chixushijianwenzi","tuiguangfeiyongwenzi","tuiguangxiaoguowenzi","tuiguangshengyu","tuiguangshengyuwenzi","img_qian","but_tuiguanganniu","chuandanliebiaozu","tuiguangchuandanzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.tuiguangchuandanzu_i()];
	}
	var _proto = TuiguangchuandanSkin.prototype;

	_proto.tuiguangchuandanzu_i = function () {
		var t = new eui.Group();
		this.tuiguangchuandanzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.chuandanliebiaozu_i()];
		return t;
	};
	_proto.chuandanliebiaozu_i = function () {
		var t = new eui.Group();
		this.chuandanliebiaozu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 400;
		t.left = 94;
		t.right = 73;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 174;
		t.elementsContent = [this.img_chuandantuiguang_i(),this.tuiguangwenzi_i(),this.chixushijianwenzi_i(),this.tuiguangfeiyongwenzi_i(),this.tuiguangxiaoguowenzi_i(),this.tuiguangshengyu_i(),this.tuiguangshengyuwenzi_i(),this.img_qian_i(),this.but_tuiguanganniu_i()];
		return t;
	};
	_proto.img_chuandantuiguang_i = function () {
		var t = new eui.Image();
		this.img_chuandantuiguang = t;
		t.source = "img_chuandantuiguang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tuiguangwenzi_i = function () {
		var t = new eui.Label();
		this.tuiguangwenzi = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5b5959;
		t.text = "客流量增加";
		t.textAlign = "left";
		t.textColor = 0xefe8e8;
		t.verticalAlign = "middle";
		t.width = 140.66;
		t.x = 143;
		t.y = 572.67;
		return t;
	};
	_proto.chixushijianwenzi_i = function () {
		var t = new eui.Label();
		this.chixushijianwenzi = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5b5757;
		t.text = "3天";
		t.textAlign = "left";
		t.textColor = 0xf4ebeb;
		t.verticalAlign = "middle";
		t.width = 117.33;
		t.x = 143;
		t.y = 645.35;
		return t;
	};
	_proto.tuiguangfeiyongwenzi_i = function () {
		var t = new eui.Label();
		this.tuiguangfeiyongwenzi = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7EFEF;
		t.text = "-2000000";
		t.textAlign = "left";
		t.textColor = 0xef0b0b;
		t.verticalAlign = "middle";
		t.width = 105.33;
		t.x = 310.01;
		t.y = 645.35;
		return t;
	};
	_proto.tuiguangxiaoguowenzi_i = function () {
		var t = new eui.Label();
		this.tuiguangxiaoguowenzi = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xf4eded;
		t.text = "+ 10%";
		t.textAlign = "left";
		t.textColor = 0xf7660c;
		t.verticalAlign = "middle";
		t.width = 140.66;
		t.x = 281;
		t.y = 572.67;
		return t;
	};
	_proto.tuiguangshengyu_i = function () {
		var t = new eui.Label();
		this.tuiguangshengyu = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "剩余";
		t.textAlign = "center";
		t.textColor = 0x1C1A1A;
		t.verticalAlign = "middle";
		t.width = 103.66;
		t.x = 421.66;
		t.y = 613.04;
		return t;
	};
	_proto.tuiguangshengyuwenzi_i = function () {
		var t = new eui.Label();
		this.tuiguangshengyuwenzi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "365天";
		t.textAlign = "center";
		t.textColor = 0x1C1A1A;
		t.verticalAlign = "middle";
		t.width = 103.66;
		t.x = 421.66;
		t.y = 645.35;
		return t;
	};
	_proto.img_qian_i = function () {
		var t = new eui.Image();
		this.img_qian = t;
		t.height = 40;
		t.source = "img_qian_png";
		t.width = 40;
		t.x = 254.66;
		t.y = 637.04;
		return t;
	};
	_proto.but_tuiguanganniu_i = function () {
		var t = new eui.Button();
		this.but_tuiguanganniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 383;
		t.y = 551.35;
		t.skinName = TuiguangchuandanSkin$Skin63;
		return t;
	};
	return TuiguangchuandanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Tuiguangdaiyan.exml'] = window.TuiguangdaiyanSkin = (function (_super) {
	__extends(TuiguangdaiyanSkin, _super);
	var TuiguangdaiyanSkin$Skin64 = 	(function (_super) {
		__extends(TuiguangdaiyanSkin$Skin64, _super);
		function TuiguangdaiyanSkin$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_tuiguanganniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_tuiguanganniu2_png")
					])
			];
		}
		var _proto = TuiguangdaiyanSkin$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_tuiguanganniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TuiguangdaiyanSkin$Skin64;
	})(eui.Skin);

	function TuiguangdaiyanSkin() {
		_super.call(this);
		this.skinParts = ["img_chuandantuiguang0","tuiguangwenzi0","chixushijianwenzi0","tuiguangfeiyongwenzi0","tuiguangxiaoguowenzi0","tuiguangshengyu0","tuiguangshengyuwenzi0","img_qian0","but_tuiguanganniu0","chuandanliebiaozu0","tuiguangdaiyanzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.tuiguangdaiyanzu_i()];
	}
	var _proto = TuiguangdaiyanSkin.prototype;

	_proto.tuiguangdaiyanzu_i = function () {
		var t = new eui.Group();
		this.tuiguangdaiyanzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.chuandanliebiaozu0_i()];
		return t;
	};
	_proto.chuandanliebiaozu0_i = function () {
		var t = new eui.Group();
		this.chuandanliebiaozu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 365;
		t.left = 94;
		t.right = 73;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 209;
		t.elementsContent = [this.img_chuandantuiguang0_i(),this.tuiguangwenzi0_i(),this.chixushijianwenzi0_i(),this.tuiguangfeiyongwenzi0_i(),this.tuiguangxiaoguowenzi0_i(),this.tuiguangshengyu0_i(),this.tuiguangshengyuwenzi0_i(),this.img_qian0_i(),this.but_tuiguanganniu0_i()];
		return t;
	};
	_proto.img_chuandantuiguang0_i = function () {
		var t = new eui.Image();
		this.img_chuandantuiguang0 = t;
		t.source = "img_daiyantuiguang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tuiguangwenzi0_i = function () {
		var t = new eui.Label();
		this.tuiguangwenzi0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x6d6969;
		t.text = "客流量增加";
		t.textAlign = "left";
		t.textColor = 0xede6e6;
		t.verticalAlign = "middle";
		t.width = 140.66;
		t.x = 127.83;
		t.y = 556.03;
		return t;
	};
	_proto.chixushijianwenzi0_i = function () {
		var t = new eui.Label();
		this.chixushijianwenzi0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x726d6d;
		t.text = "3天";
		t.textAlign = "left";
		t.textColor = 0xf2eded;
		t.verticalAlign = "middle";
		t.width = 117.33;
		t.x = 129.35;
		t.y = 633.21;
		return t;
	};
	_proto.tuiguangfeiyongwenzi0_i = function () {
		var t = new eui.Label();
		this.tuiguangfeiyongwenzi0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7EFEF;
		t.text = "-2000000";
		t.textAlign = "left";
		t.textColor = 0xfc0505;
		t.verticalAlign = "middle";
		t.width = 105.33;
		t.x = 310.01;
		t.y = 633.24;
		return t;
	};
	_proto.tuiguangxiaoguowenzi0_i = function () {
		var t = new eui.Label();
		this.tuiguangxiaoguowenzi0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7EFEF;
		t.text = "+ 10%";
		t.textAlign = "left";
		t.textColor = 0xf4850e;
		t.verticalAlign = "middle";
		t.width = 140.66;
		t.x = 281;
		t.y = 554.49;
		return t;
	};
	_proto.tuiguangshengyu0_i = function () {
		var t = new eui.Label();
		this.tuiguangshengyu0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "剩余";
		t.textAlign = "center";
		t.textColor = 0x1C1A1A;
		t.verticalAlign = "middle";
		t.width = 103.66;
		t.x = 436.86;
		t.y = 588.77;
		return t;
	};
	_proto.tuiguangshengyuwenzi0_i = function () {
		var t = new eui.Label();
		this.tuiguangshengyuwenzi0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "365天";
		t.textAlign = "center";
		t.textColor = 0x1C1A1A;
		t.verticalAlign = "middle";
		t.width = 103.66;
		t.x = 439.85;
		t.y = 631.69;
		return t;
	};
	_proto.img_qian0_i = function () {
		var t = new eui.Image();
		this.img_qian0 = t;
		t.height = 40;
		t.source = "img_qian_png";
		t.width = 40;
		t.x = 254.66;
		t.y = 621.89;
		return t;
	};
	_proto.but_tuiguanganniu0_i = function () {
		var t = new eui.Button();
		this.but_tuiguanganniu0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 401.2;
		t.y = 536.16;
		t.skinName = TuiguangdaiyanSkin$Skin64;
		return t;
	};
	return TuiguangdaiyanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Tuiguangdianshi.exml'] = window.TuiguangdianshiSkin = (function (_super) {
	__extends(TuiguangdianshiSkin, _super);
	var TuiguangdianshiSkin$Skin65 = 	(function (_super) {
		__extends(TuiguangdianshiSkin$Skin65, _super);
		function TuiguangdianshiSkin$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_tuiguanganniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_tuiguanganniu2_png")
					])
			];
		}
		var _proto = TuiguangdianshiSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_tuiguanganniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TuiguangdianshiSkin$Skin65;
	})(eui.Skin);

	function TuiguangdianshiSkin() {
		_super.call(this);
		this.skinParts = ["img_dianshiguanggao","tuiguangwenzi0","chixushijianwenzi0","tuiguangfeiyongwenzi0","tuiguangxiaoguowenzi0","tuiguangshengyu0","tuiguangshengyuwenzi0","img_qian0","but_tuiguanganniu0","dianshiliebiaozu","tuiguangdianshizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.tuiguangdianshizu_i()];
	}
	var _proto = TuiguangdianshiSkin.prototype;

	_proto.tuiguangdianshizu_i = function () {
		var t = new eui.Group();
		this.tuiguangdianshizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.dianshiliebiaozu_i()];
		return t;
	};
	_proto.dianshiliebiaozu_i = function () {
		var t = new eui.Group();
		this.dianshiliebiaozu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 400;
		t.left = 94;
		t.right = 73;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 174;
		t.elementsContent = [this.img_dianshiguanggao_i(),this.tuiguangwenzi0_i(),this.chixushijianwenzi0_i(),this.tuiguangfeiyongwenzi0_i(),this.tuiguangxiaoguowenzi0_i(),this.tuiguangshengyu0_i(),this.tuiguangshengyuwenzi0_i(),this.img_qian0_i(),this.but_tuiguanganniu0_i()];
		return t;
	};
	_proto.img_dianshiguanggao_i = function () {
		var t = new eui.Image();
		this.img_dianshiguanggao = t;
		t.source = "img_dianshiguanggao_png";
		t.x = 25.33;
		t.y = 23.99;
		return t;
	};
	_proto.tuiguangwenzi0_i = function () {
		var t = new eui.Label();
		this.tuiguangwenzi0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x7c7676;
		t.text = "客流量增加";
		t.textAlign = "left";
		t.textColor = 0xf2e8e8;
		t.verticalAlign = "middle";
		t.width = 140.66;
		t.x = 144.17;
		t.y = 582.47;
		return t;
	};
	_proto.chixushijianwenzi0_i = function () {
		var t = new eui.Label();
		this.chixushijianwenzi0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x777070;
		t.text = "3天";
		t.textAlign = "left";
		t.textColor = 0xf2eded;
		t.verticalAlign = "middle";
		t.width = 117.33;
		t.x = 146.85;
		t.y = 653.34;
		return t;
	};
	_proto.tuiguangfeiyongwenzi0_i = function () {
		var t = new eui.Label();
		this.tuiguangfeiyongwenzi0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7EFEF;
		t.text = "-2000000";
		t.textAlign = "left";
		t.textColor = 0xf70c0c;
		t.verticalAlign = "middle";
		t.width = 105.33;
		t.x = 320.71;
		t.y = 650.7;
		return t;
	};
	_proto.tuiguangxiaoguowenzi0_i = function () {
		var t = new eui.Label();
		this.tuiguangxiaoguowenzi0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7EFEF;
		t.text = "+ 10%";
		t.textAlign = "left";
		t.textColor = 0xf47207;
		t.verticalAlign = "middle";
		t.width = 140.66;
		t.x = 285.38;
		t.y = 579.8;
		return t;
	};
	_proto.tuiguangshengyu0_i = function () {
		var t = new eui.Label();
		this.tuiguangshengyu0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "剩余";
		t.textAlign = "center";
		t.textColor = 0x1C1A1A;
		t.verticalAlign = "middle";
		t.width = 103.66;
		t.x = 434.98;
		t.y = 613.04;
		return t;
	};
	_proto.tuiguangshengyuwenzi0_i = function () {
		var t = new eui.Label();
		this.tuiguangshengyuwenzi0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "365天";
		t.textAlign = "center";
		t.textColor = 0x1C1A1A;
		t.verticalAlign = "middle";
		t.width = 103.66;
		t.x = 436.33;
		t.y = 645.35;
		return t;
	};
	_proto.img_qian0_i = function () {
		var t = new eui.Image();
		this.img_qian0 = t;
		t.height = 40;
		t.source = "img_qian_png";
		t.width = 40;
		t.x = 265.38;
		t.y = 642.7;
		return t;
	};
	_proto.but_tuiguanganniu0_i = function () {
		var t = new eui.Button();
		this.but_tuiguanganniu0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 398.99;
		t.y = 560.69;
		t.skinName = TuiguangdianshiSkin$Skin65;
		return t;
	};
	return TuiguangdianshiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Tuiguangpinglun.exml'] = window.TuiguangpinglunSkin = (function (_super) {
	__extends(TuiguangpinglunSkin, _super);
	var TuiguangpinglunSkin$Skin66 = 	(function (_super) {
		__extends(TuiguangpinglunSkin$Skin66, _super);
		function TuiguangpinglunSkin$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_tuiguanganniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_tuiguanganniu2_png")
					])
			];
		}
		var _proto = TuiguangpinglunSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_tuiguanganniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TuiguangpinglunSkin$Skin66;
	})(eui.Skin);

	function TuiguangpinglunSkin() {
		_super.call(this);
		this.skinParts = ["img_dianshiguanggao0","tuiguangwenzi1","chixushijianwenzi1","tuiguangfeiyongwenzi1","tuiguangxiaoguowenzi1","tuiguangshengyu1","tuiguangshengyuwenzi1","img_qian1","but_tuiguanganniu1","dianshiliebiaozu0","tuiguangpinglunzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.tuiguangpinglunzu_i()];
	}
	var _proto = TuiguangpinglunSkin.prototype;

	_proto.tuiguangpinglunzu_i = function () {
		var t = new eui.Group();
		this.tuiguangpinglunzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.dianshiliebiaozu0_i()];
		return t;
	};
	_proto.dianshiliebiaozu0_i = function () {
		var t = new eui.Group();
		this.dianshiliebiaozu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 418;
		t.left = 88;
		t.right = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 156;
		t.elementsContent = [this.img_dianshiguanggao0_i(),this.tuiguangwenzi1_i(),this.chixushijianwenzi1_i(),this.tuiguangfeiyongwenzi1_i(),this.tuiguangxiaoguowenzi1_i(),this.tuiguangshengyu1_i(),this.tuiguangshengyuwenzi1_i(),this.img_qian1_i(),this.but_tuiguanganniu1_i()];
		return t;
	};
	_proto.img_dianshiguanggao0_i = function () {
		var t = new eui.Image();
		this.img_dianshiguanggao0 = t;
		t.source = "img_pinluntuiguang_png";
		t.x = -29.32;
		t.y = 0;
		return t;
	};
	_proto.tuiguangwenzi1_i = function () {
		var t = new eui.Label();
		this.tuiguangwenzi1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x777373;
		t.text = "客流量增加";
		t.textAlign = "left";
		t.textColor = 0xf7efef;
		t.verticalAlign = "middle";
		t.width = 140.66;
		t.x = 133.34;
		t.y = 592.67;
		return t;
	};
	_proto.chixushijianwenzi1_i = function () {
		var t = new eui.Label();
		this.chixushijianwenzi1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x7a7474;
		t.text = "3天";
		t.textAlign = "left";
		t.textColor = 0xf7f2f2;
		t.verticalAlign = "middle";
		t.width = 117.33;
		t.x = 134.66;
		t.y = 666.35;
		return t;
	};
	_proto.tuiguangfeiyongwenzi1_i = function () {
		var t = new eui.Label();
		this.tuiguangfeiyongwenzi1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7EFEF;
		t.text = "-2000000";
		t.textAlign = "left";
		t.textColor = 0xf70c0c;
		t.verticalAlign = "middle";
		t.width = 105.33;
		t.x = 308.67;
		t.y = 669.04;
		return t;
	};
	_proto.tuiguangxiaoguowenzi1_i = function () {
		var t = new eui.Label();
		this.tuiguangxiaoguowenzi1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7EFEF;
		t.text = "+ 10%";
		t.textAlign = "left";
		t.textColor = 0xf26809;
		t.verticalAlign = "middle";
		t.width = 140.66;
		t.x = 275.35;
		t.y = 592.67;
		return t;
	};
	_proto.tuiguangshengyu1_i = function () {
		var t = new eui.Label();
		this.tuiguangshengyu1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "剩余";
		t.textAlign = "center";
		t.textColor = 0x1C1A1A;
		t.verticalAlign = "middle";
		t.width = 103.66;
		t.x = 440.66;
		t.y = 628.38;
		return t;
	};
	_proto.tuiguangshengyuwenzi1_i = function () {
		var t = new eui.Label();
		this.tuiguangshengyuwenzi1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "365天";
		t.textAlign = "center";
		t.textColor = 0x1C1A1A;
		t.verticalAlign = "middle";
		t.width = 103.66;
		t.x = 440.66;
		t.y = 665.01;
		return t;
	};
	_proto.img_qian1_i = function () {
		var t = new eui.Image();
		this.img_qian1 = t;
		t.height = 40;
		t.source = "img_qian_png";
		t.width = 40;
		t.x = 252.01;
		t.y = 657.37;
		return t;
	};
	_proto.but_tuiguanganniu1_i = function () {
		var t = new eui.Button();
		this.but_tuiguanganniu1 = t;
		t.enabled = true;
		t.label = "";
		t.x = 403;
		t.y = 565.35;
		t.skinName = TuiguangpinglunSkin$Skin66;
		return t;
	};
	return TuiguangpinglunSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Chajijiaohuui.exml'] = window.ChajijiaohuuiSkin = (function (_super) {
	__extends(ChajijiaohuuiSkin, _super);
	var ChajijiaohuuiSkin$Skin67 = 	(function (_super) {
		__extends(ChajijiaohuuiSkin$Skin67, _super);
		function ChajijiaohuuiSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ChajijiaohuuiSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChajijiaohuuiSkin$Skin67;
	})(eui.Skin);

	var ChajijiaohuuiSkin$Skin68 = 	(function (_super) {
		__extends(ChajijiaohuuiSkin$Skin68, _super);
		function ChajijiaohuuiSkin$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ChajijiaohuuiSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChajijiaohuuiSkin$Skin68;
	})(eui.Skin);

	function ChajijiaohuuiSkin() {
		_super.call(this);
		this.skinParts = ["chajiguanbi","chajibeijing","chajibiaoshi","chajichakan","chajijinxiu","chaji"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.chaji_i()];
	}
	var _proto = ChajijiaohuuiSkin.prototype;

	_proto.chaji_i = function () {
		var t = new eui.Group();
		this.chaji = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.chajiguanbi_i(),this.chajibeijing_i(),this.chajibiaoshi_i(),this.chajichakan_i(),this.chajijinxiu_i()];
		return t;
	};
	_proto.chajiguanbi_i = function () {
		var t = new eui.Image();
		this.chajiguanbi = t;
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.chajibeijing_i = function () {
		var t = new eui.Image();
		this.chajibeijing = t;
		t.rotation = 270.11;
		t.source = "img_jiajuchufabeijing_png";
		t.x = 230.08;
		t.y = 924.83;
		return t;
	};
	_proto.chajibiaoshi_i = function () {
		var t = new eui.Image();
		this.chajibiaoshi = t;
		t.rotation = 0.14;
		t.source = "img_chajibiaoshi_png";
		t.x = 343.5;
		t.y = 833.88;
		return t;
	};
	_proto.chajichakan_i = function () {
		var t = new eui.Button();
		this.chajichakan = t;
		t.enabled = true;
		t.label = "查看";
		t.x = 306;
		t.y = 750.08;
		t.skinName = ChajijiaohuuiSkin$Skin67;
		return t;
	};
	_proto.chajijinxiu_i = function () {
		var t = new eui.Button();
		this.chajijinxiu = t;
		t.enabled = true;
		t.label = "服用";
		t.x = 452.65;
		t.y = 755.21;
		t.skinName = ChajijiaohuuiSkin$Skin68;
		return t;
	};
	return ChajijiaohuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Chaoshishangdianui.exml'] = window.ChaoshishangdianuiSkin = (function (_super) {
	__extends(ChaoshishangdianuiSkin, _super);
	var ChaoshishangdianuiSkin$Skin69 = 	(function (_super) {
		__extends(ChaoshishangdianuiSkin$Skin69, _super);
		function ChaoshishangdianuiSkin$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
			];
		}
		var _proto = ChaoshishangdianuiSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chaoshigoumai1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoshishangdianuiSkin$Skin69;
	})(eui.Skin);

	var ChaoshishangdianuiSkin$Skin70 = 	(function (_super) {
		__extends(ChaoshishangdianuiSkin$Skin70, _super);
		function ChaoshishangdianuiSkin$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
			];
		}
		var _proto = ChaoshishangdianuiSkin$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chaoshigoumai1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoshishangdianuiSkin$Skin70;
	})(eui.Skin);

	var ChaoshishangdianuiSkin$Skin71 = 	(function (_super) {
		__extends(ChaoshishangdianuiSkin$Skin71, _super);
		function ChaoshishangdianuiSkin$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
			];
		}
		var _proto = ChaoshishangdianuiSkin$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chaoshigoumai1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoshishangdianuiSkin$Skin71;
	})(eui.Skin);

	var ChaoshishangdianuiSkin$Skin72 = 	(function (_super) {
		__extends(ChaoshishangdianuiSkin$Skin72, _super);
		function ChaoshishangdianuiSkin$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
			];
		}
		var _proto = ChaoshishangdianuiSkin$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chaoshigoumai1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoshishangdianuiSkin$Skin72;
	})(eui.Skin);

	var ChaoshishangdianuiSkin$Skin73 = 	(function (_super) {
		__extends(ChaoshishangdianuiSkin$Skin73, _super);
		function ChaoshishangdianuiSkin$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
			];
		}
		var _proto = ChaoshishangdianuiSkin$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chaoshigoumai1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoshishangdianuiSkin$Skin73;
	})(eui.Skin);

	var ChaoshishangdianuiSkin$Skin74 = 	(function (_super) {
		__extends(ChaoshishangdianuiSkin$Skin74, _super);
		function ChaoshishangdianuiSkin$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chaoshigoumai2_png")
					])
			];
		}
		var _proto = ChaoshishangdianuiSkin$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chaoshigoumai1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoshishangdianuiSkin$Skin74;
	})(eui.Skin);

	var ChaoshishangdianuiSkin$Skin75 = 	(function (_super) {
		__extends(ChaoshishangdianuiSkin$Skin75, _super);
		function ChaoshishangdianuiSkin$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chaoshifenxiang2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chaoshifenxiang2_png")
					])
			];
		}
		var _proto = ChaoshishangdianuiSkin$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chaoshifenxiang1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoshishangdianuiSkin$Skin75;
	})(eui.Skin);

	var ChaoshishangdianuiSkin$Skin76 = 	(function (_super) {
		__extends(ChaoshishangdianuiSkin$Skin76, _super);
		function ChaoshishangdianuiSkin$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chaoshishipin2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chaoshishipin2_png")
					])
			];
		}
		var _proto = ChaoshishangdianuiSkin$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chaoshishipin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoshishangdianuiSkin$Skin76;
	})(eui.Skin);

	var ChaoshishangdianuiSkin$Skin77 = 	(function (_super) {
		__extends(ChaoshishangdianuiSkin$Skin77, _super);
		function ChaoshishangdianuiSkin$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chaoshishipin2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chaoshishipin2_png")
					])
			];
		}
		var _proto = ChaoshishangdianuiSkin$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chaoshishipin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoshishangdianuiSkin$Skin77;
	})(eui.Skin);

	function ChaoshishangdianuiSkin() {
		_super.call(this);
		this.skinParts = ["heisezhezao","img_chaoshijiemianbj","biaotilan","daojutubiao","but_goumai","goumaijine","qianicon","goumaianniuzu","zhekoutubiao","daojuzu","daojutubiao0","but_goumai0","goumaijine0","qianicon0","goumaianniuzu0","daojuzu0","daojutubiao1","but_goumai1","goumaijine1","qianicon1","goumaianniuzu1","daojuzu1","daojutubiao2","but_goumai2","goumaijine2","qianicon2","goumaianniuzu2","daojuzu2","daojutubiao3","but_goumai3","goumaijine3","qianicon3","goumaianniuzu3","daojuzu3","daojutubiao4","but_goumai4","goumaijine4","qianicon4","goumaianniuzu4","daojuzu4","daojutubiao5","but_goumai5","goumaijine5","goumaianniuzu5","daojuzu5","daojutubiao6","but_goumai6","goumaijine6","goumaianniuzu6","daojuzu6","daojutubiao7","but_goumai7","goumaijine7","goumaianniuzu7","daojuzu7","chaoshishangdianzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.chaoshishangdianzu_i()];
	}
	var _proto = ChaoshishangdianuiSkin.prototype;

	_proto.chaoshishangdianzu_i = function () {
		var t = new eui.Group();
		this.chaoshishangdianzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.heisezhezao_i(),this.img_chaoshijiemianbj_i(),this.biaotilan_i(),this.daojuzu_i(),this.daojuzu0_i(),this.daojuzu1_i(),this.daojuzu2_i(),this.daojuzu3_i(),this.daojuzu4_i(),this.daojuzu5_i(),this.daojuzu6_i(),this.daojuzu7_i()];
		return t;
	};
	_proto.heisezhezao_i = function () {
		var t = new eui.Image();
		this.heisezhezao = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.img_chaoshijiemianbj_i = function () {
		var t = new eui.Image();
		this.img_chaoshijiemianbj = t;
		t.source = "img_chaoshijiemianbj_png";
		t.x = 6.5;
		t.y = 168.06;
		return t;
	};
	_proto.biaotilan_i = function () {
		var t = new eui.Label();
		this.biaotilan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 30;
		t.stroke = 4;
		t.strokeColor = 0xF4EBEB;
		t.text = "超级商店";
		t.textAlign = "center";
		t.textColor = 0xEF870E;
		t.verticalAlign = "middle";
		t.width = 216.67;
		t.x = 259.85;
		t.y = 180.98;
		return t;
	};
	_proto.daojuzu_i = function () {
		var t = new eui.Group();
		this.daojuzu = t;
		t.x = 102.5;
		t.y = 285.5;
		t.elementsContent = [this.daojutubiao_i(),this.goumaianniuzu_i(),this.zhekoutubiao_i()];
		return t;
	};
	_proto.daojutubiao_i = function () {
		var t = new eui.Image();
		this.daojutubiao = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.goumaianniuzu_i = function () {
		var t = new eui.Group();
		this.goumaianniuzu = t;
		t.x = 0;
		t.y = 108.5;
		t.elementsContent = [this.but_goumai_i(),this.goumaijine_i(),this.qianicon_i()];
		return t;
	};
	_proto.but_goumai_i = function () {
		var t = new eui.Button();
		this.but_goumai = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 126;
		t.x = 0;
		t.y = 0;
		t.skinName = ChaoshishangdianuiSkin$Skin69;
		return t;
	};
	_proto.goumaijine_i = function () {
		var t = new eui.Label();
		this.goumaijine = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x565151;
		t.text = "-888888";
		t.textAlign = "left";
		t.textColor = 0xf4790c;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 44;
		t.y = 14.5;
		return t;
	};
	_proto.qianicon_i = function () {
		var t = new eui.Image();
		this.qianicon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "img_qian_png";
		t.touchEnabled = false;
		t.width = 24;
		t.x = 14;
		t.y = 17.5;
		return t;
	};
	_proto.zhekoutubiao_i = function () {
		var t = new eui.Image();
		this.zhekoutubiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.source = "img_chaoshizhekou_png";
		t.width = 75;
		t.x = 2.5;
		t.y = -1;
		return t;
	};
	_proto.daojuzu0_i = function () {
		var t = new eui.Group();
		this.daojuzu0 = t;
		t.x = 305.19;
		t.y = 285;
		t.elementsContent = [this.daojutubiao0_i(),this.goumaianniuzu0_i()];
		return t;
	};
	_proto.daojutubiao0_i = function () {
		var t = new eui.Image();
		this.daojutubiao0 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.goumaianniuzu0_i = function () {
		var t = new eui.Group();
		this.goumaianniuzu0 = t;
		t.x = 0;
		t.y = 108.5;
		t.elementsContent = [this.but_goumai0_i(),this.goumaijine0_i(),this.qianicon0_i()];
		return t;
	};
	_proto.but_goumai0_i = function () {
		var t = new eui.Button();
		this.but_goumai0 = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 126;
		t.x = 0;
		t.y = 0;
		t.skinName = ChaoshishangdianuiSkin$Skin70;
		return t;
	};
	_proto.goumaijine0_i = function () {
		var t = new eui.Label();
		this.goumaijine0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x565151;
		t.text = "-888888";
		t.textAlign = "left";
		t.textColor = 0xF4790C;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 44;
		t.y = 14.5;
		return t;
	};
	_proto.qianicon0_i = function () {
		var t = new eui.Image();
		this.qianicon0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "img_qian_png";
		t.touchEnabled = false;
		t.width = 24;
		t.x = 14;
		t.y = 17.5;
		return t;
	};
	_proto.daojuzu1_i = function () {
		var t = new eui.Group();
		this.daojuzu1 = t;
		t.x = 514.19;
		t.y = 284.5;
		t.elementsContent = [this.daojutubiao1_i(),this.goumaianniuzu1_i()];
		return t;
	};
	_proto.daojutubiao1_i = function () {
		var t = new eui.Image();
		this.daojutubiao1 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.goumaianniuzu1_i = function () {
		var t = new eui.Group();
		this.goumaianniuzu1 = t;
		t.x = 0;
		t.y = 108.5;
		t.elementsContent = [this.but_goumai1_i(),this.goumaijine1_i(),this.qianicon1_i()];
		return t;
	};
	_proto.but_goumai1_i = function () {
		var t = new eui.Button();
		this.but_goumai1 = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 126;
		t.x = 0;
		t.y = 0;
		t.skinName = ChaoshishangdianuiSkin$Skin71;
		return t;
	};
	_proto.goumaijine1_i = function () {
		var t = new eui.Label();
		this.goumaijine1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x565151;
		t.text = "-888888";
		t.textAlign = "left";
		t.textColor = 0xF4790C;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 44;
		t.y = 14.5;
		return t;
	};
	_proto.qianicon1_i = function () {
		var t = new eui.Image();
		this.qianicon1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "img_qian_png";
		t.touchEnabled = false;
		t.width = 24;
		t.x = 14;
		t.y = 17.5;
		return t;
	};
	_proto.daojuzu2_i = function () {
		var t = new eui.Group();
		this.daojuzu2 = t;
		t.x = 102.5;
		t.y = 486.5;
		t.elementsContent = [this.daojutubiao2_i(),this.goumaianniuzu2_i()];
		return t;
	};
	_proto.daojutubiao2_i = function () {
		var t = new eui.Image();
		this.daojutubiao2 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.goumaianniuzu2_i = function () {
		var t = new eui.Group();
		this.goumaianniuzu2 = t;
		t.x = 0;
		t.y = 108.5;
		t.elementsContent = [this.but_goumai2_i(),this.goumaijine2_i(),this.qianicon2_i()];
		return t;
	};
	_proto.but_goumai2_i = function () {
		var t = new eui.Button();
		this.but_goumai2 = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 126;
		t.x = 0;
		t.y = 0;
		t.skinName = ChaoshishangdianuiSkin$Skin72;
		return t;
	};
	_proto.goumaijine2_i = function () {
		var t = new eui.Label();
		this.goumaijine2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x565151;
		t.text = "-888888";
		t.textAlign = "left";
		t.textColor = 0xF4790C;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 44;
		t.y = 14.5;
		return t;
	};
	_proto.qianicon2_i = function () {
		var t = new eui.Image();
		this.qianicon2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "img_qian_png";
		t.touchEnabled = false;
		t.width = 24;
		t.x = 14;
		t.y = 17.5;
		return t;
	};
	_proto.daojuzu3_i = function () {
		var t = new eui.Group();
		this.daojuzu3 = t;
		t.x = 305.19;
		t.y = 486;
		t.elementsContent = [this.daojutubiao3_i(),this.goumaianniuzu3_i()];
		return t;
	};
	_proto.daojutubiao3_i = function () {
		var t = new eui.Image();
		this.daojutubiao3 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.goumaianniuzu3_i = function () {
		var t = new eui.Group();
		this.goumaianniuzu3 = t;
		t.x = 0;
		t.y = 108.5;
		t.elementsContent = [this.but_goumai3_i(),this.goumaijine3_i(),this.qianicon3_i()];
		return t;
	};
	_proto.but_goumai3_i = function () {
		var t = new eui.Button();
		this.but_goumai3 = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 126;
		t.x = 0;
		t.y = 0;
		t.skinName = ChaoshishangdianuiSkin$Skin73;
		return t;
	};
	_proto.goumaijine3_i = function () {
		var t = new eui.Label();
		this.goumaijine3 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x565151;
		t.text = "-888888";
		t.textAlign = "left";
		t.textColor = 0xF4790C;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 44;
		t.y = 14.5;
		return t;
	};
	_proto.qianicon3_i = function () {
		var t = new eui.Image();
		this.qianicon3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "img_qian_png";
		t.touchEnabled = false;
		t.width = 24;
		t.x = 14;
		t.y = 17.5;
		return t;
	};
	_proto.daojuzu4_i = function () {
		var t = new eui.Group();
		this.daojuzu4 = t;
		t.x = 514.18;
		t.y = 485.5;
		t.elementsContent = [this.daojutubiao4_i(),this.goumaianniuzu4_i()];
		return t;
	};
	_proto.daojutubiao4_i = function () {
		var t = new eui.Image();
		this.daojutubiao4 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.goumaianniuzu4_i = function () {
		var t = new eui.Group();
		this.goumaianniuzu4 = t;
		t.x = 0;
		t.y = 108.5;
		t.elementsContent = [this.but_goumai4_i(),this.goumaijine4_i(),this.qianicon4_i()];
		return t;
	};
	_proto.but_goumai4_i = function () {
		var t = new eui.Button();
		this.but_goumai4 = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 126;
		t.x = 0;
		t.y = 0;
		t.skinName = ChaoshishangdianuiSkin$Skin74;
		return t;
	};
	_proto.goumaijine4_i = function () {
		var t = new eui.Label();
		this.goumaijine4 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x565151;
		t.text = "-888888";
		t.textAlign = "left";
		t.textColor = 0xF4790C;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 44;
		t.y = 14.5;
		return t;
	};
	_proto.qianicon4_i = function () {
		var t = new eui.Image();
		this.qianicon4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "img_qian_png";
		t.touchEnabled = false;
		t.width = 24;
		t.x = 14;
		t.y = 17.5;
		return t;
	};
	_proto.daojuzu5_i = function () {
		var t = new eui.Group();
		this.daojuzu5 = t;
		t.x = 102.5;
		t.y = 686.5;
		t.elementsContent = [this.daojutubiao5_i(),this.goumaianniuzu5_i()];
		return t;
	};
	_proto.daojutubiao5_i = function () {
		var t = new eui.Image();
		this.daojutubiao5 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.goumaianniuzu5_i = function () {
		var t = new eui.Group();
		this.goumaianniuzu5 = t;
		t.x = 0;
		t.y = 108.5;
		t.elementsContent = [this.but_goumai5_i(),this.goumaijine5_i()];
		return t;
	};
	_proto.but_goumai5_i = function () {
		var t = new eui.Button();
		this.but_goumai5 = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 126;
		t.x = 0;
		t.y = 0;
		t.skinName = ChaoshishangdianuiSkin$Skin75;
		return t;
	};
	_proto.goumaijine5_i = function () {
		var t = new eui.Label();
		this.goumaijine5 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x565151;
		t.text = "抽奖";
		t.textAlign = "center";
		t.textColor = 0xF4790C;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 54;
		t.x = 49;
		t.y = 14.5;
		return t;
	};
	_proto.daojuzu6_i = function () {
		var t = new eui.Group();
		this.daojuzu6 = t;
		t.x = 305.19;
		t.y = 686;
		t.elementsContent = [this.daojutubiao6_i(),this.goumaianniuzu6_i()];
		return t;
	};
	_proto.daojutubiao6_i = function () {
		var t = new eui.Image();
		this.daojutubiao6 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.goumaianniuzu6_i = function () {
		var t = new eui.Group();
		this.goumaianniuzu6 = t;
		t.x = 0;
		t.y = 108.5;
		t.elementsContent = [this.but_goumai6_i(),this.goumaijine6_i()];
		return t;
	};
	_proto.but_goumai6_i = function () {
		var t = new eui.Button();
		this.but_goumai6 = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 126;
		t.x = 0;
		t.y = 0;
		t.skinName = ChaoshishangdianuiSkin$Skin76;
		return t;
	};
	_proto.goumaijine6_i = function () {
		var t = new eui.Label();
		this.goumaijine6 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x565151;
		t.text = "抽奖";
		t.textAlign = "center";
		t.textColor = 0xF4790C;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 44;
		t.y = 14.5;
		return t;
	};
	_proto.daojuzu7_i = function () {
		var t = new eui.Group();
		this.daojuzu7 = t;
		t.x = 514.19;
		t.y = 685.5;
		t.elementsContent = [this.daojutubiao7_i(),this.goumaianniuzu7_i()];
		return t;
	};
	_proto.daojutubiao7_i = function () {
		var t = new eui.Image();
		this.daojutubiao7 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.goumaianniuzu7_i = function () {
		var t = new eui.Group();
		this.goumaianniuzu7 = t;
		t.x = 0;
		t.y = 108.5;
		t.elementsContent = [this.but_goumai7_i(),this.goumaijine7_i()];
		return t;
	};
	_proto.but_goumai7_i = function () {
		var t = new eui.Button();
		this.but_goumai7 = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 126;
		t.x = 0;
		t.y = 0;
		t.skinName = ChaoshishangdianuiSkin$Skin77;
		return t;
	};
	_proto.goumaijine7_i = function () {
		var t = new eui.Label();
		this.goumaijine7 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0x565151;
		t.text = "抽奖";
		t.textAlign = "center";
		t.textColor = 0xF4790C;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 44;
		t.y = 14.5;
		return t;
	};
	return ChaoshishangdianuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Chuangjiaohuui.exml'] = window.ChuangjiaohuuiSkin = (function (_super) {
	__extends(ChuangjiaohuuiSkin, _super);
	var ChuangjiaohuuiSkin$Skin78 = 	(function (_super) {
		__extends(ChuangjiaohuuiSkin$Skin78, _super);
		function ChuangjiaohuuiSkin$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ChuangjiaohuuiSkin$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChuangjiaohuuiSkin$Skin78;
	})(eui.Skin);

	var ChuangjiaohuuiSkin$Skin79 = 	(function (_super) {
		__extends(ChuangjiaohuuiSkin$Skin79, _super);
		function ChuangjiaohuuiSkin$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ChuangjiaohuuiSkin$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChuangjiaohuuiSkin$Skin79;
	})(eui.Skin);

	var ChuangjiaohuuiSkin$Skin80 = 	(function (_super) {
		__extends(ChuangjiaohuuiSkin$Skin80, _super);
		function ChuangjiaohuuiSkin$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ChuangjiaohuuiSkin$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChuangjiaohuuiSkin$Skin80;
	})(eui.Skin);

	function ChuangjiaohuuiSkin() {
		_super.call(this);
		this.skinParts = ["chuangguanbi","chuangbeijing","chuangbiaoshi","chuangchakan","chuangjinxiu","chuangzengsong","chuang"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.chuang_i()];
	}
	var _proto = ChuangjiaohuuiSkin.prototype;

	_proto.chuang_i = function () {
		var t = new eui.Group();
		this.chuang = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.chuangguanbi_i(),this.chuangbeijing_i(),this.chuangbiaoshi_i(),this.chuangchakan_i(),this.chuangjinxiu_i(),this.chuangzengsong_i()];
		return t;
	};
	_proto.chuangguanbi_i = function () {
		var t = new eui.Image();
		this.chuangguanbi = t;
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.chuangbeijing_i = function () {
		var t = new eui.Image();
		this.chuangbeijing = t;
		t.rotation = 0.06;
		t.source = "img_jiajuchufabeijing_png";
		t.x = 114;
		t.y = 313.16;
		return t;
	};
	_proto.chuangbiaoshi_i = function () {
		var t = new eui.Image();
		this.chuangbiaoshi = t;
		t.rotation = 0.14;
		t.source = "img_chuangbiaoshi_png";
		t.x = 34.81;
		t.y = 403.57;
		return t;
	};
	_proto.chuangchakan_i = function () {
		var t = new eui.Button();
		this.chuangchakan = t;
		t.enabled = true;
		t.label = "查看";
		t.x = 177.31;
		t.y = 347.77;
		t.skinName = ChuangjiaohuuiSkin$Skin78;
		return t;
	};
	_proto.chuangjinxiu_i = function () {
		var t = new eui.Button();
		this.chuangjinxiu = t;
		t.enabled = true;
		t.label = "睡眠";
		t.x = 221.79;
		t.y = 462.77;
		t.skinName = ChuangjiaohuuiSkin$Skin79;
		return t;
	};
	_proto.chuangzengsong_i = function () {
		var t = new eui.Button();
		this.chuangzengsong = t;
		t.enabled = true;
		t.label = "安睡";
		t.x = 172.31;
		t.y = 576.97;
		t.skinName = ChuangjiaohuuiSkin$Skin80;
		return t;
	};
	return ChuangjiaohuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Daerzijiaohuui.exml'] = window.DaerzijiaohuuiSkin = (function (_super) {
	__extends(DaerzijiaohuuiSkin, _super);
	var DaerzijiaohuuiSkin$Skin81 = 	(function (_super) {
		__extends(DaerzijiaohuuiSkin$Skin81, _super);
		function DaerzijiaohuuiSkin$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = DaerzijiaohuuiSkin$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DaerzijiaohuuiSkin$Skin81;
	})(eui.Skin);

	var DaerzijiaohuuiSkin$Skin82 = 	(function (_super) {
		__extends(DaerzijiaohuuiSkin$Skin82, _super);
		function DaerzijiaohuuiSkin$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = DaerzijiaohuuiSkin$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DaerzijiaohuuiSkin$Skin82;
	})(eui.Skin);

	var DaerzijiaohuuiSkin$Skin83 = 	(function (_super) {
		__extends(DaerzijiaohuuiSkin$Skin83, _super);
		function DaerzijiaohuuiSkin$Skin83() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = DaerzijiaohuuiSkin$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DaerzijiaohuuiSkin$Skin83;
	})(eui.Skin);

	var DaerzijiaohuuiSkin$Skin84 = 	(function (_super) {
		__extends(DaerzijiaohuuiSkin$Skin84, _super);
		function DaerzijiaohuuiSkin$Skin84() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = DaerzijiaohuuiSkin$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DaerzijiaohuuiSkin$Skin84;
	})(eui.Skin);

	function DaerzijiaohuuiSkin() {
		_super.call(this);
		this.skinParts = ["daerziguanbi","daerzibeijing","daerzibiaoshi","daerzichakan","daerzijiaotan","daerzijinxiu","daerzizengsong","daerzizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.daerzizu_i()];
	}
	var _proto = DaerzijiaohuuiSkin.prototype;

	_proto.daerzizu_i = function () {
		var t = new eui.Group();
		this.daerzizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.daerziguanbi_i(),this.daerzibeijing_i(),this.daerzibiaoshi_i(),this.daerzichakan_i(),this.daerzijiaotan_i(),this.daerzijinxiu_i(),this.daerzizengsong_i()];
		return t;
	};
	_proto.daerziguanbi_i = function () {
		var t = new eui.Image();
		this.daerziguanbi = t;
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.daerzibeijing_i = function () {
		var t = new eui.Image();
		this.daerzibeijing = t;
		t.source = "img_jiajuchufabeijing_png";
		t.x = 231;
		t.y = 720;
		return t;
	};
	_proto.daerzibiaoshi_i = function () {
		var t = new eui.Image();
		this.daerzibiaoshi = t;
		t.source = "img_daerzibiaoshi_png";
		t.x = 148;
		t.y = 823.5;
		return t;
	};
	_proto.daerzichakan_i = function () {
		var t = new eui.Button();
		this.daerzichakan = t;
		t.enabled = true;
		t.label = "查看";
		t.x = 274;
		t.y = 739.5;
		t.skinName = DaerzijiaohuuiSkin$Skin81;
		return t;
	};
	_proto.daerzijiaotan_i = function () {
		var t = new eui.Button();
		this.daerzijiaotan = t;
		t.enabled = true;
		t.label = "交谈";
		t.x = 333.5;
		t.y = 824;
		t.skinName = DaerzijiaohuuiSkin$Skin82;
		return t;
	};
	_proto.daerzijinxiu_i = function () {
		var t = new eui.Button();
		this.daerzijinxiu = t;
		t.enabled = true;
		t.label = "进修";
		t.x = 327.5;
		t.y = 924.5;
		t.skinName = DaerzijiaohuuiSkin$Skin83;
		return t;
	};
	_proto.daerzizengsong_i = function () {
		var t = new eui.Button();
		this.daerzizengsong = t;
		t.enabled = true;
		t.label = "赠送";
		t.x = 268;
		t.y = 1000.5;
		t.skinName = DaerzijiaohuuiSkin$Skin84;
		return t;
	};
	return DaerzijiaohuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Daitutanchukuangui.exml'] = window.DaitutanchukuanguiSkin = (function (_super) {
	__extends(DaitutanchukuanguiSkin, _super);
	var DaitutanchukuanguiSkin$Skin85 = 	(function (_super) {
		__extends(DaitutanchukuanguiSkin$Skin85, _super);
		function DaitutanchukuanguiSkin$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
			];
		}
		var _proto = DaitutanchukuanguiSkin$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_tishiqueding1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DaitutanchukuanguiSkin$Skin85;
	})(eui.Skin);

	var DaitutanchukuanguiSkin$Skin86 = 	(function (_super) {
		__extends(DaitutanchukuanguiSkin$Skin86, _super);
		function DaitutanchukuanguiSkin$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_quedingzhuanfa2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_quedingzhuanfa2_png")
					])
			];
		}
		var _proto = DaitutanchukuanguiSkin$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_quedingzhuanfa1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DaitutanchukuanguiSkin$Skin86;
	})(eui.Skin);

	var DaitutanchukuanguiSkin$Skin87 = 	(function (_super) {
		__extends(DaitutanchukuanguiSkin$Skin87, _super);
		function DaitutanchukuanguiSkin$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_quedingguanggao2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_quedingguanggao2_png")
					])
			];
		}
		var _proto = DaitutanchukuanguiSkin$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_quedingguanggao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DaitutanchukuanguiSkin$Skin87;
	})(eui.Skin);

	var DaitutanchukuanguiSkin$Skin88 = 	(function (_super) {
		__extends(DaitutanchukuanguiSkin$Skin88, _super);
		function DaitutanchukuanguiSkin$Skin88() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = DaitutanchukuanguiSkin$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DaitutanchukuanguiSkin$Skin88;
	})(eui.Skin);

	function DaitutanchukuanguiSkin() {
		_super.call(this);
		this.skinParts = ["beijingtudt","biaotiwenzidt","tishitupiandt","tishineirongdt","quedinganniudt","quedinganniu0dt","quedinganniu1dt","guanbianniudt","daitutanchuzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.daitutanchuzu_i()];
	}
	var _proto = DaitutanchukuanguiSkin.prototype;

	_proto.daitutanchuzu_i = function () {
		var t = new eui.Group();
		this.daitutanchuzu = t;
		t.x = 105.5;
		t.y = 310;
		t.elementsContent = [this.beijingtudt_i(),this.biaotiwenzidt_i(),this.tishitupiandt_i(),this.tishineirongdt_i(),this.quedinganniudt_i(),this.quedinganniu0dt_i(),this.quedinganniu1dt_i(),this.guanbianniudt_i()];
		return t;
	};
	_proto.beijingtudt_i = function () {
		var t = new eui.Image();
		this.beijingtudt = t;
		t.source = "img_daitutanchukuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.biaotiwenzidt_i = function () {
		var t = new eui.Label();
		this.biaotiwenzidt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 55;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x968e8e;
		t.text = "带图标题";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 295;
		t.x = 120.5;
		t.y = 6;
		return t;
	};
	_proto.tishitupiandt_i = function () {
		var t = new eui.Image();
		this.tishitupiandt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.source = "img_danjuneirong_png";
		t.width = 240;
		t.x = 149.5;
		t.y = 117;
		return t;
	};
	_proto.tishineirongdt_i = function () {
		var t = new eui.Label();
		this.tishineirongdt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 167;
		t.lineSpacing = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x706a6a;
		t.text = "很抱歉的通知您很抱歉的通知您很抱歉的通知您很抱歉的通知您很抱歉的通知您很抱歉的通知您很抱歉的通知您";
		t.width = 313;
		t.x = 112.5;
		t.y = 376;
		return t;
	};
	_proto.quedinganniudt_i = function () {
		var t = new eui.Button();
		this.quedinganniudt = t;
		t.enabled = true;
		t.label = "";
		t.x = 183;
		t.y = 607;
		t.skinName = DaitutanchukuanguiSkin$Skin85;
		return t;
	};
	_proto.quedinganniu0dt_i = function () {
		var t = new eui.Button();
		this.quedinganniu0dt = t;
		t.enabled = true;
		t.label = "";
		t.x = 184.5;
		t.y = 607;
		t.skinName = DaitutanchukuanguiSkin$Skin86;
		return t;
	};
	_proto.quedinganniu1dt_i = function () {
		var t = new eui.Button();
		this.quedinganniu1dt = t;
		t.enabled = true;
		t.label = "";
		t.x = 184.5;
		t.y = 607;
		t.skinName = DaitutanchukuanguiSkin$Skin87;
		return t;
	};
	_proto.guanbianniudt_i = function () {
		var t = new eui.Button();
		this.guanbianniudt = t;
		t.enabled = true;
		t.label = "";
		t.x = 455;
		t.y = 19;
		t.skinName = DaitutanchukuanguiSkin$Skin88;
		return t;
	};
	return DaitutanchukuanguiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Dajiejiemian.exml'] = window.DajiejiemianSkin = (function (_super) {
	__extends(DajiejiemianSkin, _super);
	var DajiejiemianSkin$Skin89 = 	(function (_super) {
		__extends(DajiejiemianSkin$Skin89, _super);
		function DajiejiemianSkin$Skin89() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shaizi2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shaizi2_png")
					])
			];
		}
		var _proto = DajiejiemianSkin$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shaizi1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DajiejiemianSkin$Skin89;
	})(eui.Skin);

	function DajiejiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_chengshibeijing","taijie0","taijie1","taijie2","taijie3","taijie4","taijie5","taijie6","taijie7","taijie8","taijie9","taijie10","taijie11","taijie12","taijie13","taijie14","taijie15","taijie16","taijie17","taijie18","taijie19","taijie20","taijie21","taijie22","taijie23","taijie24","taijie25","taijie26","teshuxianshi","teshuxianshi0","teshuxianshi1","teshuxianshi2","teshuxianshi3","teshuxianshi4","teshuxianshi5","teshuxianshi6","teshuxianshi7","teshuxianshi8","teshuxianshi9","teshuxianshi10","teshuxianshi11","teshuxianshi12","teshuxianshi13","teshuxianshi14","teshuxianshi15","teshuxianshi16","teshuxianshi17","teshuxianshi18","teshuxianshi19","teshuxianshi20","teshuxianshi21","teshuxianshi22","teshuxianshi23","teshuxianshi24","teshuxianshi25","xianshizu","img_dianpu","juesetubiao","touxiang","youbiaotouxiangzu","touxiangkuang","juesezu","but_shaizi","img_tilitishibj","tilixiaohao","kaishianniuzu","dajiezu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.dajiezu_i()];
	}
	var _proto = DajiejiemianSkin.prototype;

	_proto.dajiezu_i = function () {
		var t = new eui.Group();
		this.dajiezu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_chengshibeijing_i(),this.taijie0_i(),this.taijie1_i(),this.taijie2_i(),this.taijie3_i(),this.taijie4_i(),this.taijie5_i(),this.taijie6_i(),this.taijie7_i(),this.taijie8_i(),this.taijie9_i(),this.taijie10_i(),this.taijie11_i(),this.taijie12_i(),this.taijie13_i(),this.taijie14_i(),this.taijie15_i(),this.taijie16_i(),this.taijie17_i(),this.taijie18_i(),this.taijie19_i(),this.taijie20_i(),this.taijie21_i(),this.taijie22_i(),this.taijie23_i(),this.taijie24_i(),this.taijie25_i(),this.taijie26_i(),this.xianshizu_i(),this.img_dianpu_i(),this.juesezu_i(),this.kaishianniuzu_i()];
		return t;
	};
	_proto.img_chengshibeijing_i = function () {
		var t = new eui.Image();
		this.img_chengshibeijing = t;
		t.source = "img_chengshibeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.taijie0_i = function () {
		var t = new eui.Image();
		this.taijie0 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 67;
		t.y = 1180.67;
		return t;
	};
	_proto.taijie1_i = function () {
		var t = new eui.Image();
		this.taijie1 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 183.12;
		t.y = 1128.19;
		return t;
	};
	_proto.taijie2_i = function () {
		var t = new eui.Image();
		this.taijie2 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 275.02;
		t.y = 1082.47;
		return t;
	};
	_proto.taijie3_i = function () {
		var t = new eui.Image();
		this.taijie3 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 362.49;
		t.y = 1041.71;
		return t;
	};
	_proto.taijie4_i = function () {
		var t = new eui.Image();
		this.taijie4 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 443.58;
		t.y = 999.77;
		return t;
	};
	_proto.taijie5_i = function () {
		var t = new eui.Image();
		this.taijie5 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 537;
		t.y = 957.77;
		return t;
	};
	_proto.taijie6_i = function () {
		var t = new eui.Image();
		this.taijie6 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 625.58;
		t.y = 913.01;
		return t;
	};
	_proto.taijie7_i = function () {
		var t = new eui.Image();
		this.taijie7 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 711.1;
		t.y = 866.19;
		return t;
	};
	_proto.taijie8_i = function () {
		var t = new eui.Image();
		this.taijie8 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 200.58;
		t.y = 915.94;
		return t;
	};
	_proto.taijie9_i = function () {
		var t = new eui.Image();
		this.taijie9 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 284.33;
		t.y = 887.24;
		return t;
	};
	_proto.taijie10_i = function () {
		var t = new eui.Image();
		this.taijie10 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 390.49;
		t.y = 846.3;
		return t;
	};
	_proto.taijie11_i = function () {
		var t = new eui.Image();
		this.taijie11 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 492.79;
		t.y = 802.18;
		return t;
	};
	_proto.taijie12_i = function () {
		var t = new eui.Image();
		this.taijie12 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 584.67;
		t.y = 744.27;
		return t;
	};
	_proto.taijie13_i = function () {
		var t = new eui.Image();
		this.taijie13 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 671.25;
		t.y = 696.85;
		return t;
	};
	_proto.taijie14_i = function () {
		var t = new eui.Image();
		this.taijie14 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 148.34;
		t.y = 794.79;
		return t;
	};
	_proto.taijie15_i = function () {
		var t = new eui.Image();
		this.taijie15 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 236.79;
		t.y = 749.97;
		return t;
	};
	_proto.taijie16_i = function () {
		var t = new eui.Image();
		this.taijie16 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 318.33;
		t.y = 708.27;
		return t;
	};
	_proto.taijie17_i = function () {
		var t = new eui.Image();
		this.taijie17 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 399.12;
		t.y = 668.33;
		return t;
	};
	_proto.taijie18_i = function () {
		var t = new eui.Image();
		this.taijie18 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 483.06;
		t.y = 627.33;
		return t;
	};
	_proto.taijie19_i = function () {
		var t = new eui.Image();
		this.taijie19 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 570.82;
		t.y = 585.3;
		return t;
	};
	_proto.taijie20_i = function () {
		var t = new eui.Image();
		this.taijie20 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 661.36;
		t.y = 547.21;
		return t;
	};
	_proto.taijie21_i = function () {
		var t = new eui.Image();
		this.taijie21 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 193.94;
		t.y = 595.3;
		return t;
	};
	_proto.taijie22_i = function () {
		var t = new eui.Image();
		this.taijie22 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 283.12;
		t.y = 552.95;
		return t;
	};
	_proto.taijie23_i = function () {
		var t = new eui.Image();
		this.taijie23 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 363.06;
		t.y = 509.01;
		return t;
	};
	_proto.taijie24_i = function () {
		var t = new eui.Image();
		this.taijie24 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 447.15;
		t.y = 465.87;
		return t;
	};
	_proto.taijie25_i = function () {
		var t = new eui.Image();
		this.taijie25 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 526.34;
		t.y = 422.2;
		return t;
	};
	_proto.taijie26_i = function () {
		var t = new eui.Image();
		this.taijie26 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 619.06;
		t.y = 376.89;
		return t;
	};
	_proto.xianshizu_i = function () {
		var t = new eui.Group();
		this.xianshizu = t;
		t.x = 36.5;
		t.y = 346.39;
		t.elementsContent = [this.teshuxianshi_i(),this.teshuxianshi0_i(),this.teshuxianshi1_i(),this.teshuxianshi2_i(),this.teshuxianshi3_i(),this.teshuxianshi4_i(),this.teshuxianshi5_i(),this.teshuxianshi6_i(),this.teshuxianshi7_i(),this.teshuxianshi8_i(),this.teshuxianshi9_i(),this.teshuxianshi10_i(),this.teshuxianshi11_i(),this.teshuxianshi12_i(),this.teshuxianshi13_i(),this.teshuxianshi14_i(),this.teshuxianshi15_i(),this.teshuxianshi16_i(),this.teshuxianshi17_i(),this.teshuxianshi18_i(),this.teshuxianshi19_i(),this.teshuxianshi20_i(),this.teshuxianshi21_i(),this.teshuxianshi22_i(),this.teshuxianshi23_i(),this.teshuxianshi24_i(),this.teshuxianshi25_i()];
		return t;
	};
	_proto.teshuxianshi_i = function () {
		var t = new eui.Image();
		this.teshuxianshi = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 0;
		t.y = 803.78;
		return t;
	};
	_proto.teshuxianshi0_i = function () {
		var t = new eui.Image();
		this.teshuxianshi0 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 116.94;
		t.y = 755.58;
		return t;
	};
	_proto.teshuxianshi1_i = function () {
		var t = new eui.Image();
		this.teshuxianshi1 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 209.79;
		t.y = 709.61;
		return t;
	};
	_proto.teshuxianshi2_i = function () {
		var t = new eui.Image();
		this.teshuxianshi2 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 293.49;
		t.y = 664.82;
		return t;
	};
	_proto.teshuxianshi3_i = function () {
		var t = new eui.Image();
		this.teshuxianshi3 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 380.15;
		t.y = 622.88;
		return t;
	};
	_proto.teshuxianshi4_i = function () {
		var t = new eui.Image();
		this.teshuxianshi4 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 470;
		t.y = 579.05;
		return t;
	};
	_proto.teshuxianshi5_i = function () {
		var t = new eui.Image();
		this.teshuxianshi5 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 558.58;
		t.y = 536.12;
		return t;
	};
	_proto.teshuxianshi6_i = function () {
		var t = new eui.Image();
		this.teshuxianshi6 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 644.36;
		t.y = 490.61;
		return t;
	};
	_proto.teshuxianshi7_i = function () {
		var t = new eui.Image();
		this.teshuxianshi7 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 136.12;
		t.y = 562.88;
		return t;
	};
	_proto.teshuxianshi8_i = function () {
		var t = new eui.Image();
		this.teshuxianshi8 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 237.33;
		t.y = 519.05;
		return t;
	};
	_proto.teshuxianshi9_i = function () {
		var t = new eui.Image();
		this.teshuxianshi9 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 326.06;
		t.y = 469.41;
		return t;
	};
	_proto.teshuxianshi10_i = function () {
		var t = new eui.Image();
		this.teshuxianshi10 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 425.79;
		t.y = 425.29;
		return t;
	};
	_proto.teshuxianshi11_i = function () {
		var t = new eui.Image();
		this.teshuxianshi11 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 513.82;
		t.y = 367.38;
		return t;
	};
	_proto.teshuxianshi12_i = function () {
		var t = new eui.Image();
		this.teshuxianshi12 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 604.36;
		t.y = 321.44;
		return t;
	};
	_proto.teshuxianshi13_i = function () {
		var t = new eui.Image();
		this.teshuxianshi13 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 81.34;
		t.y = 415.29;
		return t;
	};
	_proto.teshuxianshi14_i = function () {
		var t = new eui.Image();
		this.teshuxianshi14 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 166.94;
		t.y = 373.08;
		return t;
	};
	_proto.teshuxianshi15_i = function () {
		var t = new eui.Image();
		this.teshuxianshi15 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 251.33;
		t.y = 331.44;
		return t;
	};
	_proto.teshuxianshi16_i = function () {
		var t = new eui.Image();
		this.teshuxianshi16 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 335.49;
		t.y = 288.41;
		return t;
	};
	_proto.teshuxianshi17_i = function () {
		var t = new eui.Image();
		this.teshuxianshi17 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 416.58;
		t.y = 250.44;
		return t;
	};
	_proto.teshuxianshi18_i = function () {
		var t = new eui.Image();
		this.teshuxianshi18 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 500;
		t.y = 210.32;
		return t;
	};
	_proto.teshuxianshi19_i = function () {
		var t = new eui.Image();
		this.teshuxianshi19 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 594.25;
		t.y = 166.06;
		return t;
	};
	_proto.teshuxianshi20_i = function () {
		var t = new eui.Image();
		this.teshuxianshi20 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 126.12;
		t.y = 216.06;
		return t;
	};
	_proto.teshuxianshi21_i = function () {
		var t = new eui.Image();
		this.teshuxianshi21 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 213.5;
		t.y = 172.12;
		return t;
	};
	_proto.teshuxianshi22_i = function () {
		var t = new eui.Image();
		this.teshuxianshi22 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 295.49;
		t.y = 132.12;
		return t;
	};
	_proto.teshuxianshi23_i = function () {
		var t = new eui.Image();
		this.teshuxianshi23 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 376.58;
		t.y = 85.31;
		return t;
	};
	_proto.teshuxianshi24_i = function () {
		var t = new eui.Image();
		this.teshuxianshi24 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 456.06;
		t.y = 45.31;
		return t;
	};
	_proto.teshuxianshi25_i = function () {
		var t = new eui.Image();
		this.teshuxianshi25 = t;
		t.height = 60;
		t.source = "img_bangong_png";
		t.width = 60;
		t.x = 548.58;
		t.y = 0;
		return t;
	};
	_proto.img_dianpu_i = function () {
		var t = new eui.Image();
		this.img_dianpu = t;
		t.anchorOffsetX = 0;
		t.source = "img_dianpu_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juesezu_i = function () {
		var t = new eui.Group();
		this.juesezu = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 96.5;
		t.x = 59.5;
		t.y = 1163.67;
		t.elementsContent = [this.juesetubiao_i(),this.touxiang_i(),this.youbiaotouxiangzu_i(),this.touxiangkuang_i()];
		return t;
	};
	_proto.juesetubiao_i = function () {
		var t = new eui.Image();
		this.juesetubiao = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.source = "img_xingren_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.touxiang_i = function () {
		var t = new eui.Image();
		this.touxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "tx1000_png";
		t.width = 30;
		t.x = 12;
		t.y = 24.02;
		return t;
	};
	_proto.youbiaotouxiangzu_i = function () {
		var t = new eui.Group();
		this.youbiaotouxiangzu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.width = 30;
		t.x = 12;
		t.y = 24.2;
		return t;
	};
	_proto.touxiangkuang_i = function () {
		var t = new eui.Image();
		this.touxiangkuang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = -1.07;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_xingren2_png";
		t.x = 6.5;
		t.y = 17.48;
		return t;
	};
	_proto.kaishianniuzu_i = function () {
		var t = new eui.Group();
		this.kaishianniuzu = t;
		t.x = 250.5;
		t.y = 772;
		t.elementsContent = [this.but_shaizi_i(),this.img_tilitishibj_i(),this.tilixiaohao_i()];
		return t;
	};
	_proto.but_shaizi_i = function () {
		var t = new eui.Button();
		this.but_shaizi = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = DajiejiemianSkin$Skin89;
		return t;
	};
	_proto.img_tilitishibj_i = function () {
		var t = new eui.Image();
		this.img_tilitishibj = t;
		t.source = "img_tilitishibj_png";
		t.x = 29.5;
		t.y = 267.83;
		return t;
	};
	_proto.tilixiaohao_i = function () {
		var t = new eui.Label();
		this.tilixiaohao = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 30;
		t.stroke = 2;
		t.text = "1/50";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = 36.5;
		t.y = 275.83;
		return t;
	};
	return DajiejiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Daojutipsui.exml'] = window.DaojutipsuiSkin = (function (_super) {
	__extends(DaojutipsuiSkin, _super);
	function DaojutipsuiSkin() {
		_super.call(this);
		this.skinParts = ["heiseguanbi","img_daojutipsbj","daojuicon","mingcheng","daojumingzi","leixing","leixingming","shuoming","shuomingneirong","tipszu","daojuzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.daojuzu_i()];
	}
	var _proto = DaojutipsuiSkin.prototype;

	_proto.daojuzu_i = function () {
		var t = new eui.Group();
		this.daojuzu = t;
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.heiseguanbi_i(),this.tipszu_i()];
		return t;
	};
	_proto.heiseguanbi_i = function () {
		var t = new eui.Image();
		this.heiseguanbi = t;
		t.alpha = 0.4;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.tipszu_i = function () {
		var t = new eui.Group();
		this.tipszu = t;
		t.x = 232;
		t.y = 393;
		t.elementsContent = [this.img_daojutipsbj_i(),this.daojuicon_i(),this.mingcheng_i(),this.daojumingzi_i(),this.leixing_i(),this.leixingming_i(),this.shuoming_i(),this.shuomingneirong_i()];
		return t;
	};
	_proto.img_daojutipsbj_i = function () {
		var t = new eui.Image();
		this.img_daojutipsbj = t;
		t.source = "img_daojutipsbj_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojuicon_i = function () {
		var t = new eui.Image();
		this.daojuicon = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 80;
		t.source = "img_anquanguanli_png";
		t.width = 80;
		t.x = 39;
		t.y = 43;
		return t;
	};
	_proto.mingcheng_i = function () {
		var t = new eui.Label();
		this.mingcheng = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x726f6f;
		t.text = "名称";
		t.textAlign = "left";
		t.textColor = 0xf48709;
		t.verticalAlign = "middle";
		t.width = 50;
		t.x = 140;
		t.y = 35;
		return t;
	};
	_proto.daojumingzi_i = function () {
		var t = new eui.Label();
		this.daojumingzi = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x726F6F;
		t.text = "这是道具名称";
		t.textAlign = "left";
		t.textColor = 0x93f409;
		t.verticalAlign = "middle";
		t.width = 102;
		t.x = 140;
		t.y = 62.5;
		return t;
	};
	_proto.leixing_i = function () {
		var t = new eui.Label();
		this.leixing = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x726F6F;
		t.text = "类型";
		t.textAlign = "left";
		t.textColor = 0xF48709;
		t.verticalAlign = "middle";
		t.width = 50;
		t.x = 140;
		t.y = 87.5;
		return t;
	};
	_proto.leixingming_i = function () {
		var t = new eui.Label();
		this.leixingming = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x726F6F;
		t.text = "家用电器";
		t.textAlign = "left";
		t.textColor = 0x93F409;
		t.verticalAlign = "middle";
		t.width = 102;
		t.x = 140;
		t.y = 115;
		return t;
	};
	_proto.shuoming_i = function () {
		var t = new eui.Label();
		this.shuoming = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x726F6F;
		t.text = "说明";
		t.textAlign = "left";
		t.textColor = 0xF48709;
		t.verticalAlign = "middle";
		t.width = 50;
		t.x = 28.5;
		t.y = 144.5;
		return t;
	};
	_proto.shuomingneirong_i = function () {
		var t = new eui.Label();
		this.shuomingneirong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 83;
		t.lineSpacing = 10;
		t.size = 16;
		t.stroke = 2;
		t.strokeColor = 0x726F6F;
		t.text = "家用电器";
		t.textAlign = "left";
		t.textColor = 0x93F409;
		t.verticalAlign = "top";
		t.width = 198;
		t.x = 28.5;
		t.y = 173;
		return t;
	};
	return DaojutipsuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Dianpufandian.exml'] = window.DianpufandianSkin = (function (_super) {
	__extends(DianpufandianSkin, _super);
	var DianpufandianSkin$Skin90 = 	(function (_super) {
		__extends(DianpufandianSkin$Skin90, _super);
		function DianpufandianSkin$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_xiaofei2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_xiaofei2_png")
					])
			];
		}
		var _proto = DianpufandianSkin$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_xiaofei1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianpufandianSkin$Skin90;
	})(eui.Skin);

	var DianpufandianSkin$Skin91 = 	(function (_super) {
		__extends(DianpufandianSkin$Skin91, _super);
		function DianpufandianSkin$Skin91() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiekuan2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiekuan2_png")
					])
			];
		}
		var _proto = DianpufandianSkin$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiekuan1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianpufandianSkin$Skin91;
	})(eui.Skin);

	var DianpufandianSkin$Skin92 = 	(function (_super) {
		__extends(DianpufandianSkin$Skin92, _super);
		function DianpufandianSkin$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shougou2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shougou2_png")
					])
			];
		}
		var _proto = DianpufandianSkin$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shougou1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianpufandianSkin$Skin92;
	})(eui.Skin);

	var DianpufandianSkin$Skin93 = 	(function (_super) {
		__extends(DianpufandianSkin$Skin93, _super);
		function DianpufandianSkin$Skin93() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DianpufandianSkin$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "but_guyuanxiangkuang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianpufandianSkin$Skin93;
	})(eui.Skin);

	var DianpufandianSkin$Skin94 = 	(function (_super) {
		__extends(DianpufandianSkin$Skin94, _super);
		function DianpufandianSkin$Skin94() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DianpufandianSkin$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "but_guyuanxiangkuang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianpufandianSkin$Skin94;
	})(eui.Skin);

	var DianpufandianSkin$Skin95 = 	(function (_super) {
		__extends(DianpufandianSkin$Skin95, _super);
		function DianpufandianSkin$Skin95() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DianpufandianSkin$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "but_guyuanxiangkuang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianpufandianSkin$Skin95;
	})(eui.Skin);

	function DianpufandianSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao","img_fandiandianpubj","dianzhutouxiang","dianzutxgroup","dianzutouxiangkuang","guyuantouxiang1","guyuantouxiang2","guyuantouxiang3","guyuantxgroup1","guyuantxgroup2","guyuantxgroup3","but_xiaofei","but_shouyin","but_shougou","img_yinye","dianzhuming","shoufeishu","renqishu","zujinshu","zuqishu","zhuangtaishu","dianpuming","but_guyuan1","but_guyuan2","but_guyuan3","dianpufandianzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.dianpufandianzu_i()];
	}
	var _proto = DianpufandianSkin.prototype;

	_proto.dianpufandianzu_i = function () {
		var t = new eui.Group();
		this.dianpufandianzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao_i(),this.img_fandiandianpubj_i(),this.dianzhutouxiang_i(),this.dianzutxgroup_i(),this.dianzutouxiangkuang_i(),this.guyuantouxiang1_i(),this.guyuantouxiang2_i(),this.guyuantouxiang3_i(),this.guyuantxgroup1_i(),this.guyuantxgroup2_i(),this.guyuantxgroup3_i(),this.but_xiaofei_i(),this.but_shouyin_i(),this.but_shougou_i(),this.img_yinye_i(),this.dianzhuming_i(),this.shoufeishu_i(),this.renqishu_i(),this.zujinshu_i(),this.zuqishu_i(),this.zhuangtaishu_i(),this.dianpuming_i(),this.but_guyuan1_i(),this.but_guyuan2_i(),this.but_guyuan3_i()];
		return t;
	};
	_proto.img_heisezhezao_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.img_fandiandianpubj_i = function () {
		var t = new eui.Image();
		this.img_fandiandianpubj = t;
		t.source = "img_fandiandianpubj_png";
		t.x = 6.5;
		t.y = 168.06;
		return t;
	};
	_proto.dianzhutouxiang_i = function () {
		var t = new eui.Image();
		this.dianzhutouxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.source = "kongbaitouxiang_png";
		t.width = 129.09;
		t.x = 137.65;
		t.y = 334;
		return t;
	};
	_proto.dianzutxgroup_i = function () {
		var t = new eui.Group();
		this.dianzutxgroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.width = 129;
		t.x = 136;
		t.y = 342;
		return t;
	};
	_proto.dianzutouxiangkuang_i = function () {
		var t = new eui.Image();
		this.dianzutouxiangkuang = t;
		t.source = "img_dianzhuxiangkuang_png";
		t.x = 124.18;
		t.y = 285.09;
		return t;
	};
	_proto.guyuantouxiang1_i = function () {
		var t = new eui.Image();
		this.guyuantouxiang1 = t;
		t.height = 116;
		t.source = "img_kongbaijiahao_png";
		t.width = 136;
		t.x = 115.83;
		t.y = 643.03;
		return t;
	};
	_proto.guyuantouxiang2_i = function () {
		var t = new eui.Image();
		this.guyuantouxiang2 = t;
		t.height = 116;
		t.source = "img_kongbaijiahao_png";
		t.width = 136;
		t.x = 310.14;
		t.y = 643.03;
		return t;
	};
	_proto.guyuantouxiang3_i = function () {
		var t = new eui.Image();
		this.guyuantouxiang3 = t;
		t.height = 116;
		t.source = "img_kongbaijiahao_png";
		t.width = 136;
		t.x = 497.23;
		t.y = 643.94;
		return t;
	};
	_proto.guyuantxgroup1_i = function () {
		var t = new eui.Group();
		this.guyuantxgroup1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.width = 129;
		t.x = 119.33;
		t.y = 643.03;
		return t;
	};
	_proto.guyuantxgroup2_i = function () {
		var t = new eui.Group();
		this.guyuantxgroup2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.width = 129;
		t.x = 313.51;
		t.y = 644.44;
		return t;
	};
	_proto.guyuantxgroup3_i = function () {
		var t = new eui.Group();
		this.guyuantxgroup3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.width = 129;
		t.x = 500.73;
		t.y = 644.03;
		return t;
	};
	_proto.but_xiaofei_i = function () {
		var t = new eui.Button();
		this.but_xiaofei = t;
		t.enabled = true;
		t.label = "";
		t.x = 102.97;
		t.y = 793.97;
		t.skinName = DianpufandianSkin$Skin90;
		return t;
	};
	_proto.but_shouyin_i = function () {
		var t = new eui.Button();
		this.but_shouyin = t;
		t.enabled = true;
		t.label = "";
		t.x = 387.32;
		t.y = 793.97;
		t.skinName = DianpufandianSkin$Skin91;
		return t;
	};
	_proto.but_shougou_i = function () {
		var t = new eui.Button();
		this.but_shougou = t;
		t.enabled = true;
		t.label = "";
		t.x = 387.32;
		t.y = 793.97;
		t.skinName = DianpufandianSkin$Skin92;
		return t;
	};
	_proto.img_yinye_i = function () {
		var t = new eui.Image();
		this.img_yinye = t;
		t.source = "img_shoufei1_png";
		t.x = 357;
		t.y = 280;
		return t;
	};
	_proto.dianzhuming_i = function () {
		var t = new eui.Label();
		this.dianzhuming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 24;
		t.stroke = 2;
		t.text = "店主名字";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 215.34;
		t.x = 102.35;
		t.y = 496.33;
		return t;
	};
	_proto.shoufeishu_i = function () {
		var t = new eui.Label();
		this.shoufeishu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 24;
		t.stroke = 2;
		t.text = "8888";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 126.01;
		t.x = 476.87;
		t.y = 285.75;
		return t;
	};
	_proto.renqishu_i = function () {
		var t = new eui.Label();
		this.renqishu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 24;
		t.stroke = 2;
		t.text = "8888";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 127.01;
		t.x = 475.87;
		t.y = 340.08;
		return t;
	};
	_proto.zujinshu_i = function () {
		var t = new eui.Label();
		this.zujinshu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 24;
		t.stroke = 2;
		t.text = "8888";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 127.01;
		t.x = 475.87;
		t.y = 394;
		return t;
	};
	_proto.zuqishu_i = function () {
		var t = new eui.Label();
		this.zuqishu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 24;
		t.stroke = 2;
		t.text = "8888";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 126.01;
		t.x = 476.87;
		t.y = 446.75;
		return t;
	};
	_proto.zhuangtaishu_i = function () {
		var t = new eui.Label();
		this.zhuangtaishu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 24;
		t.stroke = 2;
		t.text = "可收购";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 125.01;
		t.x = 475.87;
		t.y = 501.65;
		return t;
	};
	_proto.dianpuming_i = function () {
		var t = new eui.Label();
		this.dianpuming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 30;
		t.stroke = 4;
		t.strokeColor = 0xf4ebeb;
		t.text = "可收购";
		t.textAlign = "center";
		t.textColor = 0xef870e;
		t.verticalAlign = "middle";
		t.width = 216.67;
		t.x = 259.85;
		t.y = 180.98;
		return t;
	};
	_proto.but_guyuan1_i = function () {
		var t = new eui.Button();
		this.but_guyuan1 = t;
		t.enabled = true;
		t.label = "";
		t.x = 107.33;
		t.y = 585.93;
		t.skinName = DianpufandianSkin$Skin93;
		return t;
	};
	_proto.but_guyuan2_i = function () {
		var t = new eui.Button();
		this.but_guyuan2 = t;
		t.enabled = true;
		t.label = "";
		t.x = 301.51;
		t.y = 585.93;
		t.skinName = DianpufandianSkin$Skin94;
		return t;
	};
	_proto.but_guyuan3_i = function () {
		var t = new eui.Button();
		this.but_guyuan3 = t;
		t.enabled = true;
		t.label = "";
		t.x = 488.73;
		t.y = 585.93;
		t.skinName = DianpufandianSkin$Skin95;
		return t;
	};
	return DianpufandianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Dianpurukou.exml'] = window.DianpurukouSkin = (function (_super) {
	__extends(DianpurukouSkin, _super);
	function DianpurukouSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao","jinruwenzi","zhuanchangrukou"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhuanchangrukou_i()];
	}
	var _proto = DianpurukouSkin.prototype;

	_proto.zhuanchangrukou_i = function () {
		var t = new eui.Group();
		this.zhuanchangrukou = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao_i(),this.jinruwenzi_i()];
		return t;
	};
	_proto.img_heisezhezao_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.jinruwenzi_i = function () {
		var t = new eui.Label();
		this.jinruwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 610;
		t.size = 48;
		t.text = "你辗转来到了一家【超市】，思索一番，你决定是否进入看看？";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 680;
		t.x = 35;
		t.y = 268;
		return t;
	};
	return DianpurukouSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Dianpuzhaopinui.exml'] = window.DianpuzhaopinuiSkin = (function (_super) {
	__extends(DianpuzhaopinuiSkin, _super);
	var DianpuzhaopinuiSkin$Skin96 = 	(function (_super) {
		__extends(DianpuzhaopinuiSkin$Skin96, _super);
		function DianpuzhaopinuiSkin$Skin96() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_zhaopinanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_zhaopinanniu2_png")
					])
			];
		}
		var _proto = DianpuzhaopinuiSkin$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_zhaopinanniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianpuzhaopinuiSkin$Skin96;
	})(eui.Skin);

	var DianpuzhaopinuiSkin$Skin97 = 	(function (_super) {
		__extends(DianpuzhaopinuiSkin$Skin97, _super);
		function DianpuzhaopinuiSkin$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiepinanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiepinanniu2_png")
					])
			];
		}
		var _proto = DianpuzhaopinuiSkin$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiepinanniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianpuzhaopinuiSkin$Skin97;
	})(eui.Skin);

	function DianpuzhaopinuiSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao1","jiemianbeijing","xitongtouxiang","touxiangzu","xiangkuang","xingming","mingzi","jineng","jinengshu","shuoming","but_zhaopin","but_jiepin","zhaopinzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhaopinzu_i()];
	}
	var _proto = DianpuzhaopinuiSkin.prototype;

	_proto.zhaopinzu_i = function () {
		var t = new eui.Group();
		this.zhaopinzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao1_i(),this.jiemianbeijing_i(),this.xitongtouxiang_i(),this.touxiangzu_i(),this.xiangkuang_i(),this.xingming_i(),this.mingzi_i(),this.jineng_i(),this.jinengshu_i(),this.shuoming_i(),this.but_zhaopin_i(),this.but_jiepin_i()];
		return t;
	};
	_proto.img_heisezhezao1_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao1 = t;
		t.alpha = 0.2;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.jiemianbeijing_i = function () {
		var t = new eui.Image();
		this.jiemianbeijing = t;
		t.source = "img_zhaopinbeijing_png";
		t.x = 216.67;
		t.y = 279;
		return t;
	};
	_proto.xitongtouxiang_i = function () {
		var t = new eui.Image();
		this.xitongtouxiang = t;
		t.height = 120;
		t.source = "kongbaitouxiang_png";
		t.width = 120;
		t.x = 303;
		t.y = 359;
		return t;
	};
	_proto.touxiangzu_i = function () {
		var t = new eui.Group();
		this.touxiangzu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.width = 117;
		t.x = 305;
		t.y = 362;
		return t;
	};
	_proto.xiangkuang_i = function () {
		var t = new eui.Image();
		this.xiangkuang = t;
		t.source = "img_zhaopinxiangkuang_png";
		t.x = 298.17;
		t.y = 355;
		return t;
	};
	_proto.xingming_i = function () {
		var t = new eui.Label();
		this.xingming = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x898484;
		t.text = "姓名";
		t.width = 53;
		t.x = 279;
		t.y = 498;
		return t;
	};
	_proto.mingzi_i = function () {
		var t = new eui.Label();
		this.mingzi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 12;
		t.stroke = 2;
		t.strokeColor = 0x898484;
		t.text = "名字可以放八个字";
		t.width = 104;
		t.x = 348.5;
		t.y = 503;
		return t;
	};
	_proto.jineng_i = function () {
		var t = new eui.Label();
		this.jineng = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x898484;
		t.text = "技能";
		t.width = 53;
		t.x = 279;
		t.y = 527;
		return t;
	};
	_proto.jinengshu_i = function () {
		var t = new eui.Label();
		this.jinengshu = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 12;
		t.stroke = 2;
		t.strokeColor = 0x898484;
		t.text = "收益 + 80";
		t.width = 110;
		t.x = 348.5;
		t.y = 533;
		return t;
	};
	_proto.shuoming_i = function () {
		var t = new eui.Label();
		this.shuoming = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.rotation = 359.46;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0xfcf2f2;
		t.text = "招聘可寻觅店员";
		t.textColor = 0xf73333;
		t.width = 172.01;
		t.x = 279;
		t.y = 555;
		return t;
	};
	_proto.but_zhaopin_i = function () {
		var t = new eui.Button();
		this.but_zhaopin = t;
		t.enabled = true;
		t.label = "";
		t.x = 278.17;
		t.y = 590;
		t.skinName = DianpuzhaopinuiSkin$Skin96;
		return t;
	};
	_proto.but_jiepin_i = function () {
		var t = new eui.Button();
		this.but_jiepin = t;
		t.enabled = true;
		t.label = "";
		t.x = 278.1;
		t.y = 591;
		t.skinName = DianpuzhaopinuiSkin$Skin97;
		return t;
	};
	return DianpuzhaopinuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Dianshijiaohuui.exml'] = window.DianshijiaohuuiSkin = (function (_super) {
	__extends(DianshijiaohuuiSkin, _super);
	var DianshijiaohuuiSkin$Skin98 = 	(function (_super) {
		__extends(DianshijiaohuuiSkin$Skin98, _super);
		function DianshijiaohuuiSkin$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = DianshijiaohuuiSkin$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianshijiaohuuiSkin$Skin98;
	})(eui.Skin);

	var DianshijiaohuuiSkin$Skin99 = 	(function (_super) {
		__extends(DianshijiaohuuiSkin$Skin99, _super);
		function DianshijiaohuuiSkin$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = DianshijiaohuuiSkin$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianshijiaohuuiSkin$Skin99;
	})(eui.Skin);

	var DianshijiaohuuiSkin$Skin100 = 	(function (_super) {
		__extends(DianshijiaohuuiSkin$Skin100, _super);
		function DianshijiaohuuiSkin$Skin100() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = DianshijiaohuuiSkin$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianshijiaohuuiSkin$Skin100;
	})(eui.Skin);

	function DianshijiaohuuiSkin() {
		_super.call(this);
		this.skinParts = ["dianshiguanbi","dianshibeijing","dianshibiaoshi","dianshichakan","dianshijinxiu","dianshizengsong","dianshi"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.dianshi_i()];
	}
	var _proto = DianshijiaohuuiSkin.prototype;

	_proto.dianshi_i = function () {
		var t = new eui.Group();
		this.dianshi = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.dianshiguanbi_i(),this.dianshibeijing_i(),this.dianshibiaoshi_i(),this.dianshichakan_i(),this.dianshijinxiu_i(),this.dianshizengsong_i()];
		return t;
	};
	_proto.dianshiguanbi_i = function () {
		var t = new eui.Image();
		this.dianshiguanbi = t;
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.dianshibeijing_i = function () {
		var t = new eui.Image();
		this.dianshibeijing = t;
		t.rotation = 179.94;
		t.source = "img_jiajuchufabeijing_png";
		t.x = 614.7;
		t.y = 811.86;
		return t;
	};
	_proto.dianshibiaoshi_i = function () {
		var t = new eui.Image();
		this.dianshibiaoshi = t;
		t.rotation = 0.14;
		t.source = "img_dianshibiaoshi_png";
		t.x = 544.5;
		t.y = 541.27;
		return t;
	};
	_proto.dianshichakan_i = function () {
		var t = new eui.Button();
		this.dianshichakan = t;
		t.enabled = true;
		t.label = "查看";
		t.x = 469.05;
		t.y = 469.77;
		t.skinName = DianshijiaohuuiSkin$Skin98;
		return t;
	};
	_proto.dianshijinxiu_i = function () {
		var t = new eui.Button();
		this.dianshijinxiu = t;
		t.enabled = true;
		t.label = "剧集";
		t.x = 424.5;
		t.y = 580.97;
		t.skinName = DianshijiaohuuiSkin$Skin99;
		return t;
	};
	_proto.dianshizengsong_i = function () {
		var t = new eui.Button();
		this.dianshizengsong = t;
		t.enabled = true;
		t.label = "小品";
		t.x = 465.05;
		t.y = 693;
		t.skinName = DianshijiaohuuiSkin$Skin100;
		return t;
	};
	return DianshijiaohuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Ererzijiaohuui.exml'] = window.ErerzijiaohuuiSkin = (function (_super) {
	__extends(ErerzijiaohuuiSkin, _super);
	var ErerzijiaohuuiSkin$Skin101 = 	(function (_super) {
		__extends(ErerzijiaohuuiSkin$Skin101, _super);
		function ErerzijiaohuuiSkin$Skin101() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ErerzijiaohuuiSkin$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ErerzijiaohuuiSkin$Skin101;
	})(eui.Skin);

	var ErerzijiaohuuiSkin$Skin102 = 	(function (_super) {
		__extends(ErerzijiaohuuiSkin$Skin102, _super);
		function ErerzijiaohuuiSkin$Skin102() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ErerzijiaohuuiSkin$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ErerzijiaohuuiSkin$Skin102;
	})(eui.Skin);

	var ErerzijiaohuuiSkin$Skin103 = 	(function (_super) {
		__extends(ErerzijiaohuuiSkin$Skin103, _super);
		function ErerzijiaohuuiSkin$Skin103() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ErerzijiaohuuiSkin$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ErerzijiaohuuiSkin$Skin103;
	})(eui.Skin);

	var ErerzijiaohuuiSkin$Skin104 = 	(function (_super) {
		__extends(ErerzijiaohuuiSkin$Skin104, _super);
		function ErerzijiaohuuiSkin$Skin104() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ErerzijiaohuuiSkin$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ErerzijiaohuuiSkin$Skin104;
	})(eui.Skin);

	function ErerzijiaohuuiSkin() {
		_super.call(this);
		this.skinParts = ["ererziguanbi","ererzibiaoshi","ererzibeijing","ererzichakan","ererzijiaotan","ererzijinxiu","ererzizengsong","ererzizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.ererzizu_i()];
	}
	var _proto = ErerzijiaohuuiSkin.prototype;

	_proto.ererzizu_i = function () {
		var t = new eui.Group();
		this.ererzizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.ererziguanbi_i(),this.ererzibiaoshi_i(),this.ererzibeijing_i(),this.ererzichakan_i(),this.ererzijiaotan_i(),this.ererzijinxiu_i(),this.ererzizengsong_i()];
		return t;
	};
	_proto.ererziguanbi_i = function () {
		var t = new eui.Image();
		this.ererziguanbi = t;
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.ererzibiaoshi_i = function () {
		var t = new eui.Image();
		this.ererzibiaoshi = t;
		t.source = "img_xiaoerzibiaoshi_png";
		t.x = 358;
		t.y = 641;
		return t;
	};
	_proto.ererzibeijing_i = function () {
		var t = new eui.Image();
		this.ererzibeijing = t;
		t.source = "img_jiajuchufabeijing_png";
		t.x = 435.5;
		t.y = 542.5;
		return t;
	};
	_proto.ererzichakan_i = function () {
		var t = new eui.Button();
		this.ererzichakan = t;
		t.enabled = true;
		t.label = "查看";
		t.x = 478.5;
		t.y = 562;
		t.skinName = ErerzijiaohuuiSkin$Skin101;
		return t;
	};
	_proto.ererzijiaotan_i = function () {
		var t = new eui.Button();
		this.ererzijiaotan = t;
		t.enabled = true;
		t.label = "交谈";
		t.x = 538;
		t.y = 646.5;
		t.skinName = ErerzijiaohuuiSkin$Skin102;
		return t;
	};
	_proto.ererzijinxiu_i = function () {
		var t = new eui.Button();
		this.ererzijinxiu = t;
		t.enabled = true;
		t.label = "工作";
		t.x = 532;
		t.y = 747;
		t.skinName = ErerzijiaohuuiSkin$Skin103;
		return t;
	};
	_proto.ererzizengsong_i = function () {
		var t = new eui.Button();
		this.ererzizengsong = t;
		t.enabled = true;
		t.label = "赠送";
		t.x = 472.5;
		t.y = 823;
		t.skinName = ErerzijiaohuuiSkin$Skin104;
		return t;
	};
	return ErerzijiaohuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Fandiandonghuarongqi.exml'] = window.FandiandonghuarongqiSkin = (function (_super) {
	__extends(FandiandonghuarongqiSkin, _super);
	function FandiandonghuarongqiSkin() {
		_super.call(this);
		this.skinParts = ["donghuarongqi"];
		
		this.height = 108;
		this.width = 30;
		this.elementsContent = [this.donghuarongqi_i()];
	}
	var _proto = FandiandonghuarongqiSkin.prototype;

	_proto.donghuarongqi_i = function () {
		var t = new eui.Group();
		this.donghuarongqi = t;
		t.height = 108;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return FandiandonghuarongqiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Gerendaojujiemian.exml'] = window.GerendaojujiemianSkin = (function (_super) {
	__extends(GerendaojujiemianSkin, _super);
	var GerendaojujiemianSkin$Skin105 = 	(function (_super) {
		__extends(GerendaojujiemianSkin$Skin105, _super);
		function GerendaojujiemianSkin$Skin105() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = GerendaojujiemianSkin$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerendaojujiemianSkin$Skin105;
	})(eui.Skin);

	function GerendaojujiemianSkin() {
		_super.call(this);
		this.skinParts = ["jiemianzhezao","dajiemianbeijing","biaotiwenzixianshi","daojubeijingkuang","daojuicon","shuliangdiban","shuliangxianshi","daojuzu","daojubeijingkuang0","daojuicon0","shuliangdiban0","shuliangxianshi0","daojuzu0","daojubeijingkuang1","daojuicon1","shuliangdiban1","shuliangxianshi1","daojuzu1","daojubeijingkuang2","daojuicon2","shuliangdiban2","shuliangxianshi2","daojuzu2","daojubeijingkuang3","daojuicon3","shuliangdiban3","shuliangxianshi3","daojuzu3","daojubeijingkuang4","daojuicon4","shuliangdiban4","shuliangxianshi4","daojuzu4","daojubeijingkuang5","daojuicon5","shuliangdiban5","shuliangxianshi5","daojuzu5","daojubeijingkuang6","daojuicon6","shuliangdiban6","shuliangxianshi6","daojuzu6","daojubeijingkuang7","daojuicon7","shuliangdiban7","shuliangxianshi7","daojuzu7","daojubeijingkuang8","daojuicon8","shuliangdiban8","shuliangxianshi8","daojuzu8","daojubeijingkuang9","daojuicon9","shuliangdiban9","shuliangxianshi9","daojuzu9","daojubeijingkuang10","daojuicon10","shuliangdiban10","shuliangxianshi10","daojuzu10","guanbianniu","gerendaojuzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gerendaojuzu_i()];
	}
	var _proto = GerendaojujiemianSkin.prototype;

	_proto.gerendaojuzu_i = function () {
		var t = new eui.Group();
		this.gerendaojuzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.jiemianzhezao_i(),this.dajiemianbeijing_i(),this.biaotiwenzixianshi_i(),this.daojuzu_i(),this.daojuzu0_i(),this.daojuzu1_i(),this.daojuzu2_i(),this.daojuzu3_i(),this.daojuzu4_i(),this.daojuzu5_i(),this.daojuzu6_i(),this.daojuzu7_i(),this.daojuzu8_i(),this.daojuzu9_i(),this.daojuzu10_i(),this.guanbianniu_i()];
		return t;
	};
	_proto.jiemianzhezao_i = function () {
		var t = new eui.Image();
		this.jiemianzhezao = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.dajiemianbeijing_i = function () {
		var t = new eui.Image();
		this.dajiemianbeijing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 761;
		t.source = "img_tongyongpinghejiemianpng_png";
		t.width = 556;
		t.x = 97;
		t.y = 219;
		return t;
	};
	_proto.biaotiwenzixianshi_i = function () {
		var t = new eui.Label();
		this.biaotiwenzixianshi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "个人精修";
		t.textAlign = "center";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 210;
		t.x = 270;
		t.y = 241;
		return t;
	};
	_proto.daojuzu_i = function () {
		var t = new eui.Group();
		this.daojuzu = t;
		t.x = 154;
		t.y = 333;
		t.elementsContent = [this.daojubeijingkuang_i(),this.daojuicon_i(),this.shuliangdiban_i(),this.shuliangxianshi_i()];
		return t;
	};
	_proto.daojubeijingkuang_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon_i = function () {
		var t = new eui.Image();
		this.daojuicon = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban_i = function () {
		var t = new eui.Image();
		this.shuliangdiban = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xf7710c;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu0_i = function () {
		var t = new eui.Group();
		this.daojuzu0 = t;
		t.x = 310;
		t.y = 335.5;
		t.elementsContent = [this.daojubeijingkuang0_i(),this.daojuicon0_i(),this.shuliangdiban0_i(),this.shuliangxianshi0_i()];
		return t;
	};
	_proto.daojubeijingkuang0_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang0 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon0_i = function () {
		var t = new eui.Image();
		this.daojuicon0 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban0_i = function () {
		var t = new eui.Image();
		this.shuliangdiban0 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi0_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi0 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu1_i = function () {
		var t = new eui.Group();
		this.daojuzu1 = t;
		t.x = 460;
		t.y = 335.5;
		t.elementsContent = [this.daojubeijingkuang1_i(),this.daojuicon1_i(),this.shuliangdiban1_i(),this.shuliangxianshi1_i()];
		return t;
	};
	_proto.daojubeijingkuang1_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang1 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon1_i = function () {
		var t = new eui.Image();
		this.daojuicon1 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban1_i = function () {
		var t = new eui.Image();
		this.shuliangdiban1 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi1_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi1 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu2_i = function () {
		var t = new eui.Group();
		this.daojuzu2 = t;
		t.x = 154;
		t.y = 480;
		t.elementsContent = [this.daojubeijingkuang2_i(),this.daojuicon2_i(),this.shuliangdiban2_i(),this.shuliangxianshi2_i()];
		return t;
	};
	_proto.daojubeijingkuang2_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang2 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon2_i = function () {
		var t = new eui.Image();
		this.daojuicon2 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban2_i = function () {
		var t = new eui.Image();
		this.shuliangdiban2 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi2_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi2 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu3_i = function () {
		var t = new eui.Group();
		this.daojuzu3 = t;
		t.x = 310;
		t.y = 482.5;
		t.elementsContent = [this.daojubeijingkuang3_i(),this.daojuicon3_i(),this.shuliangdiban3_i(),this.shuliangxianshi3_i()];
		return t;
	};
	_proto.daojubeijingkuang3_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang3 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon3_i = function () {
		var t = new eui.Image();
		this.daojuicon3 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban3_i = function () {
		var t = new eui.Image();
		this.shuliangdiban3 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi3_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi3 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu4_i = function () {
		var t = new eui.Group();
		this.daojuzu4 = t;
		t.x = 460;
		t.y = 482.5;
		t.elementsContent = [this.daojubeijingkuang4_i(),this.daojuicon4_i(),this.shuliangdiban4_i(),this.shuliangxianshi4_i()];
		return t;
	};
	_proto.daojubeijingkuang4_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang4 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon4_i = function () {
		var t = new eui.Image();
		this.daojuicon4 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban4_i = function () {
		var t = new eui.Image();
		this.shuliangdiban4 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi4_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi4 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu5_i = function () {
		var t = new eui.Group();
		this.daojuzu5 = t;
		t.x = 154;
		t.y = 620;
		t.elementsContent = [this.daojubeijingkuang5_i(),this.daojuicon5_i(),this.shuliangdiban5_i(),this.shuliangxianshi5_i()];
		return t;
	};
	_proto.daojubeijingkuang5_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang5 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon5_i = function () {
		var t = new eui.Image();
		this.daojuicon5 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban5_i = function () {
		var t = new eui.Image();
		this.shuliangdiban5 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi5_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi5 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu6_i = function () {
		var t = new eui.Group();
		this.daojuzu6 = t;
		t.x = 310;
		t.y = 622.5;
		t.elementsContent = [this.daojubeijingkuang6_i(),this.daojuicon6_i(),this.shuliangdiban6_i(),this.shuliangxianshi6_i()];
		return t;
	};
	_proto.daojubeijingkuang6_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang6 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon6_i = function () {
		var t = new eui.Image();
		this.daojuicon6 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban6_i = function () {
		var t = new eui.Image();
		this.shuliangdiban6 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi6_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi6 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu7_i = function () {
		var t = new eui.Group();
		this.daojuzu7 = t;
		t.x = 460;
		t.y = 622.5;
		t.elementsContent = [this.daojubeijingkuang7_i(),this.daojuicon7_i(),this.shuliangdiban7_i(),this.shuliangxianshi7_i()];
		return t;
	};
	_proto.daojubeijingkuang7_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang7 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon7_i = function () {
		var t = new eui.Image();
		this.daojuicon7 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban7_i = function () {
		var t = new eui.Image();
		this.shuliangdiban7 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi7_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi7 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu8_i = function () {
		var t = new eui.Group();
		this.daojuzu8 = t;
		t.x = 154;
		t.y = 762;
		t.elementsContent = [this.daojubeijingkuang8_i(),this.daojuicon8_i(),this.shuliangdiban8_i(),this.shuliangxianshi8_i()];
		return t;
	};
	_proto.daojubeijingkuang8_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang8 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon8_i = function () {
		var t = new eui.Image();
		this.daojuicon8 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban8_i = function () {
		var t = new eui.Image();
		this.shuliangdiban8 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi8_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi8 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu9_i = function () {
		var t = new eui.Group();
		this.daojuzu9 = t;
		t.x = 310;
		t.y = 764.5;
		t.elementsContent = [this.daojubeijingkuang9_i(),this.daojuicon9_i(),this.shuliangdiban9_i(),this.shuliangxianshi9_i()];
		return t;
	};
	_proto.daojubeijingkuang9_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang9 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon9_i = function () {
		var t = new eui.Image();
		this.daojuicon9 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban9_i = function () {
		var t = new eui.Image();
		this.shuliangdiban9 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi9_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi9 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.daojuzu10_i = function () {
		var t = new eui.Group();
		this.daojuzu10 = t;
		t.x = 460;
		t.y = 764.5;
		t.elementsContent = [this.daojubeijingkuang10_i(),this.daojuicon10_i(),this.shuliangdiban10_i(),this.shuliangxianshi10_i()];
		return t;
	};
	_proto.daojubeijingkuang10_i = function () {
		var t = new eui.Image();
		this.daojubeijingkuang10 = t;
		t.height = 120;
		t.source = "img_jiaohuanniudibu_png";
		t.width = 120;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojuicon10_i = function () {
		var t = new eui.Image();
		this.daojuicon10 = t;
		t.height = 100;
		t.source = "img_chuancaimidiandaoju_png";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto.shuliangdiban10_i = function () {
		var t = new eui.Image();
		this.shuliangdiban10 = t;
		t.height = 34;
		t.source = "img_shuliangtubiao_png";
		t.width = 34;
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.shuliangxianshi10_i = function () {
		var t = new eui.Label();
		this.shuliangxianshi10 = t;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 22;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xF7710C;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 98;
		t.y = 5;
		return t;
	};
	_proto.guanbianniu_i = function () {
		var t = new eui.Button();
		this.guanbianniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 558;
		t.y = 219;
		t.skinName = GerendaojujiemianSkin$Skin105;
		return t;
	};
	return GerendaojujiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Gerenshuxingjiemian.exml'] = window.GerenshuxingjiemianSkin = (function (_super) {
	__extends(GerenshuxingjiemianSkin, _super);
	var GerenshuxingjiemianSkin$Skin106 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin106, _super);
		function GerenshuxingjiemianSkin$Skin106() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_xuanxiang2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_xuanxiang2_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_xuanxiang1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin106;
	})(eui.Skin);

	var GerenshuxingjiemianSkin$Skin107 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin107, _super);
		function GerenshuxingjiemianSkin$Skin107() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin107;
	})(eui.Skin);

	var GerenshuxingjiemianSkin$Skin108 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin108, _super);
		function GerenshuxingjiemianSkin$Skin108() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin108;
	})(eui.Skin);

	var GerenshuxingjiemianSkin$Skin109 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin109, _super);
		function GerenshuxingjiemianSkin$Skin109() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin109;
	})(eui.Skin);

	var GerenshuxingjiemianSkin$Skin110 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin110, _super);
		function GerenshuxingjiemianSkin$Skin110() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin110;
	})(eui.Skin);

	var GerenshuxingjiemianSkin$Skin111 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin111, _super);
		function GerenshuxingjiemianSkin$Skin111() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin111;
	})(eui.Skin);

	var GerenshuxingjiemianSkin$Skin112 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin112, _super);
		function GerenshuxingjiemianSkin$Skin112() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin112;
	})(eui.Skin);

	var GerenshuxingjiemianSkin$Skin113 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin113, _super);
		function GerenshuxingjiemianSkin$Skin113() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin113;
	})(eui.Skin);

	var GerenshuxingjiemianSkin$Skin114 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin114, _super);
		function GerenshuxingjiemianSkin$Skin114() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin114;
	})(eui.Skin);

	var GerenshuxingjiemianSkin$Skin115 = 	(function (_super) {
		__extends(GerenshuxingjiemianSkin$Skin115, _super);
		function GerenshuxingjiemianSkin$Skin115() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = GerenshuxingjiemianSkin$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GerenshuxingjiemianSkin$Skin115;
	})(eui.Skin);

	function GerenshuxingjiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao","img_tongyongpinghejiemianpng","wanjiatouxiang","img_shangxiangkuang","biaotiwenzi","nicheng","nichengwenzi","cunhuo","cunhuoshijian","xingfudengji","dengjineirong","xingfuzhi","shuxingzhi","xingfuzhishu","naixin","naixinzhi","yizhi","yizhizhi","xingzhi","xingzhizhi","jindubaifenbi","img_jindutiaobeijing","jindutiao","jingyanjinduzu","laxijingtong","laxizhi","maxijingtong","maxizhi","suanxijingtong","suanxizhi","tianxijingtong","tianxizhi","jinxinganniu","jinxiuanniuwenzi","jinxiuanniuzu","guanbianniu","shuominganniu","shuominganniu0","shuominganniu1","shuominganniu2","shuominganniu3","shuominganniu4","shuominganniu5","shuominganniu6","gerenshuxingjieshaozu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gerenshuxingjieshaozu_i()];
	}
	var _proto = GerenshuxingjiemianSkin.prototype;

	_proto.gerenshuxingjieshaozu_i = function () {
		var t = new eui.Group();
		this.gerenshuxingjieshaozu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao_i(),this.img_tongyongpinghejiemianpng_i(),this.wanjiatouxiang_i(),this.img_shangxiangkuang_i(),this.biaotiwenzi_i(),this.nicheng_i(),this.nichengwenzi_i(),this.cunhuo_i(),this.cunhuoshijian_i(),this.xingfudengji_i(),this.dengjineirong_i(),this.xingfuzhi_i(),this.shuxingzhi_i(),this.xingfuzhishu_i(),this.naixin_i(),this.naixinzhi_i(),this.yizhi_i(),this.yizhizhi_i(),this.xingzhi_i(),this.xingzhizhi_i(),this.jingyanjinduzu_i(),this.laxijingtong_i(),this.laxizhi_i(),this.maxijingtong_i(),this.maxizhi_i(),this.suanxijingtong_i(),this.suanxizhi_i(),this.tianxijingtong_i(),this.tianxizhi_i(),this.jinxiuanniuzu_i(),this.guanbianniu_i(),this.shuominganniu_i(),this.shuominganniu0_i(),this.shuominganniu1_i(),this.shuominganniu2_i(),this.shuominganniu3_i(),this.shuominganniu4_i(),this.shuominganniu5_i(),this.shuominganniu6_i()];
		return t;
	};
	_proto.img_heisezhezao_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.img_tongyongpinghejiemianpng_i = function () {
		var t = new eui.Image();
		this.img_tongyongpinghejiemianpng = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 761;
		t.source = "img_tanchubeijing_png";
		t.width = 556;
		t.x = 97;
		t.y = 219;
		return t;
	};
	_proto.wanjiatouxiang_i = function () {
		var t = new eui.Group();
		this.wanjiatouxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99;
		t.width = 108;
		t.x = 198;
		t.y = 367;
		return t;
	};
	_proto.img_shangxiangkuang_i = function () {
		var t = new eui.Image();
		this.img_shangxiangkuang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.source = "img_shangxiangkuang_png";
		t.width = 160;
		t.x = 170;
		t.y = 341.33;
		return t;
	};
	_proto.biaotiwenzi_i = function () {
		var t = new eui.Label();
		this.biaotiwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.stroke = 2;
		t.strokeColor = 0xf4eded;
		t.text = "个人信息";
		t.textAlign = "center";
		t.textColor = 0xf2780c;
		t.verticalAlign = "middle";
		t.width = 210;
		t.x = 270;
		t.y = 241;
		return t;
	};
	_proto.nicheng_i = function () {
		var t = new eui.Label();
		this.nicheng = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "昵称";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 351;
		t.y = 353;
		return t;
	};
	_proto.nichengwenzi_i = function () {
		var t = new eui.Label();
		this.nichengwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "昵称七八个自吧";
		t.textAlign = "left";
		t.textColor = 0x0ba1ef;
		t.verticalAlign = "middle";
		t.width = 184;
		t.x = 421;
		t.y = 353;
		return t;
	};
	_proto.cunhuo_i = function () {
		var t = new eui.Label();
		this.cunhuo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "存活";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 351;
		t.y = 399;
		return t;
	};
	_proto.cunhuoshijian_i = function () {
		var t = new eui.Label();
		this.cunhuoshijian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "99年89月20天";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 184;
		t.x = 421;
		t.y = 399;
		return t;
	};
	_proto.xingfudengji_i = function () {
		var t = new eui.Label();
		this.xingfudengji = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "等级";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 351;
		t.y = 449;
		return t;
	};
	_proto.dengjineirong_i = function () {
		var t = new eui.Label();
		this.dengjineirong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "20级";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 184;
		t.x = 421;
		t.y = 449;
		return t;
	};
	_proto.xingfuzhi_i = function () {
		var t = new eui.Label();
		this.xingfuzhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "名望值";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 144.5;
		t.y = 517;
		return t;
	};
	_proto.shuxingzhi_i = function () {
		var t = new eui.Label();
		this.shuxingzhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "厨艺属性";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 113;
		t.x = 144.5;
		t.y = 633;
		return t;
	};
	_proto.xingfuzhishu_i = function () {
		var t = new eui.Label();
		this.xingfuzhishu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "188888888/888888888";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 209;
		t.x = 233.5;
		t.y = 517;
		return t;
	};
	_proto.naixin_i = function () {
		var t = new eui.Label();
		this.naixin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "耐心";
		t.textAlign = "left";
		t.textColor = 0xed2d0b;
		t.verticalAlign = "middle";
		t.width = 52;
		t.x = 189;
		t.y = 675;
		return t;
	};
	_proto.naixinzhi_i = function () {
		var t = new eui.Label();
		this.naixinzhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 123;
		t.x = 252;
		t.y = 675;
		return t;
	};
	_proto.yizhi_i = function () {
		var t = new eui.Label();
		this.yizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "意志";
		t.textAlign = "left";
		t.textColor = 0xED2D0B;
		t.verticalAlign = "middle";
		t.width = 52;
		t.x = 400;
		t.y = 675;
		return t;
	};
	_proto.yizhizhi_i = function () {
		var t = new eui.Label();
		this.yizhizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 463;
		t.y = 675;
		return t;
	};
	_proto.xingzhi_i = function () {
		var t = new eui.Label();
		this.xingzhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "兴致";
		t.textAlign = "left";
		t.textColor = 0xED2D0B;
		t.verticalAlign = "middle";
		t.width = 52;
		t.x = 189;
		t.y = 725;
		return t;
	};
	_proto.xingzhizhi_i = function () {
		var t = new eui.Label();
		this.xingzhizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 121;
		t.x = 252;
		t.y = 725;
		return t;
	};
	_proto.jingyanjinduzu_i = function () {
		var t = new eui.Group();
		this.jingyanjinduzu = t;
		t.x = 189;
		t.y = 568;
		t.elementsContent = [this.jindubaifenbi_i(),this.img_jindutiaobeijing_i(),this.jindutiao_i()];
		return t;
	};
	_proto.jindubaifenbi_i = function () {
		var t = new eui.Label();
		this.jindubaifenbi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "30%";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 142;
		t.x = 269.5;
		t.y = 7;
		return t;
	};
	_proto.img_jindutiaobeijing_i = function () {
		var t = new eui.Image();
		this.img_jindutiaobeijing = t;
		t.source = "img_jindutiaobeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jindutiao_i = function () {
		var t = new eui.Image();
		this.jindutiao = t;
		t.anchorOffsetX = 0;
		t.source = "img_jindutiaogundong_png";
		t.width = 177;
		t.x = 73;
		t.y = 16;
		return t;
	};
	_proto.laxijingtong_i = function () {
		var t = new eui.Image();
		this.laxijingtong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "img_laicon_png";
		t.width = 40;
		t.x = 189;
		t.y = 770;
		return t;
	};
	_proto.laxizhi_i = function () {
		var t = new eui.Label();
		this.laxizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 251;
		t.y = 767;
		return t;
	};
	_proto.maxijingtong_i = function () {
		var t = new eui.Image();
		this.maxijingtong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "img_maicon_png";
		t.width = 40;
		t.x = 400;
		t.y = 770;
		return t;
	};
	_proto.maxizhi_i = function () {
		var t = new eui.Label();
		this.maxizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 121;
		t.x = 463;
		t.y = 767;
		return t;
	};
	_proto.suanxijingtong_i = function () {
		var t = new eui.Image();
		this.suanxijingtong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "img_suanicon_png";
		t.width = 40;
		t.x = 189;
		t.y = 820;
		return t;
	};
	_proto.suanxizhi_i = function () {
		var t = new eui.Label();
		this.suanxizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 119;
		t.x = 250;
		t.y = 820;
		return t;
	};
	_proto.tianxijingtong_i = function () {
		var t = new eui.Image();
		this.tianxijingtong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "img_tianicon_png";
		t.width = 40;
		t.x = 400;
		t.y = 820;
		return t;
	};
	_proto.tianxizhi_i = function () {
		var t = new eui.Label();
		this.tianxizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 123;
		t.x = 463;
		t.y = 820;
		return t;
	};
	_proto.jinxiuanniuzu_i = function () {
		var t = new eui.Group();
		this.jinxiuanniuzu = t;
		t.x = 275;
		t.y = 873;
		t.elementsContent = [this.jinxinganniu_i(),this.jinxiuanniuwenzi_i()];
		return t;
	};
	_proto.jinxinganniu_i = function () {
		var t = new eui.Button();
		this.jinxinganniu = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.height = 60;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.skinName = GerenshuxingjiemianSkin$Skin106;
		return t;
	};
	_proto.jinxiuanniuwenzi_i = function () {
		var t = new eui.Label();
		this.jinxiuanniuwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 60;
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x7a7474;
		t.text = "进  修";
		t.textAlign = "center";
		t.textColor = 0xeff4f7;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.guanbianniu_i = function () {
		var t = new eui.Button();
		this.guanbianniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 558.5;
		t.y = 219;
		t.skinName = GerenshuxingjiemianSkin$Skin107;
		return t;
	};
	_proto.shuominganniu_i = function () {
		var t = new eui.Button();
		this.shuominganniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 421;
		t.y = 527.5;
		t.skinName = GerenshuxingjiemianSkin$Skin108;
		return t;
	};
	_proto.shuominganniu0_i = function () {
		var t = new eui.Button();
		this.shuominganniu0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 370;
		t.y = 685.5;
		t.skinName = GerenshuxingjiemianSkin$Skin109;
		return t;
	};
	_proto.shuominganniu1_i = function () {
		var t = new eui.Button();
		this.shuominganniu1 = t;
		t.enabled = true;
		t.label = "";
		t.x = 584;
		t.y = 685.5;
		t.skinName = GerenshuxingjiemianSkin$Skin110;
		return t;
	};
	_proto.shuominganniu2_i = function () {
		var t = new eui.Button();
		this.shuominganniu2 = t;
		t.enabled = true;
		t.label = "";
		t.x = 369;
		t.y = 735.5;
		t.skinName = GerenshuxingjiemianSkin$Skin111;
		return t;
	};
	_proto.shuominganniu3_i = function () {
		var t = new eui.Button();
		this.shuominganniu3 = t;
		t.enabled = true;
		t.label = "";
		t.x = 371;
		t.y = 777.5;
		t.skinName = GerenshuxingjiemianSkin$Skin112;
		return t;
	};
	_proto.shuominganniu4_i = function () {
		var t = new eui.Button();
		this.shuominganniu4 = t;
		t.enabled = true;
		t.label = "";
		t.x = 584;
		t.y = 777.5;
		t.skinName = GerenshuxingjiemianSkin$Skin113;
		return t;
	};
	_proto.shuominganniu5_i = function () {
		var t = new eui.Button();
		this.shuominganniu5 = t;
		t.enabled = true;
		t.label = "";
		t.x = 369;
		t.y = 829.5;
		t.skinName = GerenshuxingjiemianSkin$Skin114;
		return t;
	};
	_proto.shuominganniu6_i = function () {
		var t = new eui.Button();
		this.shuominganniu6 = t;
		t.enabled = true;
		t.label = "";
		t.x = 584;
		t.y = 830.5;
		t.skinName = GerenshuxingjiemianSkin$Skin115;
		return t;
	};
	return GerenshuxingjiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Jianglijiesuanui.exml'] = window.JianglijiesuanuiSkin = (function (_super) {
	__extends(JianglijiesuanuiSkin, _super);
	var JianglijiesuanuiSkin$Skin116 = 	(function (_super) {
		__extends(JianglijiesuanuiSkin$Skin116, _super);
		function JianglijiesuanuiSkin$Skin116() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_caipuqueding2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_caipuqueding2_png")
					])
			];
		}
		var _proto = JianglijiesuanuiSkin$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_caipuqueding1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JianglijiesuanuiSkin$Skin116;
	})(eui.Skin);

	function JianglijiesuanuiSkin() {
		_super.call(this);
		this.skinParts = ["img_huodebeijing","jiangliicon","jianglishuliang","qudinganniu","img_jianglibiaoti","jianglizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.jianglizu_i()];
	}
	var _proto = JianglijiesuanuiSkin.prototype;

	_proto.jianglizu_i = function () {
		var t = new eui.Group();
		this.jianglizu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_huodebeijing_i(),this.jiangliicon_i(),this.jianglishuliang_i(),this.qudinganniu_i(),this.img_jianglibiaoti_i()];
		return t;
	};
	_proto.img_huodebeijing_i = function () {
		var t = new eui.Image();
		this.img_huodebeijing = t;
		t.source = "img_huodebeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jiangliicon_i = function () {
		var t = new eui.Image();
		this.jiangliicon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.source = "1001_png";
		t.width = 140;
		t.x = 306;
		t.y = 482.5;
		return t;
	};
	_proto.jianglishuliang_i = function () {
		var t = new eui.Label();
		this.jianglishuliang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 78;
		t.size = 24;
		t.stroke = 2;
		t.text = "X1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 576;
		t.x = 89;
		t.y = 707;
		return t;
	};
	_proto.qudinganniu_i = function () {
		var t = new eui.Button();
		this.qudinganniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 246.5;
		t.y = 903;
		t.skinName = JianglijiesuanuiSkin$Skin116;
		return t;
	};
	_proto.img_jianglibiaoti_i = function () {
		var t = new eui.Image();
		this.img_jianglibiaoti = t;
		t.source = "img_jianglibiaoti_png";
		t.x = 225.5;
		t.y = 212;
		return t;
	};
	return JianglijiesuanuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Jiatingchengyuandaojuui.exml'] = window.JiatingchengyuandaojuuiSkin = (function (_super) {
	__extends(JiatingchengyuandaojuuiSkin, _super);
	var JiatingchengyuandaojuuiSkin$Skin117 = 	(function (_super) {
		__extends(JiatingchengyuandaojuuiSkin$Skin117, _super);
		function JiatingchengyuandaojuuiSkin$Skin117() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = JiatingchengyuandaojuuiSkin$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiatingchengyuandaojuuiSkin$Skin117;
	})(eui.Skin);

	function JiatingchengyuandaojuuiSkin() {
		_super.call(this);
		this.skinParts = ["img_daojubeijing","daojubiaoti","zsanniudb1","zengsongtupian1","zswzk1","wznr1","geshudikuang1","geshuwenzi1","zengsong1","zsanniudb2","zengsongtupian2","zswzk2","wznr2","geshudikuang2","geshuwenzi2","zengsong2","zsanniudb3","zengsongtupian3","zswzk3","wznr3","geshudikuang3","geshuwenzi3","zengsong3","zsanniudb4","zengsongtupian4","zswzk4","wznr4","geshudikuang4","geshuwenzi4","zengsong4","zsanniudb5","zengsongtupian5","zswzk5","wznr5","geshudikuang5","geshuwenzi5","zengsong5","jiatingdaojuzu","guanbianniu","daojujiemian"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.daojujiemian_i()];
	}
	var _proto = JiatingchengyuandaojuuiSkin.prototype;

	_proto.daojujiemian_i = function () {
		var t = new eui.Group();
		this.daojujiemian = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 563;
		t.elementsContent = [this.img_daojubeijing_i(),this.daojubiaoti_i(),this.jiatingdaojuzu_i(),this.guanbianniu_i()];
		return t;
	};
	_proto.img_daojubeijing_i = function () {
		var t = new eui.Image();
		this.img_daojubeijing = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_tanchubeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojubiaoti_i = function () {
		var t = new eui.Label();
		this.daojubiaoti = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 53.33;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "信息";
		t.textAlign = "center";
		t.textColor = 0xFFA005;
		t.verticalAlign = "middle";
		t.width = 517;
		t.x = 21.5;
		t.y = 12.02;
		return t;
	};
	_proto.jiatingdaojuzu_i = function () {
		var t = new eui.Group();
		this.jiatingdaojuzu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.zengsong1_i(),this.zengsong2_i(),this.zengsong3_i(),this.zengsong4_i(),this.zengsong5_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 58;
		t.verticalGap = 33;
		return t;
	};
	_proto.zengsong1_i = function () {
		var t = new eui.Group();
		this.zengsong1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.zsanniudb1_i(),this.zengsongtupian1_i(),this.zswzk1_i(),this.wznr1_i(),this.geshudikuang1_i(),this.geshuwenzi1_i()];
		return t;
	};
	_proto.zsanniudb1_i = function () {
		var t = new eui.Image();
		this.zsanniudb1 = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zengsongtupian1_i = function () {
		var t = new eui.Image();
		this.zengsongtupian1 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 24.5;
		t.y = 19.67;
		return t;
	};
	_proto.zswzk1_i = function () {
		var t = new eui.Image();
		this.zswzk1 = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 116;
		return t;
	};
	_proto.wznr1_i = function () {
		var t = new eui.Label();
		this.wznr1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 31.33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xF78409;
		t.verticalAlign = "middle";
		t.width = 154.33;
		t.x = 5;
		t.y = 123.5;
		return t;
	};
	_proto.geshudikuang1_i = function () {
		var t = new eui.Image();
		this.geshudikuang1 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "img_shuliangtubiao_png";
		t.x = 110.01;
		t.y = 2.67;
		return t;
	};
	_proto.geshuwenzi1_i = function () {
		var t = new eui.Label();
		this.geshuwenzi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30.33;
		t.size = 24;
		t.stroke = 2;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0xf79647;
		t.verticalAlign = "middle";
		t.width = 34.67;
		t.x = 121;
		t.y = 12.51;
		return t;
	};
	_proto.zengsong2_i = function () {
		var t = new eui.Group();
		this.zengsong2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 11;
		t.y = 11;
		t.elementsContent = [this.zsanniudb2_i(),this.zengsongtupian2_i(),this.zswzk2_i(),this.wznr2_i(),this.geshudikuang2_i(),this.geshuwenzi2_i()];
		return t;
	};
	_proto.zsanniudb2_i = function () {
		var t = new eui.Image();
		this.zsanniudb2 = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zengsongtupian2_i = function () {
		var t = new eui.Image();
		this.zengsongtupian2 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 24.5;
		t.y = 19.67;
		return t;
	};
	_proto.zswzk2_i = function () {
		var t = new eui.Image();
		this.zswzk2 = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 116;
		return t;
	};
	_proto.wznr2_i = function () {
		var t = new eui.Label();
		this.wznr2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 31.33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xF78409;
		t.verticalAlign = "middle";
		t.width = 154.33;
		t.x = 5;
		t.y = 123.5;
		return t;
	};
	_proto.geshudikuang2_i = function () {
		var t = new eui.Image();
		this.geshudikuang2 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "img_shuliangtubiao_png";
		t.x = 110.01;
		t.y = 2.67;
		return t;
	};
	_proto.geshuwenzi2_i = function () {
		var t = new eui.Label();
		this.geshuwenzi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30.33;
		t.size = 24;
		t.stroke = 2;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0xF79647;
		t.verticalAlign = "middle";
		t.width = 34.67;
		t.x = 121;
		t.y = 12.51;
		return t;
	};
	_proto.zengsong3_i = function () {
		var t = new eui.Group();
		this.zengsong3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 21;
		t.y = 21;
		t.elementsContent = [this.zsanniudb3_i(),this.zengsongtupian3_i(),this.zswzk3_i(),this.wznr3_i(),this.geshudikuang3_i(),this.geshuwenzi3_i()];
		return t;
	};
	_proto.zsanniudb3_i = function () {
		var t = new eui.Image();
		this.zsanniudb3 = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zengsongtupian3_i = function () {
		var t = new eui.Image();
		this.zengsongtupian3 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 24.5;
		t.y = 19.67;
		return t;
	};
	_proto.zswzk3_i = function () {
		var t = new eui.Image();
		this.zswzk3 = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 116;
		return t;
	};
	_proto.wznr3_i = function () {
		var t = new eui.Label();
		this.wznr3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 31.33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xF78409;
		t.verticalAlign = "middle";
		t.width = 154.33;
		t.x = 5;
		t.y = 123.5;
		return t;
	};
	_proto.geshudikuang3_i = function () {
		var t = new eui.Image();
		this.geshudikuang3 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "img_shuliangtubiao_png";
		t.x = 110.01;
		t.y = 2.67;
		return t;
	};
	_proto.geshuwenzi3_i = function () {
		var t = new eui.Label();
		this.geshuwenzi3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30.33;
		t.size = 24;
		t.stroke = 2;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0xF79647;
		t.verticalAlign = "middle";
		t.width = 34.67;
		t.x = 121;
		t.y = 12.51;
		return t;
	};
	_proto.zengsong4_i = function () {
		var t = new eui.Group();
		this.zengsong4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 31;
		t.y = 31;
		t.elementsContent = [this.zsanniudb4_i(),this.zengsongtupian4_i(),this.zswzk4_i(),this.wznr4_i(),this.geshudikuang4_i(),this.geshuwenzi4_i()];
		return t;
	};
	_proto.zsanniudb4_i = function () {
		var t = new eui.Image();
		this.zsanniudb4 = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zengsongtupian4_i = function () {
		var t = new eui.Image();
		this.zengsongtupian4 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 24.5;
		t.y = 19.67;
		return t;
	};
	_proto.zswzk4_i = function () {
		var t = new eui.Image();
		this.zswzk4 = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 116;
		return t;
	};
	_proto.wznr4_i = function () {
		var t = new eui.Label();
		this.wznr4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 31.33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xF78409;
		t.verticalAlign = "middle";
		t.width = 154.33;
		t.x = 5;
		t.y = 123.5;
		return t;
	};
	_proto.geshudikuang4_i = function () {
		var t = new eui.Image();
		this.geshudikuang4 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "img_shuliangtubiao_png";
		t.x = 110.01;
		t.y = 2.67;
		return t;
	};
	_proto.geshuwenzi4_i = function () {
		var t = new eui.Label();
		this.geshuwenzi4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30.33;
		t.size = 24;
		t.stroke = 2;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0xF79647;
		t.verticalAlign = "middle";
		t.width = 34.67;
		t.x = 121;
		t.y = 12.51;
		return t;
	};
	_proto.zengsong5_i = function () {
		var t = new eui.Group();
		this.zengsong5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 41;
		t.y = 41;
		t.elementsContent = [this.zsanniudb5_i(),this.zengsongtupian5_i(),this.zswzk5_i(),this.wznr5_i(),this.geshudikuang5_i(),this.geshuwenzi5_i()];
		return t;
	};
	_proto.zsanniudb5_i = function () {
		var t = new eui.Image();
		this.zsanniudb5 = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zengsongtupian5_i = function () {
		var t = new eui.Image();
		this.zengsongtupian5 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 24.5;
		t.y = 19.67;
		return t;
	};
	_proto.zswzk5_i = function () {
		var t = new eui.Image();
		this.zswzk5 = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 116;
		return t;
	};
	_proto.wznr5_i = function () {
		var t = new eui.Label();
		this.wznr5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 31.33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xF78409;
		t.verticalAlign = "middle";
		t.width = 154.33;
		t.x = 5;
		t.y = 123.5;
		return t;
	};
	_proto.geshudikuang5_i = function () {
		var t = new eui.Image();
		this.geshudikuang5 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "img_shuliangtubiao_png";
		t.x = 110.01;
		t.y = 2.67;
		return t;
	};
	_proto.geshuwenzi5_i = function () {
		var t = new eui.Label();
		this.geshuwenzi5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30.33;
		t.size = 24;
		t.stroke = 2;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0xF79647;
		t.verticalAlign = "middle";
		t.width = 34.67;
		t.x = 121;
		t.y = 12.51;
		return t;
	};
	_proto.guanbianniu_i = function () {
		var t = new eui.Button();
		this.guanbianniu = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 469;
		t.y = 3.34;
		t.skinName = JiatingchengyuandaojuuiSkin$Skin117;
		return t;
	};
	return JiatingchengyuandaojuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Jiatingchengyuanjieshaoui.exml'] = window.JiatingchengyuanjieshaouiSkin = (function (_super) {
	__extends(JiatingchengyuanjieshaouiSkin, _super);
	var JiatingchengyuanjieshaouiSkin$Skin118 = 	(function (_super) {
		__extends(JiatingchengyuanjieshaouiSkin$Skin118, _super);
		function JiatingchengyuanjieshaouiSkin$Skin118() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = JiatingchengyuanjieshaouiSkin$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiatingchengyuanjieshaouiSkin$Skin118;
	})(eui.Skin);

	function JiatingchengyuanjieshaouiSkin() {
		_super.call(this);
		this.skinParts = ["img_tanchubeijing","biaotiwenzi","guanxibiaoqian","guanxineirong","qinhelibiaoqian","qinghelizhi","gongzuobiaoqian","gongzuozhi","jiesaobiaoqian","jiesaoneirong","guanbiananniu","xinxijiemianzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.xinxijiemianzu_i()];
	}
	var _proto = JiatingchengyuanjieshaouiSkin.prototype;

	_proto.xinxijiemianzu_i = function () {
		var t = new eui.Group();
		this.xinxijiemianzu = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.img_tanchubeijing_i(),this.biaotiwenzi_i(),this.guanxibiaoqian_i(),this.guanxineirong_i(),this.qinhelibiaoqian_i(),this.qinghelizhi_i(),this.gongzuobiaoqian_i(),this.gongzuozhi_i(),this.jiesaobiaoqian_i(),this.jiesaoneirong_i(),this.guanbiananniu_i()];
		return t;
	};
	_proto.img_tanchubeijing_i = function () {
		var t = new eui.Image();
		this.img_tanchubeijing = t;
		t.source = "img_tanchubeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.biaotiwenzi_i = function () {
		var t = new eui.Label();
		this.biaotiwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 56;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "信息";
		t.textAlign = "center";
		t.textColor = 0xffa005;
		t.verticalAlign = "middle";
		t.width = 517;
		t.x = 23.5;
		t.y = 12;
		return t;
	};
	_proto.guanxibiaoqian_i = function () {
		var t = new eui.Label();
		this.guanxibiaoqian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xacff05;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 61;
		t.y = 109;
		return t;
	};
	_proto.guanxineirong_i = function () {
		var t = new eui.Label();
		this.guanxineirong = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xf2eee8;
		t.verticalAlign = "middle";
		t.width = 340;
		t.x = 174;
		t.y = 109;
		return t;
	};
	_proto.qinhelibiaoqian_i = function () {
		var t = new eui.Label();
		this.qinhelibiaoqian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xc2ff05;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 61;
		t.y = 158;
		return t;
	};
	_proto.qinghelizhi_i = function () {
		var t = new eui.Label();
		this.qinghelizhi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xede9e3;
		t.verticalAlign = "middle";
		t.width = 340;
		t.x = 174;
		t.y = 158;
		return t;
	};
	_proto.gongzuobiaoqian_i = function () {
		var t = new eui.Label();
		this.gongzuobiaoqian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xb7ff05;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 61;
		t.y = 222;
		return t;
	};
	_proto.gongzuozhi_i = function () {
		var t = new eui.Label();
		this.gongzuozhi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xe8e1d7;
		t.verticalAlign = "middle";
		t.width = 340;
		t.x = 174;
		t.y = 222;
		return t;
	};
	_proto.jiesaobiaoqian_i = function () {
		var t = new eui.Label();
		this.jiesaobiaoqian = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xbcff05;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 61;
		t.y = 279;
		return t;
	};
	_proto.jiesaoneirong_i = function () {
		var t = new eui.Label();
		this.jiesaoneirong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 312;
		t.lineSpacing = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xe0dad0;
		t.verticalAlign = "top";
		t.width = 450;
		t.x = 61;
		t.y = 339;
		return t;
	};
	_proto.guanbiananniu_i = function () {
		var t = new eui.Button();
		this.guanbiananniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 470.5;
		t.y = 4;
		t.skinName = JiatingchengyuanjieshaouiSkin$Skin118;
		return t;
	};
	return JiatingchengyuanjieshaouiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Jiatingchengyuanzengsong.exml'] = window.JiatingchengyuanzengsongSkin = (function (_super) {
	__extends(JiatingchengyuanzengsongSkin, _super);
	var JiatingchengyuanzengsongSkin$Skin119 = 	(function (_super) {
		__extends(JiatingchengyuanzengsongSkin$Skin119, _super);
		function JiatingchengyuanzengsongSkin$Skin119() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = JiatingchengyuanzengsongSkin$Skin119.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiatingchengyuanzengsongSkin$Skin119;
	})(eui.Skin);

	function JiatingchengyuanzengsongSkin() {
		_super.call(this);
		this.skinParts = ["img_tanchubeijing0","wenzibiaoti","anniudibu","daojutubiao","jieshaowenzidikuang","wenzineirong","daojuzu0","anniudibu0","daojutubiao0","jieshaowenzidikuang0","wenzineirong0","daojuzu1","anniudibu1","daojutubiao1","jieshaowenzidikuang1","wenzineirong1","daojuzu2","anniudibu2","daojutubiao2","jieshaowenzidikuang2","wenzineirong2","daojuzu3","anniudibu3","daojutubiao3","jieshaowenzidikuang3","wenzineirong3","daojuzu4","daojuzu","guanbianniu","zengsongjiemian"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zengsongjiemian_i()];
	}
	var _proto = JiatingchengyuanzengsongSkin.prototype;

	_proto.zengsongjiemian_i = function () {
		var t = new eui.Group();
		this.zengsongjiemian = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.img_tanchubeijing0_i(),this.wenzibiaoti_i(),this.daojuzu_i(),this.guanbianniu_i()];
		return t;
	};
	_proto.img_tanchubeijing0_i = function () {
		var t = new eui.Image();
		this.img_tanchubeijing0 = t;
		t.source = "img_tanchubeijing_png";
		return t;
	};
	_proto.wenzibiaoti_i = function () {
		var t = new eui.Label();
		this.wenzibiaoti = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 58;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "信息";
		t.textAlign = "center";
		t.textColor = 0xFFA005;
		t.verticalAlign = "middle";
		t.width = 516;
		t.x = 25;
		t.y = 11;
		return t;
	};
	_proto.daojuzu_i = function () {
		var t = new eui.Group();
		this.daojuzu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.daojuzu0_i(),this.daojuzu1_i(),this.daojuzu2_i(),this.daojuzu3_i(),this.daojuzu4_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 58;
		t.verticalGap = 33;
		return t;
	};
	_proto.daojuzu0_i = function () {
		var t = new eui.Group();
		this.daojuzu0 = t;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.anniudibu_i(),this.daojutubiao_i(),this.jieshaowenzidikuang_i(),this.wenzineirong_i()];
		return t;
	};
	_proto.anniudibu_i = function () {
		var t = new eui.Image();
		this.anniudibu = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 4;
		t.y = 6;
		return t;
	};
	_proto.daojutubiao_i = function () {
		var t = new eui.Image();
		this.daojutubiao = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 28.5;
		t.y = 21;
		return t;
	};
	_proto.jieshaowenzidikuang_i = function () {
		var t = new eui.Image();
		this.jieshaowenzidikuang = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 122;
		return t;
	};
	_proto.wenzineirong_i = function () {
		var t = new eui.Label();
		this.wenzineirong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xf78409;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 10;
		t.y = 128;
		return t;
	};
	_proto.daojuzu1_i = function () {
		var t = new eui.Group();
		this.daojuzu1 = t;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.anniudibu0_i(),this.daojutubiao0_i(),this.jieshaowenzidikuang0_i(),this.wenzineirong0_i()];
		return t;
	};
	_proto.anniudibu0_i = function () {
		var t = new eui.Image();
		this.anniudibu0 = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 4;
		t.y = 6;
		return t;
	};
	_proto.daojutubiao0_i = function () {
		var t = new eui.Image();
		this.daojutubiao0 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 28.5;
		t.y = 21;
		return t;
	};
	_proto.jieshaowenzidikuang0_i = function () {
		var t = new eui.Image();
		this.jieshaowenzidikuang0 = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 122;
		return t;
	};
	_proto.wenzineirong0_i = function () {
		var t = new eui.Label();
		this.wenzineirong0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xF78409;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 10;
		t.y = 128;
		return t;
	};
	_proto.daojuzu2_i = function () {
		var t = new eui.Group();
		this.daojuzu2 = t;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.anniudibu1_i(),this.daojutubiao1_i(),this.jieshaowenzidikuang1_i(),this.wenzineirong1_i()];
		return t;
	};
	_proto.anniudibu1_i = function () {
		var t = new eui.Image();
		this.anniudibu1 = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 4;
		t.y = 6;
		return t;
	};
	_proto.daojutubiao1_i = function () {
		var t = new eui.Image();
		this.daojutubiao1 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 28.5;
		t.y = 21;
		return t;
	};
	_proto.jieshaowenzidikuang1_i = function () {
		var t = new eui.Image();
		this.jieshaowenzidikuang1 = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 122;
		return t;
	};
	_proto.wenzineirong1_i = function () {
		var t = new eui.Label();
		this.wenzineirong1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xF78409;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 10;
		t.y = 128;
		return t;
	};
	_proto.daojuzu3_i = function () {
		var t = new eui.Group();
		this.daojuzu3 = t;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.anniudibu2_i(),this.daojutubiao2_i(),this.jieshaowenzidikuang2_i(),this.wenzineirong2_i()];
		return t;
	};
	_proto.anniudibu2_i = function () {
		var t = new eui.Image();
		this.anniudibu2 = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 4;
		t.y = 6;
		return t;
	};
	_proto.daojutubiao2_i = function () {
		var t = new eui.Image();
		this.daojutubiao2 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 28.5;
		t.y = 21;
		return t;
	};
	_proto.jieshaowenzidikuang2_i = function () {
		var t = new eui.Image();
		this.jieshaowenzidikuang2 = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 122;
		return t;
	};
	_proto.wenzineirong2_i = function () {
		var t = new eui.Label();
		this.wenzineirong2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xF78409;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 10;
		t.y = 128;
		return t;
	};
	_proto.daojuzu4_i = function () {
		var t = new eui.Group();
		this.daojuzu4 = t;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this.anniudibu3_i(),this.daojutubiao3_i(),this.jieshaowenzidikuang3_i(),this.wenzineirong3_i()];
		return t;
	};
	_proto.anniudibu3_i = function () {
		var t = new eui.Image();
		this.anniudibu3 = t;
		t.source = "img_jiaohuanniudibu_png";
		t.x = 4;
		t.y = 6;
		return t;
	};
	_proto.daojutubiao3_i = function () {
		var t = new eui.Image();
		this.daojutubiao3 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_anquanguanli_png";
		t.width = 120;
		t.x = 28.5;
		t.y = 21;
		return t;
	};
	_proto.jieshaowenzidikuang3_i = function () {
		var t = new eui.Image();
		this.jieshaowenzidikuang3 = t;
		t.source = "img_wenzidikuang_png";
		t.x = 0;
		t.y = 122;
		return t;
	};
	_proto.wenzineirong3_i = function () {
		var t = new eui.Label();
		this.wenzineirong3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 33;
		t.size = 20;
		t.stroke = 2;
		t.text = "文字内容";
		t.textAlign = "center";
		t.textColor = 0xF78409;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 10;
		t.y = 128;
		return t;
	};
	_proto.guanbianniu_i = function () {
		var t = new eui.Button();
		this.guanbianniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 472;
		t.y = 3;
		t.skinName = JiatingchengyuanzengsongSkin$Skin119;
		return t;
	};
	return JiatingchengyuanzengsongSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Jiatingjinxiuui.exml'] = window.JiatingjinxiuuiSkin = (function (_super) {
	__extends(JiatingjinxiuuiSkin, _super);
	var JiatingjinxiuuiSkin$Skin120 = 	(function (_super) {
		__extends(JiatingjinxiuuiSkin$Skin120, _super);
		function JiatingjinxiuuiSkin$Skin120() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
			];
		}
		var _proto = JiatingjinxiuuiSkin$Skin120.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_tishiqueding1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiatingjinxiuuiSkin$Skin120;
	})(eui.Skin);

	var JiatingjinxiuuiSkin$Skin121 = 	(function (_super) {
		__extends(JiatingjinxiuuiSkin$Skin121, _super);
		function JiatingjinxiuuiSkin$Skin121() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_quedingzhuanfa2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_quedingzhuanfa2_png")
					])
			];
		}
		var _proto = JiatingjinxiuuiSkin$Skin121.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_quedingzhuanfa1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiatingjinxiuuiSkin$Skin121;
	})(eui.Skin);

	var JiatingjinxiuuiSkin$Skin122 = 	(function (_super) {
		__extends(JiatingjinxiuuiSkin$Skin122, _super);
		function JiatingjinxiuuiSkin$Skin122() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_quedingguanggao2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_quedingguanggao2_png")
					])
			];
		}
		var _proto = JiatingjinxiuuiSkin$Skin122.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_quedingguanggao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiatingjinxiuuiSkin$Skin122;
	})(eui.Skin);

	var JiatingjinxiuuiSkin$Skin123 = 	(function (_super) {
		__extends(JiatingjinxiuuiSkin$Skin123, _super);
		function JiatingjinxiuuiSkin$Skin123() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = JiatingjinxiuuiSkin$Skin123.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JiatingjinxiuuiSkin$Skin123;
	})(eui.Skin);

	function JiatingjinxiuuiSkin() {
		_super.call(this);
		this.skinParts = ["jinxiubj","jinxiubiaoti","jinxiutupian","shengyushijian","shengyushijian0","quedinganniu","quedinganniu0","quedinganniu1","guanbianniu","jiasuwenzi","jinxiujiemian"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.jinxiujiemian_i()];
	}
	var _proto = JiatingjinxiuuiSkin.prototype;

	_proto.jinxiujiemian_i = function () {
		var t = new eui.Group();
		this.jinxiujiemian = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.jinxiubj_i(),this.jinxiubiaoti_i(),this.jinxiutupian_i(),this.shengyushijian_i(),this.shengyushijian0_i(),this.quedinganniu_i(),this.quedinganniu0_i(),this.quedinganniu1_i(),this.guanbianniu_i(),this.jiasuwenzi_i()];
		return t;
	};
	_proto.jinxiubj_i = function () {
		var t = new eui.Image();
		this.jinxiubj = t;
		t.source = "img_tanchubeijing_png";
		t.x = 17;
		t.y = 8;
		return t;
	};
	_proto.jinxiubiaoti_i = function () {
		var t = new eui.Label();
		this.jinxiubiaoti = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 59;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "信息";
		t.textAlign = "center";
		t.textColor = 0xFFA005;
		t.verticalAlign = "middle";
		t.width = 510;
		t.x = 44;
		t.y = 19;
		return t;
	};
	_proto.jinxiutupian_i = function () {
		var t = new eui.Image();
		this.jinxiutupian = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 140;
		t.source = "img_anquanguanli_png";
		t.width = 140;
		t.x = 230.5;
		t.y = 211.5;
		return t;
	};
	_proto.shengyushijian_i = function () {
		var t = new eui.Label();
		this.shengyushijian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 36;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "剩余时间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 476;
		t.x = 63;
		t.y = 384;
		return t;
	};
	_proto.shengyushijian0_i = function () {
		var t = new eui.Label();
		this.shengyushijian0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 36;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "0:00";
		t.textAlign = "center";
		t.textColor = 0xf2a50e;
		t.verticalAlign = "middle";
		t.width = 477;
		t.x = 62;
		t.y = 446;
		return t;
	};
	_proto.quedinganniu_i = function () {
		var t = new eui.Button();
		this.quedinganniu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.label = "";
		t.x = 214;
		t.y = 606;
		t.skinName = JiatingjinxiuuiSkin$Skin120;
		return t;
	};
	_proto.quedinganniu0_i = function () {
		var t = new eui.Button();
		this.quedinganniu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.label = "";
		t.x = 216.5;
		t.y = 606;
		t.skinName = JiatingjinxiuuiSkin$Skin121;
		return t;
	};
	_proto.quedinganniu1_i = function () {
		var t = new eui.Button();
		this.quedinganniu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.label = "";
		t.x = 215.5;
		t.y = 606;
		t.skinName = JiatingjinxiuuiSkin$Skin122;
		return t;
	};
	_proto.guanbianniu_i = function () {
		var t = new eui.Button();
		this.guanbianniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 487;
		t.y = 12;
		t.skinName = JiatingjinxiuuiSkin$Skin123;
		return t;
	};
	_proto.jiasuwenzi_i = function () {
		var t = new eui.Label();
		this.jiasuwenzi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x7c7575;
		t.text = "（进行加速每次可减少10分钟时间）";
		t.textAlign = "center";
		t.textColor = 0xf70909;
		t.verticalAlign = "middle";
		t.width = 493;
		t.x = 55;
		t.y = 566;
		return t;
	};
	return JiatingjinxiuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Jiatingui.exml'] = window.JiatinguiSkin = (function (_super) {
	__extends(JiatinguiSkin, _super);
	function JiatinguiSkin() {
		_super.call(this);
		this.skinParts = ["img_jiatingbeijing","but_chuang","but_guizi","but_shuzhuo","but_dianshi","but_chaji","but_shafa","but_maowo","butun_shafa","butun_shafa0","butun_chaji","butun_dianshi","butun_maowo","butun_shuzhuo","butun_guizi","butun_chuang","butun_chuang0","img_daerzi","img_ererzi","img_daerxi","img_xiaosunnv","duihuatishi","laodongtishi","duihuatishi0","laodongtishi0","duihuatishi1","laodongtishi1","duihuatishi2","laodongtishi2","shafatishi","jiatingzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.jiatingzu_i()];
	}
	var _proto = JiatinguiSkin.prototype;

	_proto.jiatingzu_i = function () {
		var t = new eui.Group();
		this.jiatingzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_jiatingbeijing_i(),this.but_chuang_i(),this.but_guizi_i(),this.but_shuzhuo_i(),this.but_dianshi_i(),this.but_chaji_i(),this.but_shafa_i(),this.but_maowo_i(),this.butun_shafa_i(),this.butun_shafa0_i(),this.butun_chaji_i(),this.butun_dianshi_i(),this.butun_maowo_i(),this.butun_shuzhuo_i(),this.butun_guizi_i(),this.butun_chuang_i(),this.butun_chuang0_i(),this.img_daerzi_i(),this.img_ererzi_i(),this.img_daerxi_i(),this.img_xiaosunnv_i(),this.duihuatishi_i(),this.laodongtishi_i(),this.duihuatishi0_i(),this.laodongtishi0_i(),this.duihuatishi1_i(),this.laodongtishi1_i(),this.duihuatishi2_i(),this.laodongtishi2_i(),this.shafatishi_i()];
		return t;
	};
	_proto.img_jiatingbeijing_i = function () {
		var t = new eui.Image();
		this.img_jiatingbeijing = t;
		t.source = "img_jiatingbeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.but_chuang_i = function () {
		var t = new eui.Image();
		this.but_chuang = t;
		t.source = "but_chuang_png";
		t.x = 0;
		t.y = 374;
		return t;
	};
	_proto.but_guizi_i = function () {
		var t = new eui.Image();
		this.but_guizi = t;
		t.source = "but_guizi_png";
		t.x = 176.5;
		t.y = 127;
		return t;
	};
	_proto.but_shuzhuo_i = function () {
		var t = new eui.Image();
		this.but_shuzhuo = t;
		t.source = "but_shuzhuo_png";
		t.x = 446;
		t.y = 259.5;
		return t;
	};
	_proto.but_dianshi_i = function () {
		var t = new eui.Image();
		this.but_dianshi = t;
		t.source = "but_dianshi_png";
		t.x = 517;
		t.y = 553;
		return t;
	};
	_proto.but_chaji_i = function () {
		var t = new eui.Image();
		this.but_chaji = t;
		t.source = "but_chaji_png";
		t.x = 154;
		t.y = 771;
		return t;
	};
	_proto.but_shafa_i = function () {
		var t = new eui.Image();
		this.but_shafa = t;
		t.source = "but_shafa_png";
		t.x = 0;
		t.y = 840;
		return t;
	};
	_proto.but_maowo_i = function () {
		var t = new eui.Image();
		this.but_maowo = t;
		t.source = "but_maowo_png";
		t.x = 250;
		t.y = 660;
		return t;
	};
	_proto.butun_shafa_i = function () {
		var t = new eui.Button();
		this.butun_shafa = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 258;
		t.label = "";
		t.width = 432;
		t.x = 2.5;
		t.y = 1072.5;
		return t;
	};
	_proto.butun_shafa0_i = function () {
		var t = new eui.Button();
		this.butun_shafa0 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 258;
		t.label = "";
		t.width = 196;
		t.x = 0;
		t.y = 878.5;
		return t;
	};
	_proto.butun_chaji_i = function () {
		var t = new eui.Button();
		this.butun_chaji = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 196;
		t.label = "";
		t.width = 380;
		t.x = 256;
		t.y = 802.5;
		return t;
	};
	_proto.butun_dianshi_i = function () {
		var t = new eui.Button();
		this.butun_dianshi = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 153;
		t.label = "";
		t.width = 203;
		t.x = 541;
		t.y = 570;
		return t;
	};
	_proto.butun_maowo_i = function () {
		var t = new eui.Button();
		this.butun_maowo = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 101;
		t.label = "";
		t.width = 111;
		t.x = 264.5;
		t.y = 649.5;
		return t;
	};
	_proto.butun_shuzhuo_i = function () {
		var t = new eui.Button();
		this.butun_shuzhuo = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 162;
		t.label = "";
		t.width = 237;
		t.x = 459;
		t.y = 292;
		return t;
	};
	_proto.butun_guizi_i = function () {
		var t = new eui.Button();
		this.butun_guizi = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 269;
		t.label = "";
		t.width = 190;
		t.x = 201.5;
		t.y = 133;
		return t;
	};
	_proto.butun_chuang_i = function () {
		var t = new eui.Button();
		this.butun_chuang = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 151;
		t.label = "";
		t.width = 189;
		t.x = 2.5;
		t.y = 396.5;
		return t;
	};
	_proto.butun_chuang0_i = function () {
		var t = new eui.Button();
		this.butun_chuang0 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 69;
		t.label = "";
		t.width = 85;
		t.x = 218.5;
		t.y = 433;
		return t;
	};
	_proto.img_daerzi_i = function () {
		var t = new eui.Image();
		this.img_daerzi = t;
		t.source = "img_daerzi_png";
		t.x = 142;
		t.y = 750.5;
		return t;
	};
	_proto.img_ererzi_i = function () {
		var t = new eui.Image();
		this.img_ererzi = t;
		t.source = "img_ererzi_png";
		t.x = 433;
		t.y = 608;
		return t;
	};
	_proto.img_daerxi_i = function () {
		var t = new eui.Image();
		this.img_daerxi = t;
		t.source = "img_daerxi_png";
		t.x = 604.5;
		t.y = 873.5;
		return t;
	};
	_proto.img_xiaosunnv_i = function () {
		var t = new eui.Image();
		this.img_xiaosunnv = t;
		t.source = "img_xiaosunnv_png";
		t.x = 490;
		t.y = 969;
		return t;
	};
	_proto.duihuatishi_i = function () {
		var t = new eui.Image();
		this.duihuatishi = t;
		t.source = "img_duihuatishi_png";
		t.x = 129.5;
		t.y = 677.5;
		return t;
	};
	_proto.laodongtishi_i = function () {
		var t = new eui.Image();
		this.laodongtishi = t;
		t.source = "img_laodongtishi_png";
		t.x = 217.5;
		t.y = 680.5;
		return t;
	};
	_proto.duihuatishi0_i = function () {
		var t = new eui.Image();
		this.duihuatishi0 = t;
		t.source = "img_duihuatishi_png";
		t.x = 387;
		t.y = 537.5;
		return t;
	};
	_proto.laodongtishi0_i = function () {
		var t = new eui.Image();
		this.laodongtishi0 = t;
		t.source = "img_laodongtishi_png";
		t.x = 475;
		t.y = 540.5;
		return t;
	};
	_proto.duihuatishi1_i = function () {
		var t = new eui.Image();
		this.duihuatishi1 = t;
		t.source = "img_duihuatishi_png";
		t.x = 556.5;
		t.y = 799.5;
		return t;
	};
	_proto.laodongtishi1_i = function () {
		var t = new eui.Image();
		this.laodongtishi1 = t;
		t.source = "img_laodongtishi_png";
		t.x = 644.5;
		t.y = 802.5;
		return t;
	};
	_proto.duihuatishi2_i = function () {
		var t = new eui.Image();
		this.duihuatishi2 = t;
		t.source = "img_duihuatishi_png";
		t.x = 439.5;
		t.y = 897.5;
		return t;
	};
	_proto.laodongtishi2_i = function () {
		var t = new eui.Image();
		this.laodongtishi2 = t;
		t.source = "img_laodongtishi_png";
		t.x = 527.5;
		t.y = 900.5;
		return t;
	};
	_proto.shafatishi_i = function () {
		var t = new eui.Image();
		this.shafatishi = t;
		t.source = "img_xiuxitishi_png";
		t.x = 59.5;
		t.y = 930;
		return t;
	};
	return JiatinguiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Jinyingguanlijiemian.exml'] = window.JinyingguanlijiemianSkin = (function (_super) {
	__extends(JinyingguanlijiemianSkin, _super);
	var JinyingguanlijiemianSkin$Skin124 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin124, _super);
		function JinyingguanlijiemianSkin$Skin124() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin124.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin124;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin125 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin125, _super);
		function JinyingguanlijiemianSkin$Skin125() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin125.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin125;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin126 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin126, _super);
		function JinyingguanlijiemianSkin$Skin126() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin126.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin126;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin127 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin127, _super);
		function JinyingguanlijiemianSkin$Skin127() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin127.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin127;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin128 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin128, _super);
		function JinyingguanlijiemianSkin$Skin128() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin128.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin128;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin129 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin129, _super);
		function JinyingguanlijiemianSkin$Skin129() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin129.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin129;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin130 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin130, _super);
		function JinyingguanlijiemianSkin$Skin130() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin130.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin130;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin131 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin131, _super);
		function JinyingguanlijiemianSkin$Skin131() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin131.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin131;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin132 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin132, _super);
		function JinyingguanlijiemianSkin$Skin132() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin132.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin132;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin133 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin133, _super);
		function JinyingguanlijiemianSkin$Skin133() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin133.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin133;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin134 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin134, _super);
		function JinyingguanlijiemianSkin$Skin134() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin134.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin134;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin135 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin135, _super);
		function JinyingguanlijiemianSkin$Skin135() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin135.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin135;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin136 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin136, _super);
		function JinyingguanlijiemianSkin$Skin136() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin136.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin136;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin137 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin137, _super);
		function JinyingguanlijiemianSkin$Skin137() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin137.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin137;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin138 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin138, _super);
		function JinyingguanlijiemianSkin$Skin138() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin138.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin138;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin139 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin139, _super);
		function JinyingguanlijiemianSkin$Skin139() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin139.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin139;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin140 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin140, _super);
		function JinyingguanlijiemianSkin$Skin140() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin140.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin140;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin141 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin141, _super);
		function JinyingguanlijiemianSkin$Skin141() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin141.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin141;
	})(eui.Skin);

	var JinyingguanlijiemianSkin$Skin142 = 	(function (_super) {
		__extends(JinyingguanlijiemianSkin$Skin142, _super);
		function JinyingguanlijiemianSkin$Skin142() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shuoming2_png")
					])
			];
		}
		var _proto = JinyingguanlijiemianSkin$Skin142.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuoming1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JinyingguanlijiemianSkin$Skin142;
	})(eui.Skin);

	function JinyingguanlijiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao","img_baobiaodiban","but_guanbi","keliuliangtext","kerongliangtext","lixianshouyitext","waimaishouyitext","yuangongxinzitext","zujinshouru","meiqishouru","fadanshouru","fangwuzujintext","shuidianmeiqitext","jingyinfadantext","weishentext","anbaotext","xiaochaotijiatext","xiaochitijiatext","shangcaisudutext","shicaichubeitext","fandiankoubeitext","huoguotijiatext","zaocantijiatext","shihaojiangditext","shuomingbut","shuomingbut0","shuomingbut1","shuomingbut2","shuomingbut3","shuomingbut4","shuomingbut5","shuomingbut6","shuomingbut7","shuomingbut8","shuomingbut9","shuomingbut10","shuomingbut11","shuomingbut12","shuomingbut13","shuomingbut14","shuomingbut15","shuomingbut16","jingyinguanlizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.jingyinguanlizu_i()];
	}
	var _proto = JinyingguanlijiemianSkin.prototype;

	_proto.jingyinguanlizu_i = function () {
		var t = new eui.Group();
		this.jingyinguanlizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao_i(),this.img_baobiaodiban_i(),this.but_guanbi_i(),this.keliuliangtext_i(),this.kerongliangtext_i(),this.lixianshouyitext_i(),this.waimaishouyitext_i(),this.yuangongxinzitext_i(),this.zujinshouru_i(),this.meiqishouru_i(),this.fadanshouru_i(),this.fangwuzujintext_i(),this.shuidianmeiqitext_i(),this.jingyinfadantext_i(),this.weishentext_i(),this.anbaotext_i(),this.xiaochaotijiatext_i(),this.xiaochitijiatext_i(),this.shangcaisudutext_i(),this.shicaichubeitext_i(),this.fandiankoubeitext_i(),this.huoguotijiatext_i(),this.zaocantijiatext_i(),this.shihaojiangditext_i(),this.shuomingbut_i(),this.shuomingbut0_i(),this.shuomingbut1_i(),this.shuomingbut2_i(),this.shuomingbut3_i(),this.shuomingbut4_i(),this.shuomingbut5_i(),this.shuomingbut6_i(),this.shuomingbut7_i(),this.shuomingbut8_i(),this.shuomingbut9_i(),this.shuomingbut10_i(),this.shuomingbut11_i(),this.shuomingbut12_i(),this.shuomingbut13_i(),this.shuomingbut14_i(),this.shuomingbut15_i(),this.shuomingbut16_i()];
		return t;
	};
	_proto.img_heisezhezao_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.img_baobiaodiban_i = function () {
		var t = new eui.Image();
		this.img_baobiaodiban = t;
		t.source = "img_baobiaodiban_png";
		t.x = 52;
		t.y = 128;
		return t;
	};
	_proto.but_guanbi_i = function () {
		var t = new eui.Button();
		this.but_guanbi = t;
		t.enabled = true;
		t.label = "";
		t.x = 614;
		t.y = 134;
		t.skinName = JinyingguanlijiemianSkin$Skin124;
		return t;
	};
	_proto.keliuliangtext_i = function () {
		var t = new eui.Label();
		this.keliuliangtext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 284;
		t.y = 335;
		return t;
	};
	_proto.kerongliangtext_i = function () {
		var t = new eui.Label();
		this.kerongliangtext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 284;
		t.y = 384;
		return t;
	};
	_proto.lixianshouyitext_i = function () {
		var t = new eui.Label();
		this.lixianshouyitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 518;
		t.y = 335;
		return t;
	};
	_proto.waimaishouyitext_i = function () {
		var t = new eui.Label();
		this.waimaishouyitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 518;
		t.y = 387;
		return t;
	};
	_proto.yuangongxinzitext_i = function () {
		var t = new eui.Label();
		this.yuangongxinzitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 500;
		return t;
	};
	_proto.zujinshouru_i = function () {
		var t = new eui.Label();
		this.zujinshouru = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 19;
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 136;
		t.x = 210;
		t.y = 586.5;
		return t;
	};
	_proto.meiqishouru_i = function () {
		var t = new eui.Label();
		this.meiqishouru = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 19;
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 136;
		t.x = 425;
		t.y = 526.5;
		return t;
	};
	_proto.fadanshouru_i = function () {
		var t = new eui.Label();
		this.fadanshouru = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 19;
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 136;
		t.x = 425;
		t.y = 586.5;
		return t;
	};
	_proto.fangwuzujintext_i = function () {
		var t = new eui.Label();
		this.fangwuzujintext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 561.5;
		return t;
	};
	_proto.shuidianmeiqitext_i = function () {
		var t = new eui.Label();
		this.shuidianmeiqitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 500;
		return t;
	};
	_proto.jingyinfadantext_i = function () {
		var t = new eui.Label();
		this.jingyinfadantext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 559.5;
		return t;
	};
	_proto.weishentext_i = function () {
		var t = new eui.Label();
		this.weishentext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 680.5;
		return t;
	};
	_proto.anbaotext_i = function () {
		var t = new eui.Label();
		this.anbaotext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 741.5;
		return t;
	};
	_proto.xiaochaotijiatext_i = function () {
		var t = new eui.Label();
		this.xiaochaotijiatext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 795.5;
		return t;
	};
	_proto.xiaochitijiatext_i = function () {
		var t = new eui.Label();
		this.xiaochitijiatext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 855.5;
		return t;
	};
	_proto.shangcaisudutext_i = function () {
		var t = new eui.Label();
		this.shangcaisudutext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 299;
		t.y = 911.5;
		return t;
	};
	_proto.shicaichubeitext_i = function () {
		var t = new eui.Label();
		this.shicaichubeitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 680.5;
		return t;
	};
	_proto.fandiankoubeitext_i = function () {
		var t = new eui.Label();
		this.fandiankoubeitext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 740.5;
		return t;
	};
	_proto.huoguotijiatext_i = function () {
		var t = new eui.Label();
		this.huoguotijiatext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 516;
		t.y = 795.5;
		return t;
	};
	_proto.zaocantijiatext_i = function () {
		var t = new eui.Label();
		this.zaocantijiatext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 855.5;
		return t;
	};
	_proto.shihaojiangditext_i = function () {
		var t = new eui.Label();
		this.shihaojiangditext = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 20;
		t.stroke = 2;
		t.text = "98999";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 84;
		t.x = 515;
		t.y = 911.5;
		return t;
	};
	_proto.shuomingbut_i = function () {
		var t = new eui.Button();
		this.shuomingbut = t;
		t.enabled = true;
		t.label = "";
		t.x = 347;
		t.y = 334;
		t.skinName = JinyingguanlijiemianSkin$Skin125;
		return t;
	};
	_proto.shuomingbut0_i = function () {
		var t = new eui.Button();
		this.shuomingbut0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 579;
		t.y = 334;
		t.skinName = JinyingguanlijiemianSkin$Skin126;
		return t;
	};
	_proto.shuomingbut1_i = function () {
		var t = new eui.Button();
		this.shuomingbut1 = t;
		t.enabled = true;
		t.label = "";
		t.x = 347;
		t.y = 383;
		t.skinName = JinyingguanlijiemianSkin$Skin127;
		return t;
	};
	_proto.shuomingbut2_i = function () {
		var t = new eui.Button();
		this.shuomingbut2 = t;
		t.enabled = true;
		t.label = "";
		t.x = 579;
		t.y = 384;
		t.skinName = JinyingguanlijiemianSkin$Skin128;
		return t;
	};
	_proto.shuomingbut3_i = function () {
		var t = new eui.Button();
		this.shuomingbut3 = t;
		t.enabled = true;
		t.label = "";
		t.x = 354;
		t.y = 499;
		t.skinName = JinyingguanlijiemianSkin$Skin129;
		return t;
	};
	_proto.shuomingbut4_i = function () {
		var t = new eui.Button();
		this.shuomingbut4 = t;
		t.enabled = true;
		t.label = "";
		t.x = 581;
		t.y = 499;
		t.skinName = JinyingguanlijiemianSkin$Skin130;
		return t;
	};
	_proto.shuomingbut5_i = function () {
		var t = new eui.Button();
		this.shuomingbut5 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 559;
		t.skinName = JinyingguanlijiemianSkin$Skin131;
		return t;
	};
	_proto.shuomingbut6_i = function () {
		var t = new eui.Button();
		this.shuomingbut6 = t;
		t.enabled = true;
		t.label = "";
		t.x = 579;
		t.y = 558.5;
		t.skinName = JinyingguanlijiemianSkin$Skin132;
		return t;
	};
	_proto.shuomingbut7_i = function () {
		var t = new eui.Button();
		this.shuomingbut7 = t;
		t.enabled = true;
		t.label = "";
		t.x = 354;
		t.y = 680.5;
		t.skinName = JinyingguanlijiemianSkin$Skin133;
		return t;
	};
	_proto.shuomingbut8_i = function () {
		var t = new eui.Button();
		this.shuomingbut8 = t;
		t.enabled = true;
		t.label = "";
		t.x = 578;
		t.y = 679.5;
		t.skinName = JinyingguanlijiemianSkin$Skin134;
		return t;
	};
	_proto.shuomingbut9_i = function () {
		var t = new eui.Button();
		this.shuomingbut9 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 741.5;
		t.skinName = JinyingguanlijiemianSkin$Skin135;
		return t;
	};
	_proto.shuomingbut10_i = function () {
		var t = new eui.Button();
		this.shuomingbut10 = t;
		t.enabled = true;
		t.label = "";
		t.x = 578;
		t.y = 739.5;
		t.skinName = JinyingguanlijiemianSkin$Skin136;
		return t;
	};
	_proto.shuomingbut11_i = function () {
		var t = new eui.Button();
		this.shuomingbut11 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 795.5;
		t.skinName = JinyingguanlijiemianSkin$Skin137;
		return t;
	};
	_proto.shuomingbut12_i = function () {
		var t = new eui.Button();
		this.shuomingbut12 = t;
		t.enabled = true;
		t.label = "";
		t.x = 578;
		t.y = 795;
		t.skinName = JinyingguanlijiemianSkin$Skin138;
		return t;
	};
	_proto.shuomingbut13_i = function () {
		var t = new eui.Button();
		this.shuomingbut13 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 855.5;
		t.skinName = JinyingguanlijiemianSkin$Skin139;
		return t;
	};
	_proto.shuomingbut14_i = function () {
		var t = new eui.Button();
		this.shuomingbut14 = t;
		t.enabled = true;
		t.label = "";
		t.x = 578;
		t.y = 855.5;
		t.skinName = JinyingguanlijiemianSkin$Skin140;
		return t;
	};
	_proto.shuomingbut15_i = function () {
		var t = new eui.Button();
		this.shuomingbut15 = t;
		t.enabled = true;
		t.label = "";
		t.x = 357.5;
		t.y = 911.5;
		t.skinName = JinyingguanlijiemianSkin$Skin141;
		return t;
	};
	_proto.shuomingbut16_i = function () {
		var t = new eui.Button();
		this.shuomingbut16 = t;
		t.enabled = true;
		t.label = "";
		t.x = 581;
		t.y = 910.5;
		t.skinName = JinyingguanlijiemianSkin$Skin142;
		return t;
	};
	return JinyingguanlijiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Liuyanjiemian.exml'] = window.LiuyanjiemianSkin = (function (_super) {
	__extends(LiuyanjiemianSkin, _super);
	var LiuyanjiemianSkin$Skin143 = 	(function (_super) {
		__extends(LiuyanjiemianSkin$Skin143, _super);
		function LiuyanjiemianSkin$Skin143() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = LiuyanjiemianSkin$Skin143.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LiuyanjiemianSkin$Skin143;
	})(eui.Skin);

	function LiuyanjiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao0","img_liuyanbg","img_biaotiliuyan","but_guanbi0","pingjunpinfen","zengjiakoubei","img_haopin","touxiang","img_touxiangkuang","img_qipaokuang","img_haopintiao","pingluntext","xingming","gerenliuyan","touxiang0","img_touxiangkuang0","img_qipaokuang0","img_haopintiao0","pingluntext0","xingming0","gerenliuyan0","touxiang1","img_touxiangkuang1","img_qipaokuang1","img_haopintiao1","pingluntext1","xingming1","gerenliuyan1","touxiang2","img_touxiangkuang2","img_qipaokuang2","img_haopintiao2","pingluntext2","xingming2","gerenliuyan2","touxiang3","img_touxiangkuang3","img_qipaokuang3","img_haopintiao3","pingluntext3","xingming3","gerenliuyan3","touxiang4","img_touxiangkuang4","img_qipaokuang4","img_haopintiao4","pingluntext4","xingming4","gerenliuyan4","touxiang5","img_touxiangkuang5","img_qipaokuang5","img_haopintiao5","pingluntext5","xingming5","gerenliuyan5","touxiang6","img_touxiangkuang6","img_qipaokuang6","img_haopintiao6","pingluntext6","xingming6","gerenliuyan6","touxiang7","img_touxiangkuang7","img_qipaokuang7","img_haopintiao7","pingluntext7","xingming7","gerenliuyan7","touxiang8","img_touxiangkuang8","img_qipaokuang8","img_haopintiao8","pingluntext8","xingming8","gerenliuyan8","liuyanzhanshizu","liuyanzhanshi","liuyanjiemianzu","liuyanzu0","liuyanzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.liuyanzu_i()];
	}
	var _proto = LiuyanjiemianSkin.prototype;

	_proto.liuyanzu_i = function () {
		var t = new eui.Group();
		this.liuyanzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao0_i(),this.liuyanzu0_i()];
		return t;
	};
	_proto.img_heisezhezao0_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.liuyanzu0_i = function () {
		var t = new eui.Group();
		this.liuyanzu0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 9;
		t.y = 92.27000000000001;
		t.elementsContent = [this.liuyanjiemianzu_i()];
		return t;
	};
	_proto.liuyanjiemianzu_i = function () {
		var t = new eui.Group();
		this.liuyanjiemianzu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_liuyanbg_i(),this.img_biaotiliuyan_i(),this.but_guanbi0_i(),this.pingjunpinfen_i(),this.zengjiakoubei_i(),this.img_haopin_i(),this.liuyanzhanshi_i()];
		return t;
	};
	_proto.img_liuyanbg_i = function () {
		var t = new eui.Image();
		this.img_liuyanbg = t;
		t.source = "img_liuyanbg_png";
		t.x = 46;
		t.y = 23.73;
		return t;
	};
	_proto.img_biaotiliuyan_i = function () {
		var t = new eui.Image();
		this.img_biaotiliuyan = t;
		t.source = "img_biaotiliuyan_png";
		t.x = 257.5;
		t.y = 0;
		return t;
	};
	_proto.but_guanbi0_i = function () {
		var t = new eui.Button();
		this.but_guanbi0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 625;
		t.y = 4;
		t.skinName = LiuyanjiemianSkin$Skin143;
		return t;
	};
	_proto.pingjunpinfen_i = function () {
		var t = new eui.Label();
		this.pingjunpinfen = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 24;
		t.stroke = 4;
		t.text = "平均评分：34";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 216.33;
		t.x = 134;
		t.y = 142.5;
		return t;
	};
	_proto.zengjiakoubei_i = function () {
		var t = new eui.Label();
		this.zengjiakoubei = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.size = 24;
		t.stroke = 4;
		t.text = "增加口碑值：34";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 265.99;
		t.x = 134;
		t.y = 202.67;
		return t;
	};
	_proto.img_haopin_i = function () {
		var t = new eui.Image();
		this.img_haopin = t;
		t.source = "img_haopin5_png";
		t.x = 360;
		t.y = 135;
		return t;
	};
	_proto.liuyanzhanshi_i = function () {
		var t = new eui.Scroller();
		this.liuyanzhanshi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 570.67;
		t.width = 522.67;
		t.x = 98;
		t.y = 270;
		t.viewport = this.liuyanzhanshizu_i();
		return t;
	};
	_proto.liuyanzhanshizu_i = function () {
		var t = new eui.Group();
		this.liuyanzhanshizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 958.67;
		t.width = 524;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.gerenliuyan_i(),this.gerenliuyan0_i(),this.gerenliuyan1_i(),this.gerenliuyan2_i(),this.gerenliuyan3_i(),this.gerenliuyan4_i(),this.gerenliuyan5_i(),this.gerenliuyan6_i(),this.gerenliuyan7_i(),this.gerenliuyan8_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto.gerenliuyan_i = function () {
		var t = new eui.Group();
		this.gerenliuyan = t;
		t.x = 11.99;
		t.y = 11.66;
		t.elementsContent = [this.touxiang_i(),this.img_touxiangkuang_i(),this.img_qipaokuang_i(),this.img_haopintiao_i(),this.pingluntext_i(),this.xingming_i()];
		return t;
	};
	_proto.touxiang_i = function () {
		var t = new eui.Image();
		this.touxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao_i = function () {
		var t = new eui.Image();
		this.img_haopintiao = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext_i = function () {
		var t = new eui.Label();
		this.pingluntext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming_i = function () {
		var t = new eui.Label();
		this.xingming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	_proto.gerenliuyan0_i = function () {
		var t = new eui.Group();
		this.gerenliuyan0 = t;
		t.x = 21.990000000000002;
		t.y = 21.66;
		t.elementsContent = [this.touxiang0_i(),this.img_touxiangkuang0_i(),this.img_qipaokuang0_i(),this.img_haopintiao0_i(),this.pingluntext0_i(),this.xingming0_i()];
		return t;
	};
	_proto.touxiang0_i = function () {
		var t = new eui.Image();
		this.touxiang0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang0_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang0 = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang0_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao0_i = function () {
		var t = new eui.Image();
		this.img_haopintiao0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext0_i = function () {
		var t = new eui.Label();
		this.pingluntext0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming0_i = function () {
		var t = new eui.Label();
		this.xingming0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	_proto.gerenliuyan1_i = function () {
		var t = new eui.Group();
		this.gerenliuyan1 = t;
		t.x = 31.990000000000002;
		t.y = 31.66;
		t.elementsContent = [this.touxiang1_i(),this.img_touxiangkuang1_i(),this.img_qipaokuang1_i(),this.img_haopintiao1_i(),this.pingluntext1_i(),this.xingming1_i()];
		return t;
	};
	_proto.touxiang1_i = function () {
		var t = new eui.Image();
		this.touxiang1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang1_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang1 = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang1_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao1_i = function () {
		var t = new eui.Image();
		this.img_haopintiao1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext1_i = function () {
		var t = new eui.Label();
		this.pingluntext1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming1_i = function () {
		var t = new eui.Label();
		this.xingming1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	_proto.gerenliuyan2_i = function () {
		var t = new eui.Group();
		this.gerenliuyan2 = t;
		t.x = 41.99;
		t.y = 41.66;
		t.elementsContent = [this.touxiang2_i(),this.img_touxiangkuang2_i(),this.img_qipaokuang2_i(),this.img_haopintiao2_i(),this.pingluntext2_i(),this.xingming2_i()];
		return t;
	};
	_proto.touxiang2_i = function () {
		var t = new eui.Image();
		this.touxiang2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang2_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang2 = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang2_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao2_i = function () {
		var t = new eui.Image();
		this.img_haopintiao2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext2_i = function () {
		var t = new eui.Label();
		this.pingluntext2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming2_i = function () {
		var t = new eui.Label();
		this.xingming2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	_proto.gerenliuyan3_i = function () {
		var t = new eui.Group();
		this.gerenliuyan3 = t;
		t.x = 51.99;
		t.y = 51.66;
		t.elementsContent = [this.touxiang3_i(),this.img_touxiangkuang3_i(),this.img_qipaokuang3_i(),this.img_haopintiao3_i(),this.pingluntext3_i(),this.xingming3_i()];
		return t;
	};
	_proto.touxiang3_i = function () {
		var t = new eui.Image();
		this.touxiang3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang3_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang3 = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang3_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao3_i = function () {
		var t = new eui.Image();
		this.img_haopintiao3 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext3_i = function () {
		var t = new eui.Label();
		this.pingluntext3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming3_i = function () {
		var t = new eui.Label();
		this.xingming3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	_proto.gerenliuyan4_i = function () {
		var t = new eui.Group();
		this.gerenliuyan4 = t;
		t.x = 61.99;
		t.y = 61.66;
		t.elementsContent = [this.touxiang4_i(),this.img_touxiangkuang4_i(),this.img_qipaokuang4_i(),this.img_haopintiao4_i(),this.pingluntext4_i(),this.xingming4_i()];
		return t;
	};
	_proto.touxiang4_i = function () {
		var t = new eui.Image();
		this.touxiang4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang4_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang4 = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang4_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao4_i = function () {
		var t = new eui.Image();
		this.img_haopintiao4 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext4_i = function () {
		var t = new eui.Label();
		this.pingluntext4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming4_i = function () {
		var t = new eui.Label();
		this.xingming4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	_proto.gerenliuyan5_i = function () {
		var t = new eui.Group();
		this.gerenliuyan5 = t;
		t.x = 71.99000000000001;
		t.y = 71.66;
		t.elementsContent = [this.touxiang5_i(),this.img_touxiangkuang5_i(),this.img_qipaokuang5_i(),this.img_haopintiao5_i(),this.pingluntext5_i(),this.xingming5_i()];
		return t;
	};
	_proto.touxiang5_i = function () {
		var t = new eui.Image();
		this.touxiang5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang5_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang5 = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang5_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao5_i = function () {
		var t = new eui.Image();
		this.img_haopintiao5 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext5_i = function () {
		var t = new eui.Label();
		this.pingluntext5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming5_i = function () {
		var t = new eui.Label();
		this.xingming5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	_proto.gerenliuyan6_i = function () {
		var t = new eui.Group();
		this.gerenliuyan6 = t;
		t.x = 81.99000000000001;
		t.y = 81.66;
		t.elementsContent = [this.touxiang6_i(),this.img_touxiangkuang6_i(),this.img_qipaokuang6_i(),this.img_haopintiao6_i(),this.pingluntext6_i(),this.xingming6_i()];
		return t;
	};
	_proto.touxiang6_i = function () {
		var t = new eui.Image();
		this.touxiang6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang6_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang6 = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang6_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao6_i = function () {
		var t = new eui.Image();
		this.img_haopintiao6 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext6_i = function () {
		var t = new eui.Label();
		this.pingluntext6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming6_i = function () {
		var t = new eui.Label();
		this.xingming6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	_proto.gerenliuyan7_i = function () {
		var t = new eui.Group();
		this.gerenliuyan7 = t;
		t.x = 91.99000000000001;
		t.y = 91.66;
		t.elementsContent = [this.touxiang7_i(),this.img_touxiangkuang7_i(),this.img_qipaokuang7_i(),this.img_haopintiao7_i(),this.pingluntext7_i(),this.xingming7_i()];
		return t;
	};
	_proto.touxiang7_i = function () {
		var t = new eui.Image();
		this.touxiang7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang7_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang7 = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang7_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao7_i = function () {
		var t = new eui.Image();
		this.img_haopintiao7 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext7_i = function () {
		var t = new eui.Label();
		this.pingluntext7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming7_i = function () {
		var t = new eui.Label();
		this.xingming7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	_proto.gerenliuyan8_i = function () {
		var t = new eui.Group();
		this.gerenliuyan8 = t;
		t.x = 101.99000000000001;
		t.y = 101.66;
		t.elementsContent = [this.touxiang8_i(),this.img_touxiangkuang8_i(),this.img_qipaokuang8_i(),this.img_haopintiao8_i(),this.pingluntext8_i(),this.xingming8_i()];
		return t;
	};
	_proto.touxiang8_i = function () {
		var t = new eui.Image();
		this.touxiang8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "tx1000_png";
		t.width = 80;
		t.x = 21;
		t.y = 41;
		return t;
	};
	_proto.img_touxiangkuang8_i = function () {
		var t = new eui.Image();
		this.img_touxiangkuang8 = t;
		t.source = "img_touxiangkuang_png";
		t.x = 0;
		t.y = 22.34;
		return t;
	};
	_proto.img_qipaokuang8_i = function () {
		var t = new eui.Image();
		this.img_qipaokuang8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "img_qipaokuang_png";
		t.width = 372;
		t.x = 124.83;
		t.y = 66.34;
		return t;
	};
	_proto.img_haopintiao8_i = function () {
		var t = new eui.Image();
		this.img_haopintiao8 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_haopin5_png";
		t.x = 349.5;
		t.y = 23.84;
		return t;
	};
	_proto.pingluntext8_i = function () {
		var t = new eui.Label();
		this.pingluntext8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 82;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 136.83;
		t.y = 76.34;
		return t;
	};
	_proto.xingming8_i = function () {
		var t = new eui.Label();
		this.xingming8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.text = "这是提条评论了评论";
		t.textAlign = "center";
		t.textColor = 0x191818;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 120.83;
		t.y = 24.34;
		return t;
	};
	return LiuyanjiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Loadingjiemian.exml'] = window.LoadingjiemianSkin = (function (_super) {
	__extends(LoadingjiemianSkin, _super);
	function LoadingjiemianSkin() {
		_super.call(this);
		this.skinParts = ["beijingtu","img_jindutiaoxia","img_jindutiaoshang","but_kaishiyouxi","loadingzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.loadingzu_i()];
	}
	var _proto = LoadingjiemianSkin.prototype;

	_proto.loadingzu_i = function () {
		var t = new eui.Group();
		this.loadingzu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.beijingtu_i(),this.img_jindutiaoxia_i(),this.img_jindutiaoshang_i(),this.but_kaishiyouxi_i()];
		return t;
	};
	_proto.beijingtu_i = function () {
		var t = new eui.Image();
		this.beijingtu = t;
		t.source = "img_beijingloading_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_jindutiaoxia_i = function () {
		var t = new eui.Image();
		this.img_jindutiaoxia = t;
		t.height = 23;
		t.source = "img_jindutiaoxia_png";
		t.width = 598;
		t.x = 76;
		t.y = 1098;
		return t;
	};
	_proto.img_jindutiaoshang_i = function () {
		var t = new eui.Image();
		this.img_jindutiaoshang = t;
		t.height = 23;
		t.source = "img_jindutiaoshang_png";
		t.width = 598;
		t.x = 76;
		t.y = 1098;
		return t;
	};
	_proto.but_kaishiyouxi_i = function () {
		var t = new eui.Image();
		this.but_kaishiyouxi = t;
		t.source = "but_kaishiyouxi_png";
		t.x = 243;
		t.y = 1068.5;
		return t;
	};
	return LoadingjiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Maicaiui.exml'] = window.MaicaiuiSkin = (function (_super) {
	__extends(MaicaiuiSkin, _super);
	var MaicaiuiSkin$Skin144 = 	(function (_super) {
		__extends(MaicaiuiSkin$Skin144, _super);
		function MaicaiuiSkin$Skin144() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_likai2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MaicaiuiSkin$Skin144.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_likai1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MaicaiuiSkin$Skin144;
	})(eui.Skin);

	var MaicaiuiSkin$Skin145 = 	(function (_super) {
		__extends(MaicaiuiSkin$Skin145, _super);
		function MaicaiuiSkin$Skin145() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shuaxin2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MaicaiuiSkin$Skin145.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shuaxin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MaicaiuiSkin$Skin145;
	})(eui.Skin);

	function MaicaiuiSkin() {
		_super.call(this);
		this.skinParts = ["img_maicaibj","jianjinbi","baicaitext","yutext","routext","tudoutext","dongguatext","shuaxintext","cailanzitext","keng1","keng2","keng3","keng4","keng5","keng6","keng7","keng8","keng9","keng10","keng11","keng12","keng13","keng14","keng15","caizu","but_likai","but_shuaxin","yuanliaoicon","zhutizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhutizu_i()];
	}
	var _proto = MaicaiuiSkin.prototype;

	_proto.zhutizu_i = function () {
		var t = new eui.Group();
		this.zhutizu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_maicaibj_i(),this.jianjinbi_i(),this.baicaitext_i(),this.yutext_i(),this.routext_i(),this.tudoutext_i(),this.dongguatext_i(),this.shuaxintext_i(),this.cailanzitext_i(),this.caizu_i(),this.but_likai_i(),this.but_shuaxin_i(),this.yuanliaoicon_i()];
		return t;
	};
	_proto.img_maicaibj_i = function () {
		var t = new eui.Image();
		this.img_maicaibj = t;
		t.source = "img_maicaibj_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jianjinbi_i = function () {
		var t = new eui.Label();
		this.jianjinbi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.text = "-999";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 159;
		t.y = 63;
		return t;
	};
	_proto.baicaitext_i = function () {
		var t = new eui.Label();
		this.baicaitext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.text = "+999";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 159;
		t.y = 115;
		return t;
	};
	_proto.yutext_i = function () {
		var t = new eui.Label();
		this.yutext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.text = "+999";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 296;
		t.y = 63;
		return t;
	};
	_proto.routext_i = function () {
		var t = new eui.Label();
		this.routext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.text = "+999";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 438;
		t.y = 63;
		return t;
	};
	_proto.tudoutext_i = function () {
		var t = new eui.Label();
		this.tudoutext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.text = "+999";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 575;
		t.y = 63;
		return t;
	};
	_proto.dongguatext_i = function () {
		var t = new eui.Label();
		this.dongguatext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.text = "+999";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 577;
		t.y = 114;
		return t;
	};
	_proto.shuaxintext_i = function () {
		var t = new eui.Label();
		this.shuaxintext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.text = "+999";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 438;
		t.y = 114;
		return t;
	};
	_proto.cailanzitext_i = function () {
		var t = new eui.Label();
		this.cailanzitext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 20;
		t.stroke = 2;
		t.text = "+999";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 296;
		t.y = 115;
		return t;
	};
	_proto.caizu_i = function () {
		var t = new eui.Group();
		this.caizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1014;
		t.width = 621;
		t.x = 66;
		t.y = 223;
		t.elementsContent = [this.keng1_i(),this.keng2_i(),this.keng3_i(),this.keng4_i(),this.keng5_i(),this.keng6_i(),this.keng7_i(),this.keng8_i(),this.keng9_i(),this.keng10_i(),this.keng11_i(),this.keng12_i(),this.keng13_i(),this.keng14_i(),this.keng15_i()];
		return t;
	};
	_proto.keng1_i = function () {
		var t = new eui.Image();
		this.keng1 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -216;
		t.verticalCenter = -413;
		return t;
	};
	_proto.keng2_i = function () {
		var t = new eui.Image();
		this.keng2 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -4.5;
		t.verticalCenter = -413;
		return t;
	};
	_proto.keng3_i = function () {
		var t = new eui.Image();
		this.keng3 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 206.5;
		t.verticalCenter = -413;
		return t;
	};
	_proto.keng4_i = function () {
		var t = new eui.Image();
		this.keng4 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -214.5;
		t.verticalCenter = -201;
		return t;
	};
	_proto.keng5_i = function () {
		var t = new eui.Image();
		this.keng5 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -3.5;
		t.verticalCenter = -201;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.keng6_i = function () {
		var t = new eui.Image();
		this.keng6 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 207.5;
		t.verticalCenter = -201;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.keng7_i = function () {
		var t = new eui.Image();
		this.keng7 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -216.5;
		t.verticalCenter = 5;
		return t;
	};
	_proto.keng8_i = function () {
		var t = new eui.Image();
		this.keng8 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -5.5;
		t.verticalCenter = 5;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.keng9_i = function () {
		var t = new eui.Image();
		this.keng9 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 205.5;
		t.verticalCenter = 5;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.keng10_i = function () {
		var t = new eui.Image();
		this.keng10 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -215.5;
		t.verticalCenter = 217;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.keng11_i = function () {
		var t = new eui.Image();
		this.keng11 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -4.5;
		t.verticalCenter = 217;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.keng12_i = function () {
		var t = new eui.Image();
		this.keng12 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 206.5;
		t.verticalCenter = 217;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.keng13_i = function () {
		var t = new eui.Image();
		this.keng13 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -212.5;
		t.verticalCenter = 423;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.keng14_i = function () {
		var t = new eui.Image();
		this.keng14 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = -1.5;
		t.verticalCenter = 423;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.keng15_i = function () {
		var t = new eui.Image();
		this.keng15 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 209.5;
		t.verticalCenter = 423;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.but_likai_i = function () {
		var t = new eui.Button();
		this.but_likai = t;
		t.enabled = true;
		t.label = "";
		t.x = 14;
		t.y = 1202;
		t.skinName = MaicaiuiSkin$Skin144;
		return t;
	};
	_proto.but_shuaxin_i = function () {
		var t = new eui.Button();
		this.but_shuaxin = t;
		t.enabled = true;
		t.label = "";
		t.x = 611;
		t.y = 1202;
		t.skinName = MaicaiuiSkin$Skin145;
		return t;
	};
	_proto.yuanliaoicon_i = function () {
		var t = new eui.Image();
		this.yuanliaoicon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "img_shicai_png";
		t.width = 60;
		t.x = 100;
		t.y = 49.5;
		return t;
	};
	return MaicaiuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Motuoche.exml'] = window.MotuocheSkin = (function (_super) {
	__extends(MotuocheSkin, _super);
	function MotuocheSkin() {
		_super.call(this);
		this.skinParts = ["img_waimaiyuan"];
		
		this.height = 344;
		this.width = 424;
		this.elementsContent = [this.img_waimaiyuan_i()];
	}
	var _proto = MotuocheSkin.prototype;

	_proto.img_waimaiyuan_i = function () {
		var t = new eui.Image();
		this.img_waimaiyuan = t;
		t.source = "img_waimaiyuan_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MotuocheSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Npcduihuaui.exml'] = window.NpcduihuauiSkin = (function (_super) {
	__extends(NpcduihuauiSkin, _super);
	var NpcduihuauiSkin$Skin146 = 	(function (_super) {
		__extends(NpcduihuauiSkin$Skin146, _super);
		function NpcduihuauiSkin$Skin146() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_xuanxiang2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_xuanxiang2_png")
					])
			];
		}
		var _proto = NpcduihuauiSkin$Skin146.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_xuanxiang1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NpcduihuauiSkin$Skin146;
	})(eui.Skin);

	var NpcduihuauiSkin$Skin147 = 	(function (_super) {
		__extends(NpcduihuauiSkin$Skin147, _super);
		function NpcduihuauiSkin$Skin147() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_xuanxiang2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_xuanxiang2_png")
					])
			];
		}
		var _proto = NpcduihuauiSkin$Skin147.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_xuanxiang1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NpcduihuauiSkin$Skin147;
	})(eui.Skin);

	var NpcduihuauiSkin$Skin148 = 	(function (_super) {
		__extends(NpcduihuauiSkin$Skin148, _super);
		function NpcduihuauiSkin$Skin148() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_xuanxiang2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_xuanxiang2_png")
					])
			];
		}
		var _proto = NpcduihuauiSkin$Skin148.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_xuanxiang1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NpcduihuauiSkin$Skin148;
	})(eui.Skin);

	function NpcduihuauiSkin() {
		_super.call(this);
		this.skinParts = ["img_npcduihuakuang","npctouxiang","npcname","shuohuaren","shuohuaneirong","guanbiduihua","huida1","huida2","dianjijixu","npcduihuazu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.npcduihuazu_i()];
	}
	var _proto = NpcduihuauiSkin.prototype;

	_proto.npcduihuazu_i = function () {
		var t = new eui.Group();
		this.npcduihuazu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_npcduihuakuang_i(),this.npctouxiang_i(),this.npcname_i(),this.shuohuaren_i(),this.shuohuaneirong_i(),this.guanbiduihua_i(),this.huida1_i(),this.huida2_i(),this.dianjijixu_i()];
		return t;
	};
	_proto.img_npcduihuakuang_i = function () {
		var t = new eui.Image();
		this.img_npcduihuakuang = t;
		t.source = "img_npcduihuakuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.npctouxiang_i = function () {
		var t = new eui.Image();
		this.npctouxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "yg1001_png";
		t.width = 100;
		t.x = 27;
		t.y = 837;
		return t;
	};
	_proto.npcname_i = function () {
		var t = new eui.Label();
		this.npcname = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 33;
		t.size = 24;
		t.stroke = 2;
		t.text = "张小可";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 194;
		t.x = 174;
		t.y = 857;
		return t;
	};
	_proto.shuohuaren_i = function () {
		var t = new eui.Label();
		this.shuohuaren = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 41;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x3d3425;
		t.text = "张小可:";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 344;
		t.x = 150;
		t.y = 937;
		return t;
	};
	_proto.shuohuaneirong_i = function () {
		var t = new eui.Label();
		this.shuohuaneirong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 140;
		t.size = 20;
		t.stroke = 1.4;
		t.strokeColor = 0x3D3425;
		t.text = "这是说的话这是说的话这是说这是说的话这是说的话这是说的话这是说的话这是说的话这是说的话这是说的话这是说的话的话这是说的话这是说的话这是说的话这是说的话这是说的话这是说的话";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.width = 643;
		t.x = 64;
		t.y = 989;
		return t;
	};
	_proto.guanbiduihua_i = function () {
		var t = new eui.Button();
		this.guanbiduihua = t;
		t.enabled = true;
		t.label = "关闭";
		t.x = 516;
		t.y = 621.5;
		t.skinName = NpcduihuauiSkin$Skin146;
		return t;
	};
	_proto.huida1_i = function () {
		var t = new eui.Button();
		this.huida1 = t;
		t.enabled = true;
		t.label = "回答一";
		t.x = 516;
		t.y = 726;
		t.skinName = NpcduihuauiSkin$Skin147;
		return t;
	};
	_proto.huida2_i = function () {
		var t = new eui.Button();
		this.huida2 = t;
		t.enabled = true;
		t.label = "回答二";
		t.x = 516;
		t.y = 828;
		t.skinName = NpcduihuauiSkin$Skin148;
		return t;
	};
	_proto.dianjijixu_i = function () {
		var t = new eui.Image();
		this.dianjijixu = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 238;
		t.touchEnabled = true;
		t.width = 713;
		t.x = 11.5;
		t.y = 937;
		return t;
	};
	return NpcduihuauiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Paihangbangjiemian.exml'] = window.PaihangbangjiemianSkin = (function (_super) {
	__extends(PaihangbangjiemianSkin, _super);
	var PaihangbangjiemianSkin$Skin149 = 	(function (_super) {
		__extends(PaihangbangjiemianSkin$Skin149, _super);
		function PaihangbangjiemianSkin$Skin149() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shijie2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shijie2_png")
					])
			];
		}
		var _proto = PaihangbangjiemianSkin$Skin149.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shijie1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PaihangbangjiemianSkin$Skin149;
	})(eui.Skin);

	var PaihangbangjiemianSkin$Skin150 = 	(function (_super) {
		__extends(PaihangbangjiemianSkin$Skin150, _super);
		function PaihangbangjiemianSkin$Skin150() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_haoyou2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_haoyou2_png")
					])
			];
		}
		var _proto = PaihangbangjiemianSkin$Skin150.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_haoyou1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PaihangbangjiemianSkin$Skin150;
	})(eui.Skin);

	var PaihangbangjiemianSkin$Skin151 = 	(function (_super) {
		__extends(PaihangbangjiemianSkin$Skin151, _super);
		function PaihangbangjiemianSkin$Skin151() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shangyiye1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shangyiye1_png")
					])
			];
		}
		var _proto = PaihangbangjiemianSkin$Skin151.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shangyiye1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PaihangbangjiemianSkin$Skin151;
	})(eui.Skin);

	var PaihangbangjiemianSkin$Skin152 = 	(function (_super) {
		__extends(PaihangbangjiemianSkin$Skin152, _super);
		function PaihangbangjiemianSkin$Skin152() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shangyiye_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shangyiye_png")
					])
			];
		}
		var _proto = PaihangbangjiemianSkin$Skin152.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shangyiye_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PaihangbangjiemianSkin$Skin152;
	})(eui.Skin);

	function PaihangbangjiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_paihangbg","biaotitupian","but_shijie","but_haoyou","but_shangyiye","but_xiayiye","img_mingciditu","nicheng","fenshu","touxiang","xiangkuang","paiming","xiaoxizu","img_mingciditu0","nicheng0","fenshu0","touxiang0","xiangkuang0","paiming0","xiaoxizu0","img_mingciditu1","nicheng1","fenshu1","touxiang1","xiangkuang1","paiming1","xiaoxizu1","img_mingciditu2","nicheng2","fenshu2","touxiang2","xiangkuang2","paiming2","xiaoxizu2","paihangbangzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.paihangbangzu_i()];
	}
	var _proto = PaihangbangjiemianSkin.prototype;

	_proto.paihangbangzu_i = function () {
		var t = new eui.Group();
		this.paihangbangzu = t;
		t.bottom = 0;
		t.height = 1196;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this.img_paihangbg_i(),this.biaotitupian_i(),this.but_shijie_i(),this.but_haoyou_i(),this.but_shangyiye_i(),this.but_xiayiye_i(),this.xiaoxizu_i(),this.xiaoxizu0_i(),this.xiaoxizu1_i(),this.xiaoxizu2_i()];
		return t;
	};
	_proto.img_paihangbg_i = function () {
		var t = new eui.Image();
		this.img_paihangbg = t;
		t.source = "img_paihangbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.biaotitupian_i = function () {
		var t = new eui.Image();
		this.biaotitupian = t;
		t.source = "img_biaotishijie_png";
		t.x = 228.5;
		t.y = 152;
		return t;
	};
	_proto.but_shijie_i = function () {
		var t = new eui.Button();
		this.but_shijie = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 306;
		t.label = "";
		t.width = 64;
		t.x = 8;
		t.y = 435;
		t.skinName = PaihangbangjiemianSkin$Skin149;
		return t;
	};
	_proto.but_haoyou_i = function () {
		var t = new eui.Button();
		this.but_haoyou = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 306;
		t.label = "";
		t.width = 64;
		t.x = 670;
		t.y = 435;
		t.skinName = PaihangbangjiemianSkin$Skin150;
		return t;
	};
	_proto.but_shangyiye_i = function () {
		var t = new eui.Button();
		this.but_shangyiye = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 74;
		t.label = "";
		t.width = 200;
		t.x = 128.5;
		t.y = 823;
		t.skinName = PaihangbangjiemianSkin$Skin151;
		return t;
	};
	_proto.but_xiayiye_i = function () {
		var t = new eui.Button();
		this.but_xiayiye = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 74;
		t.label = "";
		t.width = 200;
		t.x = 397.5;
		t.y = 823;
		t.skinName = PaihangbangjiemianSkin$Skin152;
		return t;
	};
	_proto.xiaoxizu_i = function () {
		var t = new eui.Group();
		this.xiaoxizu = t;
		t.x = 122.5;
		t.y = 284;
		t.elementsContent = [this.img_mingciditu_i(),this.nicheng_i(),this.fenshu_i(),this.touxiang_i(),this.xiangkuang_i(),this.paiming_i()];
		return t;
	};
	_proto.img_mingciditu_i = function () {
		var t = new eui.Image();
		this.img_mingciditu = t;
		t.source = "img_diyiming_png";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto.nicheng_i = function () {
		var t = new eui.Label();
		this.nicheng = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0x4b64f4;
		t.text = "昵称七八个自";
		t.textAlign = "center";
		t.textColor = 0x8ff709;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 275.5;
		t.y = 0;
		return t;
	};
	_proto.fenshu_i = function () {
		var t = new eui.Label();
		this.fenshu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0x624FF7;
		t.text = "888888";
		t.textAlign = "center";
		t.textColor = 0x8ff709;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 275.5;
		t.y = 66.5;
		return t;
	};
	_proto.touxiang_i = function () {
		var t = new eui.Group();
		this.touxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77;
		t.width = 81;
		t.x = 164.5;
		t.y = 13;
		return t;
	};
	_proto.xiangkuang_i = function () {
		var t = new eui.Image();
		this.xiangkuang = t;
		t.source = "img_shangxiangkuang_png";
		t.x = 144;
		t.y = -4;
		return t;
	};
	_proto.paiming_i = function () {
		var t = new eui.Label();
		this.paiming = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 24;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0x3ed608;
		t.verticalAlign = "middle";
		t.width = 32;
		t.x = 61;
		t.y = 42;
		return t;
	};
	_proto.xiaoxizu0_i = function () {
		var t = new eui.Group();
		this.xiaoxizu0 = t;
		t.x = 122.5;
		t.y = 416;
		t.elementsContent = [this.img_mingciditu0_i(),this.nicheng0_i(),this.fenshu0_i(),this.touxiang0_i(),this.xiangkuang0_i(),this.paiming0_i()];
		return t;
	};
	_proto.img_mingciditu0_i = function () {
		var t = new eui.Image();
		this.img_mingciditu0 = t;
		t.source = "img_diyiming_png";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto.nicheng0_i = function () {
		var t = new eui.Label();
		this.nicheng0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0x4B64F4;
		t.text = "昵称七八个自";
		t.textAlign = "center";
		t.textColor = 0x8FF709;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 275.5;
		t.y = 0;
		return t;
	};
	_proto.fenshu0_i = function () {
		var t = new eui.Label();
		this.fenshu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0x624FF7;
		t.text = "888888";
		t.textAlign = "center";
		t.textColor = 0x8FF709;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 275.5;
		t.y = 66.5;
		return t;
	};
	_proto.touxiang0_i = function () {
		var t = new eui.Group();
		this.touxiang0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.width = 89;
		t.x = 160.5;
		t.y = 14;
		return t;
	};
	_proto.xiangkuang0_i = function () {
		var t = new eui.Image();
		this.xiangkuang0 = t;
		t.source = "img_shangxiangkuang_png";
		t.x = 144;
		t.y = -4;
		return t;
	};
	_proto.paiming0_i = function () {
		var t = new eui.Label();
		this.paiming0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0x3ED608;
		t.verticalAlign = "middle";
		t.width = 32;
		t.x = 59;
		t.y = 42.5;
		return t;
	};
	_proto.xiaoxizu1_i = function () {
		var t = new eui.Group();
		this.xiaoxizu1 = t;
		t.x = 122.5;
		t.y = 548;
		t.elementsContent = [this.img_mingciditu1_i(),this.nicheng1_i(),this.fenshu1_i(),this.touxiang1_i(),this.xiangkuang1_i(),this.paiming1_i()];
		return t;
	};
	_proto.img_mingciditu1_i = function () {
		var t = new eui.Image();
		this.img_mingciditu1 = t;
		t.source = "img_diyiming_png";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto.nicheng1_i = function () {
		var t = new eui.Label();
		this.nicheng1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0x4B64F4;
		t.text = "昵称七八个自";
		t.textAlign = "center";
		t.textColor = 0x8FF709;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 275.5;
		t.y = 0;
		return t;
	};
	_proto.fenshu1_i = function () {
		var t = new eui.Label();
		this.fenshu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0x624FF7;
		t.text = "888888";
		t.textAlign = "center";
		t.textColor = 0x8FF709;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 275.5;
		t.y = 66.5;
		return t;
	};
	_proto.touxiang1_i = function () {
		var t = new eui.Group();
		this.touxiang1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.width = 89;
		t.x = 160.5;
		t.y = 15;
		return t;
	};
	_proto.xiangkuang1_i = function () {
		var t = new eui.Image();
		this.xiangkuang1 = t;
		t.source = "img_shangxiangkuang_png";
		t.x = 144;
		t.y = -4;
		return t;
	};
	_proto.paiming1_i = function () {
		var t = new eui.Label();
		this.paiming1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0x3ED608;
		t.verticalAlign = "middle";
		t.width = 32;
		t.x = 61;
		t.y = 42;
		return t;
	};
	_proto.xiaoxizu2_i = function () {
		var t = new eui.Group();
		this.xiaoxizu2 = t;
		t.x = 122.5;
		t.y = 674;
		t.elementsContent = [this.img_mingciditu2_i(),this.nicheng2_i(),this.fenshu2_i(),this.touxiang2_i(),this.xiangkuang2_i(),this.paiming2_i()];
		return t;
	};
	_proto.img_mingciditu2_i = function () {
		var t = new eui.Image();
		this.img_mingciditu2 = t;
		t.source = "img_diyiming_png";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto.nicheng2_i = function () {
		var t = new eui.Label();
		this.nicheng2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0x4B64F4;
		t.text = "昵称七八个自";
		t.textAlign = "center";
		t.textColor = 0x8FF709;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 275.5;
		t.y = 0;
		return t;
	};
	_proto.fenshu2_i = function () {
		var t = new eui.Label();
		this.fenshu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0x624FF7;
		t.text = "888888";
		t.textAlign = "center";
		t.textColor = 0x8FF709;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 275.5;
		t.y = 66.5;
		return t;
	};
	_proto.touxiang2_i = function () {
		var t = new eui.Group();
		this.touxiang2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.width = 86;
		t.x = 162.5;
		t.y = 18;
		return t;
	};
	_proto.xiangkuang2_i = function () {
		var t = new eui.Image();
		this.xiangkuang2 = t;
		t.source = "img_shangxiangkuang_png";
		t.x = 144;
		t.y = -4;
		return t;
	};
	_proto.paiming2_i = function () {
		var t = new eui.Label();
		this.paiming2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0x3ED608;
		t.verticalAlign = "middle";
		t.width = 32;
		t.x = 60;
		t.y = 42;
		return t;
	};
	return PaihangbangjiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Paimingbiangengshang.exml'] = window.PaimingbiangengshangSkin = (function (_super) {
	__extends(PaimingbiangengshangSkin, _super);
	function PaimingbiangengshangSkin() {
		_super.call(this);
		this.skinParts = ["img_shangdikuang","xiangpianzu","xiangkuang","img_shangjiantou","img_paimingshangsheng","paiming","xingfuzhi","img_xingfu","paimingshangshengzu","img_xiadikuang0","xiangpianzu1","xiangkuang1","img_shangjiantou1","img_paimingshangsheng1","paiming1","xingfuzhi1","img_xingfu1","paimingshangshengzu0","paiminzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.paiminzu_i()];
	}
	var _proto = PaimingbiangengshangSkin.prototype;

	_proto.paiminzu_i = function () {
		var t = new eui.Group();
		this.paiminzu = t;
		t.height = 425;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 538;
		t.elementsContent = [this.paimingshangshengzu_i(),this.paimingshangshengzu0_i()];
		return t;
	};
	_proto.paimingshangshengzu_i = function () {
		var t = new eui.Group();
		this.paimingshangshengzu = t;
		t.x = 0;
		t.y = 233.5;
		t.elementsContent = [this.img_shangdikuang_i(),this.xiangpianzu_i(),this.xiangkuang_i(),this.img_shangjiantou_i(),this.img_paimingshangsheng_i(),this.paiming_i(),this.xingfuzhi_i(),this.img_xingfu_i()];
		return t;
	};
	_proto.img_shangdikuang_i = function () {
		var t = new eui.Image();
		this.img_shangdikuang = t;
		t.source = "img_shangdikuang_png";
		t.x = 0;
		t.y = 49.5;
		return t;
	};
	_proto.xiangpianzu_i = function () {
		var t = new eui.Group();
		this.xiangpianzu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.width = 84;
		t.x = 29.5;
		t.y = 74;
		return t;
	};
	_proto.xiangkuang_i = function () {
		var t = new eui.Image();
		this.xiangkuang = t;
		t.source = "img_shangxiangkuang_png";
		t.x = 10.5;
		t.y = 59;
		return t;
	};
	_proto.img_shangjiantou_i = function () {
		var t = new eui.Image();
		this.img_shangjiantou = t;
		t.source = "img_shangjiantou_png";
		t.x = 334.5;
		t.y = 26;
		return t;
	};
	_proto.img_paimingshangsheng_i = function () {
		var t = new eui.Image();
		this.img_paimingshangsheng = t;
		t.source = "img_paimingshangsheng_png";
		t.x = 126.5;
		t.y = 0;
		return t;
	};
	_proto.paiming_i = function () {
		var t = new eui.Label();
		this.paiming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xef0b1f;
		t.text = "当前排名：8888888";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 213;
		t.x = 143.5;
		t.y = 85;
		return t;
	};
	_proto.xingfuzhi_i = function () {
		var t = new eui.Label();
		this.xingfuzhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xEF0B1F;
		t.text = "8888";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 175;
		t.x = 178.5;
		t.y = 129;
		return t;
	};
	_proto.img_xingfu_i = function () {
		var t = new eui.Image();
		this.img_xingfu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.source = "img_xingfu_png";
		t.width = 38;
		t.x = 140.5;
		t.y = 126;
		return t;
	};
	_proto.paimingshangshengzu0_i = function () {
		var t = new eui.Group();
		this.paimingshangshengzu0 = t;
		t.x = 100;
		t.y = 0;
		t.elementsContent = [this.img_xiadikuang0_i(),this.xiangpianzu1_i(),this.xiangkuang1_i(),this.img_shangjiantou1_i(),this.img_paimingshangsheng1_i(),this.paiming1_i(),this.xingfuzhi1_i(),this.img_xingfu1_i()];
		return t;
	};
	_proto.img_xiadikuang0_i = function () {
		var t = new eui.Image();
		this.img_xiadikuang0 = t;
		t.source = "img_xiadikuang_png";
		t.x = 80;
		t.y = 49.5;
		return t;
	};
	_proto.xiangpianzu1_i = function () {
		var t = new eui.Group();
		this.xiangpianzu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.width = 84;
		t.x = 337.5;
		t.y = 66;
		return t;
	};
	_proto.xiangkuang1_i = function () {
		var t = new eui.Image();
		this.xiangkuang1 = t;
		t.source = "img_xiamianxiangkuang_png";
		t.x = 317;
		t.y = 49.5;
		return t;
	};
	_proto.img_shangjiantou1_i = function () {
		var t = new eui.Image();
		this.img_shangjiantou1 = t;
		t.source = "img_xiajiantou_png";
		t.x = 33.5;
		t.y = 106;
		return t;
	};
	_proto.img_paimingshangsheng1_i = function () {
		var t = new eui.Image();
		this.img_paimingshangsheng1 = t;
		t.source = "img_paimingxiajiang_png";
		t.x = 101;
		t.y = 165;
		return t;
	};
	_proto.paiming1_i = function () {
		var t = new eui.Label();
		this.paiming1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4EEF07;
		t.text = "当前排名：8888888";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 213;
		t.x = 95.5;
		t.y = 76;
		return t;
	};
	_proto.xingfuzhi1_i = function () {
		var t = new eui.Label();
		this.xingfuzhi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x8CF909;
		t.text = "8888";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 175;
		t.x = 134.5;
		t.y = 119;
		return t;
	};
	_proto.img_xingfu1_i = function () {
		var t = new eui.Image();
		this.img_xingfu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.source = "img_xingfu_png";
		t.width = 38;
		t.x = 93.5;
		t.y = 116;
		return t;
	};
	return PaimingbiangengshangSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Paimingbiangengxia.exml'] = window.PaimingbiangengxiaSkin = (function (_super) {
	__extends(PaimingbiangengxiaSkin, _super);
	function PaimingbiangengxiaSkin() {
		_super.call(this);
		this.skinParts = ["img_xiadikuang","xiangpianzu0","xiangkuang0","img_shangjiantou0","img_paimingshangsheng0","paiming0","xingfuzhi0","img_xingfu0","paimingshangshengzu"];
		
		this.height = 226;
		this.width = 440;
		this.elementsContent = [this.paimingshangshengzu_i()];
	}
	var _proto = PaimingbiangengxiaSkin.prototype;

	_proto.paimingshangshengzu_i = function () {
		var t = new eui.Group();
		this.paimingshangshengzu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_xiadikuang_i(),this.xiangpianzu0_i(),this.xiangkuang0_i(),this.img_shangjiantou0_i(),this.img_paimingshangsheng0_i(),this.paiming0_i(),this.xingfuzhi0_i(),this.img_xingfu0_i()];
		return t;
	};
	_proto.img_xiadikuang_i = function () {
		var t = new eui.Image();
		this.img_xiadikuang = t;
		t.source = "img_xiadikuang_png";
		t.x = 80;
		t.y = 49.5;
		return t;
	};
	_proto.xiangpianzu0_i = function () {
		var t = new eui.Group();
		this.xiangpianzu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.width = 84;
		t.x = 337.5;
		t.y = 66;
		return t;
	};
	_proto.xiangkuang0_i = function () {
		var t = new eui.Image();
		this.xiangkuang0 = t;
		t.source = "img_xiamianxiangkuang_png";
		t.x = 317;
		t.y = 49.5;
		return t;
	};
	_proto.img_shangjiantou0_i = function () {
		var t = new eui.Image();
		this.img_shangjiantou0 = t;
		t.source = "img_xiajiantou_png";
		t.x = 33.5;
		t.y = 106;
		return t;
	};
	_proto.img_paimingshangsheng0_i = function () {
		var t = new eui.Image();
		this.img_paimingshangsheng0 = t;
		t.source = "img_paimingxiajiang_png";
		t.x = 101;
		t.y = 165;
		return t;
	};
	_proto.paiming0_i = function () {
		var t = new eui.Label();
		this.paiming0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x4eef07;
		t.text = "当前排名：8888888";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 213;
		t.x = 95.5;
		t.y = 76;
		return t;
	};
	_proto.xingfuzhi0_i = function () {
		var t = new eui.Label();
		this.xingfuzhi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x8cf909;
		t.text = "8888";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 175;
		t.x = 134.5;
		t.y = 119;
		return t;
	};
	_proto.img_xingfu0_i = function () {
		var t = new eui.Image();
		this.img_xingfu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.source = "img_xingfu_png";
		t.width = 38;
		t.x = 93.5;
		t.y = 116;
		return t;
	};
	return PaimingbiangengxiaSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Paomadenggonggao.exml'] = window.PaomadenggonggaoSkin = (function (_super) {
	__extends(PaomadenggonggaoSkin, _super);
	function PaomadenggonggaoSkin() {
		_super.call(this);
		this.skinParts = ["img_paomadeng","wenzineirong","paomazu","paomakongjian","paomadengzu"];
		
		this.height = 71;
		this.width = 750;
		this.elementsContent = [this.paomadengzu_i()];
	}
	var _proto = PaomadenggonggaoSkin.prototype;

	_proto.paomadengzu_i = function () {
		var t = new eui.Group();
		this.paomadengzu = t;
		t.verticalCenter = -1;
		t.x = 105.5;
		t.elementsContent = [this.img_paomadeng_i(),this.paomakongjian_i()];
		return t;
	};
	_proto.img_paomadeng_i = function () {
		var t = new eui.Image();
		this.img_paomadeng = t;
		t.source = "img_paomadeng_png";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.paomakongjian_i = function () {
		var t = new eui.Scroller();
		this.paomakongjian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = false;
		t.height = 62;
		t.width = 470;
		t.x = 63.5;
		t.y = 0;
		t.viewport = this.paomazu_i();
		return t;
	};
	_proto.paomazu_i = function () {
		var t = new eui.Group();
		this.paomazu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.width = 580;
		t.x = 0;
		t.y = 1;
		t.elementsContent = [this.wenzineirong_i()];
		return t;
	};
	_proto.wenzineirong_i = function () {
		var t = new eui.Label();
		this.wenzineirong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.text = "这是提条跑马灯公告这是提条跑马灯公告这是提条这是提条跑马灯公告这是提条跑马灯公告这是提条跑马灯公告这是提条跑马灯公告这是提条跑马灯公告这是提条跑马灯公告跑马灯公告这是提条跑马灯公告这是提条跑马灯公告这是提条跑马灯公告";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = -241;
		t.y = 20;
		return t;
	};
	return PaomadenggonggaoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Pengrenfankuiui.exml'] = window.PengrenfankuiuiSkin = (function (_super) {
	__extends(PengrenfankuiuiSkin, _super);
	var PengrenfankuiuiSkin$Skin153 = 	(function (_super) {
		__extends(PengrenfankuiuiSkin$Skin153, _super);
		function PengrenfankuiuiSkin$Skin153() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_caipuqueding2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_caipuqueding2_png")
					])
			];
		}
		var _proto = PengrenfankuiuiSkin$Skin153.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_caipuqueding1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PengrenfankuiuiSkin$Skin153;
	})(eui.Skin);

	function PengrenfankuiuiSkin() {
		_super.call(this);
		this.skinParts = ["img_huodebeijing0","jiangliicon0","jianglishuliang0","qudinganniu0","img_jianglibiaoti0","img_jindutiaobeijing","img_jindutiaogundong","levelwenzi","huodejingyanwenzi","dengjitishi","fankuizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.fankuizu_i()];
	}
	var _proto = PengrenfankuiuiSkin.prototype;

	_proto.fankuizu_i = function () {
		var t = new eui.Group();
		this.fankuizu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_huodebeijing0_i(),this.jiangliicon0_i(),this.jianglishuliang0_i(),this.qudinganniu0_i(),this.img_jianglibiaoti0_i(),this.img_jindutiaobeijing_i(),this.img_jindutiaogundong_i(),this.levelwenzi_i(),this.huodejingyanwenzi_i(),this.dengjitishi_i()];
		return t;
	};
	_proto.img_huodebeijing0_i = function () {
		var t = new eui.Image();
		this.img_huodebeijing0 = t;
		t.source = "img_huodebeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jiangliicon0_i = function () {
		var t = new eui.Image();
		this.jiangliicon0 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 171;
		t.source = "1001_png";
		t.width = 221;
		t.x = 264;
		t.y = 482.5;
		return t;
	};
	_proto.jianglishuliang0_i = function () {
		var t = new eui.Label();
		this.jianglishuliang0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 60;
		t.size = 24;
		t.stroke = 2;
		t.text = "X1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 679;
		t.x = 36;
		t.y = 707;
		return t;
	};
	_proto.qudinganniu0_i = function () {
		var t = new eui.Button();
		this.qudinganniu0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 247;
		t.y = 968;
		t.skinName = PengrenfankuiuiSkin$Skin153;
		return t;
	};
	_proto.img_jianglibiaoti0_i = function () {
		var t = new eui.Image();
		this.img_jianglibiaoti0 = t;
		t.source = "img_pengrenchenggong_png";
		t.x = 225.5;
		t.y = 212;
		return t;
	};
	_proto.img_jindutiaobeijing_i = function () {
		var t = new eui.Image();
		this.img_jindutiaobeijing = t;
		t.height = 52;
		t.source = "img_jindutiaobeijing_png";
		t.width = 250;
		t.x = 238;
		t.y = 833;
		return t;
	};
	_proto.img_jindutiaogundong_i = function () {
		var t = new eui.Image();
		this.img_jindutiaogundong = t;
		t.anchorOffsetY = 0.5;
		t.height = 26;
		t.source = "img_jindutiaogundong_png";
		t.width = 176;
		t.x = 311;
		t.y = 849.41;
		return t;
	};
	_proto.levelwenzi_i = function () {
		var t = new eui.Label();
		this.levelwenzi = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "20";
		t.textAlign = "center";
		t.width = 35;
		t.x = 253;
		t.y = 844;
		return t;
	};
	_proto.huodejingyanwenzi_i = function () {
		var t = new eui.Label();
		this.huodejingyanwenzi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.italic = true;
		t.size = 24;
		t.text = "+50";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 177;
		t.x = 509;
		t.y = 851;
		return t;
	};
	_proto.dengjitishi_i = function () {
		var t = new eui.Label();
		this.dengjitishi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 41;
		t.italic = true;
		t.size = 30;
		t.stroke = 4;
		t.strokeColor = 0xf9eded;
		t.text = "品质提升！！";
		t.textAlign = "center";
		t.textColor = 0xbf8609;
		t.verticalAlign = "middle";
		t.width = 693;
		t.x = 28;
		t.y = 792;
		return t;
	};
	return PengrenfankuiuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Pvebiaozhiui.exml'] = window.PvebiaozhiuiSkin = (function (_super) {
	__extends(PvebiaozhiuiSkin, _super);
	var PvebiaozhiuiSkin$Skin154 = 	(function (_super) {
		__extends(PvebiaozhiuiSkin$Skin154, _super);
		function PvebiaozhiuiSkin$Skin154() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_pvebiaozhi2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_pvebiaozhi2_png")
					])
			];
		}
		var _proto = PvebiaozhiuiSkin$Skin154.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_pvebiaozhi1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PvebiaozhiuiSkin$Skin154;
	})(eui.Skin);

	function PvebiaozhiuiSkin() {
		_super.call(this);
		this.skinParts = ["but_pveqipaoanniu","pveqipaozu"];
		
		this.elementsContent = [this.pveqipaozu_i()];
	}
	var _proto = PvebiaozhiuiSkin.prototype;

	_proto.pveqipaozu_i = function () {
		var t = new eui.Group();
		this.pveqipaozu = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.but_pveqipaoanniu_i()];
		return t;
	};
	_proto.but_pveqipaoanniu_i = function () {
		var t = new eui.Button();
		this.but_pveqipaoanniu = t;
		t.enabled = true;
		t.height = 84;
		t.label = "";
		t.width = 68;
		t.skinName = PvebiaozhiuiSkin$Skin154;
		return t;
	};
	return PvebiaozhiuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/QuedingptSkin.exml'] = window.QuedingptSkinSkin = (function (_super) {
	__extends(QuedingptSkinSkin, _super);
	var QuedingptSkinSkin$Skin155 = 	(function (_super) {
		__extends(QuedingptSkinSkin$Skin155, _super);
		function QuedingptSkinSkin$Skin155() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
			];
		}
		var _proto = QuedingptSkinSkin$Skin155.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_tishiqueding1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QuedingptSkinSkin$Skin155;
	})(eui.Skin);

	function QuedingptSkinSkin() {
		_super.call(this);
		this.skinParts = ["queding"];
		
		this.height = 60;
		this.width = 169;
		this.elementsContent = [this.queding_i()];
	}
	var _proto = QuedingptSkinSkin.prototype;

	_proto.queding_i = function () {
		var t = new eui.Button();
		this.queding = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = QuedingptSkinSkin$Skin155;
		return t;
	};
	return QuedingptSkinSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Shafadianshidengjiaohuui.exml'] = window.ShafadianshidengjiaohuuiSkin = (function (_super) {
	__extends(ShafadianshidengjiaohuuiSkin, _super);
	var ShafadianshidengjiaohuuiSkin$Skin156 = 	(function (_super) {
		__extends(ShafadianshidengjiaohuuiSkin$Skin156, _super);
		function ShafadianshidengjiaohuuiSkin$Skin156() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
			];
		}
		var _proto = ShafadianshidengjiaohuuiSkin$Skin156.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_tishiqueding1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShafadianshidengjiaohuuiSkin$Skin156;
	})(eui.Skin);

	var ShafadianshidengjiaohuuiSkin$Skin157 = 	(function (_super) {
		__extends(ShafadianshidengjiaohuuiSkin$Skin157, _super);
		function ShafadianshidengjiaohuuiSkin$Skin157() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_quedingzhuanfa2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_quedingzhuanfa2_png")
					])
			];
		}
		var _proto = ShafadianshidengjiaohuuiSkin$Skin157.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_quedingzhuanfa1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShafadianshidengjiaohuuiSkin$Skin157;
	})(eui.Skin);

	var ShafadianshidengjiaohuuiSkin$Skin158 = 	(function (_super) {
		__extends(ShafadianshidengjiaohuuiSkin$Skin158, _super);
		function ShafadianshidengjiaohuuiSkin$Skin158() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_quedingguanggao2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_quedingguanggao2_png")
					])
			];
		}
		var _proto = ShafadianshidengjiaohuuiSkin$Skin158.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_quedingguanggao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShafadianshidengjiaohuuiSkin$Skin158;
	})(eui.Skin);

	var ShafadianshidengjiaohuuiSkin$Skin159 = 	(function (_super) {
		__extends(ShafadianshidengjiaohuuiSkin$Skin159, _super);
		function ShafadianshidengjiaohuuiSkin$Skin159() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = ShafadianshidengjiaohuuiSkin$Skin159.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShafadianshidengjiaohuuiSkin$Skin159;
	})(eui.Skin);

	function ShafadianshidengjiaohuuiSkin() {
		_super.call(this);
		this.skinParts = ["img_tanchubeijing0","biaotiwenzi0","guanxibiaoqian0","guanxineirong0","qinhelibiaoqian0","qinghelizhi0","jiesaobiaoqian0","jiesaoneirong0","qurenanniu","qurenanniu0","qurenanniu1","guanbianniu","zhaxiangxinxi"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhaxiangxinxi_i()];
	}
	var _proto = ShafadianshidengjiaohuuiSkin.prototype;

	_proto.zhaxiangxinxi_i = function () {
		var t = new eui.Group();
		this.zhaxiangxinxi = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.img_tanchubeijing0_i(),this.biaotiwenzi0_i(),this.guanxibiaoqian0_i(),this.guanxineirong0_i(),this.qinhelibiaoqian0_i(),this.qinghelizhi0_i(),this.jiesaobiaoqian0_i(),this.jiesaoneirong0_i(),this.qurenanniu_i(),this.qurenanniu0_i(),this.qurenanniu1_i(),this.guanbianniu_i()];
		return t;
	};
	_proto.img_tanchubeijing0_i = function () {
		var t = new eui.Image();
		this.img_tanchubeijing0 = t;
		t.source = "img_tanchubeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.biaotiwenzi0_i = function () {
		var t = new eui.Label();
		this.biaotiwenzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 62;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "信息";
		t.textAlign = "center";
		t.textColor = 0xFFA005;
		t.verticalAlign = "middle";
		t.width = 520;
		t.x = 24.5;
		t.y = 10;
		return t;
	};
	_proto.guanxibiaoqian0_i = function () {
		var t = new eui.Label();
		this.guanxibiaoqian0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xACFF05;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 69;
		t.y = 105;
		return t;
	};
	_proto.guanxineirong0_i = function () {
		var t = new eui.Label();
		this.guanxineirong0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xF2EEE8;
		t.verticalAlign = "middle";
		t.width = 297;
		t.x = 209;
		t.y = 105;
		return t;
	};
	_proto.qinhelibiaoqian0_i = function () {
		var t = new eui.Label();
		this.qinhelibiaoqian0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xC2FF05;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 69;
		t.y = 173;
		return t;
	};
	_proto.qinghelizhi0_i = function () {
		var t = new eui.Label();
		this.qinghelizhi0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xEDE9E3;
		t.verticalAlign = "middle";
		t.width = 307;
		t.x = 205.5;
		t.y = 173;
		return t;
	};
	_proto.jiesaobiaoqian0_i = function () {
		var t = new eui.Label();
		this.jiesaobiaoqian0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xBCFF05;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 69;
		t.y = 242;
		return t;
	};
	_proto.jiesaoneirong0_i = function () {
		var t = new eui.Label();
		this.jiesaoneirong0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 267;
		t.lineSpacing = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x494646;
		t.text = "关系";
		t.textAlign = "left";
		t.textColor = 0xE0DAD0;
		t.verticalAlign = "top";
		t.width = 427;
		t.x = 69;
		t.y = 300;
		return t;
	};
	_proto.qurenanniu_i = function () {
		var t = new eui.Button();
		this.qurenanniu = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.enabled = true;
		t.label = "";
		t.x = 200;
		t.y = 606;
		t.skinName = ShafadianshidengjiaohuuiSkin$Skin156;
		return t;
	};
	_proto.qurenanniu0_i = function () {
		var t = new eui.Button();
		this.qurenanniu0 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.enabled = true;
		t.label = "";
		t.x = 200;
		t.y = 606;
		t.skinName = ShafadianshidengjiaohuuiSkin$Skin157;
		return t;
	};
	_proto.qurenanniu1_i = function () {
		var t = new eui.Button();
		this.qurenanniu1 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.enabled = true;
		t.label = "";
		t.x = 200;
		t.y = 606;
		t.skinName = ShafadianshidengjiaohuuiSkin$Skin158;
		return t;
	};
	_proto.guanbianniu_i = function () {
		var t = new eui.Button();
		this.guanbianniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 470.5;
		t.y = 4;
		t.skinName = ShafadianshidengjiaohuuiSkin$Skin159;
		return t;
	};
	return ShafadianshidengjiaohuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Shafajiaohuui.exml'] = window.ShafajiaohuuiSkin = (function (_super) {
	__extends(ShafajiaohuuiSkin, _super);
	var ShafajiaohuuiSkin$Skin160 = 	(function (_super) {
		__extends(ShafajiaohuuiSkin$Skin160, _super);
		function ShafajiaohuuiSkin$Skin160() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ShafajiaohuuiSkin$Skin160.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShafajiaohuuiSkin$Skin160;
	})(eui.Skin);

	var ShafajiaohuuiSkin$Skin161 = 	(function (_super) {
		__extends(ShafajiaohuuiSkin$Skin161, _super);
		function ShafajiaohuuiSkin$Skin161() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = ShafajiaohuuiSkin$Skin161.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShafajiaohuuiSkin$Skin161;
	})(eui.Skin);

	function ShafajiaohuuiSkin() {
		_super.call(this);
		this.skinParts = ["shafaguanbi","shafabeijing","shafabiaoshi","shafachakan","shafajinxiu","shafa"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.shafa_i()];
	}
	var _proto = ShafajiaohuuiSkin.prototype;

	_proto.shafa_i = function () {
		var t = new eui.Group();
		this.shafa = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.shafaguanbi_i(),this.shafabeijing_i(),this.shafabiaoshi_i(),this.shafachakan_i(),this.shafajinxiu_i()];
		return t;
	};
	_proto.shafaguanbi_i = function () {
		var t = new eui.Image();
		this.shafaguanbi = t;
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.shafabeijing_i = function () {
		var t = new eui.Image();
		this.shafabeijing = t;
		t.rotation = 310;
		t.source = "img_jiajuchufabeijing_png";
		t.x = 65.73;
		t.y = 941.45;
		return t;
	};
	_proto.shafabiaoshi_i = function () {
		var t = new eui.Image();
		this.shafabiaoshi = t;
		t.rotation = 334.35;
		t.source = "img_shafabiaoshi_png";
		t.x = 88.22;
		t.y = 1007.92;
		return t;
	};
	_proto.shafachakan_i = function () {
		var t = new eui.Button();
		this.shafachakan = t;
		t.enabled = true;
		t.label = "查看";
		t.x = 202.58;
		t.y = 875.08;
		t.skinName = ShafajiaohuuiSkin$Skin160;
		return t;
	};
	_proto.shafajinxiu_i = function () {
		var t = new eui.Button();
		this.shafajinxiu = t;
		t.enabled = true;
		t.label = "休息";
		t.x = 312.65;
		t.y = 977.8;
		t.skinName = ShafajiaohuuiSkin$Skin161;
		return t;
	};
	return ShafajiaohuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Sunnvjiaohuui.exml'] = window.SunnvjiaohuuiSkin = (function (_super) {
	__extends(SunnvjiaohuuiSkin, _super);
	var SunnvjiaohuuiSkin$Skin162 = 	(function (_super) {
		__extends(SunnvjiaohuuiSkin$Skin162, _super);
		function SunnvjiaohuuiSkin$Skin162() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = SunnvjiaohuuiSkin$Skin162.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SunnvjiaohuuiSkin$Skin162;
	})(eui.Skin);

	var SunnvjiaohuuiSkin$Skin163 = 	(function (_super) {
		__extends(SunnvjiaohuuiSkin$Skin163, _super);
		function SunnvjiaohuuiSkin$Skin163() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = SunnvjiaohuuiSkin$Skin163.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SunnvjiaohuuiSkin$Skin163;
	})(eui.Skin);

	var SunnvjiaohuuiSkin$Skin164 = 	(function (_super) {
		__extends(SunnvjiaohuuiSkin$Skin164, _super);
		function SunnvjiaohuuiSkin$Skin164() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = SunnvjiaohuuiSkin$Skin164.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SunnvjiaohuuiSkin$Skin164;
	})(eui.Skin);

	function SunnvjiaohuuiSkin() {
		_super.call(this);
		this.skinParts = ["sunnvguanbi","sunnvbeijing","sunnvbiaoshi","sunnvchakan","sunnvjiaotan","sunnvjinxiu","sunnvzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.sunnvzu_i()];
	}
	var _proto = SunnvjiaohuuiSkin.prototype;

	_proto.sunnvzu_i = function () {
		var t = new eui.Group();
		this.sunnvzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.sunnvguanbi_i(),this.sunnvbeijing_i(),this.sunnvbiaoshi_i(),this.sunnvchakan_i(),this.sunnvjiaotan_i(),this.sunnvjinxiu_i()];
		return t;
	};
	_proto.sunnvguanbi_i = function () {
		var t = new eui.Image();
		this.sunnvguanbi = t;
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.sunnvbeijing_i = function () {
		var t = new eui.Image();
		this.sunnvbeijing = t;
		t.rotation = 180;
		t.source = "img_jiajuchufabeijing_png";
		t.x = 501;
		t.y = 1167;
		return t;
	};
	_proto.sunnvbiaoshi_i = function () {
		var t = new eui.Image();
		this.sunnvbiaoshi = t;
		t.source = "img_sunnvbiaoshi_png";
		t.x = 418;
		t.y = 895.5;
		return t;
	};
	_proto.sunnvchakan_i = function () {
		var t = new eui.Button();
		this.sunnvchakan = t;
		t.enabled = true;
		t.label = "查看";
		t.x = 361.5;
		t.y = 817.5;
		t.skinName = SunnvjiaohuuiSkin$Skin162;
		return t;
	};
	_proto.sunnvjiaotan_i = function () {
		var t = new eui.Button();
		this.sunnvjiaotan = t;
		t.enabled = true;
		t.label = "交谈";
		t.x = 311;
		t.y = 931.5;
		t.skinName = SunnvjiaohuuiSkin$Skin163;
		return t;
	};
	_proto.sunnvjinxiu_i = function () {
		var t = new eui.Button();
		this.sunnvjinxiu = t;
		t.enabled = true;
		t.label = "培养";
		t.x = 347.5;
		t.y = 1043;
		t.skinName = SunnvjiaohuuiSkin$Skin164;
		return t;
	};
	return SunnvjiaohuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Teshushijianjiemian.exml'] = window.TeshushijianjiemianSkin = (function (_super) {
	__extends(TeshushijianjiemianSkin, _super);
	var TeshushijianjiemianSkin$Skin165 = 	(function (_super) {
		__extends(TeshushijianjiemianSkin$Skin165, _super);
		function TeshushijianjiemianSkin$Skin165() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = TeshushijianjiemianSkin$Skin165.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeshushijianjiemianSkin$Skin165;
	})(eui.Skin);

	var TeshushijianjiemianSkin$Skin166 = 	(function (_super) {
		__extends(TeshushijianjiemianSkin$Skin166, _super);
		function TeshushijianjiemianSkin$Skin166() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_quedingzhuanfa2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_quedingzhuanfa2_png")
					])
			];
		}
		var _proto = TeshushijianjiemianSkin$Skin166.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_quedingzhuanfa1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeshushijianjiemianSkin$Skin166;
	})(eui.Skin);

	function TeshushijianjiemianSkin() {
		_super.call(this);
		this.skinParts = ["heisediban0","img_tongyongtishikuang0","tishiwenzi0","but_queding1","but_shuangbei0","biaotiwenzi","tupiantishi","tongyongtishizu0","querenkuangzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.querenkuangzu_i()];
	}
	var _proto = TeshushijianjiemianSkin.prototype;

	_proto.querenkuangzu_i = function () {
		var t = new eui.Group();
		this.querenkuangzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.heisediban0_i(),this.tongyongtishizu0_i()];
		return t;
	};
	_proto.heisediban0_i = function () {
		var t = new eui.Image();
		this.heisediban0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.tongyongtishizu0_i = function () {
		var t = new eui.Group();
		this.tongyongtishizu0 = t;
		t.x = 63.5;
		t.y = 304;
		t.elementsContent = [this.img_tongyongtishikuang0_i(),this.tishiwenzi0_i(),this.but_queding1_i(),this.but_shuangbei0_i(),this.biaotiwenzi_i(),this.tupiantishi_i()];
		return t;
	};
	_proto.img_tongyongtishikuang0_i = function () {
		var t = new eui.Image();
		this.img_tongyongtishikuang0 = t;
		t.source = "img_daitutanchukuang_png";
		t.x = 39;
		t.y = 12;
		return t;
	};
	_proto.tishiwenzi0_i = function () {
		var t = new eui.Label();
		this.tishiwenzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 172.33;
		t.lineSpacing = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x7a7171;
		t.text = "这是一个通用提示框";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.width = 311.34;
		t.x = 152.83;
		t.y = 369;
		return t;
	};
	_proto.but_queding1_i = function () {
		var t = new eui.Button();
		this.but_queding1 = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.x = 498;
		t.y = 33.17;
		t.skinName = TeshushijianjiemianSkin$Skin165;
		return t;
	};
	_proto.but_shuangbei0_i = function () {
		var t = new eui.Button();
		this.but_shuangbei0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 212.5;
		t.y = 618.5;
		t.skinName = TeshushijianjiemianSkin$Skin166;
		return t;
	};
	_proto.biaotiwenzi_i = function () {
		var t = new eui.Label();
		this.biaotiwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 61;
		t.stroke = 2;
		t.strokeColor = 0xe8dede;
		t.text = "特殊事件";
		t.textAlign = "center";
		t.textColor = 0xf26913;
		t.verticalAlign = "middle";
		t.width = 301;
		t.x = 155;
		t.y = 16;
		return t;
	};
	_proto.tupiantishi_i = function () {
		var t = new eui.Image();
		this.tupiantishi = t;
		t.height = 200;
		t.source = "img_bangong_png";
		t.width = 200;
		t.x = 197.5;
		t.y = 133;
		return t;
	};
	return TeshushijianjiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Tongyongquerenkuang.exml'] = window.TongyongquerenkuangSkin = (function (_super) {
	__extends(TongyongquerenkuangSkin, _super);
	var TongyongquerenkuangSkin$Skin167 = 	(function (_super) {
		__extends(TongyongquerenkuangSkin$Skin167, _super);
		function TongyongquerenkuangSkin$Skin167() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
			];
		}
		var _proto = TongyongquerenkuangSkin$Skin167.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_tishiqueding1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TongyongquerenkuangSkin$Skin167;
	})(eui.Skin);

	var TongyongquerenkuangSkin$Skin168 = 	(function (_super) {
		__extends(TongyongquerenkuangSkin$Skin168, _super);
		function TongyongquerenkuangSkin$Skin168() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_tishiqueding2_png")
					])
			];
		}
		var _proto = TongyongquerenkuangSkin$Skin168.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_tishiqueding1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TongyongquerenkuangSkin$Skin168;
	})(eui.Skin);

	var TongyongquerenkuangSkin$Skin169 = 	(function (_super) {
		__extends(TongyongquerenkuangSkin$Skin169, _super);
		function TongyongquerenkuangSkin$Skin169() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","img_tishifanbei2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","img_tishifanbei2_png")
					])
			];
		}
		var _proto = TongyongquerenkuangSkin$Skin169.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "img_tishifanbei1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TongyongquerenkuangSkin$Skin169;
	})(eui.Skin);

	function TongyongquerenkuangSkin() {
		_super.call(this);
		this.skinParts = ["heisediban","img_tongyongtishikuang","tishiwenzi","but_queding","but_queding0","but_shuangbei","jiangli1","jiangli2","jiangliicon1","jiangliicon2","tongyongtishizu","querenkuangzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.querenkuangzu_i()];
	}
	var _proto = TongyongquerenkuangSkin.prototype;

	_proto.querenkuangzu_i = function () {
		var t = new eui.Group();
		this.querenkuangzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.heisediban_i(),this.tongyongtishizu_i()];
		return t;
	};
	_proto.heisediban_i = function () {
		var t = new eui.Image();
		this.heisediban = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.tongyongtishizu_i = function () {
		var t = new eui.Group();
		this.tongyongtishizu = t;
		t.x = 26;
		t.y = 456;
		t.elementsContent = [this.img_tongyongtishikuang_i(),this.tishiwenzi_i(),this.but_queding_i(),this.but_queding0_i(),this.but_shuangbei_i(),this.jiangli1_i(),this.jiangli2_i(),this.jiangliicon1_i(),this.jiangliicon2_i()];
		return t;
	};
	_proto.img_tongyongtishikuang_i = function () {
		var t = new eui.Image();
		this.img_tongyongtishikuang = t;
		t.source = "img_tongyongtishikuang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tishiwenzi_i = function () {
		var t = new eui.Label();
		this.tishiwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 172.33;
		t.lineSpacing = 10;
		t.size = 24;
		t.stroke = 2;
		t.text = "这是一个通用提示框";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 588.34;
		t.x = 54.83;
		t.y = 63.17;
		return t;
	};
	_proto.but_queding_i = function () {
		var t = new eui.Button();
		this.but_queding = t;
		t.enabled = true;
		t.label = "";
		t.x = 104.5;
		t.y = 338.5;
		t.skinName = TongyongquerenkuangSkin$Skin167;
		return t;
	};
	_proto.but_queding0_i = function () {
		var t = new eui.Button();
		this.but_queding0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 264;
		t.y = 339.5;
		t.skinName = TongyongquerenkuangSkin$Skin168;
		return t;
	};
	_proto.but_shuangbei_i = function () {
		var t = new eui.Button();
		this.but_shuangbei = t;
		t.enabled = true;
		t.label = "";
		t.x = 424.5;
		t.y = 338.5;
		t.skinName = TongyongquerenkuangSkin$Skin169;
		return t;
	};
	_proto.jiangli1_i = function () {
		var t = new eui.Label();
		this.jiangli1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "x20";
		t.textAlign = "left";
		t.textColor = 0x05bf10;
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 165.5;
		t.y = 265;
		return t;
	};
	_proto.jiangli2_i = function () {
		var t = new eui.Label();
		this.jiangli2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.text = "x20";
		t.textAlign = "left";
		t.textColor = 0xf21809;
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 360.5;
		t.y = 265;
		return t;
	};
	_proto.jiangliicon1_i = function () {
		var t = new eui.Image();
		this.jiangliicon1 = t;
		t.height = 60;
		t.source = "img_qian_png";
		t.width = 60;
		t.x = 94.5;
		t.y = 245;
		return t;
	};
	_proto.jiangliicon2_i = function () {
		var t = new eui.Image();
		this.jiangliicon2 = t;
		t.height = 60;
		t.source = "img_qian_png";
		t.width = 60;
		t.x = 286;
		t.y = 245;
		return t;
	};
	return TongyongquerenkuangSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Waimaiduihuakuang.exml'] = window.WaimaiduihuakuangSkin = (function (_super) {
	__extends(WaimaiduihuakuangSkin, _super);
	function WaimaiduihuakuangSkin() {
		_super.call(this);
		this.skinParts = ["dikuangbj","shuohuatouxiang","shuohuawenzi","duihuazu"];
		
		this.height = 246;
		this.width = 500;
		this.elementsContent = [this.duihuazu_i()];
	}
	var _proto = WaimaiduihuakuangSkin.prototype;

	_proto.duihuazu_i = function () {
		var t = new eui.Group();
		this.duihuazu = t;
		t.x = 0;
		t.y = 37.5;
		t.elementsContent = [this.dikuangbj_i(),this.shuohuatouxiang_i(),this.shuohuawenzi_i()];
		return t;
	};
	_proto.dikuangbj_i = function () {
		var t = new eui.Image();
		this.dikuangbj = t;
		t.source = "img_zhengqueduihuakuang_png";
		t.x = 50;
		t.y = 50.5;
		return t;
	};
	_proto.shuohuatouxiang_i = function () {
		var t = new eui.Image();
		this.shuohuatouxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 196;
		t.source = "ygwaimai_png";
		t.width = 183;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shuohuawenzi_i = function () {
		var t = new eui.Label();
		this.shuohuawenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 72;
		t.lineSpacing = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x30a5f4;
		t.text = "不对不对，再好好看看";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 299;
		t.x = 180;
		t.y = 64.5;
		return t;
	};
	return WaimaiduihuakuangSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Waimaijiemian.exml'] = window.WaimaijiemianSkin = (function (_super) {
	__extends(WaimaijiemianSkin, _super);
	function WaimaijiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_jiemiandabeijing","img_yuanxingtaijie","img_duihuaqipao","shouhuowenzi","qipaowenzizu","img_dibutuopan","img_caipindikuang1","tupianres1","caizu1","img_caipindikuang0","tupianres0","caizu0","img_caipindikuang2","tupianres2","caizu2","img_caipindikuang3","tupianres3","caizu3","caianniuzu","dibuzu","waimaizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.waimaizu_i()];
	}
	var _proto = WaimaijiemianSkin.prototype;

	_proto.waimaizu_i = function () {
		var t = new eui.Group();
		this.waimaizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_jiemiandabeijing_i(),this.img_yuanxingtaijie_i(),this.qipaowenzizu_i(),this.dibuzu_i()];
		return t;
	};
	_proto.img_jiemiandabeijing_i = function () {
		var t = new eui.Image();
		this.img_jiemiandabeijing = t;
		t.source = "img_jiemiandabeijing1_png";
		t.x = 1.5;
		t.y = 0;
		return t;
	};
	_proto.img_yuanxingtaijie_i = function () {
		var t = new eui.Image();
		this.img_yuanxingtaijie = t;
		t.source = "img_yuanxingtaijie_png";
		t.x = 143;
		t.y = 698;
		return t;
	};
	_proto.qipaowenzizu_i = function () {
		var t = new eui.Group();
		this.qipaowenzizu = t;
		t.alpha = 1;
		t.x = 129.5;
		t.y = 212;
		t.elementsContent = [this.img_duihuaqipao_i(),this.shouhuowenzi_i()];
		return t;
	};
	_proto.img_duihuaqipao_i = function () {
		var t = new eui.Image();
		this.img_duihuaqipao = t;
		t.source = "img_duihuaqipao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shouhuowenzi_i = function () {
		var t = new eui.Label();
		this.shouhuowenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 116;
		t.lineSpacing = 10;
		t.size = 24;
		t.stroke = 6;
		t.strokeColor = 0xeadcdc;
		t.text = "     顾客订购的“黄焖鸡米饭”麻烦快点！";
		t.textAlign = "left";
		t.textColor = 0x1052ef;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 44.5;
		t.y = 44;
		return t;
	};
	_proto.dibuzu_i = function () {
		var t = new eui.Group();
		this.dibuzu = t;
		t.x = -1;
		t.y = 1124;
		t.elementsContent = [this.img_dibutuopan_i(),this.caianniuzu_i()];
		return t;
	};
	_proto.img_dibutuopan_i = function () {
		var t = new eui.Image();
		this.img_dibutuopan = t;
		t.source = "img_dibutuopan_png";
		t.x = 2.5;
		t.y = 0;
		return t;
	};
	_proto.caianniuzu_i = function () {
		var t = new eui.Group();
		this.caianniuzu = t;
		t.x = 41.5;
		t.y = 34;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.caizu1_i(),this.caizu0_i(),this.caizu2_i(),this.caizu3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 36;
		return t;
	};
	_proto.caizu1_i = function () {
		var t = new eui.Group();
		this.caizu1 = t;
		t.x = 202;
		t.y = 2;
		t.elementsContent = [this.img_caipindikuang1_i(),this.tupianres1_i()];
		return t;
	};
	_proto.img_caipindikuang1_i = function () {
		var t = new eui.Image();
		this.img_caipindikuang1 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.source = "img_caipindikuang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tupianres1_i = function () {
		var t = new eui.Image();
		this.tupianres1 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 90;
		t.source = "1001_png";
		t.width = 90;
		t.x = 26;
		t.y = 26;
		return t;
	};
	_proto.caizu0_i = function () {
		var t = new eui.Group();
		this.caizu0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_caipindikuang0_i(),this.tupianres0_i()];
		return t;
	};
	_proto.img_caipindikuang0_i = function () {
		var t = new eui.Image();
		this.img_caipindikuang0 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.source = "img_caipindikuang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tupianres0_i = function () {
		var t = new eui.Image();
		this.tupianres0 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 90;
		t.source = "1001_png";
		t.width = 90;
		t.x = 26;
		t.y = 24.5;
		return t;
	};
	_proto.caizu2_i = function () {
		var t = new eui.Group();
		this.caizu2 = t;
		t.x = 452;
		t.y = 0;
		t.elementsContent = [this.img_caipindikuang2_i(),this.tupianres2_i()];
		return t;
	};
	_proto.img_caipindikuang2_i = function () {
		var t = new eui.Image();
		this.img_caipindikuang2 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.source = "img_caipindikuang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tupianres2_i = function () {
		var t = new eui.Image();
		this.tupianres2 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 90;
		t.source = "1001_png";
		t.width = 90;
		t.x = 25.5;
		t.y = 24;
		return t;
	};
	_proto.caizu3_i = function () {
		var t = new eui.Group();
		this.caizu3 = t;
		t.x = 532;
		t.y = 2;
		t.elementsContent = [this.img_caipindikuang3_i(),this.tupianres3_i()];
		return t;
	};
	_proto.img_caipindikuang3_i = function () {
		var t = new eui.Image();
		this.img_caipindikuang3 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.source = "img_caipindikuang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tupianres3_i = function () {
		var t = new eui.Image();
		this.tupianres3 = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 90;
		t.source = "1001_png";
		t.width = 90;
		t.x = 26;
		t.y = 26;
		return t;
	};
	return WaimaijiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Waimaitishi.exml'] = window.WaimaitishiSkin = (function (_super) {
	__extends(WaimaitishiSkin, _super);
	function WaimaitishiSkin() {
		_super.call(this);
		this.skinParts = ["tupiandibu","caiicon","caiming","tanchucaizu"];
		
		this.height = 96;
		this.width = 180;
		this.elementsContent = [this.tanchucaizu_i()];
	}
	var _proto = WaimaitishiSkin.prototype;

	_proto.tanchucaizu_i = function () {
		var t = new eui.Group();
		this.tanchucaizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.tupiandibu_i(),this.caiicon_i(),this.caiming_i()];
		return t;
	};
	_proto.tupiandibu_i = function () {
		var t = new eui.Image();
		this.tupiandibu = t;
		t.source = "img_waimaitanchu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.caiicon_i = function () {
		var t = new eui.Image();
		this.caiicon = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 40;
		t.source = "";
		t.width = 40;
		t.x = 13.5;
		t.y = 39;
		return t;
	};
	_proto.caiming_i = function () {
		var t = new eui.Label();
		this.caiming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 14;
		t.stroke = 2;
		t.strokeColor = 0xefe8e8;
		t.text = "菜的名字";
		t.textAlign = "center";
		t.textColor = 0x0b42e8;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 76.5;
		t.y = 40.5;
		return t;
	};
	return WaimaitishiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Xifujiaohuui.exml'] = window.XifujiaohuuiSkin = (function (_super) {
	__extends(XifujiaohuuiSkin, _super);
	var XifujiaohuuiSkin$Skin170 = 	(function (_super) {
		__extends(XifujiaohuuiSkin$Skin170, _super);
		function XifujiaohuuiSkin$Skin170() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = XifujiaohuuiSkin$Skin170.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return XifujiaohuuiSkin$Skin170;
	})(eui.Skin);

	var XifujiaohuuiSkin$Skin171 = 	(function (_super) {
		__extends(XifujiaohuuiSkin$Skin171, _super);
		function XifujiaohuuiSkin$Skin171() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = XifujiaohuuiSkin$Skin171.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return XifujiaohuuiSkin$Skin171;
	})(eui.Skin);

	var XifujiaohuuiSkin$Skin172 = 	(function (_super) {
		__extends(XifujiaohuuiSkin$Skin172, _super);
		function XifujiaohuuiSkin$Skin172() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = XifujiaohuuiSkin$Skin172.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return XifujiaohuuiSkin$Skin172;
	})(eui.Skin);

	var XifujiaohuuiSkin$Skin173 = 	(function (_super) {
		__extends(XifujiaohuuiSkin$Skin173, _super);
		function XifujiaohuuiSkin$Skin173() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_chufaanniu2_png")
					])
			];
		}
		var _proto = XifujiaohuuiSkin$Skin173.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_chufaanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return XifujiaohuuiSkin$Skin173;
	})(eui.Skin);

	function XifujiaohuuiSkin() {
		_super.call(this);
		this.skinParts = ["xifuguanbi","xifubeijing","xifubiaoshi","xifuchakan","xifujiaotan","xifujinxiu","xifuzengsong","xifuzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.xifuzu_i()];
	}
	var _proto = XifujiaohuuiSkin.prototype;

	_proto.xifuzu_i = function () {
		var t = new eui.Group();
		this.xifuzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.xifuguanbi_i(),this.xifubeijing_i(),this.xifubiaoshi_i(),this.xifuchakan_i(),this.xifujiaotan_i(),this.xifujinxiu_i(),this.xifuzengsong_i()];
		return t;
	};
	_proto.xifuguanbi_i = function () {
		var t = new eui.Image();
		this.xifuguanbi = t;
		t.alpha = 0.1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.xifubeijing_i = function () {
		var t = new eui.Image();
		this.xifubeijing = t;
		t.rotation = 180;
		t.source = "img_jiajuchufabeijing_png";
		t.x = 639;
		t.y = 1180;
		return t;
	};
	_proto.xifubiaoshi_i = function () {
		var t = new eui.Image();
		this.xifubiaoshi = t;
		t.source = "img_xifubiaoshi_png";
		t.x = 556;
		t.y = 908.5;
		return t;
	};
	_proto.xifuchakan_i = function () {
		var t = new eui.Button();
		this.xifuchakan = t;
		t.enabled = true;
		t.label = "查看";
		t.x = 526;
		t.y = 814.5;
		t.skinName = XifujiaohuuiSkin$Skin170;
		return t;
	};
	_proto.xifujiaotan_i = function () {
		var t = new eui.Button();
		this.xifujiaotan = t;
		t.enabled = true;
		t.label = "交谈";
		t.x = 464;
		t.y = 890;
		t.skinName = XifujiaohuuiSkin$Skin171;
		return t;
	};
	_proto.xifujinxiu_i = function () {
		var t = new eui.Button();
		this.xifujinxiu = t;
		t.enabled = true;
		t.label = "家务";
		t.x = 456;
		t.y = 993;
		t.skinName = XifujiaohuuiSkin$Skin172;
		return t;
	};
	_proto.xifuzengsong_i = function () {
		var t = new eui.Button();
		this.xifuzengsong = t;
		t.enabled = true;
		t.label = "赠送";
		t.x = 512.5;
		t.y = 1078.5;
		t.skinName = XifujiaohuuiSkin$Skin173;
		return t;
	};
	return XifujiaohuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Youxitishiui.exml'] = window.YouxitishiuiSkin = (function (_super) {
	__extends(YouxitishiuiSkin, _super);
	var YouxitishiuiSkin$Skin174 = 	(function (_super) {
		__extends(YouxitishiuiSkin$Skin174, _super);
		function YouxitishiuiSkin$Skin174() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = YouxitishiuiSkin$Skin174.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return YouxitishiuiSkin$Skin174;
	})(eui.Skin);

	function YouxitishiuiSkin() {
		_super.call(this);
		this.skinParts = ["heisezhezao","tishibeijing","shuomingjieshao","shuomingneirong","guanbianniu","shuomingzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.shuomingzu_i()];
	}
	var _proto = YouxitishiuiSkin.prototype;

	_proto.shuomingzu_i = function () {
		var t = new eui.Group();
		this.shuomingzu = t;
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.heisezhezao_i(),this.tishibeijing_i(),this.shuomingjieshao_i(),this.shuomingneirong_i(),this.guanbianniu_i()];
		return t;
	};
	_proto.heisezhezao_i = function () {
		var t = new eui.Image();
		this.heisezhezao = t;
		t.alpha = 0.3;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.tishibeijing_i = function () {
		var t = new eui.Image();
		this.tishibeijing = t;
		t.source = "img_tanchubeijing_png";
		t.x = 91;
		t.y = 302;
		return t;
	};
	_proto.shuomingjieshao_i = function () {
		var t = new eui.Label();
		this.shuomingjieshao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 57;
		t.stroke = 2;
		t.strokeColor = 0x706969;
		t.text = "说明介绍";
		t.textAlign = "center";
		t.textColor = 0xf26a1d;
		t.verticalAlign = "middle";
		t.width = 514;
		t.x = 118;
		t.y = 316;
		return t;
	};
	_proto.shuomingneirong_i = function () {
		var t = new eui.Label();
		this.shuomingneirong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 566;
		t.lineSpacing = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x6d6767;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.width = 481;
		t.x = 135;
		t.y = 405;
		return t;
	};
	_proto.guanbianniu_i = function () {
		var t = new eui.Button();
		this.guanbianniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 563;
		t.y = 303.5;
		t.skinName = YouxitishiuiSkin$Skin174;
		return t;
	};
	return YouxitishiuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Zhandoubuffui.exml'] = window.ZhandoubuffuiSkin = (function (_super) {
	__extends(ZhandoubuffuiSkin, _super);
	var ZhandoubuffuiSkin$Skin175 = 	(function (_super) {
		__extends(ZhandoubuffuiSkin$Skin175, _super);
		function ZhandoubuffuiSkin$Skin175() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = ZhandoubuffuiSkin$Skin175.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhandoubuffuiSkin$Skin175;
	})(eui.Skin);

	function ZhandoubuffuiSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao0","img_tongyongpinghejiemianpng0","biaotiwenzi0","guanbianniu0","jinengtu","jinengmingcheng","shengyuhuiheshu","chixuhuihe","xiaoguo","jinengshuoming","yitiaoshuju","jinengtu0","jinengmingcheng0","shengyuhuiheshu0","chixuhuihe0","xiaoguo0","jinengshuoming0","yitiaoshuju0","jinengtu1","jinengmingcheng1","shengyuhuiheshu1","chixuhuihe1","xiaoguo1","jinengshuoming1","yitiaoshuju1","jinengtu2","jinengmingcheng2","shengyuhuiheshu2","chixuhuihe2","xiaoguo2","jinengshuoming2","yitiaoshuju2","jinengtu3","jinengmingcheng3","shengyuhuiheshu3","chixuhuihe3","xiaoguo3","jinengshuoming3","yitiaoshuju3","jinengtu4","jinengmingcheng4","shengyuhuiheshu4","chixuhuihe4","xiaoguo4","jinengshuoming4","yitiaoshuju4","jinengtu5","jinengmingcheng5","shengyuhuiheshu5","chixuhuihe5","xiaoguo5","jinengshuoming5","yitiaoshuju5","jinengtu6","jinengmingcheng6","shengyuhuiheshu6","chixuhuihe6","xiaoguo6","jinengshuoming6","yitiaoshuju6","jinengtu7","jinengmingcheng7","shengyuhuiheshu7","chixuhuihe7","xiaoguo7","jinengshuoming7","yitiaoshuju7","jinengtu8","jinengmingcheng8","shengyuhuiheshu8","chixuhuihe8","xiaoguo8","jinengshuoming8","yitiaoshuju8","gerenshuxingjieshaozu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gerenshuxingjieshaozu_i()];
	}
	var _proto = ZhandoubuffuiSkin.prototype;

	_proto.gerenshuxingjieshaozu_i = function () {
		var t = new eui.Group();
		this.gerenshuxingjieshaozu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao0_i(),this.img_tongyongpinghejiemianpng0_i(),this.biaotiwenzi0_i(),this.guanbianniu0_i(),this._Scroller1_i()];
		return t;
	};
	_proto.img_heisezhezao0_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao0 = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.img_tongyongpinghejiemianpng0_i = function () {
		var t = new eui.Image();
		this.img_tongyongpinghejiemianpng0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 761;
		t.source = "img_tongyongpinghejiemianpng_png";
		t.width = 556;
		t.x = 97;
		t.y = 219;
		return t;
	};
	_proto.biaotiwenzi0_i = function () {
		var t = new eui.Label();
		this.biaotiwenzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "附加状态";
		t.textAlign = "center";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 210;
		t.x = 270;
		t.y = 241;
		return t;
	};
	_proto.guanbianniu0_i = function () {
		var t = new eui.Button();
		this.guanbianniu0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 558.5;
		t.y = 219;
		t.skinName = ZhandoubuffuiSkin$Skin175;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 552;
		t.width = 456;
		t.x = 148;
		t.y = 353;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 860;
		t.width = 406;
		t.x = 38.5;
		t.elementsContent = [this.yitiaoshuju_i(),this.yitiaoshuju0_i(),this.yitiaoshuju1_i(),this.yitiaoshuju2_i(),this.yitiaoshuju3_i(),this.yitiaoshuju4_i(),this.yitiaoshuju5_i(),this.yitiaoshuju6_i(),this.yitiaoshuju7_i(),this.yitiaoshuju8_i()];
		return t;
	};
	_proto.yitiaoshuju_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju = t;
		t.x = 27;
		t.y = 6;
		t.elementsContent = [this.jinengtu_i(),this.jinengmingcheng_i(),this.shengyuhuiheshu_i(),this.chixuhuihe_i(),this.xiaoguo_i(),this.jinengshuoming_i()];
		return t;
	};
	_proto.jinengtu_i = function () {
		var t = new eui.Image();
		this.jinengtu = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423e3e;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf77b3b;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635e5e;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe_i = function () {
		var t = new eui.Label();
		this.chixuhuihe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5b5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93ef10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo_i = function () {
		var t = new eui.Label();
		this.xiaoguo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming_i = function () {
		var t = new eui.Label();
		this.jinengshuoming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5b5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xe7edde;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	_proto.yitiaoshuju0_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju0 = t;
		t.x = 27;
		t.y = 109.25;
		t.elementsContent = [this.jinengtu0_i(),this.jinengmingcheng0_i(),this.shengyuhuiheshu0_i(),this.chixuhuihe0_i(),this.xiaoguo0_i(),this.jinengshuoming0_i()];
		return t;
	};
	_proto.jinengtu0_i = function () {
		var t = new eui.Image();
		this.jinengtu0 = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng0_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423E3E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu0_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635E5E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe0_i = function () {
		var t = new eui.Label();
		this.chixuhuihe0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo0_i = function () {
		var t = new eui.Label();
		this.xiaoguo0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming0_i = function () {
		var t = new eui.Label();
		this.jinengshuoming0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xE7EDDE;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	_proto.yitiaoshuju1_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju1 = t;
		t.x = 27;
		t.y = 212.5;
		t.elementsContent = [this.jinengtu1_i(),this.jinengmingcheng1_i(),this.shengyuhuiheshu1_i(),this.chixuhuihe1_i(),this.xiaoguo1_i(),this.jinengshuoming1_i()];
		return t;
	};
	_proto.jinengtu1_i = function () {
		var t = new eui.Image();
		this.jinengtu1 = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng1_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423E3E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu1_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635E5E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe1_i = function () {
		var t = new eui.Label();
		this.chixuhuihe1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo1_i = function () {
		var t = new eui.Label();
		this.xiaoguo1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming1_i = function () {
		var t = new eui.Label();
		this.jinengshuoming1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xE7EDDE;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	_proto.yitiaoshuju2_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju2 = t;
		t.x = 27;
		t.y = 315.75;
		t.elementsContent = [this.jinengtu2_i(),this.jinengmingcheng2_i(),this.shengyuhuiheshu2_i(),this.chixuhuihe2_i(),this.xiaoguo2_i(),this.jinengshuoming2_i()];
		return t;
	};
	_proto.jinengtu2_i = function () {
		var t = new eui.Image();
		this.jinengtu2 = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng2_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423E3E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu2_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635E5E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe2_i = function () {
		var t = new eui.Label();
		this.chixuhuihe2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo2_i = function () {
		var t = new eui.Label();
		this.xiaoguo2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming2_i = function () {
		var t = new eui.Label();
		this.jinengshuoming2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xE7EDDE;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	_proto.yitiaoshuju3_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju3 = t;
		t.x = 27;
		t.y = 419;
		t.elementsContent = [this.jinengtu3_i(),this.jinengmingcheng3_i(),this.shengyuhuiheshu3_i(),this.chixuhuihe3_i(),this.xiaoguo3_i(),this.jinengshuoming3_i()];
		return t;
	};
	_proto.jinengtu3_i = function () {
		var t = new eui.Image();
		this.jinengtu3 = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng3_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng3 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423E3E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu3_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635E5E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe3_i = function () {
		var t = new eui.Label();
		this.chixuhuihe3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo3_i = function () {
		var t = new eui.Label();
		this.xiaoguo3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming3_i = function () {
		var t = new eui.Label();
		this.jinengshuoming3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xE7EDDE;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	_proto.yitiaoshuju4_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju4 = t;
		t.x = 27;
		t.y = 522.25;
		t.elementsContent = [this.jinengtu4_i(),this.jinengmingcheng4_i(),this.shengyuhuiheshu4_i(),this.chixuhuihe4_i(),this.xiaoguo4_i(),this.jinengshuoming4_i()];
		return t;
	};
	_proto.jinengtu4_i = function () {
		var t = new eui.Image();
		this.jinengtu4 = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng4_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng4 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423E3E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu4_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635E5E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe4_i = function () {
		var t = new eui.Label();
		this.chixuhuihe4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo4_i = function () {
		var t = new eui.Label();
		this.xiaoguo4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming4_i = function () {
		var t = new eui.Label();
		this.jinengshuoming4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xE7EDDE;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	_proto.yitiaoshuju5_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 625.5;
		t.elementsContent = [this.jinengtu5_i(),this.jinengmingcheng5_i(),this.shengyuhuiheshu5_i(),this.chixuhuihe5_i(),this.xiaoguo5_i(),this.jinengshuoming5_i()];
		return t;
	};
	_proto.jinengtu5_i = function () {
		var t = new eui.Image();
		this.jinengtu5 = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng5_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng5 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423E3E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu5_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635E5E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe5_i = function () {
		var t = new eui.Label();
		this.chixuhuihe5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo5_i = function () {
		var t = new eui.Label();
		this.xiaoguo5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming5_i = function () {
		var t = new eui.Label();
		this.jinengshuoming5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xE7EDDE;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	_proto.yitiaoshuju6_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 728.75;
		t.elementsContent = [this.jinengtu6_i(),this.jinengmingcheng6_i(),this.shengyuhuiheshu6_i(),this.chixuhuihe6_i(),this.xiaoguo6_i(),this.jinengshuoming6_i()];
		return t;
	};
	_proto.jinengtu6_i = function () {
		var t = new eui.Image();
		this.jinengtu6 = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng6_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng6 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423E3E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu6_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635E5E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe6_i = function () {
		var t = new eui.Label();
		this.chixuhuihe6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo6_i = function () {
		var t = new eui.Label();
		this.xiaoguo6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming6_i = function () {
		var t = new eui.Label();
		this.jinengshuoming6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xE7EDDE;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	_proto.yitiaoshuju7_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 832;
		t.elementsContent = [this.jinengtu7_i(),this.jinengmingcheng7_i(),this.shengyuhuiheshu7_i(),this.chixuhuihe7_i(),this.xiaoguo7_i(),this.jinengshuoming7_i()];
		return t;
	};
	_proto.jinengtu7_i = function () {
		var t = new eui.Image();
		this.jinengtu7 = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng7_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng7 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423E3E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu7_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635E5E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe7_i = function () {
		var t = new eui.Label();
		this.chixuhuihe7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo7_i = function () {
		var t = new eui.Label();
		this.xiaoguo7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming7_i = function () {
		var t = new eui.Label();
		this.jinengshuoming7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xE7EDDE;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	_proto.yitiaoshuju8_i = function () {
		var t = new eui.Group();
		this.yitiaoshuju8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 27;
		t.y = 936;
		t.elementsContent = [this.jinengtu8_i(),this.jinengmingcheng8_i(),this.shengyuhuiheshu8_i(),this.chixuhuihe8_i(),this.xiaoguo8_i(),this.jinengshuoming8_i()];
		return t;
	};
	_proto.jinengtu8_i = function () {
		var t = new eui.Image();
		this.jinengtu8 = t;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.jinengmingcheng8_i = function () {
		var t = new eui.Label();
		this.jinengmingcheng8 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x423E3E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 96;
		t.y = 8;
		return t;
	};
	_proto.shengyuhuiheshu8_i = function () {
		var t = new eui.Label();
		this.shengyuhuiheshu8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x635E5E;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF77B3B;
		t.verticalAlign = "middle";
		t.width = 58;
		t.x = 341.5;
		t.y = 8;
		return t;
	};
	_proto.chixuhuihe8_i = function () {
		var t = new eui.Label();
		this.chixuhuihe8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 224.5;
		t.y = 8;
		return t;
	};
	_proto.xiaoguo8_i = function () {
		var t = new eui.Label();
		this.xiaoguo8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x93EF10;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 96;
		t.y = 36;
		return t;
	};
	_proto.jinengshuoming8_i = function () {
		var t = new eui.Label();
		this.jinengshuoming8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 26;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x5B5858;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xE7EDDE;
		t.verticalAlign = "middle";
		t.width = 290;
		t.x = 96;
		t.y = 63;
		return t;
	};
	return ZhandoubuffuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Zhandoucaipinshuxingui.exml'] = window.ZhandoucaipinshuxinguiSkin = (function (_super) {
	__extends(ZhandoucaipinshuxinguiSkin, _super);
	var ZhandoucaipinshuxinguiSkin$Skin176 = 	(function (_super) {
		__extends(ZhandoucaipinshuxinguiSkin$Skin176, _super);
		function ZhandoucaipinshuxinguiSkin$Skin176() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = ZhandoucaipinshuxinguiSkin$Skin176.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanbi2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhandoucaipinshuxinguiSkin$Skin176;
	})(eui.Skin);

	function ZhandoucaipinshuxinguiSkin() {
		_super.call(this);
		this.skinParts = ["img_heisezhezao0","img_tongyongpinghejiemianpng0","biaotiwenzi0","nicheng0","nichengwenzi0","cunhuo0","cunhuoshijian0","xingfudengji0","xingfuzhi0","shuxingzhi0","laxijingtong0","laxizhi0","maxijingtong0","maxizhi0","suanxijingtong0","suanxizhi0","tianxijingtong0","tianxizhi0","guanbianniu0","caiicondizhi","jinengtu","jinengtu0","jinengtu1","jinengtu2","jinengtu3","jinengtips","jinengmingzi","cailiaotu","cailiaotu0","cailiaotu1","cailiaotu2","caipinshuxingzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.caipinshuxingzu_i()];
	}
	var _proto = ZhandoucaipinshuxinguiSkin.prototype;

	_proto.caipinshuxingzu_i = function () {
		var t = new eui.Group();
		this.caipinshuxingzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_heisezhezao0_i(),this.img_tongyongpinghejiemianpng0_i(),this.biaotiwenzi0_i(),this.nicheng0_i(),this.nichengwenzi0_i(),this.cunhuo0_i(),this.cunhuoshijian0_i(),this.xingfudengji0_i(),this.xingfuzhi0_i(),this.shuxingzhi0_i(),this.laxijingtong0_i(),this.laxizhi0_i(),this.maxijingtong0_i(),this.maxizhi0_i(),this.suanxijingtong0_i(),this.suanxizhi0_i(),this.tianxijingtong0_i(),this.tianxizhi0_i(),this.guanbianniu0_i(),this.caiicondizhi_i(),this.jinengtu_i(),this.jinengtu0_i(),this.jinengtu1_i(),this.jinengtu2_i(),this.jinengtu3_i(),this.jinengtips_i(),this.jinengmingzi_i(),this.cailiaotu_i(),this.cailiaotu0_i(),this.cailiaotu1_i(),this.cailiaotu2_i()];
		return t;
	};
	_proto.img_heisezhezao0_i = function () {
		var t = new eui.Image();
		this.img_heisezhezao0 = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.img_tongyongpinghejiemianpng0_i = function () {
		var t = new eui.Image();
		this.img_tongyongpinghejiemianpng0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 761;
		t.source = "img_tongyongpinghejiemianpng_png";
		t.width = 556;
		t.x = 97;
		t.y = 219;
		return t;
	};
	_proto.biaotiwenzi0_i = function () {
		var t = new eui.Label();
		this.biaotiwenzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "菜品属性";
		t.textAlign = "center";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 210;
		t.x = 270;
		t.y = 241;
		return t;
	};
	_proto.nicheng0_i = function () {
		var t = new eui.Label();
		this.nicheng0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "菜名";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 351;
		t.y = 353;
		return t;
	};
	_proto.nichengwenzi0_i = function () {
		var t = new eui.Label();
		this.nichengwenzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 184;
		t.x = 421;
		t.y = 353;
		return t;
	};
	_proto.cunhuo0_i = function () {
		var t = new eui.Label();
		this.cunhuo0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "品质";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 351;
		t.y = 399;
		return t;
	};
	_proto.cunhuoshijian0_i = function () {
		var t = new eui.Label();
		this.cunhuoshijian0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 184;
		t.x = 421;
		t.y = 399;
		return t;
	};
	_proto.xingfudengji0_i = function () {
		var t = new eui.Label();
		this.xingfudengji0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "消耗";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 59;
		t.x = 351;
		t.y = 449;
		return t;
	};
	_proto.xingfuzhi0_i = function () {
		var t = new eui.Label();
		this.xingfuzhi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "属性";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 144.5;
		t.y = 517;
		return t;
	};
	_proto.shuxingzhi0_i = function () {
		var t = new eui.Label();
		this.shuxingzhi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "精修效果";
		t.textAlign = "left";
		t.textColor = 0xF2780C;
		t.verticalAlign = "middle";
		t.width = 113;
		t.x = 144.5;
		t.y = 665.01;
		return t;
	};
	_proto.laxijingtong0_i = function () {
		var t = new eui.Image();
		this.laxijingtong0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "img_laicon_png";
		t.width = 40;
		t.x = 176.5;
		t.y = 562;
		return t;
	};
	_proto.laxizhi0_i = function () {
		var t = new eui.Label();
		this.laxizhi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 142;
		t.x = 238.5;
		t.y = 559;
		return t;
	};
	_proto.maxijingtong0_i = function () {
		var t = new eui.Image();
		this.maxijingtong0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "img_maicon_png";
		t.width = 40;
		t.x = 387.5;
		t.y = 562;
		return t;
	};
	_proto.maxizhi0_i = function () {
		var t = new eui.Label();
		this.maxizhi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 142;
		t.x = 450.5;
		t.y = 561;
		return t;
	};
	_proto.suanxijingtong0_i = function () {
		var t = new eui.Image();
		this.suanxijingtong0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "img_suanicon_png";
		t.width = 40;
		t.x = 176.5;
		t.y = 612;
		return t;
	};
	_proto.suanxizhi0_i = function () {
		var t = new eui.Label();
		this.suanxizhi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 142;
		t.x = 237.5;
		t.y = 612;
		return t;
	};
	_proto.tianxijingtong0_i = function () {
		var t = new eui.Image();
		this.tianxijingtong0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "img_tianicon_png";
		t.width = 40;
		t.x = 387.5;
		t.y = 612;
		return t;
	};
	_proto.tianxizhi0_i = function () {
		var t = new eui.Label();
		this.tianxizhi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "middle";
		t.width = 142;
		t.x = 450.5;
		t.y = 612;
		return t;
	};
	_proto.guanbianniu0_i = function () {
		var t = new eui.Button();
		this.guanbianniu0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 558.5;
		t.y = 219;
		t.skinName = ZhandoucaipinshuxinguiSkin$Skin176;
		return t;
	};
	_proto.caiicondizhi_i = function () {
		var t = new eui.Image();
		this.caiicondizhi = t;
		t.height = 140;
		t.source = "1001_png";
		t.width = 140;
		t.x = 167.5;
		t.y = 353;
		return t;
	};
	_proto.jinengtu_i = function () {
		var t = new eui.Image();
		this.jinengtu = t;
		t.height = 70;
		t.source = "img_anquanguanli_png";
		t.width = 70;
		t.x = 154;
		t.y = 714.99;
		return t;
	};
	_proto.jinengtu0_i = function () {
		var t = new eui.Image();
		this.jinengtu0 = t;
		t.height = 70;
		t.source = "img_anquanguanli_png";
		t.width = 70;
		t.x = 246;
		t.y = 714.99;
		return t;
	};
	_proto.jinengtu1_i = function () {
		var t = new eui.Image();
		this.jinengtu1 = t;
		t.height = 70;
		t.source = "img_anquanguanli_png";
		t.width = 70;
		t.x = 338.5;
		t.y = 714.99;
		return t;
	};
	_proto.jinengtu2_i = function () {
		var t = new eui.Image();
		this.jinengtu2 = t;
		t.height = 70;
		t.source = "img_anquanguanli_png";
		t.width = 70;
		t.x = 431.5;
		t.y = 714.99;
		return t;
	};
	_proto.jinengtu3_i = function () {
		var t = new eui.Image();
		this.jinengtu3 = t;
		t.height = 70;
		t.source = "img_anquanguanli_png";
		t.width = 70;
		t.x = 523.5;
		t.y = 714.99;
		return t;
	};
	_proto.jinengtips_i = function () {
		var t = new eui.Label();
		this.jinengtips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 84.67;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0x0BA1EF;
		t.verticalAlign = "top";
		t.width = 440.67;
		t.x = 154;
		t.y = 830;
		return t;
	};
	_proto.jinengmingzi_i = function () {
		var t = new eui.Label();
		this.jinengmingzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xF4EDED;
		t.text = "80(进修+10%)";
		t.textAlign = "left";
		t.textColor = 0xf22e0c;
		t.verticalAlign = "top";
		t.width = 435.34;
		t.x = 154;
		t.y = 787.67;
		return t;
	};
	_proto.cailiaotu_i = function () {
		var t = new eui.Image();
		this.cailiaotu = t;
		t.height = 40;
		t.source = "img_tiaoliaoicon_png";
		t.width = 40;
		t.x = 407.7;
		t.y = 450;
		return t;
	};
	_proto.cailiaotu0_i = function () {
		var t = new eui.Image();
		this.cailiaotu0 = t;
		t.height = 40;
		t.source = "img_tiaoliaoicon_png";
		t.width = 40;
		t.x = 448.5;
		t.y = 450;
		return t;
	};
	_proto.cailiaotu1_i = function () {
		var t = new eui.Image();
		this.cailiaotu1 = t;
		t.height = 40;
		t.source = "img_tiaoliaoicon_png";
		t.width = 40;
		t.x = 489.5;
		t.y = 450;
		return t;
	};
	_proto.cailiaotu2_i = function () {
		var t = new eui.Image();
		this.cailiaotu2 = t;
		t.height = 40;
		t.source = "img_tiaoliaoicon_png";
		t.width = 40;
		t.x = 530.5;
		t.y = 450;
		return t;
	};
	return ZhandoucaipinshuxinguiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Zhandoujiemian.exml'] = window.ZhandoujiemianSkin = (function (_super) {
	__extends(ZhandoujiemianSkin, _super);
	var ZhandoujiemianSkin$Skin177 = 	(function (_super) {
		__extends(ZhandoujiemianSkin$Skin177, _super);
		function ZhandoujiemianSkin$Skin177() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shangcaianniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shangcaianniu2_png")
					])
			];
		}
		var _proto = ZhandoujiemianSkin$Skin177.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shangcaianniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhandoujiemianSkin$Skin177;
	})(eui.Skin);

	var ZhandoujiemianSkin$Skin178 = 	(function (_super) {
		__extends(ZhandoujiemianSkin$Skin178, _super);
		function ZhandoujiemianSkin$Skin178() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shangcaianniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shangcaianniu2_png")
					])
			];
		}
		var _proto = ZhandoujiemianSkin$Skin178.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shangcaianniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhandoujiemianSkin$Skin178;
	})(eui.Skin);

	var ZhandoujiemianSkin$Skin179 = 	(function (_super) {
		__extends(ZhandoujiemianSkin$Skin179, _super);
		function ZhandoujiemianSkin$Skin179() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shangcaianniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shangcaianniu2_png")
					])
			];
		}
		var _proto = ZhandoujiemianSkin$Skin179.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shangcaianniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhandoujiemianSkin$Skin179;
	})(eui.Skin);

	var ZhandoujiemianSkin$Skin180 = 	(function (_super) {
		__extends(ZhandoujiemianSkin$Skin180, _super);
		function ZhandoujiemianSkin$Skin180() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_shangcaianniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_shangcaianniu2_png")
					])
			];
		}
		var _proto = ZhandoujiemianSkin$Skin180.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_shangcaianniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhandoujiemianSkin$Skin180;
	})(eui.Skin);

	var ZhandoujiemianSkin$Skin181 = 	(function (_super) {
		__extends(ZhandoujiemianSkin$Skin181, _super);
		function ZhandoujiemianSkin$Skin181() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_fangqi2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_fangqi2_png")
					])
			];
		}
		var _proto = ZhandoujiemianSkin$Skin181.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_fangqi1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhandoujiemianSkin$Skin181;
	})(eui.Skin);

	var ZhandoujiemianSkin$Skin182 = 	(function (_super) {
		__extends(ZhandoujiemianSkin$Skin182, _super);
		function ZhandoujiemianSkin$Skin182() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_quxiaozidonganniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_quxiaozidonganniu2_png")
					])
			];
		}
		var _proto = ZhandoujiemianSkin$Skin182.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_quxiaozidonganniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhandoujiemianSkin$Skin182;
	})(eui.Skin);

	var ZhandoujiemianSkin$Skin183 = 	(function (_super) {
		__extends(ZhandoujiemianSkin$Skin183, _super);
		function ZhandoujiemianSkin$Skin183() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_renshianniu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_renshianniu2_png")
					])
			];
		}
		var _proto = ZhandoujiemianSkin$Skin183.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_renshianniu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhandoujiemianSkin$Skin183;
	})(eui.Skin);

	function ZhandoujiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_zhandoubeijing","npctouxiang","touxiangzu","img_npcbeijing","mingzi","qixuetiao","guaiwudengji","img_laicon","lashuxing","img_maicon","mashuxing","img_suanicon","suanshuxing","img_tianicon","tianshuxing","buff_1_","buff_1_wenzi","buff_2_","buff_2_wenzi","buff_3_","buff_3_wenzi","buff_4_","buff_4_wenzi","buffxianshizu","yimanzu","bosszu","npctouxiang0","touxiangzu0","img_npcbeijing0","mingzi0","qixuetiao0","guaiwudengji0","img_laicon0","lashuxing0","img_maicon0","mashuxing0","img_suanicon0","suanshuxing0","img_tianicon0","tianshuxing0","buff_1_0","buff_1_wenzi0","buff_2_0","buff_2_wenzi0","buff_3_0","buff_3_wenzi0","buff_4_0","buff_4_wenzi0","buffxianshizu0","yimanzu0","bosszu0","npctouxiang1","touxiangzu1","img_npcbeijing1","mingzi1","qixuetiao1","guaiwudengji1","img_laicon1","lashuxing1","img_maicon1","mashuxing1","img_suanicon1","suanshuxing1","img_tianicon1","tianshuxing1","buff_1_1","buff_1_wenzi1","buff_2_1","buff_2_wenzi1","buff_3_1","buff_3_wenzi1","buff_4_1","buff_4_wenzi1","buffxianshizu1","yimanzu1","bosszu1","npctouxiang2","touxiangzu2","img_npcbeijing2","mingzi2","qixuetiao2","guaiwudengji2","img_laicon2","lashuxing2","img_maicon2","mashuxing2","img_suanicon2","suanshuxing2","img_tianicon2","tianshuxing2","yizhili","yizhixing2","buff_1_2","buff_1_wenzi2","buff_2_2","buff_2_wenzi2","buff_3_2","buff_3_wenzi2","buff_4_2","buff_4_wenzi2","buffxianshizu2","zijizu","img_shangmianwenzibj","shangmiantishiwenzi","shangmiantishizu","img_huihelan","di","huiheshu","hui","he","huihezu","img_sudujindu","touxiangtu","jindutouxiang","img_youbiaotouxiang","jinduzu","touxiangtu0","jindutouxiang0","img_youbiaotouxiang0","jinduzu0","touxiangtu1","jindutouxiang1","img_youbiaotouxiang1","jinduzu1","touxiangtu2","jindutouxiang2","img_youbiaotouxiang2","jinduzu2","tiaoliao","tiaoliao0","tiaoliao1","tiaoliao2","tiaoliao3","tiaoliao4","tiaoliao5","tiaoliao6","tiaoliao7","tiaoliao8","tiaoliaozu","img_caikuang","caiicon","xiaohao_1_","xiaohao_2_","xiaohao_3_","xiaohao_4_","caixuanxiang","img_caikuang0","caiicon0","xiaohao_1_0","xiaohao_2_0","xiaohao_3_0","xiaohao_4_0","caixuanxiang0","img_caikuang1","caiicon1","xiaohao_1_1","xiaohao_2_1","xiaohao_3_1","xiaohao_4_1","caixuanxiang1","img_caikuang2","caiicon2","xiaohao_1_2","xiaohao_2_2","xiaohao_3_2","xiaohao_4_2","caixuanxiang2","shangcai1anniu","shangcai2anniu","shangcai3anniu","shangcai4anniu","zidongzhandouanniu","quxiaozidonganniu","renshuanniu","zhandouqipaokuang","zhandouhanhua","zhandouhanhuazu","zhandounierong","zhandouxianshizu","img_naozhongdaojishi","naozhongdaojishi","daojishitishizu","img_xiamianwenzibj","chupaitishiwenzi","xiamiantishizu","img_shihe","img_shihejiaobiao","shihewenzishu","shihezu","bisaizhuangtaitu","zhandoujiemianzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhandoujiemianzu_i()];
	}
	var _proto = ZhandoujiemianSkin.prototype;

	_proto.zhandoujiemianzu_i = function () {
		var t = new eui.Group();
		this.zhandoujiemianzu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_zhandoubeijing_i(),this.bosszu_i(),this.bosszu0_i(),this.bosszu1_i(),this.zijizu_i(),this.shangmiantishizu_i(),this.huihezu_i(),this.img_sudujindu_i(),this.jinduzu_i(),this.jinduzu0_i(),this.jinduzu1_i(),this.jinduzu2_i(),this.tiaoliaozu_i(),this.caixuanxiang_i(),this.caixuanxiang0_i(),this.caixuanxiang1_i(),this.caixuanxiang2_i(),this.shangcai1anniu_i(),this.shangcai2anniu_i(),this.shangcai3anniu_i(),this.shangcai4anniu_i(),this.zidongzhandouanniu_i(),this.quxiaozidonganniu_i(),this.renshuanniu_i(),this.zhandouhanhuazu_i(),this.zhandouxianshizu_i(),this.daojishitishizu_i(),this.xiamiantishizu_i(),this.shihezu_i(),this.bisaizhuangtaitu_i()];
		return t;
	};
	_proto.img_zhandoubeijing_i = function () {
		var t = new eui.Image();
		this.img_zhandoubeijing = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_zhandoubeijing_png";
		t.top = 0;
		return t;
	};
	_proto.bosszu_i = function () {
		var t = new eui.Group();
		this.bosszu = t;
		t.x = 200;
		t.y = 30;
		t.elementsContent = [this.touxiangzu_i(),this.img_npcbeijing_i(),this.mingzi_i(),this.qixuetiao_i(),this.guaiwudengji_i(),this.img_laicon_i(),this.lashuxing_i(),this.img_maicon_i(),this.mashuxing_i(),this.img_suanicon_i(),this.suanshuxing_i(),this.img_tianicon_i(),this.tianshuxing_i(),this.buffxianshizu_i(),this.yimanzu_i()];
		return t;
	};
	_proto.touxiangzu_i = function () {
		var t = new eui.Group();
		this.touxiangzu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73;
		t.width = 76;
		t.x = 28;
		t.y = 17;
		t.elementsContent = [this.npctouxiang_i()];
		return t;
	};
	_proto.npctouxiang_i = function () {
		var t = new eui.Image();
		this.npctouxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.source = "tx1000_png";
		t.width = 76;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_npcbeijing_i = function () {
		var t = new eui.Image();
		this.img_npcbeijing = t;
		t.source = "img_npcbeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mingzi_i = function () {
		var t = new eui.Label();
		this.mingzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xf2eded;
		t.text = "怪物名字";
		t.textAlign = "left";
		t.textColor = 0xf45a09;
		t.verticalAlign = "middle";
		t.width = 105;
		t.x = 136;
		t.y = 14;
		return t;
	};
	_proto.qixuetiao_i = function () {
		var t = new eui.Image();
		this.qixuetiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16;
		t.source = "img_jindutiaogundong_png";
		t.width = 153.33;
		t.x = 129.01;
		t.y = 36.67;
		return t;
	};
	_proto.guaiwudengji_i = function () {
		var t = new eui.Label();
		this.guaiwudengji = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xf2e6e6;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xe8190b;
		t.verticalAlign = "middle";
		t.width = 26;
		t.x = 11.68;
		t.y = 12.32;
		return t;
	};
	_proto.img_laicon_i = function () {
		var t = new eui.Image();
		this.img_laicon = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_laicon_png";
		t.width = 24;
		t.x = 131.06;
		t.y = 55.97;
		return t;
	};
	_proto.lashuxing_i = function () {
		var t = new eui.Label();
		this.lashuxing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 155;
		t.y = 60;
		return t;
	};
	_proto.img_maicon_i = function () {
		var t = new eui.Image();
		this.img_maicon = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_maicon_png";
		t.width = 24;
		t.x = 182.61;
		t.y = 55.97;
		return t;
	};
	_proto.mashuxing_i = function () {
		var t = new eui.Label();
		this.mashuxing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 207;
		t.y = 60;
		return t;
	};
	_proto.img_suanicon_i = function () {
		var t = new eui.Image();
		this.img_suanicon = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_suanicon_png";
		t.width = 24;
		t.x = 129.56;
		t.y = 79.97;
		return t;
	};
	_proto.suanshuxing_i = function () {
		var t = new eui.Label();
		this.suanshuxing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 155;
		t.y = 84;
		return t;
	};
	_proto.img_tianicon_i = function () {
		var t = new eui.Image();
		this.img_tianicon = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_tianicon_png";
		t.width = 24;
		t.x = 181.11;
		t.y = 79.97;
		return t;
	};
	_proto.tianshuxing_i = function () {
		var t = new eui.Label();
		this.tianshuxing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 207;
		t.y = 84;
		return t;
	};
	_proto.buffxianshizu_i = function () {
		var t = new eui.Group();
		this.buffxianshizu = t;
		t.x = 91;
		t.y = 116;
		t.elementsContent = [this.buff_1__i(),this.buff_1_wenzi_i(),this.buff_2__i(),this.buff_2_wenzi_i(),this.buff_3__i(),this.buff_3_wenzi_i(),this.buff_4__i(),this.buff_4_wenzi_i()];
		return t;
	};
	_proto.buff_1__i = function () {
		var t = new eui.Image();
		this.buff_1_ = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.buff_1_wenzi_i = function () {
		var t = new eui.Label();
		this.buff_1_wenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xf2e8e8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xf70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 29.61;
		t.y = 1;
		return t;
	};
	_proto.buff_2__i = function () {
		var t = new eui.Image();
		this.buff_2_ = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 53.75;
		t.y = 0;
		return t;
	};
	_proto.buff_2_wenzi_i = function () {
		var t = new eui.Label();
		this.buff_2_wenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 85.5;
		t.y = 1;
		return t;
	};
	_proto.buff_3__i = function () {
		var t = new eui.Image();
		this.buff_3_ = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 112.59;
		t.y = 0;
		return t;
	};
	_proto.buff_3_wenzi_i = function () {
		var t = new eui.Label();
		this.buff_3_wenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 142.2;
		t.y = 1;
		return t;
	};
	_proto.buff_4__i = function () {
		var t = new eui.Image();
		this.buff_4_ = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 166.34;
		t.y = 0;
		return t;
	};
	_proto.buff_4_wenzi_i = function () {
		var t = new eui.Label();
		this.buff_4_wenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 198.09;
		t.y = 1;
		return t;
	};
	_proto.yimanzu_i = function () {
		var t = new eui.Image();
		this.yimanzu = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_yimanzu_png";
		t.x = 29.110000000000014;
		t.y = -22;
		return t;
	};
	_proto.bosszu0_i = function () {
		var t = new eui.Group();
		this.bosszu0 = t;
		t.x = 13.61;
		t.y = 200;
		t.elementsContent = [this.touxiangzu0_i(),this.img_npcbeijing0_i(),this.mingzi0_i(),this.qixuetiao0_i(),this.guaiwudengji0_i(),this.img_laicon0_i(),this.lashuxing0_i(),this.img_maicon0_i(),this.mashuxing0_i(),this.img_suanicon0_i(),this.suanshuxing0_i(),this.img_tianicon0_i(),this.tianshuxing0_i(),this.buffxianshizu0_i(),this.yimanzu0_i()];
		return t;
	};
	_proto.touxiangzu0_i = function () {
		var t = new eui.Group();
		this.touxiangzu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73;
		t.width = 76;
		t.x = 28;
		t.y = 17;
		t.elementsContent = [this.npctouxiang0_i()];
		return t;
	};
	_proto.npctouxiang0_i = function () {
		var t = new eui.Image();
		this.npctouxiang0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.source = "tx1000_png";
		t.width = 76;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_npcbeijing0_i = function () {
		var t = new eui.Image();
		this.img_npcbeijing0 = t;
		t.source = "img_npcbeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mingzi0_i = function () {
		var t = new eui.Label();
		this.mingzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "怪物名字";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 105;
		t.x = 136;
		t.y = 14;
		return t;
	};
	_proto.qixuetiao0_i = function () {
		var t = new eui.Image();
		this.qixuetiao0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16;
		t.source = "img_jindutiaogundong_png";
		t.width = 153.33;
		t.x = 129.01;
		t.y = 36.67;
		return t;
	};
	_proto.guaiwudengji0_i = function () {
		var t = new eui.Label();
		this.guaiwudengji0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E6E6;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xE8190B;
		t.verticalAlign = "middle";
		t.width = 26;
		t.x = 11.68;
		t.y = 12.32;
		return t;
	};
	_proto.img_laicon0_i = function () {
		var t = new eui.Image();
		this.img_laicon0 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_laicon_png";
		t.width = 24;
		t.x = 131.06;
		t.y = 55.97;
		return t;
	};
	_proto.lashuxing0_i = function () {
		var t = new eui.Label();
		this.lashuxing0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 155;
		t.y = 60;
		return t;
	};
	_proto.img_maicon0_i = function () {
		var t = new eui.Image();
		this.img_maicon0 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_maicon_png";
		t.width = 24;
		t.x = 182.61;
		t.y = 55.97;
		return t;
	};
	_proto.mashuxing0_i = function () {
		var t = new eui.Label();
		this.mashuxing0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 207;
		t.y = 60;
		return t;
	};
	_proto.img_suanicon0_i = function () {
		var t = new eui.Image();
		this.img_suanicon0 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_suanicon_png";
		t.width = 24;
		t.x = 129.56;
		t.y = 79.97;
		return t;
	};
	_proto.suanshuxing0_i = function () {
		var t = new eui.Label();
		this.suanshuxing0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 155;
		t.y = 84;
		return t;
	};
	_proto.img_tianicon0_i = function () {
		var t = new eui.Image();
		this.img_tianicon0 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_tianicon_png";
		t.width = 24;
		t.x = 181.11;
		t.y = 79.97;
		return t;
	};
	_proto.tianshuxing0_i = function () {
		var t = new eui.Label();
		this.tianshuxing0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 207;
		t.y = 84;
		return t;
	};
	_proto.buffxianshizu0_i = function () {
		var t = new eui.Group();
		this.buffxianshizu0 = t;
		t.x = 91;
		t.y = 116;
		t.elementsContent = [this.buff_1_0_i(),this.buff_1_wenzi0_i(),this.buff_2_0_i(),this.buff_2_wenzi0_i(),this.buff_3_0_i(),this.buff_3_wenzi0_i(),this.buff_4_0_i(),this.buff_4_wenzi0_i()];
		return t;
	};
	_proto.buff_1_0_i = function () {
		var t = new eui.Image();
		this.buff_1_0 = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.buff_1_wenzi0_i = function () {
		var t = new eui.Label();
		this.buff_1_wenzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 29.61;
		t.y = 1;
		return t;
	};
	_proto.buff_2_0_i = function () {
		var t = new eui.Image();
		this.buff_2_0 = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 53.75;
		t.y = 0;
		return t;
	};
	_proto.buff_2_wenzi0_i = function () {
		var t = new eui.Label();
		this.buff_2_wenzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 85.5;
		t.y = 1;
		return t;
	};
	_proto.buff_3_0_i = function () {
		var t = new eui.Image();
		this.buff_3_0 = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 112.59;
		t.y = 0;
		return t;
	};
	_proto.buff_3_wenzi0_i = function () {
		var t = new eui.Label();
		this.buff_3_wenzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 142.2;
		t.y = 1;
		return t;
	};
	_proto.buff_4_0_i = function () {
		var t = new eui.Image();
		this.buff_4_0 = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 166.34;
		t.y = 0;
		return t;
	};
	_proto.buff_4_wenzi0_i = function () {
		var t = new eui.Label();
		this.buff_4_wenzi0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 198.09;
		t.y = 1;
		return t;
	};
	_proto.yimanzu0_i = function () {
		var t = new eui.Image();
		this.yimanzu0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_yimanzu_png";
		t.x = 36.39;
		t.y = -35.5;
		return t;
	};
	_proto.bosszu1_i = function () {
		var t = new eui.Group();
		this.bosszu1 = t;
		t.x = 381.16;
		t.y = 200;
		t.elementsContent = [this.touxiangzu1_i(),this.img_npcbeijing1_i(),this.mingzi1_i(),this.qixuetiao1_i(),this.guaiwudengji1_i(),this.img_laicon1_i(),this.lashuxing1_i(),this.img_maicon1_i(),this.mashuxing1_i(),this.img_suanicon1_i(),this.suanshuxing1_i(),this.img_tianicon1_i(),this.tianshuxing1_i(),this.buffxianshizu1_i(),this.yimanzu1_i()];
		return t;
	};
	_proto.touxiangzu1_i = function () {
		var t = new eui.Group();
		this.touxiangzu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73;
		t.width = 76;
		t.x = 28;
		t.y = 17;
		t.elementsContent = [this.npctouxiang1_i()];
		return t;
	};
	_proto.npctouxiang1_i = function () {
		var t = new eui.Image();
		this.npctouxiang1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.source = "tx1000_png";
		t.width = 76;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_npcbeijing1_i = function () {
		var t = new eui.Image();
		this.img_npcbeijing1 = t;
		t.source = "img_npcbeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mingzi1_i = function () {
		var t = new eui.Label();
		this.mingzi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "怪物名字";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 105;
		t.x = 136;
		t.y = 14;
		return t;
	};
	_proto.qixuetiao1_i = function () {
		var t = new eui.Image();
		this.qixuetiao1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16;
		t.source = "img_jindutiaogundong_png";
		t.width = 153.33;
		t.x = 129.01;
		t.y = 36.67;
		return t;
	};
	_proto.guaiwudengji1_i = function () {
		var t = new eui.Label();
		this.guaiwudengji1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E6E6;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xE8190B;
		t.verticalAlign = "middle";
		t.width = 26;
		t.x = 11.68;
		t.y = 12.32;
		return t;
	};
	_proto.img_laicon1_i = function () {
		var t = new eui.Image();
		this.img_laicon1 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_laicon_png";
		t.width = 24;
		t.x = 131.06;
		t.y = 55.97;
		return t;
	};
	_proto.lashuxing1_i = function () {
		var t = new eui.Label();
		this.lashuxing1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 155;
		t.y = 60;
		return t;
	};
	_proto.img_maicon1_i = function () {
		var t = new eui.Image();
		this.img_maicon1 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_maicon_png";
		t.width = 24;
		t.x = 182.61;
		t.y = 55.97;
		return t;
	};
	_proto.mashuxing1_i = function () {
		var t = new eui.Label();
		this.mashuxing1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 207;
		t.y = 60;
		return t;
	};
	_proto.img_suanicon1_i = function () {
		var t = new eui.Image();
		this.img_suanicon1 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_suanicon_png";
		t.width = 24;
		t.x = 129.56;
		t.y = 79.97;
		return t;
	};
	_proto.suanshuxing1_i = function () {
		var t = new eui.Label();
		this.suanshuxing1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 155;
		t.y = 84;
		return t;
	};
	_proto.img_tianicon1_i = function () {
		var t = new eui.Image();
		this.img_tianicon1 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 24;
		t.source = "img_tianicon_png";
		t.width = 24;
		t.x = 181.11;
		t.y = 79.97;
		return t;
	};
	_proto.tianshuxing1_i = function () {
		var t = new eui.Label();
		this.tianshuxing1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 14;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 27.5;
		t.x = 207;
		t.y = 84;
		return t;
	};
	_proto.buffxianshizu1_i = function () {
		var t = new eui.Group();
		this.buffxianshizu1 = t;
		t.x = 91;
		t.y = 116;
		t.elementsContent = [this.buff_1_1_i(),this.buff_1_wenzi1_i(),this.buff_2_1_i(),this.buff_2_wenzi1_i(),this.buff_3_1_i(),this.buff_3_wenzi1_i(),this.buff_4_1_i(),this.buff_4_wenzi1_i()];
		return t;
	};
	_proto.buff_1_1_i = function () {
		var t = new eui.Image();
		this.buff_1_1 = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.buff_1_wenzi1_i = function () {
		var t = new eui.Label();
		this.buff_1_wenzi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 29.61;
		t.y = 1;
		return t;
	};
	_proto.buff_2_1_i = function () {
		var t = new eui.Image();
		this.buff_2_1 = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 53.75;
		t.y = 0;
		return t;
	};
	_proto.buff_2_wenzi1_i = function () {
		var t = new eui.Label();
		this.buff_2_wenzi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 85.5;
		t.y = 1;
		return t;
	};
	_proto.buff_3_1_i = function () {
		var t = new eui.Image();
		this.buff_3_1 = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 112.59;
		t.y = 0;
		return t;
	};
	_proto.buff_3_wenzi1_i = function () {
		var t = new eui.Label();
		this.buff_3_wenzi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 142.2;
		t.y = 1;
		return t;
	};
	_proto.buff_4_1_i = function () {
		var t = new eui.Image();
		this.buff_4_1 = t;
		t.height = 24;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 24;
		t.x = 166.34;
		t.y = 0;
		return t;
	};
	_proto.buff_4_wenzi1_i = function () {
		var t = new eui.Label();
		this.buff_4_wenzi1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 20;
		t.size = 16;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 198.09;
		t.y = 1;
		return t;
	};
	_proto.yimanzu1_i = function () {
		var t = new eui.Image();
		this.yimanzu1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_yimanzu_png";
		t.x = 55.089999999999975;
		t.y = -35.5;
		return t;
	};
	_proto.zijizu_i = function () {
		var t = new eui.Group();
		this.zijizu = t;
		t.x = 31.11;
		t.y = 790;
		t.elementsContent = [this.touxiangzu2_i(),this.img_npcbeijing2_i(),this.mingzi2_i(),this.qixuetiao2_i(),this.guaiwudengji2_i(),this.img_laicon2_i(),this.lashuxing2_i(),this.img_maicon2_i(),this.mashuxing2_i(),this.img_suanicon2_i(),this.suanshuxing2_i(),this.img_tianicon2_i(),this.tianshuxing2_i(),this.yizhili_i(),this.yizhixing2_i(),this.buffxianshizu2_i()];
		return t;
	};
	_proto.touxiangzu2_i = function () {
		var t = new eui.Group();
		this.touxiangzu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101;
		t.width = 110;
		t.x = 28;
		t.y = 17;
		t.elementsContent = [this.npctouxiang2_i()];
		return t;
	};
	_proto.npctouxiang2_i = function () {
		var t = new eui.Image();
		this.npctouxiang2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98;
		t.source = "tx1000_png";
		t.width = 106;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_npcbeijing2_i = function () {
		var t = new eui.Image();
		this.img_npcbeijing2 = t;
		t.source = "img_zijibeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mingzi2_i = function () {
		var t = new eui.Label();
		this.mingzi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 19;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "怪物名字";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 141;
		t.x = 176.16;
		t.y = 17;
		return t;
	};
	_proto.qixuetiao2_i = function () {
		var t = new eui.Image();
		this.qixuetiao2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "img_jindutiaogundong_png";
		t.width = 203.33;
		t.x = 169.93;
		t.y = 48;
		return t;
	};
	_proto.guaiwudengji2_i = function () {
		var t = new eui.Label();
		this.guaiwudengji2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 39;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0xF2E6E6;
		t.text = "88";
		t.textAlign = "center";
		t.textColor = 0xE8190B;
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 11.68;
		t.y = 12.32;
		return t;
	};
	_proto.img_laicon2_i = function () {
		var t = new eui.Image();
		this.img_laicon2 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 30;
		t.source = "img_laicon_png";
		t.width = 30;
		t.x = 167;
		t.y = 74;
		return t;
	};
	_proto.lashuxing2_i = function () {
		var t = new eui.Label();
		this.lashuxing2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 18;
		t.size = 14;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 50;
		t.x = 198;
		t.y = 82;
		return t;
	};
	_proto.img_maicon2_i = function () {
		var t = new eui.Image();
		this.img_maicon2 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 30;
		t.source = "img_maicon_png";
		t.width = 30;
		t.x = 250;
		t.y = 74;
		return t;
	};
	_proto.mashuxing2_i = function () {
		var t = new eui.Label();
		this.mashuxing2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 18;
		t.size = 14;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 50;
		t.x = 288;
		t.y = 82;
		return t;
	};
	_proto.img_suanicon2_i = function () {
		var t = new eui.Image();
		this.img_suanicon2 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 30;
		t.source = "img_suanicon_png";
		t.width = 30;
		t.x = 167;
		t.y = 105;
		return t;
	};
	_proto.suanshuxing2_i = function () {
		var t = new eui.Label();
		this.suanshuxing2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 18;
		t.size = 14;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 50;
		t.x = 198;
		t.y = 112;
		return t;
	};
	_proto.img_tianicon2_i = function () {
		var t = new eui.Image();
		this.img_tianicon2 = t;
		t.anchorOffsetX = -0.05;
		t.anchorOffsetY = 0.03;
		t.height = 30;
		t.source = "img_tianicon_png";
		t.width = 30;
		t.x = 250;
		t.y = 105;
		return t;
	};
	_proto.tianshuxing2_i = function () {
		var t = new eui.Label();
		this.tianshuxing2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 18;
		t.size = 14;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "left";
		t.textColor = 0xF45A09;
		t.verticalAlign = "middle";
		t.width = 50;
		t.x = 288;
		t.y = 112;
		return t;
	};
	_proto.yizhili_i = function () {
		var t = new eui.Image();
		this.yizhili = t;
		t.height = 30;
		t.source = "img_yizhili_png";
		t.width = 30;
		t.x = 370.09;
		t.y = 74.97;
		return t;
	};
	_proto.yizhixing2_i = function () {
		var t = new eui.Label();
		this.yizhixing2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 19;
		t.size = 14;
		t.stroke = 1;
		t.strokeColor = 0xF2EDED;
		t.text = "8888";
		t.textAlign = "center";
		t.textColor = 0x0e90f2;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 351.55;
		t.y = 112;
		return t;
	};
	_proto.buffxianshizu2_i = function () {
		var t = new eui.Group();
		this.buffxianshizu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.width = 338;
		t.x = 113;
		t.y = 152;
		t.elementsContent = [this.buff_1_2_i(),this.buff_1_wenzi2_i(),this.buff_2_2_i(),this.buff_2_wenzi2_i(),this.buff_3_2_i(),this.buff_3_wenzi2_i(),this.buff_4_2_i(),this.buff_4_wenzi2_i()];
		return t;
	};
	_proto.buff_1_2_i = function () {
		var t = new eui.Image();
		this.buff_1_2 = t;
		t.height = 30;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.buff_1_wenzi2_i = function () {
		var t = new eui.Label();
		this.buff_1_wenzi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 30;
		t.x = 38.9;
		t.y = 1;
		return t;
	};
	_proto.buff_2_2_i = function () {
		var t = new eui.Image();
		this.buff_2_2 = t;
		t.height = 30;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 30;
		t.x = 62.32;
		t.y = 0;
		return t;
	};
	_proto.buff_2_wenzi2_i = function () {
		var t = new eui.Label();
		this.buff_2_wenzi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 30;
		t.x = 102.36;
		t.y = 1;
		return t;
	};
	_proto.buff_3_2_i = function () {
		var t = new eui.Image();
		this.buff_3_2 = t;
		t.height = 30;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 30;
		t.x = 128.73;
		t.y = 0;
		return t;
	};
	_proto.buff_3_wenzi2_i = function () {
		var t = new eui.Label();
		this.buff_3_wenzi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 30;
		t.x = 166.63;
		t.y = 1;
		return t;
	};
	_proto.buff_4_2_i = function () {
		var t = new eui.Image();
		this.buff_4_2 = t;
		t.height = 30;
		t.source = "img_chuzhiluandunjineng_png";
		t.width = 30;
		t.x = 189.05;
		t.y = 0;
		return t;
	};
	_proto.buff_4_wenzi2_i = function () {
		var t = new eui.Label();
		this.buff_4_wenzi2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0xF2E8E8;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF70909;
		t.verticalAlign = "middle";
		t.width = 30;
		t.x = 227.09;
		t.y = 1;
		return t;
	};
	_proto.shangmiantishizu_i = function () {
		var t = new eui.Group();
		this.shangmiantishizu = t;
		t.x = 181;
		t.y = 364;
		t.elementsContent = [this.img_shangmianwenzibj_i(),this.shangmiantishiwenzi_i()];
		return t;
	};
	_proto.img_shangmianwenzibj_i = function () {
		var t = new eui.Image();
		this.img_shangmianwenzibj = t;
		t.source = "img_shangmianwenzibj_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shangmiantishiwenzi_i = function () {
		var t = new eui.Label();
		this.shangmiantishiwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 44;
		t.size = 24;
		t.text = "提示文字内容";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 370;
		t.x = 9;
		t.y = 10;
		return t;
	};
	_proto.huihezu_i = function () {
		var t = new eui.Group();
		this.huihezu = t;
		t.x = 38.29;
		t.y = 431;
		t.elementsContent = [this.img_huihelan_i(),this.di_i(),this.huiheshu_i(),this.hui_i(),this.he_i()];
		return t;
	};
	_proto.img_huihelan_i = function () {
		var t = new eui.Image();
		this.img_huihelan = t;
		t.source = "img_huihelan_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.di_i = function () {
		var t = new eui.Label();
		this.di = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x605c5c;
		t.text = "第";
		t.textAlign = "center";
		t.textColor = 0x3bf407;
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 13.71;
		t.y = 7;
		return t;
	};
	_proto.huiheshu_i = function () {
		var t = new eui.Label();
		this.huiheshu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x605C5C;
		t.text = "7";
		t.textAlign = "center";
		t.textColor = 0xf23a0e;
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 13.71;
		t.y = 47;
		return t;
	};
	_proto.hui_i = function () {
		var t = new eui.Label();
		this.hui = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x605C5C;
		t.text = "回";
		t.textAlign = "center";
		t.textColor = 0x3BF407;
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 13.71;
		t.y = 91;
		return t;
	};
	_proto.he_i = function () {
		var t = new eui.Label();
		this.he = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 46;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x605C5C;
		t.text = "合";
		t.textAlign = "center";
		t.textColor = 0x3BF407;
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 13.71;
		t.y = 133;
		return t;
	};
	_proto.img_sudujindu_i = function () {
		var t = new eui.Image();
		this.img_sudujindu = t;
		t.source = "img_sudujindu_png";
		t.x = 682.25;
		t.y = 431;
		return t;
	};
	_proto.jinduzu_i = function () {
		var t = new eui.Group();
		this.jinduzu = t;
		t.x = 597;
		t.y = 813;
		t.elementsContent = [this.jindutouxiang_i(),this.img_youbiaotouxiang_i()];
		return t;
	};
	_proto.jindutouxiang_i = function () {
		var t = new eui.Group();
		this.jindutouxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.5;
		t.width = 52;
		t.x = 12;
		t.y = 13.25;
		t.elementsContent = [this.touxiangtu_i()];
		return t;
	};
	_proto.touxiangtu_i = function () {
		var t = new eui.Image();
		this.touxiangtu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.source = "tx1003_png";
		t.width = 46;
		t.x = 2.5;
		t.y = 0;
		return t;
	};
	_proto.img_youbiaotouxiang_i = function () {
		var t = new eui.Image();
		this.img_youbiaotouxiang = t;
		t.source = "img_youbiaotouxiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jinduzu0_i = function () {
		var t = new eui.Group();
		this.jinduzu0 = t;
		t.x = 597;
		t.y = 737;
		t.elementsContent = [this.jindutouxiang0_i(),this.img_youbiaotouxiang0_i()];
		return t;
	};
	_proto.jindutouxiang0_i = function () {
		var t = new eui.Group();
		this.jindutouxiang0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.5;
		t.width = 52;
		t.x = 12;
		t.y = 13.25;
		t.elementsContent = [this.touxiangtu0_i()];
		return t;
	};
	_proto.touxiangtu0_i = function () {
		var t = new eui.Image();
		this.touxiangtu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.source = "tx1003_png";
		t.width = 46;
		t.x = 2.5;
		t.y = 0;
		return t;
	};
	_proto.img_youbiaotouxiang0_i = function () {
		var t = new eui.Image();
		this.img_youbiaotouxiang0 = t;
		t.source = "img_youbiaotouxiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jinduzu1_i = function () {
		var t = new eui.Group();
		this.jinduzu1 = t;
		t.x = 597;
		t.y = 660;
		t.elementsContent = [this.jindutouxiang1_i(),this.img_youbiaotouxiang1_i()];
		return t;
	};
	_proto.jindutouxiang1_i = function () {
		var t = new eui.Group();
		this.jindutouxiang1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.5;
		t.width = 52;
		t.x = 12;
		t.y = 13.25;
		t.elementsContent = [this.touxiangtu1_i()];
		return t;
	};
	_proto.touxiangtu1_i = function () {
		var t = new eui.Image();
		this.touxiangtu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.source = "tx1003_png";
		t.width = 46;
		t.x = 2.5;
		t.y = 0;
		return t;
	};
	_proto.img_youbiaotouxiang1_i = function () {
		var t = new eui.Image();
		this.img_youbiaotouxiang1 = t;
		t.source = "img_youbiaotouxiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jinduzu2_i = function () {
		var t = new eui.Group();
		this.jinduzu2 = t;
		t.x = 597;
		t.y = 580;
		t.elementsContent = [this.jindutouxiang2_i(),this.img_youbiaotouxiang2_i()];
		return t;
	};
	_proto.jindutouxiang2_i = function () {
		var t = new eui.Group();
		this.jindutouxiang2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.5;
		t.width = 52;
		t.x = 12;
		t.y = 13.25;
		t.elementsContent = [this.touxiangtu2_i()];
		return t;
	};
	_proto.touxiangtu2_i = function () {
		var t = new eui.Image();
		this.touxiangtu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.source = "tx1003_png";
		t.width = 46;
		t.x = 2.5;
		t.y = 0;
		return t;
	};
	_proto.img_youbiaotouxiang2_i = function () {
		var t = new eui.Image();
		this.img_youbiaotouxiang2 = t;
		t.source = "img_youbiaotouxiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tiaoliaozu_i = function () {
		var t = new eui.Group();
		this.tiaoliaozu = t;
		t.x = 28;
		t.y = 986;
		t.elementsContent = [this.tiaoliao_i(),this.tiaoliao0_i(),this.tiaoliao1_i(),this.tiaoliao2_i(),this.tiaoliao3_i(),this.tiaoliao4_i(),this.tiaoliao5_i(),this.tiaoliao6_i(),this.tiaoliao7_i(),this.tiaoliao8_i()];
		return t;
	};
	_proto.tiaoliao_i = function () {
		var t = new eui.Image();
		this.tiaoliao = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tiaoliao0_i = function () {
		var t = new eui.Image();
		this.tiaoliao0 = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 66.11;
		t.y = 0;
		return t;
	};
	_proto.tiaoliao1_i = function () {
		var t = new eui.Image();
		this.tiaoliao1 = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 132.22;
		t.y = 0;
		return t;
	};
	_proto.tiaoliao2_i = function () {
		var t = new eui.Image();
		this.tiaoliao2 = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 198.44;
		t.y = 0;
		return t;
	};
	_proto.tiaoliao3_i = function () {
		var t = new eui.Image();
		this.tiaoliao3 = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 264.18;
		t.y = 0;
		return t;
	};
	_proto.tiaoliao4_i = function () {
		var t = new eui.Image();
		this.tiaoliao4 = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 330.17;
		t.y = 0;
		return t;
	};
	_proto.tiaoliao5_i = function () {
		var t = new eui.Image();
		this.tiaoliao5 = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 396.67;
		t.y = 0;
		return t;
	};
	_proto.tiaoliao6_i = function () {
		var t = new eui.Image();
		this.tiaoliao6 = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 462.55;
		t.y = 0;
		return t;
	};
	_proto.tiaoliao7_i = function () {
		var t = new eui.Image();
		this.tiaoliao7 = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 528.39;
		t.y = 0;
		return t;
	};
	_proto.tiaoliao8_i = function () {
		var t = new eui.Image();
		this.tiaoliao8 = t;
		t.height = 88;
		t.source = "img_tiaoliaoicon_png";
		t.width = 92;
		t.x = 594.5;
		t.y = 0;
		return t;
	};
	_proto.caixuanxiang_i = function () {
		var t = new eui.Group();
		this.caixuanxiang = t;
		t.x = 37.61;
		t.y = 1078;
		t.elementsContent = [this.img_caikuang_i(),this.caiicon_i(),this.xiaohao_1__i(),this.xiaohao_2__i(),this.xiaohao_3__i(),this.xiaohao_4__i()];
		return t;
	};
	_proto.img_caikuang_i = function () {
		var t = new eui.Image();
		this.img_caikuang = t;
		t.source = "img_caikuang_png";
		t.x = 0.39;
		t.y = 0;
		return t;
	};
	_proto.caiicon_i = function () {
		var t = new eui.Image();
		this.caiicon = t;
		t.height = 100;
		t.source = "2016_png";
		t.width = 100;
		t.x = 18.5;
		t.y = 21;
		return t;
	};
	_proto.xiaohao_1__i = function () {
		var t = new eui.Image();
		this.xiaohao_1_ = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto.xiaohao_2__i = function () {
		var t = new eui.Image();
		this.xiaohao_2_ = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 32;
		t.y = 102;
		return t;
	};
	_proto.xiaohao_3__i = function () {
		var t = new eui.Image();
		this.xiaohao_3_ = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 64;
		t.y = 102;
		return t;
	};
	_proto.xiaohao_4__i = function () {
		var t = new eui.Image();
		this.xiaohao_4_ = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 96;
		t.y = 102;
		return t;
	};
	_proto.caixuanxiang0_i = function () {
		var t = new eui.Group();
		this.caixuanxiang0 = t;
		t.x = 213.94;
		t.y = 1077;
		t.elementsContent = [this.img_caikuang0_i(),this.caiicon0_i(),this.xiaohao_1_0_i(),this.xiaohao_2_0_i(),this.xiaohao_3_0_i(),this.xiaohao_4_0_i()];
		return t;
	};
	_proto.img_caikuang0_i = function () {
		var t = new eui.Image();
		this.img_caikuang0 = t;
		t.source = "img_caikuang_png";
		t.x = 0.39;
		t.y = 0;
		return t;
	};
	_proto.caiicon0_i = function () {
		var t = new eui.Image();
		this.caiicon0 = t;
		t.height = 100;
		t.source = "2016_png";
		t.width = 100;
		t.x = 18.5;
		t.y = 21;
		return t;
	};
	_proto.xiaohao_1_0_i = function () {
		var t = new eui.Image();
		this.xiaohao_1_0 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto.xiaohao_2_0_i = function () {
		var t = new eui.Image();
		this.xiaohao_2_0 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 32;
		t.y = 102;
		return t;
	};
	_proto.xiaohao_3_0_i = function () {
		var t = new eui.Image();
		this.xiaohao_3_0 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 64;
		t.y = 102;
		return t;
	};
	_proto.xiaohao_4_0_i = function () {
		var t = new eui.Image();
		this.xiaohao_4_0 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 96;
		t.y = 102;
		return t;
	};
	_proto.caixuanxiang1_i = function () {
		var t = new eui.Group();
		this.caixuanxiang1 = t;
		t.x = 389.61;
		t.y = 1075;
		t.elementsContent = [this.img_caikuang1_i(),this.caiicon1_i(),this.xiaohao_1_1_i(),this.xiaohao_2_1_i(),this.xiaohao_3_1_i(),this.xiaohao_4_1_i()];
		return t;
	};
	_proto.img_caikuang1_i = function () {
		var t = new eui.Image();
		this.img_caikuang1 = t;
		t.source = "img_caikuang_png";
		t.x = 0.39;
		t.y = 0;
		return t;
	};
	_proto.caiicon1_i = function () {
		var t = new eui.Image();
		this.caiicon1 = t;
		t.height = 100;
		t.source = "2016_png";
		t.width = 100;
		t.x = 18.5;
		t.y = 21;
		return t;
	};
	_proto.xiaohao_1_1_i = function () {
		var t = new eui.Image();
		this.xiaohao_1_1 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto.xiaohao_2_1_i = function () {
		var t = new eui.Image();
		this.xiaohao_2_1 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 32;
		t.y = 102;
		return t;
	};
	_proto.xiaohao_3_1_i = function () {
		var t = new eui.Image();
		this.xiaohao_3_1 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 64;
		t.y = 102;
		return t;
	};
	_proto.xiaohao_4_1_i = function () {
		var t = new eui.Image();
		this.xiaohao_4_1 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 96;
		t.y = 102;
		return t;
	};
	_proto.caixuanxiang2_i = function () {
		var t = new eui.Group();
		this.caixuanxiang2 = t;
		t.x = 565.66;
		t.y = 1075;
		t.elementsContent = [this.img_caikuang2_i(),this.caiicon2_i(),this.xiaohao_1_2_i(),this.xiaohao_2_2_i(),this.xiaohao_3_2_i(),this.xiaohao_4_2_i()];
		return t;
	};
	_proto.img_caikuang2_i = function () {
		var t = new eui.Image();
		this.img_caikuang2 = t;
		t.source = "img_caikuang_png";
		t.x = 0.39;
		t.y = 0;
		return t;
	};
	_proto.caiicon2_i = function () {
		var t = new eui.Image();
		this.caiicon2 = t;
		t.height = 100;
		t.source = "2016_png";
		t.width = 100;
		t.x = 18.5;
		t.y = 21;
		return t;
	};
	_proto.xiaohao_1_2_i = function () {
		var t = new eui.Image();
		this.xiaohao_1_2 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto.xiaohao_2_2_i = function () {
		var t = new eui.Image();
		this.xiaohao_2_2 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 32;
		t.y = 102;
		return t;
	};
	_proto.xiaohao_3_2_i = function () {
		var t = new eui.Image();
		this.xiaohao_3_2 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 64;
		t.y = 102;
		return t;
	};
	_proto.xiaohao_4_2_i = function () {
		var t = new eui.Image();
		this.xiaohao_4_2 = t;
		t.height = 38;
		t.source = "img_tiaoliaoicon_png";
		t.width = 42;
		t.x = 96;
		t.y = 102;
		return t;
	};
	_proto.shangcai1anniu_i = function () {
		var t = new eui.Button();
		this.shangcai1anniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 42;
		t.y = 1242;
		t.skinName = ZhandoujiemianSkin$Skin177;
		return t;
	};
	_proto.shangcai2anniu_i = function () {
		var t = new eui.Button();
		this.shangcai2anniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 217.76;
		t.y = 1242;
		t.skinName = ZhandoujiemianSkin$Skin178;
		return t;
	};
	_proto.shangcai3anniu_i = function () {
		var t = new eui.Button();
		this.shangcai3anniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 392.67;
		t.y = 1242;
		t.skinName = ZhandoujiemianSkin$Skin179;
		return t;
	};
	_proto.shangcai4anniu_i = function () {
		var t = new eui.Button();
		this.shangcai4anniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 568;
		t.y = 1242;
		t.skinName = ZhandoujiemianSkin$Skin180;
		return t;
	};
	_proto.zidongzhandouanniu_i = function () {
		var t = new eui.Button();
		this.zidongzhandouanniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 574.32;
		t.y = 917;
		t.skinName = ZhandoujiemianSkin$Skin181;
		return t;
	};
	_proto.quxiaozidonganniu_i = function () {
		var t = new eui.Button();
		this.quxiaozidonganniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 574.32;
		t.y = 917;
		t.skinName = ZhandoujiemianSkin$Skin182;
		return t;
	};
	_proto.renshuanniu_i = function () {
		var t = new eui.Button();
		this.renshuanniu = t;
		t.enabled = true;
		t.label = "";
		t.x = 48.36;
		t.y = 631.5;
		t.skinName = ZhandoujiemianSkin$Skin183;
		return t;
	};
	_proto.zhandouhanhuazu_i = function () {
		var t = new eui.Group();
		this.zhandouhanhuazu = t;
		t.x = 143.61;
		t.y = 450;
		t.elementsContent = [this.zhandouqipaokuang_i(),this.zhandouhanhua_i()];
		return t;
	};
	_proto.zhandouqipaokuang_i = function () {
		var t = new eui.Image();
		this.zhandouqipaokuang = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 136;
		t.source = "img_zhandouduihuaqipao_png";
		t.width = 465;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhandouhanhua_i = function () {
		var t = new eui.Label();
		this.zhandouhanhua = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 96;
		t.size = 24;
		t.strokeColor = 0xf2e6e6;
		t.text = "成年人的崩溃往往是从借钱开始的成年人的崩溃往往是从借钱开始的成年人的崩溃往往是从借钱开始的成年人的崩溃往往是从借钱开始的";
		t.textAlign = "left";
		t.textColor = 0x333030;
		t.verticalAlign = "top";
		t.width = 444;
		t.x = 9.39;
		t.y = 8;
		return t;
	};
	_proto.zhandouxianshizu_i = function () {
		var t = new eui.Group();
		this.zhandouxianshizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.width = 170;
		t.x = 289.67;
		t.y = 586;
		t.elementsContent = [this.zhandounierong_i()];
		return t;
	};
	_proto.zhandounierong_i = function () {
		var t = new eui.Image();
		this.zhandounierong = t;
		t.height = 160;
		t.source = "img_gudujineneg_png";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojishitishizu_i = function () {
		var t = new eui.Group();
		this.daojishitishizu = t;
		t.x = 262;
		t.y = 548;
		t.elementsContent = [this.img_naozhongdaojishi_i(),this.naozhongdaojishi_i()];
		return t;
	};
	_proto.img_naozhongdaojishi_i = function () {
		var t = new eui.Image();
		this.img_naozhongdaojishi = t;
		t.source = "img_naozhongdaojishi_png";
		t.x = 58.52;
		t.y = 0;
		return t;
	};
	_proto.naozhongdaojishi_i = function () {
		var t = new eui.Label();
		this.naozhongdaojishi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 76;
		t.size = 40;
		t.text = "28";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 66;
		t.x = 83.57;
		t.y = 58;
		return t;
	};
	_proto.xiamiantishizu_i = function () {
		var t = new eui.Group();
		this.xiamiantishizu = t;
		t.x = 255;
		t.y = 723.25;
		t.elementsContent = [this.img_xiamianwenzibj_i(),this.chupaitishiwenzi_i()];
		return t;
	};
	_proto.img_xiamianwenzibj_i = function () {
		var t = new eui.Image();
		this.img_xiamianwenzibj = t;
		t.source = "img_xiamianwenzibj_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chupaitishiwenzi_i = function () {
		var t = new eui.Label();
		this.chupaitishiwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 44;
		t.size = 24;
		t.text = "请选择呈现的菜品";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 218;
		t.x = 11.57;
		t.y = 4.75;
		return t;
	};
	_proto.shihezu_i = function () {
		var t = new eui.Group();
		this.shihezu = t;
		t.x = 19.11;
		t.y = 921;
		t.elementsContent = [this.img_shihe_i(),this.img_shihejiaobiao_i(),this.shihewenzishu_i()];
		return t;
	};
	_proto.img_shihe_i = function () {
		var t = new eui.Image();
		this.img_shihe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.source = "img_shihe_png";
		t.width = 56;
		t.x = 15.5;
		t.y = 14;
		return t;
	};
	_proto.img_shihejiaobiao_i = function () {
		var t = new eui.Image();
		this.img_shihejiaobiao = t;
		t.source = "img_shihejiaobiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shihewenzishu_i = function () {
		var t = new eui.Label();
		this.shihewenzishu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 24;
		t.size = 18;
		t.stroke = 1;
		t.text = "8+";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 24;
		t.x = 6.89;
		t.y = 7;
		return t;
	};
	_proto.bisaizhuangtaitu_i = function () {
		var t = new eui.Image();
		this.bisaizhuangtaitu = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.horizontalCenter = 0;
		t.source = "img_bipingkaishi_png";
		t.verticalCenter = -237;
		return t;
	};
	return ZhandoujiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Zhandoupiaozi.exml'] = window.ZhandoupiaoziSkin = (function (_super) {
	__extends(ZhandoupiaoziSkin, _super);
	function ZhandoupiaoziSkin() {
		_super.call(this);
		this.skinParts = ["qianmianwenzi","qianmianwenzi0","xianshizu"];
		
		this.height = 33;
		this.width = 241;
		this.elementsContent = [this.xianshizu_i()];
	}
	var _proto = ZhandoupiaoziSkin.prototype;

	_proto.xianshizu_i = function () {
		var t = new eui.Group();
		this.xianshizu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.qianmianwenzi_i(),this.qianmianwenzi0_i()];
		return t;
	};
	_proto.qianmianwenzi_i = function () {
		var t = new eui.Label();
		this.qianmianwenzi = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.text = "海错江瑶";
		t.textAlign = "center";
		t.textColor = 0xf7850c;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.qianmianwenzi0_i = function () {
		var t = new eui.Label();
		this.qianmianwenzi0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.height = 30;
		t.size = 24;
		t.stroke = 2;
		t.text = "-888888";
		t.textAlign = "left";
		t.textColor = 0x42f409;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 125;
		t.y = 0;
		return t;
	};
	return ZhandoupiaoziSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Zuocaitanchuui.exml'] = window.ZuocaitanchuuiSkin = (function (_super) {
	__extends(ZuocaitanchuuiSkin, _super);
	function ZuocaitanchuuiSkin() {
		_super.call(this);
		this.skinParts = ["tishitupian"];
		
		this.height = 82;
		this.width = 300;
		this.elementsContent = [this.tishitupian_i()];
	}
	var _proto = ZuocaitanchuuiSkin.prototype;

	_proto.tishitupian_i = function () {
		var t = new eui.Image();
		this.tishitupian = t;
		t.source = "img_chenggong1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ZuocaitanchuuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemian/Zuofanjiemianui.exml'] = window.ZuofanjiemianuiSkin = (function (_super) {
	__extends(ZuofanjiemianuiSkin, _super);
	var ZuofanjiemianuiSkin$Skin184 = 	(function (_super) {
		__extends(ZuofanjiemianuiSkin$Skin184, _super);
		function ZuofanjiemianuiSkin$Skin184() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_queding2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_queding2_png")
					])
			];
		}
		var _proto = ZuofanjiemianuiSkin$Skin184.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_queding1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZuofanjiemianuiSkin$Skin184;
	})(eui.Skin);

	function ZuofanjiemianuiSkin() {
		_super.call(this);
		this.skinParts = ["img_xiaceng","huoyantupian","img_shangcengbudong","dangqiantishi","xiaoshitishi","weilaitishi","xiaoshitishitu","weilaitishitu","dangqiantishitu","jindutiao","dingbulan","shijianwenzi","caocaijinduwenzi","shiwucishuwenzi","but_queding","youbiao","lvsexuanxiang","lvsecaizu","zisexuanxiang","zisezu","chengsexuanxiang","chengsezu","zaotaizu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zaotaizu_i()];
	}
	var _proto = ZuofanjiemianuiSkin.prototype;

	_proto.zaotaizu_i = function () {
		var t = new eui.Group();
		this.zaotaizu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_xiaceng_i(),this.huoyantupian_i(),this.img_shangcengbudong_i(),this.dangqiantishi_i(),this.xiaoshitishi_i(),this.weilaitishi_i(),this.xiaoshitishitu_i(),this.weilaitishitu_i(),this.dangqiantishitu_i(),this.jindutiao_i(),this.dingbulan_i(),this.shijianwenzi_i(),this.caocaijinduwenzi_i(),this.shiwucishuwenzi_i(),this.but_queding_i(),this.youbiao_i(),this.lvsecaizu_i(),this.zisezu_i(),this.chengsezu_i()];
		return t;
	};
	_proto.img_xiaceng_i = function () {
		var t = new eui.Image();
		this.img_xiaceng = t;
		t.source = "img_xiaceng_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huoyantupian_i = function () {
		var t = new eui.Image();
		this.huoyantupian = t;
		t.source = "img_dahuohou_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_shangcengbudong_i = function () {
		var t = new eui.Image();
		this.img_shangcengbudong = t;
		t.source = "img_shangcengbudong_png";
		t.x = 0;
		t.y = 247;
		return t;
	};
	_proto.dangqiantishi_i = function () {
		var t = new eui.Image();
		this.dangqiantishi = t;
		t.source = "img_dangqianzhishi_png";
		t.x = 279;
		t.y = 290;
		return t;
	};
	_proto.xiaoshitishi_i = function () {
		var t = new eui.Image();
		this.xiaoshitishi = t;
		t.source = "img_huisezhishi_png";
		t.x = 125;
		t.y = 344;
		return t;
	};
	_proto.weilaitishi_i = function () {
		var t = new eui.Image();
		this.weilaitishi = t;
		t.source = "img_huisezhishi_png";
		t.x = 493;
		t.y = 344;
		return t;
	};
	_proto.xiaoshitishitu_i = function () {
		var t = new eui.Image();
		this.xiaoshitishitu = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_lajiao_png";
		t.width = 102;
		t.x = 139;
		t.y = 352;
		return t;
	};
	_proto.weilaitishitu_i = function () {
		var t = new eui.Image();
		this.weilaitishitu = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.source = "img_lajiao_png";
		t.width = 102;
		t.x = 511;
		t.y = 354;
		return t;
	};
	_proto.dangqiantishitu_i = function () {
		var t = new eui.Image();
		this.dangqiantishitu = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 138;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_lajiao_png";
		t.width = 120;
		t.x = 315.5;
		t.y = 317.5;
		return t;
	};
	_proto.jindutiao_i = function () {
		var t = new eui.Image();
		this.jindutiao = t;
		t.source = "img_jindutiao_png";
		t.x = 39;
		t.y = 815;
		return t;
	};
	_proto.dingbulan_i = function () {
		var t = new eui.Image();
		this.dingbulan = t;
		t.horizontalCenter = -5;
		t.source = "img_dingbu_png";
		t.verticalCenter = -540;
		return t;
	};
	_proto.shijianwenzi_i = function () {
		var t = new eui.Label();
		this.shijianwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.stroke = 2;
		t.text = "5:30";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 146;
		t.y = 114;
		return t;
	};
	_proto.caocaijinduwenzi_i = function () {
		var t = new eui.Label();
		this.caocaijinduwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.stroke = 2;
		t.text = "5:30";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 362;
		t.y = 113;
		return t;
	};
	_proto.shiwucishuwenzi_i = function () {
		var t = new eui.Label();
		this.shiwucishuwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 32;
		t.size = 24;
		t.stroke = 2;
		t.text = "5:30";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 574;
		t.y = 112;
		return t;
	};
	_proto.but_queding_i = function () {
		var t = new eui.Button();
		this.but_queding = t;
		t.enabled = true;
		t.label = "";
		t.x = 253.5;
		t.y = 1012;
		t.skinName = ZuofanjiemianuiSkin$Skin184;
		return t;
	};
	_proto.youbiao_i = function () {
		var t = new eui.Image();
		this.youbiao = t;
		t.source = "img_youbiao_png";
		t.x = 134;
		t.y = 820;
		return t;
	};
	_proto.lvsecaizu_i = function () {
		var t = new eui.Group();
		this.lvsecaizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109;
		t.width = 123;
		t.x = 84;
		t.y = 903;
		t.elementsContent = [this.lvsexuanxiang_i()];
		return t;
	};
	_proto.lvsexuanxiang_i = function () {
		var t = new eui.Image();
		this.lvsexuanxiang = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_xiaohuo_png";
		t.x = 24.5;
		t.y = 3.5;
		return t;
	};
	_proto.zisezu_i = function () {
		var t = new eui.Group();
		this.zisezu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109;
		t.width = 123;
		t.x = 308.5;
		t.y = 903;
		t.elementsContent = [this.zisexuanxiang_i()];
		return t;
	};
	_proto.zisexuanxiang_i = function () {
		var t = new eui.Image();
		this.zisexuanxiang = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.source = "img_baicai1_png";
		t.x = 12;
		t.y = 2;
		return t;
	};
	_proto.chengsezu_i = function () {
		var t = new eui.Group();
		this.chengsezu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109;
		t.width = 123;
		t.x = 533.5;
		t.y = 903;
		t.elementsContent = [this.chengsexuanxiang_i()];
		return t;
	};
	_proto.chengsexuanxiang_i = function () {
		var t = new eui.Image();
		this.chengsexuanxiang = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_rou1_png";
		t.x = 10.5;
		t.y = 15.5;
		return t;
	};
	return ZuofanjiemianuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/waipojiemianChangjingrukouui.exml'] = window.ChangjingrukouuiSkin = (function (_super) {
	__extends(ChangjingrukouuiSkin, _super);
	var ChangjingrukouuiSkin$Skin185 = 	(function (_super) {
		__extends(ChangjingrukouuiSkin$Skin185, _super);
		function ChangjingrukouuiSkin$Skin185() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_quxiao2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_quxiao2_png")
					])
			];
		}
		var _proto = ChangjingrukouuiSkin$Skin185.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_quxiao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChangjingrukouuiSkin$Skin185;
	})(eui.Skin);

	var ChangjingrukouuiSkin$Skin186 = 	(function (_super) {
		__extends(ChangjingrukouuiSkin$Skin186, _super);
		function ChangjingrukouuiSkin$Skin186() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jinru2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jinru2_png")
					])
			];
		}
		var _proto = ChangjingrukouuiSkin$Skin186.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jinru1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChangjingrukouuiSkin$Skin186;
	})(eui.Skin);

	function ChangjingrukouuiSkin() {
		_super.call(this);
		this.skinParts = ["img_jinrubeijing","img_biaotitu","rukoushuoming","but_quxiao","but_jinru","img_qian","xiaohaoqian","jiemainzu","jiemainrukouzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.jiemainrukouzu_i()];
	}
	var _proto = ChangjingrukouuiSkin.prototype;

	_proto.jiemainrukouzu_i = function () {
		var t = new eui.Group();
		this.jiemainrukouzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.jiemainzu_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "img_heisezhezao_png";
		t.top = 0;
		return t;
	};
	_proto.jiemainzu_i = function () {
		var t = new eui.Group();
		this.jiemainzu = t;
		t.x = 41.5;
		t.y = 415;
		t.elementsContent = [this.img_jinrubeijing_i(),this.img_biaotitu_i(),this.rukoushuoming_i(),this.but_quxiao_i(),this.but_jinru_i(),this.img_qian_i(),this.xiaohaoqian_i()];
		return t;
	};
	_proto.img_jinrubeijing_i = function () {
		var t = new eui.Image();
		this.img_jinrubeijing = t;
		t.source = "img_jinrubeijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_biaotitu_i = function () {
		var t = new eui.Image();
		this.img_biaotitu = t;
		t.source = "img_biaoticaishichang_png";
		t.x = 15.5;
		t.y = 27;
		return t;
	};
	_proto.rukoushuoming_i = function () {
		var t = new eui.Label();
		this.rukoushuoming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 143;
		t.lineSpacing = 10;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x706969;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 587;
		t.x = 39.5;
		t.y = 229;
		return t;
	};
	_proto.but_quxiao_i = function () {
		var t = new eui.Button();
		this.but_quxiao = t;
		t.label = "";
		t.x = 58.5;
		t.y = 402;
		t.skinName = ChangjingrukouuiSkin$Skin185;
		return t;
	};
	_proto.but_jinru_i = function () {
		var t = new eui.Button();
		this.but_jinru = t;
		t.label = "";
		t.x = 429.5;
		t.y = 402.5;
		t.skinName = ChangjingrukouuiSkin$Skin186;
		return t;
	};
	_proto.img_qian_i = function () {
		var t = new eui.Image();
		this.img_qian = t;
		t.height = 40;
		t.source = "img_qian_png";
		t.width = 40;
		t.x = 256.5;
		t.y = 415.5;
		return t;
	};
	_proto.xiaohaoqian_i = function () {
		var t = new eui.Label();
		this.xiaohaoqian = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 33;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xf7efef;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xea1e1e;
		t.verticalAlign = "middle";
		t.width = 117;
		t.x = 309.5;
		t.y = 422;
		return t;
	};
	return ChangjingrukouuiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Weishengtishi.exml'] = window.WeishengtishiSkin = (function (_super) {
	__extends(WeishengtishiSkin, _super);
	function WeishengtishiSkin() {
		_super.call(this);
		this.skinParts = ["wenzineirong0","img_shicai0","wenzizu"];
		
		this.height = 57;
		this.width = 128;
		this.elementsContent = [this.wenzizu_i()];
	}
	var _proto = WeishengtishiSkin.prototype;

	_proto.wenzizu_i = function () {
		var t = new eui.Group();
		this.wenzizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.width = 125;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.wenzineirong0_i(),this.img_shicai0_i()];
		return t;
	};
	_proto.wenzineirong0_i = function () {
		var t = new eui.Label();
		this.wenzineirong0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 4;
		t.strokeColor = 0xF7F7EF;
		t.text = "+ 50";
		t.textAlign = "right";
		t.textColor = 0xED871C;
		t.verticalAlign = "middle";
		t.width = 98;
		t.x = 21.5;
		t.y = 14.5;
		return t;
	};
	_proto.img_shicai0_i = function () {
		var t = new eui.Image();
		this.img_shicai0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.source = "img_saoba_png";
		t.width = 52;
		t.x = 4;
		t.y = 7.5;
		return t;
	};
	return WeishengtishiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Xiamiantishi.exml'] = window.XiamiantishiSkin = (function (_super) {
	__extends(XiamiantishiSkin, _super);
	function XiamiantishiSkin() {
		_super.call(this);
		this.skinParts = ["img_xiamiantishi","xiamiantishiwenzi","xiamiantishizu"];
		
		this.height = 45;
		this.width = 726;
		this.elementsContent = [this.xiamiantishizu_i()];
	}
	var _proto = XiamiantishiSkin.prototype;

	_proto.xiamiantishizu_i = function () {
		var t = new eui.Group();
		this.xiamiantishizu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_xiamiantishi_i(),this.xiamiantishiwenzi_i()];
		return t;
	};
	_proto.img_xiamiantishi_i = function () {
		var t = new eui.Image();
		this.img_xiamiantishi = t;
		t.source = "img_xiamiantishi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.xiamiantishiwenzi_i = function () {
		var t = new eui.Label();
		this.xiamiantishiwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 22;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xf7efef;
		t.text = "测试可以打多少个字啊测试可以打多少个字啊测试可以打多少个字啊";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 682;
		t.x = 19;
		t.y = 10;
		return t;
	};
	return XiamiantishiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Yuangongjiemian.exml'] = window.YuangongjiemianSkin = (function (_super) {
	__extends(YuangongjiemianSkin, _super);
	var YuangongjiemianSkin$Skin187 = 	(function (_super) {
		__extends(YuangongjiemianSkin$Skin187, _super);
		function YuangongjiemianSkin$Skin187() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_pinyong2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_pinyong2_png")
					])
			];
		}
		var _proto = YuangongjiemianSkin$Skin187.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_pinyong1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return YuangongjiemianSkin$Skin187;
	})(eui.Skin);

	var YuangongjiemianSkin$Skin188 = 	(function (_super) {
		__extends(YuangongjiemianSkin$Skin188, _super);
		function YuangongjiemianSkin$Skin188() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jiepin2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jiepin2_png")
					])
			];
		}
		var _proto = YuangongjiemianSkin$Skin188.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jiepin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return YuangongjiemianSkin$Skin188;
	})(eui.Skin);

	function YuangongjiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_yuangongbeijing","img_xiangkuangbeijing","ygtouxiang","xingming","nianling","jiguan","xueli","gerenjieshao","jinengming","jinengjiacheng","xinzi","xinzizhi","but_pinyong","but_jiepin","img_pinyongyinzhang","yuangongliebiao","yuangongzu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.yuangongzu_i()];
	}
	var _proto = YuangongjiemianSkin.prototype;

	_proto.yuangongzu_i = function () {
		var t = new eui.Group();
		this.yuangongzu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.yuangongliebiao_i()];
		return t;
	};
	_proto.yuangongliebiao_i = function () {
		var t = new eui.Group();
		this.yuangongliebiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 425;
		t.left = 94;
		t.right = 73;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 149;
		t.elementsContent = [this.img_yuangongbeijing_i(),this.img_xiangkuangbeijing_i(),this.ygtouxiang_i(),this.xingming_i(),this.nianling_i(),this.jiguan_i(),this.xueli_i(),this.gerenjieshao_i(),this.jinengming_i(),this.jinengjiacheng_i(),this.xinzi_i(),this.xinzizhi_i(),this.but_pinyong_i(),this.but_jiepin_i(),this.img_pinyongyinzhang_i()];
		return t;
	};
	_proto.img_yuangongbeijing_i = function () {
		var t = new eui.Image();
		this.img_yuangongbeijing = t;
		t.source = "img_yuangongbeijing_png";
		t.x = 0;
		t.y = -0.01;
		return t;
	};
	_proto.img_xiangkuangbeijing_i = function () {
		var t = new eui.Image();
		this.img_xiangkuangbeijing = t;
		t.source = "img_xiangkuangbeijing_png";
		t.x = 373;
		t.y = 127;
		return t;
	};
	_proto.ygtouxiang_i = function () {
		var t = new eui.Image();
		this.ygtouxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.source = "yg1001_png";
		t.width = 137;
		t.x = 374.5;
		t.y = 158.5;
		return t;
	};
	_proto.xingming_i = function () {
		var t = new eui.Label();
		this.xingming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.text = "张三丰";
		t.textAlign = "left";
		t.textColor = 0x232121;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 205;
		t.y = 122;
		return t;
	};
	_proto.nianling_i = function () {
		var t = new eui.Label();
		this.nianling = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.text = "30";
		t.textAlign = "left";
		t.textColor = 0x232121;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 205;
		t.y = 177.5;
		return t;
	};
	_proto.jiguan_i = function () {
		var t = new eui.Label();
		this.jiguan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.text = "湖南";
		t.textAlign = "left";
		t.textColor = 0x232121;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 205;
		t.y = 236.5;
		return t;
	};
	_proto.xueli_i = function () {
		var t = new eui.Label();
		this.xueli = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 42;
		t.size = 24;
		t.text = "高中";
		t.textAlign = "left";
		t.textColor = 0x232121;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 205;
		t.y = 292.5;
		return t;
	};
	_proto.gerenjieshao_i = function () {
		var t = new eui.Label();
		this.gerenjieshao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 146;
		t.size = 24;
		t.text = "高中";
		t.textAlign = "left";
		t.textColor = 0x232121;
		t.verticalAlign = "top";
		t.width = 308;
		t.x = 205;
		t.y = 359;
		return t;
	};
	_proto.jinengming_i = function () {
		var t = new eui.Label();
		this.jinengming = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.text = "小炒价格：";
		t.textAlign = "left";
		t.textColor = 0x232121;
		t.verticalAlign = "middle";
		t.width = 158;
		t.x = 205;
		t.y = 532;
		return t;
	};
	_proto.jinengjiacheng_i = function () {
		var t = new eui.Label();
		this.jinengjiacheng = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.text = "+ 5";
		t.textAlign = "left";
		t.textColor = 0x232121;
		t.verticalAlign = "middle";
		t.width = 158;
		t.x = 365;
		t.y = 532;
		return t;
	};
	_proto.xinzi_i = function () {
		var t = new eui.Label();
		this.xinzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.text = "日薪：";
		t.textAlign = "left";
		t.textColor = 0x232121;
		t.verticalAlign = "middle";
		t.width = 158;
		t.x = 205;
		t.y = 574;
		return t;
	};
	_proto.xinzizhi_i = function () {
		var t = new eui.Label();
		this.xinzizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 28;
		t.size = 24;
		t.text = "100/天";
		t.textAlign = "left";
		t.textColor = 0x232121;
		t.verticalAlign = "middle";
		t.width = 158;
		t.x = 365;
		t.y = 574;
		return t;
	};
	_proto.but_pinyong_i = function () {
		var t = new eui.Button();
		this.but_pinyong = t;
		t.enabled = true;
		t.label = "";
		t.x = 349.5;
		t.y = 621;
		t.skinName = YuangongjiemianSkin$Skin187;
		return t;
	};
	_proto.but_jiepin_i = function () {
		var t = new eui.Button();
		this.but_jiepin = t;
		t.enabled = true;
		t.label = "";
		t.x = 349.5;
		t.y = 621;
		t.skinName = YuangongjiemianSkin$Skin188;
		return t;
	};
	_proto.img_pinyongyinzhang_i = function () {
		var t = new eui.Image();
		this.img_pinyongyinzhang = t;
		t.source = "img_pinyongyinzhang_png";
		t.x = 247.5;
		t.y = 223;
		return t;
	};
	return YuangongjiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Zhujiemian.exml'] = window.ZhujiemianSkin = (function (_super) {
	__extends(ZhujiemianSkin, _super);
	var ZhujiemianSkin$Skin189 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin189, _super);
		function ZhujiemianSkin$Skin189() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin189.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin189;
	})(eui.Skin);

	var ZhujiemianSkin$Skin190 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin190, _super);
		function ZhujiemianSkin$Skin190() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin190.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin190;
	})(eui.Skin);

	var ZhujiemianSkin$Skin191 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin191, _super);
		function ZhujiemianSkin$Skin191() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin191.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin191;
	})(eui.Skin);

	var ZhujiemianSkin$Skin192 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin192, _super);
		function ZhujiemianSkin$Skin192() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin192.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin192;
	})(eui.Skin);

	var ZhujiemianSkin$Skin193 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin193, _super);
		function ZhujiemianSkin$Skin193() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin193.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin193;
	})(eui.Skin);

	var ZhujiemianSkin$Skin194 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin194, _super);
		function ZhujiemianSkin$Skin194() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin194.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin194;
	})(eui.Skin);

	var ZhujiemianSkin$Skin195 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin195, _super);
		function ZhujiemianSkin$Skin195() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin195.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin195;
	})(eui.Skin);

	var ZhujiemianSkin$Skin196 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin196, _super);
		function ZhujiemianSkin$Skin196() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin196.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin196;
	})(eui.Skin);

	var ZhujiemianSkin$Skin197 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin197, _super);
		function ZhujiemianSkin$Skin197() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin197.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin197;
	})(eui.Skin);

	var ZhujiemianSkin$Skin198 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin198, _super);
		function ZhujiemianSkin$Skin198() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin198.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin198;
	})(eui.Skin);

	var ZhujiemianSkin$Skin199 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin199, _super);
		function ZhujiemianSkin$Skin199() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin199.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin199;
	})(eui.Skin);

	var ZhujiemianSkin$Skin200 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin200, _super);
		function ZhujiemianSkin$Skin200() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin200.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin200;
	})(eui.Skin);

	var ZhujiemianSkin$Skin201 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin201, _super);
		function ZhujiemianSkin$Skin201() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin201.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin201;
	})(eui.Skin);

	var ZhujiemianSkin$Skin202 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin202, _super);
		function ZhujiemianSkin$Skin202() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin202.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin202;
	})(eui.Skin);

	var ZhujiemianSkin$Skin203 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin203, _super);
		function ZhujiemianSkin$Skin203() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin203.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin203;
	})(eui.Skin);

	var ZhujiemianSkin$Skin204 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin204, _super);
		function ZhujiemianSkin$Skin204() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin204.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin204;
	})(eui.Skin);

	var ZhujiemianSkin$Skin205 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin205, _super);
		function ZhujiemianSkin$Skin205() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin205.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin205;
	})(eui.Skin);

	var ZhujiemianSkin$Skin206 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin206, _super);
		function ZhujiemianSkin$Skin206() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin206.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin206;
	})(eui.Skin);

	var ZhujiemianSkin$Skin207 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin207, _super);
		function ZhujiemianSkin$Skin207() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin207.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin207;
	})(eui.Skin);

	var ZhujiemianSkin$Skin208 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin208, _super);
		function ZhujiemianSkin$Skin208() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin208.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin208;
	})(eui.Skin);

	var ZhujiemianSkin$Skin209 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin209, _super);
		function ZhujiemianSkin$Skin209() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin209.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin209;
	})(eui.Skin);

	var ZhujiemianSkin$Skin210 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin210, _super);
		function ZhujiemianSkin$Skin210() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin210.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin210;
	})(eui.Skin);

	var ZhujiemianSkin$Skin211 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin211, _super);
		function ZhujiemianSkin$Skin211() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin211.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin211;
	})(eui.Skin);

	var ZhujiemianSkin$Skin212 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin212, _super);
		function ZhujiemianSkin$Skin212() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin212.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin212;
	})(eui.Skin);

	var ZhujiemianSkin$Skin213 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin213, _super);
		function ZhujiemianSkin$Skin213() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_laji2_png")
					])
			];
		}
		var _proto = ZhujiemianSkin$Skin213.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_laji1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianSkin$Skin213;
	})(eui.Skin);

	function ZhujiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_fandianyuanhuabg0","img_jiaju_xiaochao","img_jiaju_huoguo","img_jiaju_xiaochi","img_jiaju_dianxin","but_laji2","but_laji0","but_laji1","but_laji3","but_laji4","but_laji5","but_laji6","but_laji7","but_laji8","but_laji9","but_laji10","but_laji11","but_laji12","but_laji13","but_laji14","but_laji15","but_laji16","but_laji17","but_laji18","but_laji19","but_laji20","but_laji21","but_laji22","but_laji23","but_laji24","zhuyaozu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhuyaozu_i()];
	}
	var _proto = ZhujiemianSkin.prototype;

	_proto.zhuyaozu_i = function () {
		var t = new eui.Group();
		this.zhuyaozu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_fandianyuanhuabg0_i(),this.img_jiaju_xiaochao_i(),this.img_jiaju_huoguo_i(),this.img_jiaju_xiaochi_i(),this.img_jiaju_dianxin_i(),this.but_laji2_i(),this.but_laji0_i(),this.but_laji1_i(),this.but_laji3_i(),this.but_laji4_i(),this.but_laji5_i(),this.but_laji6_i(),this.but_laji7_i(),this.but_laji8_i(),this.but_laji9_i(),this.but_laji10_i(),this.but_laji11_i(),this.but_laji12_i(),this.but_laji13_i(),this.but_laji14_i(),this.but_laji15_i(),this.but_laji16_i(),this.but_laji17_i(),this.but_laji18_i(),this.but_laji19_i(),this.but_laji20_i(),this.but_laji21_i(),this.but_laji22_i(),this.but_laji23_i(),this.but_laji24_i()];
		return t;
	};
	_proto.img_fandianyuanhuabg0_i = function () {
		var t = new eui.Image();
		this.img_fandianyuanhuabg0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_fandianyuanhuabg_png";
		t.top = 0;
		return t;
	};
	_proto.img_jiaju_xiaochao_i = function () {
		var t = new eui.Image();
		this.img_jiaju_xiaochao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_jiaju1_1_png";
		t.width = 250;
		t.x = 363;
		t.y = 1047.25;
		return t;
	};
	_proto.img_jiaju_huoguo_i = function () {
		var t = new eui.Image();
		this.img_jiaju_huoguo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.source = "img_jiaju2_1_png";
		t.width = 240;
		t.x = 357;
		t.y = 699;
		return t;
	};
	_proto.img_jiaju_xiaochi_i = function () {
		var t = new eui.Image();
		this.img_jiaju_xiaochi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.source = "img_jiaju3_1_png";
		t.width = 210;
		t.x = 139;
		t.y = 415;
		return t;
	};
	_proto.img_jiaju_dianxin_i = function () {
		var t = new eui.Image();
		this.img_jiaju_dianxin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.source = "img_jiaju4_1_png";
		t.width = 190;
		t.x = 557;
		t.y = 393;
		return t;
	};
	_proto.but_laji2_i = function () {
		var t = new eui.Button();
		this.but_laji2 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 197.5;
		t.y = 441;
		t.skinName = ZhujiemianSkin$Skin189;
		return t;
	};
	_proto.but_laji0_i = function () {
		var t = new eui.Button();
		this.but_laji0 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 350;
		t.y = 441;
		t.skinName = ZhujiemianSkin$Skin190;
		return t;
	};
	_proto.but_laji1_i = function () {
		var t = new eui.Button();
		this.but_laji1 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 507;
		t.y = 441;
		t.skinName = ZhujiemianSkin$Skin191;
		return t;
	};
	_proto.but_laji3_i = function () {
		var t = new eui.Button();
		this.but_laji3 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 419.5;
		t.y = 419;
		t.skinName = ZhujiemianSkin$Skin192;
		return t;
	};
	_proto.but_laji4_i = function () {
		var t = new eui.Button();
		this.but_laji4 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 130.5;
		t.y = 757;
		t.skinName = ZhujiemianSkin$Skin193;
		return t;
	};
	_proto.but_laji5_i = function () {
		var t = new eui.Button();
		this.but_laji5 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 252.91;
		t.y = 757;
		t.skinName = ZhujiemianSkin$Skin194;
		return t;
	};
	_proto.but_laji6_i = function () {
		var t = new eui.Button();
		this.but_laji6 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 379.95;
		t.y = 757.63;
		t.skinName = ZhujiemianSkin$Skin195;
		return t;
	};
	_proto.but_laji7_i = function () {
		var t = new eui.Button();
		this.but_laji7 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 507;
		t.y = 757.63;
		t.skinName = ZhujiemianSkin$Skin196;
		return t;
	};
	_proto.but_laji8_i = function () {
		var t = new eui.Button();
		this.but_laji8 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 621;
		t.y = 757;
		t.skinName = ZhujiemianSkin$Skin197;
		return t;
	};
	_proto.but_laji9_i = function () {
		var t = new eui.Button();
		this.but_laji9 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 309.91;
		t.y = 705;
		t.skinName = ZhujiemianSkin$Skin198;
		return t;
	};
	_proto.but_laji10_i = function () {
		var t = new eui.Button();
		this.but_laji10 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 621;
		t.y = 400;
		t.skinName = ZhujiemianSkin$Skin199;
		return t;
	};
	_proto.but_laji11_i = function () {
		var t = new eui.Button();
		this.but_laji11 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 291.5;
		t.y = 380;
		t.skinName = ZhujiemianSkin$Skin200;
		return t;
	};
	_proto.but_laji12_i = function () {
		var t = new eui.Button();
		this.but_laji12 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 140.5;
		t.y = 380;
		t.skinName = ZhujiemianSkin$Skin201;
		return t;
	};
	_proto.but_laji13_i = function () {
		var t = new eui.Button();
		this.but_laji13 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 236;
		t.y = 397;
		t.skinName = ZhujiemianSkin$Skin202;
		return t;
	};
	_proto.but_laji14_i = function () {
		var t = new eui.Button();
		this.but_laji14 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 557;
		t.y = 716;
		t.skinName = ZhujiemianSkin$Skin203;
		return t;
	};
	_proto.but_laji15_i = function () {
		var t = new eui.Button();
		this.but_laji15 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 177.5;
		t.y = 716.63;
		t.skinName = ZhujiemianSkin$Skin204;
		return t;
	};
	_proto.but_laji16_i = function () {
		var t = new eui.Button();
		this.but_laji16 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 405.5;
		t.y = 1062.25;
		t.skinName = ZhujiemianSkin$Skin205;
		return t;
	};
	_proto.but_laji17_i = function () {
		var t = new eui.Button();
		this.but_laji17 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 519.5;
		t.y = 1075.48;
		t.skinName = ZhujiemianSkin$Skin206;
		return t;
	};
	_proto.but_laji18_i = function () {
		var t = new eui.Button();
		this.but_laji18 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 621;
		t.y = 1062.25;
		t.skinName = ZhujiemianSkin$Skin207;
		return t;
	};
	_proto.but_laji19_i = function () {
		var t = new eui.Button();
		this.but_laji19 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 318;
		t.y = 1062.25;
		t.skinName = ZhujiemianSkin$Skin208;
		return t;
	};
	_proto.but_laji20_i = function () {
		var t = new eui.Button();
		this.but_laji20 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 362.5;
		t.y = 1021.25;
		t.skinName = ZhujiemianSkin$Skin209;
		return t;
	};
	_proto.but_laji21_i = function () {
		var t = new eui.Button();
		this.but_laji21 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 464;
		t.y = 1021.25;
		t.skinName = ZhujiemianSkin$Skin210;
		return t;
	};
	_proto.but_laji22_i = function () {
		var t = new eui.Button();
		this.but_laji22 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 596;
		t.y = 939.25;
		t.skinName = ZhujiemianSkin$Skin211;
		return t;
	};
	_proto.but_laji23_i = function () {
		var t = new eui.Button();
		this.but_laji23 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 533.5;
		t.y = 839;
		t.skinName = ZhujiemianSkin$Skin212;
		return t;
	};
	_proto.but_laji24_i = function () {
		var t = new eui.Button();
		this.but_laji24 = t;
		t.alpha = 0;
		t.enabled = false;
		t.label = "";
		t.x = 423.91;
		t.y = 675;
		t.skinName = ZhujiemianSkin$Skin213;
		return t;
	};
	return ZhujiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Zhujiemianshangceng.exml'] = window.ZhujiemianshangcengSkin = (function (_super) {
	__extends(ZhujiemianshangcengSkin, _super);
	var ZhujiemianshangcengSkin$Skin214 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin214, _super);
		function ZhujiemianshangcengSkin$Skin214() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_caipu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_caipu2_png")
					])
			];
		}
		var _proto = ZhujiemianshangcengSkin$Skin214.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_caipu1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianshangcengSkin$Skin214;
	})(eui.Skin);

	var ZhujiemianshangcengSkin$Skin215 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin215, _super);
		function ZhujiemianshangcengSkin$Skin215() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_liuyan2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_liuyan2_png")
					])
			];
		}
		var _proto = ZhujiemianshangcengSkin$Skin215.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_liuyan1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianshangcengSkin$Skin215;
	})(eui.Skin);

	var ZhujiemianshangcengSkin$Skin216 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin216, _super);
		function ZhujiemianshangcengSkin$Skin216() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_guanli2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanli2_png")
					])
			];
		}
		var _proto = ZhujiemianshangcengSkin$Skin216.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_guanli1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianshangcengSkin$Skin216;
	})(eui.Skin);

	var ZhujiemianshangcengSkin$Skin217 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin217, _super);
		function ZhujiemianshangcengSkin$Skin217() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_jingyinbaobiao2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jingyinbaobiao2_png")
					])
			];
		}
		var _proto = ZhujiemianshangcengSkin$Skin217.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_jingyinbaobiao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianshangcengSkin$Skin217;
	})(eui.Skin);

	var ZhujiemianshangcengSkin$Skin218 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin218, _super);
		function ZhujiemianshangcengSkin$Skin218() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","but_tianjia2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_tianjia2_png")
					])
			];
		}
		var _proto = ZhujiemianshangcengSkin$Skin218.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_tianjia1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZhujiemianshangcengSkin$Skin218;
	})(eui.Skin);

	function ZhujiemianshangcengSkin() {
		_super.call(this);
		this.skinParts = ["img_tiziqianduan","but_caipu1","but_liuyan1","but_guanli1","but_jingyinbaobiao1","zhongbuzu1","img_zhuangtaixianshibg","shicaiwenzi","img_shicai","but_tianjia","img_zhuangtaixianshibg0","weishengwenzi","img_saoba","img_shicaibuzu","zhuangatizu","zhuyaozu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhuyaozu_i()];
	}
	var _proto = ZhujiemianshangcengSkin.prototype;

	_proto.zhuyaozu_i = function () {
		var t = new eui.Group();
		this.zhuyaozu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.elementsContent = [this.img_tiziqianduan_i(),this.zhongbuzu1_i(),this.zhuangatizu_i()];
		return t;
	};
	_proto.img_tiziqianduan_i = function () {
		var t = new eui.Image();
		this.img_tiziqianduan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.pixelHitTest = true;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_tiziqianduan_png";
		t.top = 0;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhongbuzu1_i = function () {
		var t = new eui.Group();
		this.zhongbuzu1 = t;
		t.height = 339;
		t.touchThrough = true;
		t.width = 712;
		t.x = 9;
		t.y = 748;
		t.elementsContent = [this.but_caipu1_i(),this.but_liuyan1_i(),this.but_guanli1_i(),this.but_jingyinbaobiao1_i()];
		return t;
	};
	_proto.but_caipu1_i = function () {
		var t = new eui.Button();
		this.but_caipu1 = t;
		t.enabled = true;
		t.height = 96;
		t.width = 96;
		t.x = 615.5;
		t.y = 243;
		t.skinName = ZhujiemianshangcengSkin$Skin214;
		return t;
	};
	_proto.but_liuyan1_i = function () {
		var t = new eui.Button();
		this.but_liuyan1 = t;
		t.enabled = true;
		t.height = 96;
		t.width = 96;
		t.x = 615.5;
		t.y = 121.5;
		t.skinName = ZhujiemianshangcengSkin$Skin215;
		return t;
	};
	_proto.but_guanli1_i = function () {
		var t = new eui.Button();
		this.but_guanli1 = t;
		t.enabled = true;
		t.height = 96;
		t.width = 96;
		t.x = 612.5;
		t.y = 0;
		t.skinName = ZhujiemianshangcengSkin$Skin216;
		return t;
	};
	_proto.but_jingyinbaobiao1_i = function () {
		var t = new eui.Button();
		this.but_jingyinbaobiao1 = t;
		t.enabled = true;
		t.x = 0;
		t.y = 152;
		t.skinName = ZhujiemianshangcengSkin$Skin217;
		return t;
	};
	_proto.zhuangatizu_i = function () {
		var t = new eui.Group();
		this.zhuangatizu = t;
		t.x = 12.5;
		t.y = 563;
		t.elementsContent = [this.img_zhuangtaixianshibg_i(),this.shicaiwenzi_i(),this.img_shicai_i(),this.but_tianjia_i(),this.img_zhuangtaixianshibg0_i(),this.weishengwenzi_i(),this.img_saoba_i(),this.img_shicaibuzu_i()];
		return t;
	};
	_proto.img_zhuangtaixianshibg_i = function () {
		var t = new eui.Image();
		this.img_zhuangtaixianshibg = t;
		t.source = "img_zhuangtaixianshibg_png";
		t.x = 42;
		t.y = 7;
		return t;
	};
	_proto.shicaiwenzi_i = function () {
		var t = new eui.Label();
		this.shicaiwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 27;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xefe6e6;
		t.text = "999999";
		t.textAlign = "right";
		t.textColor = 0x0c0b0b;
		t.verticalAlign = "middle";
		t.width = 82;
		t.x = 47;
		t.y = 11;
		return t;
	};
	_proto.img_shicai_i = function () {
		var t = new eui.Image();
		this.img_shicai = t;
		t.source = "img_shicai_png";
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto.but_tianjia_i = function () {
		var t = new eui.Button();
		this.but_tianjia = t;
		t.enabled = true;
		t.label = "";
		t.x = 141;
		t.y = 1;
		t.skinName = ZhujiemianshangcengSkin$Skin218;
		return t;
	};
	_proto.img_zhuangtaixianshibg0_i = function () {
		var t = new eui.Image();
		this.img_zhuangtaixianshibg0 = t;
		t.source = "img_zhuangtaixianshibg_png";
		t.x = 42;
		t.y = 75;
		return t;
	};
	_proto.weishengwenzi_i = function () {
		var t = new eui.Label();
		this.weishengwenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "wodeziti";
		t.height = 27;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0xEFE6E6;
		t.text = "999999";
		t.textAlign = "right";
		t.textColor = 0x0C0B0B;
		t.verticalAlign = "middle";
		t.width = 82;
		t.x = 47;
		t.y = 79;
		return t;
	};
	_proto.img_saoba_i = function () {
		var t = new eui.Image();
		this.img_saoba = t;
		t.source = "img_saoba_png";
		t.x = 0;
		t.y = 52;
		return t;
	};
	_proto.img_shicaibuzu_i = function () {
		var t = new eui.Image();
		this.img_shicaibuzu = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_shicaibuzu_png";
		t.x = 9;
		t.y = -56;
		return t;
	};
	return ZhujiemianshangcengSkin;
})(eui.Skin);
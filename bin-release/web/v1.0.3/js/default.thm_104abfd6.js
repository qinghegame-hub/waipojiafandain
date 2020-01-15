
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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Zhujiemian":"resource/eui_skins/Zhujiemian.exml","dingbuxinxi":"resource/eui_skins/dingbuxinxi.exml","dibuxinxi":"resource/eui_skins/dibuxinxi.exml","Caipujiemian":"resource/eui_skins/Caipujiemian.exml","Caipucaiping":"resource/eui_skins/Caipucaiping.exml","Caipinjieshaojiemian":"resource/eui_skins/Caipinjieshaojiemian.exml","Guanlijiemian":"resource/eui_skins/Guanlijiemian.exml","Jiajugoumai":"resource/eui_skins/Jiajugoumai.exml","Cuowutishi":"resource/eui_skins/Cuowutishi.exml","Yuangongjiemian":"resource/eui_skins/Yuangongjiemian.exml","Tuiguangchuandan":"resource/eui_skins/Tuiguangchuandan.exml","Tuiguangdianshi":"resource/eui_skins/Tuiguangdianshi.exml","Tuiguangpinglun":"resource/eui_skins/Tuiguangpinglun.exml","Tuiguangdaiyan":"resource/eui_skins/Tuiguangdaiyan.exml","Danjujiemian":"resource/eui_skins/Danjujiemian.exml","Ttoudingqipaojiemian":"resource/eui_skins/Ttoudingqipaojiemian.exml","Zhujiemianshangceng":"resource/eui_skins/Zhujiemianshangceng.exml","Toudingwenzi":"resource/eui_skins/Toudingwenzi.exml","Jinbiwenben":"resource/eui_skins/Jinbiwenben.exml","Saobadonghua":"resource/eui_skins/Saobadonghua.exml","Dasaodonghua":"resource/eui_skins/Dasaodonghua.exml","Cailiaoxiaohao":"resource/eui_skins/Cailiaoxiaohao.exml","Weishengtishi":"resource/eui_skins/Weishengtishi.exml"};generateEUI.paths['resource/eui_skins/Cailiaoxiaohao.exml'] = window.CailiaoxiaohaoSkin = (function (_super) {
	__extends(CailiaoxiaohaoSkin, _super);
	function CailiaoxiaohaoSkin() {
		_super.call(this);
		this.skinParts = ["wenzineirong","img_shicai","wenzizu"];
		
		this.height = 58;
		this.width = 129;
		this.elementsContent = [this.wenzizu_i()];
	}
	var _proto = CailiaoxiaohaoSkin.prototype;

	_proto.wenzizu_i = function () {
		var t = new eui.Group();
		this.wenzizu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.width = 125;
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
		t.textAlign = "right";
		t.textColor = 0xED871C;
		t.verticalAlign = "middle";
		t.width = 98;
		t.x = 21.5;
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

	function CaipinjieshaojiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_caipujieshaobg","img_biaoticaipujieshao","caipinmingcheng","biaotizu","but_zhuanfa","but_zhizuo","chushoudanjia","chushoudanjia0","caipinshuxingzu","jianjie","caipindeicon","caipinjiemainzu"];
		
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
		t.elementsContent = [this.img_caipujieshaobg_i(),this.biaotizu_i(),this.but_zhuanfa_i(),this.but_zhizuo_i(),this.caipinshuxingzu_i(),this.jianjie_i(),this.caipindeicon_i()];
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
		t.horizontalCenter = 0;
		t.verticalCenter = -481;
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
		t.horizontalCenter = 262.5;
		t.label = "";
		t.verticalCenter = -317.5;
		t.skinName = CaipinjieshaojiemianSkin$Skin1;
		return t;
	};
	_proto.but_zhizuo_i = function () {
		var t = new eui.Button();
		this.but_zhizuo = t;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 517;
		t.skinName = CaipinjieshaojiemianSkin$Skin2;
		return t;
	};
	_proto.caipinshuxingzu_i = function () {
		var t = new eui.Group();
		this.caipinshuxingzu = t;
		t.horizontalCenter = 38;
		t.verticalCenter = 118;
		t.elementsContent = [this.chushoudanjia_i(),this.chushoudanjia0_i()];
		return t;
	};
	_proto.chushoudanjia_i = function () {
		var t = new eui.Label();
		this.chushoudanjia = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 41;
		t.size = 24;
		t.text = "出售单价：584";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 524;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chushoudanjia0_i = function () {
		var t = new eui.Label();
		this.chushoudanjia0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 41;
		t.size = 24;
		t.text = "消耗食材：584";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 524;
		t.x = 0;
		t.y = 63;
		return t;
	};
	_proto.jianjie_i = function () {
		var t = new eui.Label();
		this.jianjie = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 166;
		t.horizontalCenter = 5;
		t.size = 18;
		t.text = "农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉农家小炒肉";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.verticalCenter = 357;
		t.width = 450;
		return t;
	};
	_proto.caipindeicon_i = function () {
		var t = new eui.Image();
		this.caipindeicon = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "1007_png";
		t.x = 247;
		t.y = 338.5;
		return t;
	};
	return CaipinjieshaojiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Caipucaiping.exml'] = window.CaipucaipingSkin = (function (_super) {
	__extends(CaipucaipingSkin, _super);
	var CaipucaipingSkin$Skin3 = 	(function (_super) {
		__extends(CaipucaipingSkin$Skin3, _super);
		function CaipucaipingSkin$Skin3() {
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
		var _proto = CaipucaipingSkin$Skin3.prototype;

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
		return CaipucaipingSkin$Skin3;
	})(eui.Skin);

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

	function CaipucaipingSkin() {
		_super.call(this);
		this.skinParts = ["img_caipandiban0","caipinicon0","caipinname0","caipinjiagezhi0","jiagetubiao0","but_jiesuo0","img_weihuode0","caixianshi0","img_caipandiban1","caipinicon1","caipinname1","caipinjiagezhi1","jiagetubiao1","but_jiesuo1","img_weihuode1","caixianshi1","img_caipandiban2","caipinicon2","caipinname2","caipinjiagezhi2","jiagetubiao2","but_jiesuo2","img_weihuode2","caixianshi2","img_caipandiban3","caipinicon3","caipinname3","caipinjiagezhi3","jiagetubiao3","but_jiesuo3","img_weihuode3","caixianshi3","img_caipandiban4","caipinname4","caipinjiagezhi4","jiagetubiao4","caipinicon4","but_jiesuo4","img_weihuode4","caixianshi4","img_caipandiban5","caipinicon5","caipinname5","caipinjiagezhi5","jiagetubiao5","but_jiesuo5","img_weihuode5","caixianshi5","fenlanxianshizu","canpuzu"];
		
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
		t.elementsContent = [this.img_caipandiban0_i(),this.caipinicon0_i(),this.caipinname0_i(),this.caipinjiagezhi0_i(),this.jiagetubiao0_i(),this.but_jiesuo0_i(),this.img_weihuode0_i()];
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
		t.skinName = CaipucaipingSkin$Skin3;
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
	_proto.caixianshi1_i = function () {
		var t = new eui.Group();
		this.caixianshi1 = t;
		t.x = 42.35;
		t.y = 242.34;
		t.elementsContent = [this.img_caipandiban1_i(),this.caipinicon1_i(),this.caipinname1_i(),this.caipinjiagezhi1_i(),this.jiagetubiao1_i(),this.but_jiesuo1_i(),this.img_weihuode1_i()];
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
		t.skinName = CaipucaipingSkin$Skin4;
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
	_proto.caixianshi2_i = function () {
		var t = new eui.Group();
		this.caixianshi2 = t;
		t.x = 287.35;
		t.y = 241.34;
		t.elementsContent = [this.img_caipandiban2_i(),this.caipinicon2_i(),this.caipinname2_i(),this.caipinjiagezhi2_i(),this.jiagetubiao2_i(),this.but_jiesuo2_i(),this.img_weihuode2_i()];
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
		t.skinName = CaipucaipingSkin$Skin5;
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
	_proto.caixianshi3_i = function () {
		var t = new eui.Group();
		this.caixianshi3 = t;
		t.x = 43.35;
		t.y = 478.34;
		t.elementsContent = [this.img_caipandiban3_i(),this.caipinicon3_i(),this.caipinname3_i(),this.caipinjiagezhi3_i(),this.jiagetubiao3_i(),this.but_jiesuo3_i(),this.img_weihuode3_i()];
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
		t.skinName = CaipucaipingSkin$Skin6;
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
	_proto.caixianshi4_i = function () {
		var t = new eui.Group();
		this.caixianshi4 = t;
		t.x = 287.35;
		t.y = 477.34;
		t.elementsContent = [this.img_caipandiban4_i(),this.caipinname4_i(),this.caipinjiagezhi4_i(),this.jiagetubiao4_i(),this.caipinicon4_i(),this.but_jiesuo4_i(),this.img_weihuode4_i()];
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
		t.skinName = CaipucaipingSkin$Skin7;
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
	_proto.caixianshi5_i = function () {
		var t = new eui.Group();
		this.caixianshi5 = t;
		t.x = 41.35;
		t.y = 7.34;
		t.elementsContent = [this.img_caipandiban5_i(),this.caipinicon5_i(),this.caipinname5_i(),this.caipinjiagezhi5_i(),this.jiagetubiao5_i(),this.but_jiesuo5_i(),this.img_weihuode5_i()];
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
		t.skinName = CaipucaipingSkin$Skin8;
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
	return CaipucaipingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Caipujiemian.exml'] = window.CaipujiemianSkin = (function (_super) {
	__extends(CaipujiemianSkin, _super);
	var CaipujiemianSkin$Skin9 = 	(function (_super) {
		__extends(CaipujiemianSkin$Skin9, _super);
		function CaipujiemianSkin$Skin9() {
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
		var _proto = CaipujiemianSkin$Skin9.prototype;

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
		return CaipujiemianSkin$Skin9;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","but_zha1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_zha1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin10.prototype;

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
						new eui.SetProperty("_Image1","source","but_jian1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_jian1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin11.prototype;

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
						new eui.SetProperty("_Image1","source","but_zhu1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_zhu1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin12.prototype;

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
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_guanbi1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin13.prototype;

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
						new eui.SetProperty("_Image1","source","but_up1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_up1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin14.prototype;

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
						new eui.SetProperty("_Image1","source","but_down1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_down1_png")
					])
			];
		}
		var _proto = CaipujiemianSkin$Skin15.prototype;

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
		return CaipujiemianSkin$Skin15;
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
		t.skinName = CaipujiemianSkin$Skin9;
		return t;
	};
	_proto.but_zha_i = function () {
		var t = new eui.Button();
		this.but_zha = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 290.97;
		t.skinName = CaipujiemianSkin$Skin10;
		return t;
	};
	_proto.but_jian_i = function () {
		var t = new eui.Button();
		this.but_jian = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 490.73;
		t.skinName = CaipujiemianSkin$Skin11;
		return t;
	};
	_proto.but_zhu_i = function () {
		var t = new eui.Button();
		this.but_zhu = t;
		t.enabled = true;
		t.label = "";
		t.x = 0;
		t.y = 693.33;
		t.skinName = CaipujiemianSkin$Skin12;
		return t;
	};
	_proto.but_guanbi_i = function () {
		var t = new eui.Button();
		this.but_guanbi = t;
		t.enabled = true;
		t.label = "";
		t.x = 625;
		t.y = 4;
		t.skinName = CaipujiemianSkin$Skin13;
		return t;
	};
	_proto.but_up_i = function () {
		var t = new eui.Button();
		this.but_up = t;
		t.enabled = true;
		t.label = "";
		t.x = 665;
		t.y = 392.23;
		t.skinName = CaipujiemianSkin$Skin14;
		return t;
	};
	_proto.but_down_i = function () {
		var t = new eui.Button();
		this.but_down = t;
		t.enabled = true;
		t.label = "";
		t.x = 665;
		t.y = 505.73;
		t.skinName = CaipujiemianSkin$Skin15;
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
		t.y = 22.5;
		return t;
	};
	return CuowutishiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Danjujiemian.exml'] = window.DanjujiemianSkin = (function (_super) {
	__extends(DanjujiemianSkin, _super);
	var DanjujiemianSkin$Skin16 = 	(function (_super) {
		__extends(DanjujiemianSkin$Skin16, _super);
		function DanjujiemianSkin$Skin16() {
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
		var _proto = DanjujiemianSkin$Skin16.prototype;

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
		return DanjujiemianSkin$Skin16;
	})(eui.Skin);

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
		t.skinName = DanjujiemianSkin$Skin16;
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
		t.skinName = DanjujiemianSkin$Skin17;
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
	var dibuxinxiSkin$Skin18 = 	(function (_super) {
		__extends(dibuxinxiSkin$Skin18, _super);
		function dibuxinxiSkin$Skin18() {
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
		var _proto = dibuxinxiSkin$Skin18.prototype;

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
		return dibuxinxiSkin$Skin18;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","but_gongyuan2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_gongyuan2_png")
					])
			];
		}
		var _proto = dibuxinxiSkin$Skin19.prototype;

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
						new eui.SetProperty("_Image1","source","but_licai2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_licai2_png")
					])
			];
		}
		var _proto = dibuxinxiSkin$Skin20.prototype;

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
						new eui.SetProperty("_Image1","source","but_huijia2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_huijia2_png")
					])
			];
		}
		var _proto = dibuxinxiSkin$Skin21.prototype;

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
		return dibuxinxiSkin$Skin21;
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
		t.skinName = dibuxinxiSkin$Skin18;
		return t;
	};
	_proto.but_gongyuan1_i = function () {
		var t = new eui.Button();
		this.but_gongyuan1 = t;
		t.enabled = true;
		t.x = 215;
		t.y = 0;
		t.skinName = dibuxinxiSkin$Skin19;
		return t;
	};
	_proto.but_licai1_i = function () {
		var t = new eui.Button();
		this.but_licai1 = t;
		t.enabled = true;
		t.x = 394;
		t.y = 0;
		t.skinName = dibuxinxiSkin$Skin20;
		return t;
	};
	_proto.but_huijia1_i = function () {
		var t = new eui.Button();
		this.but_huijia1 = t;
		t.enabled = true;
		t.x = 573;
		t.y = 0;
		t.skinName = dibuxinxiSkin$Skin21;
		return t;
	};
	return dibuxinxiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/dingbuxinxi.exml'] = window.dingbuxinxiSkin = (function (_super) {
	__extends(dingbuxinxiSkin, _super);
	var dingbuxinxiSkin$Skin22 = 	(function (_super) {
		__extends(dingbuxinxiSkin$Skin22, _super);
		function dingbuxinxiSkin$Skin22() {
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
						new eui.SetProperty("_Image1","source","but_seting2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","but_seting2_png")
					])
			];
		}
		var _proto = dingbuxinxiSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "but_seting1_png";
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
		return dingbuxinxiSkin$Skin22;
	})(eui.Skin);

	function dingbuxinxiSkin() {
		_super.call(this);
		this.skinParts = ["img_topbg0","img_happiness0","xingfute0","kaishizhizu0","img_mood0","kaixinte0","kaixinzu0","img_family0","jiatingte0","jiatingzu0","img_fealth0","jiankangte0","jiankangzu0","img_money0","jinbite0","jinbizu0","img_calendar0","riqite0","riqizu0","img_timebg0","img_timezhong0","img_timebarbg0","img_timebar0","daojishizu0","img_timetextbg0","dqshijiante0","shijianzu0","but_seting0","dingbuzu0"];
		
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
		t.elementsContent = [this.img_topbg0_i(),this.kaishizhizu0_i(),this.kaixinzu0_i(),this.jiatingzu0_i(),this.jiankangzu0_i(),this.jinbizu0_i(),this.riqizu0_i(),this.shijianzu0_i(),this.but_seting0_i()];
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
		t.elementsContent = [this.img_happiness0_i(),this.xingfute0_i()];
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 77;
		t.x = 47;
		t.y = 9;
		return t;
	};
	_proto.kaixinzu0_i = function () {
		var t = new eui.Group();
		this.kaixinzu0 = t;
		t.x = 218;
		t.y = 42;
		t.elementsContent = [this.img_mood0_i(),this.kaixinte0_i()];
		return t;
	};
	_proto.img_mood0_i = function () {
		var t = new eui.Image();
		this.img_mood0 = t;
		t.source = "img_mood_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kaixinte0_i = function () {
		var t = new eui.Label();
		this.kaixinte0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 112;
		t.x = 60;
		t.y = 14;
		return t;
	};
	_proto.jiatingzu0_i = function () {
		var t = new eui.Group();
		this.jiatingzu0 = t;
		t.x = 218;
		t.y = 102;
		t.elementsContent = [this.img_family0_i(),this.jiatingte0_i()];
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 112;
		t.x = 59;
		t.y = 13.5;
		return t;
	};
	_proto.jiankangzu0_i = function () {
		var t = new eui.Group();
		this.jiankangzu0 = t;
		t.x = 438;
		t.y = 42;
		t.elementsContent = [this.img_fealth0_i(),this.jiankangte0_i()];
		return t;
	};
	_proto.img_fealth0_i = function () {
		var t = new eui.Image();
		this.img_fealth0 = t;
		t.source = "img_fealth_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jiankangte0_i = function () {
		var t = new eui.Label();
		this.jiankangte0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 112;
		t.x = 59;
		t.y = 14;
		return t;
	};
	_proto.jinbizu0_i = function () {
		var t = new eui.Group();
		this.jinbizu0 = t;
		t.x = 438;
		t.y = 102;
		t.elementsContent = [this.img_money0_i(),this.jinbite0_i()];
		return t;
	};
	_proto.img_money0_i = function () {
		var t = new eui.Image();
		this.img_money0 = t;
		t.source = "img_money_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jinbite0_i = function () {
		var t = new eui.Label();
		this.jinbite0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 112;
		t.x = 59;
		t.y = 13.5;
		return t;
	};
	_proto.riqizu0_i = function () {
		var t = new eui.Group();
		this.riqizu0 = t;
		t.x = 24;
		t.y = 24;
		t.elementsContent = [this.img_calendar0_i(),this.riqite0_i()];
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
	_proto.riqite0_i = function () {
		var t = new eui.Label();
		this.riqite0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "wodeziti";
		t.height = 38;
		t.stroke = 3;
		t.strokeColor = 0x18dd30;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 40;
		t.y = 91;
		return t;
	};
	_proto.shijianzu0_i = function () {
		var t = new eui.Group();
		this.shijianzu0 = t;
		t.x = 218;
		t.y = 170;
		t.elementsContent = [this.img_timebg0_i(),this.img_timezhong0_i(),this.daojishizu0_i(),this.img_timetextbg0_i(),this.dqshijiante0_i()];
		return t;
	};
	_proto.img_timebg0_i = function () {
		var t = new eui.Image();
		this.img_timebg0 = t;
		t.source = "img_timebg_png";
		t.x = 41;
		t.y = 34;
		return t;
	};
	_proto.img_timezhong0_i = function () {
		var t = new eui.Image();
		this.img_timezhong0 = t;
		t.source = "img_timezhong_png";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojishizu0_i = function () {
		var t = new eui.Group();
		this.daojishizu0 = t;
		t.x = 103;
		t.y = 46;
		t.elementsContent = [this.img_timebarbg0_i(),this.img_timebar0_i()];
		return t;
	};
	_proto.img_timebarbg0_i = function () {
		var t = new eui.Image();
		this.img_timebarbg0 = t;
		t.source = "img_timebarbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_timebar0_i = function () {
		var t = new eui.Image();
		this.img_timebar0 = t;
		t.source = "img_timebar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_timetextbg0_i = function () {
		var t = new eui.Image();
		this.img_timetextbg0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_timetextbg_png";
		t.x = 156;
		t.y = 0;
		return t;
	};
	_proto.dqshijiante0_i = function () {
		var t = new eui.Label();
		this.dqshijiante0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 3;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 158;
		t.y = 3;
		return t;
	};
	_proto.but_seting0_i = function () {
		var t = new eui.Button();
		this.but_seting0 = t;
		t.enabled = true;
		t.x = 637;
		t.y = 175;
		t.skinName = dingbuxinxiSkin$Skin22;
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
	var TtoudingqipaojiemianSkin$Skin42 = 	(function (_super) {
		__extends(TtoudingqipaojiemianSkin$Skin42, _super);
		function TtoudingqipaojiemianSkin$Skin42() {
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
						new eui.SetProperty("_Image1","source","but_xuqiucaiqipao2_png")
					])
			];
		}
		var _proto = TtoudingqipaojiemianSkin$Skin42.prototype;

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
		return TtoudingqipaojiemianSkin$Skin42;
	})(eui.Skin);

	function TtoudingqipaojiemianSkin() {
		_super.call(this);
		this.skinParts = ["but_xuqiucaiqipao0","xianshitupian0","toudingqipaozu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.toudingqipaozu_i()];
	}
	var _proto = TtoudingqipaojiemianSkin.prototype;

	_proto.toudingqipaozu_i = function () {
		var t = new eui.Group();
		this.toudingqipaozu = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.width = 200;
		t.x = 225;
		t.y = 596;
		t.elementsContent = [this.but_xuqiucaiqipao0_i(),this.xianshitupian0_i()];
		return t;
	};
	_proto.but_xuqiucaiqipao0_i = function () {
		var t = new eui.Button();
		this.but_xuqiucaiqipao0 = t;
		t.enabled = true;
		t.height = 84;
		t.label = "";
		t.width = 68;
		t.x = 71.5;
		t.y = 49;
		t.skinName = TtoudingqipaojiemianSkin$Skin42;
		return t;
	};
	_proto.xianshitupian0_i = function () {
		var t = new eui.Image();
		this.xianshitupian0 = t;
		t.height = 48;
		t.source = "img_fennulian_png";
		t.touchEnabled = false;
		t.width = 48;
		t.x = 81.5;
		t.y = 59;
		return t;
	};
	return TtoudingqipaojiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Tuiguangchuandan.exml'] = window.TuiguangchuandanSkin = (function (_super) {
	__extends(TuiguangchuandanSkin, _super);
	var TuiguangchuandanSkin$Skin43 = 	(function (_super) {
		__extends(TuiguangchuandanSkin$Skin43, _super);
		function TuiguangchuandanSkin$Skin43() {
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
		var _proto = TuiguangchuandanSkin$Skin43.prototype;

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
		return TuiguangchuandanSkin$Skin43;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xf7efef;
		t.text = "客流量增加";
		t.textAlign = "left";
		t.textColor = 0x1c1a1a;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "3天";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "-2000000";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "+ 10%";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.source = "img_qian_png";
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
		t.skinName = TuiguangchuandanSkin$Skin43;
		return t;
	};
	return TuiguangchuandanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Tuiguangdaiyan.exml'] = window.TuiguangdaiyanSkin = (function (_super) {
	__extends(TuiguangdaiyanSkin, _super);
	var TuiguangdaiyanSkin$Skin44 = 	(function (_super) {
		__extends(TuiguangdaiyanSkin$Skin44, _super);
		function TuiguangdaiyanSkin$Skin44() {
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
		var _proto = TuiguangdaiyanSkin$Skin44.prototype;

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
		return TuiguangdaiyanSkin$Skin44;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "客流量增加";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "3天";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "-2000000";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "+ 10%";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.source = "img_qian_png";
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
		t.skinName = TuiguangdaiyanSkin$Skin44;
		return t;
	};
	return TuiguangdaiyanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Tuiguangdianshi.exml'] = window.TuiguangdianshiSkin = (function (_super) {
	__extends(TuiguangdianshiSkin, _super);
	var TuiguangdianshiSkin$Skin45 = 	(function (_super) {
		__extends(TuiguangdianshiSkin$Skin45, _super);
		function TuiguangdianshiSkin$Skin45() {
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
		var _proto = TuiguangdianshiSkin$Skin45.prototype;

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
		return TuiguangdianshiSkin$Skin45;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "客流量增加";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "3天";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "-2000000";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
		t.verticalAlign = "middle";
		t.width = 105.33;
		t.x = 300.48;
		t.y = 650.7;
		return t;
	};
	_proto.tuiguangxiaoguowenzi0_i = function () {
		var t = new eui.Label();
		this.tuiguangxiaoguowenzi0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "+ 10%";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.source = "img_qian_png";
		t.x = 242.5;
		t.y = 637.01;
		return t;
	};
	_proto.but_tuiguanganniu0_i = function () {
		var t = new eui.Button();
		this.but_tuiguanganniu0 = t;
		t.enabled = true;
		t.label = "";
		t.x = 398.99;
		t.y = 560.69;
		t.skinName = TuiguangdianshiSkin$Skin45;
		return t;
	};
	return TuiguangdianshiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Tuiguangpinglun.exml'] = window.TuiguangpinglunSkin = (function (_super) {
	__extends(TuiguangpinglunSkin, _super);
	var TuiguangpinglunSkin$Skin46 = 	(function (_super) {
		__extends(TuiguangpinglunSkin$Skin46, _super);
		function TuiguangpinglunSkin$Skin46() {
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
		var _proto = TuiguangpinglunSkin$Skin46.prototype;

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
		return TuiguangpinglunSkin$Skin46;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "客流量增加";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "3天";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "-2000000";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.fontFamily = "wodeziti";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7EFEF;
		t.text = "+ 10%";
		t.textAlign = "left";
		t.textColor = 0x1C1A1A;
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
		t.source = "img_qian_png";
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
		t.skinName = TuiguangpinglunSkin$Skin46;
		return t;
	};
	return TuiguangpinglunSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/Yuangongjiemian.exml'] = window.YuangongjiemianSkin = (function (_super) {
	__extends(YuangongjiemianSkin, _super);
	var YuangongjiemianSkin$Skin47 = 	(function (_super) {
		__extends(YuangongjiemianSkin$Skin47, _super);
		function YuangongjiemianSkin$Skin47() {
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
		var _proto = YuangongjiemianSkin$Skin47.prototype;

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
		return YuangongjiemianSkin$Skin47;
	})(eui.Skin);

	var YuangongjiemianSkin$Skin48 = 	(function (_super) {
		__extends(YuangongjiemianSkin$Skin48, _super);
		function YuangongjiemianSkin$Skin48() {
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
		var _proto = YuangongjiemianSkin$Skin48.prototype;

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
		return YuangongjiemianSkin$Skin48;
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
		t.skinName = YuangongjiemianSkin$Skin47;
		return t;
	};
	_proto.but_jiepin_i = function () {
		var t = new eui.Button();
		this.but_jiepin = t;
		t.enabled = true;
		t.label = "";
		t.x = 349.5;
		t.y = 621;
		t.skinName = YuangongjiemianSkin$Skin48;
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
	var ZhujiemianSkin$Skin49 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin49, _super);
		function ZhujiemianSkin$Skin49() {
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
		var _proto = ZhujiemianSkin$Skin49.prototype;

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
		return ZhujiemianSkin$Skin49;
	})(eui.Skin);

	var ZhujiemianSkin$Skin50 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin50, _super);
		function ZhujiemianSkin$Skin50() {
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
		var _proto = ZhujiemianSkin$Skin50.prototype;

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
		return ZhujiemianSkin$Skin50;
	})(eui.Skin);

	var ZhujiemianSkin$Skin51 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin51, _super);
		function ZhujiemianSkin$Skin51() {
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
		var _proto = ZhujiemianSkin$Skin51.prototype;

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
		return ZhujiemianSkin$Skin51;
	})(eui.Skin);

	var ZhujiemianSkin$Skin52 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin52, _super);
		function ZhujiemianSkin$Skin52() {
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
		var _proto = ZhujiemianSkin$Skin52.prototype;

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
		return ZhujiemianSkin$Skin52;
	})(eui.Skin);

	var ZhujiemianSkin$Skin53 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin53, _super);
		function ZhujiemianSkin$Skin53() {
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
		var _proto = ZhujiemianSkin$Skin53.prototype;

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
		return ZhujiemianSkin$Skin53;
	})(eui.Skin);

	var ZhujiemianSkin$Skin54 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin54, _super);
		function ZhujiemianSkin$Skin54() {
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
		var _proto = ZhujiemianSkin$Skin54.prototype;

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
		return ZhujiemianSkin$Skin54;
	})(eui.Skin);

	var ZhujiemianSkin$Skin55 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin55, _super);
		function ZhujiemianSkin$Skin55() {
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
		var _proto = ZhujiemianSkin$Skin55.prototype;

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
		return ZhujiemianSkin$Skin55;
	})(eui.Skin);

	var ZhujiemianSkin$Skin56 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin56, _super);
		function ZhujiemianSkin$Skin56() {
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
		var _proto = ZhujiemianSkin$Skin56.prototype;

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
		return ZhujiemianSkin$Skin56;
	})(eui.Skin);

	var ZhujiemianSkin$Skin57 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin57, _super);
		function ZhujiemianSkin$Skin57() {
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
		var _proto = ZhujiemianSkin$Skin57.prototype;

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
		return ZhujiemianSkin$Skin57;
	})(eui.Skin);

	var ZhujiemianSkin$Skin58 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin58, _super);
		function ZhujiemianSkin$Skin58() {
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
		var _proto = ZhujiemianSkin$Skin58.prototype;

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
		return ZhujiemianSkin$Skin58;
	})(eui.Skin);

	var ZhujiemianSkin$Skin59 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin59, _super);
		function ZhujiemianSkin$Skin59() {
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
		var _proto = ZhujiemianSkin$Skin59.prototype;

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
		return ZhujiemianSkin$Skin59;
	})(eui.Skin);

	var ZhujiemianSkin$Skin60 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin60, _super);
		function ZhujiemianSkin$Skin60() {
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
		var _proto = ZhujiemianSkin$Skin60.prototype;

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
		return ZhujiemianSkin$Skin60;
	})(eui.Skin);

	var ZhujiemianSkin$Skin61 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin61, _super);
		function ZhujiemianSkin$Skin61() {
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
		var _proto = ZhujiemianSkin$Skin61.prototype;

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
		return ZhujiemianSkin$Skin61;
	})(eui.Skin);

	var ZhujiemianSkin$Skin62 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin62, _super);
		function ZhujiemianSkin$Skin62() {
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
		var _proto = ZhujiemianSkin$Skin62.prototype;

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
		return ZhujiemianSkin$Skin62;
	})(eui.Skin);

	var ZhujiemianSkin$Skin63 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin63, _super);
		function ZhujiemianSkin$Skin63() {
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
		var _proto = ZhujiemianSkin$Skin63.prototype;

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
		return ZhujiemianSkin$Skin63;
	})(eui.Skin);

	var ZhujiemianSkin$Skin64 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin64, _super);
		function ZhujiemianSkin$Skin64() {
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
		var _proto = ZhujiemianSkin$Skin64.prototype;

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
		return ZhujiemianSkin$Skin64;
	})(eui.Skin);

	var ZhujiemianSkin$Skin65 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin65, _super);
		function ZhujiemianSkin$Skin65() {
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
		var _proto = ZhujiemianSkin$Skin65.prototype;

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
		return ZhujiemianSkin$Skin65;
	})(eui.Skin);

	var ZhujiemianSkin$Skin66 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin66, _super);
		function ZhujiemianSkin$Skin66() {
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
		var _proto = ZhujiemianSkin$Skin66.prototype;

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
		return ZhujiemianSkin$Skin66;
	})(eui.Skin);

	var ZhujiemianSkin$Skin67 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin67, _super);
		function ZhujiemianSkin$Skin67() {
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
		var _proto = ZhujiemianSkin$Skin67.prototype;

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
		return ZhujiemianSkin$Skin67;
	})(eui.Skin);

	var ZhujiemianSkin$Skin68 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin68, _super);
		function ZhujiemianSkin$Skin68() {
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
		var _proto = ZhujiemianSkin$Skin68.prototype;

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
		return ZhujiemianSkin$Skin68;
	})(eui.Skin);

	var ZhujiemianSkin$Skin69 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin69, _super);
		function ZhujiemianSkin$Skin69() {
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
		var _proto = ZhujiemianSkin$Skin69.prototype;

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
		return ZhujiemianSkin$Skin69;
	})(eui.Skin);

	var ZhujiemianSkin$Skin70 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin70, _super);
		function ZhujiemianSkin$Skin70() {
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
		var _proto = ZhujiemianSkin$Skin70.prototype;

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
		return ZhujiemianSkin$Skin70;
	})(eui.Skin);

	var ZhujiemianSkin$Skin71 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin71, _super);
		function ZhujiemianSkin$Skin71() {
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
		var _proto = ZhujiemianSkin$Skin71.prototype;

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
		return ZhujiemianSkin$Skin71;
	})(eui.Skin);

	var ZhujiemianSkin$Skin72 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin72, _super);
		function ZhujiemianSkin$Skin72() {
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
		var _proto = ZhujiemianSkin$Skin72.prototype;

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
		return ZhujiemianSkin$Skin72;
	})(eui.Skin);

	var ZhujiemianSkin$Skin73 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin73, _super);
		function ZhujiemianSkin$Skin73() {
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
		var _proto = ZhujiemianSkin$Skin73.prototype;

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
		return ZhujiemianSkin$Skin73;
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
		t.height = 108.45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_jiaju1_1_png";
		t.width = 254.09;
		t.x = 366.91;
		t.y = 1062.25;
		return t;
	};
	_proto.img_jiaju_huoguo_i = function () {
		var t = new eui.Image();
		this.img_jiaju_huoguo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.source = "img_jiaju2_1_png";
		t.width = 239;
		t.x = 357;
		t.y = 705;
		return t;
	};
	_proto.img_jiaju_xiaochi_i = function () {
		var t = new eui.Image();
		this.img_jiaju_xiaochi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.source = "img_jiaju3_1_png";
		t.width = 211;
		t.x = 139;
		t.y = 419;
		return t;
	};
	_proto.img_jiaju_dianxin_i = function () {
		var t = new eui.Image();
		this.img_jiaju_dianxin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.source = "img_jiaju4_1_png";
		t.width = 189;
		t.x = 557;
		t.y = 397;
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
		t.skinName = ZhujiemianSkin$Skin49;
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
		t.skinName = ZhujiemianSkin$Skin50;
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
		t.skinName = ZhujiemianSkin$Skin51;
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
		t.skinName = ZhujiemianSkin$Skin52;
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
		t.skinName = ZhujiemianSkin$Skin53;
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
		t.skinName = ZhujiemianSkin$Skin54;
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
		t.skinName = ZhujiemianSkin$Skin55;
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
		t.skinName = ZhujiemianSkin$Skin56;
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
		t.skinName = ZhujiemianSkin$Skin57;
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
		t.skinName = ZhujiemianSkin$Skin58;
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
		t.skinName = ZhujiemianSkin$Skin59;
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
		t.skinName = ZhujiemianSkin$Skin60;
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
		t.skinName = ZhujiemianSkin$Skin61;
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
		t.skinName = ZhujiemianSkin$Skin62;
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
		t.skinName = ZhujiemianSkin$Skin63;
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
		t.skinName = ZhujiemianSkin$Skin64;
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
		t.skinName = ZhujiemianSkin$Skin65;
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
		t.skinName = ZhujiemianSkin$Skin66;
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
		t.skinName = ZhujiemianSkin$Skin67;
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
		t.skinName = ZhujiemianSkin$Skin68;
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
		t.skinName = ZhujiemianSkin$Skin69;
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
		t.skinName = ZhujiemianSkin$Skin70;
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
		t.skinName = ZhujiemianSkin$Skin71;
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
		t.skinName = ZhujiemianSkin$Skin72;
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
		t.skinName = ZhujiemianSkin$Skin73;
		return t;
	};
	return ZhujiemianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Zhujiemianshangceng.exml'] = window.ZhujiemianshangcengSkin = (function (_super) {
	__extends(ZhujiemianshangcengSkin, _super);
	var ZhujiemianshangcengSkin$Skin74 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin74, _super);
		function ZhujiemianshangcengSkin$Skin74() {
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
		var _proto = ZhujiemianshangcengSkin$Skin74.prototype;

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
		return ZhujiemianshangcengSkin$Skin74;
	})(eui.Skin);

	var ZhujiemianshangcengSkin$Skin75 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin75, _super);
		function ZhujiemianshangcengSkin$Skin75() {
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
		var _proto = ZhujiemianshangcengSkin$Skin75.prototype;

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
		return ZhujiemianshangcengSkin$Skin75;
	})(eui.Skin);

	var ZhujiemianshangcengSkin$Skin76 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin76, _super);
		function ZhujiemianshangcengSkin$Skin76() {
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
		var _proto = ZhujiemianshangcengSkin$Skin76.prototype;

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
		return ZhujiemianshangcengSkin$Skin76;
	})(eui.Skin);

	var ZhujiemianshangcengSkin$Skin77 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin77, _super);
		function ZhujiemianshangcengSkin$Skin77() {
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
		var _proto = ZhujiemianshangcengSkin$Skin77.prototype;

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
		return ZhujiemianshangcengSkin$Skin77;
	})(eui.Skin);

	var ZhujiemianshangcengSkin$Skin78 = 	(function (_super) {
		__extends(ZhujiemianshangcengSkin$Skin78, _super);
		function ZhujiemianshangcengSkin$Skin78() {
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
		var _proto = ZhujiemianshangcengSkin$Skin78.prototype;

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
		return ZhujiemianshangcengSkin$Skin78;
	})(eui.Skin);

	function ZhujiemianshangcengSkin() {
		_super.call(this);
		this.skinParts = ["img_tiziqianduan","but_caipu1","but_liuyan1","but_guanli1","but_jingyinbaobiao1","zhongbuzu1","img_zhuangtaixianshibg","shicaiwenzi","img_shicai","but_tianjia","img_zhuangtaixianshibg0","weishengwenzi","img_saoba","zhuangatizu","zhuyaozu"];
		
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
		t.bottom = 0;
		t.left = 18;
		t.pixelHitTest = true;
		t.right = -18;
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
		t.skinName = ZhujiemianshangcengSkin$Skin74;
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
		t.skinName = ZhujiemianshangcengSkin$Skin75;
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
		t.skinName = ZhujiemianshangcengSkin$Skin76;
		return t;
	};
	_proto.but_jingyinbaobiao1_i = function () {
		var t = new eui.Button();
		this.but_jingyinbaobiao1 = t;
		t.enabled = true;
		t.x = 0;
		t.y = 152;
		t.skinName = ZhujiemianshangcengSkin$Skin77;
		return t;
	};
	_proto.zhuangatizu_i = function () {
		var t = new eui.Group();
		this.zhuangatizu = t;
		t.x = 12.5;
		t.y = 563;
		t.elementsContent = [this.img_zhuangtaixianshibg_i(),this.shicaiwenzi_i(),this.img_shicai_i(),this.but_tianjia_i(),this.img_zhuangtaixianshibg0_i(),this.weishengwenzi_i(),this.img_saoba_i()];
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
		t.skinName = ZhujiemianshangcengSkin$Skin78;
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
	return ZhujiemianshangcengSkin;
})(eui.Skin);
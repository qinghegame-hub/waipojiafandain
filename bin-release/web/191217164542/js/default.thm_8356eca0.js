
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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Zhujiemian":"resource/eui_skins/Zhujiemian.exml"};generateEUI.paths['resource/eui_skins/fandianjiemian.exml'] = window.fandianjiemian = (function (_super) {
	__extends(fandianjiemian, _super);
	var fandianjiemian$Skin1 = 	(function (_super) {
		__extends(fandianjiemian$Skin1, _super);
		function fandianjiemian$Skin1() {
			_super.call(this);
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
		var _proto = fandianjiemian$Skin1.prototype;

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
		return fandianjiemian$Skin1;
	})(eui.Skin);

	var fandianjiemian$Skin2 = 	(function (_super) {
		__extends(fandianjiemian$Skin2, _super);
		function fandianjiemian$Skin2() {
			_super.call(this);
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
		var _proto = fandianjiemian$Skin2.prototype;

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
		return fandianjiemian$Skin2;
	})(eui.Skin);

	var fandianjiemian$Skin3 = 	(function (_super) {
		__extends(fandianjiemian$Skin3, _super);
		function fandianjiemian$Skin3() {
			_super.call(this);
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
		var _proto = fandianjiemian$Skin3.prototype;

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
		return fandianjiemian$Skin3;
	})(eui.Skin);

	var fandianjiemian$Skin4 = 	(function (_super) {
		__extends(fandianjiemian$Skin4, _super);
		function fandianjiemian$Skin4() {
			_super.call(this);
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
		var _proto = fandianjiemian$Skin4.prototype;

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
		return fandianjiemian$Skin4;
	})(eui.Skin);

	var fandianjiemian$Skin5 = 	(function (_super) {
		__extends(fandianjiemian$Skin5, _super);
		function fandianjiemian$Skin5() {
			_super.call(this);
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
		var _proto = fandianjiemian$Skin5.prototype;

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
		return fandianjiemian$Skin5;
	})(eui.Skin);

	var fandianjiemian$Skin6 = 	(function (_super) {
		__extends(fandianjiemian$Skin6, _super);
		function fandianjiemian$Skin6() {
			_super.call(this);
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
		var _proto = fandianjiemian$Skin6.prototype;

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
		return fandianjiemian$Skin6;
	})(eui.Skin);

	var fandianjiemian$Skin7 = 	(function (_super) {
		__extends(fandianjiemian$Skin7, _super);
		function fandianjiemian$Skin7() {
			_super.call(this);
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
		var _proto = fandianjiemian$Skin7.prototype;

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
		return fandianjiemian$Skin7;
	})(eui.Skin);

	var fandianjiemian$Skin8 = 	(function (_super) {
		__extends(fandianjiemian$Skin8, _super);
		function fandianjiemian$Skin8() {
			_super.call(this);
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
		var _proto = fandianjiemian$Skin8.prototype;

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
		return fandianjiemian$Skin8;
	})(eui.Skin);

	var fandianjiemian$Skin9 = 	(function (_super) {
		__extends(fandianjiemian$Skin9, _super);
		function fandianjiemian$Skin9() {
			_super.call(this);
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
		var _proto = fandianjiemian$Skin9.prototype;

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
		return fandianjiemian$Skin9;
	})(eui.Skin);

	function fandianjiemian() {
		_super.call(this);
		this.skinParts = ["img_fandianyuanhuabg","img_topbg","img_happiness","xingfute","kaishizhizu","img_mood","kaixinte","kaixinzu","img_family","jiatingte","jiatingzu","img_fealth","jiankangte","jiankangzu","img_money","jinbite","jinbizu","img_calendar","riqite","riqizu","img_timebg","img_timezhong","img_timebarbg","img_timebar","daojishizu","img_timetextbg","dqshijiante","shijianzu","but_seting","dingbuzu","img_bottombg","but_hotel","but_gongyuan","but_licai","but_huijia","dibuzu","but_caipu","but_liuyan","but_guanli","but_jingyinbaobiao","zhongbuzu","zhuyaozu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhuyaozu_i()];
	}
	var _proto = fandianjiemian.prototype;

	_proto.zhuyaozu_i = function () {
		var t = new eui.Group();
		this.zhuyaozu = t;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this.img_fandianyuanhuabg_i(),this.dingbuzu_i(),this.dibuzu_i(),this.zhongbuzu_i()];
		return t;
	};
	_proto.img_fandianyuanhuabg_i = function () {
		var t = new eui.Image();
		this.img_fandianyuanhuabg = t;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_fandianyuanhuabg_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dingbuzu_i = function () {
		var t = new eui.Group();
		this.dingbuzu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 338;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_topbg_i(),this.kaishizhizu_i(),this.kaixinzu_i(),this.jiatingzu_i(),this.jiankangzu_i(),this.jinbizu_i(),this.riqizu_i(),this.shijianzu_i(),this.but_seting_i()];
		return t;
	};
	_proto.img_topbg_i = function () {
		var t = new eui.Image();
		this.img_topbg = t;
		t.fillMode = "scale";
		t.height = 343;
		t.source = "img_topbg_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kaishizhizu_i = function () {
		var t = new eui.Group();
		this.kaishizhizu = t;
		t.x = 38;
		t.y = 206;
		t.elementsContent = [this.img_happiness_i(),this.xingfute_i()];
		return t;
	};
	_proto.img_happiness_i = function () {
		var t = new eui.Image();
		this.img_happiness = t;
		t.height = 51;
		t.source = "img_happiness_png";
		t.width = 143;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.xingfute_i = function () {
		var t = new eui.Label();
		this.xingfute = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xf7f7f7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 77;
		t.x = 47;
		t.y = 9;
		return t;
	};
	_proto.kaixinzu_i = function () {
		var t = new eui.Group();
		this.kaixinzu = t;
		t.x = 218;
		t.y = 42;
		t.elementsContent = [this.img_mood_i(),this.kaixinte_i()];
		return t;
	};
	_proto.img_mood_i = function () {
		var t = new eui.Image();
		this.img_mood = t;
		t.source = "img_mood_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kaixinte_i = function () {
		var t = new eui.Label();
		this.kaixinte = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 112;
		t.x = 60;
		t.y = 14;
		return t;
	};
	_proto.jiatingzu_i = function () {
		var t = new eui.Group();
		this.jiatingzu = t;
		t.x = 218;
		t.y = 102;
		t.elementsContent = [this.img_family_i(),this.jiatingte_i()];
		return t;
	};
	_proto.img_family_i = function () {
		var t = new eui.Image();
		this.img_family = t;
		t.source = "img_family_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jiatingte_i = function () {
		var t = new eui.Label();
		this.jiatingte = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 112;
		t.x = 59;
		t.y = 13.5;
		return t;
	};
	_proto.jiankangzu_i = function () {
		var t = new eui.Group();
		this.jiankangzu = t;
		t.x = 438;
		t.y = 42;
		t.elementsContent = [this.img_fealth_i(),this.jiankangte_i()];
		return t;
	};
	_proto.img_fealth_i = function () {
		var t = new eui.Image();
		this.img_fealth = t;
		t.source = "img_fealth_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jiankangte_i = function () {
		var t = new eui.Label();
		this.jiankangte = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 112;
		t.x = 59;
		t.y = 14;
		return t;
	};
	_proto.jinbizu_i = function () {
		var t = new eui.Group();
		this.jinbizu = t;
		t.x = 438;
		t.y = 102;
		t.elementsContent = [this.img_money_i(),this.jinbite_i()];
		return t;
	};
	_proto.img_money_i = function () {
		var t = new eui.Image();
		this.img_money = t;
		t.source = "img_money_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jinbite_i = function () {
		var t = new eui.Label();
		this.jinbite = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 112;
		t.x = 59;
		t.y = 13.5;
		return t;
	};
	_proto.riqizu_i = function () {
		var t = new eui.Group();
		this.riqizu = t;
		t.x = 24;
		t.y = 24;
		t.elementsContent = [this.img_calendar_i(),this.riqite_i()];
		return t;
	};
	_proto.img_calendar_i = function () {
		var t = new eui.Image();
		this.img_calendar = t;
		t.fillMode = "scale";
		t.height = 166;
		t.source = "img_calendar_png";
		t.width = 178;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.riqite_i = function () {
		var t = new eui.Label();
		this.riqite = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 40;
		t.y = 91;
		return t;
	};
	_proto.shijianzu_i = function () {
		var t = new eui.Group();
		this.shijianzu = t;
		t.x = 218;
		t.y = 170;
		t.elementsContent = [this.img_timebg_i(),this.img_timezhong_i(),this.daojishizu_i(),this.img_timetextbg_i(),this.dqshijiante_i()];
		return t;
	};
	_proto.img_timebg_i = function () {
		var t = new eui.Image();
		this.img_timebg = t;
		t.source = "img_timebg_png";
		t.x = 41;
		t.y = 34;
		return t;
	};
	_proto.img_timezhong_i = function () {
		var t = new eui.Image();
		this.img_timezhong = t;
		t.source = "img_timezhong_png";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.daojishizu_i = function () {
		var t = new eui.Group();
		this.daojishizu = t;
		t.x = 103;
		t.y = 46;
		t.elementsContent = [this.img_timebarbg_i(),this.img_timebar_i()];
		return t;
	};
	_proto.img_timebarbg_i = function () {
		var t = new eui.Image();
		this.img_timebarbg = t;
		t.source = "img_timebarbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_timebar_i = function () {
		var t = new eui.Image();
		this.img_timebar = t;
		t.source = "img_timebar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_timetextbg_i = function () {
		var t = new eui.Image();
		this.img_timetextbg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_timetextbg_png";
		t.x = 156;
		t.y = 0;
		return t;
	};
	_proto.dqshijiante_i = function () {
		var t = new eui.Label();
		this.dqshijiante = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 158;
		t.y = 3;
		return t;
	};
	_proto.but_seting_i = function () {
		var t = new eui.Button();
		this.but_seting = t;
		t.enabled = true;
		t.x = 637;
		t.y = 175;
		t.skinName = fandianjiemian$Skin1;
		return t;
	};
	_proto.dibuzu_i = function () {
		var t = new eui.Group();
		this.dibuzu = t;
		t.x = 0;
		t.y = 1160;
		t.elementsContent = [this.img_bottombg_i(),this.but_hotel_i(),this.but_gongyuan_i(),this.but_licai_i(),this.but_huijia_i()];
		return t;
	};
	_proto.img_bottombg_i = function () {
		var t = new eui.Image();
		this.img_bottombg = t;
		t.source = "img_bottombg_png";
		t.x = 0;
		t.y = 57;
		return t;
	};
	_proto.but_hotel_i = function () {
		var t = new eui.Button();
		this.but_hotel = t;
		t.enabled = true;
		t.x = 36;
		t.y = 0;
		t.skinName = fandianjiemian$Skin2;
		return t;
	};
	_proto.but_gongyuan_i = function () {
		var t = new eui.Button();
		this.but_gongyuan = t;
		t.enabled = true;
		t.x = 215;
		t.y = 0;
		t.skinName = fandianjiemian$Skin3;
		return t;
	};
	_proto.but_licai_i = function () {
		var t = new eui.Button();
		this.but_licai = t;
		t.enabled = true;
		t.x = 394;
		t.y = 0;
		t.skinName = fandianjiemian$Skin4;
		return t;
	};
	_proto.but_huijia_i = function () {
		var t = new eui.Button();
		this.but_huijia = t;
		t.enabled = true;
		t.x = 573;
		t.y = 0;
		t.skinName = fandianjiemian$Skin5;
		return t;
	};
	_proto.zhongbuzu_i = function () {
		var t = new eui.Group();
		this.zhongbuzu = t;
		t.x = 8.5;
		t.y = 748;
		t.elementsContent = [this.but_caipu_i(),this.but_liuyan_i(),this.but_guanli_i(),this.but_jingyinbaobiao_i()];
		return t;
	};
	_proto.but_caipu_i = function () {
		var t = new eui.Button();
		this.but_caipu = t;
		t.enabled = true;
		t.height = 96;
		t.width = 96;
		t.x = 615.5;
		t.y = 243;
		t.skinName = fandianjiemian$Skin6;
		return t;
	};
	_proto.but_liuyan_i = function () {
		var t = new eui.Button();
		this.but_liuyan = t;
		t.enabled = true;
		t.height = 96;
		t.width = 96;
		t.x = 615.5;
		t.y = 121.5;
		t.skinName = fandianjiemian$Skin7;
		return t;
	};
	_proto.but_guanli_i = function () {
		var t = new eui.Button();
		this.but_guanli = t;
		t.enabled = true;
		t.height = 96;
		t.width = 96;
		t.x = 612.5;
		t.y = 0;
		t.skinName = fandianjiemian$Skin8;
		return t;
	};
	_proto.but_jingyinbaobiao_i = function () {
		var t = new eui.Button();
		this.but_jingyinbaobiao = t;
		t.enabled = true;
		t.x = 0;
		t.y = 152;
		t.skinName = fandianjiemian$Skin9;
		return t;
	};
	return fandianjiemian;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Zhujiemian.exml'] = window.ZhujiemianSkin = (function (_super) {
	__extends(ZhujiemianSkin, _super);
	var ZhujiemianSkin$Skin10 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin10, _super);
		function ZhujiemianSkin$Skin10() {
			_super.call(this);
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
		var _proto = ZhujiemianSkin$Skin10.prototype;

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
		return ZhujiemianSkin$Skin10;
	})(eui.Skin);

	var ZhujiemianSkin$Skin11 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin11, _super);
		function ZhujiemianSkin$Skin11() {
			_super.call(this);
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
		var _proto = ZhujiemianSkin$Skin11.prototype;

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
		return ZhujiemianSkin$Skin11;
	})(eui.Skin);

	var ZhujiemianSkin$Skin12 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin12, _super);
		function ZhujiemianSkin$Skin12() {
			_super.call(this);
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
		var _proto = ZhujiemianSkin$Skin12.prototype;

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
		return ZhujiemianSkin$Skin12;
	})(eui.Skin);

	var ZhujiemianSkin$Skin13 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin13, _super);
		function ZhujiemianSkin$Skin13() {
			_super.call(this);
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
		var _proto = ZhujiemianSkin$Skin13.prototype;

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
		return ZhujiemianSkin$Skin13;
	})(eui.Skin);

	var ZhujiemianSkin$Skin14 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin14, _super);
		function ZhujiemianSkin$Skin14() {
			_super.call(this);
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
		var _proto = ZhujiemianSkin$Skin14.prototype;

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
		return ZhujiemianSkin$Skin14;
	})(eui.Skin);

	var ZhujiemianSkin$Skin15 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin15, _super);
		function ZhujiemianSkin$Skin15() {
			_super.call(this);
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
		var _proto = ZhujiemianSkin$Skin15.prototype;

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
		return ZhujiemianSkin$Skin15;
	})(eui.Skin);

	var ZhujiemianSkin$Skin16 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin16, _super);
		function ZhujiemianSkin$Skin16() {
			_super.call(this);
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
		var _proto = ZhujiemianSkin$Skin16.prototype;

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
		return ZhujiemianSkin$Skin16;
	})(eui.Skin);

	var ZhujiemianSkin$Skin17 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin17, _super);
		function ZhujiemianSkin$Skin17() {
			_super.call(this);
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
		var _proto = ZhujiemianSkin$Skin17.prototype;

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
		return ZhujiemianSkin$Skin17;
	})(eui.Skin);

	var ZhujiemianSkin$Skin18 = 	(function (_super) {
		__extends(ZhujiemianSkin$Skin18, _super);
		function ZhujiemianSkin$Skin18() {
			_super.call(this);
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
		var _proto = ZhujiemianSkin$Skin18.prototype;

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
		return ZhujiemianSkin$Skin18;
	})(eui.Skin);

	function ZhujiemianSkin() {
		_super.call(this);
		this.skinParts = ["img_fandianyuanhuabg0","img_topbg0","img_happiness0","xingfute0","kaishizhizu0","img_mood0","kaixinte0","kaixinzu0","img_family0","jiatingte0","jiatingzu0","img_fealth0","jiankangte0","jiankangzu0","img_money0","jinbite0","jinbizu0","img_calendar0","riqite0","riqizu0","img_timebg0","img_timezhong0","img_timebarbg0","img_timebar0","daojishizu0","img_timetextbg0","dqshijiante0","shijianzu0","but_seting0","dingbuzu0","img_bottombg0","but_hotel0","but_gongyuan0","but_licai0","but_huijia0","dibuzu0","but_caipu0","but_liuyan0","but_guanli0","but_jingyinbaobiao0","zhongbuzu0","zhuyaozu"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.zhuyaozu_i()];
	}
	var _proto = ZhujiemianSkin.prototype;

	_proto.zhuyaozu_i = function () {
		var t = new eui.Group();
		this.zhuyaozu = t;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this.img_fandianyuanhuabg0_i(),this.dingbuzu0_i(),this.dibuzu0_i(),this.zhongbuzu0_i()];
		return t;
	};
	_proto.img_fandianyuanhuabg0_i = function () {
		var t = new eui.Image();
		this.img_fandianyuanhuabg0 = t;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_fandianyuanhuabg_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dingbuzu0_i = function () {
		var t = new eui.Group();
		this.dingbuzu0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 338;
		t.width = 750;
		t.x = 0;
		t.y = 0;
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
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xF7F7F7;
		t.text = "99999";
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
		t.size = 24;
		t.stroke = 1;
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
		t.size = 24;
		t.stroke = 1;
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
		t.size = 24;
		t.stroke = 1;
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
		t.size = 24;
		t.stroke = 1;
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
		t.height = 38;
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
		t.size = 24;
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
		t.skinName = ZhujiemianSkin$Skin10;
		return t;
	};
	_proto.dibuzu0_i = function () {
		var t = new eui.Group();
		this.dibuzu0 = t;
		t.x = 0;
		t.y = 1160;
		t.elementsContent = [this.img_bottombg0_i(),this.but_hotel0_i(),this.but_gongyuan0_i(),this.but_licai0_i(),this.but_huijia0_i()];
		return t;
	};
	_proto.img_bottombg0_i = function () {
		var t = new eui.Image();
		this.img_bottombg0 = t;
		t.source = "img_bottombg_png";
		t.x = 0;
		t.y = 57;
		return t;
	};
	_proto.but_hotel0_i = function () {
		var t = new eui.Button();
		this.but_hotel0 = t;
		t.enabled = true;
		t.x = 36;
		t.y = 0;
		t.skinName = ZhujiemianSkin$Skin11;
		return t;
	};
	_proto.but_gongyuan0_i = function () {
		var t = new eui.Button();
		this.but_gongyuan0 = t;
		t.enabled = true;
		t.x = 215;
		t.y = 0;
		t.skinName = ZhujiemianSkin$Skin12;
		return t;
	};
	_proto.but_licai0_i = function () {
		var t = new eui.Button();
		this.but_licai0 = t;
		t.enabled = true;
		t.x = 394;
		t.y = 0;
		t.skinName = ZhujiemianSkin$Skin13;
		return t;
	};
	_proto.but_huijia0_i = function () {
		var t = new eui.Button();
		this.but_huijia0 = t;
		t.enabled = true;
		t.x = 573;
		t.y = 0;
		t.skinName = ZhujiemianSkin$Skin14;
		return t;
	};
	_proto.zhongbuzu0_i = function () {
		var t = new eui.Group();
		this.zhongbuzu0 = t;
		t.x = 8.5;
		t.y = 748;
		t.elementsContent = [this.but_caipu0_i(),this.but_liuyan0_i(),this.but_guanli0_i(),this.but_jingyinbaobiao0_i()];
		return t;
	};
	_proto.but_caipu0_i = function () {
		var t = new eui.Button();
		this.but_caipu0 = t;
		t.enabled = true;
		t.height = 96;
		t.width = 96;
		t.x = 615.5;
		t.y = 243;
		t.skinName = ZhujiemianSkin$Skin15;
		return t;
	};
	_proto.but_liuyan0_i = function () {
		var t = new eui.Button();
		this.but_liuyan0 = t;
		t.enabled = true;
		t.height = 96;
		t.width = 96;
		t.x = 615.5;
		t.y = 121.5;
		t.skinName = ZhujiemianSkin$Skin16;
		return t;
	};
	_proto.but_guanli0_i = function () {
		var t = new eui.Button();
		this.but_guanli0 = t;
		t.enabled = true;
		t.height = 96;
		t.width = 96;
		t.x = 612.5;
		t.y = 0;
		t.skinName = ZhujiemianSkin$Skin17;
		return t;
	};
	_proto.but_jingyinbaobiao0_i = function () {
		var t = new eui.Button();
		this.but_jingyinbaobiao0 = t;
		t.enabled = true;
		t.x = 0;
		t.y = 152;
		t.skinName = ZhujiemianSkin$Skin18;
		return t;
	};
	return ZhujiemianSkin;
})(eui.Skin);
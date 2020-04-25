class Wxjiekoulei {

	public constructor(shuzhi) {
		this.weixinshujushangchuan(shuzhi);
	}

	public async weixinshujushangchuan(shuzhi){
		const shangchuanzhi = await platform.setxingfuzhi(shuzhi);
		console.log(shangchuanzhi);
	}
}
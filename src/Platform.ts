/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(dex,dey,dew,deh): Promise<any>;

    login(): Promise<any>;

    setxingfuzhi(shuzhi):Promise<any>;

       //被动转发菜单
    showShareMenu(biaoti,tupian): Promise<any>;

    //主动转发菜单
    shareAppMessage(biaoti,tupian,canshu):Promise<any>;


    openDataContext:any

}

class DebugPlatform implements Platform {
    async getUserInfo(dex,dey,dew,deh) {
        return { nickName: "username" }
    }
    async login() {

    }
    async setxingfuzhi(shuzhi){

    }

    //被动分享
    async showShareMenu(biaoti,tupian) {

    }

    //主动分享
    async shareAppMessage(biaoti,tupian,canshu){
        
    }


    openDataContext;
}


if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}






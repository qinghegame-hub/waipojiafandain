/*class Weblianjie extends egret.DisplayObjectContainer {
    public lianjieserver:egret.WebSocket;

    public constructor() {
        super();
        var lianjieserver = new egret.WebSocket();
    }
   public kaishilianjie (){
       
       //设置数据格式为二进制，默认为字符串
       this.lianjieserver.type;
       this.lianjieserver.type = egret.WebSocket.TYPE_STRING;
       console.log(this.lianjieserver.type);
       //连接服务器
        this.lianjieserver.connect("127.0.0.1", 3010);
       //添加收到数据侦听，收到数据会调用此方法
        this.lianjieserver.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.shoudaofushuju, this);
        //添加链接打开侦听，连接成功会调用此方法
       this.lianjieserver.addEventListener(egret.Event.CONNECT, this.lianjiechenggong, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
       this.lianjieserver.addEventListener(egret.Event.CLOSE, this.lianjieguanbi, this);
        //添加异常侦听，出现异常会调用此方法
       this. lianjieserver.addEventListener(egret.IOErrorEvent.IO_ERROR, this.lianjieyichang, this);
   }

   protected shoudaofushuju(msg){
       console.log("收到传入数据")
 //      var bianyi = this.lianjieserver.readUTF(msg);
       console.log("来自服务器端的数据" + msg);
   }

   protected lianjiechenggong(){
       console.log("服务器连接成功")
       this.fasongshuju();

   }

   protected lianjieguanbi(){
       console.log("服务器连接关闭")
   }

   protected lianjieyichang(){
       console.log("服务器连接异常")
   }

   protected fasongshuju(){
        //写入字符串信息
  //      var fasongshuju = '{"message"}';
        this.lianjieserver.writeUTF("fasongshuju");
        this.lianjieserver.flush();

//        this.lianjieserver.

   }


}*/ 
//# sourceMappingURL=tihuan.js.map
import WalletConnect from "@walletconnect/client";


class Mywalletconnect{
    constructor(props,IPushServerOptions){
     this.coin_name=props.coin_name?props.coin_name:"HWAN COIN";
     this.contract=props.contract?props.contract:"";
     let walletparams={
        bridge: "https://bridge.walletconnect.org"
     };
    if(props.qrcodeModalOptions){
        walletparams.qrcodeModalOptions=props.qrcodeModalOptions;
    }
    if(props.qrcodeModal){
        walletparams.qrcodeModal=props.qrcodeModal;
    }
     this.walletconnect=new WalletConnect(walletparams,IPushServerOptions);
     this.connected=this.walletconnect.connected;
    }
    createSession(props){
        this.walletconnect.createSession(props);
    }
    killSession(){
        this.walletconnect.killSession();
    }
   on(methodname,callback){
       if(methodname=="display_uri"){
        this.walletconnect.on("display_uri", (err, payload) => {
            let backparams=Object.assign({},payload);
            let uri = backparams.params[0];
            if(this.coin_name!=""){
                uri+="&coin_code="+this.coin_name;
            }
            if(this.contract!=""){
                uri+="&contract="+this.contract;
            }
            callback(err,backparams);
            console.log("display_uri",uri);
            });
       }else
        if(methodname=="connect"){
        this.walletconnect.on('connect',(err, payload) => {
            callback(err, payload);
        });
       }else{
        this.walletconnect.on(methodname,callback);
       }
   }
   sendTransaction(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.sendTransaction(customRequest).then((result) => {
            console.log(result,'payresult');
             resolve(result);
       }).catch((error) => {
           console.log(error,"payerror");
             reject(error);
             });
    });
   }
   signPersonalMessage(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.signPersonalMessage(customRequest).then((result) => {
            console.log(result,'payresult');
             resolve(result);
       }).catch((error) => {
           console.log(error,"payerror");
             reject(error);
             });
    });
   }
   signMessage(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.signMessage(customRequest).then((result) => {
            console.log(result,'payresult');
             resolve(result);
       }).catch((error) => {
           console.log(error,"payerror");
             reject(error);
             });
    });
   }
   sendCustomRequest(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.sendCustomRequest(customRequest).then((result) => {
            console.log(result,'payresult');
             resolve(result);
       }).catch((error) => {
           console.log(error,"payerror");
             reject(error);
             });
    });
   }
   signTypedData(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.signTypedData(customRequest).then((result) => {
            console.log(result,'payresult');
             resolve(result);
       }).catch((error) => {
           console.log(error,"payerror");
             reject(error);
             });
    });
   }
   sendHwaPayment(params){
    return new Promise((resolve, reject) => {
        const customRequest = {
            method: "hwa_payment",
            params:params,
        };
    this.walletconnect.sendCustomRequest(customRequest).then((result) => {
           console.log(result,'payresult');
            resolve(result);
      }).catch((error) => {
          console.log(error,"payerror");
            reject(error);
            });
        });
  }

}
export default Mywalletconnect;
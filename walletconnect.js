import WalletConnect from "@walletconnect/client";


class Mywalletconnect{
    constructor(props,IPushServerOptions){
     this.coin_name=props.coin_name?props.coin_name:"HWAN CHAIN";
     this.contract=props.contract?props.contract:"";
     let walletparams={
        bridge:props.bridge?props.bridge:"https://bridge.walletconnect.org"
     };
    if(props.qrcodeModalOptions){
        walletparams.qrcodeModalOptions=props.qrcodeModalOptions;
    }
    if(props.qrcodeModal){
        walletparams.qrcodeModal=props.qrcodeModal;
    }
     this.walletconnect=new WalletConnect(walletparams,IPushServerOptions);
     this.connected=this.walletconnect.connected;
     this.hwa={
        request:()=>{
            return new Promise((resolve, reject) => {
                const customRequest = {
                    method: "hwa_request",
                    params:params,
                };
            this.walletconnect.sendCustomRequest(customRequest).then((result) => {
                   
                    resolve(result);
              }).catch((error) => {
                  
                    reject(error);
                    });
                });
        },
        autofill:(params)=>{
            return new Promise((resolve, reject) => {
                const customRequest = {
                    method: "hwa_autofill",
                    params:params,
                };
            this.walletconnect.sendCustomRequest(customRequest).then((result) => {
                   
                    resolve(result);
              }).catch((error) => {
                  
                    reject(error);
                    });
                });
        },
       submit:(params)=>{
        return new Promise((resolve, reject) => {
            const customRequest = {
                method: "hwa_submit",
                params:params,
            };
        this.walletconnect.sendCustomRequest(customRequest).then((result) => {
               
                resolve(result);
          }).catch((error) => {
              
                reject(error);
                });
            });
        },
        signMessage:(params)=>{
         return new Promise((resolve, reject) => {
             const customRequest = {
                 method: "hwa_signMessage",
                 params:params,
             };
         this.walletconnect.sendCustomRequest(customRequest).then((result) => {
                
                 resolve(result);
           }).catch((error) => {
               
                 reject(error);
                 });
             });
         },
         sign:(params)=>{
          return new Promise((resolve, reject) => {
              const customRequest = {
                  method: "hwa_sign",
                  params:params,
              };
          this.walletconnect.sendCustomRequest(customRequest).then((result) => {
                 
                  resolve(result);
            }).catch((error) => {
                
                  reject(error);
                  });
              });
          },
          toHex:(params)=>{
           return new Promise((resolve, reject) => {
               const customRequest = {
                   method: "hwa_toHex",
                   params:params,
               };
           this.walletconnect.sendCustomRequest(customRequest).then((result) => {
                  
                   resolve(result);
             }).catch((error) => {
                 
                   reject(error);
                   });
               });
           },
           toDrops:(params)=>{
            return new Promise((resolve, reject) => {
                const customRequest = {
                    method: "hwa_toDrops",
                    params:params,
                };
            this.walletconnect.sendCustomRequest(customRequest).then((result) => {
                   
                    resolve(result);
              }).catch((error) => {
                  
                    reject(error);
                    });
                });
           },
           keccakFromString:(params)=>{
            return new Promise((resolve, reject) => {
                const customRequest = {
                    method: "hwa_keccakFromString",
                    params:params,
                };
            this.walletconnect.sendCustomRequest(customRequest).then((result) => {
                   
                    resolve(result);
              }).catch((error) => {
                  
                    reject(error);
                    });
                });
            },
            getBalances:(params)=>{
                return new Promise((resolve, reject) => {
                    const customRequest = {
                        method: "hwa_getBalances",
                        params:params,
                    };
                this.walletconnect.sendCustomRequest(customRequest).then((result) => {
                       
                        resolve(result);
                  }).catch((error) => {
                      
                        reject(error);
                        });
                    });
            }
      }
    }
    createSession(props){
        this.walletconnect.createSession(props);
    }
    killSession(){
        if(this.walletconnect.connected){
            this.walletconnect.killSession();
        }
    }
   on(methodname,callback){
       if(methodname=="display_uri"){
        this.walletconnect.on("display_uri", (err, payload) => {
            let backparams=Object.assign({},payload);
            let uri = backparams.params[0];
            if(this.coin_name!=""){
                uri+="&coin_name="+this.coin_name;
            }
            if(this.contract!=""){
                uri+="&contract="+this.contract;
            }
            backparams.params=[uri];
            callback(err,backparams);
            });
       }else if(methodname=="connect"){
        this.walletconnect.on('connect',(err, payload) => {
            this.connected=true;
            callback(err, payload);
        });
       }else if(methodname=="disconnect"){
        this.walletconnect.on('disconnect',(err, payload) => {
            this.connected=false;
            callback(err, payload);
        });
       }else{
        this.walletconnect.on(methodname,callback);
       }
   }
   sendTransaction(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.sendTransaction(customRequest).then((result) => {
            
             resolve(result);
       }).catch((error) => {
           
             reject(error);
             });
    });
   }
   signPersonalMessage(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.signPersonalMessage(customRequest).then((result) => {
            
             resolve(result);
       }).catch((error) => {
           
             reject(error);
             });
    });
   }
   signMessage(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.signMessage(customRequest).then((result) => {
            
             resolve(result);
       }).catch((error) => {
           
             reject(error);
             });
    });
   }
   sendCustomRequest(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.sendCustomRequest(customRequest).then((result) => {
            
             resolve(result);
       }).catch((error) => {
           
             reject(error);
             });
    });
   }
   signTypedData(customRequest){
    return new Promise((resolve, reject) => {
        this.walletconnect.signTypedData(customRequest).then((result) => {
            
             resolve(result);
       }).catch((error) => {
           
             reject(error);
             });
    });
   }
   sendHwaSignTransaction(params){
    return new Promise((resolve, reject) => {
        const customRequest = {
            method: "hwa_sendSignTransaction",
            params:params,
        };
    this.walletconnect.sendCustomRequest(customRequest).then((result) => {
           
            resolve(result);
      }).catch((error) => {
          
            reject(error);
            });
        });
  }
  signHwaTransaction(params){
    return new Promise((resolve, reject) => {
        const customRequest = {
            method: "hwa_signTransaction",
            params:params,
        };
    this.walletconnect.sendCustomRequest(customRequest).then((result) => {
           
            resolve(result);
      }).catch((error) => {
          
            reject(error);
            });
        });
  }
  
  showAccountSwitch(params){
    return new Promise((resolve, reject) => {
        const customRequest = {
            method: "hwa_showAccountSwitch",
            params:params,
        };
    this.walletconnect.sendCustomRequest(customRequest).then((result) => {
           
            resolve(result);
      }).catch((error) => {
          
            reject(error);
            });
        });
  }
}
export default Mywalletconnect;
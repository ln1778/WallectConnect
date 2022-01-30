
const WalletConnect=require("./walletconnect");
const ReactQrcode =require("qrcode.react");
const QrcodeModal =require("./qrcode-modal");

module.exports.client= WalletConnect.default;
module.exports.Qrcode=ReactQrcode;
module.exports.QrcodeModal=QrcodeModal.default;
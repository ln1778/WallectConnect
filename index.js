
const WalletConnect=require("./walletconnect");
const ReactQrcode =require("qrcode.react");
const QrcodeModal =require("./qrcode-modal");

module.exports.Client= WalletConnect.default;
module.exports.Qrcode=ReactQrcode.default;
module.exports.QrcodeModal=QrcodeModal;
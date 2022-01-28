"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const client_1 = (0, tslib_1.__importDefault)(require("./client/dist/cjs/index"));
const qrcodeModal_1 = (0, tslib_1.__importDefault)(require("./qrcode-modal/dist/cjs/index"));
class WallectConnect{
    constructor(opts) {
       this.client=new client_1(opts)
       this.qrcodeModal=qrcodeModal_1;
    }
}
exports.default = WallectConnect;
import crypto from "crypto";
import { bufferToArray } from "WallectConnect/encoding";
export function randomBytes(length) {
    const buf = crypto.randomBytes(length);
    return bufferToArray(buf);
}
//# sourceMappingURL=index.js.map
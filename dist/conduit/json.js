"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONConduit = void 0;
const buffer_1 = require("buffer");
class JSONConduit {
    pack(...prims) {
        return JSON.stringify(prims.map(prim => {
            if (prim instanceof Uint8Array) {
                prim = buffer_1.Buffer.from(prim);
            }
            if (buffer_1.Buffer.isBuffer(prim)) {
                return prim.toString("base64");
            }
            return prim;
        }));
    }
    unpack(instr) {
        instr = instr.toString();
        return [JSON.parse(instr)];
    }
}
exports.JSONConduit = JSONConduit;
//# sourceMappingURL=json.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuacConduit = exports.bonk = void 0;
const buffer_1 = require("buffer");
function bonk(prim) {
    switch (typeof prim) {
        case "string":
            return prim;
        case "number":
            return prim.toString();
        case "boolean":
            return prim ? "1" : "0";
        case "object":
            if (prim instanceof Uint8Array) {
                prim = buffer_1.Buffer.from(prim);
            }
            if (buffer_1.Buffer.isBuffer(prim)) {
                return prim.toString("base64");
            }
        default:
            console.error(prim);
            throw new Error("i dont know how to bonk that!");
    }
}
exports.bonk = bonk;
class GuacConduit {
    pack(...prims) {
        const segments = [];
        for (const prim of prims) {
            const bonked = bonk(prim);
            segments.push(`${bonked.length}.${bonked}`);
        }
        return segments.join(",") + ";";
    }
    packMany(...stmts) {
        return stmts.map(x => this.pack(...x)).join("");
    }
    unpack(instr, unbonk = true) {
        instr = instr.toString();
        const payloads = [];
        var payload = [];
        var len = 0;
        for (var i = 0; i < instr.length; i++) {
            const c = instr[i];
            if (c === ".") {
                payload.push(instr.substring(i + 1, i + len + 1));
                i += len + 1;
                switch (instr[i]) {
                    case ",":
                        break;
                    case ";":
                        payloads.push(payload);
                        payload = [];
                        break;
                    default:
                        throw new Error("comma or semicolon expected at end of segment");
                }
                len = 0;
            }
            else {
                const n = +c;
                if (isNaN(n)) {
                    throw new Error("NaN in segment length!");
                }
                len = len * 10 + n;
            }
        }
        return payloads;
    }
}
exports.GuacConduit = GuacConduit;
//# sourceMappingURL=guac.js.map
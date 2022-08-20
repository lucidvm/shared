"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LECConduit = void 0;
const msgpack_1 = require("../../msgpack");
class LECConduit {
    constructor(codebook = []) {
        this.reverse = {};
        this.updateCodebook(codebook);
    }
    pack(...prims) {
        var op = prims.shift();
        if (typeof op === "string" && op in this.reverse && op !== "codebook") {
            op = this.reverse[op];
        }
        return (0, msgpack_1.serialize)([op, ...prims]);
    }
    unpack(data) {
        const prims = (0, msgpack_1.deserialize)(data);
        if (prims == null) {
            throw new Error("decode failed?");
        }
        if (!Array.isArray(prims)) {
            throw new Error("not array?");
        }
        var op = prims.shift();
        if (typeof op == "number" && op in this.codebook) {
            op = this.codebook[op];
        }
        return [[op, ...prims]];
    }
    dumpCodebook() {
        return this.codebook.concat();
    }
    updateCodebook(codebook) {
        this.codebook = codebook;
        for (var i = 0; i < codebook.length; i++) {
            this.reverse[codebook[i]] = i;
        }
    }
}
exports.LECConduit = LECConduit;
__exportStar(require("./client"), exports);
//# sourceMappingURL=index.js.map
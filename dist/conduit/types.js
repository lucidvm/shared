"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureBuffer = exports.ensureBoolean = exports.ensureNumber = exports.ensureString = exports.canBuffer = exports.canBoolean = exports.canNumber = void 0;
const buffer_1 = require("buffer");
function canNumber(prim) {
    return !isNaN(+prim);
}
exports.canNumber = canNumber;
function canBoolean(prim) {
    return (typeof prim === "boolean") || (prim == 0 || prim == 1);
}
exports.canBoolean = canBoolean;
function canBuffer(prim) {
    return (typeof prim === "object") || (typeof prim === "string");
}
exports.canBuffer = canBuffer;
function ensureString(str) {
    if (str == null) {
        throw new Error("got nothing!");
    }
    return str.toString();
}
exports.ensureString = ensureString;
function ensureNumber(num) {
    if (typeof num === "boolean")
        return num ? 1 : 0;
    if (isNaN(+num))
        throw new Error("coded number is not a number!");
    return +num;
}
exports.ensureNumber = ensureNumber;
function ensureBoolean(bool) {
    if (buffer_1.Buffer.isBuffer(bool)) {
        throw new Error("what?");
    }
    if (typeof bool === "string") {
        bool = ensureNumber(bool);
    }
    if (typeof bool === "number") {
        if (bool < 0 || bool > 1) {
            throw new Error("coded boolean out of range 0-1!");
        }
        return bool === 1 ? true : false;
    }
    return bool;
}
exports.ensureBoolean = ensureBoolean;
function ensureBuffer(blob) {
    if (typeof blob === "number" || typeof blob === "boolean") {
        throw new Error("what?");
    }
    if (typeof blob === "string") {
        return buffer_1.Buffer.from(blob, "base64");
    }
    return blob;
}
exports.ensureBuffer = ensureBuffer;
//# sourceMappingURL=types.js.map
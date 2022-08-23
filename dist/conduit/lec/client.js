"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LECClient = void 0;
const events_1 = require("events");
const ws_1 = require("ws");
const index_1 = require("./index");
class LECClient extends events_1.EventEmitter {
    constructor(codebook = []) {
        super();
        this.closing = false;
        this.conduit = new index_1.LECConduit(codebook);
    }
    connect(path) {
        this.ws = new ws_1.WebSocket(path);
        this.ws.on("open", () => {
            this.emit("open");
        });
        this.ws.on("close", () => {
            if (!this.closing) {
                this.connect(path);
            }
        });
        this.ws.on("error", () => {
            if (!this.closing) {
                this.connect(path);
            }
        });
        this.ws.on("message", x => {
            const stmts = this.conduit.unpack(x);
            this.emit("event", ...stmts[0]);
        });
    }
    disconnect() {
        this.ws.close();
    }
    send(...args) {
        if (this.ws.readyState !== ws_1.WebSocket.OPEN) {
            return;
        }
        this.ws.send(this.conduit.pack(...args));
    }
}
exports.LECClient = LECClient;
//# sourceMappingURL=client.js.map
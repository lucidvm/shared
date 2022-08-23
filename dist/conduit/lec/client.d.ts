/// <reference types="node" />
import { EventEmitter } from "events";
import type { wireprim } from "../types";
import type { EventConduit } from "../base";
export declare class LECClient extends EventEmitter {
    private ws;
    readonly conduit: EventConduit;
    private closing;
    constructor(codebook?: string[]);
    connect(path: string): void;
    disconnect(): void;
    send(...args: wireprim[]): void;
}

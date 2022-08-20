/// <reference types="node" />
import type { wireprim } from "../types";
import type { EventConduit } from "../base";
export declare class LECConduit implements EventConduit {
    private codebook;
    private reverse;
    constructor(codebook?: string[]);
    pack(...prims: wireprim[]): Uint8Array;
    unpack(data: Buffer): wireprim[][];
    dumpCodebook(): string[];
    updateCodebook(codebook: string[]): void;
}
export * from "./client";

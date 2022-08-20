import type { wireprim } from "./types";
import type { EventConduit } from "./base";
export declare class JSONConduit implements EventConduit {
    pack(...prims: wireprim[]): string;
    unpack(instr: string): wireprim[][];
}

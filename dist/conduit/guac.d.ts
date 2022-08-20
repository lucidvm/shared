import type { wireprim } from "./types";
import type { EventConduit } from "./base";
export declare function bonk(prim: wireprim): string;
export declare class GuacConduit implements EventConduit {
    pack(...prims: wireprim[]): string;
    packMany(...stmts: wireprim[][]): string;
    unpack(instr: string, unbonk?: boolean): wireprim[][];
}

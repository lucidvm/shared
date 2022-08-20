/// <reference types="node" />
import { Buffer } from "buffer";
export declare type wirestr = string;
export declare type wirenum = number | wirestr;
export declare type wirebool = boolean | wirenum;
export declare type wireblob = Buffer | wirestr;
export declare type wireprim = wirestr | wirenum | wirebool | wireblob;
export declare function canNumber(prim: wireprim): prim is wirenum;
export declare function canBoolean(prim: wireprim): prim is wirebool;
export declare function canBuffer(prim: wireprim): prim is wireblob;
export declare function ensureString(str: any): string;
export declare function ensureNumber(num: wireprim): number;
export declare function ensureBoolean(bool: wireprim): boolean;
export declare function ensureBuffer(blob: wireprim): Buffer;

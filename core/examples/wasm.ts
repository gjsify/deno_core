// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

type externref = any;

export declare function op_wasm(): void;
export declare function op_wasm_mem(memory: externref): void;

export function call(): void {
  op_wasm();
}

export function call_mem(memory: externref): void {
  op_wasm_mem(memory);
}

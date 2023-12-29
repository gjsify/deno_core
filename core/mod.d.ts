import './internal.d.ts';
import './lib.deno_core.d.ts';

declare const core: typeof Deno.core;
declare const internals: any; // TODO: typeof globalThis.__bootstrap.internals;
declare const primordials: typeof globalThis.__bootstrap.primordials;

export { core, internals, primordials };
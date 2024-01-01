// GJSIFY START
import "./lib.js";
import "./00_primordials.js";
import "./01_core.js";
import "./02_error.js";
// GJSIFY END

// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// Re-export fields from `globalThis.__bootstrap` so that embedders using
// ES modules can import these symbols instead of capturing the bootstrap ns.
const bootstrap = globalThis.__bootstrap;
const { core, internals, primordials } = bootstrap;

export { core, internals, primordials };

import GLib from '@girs/glib-2.0';

const byteArray = imports.byteArray;
import { logSignals, parseStackTrace, StackTraceFrame, extractErrorData } from "@gjsify/utils";

let has_tick_scheduled = false;

const { ops } = globalThis.Deno.core;

/**
 * Removes the promise with the given id from the set of unrefed promises.
 * @param {number} promiseId - The id of the promise to remove.
 */
ops.op_ref_op = function(promiseId) {
  // TODO: Implement this function.
  console.warn("Not implemented: op_ref_op");
};

/**
 * Adds a promise with the given id to the set of unrefed promises.
 * @param {number} promiseId - The id of the promise to add.
 */
ops.op_unref_op = function(promiseId) {
  // TODO: Implement this function.
  console.warn("Not implemented: op_unref_op");
};

/**
 * Queue a timer, returning a "large" integer in an f64 (allowing up to `MAX_SAFE_INTEGER`
 * timers to exist).
 * @param {number} depth - The depth of the timer.
 * @param {boolean} repeat - Whether the timer should repeat.
 * @param {number} timeout_ms - The timeout in milliseconds.
 * @param {Function} task - The task to run when the timer expires.
 * @returns {number} - The id of the timer.
 */
ops.op_timer_queue = function(depth, repeat, timeout_ms, task) {
  // Convert timeout from milliseconds to seconds for GLib.timeout_add_seconds
  const timeout_seconds = timeout_ms / 1000;
  const timerId = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, timeout_seconds, () => {
    task();
    // If repeat is true, return GLib.SOURCE_CONTINUE to keep the timer repeating.
    // Otherwise, return GLib.SOURCE_REMOVE to stop the timer.
    return repeat ? GLib.SOURCE_CONTINUE : GLib.SOURCE_REMOVE;
  });
  return timerId;
};

/**
 * Cancel a timer.
 * @param {number} id - The id of the timer to cancel.
 */
ops.op_timer_cancel = function(id) {
  GLib.source_remove(id);
};

/**
 * Placeholder for the op_timer_ref function from the Deno runtime.
 * @param {number} timerId - The id of the timer to reference.
 */
ops.op_timer_ref = function(timerId) {
  console.warn("op_timer_ref is not implemented in Gjs");
};

/**
 * Placeholder for the op_timer_unref function from the Deno runtime.
 * @param {number} timerId - The id of the timer to unreference.
 */
ops.op_timer_unref = function(timerId) {
  console.warn("op_timer_unref is not implemented in Gjs");
};

/**
 * @param {() => boolean} fn
 * @returns {void}
 */
ops.op_set_macrotask_callback = (fn) => {
  console.warn("Not implemented: ops.op_set_macrotask_callback");

  // TODO: Not sure how we should implement this:
  return op_set_next_tick_callback(fn);
}

/**
 * @param {() => void} fn
 * @returns {void}
 */
ops.op_set_next_tick_callback = (fn) => {
  GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
    fn();
    return GLib.SOURCE_CONTINUE;
  });
}

/**
 * @param {Deno.core.PromiseRejectCallback} fn
 * @returns {void}
 */
ops.op_set_promise_reject_callback = (fn) => {
  logSignals.connect("unhandledRejection", (self, data, promiseData) => {

    /**
     * TODO: Not sure how we should implement this:
     * 0: store pending promise exception
     * 1: remove pending promise exception
     */
    const type = 1;

    fn(type, promiseData.promise, promiseData.reason);
  });
}

ops.op_run_microtasks = () => {
  // In Deno this method runs the microtask which a in the microtask queue added with `op_queue_microtask`,
  // but we let GLib do this. If this should lead to problems, we can still adjust the implementation.

  // But we can force the execution of idle callbacks
  GLib.main_context_default().iteration(false);
}

ops.op_has_tick_scheduled = () => {
  return has_tick_scheduled;
}

/**
 * @param {boolean} bool
 */
ops.op_set_has_tick_scheduled = (bool) => {
  has_tick_scheduled = bool;
}

/**
 * @param {string} source
 * @param {string} specifier
 * @returns {[Function, Error]}
 */
ops.op_eval_context = (source, specifier) => {
  console.warn("Not implemented: ops.op_eval_context");

  const f = undefined;
  const err = undefined;

  return [f, err]
}

/**
 * @param {() => void} cb
 */
ops.op_queue_microtask = (cb) => {
  GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
    cb();
    return GLib.SOURCE_REMOVE;
  });
}

/**
 * @returns {object}
 */
ops.op_create_host_object = () => {
  console.warn("Not implemented: ops.op_create_host_object");
  return new Object();
}

/**
 * @param {string} text
 * @returns {Uint8Array}
 */
ops.op_encode = (text) => {
  return byteArray.fromString(text);
}

/**
 * @param {Uint8Array} buffer
 * @returns {string}
 */
ops.op_decode = (buffer) => {
  return byteArray.toString(buffer);
}

/**
 * @param {any} value
 * @param {object} options
 * @param {Function} errorCallback
 * @returns {any}
 */
ops.op_serialize = (value, options = {}, errorCallback) => {
  console.warn("Not implemented: ops.op_serialize");
}

/**
 * @param {any} buffer
 * @param {object} options
 * @returns {any}
 */
ops.op_deserialize = (buffer, options = {}) => {
  console.warn("Not implemented: ops.op_deserialize");
}

/**
 * @param {(promise: Promise<unknown>, parentPromise: Promise<unknown>) => void} init
 * @param {(promise: Promise<unknown>) => void} before
 * @param {(promise: Promise<unknown>) => void} after
 * @param {(promise: Promise<unknown>) => void} resolve
 */
ops.op_set_promise_hooks = (
  init,
  before,
  after,
  resolve) => {
  console.warn("Not implemented: ops.op_set_promise_hooks");
}

/**
 * @param {Promise<any>} promise
 * @returns {[number, any]}
 */
ops.op_get_promise_details = (promise) => {
  console.warn("Not implemented: ops.op_get_promise_details");
  const state = -1;
  const result = undefined; // TODO
  return [state, result];
}

/**
 * @param {any} proxy
 * @returns {any}
 */
ops.op_get_proxy_details = (proxy) => {
  console.warn("Not implemented: ops.op_get_proxy_details", proxy);
  return null;
}

/**
 * @returns {number}
 */
ops.op_memory_usage = () => {
  console.warn("Not implemented: ops.op_memory_usage");
  return -1;
}

/**
 * @param {(source: any, rid: number) => void} fn
 */
ops.op_set_wasm_streaming_callback = (
  fn) => {
  console.warn("Not implemented: ops.op_set_wasm_streaming_callback");
}

/**
 * @param {number} rid
 * @param {Error} error
 */
ops.op_abort_wasm_streaming = (rid, error) => {
  console.warn("Not implemented: ops.op_abort_wasm_streaming");
}

/**
 * @param {Error | string} error
 * @returns {object}
 */
ops.op_destructure_error = (error) => {
  console.warn("Not implemented: ops.op_destructure_error");
}

/**
 * @param {Error} error
 */
ops.op_dispatch_exception = (error) => {
  console.warn("Not implemented: ops.op_dispatch_exception");
  throw error;
}

/**
 * @returns {string[]}
 */
ops.op_op_names = () => {
  console.warn("Not implemented: ops.op_op_names");
  return [];
}

/**
 * @param {any} cse
 * @returns {object}
 */
ops.op_apply_source_map = (cse) => {
  console.warn("Not implemented: ops.op_apply_source_map");
  return {};
}

/**
 * @param {(error: Error | string) => string} cb
 * @returns {string[]}
 */
ops.op_set_format_exception_callback = (cb) => {
  console.warn("Not implemented: ops.op_set_format_exception_callback");
  return [];
}

/**
 * @returns {boolean}
 */
ops.op_event_loop_has_more_work = () => {
  console.warn("Not implemented: ops.op_event_loop_has_more_work");
  return false;
}

/**
 * @param {Promise<any>} promise
 * @param {any} reason
 */
ops.op_store_pending_promise_rejection = (promise, reason) => {
  // ... existing code ...
}

/**
 * @param {Promise<any>} promise
 */
ops.op_remove_pending_promise_rejection = (promise) => {
  // ... existing code ...
}

/**
 * @param {Promise<any>} promise
 * @returns {boolean}
 */
ops.op_has_pending_promise_rejection = (promise) => {
  // ... existing code ...
}

/**
 * @param {ArrayBufferLike} O
 * @returns {boolean}
 */
ops.op_arraybuffer_was_detached = (O) => {
  console.warn("Not implemented: ops.op_arraybuffer_was_detached");
  return false;
}
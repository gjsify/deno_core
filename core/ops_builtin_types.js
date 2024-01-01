const { ops } = globalThis.Deno.core;

/**
 * Checks if a value is an ArrayBuffer or SharedArrayBuffer.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an ArrayBuffer or SharedArrayBuffer, false otherwise.
 */
ops.op_is_any_array_buffer = (value) => {
    return value instanceof ArrayBuffer || value instanceof SharedArrayBuffer;
}

/**
 * Checks if a value is an Arguments object.
 * Note: In JavaScript, it's not possible to directly check if a value is an Arguments object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an Arguments object, false otherwise.
 */
ops.op_is_arguments_object = (value) => {
    // This is a workaround, as there's no direct way to check if a value is an Arguments object in JavaScript.
    return Object.prototype.toString.call(value) === '[object Arguments]';
}

/**
 * Checks if a value is an ArrayBuffer.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an ArrayBuffer, false otherwise.
 */
ops.op_is_array_buffer = (value) => {
    return value instanceof ArrayBuffer;
}

/**
 * Checks if a value is an ArrayBufferView.
 * Note: In JavaScript, ArrayBufferView is not a constructor, but a type that represents views on ArrayBuffers.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an ArrayBufferView, false otherwise.
 */
ops.op_is_array_buffer_view = (value) => {
    return value instanceof Int8Array || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int16Array || value instanceof Uint16Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Float32Array || value instanceof Float64Array || value instanceof DataView;
}

/**
 * Checks if a value is a function and has the [AsyncFunction] constructor.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an async function, false otherwise.
 */
ops.op_is_async_function = (value) => {
    return typeof value === 'function' && value.constructor.name === 'AsyncFunction';
}

/**
 * Checks if a value is a BigInt object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a BigInt object, false otherwise.
 */
ops.op_is_big_int_object = (value) => {
    return typeof value === 'bigint';
}

/**
 * Checks if a value is a Boolean object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Boolean object, false otherwise.
 */
ops.op_is_boolean_object = (value) => {
    return typeof value === 'boolean';
}

/**
 * Checks if a value is a boxed primitive (Boolean, String, Number, Symbol, BigInt).
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a boxed primitive, false otherwise.
 */
ops.op_is_boxed_primitive = (value) => {
    return typeof value === 'boolean' || typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'bigint';
}

/**
 * Checks if a value is a DataView.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a DataView, false otherwise.
 */
ops.op_is_data_view = (value) => {
    return value instanceof DataView;
}

/**
 * Checks if a value is a Date.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Date, false otherwise.
 */
ops.op_is_date = (value) => {
    return value instanceof Date;
}

/**
 * Checks if a value is a function and has the [GeneratorFunction] constructor.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a generator function, false otherwise.
 */
ops.op_is_generator_function = (value) => {
    return typeof value === 'function' && value.constructor.name === 'GeneratorFunction';
}

/**
 * Checks if a value is a Generator object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Generator object, false otherwise.
 */
ops.op_is_generator_object = (value) => {
    console.debug('TODO: op_is_generator_object', value.constructor.name === 'GeneratorFunction', value.constructor.name);
    return value.constructor.name === 'GeneratorFunction';
}

/**
 * Checks if a value is a Map.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Map, false otherwise.
 */
ops.op_is_map = (value) => {
    return value instanceof Map;
}

/**
 * Checks if a value is a Map Iterator.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Map Iterator, false otherwise.
 */
ops.op_is_map_iterator = (value) => {
    return value instanceof Map && typeof value.next === 'function';
}

/**
 * Checks if a value is a Module Namespace Object.
 * Note: JavaScript does not have a direct equivalent for this.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Module Namespace Object, false otherwise.
 */
ops.op_is_module_namespace_object = (value) => {
    // JavaScript does not have a direct equivalent for this.
    return false;
}

/**
 * Checks if a value is a Native Error.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Native Error, false otherwise.
 */
ops.op_is_native_error = (value) => {
    return value instanceof Error;
}

/**
 * Checks if a value is a Number object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Number object, false otherwise.
 */
ops.op_is_number_object = (value) => {
    return typeof value === 'number';
}

/**
 * Checks if a value is a Promise.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Promise, false otherwise.
 */
ops.op_is_promise = (value) => {
    return value instanceof Promise;
}

/**
 * Checks if a value is a Proxy.
 * Note: JavaScript does not have a direct way to check if a value is a Proxy.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Proxy, false otherwise.
 */
ops.op_is_proxy = (value) => {
    // JavaScript does not have a direct way to check if a value is a Proxy.
    return false;
}

/**
 * Checks if a value is a RegExp.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a RegExp, false otherwise.
 */
ops.op_is_reg_exp = (value) => {
    return value instanceof RegExp;
}

/**
 * Checks if a value is a Set.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Set, false otherwise.
 */
ops.op_is_set = (value) => {
    return value instanceof Set;
}

/**
 * Checks if a value is a Set Iterator.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Set Iterator, false otherwise.
 */
ops.op_is_set_iterator = (value) => {
    return value instanceof Set && typeof value.next === 'function';
}

/**
 * Checks if a value is a SharedArrayBuffer.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a SharedArrayBuffer, false otherwise.
 */
ops.op_is_shared_array_buffer = (value) => {
    return value instanceof SharedArrayBuffer;
}

/**
 * Checks if a value is a String object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a String object, false otherwise.
 */
ops.op_is_string_object = (value) => {
    return typeof value === 'string';
}

/**
 * Checks if a value is a Symbol object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a Symbol object, false otherwise.
 */
ops.op_is_symbol_object = (value) => {
    return typeof value === 'symbol';
}

/**
 * Checks if a value is a TypedArray.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a TypedArray, false otherwise.
 */
ops.op_is_typed_array = (value) => {
    return value instanceof Int8Array || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int16Array || value instanceof Uint16Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Float32Array || value instanceof Float64Array;
}

/**
 * Checks if a value is a WeakMap.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a WeakMap, false otherwise.
 */
ops.op_is_weak_map = (value) => {
    return value instanceof WeakMap;
}

/**
 * Checks if a value is a WeakSet.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a WeakSet, false otherwise.
 */
ops.op_is_weak_set = (value) => {
    return value instanceof WeakSet;
}

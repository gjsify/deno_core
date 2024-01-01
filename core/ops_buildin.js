const { ops } = globalThis.Deno.core;

import './ops_builtin_types.js';
import './ops_builtin_v8.js';

/**
 * Throws a JavaScript Error with a given message.
 * @param {string} message - The message for the Error.
 * @throws {Error} When this function is called, it always throws an Error.
 */
ops.op_panic = (message) => {
    throw new Error("JS PANIC: " + message);
}

/**
 * Returns a map of resources with id as key and string representation as value.
 * This function is not yet implemented.
 * @returns {Array} An array of resources.
 */
ops.op_resources = () => {
    console.warn("Not implemented: op_resources");
    // This should return an array of resources.
    // Each resource is a tuple (array) with two elements: the resource id and the resource name.
    // This is just a placeholder implementation.
    return [];
}

/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
ops.op_add = (a, b) => {
    return a + b;
}

/**
 * Asynchronously adds two numbers together.
 * This function is not yet implemented.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {Promise<number>} A promise that resolves with the sum of the two numbers.
 */
ops.op_add_async = (a, b) => {
    return Promise.resolve(op_add(a, b));
}

/**
 * A function that does nothing and returns nothing.
 */
ops.op_void_sync = () => {
    // This function does nothing.
}

/**
 * An asynchronous function that does nothing and returns nothing.
 * @returns {Promise<void>} A promise that resolves with no value.
 */
ops.op_void_async = async () => {
    // This function does nothing.
    Promise.resolve();
}

/**
 * An asynchronous function that always throws an error.
 * @returns {Promise<void>} A promise that rejects with an Error.
 */
ops.op_error_async = async () => {
    Promise.reject(new Error("error"));
}

/**
 * An asynchronous function that always throws an error.
 * This function is not yet implemented.
 * @returns {Promise<void>} A promise that rejects with an Error.
 */
ops.op_error_async_deferred = async () => {
    console.warn("Not implemented: op_error_async_deferred");
    // This should reject a promise with an Error.
    // This is just a placeholder implementation.
    return Promise.reject(new Error("error"));
}

/**
 * An asynchronous function that does nothing and returns nothing.
 * This function is not yet implemented.
 * @returns {Promise<void>} A promise that resolves with no value.
 */
ops.op_void_async_deferred = async () => {
    console.warn("Not implemented: op_void_async_deferred");
    // This should resolve a promise with no value.
    // This is just a placeholder implementation.
    return Promise.resolve();
}

/**
 * Removes a resource from the resource table.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @returns {Promise<void>} A promise that resolves when the resource is removed.
 */
ops.op_close = async (rid) => {
    console.warn("Not implemented: op_close");
    // This should remove the resource with the given id from the resource table.
    // This is just a placeholder implementation.
}

/**
 * Tries to remove a resource from the resource table. If there is no resource
 * with the specified `rid`, this is a no-op.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 */
ops.op_try_close = (rid) => {
    console.warn("Not implemented: op_try_close");
    // This should try to remove the resource with the given id from the resource table.
    // If there is no such resource, this function should do nothing.
    // This is just a placeholder implementation.
}

/**
 * Prints a message to the console.
 * @param {string} msg - The message to print.
 * @param {boolean} isErr - Whether to print the message as an error.
 */
ops.op_print = (msg, isErr = false) => {
    if(isErr) {
        console.error(msg);
    } else {
        console.log(msg);
    }
}

/**
 * Feeds data into a WebAssembly streaming compile.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @param {Uint8Array} bytes - The bytes to feed into the WebAssembly streaming compile.
 * @returns {Promise<void>} A promise that resolves when the data has been fed into the WebAssembly streaming compile.
 */
ops.op_wasm_streaming_feed = async (rid, bytes) => {
    console.warn("Not implemented: op_wasm_streaming_feed");
    // This should feed the given bytes into the WebAssembly streaming compile with the given resource id.
    // This is just a placeholder implementation.
    promise.resolve();
}

/**
 * Sets the source URL for a WebAssembly streaming compile.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @param {string} url - The source URL.
 * @returns {Promise<void>} A promise that resolves when the source URL has been set.
 */
ops.op_wasm_streaming_set_url = async (rid, url) => {
    console.warn("Not implemented: op_wasm_streaming_set_url");
    // This should set the source URL for the WebAssembly streaming compile with the given resource id.
    // This is just a placeholder implementation.
}

/**
 * Reads data from a resource.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @param {Uint8Array} buf - The buffer to read the data into.
 * @returns {Promise<number>} A promise that resolves with the number of bytes read.
 */
ops.op_read = async (rid, buf) => {
    console.warn("Not implemented: op_read");
    // This should read data from the resource with the given id into the given buffer.
    // This is just a placeholder implementation.
    return Promise.resolve(0);
}

/**
 * Reads all data from a resource.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @returns {Promise<Uint8Array>} A promise that resolves with the data read from the resource.
 */
ops.op_read_all = async (rid) => {
    console.warn("Not implemented: op_read_all");
    // This should read all data from the resource with the given id.
    // This is just a placeholder implementation.
    return Promise.resolve(new Uint8Array());
}

/**
 * Writes data to a resource.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @param {Uint8Array} buf - The data to write.
 * @returns {Promise<number>} A promise that resolves with the number of bytes written.
 */
ops.op_write = async (rid, buf) => {
    console.warn("Not implemented: op_write");
    // This should write the given data to the resource with the given id.
    // This is just a placeholder implementation.
    return Promise.resolve(0);
}

/**
 * Synchronously reads data from a resource.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @param {Uint8Array} buf - The buffer to read the data into.
 * @returns {number} The number of bytes read.
 */
ops.op_read_sync = (rid, buf) => {
    console.warn("Not implemented: op_read_sync");
    // This should synchronously read data from the resource with the given id into the given buffer.
    // This is just a placeholder implementation.
    return 0;
}

/**
 * Synchronously writes data to a resource.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @param {Uint8Array} buf - The data to write.
 * @returns {number} The number of bytes written.
 */
ops.op_write_sync = (rid, buf) => {
    console.warn("Not implemented: op_write_sync");
    // This should synchronously write the given data to the resource with the given id.
    // This is just a placeholder implementation.
    return 0;
}

/**
 * Writes all data to a resource.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @param {Uint8Array} buf - The data to write.
 * @returns {Promise<number>} A promise that resolves with the number of bytes written.
 */
ops.op_write_all = async (rid, buf) => {
    console.warn("Not implemented: op_write_all");
    // This should write all the given data to the resource with the given id.
    // This is just a placeholder implementation.
    return Promise.resolve(0);
}

/**
 * Writes a type error to a resource.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @param {string} error - The error message.
 * @returns {Promise<void>} A promise that resolves when the error has been written.
 */
ops.op_write_type_error = async (rid, error) => {
    console.warn("Not implemented: op_write_type_error");
    // This should write the given error message to the resource with the given id.
    // This is just a placeholder implementation.
}

/**
 * Shuts down a resource.
 * This function is not yet implemented.
 * @param {number} rid - The resource id.
 * @returns {Promise<void>} A promise that resolves when the resource has been shut down.
 */
ops.op_shutdown = async (rid) => {
    console.warn("Not implemented: op_shutdown");
    // This should shut down the resource with the given id.
    // This is just a placeholder implementation.
}

/**
 * Formats a file name.
 * This function is not yet implemented.
 * @param {string} name - The file name to format.
 * @returns {Promise<string>} A promise that resolves with the formatted file name.
 */
ops.op_format_file_name = async (name) => {
    console.warn("Not implemented: op_format_file_name");
    // This should format the given file name.
    // This is just a placeholder implementation.
    return Promise.resolve(name);
}

/**
 * Gets the byte length of a string.
 * @param {string} value - The string to get the byte length of.
 * @returns {number} The byte length of the string.
 */
ops.op_str_byte_length = (value) => {
    // convert the string to a utf-8 encoded array of bytes
    // const bytes = new TextEncoder().encode(str);
    // return the length of the array
    // return bytes.length;

    // return str.length;

    // Convert the string to a Blob and get the size of the Blob
    return new Blob([value]).size;
}


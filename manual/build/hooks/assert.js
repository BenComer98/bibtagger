"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assert(condition, message) {
    if (typeof message === 'undefined') {
        message = "Assertion failed.";
    }
    if (!condition) {
        console.log(message);
    }
}
exports.default = assert;

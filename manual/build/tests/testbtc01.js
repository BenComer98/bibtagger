"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// RUNS ALL TEST FILES IN BATCH 1
const test01_1 = __importDefault(require("./test01"));
const test02_1 = __importDefault(require("./test02"));
function TestBtc01() {
    console.log("TEST BATCH 01... starting.");
    (0, test01_1.default)();
    (0, test02_1.default)();
    console.log("TEST BATCH 01... complete.");
}
exports.default = TestBtc01;

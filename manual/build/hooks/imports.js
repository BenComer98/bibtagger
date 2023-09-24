"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLLoader_1 = __importDefault(require("../components/URLLoader"));
const Labeler_1 = __importDefault(require("../components/Labeler"));
const assert_1 = __importDefault(require("./assert"));
const imports = {
    URLLoader: URLLoader_1.default,
    Labeler: Labeler_1.default,
    assert: assert_1.default
};
exports.default = imports;

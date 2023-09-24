"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imports_1 = __importDefault(require("../hooks/imports"));
function Test02() {
    process.stdout.write("Test02... ");
    const labeler = new imports_1.default.Labeler(['https://drive.google.com/file/d/19QRj4sE210Lb-IrpGQo0KfHKETSr5iNr/view?usp=drive_link']);
    process.stdout.write("complete.\n");
}
exports.default = Test02;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imports_1 = __importDefault(require("../hooks/imports"));
function Test01() {
    process.stdout.write("Test01... ");
    const loader = new imports_1.default.URLLoader("./data/files_test01.txt");
    loader.read();
    const comparison = [
        'https://drive.google.com/file/d/19QRj4sE210Lb-IrpGQo0KfHKETSr5iNr/view?usp=drive_link',
        'https://drive.google.com/file/d/18_snkP_Fqa0qvT8Tg2hpJxrgkm9O07HW/view?usp=drive_link'
    ];
    for (let i = 0; i < comparison.length; ++i) {
        imports_1.default.assert(comparison[i] === loader.urls[i]);
    }
    process.stdout.write("complete.\n");
}
exports.default = Test01;

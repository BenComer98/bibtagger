"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLLoader_1 = __importDefault(require("./components/URLLoader"));
const loader = new URLLoader_1.default("https://drive.google.com/file/d/19QRj4sE210Lb-IrpGQo0KfHKETSr5iNr/view?usp=drive_link");
loader.read();
console.log(loader.urls);

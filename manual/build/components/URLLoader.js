"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLLoader = void 0;
const fs_1 = __importDefault(require("fs"));
class URLLoader {
    constructor(path) {
        this.path = path;
        this.urls = [];
    }
    /**********************************
     * Read the URLS from a file.
     *
     *
     * URL's should be separated by newlines after each line.
     * EXAMPLE: (URL's shown are fake)
     *
     * urls.txt - - - - - - - - - - - - - - - - - - - - - - -
     * http://photobase.com/238946
     * http://photobase.com/3u9256
     * - - - - - - - - - - - - - - - - - - - - - - - - - - -
     *********************************/
    read() {
        this.urls = fs_1.default.readFileSync(this.path, {
            encoding: 'utf-8'
        })
            .split('\r\n');
    }
    reset_path(path) {
        // Resets the path to the given param and url's to empty.
        this.urls = [];
        this.path = path;
    }
}
exports.URLLoader = URLLoader;
;
exports.default = URLLoader;

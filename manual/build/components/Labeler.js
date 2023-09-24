"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vision_1 = require("@google-cloud/vision");
class Labeler {
    constructor(urls) {
        this.labels = undefined;
        const getImage /* HTMLElement */ = (url) => {
            return `<img src=${url} id=${url} />`;
        };
        const images = urls.map((url) => {
            let image = getImage(url);
            return {
                image,
                url
            };
        });
        this.requests = JSON.stringify(images.map((image) => {
            return {
                "image": {
                    "content": image.image,
                    "source": {
                        "imageUri": image.url
                    }
                },
                "features": [
                    {
                        "type": "todo" // I need Google's "Feature" enum here: https://cloud.google.com/vision/docs/reference/rest/v1p3beta1/Feature
                        // I can't seem to get this enum definition to work though... any ideas?
                    }
                ],
                "imageContext": {
                    "languageHints": ["en"]
                }
            };
        }));
    }
    ;
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new vision_1.ImageAnnotatorClient();
            function callAsyncBatchAnnotateImages(requests) {
                return __awaiter(this, void 0, void 0, function* () {
                    // TODO: replace this with the requests generated above
                    const outputConfig = {};
                    const request = {
                        requests,
                        outputConfig
                    };
                    const [operation] = yield client.batchAnnotateImages(request);
                    const [response] = yield operation.promise();
                    console.log(response);
                });
            }
            yield callAsyncBatchAnnotateImages(this.requests);
        });
    }
}
;
exports.default = Labeler;

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
/**
 * TODO(developer):
 *  1. Uncomment and replace these variables before running the sample.
 *  2. Set up ADC as described in https://cloud.google.com/docs/authentication/external/set-up-adc
 *  3. Make sure you have the necessary permission to list storage buckets "storage.buckets.list"
 *    (https://cloud.google.com/storage/docs/access-control/iam-permissions#bucket_permissions)
 */
const projectId = 'primeval-wind-399804';
const { stg = Storage } = require('@google-cloud/storage');
function authenticate() {
    return __awaiter(this, void 0, void 0, function* () {
        // This snippet demonstrates how to list buckets.
        // NOTE: Replace the client created below with the client required for your application.
        // Note that the credentials are not specified when constructing the client.
        // The client library finds your credentials using ADC.
        const storage = new stg({
            projectId,
        });
        const [buckets] = yield storage.getBuckets();
        console.log('Buckets:');
        for (const bucket of buckets) {
            console.log(`- ${bucket.name}`);
        }
        console.log('Listed all storage buckets.');
    });
}

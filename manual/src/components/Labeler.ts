import { ImageAnnotatorClient } from "@google-cloud/vision";

class Labeler {
  public labels: null | undefined | object = undefined;
  private requests: string; // JSON.stringify()
  constructor(urls: string[]) {
    const getImage: (url: string) => string /* HTMLElement */ = (url) => {
      return `<img src=${url} id=${url} />`;
    }

    const images: {image: string, url: string}[] = urls.map((url) => {
      let image = getImage(url);
      return {
        image,
        url
      };
    })

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
    }),);
  };

  async read(): Promise<any> {
    const client = new ImageAnnotatorClient();

    async function callAsyncBatchAnnotateImages(requests: string) {
      // TODO: replace this with the requests generated above
      const outputConfig = {};
      const request = {
        requests,
        outputConfig
      };

      const [operation] = await client.batchAnnotateImages(request);
      const [response] = await operation.promise();
      console.log(response);
    }

    await callAsyncBatchAnnotateImages(this.requests);
  }
};

export default Labeler;
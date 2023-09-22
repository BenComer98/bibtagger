import fs from 'fs';

export class URLLoader {
  public urls: string[] = [];

  constructor(public path: string) {}

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
  public read(): void {
    this.urls = fs.readFileSync(this.path, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((url: string): string => {
      return url.replace('\r', '');
    })
  }

  public reset_path(path:string): void {
    // Resets the path to the given param and url's to empty.
    this.urls = [];
    this.path = path;
  }
};

export default URLLoader;
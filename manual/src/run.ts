import URLLoader from "./components/URLLoader";

const loader = new URLLoader("https://drive.google.com/file/d/19QRj4sE210Lb-IrpGQo0KfHKETSr5iNr/view?usp=drive_link");
loader.read();

console.log(loader.urls);
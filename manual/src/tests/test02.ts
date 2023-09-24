import imports from "../hooks/imports";

function Test02(): void {
  process.stdout.write("Test02... ");

  const labeler = new imports.Labeler(['https://drive.google.com/file/d/19QRj4sE210Lb-IrpGQo0KfHKETSr5iNr/view?usp=drive_link']);

  process.stdout.write("complete.\n");
}

export default Test02;
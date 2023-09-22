import imports from "../hooks/imports";

function Test01(): void {
  process.stdout.write("Test01... ");

  const loader = new imports.URLLoader("./data/files_test01.txt");
  loader.read();

  const comparison = [
    'https://drive.google.com/file/d/19QRj4sE210Lb-IrpGQo0KfHKETSr5iNr/view?usp=drive_link',
    'https://drive.google.com/file/d/18_snkP_Fqa0qvT8Tg2hpJxrgkm9O07HW/view?usp=drive_link'
  ]

  for (let i = 0; i < comparison.length; ++i) {
    imports.assert(comparison[i] === loader.urls[i]);
  }

  process.stdout.write("complete.\n");
}

export default Test01;
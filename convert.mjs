// tools/convert-js-to-json.mjs
// Uso: node tools/convert-js-to-json.mjs path/to/translations.js > resources/lang/en/fichas.json

import fs from "fs/promises";
import vm from "vm";
import path from "path";

const input = process.argv[2];
if (!input) {
  console.error("Uso: node convert-js-to-json.mjs path/to/translations.js");
  process.exit(1);
}

const abs = path.resolve(input);
const raw = await fs.readFile(abs, "utf8");

// Extrae el objeto después de `export default`
const m = raw.match(/export\s+default\s+([\s\S]*);?\s*$/m);
if (!m) {
  console.error("No se encontró `export default` en el fichero.");
  process.exit(2);
}

const jsObjectSource = m[1];

// Ejecuta el literal JS en un sandbox y obtiene el objeto
try {
  const sandbox = {};
  vm.createContext(sandbox);
  // construimos código seguro: const __obj = <obj>; __obj;
  const code = "const __obj = " + jsObjectSource + ";\n__obj;";
  const result = vm.runInContext(code, sandbox);
  // stringify
  const json = JSON.stringify(result, null, 2);
  console.log(json);
} catch (err) {
  console.error("Error al parsear el objeto JS:", err);
  process.exit(3);
}

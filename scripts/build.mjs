import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const distDirectory = resolve(projectDirectory, "dist");

await build({
  root: projectDirectory,
  configFile: resolve(projectDirectory, "vite.config.js"),
  build: {
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    chunkSizeWarningLimit: 2000,
  },
});

const indexPath = resolve(distDirectory, "index.html");
let html = await readFile(indexPath, "utf8");

const scriptTag = /<script type="module" crossorigin src="([^"]+)"><\/script>/;
const stylesheetTag = /<link rel="stylesheet" crossorigin href="([^"]+)">/;
const scriptMatch = html.match(scriptTag);
const stylesheetMatch = html.match(stylesheetTag);

if (!scriptMatch || !stylesheetMatch) {
  throw new Error("Não foi possível localizar os arquivos gerados pelo Vite.");
}

const assetPath = (url) => resolve(distDirectory, url.replace(/^\.\//, ""));
const javascript = await readFile(assetPath(scriptMatch[1]), "utf8");
const stylesheet = await readFile(assetPath(stylesheetMatch[1]), "utf8");

html = html
  .replace(
    stylesheetMatch[0],
    () => "<style>\n" + stylesheet + "\n</style>"
  )
  .replace(
    scriptMatch[0],
    () => "<script type=\"module\">\n" + javascript + "\n</script>"
  );

await writeFile(indexPath, html, "utf8");

console.log("Versão independente criada em dist/index.html");

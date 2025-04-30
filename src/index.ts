import fs from "node:fs/promises";
import path from "node:path";
import cloudinary from "./cloudinary";
import { envs } from "./config/envs";

async function main() {
  const currentDirectory = path.resolve("./src/data");

  const file = Bun.file(`${currentDirectory}/urls.csv`);
  const text = await file.text();
  const lines = text.split("\n");
  const urls = lines.map((line) => line.split(","));

  const urlsFlat = urls.flat().filter((url) => url && url.startsWith("http"));

  const results = [];

  for (const url of urlsFlat) {
    try {
      const result = await cloudinary.uploader.upload(url, {
        folder: envs.DIRECTORY_NAME,
      });

      results.push(result.url);
    } catch (err) {
      console.error(`Error subiendo ${url}`, err);
    }
  }

  // create csv with results
  const csv = results.join("\n");

  await fs.writeFile(`${currentDirectory}/results.csv`, csv);

  console.log("Done");
}

main();

import select from "@inquirer/select";
import path from "path";
import fs from "fs";

import './global';
import { updateImage } from "./scripts/updateImage";
import { capitalizeString } from "./utils/string-functions";
import config from "./config";

const filesPath = fs.readdirSync(config.sourcePath);

const choices = filesPath.map((filePath: string) => ({
  name: capitalizeString(filePath.split(".")[0]),
  value: filePath,
}));

const selection = await select({
  message: "Select the desktop wallpaper:",
  choices,
});

const selectedFile = path.join(config.sourcePath, selection);

updateImage(selectedFile, config.destinationPath);

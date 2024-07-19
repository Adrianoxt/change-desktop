import select, { Separator } from "@inquirer/select";
import path from "path";
import fs from "fs";

import "./global";
import { updateImage, resetImage } from "./scripts";
import { capitalizeString } from "./utils/string-functions";
import config from "./config";

const init = async () => {
  const filesPath = fs.readdirSync(config.sourcePath);

  const forceRefreshValue = "force__refresh";

  let choices = filesPath.map((filePath: string) => ({
    name: capitalizeString(filePath.split(".")[0]),
    value: filePath,
  }));

  if (
    fs.existsSync(config.backupFolder) &&
    fs.readdirSync(config.backupFolder).length
  ) {
    choices = [
      ...choices,
      new Separator() as any,
      {
        name: "--Reset",
        value: forceRefreshValue,
        description:
          "(This will revert all the changes and reset to the default version)",
      } as any,
    ];
  }

  choices = [...choices, { name: "--Exit", value: "exit", description: '(This will close the terminal)' } as any];

  const selection = await select({
    message: "Select the desktop wallpaper:",
    choices,
  });

  if (selection === forceRefreshValue) {
    resetImage();
    return;
  } else if (selection === "exit") {
    return;
  }

  const selectedFile = path.join(config.sourcePath, selection);

  updateImage(selectedFile);
};

init();

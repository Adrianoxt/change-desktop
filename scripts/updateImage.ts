import fs from "fs";
import path from "path";
import { refreshWindowsScreen } from "./refresh-screen";
import config from "./../config";

const windowsFileName = "TranscodedWallpaper";

const { destinationPath, backupFolder } = config;

const createBackupFolder = () => {
  if (!fs.existsSync(backupFolder)) {
    fs.mkdirSync("backup");
  }
  if (!fs.readdirSync(backupFolder).length) {
    fs.cpSync(destinationPath, backupFolder, { recursive: true });
    console.log("Backup Created!");
  }
};

export const updateImage = (filePath: string) => {
  const transcodedFilePath = path.join(destinationPath, windowsFileName);

  const cachedFile = fs.readdirSync(
    path.join(destinationPath, "CachedFiles")
  )[0];

  const cachedFilePath = path.join(destinationPath, "CachedFiles", cachedFile);
  const backupTranscodedFilePath = path.join(transcodedFilePath + ".bak");

  if (!fs.existsSync(backupTranscodedFilePath)) {
    fs.copyFileSync(transcodedFilePath, backupTranscodedFilePath);
  }

  if (!fs.existsSync(backupFolder) || !fs.readdirSync(backupFolder).length) {
    createBackupFolder();
  }

  fs.copyFileSync(filePath, transcodedFilePath);
  fs.copyFileSync(filePath, cachedFilePath);

  setTimeout(() => {
    refreshWindowsScreen();
  }, 200);
};

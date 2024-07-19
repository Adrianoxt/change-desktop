import fs from "fs";
import { refreshWindowsScreen } from "./refresh-screen";
import { forceRefresh } from "./force-refresh";
import config from "./../config";

export const resetImage = () => {
  const { destinationPath, backupFolder } = config;

  if (!fs.existsSync(backupFolder) || !fs.readdirSync(backupFolder).length) {
    fs.copyFileSync(backupFolder, destinationPath);
  }

  fs.cpSync(backupFolder, destinationPath, { recursive: true });

  refreshWindowsScreen();

  setTimeout(() => {
    forceRefresh();
    refreshWindowsScreen();
  }, 200);
};

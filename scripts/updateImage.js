const fs = require("fs");
const path = require("path");
const refreshWindowsScreen = require("./refresh-screen");

const windowsFileName = "TranscodedWallpaper";
const backupFolder = path.join(__dirname, "..", "backup");

const createBackupFolder = (destinationPath) => {
  if (!fs.existsSync(backupFolder)) {
    fs.mkdirSync("backup");
  }
  if (!fs.readdirSync(backupFolder).length) {
    fs.cpSync(destinationPath, backupFolder, { recursive: true });
    console.log('Backup Created!')
  }
};

const updateImage = (filePath, destinationPath) => {
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
    createBackupFolder(destinationPath);
  }

  fs.copyFileSync(filePath, transcodedFilePath);
  fs.copyFileSync(filePath, cachedFilePath);

  setTimeout(() => {
    refreshWindowsScreen();
  }, 200);
};

module.exports = updateImage;

import path from "node:path";
import os from 'os';

export default {
    sourcePath: path.join(__dirname, "images"),
    destinationPath: `C:/Users/${os.userInfo().username}/AppData/Roaming/Microsoft/Windows/Themes`,
    backupFolder: path.join(__dirname, "backup"),
};

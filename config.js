const path = require("node:path");
const os = require('os');

module.exports = {
    sourcePath: path.join(__dirname, "images"),
    destinationPath: `C:/Users/${os.userInfo().username}/AppData/Roaming/Microsoft/Windows/Themes`
};

const path = require("path");

const getFilesPath = require("./scripts/get-files-path");
const terminalSelection = require("./scripts/terminal-selection");
const updateImage = require("./scripts/updateImage");
const { capitalizeString } = require("./utils/string-functions");
const { sourcePath, destinationPath } = require("./config");

const filesPath = getFilesPath(sourcePath);

const choices = filesPath.map((filePath) => ({
  name: capitalizeString(filePath.split(".")[0]),
  value: filePath,
}));

terminalSelection(choices).then((selection) => {
  const selectedFile = path.join(sourcePath, selection);
  updateImage(selectedFile, destinationPath);
});
var fs = require('fs');

const getFilesPath = (dirname) => {
    const images = fs.readdirSync(dirname);
    return images;
}
module.exports = getFilesPath;
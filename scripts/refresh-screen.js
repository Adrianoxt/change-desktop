const { exec } = require("child_process");
const path = require("path");

const refreshWindowsScreen = () => {
  const scriptPath = path.join(__dirname, "refreshDesktop.ps1");

  exec(
    `powershell -ExecutionPolicy Bypass -File "${scriptPath}"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error st: ${stderr}`);
        return;
      }
      console.log(`Desktop Updated!`);
    }
  );
};

module.exports = refreshWindowsScreen;

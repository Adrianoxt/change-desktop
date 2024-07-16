import { exec } from "child_process";
import path from "path";

export const refreshWindowsScreen = () => {
  const scriptPath = path.join(__dirname, "scripts", "refreshDesktop.ps1");
  exec(
    `powershell -ExecutionPolicy Bypass -File "${scriptPath}"`,
    (error, _stdout, stderr) => {
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

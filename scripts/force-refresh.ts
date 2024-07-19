import { exec } from "child_process";
import path from "path";

export const forceRefresh = async () => {
  const scriptPath = path.join(__dirname, "scripts", "windows", "force-refresh.ps1");
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

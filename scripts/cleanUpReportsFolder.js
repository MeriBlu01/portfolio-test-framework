const fs = require("fs");
const path = require("path");

const projectRootPath = path.resolve(__dirname, "..");
//console.log(projectRootPath);

function cleanFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    console.log(`Cleaning in this path ${folderPath}`);
    fs.readdirSync(folderPath).forEach((file) => {
      const currentPath = path.join(folderPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        cleanFolder(currentPath); // Recursively clean subfolders
      } else {
        fs.unlinkSync(currentPath); // Delete file
      }
    });
  }
}

// Clean the reports and screenshots folders
cleanFolder(path.resolve(projectRootPath, "reports")); //join
// cleanFolder(path.join(projectRootPath, 'reports', 'screenshots'));

import fs from "fs";
import path from "path";

function listFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      listFiles(filePath, fileList);
    } else {
      fileList.push({
        file: filePath,
        created: stat.birthtime,
        modified: stat.mtime,
      });
    }
  });
  return fileList;
}

const result = listFiles("./src").sort((a, b) => a.created - b.created);
console.table(result);

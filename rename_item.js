const fs = require('fs');
const path = require('path');

const docsDir = path.resolve(__dirname, './docs');

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

function getFiles(srcPath) {
  return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isFile());
}

function sanitizeName(name) {
  // 删除空格和替换特殊字符
  return name.replace(/\s/g, '').replace(/[^a-zA-Z0-9\u4e00-\u9fa5._-]/g, '-');
}

function processDirectory(dirPath) {
  const subDirs = getDirectories(dirPath);
  const files = getFiles(dirPath);

  // 重命名目录
  subDirs.forEach(subDir => {
    const oldPath = path.join(dirPath, subDir);
    const newPath = path.join(dirPath, sanitizeName(subDir));
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
    }
    // 递归处理子目录
    processDirectory(newPath);
  });

  // 重命名文件
  files.forEach(file => {
    const oldPath = path.join(dirPath, file);
    const newPath = path.join(dirPath, sanitizeName(file));
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
    }
  });
}

function main() {
  const dirs = getDirectories(docsDir);

  dirs.forEach(dir => {
    if (dir === '.vitepress') return;  // 排除 .vitepress 目录
    const dirPath = path.join(docsDir, dir);
    processDirectory(dirPath);
  });
}

main();

const fs = require('fs');
const path = require('path');

const docsDir = path.resolve(__dirname, './docs');

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

function getMarkdownFiles(srcPath) {
  return fs.readdirSync(srcPath).filter(file => file.endsWith('.md'));
}

function encodeURIChars(str) {
    return str.replace(/\s/g, '%20').replace(/\?/g, '%3F');
  }
  
  function generateSidebarItem(dir, basePath = '') {
    const dirName = path.basename(dir);
    const newBasePath = basePath ? path.join(basePath, dirName) : dirName;
    const subDirs = getDirectories(dir);
    const mdFiles = getMarkdownFiles(dir);
  
    const items = mdFiles.map(file => {
    const fileTitle = file.replace('.md', '').trim();  // 移除 .md 和前后的空格

    // 使用修改后的 encodeURIChars 函数
    const fileLink = encodeURIChars(fileTitle);

    return {
        text: fileTitle,
        link: `${newBasePath}/${fileLink}`.replace(/\\/g, '/'),
    };
});
  
    const subdirItems = subDirs.map(subDir => {
      const subdirPath = path.join(dir, subDir);
      return generateSidebarItem(subdirPath, newBasePath);
    });
  
    return {
      text: dirName,
      items: items.concat(subdirItems),
    };
  }
  
    

function generateSidebarConfig(docsDir) {
  const dirs = getDirectories(docsDir);
  const sidebarConfig = {};

  dirs.forEach(dir => {
    const dirPath = path.join(docsDir, dir);
    if (dir === '.vitepress') return;
    const sidebarItem = generateSidebarItem(dirPath);
    sidebarConfig[`/${dir}/`] = [sidebarItem];
  });

  return sidebarConfig;
}

const sidebarConfig = generateSidebarConfig(docsDir);
fs.writeFileSync('sidebar-config.json', JSON.stringify(sidebarConfig, null, 2));

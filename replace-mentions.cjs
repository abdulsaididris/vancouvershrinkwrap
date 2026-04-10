import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory && f !== 'node_modules' && f !== '.git') {
            walkDir(dirPath, callback);
        } else if (!isDirectory) {
            callback(dirPath);
        }
    });
}

const exts = ['.ts', '.tsx', '.html', '.md', '.json'];
walkDir('.', function(filePath) {
    if (exts.includes(path.extname(filePath))) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/Vancouver/g, 'Vancouver')
            .replace(/vancouver/g, 'vancouver')
            .replace(/VANCOUVER/g, 'VANCOUVER');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated: ' + filePath);
        }
    }
});

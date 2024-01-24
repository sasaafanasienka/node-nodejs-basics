import path from 'node:path';
import { isPathExists, isPathMissed } from '../helpers/helpers.js';
import { renameSync } from 'node:fs';
const rename = async () => {
    const originPath = path.join('src/fs/files/wrongFilename.txt');
    const targetPath = path.join('src/fs/files/properFilename.md');
    // Write your code here 
    Promise.all([isPathExists(originPath), isPathMissed(targetPath)]).then((values) => {
        if (values.includes(false)) {
            throw Error('FS operation failed')
        }
        renameSync(originPath, targetPath)
    }).catch(error => {
        console.error(error)
    })
};

await rename();
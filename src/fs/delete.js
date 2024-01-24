import path from 'node:path';
import {isPathExists} from '../helpers/helpers.js';
import { rm } from 'node:fs/promises';
const remove = async () => {
    const originPath = path.join('src/fs/files/fileToRemove.txt');
    // Write your code here 
    isPathExists(originPath).then(res => {
        if (res === false) {
            throw Error('FS operation failed')
        }
        rm(originPath)
    }).catch(error => {
        console.error(error)
    })
};

await remove();
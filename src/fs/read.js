import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {isPathExists} from '../helpers/helpers.js';

const read = async () => {
    const originPath = path.join('src/fs/files/fileToRead.txt');
    
    isPathExists(originPath).then(async res => {
        if (res === false) {
            throw Error('FS operation failed')
        }
        const content = await readFile(originPath);
        console.log(content.toString())
    }).catch((error) => {
        console.error(error)
    })
    // Write your code here 
};

await read();

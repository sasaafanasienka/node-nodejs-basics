import {writeFile} from 'node:fs/promises';
import path from 'node:path';
import { isPathMissed } from '../helpers/helpers.js';

const create = async () => {
    const filePath = path.join('src/fs/files/fresh.txt');
    const content = 'I am fresh and young'

    isPathMissed(filePath).then(res => {
        if (res) {
            writeFile(filePath, content)
            console.log('File has been written')
        } else {
            throw Error('FS operation failed')
        }
    }).catch(error => {
        console.error(error)
        }
    )
};

await create();

import {readdir} from 'node:fs/promises';
import path from 'node:path';
import {isPathExists} from '../helpers/helpers.js';
const list = async () => {
    const originPath = path.join('src/fs/files');

    isPathExists(originPath).then(async res => {
        if (res === false) {
            throw Error('FS operation failed')
        }
        const list = await readdir(originPath)
        if (!list || !list.length) {
            throw Error('FS operation failed')
        }
        console.log(list.join(', '))
    }).catch((error) => {
        console.error(error)
    })
};

await list();
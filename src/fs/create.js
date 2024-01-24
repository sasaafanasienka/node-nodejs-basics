import {writeFile, access} from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
    const filePath = path.join('src/fs/files/fresh.txt');
    const content = 'I am fresh and young'

    const isFileMissed = async () => {
        try {
            await access(filePath)
            return false
        } catch (err) {
            return true
        }
    }

    isFileMissed().then(res => {
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
    // Write your code here 
};

await create();

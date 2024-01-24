import {writeFile, access} from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
    const filePath = path.join('src/fs/files/fresh.txt');
    const content = 'I am fresh and young'

    const isFileExists = async () => {
        try {
            await access(filePath)
            return true
        } catch (err) {
            return false
        }
    }

    isFileExists().then(res => {
        if (res) {
            throw Error('FS operation failed')
        } else {
            writeFile(filePath, content)
            console.log('File has been written')
        }
    }).catch(error => {
        console.error(error)
        }
    )
    // Write your code here 
};

await create();

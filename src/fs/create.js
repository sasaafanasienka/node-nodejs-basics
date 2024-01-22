import {writeFile, access} from 'node:fs/promises';
import path from 'node:path';

class Creator {
    constructor() {
        this.path = path.join('src/fs/files/fresh.txt');
        this.content = 'I am fresh and young'
    }

    fileExists = async () => {
        try {
            await access(this.path)
            return true
        } catch (err) {
            return false
        }
    }

    create = async () => {
        console.log(this.path)
        this.fileExists().then(res => {
            if (res) {
                throw Error('FS operation failed')
            } else {
                writeFile(this.path, this.content)
                console.log('File has been written')
            }
        }).catch(error => {
            console.error(error)
            }
        )
    };

}

const creator = new Creator()
creator.create();
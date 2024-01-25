import path from 'node:path';
import {createHash} from 'crypto';
import { createReadStream } from 'node:fs';


const calculateHash = async () => {
    const filePath = path.join('src/hash/files/fileToCalculateHashFor.txt');

    const readStream = createReadStream(filePath)
    let result = ''
    readStream.on('data', (data) => {
        result = result + data
    })
    readStream.on('end', () => {
        const hash = createHash('sha256')
        const hashString = hash.update(result).digest('hex')
        console.log(hashString)
    })
};

await calculateHash();
// import { createReadStream } from 'node:fs';
import { createReadStream } from 'node:fs';
import path from 'node:path';
const read = async () => {
    const filePath = path.join('src/streams/files/fileToRead.txt');

    const readStream = createReadStream(filePath)
    

    let result = ''
    readStream.on('data', (data) => {
        result = result + data
    })
    readStream.on('end', () => {
        process.stdout.write(result);
    })
};

await read();
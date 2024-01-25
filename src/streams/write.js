import { createWriteStream } from 'node:fs';
import path from 'node:path';
const write = async () => {
    const filePath = path.join('src/streams/files/fileToWrite.txt');
    const writableStream = createWriteStream(filePath)
    process.stdin.on('data', (data) => {
        if (data.toString().trim() === 'exit') {
            process.exit(1)
        }
        writableStream.write(data);
    })
    // Write your code here 
};

await write();